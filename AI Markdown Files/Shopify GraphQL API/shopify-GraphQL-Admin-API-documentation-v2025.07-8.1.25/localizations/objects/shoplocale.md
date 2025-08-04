---
title: "ShopLocale"
description: "Shopify GraphQL Admin API documentation for shoplocale"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale"
extraction_method: "jina"
sections: ['Localizations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopLocale - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale

Markdown Content:
ShopLocale - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#main-content)

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
*   
Localizations

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/locale)
        *   [Localization Extension](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension)
        *   [Market Localizable Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalizablecontent)
        *   [Market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalizableresource)
        *   [Market Localization](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization)
        *   [Shop Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#mutations)
        *   [Translatable Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent)
        *   [Translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource)
        *   [Translation](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation)

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

[Anchor to ShopLocale](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#top)
Shop Locale
===========

object

Requires `read_locales` access scope or `read_markets_home` access scope.

A locale that's been enabled on a shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#fields)Fields
-----------------------------------------------------------------------------------------------------

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#field-ShopLocale.fields.locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The locale ISO code.

[Anchor to marketWebPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#field-ShopLocale.fields.marketWebPresences)market Web Presences

•[[Market Web Presence!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

non-null

The market web presences that use the locale.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#field-ShopLocale.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The human-readable locale name.

[Anchor to primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#field-ShopLocale.fields.primary)primary

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the locale is the default locale for the shop.

[Anchor to published](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#field-ShopLocale.fields.published)published

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the locale is visible to buyers.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MarketWebPresence.alternateLocales](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-alternateLocales)
*   {}[MarketWebPresence.defaultLocale](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-defaultLocale)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#queries)Queries
--------------------------------------------------------------------------------------------------------

[Anchor to shopLocales](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#query-shopLocales)[shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopLocales)

•query

A list of locales available on a shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>ShopLocale Queries
---------------------

### Queried by

*   <?>[shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/ShopLocale)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#mutations)Mutations
--------------------------------------------------------------------------------------------------------------

[Anchor to shopLocaleEnable](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#mutation-shopLocaleEnable)[shop Locale Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)

•mutation

Adds a locale for a shop. The newly added locale is in the unpublished state.

Show payload

[Anchor to shopLocaleUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale#mutation-shopLocaleUpdate)[shop Locale Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)

•mutation

Updates a locale for a shop.

Show payload

* * *

Was this section helpful?

Yes No

<~>ShopLocale Mutations
-----------------------

### Mutated by

*   <~>[shop Locale Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleEnable)
*   <~>[shop Locale Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopLocaleUpdate)


---
*Content truncated at "Updates" section*