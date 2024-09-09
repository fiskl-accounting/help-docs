---
title: Accounting FAQs
sidebar_position: 4
description: Navigate financial management confidently with Fiskl's accounting FAQs. Find quick answers to common questions and optimize your processes.
keywords: ["Accounting FAQs Fiskl", "financial management", "small business accounting", "common questions"]
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Accounting
---

# Accounting FAQs

## General accounting questions

### Is Fiskl a double-entry accounting system?

Yes, Fiskl is a double-entry, multi-currency accounting platform. This ensures accurate and balanced financial records for your business.

For more information, see our [Accounting Core Features](/docs/category/accounting).

### Can I customize my Chart of Accounts in Fiskl?

Yes, you can customize your Chart of Accounts to fit your business needs. Here's how:

1. Go to your Chart of Accounts
2. Click the plus button next to the account you want to add a category to
3. Enter the new category details

For more details, see [Managing your Chart of Accounts](../Core-Features/Accounting/chart-of-accounts.md).

### How do I delete an account from my Chart of Accounts?

To remove an account:

1. Go to Chart of Accounts
2. Click "Archive" next to the account you want to remove

:::note

- If the account has no transactions, it will be deleted
- Accounts with transactions will be moved to the Archived folder
- Archived accounts remain active in accounting, and their transactions still count towards your company accounts
- Archived accounts are not available in the account selector

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
   - Assign the category "Overpayments received"

3. Refund the client:
   - Pay your client back from the bank account
   - Select the refund transaction in the bank account
   - Assign the "Overpayments received" category

This process ensures the overpayments received account reflects a net zero balance.

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

## Reporting

### Can I send statements to my clients showing outstanding invoices and payments?

Yes, you can generate a [Statement of Accounts](../Core-Features/Accounting/Reports/statement-of-accounts) report. This report provides a comprehensive view of your client's account, including:

- Outstanding invoices
- Payments received
- Current balance

To generate this report:

1. Go to Reports
2. Select "Statement of Accounts"
3. Choose the client and date range
4. Generate and send the report

## Still have questions?

If you couldn't find the answer you're looking for, please don't hesitate to [contact Fiskl support team](mailto:support@fiskl.com). We're here to help!
