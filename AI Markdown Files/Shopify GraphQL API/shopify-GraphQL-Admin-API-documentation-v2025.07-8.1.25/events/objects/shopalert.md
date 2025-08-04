---
title: "ShopAlert"
description: "Shopify GraphQL Admin API documentation for shopalert"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert"
extraction_method: "jina"
sections: ['Events', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopAlert - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert

Markdown Content:
ShopAlert - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

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
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   
Events

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Basic Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/basicevent)
        *   [Comment Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/commentevent)
        *   [Comment Event Attachment](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment)
        *   [Deletion Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent)
        *   [Resource Alert](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert)
        *   [Resource Alert Action](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction)
        *   [Shop Alert](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert)
        *   [Shop Alert Action](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalertaction)

*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to ShopAlert](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert#top)
Shop Alert
==========

object

An alert message that appears in the Shopify admin about a problem with a store setting, with an action to take. For example, you could show an alert to ask the merchant to enter their billing information to activate Shopify Plus.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert#fields)Fields
----------------------------------------------------------------------------------------------------

[Anchor to action](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert#field-ShopAlert.fields.action)action

•[Shop Alert Action!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlertAction)

non-null

The text for the button in the alert that links to related information. For example, _Add credit card_.

Show fields

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert#field-ShopAlert.fields.description)description

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A description of the alert and further information, such as whether the merchant will be charged.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Shop.alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-alerts)


---
*Content truncated at "Updates" section*