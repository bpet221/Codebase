---
title: "metaobjects"
description: "Shopify GraphQL Admin API documentation for metaobjects"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects"
extraction_method: "jina"
sections: ['Metaobjects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjects - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects

Markdown Content:
metaobjects - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#main-content)

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
*   
Metaobjects

    *   
Queries

        *   [metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobject)
        *   [metaobject By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle)
        *   [metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinition)
        *   [metaobject Definition By Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype)
        *   [metaobject Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions)
        *   [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

    *   Mutations   
    *   Objects   

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

[Anchor to metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#top)
metaobjects
===========

query

Requires `read_metaobjects` access scope.

All metaobjects for the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments)
MetaobjectConnection arguments
------------------------------

•[MetaobjectConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#argument-query-filter-display_name)display_name

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#argument-query-filter-fields.{key})fields.{key}

•mixed

Filters metaobject entries by field value. Format: `fields.{key}:{value}`. Only fields marked as filterable in the metaobject definition can be used. Learn more about [querying metaobjects by field value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

Example:

*   `fields.color:blue`
*   `fields.on_sale:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#argument-query-filter-handle)handle

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-sortKey)sort Key

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The key of a field to sort with. Supports "id", "type", "updated_at", and "display_name".

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#arguments-type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The type of the metaobjects to query.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#returns-edges)edges

•[[Metaobject Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#returns-nodes)nodes

•[[Metaobject!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

non-null

A list of nodes that are contained in MetaobjectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### metaobjects reference

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

metaobjects(type){

# metaobjects fields

}

}


---
*Content truncated at "Updates" section*