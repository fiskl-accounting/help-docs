---
title: Understanding Journal Entries
sidebar_position: 3
description: Master the art of creating and managing journal entries in Fiskl to ensure accurate and detailed financial records.
keywords: ["journal entries", "transaction management", "Fiskl accounting"]
slug: /accounting/core-features/journal-entries/understanding-journal-entries
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Journal entries
  - Financial reports
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Journal entries also referred to as `Account transactions` and are the foundation of your accounting system. Journal entries are the record of all financial transactions in your business. You can think of the [Chart of Accounts](../chart-of-accounts.md) as your folder structure and journal entries as the transactions within them.

## How Fiskl handles journal entries

Fiskl is an intuitive double-entry accounting system built with the business owner in mind while ensuring accountants have a fully featured accounting platform to process their clients accounts.

<details>
<summary>Learn more about the journal entry capabilities</summary>

1. **Multi-currency support**: Full multi-currency support. cross-currency matching, splitting and internal transfers, multi-currency Chart of Accounts and full multi-currency reporting
1. **Automatic creation**: Most journal entries are created automatically when you record transactions like sales, purchases, or bank transfers. Accounts Receivables are automatically managed for invoices and payments. Banking feeds and imports automatically generate their respective journal entries
1. **Real-time**: All reports and balances are generated in real-time. There is no possibility of stale data in your financial reports or balances
1. **Fully featured on mobile**: You can view and manage journal entries from both the web interface and mobile app
1. **Accounting methods**: You can switch between cash and accrual without any effect to the underlying data due to our real time approach

</details>

## Types of journal entries

Fiskl supports several types of journal entries to cover all your accounting needs.

<details>
<summary>Learn more about the different types of journal entries </summary>

1. **Standard journal entries**: For regular income and expense transactions
1. **Multi journal entries**: For accountants to create several entries in one transaction
1. **Split transactions**: When a single transaction affects multiple accounts
1. **Matched transactions**: For reconciling bank statements with your records
1. **Internal transfers**: For moving money between your own accounts
1. **Multi-currency transactions**: For dealing with different currency transactions
1. **Opening Balances**: To set up your initial account balances when starting

</details>

## Creating and managing journal entries

While Fiskl automates much of the process there are many reasons why you would need to manually create and edit journal entries.

<Tabs>
  <TabItem value="businessOwner" label="Business owner" default>

  As the business owner you would typically be adding journal entries directly to your accounts in `Cash & Cash Equivalents` and `Credit Cards`.

   **Journal entry guides**

  - See how to [create a manual](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create a split](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create a matched](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Accounts Receivable](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Accounts Payable](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Opening Balance](Journal-Entry-Guides/create-manual-transactions.md)

  </TabItem>
    <TabItem value="accountant" label="Accountant" default>

 As an accountant you can add journal entries as you would in any other accounting system. But in Fiskl, for transactions involving `Cash & Cash Equivalents` and `Credit Cards` you need to add them from these accounts.

 For example if you were adding a `Travel - Accommodation` expense to `Cash on Hand` you would create this in `Assets > Cash & Cash Equivalents > Cash on Hand` and select the `Travel - Accommodation` category.

 Alternatively, if there was an expense created in Fiskl you would match this expense from `Assets > Cash & Cash Equivalents > Cash on Hand`.

For making adjustments or for a more accountant familiar feel you can use the [Multi journal entry](./multi-journal-entries.md) which also supports multi-currency.

 **Journal entry guides**

 - Learn more about [multi journal entries](./multi-journal-entries.md)
  - See how to [create a manual](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create a split](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create a matched](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Accounts Receivable](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Accounts Payable](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an opening balance](Journal-Entry-Guides/create-manual-transactions.md)

  </TabItem>

  </Tabs>


:::info[tip]
When adding or viewing a transaction we add a `CR` or `DR` under the category which has a very useful tool tip explaining which account is being credited and which is being debited. (e.g., **Credits** `Bank Account` and **Debits** "Cost of Goods Sold")
:::

## Viewing journal entries

You can view your transactions in their individual accounts. This is useful if you are viewing them with the intent of making adjustments.

For a bigger picture on your transactions you can use the [Transactions by Account](../Reports/transactions-by-account.md) report.

Depending on your reason you can use the reports like [Balance Sheet](../Reports/balance-sheet.md) or [Profit and Loss (P&L)](../Reports/profit-and-loss.md).

:::info[tip]
Setting the reports to **detailed** allows you to drill down to transaction level.
:::

:::info
Remember, Fiskl's accounting reports draw directly from these journal entries, so keeping them accurate ensures your reports are always up-to-date and reliable.
:::

## Cheat sheet

![Debit Credit sheet](/img/acounting/account-table.png)

## Next steps

Now that you understand the basics of journal entries in Fiskl, you might want to explore:

  - Setting up your Chart of Accounts [CoA](../chart-of-accounts.md) transaction
  - See how to [create a manual](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create a split](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create a matched](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Accounts Receivable](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an Accounts Payable](Journal-Entry-Guides/create-manual-transactions.md) transaction
  - See how to [create an opening balance](Journal-Entry-Guides/create-manual-transactions.md)
  - Learn more about [multi journal entries](./multi-journal-entries.md)
