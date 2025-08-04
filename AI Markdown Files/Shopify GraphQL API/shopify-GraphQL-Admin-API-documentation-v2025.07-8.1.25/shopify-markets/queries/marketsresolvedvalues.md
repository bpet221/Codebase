---
title: "marketsResolvedValues"
description: "Shopify GraphQL Admin API documentation for marketsresolvedvalues"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues"
extraction_method: "jina"
sections: ['Shopify Markets', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketsResolvedValues - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues

Markdown Content:
marketsResolvedValues - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues#main-content)

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

[Anchor to marketsResolvedValues](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues#top)
markets Resolved Values
=======================

query

The resolved values for a buyer signal.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues#arguments)
Arguments
---------

[Anchor to buyerSignal](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues#arguments-buyerSignal)buyer Signal

•[Buyer Signal Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerSignalInput)

required

The buyer signal.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MarketsResolvedValues](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues#returns-MarketsResolvedValues)Markets Resolved Values

•[Markets Resolved Values!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues)

The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketsResolvedValues reference

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

marketsResolvedValues(buyerSignal){

# marketsResolvedValues fields

}

}


---
*Content truncated at "Updates" section*