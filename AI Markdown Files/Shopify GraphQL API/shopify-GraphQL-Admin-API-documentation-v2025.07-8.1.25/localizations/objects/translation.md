---
title: "Translation"
description: "Shopify GraphQL Admin API documentation for translation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/translation"
extraction_method: "jina"
sections: ['Localizations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Translation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/translation

Markdown Content:
Translation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#main-content)

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
        *   [Translatable Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatablecontent)
        *   [Translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource)
        *   [Translation](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#mutations)

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

[Anchor to Translation](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#top)
Translation
===========

object

Translation of a field of a resource.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#field-Translation.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

On the resource that this translation belongs to, the reference to the value being translated.

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#field-Translation.fields.locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

ISO code of the translation locale.

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#field-Translation.fields.market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

The market that the translation is specific to. Null value means the translation is available in all markets.

Show fields

[Anchor to outdated](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#field-Translation.fields.outdated)outdated

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the original content has changed since this translation was updated.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#field-Translation.fields.updatedAt)updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the translation was updated.

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#field-Translation.fields.value)value

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Translation value.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Article.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-translations)
*   {}[Blog.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-translations)
*   {}[Collection.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-translations)
*   {}[CookieBanner.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CookieBanner#field-translations)
*   ||-[HasPublishedTranslations.translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations#field-translations)
*   {}[Link.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Link#field-translations)
*   {}[Menu.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu#field-translations)
*   {}[OnlineStoreTheme.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-translations)
*   {}[Page.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-translations)
*   {}[Product.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-translations)
*   {}[ProductOption.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption#field-translations)
*   {}[ProductOptionValue.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue#field-translations)
*   {}[ProductVariant.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-translations)
*   {}[SellingPlan.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-translations)
*   {}[SellingPlanGroup.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-translations)
*   {}[Shop.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-translations)
*   {}[ShopPolicy.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-translations)
*   {}[TranslatableResource.translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-translations)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to translationsRegister](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#mutation-translationsRegister)[translations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)

•mutation

Creates or updates translations.

Show payload

[Anchor to translationsRemove](https://shopify.dev/docs/api/admin-graphql/latest/objects/translation#mutation-translationsRemove)[translations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)

•mutation

Deletes translations.

Show payload

* * *

Was this section helpful?

Yes No

<~>Translation Mutations
------------------------

### Mutated by

*   <~>[translations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister)
*   <~>[translations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRemove)


---
*Content truncated at "Updates" section*