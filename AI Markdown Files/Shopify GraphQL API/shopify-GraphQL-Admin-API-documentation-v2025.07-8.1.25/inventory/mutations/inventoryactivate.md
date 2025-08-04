---
title: "inventoryActivate"
description: "Shopify GraphQL Admin API documentation for inventoryactivate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryActivate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate

Markdown Content:
inventoryActivate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#main-content)

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

    *   Queries   
    *   
Mutations

        *   [inventory Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate)
        *   [inventory Adjust Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryadjustquantities)
        *   [inventory Bulk Toggle Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation)
        *   [inventory Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate)
        *   [inventory Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate)
        *   [inventory Move Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorymovequantities)
        *   [inventory Set On Hand Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities)
        *   [inventory Set Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities)
        *   [inventory Set Scheduled Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetscheduledchanges)
        *   [inventory Shipment Add Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentadditems)
        *   [inventory Shipment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentcreate)
        *   [inventory Shipment Create In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentcreateintransit)
        *   [inventory Shipment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentdelete)
        *   [inventory Shipment Mark In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentmarkintransit)
        *   [inventory Shipment Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentreceive)
        *   [inventory Shipment Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentremoveitems)
        *   [inventory Shipment Set Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentsettracking)
        *   [inventory Shipment Update Item Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities)
        *   [inventory Transfer Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercancel)
        *   [inventory Transfer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreate)
        *   [inventory Transfer Create As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship)
        *   [inventory Transfer Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferdelete)
        *   [inventory Transfer Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferduplicate)
        *   [inventory Transfer Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferedit)
        *   [inventory Transfer Mark As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfermarkasreadytoship)
        *   [inventory Transfer Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferremoveitems)
        *   [inventory Transfer Set Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfersetitems)

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

[Anchor to inventoryActivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#top)
inventory Activate
==================

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to activate an inventory item.

Activate an inventory item at a location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#arguments)
Arguments
---------

[Anchor to available](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#arguments-available)available

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The initial available quantity of the inventory item being activated at the location.

[Anchor to inventoryItemId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#arguments-inventoryItemId)inventory Item Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the inventory item to activate.

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#arguments-locationId)location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the location of the inventory item being activated.

[Anchor to onHand](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#arguments-onHand)on Hand

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The initial on_hand quantity of the inventory item being activated at the location.

[Anchor to stockAtLegacyLocation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#arguments-stockAtLegacyLocation)stock At Legacy Location

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Allow activation at or away from fulfillment service location with sku sharing off. This will deactivate inventory at all other locations.

* * *

Was this section helpful?

Yes No

[Anchor to InventoryActivatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#returns)Inventory Activate Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#returns-inventoryLevel)inventory Level

•[Inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

The inventory level that was activated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Activate an inventory item at a location with an initial available quantity

#### Query

```graphql
mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
  inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
    inventoryLevel {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      item {
        id
      }
      location {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380",
  "available": 42
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) { inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) { inventoryLevel { id quantities(names: [\"available\"]) { name quantity } item { id } location { id } } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/43729076",
    "locationId": "gid://shopify/Location/346779380",
    "available": 42
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
      inventoryLevel {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        item {
          id
        }
        location {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380",
        "available": 42
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
  mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
      inventoryLevel {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        item {
          id
        }
        location {
          id
        }
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380",
  "available": 42
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
      inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
        inventoryLevel {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          item {
            id
          }
          location {
            id
          }
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380",
        "available": 42
    },
  },
});
``` #### Response

```json
{
  "inventoryActivate": {
    "inventoryLevel": {
      "id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=43729076",
      "quantities": [
        {
          "name": "available",
          "quantity": 42
        }
      ],
      "item": {
        "id": "gid://shopify/InventoryItem/43729076"
      },
      "location": {
        "id": "gid://shopify/Location/346779380"
      }
    }
  }
}
``` 
*   ### Activate an inventory item at a location without setting an available quantity

#### Query

```graphql
mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!) {
  inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
    inventoryLevel {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      item {
        id
      }
      location {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!) { inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) { inventoryLevel { id quantities(names: [\"available\"]) { name quantity } item { id } location { id } } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/43729076",
    "locationId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
      inventoryLevel {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        item {
          id
        }
        location {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380"
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
  mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
      inventoryLevel {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        item {
          id
        }
        location {
          id
        }
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!) {
      inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
        inventoryLevel {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          item {
            id
          }
          location {
            id
          }
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "inventoryActivate": {
    "inventoryLevel": {
      "id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=43729076",
      "quantities": [
        {
          "name": "available",
          "quantity": 0
        }
      ],
      "item": {
        "id": "gid://shopify/InventoryItem/43729076"
      },
      "location": {
        "id": "gid://shopify/Location/346779380"
      }
    }
  }
}
``` 
*   ### Connects an inventory item to a location

#### Query

```graphql
mutation InventoryActivate($inventoryItemId: ID!, $locationId: ID!) {
  inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
    inventoryLevel {
      id
      canDeactivate
      createdAt
      item {
        id
      }
      location {
        id
      }
      quantities(names: ["available"]) {
        name
        quantity
      }
      updatedAt
    }
  }
}
``` #### Variables

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation InventoryActivate($inventoryItemId: ID!, $locationId: ID!) { inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) { inventoryLevel { id canDeactivate createdAt item { id } location { id } quantities(names: [\"available\"]) { name quantity } updatedAt } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/43729076",
    "locationId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation InventoryActivate($inventoryItemId: ID!, $locationId: ID!) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
      inventoryLevel {
        id
        canDeactivate
        createdAt
        item {
          id
        }
        location {
          id
        }
        quantities(names: ["available"]) {
          name
          quantity
        }
        updatedAt
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380"
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
  mutation InventoryActivate($inventoryItemId: ID!, $locationId: ID!) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
      inventoryLevel {
        id
        canDeactivate
        createdAt
        item {
          id
        }
        location {
          id
        }
        quantities(names: ["available"]) {
          name
          quantity
        }
        updatedAt
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation InventoryActivate($inventoryItemId: ID!, $locationId: ID!) {
      inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId) {
        inventoryLevel {
          id
          canDeactivate
          createdAt
          item {
            id
          }
          location {
            id
          }
          quantities(names: ["available"]) {
            name
            quantity
          }
          updatedAt
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "inventoryActivate": {
    "inventoryLevel": {
      "id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=43729076",
      "canDeactivate": true,
      "createdAt": "2024-11-07T20:59:45Z",
      "item": {
        "id": "gid://shopify/InventoryItem/43729076"
      },
      "location": {
        "id": "gid://shopify/Location/346779380"
      },
      "quantities": [
        {
          "name": "available",
          "quantity": 0
        }
      ],
      "updatedAt": "2024-11-07T20:59:45Z"
    }
  }
}
``` 
*   ### inventoryActivate reference

Examples
--------

Activate an inventory item at a location with an initial available quantity

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ActivateInventoryItem(%24inventoryItemId%3A%20ID!%2C%20%24locationId%3A%20ID!%2C%20%24available%3A%20Int)%20%7B%0A%20%20inventoryActivate(inventoryItemId%3A%20%24inventoryItemId%2C%20locationId%3A%20%24locationId%2C%20available%3A%20%24available)%20%7B%0A%20%20%20%20inventoryLevel%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20quantities(names%3A%20%5B%22available%22%5D)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20item%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F43729076%22%2C%0A%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F346779380%22%2C%0A%20%20%22available%22%3A%2042%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {

 inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {

 inventoryLevel {

 id

 quantities(names: ["available"]) {

 name

 quantity

 }

 item {

 id

 }

 location {

 id

 }

 }

 }

 }`,

{

variables:{

"inventoryItemId":"gid://shopify/InventoryItem/43729076",

"locationId":"gid://shopify/Location/346779380",

"available":42

},

},

);

const data=await response.json();

```
mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
  inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
    inventoryLevel {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      item {
        id
      }
      location {
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
"query": "mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) { inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) { inventoryLevel { id quantities(names: [\"available\"]) { name quantity } item { id } location { id } } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/43729076",
    "locationId": "gid://shopify/Location/346779380",
    "available": 42
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
      inventoryLevel {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        item {
          id
        }
        location {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380",
        "available": 42
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
      inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
        inventoryLevel {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          item {
            id
          }
          location {
            id
          }
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/43729076",
        "locationId": "gid://shopify/Location/346779380",
        "available": 42
    },
  },
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
  mutation ActivateInventoryItem($inventoryItemId: ID!, $locationId: ID!, $available: Int) {
    inventoryActivate(inventoryItemId: $inventoryItemId, locationId: $locationId, available: $available) {
      inventoryLevel {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        item {
          id
        }
        location {
          id
        }
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/43729076",
  "locationId": "gid://shopify/Location/346779380",
  "available": 42
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

9

1

2

3

4

5

›

⌄

{

"inventoryItemId": "gid://shopify/InventoryItem/43729076",

"locationId": "gid://shopify/Location/346779380",

"available": 42

}

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"inventoryActivate": {

"inventoryLevel": {

"id": "gid://shopify/InventoryLevel/523463154?inventory_item_id=43729076",

"quantities": [

{

"name": "available",

"quantity": 42

}

],

"item": {

"id": "gid://shopify/InventoryItem/43729076"

},

"location": {

"id": "gid://shopify/Location/346779380"

}

}

}

}


---
*Content truncated at "Updates" section*