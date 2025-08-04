---
title: "ShopResourceLimits"
description: "Shopify GraphQL Admin API documentation for shopresourcelimits"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopResourceLimits - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits

Markdown Content:
ShopResourceLimits - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

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
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store properties

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Business Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity)
        *   [Business Entity Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress)
        *   [Cart Transform Eligible Operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformeligibleoperations)
        *   [Cart Transform Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformfeature)
        *   [Currency Formats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats)
        *   [Filter Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/filteroption)
        *   [Limited Pending Order Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/limitedpendingordercount)
        *   [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location)
        *   [Location Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationaddress)
        *   [Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationscondition)
        *   [Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot)
        *   [Location Suggested Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsuggestedaddress)
        *   [Navigation Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/navigationitem)
        *   [Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop)
        *   [Shop Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress)
        *   [Shop Features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures)
        *   [Shop Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopplan)
        *   [Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to ShopResourceLimits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#top)
Shop Resource Limits
====================

object

Resource limits of a shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to locationLimit](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#field-ShopResourceLimits.fields.locationLimit)location Limit

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

Maximum number of locations allowed.

[Anchor to maxProductOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#field-ShopResourceLimits.fields.maxProductOptions)max Product Options

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

Maximum number of product options allowed.

[Anchor to maxProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#field-ShopResourceLimits.fields.maxProductVariants)max Product Variants

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The maximum number of variants allowed per product.

[Anchor to redirectLimitReached](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits#field-ShopResourceLimits.fields.redirectLimitReached)redirect Limit Reached

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the shop has reached the limit of the number of URL redirects it can make for resources.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Shop.resourceLimits](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-resourceLimits)


---
*Content truncated at "Updates" section*