---
title: Invoicing FAQs
sidebar_position: 6
description: Frequently asked questions about Fiskl's invoicing features
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - FAQ
  - Invoice
  - Currency
---

import LayoutPair from '@site/src/components/LayoutPair';


## Currency and Language

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
1. You can set a default currency on your [Client](../Core-Features/Clients-Vendors/clients) profile
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

Yes, you can clone a language and customize some or all of the values. 

To do this:
1. Go to [Invoice and Quote Language](../Settings-Configurations/invoice-and-quote-settings#custom-language-cloning) settings
2. Select the language you want to customize
3. Click on "Clone"
4. Modify the values as needed
5. Save your customized language

## Invoice Customization and Management

### If I update my template, will it affect invoices already created?

Yes, updating a template will affect all invoices using that template, including previously created ones. 

To change the template without affecting previous invoices:
1. Create a new template
2. Make the new template the default for future invoices

Learn more about [Templates & Brands](../Settings-Configurations/templates-and-brands).

### How do I edit invoices which have payments attached?

To edit a paid invoice:
1. Change its status to "Draft" or select the pen edit icon in Invoice preview
2. Make your changes
3. Save the invoice

Note:
- All payments will be temporarily disabled but will be automatically restored when you save the invoice
- If invoice dates are changed, payments may not be automatically restored
- In such cases, you can manually restore the payments in the invoice payments list

For more details, see [Invoicing Management](../Core-Features/Invoicing/invoice-management).

### Can I set my invoice to be automatically sent each month?

Yes, you can use [Recurring Invoices](../Core-Features/Invoicing/Recurring%20Invoices/creating-recurring-invoices) for this purpose. This feature allows you to:
- Set up invoices to be sent automatically at specified intervals
- Choose the frequency (e.g., monthly, quarterly)
- Set start and end dates for the recurring series

### Can I change the invoice number?

Yes, you can change the invoice number when creating an invoice. 

Important notes:
- The new format you enter will become the new default format
- If the invoice number ends in a digit, we will increment it each time
- For more control over invoice numbering, see [Invoicing Management](../Core-Features/Invoicing/invoice-management)

## Receipts and Documentation

### Can I create a receipt?

While Fiskl doesn't have a dedicated receipt feature, you can provide proof of payment by:
1. Sending the customer the invoice again with a custom email message
2. The customer will see:
   - The invoice marked as paid
   - The payment date
   - Option to download the paid invoice in PDF format

This method is generally sufficient as a receipt of payment for most business purposes.

## Still have questions?

If you couldn't find the answer you're looking for, please don't hesitate to [contact our support team](mailto:support@fiskl.com). We're here to help!