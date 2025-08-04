---
title: "inventoryBulkToggleActivation"
description: "Shopify GraphQL Admin API documentation for inventorybulktoggleactivation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryBulkToggleActivation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation

Markdown Content:
inventoryBulkToggleActivation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#main-content)

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

[Anchor to inventoryBulkToggleActivation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#top)
inventory Bulk Toggle Activation
================================

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update the activation status of an inventory.

Modify the activation status of an inventory item at locations. Activating an inventory item at a particular location allows that location to stock that inventory item. Deactivating an inventory item at a location removes the inventory item's quantities and turns off the inventory item from that location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#arguments)
Arguments
---------

[Anchor to inventoryItemId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#arguments-inventoryItemId)inventory Item Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the inventory item to modify the activation status locations for.

[Anchor to inventoryItemUpdates](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#arguments-inventoryItemUpdates)inventory Item Updates

•[[Inventory Bulk Toggle Activation Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryBulkToggleActivationInput)

required

A list of pairs of locations and activate status to update for the specified inventory item.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to InventoryBulkToggleActivationPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#returns)Inventory Bulk Toggle Activation Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#returns-inventoryItem)inventory Item

•[Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

The inventory item that was updated.

Show fields

[Anchor to inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#returns-inventoryLevels)inventory Levels

•[[Inventory Level!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

The activated inventory levels.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation#returns-userErrors)user Errors

•[[Inventory Bulk Toggle Activation User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryBulkToggleActivationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Activate an inventory item at a location

#### Query

```graphql
mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
  inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
    inventoryItem {
      id
    }
    inventoryLevels {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      location {
        id
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id quantities(names: [\"available\"]) { name quantity } location { id } } userErrors { field message code } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
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
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "inventoryBulkToggleActivation": {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/30322695"
    },
    "inventoryLevels": [
      {
        "id": "gid://shopify/InventoryLevel/30691503?inventory_item_id=30322695",
        "quantities": [
          {
            "name": "available",
            "quantity": 0
          }
        ],
        "location": {
          "id": "gid://shopify/Location/648019273"
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Deactivate an inventory item at a location

#### Query

```graphql
mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
  inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
    inventoryItem {
      id
    }
    inventoryLevels {
      id
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/124656943",
      "activate": false
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id } userErrors { field message code } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/124656943",
        "activate": false
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/124656943",
                "activate": false
            }
        ]
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
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/124656943",
      "activate": false
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/124656943",
                "activate": false
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "inventoryBulkToggleActivation": {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/30322695"
    },
    "inventoryLevels": [],
    "userErrors": []
  }
}
``` 
*   ### Toggle an inventory item's activation at two locations

#### Query

```graphql
mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
  inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
    inventoryItem {
      id
    }
    inventoryLevels {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      location {
        id
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/124656943",
      "activate": false
    },
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id quantities(names: [\"available\"]) { name quantity } location { id } } userErrors { field message code } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/124656943",
        "activate": false
      },
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/124656943",
                "activate": false
            },
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
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
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/124656943",
      "activate": false
    },
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/124656943",
                "activate": false
            },
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "inventoryBulkToggleActivation": {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/30322695"
    },
    "inventoryLevels": [
      {
        "id": "gid://shopify/InventoryLevel/30691503?inventory_item_id=30322695",
        "quantities": [
          {
            "name": "available",
            "quantity": 0
          }
        ],
        "location": {
          "id": "gid://shopify/Location/648019273"
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### inventoryBulkToggleActivation reference

Examples
--------

Activate an inventory item at a location

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryBulkToggleActivation(%24inventoryItemId%3A%20ID!%2C%20%24inventoryItemUpdates%3A%20%5BInventoryBulkToggleActivationInput!%5D!)%20%7B%0A%20%20inventoryBulkToggleActivation(inventoryItemId%3A%20%24inventoryItemId%2C%20inventoryItemUpdates%3A%20%24inventoryItemUpdates)%20%7B%0A%20%20%20%20inventoryItem%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20inventoryLevels%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20quantities(names%3A%20%5B%22available%22%5D)%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%22inventoryItemUpdates%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F648019273%22%2C%0A%20%20%20%20%20%20%22activate%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

37

38

39

40

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {

 inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {

 inventoryItem {

 id

 }

 inventoryLevels {

 id

 quantities(names: ["available"]) {

 name

 quantity

 }

 location {

 id

 }

 }

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"inventoryItemId":"gid://shopify/InventoryItem/30322695",

"inventoryItemUpdates":[

{

"locationId":"gid://shopify/Location/648019273",

"activate":true

}

]

},

},

);

const data=await response.json();

```
mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
  inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
    inventoryItem {
      id
    }
    inventoryLevels {
      id
      quantities(names: ["available"]) {
        name
        quantity
      }
      location {
        id
      }
    }
    userErrors {
      field
      message
      code
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
"query": "mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) { inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) { inventoryItem { id } inventoryLevels { id quantities(names: [\"available\"]) { name quantity } location { id } } userErrors { field message code } } }",
 "variables": {
    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
    "inventoryItemUpdates": [
      {
        "locationId": "gid://shopify/Location/648019273",
        "activate": true
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
      inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
        inventoryItem {
          id
        }
        inventoryLevels {
          id
          quantities(names: ["available"]) {
            name
            quantity
          }
          location {
            id
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "inventoryItemUpdates": [
            {
                "locationId": "gid://shopify/Location/648019273",
                "activate": true
            }
        ]
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
  mutation inventoryBulkToggleActivation($inventoryItemId: ID!, $inventoryItemUpdates: [InventoryBulkToggleActivationInput!]!) {
    inventoryBulkToggleActivation(inventoryItemId: $inventoryItemId, inventoryItemUpdates: $inventoryItemUpdates) {
      inventoryItem {
        id
      }
      inventoryLevels {
        id
        quantities(names: ["available"]) {
          name
          quantity
        }
        location {
          id
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "inventoryItemId": "gid://shopify/InventoryItem/30322695",
  "inventoryItemUpdates": [
    {
      "locationId": "gid://shopify/Location/648019273",
      "activate": true
    }
  ]
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

6

7

8

9

›

⌄

⌄

⌄

{

"inventoryItemId": "gid://shopify/InventoryItem/30322695",

"inventoryItemUpdates": [

{

"locationId": "gid://shopify/Location/648019273",

"activate": true

}

]

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

20

21

22

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"inventoryBulkToggleActivation": {

"inventoryItem": {

"id": "gid://shopify/InventoryItem/30322695"

},

"inventoryLevels": [

{

"id": "gid://shopify/InventoryLevel/30691503?inventory_item_id=30322695",

"quantities": [

{

"name": "available",

"quantity": 0

}

],

"location": {

"id": "gid://shopify/Location/648019273"

}

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*