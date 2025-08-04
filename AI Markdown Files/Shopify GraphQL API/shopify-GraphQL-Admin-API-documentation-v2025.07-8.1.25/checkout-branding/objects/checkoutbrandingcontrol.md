---
title: "CheckoutBrandingControl"
description: "Shopify GraphQL Admin API documentation for checkoutbrandingcontrol"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol"
extraction_method: "jina"
sections: ['Checkout branding', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CheckoutBrandingControl - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol

Markdown Content:
CheckoutBrandingControl - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

Collapse sidebar

GraphQL Admin API

Choose a version: 

2025-07 latest

*   [Overview](https://shopify.dev/docs/api/admin-graphql/latest)
*   [Client libraries](https://shopify.dev/docs/api/admin-graphql/latest#client-libraries)
*   [Authentication](https://shopify.dev/docs/api/admin-graphql/latest#authentication)
*   [Endpoints and queries](https://shopify.dev/docs/api/admin-graphql/latest#endpoints-and-queries)
*   [Rate limits](https://shopify.dev/docs/api/admin-graphql/latest#rate-limits)
*   [Status and error codes](https://shopify.dev/docs/api/admin-graphql/latest#status-and-error-codes)

* * *

*   Access   
*   Apps   
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   
Checkout Branding

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding)
        *   [Checkout Branding Control](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol)
        *   [Checkout Branding Customizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcustomizations)
        *   [Checkout Branding Design System](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingdesignsystem)
        *   [Checkout Branding Font Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup)
        *   [Checkout Branding Font Size](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontsize)
        *   [Checkout Branding Header](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader)
        *   [Checkout Branding Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingimage)
        *   [Checkout Branding Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandinglogo)
        *   [Checkout Branding Main](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingmain)
        *   [Checkout Branding Order Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingordersummary)
        *   [Checkout Branding Typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingtypography)

*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to CheckoutBrandingControl](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#top)
Checkout Branding Control
=========================

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The form controls customizations.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#fields)Fields
------------------------------------------------------------------------------------------------------------------

[Anchor to border](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#field-CheckoutBrandingControl.fields.border)border

•[Checkout Branding Simple Border](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSimpleBorder)

The border used for form controls.

Show enum values

[Anchor to color](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#field-CheckoutBrandingControl.fields.color)color

•[Checkout Branding Color Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSelection)

Set to TRANSPARENT to define transparent form controls. If null, form controls inherit colors from their scheme settings (for example, the main section inherits from `design_system.colors.schemes.scheme1.control` by default). Note that usage of the `customizations.control.color` setting to customize the form control color is deprecated.

Show enum values

[Anchor to cornerRadius](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#field-CheckoutBrandingControl.fields.cornerRadius)corner Radius

•[Checkout Branding Corner Radius](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingCornerRadius)

The corner radius used for form controls.

Show enum values

[Anchor to labelPosition](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol#field-CheckoutBrandingControl.fields.labelPosition)label Position

•[Checkout Branding Label Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingLabelPosition)

The label position used for form controls.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CheckoutBrandingCustomizations.control](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-control)


---
*Content truncated at "Updates" section*