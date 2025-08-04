---
title: "MetafieldDefinition"
description: "Shopify GraphQL Admin API documentation for metafielddefinition"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition"
extraction_method: "jina"
sections: ['Metafields', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MetafieldDefinition - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition

Markdown Content:
MetafieldDefinition - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#interfaces)
        *   [Metafield Definition Supported Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionsupportedvalidation)
        *   [Metafield Definition Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype)
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

[Anchor to MetafieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#top)
Metafield Definition
====================

object

Metafield definitions enable you to define additional validation constraints for metafields, and enable the merchant to edit metafield values in context.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to access](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.access)access

•[Metafield Access!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldAccess)

non-null

The access settings associated with the metafield definition.

Show fields

[Anchor to capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.capabilities)capabilities

•[Metafield Capabilities!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldCapabilities)

non-null

The capabilities of the metafield definition.

Show fields

[Anchor to constraints](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.constraints)constraints

•[Metafield Definition Constraints](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints)

The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what subtypes of resources a metafield definition applies to.

Show fields

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The description of the metafield definition.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique identifier for the metafield definition within its namespace.

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

The metafields that belong to the metafield definition.

Show fields

[Anchor to metafieldsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.metafieldsCount)metafields Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The count of the metafields that belong to the metafield definition.

Show arguments

### Arguments

[Anchor to validationStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.metafieldsCount.arguments.validationStatus)validation Status

•[Metafield Validation Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldValidationStatus)

The current validation status.

Show enum values

* * *

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The human-readable name of the metafield definition.

[Anchor to namespace](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.namespace)namespace

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The container for a group of metafields that the metafield definition is associated with.

[Anchor to ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.ownerType)owner Type

•[Metafield Owner Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

non-null

The resource type that the metafield definition is attached to.

Show enum values

[Anchor to pinnedPosition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.pinnedPosition)pinned Position

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The position of the metafield definition in the pinned list.

[Anchor to standardTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.standardTemplate)standard Template

•[Standard Metafield Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate)

The standard metafield definition template associated with the metafield definition.

Show fields

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.type)type

•[Metafield Definition Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

non-null

The type of data that each of the metafields that belong to the metafield definition will store. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

Show fields

[Anchor to useAsCollectionCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.useAsCollectionCondition)use As Collection Condition

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the metafield definition can be used as a collection condition.

[Anchor to validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.validations)validations

•[[Metafield Definition Validation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

non-null

A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for the metafields that belong to the metafield definition. For example, for a metafield definition with the type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only store dates after the specified minimum.

Show fields

[Anchor to validationStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#field-MetafieldDefinition.fields.validationStatus)validation Status

•[Metafield Definition Validation Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionValidationStatus)

non-null

The validation status for the metafields that belong to the metafield definition.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CollectionRuleMetafieldCondition.metafieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleMetafieldCondition#field-metafieldDefinition)
*   {}[Metafield.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-definition)
*   <->[MetafieldDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#field-nodes)
*   {}[MetafieldDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionEdge#field-node)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#queries)Queries
-----------------------------------------------------------------------------------------------------------------

[Anchor to metafieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#query-metafieldDefinition)[metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinition)

•query

Returns a metafield definition by identifier.

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#query-metafieldDefinitions)[metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

•query

Returns a list of metafield definitions.

Show fields

* * *

Was this section helpful?

Yes No

<?>MetafieldDefinition Queries
------------------------------

### Queried by

*   <?>[metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetafieldDefinition)
*   <?>[metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetafieldDefinitionConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------------

[Anchor to metafieldDefinitionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutation-metafieldDefinitionCreate)[metafield Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)

•mutation

Creates a metafield definition. Any metafields existing under the same owner type, namespace, and key will be checked against this definition and will have their type updated accordingly. For metafields that are not valid, they will remain unchanged but any attempts to update them must align with this definition.

Show payload

[Anchor to metafieldDefinitionPin](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutation-metafieldDefinitionPin)[metafield Definition Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)

•mutation

You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

Show payload

[Anchor to metafieldDefinitionUnpin](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutation-metafieldDefinitionUnpin)[metafield Definition Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)

•mutation

You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

Show payload

[Anchor to metafieldDefinitionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutation-metafieldDefinitionUpdate)[metafield Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)

•mutation

Updates a metafield definition.

Show payload

[Anchor to standardMetafieldDefinitionEnable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#mutation-standardMetafieldDefinitionEnable)[standard Metafield Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

•mutation

Activates the specified standard metafield definition from its template.

Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

Show payload

* * *

Was this section helpful?

Yes No

<~>MetafieldDefinition Mutations
--------------------------------

### Mutated by

*   <~>[metafield Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionCreate)
*   <~>[metafield Definition Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)
*   <~>[metafield Definition Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)
*   <~>[metafield Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)
*   <~>[standard Metafield Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-MetafieldDefinition Implements
---------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*