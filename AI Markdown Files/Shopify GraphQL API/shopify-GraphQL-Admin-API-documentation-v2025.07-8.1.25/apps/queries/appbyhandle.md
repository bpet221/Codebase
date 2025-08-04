---
title: "appByHandle"
description: "Shopify GraphQL Admin API documentation for appbyhandle"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appByHandle - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle

Markdown Content:
appByHandle - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle#main-content)

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

    *   Mutations   
    *   Objects   

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

[Anchor to appByHandle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle#top)
app By Handle
=============

query

Fetches app by handle. Returns null if the app doesn't exist.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle#arguments-handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

Handle of the App.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to App](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle#returns-App)App

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

A Shopify application.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### appByHandle reference

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

appByHandle(handle){

# appByHandle fields

}

}


---
*Content truncated at "Updates" section*