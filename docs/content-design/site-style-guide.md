---
title: Site layout guide
sidebar_position: 6
description: Fiskl Documentation Structure Guide

toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Style guide
---

## Core Principles

1. Progressive disclosure: Start with basic information and progressively reveal more complex details
2. Clear navigation: Use a logical hierarchy that's easy to navigate
3. Consistency: Maintain a consistent structure across all sections
4. Modularity: Create self-contained topics that can be easily updated and reused
5. User-centric organization: Arrange content based on user tasks and goals

## High-Level Structure

1. Getting Started
2. Core Features
   - Accounting
   - Invoicing
   - Quotes
   - Line Items
3. Settings and Configuration
4. Integrations
5. Troubleshooting
6. FAQs
7. Glossary

## Detailed Structure and Guidelines

### 1. Getting Started

- Keep this section concise and focused on essential tasks
- Use interactive demos and videos where possible
- Limit to 5-7 key steps for initial setup
- Link to more detailed explanations in relevant sections

Example structure:

```
1. Getting Started
   1.1 Creating Your Fiskl Account
   1.2 Setting Up Your Company Profile
   1.3 Connecting Your First Bank Account
   1.4 Creating Your First Invoice
   1.5 Exploring the Dashboard
```

### 2. Core Features

- Organize subfeatures under main feature categories
- Use consistent depth across feature documentation (aim for 3-4 levels max)
- Include both conceptual and task-based topics for each feature

Example structure:

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

### 3. Settings and Configuration

- Group related settings together
- Provide clear explanations of each setting's impact

### 4. Integrations

- Dedicate a section to each major integration
- Include setup instructions and use cases

Example structure:

```
4. Integrations
   4.1 Bank Connections
       4.1.1 Connecting via Yodlee
       4.1.2 Connecting via SaltEdge
   4.2 Payment Gateways
       4.2.1 Stripe Integration
       4.2.2 GoCardless Integration
```

### 5. Troubleshooting

- Organize by feature or common issue types
- Use a problem-solution format

### 6. FAQs

- Group FAQs by topic
- Keep answers concise, linking to detailed explanations where necessary

### 7. Glossary

- Include all industry-specific and Fiskl-specific terms
- Arrange alphabetically

## Guidelines for Content Creation

1. Use consistent headings:
   - H1 for main sections
   - H2 for subsections
   - H3 and H4 for further divisions

2. Create modular, reusable content:
   - Write topics that can stand alone
   - Use cross-linking to connect related information

3. Include a "What's Next" section at the end of each topic to guide users. This can be partily achieved but structuring the documentation so that the next / previous fulfill this purpose automatically

4. Use task-based titles for how-to content (e.g., "How to Connect Your Bank Account")

5. Implement a clear naming convention for files and folders

6. Use metadata and tags to improve searchability

7. Regularly review and update content, especially after feature updates

8. Incorporate user feedback to continuously improve documentation

Remember, the goal is to create a documentation structure that is intuitive for users, easy to maintain for your team, and flexible enough to accommodate future growth and changes in Fiskl's features.

## File and Folder Naming Conventions

    Implementing a clear and consistent naming convention for files and folders is crucial for maintaining an organized and easily navigable documentation structure. Follow these guidelines for naming your files and folders in the Fiskl documentation:

    ### Folder Naming Rules

    1. Use title case for main feature or section folders
    - Example: `Invoicing`, `Getting Started`, `Expense Tracking`

    2. Use hyphens to separate words in folder names with multiple words
    - Example: `Bank-Connections`, `Tax-Management`

    3. Keep folder names concise but descriptive

    4. Avoid using special characters or spaces in folder names

    5. Use plural forms for folders that will contain multiple related documents
    - Example: `Reports`, `Settings`

    ### File Naming Rules


    1. Use lowercase for all file names

    2. Use hyphens to separate words in file names
    - Example: `invoice-create.md`, `setting-up-your-taxes.md`

    3. Start the file name with the main action or topic, followed by more specific details
    - Example: `invoice-customize.md`, `report-profit-and-loss.md`

    4. Use verbs for action-oriented documents and nouns for conceptual documents
    - Action: `connect-bank-account.md`, `create-invoice.md`
    - Concept: `chart-of-accounts-explained.md`, `tax-deductions-overview.md`

    5. Include the file extension (`.md` for Markdown files)

    6. Avoid using dates in file names unless absolutely necessary. If needed, use the format YYYY-MM-DD
    - Example: `2023-04-15-tax-updates.md`

    7. Keep file names concise but descriptive, aiming for 2-5 words

    8. For numbered sequences, use two-digit numbers with a leading zero
    - Example: `01-create-account.md`, `02-set-up-business.md`, `03-connect-bank.md`

    

    ### Example Structure
<details>
        <summary>File naming directory example</summary>

 ```
    Fiskl-Documentation/
    │
    ├── Getting-Started/
    │   ├── 01-create-account.md
    │   ├── 02-set-up-business.md
    │   ├── 03-connect-bank.md
    │   └── setting-up-your-taxes.md
    │
    ├── Invoicing/
    │   ├── invoice-create.md
    │   ├── invoice-customize.md
    │   ├── invoice-send.md
    │   └── invoice-recurring-setup.md
    │
    ├── Expense-Tracking/
    │   ├── expense-add-manual.md
    │   ├── expense-import-bank.md
    │   └── receipt-scanning.md
    │
    ├── Reports/
    │   ├── report-profit-and-loss.md
    │   ├── report-balance-sheet.md
    │   └── report-cash-flow.md
    │
    └── Tax-Management/
        ├── tax-deductions-overview.md
        ├── tax-filing-deadlines.md
        └── tax-form-1099.md
    ```
    </details>



    <details>
    <summary>File naming best practices</summary>

        1. Be consistent: Once you establish a naming convention, stick to it across all documentation.

        2. Use descriptive names: Anyone should be able to guess the content of a file or folder from its name.

        3. Consider scalability: Choose a naming system that will accommodate future growth and additional topics.

        4. Avoid redundancy: Don't repeat the folder name in every file within that folder.

        5. Update regularly: Review and update file and folder names as features and products evolve.

        By following these conventions, you'll create a documentation structure that is easy to navigate, maintain, and scale as Fiskl grows and evolves.

        ## Document Formatting
    </details>
