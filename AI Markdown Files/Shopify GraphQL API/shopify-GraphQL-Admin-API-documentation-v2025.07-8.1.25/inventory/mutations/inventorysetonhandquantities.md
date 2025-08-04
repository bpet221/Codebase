---
title: "inventorySetOnHandQuantities"
description: "Shopify GraphQL Admin API documentation for inventorysetonhandquantities"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventorySetOnHandQuantities - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities

Markdown Content:
inventorySetOnHandQuantities - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#main-content)

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

[Anchor to inventorySetOnHandQuantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#top)
inventory Set On Hand Quantities
================================

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update an inventory.

Deprecated.Use [inventorySetQuantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities) to set on_hand or available quantites instead.

Set inventory on-hand quantities using absolute values.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#arguments-input)input

•[Inventory Set On Hand Quantities Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput)

required

The information required to set inventory on hand quantities.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to InventorySetOnHandQuantitiesPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#returns)Inventory Set On Hand Quantities Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryAdjustmentGroup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#returns-inventoryAdjustmentGroup)inventory Adjustment Group

•[Inventory Adjustment Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup)

The group of changes made by the operation.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities#returns-userErrors)user Errors

•[[Inventory Set On Hand Quantities User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Adjust on_hand quantity for 2 items, with reason 'correction'.

#### Query

```graphql
mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
  inventorySetOnHandQuantities(input: $input) {
    userErrors {
      field
      message
    }
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
        name
        delta
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "setQuantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 42
      },
      {
        "inventoryItemId": "gid://shopify/InventoryItem/113711323",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 13
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
"query": "mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) { inventorySetOnHandQuantities(input: $input) { userErrors { field message } inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } } }",
 "variables": {
    "input": {
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "setQuantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 42
        },
        {
          "inventoryItemId": "gid://shopify/InventoryItem/113711323",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 13
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
  mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
    inventorySetOnHandQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "setQuantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 42
                },
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/113711323",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 13
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
  mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
    inventorySetOnHandQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "setQuantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 42
      },
      {
        "inventoryItemId": "gid://shopify/InventoryItem/113711323",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 13
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
    "query": `mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
      inventorySetOnHandQuantities(input: $input) {
        userErrors {
          field
          message
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "setQuantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 42
                },
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/113711323",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 13
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "inventorySetOnHandQuantities": {
    "userErrors": [],
    "inventoryAdjustmentGroup": {
      "createdAt": "2024-09-12T01:05:46Z",
      "reason": "Inventory correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "changes": [
        {
          "name": "available",
          "delta": 31
        },
        {
          "name": "available",
          "delta": 12
        },
        {
          "name": "on_hand",
          "delta": 31
        },
        {
          "name": "on_hand",
          "delta": 12
        }
      ]
    }
  }
}
``` 
*   ### inventorySetOnHandQuantities reference

Examples
--------

Adjust on_hand quantity for 2 items, with reason 'correction'.

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventorySetOnHandQuantities(%24input%3A%20InventorySetOnHandQuantitiesInput!)%20%7B%0A%20%20inventorySetOnHandQuantities(input%3A%20%24input)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20inventoryAdjustmentGroup%20%7B%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20reason%0A%20%20%20%20%20%20referenceDocumentUri%0A%20%20%20%20%20%20changes%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20delta%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22reason%22%3A%20%22correction%22%2C%0A%20%20%20%20%22referenceDocumentUri%22%3A%20%22logistics%3A%2F%2Fsome.warehouse%2Ftake%2F2023-01-23T13%3A14%3A15Z%22%2C%0A%20%20%20%20%22setQuantities%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F30322695%22%2C%0A%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%2042%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22inventoryItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F113711323%22%2C%0A%20%20%20%20%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F124656943%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%2013%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {

 inventorySetOnHandQuantities(input: $input) {

 userErrors {

 field

 message

 }

 inventoryAdjustmentGroup {

 createdAt

 reason

 referenceDocumentUri

 changes {

 name

 delta

 }

 }

 }

 }`,

{

variables:{

"input":{

"reason":"correction",

"referenceDocumentUri":"logistics://some.warehouse/take/2023-01-23T13:14:15Z",

"setQuantities":[

{

"inventoryItemId":"gid://shopify/InventoryItem/30322695",

"locationId":"gid://shopify/Location/124656943",

"quantity":42

},

{

"inventoryItemId":"gid://shopify/InventoryItem/113711323",

"locationId":"gid://shopify/Location/124656943",

"quantity":13

```
mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
  inventorySetOnHandQuantities(input: $input) {
    userErrors {
      field
      message
    }
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
        name
        delta
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
"query": "mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) { inventorySetOnHandQuantities(input: $input) { userErrors { field message } inventoryAdjustmentGroup { createdAt reason referenceDocumentUri changes { name delta } } } }",
 "variables": {
    "input": {
      "reason": "correction",
      "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
      "setQuantities": [
        {
          "inventoryItemId": "gid://shopify/InventoryItem/30322695",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 42
        },
        {
          "inventoryItemId": "gid://shopify/InventoryItem/113711323",
          "locationId": "gid://shopify/Location/124656943",
          "quantity": 13
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
  mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
    inventorySetOnHandQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "setQuantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 42
                },
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/113711323",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 13
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
    "query": `mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
      inventorySetOnHandQuantities(input: $input) {
        userErrors {
          field
          message
        }
        inventoryAdjustmentGroup {
          createdAt
          reason
          referenceDocumentUri
          changes {
            name
            delta
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "reason": "correction",
            "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
            "setQuantities": [
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/30322695",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 42
                },
                {
                    "inventoryItemId": "gid://shopify/InventoryItem/113711323",
                    "locationId": "gid://shopify/Location/124656943",
                    "quantity": 13
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
  mutation inventorySetOnHandQuantities($input: InventorySetOnHandQuantitiesInput!) {
    inventorySetOnHandQuantities(input: $input) {
      userErrors {
        field
        message
      }
      inventoryAdjustmentGroup {
        createdAt
        reason
        referenceDocumentUri
        changes {
          name
          delta
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "reason": "correction",
    "referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",
    "setQuantities": [
      {
        "inventoryItemId": "gid://shopify/InventoryItem/30322695",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 42
      },
      {
        "inventoryItemId": "gid://shopify/InventoryItem/113711323",
        "locationId": "gid://shopify/Location/124656943",
        "quantity": 13
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

16

17

18

›

⌄

⌄

⌄

⌄

⌄

{

"input": {

"reason": "correction",

"referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",

"setQuantities": [

{

"inventoryItemId": "gid://shopify/InventoryItem/30322695",

"locationId": "gid://shopify/Location/124656943",

"quantity": 42

},

{

"inventoryItemId": "gid://shopify/InventoryItem/113711323",

"locationId": "gid://shopify/Location/124656943",

"quantity": 13

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

21

22

23

24

25

26

27

28

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

"inventorySetOnHandQuantities": {

"userErrors": [],

"inventoryAdjustmentGroup": {

"createdAt": "2024-09-12T01:05:46Z",

"reason": "Inventory correction",

"referenceDocumentUri": "logistics://some.warehouse/take/2023-01-23T13:14:15Z",

"changes": [

{

"name": "available",

"delta": 31

},

{

"name": "available",

"delta": 12

},

{

"name": "on_hand",

"delta": 31

},

{

"name": "on_hand",

"delta": 12

}

]

}

}

}


---
*Content truncated at "Updates" section*