---
title: "MarketWebPresence"
description: "Shopify GraphQL Admin API documentation for marketwebpresence"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence"
extraction_method: "jina"
sections: ['Shopify Markets', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketWebPresence - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence

Markdown Content:
MarketWebPresence - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#main-content)

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
        *   [Markets Retail Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsretailentitlement)
        *   [Market Web Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#interfaces)
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

[Anchor to MarketWebPresence](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#top)
Market Web Presence
===================

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The market’s web presence, which defines its SEO strategy. This can be a different domain (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language variants. If a market does not have its own web presence, it is accessible on the shop’s primary domain via [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

Note: while the domain/subfolders defined by a market’s web presence are not applicable to custom storefronts, which must manage their own domains and routing, the languages chosen here do govern [the languages available on the Storefront API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in this market.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#fields)Fields
------------------------------------------------------------------------------------------------------------

[Anchor to alternateLocales](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.alternateLocales)alternate Locales

•[[Shop Locale!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

non-null

The ShopLocale object for the alternate locales. When a domain is used, these locales will be available as language-specific subfolders. For example, if English is an alternate locale, and `example.ca` is the market’s domain, then `example.ca/en` will load in English.

Show fields

[Anchor to defaultLocale](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.defaultLocale)default Locale

•[Shop Locale!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

non-null

The ShopLocale object for the default locale. When a domain is used, this is the locale that will be used when the domain root is accessed. For example, if French is the default locale, and `example.ca` is the market’s domain, then `example.ca` will load in French.

Show fields

[Anchor to domain](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.domain)domain

•[Domain](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain)

The web presence’s domain. This field will be null if `subfolderSuffix` isn't null.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.markets)markets

•[Market Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

The associated markets for this web presence.

Show fields

[Anchor to rootUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.rootUrls)root Urls

•[[Market Web Presence Root Url!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceRootUrl)

non-null

The list of root URLs for each of the web presence’s locales. As of version `2024-04` this value will no longer have a trailing slash.

Show fields

[Anchor to subfolderSuffix](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.subfolderSuffix)subfolder Suffix

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null.

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#field-MarketWebPresence.fields.market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Domain.marketWebPresence](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain#field-marketWebPresence)
*   {}[Market.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-webPresences)
*   <->[MarketWebPresenceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#field-nodes)
*   {}[MarketWebPresenceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceEdge#field-node)
*   {}[MarketsResolvedValues.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-webPresences)
*   {}[ShopLocale.marketWebPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale#field-marketWebPresences)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#queries)Queries
---------------------------------------------------------------------------------------------------------------

[Anchor to webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#query-webPresences)[web Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

•query

The web presences for the shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>MarketWebPresence Queries
----------------------------

### Queried by

*   <?>[web Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketWebPresenceConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#mutations)Mutations
---------------------------------------------------------------------------------------------------------------------

[Anchor to webPresenceCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#mutation-webPresenceCreate)[web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)

•mutation

Creates a web presence.

Show payload

[Anchor to webPresenceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#mutation-webPresenceUpdate)[web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

•mutation

Updates a web presence.

Show payload

* * *

Was this section helpful?

Yes No

<~>MarketWebPresence Mutations
------------------------------

### Mutated by

*   <~>[web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceCreate)
*   <~>[web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-MarketWebPresence Implements
-------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*