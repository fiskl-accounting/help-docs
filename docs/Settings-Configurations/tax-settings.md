---
title: Tax Settings
sidebar_position: 6
description: Configure your tax settings in Fiskl
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Settings
 - Tax Settings
---

The Tax Settings page allows you to set up and manage your sales taxes, non-sales taxes, tax groups, and tax identification numbers. Fiskl's flexible tax system supports multiple tax agencies in various currencies, accommodating single tax rates, multiple tax rates, and compound taxes.

Access Tax Settings using the `gear icon` on the top left menu or visit the [Manage Taxes](https://my.fiskl.com/manage-taxes) page on the web dashboard.

## Tax types

There are two primary tax types:

- Sales tax
- Non-sales tax

Understanding the difference between sales tax and non-sales tax transactions is crucial for accurate financial reporting.

### Sales tax

Sales tax is a government-imposed fee added to the price of goods and services, collected by businesses at the point of sale and remitted to the appropriate tax authority.

### Non-sales tax

Non-sales tax transactions do not include this additional fee. This distinction affects how you record transactions in Fiskl, ensuring compliance with tax regulations and aiding in precise financial management.

<details>
  <summary>Learn more about how the different tax types are represented in accounting</summary>

  **Sales taxes**:
  
  - Are always assigned a [Tax ID](tax-settings#3-tax-idvat-numbers)
  - When you create a tax ID, a ledger account with the tax ID as its name is created in your chart of accounts under `Liabilities > Sales Taxes Payable`

  **Non-sales taxes**:
  
  - Do not have a tax ID and do not get a unique ledger account created
  - All values assigned to your non-sales tax will be in the ledger account `Liabilities > Other Taxes Payable`

</details>


## Tax Configuration

The Manage Taxes page consists of three main sections:

### 1. Single Taxes

In this section, you can:

- View a list of all your taxes and their assigned [tax IDs](tax-settings#3-tax-idvat-numbers)
- Add new taxes and assign them to a tax ID
- Designate taxes as either [sales](tax-settings#sales-tax) or [non-sales](tax-settings#non-sales-tax) taxes
- Assign multiple taxes to a single tax ID

The currency of the tax is determined by the associated [tax IDs](tax-settings#3-tax-idvat-numbers).

For example when creating French VAT tax, you would apply for a French VAT number/ID and assign the appropriate VAT rate to that EUR Tax ID.

:::info[tip]
You can set a sales tax as your primary tax using the star icon on the right. This tax will then automatically be added when you create new line item.
:::

### 2. Tax Groups

Tax groups allow you to:

- Create collections of two or more taxes
- Set up compound (stacked) taxes

<details>
  <summary>Example of a tax group and how it's calculated</summary>

    In British Columbia, the sales tax group includes both the Goods and Services Tax (GST) and the Provincial Sales Tax (PST). These are applied together on sales transactions, with each tax having its own rate and rules but grouped for calculation and reporting purposes.
     
     **An example of a tax group with three taxes:**
    ```
    Tax Code A: 5% sales tax
    Tax Code B: 6% regional tax
    Tax Code C: 4% municipal tax
    ```
Let's say you purchase an item for $100. Here's how the non-compound tax group would be calculated:

  ```
    Tax Code A (5% sales tax):
    $100 × 0.05 = $5.00
    Tax Code B (6% regional tax):
    $100 × 0.06 = $6.00
    Tax Code C (4% municipal tax):
    $100 × 0.04 = $4.00
  ```

Total taxes: $5.00 + $6.00 + $4.00 = $15.00

</details>

<details>
  <summary>Example of a compound tax group and how it's calculated</summary>

    In Quebec, Canada, the tax structure includes both the federal Goods and Services Tax (GST) and the provincial Quebec Sales Tax (QST).
```
    GST (Goods and Services Tax):
        This is a federal tax applied across Canada.
        The GST rate is 5%.
    QST (Quebec Sales Tax):
        This is a provincial tax specific to Quebec.
        The QST rate is 9.975%.
```

QST is calculated on the selling price plus GST.

```
    Base Price of an Item: $100
    GST Calculation: $100 × 0.05 = $5.00
    QST Calculation: ($100 + $5) × 0.09975 = $10.47
```

Total Taxes: $5.00 (GST) + $10.47 (QST) = $15.47 

Final Price of the Item: $100 + $15.47 = $115.47
</details>

### 3. Tax ID/VAT Numbers

In this section, you can manage your Tax IDs (also referred to as your Tax Agency or Tax Number). Each [tax ID](tax-settings#3-tax-idvat-numbers) is associated with:

1. Country
2. Currency
3. Specific taxes

## Setting Up Taxes

Follow these steps to set up your taxes:

1. Navigate to the Tax Settings page
2. Choose the appropriate tab (Single Taxes, Tax Groups, or Tax ID/VAT Numbers)
3. Click the "Add" button to create a new entry
4. Fill in the required information
5. Save your changes

:::info[tip]
Use the interactive demo below to learn how to set up your taxes in detail.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="web" label="Web" default>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/clzfgbf21001skx0c7irtx3gl/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
  </TabItem>
  <TabItem value="mobile" label="Mobile">
   <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/clzfgbf21001skx0c7irtx3gl/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
  </TabItem>

</Tabs>



Remember: Regularly review and update your tax settings to ensure compliance with changing tax regulations in your jurisdiction(s). Consult with a tax professional if you're unsure about specific tax requirements for your business.
