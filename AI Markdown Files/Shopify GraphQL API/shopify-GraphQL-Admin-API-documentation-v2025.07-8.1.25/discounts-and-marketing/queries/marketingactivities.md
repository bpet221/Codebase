---
title: "marketingActivities"
description: "Shopify GraphQL Admin API documentation for marketingactivities"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivities - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities

Markdown Content:
marketingActivities - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#main-content)

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

[Anchor to marketingActivities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#top)
marketing Activities
====================

query

A list of marketing activities associated with the marketing app.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments)
MarketingActivityConnection arguments
-------------------------------------

•[MarketingActivityConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to marketingActivityIds](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-marketingActivityIds)marketing Activity Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

Default:[]

The list of marketing activity IDs to filter by.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-app_id)app_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-app_name)app_name

•string

A comma-separated list of app names.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-marketing_campaign_id)marketing_campaign_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-scheduled_to_end_at)scheduled_to_end_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-scheduled_to_start_at)scheduled_to_start_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-tactic)tactic

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-title)title

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#argument-query-filter-updated_at)updated_at

•time

[Anchor to remoteIds](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-remoteIds)remote Ids

•[[String!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Default:[]

The list of remote IDs associated with marketing activities to filter by.

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-sortKey)sort Key

•[Marketing Activity Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivitySortKeys)

Default:CREATED_AT

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

[Anchor to utm](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#arguments-utm)utm

•[UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

The UTM parameters associated with marketing activities to filter by.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#returns-edges)edges

•[[Marketing Activity Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#returns-nodes)nodes

•[[Marketing Activity!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

non-null

A list of nodes that are contained in MarketingActivityEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketingActivities reference

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

marketingActivities {

# marketingActivities fields

}

}


---
*Content truncated at "Updates" section*