---
title: "ResourceFeedback"
description: "Shopify GraphQL Admin API documentation for resourcefeedback"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ResourceFeedback - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback

Markdown Content:
ResourceFeedback - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback#main-content)

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
        *   [Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback)

*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
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

[Anchor to ResourceFeedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback#top)
Resource Feedback
=================

object

Requires `read_products` access scope.

Represents feedback from apps about a resource, and the steps required to set up the apps on the shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to details](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback#field-ResourceFeedback.fields.details)details

•[[App Feedback!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

non-null

List of AppFeedback detailing issues regarding a resource.

Show fields

[Anchor to summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback#field-ResourceFeedback.fields.summary)summary

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Summary of resource feedback pertaining to the resource.

[Anchor to appFeedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback#field-ResourceFeedback.fields.appFeedback)app Feedback

•[[App Feedback!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Collection.feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-feedback)
*   {}[Product.feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-feedback)


---
*Content truncated at "Updates" section*