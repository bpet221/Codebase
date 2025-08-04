---
title: "inventoryDeactivate"
description: "Shopify GraphQL Admin API documentation for inventorydeactivate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryDeactivate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate

Markdown Content:
inventoryDeactivate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate#main-content)

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

[Anchor to inventoryDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate#top)
inventory Deactivate
====================

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to deactivate an inventory.

Removes an inventory item's quantities from a location, and turns off inventory at the location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate#arguments)
Arguments
---------

[Anchor to inventoryLevelId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate#arguments-inventoryLevelId)inventory Level Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the inventory level to deactivate.

* * *

Was this section helpful?

Yes No

[Anchor to InventoryDeactivatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate#returns)Inventory Deactivate Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Deletes an inventory level from a location

#### Query

```graphql
mutation inventoryDeactivate($inventoryLevelId: ID!) {
  inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation inventoryDeactivate($inventoryLevelId: ID!) { inventoryDeactivate(inventoryLevelId: $inventoryLevelId) { userErrors { message } } }",
 "variables": {
    "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventoryDeactivate($inventoryLevelId: ID!) {
    inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
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
  mutation inventoryDeactivate($inventoryLevelId: ID!) {
    inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventoryDeactivate($inventoryLevelId: ID!) {
      inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
    },
  },
});
``` #### Response

```json
{
  "inventoryDeactivate": {
    "userErrors": []
  }
}
``` 
*   ### inventoryDeactivate reference

Examples
--------

Deletes an inventory level from a location

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryDeactivate(%24inventoryLevelId%3A%20ID!)%20%7B%0A%20%20inventoryDeactivate(inventoryLevelId%3A%20%24inventoryLevelId)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22inventoryLevelId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryLevel%2F820859520%3Finventory_item_id%3D826867926%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation inventoryDeactivate($inventoryLevelId: ID!) {

 inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {

 userErrors {

 message

 }

 }

 }`,

{

variables:{

"inventoryLevelId":"gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"

},

},

);

const data=await response.json();

```
mutation inventoryDeactivate($inventoryLevelId: ID!) {
  inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
    userErrors {
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
"query": "mutation inventoryDeactivate($inventoryLevelId: ID!) { inventoryDeactivate(inventoryLevelId: $inventoryLevelId) { userErrors { message } } }",
 "variables": {
    "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation inventoryDeactivate($inventoryLevelId: ID!) {
    inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation inventoryDeactivate($inventoryLevelId: ID!) {
      inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
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
  mutation inventoryDeactivate($inventoryLevelId: ID!) {
    inventoryDeactivate(inventoryLevelId: $inventoryLevelId) {
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"
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

›

⌄

{

"inventoryLevelId": "gid://shopify/InventoryLevel/820859520?inventory_item_id=826867926"

}

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

›

⌄

⌄

{

"inventoryDeactivate": {

"userErrors": []

}

}


---
*Content truncated at "Updates" section*