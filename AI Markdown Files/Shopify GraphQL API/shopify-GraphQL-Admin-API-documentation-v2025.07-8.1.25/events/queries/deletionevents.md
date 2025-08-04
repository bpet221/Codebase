---
title: "deletionEvents"
description: "Shopify GraphQL Admin API documentation for deletionevents"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents"
extraction_method: "jina"
sections: ['Events', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: deletionEvents - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents

Markdown Content:
deletionEvents - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#main-content)

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
*   
Events

    *   
Queries

        *   [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)
        *   [deletion Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents)
        *   [event](https://shopify.dev/docs/api/admin-graphql/latest/queries/event)
        *   [events](https://shopify.dev/docs/api/admin-graphql/latest/queries/events)
        *   [events Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount)

    *   Mutations   
    *   Objects   

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

[Anchor to deletionEvents](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#top)
deletion Events
===============

query

Deprecated.Use [events](https://shopify.dev/docs/api/admin-graphql/latest/queries/events) instead.

The paginated list of deletion events.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments)
DeletionEventConnection arguments
---------------------------------

•[DeletionEventConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#argument-query-filter-occurred_at)occurred_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-sortKey)sort Key

•[Deletion Event Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

[Anchor to subjectTypes](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#arguments-subjectTypes)subject Types

•[[Deletion Event Subject Type!]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

List of subject types to filter by.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#returns-edges)edges

•[[Deletion Event Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEventEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#returns-nodes)nodes

•[[Deletion Event!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent)

non-null

A list of nodes that are contained in DeletionEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### deletionEvents reference

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

deletionEvents {

# deletionEvents fields

}

}


---
*Content truncated at "Updates" section*