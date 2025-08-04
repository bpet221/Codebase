---
title: "inventoryItemUpdate"
description: "Shopify GraphQL Admin API documentation for inventoryitemupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryItemUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate

Markdown Content:
inventoryItemUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#main-content)

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

[Anchor to inventoryItemUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#top)
inventory Item Update
=====================

mutation

Requires `write_inventory` access scope. Also: The user must have a permission to update an inventory item.

Updates an inventory item.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the inventory item to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#arguments-input)input

•[Inventory Item Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

required

The input fields that update an [`inventoryItem`](https://shopify.dev/api/admin-graphql/latest/queries/inventoryitem).

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to InventoryItemUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#returns)Inventory Item Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#returns-inventoryItem)inventory Item

•[Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

The inventory item that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Updates an existing inventory item

#### Query

```graphql
mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
  inventoryItemUpdate(id: $id, input: $input) {
    inventoryItem {
      id
      unitCost {
        amount
      }
      tracked
      countryCodeOfOrigin
      provinceCodeOfOrigin
      harmonizedSystemCode
      countryHarmonizedSystemCodes(first: 1) {
        edges {
          node {
            harmonizedSystemCode
            countryCode
          }
        }
      }
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/InventoryItem/43729076",
  "input": {
    "cost": 145.89,
    "tracked": false,
    "countryCodeOfOrigin": "US",
    "provinceCodeOfOrigin": "OR",
    "harmonizedSystemCode": "621710",
    "countryHarmonizedSystemCodes": [
      {
        "harmonizedSystemCode": "6217109510",
        "countryCode": "CA"
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
"query": "mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) { inventoryItemUpdate(id: $id, input: $input) { inventoryItem { id unitCost { amount } tracked countryCodeOfOrigin provinceCodeOfOrigin harmonizedSystemCode countryHarmonizedSystemCodes(first: 1) { edges { node { harmonizedSystemCode countryCode } } } } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/InventoryItem/43729076",
    "input": {
      "cost": 145.89,
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": [
        {
          "harmonizedSystemCode": "6217109510",
          "countryCode": "CA"
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
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/InventoryItem/43729076",
        "input": {
            "cost": 145.89,
            "tracked": false,
            "countryCodeOfOrigin": "US",
            "provinceCodeOfOrigin": "OR",
            "harmonizedSystemCode": "621710",
            "countryHarmonizedSystemCodes": [
                {
                    "harmonizedSystemCode": "6217109510",
                    "countryCode": "CA"
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
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/InventoryItem/43729076",
  "input": {
    "cost": 145.89,
    "tracked": false,
    "countryCodeOfOrigin": "US",
    "provinceCodeOfOrigin": "OR",
    "harmonizedSystemCode": "621710",
    "countryHarmonizedSystemCodes": [
      {
        "harmonizedSystemCode": "6217109510",
        "countryCode": "CA"
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
    "query": `mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
      inventoryItemUpdate(id: $id, input: $input) {
        inventoryItem {
          id
          unitCost {
            amount
          }
          tracked
          countryCodeOfOrigin
          provinceCodeOfOrigin
          harmonizedSystemCode
          countryHarmonizedSystemCodes(first: 1) {
            edges {
              node {
                harmonizedSystemCode
                countryCode
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/InventoryItem/43729076",
        "input": {
            "cost": 145.89,
            "tracked": false,
            "countryCodeOfOrigin": "US",
            "provinceCodeOfOrigin": "OR",
            "harmonizedSystemCode": "621710",
            "countryHarmonizedSystemCodes": [
                {
                    "harmonizedSystemCode": "6217109510",
                    "countryCode": "CA"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "inventoryItemUpdate": {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/43729076",
      "unitCost": {
        "amount": "145.89"
      },
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": {
        "edges": [
          {
            "node": {
              "harmonizedSystemCode": "6217109510",
              "countryCode": "CA"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### inventoryItemUpdate reference

Examples
--------

Updates an existing inventory item

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20inventoryItemUpdate(%24id%3A%20ID!%2C%20%24input%3A%20InventoryItemInput!)%20%7B%0A%20%20inventoryItemUpdate(id%3A%20%24id%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20inventoryItem%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20unitCost%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20tracked%0A%20%20%20%20%20%20countryCodeOfOrigin%0A%20%20%20%20%20%20provinceCodeOfOrigin%0A%20%20%20%20%20%20harmonizedSystemCode%0A%20%20%20%20%20%20countryHarmonizedSystemCodes(first%3A%201)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20harmonizedSystemCode%0A%20%20%20%20%20%20%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FInventoryItem%2F43729076%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22cost%22%3A%20145.89%2C%0A%20%20%20%20%22tracked%22%3A%20false%2C%0A%20%20%20%20%22countryCodeOfOrigin%22%3A%20%22US%22%2C%0A%20%20%20%20%22provinceCodeOfOrigin%22%3A%20%22OR%22%2C%0A%20%20%20%20%22harmonizedSystemCode%22%3A%20%22621710%22%2C%0A%20%20%20%20%22countryHarmonizedSystemCodes%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22harmonizedSystemCode%22%3A%20%226217109510%22%2C%0A%20%20%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {

 inventoryItemUpdate(id: $id, input: $input) {

 inventoryItem {

 id

 unitCost {

 amount

 }

 tracked

 countryCodeOfOrigin

 provinceCodeOfOrigin

 harmonizedSystemCode

 countryHarmonizedSystemCodes(first: 1) {

 edges {

 node {

 harmonizedSystemCode

 countryCode

 }

 }

 }

 }

 userErrors {

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/InventoryItem/43729076",

"input":{

"cost":145.89,

"tracked":false,

"countryCodeOfOrigin":"US",

```
mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
  inventoryItemUpdate(id: $id, input: $input) {
    inventoryItem {
      id
      unitCost {
        amount
      }
      tracked
      countryCodeOfOrigin
      provinceCodeOfOrigin
      harmonizedSystemCode
      countryHarmonizedSystemCodes(first: 1) {
        edges {
          node {
            harmonizedSystemCode
            countryCode
          }
        }
      }
    }
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
"query": "mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) { inventoryItemUpdate(id: $id, input: $input) { inventoryItem { id unitCost { amount } tracked countryCodeOfOrigin provinceCodeOfOrigin harmonizedSystemCode countryHarmonizedSystemCodes(first: 1) { edges { node { harmonizedSystemCode countryCode } } } } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/InventoryItem/43729076",
    "input": {
      "cost": 145.89,
      "tracked": false,
      "countryCodeOfOrigin": "US",
      "provinceCodeOfOrigin": "OR",
      "harmonizedSystemCode": "621710",
      "countryHarmonizedSystemCodes": [
        {
          "harmonizedSystemCode": "6217109510",
          "countryCode": "CA"
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
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/InventoryItem/43729076",
        "input": {
            "cost": 145.89,
            "tracked": false,
            "countryCodeOfOrigin": "US",
            "provinceCodeOfOrigin": "OR",
            "harmonizedSystemCode": "621710",
            "countryHarmonizedSystemCodes": [
                {
                    "harmonizedSystemCode": "6217109510",
                    "countryCode": "CA"
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
    "query": `mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
      inventoryItemUpdate(id: $id, input: $input) {
        inventoryItem {
          id
          unitCost {
            amount
          }
          tracked
          countryCodeOfOrigin
          provinceCodeOfOrigin
          harmonizedSystemCode
          countryHarmonizedSystemCodes(first: 1) {
            edges {
              node {
                harmonizedSystemCode
                countryCode
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/InventoryItem/43729076",
        "input": {
            "cost": 145.89,
            "tracked": false,
            "countryCodeOfOrigin": "US",
            "provinceCodeOfOrigin": "OR",
            "harmonizedSystemCode": "621710",
            "countryHarmonizedSystemCodes": [
                {
                    "harmonizedSystemCode": "6217109510",
                    "countryCode": "CA"
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
  mutation inventoryItemUpdate($id: ID!, $input: InventoryItemInput!) {
    inventoryItemUpdate(id: $id, input: $input) {
      inventoryItem {
        id
        unitCost {
          amount
        }
        tracked
        countryCodeOfOrigin
        provinceCodeOfOrigin
        harmonizedSystemCode
        countryHarmonizedSystemCodes(first: 1) {
          edges {
            node {
              harmonizedSystemCode
              countryCode
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/InventoryItem/43729076",
  "input": {
    "cost": 145.89,
    "tracked": false,
    "countryCodeOfOrigin": "US",
    "provinceCodeOfOrigin": "OR",
    "harmonizedSystemCode": "621710",
    "countryHarmonizedSystemCodes": [
      {
        "harmonizedSystemCode": "6217109510",
        "countryCode": "CA"
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

›

⌄

⌄

⌄

⌄

{

"id": "gid://shopify/InventoryItem/43729076",

"input": {

"cost": 145.89,

"tracked": false,

"countryCodeOfOrigin": "US",

"provinceCodeOfOrigin": "OR",

"harmonizedSystemCode": "621710",

"countryHarmonizedSystemCodes": [

{

"harmonizedSystemCode": "6217109510",

"countryCode": "CA"

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

"inventoryItemUpdate": {

"inventoryItem": {

"id": "gid://shopify/InventoryItem/43729076",

"unitCost": {

"amount": "145.89"

},

"tracked": false,

"countryCodeOfOrigin": "US",

"provinceCodeOfOrigin": "OR",

"harmonizedSystemCode": "621710",

"countryHarmonizedSystemCodes": {

"edges": [

{

"node": {

"harmonizedSystemCode": "6217109510",

"countryCode": "CA"

}

}

]

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*