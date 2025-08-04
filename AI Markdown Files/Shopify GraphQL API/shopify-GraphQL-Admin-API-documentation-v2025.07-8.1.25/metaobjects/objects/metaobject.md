---
title: "Metaobject"
description: "Shopify GraphQL Admin API documentation for metaobject"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject"
extraction_method: "jina"
sections: ['Metaobjects', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Metaobject - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject

Markdown Content:
Metaobject - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#interfaces)
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

[Anchor to Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#top)
Metaobject
==========

object

Requires `read_metaobjects` access scope.

Provides an object instance represented by a MetaobjectDefinition.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#fields)Fields
-----------------------------------------------------------------------------------------------------

[Anchor to capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.capabilities)capabilities

•[Metaobject Capability Data!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilityData)

non-null

Metaobject capabilities for this Metaobject.

Show fields

[Anchor to createdBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.createdBy)created By

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The app used to create the object.

Show fields

[Anchor to createdByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.createdByApp)created By App

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The app used to create the object.

Show fields

[Anchor to createdByStaff](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.createdByStaff)created By Staff

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The staff member who created the metaobject.

Show fields

[Anchor to definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.definition)definition

•[Metaobject Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

non-null

The MetaobjectDefinition that models this object type.

Show fields

[Anchor to displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.displayName)display Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The preferred display name field value of the metaobject.

[Anchor to field](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.field)field

•[Metaobject Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

The field for an object key, or null if the key has no field definition.

Show fields

[Anchor to fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.fields)fields

•[[Metaobject Field!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

non-null

All ordered fields of the metaobject with their definitions and values.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique handle of the object, useful as a custom ID.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to referencedBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.referencedBy)referenced By

•[Metafield Relation Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection)

non-null

List of back references metafields that belong to the resource.

Show fields

[Anchor to thumbnailField](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.thumbnailField)thumbnail Field

•[Metaobject Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

The recommended field to visually represent this metaobject. May be a file reference or color field.

Show fields

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The type of the metaobject.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

When the object was last updated.

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#field-Metaobject.fields.staffMember)staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[MetaobjectConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#field-nodes)
*   {}[MetaobjectDefinition.metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-metaobjects)
*   {}[MetaobjectEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge#field-node)

### Possible type in

*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#queries)Queries
--------------------------------------------------------------------------------------------------------

[Anchor to metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#query-metaobject)[metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobject)

•query

Retrieves a metaobject by ID.

Show fields

[Anchor to metaobjectByHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#query-metaobjectByHandle)[metaobject By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectByHandle)

•query

Retrieves a metaobject by handle.

Show fields

[Anchor to metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#query-metaobjects)[metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

•query

All metaobjects for the shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>Metaobject Queries
---------------------

### Queried by

*   <?>[metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/Metaobject)
*   <?>[metaobject By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/Metaobject)
*   <?>[metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/MetaobjectConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#mutations)Mutations
--------------------------------------------------------------------------------------------------------------

[Anchor to metaobjectCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#mutation-metaobjectCreate)[metaobject Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)

•mutation

Creates a new metaobject.

Show payload

[Anchor to metaobjectUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#mutation-metaobjectUpdate)[metaobject Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)

•mutation

Updates an existing metaobject.

Show payload

[Anchor to metaobjectUpsert](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#mutation-metaobjectUpsert)[metaobject Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

•mutation

Retrieves a metaobject by handle, then updates it with the provided input values. If no matching metaobject is found, a new metaobject is created with the provided input values.

Show payload

* * *

Was this section helpful?

Yes No

<~>Metaobject Mutations
-----------------------

### Mutated by

*   <~>[metaobject Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate)
*   <~>[metaobject Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate)
*   <~>[metaobject Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Metaobject Implements
------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*