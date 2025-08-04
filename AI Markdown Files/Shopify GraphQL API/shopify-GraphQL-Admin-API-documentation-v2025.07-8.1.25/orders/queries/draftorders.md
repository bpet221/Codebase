---
title: "draftOrders"
description: "Shopify GraphQL Admin API documentation for draftorders"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrders - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders

Markdown Content:
draftOrders - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#main-content)

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
*   Online store   
*   
Orders

    *   
Queries

        *   [available Backup Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablebackupregions)
        *   [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)
        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [pending Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingorderscount)
        *   [product Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttags)
        *   [product Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttypes)
        *   [product Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvendors)
        *   [published Products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount)
        *   [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)
        *   [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)
        *   [returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment)
        *   [returnable Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillments)
        *   [return Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returncalculate)
        *   [reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversedelivery)
        *   [reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversefulfillmentorder)
        *   [subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt)
        *   [subscription Billing Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempts)
        *   [subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycle)
        *   [subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults)
        *   [subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycles)
        *   [subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract)
        *   [subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontracts)
        *   [subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptiondraft)
        *   [tender Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions)

    *   Mutations   
    *   Objects   

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

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#top)
draft Orders
============

query

List of saved draft orders.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments)
DraftOrderConnection arguments
------------------------------

•[DraftOrderConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-customer_id)customer_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-source)source

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-status)status

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-tag)tag

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#arguments-sortKey)sort Key

•[Draft Order Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#returns-edges)edges

•[[Draft Order Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#returns-nodes)nodes

•[[Draft Order!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

non-null

A list of nodes that are contained in DraftOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the first 10 draft orders

#### Description

The following query retrieves the first ten draft orders for a shop and returns the ID for each draft order.

#### Query

```graphql
query {
  draftOrders(first: 10) {
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
"query": "query { draftOrders(first: 10) { edges { node { id } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrders(first: 10) {
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
    draftOrders(first: 10) {
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
    draftOrders(first: 10) {
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
  "draftOrders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DraftOrder/12873508"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/14492994"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/15964851"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/17011624"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/33942910"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35687358"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35831665"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/57615313"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/116136825"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/138565067"
        }
      }
    ]
  }
}
``` 
*   ### Get the first 10 draft orders created after December 1, 2019

#### Description

The following query retrieves the first ten draft orders created after December 1, 2019, and returns the ID and creation date for each draft order.

#### Query

```graphql
query {
  draftOrders(first: 10, query: "created_at:>2019-12-01") {
    edges {
      node {
        id
        createdAt
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
"query": "query { draftOrders(first: 10, query: \"created_at:>2019-12-01\") { edges { node { id createdAt } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrders(first: 10, query: "created_at:>2019-12-01") {
      edges {
        node {
          id
          createdAt
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
    draftOrders(first: 10, query: "created_at:>2019-12-01") {
      edges {
        node {
          id
          createdAt
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
    draftOrders(first: 10, query: "created_at:>2019-12-01") {
      edges {
        node {
          id
          createdAt
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "draftOrders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DraftOrder/12873508",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/14492994",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/15964851",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/17011624",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/33942910",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35687358",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35831665",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/57615313",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/116136825",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/138565067",
          "createdAt": "2021-12-01T12:42:15Z"
        }
      }
    ]
  }
}
``` 
*   ### Get the first 10 draft orders with a status of 'OPEN'

#### Description

The following query retrieves the first ten draft orders with an 'OPEN' status and returns the ID and status of each draft order.

#### Query

```graphql
query {
  draftOrders(first: 10, query: "status:OPEN") {
    edges {
      node {
        id
        status
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
"query": "query { draftOrders(first: 10, query: \"status:OPEN\") { edges { node { id status } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrders(first: 10, query: "status:OPEN") {
      edges {
        node {
          id
          status
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
    draftOrders(first: 10, query: "status:OPEN") {
      edges {
        node {
          id
          status
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
    draftOrders(first: 10, query: "status:OPEN") {
      edges {
        node {
          id
          status
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "draftOrders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DraftOrder/12873508",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/14492994",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/15964851",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/17011624",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/33942910",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35687358",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35831665",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/57615313",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/116136825",
          "status": "OPEN"
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/138565067",
          "status": "OPEN"
        }
      }
    ]
  }
}
``` 
*   ### Get the first draft order for a given customer

#### Description

The following query retrieves the first draft order for customer ID 544365967 and returns the ID, status and customer first name of the draft order.

#### Query

```graphql
query {
  draftOrders(first: 1, query: "customerId:544365967") {
    edges {
      node {
        id
        status
        customer {
          firstName
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
"query": "query { draftOrders(first: 1, query: \"customerId:544365967\") { edges { node { id status customer { firstName } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrders(first: 1, query: "customerId:544365967") {
      edges {
        node {
          id
          status
          customer {
            firstName
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
    draftOrders(first: 1, query: "customerId:544365967") {
      edges {
        node {
          id
          status
          customer {
            firstName
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
    draftOrders(first: 1, query: "customerId:544365967") {
      edges {
        node {
          id
          status
          customer {
            firstName
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "draftOrders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DraftOrder/12873508",
          "status": "OPEN",
          "customer": {
            "firstName": "Bob"
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieves a list of draft orders

#### Query

```graphql
query DraftOrders {
  draftOrders(first: 10) {
    edges {
      node {
        id
        note2
        email
        taxesIncluded
        currencyCode
        invoiceSentAt
        createdAt
        updatedAt
        taxExempt
        completedAt
        name
        status
        lineItems(first: 10) {
          edges {
            node {
              id
              variant {
                id
                title
              }
              product {
                id
              }
              name
              sku
              vendor
              quantity
              requiresShipping
              taxable
              isGiftCard
              fulfillmentService {
                type
              }
              weight {
                unit
                value
              }
              taxLines {
                title
                source
                rate
                ratePercentage
                priceSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
              appliedDiscount {
                title
                value
                valueType
              }
              name
              custom
              id
            }
          }
        }
        shippingAddress {
          firstName
          address1
          phone
          city
          zip
          province
          country
          lastName
          address2
          company
          latitude
          longitude
          name
          country
          countryCodeV2
          provinceCode
        }
        billingAddress {
          firstName
          address1
          phone
          city
          zip
          province
          country
          lastName
          address2
          company
          latitude
          longitude
          name
          country
          countryCodeV2
          provinceCode
        }
        invoiceUrl
        appliedDiscount {
          title
          value
          valueType
        }
        order {
          id
          customAttributes {
            key
            value
          }
        }
        shippingLine {
          id
          title
          carrierIdentifier
          custom
          code
          deliveryCategory
          source
          discountedPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
        }
        taxLines {
          channelLiable
          priceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          rate
          ratePercentage
          source
          title
        }
        tags
        totalPrice
        subtotalPrice
        totalTax
        customer {
          id
          email
          smsMarketingConsent {
            consentCollectedFrom
            consentUpdatedAt
            marketingOptInLevel
            marketingState
          }
          emailMarketingConsent {
            consentUpdatedAt
            marketingOptInLevel
            marketingState
          }
          createdAt
          updatedAt
          firstName
          lastName
          state
          amountSpent {
            amount
            currencyCode
          }
          lastOrder {
            id
            name
            currencyCode
          }
          note
          verifiedEmail
          multipassIdentifier
          taxExempt
          tags
          phone
          taxExemptions
          defaultAddress {
            id
            firstName
            lastName
            company
            address1
            address2
            city
            province
            country
            zip
            phone
            name
            provinceCode
            countryCodeV2
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
"query": "query DraftOrders { draftOrders(first: 10) { edges { node { id note2 email taxesIncluded currencyCode invoiceSentAt createdAt updatedAt taxExempt completedAt name status lineItems(first: 10) { edges { node { id variant { id title } product { id } name sku vendor quantity requiresShipping taxable isGiftCard fulfillmentService { type } weight { unit value } taxLines { title source rate ratePercentage priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } appliedDiscount { title value valueType } name custom id } } } shippingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } billingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } invoiceUrl appliedDiscount { title value valueType } order { id customAttributes { key value } } shippingLine { id title carrierIdentifier custom code deliveryCategory source discountedPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } taxLines { channelLiable priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } rate ratePercentage source title } tags totalPrice subtotalPrice totalTax customer { id email smsMarketingConsent { consentCollectedFrom consentUpdatedAt marketingOptInLevel marketingState } emailMarketingConsent { consentUpdatedAt marketingOptInLevel marketingState } createdAt updatedAt firstName lastName state amountSpent { amount currencyCode } lastOrder { id name currencyCode } note verifiedEmail multipassIdentifier taxExempt tags phone taxExemptions defaultAddress { id firstName lastName company address1 address2 city province country zip phone name provinceCode countryCodeV2 } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DraftOrders {
    draftOrders(first: 10) {
      edges {
        node {
          id
          note2
          email
          taxesIncluded
          currencyCode
          invoiceSentAt
          createdAt
          updatedAt
          taxExempt
          completedAt
          name
          status
          lineItems(first: 10) {
            edges {
              node {
                id
                variant {
                  id
                  title
                }
                product {
                  id
                }
                name
                sku
                vendor
                quantity
                requiresShipping
                taxable
                isGiftCard
                fulfillmentService {
                  type
                }
                weight {
                  unit
                  value
                }
                taxLines {
                  title
                  source
                  rate
                  ratePercentage
                  priceSet {
                    presentmentMoney {
                      amount
                      currencyCode
                    }
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                }
                appliedDiscount {
                  title
                  value
                  valueType
                }
                name
                custom
                id
              }
            }
          }
          shippingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          billingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          invoiceUrl
          appliedDiscount {
            title
            value
            valueType
          }
          order {
            id
            customAttributes {
              key
              value
            }
          }
          shippingLine {
            id
            title
            carrierIdentifier
            custom
            code
            deliveryCategory
            source
            discountedPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          taxLines {
            channelLiable
            priceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            rate
            ratePercentage
            source
            title
          }
          tags
          totalPrice
          subtotalPrice
          totalTax
          customer {
            id
            email
            smsMarketingConsent {
              consentCollectedFrom
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            emailMarketingConsent {
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            createdAt
            updatedAt
            firstName
            lastName
            state
            amountSpent {
              amount
              currencyCode
            }
            lastOrder {
              id
              name
              currencyCode
            }
            note
            verifiedEmail
            multipassIdentifier
            taxExempt
            tags
            phone
            taxExemptions
            defaultAddress {
              id
              firstName
              lastName
              company
              address1
              address2
              city
              province
              country
              zip
              phone
              name
              provinceCode
              countryCodeV2
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
  query DraftOrders {
    draftOrders(first: 10) {
      edges {
        node {
          id
          note2
          email
          taxesIncluded
          currencyCode
          invoiceSentAt
          createdAt
          updatedAt
          taxExempt
          completedAt
          name
          status
          lineItems(first: 10) {
            edges {
              node {
                id
                variant {
                  id
                  title
                }
                product {
                  id
                }
                name
                sku
                vendor
                quantity
                requiresShipping
                taxable
                isGiftCard
                fulfillmentService {
                  type
                }
                weight {
                  unit
                  value
                }
                taxLines {
                  title
                  source
                  rate
                  ratePercentage
                  priceSet {
                    presentmentMoney {
                      amount
                      currencyCode
                    }
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                }
                appliedDiscount {
                  title
                  value
                  valueType
                }
                name
                custom
                id
              }
            }
          }
          shippingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          billingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          invoiceUrl
          appliedDiscount {
            title
            value
            valueType
          }
          order {
            id
            customAttributes {
              key
              value
            }
          }
          shippingLine {
            id
            title
            carrierIdentifier
            custom
            code
            deliveryCategory
            source
            discountedPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          taxLines {
            channelLiable
            priceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            rate
            ratePercentage
            source
            title
          }
          tags
          totalPrice
          subtotalPrice
          totalTax
          customer {
            id
            email
            smsMarketingConsent {
              consentCollectedFrom
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            emailMarketingConsent {
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            createdAt
            updatedAt
            firstName
            lastName
            state
            amountSpent {
              amount
              currencyCode
            }
            lastOrder {
              id
              name
              currencyCode
            }
            note
            verifiedEmail
            multipassIdentifier
            taxExempt
            tags
            phone
            taxExemptions
            defaultAddress {
              id
              firstName
              lastName
              company
              address1
              address2
              city
              province
              country
              zip
              phone
              name
              provinceCode
              countryCodeV2
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
  data: `query DraftOrders {
    draftOrders(first: 10) {
      edges {
        node {
          id
          note2
          email
          taxesIncluded
          currencyCode
          invoiceSentAt
          createdAt
          updatedAt
          taxExempt
          completedAt
          name
          status
          lineItems(first: 10) {
            edges {
              node {
                id
                variant {
                  id
                  title
                }
                product {
                  id
                }
                name
                sku
                vendor
                quantity
                requiresShipping
                taxable
                isGiftCard
                fulfillmentService {
                  type
                }
                weight {
                  unit
                  value
                }
                taxLines {
                  title
                  source
                  rate
                  ratePercentage
                  priceSet {
                    presentmentMoney {
                      amount
                      currencyCode
                    }
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                }
                appliedDiscount {
                  title
                  value
                  valueType
                }
                name
                custom
                id
              }
            }
          }
          shippingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          billingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          invoiceUrl
          appliedDiscount {
            title
            value
            valueType
          }
          order {
            id
            customAttributes {
              key
              value
            }
          }
          shippingLine {
            id
            title
            carrierIdentifier
            custom
            code
            deliveryCategory
            source
            discountedPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          taxLines {
            channelLiable
            priceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            rate
            ratePercentage
            source
            title
          }
          tags
          totalPrice
          subtotalPrice
          totalTax
          customer {
            id
            email
            smsMarketingConsent {
              consentCollectedFrom
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            emailMarketingConsent {
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            createdAt
            updatedAt
            firstName
            lastName
            state
            amountSpent {
              amount
              currencyCode
            }
            lastOrder {
              id
              name
              currencyCode
            }
            note
            verifiedEmail
            multipassIdentifier
            taxExempt
            tags
            phone
            taxExemptions
            defaultAddress {
              id
              firstName
              lastName
              company
              address1
              address2
              city
              province
              country
              zip
              phone
              name
              provinceCode
              countryCodeV2
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
  "draftOrders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DraftOrder/12873508",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/289972864",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/138327650",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/121709582"
                  },
                  "name": "Boots - Default",
                  "sku": "boots-10",
                  "vendor": null,
                  "quantity": 2,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/57LPjK4JtIrmbvTYf9iJaeLNrUkDI6k3",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": null,
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "60.00",
          "subtotalPrice": "60.00",
          "totalTax": "0.00",
          "customer": {
            "id": "gid://shopify/Customer/649400230",
            "email": "bob_exempt@example.com",
            "smsMarketingConsent": null,
            "emailMarketingConsent": {
              "consentUpdatedAt": null,
              "marketingOptInLevel": null,
              "marketingState": "NOT_SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "0.0",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": true,
            "tags": [],
            "phone": "+13125551226",
            "taxExemptions": [
              "CA_STATUS_CARD_EXEMPTION"
            ],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/14492994",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D8",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/558169081",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/330284860",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/558169081"
                  },
                  "name": "Unpublished Boots - Default",
                  "sku": "unpublished_boots-12",
                  "vendor": null,
                  "quantity": 1,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 10
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/0c8160e58283528f453372aaf28fecb0",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": {
            "id": "gid://shopify/ShippingLine/615986704?type=draft_order",
            "title": "custom shipping",
            "carrierIdentifier": null,
            "custom": true,
            "code": "custom",
            "deliveryCategory": "shipping",
            "source": "shopify",
            "discountedPriceSet": {
              "presentmentMoney": {
                "amount": "12.25",
                "currencyCode": "USD"
              },
              "shopMoney": {
                "amount": "12.25",
                "currencyCode": "USD"
              }
            }
          },
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "167.50",
          "subtotalPrice": "135.00",
          "totalTax": "20.25",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/15964851",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/849191339",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/498744621",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/912855135"
                  },
                  "name": "SEO Boots - Default",
                  "sku": "seo-boots-10",
                  "vendor": null,
                  "quantity": 1,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/026e74692896c7e388323d3d2662eeee",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": null,
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "40.25",
          "subtotalPrice": "35.00",
          "totalTax": "5.25",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/17011624",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D2",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/704613780",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/138327650",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/121709582"
                  },
                  "name": "Boots - Default",
                  "sku": "boots-10",
                  "vendor": null,
                  "quantity": 2,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "KILOGRAMS",
                    "value": 5
                  },
                  "taxLines": [
                    {
                      "title": "PST",
                      "source": null,
                      "rate": 0.08,
                      "ratePercentage": 8,
                      "priceSet": {
                        "presentmentMoney": {
                          "amount": "4.4",
                          "currencyCode": "USD"
                        },
                        "shopMoney": {
                          "amount": "4.4",
                          "currencyCode": "USD"
                        }
                      }
                    },
                    {
                      "title": "GST",
                      "source": null,
                      "rate": 0.07,
                      "ratePercentage": 7,
                      "priceSet": {
                        "presentmentMoney": {
                          "amount": "3.85",
                          "currencyCode": "USD"
                        },
                        "shopMoney": {
                          "amount": "3.85",
                          "currencyCode": "USD"
                        }
                      }
                    }
                  ],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/026e74692896c7e388323d3d2662b5ae",
          "appliedDiscount": {
            "title": null,
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "order": null,
          "shippingLine": {
            "id": "gid://shopify/ShippingLine/953355454?type=draft_order",
            "title": "custom shipping",
            "carrierIdentifier": null,
            "custom": true,
            "code": "custom",
            "deliveryCategory": "shipping",
            "source": "shopify",
            "discountedPriceSet": {
              "presentmentMoney": {
                "amount": "0.0",
                "currencyCode": "USD"
              },
              "shopMoney": {
                "amount": "0.0",
                "currencyCode": "USD"
              }
            }
          },
          "taxLines": [
            {
              "channelLiable": null,
              "priceSet": {
                "presentmentMoney": {
                  "amount": "4.4",
                  "currencyCode": "USD"
                },
                "shopMoney": {
                  "amount": "4.4",
                  "currencyCode": "USD"
                }
              },
              "rate": 0.08,
              "ratePercentage": 8,
              "source": null,
              "title": "PST"
            },
            {
              "channelLiable": null,
              "priceSet": {
                "presentmentMoney": {
                  "amount": "3.85",
                  "currencyCode": "USD"
                },
                "shopMoney": {
                  "amount": "3.85",
                  "currencyCode": "USD"
                }
              },
              "rate": 0.07,
              "ratePercentage": 7,
              "source": null,
              "title": "GST"
            }
          ],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "63.25",
          "subtotalPrice": "55.00",
          "totalTax": "8.25",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/33942910",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/669699480",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/138327650",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/121709582"
                  },
                  "name": "Boots - Default",
                  "sku": "boots-10",
                  "vendor": null,
                  "quantity": 2,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+81 3-1234-5678",
            "city": "Chiyoda-ku",
            "zip": "100-0005",
            "province": "Tokyo",
            "country": "Japan",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 35.68536,
            "longitude": 139.75309,
            "name": "Bob Bobsen",
            "countryCodeV2": "JP",
            "provinceCode": "JP-13"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+81 3-1234-5678",
            "city": "Chiyoda-ku",
            "zip": "100-0005",
            "province": "Tokyo",
            "country": "Japan",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 35.68536,
            "longitude": 139.75309,
            "name": "Bob Bobsen",
            "countryCodeV2": "JP",
            "provinceCode": "JP-13"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/d34EjK4JtIr35jLYf9iJzzmErUkDI76k",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": {
            "id": "gid://shopify/ShippingLine/516302042?type=draft_order",
            "title": "custom shipping",
            "carrierIdentifier": null,
            "custom": true,
            "code": "custom",
            "deliveryCategory": "shipping",
            "source": "shopify",
            "discountedPriceSet": {
              "presentmentMoney": {
                "amount": "1500.0",
                "currencyCode": "JPY"
              },
              "shopMoney": {
                "amount": "13.35",
                "currencyCode": "USD"
              }
            }
          },
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "75.65",
          "subtotalPrice": "62.30",
          "totalTax": "0.00",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35687358",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/610581157",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/498744621",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/912855135"
                  },
                  "name": "SEO Boots - Default",
                  "sku": "seo-boots-10",
                  "vendor": null,
                  "quantity": 1,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/026974692896c7e388323d3d2662dcba",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": null,
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "40.25",
          "subtotalPrice": "35.00",
          "totalTax": "5.25",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/35831665",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/722908960",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/498744621",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/912855135"
                  },
                  "name": "SEO Boots - Default",
                  "sku": "seo-boots-10",
                  "vendor": null,
                  "quantity": 1,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Franz",
            "address1": "667 Weizenegger Strasse",
            "phone": "026 123456",
            "city": "Bregenz",
            "zip": "44444",
            "province": null,
            "country": "Austria",
            "lastName": "Josef",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Franz Josef",
            "countryCodeV2": "AT",
            "provinceCode": null
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/026e74692896c7e388323d3d7882ddde",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": null,
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "35.00",
          "subtotalPrice": "35.00",
          "totalTax": "0.00",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/57615313",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/170304634",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/498744621",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/912855135"
                  },
                  "name": "SEO Boots - Default",
                  "sku": "seo-boots-10",
                  "vendor": null,
                  "quantity": 1,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/026e74692896c7e388323d3d2662beee",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": null,
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "40.25",
          "subtotalPrice": "35.00",
          "totalTax": "5.25",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/116136825",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/130678032",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/138327650",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/121709582"
                  },
                  "name": "Boots - Default",
                  "sku": "boots-10",
                  "vendor": null,
                  "quantity": 2,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": null,
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/f1df1a91d10a6d7704cf2f0315461d4dlocalpickup",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": {
            "id": "gid://shopify/ShippingLine/116136825?type=draft_order",
            "title": "Local Pickup",
            "carrierIdentifier": null,
            "custom": false,
            "code": "10",
            "deliveryCategory": "pick-up",
            "source": "shopify",
            "discountedPriceSet": {
              "presentmentMoney": {
                "amount": "0.0",
                "currencyCode": "USD"
              },
              "shopMoney": {
                "amount": "0.0",
                "currencyCode": "USD"
              }
            }
          },
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "69.00",
          "subtotalPrice": "60.00",
          "totalTax": "9.00",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/DraftOrder/138565067",
          "note2": "rush order",
          "email": "thomas_burnsimus_ii@shopify.com",
          "taxesIncluded": false,
          "currencyCode": "USD",
          "invoiceSentAt": null,
          "createdAt": "2021-12-01T12:42:15Z",
          "updatedAt": "2024-11-04T22:58:15Z",
          "taxExempt": false,
          "completedAt": null,
          "name": "#D1",
          "status": "OPEN",
          "lineItems": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/211463149",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/498744621",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/912855135"
                  },
                  "name": "SEO Boots - Default",
                  "sku": "seo-boots-10",
                  "vendor": null,
                  "quantity": 1,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              },
              {
                "node": {
                  "id": "gid://shopify/DraftOrderLineItem/344382430",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/138327650",
                    "title": "Default"
                  },
                  "product": {
                    "id": "gid://shopify/Product/121709582"
                  },
                  "name": "Boots - Default",
                  "sku": "boots-10",
                  "vendor": null,
                  "quantity": 2,
                  "requiresShipping": true,
                  "taxable": true,
                  "isGiftCard": false,
                  "fulfillmentService": {
                    "type": "MANUAL"
                  },
                  "weight": {
                    "unit": "GRAMS",
                    "value": 100
                  },
                  "taxLines": [],
                  "appliedDiscount": null,
                  "custom": false
                }
              }
            ]
          },
          "shippingAddress": {
            "firstName": "Bob",
            "address1": "123 Amoebobacterieae St",
            "phone": "+1(613)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V6",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen",
            "address2": "",
            "company": "",
            "latitude": 45.41634,
            "longitude": -75.6868,
            "name": "Bob Bobsen",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "billingAddress": {
            "firstName": "Bob",
            "address1": "124 Amoebobacterieae St",
            "phone": "+1(343)555-1212",
            "city": "Ottawa",
            "zip": "K2P0V7",
            "province": "Ontario",
            "country": "Canada",
            "lastName": "Bobsen Jr.",
            "address2": "",
            "company": null,
            "latitude": null,
            "longitude": null,
            "name": "Bob Bobsen Jr.",
            "countryCodeV2": "CA",
            "provinceCode": "ON"
          },
          "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/026974692896c7e388323d3d2662abcd",
          "appliedDiscount": null,
          "order": null,
          "shippingLine": null,
          "taxLines": [],
          "tags": [
            "Might be fraud"
          ],
          "totalPrice": "109.25",
          "subtotalPrice": "95.00",
          "totalTax": "14.25",
          "customer": {
            "id": "gid://shopify/Customer/544365967",
            "email": "bob@example.com",
            "smsMarketingConsent": {
              "consentCollectedFrom": "OTHER",
              "consentUpdatedAt": "2021-06-16T17:31:44Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "emailMarketingConsent": {
              "consentUpdatedAt": "2005-06-16T15:00:11Z",
              "marketingOptInLevel": "SINGLE_OPT_IN",
              "marketingState": "SUBSCRIBED"
            },
            "createdAt": "2005-06-15T15:57:11Z",
            "updatedAt": "2005-06-16T15:57:11Z",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "state": "ENABLED",
            "amountSpent": {
              "amount": "8305.6",
              "currencyCode": "USD"
            },
            "lastOrder": null,
            "note": null,
            "verifiedEmail": true,
            "multipassIdentifier": null,
            "taxExempt": false,
            "tags": [
              "Bob",
              "Canadian",
              "Léon",
              "Noël"
            ],
            "phone": "+13125551212",
            "taxExemptions": [],
            "defaultAddress": {
              "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
              "firstName": "Bob",
              "lastName": "Bobsen",
              "company": "",
              "address1": "123 Amoebobacterieae St",
              "address2": "",
              "city": "Ottawa",
              "province": "Ontario",
              "country": "Canada",
              "zip": "K2P0V6",
              "phone": "+1(613)555-1212",
              "name": "Bob Bobsen",
              "provinceCode": "ON",
              "countryCodeV2": "CA"
            }
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Get the first 10 draft orders

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20draftOrders(first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 draftOrders(first: 10) {

 edges {

 node {

 id

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  draftOrders(first: 10) {
    edges {
      node {
        id
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
"query": "query { draftOrders(first: 10) { edges { node { id } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrders(first: 10) {
      edges {
        node {
          id
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
    draftOrders(first: 10) {
      edges {
        node {
          id
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
    draftOrders(first: 10) {
      edges {
        node {
          id
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

⌄

⌄

⌄

⌄

{

"draftOrders": {

"edges": [

{

"node": {

"id": "gid://shopify/DraftOrder/12873508"

}

},

{

"node": {

"id": "gid://shopify/DraftOrder/14492994"

}

},

{

"node": {

"id": "gid://shopify/DraftOrder/15964851"

}

},

{

"node": {

"id": "gid://shopify/DraftOrder/17011624"

}

},

{

"node": {

"id": "gid://shopify/DraftOrder/33942910"

}

},

{

"node": {

"id": "gid://shopify/DraftOrder/35687358"

}

},

{

"node": {

"id": "gid://shopify/DraftOrder/35831665"


---
*Content truncated at "Updates" section*