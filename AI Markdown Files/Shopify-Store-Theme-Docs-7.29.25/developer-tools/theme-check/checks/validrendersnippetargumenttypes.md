---
title: "ValidRenderSnippetArgumentTypes"
source: https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types
sections: Developer Tools > Theme Check > Checks
created: 2025-07-29 15:34:38
---

Title: ValidRenderSnippetArgumentTypes

URL Source: https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types

Markdown Content:
ValidRenderSnippetArgumentTypes

===============

 On this page 

*   [Examples](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#examples)
*   [Options](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#options)
*   [Disabling this check](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#disabling-this-check)

ValidRenderSnippetArgumentTypes
===============================

All arguments provided when rendering a snippet must match the respective parameter's type defined in that snippet's LiquidDoc. If the argument is a variable this check will always pass.

Examples
--------

[Anchor link to section titled "Examples"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#examples)

The following examples contain code snippets that either fail or pass this check. All examples refer to the following snippet with optional parameters.

### ✗ Fail

[Anchor link to section titled "✗ Fail"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#fail)

In the following example, the snippet is being rendered with an incorrect type:

### ✓ Pass

[Anchor link to section titled "✓ Pass"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#pass)

In the following example, all arguments passed into the snippet match the expected type:

NOTE: `shop` and `product` are global liquid variables

### ✓ Pass

[Anchor link to section titled "✓ Pass"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#pass)

In the following example, an object is passed as a boolean argument since all Liquid objects can be truthy/falsey:

### ✓ Pass

[Anchor link to section titled "✓ Pass"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#pass)

In the following example, a variable is passed as an argument, which will always pass this check:

Options
-------

[Anchor link to section titled "Options"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#options)

The following example contains the default configuration for this check:

| Parameter | Description |
| --- | --- |
| `enabled` | Whether this check is enabled. |
| `severity` | The [severity](https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration#check-severity) of the check. |

Disabling this check
--------------------

[Anchor link to section titled "Disabling this check"](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#disabling-this-check)

Disabling this check isn't recommended.

### On this page

*   [Examples](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#examples)
*   [Options](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#options)
*   [Disabling this check](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types#disabling-this-check)
