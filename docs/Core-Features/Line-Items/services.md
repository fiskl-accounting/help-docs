---
title: Managing Services
sidebar_position: 4
description: Manage service offerings efficiently with Fiskl. Ensure accurate billing and seamless integration with your invoicing processes.
keywords: ["Service management Fiskl", "billing software", "service offerings", "invoicing integration"]
slug: /core-features/invoicing/line-items/services
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Service
 - Line item
---

Services in Fiskl refer to intangible offerings that your business provides to customers, such as consulting, repairs, or professional advice. Managing these services effectively is crucial for accurate income tracking, expense allocation, and compliant financial reporting.

## Understanding Services in Fiskl

In Fiskl, services function as templates for line items on your invoices. When you add a service to an invoice, it creates a copy of the service as a line item, allowing you to adjust quantities, rates, and other details specific to that transaction.

## Service Components

Each service in Fiskl contains the following information:

1. **Name**: The name of the service
2. **Unit**: The unit of measurement (e.g., hours, sessions)
3. **Amount**: Service unit price
4. **Account**: The accounting account it's assigned to (e.g., "Sales of Services")
4. **Tax**: Associated tax rate or the option to create a new one
5. **Description**: Detailed description of the service
6. **Attachments**: Option to upload multiple files (png, jpg, pdf)

## Creating a Service

To create a new service:

1. Navigate to the Products & Services on the left menu
1. Select the plus icon or "New Products/Services"
1. Choose the service tab
1. Fill in the required fields:
   - Name
   - Unit
   - Amount
   - Tax (if applicable)
1. Add a description
1. Upload any relevant files by dragging and dropping or selecting from your computer

:::info[tip]
Provide clear, detailed descriptions of your services. This information helps both your team and your clients understand the scope of the service offered.
:::

## Using Services in Invoices

Services can be added to invoices in two ways:

1. **From the Service page**:
   - Select the service
   - Choose "Add to new invoice" or "Add to existing invoice"

1. **From the invoice**:
   - When creating or editing an invoice, select "Add Service"
   - Choose the service from your list

1. **Inline in the invoice**:
   - When creating an invoice you can add an inline service
   - A service template will be created along with its service line item
   - You can also select an existing service inline by typing and selecting matching service

When added to an invoice, the service becomes a line item with additional fields:

- Quantity: The number of units provided (e.g., hours spent)
- Unit price: The rate per unit (can be adjusted if needed)
- Total: Automatically calculated based on quantity and unit price

:::info
Changes made to a service line item on an invoice do not affect the original service template.
:::

## Using Services in Recurring Invoices

For recurring invoices, you can create a template for re-usable or recurring products/Services:
1.	Go to Products and Services and click on [New Product or Service]
2.	Toggle the [Template] option to ON
3.	Click on [Name] to display the placeholder fields
4.	Select the necessary placeholders. In this example, we’ll create a service for a 1-year gardening contract for "JP Photographers", expires 30/09/2025. The date calculations are based from today’s  date of 01/10/24.
5.	Enter the text: “1-year gardening contract for,” then select [Client],
6.	Type “expires,” then for 30 September 2025, select [Day-1] then [Month-1] (September) and [Year+1] (2025). Add [/] between the figures.
7.	The service will display as: "1-year gardening contract for [client_name], expires [day+1Y-1D]/[month+1Y-1D]/[year+1Y-1D]
8.	Once this is added to your invoice, the client's name and the expiry date will automatically be populated in the invoice line item

## Managing Services

Regularly review and update your services to ensure accuracy in pricing, descriptions, and associated accounts. This practice helps maintain the integrity of your invoicing and financial reporting.

:::info[note]
Changes to the service will not affect any of its generated line items.
:::

## Best Practices for Services

1. **Clear naming**: Use descriptive names for your services to make them easy to identify and use
2. **Regular updates**: Keep service information current, especially pricing and tax rates
3. **Detailed descriptions**: Utilize the description field to clearly outline what the service includes
4. **Account assignment**: Ensure services are assigned to the correct accounting accounts for accurate financial reporting
5. **Time tracking**: For time-based services, consider integrating with Fiskl's time tracking features for precise billing

Remember, well-managed service information in Fiskl contributes to more accurate financial records and smoother invoicing processes, helping you maintain transparency with clients and compliance with financial standards.
