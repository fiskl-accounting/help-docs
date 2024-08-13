import Mermaid from '@theme/Mermaid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started:


# Getting Started with Fiskl

Welcome to Fiskl! Let's get you set up quickly based on your primary needs.

## Choose Your Path

<details>
<summary>I want to start invoicing</summary>

1. [Set up your company profile](#set-up-your-company-profile)
2. [Customize your invoice](#customize-your-invoice)
3. [Set up payments](#set-up-payments)
4. [Create your first invoice](#create-your-first-invoice)
5. [What's next?](#whats-next-invoicing)

</details>

<details>
<summary>I want to manage my accounting</summary>

1. [Set up your company profile](#set-up-your-company-profile)
2. [Configure accounting settings](#configure-accounting-settings)
3. [Connect your bank](#connect-your-bank)
4. [Review your chart of accounts](#review-your-chart-of-accounts)
5. [What's next?](#whats-next-accounting)

</details>

<details>
<summary>I'm an accountant</summary>

1. [Register on the accounting portal](#register-on-the-accounting-portal)
2. [Set up your practice](#set-up-your-practice)
3. [Invite a client](#invite-a-client)
4. [What's next?](#whats-next-accountant)

</details>

## Set Up Your Company Profile

1. Log in to your Fiskl account
2. Navigate to Settings > Company Profile
3. Enter your company details
4. Save your changes

## Customize Your Invoice

1. Go to Settings > Invoice Settings
2. Choose a template
3. Add your logo
4. Customize colors and fonts

## Set Up Payments

1. Navigate to Settings > Payment Options
2. Choose 'Add Payment Gateway'
3. Select your preferred gateway (e.g., Stripe)
4. Follow the prompts to connect

## Create Your First Invoice

1. Click 'Create New' > 'Invoice'
2. Add line items for your products or services
3. Review and customize if needed
4. Click 'Send' to email it to your client

## Configure Accounting Settings

1. Go to Settings > Accounting Settings
2. Set your fiscal year
3. Choose your accounting method (Cash or Accrual)
4. Save your changes

## Connect Your Bank

1. Navigate to Banking > Add Bank Connection
2. Select your bank from the list
3. Follow the secure connection process
4. Start importing transactions

## Review Your Chart of Accounts

1. Go to Accounting > Chart of Accounts
2. Review the default accounts
3. Add or modify accounts as needed
4. Save your changes

## Register on the Accounting Portal

1. Visit the Fiskl Accountant Portal
2. Click 'Sign Up as an Accountant'
3. Complete the registration form
4. Verify your email address

## Set Up Your Practice

1. Log in to the Accountant Portal
2. Navigate to Practice Settings
3. Enter your practice details
4. Save your information

## Invite a Client

1. In the Accountant Portal, go to Clients > Invite Client
2. Enter your client's email address
3. Customize the invitation message
4. Click 'Send Invite'

## What's Next? (Invoicing)

- Explore recurring invoices for regular clients
- Set up expense tracking to monitor business costs
- Generate your first financial report

## What's Next? (Accounting)

- Import historical data if needed
- Set up bank rules for automatic transaction categorization
- Explore financial reports to gain insights into your business

## What's Next? (Accountant)

- Familiarize yourself with the client dashboard
- Explore Fiskl's accountant-specific features
- Consider reaching out to Fiskl to become a partner

Need help? Contact our support team at support@fiskl.com.




<Tabs>
  <TabItem value="invoicing" label="With invoicing" default>

:::note[Getting started with invoicing]

    1. [Review your settings](company-settings)
    1. [Create an invoice](company-settings)
    1. [Customize invoice](company-settings)
    1. [Add payment methods](company-settings)
    1. [Send invoice](company-settings)
:::


```mermaid
journey
    section Setup
      Review invoice settings: 3: Easy
    section Create Invoice
      Create an invoice: 4: Easy 
      Customize layout: 4: Easy 
    section Finalize
      Add payment methods: 5: Easy 
    section Next Steps
      Send invoice: 5: Easy, Super easy 
```

  </TabItem>
  <TabItem value="profile" label="With accounting">

:::note[Getting started with accounting]

    1. [Review accounting settings](company-settings)
    1. [Create a journal entry](company-settings)
    1. [Capture expense on mobile](company-settings)
    1. [View financial reports](company-settings)
    1. [Connect bank](company-settings)
    1. [Invite your accountant](company-settings)

:::


```mermaid
journey
    section Setup
      Review accounting settings: 5: You
    section Basic Operations
      Create a journal entry: 3: You
      Capture expense via mobile: 4: You, Mobile
    section Analysis
      View financial reports: 4: You
    section Integration
      Connect bank account: 3: You, Bank
      Invite accountant: 2: You, Accountant

```
    </TabItem>

      <TabItem value="profiles" label="I'm an accountant">

      Getting started as an accountant


```mermaid
journey
    section Setup
      Review accounting settings: 5: You
    section Basic Operations
      Create a journal entry: 3: You
      Capture expense via mobile: 4: You, Mobile
    section Analysis
      View financial reports: 4: You
    section Integration
      Connect bank account: 3: You, Bank
      Invite accountant: 2: You, Accountant

```
    </TabItem>
</Tabs>

---

## Alternative

```mermaid
graph TD
    A[Start] --> B{Choose Path}
    B -->|Invoicing| C[Review Invoice Settings]
    B -->|Accounting| D[Review Accounting Settings]
    B -->|Accountant| R[Register on the accountant portal]
    
    C --> E[Create an Invoice]
    E --> F[Customize Layout]
    F --> G[Add Payment Methods]
    
    D --> H[Create Journal Entry]
    H --> I[Capture Expense via Mobile]
    I --> J[View Financial Reports]
    J --> K[Connect Bank Account]
    K --> L[Invite Accountant]
    
    R --> S[Contact fiskl for an account]
    S --> T[Invite yourself as an accountant]
    
    G --> M[Next Steps]
    L --> M
    T --> M
    M --> N[Explore Advanced Features]
    M --> O[Set Up Integrations]
    M --> P[Review Full Documentation]
    
    N --> Q[End]
    O --> Q
    P --> Q
    
    classDef invoicing stroke-width:1px;
    classDef accounting stroke-width:1px;
    classDef accountant stroke-width:1px;
    classDef nextSteps fill:#ffcc99,stroke:#333,stroke-width:1px;
    
    class C,E,F,G invoicing;
    class D,H,I,J,K,L accounting;
    class R,S,T accountant;
    class M,N,O,P nextSteps;
    
    click C "#review-invoice-settings" "Go to Review Invoice Settings section"
    click D "#review-accounting-settings" "Go to Review Accounting Settings section"
    click E "#create-an-invoice" "Go to Create an Invoice section"
    click F "#customize-layout" "Go to Customize Layout section"
    click G "#add-payment-methods" "Go to Add Payment Methods section"
    click H "#create-journal-entry" "Go to Create Journal Entry section"
    click I "#capture-expense-via-mobile" "Go to Capture Expense via Mobile section"
    click J "#view-financial-reports" "Go to View Financial Reports section"
    click K "connect-bank" "Go to Connect Bank Account section"
    click L "#invite-accountant" "Go to Invite Accountant section"
    click N "#explore-advanced-features" "Go to Explore Advanced Features section"
    click O "#set-up-integrations" "Go to Set Up Integrations section"
    click P "#review-full-documentation" "Go to Full Documentation"
```


