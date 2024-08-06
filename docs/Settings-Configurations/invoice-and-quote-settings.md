---
title: Invoice and Quote Settings
sidebar_position: 10
description: Configure your invoice and quote preferences in Fiskl
tags:
 - Settings
 - Invoice and Quote Settings
---

The Invoice and Quote Settings page lets you customize how your invoices and quotes behave, including language options, payment methods, and payment terms. These settings ensure your documents align with your business needs and provide clear information to your customers.

Access Invoice and Quote Settings using the `gear icon` on the top left menu or visit the [Invoice and Quote Settings page](https://my.fiskl.com/invoice-settings) on the web dashboard.

## Language Settings

Fiskl supports over 60 languages for invoices, quotes, emails, and customer-facing screens, including payment schedules and payment interfaces.

- **Primary Language**: Choose the language for all new invoices and quotes. You can change this for individual invoices as needed.

### Custom Language Cloning

Customize existing language translations to suit your specific needs:

1. Select a base language to clone
2. Edit the translations as needed
3. Save your custom language version

This feature is useful for:
- Adapting languages like Spanish to specific regional dialects
- Customizing terminology (e.g., changing "Client" to "Customer")

## Payment Methods

Configure manual payment methods to provide clear instructions for your customers. These are separate from integrated payment gateways.

To create a new payment method:

1. Select the plus icon to "Add a new Payment Method"
2. Give it a descriptive name that will appear on the invoice for your customer to choose (e.g., Chase ACH)
3. Add clear customer instructions to "Customer notes"
4. Include necessary fields in name-value format (account number, routing number, bank name, etc.)

:::info[tip]
Use basic HTML to style your instructions for better readability. For example:
```html
<b>Bank Name:</b> Example Bank<br>
<i>Please include your invoice number in the transfer description.</i>
```
:::

These payment methods will appear on invoices and payment pages, with convenient copy-to-clipboard functionality to assist your customers.

## Invoice Settings

### Payment Terms
Set the number of days between the invoice date and the due date. The initial value is 7 days.

Example: If you change this to 14 days, new invoices will have a due date 14 days from the invoice date.

### Auto-select Payment Gateways
Toggle this option to automatically select all available payment methods (both manual and payment gateways) compatible with the invoice's country, currency, and amount.

### Invoice Notes
Add notes to appear on all invoices. You can use basic HTML for styling.

## Quote Settings

### Terms and Conditions
Add terms and conditions for your quotes. Basic HTML styling is supported.

### Quote Notes
Include additional notes for your quotes. HTML styling can be used here as well.

### Quote Validity Period
Set the number of days a quote remains valid. The initial value is 7 days.

## Email Settings

### Invoice Email
Set up a whitelisted email domain for sending invoices:

1. Provide your email
2. Set up required CNAME records (instructions provided via email to the email )
3. Verify your domain

:::danger[caution]
Ensure your domain has proper DMARC and SPF records set up for the best email deliverability. Failure to have these may result in email providers like Gmail or Yahoo Mail not delivering your messages.

Removing the CNAME records after verification will also prevent your emails from being delivered. 
:::

### BCC for All Emails
Set a BCC email address for all system-sent emails. This is useful for:
- Keeping a centralized record of all sent invoices and quotes
- Team collaboration and oversight

:::info[note]
While useful, the BCC feature should not be relied upon as a complete audit trail, as invoices and quotes can also be shared via link.
:::

Remember: These settings help streamline your invoicing and quoting process. Regularly review and update them to ensure they meet your evolving business needs. You can override most of these settings when creating individual invoices and quotes.