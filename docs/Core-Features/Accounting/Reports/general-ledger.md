---
title: General Ledger
sidebar_position: 5
description: Understanding and using the General Ledger report in Fiskl
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Reports
  - Multi-currency
---

The General Ledger Report in Fiskl provides a comprehensive view of all financial transactions within your organization, offering powerful grouping and filtering options. This report is especially valuable for businesses managing multiple currencies, providing detailed insights with unparalleled flexibility in transaction analysis.

<details>
<summary>Why is the General Ledger report important?</summary>

The General Ledger report is essential because it:
- Offers a detailed view of all transactions with flexible grouping options
- Provides multi-currency support at an unprecedented level of detail
- Helps track and analyze transactions across different dimensions (accounts, types, dates)
- Allows for in-depth financial analysis and reconciliation
</details>

## Key features of the General Ledger Report

This report stands out for its comprehensive multi-currency support and flexible grouping options:

- **Multiple currency views**: See the original currency amounts, ledger account currency, and base (accounting) currency
- **Detailed transaction breakdown**: View gross amount, net amount, and tax amount for each transaction (per respective currency)
- **Exchange rate information**: Includes FX rates for easy currency conversion tracking
- **Flexible grouping options**: Group transactions by Ledger Account, Transaction Type, Date, Year, Quarter, or Month

## Generating a General Ledger Report in Fiskl

To create and customize your General Ledger Report:

1. Go to `Accounting > Reports` from the left menu and select "General Ledger"
2. Use the account selector to choose all accounts or specific ones
3. Set your desired date range
4. Choose your preferred grouping option (Ledger Account, Transaction Type, Date, Year, Quarter, Month)
5. Customize your report using the available options:
   - Switch between Cash and Accrual accounting methods
   - Toggle between summary and detailed views
   - Divide large numbers by 1000 for easier reading
   - Hide empty accounts (those with no transactions in the selected period)
   - Show or hide opening and closing balances for each group

### Customizing your report view

Fiskl offers several options to tailor the report to your needs:

- **Account selection**: Choose to view all accounts or focus on one or more specific accounts
- **Date range**: Set the time period for which you want to see transactions
- **Grouping option**: Select how you want to group your transactions for analysis
- **Cash vs. Accrual**: Switch between cash and accrual accounting methods
- **Summary/Detail toggle**: Choose between a high-level summary or a detailed transaction view
- **Empty account visibility**: Option to hide accounts with no activity in the selected period
- **Balance display**: Show or hide opening and closing balances for each group

## Understanding the report columns

The General Ledger report provides extensive information for each transaction:

<details>
<summary>See a breakdown of the columns in the report</summary>

1. **Group**: The grouping category (e.g., Ledger Account, Transaction Type, Date)
2. **Date**: The date of the transaction
3. **Type**: The type of transaction (e.g., invoice, expense, transfer)
4. **Name**: The name of the client or vendor
5. **Category**: The category assigned to the transaction
6. **Description**: A brief description of the transaction

**For amounts, the report shows:**

1. **Gross amount**: Total transaction amount
2. **Net amount**: Amount excluding tax
3. **Tax amount**: Tax portion of the transaction

**Each of these amounts (Gross, Net, Tax) is shown in three currencies:**

- **Original currency**: The currency in which the transaction was originally recorded
- **Account currency**: The currency of the account (for revenue and expenses, this is the base currency)
- **Base currency**: Your company's base accounting currency

7. **Balance**: Running balance of the group (if enabled)
8. **Tax rate**: Applicable tax rate for the transaction
9. **FX rate**: Exchange rate between the base currency and account currency

</details>

## Customizing report columns

Given the complexity and depth of information in the General Ledger report, Fiskl allows you to customize which columns are displayed. This feature helps you focus on the most relevant data for your needs and simplifies the report view.

To customize your report columns:

1. Click on the gear icon in the report view
2. In the column selector, add or remove columns as needed
3. Your selection will be applied to the report view and respected in exports

Available columns for customization include:

<details>
<summary>Available columns for customization include</summary>

- Number
- Type
- Client/Vendor
- Description
- Gross Amount (Original Currency)
- Net Amount (Original Currency)
- Tax Amount (Original Currency)
- FX rate

</details>

:::tip
Customizing your columns can significantly streamline your report, especially when dealing with specific multi-currency scenarios or focusing on particular transaction details.
:::

## Exporting your General Ledger Report

Fiskl makes it easy to share and further analyze your report:

1. **Export to spreadsheet**:
   - Click the export button at the top right of the screen
   - Choose between Google Sheets or Excel format

:::tip
Exporting to a spreadsheet allows for further customization and analysis, especially useful for complex multi-currency scenarios and detailed financial reviews.
:::

Remember, the General Ledger report is a powerful tool for managing multi-currency transactions, analyzing financial data across various dimensions, and gaining deep insights into your organization's financial activities. Regular review can help you maintain accurate books, understand currency impacts on your finances, and make informed business decisions.