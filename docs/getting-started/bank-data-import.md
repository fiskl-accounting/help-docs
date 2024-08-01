---
title: Import bank data
sidebar_position: 6
description: Learn about importing your bank data
tags:
  - Getting Started
  - Bank
  - Chart of Accounts

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Importing banking data into Fiskl

You can import your bank statements into money accounts for reconciliation and accounting.

You can only import into what we term `Money Accounts`. `Money Accounts` in Fiskl all the sub-accounts in `Cash & Cash Equivalents` and `Credit Cards`.

:::info
Ideally you should automatically import your transactions using the [Banking](./connect-bank) feature. 

There are times when manual importing is useful. 
- When your bank is not supported by any of the banking aggregators
- When you need more historical data than the bank connections provide
- If you don't like using third parties and don't mind importing manually
:::

## Types of imports

There are three types of import: 

`CSV` : Is the most common and the most challenging. With CSV you will need to choose the columns and date formats. Don't worry we have a utility to make this easier.

`OFX` : OFX is a banking standard and the easiest to import. With OFX you can just upload the file and import.

`QIF` : QIF is a wrapper of OFX and just another popular standard. 

The general rule of thumb is to use OFX if possible. 

:::info[TIP]
The general rule of thumb is to use OFX if possible. 
:::

## Importing your banking transactions

The steps to import are:
1. Export your banking data from your bank.
2. In Fiskl create a `Bank` ledger account in `Cash & Cash Equivalents` or `Credit Cards` if you are importing credit card traansactions. 
3. Choose the import function.
4. Select your file.
5. Choose your fields if you are importing `CSV` and upload.
6. You will be presented with a preview of your import.
7. Save

## Create your bank Ledger Account

Try our interactive demo to learn how to create a `Ledger Account` for your bank or credit card transactions.


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

Steps to create a **Bank** Ledger account for bank transactions. These are for regular bank accounts like Checking, Savings and Debit accounts. 

- Naviget to the Chart of Accounts [Chart of Accounts](https://my.fiskl.com/accounting/chart)
- In `Assets` `Cash and Cash Equivalents` choose to add a new account using the plus icon
- Provide the following three essential bits of information
    - **Name**: This can be changed later
    - **Currency**: It's really important that the currency matches the bank account currency. 
    - **Account Type**: The account type in this example must be `Bank Account`.
- Save. You now have your Ledger Account that you can import your manual bank transactions into. 

You can think of these `Ledger Accounts` as folders for your transactions. For you as the business owner it's your job to ensure that all transactions that are in your bank are also in this `Ledger Account` and it's the job of Fiskl to calculate the accounting reports following the accounting rules of each `Ledger Account`


Steps to create a **Credit Card** Ledger account for credit card transactions. 

- Naviget to the Chart of Accounts [Chart of Accounts](https://my.fiskl.com/accounting/chart)
- In `Liabilities` `Credit Cards` choose to add a new account using the plus icon
- Provide the following two essential bits of information
    - **Name**: This can be changed later
    - **Currency**: It's really important that the currency matches the bank account currency. 
- Save. You now have your Ledger Account that you can import your manual credit card transactions into. 





