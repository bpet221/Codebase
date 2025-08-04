---
title: "inventoryItems"
description: "Shopify GraphQL Admin API documentation for inventoryitems"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems"
extraction_method: "jina"
sections: ['Inventory', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryItems - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems

Markdown Content:
inventoryItems - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#main-content)

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
*   Discounts And Marketing   
*   Events   
*   
Inventory

    *   
Queries

        *   [inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem)
        *   [inventory Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems)
        *   [inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel)
        *   [inventory Properties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties)
        *   [inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryshipment)
        *   [inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer)
        *   [inventory Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers)

    *   Mutations   
    *   Objects   

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

[Anchor to inventoryItems](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#top)
inventory Items
===============

query

Returns a list of inventory items.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments)
InventoryItemConnection arguments
---------------------------------

•[InventoryItemConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#argument-query-filter-sku)sku

•string

Filter by the inventory item [`sku`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

Example:

*   `sku:XYZ-12345`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#returns-edges)edges

•[[Inventory Item Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#returns-nodes)nodes

•[[Inventory Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

non-null

A list of nodes that are contained in InventoryItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get details about the first 2 inventory items

#### Query

```graphql
query inventoryItems {
  inventoryItems(first: 2) {
    edges {
      node {
        id
        tracked
        sku
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
"query": "query inventoryItems { inventoryItems(first: 2) { edges { node { id tracked sku } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItems {
    inventoryItems(first: 2) {
      edges {
        node {
          id
          tracked
          sku
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
  query inventoryItems {
    inventoryItems(first: 2) {
      edges {
        node {
          id
          tracked
          sku
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
  data: `query inventoryItems {
    inventoryItems(first: 2) {
      edges {
        node {
          id
          tracked
          sku
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryItems": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/InventoryItem/30322695",
          "tracked": true,
          "sku": "element-151"
        }
      },
      {
        "node": {
          "id": "gid://shopify/InventoryItem/43729076",
          "tracked": true,
          "sku": "draft-151"
        }
      }
    ]
  }
}
``` 
*   ### Get details about the first inventory item matching an SKU

#### Query

```graphql
query inventoryItems {
  inventoryItems(first: 1, query: "sku:'element-151'") {
    edges {
      node {
        id
        tracked
        sku
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
"query": "query inventoryItems { inventoryItems(first: 1, query: \"sku:'\''element-151'\''\") { edges { node { id tracked sku } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItems {
    inventoryItems(first: 1, query: "sku:'element-151'") {
      edges {
        node {
          id
          tracked
          sku
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
  query inventoryItems {
    inventoryItems(first: 1, query: "sku:'element-151'") {
      edges {
        node {
          id
          tracked
          sku
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
  data: `query inventoryItems {
    inventoryItems(first: 1, query: "sku:'element-151'") {
      edges {
        node {
          id
          tracked
          sku
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryItems": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/InventoryItem/30322695",
          "tracked": true,
          "sku": "element-151"
        }
      }
    ]
  }
}
``` 
*   ### Get details about the first two inventory item with created_at or matching sku

#### Query

```graphql
query inventoryItems {
  inventoryItems(first: 2, query: "(created_at:>2023-10-10) OR (sku:'element-151')") {
    edges {
      node {
        id
        tracked
        sku
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
"query": "query inventoryItems { inventoryItems(first: 2, query: \"(created_at:>2023-10-10) OR (sku:'\''element-151'\'')\") { edges { node { id tracked sku } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItems {
    inventoryItems(first: 2, query: "(created_at:>2023-10-10) OR (sku:'element-151')") {
      edges {
        node {
          id
          tracked
          sku
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
  query inventoryItems {
    inventoryItems(first: 2, query: "(created_at:>2023-10-10) OR (sku:'element-151')") {
      edges {
        node {
          id
          tracked
          sku
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
  data: `query inventoryItems {
    inventoryItems(first: 2, query: "(created_at:>2023-10-10) OR (sku:'element-151')") {
      edges {
        node {
          id
          tracked
          sku
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryItems": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/InventoryItem/30322695",
          "tracked": true,
          "sku": "element-151"
        }
      },
      {
        "node": {
          "id": "gid://shopify/InventoryItem/43729076",
          "tracked": true,
          "sku": "draft-151"
        }
      }
    ]
  }
}
``` 
*   ### Retrieves a detailed list for inventory items by IDs

#### Query

```graphql
query InventoryItemList {
  inventoryItems(first: 20, query: "id:>=30322695") {
    nodes {
      id
      createdAt
      countryCodeOfOrigin
      harmonizedSystemCode
      provinceCodeOfOrigin
      requiresShipping
      sku
      tracked
      unitCost {
        currencyCode
        amount
      }
      updatedAt
      countryHarmonizedSystemCodes(first: 250) {
        nodes {
          harmonizedSystemCode
          countryCode
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
"query": "query InventoryItemList { inventoryItems(first: 20, query: \"id:>=30322695\") { nodes { id createdAt countryCodeOfOrigin harmonizedSystemCode provinceCodeOfOrigin requiresShipping sku tracked unitCost { currencyCode amount } updatedAt countryHarmonizedSystemCodes(first: 250) { nodes { harmonizedSystemCode countryCode } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query InventoryItemList {
    inventoryItems(first: 20, query: "id:>=30322695") {
      nodes {
        id
        createdAt
        countryCodeOfOrigin
        harmonizedSystemCode
        provinceCodeOfOrigin
        requiresShipping
        sku
        tracked
        unitCost {
          currencyCode
          amount
        }
        updatedAt
        countryHarmonizedSystemCodes(first: 250) {
          nodes {
            harmonizedSystemCode
            countryCode
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
  query InventoryItemList {
    inventoryItems(first: 20, query: "id:>=30322695") {
      nodes {
        id
        createdAt
        countryCodeOfOrigin
        harmonizedSystemCode
        provinceCodeOfOrigin
        requiresShipping
        sku
        tracked
        unitCost {
          currencyCode
          amount
        }
        updatedAt
        countryHarmonizedSystemCodes(first: 250) {
          nodes {
            harmonizedSystemCode
            countryCode
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
  data: `query InventoryItemList {
    inventoryItems(first: 20, query: "id:>=30322695") {
      nodes {
        id
        createdAt
        countryCodeOfOrigin
        harmonizedSystemCode
        provinceCodeOfOrigin
        requiresShipping
        sku
        tracked
        unitCost {
          currencyCode
          amount
        }
        updatedAt
        countryHarmonizedSystemCodes(first: 250) {
          nodes {
            harmonizedSystemCode
            countryCode
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryItems": {
    "nodes": [
      {
        "id": "gid://shopify/InventoryItem/30322695",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "DE",
        "harmonizedSystemCode": "123456",
        "provinceCodeOfOrigin": "QC",
        "requiresShipping": true,
        "sku": "element-151",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "1.23"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": [
            {
              "harmonizedSystemCode": "123456999333",
              "countryCode": "CA"
            }
          ]
        }
      },
      {
        "id": "gid://shopify/InventoryItem/43729076",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": null,
        "harmonizedSystemCode": null,
        "provinceCodeOfOrigin": null,
        "requiresShipping": true,
        "sku": "draft-151",
        "tracked": true,
        "unitCost": null,
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/113711323",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "CA",
        "harmonizedSystemCode": "555555",
        "provinceCodeOfOrigin": "",
        "requiresShipping": true,
        "sku": "element-155",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "15.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/138327650",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": null,
        "harmonizedSystemCode": null,
        "provinceCodeOfOrigin": null,
        "requiresShipping": true,
        "sku": "boots-10",
        "tracked": true,
        "unitCost": null,
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/236948360",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "FR",
        "harmonizedSystemCode": "654321",
        "provinceCodeOfOrigin": "",
        "requiresShipping": true,
        "sku": "element-158",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "20.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/330284860",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": null,
        "harmonizedSystemCode": null,
        "provinceCodeOfOrigin": null,
        "requiresShipping": true,
        "sku": "unpublished_boots-12",
        "tracked": true,
        "unitCost": null,
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/389013007",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "CA",
        "harmonizedSystemCode": "123456",
        "provinceCodeOfOrigin": "ON",
        "requiresShipping": true,
        "sku": "crappy_shoes_red",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "20.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/419425742",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "DE",
        "harmonizedSystemCode": "999999",
        "provinceCodeOfOrigin": null,
        "requiresShipping": true,
        "sku": "crappy_shoes_pink",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "20.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/438458761",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": null,
        "harmonizedSystemCode": null,
        "provinceCodeOfOrigin": null,
        "requiresShipping": true,
        "sku": "IPOD2008RED",
        "tracked": true,
        "unitCost": null,
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/445365074",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "IT",
        "harmonizedSystemCode": "654321",
        "provinceCodeOfOrigin": "",
        "requiresShipping": true,
        "sku": "crappy_shoes_green",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "20.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/498744621",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": null,
        "harmonizedSystemCode": null,
        "provinceCodeOfOrigin": null,
        "requiresShipping": true,
        "sku": "seo-boots-10",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "15.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/InventoryItem/715806386",
        "createdAt": "2024-11-07T16:22:10Z",
        "countryCodeOfOrigin": "FR",
        "harmonizedSystemCode": "555555",
        "provinceCodeOfOrigin": "",
        "requiresShipping": true,
        "sku": "crappy_shoes_blue",
        "tracked": true,
        "unitCost": {
          "currencyCode": "USD",
          "amount": "20.0"
        },
        "updatedAt": "2024-11-07T16:22:10Z",
        "countryHarmonizedSystemCodes": {
          "nodes": []
        }
      }
    ]
  }
}
``` 

Examples
--------

Get details about the first 2 inventory items

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20inventoryItems%20%7B%0A%20%20inventoryItems(first%3A%202)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20tracked%0A%20%20%20%20%20%20%20%20sku%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query inventoryItems {

 inventoryItems(first: 2) {

 edges {

 node {

 id

 tracked

 sku

 }

 }

 }

 }`,

);

const data=await response.json();

```
query inventoryItems {
  inventoryItems(first: 2) {
    edges {
      node {
        id
        tracked
        sku
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
"query": "query inventoryItems { inventoryItems(first: 2) { edges { node { id tracked sku } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItems {
    inventoryItems(first: 2) {
      edges {
        node {
          id
          tracked
          sku
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
  data: `query inventoryItems {
    inventoryItems(first: 2) {
      edges {
        node {
          id
          tracked
          sku
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
  query inventoryItems {
    inventoryItems(first: 2) {
      edges {
        node {
          id
          tracked
          sku
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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"inventoryItems": {

"edges": [

{

"node": {

"id": "gid://shopify/InventoryItem/30322695",

"tracked": true,

"sku": "element-151"

}

},

{

"node": {

"id": "gid://shopify/InventoryItem/43729076",

"tracked": true,

"sku": "draft-151"

}

}

]

}

}


---
*Content truncated at "Updates" section*