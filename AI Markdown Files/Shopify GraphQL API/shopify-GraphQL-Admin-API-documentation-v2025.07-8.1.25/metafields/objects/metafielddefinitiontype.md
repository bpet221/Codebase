---
title: "MetafieldDefinitionType"
description: "Shopify GraphQL Admin API documentation for metafielddefinitiontype"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype"
extraction_method: "jina"
sections: ['Metafields', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MetafieldDefinitionType - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype

Markdown Content:
MetafieldDefinitionType - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#main-content)

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
*   
Metafields

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield)
        *   [Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition)
        *   [Metafield Definition Supported Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionsupportedvalidation)
        *   [Metafield Definition Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#queries)
        *   [Metafield Definition Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation)
        *   [Standard Metafield Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate)

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

[Anchor to MetafieldDefinitionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#top)
Metafield Definition Type
=========================

object

A metafield definition type provides basic foundation and validation for a metafield.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#fields)Fields
------------------------------------------------------------------------------------------------------------------

[Anchor to category](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#field-MetafieldDefinitionType.fields.category)category

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The category associated with the metafield definition type.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#field-MetafieldDefinitionType.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the type for the metafield definition. See the list of [supported types](https://shopify.dev/apps/metafields/types).

[Anchor to supportedValidations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#field-MetafieldDefinitionType.fields.supportedValidations)supported Validations

•[[Metafield Definition Supported Validation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionSupportedValidation)

non-null

The supported validations for a metafield definition type.

Show fields

[Anchor to supportsDefinitionMigrations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#field-MetafieldDefinitionType.fields.supportsDefinitionMigrations)supports Definition Migrations

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether metafields without a definition can be migrated to a definition of this type.

[Anchor to valueType](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#field-MetafieldDefinitionType.fields.valueType)value Type

•[Metafield Value Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValueType)

non-null Deprecated

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MetafieldDefinition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type)
*   {}[MetaobjectFieldDefinition.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition#field-type)
*   {}[StandardMetafieldDefinitionTemplate.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate#field-type)
*   {}[StandardMetaobjectDefinitionFieldTemplate.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate#field-type)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#queries)Queries
---------------------------------------------------------------------------------------------------------------------

[Anchor to metafieldDefinitionTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype#query-metafieldDefinitionTypes)[metafield Definition Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitionTypes)

•query

Each metafield definition has a type, which defines the type of information that it can store. This type is enforced across every instance of the resource that owns the metafield definition.

Refer to the [list of supported metafield types](https://shopify.dev/apps/metafields/types).

Show fields

* * *

Was this section helpful?

Yes No

<?>MetafieldDefinitionType Queries
----------------------------------

### Queried by

*   <?>[metafield Definition Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetafieldDefinitionType)


---
*Content truncated at "Updates" section*