---
title: Integration FAQs
sidebar_position: 8
description: Boost operational efficiency by learning how to integrate Fiskl with other tools and services. Streamline your business processes.
keywords: ["Integration FAQs Fiskl", "tool integration", "business efficiency", "software integration"]
slug: /faq/integration
toc_min_heading_level: 2
toc_max_heading_level: 6
tags:
  - FAQ

---

## Banking Integrations

### Is it safe to put my bank credentials in my Fiskl account?

Fiskl never has direct access to your banking details when you connect your bank. We use trusted third-party services for bank connections:

- [Salt Edge](../Integrations/Bank-Connections/connect-saltedge.md)
- [Yodlee](../Integrations/Bank-Connections/connect-yodlee.md)
- [WIO Bank](../Integrations/Bank-Connections/connect-wio.md) (via OpenBanking)

These services manage the connection securely, and Fiskl only receives read-only transaction data.

### How secure is the site where I enter my bank credentials?

[Salt Edge](/docs/integrations/banking/connecting-saltedge) and [Yodlee](/docs/integrations/banking/connecting-yodlee) are world leaders in bank connectivity. They use advanced security measures to protect your information. Fiskl only receives read-only transaction data and has no access to your banking credentials.

### Can the Pro account link with Revolut bank?

Yes, you can connect your Revolut account via [Salt Edge](/docs/integrations/banking/connecting-saltedge).

### How can I import transactions that are more than one year old?

To import older transactions, you'll need to use manual import:

1. Export the transactions from your bank
2. Format the data according to Fiskl's requirements
3. Use the [Manual Import Bank Transactions](/docs/tutorials/banking/how-to-import-bank-transactions) feature

### Does Fiskl add extra charges to payments processed through added payment gateways?

If you are on the Solo, Pro, or Prime plans, Fiskl does not add any additional fees to transactions processed through integrated payment gateways. You'll only pay the standard fees charged by the payment gateway itself.

## Payment Integrations

### Can I connect Stripe to Fiskl?

Yes, you can connect Stripe to Fiskl for two key purposes:

1. **Payments**: You can create invoices with Stripe as the payment method, allowing you to accept payments from around the world seamlessly integrated with Fiskl. For more information, see [Stripe Payments in Fiskl](../Integrations/Payment-Gateways/stripe-integration.md).
2. **Banking**: By connecting Stripe in Fiskl Banking, you can automate the management of every transaction, fee, refund, and more across one or multiple Stripe accounts, potentially saving you days of work each month. For more information, see [Stripe Banking Integration in Fiskl](../Integrations/Bank-Connections/connect-stripe.md).

### Can I connect GoCardless to Fiskl for payments and direct debit?

Yes, you can connect GoCardless to Fiskl and start accepting direct debit payments:

GoCardless allows you to create direct debit mandates directly within Fiskl for your invoice payments. Imagine never having an overdue payment again! Once your customer makes the first payment, all subsequent variable payments will be automatically collected on the due date of future invoices.

For more information, see [GoCardless Payments in Fiskl](../Integrations/Payment-Gateways/gocardless-integration.md).

### Does Fiskl support recurring invoices

Yes, we have advanced [Recurring Invoices in Fiskl](../Core-Features/Invoicing/Recurring%20Invoices/creating-recurring-invoices.md)

## Can I change the currency of my bank feeds

No, when you connect a bank via any of the integrators this currency is received from the integrator. If this is incorrect you need to contact support so that we can raise a support request with the integrator to rectify the problem.

Once the ledger account is created with a currency it can not be changed. There are technical reasons for this related to the currency conversion rates used for each transaction. 

## Need More Help?

If you couldn't find the answer you're looking for, please [contact Fiskl support team](mailto:support@fiskl.com). We're here to help!
