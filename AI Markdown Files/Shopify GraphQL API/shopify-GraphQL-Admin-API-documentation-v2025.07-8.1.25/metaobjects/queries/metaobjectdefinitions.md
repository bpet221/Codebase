---
title: "metaobjectDefinitions"
description: "Shopify GraphQL Admin API documentation for metaobjectdefinitions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions"
extraction_method: "jina"
sections: ['Metaobjects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectDefinitions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions

Markdown Content:
metaobjectDefinitions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#main-content)

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

[Anchor to metaobjectDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#top)
metaobject Definitions
======================

query

Requires `read_metaobject_definitions` access scope.

All metaobject definitions.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#arguments)
MetaobjectDefinitionConnection arguments
----------------------------------------

•[MetaobjectDefinitionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#returns-edges)edges

•[[Metaobject Definition Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#returns-nodes)nodes

•[[Metaobject Definition!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

non-null

A list of nodes that are contained in MetaobjectDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### metaobjectDefinitions reference

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

metaobjectDefinitions {

# metaobjectDefinitions fields

}

}


---
*Content truncated at "Updates" section*