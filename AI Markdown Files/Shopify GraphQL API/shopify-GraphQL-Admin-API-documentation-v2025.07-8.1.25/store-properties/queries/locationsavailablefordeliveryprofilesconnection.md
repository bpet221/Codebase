---
title: "locationsAvailableForDeliveryProfilesConnection"
description: "Shopify GraphQL Admin API documentation for locationsavailablefordeliveryprofilesconnection"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationsAvailableForDeliveryProfilesConnection - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection

Markdown Content:
locationsAvailableForDeliveryProfilesConnection - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#main-content)

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

[Anchor to locationsAvailableForDeliveryProfilesConnection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#top)
locations Available For Delivery Profiles Connection
====================================================

query

Returns a list of all origin locations available for a delivery profile.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#arguments)
LocationConnection arguments
----------------------------

•[LocationConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#returns-edges)edges

•[[Location Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#returns-nodes)nodes

•[[Location!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

non-null

A list of nodes that are contained in LocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### locationsAvailableForDeliveryProfilesConnection reference

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

locationsAvailableForDeliveryProfilesConnection {

# locationsAvailableForDeliveryProfilesConnection fields

}

}


---
*Content truncated at "Updates" section*