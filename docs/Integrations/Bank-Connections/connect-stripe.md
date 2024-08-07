---
title: Connect Stripe to Fiskl Banking
sidebar_position: 1
description: Streamline your financial management by connecting your Stripe account to Fiskl
tags:
 - Integrations
 - Banking
 - Stripe
---

Connecting your Stripe account to Fiskl Banking transforms your financial management, especially for multi-currency transactions. This integration simplifies the traditionally complex process of reconciling Stripe payouts, saving you time and reducing errors.

## How It Works

When you connect Stripe to Fiskl Banking:

1. Fiskl imports all transactions from your Stripe account(s)
2. We create accurate ledger entries for each transaction, including:
   - Transaction amounts
   - Fees
   - Currency conversion rates
3. Ledger accounts are automatically created and updated
4. You only need to match the single Stripe payout to your bank account as an internal transfer

This process eliminates the need to reconcile hundreds of individual transactions, greatly simplifying your accounting workflow.

## Benefits

- **Accurate Multi-Currency Support**: Handles transactions and conversions across different currencies
- **Comprehensive Transaction Handling**: Manages all Stripe transactions, including:
  - Fiskl invoices paid via Stripe
  - Transactions initiated outside Fiskl
  - Issuing card transactions
  - Fees, refunds, charges, and chargebacks
- **Automatic Account Creation**: Creates new balance accounts in Fiskl when new payout accounts are added in Stripe
- **Multiple Account Support**: Connect and manage multiple Stripe accounts
- **Cross-Platform Functionality**: Works seamlessly across iOS, Android, and Web
- **Permission-Based Access**: Control who can view and manage Stripe transactions

## Connecting Your Stripe Account

1. Go to Banking in the left menu or visit the [Banking page](https://my.fiskl.com/banking)
2. Select "Stripe" from the available options
3. Configure sync settings:
   - Choose a start date for importing transactions
   - Decide whether to import all transactions from the selected date

:::info[caution]
Avoid selecting `ALL` transactions if possible. Consider using your current financial year's start date. We'll create an Opening Balance ledger transaction as needed. Selecting `ALL` may result in numerous unnecessary ledger entries due to the detailed nature of this feed.
:::

4. Change your categories if required:
   - Choose a category for charges (e.g., "Payment processing fees")
   - Optionally, enable "Create clients" and "Create vendors"

:::info
Enabling "Create vendors" may add many new vendors to your account.
:::

5. Connect to Stripe:
   - Log in to your existing Stripe account or create a new one
6. Verify the connection:
   - Your Stripe accounts will appear automatically in Fiskl
   - You can connect multiple Stripe accounts, including those with multiple currencies

## After Connecting

- The initial download may display temporary warning icons while we balances are calculated
- To view transactions, click "Transactions" on the account card or access the matching ledger account from Fiskl Chart of Accounts

:::info
Connecting Stripe as a Payment Gateway is a separate process from this banking integration.
:::

Remember to regularly review your Stripe connection to ensure accurate transaction import and categorization.