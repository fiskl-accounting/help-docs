---
title: Site style guide
sidebar_position: 6
description: Style guide structuring help documentation in Fiskl
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Style guide
---

# Fiskl Documentation Structure Guide

## Core Principles

1. Progressive disclosure
2. Clear navigation
3. Consistency
4. Modularity
5. User-centric organization

## High-Level Structure

1. Getting Started
2. Core Features
3. Settings and Configuration
4. Integrations
5. Troubleshooting
6. FAQs
7. Glossary

## Detailed Structure Guidelines

### 1. Getting Started

- Concise, focused on essential tasks
- Use interactive demos and videos
- 5-7 key steps for initial setup
- Link to detailed explanations

<details>
<summary>Example structure</summary>

```
1. Getting Started
   1.1 Creating Your Fiskl Account
   1.2 Setting Up Your Company Profile
   1.3 Connecting Your First Bank Account
   1.4 Creating Your First Invoice
   1.5 Exploring the Dashboard
```

</details>

### 2. Core Features

- Organize subfeatures under main categories
- Consistent depth (3-4 levels max)
- Include conceptual and task-based topics

<details>
<summary>Example structure</summary>

```
2. Core Features
   2.1 Accounting
       2.1.1 Journal Entries
       2.1.2 Chart of Accounts
       2.1.3 Reports
           2.1.3.1 Balance Sheet
           2.1.3.2 Profit & Loss
           2.1.3.3 Cash Flow Statement
   2.2 Invoicing
       2.2.1 Creating Invoices
       2.2.2 Invoice Templates
       2.2.3 Recurring Invoices
       2.2.4 Invoice Emails
   2.3 Quotes
       2.3.1 Creating Quotes
       2.3.2 Converting Quotes to Invoices
   2.4 Line Items
       2.4.1 Products
       2.4.2 Services
       2.4.3 Time Tracking
       2.4.4 Mileage
```

</details>

### 3. Settings and Configuration

- Group related settings
- Clear explanations of each setting's impact

### 4. Integrations

- Section for each major integration
- Include setup instructions and use cases

<details>
<summary>Example structure</summary>

```
4. Integrations
   4.1 Bank Connections
       4.1.1 Connecting via Yodlee
       4.1.2 Connecting via SaltEdge
   4.2 Payment Gateways
       4.2.1 Stripe Integration
       4.2.2 GoCardless Integration
```

</details>

### 5. Troubleshooting

- Organize by feature or common issue types
- Use problem-solution format

### 6. FAQs

- Group by topic
- Concise answers, link to detailed explanations

### 7. Glossary

- Include industry-specific and Fiskl-specific terms
- Alphabetical arrangement

## Content Creation Guidelines

1. Consistent headings:
   - H1: main sections
   - H2: subsections
   - H3 and H4: further divisions

2. Modular, reusable content:
   - Standalone topics
   - Cross-linking for related information

3. "What's Next" section at the end of each topic

4. Task-based titles for how-to content

5. Clear naming convention for files and folders

6. Metadata and tags for improved searchability

7. Regular content review and updates

8. Incorporate user feedback

## File and Folder Naming Conventions

### Folder Naming Rules

1. Title case for main feature/section folders
2. Hyphens for multi-word folder names
3. Concise but descriptive
4. No special characters or spaces
5. Plural forms for multiple document folders

### File Naming Rules

1. Lowercase for all file names
2. Hyphens to separate words
3. Start with main action/topic
4. Verbs for action-oriented documents, nouns for concepts
5. Include file extension (.md)
6. Avoid dates unless necessary (YYYY-MM-DD format if needed)
7. Concise but descriptive (2-5 words)
8. Two-digit numbers with leading zero for sequences

<details>
<summary>Example directory structure</summary>

```
Fiskl-Documentation/
├── Getting-Started/
│   ├── 01-create-account.md
│   ├── 02-set-up-business.md
│   ├── 03-connect-bank.md
│   └── setting-up-your-taxes.md
├── Invoicing/
│   ├── invoice-create.md
│   ├── invoice-customize.md
│   ├── invoice-send.md
│   └── invoice-recurring-setup.md
├── Expense-Tracking/
│   ├── expense-add-manual.md
│   ├── expense-import-bank.md
│   └── receipt-scanning.md
├── Reports/
│   ├── report-profit-and-loss.md
│   ├── report-balance-sheet.md
│   └── report-cash-flow.md
└── Tax-Management/
    ├── tax-deductions-overview.md
    ├── tax-filing-deadlines.md
    └── tax-form-1099.md
```

</details>


## Temporary: Full Directory Structure with Display Names

<details>

<summary>Click to view full directory structure with display names (temporary)</summary>

```
Fiskl Documentation/
├── Getting Started/
│   ├── 01-create-account.md                 (Create Account)
│   ├── 02-set-up-company-profile.md         (Set Up Company Profile)
│   ├── 03-connect-bank-account.md           (Connect Bank Account)
│   ├── 04-set-up-payments.md                (Set Up Payments)
│   ├── 05-create-first-invoice.md           (Create First Invoice)
│   ├── 06-record-expense.md                 (Record Expense)
│   ├── 07-categorize-transactions.md        (Categorize Transactions)
│   └── 08-explore-dashboard.md              (Explore Dashboard)
│
├── Core Features/
│   ├── Accounting/
│   │   ├── journal-entries.md               (Journal Entries)
│   │   ├── chart-of-accounts.md             (Chart of Accounts)
│   │   └── Reports/
│   │       ├── balance-sheet.md             (Balance Sheet)
│   │       ├── profit-and-loss.md           (Profit & Loss)
│   │       ├── cash-flow-statement.md       (Cash Flow Statement)
│   │       ├── trial-balance.md             (Trial Balance)
│   │       ├── transactions-by-account.md   (Transactions by Account)
│   │       └── general-ledger.md            (General Ledger)
│   │
│   ├── Invoicing/
│   │   ├── create-invoice.md                (Create Invoice)
│   │   ├── invoice-templates-and-brands.md  (Invoice Templates and Brands)
│   │   ├── recurring-invoices.md            (Recurring Invoices)
│   │   └── invoice-emails.md                (Invoice Emails)
│   │
│   ├── Quotes/
│   │   ├── create-quote.md                  (Create Quote)
│   │   └── convert-quote-to-invoice.md      (Convert Quote to Invoice)
│   │
│   └── Line Items/
│       ├── products.md                      (Products)
│       ├── services.md                      (Services)
│       ├── time-tracking.md                 (Time Tracking)
│       └── mileage.md                       (Mileage)
│
├── Settings and Configuration/
│   ├── company-settings.md                  (Company Settings)
│   ├── invoice-and-quote-settings.md        (Invoice and Quote Settings)
│   ├── accounting-settings.md               (Accounting Settings)
│   └── tax-settings.md                      (Tax Settings)
│
├── Integrations/
│   ├── Bank Connections/
│   │   ├── connect-yodlee.md                (Connect with Yodlee)
│   │   ├── connect-saltedge.md              (Connect with SaltEdge)
│   │   └── stripe-data-feed.md              (Stripe Data Feed)
│   │
│   └── Payment Gateways/
│       └── stripe-integration.md            (Stripe Integration)
│
├── Troubleshooting/
│   ├── account-issues.md                    (Account Issues)
│   ├── invoicing-problems.md                (Invoicing Problems)
│   ├── bank-connection-errors.md            (Bank Connection Errors)
│   └── reporting-discrepancies.md           (Reporting Discrepancies)
│
├── FAQs/
│   ├── general-faqs.md                      (General FAQs)
│   ├── accounting-faqs.md                   (Accounting FAQs)
│   ├── invoicing-faqs.md                    (Invoicing FAQs)
│   └── integration-faqs.md                  (Integration FAQs)
│
├── Glossary/
│   └── accounting-terms.md                  (Accounting Terms)
│
└── Plans and Billing/
    ├── select-fiskl-plan.md                 (Select Fiskl Plan)
    ├── apply-offer-or-partner-code.md       (Apply Offer or Partner Code)
    ├── upgrade-fiskl-account.md             (Upgrade Fiskl Account)
    ├── update-credit-card-and-address.md    (Update Credit Card and Address)
    └── payment-history.md                   (Payment History)
```

</details>

Remember: The goal is to create an intuitive, maintainable, and flexible documentation structure that accommodates Fiskl's current features and future growth.
