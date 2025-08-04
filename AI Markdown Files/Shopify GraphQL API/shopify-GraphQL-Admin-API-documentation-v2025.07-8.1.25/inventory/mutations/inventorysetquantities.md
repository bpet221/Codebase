---
title: "inventorySetQuantities"
description: "Shopify GraphQL Admin API documentation for inventorysetquantities"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventorySetQuantities - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities

Markdown Content:
inventorySetQuantities - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#main-content)

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

[Anchor to inventorySetQuantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#top)
inventory Set Quantities
========================

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update an inventory.

Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

* * *

Note

Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.

Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out of the check using `ignoreCompareQuantity` only when necessary.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#arguments-input)input

•[Inventory Set Quantities Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput)

required

The information required to set inventory quantities.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to InventorySetQuantitiesPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#returns)Inventory Set Quantities Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryAdjustmentGroup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#returns-inventoryAdjustmentGroup)inventory Adjustment Group

•[Inventory Adjustment Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

The group of changes made by the operation.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities#returns-userErrors)user Errors

•[[Inventory Set Quantities User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Sets the inventory level for an inventory item at a location

#### Query

```graphql
mutation InventorySet($input: InventorySetQuantitiesInput!) {
  inventorySetQuantities(input: $input) {
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
        name
        delta
      }
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation InventorySet($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
                }
            ]
        }
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
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation InventorySet($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "inventorySetQuantities": {
    "inventoryAdjustmentGroup": {
      "createdAt": "2024-11-07T22:03:12Z",
      "reason": "Inventory correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "name": "available",
          "delta": 10
        },
        {
          "name": "on_hand",
          "delta": 10
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Setting available quantity at a location with compare-and-swap (CAS) enabled

#### Query

```graphql
mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
  inventorySetQuantities(input: $input) {
    inventoryAdjustmentGroup {
      reason
      referenceDocumentUri
      changes {
        name
        delta
        quantityAfterChange
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { reason referenceDocumentUri changes { name delta quantityAfterChange } } userErrors { code field message } } }",
 "variables": {
    "input": {
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        reason
        referenceDocumentUri
        changes {
          name
          delta
          quantityAfterChange
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
                }
            ]
        }
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
  mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        reason
        referenceDocumentUri
        changes {
          name
          delta
          quantityAfterChange
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          reason
          referenceDocumentUri
          changes {
            name
            delta
            quantityAfterChange
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "inventorySetQuantities": {
    "inventoryAdjustmentGroup": {
      "reason": "Inventory correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "name": "available",
          "delta": 10,
          "quantityAfterChange": null
        },
        {
          "name": "on_hand",
          "delta": 10,
          "quantityAfterChange": null
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Setting available quantity at a location without compare-and-swap (CAS) enabled

#### Query

```graphql
mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
  inventorySetQuantities(input: $input) {
    inventoryAdjustmentGroup {
      reason
      referenceDocumentUri
      changes {
        name
        delta
        quantityAfterChange
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "ignoreCompareQuantity": true,
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 42,
        "compareQuantity": null
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { reason referenceDocumentUri changes { name delta quantityAfterChange } } userErrors { code field message } } }",
 "variables": {
    "input": {
      "ignoreCompareQuantity": true,
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 42,
          "compareQuantity": null
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        reason
        referenceDocumentUri
        changes {
          name
          delta
          quantityAfterChange
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "ignoreCompareQuantity": true,
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 42,
                    "compareQuantity": null
                }
            ]
        }
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
  mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        reason
        referenceDocumentUri
        changes {
          name
          delta
          quantityAfterChange
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "ignoreCompareQuantity": true,
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 42,
        "compareQuantity": null
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventorySetQuantities($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          reason
          referenceDocumentUri
          changes {
            name
            delta
            quantityAfterChange
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "ignoreCompareQuantity": true,
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 42,
                    "compareQuantity": null
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "inventorySetQuantities": {
    "inventoryAdjustmentGroup": {
      "reason": "Inventory correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "name": "available",
          "delta": 41,
          "quantityAfterChange": null
        },
        {
          "name": "on_hand",
          "delta": 41,
          "quantityAfterChange": null
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### inventorySetQuantities reference

Examples
--------

Sets the inventory level for an inventory item at a location

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20InventorySet(%24input%3A%20InventorySetQuantitiesInput!)%20%7B%0A%20%20inventorySetQuantities(input%3A%20%24input)%20%7B%0A%20%20%20%20inventoryAdjustmentGroup%20%7B%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20reason%0A%20%20%20%20%20%20referenceDocumentUri%0A%20%20%20%20%20%20changes%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20delta%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22available%22%2C%0A%20%20%20%20%22reason%22%3A%20%22correction%22%2C%0A%20%20%20%20%22referenceDocumentUri%22%3A%20%22logistics%3A%2F%2Fsome.warehouse%2Ftake%2F2023-01-23T13%3A14%3A15Z%22%2C%0A%20%20%20%20%22quantities%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%2011%2C%0A%20%20%20%20%20%20%20%20%22compareQuantity%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

41

›

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation InventorySet($input: InventorySetQuantitiesInput!) {

 inventorySetQuantities(input: $input) {

 inventoryAdjustmentGroup {

 createdAt

 reason

 referenceDocumentUri

 changes {

 name

 delta

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"name":"available",

"reason":"correction",

"referenceDocumentUri":"logistics://some.warehouse/take/2023-01-23T13:14:15Z",

"quantities":[

{

"inventoryItemId":"gid://shopify/InventoryItem/30322695",

"locationId":"gid://shopify/Location/124656943",

"quantity":11,

"compareQuantity":1

}

]

}

},

},

);

const data=await response.json();

```
mutation InventorySet($input: InventorySetQuantitiesInput!) {
  inventorySetQuantities(input: $input) {
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
        name
        delta
      }
    }
    userErrors {
      field
      message
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
"query": "mutation InventorySet($input: InventorySetQuantitiesInput!) { inventorySetQuantities(input: $input) { inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "available",
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "quantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 11,
          "compareQuantity": 1
        }
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
                }
            ]
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation InventorySet($input: InventorySetQuantitiesInput!) {
      inventorySetQuantities(input: $input) {
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "available",
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "quantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 11,
                    "compareQuantity": 1
                }
            ]
        }
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
  mutation InventorySet($input: InventorySetQuantitiesInput!) {
    inventorySetQuantities(input: $input) {
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "available",
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "quantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 11,
        "compareQuantity": 1
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

›

⌄

⌄

⌄

⌄

{

"input": {

"name": "available",

"reason": "correction",

"referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",

"quantities": [

{

"inventoryItemId": "gid://shopify/InventoryItem/30322695",

"locationId": "gid://shopify/Location/124656943",

"quantity": 11,

"compareQuantity": 1

}

]

}

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"inventorySetQuantities": {

"inventoryAdjustmentGroup": {

"createdAt": "2024-11-07T22:03:12Z",

"reason": "Inventory correction",

"referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",

"changes": [

{

"name": "available",

"delta": 10

},

{

"name": "on_hand",

"delta": 10

}

]

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*