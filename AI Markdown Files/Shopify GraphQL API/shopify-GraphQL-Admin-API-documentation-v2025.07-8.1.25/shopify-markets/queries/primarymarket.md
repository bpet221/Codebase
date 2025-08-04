---
title: "primaryMarket"
description: "Shopify GraphQL Admin API documentation for primarymarket"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket"
extraction_method: "jina"
sections: ['Shopify Markets', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: primaryMarket - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket

Markdown Content:
primaryMarket - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket#main-content)

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
*   
Shopify Markets

    *   
Queries

        *   [backup Region](https://shopify.dev/docs/api/admin-graphql/latest/queries/backupregion)
        *   [market](https://shopify.dev/docs/api/admin-graphql/latest/queries/market)
        *   [market By Geography](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketbygeography)
        *   [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)
        *   [markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues)
        *   [primary Market](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket)
        *   [web Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences)

    *   Mutations   
    *   Objects   

*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to primaryMarket](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket#top)
primary Market
==============

query

Requires The user must have markets API access.

Deprecated.Use [backupRegion](https://shopify.dev/docs/api/admin-graphql/latest/queries/backupRegion) instead.

The primary market of the shop.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Market](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket#returns-Market)Market

•[Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### primaryMarket reference

Hide content

Query Reference
---------------

Copy

9

1

2

3

4

5

›

⌄

⌄

{

primaryMarket {

# primaryMarket fields

}

}


---
*Content truncated at "Updates" section*