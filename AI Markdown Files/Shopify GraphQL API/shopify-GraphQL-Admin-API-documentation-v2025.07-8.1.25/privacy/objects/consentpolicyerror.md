---
title: "ConsentPolicyError"
description: "Shopify GraphQL Admin API documentation for consentpolicyerror"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror"
extraction_method: "jina"
sections: ['Privacy', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ConsentPolicyError - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror

Markdown Content:
ConsentPolicyError - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#main-content)

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
        *   [Consent Policy Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#interfaces)
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

[Anchor to ConsentPolicyError](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#top)
Consent Policy Error
====================

object

The errors encountered while performing mutations on consent policies.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to code](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#field-ConsentPolicyError.fields.code)code

•[Consent Policy Error Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ConsentPolicyErrorCode)

The error code.

Show enum values

[Anchor to field](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#field-ConsentPolicyError.fields.field)field

•[[String!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The path to the input field that caused the error.

[Anchor to message](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#field-ConsentPolicyError.fields.message)message

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The error message.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------

[Anchor to consentPolicyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#mutation-consentPolicyUpdate)[consent Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

•mutation

Update or create consent policies in bulk.

Show payload

* * *

Was this section helpful?

Yes No

<~>ConsentPolicyError Mutations
-------------------------------

### Mutated by

*   <~>[consent Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentPolicyUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------

[Anchor to DisplayableError](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror#interface-DisplayableError)[Displayable Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

•interface

* * *

Was this section helpful?

Yes No

||-ConsentPolicyError Implements
--------------------------------

### Implements

*   ||-[Displayable Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)


---
*Content truncated at "Updates" section*