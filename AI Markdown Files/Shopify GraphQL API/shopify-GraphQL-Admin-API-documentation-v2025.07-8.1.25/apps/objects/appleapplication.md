---
title: "AppleApplication"
description: "Shopify GraphQL Admin API documentation for appleapplication"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppleApplication - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication

Markdown Content:
AppleApplication - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#main-content)

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

[Anchor to AppleApplication](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#top)
Apple Application
=================

object

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

The Apple mobile platform application.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to appClipApplicationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#field-AppleApplication.fields.appClipApplicationId)app Clip Application Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The iOS App Clip application ID.

[Anchor to appClipsEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#field-AppleApplication.fields.appClipsEnabled)app Clips Enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether iOS App Clips are enabled for this app.

[Anchor to appId](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#field-AppleApplication.fields.appId)app Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The iOS App ID.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#field-AppleApplication.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to sharedWebCredentialsEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#field-AppleApplication.fields.sharedWebCredentialsEnabled)shared Web Credentials Enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether iOS shared web credentials are enabled for this app.

[Anchor to universalLinksEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication#field-AppleApplication.fields.universalLinksEnabled)universal Links Enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether iOS Universal Links are supported by this app.

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [Mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)


---
*Content truncated at "Updates" section*