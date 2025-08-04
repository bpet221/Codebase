---
title: "giftCards"
description: "Shopify GraphQL Admin API documentation for giftcards"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: giftCards - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards

Markdown Content:
giftCards - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#main-content)

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
*   
Common Objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
        *   [customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerpaymentmethod)
        *   [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)
        *   [finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeappaccesspolicy)
        *   [fulfillment Constraint Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentconstraintrules)
        *   [gift Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard)
        *   [gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardconfiguration)
        *   [gift Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards)
        *   [gift Cards Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardscount)
        *   [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)
        *   [node](https://shopify.dev/docs/api/admin-graphql/latest/queries/node)
        *   [nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/nodes)
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [pending Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingorderscount)
        *   [product Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeed)
        *   [product Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeeds)
        *   [public Api Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicapiversions)
        *   [shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunction)
        *   [shopify Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunctions)
        *   [shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipt)
        *   [shop Pay Payment Request Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipts)
        *   [staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember)
        *   [staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmembers)
        *   [store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount)
        *   [validation](https://shopify.dev/docs/api/admin-graphql/latest/queries/validation)
        *   [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

    *   Mutations   
    *   Objects   

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

[Anchor to giftCards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#top)
gift Cards
==========

query

Requires `read_gift_cards` access scope.

Returns a list of gift cards.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments)
GiftCardConnection arguments
----------------------------

•[GiftCardConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-default)default

•string

Searched fields: code.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-balance_status)balance_status

•string

Valid values:

*   `full`
*   `partial`
*   `empty`
*   `full_or_partial`

Example:

*   `balance_status:full`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-created_at)created_at

•time

Example:

*   `created_at:>=2020-01-01T12:00:00Z`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-expires_on)expires_on

•date

Example:

*   `expires_on:>=2020-01-01`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-initial_value)initial_value

•string

Example:

*   `initial_value:>=100`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-source)source

•string

Valid values:

*   `manual`
*   `purchased`
*   `api_client`

Example:

*   `source:manual`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#argument-query-filter-status)status

•string

Valid values:

*   `disabled`
*   `enabled`
*   `expired`
*   `expiring`

Example:

*   `status:disabled OR status:expired`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#arguments-sortKey)sort Key

•[Gift Card Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#returns-edges)edges

•[[Gift Card Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#returns-nodes)nodes

•[[Gift Card!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

non-null

A list of nodes that are contained in GiftCardEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the first 5 enabled gift cards

#### Description

The following query retrieves the first five enabled gift cards for a shop, and returns the ID and enabled status of each gift card.

#### Query

```graphql
query {
  giftCards(first: 5, query: "status:enabled") {
    edges {
      node {
        id
        enabled
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
"query": "query { giftCards(first: 5, query: \"status:enabled\") { edges { node { id enabled } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    giftCards(first: 5, query: "status:enabled") {
      edges {
        node {
          id
          enabled
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
    giftCards(first: 5, query: "status:enabled") {
      edges {
        node {
          id
          enabled
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
    giftCards(first: 5, query: "status:enabled") {
      edges {
        node {
          id
          enabled
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "giftCards": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/GiftCard/63396415",
          "enabled": true
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/292935194",
          "enabled": true
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/411106674",
          "enabled": true
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/566141102",
          "enabled": true
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/636946744",
          "enabled": true
        }
      }
    ]
  }
}
``` 
*   ### Get up to 5 gift cards with the last characters "1234"

#### Description

The following query retrieves up to five gift cards with the last characters "1234" for a shop, and returns the ID and last characters of each gift card.

#### Query

```graphql
query {
  giftCards(first: 5, query: "1234") {
    edges {
      node {
        id
        lastCharacters
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
"query": "query { giftCards(first: 5, query: \"1234\") { edges { node { id lastCharacters } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    giftCards(first: 5, query: "1234") {
      edges {
        node {
          id
          lastCharacters
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
    giftCards(first: 5, query: "1234") {
      edges {
        node {
          id
          lastCharacters
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
    giftCards(first: 5, query: "1234") {
      edges {
        node {
          id
          lastCharacters
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "giftCards": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/GiftCard/411106674",
          "lastCharacters": "1234"
        }
      }
    ]
  }
}
``` 
*   ### Retrieves a list of gift cards

#### Description

The following query retrieves the first ten gift cards for a shop, and returns the ID of each gift card.

#### Query

```graphql
query {
  giftCards(first: 10) {
    edges {
      node {
        id
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
"query": "query { giftCards(first: 10) { edges { node { id } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    giftCards(first: 10) {
      edges {
        node {
          id
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
    giftCards(first: 10) {
      edges {
        node {
          id
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
    giftCards(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "giftCards": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/GiftCard/63396415"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/83783397"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/292935194"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/411106674"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/566141102"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/636946744"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/638517611"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/665558842"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/746346263"
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/842921201"
        }
      }
    ]
  }
}
``` 
*   ### Searches for gift cards

#### Query

```graphql
query GiftCardList($first: Int, $query: String) {
  giftCards(first: $first, query: $query) {
    edges {
      node {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "first": 5,
  "query": "status:enabled"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GiftCardList($first: Int, $query: String) { giftCards(first: $first, query: $query) { edges { node { id balance { amount currencyCode } } } } }",
 "variables": {
    "first": 5,
    "query": "status:enabled"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GiftCardList($first: Int, $query: String) {
    giftCards(first: $first, query: $query) {
      edges {
        node {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "first": 5,
        "query": "status:enabled"
    },
  },
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
  query GiftCardList($first: Int, $query: String) {
    giftCards(first: $first, query: $query) {
      edges {
        node {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "first": 5,
  "query": "status:enabled"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GiftCardList($first: Int, $query: String) {
      giftCards(first: $first, query: $query) {
        edges {
          node {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "first": 5,
        "query": "status:enabled"
    },
  },
});
``` #### Response

```json
{
  "giftCards": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/GiftCard/63396415",
          "balance": {
            "amount": "10.0",
            "currencyCode": "USD"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/292935194",
          "balance": {
            "amount": "75.0",
            "currencyCode": "EUR"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/411106674",
          "balance": {
            "amount": "25.0",
            "currencyCode": "USD"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/566141102",
          "balance": {
            "amount": "0.23",
            "currencyCode": "USD"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/GiftCard/636946744",
          "balance": {
            "amount": "75.0",
            "currencyCode": "USD"
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Get the first 5 enabled gift cards

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20giftCards(first%3A%205%2C%20query%3A%20%22status%3Aenabled%22)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20enabled%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 giftCards(first: 5, query: "status:enabled") {

 edges {

 node {

 id

 enabled

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  giftCards(first: 5, query: "status:enabled") {
    edges {
      node {
        id
        enabled
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
"query": "query { giftCards(first: 5, query: \"status:enabled\") { edges { node { id enabled } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    giftCards(first: 5, query: "status:enabled") {
      edges {
        node {
          id
          enabled
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
    giftCards(first: 5, query: "status:enabled") {
      edges {
        node {
          id
          enabled
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
    giftCards(first: 5, query: "status:enabled") {
      edges {
        node {
          id
          enabled
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

31

32

33

34

35

36

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

⌄

⌄

{

"giftCards": {

"edges": [

{

"node": {

"id": "gid://shopify/GiftCard/63396415",

"enabled": true

}

},

{

"node": {

"id": "gid://shopify/GiftCard/292935194",

"enabled": true

}

},

{

"node": {

"id": "gid://shopify/GiftCard/411106674",

"enabled": true

}

},

{

"node": {

"id": "gid://shopify/GiftCard/566141102",

"enabled": true

}

},

{

"node": {

"id": "gid://shopify/GiftCard/636946744",

"enabled": true

}

}

]

}

}


---
*Content truncated at "Updates" section*