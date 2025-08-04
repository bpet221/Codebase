---
title: "articles"
description: "Shopify GraphQL Admin API documentation for articles"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/articles"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: articles - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/articles

Markdown Content:
articles - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#main-content)

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
*   
Online store

    *   
Queries

        *   [article](https://shopify.dev/docs/api/admin-graphql/latest/queries/article)
        *   [article Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors)
        *   [articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)
        *   [blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog)
        *   [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)
        *   [blogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount)
        *   [comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)
        *   [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)
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
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
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

[Anchor to articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#top)
articles
========

query

List of the shop's articles.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments)
ArticleConnection arguments
---------------------------

•[ArticleConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=handle:summer-collection-announcement`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-author)author

•string

Filter by the author of the article.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-blog_id)blog_id

•string

Filter by the ID of the blog the article belongs to.

Example:

*   `blog_id:1234`
*   `blog_id:>=1234`
*   `blog_id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-blog_title)blog_title

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the article was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-handle)handle

•string

Filter by the article's handle.

Example:

*   `handle:summer-collection-announcement`
*   `handle:how-to-guide`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-published_at)published_at

•time

Filter by the date and time when the article was published.

Example:

*   `published_at:>'2020-10-21T23:39:20Z'`
*   `published_at:<now`
*   `published_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-published_status)published_status

•string

Filter by published status

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-tag)tag

•string

Filter objects by the `tag` field.

Example:

*   `tag:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-tag_not)tag_not

•string

Filter by objects that don’t have the specified tag.

Example:

*   `tag_not:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-title)title

•string

Filter by the title of the article.

Example:

*   `title:summer-collection`
*   `title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the article was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<=2024`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-sortKey)sort Key

•[Article Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#returns-edges)edges

•[[Article Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#returns-nodes)nodes

•[[Article!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

non-null

A list of nodes that are contained in ArticleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### articles reference

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

articles {

# articles fields

}

}


---
*Content truncated at "Updates" section*