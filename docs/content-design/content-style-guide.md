---
title: Content style guide
sidebar_position: 2
description: Style guide for writing help documentation in Fiskl
toc_min_heading_level: 2
toc_max_heading_level: 4
tags:
  - Style guide
---

## Fiskl Documentation Style Guide

### Core Principles

1. Keep it short and scannable
2. Use less content for lighter cognitive load
3. Keep it simple to make the product appear easy to use
4. Focus on what's useful to the customer
5. Guide with structure using hierarchy and visual elements

### Tone and Voice

- Use a friendly, professional tone
- Write in active voice
- Address the reader directly using "you"
- Use contractions for a conversational feel (e.g., "don't" instead of "do not")

### Grammar and Mechanics

- Use American English spelling (e.g., "color" not "colour")
- Use serial commas (Oxford commas)
- Capitalize proper nouns, including product names (e.g., "Fiskl")
- Use sentence case for headings (capitalize only the first word and proper nouns)

### Formatting and Structure

- Use headings and subheadings to organize content
- Limit paragraphs to 3-4 sentences
- Use bullet points for lists of items
- Use numbered lists for sequential steps
- Bold key terms or important information

### Writing Guidelines

1. Be concise:
   - Eliminate unnecessary words
   - Use simple words over complex ones
   - Aim for an 8th-grade reading level

2. Be specific:
   - Use concrete examples
   - Avoid vague language

3. Use consistent terminology:
   - Maintain a glossary of terms
   - Use "line item" (two words) consistently

4. Write clear instructions:
   - Begin each step with an action verb
   - Provide one instruction per step

5. Use visuals:
   - Include screenshots or diagrams where helpful
   - Ensure all images have descriptive alt text

### Handling Complex Explanations

When dealing with complex topics or features, follow these guidelines:

1. Progressive disclosure:
   - Start with a simple, high-level explanation
   - Gradually introduce more complex details
   - Use clear signposting to guide users through different levels of complexity

2. Layered approach:
   - Layer 1: Brief overview (1-2 sentences)
   - Layer 2: Basic explanation (1-2 paragraphs)
   - Layer 3: Detailed explanation
   - Layer 4: Advanced concepts or edge cases

3. Use analogies and examples:
   - Relate complex concepts to familiar ideas
   - Provide real-world examples to illustrate points

4. Break down complex processes:
   - Use numbered steps for sequential processes
   - Use flowcharts or diagrams for non-linear processes

5. Provide context:
   - Explain why a feature or concept is important
   - Describe when and how users might encounter it

6. Use expandable sections:
   - Hide detailed explanations behind expandable UI elements
   - Allow users to choose their level of engagement with complex topics

   Example:

    <details>
        <summary>Click to expand</summary>
        [Explanation of advanced usage, edge cases, etc.]
    </details>

7. Link to related concepts:
   - Connect complex topics to related, simpler concepts
   - Provide links to prerequisite knowledge

8. Include a summary:
   - Recap key points at the end of complex explanations
   - Highlight the most important takeaways

Example structure for a complex topic:

## Summary

[Recap of key points]

## Related Topics

- [Link to Chart of Accounts]
- [Link to Financial Statements]

Remember: The goal is to make complex information accessible to users at different levels of expertise. Always consider your audience and provide clear paths for both basic understanding and deep dives into complex topics.

[Remainder of the style guide stays the same]

## Numbers and Measurements

- Spell out numbers zero through nine, use numerals for 10 and above
- Use numerals for all measurements (e.g., "3 inches", "5 GB")
- Use the "$" symbol before numbers for currency (e.g., "$10.99")

## Document Formatting

### Links and References

- Use descriptive link text (avoid "click here")
- Ensure all links are functional and relevant

Use descriptive and meaningful text for hyperlinks. This practice improves accessibility, usability, and search engine optimization. The link text should clearly indicate the destination or purpose of the link without relying on surrounding context.

<details>
    <summary>Examples of good and bad links</summary>

        Use descriptive and meaningful text for hyperlinks. This practice improves accessibility, usability, and search engine optimization. The link text should clearly indicate the destination or purpose of the link without relying on surrounding context.

        #### Examples of Good Link Text:

        1. Learn more about Fiskl's invoicing features
        2. Download our expense tracking guide (PDF)
        3. View our pricing plans
        4. Contact Fiskl support
        5. Read our latest blog post on tax tips for small businesses

        #### Examples to Avoid:

        1. Click here to learn about invoicing
        2. Download our guide here
        3. To see our pricing, click this link
        4. For support, click here
        5. Read more

        #### Why This Matters:

        1. Accessibility: Screen readers can navigate from link to link, and descriptive text helps users understand the purpose of each link.
        2. Usability: Users often scan pages for links, and descriptive text makes it easier to find relevant information.
        3. Context: Descriptive links provide context even when read out of context.
        4. SEO: Search engines use link text to understand the content of the linked page.

        Remember, the goal is to make your content as clear and navigable as possible for all users, regardless of how they're accessing your site.

</details>

    ### Using Divider Lines in Documentation

    Divider lines can be a useful tool in documentation to improve readability and organization. However, they should be used judiciously to avoid cluttering the document. Here are guidelines on when and how to use divider lines:

    #### When to Use Divider Lines

    1. To separate major sections: Use divider lines to clearly delineate between main topics or sections in a long document.
    2. Before and after code blocks: Divider lines can help set off code examples from the surrounding text.
    3. To separate header and footer content: In PDF documents or web pages, use divider lines to separate the main content from header or footer information.
    4. In tables: Use horizontal divider lines to separate the header row from the data rows, and to separate groups of related data.
    5. Between items in a long, complex list: If list items are lengthy or contain multiple paragraphs, divider lines can help distinguish between items.
    6. To indicate the end of a chapter in longer documents: This provides a clear visual cue that one chapter has ended and another is beginning.

    #### When Not to Use Divider Lines

    1. Between closely related paragraphs: This can disrupt the flow of reading.
    2. In short documents: If a document is only a few paragraphs long, divider lines are usually unnecessary.
    3. Between each item in a simple list: This can make the document look cluttered.
    4. To separate every subsection: This can make the document look fragmented. Reserve divider lines for major sections.

    Remember, the goal of using divider lines is to enhance readability and organization. If you're unsure whether a divider line is necessary, try the document layout both with and without it, and see which is clearer and easier to read.

    # Fiskl Style Guide

[Previous sections remain unchanged]

### Using Tables in Documentation

Tables can be a powerful tool in documentation, but they should be used judiciously. Here's a concise guide on when to use and when to avoid tables:

#### When to Use Tables

1. Comparing multiple items: Use tables to present side-by-side comparisons of features, pricing plans, or options.
2. Presenting structured data: Tables are ideal for displaying data with clear categories and values.
3. Summarizing information: Use tables to provide a quick overview of complex information.
4. Showing relationships: Tables can effectively illustrate relationships between different elements or concepts.
5. Listing specifications: Use tables for technical specifications or product details.

Example:

```markdown
| Plan       | Price | Features           |
|------------|-------|---------------------|
| Basic      | $9.99 | Invoicing, Expenses |
| Pro        | $19.99| Everything in Basic + Reports |
| Enterprise | $39.99| Everything in Pro + API Access |
```

#### When Not to Use Tables

1. For narrative content: Avoid using tables for content that's better presented as paragraphs or bullet points.
2. With minimal data: If you only have a few data points, a simple list might be more appropriate.
3. For complex, unstructured information: Tables aren't suitable for presenting detailed explanations or step-by-step instructions.
4. When mobile responsiveness is crucial: Tables can be difficult to read on small screens.
5. If the data frequently changes: Tables with constantly changing data can be hard to maintain.

#### Best Practices

1. Keep tables simple and easy to read
2. Use clear, concise headers
3. Align data consistently (left for text, right for numbers)
4. Use alternating row colors for better readability in larger tables
5. Provide a brief introduction or context before the table

Remember, the goal is to enhance understanding. If a table doesn't make the information clearer, consider alternative formats.

## Technical Terms

- Define acronyms and technical terms on first use
- Maintain consistency in capitalization of technical terms

## Accessibility

- Use clear language and avoid jargon
- Provide text alternatives for non-text content
- Ensure sufficient color contrast for text and backgrounds

Remember: The goal is to create documentation that is easy to understand, navigate, and apply. Always consider the user's perspective and needs when writing.
