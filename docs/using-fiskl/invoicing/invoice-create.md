---
title: Creating an invoice
sidebar_position: 2
description: Creating and editing invoices
toc_min_heading_level: 2
toc_max_heading_level: 6
tags:
  - Invoice
  - Client
  - Invoice Payment
  - Stripe
---

import TOCInline from '@theme/TOCInline';

Invoicing in Fiskl ranges from basic to sophiscated. We will run through creating a basic invoice and then address each part of the invoice individually to explore the more advanced features. 
You do not need to pre-create any items as you can create everything as you create your first invoice but it can be useful to have the following set up in advance.

1. Complete your [Company Settings](getting-started/company-settings). Ensure your address is correct.
2. Create a `Client` 
3. Create a `Payment Method`. This can be using an integrated payment gateway like `Stripe` or adding a `Manual Payment` method.


## Basic invoice 

Try the interactive demo to create a basic invoice.


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
  <iframe
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
    src="https://demo.fiskl.com/e/clzctmgxx008yl30czzc6urmn/tour"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowtransparency="true"
  ></iframe>
</div>

---

### Parts of an invoice 

Let't look at each part of the invoice in detail. 

<TOCInline toc={toc} />

---

<!-- <InlineTOC /> -->

#### Company

The invoice uses the following information from [Company Settings](getting-started/company-settings).

1. Company name
2. Company address
3. Company ID or Registration number

:::note
All of the above can be overridden when a [Brand Template](getting-started/templates-and-brands).
:::

:::tip
In both [Company Settings](getting-started/company-settings) and [Brand Template](getting-started/templates-and-brands) you can customize your address layout to change how it appears on the invoice and quotes.
:::

#### Client


#### Invoice number
#### Invoice dates
#### Styling
#### Line itmes
#### Discounts
#### Deposits
#### Currency
#### Language
#### Additional values
#### Notes
#### Payment options
#### Payment terms
#### Payment schedules 