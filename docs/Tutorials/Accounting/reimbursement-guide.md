---
title: Managing Reimbursements in Fiskl
sidebar_position: 2
description: Learn how to handle and process reimbursements for business expenses paid with personal funds in Fiskl.
keywords: ["Reimbursements in Fiskl", "expense reimbursement", "personal expense reimbursement", "business expense management"]
toc_min_heading_level: 2
toc_max_heading_level: 4
slug: /tutorials/accounting/managing-reimbursements
tags:
 - Tutorial
 - Expenses
 - Reimbursements
 - Accounting
---

# Managing Reimbursements in Fiskl

This guide explains how to handle reimbursements for business expenses paid with personal funds. Fiskl provides two methods for managing these transactions, depending on how you prefer to enter the expense.

## Method 1: Direct Accounting Entry

### Initial Account Setup

Before processing reimbursements, navigate to Accounting > Chart of Accounts and set up these two accounts:

Under Liabilities > Other Current Liabilities:
- Create "Reimbursables"

### Step 1: Record the Expense

1. Go to the Reimbursables (Liability) account
2. Create a positive (+) IN transaction
3. Select expense category (e.g., Travel)

*System creates:*
- Debit: Travel Expense
- Credit: Reimbursables (Liability) *(This shows you spent your money on a business expense and the company now owes you)*

### Step 2: Process Reimbursement Payment

1. Go to bank account transactions
2. Create payment transaction
3. Select "Reimbursables" category

*System creates:*
- Debit: Reimbursables (Liability) *(This pays off the liability and reduces bank balance)*
- Credit: Bank Account

## Method 2: Using Fiskl's Expense Form

### Initial Account Setup

Before processing reimbursements, navigate to Accounting > Chart of Accounts and set up these two accounts:

1. Under Assets > Cash and Cash Equivalents:
   - Create "Personal card" (Type: Cash on hand)
2. Under Liabilities > Other Current Liabilities:
   - Create "Reimbursables"

### Step 1: Record the Expense

1. Navigate to Expenses
2. Create new or select existing expense
3. Choose the appropriate expense category (e.g., Travel)
4. Check "Paid in cash" box
5. Select "Personal card" from dropdown

*System creates:*
- Debit: Travel Expense
- Credit: Personal Card (Asset) *(This shows you spent your money for a business expense)*

### Step 2: Create a Reimbursement Record

1. Go to Personal Card account transactions
2. Create a debit (+) transaction for the expense amount
3. Select "Reimbursables" category

*System creates:*
- Debit: Personal Card (Asset) *(This creates the liability - company now owes you)*
- Credit: Reimbursables (Liability)

### Step 3: Process Reimbursement Payment

1. Go to bank account transactions
2. Create payment transaction
3. Select "Reimbursables" category

*System creates:*
- Debit: Reimbursables (Liability) *(This pays off the liability and reduces bank balance)*
- Credit: Bank Account

## Benefits of This System

1. Maintains clear audit trail
2. Separates personal and business transactions
3. Handles timing differences between expense and reimbursement
4. Ensures accurate reconciliation
5. Provides proper documentation for tax purposes