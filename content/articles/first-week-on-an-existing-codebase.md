---
title: What I do in my first week on your codebase
date: 2026-11-02
description: Bringing in a contract engineer shouldn't cost you a month of onboarding. Here's how I get productive on an existing product within the first week, and what you get out of it.
tags: Contracting, Process, Engineering
---

Founders and agency leads usually worry about the same thing when they bring in outside help: *how long before this person is useful?* It's a fair concern. A contractor who spends three weeks "getting familiar" is three weeks of budget gone.

This is how I approach the first week, so you know what to expect.

## Day 1: get it running and write down every snag

I clone the repo and follow the README exactly as written. Every missing environment variable, undocumented seed script and "oh, you also need to run this" goes into a list.

That list is the first useful thing I give you. The next person you hire will go through the same pain, and fixing the setup docs costs an hour.

## Day 1-2: read the data model before the code

The database schema tells you what the business actually is. Before I open a single component, I read the Prisma schema or migrations and sketch the main entities and how they relate. It's the fastest way to understand a product and to spot problems such as missing constraints, ambiguous status fields or tenant data without a tenant key.

## Day 2: follow one request from start to finish

I pick the most important user action, such as checkout, sign-up or submitting a form, and follow it from the button to the database and back. Along the way I learn the folder conventions, how errors are handled, where validation lives and how auth works.

## Day 2-3: find out how code reaches production

- How does code get to production?
- Is there a staging environment, and does it look like production?
- Who can deploy, and how do you roll back?
- Where do logs and errors go?

If the honest answer is "someone runs a script from their laptop", it's worth knowing before anything ships.

## Day 3-4: find the scary parts

Every codebase has a few files everyone avoids touching. I look for business-critical paths with no tests, such as payments, permissions and data exports, and note them. I don't rewrite them yet. I just make sure we both know where the risk is.

## By day 5: ship something small to production

It might be a bug fix, a small feature or a test around the payments flow. The goal is to go through your whole delivery process once, including review, CI and deploy, while the stakes are low.

## What you get at the end of the week

A one-page **state-of-the-codebase note**:

1. What's solid and shouldn't be touched
2. The top three risks, ordered by business impact
3. Quick wins that would speed the team up
4. How I'd approach the work you brought me in for, and whether the estimate has changed

Even if we only work together for a month, you keep that note.

---

*If you have a product that needs another engineer, or an agency project that needs more capacity, [get in touch](/#contact).*
