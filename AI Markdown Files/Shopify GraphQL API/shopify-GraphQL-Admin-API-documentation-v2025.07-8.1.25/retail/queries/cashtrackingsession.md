---
title: "cashTrackingSession"
description: "Shopify GraphQL Admin API documentation for cashtrackingsession"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession"
extraction_method: "jina"
sections: ['Retail', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: cashTrackingSession - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession

Markdown Content:
cashTrackingSession - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession#main-content)

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
*   Privacy   
*   Products And Collections   
*   
Retail

    *   
Queries

        *   [cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession)
        *   [cash Tracking Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions)
        *   [point Of Sale Device](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice)

    *   Objects   

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

[Anchor to cashTrackingSession](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession#top)
cash Tracking Session
=====================

query

Returns a `CashTrackingSession` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `CashTrackingSession` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to CashTrackingSession](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession#returns-CashTrackingSession)Cash Tracking Session

•[Cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession)

Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### cashTrackingSession reference

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

cashTrackingSession(id){

# cashTrackingSession fields

}

}


---
*Content truncated at "Updates" section*