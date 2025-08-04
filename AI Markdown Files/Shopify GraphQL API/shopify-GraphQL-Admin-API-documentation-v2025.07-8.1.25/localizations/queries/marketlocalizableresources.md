---
title: "marketLocalizableResources"
description: "Shopify GraphQL Admin API documentation for marketlocalizableresources"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources"
extraction_method: "jina"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketLocalizableResources - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources

Markdown Content:
marketLocalizableResources - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#main-content)

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
*   
Localizations

    *   
Queries

        *   [available Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales)
        *   [market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource)
        *   [market Localizable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources)
        *   [market Localizable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresourcesbyids)
        *   [shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales)
        *   [translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources)

    *   Mutations   
    *   Objects   

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

[Anchor to marketLocalizableResources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#top)
market Localizable Resources
============================

query

Requires `read_translations` access scope.

Resources that can have localized values for different markets.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments)
MarketLocalizableResourceConnection arguments
---------------------------------------------

•[MarketLocalizableResourceConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to resourceType](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments-resourceType)resource Type

•[Market Localizable Resource Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketLocalizableResourceType)

required

Return only resources of a type.

Show enum values

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#returns-edges)edges

•[[Market Localizable Resource Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResourceEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#returns-nodes)nodes

•[[Market Localizable Resource!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource)

non-null

A list of nodes that are contained in MarketLocalizableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketLocalizableResources reference

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

marketLocalizableResources(resourceType){

# marketLocalizableResources fields

}

}


---
*Content truncated at "Updates" section*