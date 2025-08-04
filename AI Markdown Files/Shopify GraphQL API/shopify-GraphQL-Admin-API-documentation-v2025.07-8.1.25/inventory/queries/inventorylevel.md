---
title: "inventoryLevel"
description: "Shopify GraphQL Admin API documentation for inventorylevel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel"
extraction_method: "jina"
sections: ['Inventory', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryLevel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel

Markdown Content:
inventoryLevel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel#main-content)

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
*   Online store   
*   Orders   
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

[Anchor to inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel#top)
inventory Level
===============

query

Returns an [InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) object by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `InventoryLevel` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel#returns-InventoryLevel)Inventory Level

•[Inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

The quantities of an inventory item that are related to a specific location. Learn [more about the relationships between inventory objects](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the location, inventory item, and quantities for an inventory level

#### Query

```graphql
query {
  inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
    id
    quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
      name
      quantity
    }
    item {
      id
      sku
    }
    location {
      id
      name
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
"query": "query { inventoryLevel(id: \"gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695\") { id quantities(names: [\"available\", \"incoming\", \"committed\", \"damaged\", \"on_hand\", \"quality_control\", \"reserved\", \"safety_stock\"]) { name quantity } item { id sku } location { id name } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
      id
      quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
        name
        quantity
      }
      item {
        id
        sku
      }
      location {
        id
        name
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
    inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
      id
      quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
        name
        quantity
      }
      item {
        id
        sku
      }
      location {
        id
        name
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
    inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
      id
      quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
        name
        quantity
      }
      item {
        id
        sku
      }
      location {
        id
        name
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryLevel": {
    "id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695",
    "quantities": [
      {
        "name": "available",
        "quantity": 2
      },
      {
        "name": "incoming",
        "quantity": 146
      },
      {
        "name": "committed",
        "quantity": 1
      },
      {
        "name": "damaged",
        "quantity": 0
      },
      {
        "name": "on_hand",
        "quantity": 33
      },
      {
        "name": "quality_control",
        "quantity": 0
      },
      {
        "name": "reserved",
        "quantity": 30
      },
      {
        "name": "safety_stock",
        "quantity": 0
      }
    ],
    "item": {
      "id": "gid://shopify/InventoryItem/30322695",
      "sku": "element-151"
    },
    "location": {
      "id": "gid://shopify/Location/346779380",
      "name": "Ottawa Store"
    }
  }
}
``` 

Get the location, inventory item, and quantities for an inventory level
-----------------------------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20inventoryLevel(id%3A%20%22gid%3A%2F%2Fshopify%2FInventoryLevel%2F523463154%3Finventory_item_id%3D30322695%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20quantities(names%3A%20%5B%22available%22%2C%20%22incoming%22%2C%20%22committed%22%2C%20%22damaged%22%2C%20%22on_hand%22%2C%20%22quality_control%22%2C%20%22reserved%22%2C%20%22safety_stock%22%5D)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20quantity%0A%20%20%20%20%7D%0A%20%20%20%20item%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20sku%0A%20%20%20%20%7D%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {

 id

 quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {

 name

 quantity

 }

 item {

 id

 sku

 }

 location {

 id

 name

 }

 }

 }`,

);

const data=await response.json();

```
query {
  inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
    id
    quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
      name
      quantity
    }
    item {
      id
      sku
    }
    location {
      id
      name
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
"query": "query { inventoryLevel(id: \"gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695\") { id quantities(names: [\"available\", \"incoming\", \"committed\", \"damaged\", \"on_hand\", \"quality_control\", \"reserved\", \"safety_stock\"]) { name quantity } item { id sku } location { id name } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
      id
      quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
        name
        quantity
      }
      item {
        id
        sku
      }
      location {
        id
        name
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
    inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
      id
      quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
        name
        quantity
      }
      item {
        id
        sku
      }
      location {
        id
        name
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
    inventoryLevel(id: "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695") {
      id
      quantities(names: ["available", "incoming", "committed", "damaged", "on_hand", "quality_control", "reserved", "safety_stock"]) {
        name
        quantity
      }
      item {
        id
        sku
      }
      location {
        id
        name
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

{

"inventoryLevel": {

"id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=30322695",

"quantities": [

{

"name": "available",

"quantity": 2

},

{

"name": "incoming",

"quantity": 146

},

{

"name": "committed",

"quantity": 1

},

{

"name": "damaged",

"quantity": 0

},

{

"name": "on_hand",

"quantity": 33

},

{

"name": "quality_control",

"quantity": 0

},

{

"name": "reserved",

"quantity": 30

},

{

"name": "safety_stock",

"quantity": 0

}


---
*Content truncated at "Updates" section*