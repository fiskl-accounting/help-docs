---
title: Working with Accounts Payable
sidebar_position: 10
description: "Streamline your Accounts Payable process with Fiskl: Track liabilities, manage cash flow, and optimize payment schedules effortlessly."
keywords: ["Create AP transactions Fiskl", "Accounts Payable", "liability tracking", "financial management"]
slug: /accounting/core-features/journal-entries/guides/accounts-payable-transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Accounting
 - Journal entry
 - Accounts Payable
---

Accounts Payable (AP) is a key component in accrual accounting.

AP is a record of what your business owes to suppliers or vendors. It includes goods or services you've bought on credit but haven't paid for yet. In Fiskl, the AP account helps you track these amounts in multiple currencies, displaying the total in your base currency. This way, you can easily see how much you need to pay without any surprises.

<details>
<summary>Why is managing Accounts Payable important?</summary>

Proper AP management helps you:
- Track your short-term obligations
- Accurately report your financial position
</details>

:::tip
If the balance in your Accounts Payable account is zero, it means you currently have no future payments or liabilities recorded.
:::


## Creating an AP transaction

To record a new Accounts Payable transaction:

<details>
<summary>Take an interactive walkthrough of creating an accounts payable transaction</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm0to7dr7000gl60cstgelqbl/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

1. Go to `Accounting > Transactions` from the left menu
1. Select "Accounts Payable" from the account list
1. Click "+In Credit" to create a new AP transaction
1. Enter the transaction details:
   - Name
   - Category
   - Amount
   - Currency (if different from base currency)
   - Vendor
   - Reference number (optional)
   - Description (optional)
1. Attach any relevant documents by clicking the attachment button
1. Click "Create" to save the transaction

Your new AP transaction will now appear in the Accounts Payable list and the corresponding expense account.

## Matching AP transactions with payments

<details>
<summary>Take an interactive walkthrough of matching an accounts payable transaction</summary>

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm0wgvisu0001l20cj12y07xb/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

When you pay an AP transaction, you need to match it with the payment in your bank or credit card account:

1. Go to the relevant bank or credit card account
1. Find the relevant transaction
1. Select "Show matches"
1. Choose the corresponding AP transaction from the list
1. Select "Update" to confirm the match

In the Accounts Payable section, you will find two transactions associated with this transaction. The initial transaction logs the future expense, while the subsequent transaction records its payment. Consequently, the outstanding balance for this payable is zeroed out. These updates are reflected in the account transactions and are visible on your Balance Sheet, Transactions by Account and Trial Balance reports.

## Working with foreign currency AP transactions

Fiskl supports AP transactions in multiple currencies:

1. When creating an AP transaction, select the appropriate currency
1. The transaction will display both the foreign and base currency amounts
1. When matching, you will be presented with matches in all currencies. You can filter these to specific currencies using the currency selector
1. Select the correct match, and adjust the exchange rate if necessary

For payments covering multiple foreign currency invoices:

1. Select all relevant matches from the list
1. Use the "Auto-adjust FX rate" option to proportionally adjust exchange rates if needed
1. Click "Create" to finalize the matched transaction

## Splitting AP transactions

You can split a single AP transaction across multiple categories, currencies, or vendors:

1. Create or open an AP transaction
1. Click "Split"
1. Add details for each split:
   - Amount
   - Category
   - Currency (if different)
   - Tax information (if applicable)
   - Vendor (if different)
   - Client (if applicable)
1. The "Difference" field shows any remaining amount to be allocated
1. Click "Create" to save the split transaction

Each split will appear in its respective account, providing detailed transaction tracking.

Remember, accurate AP management is crucial for maintaining your business's financial health and relationships with suppliers.
