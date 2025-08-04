---
title: "MarketsResolvedValues"
description: "Shopify GraphQL Admin API documentation for marketsresolvedvalues"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues"
extraction_method: "jina"
sections: ['Shopify Markets', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketsResolvedValues - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues

Markdown Content:
MarketsResolvedValues - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#main-content)

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
*   
Shopify Markets

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/market)
        *   [Market Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions)
        *   [Market Currency Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketcurrencysettings)
        *   [Market Region Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry)
        *   [Markets B2BEntitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsb2bentitlement)
        *   [Markets Regions Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsregionsentitlement)
        *   [Markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#queries)
        *   [Markets Retail Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsretailentitlement)
        *   [Market Web Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence)
        *   [Market Web Presence Root Url](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresencerooturl)
        *   [Regions Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/regionscondition)
        *   [Resolved Price Inclusivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/resolvedpriceinclusivity)

*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to MarketsResolvedValues](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#top)
Markets Resolved Values
=======================

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#field-MarketsResolvedValues.fields.catalogs)catalogs

•[Market Catalog Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection)

non-null

The resolved catalogs.

Show fields

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#field-MarketsResolvedValues.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The resolved currency code.

Show enum values

[Anchor to priceInclusivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#field-MarketsResolvedValues.fields.priceInclusivity)price Inclusivity

•[Resolved Price Inclusivity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResolvedPriceInclusivity)

non-null

The resolved price inclusivity attributes.

Show fields

[Anchor to webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#field-MarketsResolvedValues.fields.webPresences)web Presences

•[Market Web Presence Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection)

non-null

The resolved web presences ordered by priority.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#queries)Queries
-------------------------------------------------------------------------------------------------------------------

[Anchor to marketsResolvedValues](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues#query-marketsResolvedValues)[markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsResolvedValues)

•query

The resolved values for a buyer signal.

Show fields

* * *

Was this section helpful?

Yes No

<?>MarketsResolvedValues Queries
--------------------------------

### Queried by

*   <?>[markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketsResolvedValues)


---
*Content truncated at "Updates" section*