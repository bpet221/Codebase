---
title: "CurrencyFormats"
description: "Shopify GraphQL Admin API documentation for currencyformats"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CurrencyFormats - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats

Markdown Content:
CurrencyFormats - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#main-content)

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
*   Checkout Branding   
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
*   
Store Properties

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

[Anchor to CurrencyFormats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#top)
Currency Formats
================

object

Currency formats configured for the merchant. These formats are available to use within Liquid.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to moneyFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#field-CurrencyFormats.fields.moneyFormat)money Format

•[Formatted String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

non-null

Money without currency in HTML.

[Anchor to moneyInEmailsFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#field-CurrencyFormats.fields.moneyInEmailsFormat)money In Emails Format

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Money without currency in emails.

[Anchor to moneyWithCurrencyFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#field-CurrencyFormats.fields.moneyWithCurrencyFormat)money With Currency Format

•[Formatted String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

non-null

Money with currency in HTML.

[Anchor to moneyWithCurrencyInEmailsFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats#field-CurrencyFormats.fields.moneyWithCurrencyInEmailsFormat)money With Currency In Emails Format

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Money with currency in emails.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Shop.currencyFormats](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-currencyFormats)


---
*Content truncated at "Updates" section*