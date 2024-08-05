---
title: Site style guide
sidebar_position: 2
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
