---
title: How to import bank transactions
sidebar_position: 3
description: Maintain accurate financial records in Fiskl. Import bank transactions manually or automatically for up-to-date business insights.
keywords: ["Import bank transactions Fiskl", "manual transaction import Fiskl", "financial records Fiskl", "bank data Fiskl", "accurate accounting Fiskl"]
toc_min_heading_level: 2
toc_max_heading_level: 4
slug: /tutorials/banking/how-to-import-bank-transactions
tags:
  - Tutorials
  - Banking
  - Transactions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to import bank transactions

Importing your banking transactions into Fiskl helps you keep your financial records up-to-date and accurate. This tutorial will guide you through the process of manually importing your bank transactions.

<details>

  <summary>TL;DR - Watch how to create ledger accounts for importing</summary>

  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/clzbevkqd005ml70ca9vev2dz/tour
"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

<details>

  <summary>TL;DR - Watch how import CSV</summary>

  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/clzbiqgz100bbjp0cscukwq0l/tour
"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

## Overview

While Fiskl offers automatic bank connections for easy transaction imports, there are situations where you might need to import transactions manually. This tutorial covers:

1. Understanding money accounts in Fiskl
2. Types of file formats for importing transactions
3. Step-by-step guide to importing transactions
4. Creating bank and credit card ledger accounts
5. Troubleshooting common import issues

## Understanding money accounts in Fiskl

Before we dive into importing transactions, let's clarify what we mean by "money accounts" in Fiskl:

- **Money accounts** refer to sub-accounts under "Cash & Cash Equivalents" and "Credit Cards" in your Chart of Accounts.
- As a business owner, you'll conduct about 90% of your accounting activities in these money accounts.
- These accounts are where you'll reconcile, edit, or add transactions most frequently.

## File formats for importing transactions

Fiskl supports three file formats for importing bank transactions:

1. **CSV (Comma-Separated Values)**
   - Most common format
   - Requires column mapping and date format selection
   - Fiskl provides a utility to simplify the import process

2. **OFX (Open Financial Exchange)**
   - Banking standard format
   - Easiest to import; just upload and import

3. **QIF (Quicken Interchange Format)**
   - Another popular standard
   - Similar to OFX in ease of use

:::tip
When possible, use OFX format for the smoothest import experience.
:::

## Importing bank transactions: Step-by-step guide

Follow these general steps to import your bank transactions:

1. Export your banking data from your bank's website or app
2. Create a ledger account to import your bank transactions into if you haven't already (see [Creating Bank & Credit Card Ledger Accounts](../../Tutorials/Banking/how-to-import-bank#creating-a-credit-card-ledger-account))
3. Select the import function in Fiskl
4. Choose your exported file
5. For CSV imports, map the fields as prompted
6. Review the preview of your import before finalizing

:::info
Bank transactions require only three essential fields:
1. Name: Transaction description
2. Date: Transaction date
3. Amount: Transaction amount
:::

### Importing CSV files

CSV imports require more attention due to their flexibility. Here's how to use the CSV import utility:

1. Select the starting row (usually row 2 if there's a header)
2. Map the Name column
3. Map the Amount column (toggle for split debit/credit columns if needed)
4. Map the Date column and adjust the format if necessary

:::tip
Click on the column in the preview to select it, instead of typing the column letter.
:::

<details>
<summary>Watch our interactive demo on importing bank transactions from a CSV file</summary>

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

</details>

### Importing OFX and QIF files

OFX and QIF imports are generally simpler:

1. Select the OFX or QIF file
2. Upload the file
3. Review the preview and confirm the import

If you encounter issues with OFX imports, contact Fiskl support for assistance.

## Creating bank & credit Card ledger accounts

Before importing transactions, you need to create the appropriate ledger account in Fiskl. Here's how:

### Creating a bank ledger account

1. Navigate to the [Chart of Accounts](https://my.fiskl.com/accounting/chart)
2. Under Assets > Cash and Cash Equivalents, select the plus icon to add a new account
3. Provide the following information:
   - **Name**: Choose a descriptive name (can be changed later)
   - **Currency**: Must match the bank account currency
   - **Account type**: Select `Bank Account`
4. Save the new account

### Creating a credit card ledger account

1. Navigate to the [Chart of Accounts](https://my.fiskl.com/accounting/chart)
2. Under Liabilities > Credit Cards, select the plus icon to add a new account
3. Provide the following information:
   - **Name**: Choose a descriptive name (can be changed later)
   - **Currency**: Must match the credit card account currency
4. Save the new account

<details>
<summary>Watch our interactive demo on creating a bank or credit card ledger account</summary>

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

</details>

## Troubleshooting common import issues

If you encounter problems during the import process, try these solutions:

1. **Amount parsing errors**: Open the CSV in a spreadsheet application and format the amount column to use two decimal places (e.g., 1000.00). Export as CSV and try again

2. **Date parsing errors**: Try different date formats in Fiskl, or reformat the date column in your spreadsheet application before importing.  Export as CSV and try again

3. **Missing transactions**: If you do not see any transactions after importing it may be that your filters are excluding them. Set the date filter to "All" to ensure transactions aren't being filtered out

4. **Other errors**: Contact Fiskl support for further assistance

Remember, as a business owner, your role is to ensure that all transactions from your bank are accurately reflected in your Fiskl ledger accounts. Fiskl then uses this data to generate accurate accounting reports based on the rules for each account type.

:::tip
While manual imports are useful in certain situations, consider using Fiskl's [automatic bank connections](/docs/category/bank-connections) for more efficient transaction management.
:::
