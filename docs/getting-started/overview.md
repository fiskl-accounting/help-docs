import Mermaid from '@theme/Mermaid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started:


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


