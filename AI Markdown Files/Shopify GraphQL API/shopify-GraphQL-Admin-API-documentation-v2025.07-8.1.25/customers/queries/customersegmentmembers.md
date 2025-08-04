---
title: "customerSegmentMembers"
description: "Shopify GraphQL Admin API documentation for customersegmentmembers"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers"
extraction_method: "jina"
sections: ['Customers', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerSegmentMembers - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers

Markdown Content:
customerSegmentMembers - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#main-content)

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
*   
Customers

    *   
Queries

        *   [customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer)
        *   [customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergepreview)
        *   [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)
        *   [customer Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersavedsearches)
        *   [customers Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount)
        *   [customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers)
        *   [customer Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembership)
        *   [customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembersquery)
        *   [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)
        *   [segment Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfilters)
        *   [segment Filter Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfiltersuggestions)
        *   [segment Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentmigrations)
        *   [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)
        *   [segments Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentscount)
        *   [segment Value Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions)

    *   Mutations   
    *   Objects   

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

[Anchor to customerSegmentMembers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#top)
customer Segment Members
========================

query

The list of members, such as customers, that's associated with an individual segment. The maximum page size is 1000.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments)
CustomerSegmentMemberConnection arguments
-----------------------------------------

•[CustomerSegmentMemberConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

[Anchor to queryId](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-queryId)query Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the segment members query.

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the list. The sorting behaviour defaults to ascending order.

[Anchor to segmentId](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-segmentId)segment Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the segment.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-sortKey)sort Key

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Sort the list by a given key. Valid values: • `created_at` - Sort by customer creation date • `first_order_date` - Sort by the date of the customer's first order • `last_abandoned_order_date` - Sort by the date of the customer's last abandoned checkout • `last_order_date` - Sort by the date of the customer's most recent order • `number_of_orders` - Sort by the total number of orders placed by the customer • `amount_spent` - Sort by the total amount the customer has spent across all orders

Use with the `reverse` parameter to control sort direction (ascending by default, descending when reverse=true).

[Anchor to timezone](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#arguments-timezone)timezone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The timezone that's used to interpret relative date arguments. The timezone defaults to UTC if the timezone isn't provided.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#returns-edges)edges

•[[Customer Segment Member Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMemberEdge)

non-null

A list of edges.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

[Anchor to statistics](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#returns-statistics)statistics

•[Segment Statistics!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStatistics)

non-null

The statistics for a given segment.

Show fields

[Anchor to totalCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers#returns-totalCount)total Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total number of members in a given segment.

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### customerSegmentMembers reference

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

customerSegmentMembers {

# customerSegmentMembers fields

}

}


---
*Content truncated at "Updates" section*