---
title: "webPresences"
description: "Shopify GraphQL Admin API documentation for webpresences"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences"
extraction_method: "jina"
sections: ['Shopify Markets', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webPresences - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences

Markdown Content:
webPresences - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#main-content)

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
*   
Shopify Markets

    *   
Queries

        *   [backup Region](https://shopify.dev/docs/api/admin-graphql/latest/queries/backupregion)
        *   [market](https://shopify.dev/docs/api/admin-graphql/latest/queries/market)
        *   [market By Geography](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketbygeography)
        *   [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)
        *   [markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues)
        *   [primary Market](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket)
        *   [web Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences)

    *   Mutations   
    *   Objects   

*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to webPresences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#top)
web Presences
=============

query

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The web presences for the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#arguments)
MarketWebPresenceConnection arguments
-------------------------------------

•[MarketWebPresenceConnection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#returns-edges)edges

•[[Market Web Presence Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#returns-nodes)nodes

•[[Market Web Presence!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

non-null

A list of nodes that are contained in MarketWebPresenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### webPresences reference

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

webPresences {

# webPresences fields

}

}


---
*Content truncated at "Updates" section*