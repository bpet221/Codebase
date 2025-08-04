---
title: "locationsAvailableForDeliveryProfiles"
description: "Shopify GraphQL Admin API documentation for locationsavailablefordeliveryprofiles"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationsAvailableForDeliveryProfiles - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles

Markdown Content:
locationsAvailableForDeliveryProfiles - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles#main-content)

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
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store properties

    *   
Queries

        *   [business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentities)
        *   [business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentity)
        *   [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)
        *   [location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier)
        *   [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)
        *   [locations Available For Delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles)
        *   [locations Available For Delivery Profiles Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection)
        *   [locations Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount)
        *   [shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop)

    *   Mutations   
    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to locationsAvailableForDeliveryProfiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles#top)
locations Available For Delivery Profiles
=========================================

query

Deprecated.Use [locationsAvailableForDeliveryProfilesConnection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection) instead.

Returns a list of all origin locations available for a delivery profile.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles#returns-Location)Location

•[[Location!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

Represents the location where the physical good resides. You can stock inventory at active locations. Active locations that have `fulfills_online_orders: true` and are configured with a shipping rate, pickup enabled or local delivery will be able to sell from their storefront.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### locationsAvailableForDeliveryProfiles reference

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

locationsAvailableForDeliveryProfiles {

# locationsAvailableForDeliveryProfiles fields

}

}


---
*Content truncated at "Updates" section*