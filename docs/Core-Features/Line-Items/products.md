---
title: Managing Products
sidebar_position: 2
description: Streamline inventory management with Fiskl. Track products, update pricing, and integrate seamlessly with sales and invoicing.
keywords: ["Product management Fiskl", "inventory tracking", "product pricing", "sales integration"]
slug: /core-features/invoicing/line-items/products
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
 - Product
 - Line Item
---

Products in Fiskl refer to tangible items that your business sells. Managing these items effectively is crucial for invoicing, cost management, and profitability analysis.

## Understanding Products in Fiskl

In Fiskl, products serve as templates for line items on your invoices. When you add a product to an invoice, it creates a copy of the product as a line item, allowing you to adjust quantities and other details specific to that sale.

## Product Components

Each product in Fiskl contains the following information:

1. **Name**: The name of the product
2. **Unit**: The unit of measurement (e.g., boxes, pallets)
3. **Amount**: Product unit price
4. **Account**: The accounting account it's assigned to (e.g., "Sales of Products")
5. **Tax**: Associated tax rate or the option to create a new one
6. **Description**: Detailed description of the product
7. **Attachments**: Option to upload multiple files (png, jpg, pdf)

## Creating a Product

To create a new product:

1. Navigate to the Products & Services on the left menu
2. Select the plus icon or "New Products/Services"
3. Fill in the required fields:
   - Name
   - Unit
   - Amount
   - Tax (if applicable)
4. Add a description
5. Upload any relevant files by dragging and dropping or selecting from your computer

:::info[tip]
Be as detailed as possible in your product descriptions. This information can be valuable for both your team and your customers.
:::

## Using Products in Invoices

Products can be added to invoices in three ways:

1. **From the product page**:
   - Select the product
   - Choose "Add to new invoice" or "Add to existing invoice"

1. **From the invoice**:
   - When creating or editing an invoice, select existing items and select a product
   - Choose the product from your list

1. **Inline in the invoice**:
   - When creating an invoice you add an inline product
   - A product template will be created along with its product line item
   - You can also select an existing product inline by typing and selecting matching products

When added to an invoice, the product becomes a line item with additional fields:

- Quantity: The number of units sold
- Unit Price: The price per unit (can be adjusted if needed)
- Total: Automatically calculated based on quantity and unit price

:::info
Remember, changes made to a product line item on an invoice do not affect the original product template.
:::

## Using Products in Recurring Invoices

For recurring invoices, you can create a template for re-usable or recurring products/Services:
1.	Go to Products and Services and click on [New Product or Service]
2.	Toggle the [Template] option to ON
3.	Click on [Name] to display the placeholder fields
4.	Select the necessary placeholders. In this example, we’ll create a service for 1-year software subscription for "JP Photographers", expires 30/09/2025. The date calculations are based from today’s  date of 01/10/24.
5.	Enter the text: “1-year software subscription for,” then select [Client],
6.	Type “expires,” then for 30 September 2025, select [Day-1] then [Month-1] (September) and [Year+1] (2025). Add [/] between the figures.
7.	The service will display as: "1-year software subscription for [client_name], expires [day+1Y-1D]/[month+1Y-1D]/[year+1Y-1D]
8.	Once this is added to your invoice, the client's name and the expiry date will automatically be populated in the invoice line item

## Managing Products

Regularly review and update your products to ensure accuracy in pricing, descriptions, and associated accounts. This practice helps maintain the integrity of your invoicing and financial reporting.

:::info[note]
Changes to the product will not affect any of its generated line items.
:::

## Best Practices for Products

1. **Consistent naming**: Use clear, consistent names for your products to make them easy to find and use
2. **Regular updates**: Keep product information up-to-date, especially pricing and tax rates
3. **Use attachments**: Utilize the file attachment feature to include product images or specification sheets
4. **Account assignment**: Ensure products are assigned to the correct accounting accounts for accurate financial reporting

Remember, well-managed product information in Fiskl contributes to smoother invoicing processes and more accurate financial records.
