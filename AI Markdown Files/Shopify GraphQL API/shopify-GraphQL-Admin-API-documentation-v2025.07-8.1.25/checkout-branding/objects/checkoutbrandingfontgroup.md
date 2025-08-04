---
title: "CheckoutBrandingFontGroup"
description: "Shopify GraphQL Admin API documentation for checkoutbrandingfontgroup"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup"
extraction_method: "jina"
sections: ['Checkout branding', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CheckoutBrandingFontGroup - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup

Markdown Content:
CheckoutBrandingFontGroup - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#main-content)

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

[Anchor to CheckoutBrandingFontGroup](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#top)
Checkout Branding Font Group
============================

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

A font group. To learn more about updating fonts, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to base](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#field-CheckoutBrandingFontGroup.fields.base)base

•[Checkout Branding Font](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutBrandingFont)

The base font.

Show fields

[Anchor to bold](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#field-CheckoutBrandingFontGroup.fields.bold)bold

•[Checkout Branding Font](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CheckoutBrandingFont)

The bold font.

Show fields

[Anchor to loadingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#field-CheckoutBrandingFontGroup.fields.loadingStrategy)loading Strategy

•[Checkout Branding Font Loading Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingFontLoadingStrategy)

The font loading strategy.

Show enum values

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup#field-CheckoutBrandingFontGroup.fields.name)name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The font group name.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CheckoutBrandingTypography.primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypography#field-primary)
*   {}[CheckoutBrandingTypography.secondary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingTypography#field-secondary)


---
*Content truncated at "Updates" section*