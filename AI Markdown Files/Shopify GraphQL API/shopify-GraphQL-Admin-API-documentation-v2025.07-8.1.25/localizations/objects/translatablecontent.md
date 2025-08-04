---
title: "TranslatableContent"
description: "Shopify GraphQL Admin API documentation for translatablecontent"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent"
extraction_method: "jina"
sections: ['Localizations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: TranslatableContent - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent

Markdown Content:
TranslatableContent - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#main-content)

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

[Anchor to TranslatableContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#top)
Translatable Content
====================

object

Translatable content of a resource's field.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to digest](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#field-TranslatableContent.fields.digest)digest

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Hash digest representation of the content value.

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#field-TranslatableContent.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The resource field that's being translated.

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#field-TranslatableContent.fields.locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Locale of the content.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#field-TranslatableContent.fields.type)type

•[Localizable Content Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizableContentType)

non-null

Type of the translatable content.

Show enum values

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent#field-TranslatableContent.fields.value)value

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Content value.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[TranslatableResource.translatableContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-translatableContent)


---
*Content truncated at "Updates" section*