---
title: "MarketRegionCountry"
description: "Shopify GraphQL Admin API documentation for marketregioncountry"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry"
extraction_method: "jina"
sections: ['Shopify Markets', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketRegionCountry - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry

Markdown Content:
MarketRegionCountry - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#interfaces)
        *   [Markets B2BEntitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsb2bentitlement)
        *   [Markets Regions Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsregionsentitlement)
        *   [Markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues)
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

[Anchor to MarketRegionCountry](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#top)
Market Region Country
=====================

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A country which comprises a market.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to code](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#field-MarketRegionCountry.fields.code)code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

The ISO code identifying the country.

Show enum values

[Anchor to currency](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#field-MarketRegionCountry.fields.currency)currency

•[Currency Setting!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

non-null

The currency which this country uses given its market settings.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#field-MarketRegionCountry.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#field-MarketRegionCountry.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the region.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------

[Anchor to MarketRegion](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#interface-MarketRegion)[Market Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-MarketRegionCountry Implements
---------------------------------

### Implements

*   ||-[Market Region](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*