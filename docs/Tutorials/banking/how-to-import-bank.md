---
title: How to Import Bank Transactions
sidebar_position: 3
description: How to manually import your banking transactions
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Tutorials
  - Banking
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Importing banking data into Fiskl

You can import your bank statements into Ledger Accounts in `Cash & Cash Equivalents` or `Credit Cards`.

:::info[Business Owner TIP]
We loosely term `Cash & Cash Equivalents` and `Credit Cards` accounts as `Money accounts`.

`Money accounts` in Fiskl are all the sub-accounts in `Cash & Cash Equivalents` and `Credit Cards`, and as a business owner, it's in these `Money accounts` that you will do 90% of your accounting.

Whenever you need to reconcile, edit or add a transaction, you mostly start in these accounts.
:::

:::info
Ideally, you should automatically import your transactions using our [banking](../../Integrations/Bank-Connections/_category_.json) feature.

However, there are times when manually importing bank transactions is useful:

- When your bank is not supported by any of the banking aggregators
- When you need more historical data than the bank connections provide
- If you don't like using third parties and don't mind importing manually

:::

## Types of imports

There are three file formats that we support for importing bank transactions:

`CSV`: Is the most common and the most challenging. With CSV, you will need to choose the columns and date formats. Don't worry, we have a utility to make this easier.

`OFX`: OFX is a banking standard and the easiest to import. With OFX, you can just upload the file and import.

`QIF`: QIF is a wrapper of OFX and just another popular standard.

:::info[TIP]
The general rule of thumb is to use OFX if possible.
:::

## Importing your banking transactions

The general steps to importing your bank transactions are:

1. Export your banking data from your bank
2. In Fiskl, create a `Ledger Account` in `Cash & Cash Equivalents` or `Credit Cards` if you are importing credit card transactions. See [Create Bank and Credit Card Ledger Accounts](#create-bank--credit-card-ledger-account)
3. Choose the import function
4. Select your file
5. Choose your fields if you are importing `CSV` and upload
6. You will be presented with a preview of your import before selecting finish

:::info
Bank transactions only require three fields:
1. Name: The name or description of the transaction
2. Date: The date of the transaction
3. Amount: The amount of the transaction
:::

### Importing CSV

CSV is one of the most common formats but also one of the most difficult to import. When importing using the CSV import utility, we map the columns to the values. E.g., if Date is in column F, you choose F when asked to map the Date.

1. You start by choosing which row to start from. If you have a header in row 1, you would choose 2
2. Choose a name column
3. Choose the amount column. There is a toggle if the amount is in two columns, debit & credit
4. Choose the date column. You may have to adjust the date format if we cannot work it out automatically

:::info
To select the column, you can just click on the column instead of typing the column value. For example, if Name is in column D, then just click on column D.

The default is to start importing from row 2. If you don't have a header column, then select row 1 in the first step.
:::

:::info
Avoid using the advanced section unless absolutely necessary.
:::

Follow along with our interactive demo on importing bank transactions from a CSV export.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
  <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/clzbiqgz100bbjp0cscukwq0l/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
  ></iframe>
</div>

---

### Importing QIF

[Content to be added]

---

## Create bank & credit Card ledger account

Try our interactive demo to learn how to create a `ledger account` for your bank or credit card transactions.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
  <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/clzbevkqd005ml70ca9vev2dz/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
  ></iframe>
</div>

---

### Steps to bank ledger account

These are for regular bank accounts like checking, savings, and debit accounts.

- Navigate to the chart of accounts [Chart of Accounts](https://my.fiskl.com/accounting/chart)
- In `Assets` > `Cash and Cash Equivalents`, choose to add a new account using the plus icon
- Provide the following three essential bits of information:
    - **Name**: This can be changed later
    - **Currency**: It's really important that the currency matches the bank account currency
    - **Account type**: The account type in this example must be `Bank Account`
- Save

You now have your ledger account that you can import your manual bank transactions into.

:::info[Business Owner TIP]
You can think of these `ledger accounts` as folders for your transactions. It's your job as a business owner to ensure all transactions in your bank are reflected correctly in the `ledger accounts`.

It's the job of Fiskl to calculate the accounting reports following the accounting rules of each `ledger account`.
:::

### Steps to credit card ledger account

- Navigate to the Chart of Accounts [Chart of Accounts](https://my.fiskl.com/accounting/chart)
- In `Liabilities` > `Credit Cards`, choose to add a new account using the plus icon
- Provide the following two essential bits of information:
    - **Name**: This can be changed later
    - **Currency**: It's really important that the currency matches the bank account currency
- Save

You now have your ledger account that you can import your manual credit card transactions into.

## Troubleshooting

Although we try our best, there are times when we fail to import. These are the common reasons and solutions:

1. **Cannot parse the amount column**: Sometimes amounts are in formats it's just not possible for us to parse. They can have symbols and formats that our libraries can't parse. In this case, it's recommended to open your CSV file in Excel and change the format of the amount column. The easiest format to parse is two decimals. For example, `$1,000.00` would be easier to parse as `1000.00`.
2. **Cannot parse the date column**: Sometimes localized dates are difficult for us to parse. For example, a date of `31/01/2024` is easy but `31st JAN '24` is challenging. Try selecting different formats, but if all fails, then it's recommended to open your CSV file in Excel, change the format of the date column, export, and try again
3. **Not all transactions were imported**: First try changing the date period to `All` to check they are not being filtered out. If you added a unique column to the `Advanced` options, then rows with the same id will not be imported
4. **I get an error**: In this case, contact support to investigate
