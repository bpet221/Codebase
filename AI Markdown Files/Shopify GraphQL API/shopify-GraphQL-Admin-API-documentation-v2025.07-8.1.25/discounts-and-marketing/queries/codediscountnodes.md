---
title: "codeDiscountNodes"
description: "Shopify GraphQL Admin API documentation for codediscountnodes"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: codeDiscountNodes - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes

Markdown Content:
codeDiscountNodes - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#main-content)

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

[Anchor to codeDiscountNodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#top)
code Discount Nodes
===================

query

Requires Apps must have `read_discounts` access scope.

Returns a list of [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments)
DiscountCodeNodeConnection arguments
------------------------------------

•[DiscountCodeNodeConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-combines_with)combines_with

•string

Filter by the [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `order_discounts`
*   `product_discounts`
*   `shipping_discounts`

Example:

*   `combines_with:product_discounts`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the discount was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-discount_type)discount_type

•string

Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `bogo`
*   `fixed_amount`
*   `free_shipping`
*   `percentage`

Example:

*   `discount_type:fixed_amount`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-ends_at)ends_at

•time

Filter by the date and time when the discount expires and is no longer available for customer use.

Example:

*   `ends_at:>'2020-10-21T23:39:20Z'`
*   `ends_at:<now`
*   `ends_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-starts_at)starts_at

•time

Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

Example:

*   `starts_at:>'2020-10-21T23:39:20Z'`
*   `starts_at:<now`
*   `starts_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-status)status

•string

Filter by the status of the discount.

Valid values:

*   `active`
*   `expired`
*   `scheduled`

Example:

*   `status:scheduled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-times_used)times_used

•integer

Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. 

 This value is updated asynchronously. As a result, it might be different than the actual usage count.

Example:

*   `times_used:0`
*   `times_used:>150`
*   `times_used:>=200`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-title)title

•string

Filter by the discount name that displays to customers.

Example:

*   `title:Black Friday Sale`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-type)type

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the discount was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<='2024'`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#arguments-sortKey)sort Key

•[Code Discount Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#returns-edges)edges

•[[Discount Code Node Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#returns-nodes)nodes

•[[Discount Code Node!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

non-null

A list of nodes that are contained in DiscountCodeNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of code discounts

#### Description

Retrieve the first 3 [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied on a cart and at checkout when a customer enters a code.

#### Query

```graphql
query {
  codeDiscountNodes(first: 3) {
    nodes {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
        }
        ... on DiscountCodeBxgy {
          title
          codesCount {
            count
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
"query": "query { codeDiscountNodes(first: 3) { nodes { id codeDiscount { ... on DiscountCodeBasic { title summary } ... on DiscountCodeBxgy { title codesCount { count } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    codeDiscountNodes(first: 3) {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            summary
          }
          ... on DiscountCodeBxgy {
            title
            codesCount {
              count
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
    codeDiscountNodes(first: 3) {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            summary
          }
          ... on DiscountCodeBxgy {
            title
            codesCount {
              count
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
    codeDiscountNodes(first: 3) {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            summary
          }
          ... on DiscountCodeBxgy {
            title
            codesCount {
              count
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
  "codeDiscountNodes": {
    "nodes": [
      {
        "id": "gid://shopify/DiscountCodeNode/1057371281",
        "codeDiscount": {
          "title": "10% off one-time",
          "summary": "10% off one-time purchase products"
        }
      },
      {
        "id": "gid://shopify/DiscountCodeNode/1057371282",
        "codeDiscount": {
          "title": "60% off one-time",
          "summary": "60% off one-time purchase products"
        }
      },
      {
        "id": "gid://shopify/DiscountCodeNode/1057371283",
        "codeDiscount": {
          "title": "BXGY Raincoats",
          "codesCount": {
            "count": 1
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve code discounts by discount type

#### Description

This example shows how to retrieve code discounts that offer a fixed amount off products in an order.

#### Query

```graphql
query {
  codeDiscountNodes(first: 1, query: "value_type:fixed_amount") {
    nodes {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          codes(first: 1) {
            nodes {
              code
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
"query": "query { codeDiscountNodes(first: 1, query: \"value_type:fixed_amount\") { nodes { id codeDiscount { ... on DiscountCodeBasic { title codes(first: 1) { nodes { code } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    codeDiscountNodes(first: 1, query: "value_type:fixed_amount") {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 1) {
              nodes {
                code
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
    codeDiscountNodes(first: 1, query: "value_type:fixed_amount") {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 1) {
              nodes {
                code
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
    codeDiscountNodes(first: 1, query: "value_type:fixed_amount") {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 1) {
              nodes {
                code
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
  "codeDiscountNodes": {
    "nodes": [
      {
        "id": "gid://shopify/DiscountCodeNode/1057371284",
        "codeDiscount": {
          "title": "Fixed amount off",
          "codes": {
            "nodes": [
              {
                "code": "FIXEDOFF"
              }
            ]
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Retrieve a list of code discounts

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20codeDiscountNodes(first%3A%203)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBasic%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20summary%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20codesCount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 codeDiscountNodes(first: 3) {

 nodes {

 id

 codeDiscount {

 ... on DiscountCodeBasic {

 title

 summary

 }

 ... on DiscountCodeBxgy {

 title

 codesCount {

 count

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
  codeDiscountNodes(first: 3) {
    nodes {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
        }
        ... on DiscountCodeBxgy {
          title
          codesCount {
            count
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
"query": "query { codeDiscountNodes(first: 3) { nodes { id codeDiscount { ... on DiscountCodeBasic { title summary } ... on DiscountCodeBxgy { title codesCount { count } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    codeDiscountNodes(first: 3) {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            summary
          }
          ... on DiscountCodeBxgy {
            title
            codesCount {
              count
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
    codeDiscountNodes(first: 3) {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            summary
          }
          ... on DiscountCodeBxgy {
            title
            codesCount {
              count
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
    codeDiscountNodes(first: 3) {
      nodes {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            summary
          }
          ... on DiscountCodeBxgy {
            title
            codesCount {
              count
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

{

"codeDiscountNodes": {

"nodes": [

{

"id": "gid://shopify/DiscountCodeNode/1057371281",

"codeDiscount": {

"title": "10% off one-time",

"summary": "10% off one-time purchase products"

}

},

{

"id": "gid://shopify/DiscountCodeNode/1057371282",

"codeDiscount": {

"title": "60% off one-time",

"summary": "60% off one-time purchase products"

}

},

{

"id": "gid://shopify/DiscountCodeNode/1057371283",

"codeDiscount": {

"title": "BXGY Raincoats",

"codesCount": {

"count": 1

}

}

}

]

}

}


---
*Content truncated at "Updates" section*