---
title: "segmentValueSuggestions"
description: "Shopify GraphQL Admin API documentation for segmentvaluesuggestions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions"
extraction_method: "jina"
sections: ['Customers', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: segmentValueSuggestions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions

Markdown Content:
segmentValueSuggestions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#main-content)

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
*   
Customers

    *   
Queries

        *   [customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer)
        *   [customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergepreview)
        *   [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)
        *   [customer Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersavedsearches)
        *   [customers Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount)
        *   [customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers)
        *   [customer Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembership)
        *   [customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembersquery)
        *   [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)
        *   [segment Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfilters)
        *   [segment Filter Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfiltersuggestions)
        *   [segment Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentmigrations)
        *   [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)
        *   [segments Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentscount)
        *   [segment Value Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions)

    *   Mutations   
    *   Objects   

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

[Anchor to segmentValueSuggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#top)
segment Value Suggestions
=========================

query

The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specific criteria.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments)
SegmentValueConnection arguments
--------------------------------

•[SegmentValueConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to filterQueryName](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-filterQueryName)filter Query Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Returns the elements of a list by filter handle.

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to functionParameterQueryName](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-functionParameterQueryName)function Parameter Query Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Returns the elements of a list by filter parameter name.

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to search](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#arguments-search)search

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

Returns the elements of a list by keyword or term.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#returns-edges)edges

•[[Segment Value Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValueEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#returns-nodes)nodes

•[[Segment Value!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValue)

non-null

A list of nodes that are contained in SegmentValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### segmentValueSuggestions reference

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

segmentValueSuggestions(search){

# segmentValueSuggestions fields

}

}


---
*Content truncated at "Updates" section*