---
title: "articleAuthors"
description: "Shopify GraphQL Admin API documentation for articleauthors"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: articleAuthors - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors

Markdown Content:
articleAuthors - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#main-content)

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
*   Metaobjects   
*   
Online Store

    *   
Queries

        *   [article](https://shopify.dev/docs/api/admin-graphql/latest/queries/article)
        *   [article Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors)
        *   [articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)
        *   [blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog)
        *   [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)
        *   [comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)
        *   [customer Account Page](https://shopify.dev/docs/api/admin-graphql/latest/queries/customeraccountpage)
        *   [customer Account Pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/customeraccountpages)
        *   [menu](https://shopify.dev/docs/api/admin-graphql/latest/queries/menu)
        *   [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)
        *   [online Store](https://shopify.dev/docs/api/admin-graphql/latest/queries/onlinestore)
        *   [page](https://shopify.dev/docs/api/admin-graphql/latest/queries/page)
        *   [pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)
        *   [pages Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pagescount)
        *   [script Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag)
        *   [script Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags)
        *   [theme](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme)
        *   [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)
        *   [url Redirect](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirect)
        *   [url Redirect Import](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirectimport)
        *   [url Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects)
        *   [url Redirect Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirectsavedsearches)
        *   [url Redirects Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirectscount)

    *   Mutations   
    *   Objects   

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

[Anchor to articleAuthors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#top)
article Authors
===============

query

Requires `read_content` access scope or `read_online_store_pages` access scope.

List of article authors for the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#arguments)
ArticleAuthorConnection arguments
---------------------------------

•[ArticleAuthorConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#returns-edges)edges

•[[Article Author Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthorEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#returns-nodes)nodes

•[[Article Author!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthor)

non-null

A list of nodes that are contained in ArticleAuthorEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### articleAuthors reference

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

articleAuthors {

# articleAuthors fields

}

}


---
*Content truncated at "Updates" section*