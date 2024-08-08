---
title: Tax Settings
sidebar_position: 6
description: Configure your tax settings in Fiskl
tags:
 - Settings
 - Tax Settings
---

The Tax Settings page allows you to set up and manage your sales taxes, non-sales taxes, tax groups, and tax identification numbers. Fiskl's flexible tax system supports multiple tax agencies in various currencies, accommodating single tax rates, multiple tax rates, and compound taxes.

Access Tax Settings using the `gear icon` on the top left menu or visit the [Manage Taxes](https://my.fiskl.com/manage-taxes) page on the web dashboard.

## Tax Configuration

The Manage Taxes page consists of three main sections:

### 1. Single Taxes

In this section, you can:

- View a list of all your taxes and their assigned tax numbers
- Add new taxes and assign them to a Tax ID
- Designate taxes as either Sales or Non-Sales taxes
- Assign multiple taxes to a single Tax ID

The currency of the tax is determined by the associated Tax ID.

For example when creating French VAT tax, you would apply for a French VAT number and assign the appropriate VAT rate to that EUR Tax ID.

:::info[tip]
You can set a sales tax as your primary tax by clicking the star icon on the right. Once set, this tax will automatically be added when you create new line items.
:::

### 2. Tax Groups

Tax groups allow you to:

- Create collections of two or more taxes
- Set up compound (stacked) taxes

<details>
  <summary>Example of a tax group</summary>

    In British Columbia, the sales tax group includes both the Goods and Services Tax (GST) and the Provincial Sales Tax (PST). These are applied together on sales transactions, with each tax having its own rate and rules but grouped for calculation and reporting purposes.
     
     An example of a tax group with three taxes:
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
  <summary>Example of a compound tax group</summary>

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

In this section, you can manage your Tax IDs (also referred to as Tax Agency numbers). Each Tax ID is associated with:

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

Remember: Regularly review and update your tax settings to ensure compliance with changing tax regulations in your jurisdiction(s). Consult with a tax professional if you're unsure about specific tax requirements for your business.
