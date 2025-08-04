---
title: "LocalizationExtension"
description: "Shopify GraphQL Admin API documentation for localizationextension"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension"
extraction_method: "jina"
sections: ['Localizations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: LocalizationExtension - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension

Markdown Content:
LocalizationExtension - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#main-content)

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
        *   [Translatable Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent)
        *   [Translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource)
        *   [Translation](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation)

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
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to LocalizationExtension](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#top)
Localization Extension
======================

object

Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#field-LocalizationExtension.fields.countryCode)country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

Country ISO 3166-1 alpha-2 code.

Show enum values

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#field-LocalizationExtension.fields.key)key

•[Localization Extension Key!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionKey)

non-null

The localized extension keys that are allowed.

Show enum values

[Anchor to purpose](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#field-LocalizationExtension.fields.purpose)purpose

•[Localization Extension Purpose!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose)

non-null

The purpose of this localization extension.

Show enum values

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#field-LocalizationExtension.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The localized extension title.

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizationextension#field-LocalizationExtension.fields.value)value

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The value of the field.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[LocalizationExtensionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#field-nodes)
*   {}[LocalizationExtensionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtensionEdge#field-node)

Show deprecations


---
*Content truncated at "Updates" section*