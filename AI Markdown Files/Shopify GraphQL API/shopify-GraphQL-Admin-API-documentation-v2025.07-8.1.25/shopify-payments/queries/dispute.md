---
title: "dispute"
description: "Shopify GraphQL Admin API documentation for dispute"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute"
extraction_method: "jina"
sections: ['Shopify Payments', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: dispute - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute

Markdown Content:
dispute - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute#main-content)

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
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   
Shopify Payments

    *   
Queries

        *   [dispute](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute)
        *   [dispute Evidence](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence)
        *   [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)
        *   [finance Kyc Information](https://shopify.dev/docs/api/admin-graphql/latest/queries/financekycinformation)
        *   [shopify Payments Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount)

    *   Mutations   
    *   Objects   

*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to dispute](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute#top)
dispute
=======

query

Returns dispute details based on ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `ShopifyPaymentsDispute` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to ShopifyPaymentsDispute](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute#returns-ShopifyPaymentsDispute)Shopify Payments Dispute

•[Shopify Payments Dispute](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute)

A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Return a single dispute

#### Query

```graphql
query ShopifyPaymentsDisputesShow($id: ID!) {
  dispute(id: $id) {
    amount {
      amount
      currencyCode
    }
    evidenceDueBy
    evidenceSentOn
    finalizedOn
    id
    initiatedAt
    reasonDetails {
      reason
      networkReasonCode
    }
    status
    type
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopifyPaymentsDisputesShow($id: ID!) { dispute(id: $id) { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsDisputesShow($id: ID!) {
    dispute(id: $id) {
      amount {
        amount
        currencyCode
      }
      evidenceDueBy
      evidenceSentOn
      finalizedOn
      id
      initiatedAt
      reasonDetails {
        reason
        networkReasonCode
      }
      status
      type
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
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
  query ShopifyPaymentsDisputesShow($id: ID!) {
    dispute(id: $id) {
      amount {
        amount
        currencyCode
      }
      evidenceDueBy
      evidenceSentOn
      finalizedOn
      id
      initiatedAt
      reasonDetails {
        reason
        networkReasonCode
      }
      status
      type
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopifyPaymentsDisputesShow($id: ID!) {
      dispute(id: $id) {
        amount {
          amount
          currencyCode
        }
        evidenceDueBy
        evidenceSentOn
        finalizedOn
        id
        initiatedAt
        reasonDetails {
          reason
          networkReasonCode
        }
        status
        type
      }
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
    },
  },
});
``` #### Response

```json
{
  "dispute": {
    "amount": {
      "amount": "11.5",
      "currencyCode": "USD"
    },
    "evidenceDueBy": "2024-11-20T19:00:00-05:00",
    "evidenceSentOn": null,
    "finalizedOn": null,
    "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
    "initiatedAt": "2013-05-04T00:00:00Z",
    "reasonDetails": {
      "reason": "FRAUDULENT",
      "networkReasonCode": "4827"
    },
    "status": "NEEDS_RESPONSE",
    "type": "CHARGEBACK"
  }
}
``` 

Return a single dispute
-----------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ShopifyPaymentsDisputesShow(%24id%3A%20ID!)%20%7B%0A%20%20dispute(id%3A%20%24id)%20%7B%0A%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20currencyCode%0A%20%20%20%20%7D%0A%20%20%20%20evidenceDueBy%0A%20%20%20%20evidenceSentOn%0A%20%20%20%20finalizedOn%0A%20%20%20%20id%0A%20%20%20%20initiatedAt%0A%20%20%20%20reasonDetails%20%7B%0A%20%20%20%20%20%20reason%0A%20%20%20%20%20%20networkReasonCode%0A%20%20%20%20%7D%0A%20%20%20%20status%0A%20%20%20%20type%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FShopifyPaymentsDispute%2F598735659%22%0A%7D)Copy

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

 query ShopifyPaymentsDisputesShow($id: ID!) {

 dispute(id: $id) {

 amount {

 amount

 currencyCode

 }

 evidenceDueBy

 evidenceSentOn

 finalizedOn

 id

 initiatedAt

 reasonDetails {

 reason

 networkReasonCode

 }

 status

 type

 }

 }`,

{

variables:{

"id":"gid://shopify/ShopifyPaymentsDispute/598735659"

},

},

);

const data=await response.json();

```
query ShopifyPaymentsDisputesShow($id: ID!) {
  dispute(id: $id) {
    amount {
      amount
      currencyCode
    }
    evidenceDueBy
    evidenceSentOn
    finalizedOn
    id
    initiatedAt
    reasonDetails {
      reason
      networkReasonCode
    }
    status
    type
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopifyPaymentsDisputesShow($id: ID!) { dispute(id: $id) { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsDisputesShow($id: ID!) {
    dispute(id: $id) {
      amount {
        amount
        currencyCode
      }
      evidenceDueBy
      evidenceSentOn
      finalizedOn
      id
      initiatedAt
      reasonDetails {
        reason
        networkReasonCode
      }
      status
      type
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopifyPaymentsDisputesShow($id: ID!) {
      dispute(id: $id) {
        amount {
          amount
          currencyCode
        }
        evidenceDueBy
        evidenceSentOn
        finalizedOn
        id
        initiatedAt
        reasonDetails {
          reason
          networkReasonCode
        }
        status
        type
      }
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
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
  query ShopifyPaymentsDisputesShow($id: ID!) {
    dispute(id: $id) {
      amount {
        amount
        currencyCode
      }
      evidenceDueBy
      evidenceSentOn
      finalizedOn
      id
      initiatedAt
      reasonDetails {
        reason
        networkReasonCode
      }
      status
      type
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ShopifyPaymentsDispute/598735659"
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

"id": "gid://shopify/ShopifyPaymentsDispute/598735659"

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

{

"dispute": {

"amount": {

"amount": "11.5",

"currencyCode": "USD"

},

"evidenceDueBy": "2024-11-20T19:00:00-05:00",

"evidenceSentOn": null,

"finalizedOn": null,

"id": "gid://shopify/ShopifyPaymentsDispute/598735659",

"initiatedAt": "2013-05-04T00:00:00Z",

"reasonDetails": {

"reason": "FRAUDULENT",

"networkReasonCode": "4827"

},

"status": "NEEDS_RESPONSE",

"type": "CHARGEBACK"

}

}


---
*Content truncated at "Updates" section*