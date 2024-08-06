---
title: Connect with Stripe
sidebar_position: 1
description: Learn how to connect your Stripe account to Fiskl for seamless financial management
tags:
 - Integrations
 - Banking
 - Stripe
---

Connecting your Stripe account to Fiskl Banking revolutionizes your financial management, especially for multi-currency transactions.

Traditionally, reconciling Stripe payouts was a complex, error-prone process. You'd receive a weekly payout containing multiple transactions, often in different currencies. Matching these transactions in your accounting platform was time-consuming and prone to errors due to currency conversions, fees and not knowing which transactions were included in the payout.

Fiskl's partnership with Stripe eliminates this hassle. When you connect one or more Stripe accounts to Fiskl Banking, we import every single transaction, creating 100% accurate ledger entries for each one. We handle all the details from creating the ledger accounts to tracking amount, fees, and conversion rates - automatically.

The result? Instead of reconciling hundreds of individual transactions, you only need to match the single Stripe payout to your bank account as an internal transfer. It's that simple.

At Fiskl, we've experienced first-hand how much time this integration saves. We're excited for you to enjoy the same benefits.

Access Banking in the left menu or visit the [Banking page](https://my.fiskl.com/banking) on the web dashboard.

## Key Features

- Zero-touch reconciliation for Fiskl invoices paid via Stripe, regardless of currency
- Multi-currency support with accurate matching
- Precise categorization of transaction fees, including non-payout currencies
- Processing of all Stripe transactions, including issuing card transactions those initiated outside Fiskl
- Automated handling of fees, refunds, charges, and chargebacks with correct currency conversions
- Support for multiple Stripe accounts
- Automatic creation of new balance accounts in Fiskl when a new payout account is added in Stripe
- Cross-platform functionality (iOS, Android, and Web)
- Permission-based views for controlling access to Stripe transactions

## Connection Process

1. Navigate to Banking from the left menu

2. Select "Stripe" from the available options

3. Configure Sync Settings:
   - Choose a start date for importing transactions
   - Check the "All" box to import all transactions from the selected date

4. Set Default Categories:
   - Choose a default category for charges (e.g., "Payment processing fees")
   - Optionally, enable "Create clients" and "Create vendors"

:::info[Caution]
Avoid selecting `ALL` transactions where possible. Consider using the start of your current financial year. We'll create the required Opening Balance ledger transaction. As this feed is very detailed, `ALL` can result in a substantial number of unnecessary ledger transactions.

Enabling "Create vendors" may add a significant number of vendors to your account.
:::

5. Connect to Stripe:
   - Log in to your existing Stripe account or create a new one

6. Verify Connection:
   - Your Stripe accounts will automatically appear in Fiskl
   - You can connect multiple Stripe accounts, including those with multi-currencies

## Post-Connection Information

- Initial download may show temporary warning icons

## Viewing Transactions

- Click "Transactions" on the account card or access the matching ledger account from Fiskl Chart of Accounts.

:::info
Connecting Stripe as a Payment Gateway is a seperate process.
:::

Remember: Regularly review your Stripe connection to ensure accurate transaction import and categorization.