---
title: "ResourceAlertAction"
description: "Shopify GraphQL Admin API documentation for resourcealertaction"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction"
extraction_method: "jina"
sections: ['Events', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ResourceAlertAction - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction

Markdown Content:
ResourceAlertAction - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#main-content)

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

[Anchor to ResourceAlertAction](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#top)
Resource Alert Action
=====================

object

An action associated to a resource alert, such as editing variants.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#field-ResourceAlertAction.fields.primary)primary

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the action appears as a button or as a link.

[Anchor to show](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#field-ResourceAlertAction.fields.show)show

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Resource for the action to show.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#field-ResourceAlertAction.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The text for the button in the alert. For example, _Edit variants_.

[Anchor to url](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction#field-ResourceAlertAction.fields.url)url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The target URL that the button links to.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[ResourceAlert.actions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert#field-actions)


---
*Content truncated at "Updates" section*