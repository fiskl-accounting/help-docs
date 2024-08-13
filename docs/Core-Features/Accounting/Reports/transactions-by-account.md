---
title: Transactions by Account
sidebar_position: 6
description: Understanding and using the Transactions by Account report in Fiskl
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Accounting
  - Reports
  - Multi-currency
---

The Transactions by Account report in Fiskl provides a detailed view of all transactions for one or more accounts over a specified period. This comprehensive report is especially powerful for businesses dealing with multiple currencies, offering unparalleled granularity in transaction details.

<details>
<summary>Why is the Transactions by Account report important?</summary>

The Transactions by Account report is essential because it:
- Offers a detailed view of all transactions for selected accounts
- Provides multi-currency support at an unprecedented level of detail
- Helps track and reconcile transactions across different currencies
- Allows for in-depth analysis of account activity over time
</details>

## Key Features of the Transactions by Account Report

This report stands out for its comprehensive multi-currency support:

- **Multiple Currency Views**: See amounts in original currency, base (accounting) currency, and ledger account currency
- **Detailed Transaction Breakdown**: View gross amount, net amount, and tax amount for each transaction
- **Exchange Rate Information**: Includes FX rates for easy currency conversion tracking

## Generating a Transactions by Account Report in Fiskl

To create and customize your Transactions by Account report:

1. Go to `Accounting > Reports` from the left menu and select "Transactions by Account"
2. Use the account selector to choose all accounts or specific ones
3. Set your desired date range
4. Customize your report using the available options:
   - Switch between Cash and Accrual accounting methods
   - Toggle between summary and detailed views
   - Divide large numbers by 1000 for easier reading
   - Hide empty accounts (those with no transactions in the selected period)
   - Show or hide opening and closing balances for each account

### Customizing Your Report View

Fiskl offers several options to tailor the report to your needs:

- **Account Selection**: Choose to view all accounts or focus on one or more specific accounts
- **Date Range**: Set the time period for which you want to see transactions
- **Cash vs. Accrual**: Switch between cash and accrual accounting methods
- **Summary/Detail Toggle**: Choose between a high-level summary or a detailed transaction view
- **Empty Account Visibility**: Option to hide accounts with no activity in the selected period
- **Balance Display**: Show or hide opening and closing balances for each account

## Understanding the Report Columns

The Transactions by Account report provides extensive information for each transaction:

<details>
<summary>See a break down of the columns in the report</summary>


1. **Account**: The name of the account
1. **Date**: The date of the transaction
1. **Type**: The type of transaction (e.g., invoice, expense, transfer)
1. **Name**: The name of the client or vendor
1. **Category**: The category assigned to the transaction
1. **Description**: A brief description of the transaction

**For amounts, the report shows:**

1. **Gross Amount**: Total transaction amount
1. **Net Amount**: Amount excluding tax
1. **Tax Amount**: Tax portion of the transaction

**Each of these amounts (Gross, Net, Tax) is shown in three currencies:::

- **Original Currency**: The currency in which the transaction was originally recorded
- **Account Currency**: The currency of the account (for revenue and expenses, this is the base currency)
- **Base Currency**: Your company's base accounting currency

1. **Balance**: Running balance of the account (if enabled)
1. **Tax Rate**: Applicable tax rate for the transaction
1. **FX Rate**: Exchange rate between the base currency and account currency

</details>

## Customizing Report Columns

Given the complexity and depth of information in the Transactions by Account report, Fiskl allows you to customize which columns are displayed. This feature helps you focus on the most relevant data for your needs and simplifies the report view.

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


## Exporting Your Transactions by Account Report

Fiskl makes it easy to share and further analyze your report:

1. **Export to spreadsheet**:
   - Click the export button at the top right of the screen
   - Choose between Google Sheets or Excel format

:::tip
Exporting to a spreadsheet allows for further customization and analysis, especially useful for complex multi-currency scenarios.
:::

Remember, the Transactions by Account report is a powerful tool for managing multi-currency transactions and gaining deep insights into your account activities. Regular review can help you maintain accurate books, understand currency impacts on your finances, and make informed business decisions.
