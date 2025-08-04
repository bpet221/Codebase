---
title: "MetafieldDefinitionValidation"
description: "Shopify GraphQL Admin API documentation for metafielddefinitionvalidation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation"
extraction_method: "jina"
sections: ['Metafields', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MetafieldDefinitionValidation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation

Markdown Content:
MetafieldDefinitionValidation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation#main-content)

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
        *   [Metafield Definition Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation)
        *   [Standard Metafield Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate)

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

[Anchor to MetafieldDefinitionValidation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation#top)
Metafield Definition Validation
===============================

object

A configured metafield definition validation.

For example, for a metafield definition of `number_integer` type, you can set a validation with the name `max` and a value of `15`. This validation will ensure that the value of the metafield is a number less than or equal to 15.

Refer to the [list of supported validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation#fields)Fields
------------------------------------------------------------------------------------------------------------------------

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation#field-MetafieldDefinitionValidation.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The validation name.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation#field-MetafieldDefinitionValidation.fields.type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name for the metafield type of this validation.

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation#field-MetafieldDefinitionValidation.fields.value)value

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The validation value.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MetafieldDefinition.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-validations)
*   {}[MetaobjectFieldDefinition.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition#field-validations)
*   {}[StandardMetafieldDefinitionTemplate.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate#field-validations)
*   {}[StandardMetaobjectDefinitionFieldTemplate.validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionFieldTemplate#field-validations)


---
*Content truncated at "Updates" section*