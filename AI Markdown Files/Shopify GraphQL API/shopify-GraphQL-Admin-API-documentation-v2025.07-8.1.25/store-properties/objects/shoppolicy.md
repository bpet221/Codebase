---
title: "ShopPolicy"
description: "Shopify GraphQL Admin API documentation for shoppolicy"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopPolicy - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy

Markdown Content:
ShopPolicy - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#interfaces)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to ShopPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#top)
Shop Policy
===========

object

Requires `read_legal_policies` access scope.

Policy that a merchant has configured for their store, such as their refund or privacy policy.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#fields)Fields
-----------------------------------------------------------------------------------------------------

[Anchor to body](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.body)body

•[HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

non-null

The text of the policy. The maximum size is 512kb.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.createdAt)created At

•[Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was created.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The translated title of the policy. For example, Refund Policy or Politique de remboursement.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.type)type

•[Shop Policy Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPolicyType)

non-null

The shop policy type.

Show enum values

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.updatedAt)updated At

•[Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the policy was last modified.

[Anchor to url](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#field-ShopPolicy.fields.url)url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The public URL of the policy.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Shop.shopPolicies](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-shopPolicies)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#mutations)Mutations
--------------------------------------------------------------------------------------------------------------

[Anchor to shopPolicyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#mutation-shopPolicyUpdate)[shop Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

•mutation

Updates a shop policy.

Show payload

* * *

Was this section helpful?

Yes No

<~>ShopPolicy Mutations
-----------------------

### Mutated by

*   <~>[shop Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopPolicyUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-ShopPolicy Implements
------------------------

### Implements

*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*