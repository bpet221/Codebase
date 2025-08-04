---
title: "CartTransform"
description: "Shopify GraphQL Admin API documentation for carttransform"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform"
extraction_method: "jina"
sections: ['Cart', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CartTransform - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform

Markdown Content:
CartTransform - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#main-content)

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
*   
Cart

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Cart Transform](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#interfaces)

*   Checkout Branding   
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
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

[Anchor to CartTransform](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#top)
Cart Transform
==============

object

Requires `read_cart_transforms` access scope.

A Cart Transform Function to create [Customized Bundles.](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to blockOnFailure](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#field-CartTransform.fields.blockOnFailure)block On Failure

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a run failure will block cart and checkout operations.

[Anchor to functionId](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#field-CartTransform.fields.functionId)function Id

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The ID for the Cart Transform function.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#field-CartTransform.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#field-CartTransform.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#field-CartTransform.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[CartTransformConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#field-nodes)
*   {}[CartTransformEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#queries)Queries
-----------------------------------------------------------------------------------------------------------

[Anchor to cartTransforms](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#query-cartTransforms)[cart Transforms](https://shopify.dev/docs/api/admin-graphql/latest/queries/cartTransforms)

•query

List of Cart transform objects owned by the current API client.

Show fields

* * *

Was this section helpful?

Yes No

<?>CartTransform Queries
------------------------

### Queried by

*   <?>[cart Transforms](https://shopify.dev/docs/api/admin-graphql/latest/queries/CartTransformConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------

[Anchor to cartTransformCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#mutation-cartTransformCreate)[cart Transform Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

•mutation

Create a CartTransform function to the Shop.

Show payload

* * *

Was this section helpful?

Yes No

<~>CartTransform Mutations
--------------------------

### Mutated by

*   <~>[cart Transform Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/cartTransformCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransform#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CartTransform Implements
---------------------------

### Implements

*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*