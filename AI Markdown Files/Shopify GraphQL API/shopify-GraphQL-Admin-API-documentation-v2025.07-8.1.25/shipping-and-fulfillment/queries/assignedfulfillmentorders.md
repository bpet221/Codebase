---
title: "assignedFulfillmentOrders"
description: "Shopify GraphQL Admin API documentation for assignedfulfillmentorders"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: assignedFulfillmentOrders - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders

Markdown Content:
assignedFulfillmentOrders - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#main-content)

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
*   
Shipping and fulfillment

    *   
Queries

        *   [assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders)
        *   [available Carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablecarrierservices)
        *   [carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice)
        *   [carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices)
        *   [delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomization)
        *   [delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomizations)
        *   [delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofile)
        *   [delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles)
        *   [delivery Promise Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseparticipants)
        *   [delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseprovider)
        *   [delivery Promise Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromisesettings)
        *   [delivery Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverysettings)
        *   [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)
        *   [fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder)
        *   [fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorders)
        *   [fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice)
        *   [manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualholdsfulfillmentorders)

    *   Mutations   
    *   Objects   

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

[Anchor to assignedFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#top)
assigned Fulfillment Orders
===========================

query

Requires `read_assigned_fulfillment_orders` access scope.

The paginated list of fulfillment orders assigned to the shop locations owned by the app.

Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations managed by [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) that are registered by the app. One app (api_client) can host multiple fulfillment services on a shop. Each fulfillment service manages a dedicated location on a shop. Assigned fulfillment orders can have associated [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus), or might currently not be requested to be fulfilled.

The app must have the `read_assigned_fulfillment_orders`[access scope](https://shopify.dev/docs/api/usage/access-scopes) to be able to retrieve the fulfillment orders assigned to its locations.

All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default. Perform filtering with the `assignmentStatus` argument to receive only fulfillment orders that have been requested to be fulfilled.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments)
FulfillmentOrderConnection arguments
------------------------------------

•[FulfillmentOrderConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to assignmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-assignmentStatus)assignment Status

•[Fulfillment Order Assignment Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAssignmentStatus)

The assigment status of the fulfillment orders that should be returned. If `assignmentStatus` argument is not provided, then the query will return all assigned fulfillment orders, except those that have the `CLOSED` status.

Show enum values

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to locationIds](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-locationIds)location Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

Returns fulfillment orders only for certain locations, specified by a list of location IDs.

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#arguments-sortKey)sort Key

•[Fulfillment Order Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#returns-edges)edges

•[[Fulfillment Order Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#returns-nodes)nodes

•[[Fulfillment Order!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

non-null

A list of nodes that are contained in FulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### assignedFulfillmentOrders reference

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

assignedFulfillmentOrders {

# assignedFulfillmentOrders fields

}

}


---
*Content truncated at "Updates" section*