---
title: "subscriptionContract"
description: "Shopify GraphQL Admin API documentation for subscriptioncontract"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: subscriptionContract - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract

Markdown Content:
subscriptionContract - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract#main-content)

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

[Anchor to subscriptionContract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract#top)
subscription Contract
=====================

query

Returns a Subscription Contract resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the Subscription Contract to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to SubscriptionContract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract#returns-SubscriptionContract)Subscription Contract

•[Subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

Represents a Subscription Contract.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Query for a subscription contract

#### Description

Finds a subscription contract by id.

#### Query

```graphql
query findContract($subscriptionContractId: ID!) {
  subscriptionContract(id: $subscriptionContractId) {
    id
    status
    nextBillingDate
  }
}
``` #### Variables

```json
{
  "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query findContract($subscriptionContractId: ID!) { subscriptionContract(id: $subscriptionContractId) { id status nextBillingDate } }",
 "variables": {
    "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query findContract($subscriptionContractId: ID!) {
    subscriptionContract(id: $subscriptionContractId) {
      id
      status
      nextBillingDate
    }
  }`,
  {
    variables: {
        "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
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
  query findContract($subscriptionContractId: ID!) {
    subscriptionContract(id: $subscriptionContractId) {
      id
      status
      nextBillingDate
    }
  }
QUERY

variables = {
  "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query findContract($subscriptionContractId: ID!) {
      subscriptionContract(id: $subscriptionContractId) {
        id
        status
        nextBillingDate
      }
    }`,
    "variables": {
        "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
    },
  },
});
``` #### Response

```json
{
  "subscriptionContract": {
    "id": "gid://shopify/SubscriptionContract/593791907",
    "status": "ACTIVE",
    "nextBillingDate": "2120-02-05T15:00:00Z"
  }
}
``` 

Query for a subscription contract
---------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20findContract(%24subscriptionContractId%3A%20ID!)%20%7B%0A%20%20subscriptionContract(id%3A%20%24subscriptionContractId)%20%7B%0A%20%20%20%20id%0A%20%20%20%20status%0A%20%20%20%20nextBillingDate%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22subscriptionContractId%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionContract%2F593791907%22%0A%7D)Copy

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

 query findContract($subscriptionContractId: ID!) {

 subscriptionContract(id: $subscriptionContractId) {

 id

 status

 nextBillingDate

 }

 }`,

{

variables:{

"subscriptionContractId":"gid://shopify/SubscriptionContract/593791907"

},

},

);

const data=await response.json();

```
query findContract($subscriptionContractId: ID!) {
  subscriptionContract(id: $subscriptionContractId) {
    id
    status
    nextBillingDate
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query findContract($subscriptionContractId: ID!) { subscriptionContract(id: $subscriptionContractId) { id status nextBillingDate } }",
 "variables": {
    "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query findContract($subscriptionContractId: ID!) {
    subscriptionContract(id: $subscriptionContractId) {
      id
      status
      nextBillingDate
    }
  }`,
  {
    variables: {
        "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query findContract($subscriptionContractId: ID!) {
      subscriptionContract(id: $subscriptionContractId) {
        id
        status
        nextBillingDate
      }
    }`,
    "variables": {
        "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
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
  query findContract($subscriptionContractId: ID!) {
    subscriptionContract(id: $subscriptionContractId) {
      id
      status
      nextBillingDate
    }
  }
QUERY

variables = {
  "subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"
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

"subscriptionContractId": "gid://shopify/SubscriptionContract/593791907"

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

6

7

›

⌄

⌄

{

"subscriptionContract": {

"id": "gid://shopify/SubscriptionContract/593791907",

"status": "ACTIVE",

"nextBillingDate": "2120-02-05T15:00:00Z"

}

}


---
*Content truncated at "Updates" section*