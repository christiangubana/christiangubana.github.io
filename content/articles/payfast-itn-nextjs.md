---
title: Verifying PayFast payments in Next.js without getting burned
date: 2026-10-05
description: The return URL is not proof of payment. Here's how to handle PayFast's ITN properly, with signature checks, server validation, amount matching and idempotency.
tags: Payments, PayFast, Next.js, Node.js
---

PayFast is the default way to take card and EFT payments in South Africa, and its redirect checkout is simple to start with. The hard part comes after the customer pays, when you have to decide whether the order really was paid.

I've seen stores mark orders as paid on the `return_url`, the page PayFast sends the shopper back to. Don't do this. Anyone can visit that URL. The only trustworthy signal is the **ITN (Instant Transaction Notification)**, which PayFast sends server-to-server to your `notify_url`.

Here is the checklist I use when building the ITN handler for a store.

## 1. Read the raw body and keep the field order

PayFast posts `application/x-www-form-urlencoded` data. The signature is computed over the fields **in the order they were sent**, so parse the raw body yourself rather than relying on a framework that turns it into an object and might reorder it.

In a Next.js API route (pages router), turn off the built-in body parser:

```ts
// pages/api/payfast/notify.ts
import type { NextApiRequest, NextApiResponse } from "next";

export const config = { api: { bodyParser: false } };

async function readRaw(req: NextApiRequest): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  return Buffer.concat(chunks).toString("utf8");
}
```

## 2. Verify the signature

The signature is an MD5 hash of every posted field except `signature`, joined as `key=value&key=value`, with your passphrase appended if one is set on the account.

The encoding must match PHP's `urlencode`: spaces become `+`, hex escapes use upper case, and characters such as `!'()*` are escaped. JavaScript's `encodeURIComponent` leaves those characters alone, so you need a small adjustment:

```ts
import crypto from "crypto";

const phpEncode = (v: string) =>
  encodeURIComponent(v)
    .replace(/[!'()*]/g, c => "%" + c.charCodeAt(0).toString(16).toUpperCase())
    .replace(/%20/g, "+");

function validSignature(raw: string, passphrase?: string) {
  const pairs = new URLSearchParams(raw);
  const received = pairs.get("signature");
  const parts: string[] = [];

  pairs.forEach((value, key) => {
    if (key !== "signature") parts.push(`${key}=${phpEncode(value.trim())}`);
  });
  if (passphrase) parts.push(`passphrase=${phpEncode(passphrase.trim())}`);

  const expected = crypto.createHash("md5").update(parts.join("&")).digest("hex");
  return received === expected;
}
```

## 3. Confirm with PayFast's server

A valid signature only proves the payload wasn't altered. You should still ask PayFast to confirm the notification by posting the same parameters back to the validate endpoint (`/eng/query/validate` on the live or sandbox host) and checking that the response body is `VALID`.

PayFast also publishes the hostnames its notifications come from. If your hosting gives you a reliable client IP, check that the request came from one of them.

## 4. Match the amount and the order

Look up your order with `m_payment_id`, the reference you sent when you created the payment. Then check:

- `amount_gross` equals the order total you calculated on the server, not a value sent from the browser.
- `payment_status` is `COMPLETE` before you fulfil the order.
- The order hasn't already been marked as paid.

## 5. Make it idempotent

PayFast can send the same ITN more than once. Store `pf_payment_id` with a unique constraint and treat a duplicate as success. If you don't, a retry can trigger a second fulfilment email or decrement stock twice.

## 6. Reply quickly and do the slow work after

Return `200` quickly. Send emails, update stock and call other services after the payment is recorded, ideally from a queue or background job. If the handler is slow or throws an error, PayFast retries it, which is exactly the case step 5 protects against.

## The short version

| Check | Why |
| --- | --- |
| Raw body, original order | The signature depends on field order |
| MD5 signature with PHP-style encoding | Proves the payload wasn't modified |
| Server validation returns `VALID` | Proves the notification came from PayFast |
| Amount and order match | Stops underpayment and replayed references |
| Unique `pf_payment_id` | Retries don't double-fulfil |
| Never trust `return_url` | Anyone can visit it |

Getting this right takes an afternoon, and getting it wrong is how a store ends up shipping goods it was never paid for.
