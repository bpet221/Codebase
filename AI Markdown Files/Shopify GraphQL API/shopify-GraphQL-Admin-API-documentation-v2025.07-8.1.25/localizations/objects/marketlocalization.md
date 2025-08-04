---
title: "MarketLocalization"
description: "Shopify GraphQL Admin API documentation for marketlocalization"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization"
extraction_method: "jina"
sections: ['Localizations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketLocalization - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization

Markdown Content:
MarketLocalization - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#mutations)
        *   [Shop Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoplocale)
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

[Anchor to MarketLocalization](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#top)
Market Localization
===================

object

The market localization of a field within a resource, which is determined by the market ID.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#field-MarketLocalization.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A reference to the value being localized on the resource that this market localization belongs to.

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#field-MarketLocalization.fields.market)market

•[Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

non-null

The market that the localization is specific to.

Show fields

[Anchor to outdated](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#field-MarketLocalization.fields.outdated)outdated

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the original content has changed since this market localization was updated.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#field-MarketLocalization.fields.updatedAt)updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the market localization was updated.

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#field-MarketLocalization.fields.value)value

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The value of the market localization.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MarketLocalizableResource.marketLocalizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource#field-marketLocalizations)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------

[Anchor to marketLocalizationsRegister](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#mutation-marketLocalizationsRegister)[market Localizations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)

•mutation

Creates or updates market localizations.

Show payload

[Anchor to marketLocalizationsRemove](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketlocalization#mutation-marketLocalizationsRemove)[market Localizations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)

•mutation

Deletes market localizations.

Show payload

* * *

Was this section helpful?

Yes No

<~>MarketLocalization Mutations
-------------------------------

### Mutated by

*   <~>[market Localizations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRegister)
*   <~>[market Localizations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketLocalizationsRemove)


---
*Content truncated at "Updates" section*