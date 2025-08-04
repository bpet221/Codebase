---
title: "appUninstall"
description: "Shopify GraphQL Admin API documentation for appuninstall"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall"
extraction_method: "jina"
sections: ['Apps', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appUninstall - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall

Markdown Content:
appUninstall - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall#main-content)

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

    *   Queries   
    *   
Mutations

        *   [app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall)
        *   [mobile Platform Application Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate)
        *   [mobile Platform Application Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete)
        *   [mobile Platform Application Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationupdate)
        *   [publication Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete)
        *   [shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate)

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

[Anchor to appUninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall#top)
app Uninstall
=============

mutation

Requires This mutation can only be used by apps to uninstall themselves.

Uninstalls an app.

[Anchor to AppUninstallPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall#returns)App Uninstall Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall#returns-app)app

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

The uninstalled app.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall#returns-userErrors)user Errors

•[[App Uninstall App Uninstall Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUninstallAppUninstallError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### appUninstall reference

Hide content

Mutation Reference
------------------

Copy

99

1

2

3

4

5

6

7

8

9

10

11

›

⌄

⌄

⌄

⌄

mutation appUninstall{

appUninstall {

app {

# App fields

}

userErrors {

field

message

}

}

}

Hide content

Input
-----

Variables

Copy

9

1

›

{}

`{}`


---
*Content truncated at "Updates" section*