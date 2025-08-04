---
title: "MetaobjectDefinition"
description: "Shopify GraphQL Admin API documentation for metaobjectdefinition"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition"
extraction_method: "jina"
sections: ['Metaobjects', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MetaobjectDefinition - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition

Markdown Content:
MetaobjectDefinition - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#main-content)

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
*   Metafields   
*   
Metaobjects

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject)
        *   [Metaobject Access](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectaccess)
        *   [Metaobject Capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilities)
        *   [Metaobject Capabilities Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiesonlinestore)
        *   [Metaobject Capabilities Publishable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiespublishable)
        *   [Metaobject Capabilities Renderable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiesrenderable)
        *   [Metaobject Capabilities Translatable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiestranslatable)
        *   [Metaobject Capability Data](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydata)
        *   [Metaobject Capability Data Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydataonlinestore)
        *   [Metaobject Capability Data Publishable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydatapublishable)
        *   [Metaobject Capability Definition Data Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore)
        *   [Metaobject Capability Definition Data Renderable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondatarenderable)
        *   [Metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#interfaces)
        *   [Metaobject Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfield)
        *   [Metaobject Field Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition)

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

[Anchor to MetaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#top)
Metaobject Definition
=====================

object

Requires `read_metaobject_definitions` access scope.

Provides the definition of a generic object structure composed of metafields.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to access](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.access)access

•[Metaobject Access!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectAccess)

non-null

Access configuration for the metaobject definition.

Show fields

[Anchor to capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.capabilities)capabilities

•[Metaobject Capabilities!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilities)

non-null

The capabilities of the metaobject definition.

Show fields

[Anchor to createdByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.createdByApp)created By App

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The app used to create the metaobject definition.

Show fields

[Anchor to createdByStaff](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.createdByStaff)created By Staff

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The staff member who created the metaobject definition.

Show fields

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The administrative description.

[Anchor to displayNameKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.displayNameKey)display Name Key

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The key of a field to reference as the display name for each object.

[Anchor to fieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.fieldDefinitions)field Definitions

•[[Metaobject Field Definition!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectFieldDefinition)

non-null

The fields defined for this object type.

Show fields

[Anchor to hasThumbnailField](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.hasThumbnailField)has Thumbnail Field

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this metaobject definition has field whose type can visually represent a metaobject with the `thumbnailField`.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.metaobjects)metaobjects

•[Metaobject Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection)

non-null

A paginated connection to the metaobjects associated with the definition.

Show fields

[Anchor to metaobjectsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.metaobjectsCount)metaobjects Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The count of metaobjects created for the definition.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The human-readable name.

[Anchor to standardTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.standardTemplate)standard Template

•[Standard Metaobject Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate)

The standard metaobject template associated with the definition.

Show fields

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#field-MetaobjectDefinition.fields.type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The type of the object definition. Defines the namespace of associated metafields.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Metaobject.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-definition)
*   <->[MetaobjectDefinitionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection#field-nodes)
*   {}[MetaobjectDefinitionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#queries)Queries
------------------------------------------------------------------------------------------------------------------

[Anchor to metaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#query-metaobjectDefinition)[metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinition)

•query

Retrieves a metaobject definition by ID.

Show fields

[Anchor to metaobjectDefinitionByType](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#query-metaobjectDefinitionByType)[metaobject Definition By Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitionByType)

•query

Finds a metaobject definition by type.

Show fields

[Anchor to metaobjectDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#query-metaobjectDefinitions)[metaobject Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions)

•query

All metaobject definitions.

Show fields

* * *

Was this section helpful?

Yes No

<?>MetaobjectDefinition Queries
-------------------------------

### Queried by

*   <?>[metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetaobjectDefinition)
*   <?>[metaobject Definition By Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetaobjectDefinition)
*   <?>[metaobject Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetaobjectDefinitionConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#mutations)Mutations
------------------------------------------------------------------------------------------------------------------------

[Anchor to metaobjectDefinitionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#mutation-metaobjectDefinitionCreate)[metaobject Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)

•mutation

Creates a new metaobject definition.

Show payload

[Anchor to metaobjectDefinitionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#mutation-metaobjectDefinitionUpdate)[metaobject Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)

•mutation

Updates a metaobject definition with new settings and metafield definitions.

Show payload

[Anchor to standardMetaobjectDefinitionEnable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#mutation-standardMetaobjectDefinitionEnable)[standard Metaobject Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

•mutation

Enables the specified standard metaobject definition from its template.

Show payload

* * *

Was this section helpful?

Yes No

<~>MetaobjectDefinition Mutations
---------------------------------

### Mutated by

*   <~>[metaobject Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionCreate)
*   <~>[metaobject Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate)
*   <~>[standard Metaobject Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-MetaobjectDefinition Implements
----------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*