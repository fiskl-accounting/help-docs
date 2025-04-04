---
title: Accounting FAQs
sidebar_position: 4
description: Navigate financial management confidently with Fiskl's accounting FAQs. Find quick answers to common questions and optimize your processes.
keywords: ["Accounting FAQs Fiskl", "financial management", "small business accounting", "common questions"]
slug: /faq/accounting
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Accounting
---

## General Accounting Questions

### Is Fiskl a double-entry accounting system?

Yes, Fiskl is a double-entry, multi-currency accounting platform. This ensures accurate and balanced financial records for your business.

For more information, see our [Accounting Core Features](/docs/category/core-features).

### Can I customize my Chart of Accounts in Fiskl?

Yes, you can customize your Chart of Accounts to fit your business needs. Here's how:

1. Go to your Chart of Accounts
2. Click the plus button next to the account you want to add a category to
3. Enter the new category details

For more details, see [Managing your Chart of Accounts](/docs/core-features/accounting/chart-of-accounts).

### How do I delete an account from my Chart of Accounts?

To remove an account:

1. Go to Chart of Accounts
2. Click "Archive" next to the account you want to remove

:::note

- If the account has no transactions, it will be deleted
- Accounts with transactions will be moved to the Archived folder
- Archived accounts remain active in accounting, and their transactions still count towards your company accounts
- Archived accounts are not available in the account selector
- You cannot delete a default system account (eg. all accounts displayed under Operating Income), however, you can rename it.

:::

## Transactions and Payments

### What's the best way to handle an invoice overpayment in Fiskl?

To manage an invoice overpayment:

1. Create a new account:
   - Go to Chart of Accounts
   - Under "Other current assets", create a new account called "Overpayment received"

2. Record the overpayment:
   - In the bank account where you received the payment, click on the transaction
   - Select "Match"
   - Choose the invoice and add a line for the difference (overpayment)
   - Assign the category "Overpayment received"

3. Refund the client:
   - Pay your client back from the bank account
   - Select the refund transaction in the bank account
   - Assign the "Overpayment received" category

This process ensures the overpayment received account reflects a net zero balance.

### How do I record bad debts in Fiskl?

To record bad debts:

1. Mark the invoice as paid using the Cash on Hand account
2. In the Cash on Hand account:
   - Create an OUT entry
   - Select the Bad Debts expenses account

This process will:

- Zero out your Cash on Hand account balance
- Show Bad Debts expenses in your Profit and Loss statement
- Close the Accounts Receivable (AR) invoice status
- Remove the AR balance

### Can I predefine categories for vendors or clients?

Currently, Fiskl doesn't support assigning categories directly to Clients or Vendors. However, you can:

- Customize your Chart of Accounts
- Assign custom categories to Products, Services, Time, and Mileage

We're continually improving Fiskl, so stay tuned for future updates!

### Can bank rules be auto reconciled without having to approve the set rules?

Fiskl’s AI streamlines bank reconciliation by automatically suggesting relevant categories. You can quickly review and confirm transactions in batches, making the process faster and more efficient.

### Why aren't all my expenses reflected in my accounting reports?

Expenses in Fiskl can be in two states:

1. **Standalone Expenses**: These are expenses you've recorded but haven't yet reconciled with your accounting. They don't appear in your dashboard or reports.

2. **Reconciled Expenses**: These are expenses that have been matched with transactions in your accounting and will appear in your dashboard and reports.

To ensure your expenses are included in your accounting:

- If you've recorded a standalone expense, you need to reconcile it with a transaction in your bank, credit card, or cash account.
- If you're adding expenses directly to your ledger accounts, they will automatically be included in your accounting.

For a detailed explanation of how to record and reconcile expenses, please see our [How to Record Expenses tutorial](/docs/tutorials/accounting/how-to-record-expenses).

### Why do I not see my expenses in my P&L report or dashboard?

Expenses added via the `Expense` section will not automatically appear in your [P&L](/docs/core-features/accounting/reports/profit-and-loss) or any reports or on the dashboard until they are reconciled. The Expenses are a section to capture the Expense to be reconciled with an accounting transaction or billed to a client as part of an expense.

To learn more about how to record and reconcile expenses, please see our [How to Record Expenses tutorial](/docs/tutorials/accounting/how-to-record-expenses).

### Why can't I add an expense directly to an Expense Ledger Account?

In Fiskl, you can only add expense transactions through [Money Accounts](/docs/Tutorials/Banking/how-to-import-bank.md#understanding-money-accounts-in-fiskl). Here's how it works:

1. Record the transaction in the appropriate Money Account:
   - For bank payments: `Assets > Cash & Cash Equivalence > [Your Bank Name]`
   - For credit card payments: `Liabilities > Credit Card > [Your Credit Card Name]`

2. Categorize the transaction within the Money Account:
   - Assign the correct expense category (e.g., "Travel Expense")

Example:

If you paid for an airline ticket using your Chase bank account:

1. Find the transaction in `Assets > Cash & Cash Equivalence > Chase Bank`
2. Categorize it as "Travel Expense" within the Chase Bank ledger

This method ensures accurate tracking of both your expenses and the accounts they're paid from.

Can I bulk categorize my accounting transactions?
Currently, we've temporarily disabled the bulk categorization feature. We're enhancing our system to ensure more accurate categorization, given the complex rules and conditions in accounting.

While we work on improvements, you can use this alternative method:

1. Categorize a single transaction
2. Set required vendors and clients for that category
3. The system will suggest similar matches for current and future transactions. The more you scroll through your current transactions, the more suggestions you will get
4. You can then review and accept these suggestions in bulk

We're prioritizing accuracy and plan to reintroduce bulk categorization gradually, starting with easier matches. We appreciate your patience as we work to provide you with a more reliable and efficient categorization process.

### How do I make my expenses recurring?

Recurring expenses aren’t available yet, but they’re on our roadmap. For now, you need to enter them as and when they occur. [Accounts Payable](docs/core-features/accounting/journal-entries/guides/accounts-payable-transactions#understanding-accounts-payable).

###How do I un-reconcile a transactions

To un-reconcile a transaction, go to the account (e.g., bank account), open the transaction, click ‘Delete’ on the matched line near the bottom, and save. The transaction will remain in the account but will be unreconciled.

### How do I record a purchase (eg. computer) as a fixed asset in Fiskl.

You have two available options:
- Record the transaction under Assets > Property, Plant & Equipment > Computer Equipment as generally this type of asset is subject to depreciation.
- You can create a custom Fixed Asset account under Other Current Assets, called Fixed Assets, but option 1 is the best given this type of asset.

## Reporting

### Can I send statements to my clients showing outstanding invoices and payments?

Yes, you can generate a [Statement of Accounts](/docs/core-features/accounting/reports/statement-of-accounts) report. This report provides a comprehensive view of your client's account, including:

- Outstanding invoices
- Payments received
- Current balance

To generate this report:

1. Go to Reports
2. Select "Statement of Accounts"
3. Choose the client and date range
4. Generate and send the report

## Still Have Questions?

If you couldn't find the answer you're looking for, please don't hesitate to [contact Fiskl support team](mailto:support@fiskl.com). We're here to help!
