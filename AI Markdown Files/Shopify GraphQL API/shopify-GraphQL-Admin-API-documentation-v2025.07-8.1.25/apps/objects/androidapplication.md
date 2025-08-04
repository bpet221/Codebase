---
title: "AndroidApplication"
description: "Shopify GraphQL Admin API documentation for androidapplication"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AndroidApplication - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication

Markdown Content:
AndroidApplication - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#main-content)

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

[Anchor to AndroidApplication](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#top)
Android Application
===================

object

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

The Android mobile platform application.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to applicationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#field-AndroidApplication.fields.applicationId)application Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The Android application ID.

[Anchor to appLinksEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#field-AndroidApplication.fields.appLinksEnabled)app Links Enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether Android App Links are supported by this app.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#field-AndroidApplication.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to sha256CertFingerprints](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication#field-AndroidApplication.fields.sha256CertFingerprints)sha256Cert Fingerprints

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The SHA256 fingerprints of the app's signing certificate.

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [Mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)


---
*Content truncated at "Updates" section*