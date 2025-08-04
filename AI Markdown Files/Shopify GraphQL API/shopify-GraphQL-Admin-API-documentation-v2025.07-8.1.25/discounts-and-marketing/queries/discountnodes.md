---
title: "discountNodes"
description: "Shopify GraphQL Admin API documentation for discountnodes"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountNodes - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes

Markdown Content:
discountNodes - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#main-content)

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

[Anchor to discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#top)
discount Nodes
==============

query

Requires Apps must have `read_discounts` access scope.

Returns a list of discounts.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments)
DiscountNodeConnection arguments
--------------------------------

•[DiscountNodeConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-code)code

•string

Filter by the discount code. Not supported for bulk discounts.

Example:

*   `code:WELCOME10`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-combines_with)combines_with

•string

Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with.

Valid values:

*   `order_discounts`
*   `product_discounts`
*   `shipping_discounts`

Example:

*   `combines_with:product_discounts`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-created_at)created_at

•time

Filter by the date and time, in the shop's timezone, when the discount was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_class)discount_class

•string

Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes).

Valid values:

*   `order`
*   `product`
*   `shipping`

Example:

*   `discount_class:product`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type)discount_type

•string

Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `bogo`
*   `fixed_amount`
*   `free_shipping`
*   `percentage`

Example:

*   `type:fixed_amount`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-ends_at)ends_at

•time

Filter by the date and time, in the shop's timezone, when the discount ends.

Example:

*   `ends_at:>'2020-10-21T23:39:20Z'`
*   `ends_at:<now`
*   `ends_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-method)method

•string

Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods).

Valid values:

*   `automatic`
*   `code`

Example:

*   `method:code`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-starts_at)starts_at

•time

Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

Example:

*   `starts_at:>'2020-10-21T23:39:20Z'`
*   `starts_at:<now`
*   `starts_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-status)status

•string

Filter by the status of the discount.

Valid values:

*   `active`
*   `expired`
*   `scheduled`

Example:

*   `status:scheduled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-times_used)times_used

•integer

Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. 

 This value is updated asynchronously. As a result, it might be different than the actual usage count.

Example:

*   `times_used:0`
*   `times_used:>150`
*   `times_used:>=200`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-title)title

•string

Filter by the discount name that displays to merchants in the Shopify admin and to customers.

Example:

*   `title:Black Friday Sale`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-type)type

•string

Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `all`
*   `all_with_app`
*   `app`
*   `bxgy`
*   `fixed_amount`
*   `free_shipping`
*   `percentage`

Example:

*   `type:percentage`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time, in the shop's timezone, when the discount was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<='2024'`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#arguments-sortKey)sort Key

•[Discount Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#returns-edges)edges

•[[Discount Node Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNodeEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#returns-nodes)nodes

•[[Discount Node!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

non-null

A list of nodes that are contained in DiscountNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of combinable discounts

#### Description

Retrieve a list of discounts that can be combined with other discounts. This query returns discounts that can be [combined](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) with product discounts.

#### Query

```graphql
query {
  discountNodes(query: "combines_with:product_discounts", first: 10) {
    edges {
      node {
        id
        discount {
          ... on DiscountCodeBasic {
            title
            status
            combinesWith {
              productDiscounts
            }
          }
          ... on DiscountCodeFreeShipping {
            title
            status
            combinesWith {
              productDiscounts
            }
          }
        }
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { discountNodes(query: \"combines_with:product_discounts\", first: 10) { edges { node { id discount { ... on DiscountCodeBasic { title status combinesWith { productDiscounts } } ... on DiscountCodeFreeShipping { title status combinesWith { productDiscounts } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    discountNodes(query: "combines_with:product_discounts", first: 10) {
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
          }
        }
      }
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    discountNodes(query: "combines_with:product_discounts", first: 10) {
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    discountNodes(query: "combines_with:product_discounts", first: 10) {
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "discountNodes": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DiscountCodeNode/700447567",
          "discount": {
            "title": "COMBINABLEFREESHIPPING",
            "status": "ACTIVE",
            "combinesWith": {
              "productDiscounts": true
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DiscountCodeNode/988849754",
          "discount": {
            "title": "combinable_cart_amount",
            "status": "EXPIRED",
            "combinesWith": {
              "productDiscounts": true
            }
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve a list of discounts

#### Description

Retrieve the first five discounts for a shop. You can retrieve [discount types](https://help.shopify.com/manual/discounts/discount-types) that offer buy X get Y (BXGY), amount off, and free shipping. You can also retrieve discounts that are managed by an app that's using [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

#### Query

```graphql
query {
  discountNodes(first: 5) {
    edges {
      node {
        id
        __typename
        discount {
          ... on DiscountCodeBasic {
            title
            summary
            status
          }
          ... on DiscountAutomaticBasic {
            title
            summary
            status
          }
          ... on DiscountCodeBxgy {
            title
            summary
            status
          }
          ... on DiscountAutomaticBxgy {
            title
            summary
            status
          }
          ... on DiscountCodeFreeShipping {
            title
            summary
            status
          }
          ... on DiscountAutomaticApp {
            title
            status
            appDiscountType {
              functionId
            }
          }
        }
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { discountNodes(first: 5) { edges { node { id __typename discount { ... on DiscountCodeBasic { title summary status } ... on DiscountAutomaticBasic { title summary status } ... on DiscountCodeBxgy { title summary status } ... on DiscountAutomaticBxgy { title summary status } ... on DiscountCodeFreeShipping { title summary status } ... on DiscountAutomaticApp { title status appDiscountType { functionId } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    discountNodes(first: 5) {
      edges {
        node {
          id
          __typename
          discount {
            ... on DiscountCodeBasic {
              title
              summary
              status
            }
            ... on DiscountAutomaticBasic {
              title
              summary
              status
            }
            ... on DiscountCodeBxgy {
              title
              summary
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              summary
              status
            }
            ... on DiscountCodeFreeShipping {
              title
              summary
              status
            }
            ... on DiscountAutomaticApp {
              title
              status
              appDiscountType {
                functionId
              }
            }
          }
        }
      }
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    discountNodes(first: 5) {
      edges {
        node {
          id
          __typename
          discount {
            ... on DiscountCodeBasic {
              title
              summary
              status
            }
            ... on DiscountAutomaticBasic {
              title
              summary
              status
            }
            ... on DiscountCodeBxgy {
              title
              summary
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              summary
              status
            }
            ... on DiscountCodeFreeShipping {
              title
              summary
              status
            }
            ... on DiscountAutomaticApp {
              title
              status
              appDiscountType {
                functionId
              }
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    discountNodes(first: 5) {
      edges {
        node {
          id
          __typename
          discount {
            ... on DiscountCodeBasic {
              title
              summary
              status
            }
            ... on DiscountAutomaticBasic {
              title
              summary
              status
            }
            ... on DiscountCodeBxgy {
              title
              summary
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              summary
              status
            }
            ... on DiscountCodeFreeShipping {
              title
              summary
              status
            }
            ... on DiscountAutomaticApp {
              title
              status
              appDiscountType {
                functionId
              }
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "discountNodes": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DiscountCodeNode/2429471",
          "__typename": "DiscountNode",
          "discount": {
            "title": "cart_amount",
            "summary": "$10.00 off one-time purchase products",
            "status": "EXPIRED"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DiscountAutomaticNode/52422887",
          "__typename": "DiscountNode",
          "discount": {
            "title": "Percentage off (by Automatic App Discount)",
            "status": "EXPIRED",
            "appDiscountType": {
              "functionId": "9476d0af-de36-4159-a6cd-b68165c2deac"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DiscountAutomaticNode/198286294",
          "__typename": "DiscountNode",
          "discount": {
            "title": "My automatic bogo",
            "summary": "Buy 1 item, get 1 item free",
            "status": "EXPIRED"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DiscountAutomaticNode/299501151",
          "__typename": "DiscountNode",
          "discount": {
            "title": "My automatic discount",
            "summary": "$100.00 off entire order • Minimum quantity of 1",
            "status": "SCHEDULED"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DiscountCodeNode/299564956",
          "__typename": "DiscountNode",
          "discount": {
            "title": "product_bogo",
            "summary": "Buy 1 item, get 1 item free",
            "status": "EXPIRED"
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Retrieve a list of combinable discounts

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20discountNodes(query%3A%20%22combines_with%3Aproduct_discounts%22%2C%20first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20discount%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBasic%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20%20%20combinesWith%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20productDiscounts%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCodeFreeShipping%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20%20%20combinesWith%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20productDiscounts%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 discountNodes(query: "combines_with:product_discounts", first: 10) {

 edges {

 node {

 id

 discount {

 ... on DiscountCodeBasic {

 title

 status

 combinesWith {

 productDiscounts

 }

 }

 ... on DiscountCodeFreeShipping {

 title

 status

 combinesWith {

 productDiscounts

 }

 }

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  discountNodes(query: "combines_with:product_discounts", first: 10) {
    edges {
      node {
        id
        discount {
          ... on DiscountCodeBasic {
            title
            status
            combinesWith {
              productDiscounts
            }
          }
          ... on DiscountCodeFreeShipping {
            title
            status
            combinesWith {
              productDiscounts
            }
          }
        }
      }
    }
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { discountNodes(query: \"combines_with:product_discounts\", first: 10) { edges { node { id discount { ... on DiscountCodeBasic { title status combinesWith { productDiscounts } } ... on DiscountCodeFreeShipping { title status combinesWith { productDiscounts } } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    discountNodes(query: "combines_with:product_discounts", first: 10) {
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
          }
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    discountNodes(query: "combines_with:product_discounts", first: 10) {
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
          }
        }
      }
    }
  }`,
});
```

```
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    discountNodes(query: "combines_with:product_discounts", first: 10) {
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              combinesWith {
                productDiscounts
              }
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
```

Hide content

Response
--------

JSON

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"discountNodes": {

"edges": [

{

"node": {

"id": "gid://shopify/DiscountCodeNode/700447567",

"discount": {

"title": "COMBINABLEFREESHIPPING",

"status": "ACTIVE",

"combinesWith": {

"productDiscounts": true

}

}

}

},

{

"node": {

"id": "gid://shopify/DiscountCodeNode/988849754",

"discount": {

"title": "combinable_cart_amount",

"status": "EXPIRED",

"combinesWith": {

"productDiscounts": true

}

}

}

}

]

}

}


---
*Content truncated at "Updates" section*