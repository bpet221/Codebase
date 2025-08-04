---
title: "codeDiscountSavedSearches"
description: "Shopify GraphQL Admin API documentation for codediscountsavedsearches"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: codeDiscountSavedSearches - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches

Markdown Content:
codeDiscountSavedSearches - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#main-content)

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
*   
Discounts And Marketing

    *   
Queries

        *   [abandonment](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonment)
        *   [abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentbyabandonedcheckoutid)
        *   [app Discount Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttype)
        *   [app Discount Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttypes)
        *   [app Discount Types Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttypesnodes)
        *   [automatic Discount](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount)
        *   [automatic Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode)
        *   [automatic Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes)
        *   [automatic Discounts](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscounts)
        *   [automatic Discount Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountsavedsearches)
        *   [code Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode)
        *   [code Discount Node By Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode)
        *   [code Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes)
        *   [code Discount Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches)
        *   [discount Codes Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount)
        *   [discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode)
        *   [discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes)
        *   [discount Nodes Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount)
        *   [discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation)
        *   [discount Redeem Code Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodesavedsearches)
        *   [marketing Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities)
        *   [marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivity)
        *   [marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent)
        *   [marketing Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents)
        *   [server Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/serverpixel)
        *   [web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpixel)

    *   Mutations   
    *   Objects   

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

[Anchor to codeDiscountSavedSearches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#top)
code Discount Saved Searches
============================

query

List of the shop's code discount saved searches.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#arguments)
SavedSearchConnection arguments
-------------------------------

•[SavedSearchConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#returns-edges)edges

•[[Saved Search Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearchEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#returns-nodes)nodes

•[[Saved Search!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

non-null

A list of nodes that are contained in SavedSearchEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### codeDiscountSavedSearches reference

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

codeDiscountSavedSearches {

# codeDiscountSavedSearches fields

}

}


---
*Content truncated at "Updates" section*