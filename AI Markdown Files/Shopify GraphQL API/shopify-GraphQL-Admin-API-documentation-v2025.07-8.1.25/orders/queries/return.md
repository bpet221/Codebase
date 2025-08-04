---
title: "return"
description: "Shopify GraphQL Admin API documentation for return"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/return"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: return - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/return

Markdown Content:
return - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/return#main-content)

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
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   
Orders

    *   
Queries

        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)
        *   [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)
        *   [returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment)
        *   [returnable Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillments)
        *   [return Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returncalculate)
        *   [reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversedelivery)
        *   [reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversefulfillmentorder)
        *   [subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt)
        *   [subscription Billing Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempts)
        *   [subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycle)
        *   [subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults)
        *   [subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycles)
        *   [subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract)
        *   [subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontracts)
        *   [subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptiondraft)
        *   [tender Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions)

    *   Mutations   
    *   Objects   

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

[Anchor to return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return#top)
return
======

query

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

Retrieves a return by its ID. A return represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location.

Use the `return` query to retrieve information associated with the following workflows:

*   [Managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)
*   [Processing exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges)
*   [Tracking reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders)

A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/return#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/return#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) of the return to retrieve.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/return#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to Return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return#returns-Return)Return

•[Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a return's exchange line items

#### Description

Retrieve the exchange line items associated with a return to access which items are being exchanged as part of a return process. This example shows how to query for the `exchangeLineItems` connection, which includes the IDs of the exchange line items. Learn more about [managing exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).

#### Query

```graphql
query {
  return(id: "gid://shopify/Return/194950309") {
    exchangeLineItems(first: 10) {
      edges {
        node {
          id
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
"query": "query { return(id: \"gid://shopify/Return/194950309\") { exchangeLineItems(first: 10) { edges { node { id } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    return(id: "gid://shopify/Return/194950309") {
      exchangeLineItems(first: 10) {
        edges {
          node {
            id
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
  query {
    return(id: "gid://shopify/Return/194950309") {
      exchangeLineItems(first: 10) {
        edges {
          node {
            id
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
  data: `query {
    return(id: "gid://shopify/Return/194950309") {
      exchangeLineItems(first: 10) {
        edges {
          node {
            id
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "return": {
    "exchangeLineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/ExchangeLineItem/444766497"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a return's reverse fulfillment orders

#### Description

Retrieve the reverse fulfillment orders associated with a return. This example shows how to query the `reverseFulfillmentOrders` connection to get the IDs of related reverse fulfillment orders, which are used for tracking the logistics of returned items. Learn more about [managing reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders).

#### Query

```graphql
query {
  return(id: "gid://shopify/Return/684888505") {
    reverseFulfillmentOrders(first: 10) {
      edges {
        node {
          id
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
"query": "query { return(id: \"gid://shopify/Return/684888505\") { reverseFulfillmentOrders(first: 10) { edges { node { id } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    return(id: "gid://shopify/Return/684888505") {
      reverseFulfillmentOrders(first: 10) {
        edges {
          node {
            id
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
  query {
    return(id: "gid://shopify/Return/684888505") {
      reverseFulfillmentOrders(first: 10) {
        edges {
          node {
            id
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
  data: `query {
    return(id: "gid://shopify/Return/684888505") {
      reverseFulfillmentOrders(first: 10) {
        edges {
          node {
            id
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "return": {
    "reverseFulfillmentOrders": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/ReverseFulfillmentOrder/874405546"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a return's status and line items

#### Description

Retrieve the status and the first ten return line items associated with a return. The example shows how to structure the query to access the return's name, order ID, and the relevant attributes of the return line items, such as quantity, return reason, and total weight. The return status is `OPEN`, which indicates tha the query was successfully executed. The example uses the `... on ReturnLineItem` [fragment](https://shopify.dev/docs/apps/build/graphql/basics/advanced#inline-fragments) to access fields that only exist on the [`ReturnLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItem) object.

#### Query

```graphql
query {
  return(id: "gid://shopify/Return/945000954") {
    status
    name
    order {
      id
    }
    returnLineItems(first: 10) {
      edges {
        node {
          ... on ReturnLineItem {
            quantity
            returnReason
            returnReasonNote
            fulfillmentLineItem {
              lineItem {
                name
              }
            }
            totalWeight {
              value
            }
          }
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
"query": "query { return(id: \"gid://shopify/Return/945000954\") { status name order { id } returnLineItems(first: 10) { edges { node { ... on ReturnLineItem { quantity returnReason returnReasonNote fulfillmentLineItem { lineItem { name } } totalWeight { value } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    return(id: "gid://shopify/Return/945000954") {
      status
      name
      order {
        id
      }
      returnLineItems(first: 10) {
        edges {
          node {
            ... on ReturnLineItem {
              quantity
              returnReason
              returnReasonNote
              fulfillmentLineItem {
                lineItem {
                  name
                }
              }
              totalWeight {
                value
              }
            }
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
  query {
    return(id: "gid://shopify/Return/945000954") {
      status
      name
      order {
        id
      }
      returnLineItems(first: 10) {
        edges {
          node {
            ... on ReturnLineItem {
              quantity
              returnReason
              returnReasonNote
              fulfillmentLineItem {
                lineItem {
                  name
                }
              }
              totalWeight {
                value
              }
            }
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
  data: `query {
    return(id: "gid://shopify/Return/945000954") {
      status
      name
      order {
        id
      }
      returnLineItems(first: 10) {
        edges {
          node {
            ... on ReturnLineItem {
              quantity
              returnReason
              returnReasonNote
              fulfillmentLineItem {
                lineItem {
                  name
                }
              }
              totalWeight {
                value
              }
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "return": {
    "status": "OPEN",
    "name": "#1001-R1",
    "order": {
      "id": "gid://shopify/Order/625362839"
    },
    "returnLineItems": {
      "edges": [
        {
          "node": {
            "quantity": 1,
            "returnReason": "UNKNOWN",
            "returnReasonNote": "",
            "fulfillmentLineItem": {
              "lineItem": {
                "name": "Draft - 151cm"
              }
            },
            "totalWeight": {
              "value": 1500
            }
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Retrieve a return's exchange line items

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20return(id%3A%20%22gid%3A%2F%2Fshopify%2FReturn%2F194950309%22)%20%7B%0A%20%20%20%20exchangeLineItems(first%3A%2010)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query {

 return(id: "gid://shopify/Return/194950309") {

 exchangeLineItems(first: 10) {

 edges {

 node {

 id

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  return(id: "gid://shopify/Return/194950309") {
    exchangeLineItems(first: 10) {
      edges {
        node {
          id
        }
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
"query": "query { return(id: \"gid://shopify/Return/194950309\") { exchangeLineItems(first: 10) { edges { node { id } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    return(id: "gid://shopify/Return/194950309") {
      exchangeLineItems(first: 10) {
        edges {
          node {
            id
          }
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
  data: `query {
    return(id: "gid://shopify/Return/194950309") {
      exchangeLineItems(first: 10) {
        edges {
          node {
            id
          }
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
  query {
    return(id: "gid://shopify/Return/194950309") {
      exchangeLineItems(first: 10) {
        edges {
          node {
            id
          }
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"return": {

"exchangeLineItems": {

"edges": [

{

"node": {

"id": "gid://shopify/ExchangeLineItem/444766497"

}

}

]

}

}

}


---
*Content truncated at "Updates" section*