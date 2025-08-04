---
title: "inventoryProperties"
description: "Shopify GraphQL Admin API documentation for inventoryproperties"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties"
extraction_method: "jina"
sections: ['Inventory', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryProperties - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties

Markdown Content:
inventoryProperties - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties#main-content)

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

[Anchor to inventoryProperties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties#top)
inventory Properties
====================

query

Requires `read_inventory` access scope.

General inventory properties for the shop.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to InventoryProperties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties#returns-InventoryProperties)Inventory Properties

•[Inventory Properties!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryProperties)

General inventory properties for the shop.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get inventory properties for a shop

#### Description

Retrieve the details of inventoryProperties.

#### Query

```graphql
query inventoryProperties {
  inventoryProperties {
    quantityNames {
      belongsTo
      comprises
      displayName
      isInUse
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
"query": "query inventoryProperties { inventoryProperties { quantityNames { belongsTo comprises displayName isInUse name } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryProperties {
    inventoryProperties {
      quantityNames {
        belongsTo
        comprises
        displayName
        isInUse
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
  query inventoryProperties {
    inventoryProperties {
      quantityNames {
        belongsTo
        comprises
        displayName
        isInUse
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
  data: `query inventoryProperties {
    inventoryProperties {
      quantityNames {
        belongsTo
        comprises
        displayName
        isInUse
        name
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryProperties": {
    "quantityNames": [
      {
        "belongsTo": [
          "on_hand"
        ],
        "comprises": [],
        "displayName": "Available",
        "isInUse": true,
        "name": "available"
      },
      {
        "belongsTo": [
          "on_hand"
        ],
        "comprises": [],
        "displayName": "Committed",
        "isInUse": true,
        "name": "committed"
      },
      {
        "belongsTo": [
          "on_hand"
        ],
        "comprises": [],
        "displayName": "Damaged",
        "isInUse": false,
        "name": "damaged"
      },
      {
        "belongsTo": [],
        "comprises": [],
        "displayName": "Incoming",
        "isInUse": true,
        "name": "incoming"
      },
      {
        "belongsTo": [],
        "comprises": [
          "available",
          "committed",
          "damaged",
          "quality_control",
          "reserved",
          "safety_stock"
        ],
        "displayName": "On hand",
        "isInUse": true,
        "name": "on_hand"
      },
      {
        "belongsTo": [
          "on_hand"
        ],
        "comprises": [],
        "displayName": "Quality control",
        "isInUse": false,
        "name": "quality_control"
      },
      {
        "belongsTo": [
          "on_hand"
        ],
        "comprises": [],
        "displayName": "Reserved",
        "isInUse": true,
        "name": "reserved"
      },
      {
        "belongsTo": [
          "on_hand"
        ],
        "comprises": [],
        "displayName": "Safety stock",
        "isInUse": false,
        "name": "safety_stock"
      }
    ]
  }
}
``` 
*   ### Get inventory quantity names to be used with inventory queries and mutations

#### Description

Retrieve the details of inventoryProperties.

#### Query

```graphql
query inventoryProperties {
  inventoryProperties {
    quantityNames {
      name
      isInUse
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
"query": "query inventoryProperties { inventoryProperties { quantityNames { name isInUse } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryProperties {
    inventoryProperties {
      quantityNames {
        name
        isInUse
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
  query inventoryProperties {
    inventoryProperties {
      quantityNames {
        name
        isInUse
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query inventoryProperties {
    inventoryProperties {
      quantityNames {
        name
        isInUse
      }
    }
  }`,
});
``` #### Response

```json
{
  "inventoryProperties": {
    "quantityNames": [
      {
        "name": "available",
        "isInUse": true
      },
      {
        "name": "committed",
        "isInUse": true
      },
      {
        "name": "damaged",
        "isInUse": false
      },
      {
        "name": "incoming",
        "isInUse": true
      },
      {
        "name": "on_hand",
        "isInUse": true
      },
      {
        "name": "quality_control",
        "isInUse": false
      },
      {
        "name": "reserved",
        "isInUse": true
      },
      {
        "name": "safety_stock",
        "isInUse": false
      }
    ]
  }
}
``` 

Examples
--------

Get inventory properties for a shop

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20inventoryProperties%20%7B%0A%20%20inventoryProperties%20%7B%0A%20%20%20%20quantityNames%20%7B%0A%20%20%20%20%20%20belongsTo%0A%20%20%20%20%20%20comprises%0A%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20isInUse%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query inventoryProperties {

 inventoryProperties {

 quantityNames {

 belongsTo

 comprises

 displayName

 isInUse

 name

 }

 }

 }`,

);

const data=await response.json();

```
query inventoryProperties {
  inventoryProperties {
    quantityNames {
      belongsTo
      comprises
      displayName
      isInUse
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
"query": "query inventoryProperties { inventoryProperties { quantityNames { belongsTo comprises displayName isInUse name } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query inventoryProperties {
    inventoryProperties {
      quantityNames {
        belongsTo
        comprises
        displayName
        isInUse
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
  data: `query inventoryProperties {
    inventoryProperties {
      quantityNames {
        belongsTo
        comprises
        displayName
        isInUse
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
  query inventoryProperties {
    inventoryProperties {
      quantityNames {
        belongsTo
        comprises
        displayName
        isInUse
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

{

"inventoryProperties": {

"quantityNames": [

{

"belongsTo": [

"on_hand"

],

"comprises": [],

"displayName": "Available",

"isInUse": true,

"name": "available"

},

{

"belongsTo": [

"on_hand"

],

"comprises": [],

"displayName": "Committed",

"isInUse": true,

"name": "committed"

},

{

"belongsTo": [

"on_hand"

],

"comprises": [],

"displayName": "Damaged",

"isInUse": false,

"name": "damaged"

},

{

"belongsTo": [],

"comprises": [],

"displayName": "Incoming",

"isInUse": true,

"name": "incoming"


---
*Content truncated at "Updates" section*