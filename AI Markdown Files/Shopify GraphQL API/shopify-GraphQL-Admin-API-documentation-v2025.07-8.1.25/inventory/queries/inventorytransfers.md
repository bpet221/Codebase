---
title: "inventoryTransfers"
description: "Shopify GraphQL Admin API documentation for inventorytransfers"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers"
extraction_method: "jina"
sections: ['Inventory', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryTransfers - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers

Markdown Content:
inventoryTransfers - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#main-content)

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
*   
Inventory

    *   
Queries

        *   [inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem)
        *   [inventory Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems)
        *   [inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel)
        *   [inventory Properties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties)
        *   [inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryshipment)
        *   [inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer)
        *   [inventory Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers)

    *   Mutations   
    *   Objects   

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

[Anchor to inventoryTransfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#top)
inventory Transfers
===================

query

Requires `read_inventory_transfers` access scope. Also: The user must have permission to view products.

Returns a paginated list of transfers.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments)
InventoryTransferConnection arguments
-------------------------------------

•[InventoryTransferConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-destination_id)destination_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-origin_id)origin_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-product_id)product_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-product_variant_id)product_variant_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-source_id)source_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-status)status

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-tag)tag

•string

Filter objects by the `tag` field.

Example:

*   `tag:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#argument-query-filter-tag_not)tag_not

•string

Filter by objects that don’t have the specified tag.

Example:

*   `tag_not:my_tag`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#arguments-sortKey)sort Key

•[Transfer Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/TransferSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#returns-edges)edges

•[[Inventory Transfer Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#returns-nodes)nodes

•[[Inventory Transfer!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

non-null

A list of nodes that are contained in InventoryTransferEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### inventoryTransfers reference

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

inventoryTransfers {

# inventoryTransfers fields

}

}


---
*Content truncated at "Updates" section*