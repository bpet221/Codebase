---
title: "pointOfSaleDevice"
description: "Shopify GraphQL Admin API documentation for pointofsaledevice"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice"
extraction_method: "jina"
sections: ['Retail', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: pointOfSaleDevice - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice

Markdown Content:
pointOfSaleDevice - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice#main-content)

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
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   
Retail

    *   
Queries

        *   [cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsession)
        *   [cash Tracking Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions)
        *   [point Of Sale Device](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice)

    *   Objects   

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

[Anchor to pointOfSaleDevice](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice#top)
point Of Sale Device
====================

query

Returns a `PointOfSaleDevice` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `PointOfSaleDevice` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to PointOfSaleDevice](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointofsaledevice#returns-PointOfSaleDevice)Point Of Sale Device

•[Point Of Sale Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

Represents a mobile device that Shopify Point of Sale has been installed on.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### pointOfSaleDevice reference

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

pointOfSaleDevice(id){

# pointOfSaleDevice fields

}

}


---
*Content truncated at "Updates" section*