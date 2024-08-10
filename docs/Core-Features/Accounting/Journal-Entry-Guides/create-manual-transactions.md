---
title: Create manual transactions
sidebar_position: 4
description: Create manual IN/OUT Debit/Credit transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Journal Entry
---

Journal entries are

| **Account Type** | **Debit** | **Credit** |
|------------------|-----------|------------|
| **Assets**       | +         | -          |
| **Liabilities**  | -         | +          |
| **Equity**       | -         | +          |

## Journal Entries in Fiskl

Journal entries are the backbone of your accounting system in Fiskl. In many cases they are created automatically.

<details>

<summary>See some examples of automatically created journal entries  </summary>

- Transactions are received from connected bank accounts
- You import your bank transactions
- Invoices are sent or paid
- Expenses are recorded
- Payments are processed

</details>

While automation handles many transactions, there are several reasons why you might need to add manual transactions:

<details>

<summary>See some examples of manually creating journal entries  </summary>

- Recording cash transactions
- Adjusting entries at month-end or year-end
- Depreciation of assets
- Accruals for unpaid expenses or unearned revenue
- Recording non-monetary transactions like bartering
- Correcting errors in previously recorded transactions
- Creating Opening and Closing balances

</details>

This guide will walk you through creating manual transactions in Fiskl.

### For Business Owners

As a business owner, you'll primarily work with what we loosely term "Money Accounts".

These are the accounts where money flows into and out of your company and include all sub-accounts in `Cash & Cash Equivalents` and `Credit Cards`.
Almost all your day to day accounting take place in these accounts.

Whenever you need to reconcile, edit, or add a transaction, you'll mostly start here.

:::info[Business Owner TIP]
Always start at the money accounts. For example if you are going to reconcile an Expense start where the money moved out of your company. You would typically go to `Cash & Cash Equivalents > Your bank account` find the transaction and then categorize or match it to an expense from here.
:::

### Cheat Diagram for Debits and Credits

![alt](/img/acounting/account-table.png)

### For Accountants

Accountants may need to add manual transactions for various purposes:

- Reconciling accounts
- Making year-end adjustments
- Recording complex transactions that span multiple accounts
- Implementing accounting changes or corrections

Fiskl offers two methods for adding manual transactions:

1. Directly into specific ledger accounts
2. Using the multi-journal entry page, where you can enter multiple transactions across various accounts in one session

The multi-journal entry feature is particularly useful for accountants dealing with complex entries or batch processing of transactions.

Whether you're a business owner or an accountant, Fiskl's flexible journal entry system allows you to maintain accurate and up-to-date financial records with ease.
