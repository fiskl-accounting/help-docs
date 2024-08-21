---
title: Set Up Your Taxes
sidebar_position: 3
description: Setting up your company taxes
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Getting started
  - Accounting
  - Invoices
  - Tax
  - Tax number
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The taxes in Fiskl are extremely flexible and allow for multiple tax agencies in multiple currencies and support `single tax rates`, `multiple tax rates` and `compound taxes`.

## Set up your taxes

Use the interactive demo to learn how to set up your taxes.


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

---

### Manage taxes

[Dashboard - Manage Taxes](https://my.fiskl.com/manage-taxes)

There are three tabs on the manage taxes page for setting up your taxes.

<Tabs lazy>
  <TabItem value="single" label="Single taxes" default>
    In this tab you will see the list of all your taxes and the tax number they are assigned to.

    You will also be able to add a new tax and assign it to a `Tax Number`.
    Taxes are either `Sales` or `Non Sales` taxes.

    The currency of the tax is determined by the `Tax Number`

    You can assign multiple taxes to a tax number.

    An example would be having to pay VAT in France. You would apply for a French VAT number and assigning the appropriate VAT rate to that EUR Tax number.
  </TabItem>
  <TabItem value="groups" label="Tax groups">
    Tax groups are a collection of taxes. These can include two or more taxes and can also be set to be compounding.

    For example:
    > In British Columbia, the sales tax group includes both the Goods and Services Tax (GST) and the Provincial Sales Tax (PST). These are applied together on sales transactions, with each tax having its own rate and rules but being grouped for the purpose of calculation and reporting

    A compound tax is a tax that is calculated on the total of the pre-tax price plus any other taxes that have already been applied. This means that the second tax is applied to the subtotal that includes the first tax, resulting in a higher overall tax amount. Compound taxes are also known as stacked taxes.


    For example:
    > In the Canadian province of British Columbia (BC). The sales tax system in BC provides illustrates how multiple taxes can be grouped and compounded:

    > Provincial Sales Tax (PST): This is a provincial tax applied to most goods and services in BC.
    Goods and Services Tax (GST): This is a federal tax applied nationwide in Canada.
    BC's Harmonized Sales Tax (HST): This is a combination of the PST and GST.

    >Here's how these taxes work together in a compounded manner:

    >The PST is applied to the base price of an item.
    >The GST is then calculated on the total of the base price plus the PST.


  </TabItem>
  <TabItem value="number" label="Tax ID/VAT Nr">
    This is your `Tax Number` or as it's also referred to as a `Tax Agency` number.
    Your `Tax Number` is assosiated with:
    1. Country
    1. Currency
    1. Taxes
  </TabItem>
</Tabs>
