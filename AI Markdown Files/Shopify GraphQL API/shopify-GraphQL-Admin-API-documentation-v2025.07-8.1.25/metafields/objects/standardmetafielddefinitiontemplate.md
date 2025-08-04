---
title: "StandardMetafieldDefinitionTemplate"
description: "Shopify GraphQL Admin API documentation for standardmetafielddefinitiontemplate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate"
extraction_method: "jina"
sections: ['Metafields', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: StandardMetafieldDefinitionTemplate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate

Markdown Content:
StandardMetafieldDefinitionTemplate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#main-content)

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
        *   [Metafield Definition Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation)
        *   [Standard Metafield Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#interfaces)

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

[Anchor to StandardMetafieldDefinitionTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#top)
Standard Metafield Definition Template
======================================

object

Standard metafield definition templates provide preset configurations to create metafield definitions. Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.

Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#fields)Fields
------------------------------------------------------------------------------------------------------------------------------

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The description of the standard metafield definition.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The key owned by the definition after the definition has been activated.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The human-readable name for the standard metafield definition.

[Anchor to namespace](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.namespace)namespace

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The namespace owned by the definition after the definition has been activated.

[Anchor to ownerTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.ownerTypes)owner Types

•[[Metafield Owner Type!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

non-null

The list of resource types that the standard metafield definition can be applied to.

Show enum values

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.type)type

•[Metafield Definition Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

non-null

The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores.

Show fields

[Anchor to validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.validations)validations

•[[Metafield Definition Validation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

non-null

The configured validations for the standard metafield definition.

Show fields

[Anchor to visibleToStorefrontApi](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#field-StandardMetafieldDefinitionTemplate.fields.visibleToStorefrontApi)visible To Storefront Api

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether metafields for the definition are by default visible using the Storefront API.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[MetafieldDefinition.standardTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-standardTemplate)
*   <->[StandardMetafieldDefinitionTemplateConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#field-nodes)
*   {}[StandardMetafieldDefinitionTemplateEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplateEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#queries)Queries
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to standardMetafieldDefinitionTemplates](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#query-standardMetafieldDefinitionTemplates)[standard Metafield Definition Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

•query

Standard metafield definitions are intended for specific, common use cases. Their namespace and keys reflect these use cases and are reserved.

Refer to all available [`Standard Metafield Definition Templates`](https://shopify.dev/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate).

Show fields

* * *

Was this section helpful?

Yes No

<?>StandardMetafieldDefinitionTemplate Queries
----------------------------------------------

### Queried by

*   <?>[standard Metafield Definition Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/StandardMetafieldDefinitionTemplateConnection)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-StandardMetafieldDefinitionTemplate Implements
-------------------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*