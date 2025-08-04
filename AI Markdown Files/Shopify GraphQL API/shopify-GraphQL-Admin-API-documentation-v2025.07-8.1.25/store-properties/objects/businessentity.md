---
title: "BusinessEntity"
description: "Shopify GraphQL Admin API documentation for businessentity"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: BusinessEntity - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity

Markdown Content:
BusinessEntity - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#main-content)

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
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store Properties

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Business Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#interfaces)
        *   [Business Entity Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress)
        *   [Cart Transform Eligible Operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformeligibleoperations)
        *   [Cart Transform Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformfeature)
        *   [Currency Formats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats)
        *   [Filter Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/filteroption)
        *   [Limited Pending Order Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/limitedpendingordercount)
        *   [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location)
        *   [Location Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationaddress)
        *   [Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationscondition)
        *   [Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot)
        *   [Location Suggested Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsuggestedaddress)
        *   [Navigation Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/navigationitem)
        *   [Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop)
        *   [Shop Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress)
        *   [Shop Features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures)
        *   [Shop Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopplan)
        *   [Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to BusinessEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#top)
Business Entity
===============

object

Represents a merchant's Business Entity.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.address)address

•[Business Entity Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntityAddress)

non-null

The address of the merchant's Business Entity.

Show fields

[Anchor to archived](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.archived)archived

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the Business Entity is archived from the shop.

[Anchor to companyName](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.companyName)company Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the company associated with the merchant's Business Entity.

[Anchor to displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.displayName)display Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The display name of the merchant's Business Entity.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.primary)primary

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether it's the merchant's primary Business Entity.

[Anchor to shopifyPaymentsAccount](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#field-BusinessEntity.fields.shopifyPaymentsAccount)shopify Payments Account

•[Shopify Payments Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount)

Shopify Payments account information, including balances and payouts.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Order.merchantBusinessEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-merchantBusinessEntity)
*   {}[ShopifyPaymentsPayout.businessEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout#field-businessEntity)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#queries)Queries
------------------------------------------------------------------------------------------------------------

[Anchor to businessEntities](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#query-businessEntities)[business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessEntities)

•query

Returns a list of Business Entities associated with the shop.

Show fields

[Anchor to businessEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#query-businessEntity)[business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessEntity)

•query

Returns a Business Entity by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>BusinessEntity Queries
-------------------------

### Queried by

*   <?>[business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/BusinessEntity)
*   <?>[business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/BusinessEntity)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-BusinessEntity Implements
----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*