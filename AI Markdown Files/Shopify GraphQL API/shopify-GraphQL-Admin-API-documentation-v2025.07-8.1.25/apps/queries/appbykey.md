---
title: "appByKey"
description: "Shopify GraphQL Admin API documentation for appbykey"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appByKey - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey

Markdown Content:
appByKey - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey#main-content)

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

    *   
Queries

        *   [app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)
        *   [app By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle)
        *   [app By Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey)
        *   [app Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation)
        *   [app Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallations)
        *   [current App Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation)
        *   [mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication)
        *   [mobile Platform Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications)
        *   [publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication)
        *   [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)
        *   [publications Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationscount)

    *   Mutations   
    *   Objects   

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

[Anchor to appByKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey#top)
app By Key
==========

query

Fetches an app by its client ID. Returns null if the app doesn't exist.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey#arguments)
Arguments
---------

[Anchor to apiKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey#arguments-apiKey)api Key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

Client ID of the app.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to App](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey#returns-App)App

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

A Shopify application.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### appByKey reference

Hide content

Query Reference
---------------

Copy

9

1

2

3

4

5

›

⌄

⌄

{

appByKey(apiKey){

# appByKey fields

}

}


---
*Content truncated at "Updates" section*