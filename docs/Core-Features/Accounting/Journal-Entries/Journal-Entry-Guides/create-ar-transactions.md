---
title: Working with Accounts Receivable
sidebar_position: 12
description: Create Accounts Receivable (AR) transactions
slug: /accounting/core-features/journal-entries/guides/accounts-receivable-transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Journal Entry
---

Accounts Receivable (AR) is a key component in accrual accounting.

AR is a record of money owed to your business by customers for goods or services you've provided but haven't been paid for yet. In Fiskl, the AR account automatically tracks these amounts in multiple currencies, displaying the total in your base currency. This gives you a clear overview of the payments you're expecting to receive.

<details>
<summary>Why is managing Accounts Receivable important?</summary>

Proper AR management helps you:

- Track money owed to your business
- Manage cash flow effectively
- Accurately report your financial position

</details>

:::tip
If the balance in your Accounts Receivable account is zero, it means all your invoices have been paid, and you currently have no outstanding customer payments to collect.
:::

## How Fiskl handles AR transactions

Account Receivable transactions are generated automatically for invoices and invoice payments but can also be added manually.

### How Fiskl handles AR transactions for invoicing

Fiskl simplifies the management of your Accounts Receivable for invoices and their payments:

1. **Invoice creation**: Each time you generate an invoice, Fiskl automatically creates an Accounts Receivable (AR) record. This AR entry is an asset, representing the income you expect to receive from your customer
1. **Receiving payments**: When a payment is received for an invoice, whether it's partial or in full, Fiskl automatically updates the AR transactions to reflect the payment, reducing the outstanding balance accordingly"

This automation ensures your AR is always up-to-date and accurately reflects your outstanding customer payments.

### How Fiskl handles AR transactions manually

You can also record manual AR that record payments expected in the future.

You can enter an AR transaction in any currency and can also split the transaction into multiple accounts.

<details>
<summary>Real world example of an Accounts Receivable with splits in non-base Currency</summary>

You are invited to speak at a conference abroad and are being paid in a currency different from your base currency.

Suppose the contract stipulates a total payment of €3000 EUR. Of this amount, €2500 is allocated for your speaking engagement, classified as 'Sales of Services,' and the remaining €500 is for merchandise you are selling at the event, categorized under `Sales of Products`.

Splitting these transactions in your Accounts Receivable not only allows you to accurately track revenue streams but also manages the complexities of foreign currency transactions.

This separation helps in analyzing the profitability of different business activities and is crucial for accurate financial reporting, strategic financial planning, and tax preparation in your base currency.

</details>


## Viewing AR transactions

View your Accounts Receivable transactions in many ways:

1. Go to `Accounting > Transactions` from the left menu and choose `Accounts Receivable`
1. Go to ``Accounting` > `Chart of Accounts`` from the left menu and choose `Accounts Receivable`
1. In your accounting reports
    1. Go to `Accounting` > `Reports` from the left menu and choose `Balance Sheet` and select the detailed option.
    1. Go to `Accounting` > `Reports` from the left menu and choose `Transactions by Account`.
    1. Go to `Accounting > Reports` from the left menu and choose `Trial Balance`.

## Understanding AR transaction types

In your Accounts Receivable list, you'll see two main types of transactions:

1. **In debit**: These are invoices you've sent to customers, increasing your AR balance
2. **In credit**: These are payments received from customers, decreasing your AR balance

## Matching AR transactions

As with Accounts Payable you can also match your Accounts Receivable transactions.

:::note
It's not possible to manually match your invoice AR transactions as this is done automatically by Fiskl.
:::

<details>
<summary>Take an interactive walkthrough of matching an Accounts Receivable transaction</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/clzr4hbwb00mcjr0cbpv6zex9/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>


Remember, effective AR management is crucial for maintaining healthy cash flow and strong customer relationships. Fiskl's automatic AR handling simplifies this process, allowing you to focus on growing your business.
