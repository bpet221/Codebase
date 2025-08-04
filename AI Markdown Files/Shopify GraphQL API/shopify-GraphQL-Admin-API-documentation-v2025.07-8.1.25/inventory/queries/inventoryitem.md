---
title: "inventoryItem"
description: "Shopify GraphQL Admin API documentation for inventoryitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem"
extraction_method: "jina"
sections: ['Inventory', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem

Markdown Content:
inventoryItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem#main-content)

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

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem#top)
inventory Item
==============

query

Returns an [InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) object by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `InventoryItem` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------

[Anchor to InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem#returns-InventoryItem)Inventory Item

•[Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

Represents the goods available to be shipped to a customer. It holds essential information about the goods, including SKU and whether it is tracked. Learn [more about the relationships between inventory objects](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get details about a specified inventory item

#### Query

```graphql
query inventoryItem {
  inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
    id
    tracked
    sku
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query inventoryItem { inventoryItem(id: \"gid://shopify/InventoryItem/30322695\") { id tracked sku } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItem {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      tracked
      sku
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
  query inventoryItem {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      tracked
      sku
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query inventoryItem {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      tracked
      sku
    }
  }`,
});
``` #### Response

```json
{
  "inventoryItem": {
    "id": "gid://shopify/InventoryItem/30322695",
    "tracked": true,
    "sku": "element-151"
  }
}
``` 
*   ### Get inventory item levels and product/variant information

#### Query

```graphql
query inventoryItemToProductVariant {
  inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
    id
    inventoryLevels(first: 1) {
      edges {
        node {
          id
          location {
            id
            name
          }
          quantities(names: ["available", "committed", "incoming", "on_hand", "reserved"]) {
            name
            quantity
          }
        }
      }
    }
    variant {
      id
      title
      product {
        id
        title
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
"query": "query inventoryItemToProductVariant { inventoryItem(id: \"gid://shopify/InventoryItem/30322695\") { id inventoryLevels(first: 1) { edges { node { id location { id name } quantities(names: [\"available\", \"committed\", \"incoming\", \"on_hand\", \"reserved\"]) { name quantity } } } } variant { id title product { id title } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItemToProductVariant {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      inventoryLevels(first: 1) {
        edges {
          node {
            id
            location {
              id
              name
            }
            quantities(names: ["available", "committed", "incoming", "on_hand", "reserved"]) {
              name
              quantity
            }
          }
        }
      }
      variant {
        id
        title
        product {
          id
          title
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
  query inventoryItemToProductVariant {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      inventoryLevels(first: 1) {
        edges {
          node {
            id
            location {
              id
              name
            }
            quantities(names: ["available", "committed", "incoming", "on_hand", "reserved"]) {
              name
              quantity
            }
          }
        }
      }
      variant {
        id
        title
        product {
          id
          title
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
  data: `query inventoryItemToProductVariant {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      inventoryLevels(first: 1) {
        edges {
          node {
            id
            location {
              id
              name
            }
            quantities(names: ["available", "committed", "incoming", "on_hand", "reserved"]) {
              name
              quantity
            }
          }
        }
      }
      variant {
        id
        title
        product {
          id
          title
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryItem": {
    "id": "gid://shopify/InventoryItem/30322695",
    "inventoryLevels": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695",
            "location": {
              "id": "gid://shopify/Location/346779380",
              "name": "Ottawa Store"
            },
            "quantities": [
              {
                "name": "available",
                "quantity": 2
              },
              {
                "name": "committed",
                "quantity": 1
              },
              {
                "name": "incoming",
                "quantity": 0
              },
              {
                "name": "on_hand",
                "quantity": 33
              },
              {
                "name": "reserved",
                "quantity": 30
              }
            ]
          }
        }
      ]
    },
    "variant": {
      "id": "gid://shopify/ProductVariant/30322695",
      "title": "151cm",
      "product": {
        "id": "gid://shopify/Product/20995642",
        "title": "Element"
      }
    }
  }
}
``` 

Examples
--------

Get details about a specified inventory item

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20inventoryItem%20%7B%0A%20%20inventoryItem(id%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20tracked%0A%20%20%20%20sku%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query inventoryItem {

 inventoryItem(id: "gid://shopify/InventoryItem/30322695") {

 id

 tracked

 sku

 }

 }`,

);

const data=await response.json();

```
query inventoryItem {
  inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
    id
    tracked
    sku
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query inventoryItem { inventoryItem(id: \"gid://shopify/InventoryItem/30322695\") { id tracked sku } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryItem {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      tracked
      sku
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query inventoryItem {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      tracked
      sku
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
  query inventoryItem {
    inventoryItem(id: "gid://shopify/InventoryItem/30322695") {
      id
      tracked
      sku
    }
  }
QUERY

response = client.query(query: query)
```

Hide content

Response
--------

JSON

9

1

2

3

4

5

6

7

›

⌄

⌄

{

"inventoryItem": {

"id": "gid://shopify/InventoryItem/30322695",

"tracked": true,

"sku": "element-151"

}

}


---
*Content truncated at "Updates" section*