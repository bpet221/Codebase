---
title: "automaticDiscountNodes"
description: "Shopify GraphQL Admin API documentation for automaticdiscountnodes"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: automaticDiscountNodes - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes

Markdown Content:
automaticDiscountNodes - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#main-content)

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

[Anchor to automaticDiscountNodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#top)
automatic Discount Nodes
========================

query

Requires Apps must have `read_discounts` access scope.

Returns a list of [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments)
DiscountAutomaticNodeConnection arguments
-----------------------------------------

•[DiscountAutomaticNodeConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#argument-query-filter-status)status

•string

Filter by the discount status.

Valid values:

*   `active`
*   `expired`
*   `scheduled`

Example:

*   `status:scheduled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#argument-query-filter-type)type

•string

Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `all`
*   `all_with_app`
*   `app`
*   `bxgy`
*   `fixed_amount`
*   `percentage`

Example:

*   `type:bxgy`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#arguments-sortKey)sort Key

•[Automatic Discount Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AutomaticDiscountSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#returns-edges)edges

•[[Discount Automatic Node Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNodeEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#returns-nodes)nodes

•[[Discount Automatic Node!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

non-null

A list of nodes that are contained in DiscountAutomaticNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Query a list of automatic discounts

#### Description

Retrieve [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied on a cart and at checkout when an order meets specific criteria.

#### Query

```graphql
query {
  automaticDiscountNodes(first: 2) {
    edges {
      node {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            status
          }
          ... on DiscountAutomaticBxgy {
            title
            status
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
"query": "query { automaticDiscountNodes(first: 2) { edges { node { id automaticDiscount { ... on DiscountAutomaticBasic { title status } ... on DiscountAutomaticBxgy { title status } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    automaticDiscountNodes(first: 2) {
      edges {
        node {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              status
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
    automaticDiscountNodes(first: 2) {
      edges {
        node {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              status
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
    automaticDiscountNodes(first: 2) {
      edges {
        node {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              status
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
  "automaticDiscountNodes": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DiscountAutomaticNode/1057371287",
          "automaticDiscount": {
            "title": "Automatic BXGY",
            "status": "ACTIVE"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DiscountAutomaticNode/1057371288",
          "automaticDiscount": {
            "title": "Basic Discount",
            "status": "ACTIVE"
          }
        }
      }
    ]
  }
}
``` 
*   ### Query automatic discounts with pagination and filtering

#### Description

This example shows how to query automatic discounts with pagination and status filtering. The query returns the first active discount and includes a cursor for pagination.

#### Query

```graphql
query {
  automaticDiscountNodes(first: 1, query: "status:active") {
    nodes {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
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
"query": "query { automaticDiscountNodes(first: 1, query: \"status:active\") { nodes { id automaticDiscount { ... on DiscountAutomaticBxgy { title status } } } pageInfo { hasNextPage endCursor } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    automaticDiscountNodes(first: 1, query: "status:active") {
      nodes {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            status
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
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
    automaticDiscountNodes(first: 1, query: "status:active") {
      nodes {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            status
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
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
    automaticDiscountNodes(first: 1, query: "status:active") {
      nodes {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            status
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`,
});
``` #### Response

```json
{
  "automaticDiscountNodes": {
    "nodes": [
      {
        "id": "gid://shopify/DiscountAutomaticNode/1057371286",
        "automaticDiscount": {
          "title": "Active BXGY",
          "status": "ACTIVE"
        }
      }
    ],
    "pageInfo": {
      "hasNextPage": false,
      "endCursor": "eyJsYXN0X2lkIjoxMDU3MzcxMjg2LCJsYXN0X3ZhbHVlIjoiMTA1NzM3MTI4NiJ9"
    }
  }
}
``` 

Examples
--------

Query a list of automatic discounts

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20automaticDiscountNodes(first%3A%202)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticBasic%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 automaticDiscountNodes(first: 2) {

 edges {

 node {

 id

 automaticDiscount {

 ... on DiscountAutomaticBasic {

 title

 status

 }

 ... on DiscountAutomaticBxgy {

 title

 status

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
  automaticDiscountNodes(first: 2) {
    edges {
      node {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            status
          }
          ... on DiscountAutomaticBxgy {
            title
            status
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
"query": "query { automaticDiscountNodes(first: 2) { edges { node { id automaticDiscount { ... on DiscountAutomaticBasic { title status } ... on DiscountAutomaticBxgy { title status } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    automaticDiscountNodes(first: 2) {
      edges {
        node {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              status
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
    automaticDiscountNodes(first: 2) {
      edges {
        node {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              status
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
    automaticDiscountNodes(first: 2) {
      edges {
        node {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              status
            }
            ... on DiscountAutomaticBxgy {
              title
              status
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

{

"automaticDiscountNodes": {

"edges": [

{

"node": {

"id": "gid://shopify/DiscountAutomaticNode/1057371287",

"automaticDiscount": {

"title": "Automatic BXGY",

"status": "ACTIVE"

}

}

},

{

"node": {

"id": "gid://shopify/DiscountAutomaticNode/1057371288",

"automaticDiscount": {

"title": "Basic Discount",

"status": "ACTIVE"

}

}

}

]

}

}


---
*Content truncated at "Updates" section*