---
title: "companies"
description: "Shopify GraphQL Admin API documentation for companies"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/companies"
extraction_method: "jina"
sections: ['B2B', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companies - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/companies

Markdown Content:
companies - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#main-content)

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
*   
B2b

    *   
Queries

        *   [companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies)
        *   [companies Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/companiescount)
        *   [company](https://shopify.dev/docs/api/admin-graphql/latest/queries/company)
        *   [company Contact](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact)
        *   [company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole)
        *   [company Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/companylocation)
        *   [company Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/companylocations)

    *   Mutations   
    *   Objects   

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

[Anchor to companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#top)
companies
=========

query

Returns the list of companies in the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments)
CompanyConnection arguments
---------------------------

•[CompanyConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-active_customers_count)active_customers_count

•integer

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-external_id)external_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-metafields.{namespace}.{key})metafields.{namespace}.{key}

•mixed

Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

Example:

*   `metafields.custom.on_sale:true`
*   `metafields.product.material:"gid://shopify/Metaobject/43458085"`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-name)name

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-since_date)since_date

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-sortKey)sort Key

•[Company Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanySortKeys)

Default:ID

Sort the underlying list by the given key.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#returns-edges)edges

•[[Company Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#returns-nodes)nodes

•[[Company!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

non-null

A list of nodes that are contained in CompanyEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companies reference

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

companies {

# companies fields

}

}


---
*Content truncated at "Updates" section*