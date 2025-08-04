---
title: "subscriptionBillingAttempt"
description: "Shopify GraphQL Admin API documentation for subscriptionbillingattempt"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: subscriptionBillingAttempt - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt

Markdown Content:
subscriptionBillingAttempt - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt#main-content)

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

[Anchor to subscriptionBillingAttempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt#top)
subscription Billing Attempt
============================

query

Returns a SubscriptionBillingAttempt by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `SubscriptionBillingAttempt` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to SubscriptionBillingAttempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt#returns-SubscriptionBillingAttempt)Subscription Billing Attempt

•[Subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

A record of an execution of the subscription billing process. Billing attempts use idempotency keys to avoid duplicate order creation. A successful billing attempt will create an order.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Query for a billing attempt with a processing error

#### Description

Shows how to query for error details.

#### Query

```graphql
query findBillingAttempt($subscriptionBillingAttempt: ID!) {
  subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
    id
    nextActionUrl
    idempotencyKey
    ready
    order {
      id
    }
    subscriptionContract {
      id
    }
    processingError {
      __typename
      code
      message
      ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
        insufficientStockProductVariants(first: 3) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query findBillingAttempt($subscriptionBillingAttempt: ID!) { subscriptionBillingAttempt(id: $subscriptionBillingAttempt) { id nextActionUrl idempotencyKey ready order { id } subscriptionContract { id } processingError { __typename code message ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError { insufficientStockProductVariants(first: 3) { edges { node { id title } } } } } } }",
 "variables": {
    "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query findBillingAttempt($subscriptionBillingAttempt: ID!) {
    subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
      id
      nextActionUrl
      idempotencyKey
      ready
      order {
        id
      }
      subscriptionContract {
        id
      }
      processingError {
        __typename
        code
        message
        ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
          insufficientStockProductVariants(first: 3) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
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
  query findBillingAttempt($subscriptionBillingAttempt: ID!) {
    subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
      id
      nextActionUrl
      idempotencyKey
      ready
      order {
        id
      }
      subscriptionContract {
        id
      }
      processingError {
        __typename
        code
        message
        ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
          insufficientStockProductVariants(first: 3) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query findBillingAttempt($subscriptionBillingAttempt: ID!) {
      subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
        id
        nextActionUrl
        idempotencyKey
        ready
        order {
          id
        }
        subscriptionContract {
          id
        }
        processingError {
          __typename
          code
          message
          ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
            insufficientStockProductVariants(first: 3) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
    },
  },
});
``` #### Response

```json
{
  "subscriptionBillingAttempt": {
    "id": "gid://shopify/SubscriptionBillingAttempt/693432113",
    "nextActionUrl": null,
    "idempotencyKey": "unique-token",
    "ready": true,
    "order": {
      "id": "gid://shopify/Order/148977776"
    },
    "subscriptionContract": {
      "id": "gid://shopify/SubscriptionContract/593791907"
    },
    "processingError": {
      "__typename": "SubscriptionBillingAttemptInsufficientStockProductVariantsError",
      "code": "INSUFFICIENT_INVENTORY",
      "message": "Insufficient inventory.",
      "insufficientStockProductVariants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/43729076",
              "title": "151cm"
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Query for a subscription billing attempt

#### Description

Finds a subscription billing attempt by id.

#### Query

```graphql
query findBillingAttempt($subscriptionBillingAttempt: ID!) {
  subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
    id
    nextActionUrl
    idempotencyKey
    ready
    order {
      id
    }
    subscriptionContract {
      id
    }
    errorMessage
    errorCode
  }
}
``` #### Variables

```json
{
  "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432112"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query findBillingAttempt($subscriptionBillingAttempt: ID!) { subscriptionBillingAttempt(id: $subscriptionBillingAttempt) { id nextActionUrl idempotencyKey ready order { id } subscriptionContract { id } errorMessage errorCode } }",
 "variables": {
    "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432112"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query findBillingAttempt($subscriptionBillingAttempt: ID!) {
    subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
      id
      nextActionUrl
      idempotencyKey
      ready
      order {
        id
      }
      subscriptionContract {
        id
      }
      errorMessage
      errorCode
    }
  }`,
  {
    variables: {
        "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432112"
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
  query findBillingAttempt($subscriptionBillingAttempt: ID!) {
    subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
      id
      nextActionUrl
      idempotencyKey
      ready
      order {
        id
      }
      subscriptionContract {
        id
      }
      errorMessage
      errorCode
    }
  }
QUERY

variables = {
  "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432112"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query findBillingAttempt($subscriptionBillingAttempt: ID!) {
      subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
        id
        nextActionUrl
        idempotencyKey
        ready
        order {
          id
        }
        subscriptionContract {
          id
        }
        errorMessage
        errorCode
      }
    }`,
    "variables": {
        "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432112"
    },
  },
});
``` #### Response

```json
{
  "subscriptionBillingAttempt": {
    "id": "gid://shopify/SubscriptionBillingAttempt/693432112",
    "nextActionUrl": null,
    "idempotencyKey": "unique-token",
    "ready": true,
    "order": {
      "id": "gid://shopify/Order/148977776"
    },
    "subscriptionContract": {
      "id": "gid://shopify/SubscriptionContract/593791907"
    },
    "errorMessage": null,
    "errorCode": null
  }
}
``` 

Examples
--------

Query for a billing attempt with a processing error

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20findBillingAttempt(%24subscriptionBillingAttempt%3A%20ID!)%20%7B%0A%20%20subscriptionBillingAttempt(id%3A%20%24subscriptionBillingAttempt)%20%7B%0A%20%20%20%20id%0A%20%20%20%20nextActionUrl%0A%20%20%20%20idempotencyKey%0A%20%20%20%20ready%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20subscriptionContract%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20processingError%20%7B%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20...%20on%20SubscriptionBillingAttemptInsufficientStockProductVariantsError%20%7B%0A%20%20%20%20%20%20%20%20insufficientStockProductVariants(first%3A%203)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22subscriptionBillingAttempt%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionBillingAttempt%2F693432113%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query findBillingAttempt($subscriptionBillingAttempt: ID!) {

 subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {

 id

 nextActionUrl

 idempotencyKey

 ready

 order {

 id

 }

 subscriptionContract {

 id

 }

 processingError {

 __typename

 code

 message

 ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {

 insufficientStockProductVariants(first: 3) {

 edges {

 node {

 id

 title

 }

 }

 }

 }

 }

 }

 }`,

{

variables:{

"subscriptionBillingAttempt":"gid://shopify/SubscriptionBillingAttempt/693432113"

},

},

);

const data=await response.json();

```
query findBillingAttempt($subscriptionBillingAttempt: ID!) {
  subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
    id
    nextActionUrl
    idempotencyKey
    ready
    order {
      id
    }
    subscriptionContract {
      id
    }
    processingError {
      __typename
      code
      message
      ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
        insufficientStockProductVariants(first: 3) {
          edges {
            node {
              id
              title
            }
          }
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
"query": "query findBillingAttempt($subscriptionBillingAttempt: ID!) { subscriptionBillingAttempt(id: $subscriptionBillingAttempt) { id nextActionUrl idempotencyKey ready order { id } subscriptionContract { id } processingError { __typename code message ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError { insufficientStockProductVariants(first: 3) { edges { node { id title } } } } } } }",
 "variables": {
    "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query findBillingAttempt($subscriptionBillingAttempt: ID!) {
    subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
      id
      nextActionUrl
      idempotencyKey
      ready
      order {
        id
      }
      subscriptionContract {
        id
      }
      processingError {
        __typename
        code
        message
        ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
          insufficientStockProductVariants(first: 3) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query findBillingAttempt($subscriptionBillingAttempt: ID!) {
      subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
        id
        nextActionUrl
        idempotencyKey
        ready
        order {
          id
        }
        subscriptionContract {
          id
        }
        processingError {
          __typename
          code
          message
          ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
            insufficientStockProductVariants(first: 3) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
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
  query findBillingAttempt($subscriptionBillingAttempt: ID!) {
    subscriptionBillingAttempt(id: $subscriptionBillingAttempt) {
      id
      nextActionUrl
      idempotencyKey
      ready
      order {
        id
      }
      subscriptionContract {
        id
      }
      processingError {
        __typename
        code
        message
        ... on SubscriptionBillingAttemptInsufficientStockProductVariantsError {
          insufficientStockProductVariants(first: 3) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"
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

"subscriptionBillingAttempt": "gid://shopify/SubscriptionBillingAttempt/693432113"

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

29

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

{

"subscriptionBillingAttempt": {

"id": "gid://shopify/SubscriptionBillingAttempt/693432113",

"nextActionUrl": null,

"idempotencyKey": "unique-token",

"ready": true,

"order": {

"id": "gid://shopify/Order/148977776"

},

"subscriptionContract": {

"id": "gid://shopify/SubscriptionContract/593791907"

},

"processingError": {

"__typename": "SubscriptionBillingAttemptInsufficientStockProductVariantsError",

"code": "INSUFFICIENT_INVENTORY",

"message": "Insufficient inventory.",

"insufficientStockProductVariants": {

"edges": [

{

"node": {

"id": "gid://shopify/ProductVariant/43729076",

"title": "151cm"

}

}

]

}

}

}

}


---
*Content truncated at "Updates" section*