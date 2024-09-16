---
title: Customize your Invoice Language
sidebar_position: 2
description: Customize Fiskl's language settings for your business needs. Tailor invoices and communications to your regional and linguistic preferences.
keywords: ["Customize language Fiskl", "multilingual invoicing Fiskl", "language settings Fiskl", "regional customization Fiskl", "Fiskl communication"]
toc_min_heading_level: 2
toc_max_heading_level: 4
slug: /tutorials/invoicing/how-to-customize-language
tags:
  - Tutorials
  - Invoicing
  - Language
---

Fiskl empowers you to create localized `Invoices` and `Quotes`, including emails and customer payment pages, in 56 languages. Recognizing that one size doesn't fit all, we've also provided the flexibility to clone and customize languages to suit your specific needs.

## Quick Guide: Clone and Customize a Language

<details>
<summary>Watch a quick video tutorial</summary>
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
<iframe
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
src="https://demo.fiskl.com/e/cm13gdq1600chmh0c3rgskuib/tour"
allowFullScreen
webkitallowfullscreen="true"
mozallowfullscreen="true"
allowtransparency="true"
></iframe>
</div>
</details>

## Change Your Default Language

1. Navigate to `Invoice & Quote Settings > Language Settings`.
2. Select your preferred default language from the dropdown menu.
3. Save your changes.

All future invoices and quotes will use this language by default. However, you can still override this setting and choose any language when creating individual invoices or quotes.

:::tip
Changing the default language affects not only invoices but also payment/preview pages and invoice-related emails (e.g., overdue notices, partial payment confirmations, and deposit requests).
:::

## Customizing a Language

Fiskl's language customization feature allows you to tailor the terminology to your specific business needs or regional preferences. Here's how to do it:

1. **Clone an existing language:**
   - Select the language you want to customize as a base.
   - Choose "New Language" to create a clone.

2. **Edit the cloned language:**
   - Once you have your new language, you can modify any of the mapped translations.

3. **Save your custom language:**
   - After making your desired changes, save your new custom language.

### Use Cases for Language Customization

- **Dialectal variations:** Adjust terms to match regional dialects or local preferences.
- **Industry-specific terminology:** Change "Client" to "Customer," "Patient," or "Student" to align with your business type.
- **Brand voice:** Tailor the language to match your company's unique tone and style.

:::caution
Some mappings include placeholders where values are substituted when generating documents. For example: `Payment ({{1}} of {{2}})`

When editing these values, ensure you retain the placeholders (e.g., `{{1}}`, `{{2}}`). Otherwise, your documents may not generate correctly.
:::

## Best Practices for Language Customization

1. **Consistency:** Maintain consistent terminology across all customized fields.
2. **Clarity:** Ensure your customized terms are clear and unambiguous.
3. **Testing:** After customization, generate test invoices to verify all changes appear correctly.
4. **Documentation:** Keep a record of your customized terms for future reference.

## FAQs

**Q: Can I have multiple custom languages?**
A: Yes, you can create multiple custom languages based on different base languages.

**Q: Will customizing a language affect my existing invoices?**
A: Yes, if your existing invoices use the same custom language, they will be affected. If you don't want any prior invoices to be altered, create a new custom language instead of modifying an existing one.

**Q: Can I revert to the original language if needed?**
A: Yes, you can always select the original, non-customized language when creating invoices or setting your default language.

**Q: How can I ensure my customizations don't affect existing invoices?**
A: To preserve the language on existing invoices while making changes:
1. Clone the language you want to modify.
2. Make your customizations to the cloned version.
3. Use the new custom language for future invoices.

This way, your existing invoices will retain their original language, while new invoices will use your updated custom language.

**Q: Can I preview my custom language before applying it to invoices?**
A: While there isn't a built-in preview feature, you can create a test invoice using your custom language to see how your changes appear in practice. Remember to void or delete this test invoice if it's not needed for your records.

By understanding these aspects of language customization in Fiskl, you can effectively manage your invoice language settings while maintaining the integrity of your existing documents.