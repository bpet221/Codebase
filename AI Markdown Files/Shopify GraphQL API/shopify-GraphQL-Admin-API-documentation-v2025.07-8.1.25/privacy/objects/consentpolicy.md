---
title: "ConsentPolicy"
description: "Shopify GraphQL Admin API documentation for consentpolicy"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy"
extraction_method: "jina"
sections: ['Privacy', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ConsentPolicy - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy

Markdown Content:
ConsentPolicy - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#main-content)

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
*   
Privacy

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Consent Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#interfaces)
        *   [Consent Policy Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror)
        *   [Consent Policy Region](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion)
        *   [Cookie Banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/cookiebanner)
        *   [Data Sale Opt Out Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/datasaleoptoutpage)
        *   [Privacy Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/privacypolicy)
        *   [Privacy Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/privacysettings)

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

[Anchor to ConsentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#top)
Consent Policy
==============

object

A consent policy describes the level of consent that the merchant requires from the user before actually collecting and processing the data.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to consentRequired](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#field-ConsentPolicy.fields.consentRequired)consent Required

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether consent is required for the region.

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#field-ConsentPolicy.fields.countryCode)country Code

•[Privacy Country Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

The `ISO 3166` country code for which the policy applies.

Show enum values

[Anchor to dataSaleOptOutRequired](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#field-ConsentPolicy.fields.dataSaleOptOutRequired)data Sale Opt Out Required

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether data sale opt-out is required for the region.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#field-ConsentPolicy.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The global ID of the consent policy. IDs prefixed with `SD-` are system default policies.

[Anchor to regionCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#field-ConsentPolicy.fields.regionCode)region Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The `ISO 3166` region code for which the policy applies.

[Anchor to shopId](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#field-ConsentPolicy.fields.shopId)shop Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The global ID of the shop that owns the policy.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#queries)Queries
-----------------------------------------------------------------------------------------------------------

[Anchor to consentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#query-consentPolicy)[consent Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentPolicy)

•query

Returns the customer privacy consent policies of a shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>ConsentPolicy Queries
------------------------

### Queried by

*   <?>[consent Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/ConsentPolicy)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------

[Anchor to consentPolicyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#mutation-consentPolicyUpdate)[consent Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

•mutation

Update or create consent policies in bulk.

Show payload

* * *

Was this section helpful?

Yes No

<~>ConsentPolicy Mutations
--------------------------

### Mutated by

*   <~>[consent Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-ConsentPolicy Implements
---------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*