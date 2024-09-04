---
title: Sales Tax Report
sidebar_position: 5
description: Understanding and using Sales Tax Report
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Accounting
 - Reports
 - Sales Tax
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sales Tax Report

The Sales Tax Report in Fiskl provides a comprehensive overview of your company's sales tax activities and liabilities. This report is crucial for calculating and reporting the sales tax owed to tax authorities, ensuring compliance, and supporting informed financial decisions.

## Accessing the Sales Tax Report

1. Select "Accounting" from the left menu
2. Click on `Reports`
3. Locate the Sales Tax Report in the list of automated reports

## Understanding how the Sales Tax report works

The report is generated per [Tax Number](../../../Settings-Configurations/tax-settings#3-tax-idvat-numbers), also known as your Tax Agency. The report will be in the currency of that Tax Number, but you can choose to display your base currency conversion alongside it. You generate the report per tax period, and it will include your opening and closing balances."

## Configuring your report

### Select tax and period

1. Choose the relevant `Tax` from the dropdown menu
2. Select a period (e.g., last quarter)

### Choose view type

Toggle between Summary and Detailed views using the Summary/Details switch

:::tip
Your applied filters are cached, allowing you to return to the same filtered report on subsequent visits. You can change these filters at any time.
:::

## Understanding report views

<Tabs>

   <TabItem value="summaryView" label="Summary View" default>

   The summary view presents main amounts for all report sections. Customize columns using the gear icon to show:

   - Tax Rate
   - Gross Amount
   - Net Amount
   - Tax Amount
   - Gross Amount (base currency)
   - Net Amount (base currency)
   - Tax Amount (base currency)

   </TabItem>

   <TabItem value="detailedView" label="Detailed View" default>
   The detailed view provides transaction-level information. Default columns include:

   - Date
   - Number
   - Name
   - Client/Vendor
   - Category
   - Description
   - Tax Rate
   - Gross Amount
   - Net Amount
   - Tax Amount

   </TabItem>

   <TabItem value="customColumns" label="Custom Columns" default>

   Customize columns using the gear icon to add:

   - Gross Amount (base currency)
   - Net Amount (base currency)
   - Tax Amount (base currency)
   - FX rate

   </TabItem>

</Tabs>

## Customizing your report

You can change the title, subtitle, and add notes to the report. These changes are transient and will be included in any exports and downloads but are not saved.

## Exporting your report

1. Click the "Export" button at the top right of the screen
1. Choose to export to Google Sheets or Excel
1. The export will reflect your current view (Summary or Detailed) and any applied filters

## Report components

<details>

   <summary>The Sales Tax Report includes</summary>

- Opening and Closing balances for the selected period
- Sales: All sales transactions with an assigned client
- Purchases: All purchase transactions with an assigned vendor
- Other: Manual transactions associated with this sales tax account
- Total Tax: Sum of Sales, Purchases, and Other
- Payments: Tax payments categorized with this sales tax account

</details>

:::info
Fiskl calculates sales tax upon invoicing the customer or receiving a vendor bill. The tax amount is recorded in the month when the invoice or bill is created, regardless of the payment date.
:::

## Benefits of the Sales Tax Report

- Ensures compliance with tax regulations
- Supports financial planning and decision-making
- Prepares your business for potential audits
- Enhances operational efficiency
- Provides strategic insights into sales trends and tax liabilities

By effectively utilizing the Sales Tax Report, you can navigate sales tax requirements with confidence, maintain financial stability, and drive informed business decisions.
