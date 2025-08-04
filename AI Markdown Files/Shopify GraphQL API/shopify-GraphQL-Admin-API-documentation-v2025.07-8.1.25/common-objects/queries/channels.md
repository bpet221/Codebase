---
title: "channels"
description: "Shopify GraphQL Admin API documentation for channels"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/channels"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: channels - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/channels

Markdown Content:
Choose a version:

[Anchor to channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#top)

query

Deprecated.

Use [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications) instead.

List of the active sales channels.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#arguments)

ChannelConnection arguments
---------------------------

•[ChannelConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#arguments-after)
after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#arguments-before)
before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#arguments-first)
first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#arguments-last)
last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#arguments-reverse)
reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)
Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#possible-returns)
Possible returns
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#returns-edges)
edges

•[[Channel Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge)
non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#returns-nodes)
nodes

•[[Channel!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)
non-null

A list of nodes that are contained in ChannelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels#returns-pageInfo)
page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)
non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* * *

Was this section helpful?
