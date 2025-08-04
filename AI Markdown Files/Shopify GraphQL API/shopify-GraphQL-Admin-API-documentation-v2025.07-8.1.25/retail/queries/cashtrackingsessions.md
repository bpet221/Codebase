---
title: "cashTrackingSessions"
description: "Shopify GraphQL Admin API documentation for cashtrackingsessions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions"
extraction_method: "jina"
sections: ['Retail', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: cashTrackingSessions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions

Markdown Content:
cashTrackingSessions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#main-content)

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

[Anchor to cashTrackingSessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#top)
cash Tracking Sessions
======================

query

Returns a shop's cash tracking sessions for locations with a POS Pro subscription.

Tip: To query for cash tracking sessions in bulk, you can [perform a bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/queries).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments)
CashTrackingSessionConnection arguments
---------------------------------------

•[CashTrackingSessionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#argument-query-filter-closing_time)closing_time

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#argument-query-filter-location_id)location_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#argument-query-filter-opening_time)opening_time

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#argument-query-filter-point_of_sale_device_ids)point_of_sale_device_ids

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#argument-query-filter-status)status

•string

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#arguments-sortKey)sort Key

•[Cash Tracking Sessions Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashTrackingSessionsSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#returns-edges)edges

•[[Cash Tracking Session Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSessionEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#returns-nodes)nodes

•[[Cash Tracking Session!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession)

non-null

A list of nodes that are contained in CashTrackingSessionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashtrackingsessions#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### cashTrackingSessions reference

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

cashTrackingSessions {

# cashTrackingSessions fields

}

}


---
*Content truncated at "Updates" section*