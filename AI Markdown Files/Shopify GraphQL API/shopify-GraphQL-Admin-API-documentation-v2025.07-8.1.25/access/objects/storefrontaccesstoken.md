---
title: "StorefrontAccessToken"
description: "Shopify GraphQL Admin API documentation for storefrontaccesstoken"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken"
extraction_method: "jina"
sections: ['Access', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: StorefrontAccessToken - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken

Markdown Content:
StorefrontAccessToken - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#main-content)

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

*   
Access

    *   Mutations   
    *   
Objects

        *   [Access Scope](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope)
        *   [Delegate Access Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken)
        *   [Storefront Access Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#interfaces)

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to StorefrontAccessToken](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#top)
Storefront Access Token
=======================

object

A token that's used to delegate unauthenticated access scopes to clients that need to access the unauthenticated [Storefront API](https://shopify.dev/docs/api/storefront).

An app can have a maximum of 100 active storefront access tokens for each shop.

[Get started with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#field-StorefrontAccessToken.fields.accessScopes)access Scopes

•[[Access Scope!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

non-null

List of permissions associated with the token.

Show fields

[Anchor to accessToken](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#field-StorefrontAccessToken.fields.accessToken)access Token

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The issued public access token.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#field-StorefrontAccessToken.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the public access token was created.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#field-StorefrontAccessToken.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#field-StorefrontAccessToken.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

An arbitrary title for each token determined by the developer, used for reference purposes.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#field-StorefrontAccessToken.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the storefront access token was updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Shop.storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-storefrontAccessTokens)
*   <->[StorefrontAccessTokenConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#field-nodes)
*   {}[StorefrontAccessTokenEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessTokenEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------------

[Anchor to storefrontAccessTokenCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#mutation-storefrontAccessTokenCreate)[storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

•mutation

Creates a storefront access token for use with the [Storefront API](https://shopify.dev/docs/api/storefront).

An app can have a maximum of 100 active storefront access tokens for each shop.

[Get started with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

Show payload

* * *

Was this section helpful?

Yes No

<~>StorefrontAccessToken Mutations
----------------------------------

### Mutated by

*   <~>[storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-StorefrontAccessToken Implements
-----------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*