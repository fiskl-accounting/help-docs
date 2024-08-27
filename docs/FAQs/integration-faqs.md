---
title: Integration FAQs
sidebar_position: 8
description: Integration FAQs
toc_min_heading_level: 2
toc_max_heading_level: 6
tags:
  - FAQ

---

### Is it safe to put my bank credentials in my Fiskl account?

Fiskl never has direct access to your banking details when you connect your bank. We use trusted third-party services for bank connections:

- [Salt Edge](../Integrations/Bank-Connections/connect-saltedge)
- [Yodlee](../Integrations/Bank-Connections/connect-yodlee)
- [WIO Bank](../Integrations/Bank-Connections/connect-wio) (via OpenBanking)

These services manage the connection securely, and Fiskl only receives read-only transaction data.

### How secure is the site where I enter my bank credentials?

[Salt Edge](../Integrations/Bank-Connections/connect-saltedge) and [Yodlee](../Integrations/Bank-Connections/connect-yodlee) are world leaders in bank connectivity. They use advanced security measures to protect your information. Fiskl only receives read-only transaction data and has no access to your banking credentials.

### Can the Pro account link with Revolut bank?

Yes, you can connect your Revolut account via [Salt Edge](../Integrations/Bank-Connections/connect-saltedge).

### How can I import transactions that are more than one year old?

To import older transactions, you'll need to use manual import:

1. Export the transactions from your bank
2. Format the data according to Fiskl's requirements
3. Use the [Manual Import Bank Transactions](../Tutorials/banking/how-to-import-bank) feature

### Does Fiskl add extra charges to payments processed through added payment gateways?

If you are on the Solo, Pro, or Prime plans, Fiskl does not add any additional fees to transactions processed through integrated payment gateways. You'll only pay the standard fees charged by the payment gateway itself.

## Need more help?

If you couldn't find the answer you're looking for, please [contact our support team](mailto:support@fiskl.com). We're here to help!