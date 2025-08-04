---
title: "Market"
description: "Shopify GraphQL Admin API documentation for market"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/market"
extraction_method: "jina"
sections: ['Shopify Markets', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Market - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/market

Markdown Content:
Market - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#interfaces)
        *   [Market Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions)
        *   [Market Currency Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketcurrencysettings)
        *   [Market Region Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry)
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

[Anchor to Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#top)
Market
======

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#fields)Fields
-------------------------------------------------------------------------------------------------

[Anchor to assignedCustomization](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.assignedCustomization)assigned Customization

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the market has a customization with the given ID.

Show arguments

### Arguments

[Anchor to customizationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.assignedCustomization.arguments.customizationId)customization Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customization that the market has been assigned to.

* * *

[Anchor to catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.catalogs)catalogs

•[Market Catalog Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection)

non-null

The catalogs that belong to the market.

Show fields

[Anchor to catalogsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.catalogsCount)catalogs Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of catalogs that belong to the market.

Show fields

[Anchor to conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.conditions)conditions

•[Market Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions)

The conditions under which a visitor is in the market.

Show fields

[Anchor to currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.currencySettings)currency Settings

•[Market Currency Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings)

The market’s currency settings.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A short, human-readable unique identifier for the market. This is changeable by the merchant.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the market. Not shown to customers.

[Anchor to priceInclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.priceInclusions)price Inclusions

•[Market Price Inclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions)

The inclusive pricing strategy for a market. This determines if prices include duties and / or taxes.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.status)status

•[Market Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus)

non-null

Status of the market. Replaces the enabled field.

Show enum values

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.type)type

•[Market Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

non-null

The type of the market.

Show enum values

[Anchor to webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.webPresences)web Presences

•[Market Web Presence Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection)

non-null

The market’s web presences, which defines its SEO strategy. This can be a different domain, subdomain, or subfolders of the primary domain. Each web presence comprises one or more language variants. If a market doesn't have any web presences, then the market is accessible on the primary market's domains using [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

Show fields

### Deprecated fields

[Anchor to enabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.enabled)enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to priceList](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.priceList)price List

•[Price List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

Deprecated

Show fields

[Anchor to primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.primary)primary

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.regions)regions

•[Market Region Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection)

non-null Deprecated

Show fields

[Anchor to webPresence](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#field-Market.fields.webPresence)web Presence

•[Market Web Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[MarketCatalog.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-markets)
*   <->[MarketConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#field-nodes)
*   {}[MarketEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge#field-node)
*   {}[MarketLocalization.market](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization#field-market)
*   {}[MarketWebPresence.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-markets)
*   {}[Translation.market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation#field-market)

Show deprecations
### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#queries)Queries
----------------------------------------------------------------------------------------------------

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#query-market)[market](https://shopify.dev/docs/api/admin-graphql/latest/queries/market)

•query

Returns a market resource by ID.

Show fields

[Anchor to markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#query-markets)[markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

•query

The markets configured for the shop.

Show fields

### Deprecated queries

[Anchor to marketByGeography](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#query-marketByGeography)[market By Geography](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketByGeography)

•query

Deprecated

Show fields

[Anchor to primaryMarket](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#query-primaryMarket)[primary Market](https://shopify.dev/docs/api/admin-graphql/latest/queries/primaryMarket)

•query

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

<?>Market Queries
-----------------

### Queried by

*   <?>[market](https://shopify.dev/docs/api/admin-graphql/latest/queries/Market)
*   <?>[markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketConnection)

Show deprecations

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutations)Mutations
----------------------------------------------------------------------------------------------------------

[Anchor to marketCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketCreate)[market Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)

•mutation

Creates a new market.

Show payload

[Anchor to marketCurrencySettingsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketCurrencySettingsUpdate)[market Currency Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCurrencySettingsUpdate)

•mutation

Updates currency settings of a market.

Show payload

[Anchor to marketUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketUpdate)[market Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

•mutation

Updates the properties of a market.

Show payload

### Deprecated mutations

[Anchor to marketRegionDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketRegionDelete)[market Region Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionDelete)

•mutation

Deprecated

Show payload

[Anchor to marketRegionsCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketRegionsCreate)[market Regions Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketRegionsCreate)

•mutation

Deprecated

Show payload

[Anchor to marketWebPresenceCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketWebPresenceCreate)[market Web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceCreate)

•mutation

Deprecated

Show payload

[Anchor to marketWebPresenceDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketWebPresenceDelete)[market Web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceDelete)

•mutation

Deprecated

Show payload

[Anchor to marketWebPresenceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#mutation-marketWebPresenceUpdate)[market Web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketWebPresenceUpdate)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>Market Mutations
-------------------

### Mutated by

*   <~>[market Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate)
*   <~>[market Currency Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCurrencySettingsUpdate)
*   <~>[market Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/market#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Market Implements
--------------------

### Implements

*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*