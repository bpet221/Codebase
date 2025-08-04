---
title: "Publication"
description: "Shopify GraphQL Admin API documentation for publication"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/publication"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Publication - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/publication

Markdown Content:
Publication - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#main-content)

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
*   
Apps

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Android Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication)
        *   [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/app)
        *   [App Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback)
        *   [App Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation)
        *   [Apple Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication)
        *   [Failed Requirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/failedrequirement)
        *   [Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/link)
        *   [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#interfaces)
        *   [Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback)

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

[Anchor to Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#top)
Publication
===========

object

A publication is a group of products and collections that is published to an app.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to autoPublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.autoPublish)auto Publish

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether new products are automatically published to this publication.

[Anchor to catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.catalog)catalog

•[Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

The catalog associated with the publication.

Show fields

[Anchor to collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.collectionPublicationsV3)collection Publications V3

•[Resource Publication Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

non-null

The collection publications for the list of collections published to the publication.

Show fields

[Anchor to collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.collections)collections

•[Collection Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

non-null

The list of collections published to the publication.

Show fields

[Anchor to hasCollection](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.hasCollection)has Collection

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the collection is available to the publication.

Show arguments

### Arguments

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.hasCollection.arguments.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Collection ID to check.

* * *

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to includedProducts](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.includedProducts)included Products

•[Product Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

non-null

The list of products included, but not necessarily published, in the publication.

Show fields

[Anchor to operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.operation)operation

•[Publication Operation](https://shopify.dev/docs/api/admin-graphql/latest/unions/PublicationOperation)

A background operation associated with this publication.

Show union types

[Anchor to productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.productPublicationsV3)product Publications V3

•[Resource Publication Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

non-null

The product publications for the list of products published to the publication.

Show fields

[Anchor to products](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.products)products

•[Product Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

non-null

The list of products published to the publication.

Show fields

[Anchor to supportsFuturePublishing](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.supportsFuturePublishing)supports Future Publishing

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the publication supports future publishing.

### Deprecated fields

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null Deprecated

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#field-Publication.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AppCatalog.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-publication)
*   {}[AppInstallation.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-publication)
*   ||-[Catalog.publication](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog#field-publication)
*   {}[Collection.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-unpublishedPublications)
*   {}[CollectionPublication.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication#field-publication)
*   {}[CompanyLocationCatalog.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-publication)
*   {}[MarketCatalog.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-publication)
*   {}[Order.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-publication)
*   {}[Product.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-unpublishedPublications)
*   <->[PublicationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#field-nodes)
*   {}[PublicationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationEdge#field-node)
*   ||-[Publishable.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#field-unpublishedPublications)
*   {}[ResourcePublication.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublication#field-publication)
*   {}[ResourcePublicationV2.publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2#field-publication)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#queries)Queries
---------------------------------------------------------------------------------------------------------

[Anchor to publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#query-publication)[publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication)

•query

Lookup a publication by ID.

Show fields

[Anchor to publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#query-publications)[publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)

•query

List of publications.

Show fields

* * *

Was this section helpful?

Yes No

<?>Publication Queries
----------------------

### Queried by

*   <?>[publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/Publication)
*   <?>[publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/PublicationConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to publicationCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#mutation-publicationCreate)[publication Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate)

•mutation

Creates a publication.

Show payload

[Anchor to publicationUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#mutation-publicationUpdate)[publication Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate)

•mutation

Updates a publication.

Show payload

* * *

Was this section helpful?

Yes No

<~>Publication Mutations
------------------------

### Mutated by

*   <~>[publication Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationCreate)
*   <~>[publication Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Publication Implements
-------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*