---
title: "CheckoutBrandingHeader"
description: "Shopify GraphQL Admin API documentation for checkoutbrandingheader"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader"
extraction_method: "jina"
sections: ['Checkout branding', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CheckoutBrandingHeader - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader

Markdown Content:
CheckoutBrandingHeader - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#main-content)

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

[Anchor to CheckoutBrandingHeader](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#top)
Checkout Branding Header
========================

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The header customizations.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#fields)Fields
-----------------------------------------------------------------------------------------------------------------

[Anchor to alignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.alignment)alignment

•[Checkout Branding Header Alignment](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingHeaderAlignment)

The header alignment.

Show enum values

[Anchor to banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.banner)banner

•[Checkout Branding Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingImage)

The background image of the header.

Show fields

[Anchor to cartLink](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.cartLink)cart Link

•[Checkout Branding Header Cart Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingHeaderCartLink)

The cart link customizations for 1-page checkout. This field allows to customize the cart icon that renders by default on 1-page checkout.

Show fields

[Anchor to colorScheme](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.colorScheme)color Scheme

•[Checkout Branding Color Scheme Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingColorSchemeSelection)

The selected color scheme of the header container.

Show enum values

[Anchor to divided](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.divided)divided

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

The divided setting.

[Anchor to logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.logo)logo

•[Checkout Branding Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingLogo)

The store logo.

Show fields

[Anchor to padding](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.padding)padding

•[Checkout Branding Spacing Keyword](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingSpacingKeyword)

The padding of the header container.

Show enum values

[Anchor to position](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader#field-CheckoutBrandingHeader.fields.position)position

•[Checkout Branding Header Position](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutBrandingHeaderPosition)

The header position.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CheckoutBrandingCustomizations.header](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations#field-header)


---
*Content truncated at "Updates" section*