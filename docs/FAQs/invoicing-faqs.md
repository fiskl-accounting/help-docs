---
title: Invoicing FAQs
sidebar_position: 6
description: Resolve invoicing queries quickly with Fiskl's comprehensive FAQs. Ensure smooth billing processes and improve cash flow management.
keywords: ["Invoicing FAQs Fiskl", "billing support", "invoicing queries", "small business invoicing"]
slug: /faq/invoicing
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Invoice
  - Currency
---

import LayoutPair from '@site/src/components/LayoutPair';

### How do I change my invoice currency?

You can change the invoice currency by selecting the currency abbreviation next to the Total.

<details>
<summary>See how to change your invoice currency</summary>
 <LayoutPair imageUrl="https://demo.fiskl.com/e/cm0b8rv8k0001l30cz0nurfac/tour/" useExpander={false}>

#### Within the invoice

1. Create or edit an invoice
2. Select your client
3. Choose the currency (Currency abbreviation next to the **Total**)
4. Select the currency you want

#### Client default
1. You can set a default currency on your [Client](/docs/Core-Features/Clients-Vendors/clients.md) profile
2. Selecting a client with a different currency will automatically change your invoice currency
 </LayoutPair>
</details>

### How do I change my invoice language?

You can change the invoice language by selecting the language abbreviation below the client selector.

<details>
<summary>See how to change your invoice language</summary>
 <LayoutPair imageUrl="https://demo.fiskl.com/e/cm0baxqmm0021l10cu4ejme9i/tour" useExpander={false}>

#### Within the invoice
1. Create or edit an invoice
2. Select the language symbol near the client selector
3. Choose the desired language

#### Language default
1. You can set a default language in your [Invoice and Quote](../Settings-Configurations/invoice-and-quote-settings.md) settings
2. You can also customize your languages
 </LayoutPair>
</details>

### Can I customize my invoice language?

Yes, you can clone and customize languages. Go to [Invoice and Quote Language](../Settings-Configurations/invoice-and-quote-settings.md#custom-language-cloning) settings, clone a language, and modify the values as needed.

### If I update my template, will it affect invoices already created?

Yes, updating a template affects all invoices using that template, including previous ones. To avoid this, create a new template and set it as default for future invoices. Learn more about [Templates & Brands](../Settings-Configurations/templates-and-brands.md).


### How do I edit invoices which have payments attached?

Change the invoice status to "Draft" or use the edit icon. Payments will be temporarily disabled but usually auto-restore on save. If not, you can manually restore them. See [Invoicing Management](/docs/Core-Features/Invoicing/invoice-management.md) for details.

### Can I set my invoice to be automatically sent each month?

Yes, use [Recurring Invoices](../Core-Features/Invoicing/Recurring%20Invoices/creating-recurring-invoices.md). This feature allows you to set up invoices to be sent automatically at specified intervals, such as monthly or quarterly.

### Can I change the invoice number?

Yes, when creating an invoice. The new format becomes the default, and if it ends in a digit, it will increment automatically. For more control, see [Invoicing Management](/docs/Core-Features/Invoicing/invoice-management.md).

### Can I show my VAT or Tax number on my invoices?

Yes, to display your VAT or Tax number on an invoice, go to [Manage Taxes], create a new Tax/VAT number, and check the box next to "Display Tax number/ID in invoice." After saving, add the relevant sales tax, and your tax number will automatically appear on invoices where taxes are applied.
<details>
<summary>Watch a video walkthrough on how to display your Tax/VAT number on invoices</summary>
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm1j638zo008mjx0capreqcz8/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

### Can I create a receipt?

While there's no dedicated receipt feature, you can resend a paid invoice with a custom message. The customer will see the invoice marked as paid, the payment date, and can download the PDF. This is typically sufficient as a receipt of payment.

### Can I partially pay an invoice?

Yes, you can do this in a number of ways:

1. You can create a payment schedule and when your customer pays the invoice they will be asked to pay only the due amount. This is ideal for having a single invoice with multiple payments. A deposit can also be considered a partial payment.
2. When your customer in in the payment page they can also change the amount they are going to pay. If they plan to only partially pay they can set the amount to pay. This is not possible with integrated payments like `GoCardless`.

### How do I manually enter payments which have been received?

You can record a payment of an invoice in the following ways:
- In invoice select the payments tap and add payment
- On invoice list the right row menu three dots > Add payment
- Mark the invoice as paid and it will add a payment
- In your bank Ledger account where the payment was received you can match the payment to the invoice and it will create the payment and reconcile it.


### Do you support Spanish, Portuguese, Italian, German & French e-invoices?

Our invoices are translated into 52 languages including the emails and payment pages. We support most e-invoicing and are currently working to implement German and French embedded xml in PDF to meet their requirements.

### How do I import my invoices?

Whilst importing invoices is on our Roadmap, we recommend that, in the meantime, you go to Accounts Receivable and create an opening balance for each customer.

1. Go to Accounts Receivable
2. Click “In”
3. Add a name, e.g., Opening Balance
4. Select the Opening Balance category
5. Add the amount
6. Create or add new client
7. Save and repeat for all your clients.

## Need More Help?

If you couldn't find the answer you're looking for, please [contact Fiskl support team](mailto:support@fiskl.com). We're here to help!
