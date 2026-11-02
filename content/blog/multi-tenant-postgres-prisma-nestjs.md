---
title: Multi-tenant SaaS on PostgreSQL, Prisma and NestJS: how I keep tenants apart
date: 2026-11-02
description: Database per tenant, schema per tenant, or a shared schema with row-level security? The trade-offs I weigh when building multi-tenant platforms, plus a working Prisma and RLS setup.
tags: SaaS, PostgreSQL, Prisma, NestJS, Architecture
---

The most expensive bug a B2B SaaS can ship is one customer seeing another customer's data. On platforms like [FloorTick](https://www.floortick.com/), where each manufacturer's compliance records have to stay private, tenant isolation has to be designed in from the start rather than left as a convention.

These are the options I weigh and the setup I reach for by default.

## The three common models

| Model | Isolation | Operational cost | Good fit |
| --- | --- | --- | --- |
| Database per tenant | Strongest | High: migrations, connections and backups for each tenant | A handful of large, regulated customers |
| Schema per tenant | Strong | Medium: migrations run N times and the connection pool gets complicated | Tens of tenants with a need for strict separation |
| Shared schema with `tenant_id` | Depends on enforcement | Low | Most SaaS products, from tens to many thousands of tenants |

For most products the shared schema wins on cost and simplicity. Its weakness is that isolation depends on every query remembering `WHERE tenant_id = ?`, and one forgotten filter is enough to leak data.

So I enforce the boundary in **two places**: once in the application and once in the database.

## Layer 1: tenant context in NestJS

Resolve the tenant once per request from the authenticated user, never from a header the client can change, and store it in request-scoped context. `AsyncLocalStorage` (or the `nestjs-cls` package, which wraps it) makes it available deep in the call stack without passing it through every function.

```ts
// tenant.middleware.ts
@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly cls: ClsService) {}

  use(req: Request, _res: Response, next: NextFunction) {
    const tenantId = req.user?.tenantId; // set by your auth guard
    if (!tenantId) throw new UnauthorizedException();
    this.cls.set("tenantId", tenantId);
    next();
  }
}
```

## Layer 2: row-level security in PostgreSQL

Row-level security (RLS) makes the database itself refuse rows that belong to another tenant, even if the application code forgets a filter.

```sql
ALTER TABLE checklist ENABLE ROW LEVEL SECURITY;
ALTER TABLE checklist FORCE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON checklist
  USING (tenant_id = current_setting('app.tenant_id')::uuid)
  WITH CHECK (tenant_id = current_setting('app.tenant_id')::uuid);
```

Two details catch people out:

- **Table owners bypass RLS** unless you add `FORCE ROW LEVEL SECURITY`.
- The role your app connects as must not be a superuser or have `BYPASSRLS`. Run migrations as one role and serve traffic as another.

## Connecting the two with a Prisma client extension

Prisma doesn't set session variables for you, but a client extension can wrap every query in a transaction that sets `app.tenant_id` first. Using `set_config(..., true)` scopes the value to that transaction, so it can't leak to the next request that reuses the pooled connection.

```ts
import { Prisma } from "@prisma/client";

export function forTenant(tenantId: string) {
  return Prisma.defineExtension(prisma =>
    prisma.$extends({
      query: {
        $allModels: {
          async $allOperations({ args, query }) {
            const [, result] = await prisma.$transaction([
              prisma.$executeRaw`SELECT set_config('app.tenant_id', ${tenantId}, TRUE)`,
              query(args),
            ]);
            return result;
          },
        },
      },
    })
  );
}

// in a request-scoped service
const db = this.prisma.$extends(forTenant(this.cls.get("tenantId")));
const lists = await db.checklist.findMany(); // only this tenant's rows
```

## Schema habits that pay off later

- Put `tenant_id` on **every** tenant-owned table, including child tables. RLS policies should not need joins.
- Make unique constraints composite, for example `@@unique([tenantId, slug])`. Two tenants are allowed to have the same slug.
- Put `tenant_id` first in your indexes, because almost every query filters on it.
- Write an automated test that signs in as tenant A, tries to read tenant B's records, and expects nothing back. Run it in CI.

## When to break the rules

If one customer needs data residency, its own encryption keys or a contract that requires physical separation, move that tenant to its own database. A shared schema with RLS doesn't stop you from doing that later; it just means you only pay for full separation when a customer needs it.
