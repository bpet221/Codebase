---
title: "TranslatableResource"
description: "Shopify GraphQL Admin API documentation for translatableresource"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource"
extraction_method: "jina"
sections: ['Localizations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: TranslatableResource - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource

Markdown Content:
TranslatableResource - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#queries)
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

[Anchor to TranslatableResource](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#top)
Translatable Resource
=====================

object

Requires `read_translations` access scope.

A resource that has translatable fields.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#field-TranslatableResource.fields.nestedTranslatableResources)nested Translatable Resources

•[Translatable Resource Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection)

non-null

Nested translatable resources under the current resource.

Show fields

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#field-TranslatableResource.fields.resourceId)resource Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

GID of the resource.

[Anchor to translatableContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#field-TranslatableResource.fields.translatableContent)translatable Content

•[[Translatable Content!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent)

non-null

Translatable content.

Show fields

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#field-TranslatableResource.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

Translatable content translations (includes unpublished locales).

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[TranslatableResource.nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-nestedTranslatableResources)
*   <->[TranslatableResourceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#field-nodes)
*   {}[TranslatableResourceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#queries)Queries
------------------------------------------------------------------------------------------------------------------

[Anchor to translatableResource](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#query-translatableResource)[translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResource)

•query

A resource that can have localized values for different languages.

Show fields

[Anchor to translatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#query-translatableResources)[translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources)

•query

Resources that can have localized values for different languages.

Show fields

[Anchor to translatableResourcesByIds](https://shopify.dev/docs/api/admin-graphql/latest/objects/translatableresource#query-translatableResourcesByIds)[translatable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResourcesByIds)

•query

Resources that can have localized values for different languages.

Show fields

* * *

Was this section helpful?

Yes No

<?>TranslatableResource Queries
-------------------------------

### Queried by

*   <?>[translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/TranslatableResource)
*   <?>[translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/TranslatableResourceConnection)
*   <?>[translatable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/TranslatableResourceConnection)


---
*Content truncated at "Updates" section*