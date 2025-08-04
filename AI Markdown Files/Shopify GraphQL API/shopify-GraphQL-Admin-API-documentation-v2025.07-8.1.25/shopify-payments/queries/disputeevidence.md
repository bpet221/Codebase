---
title: "disputeEvidence"
description: "Shopify GraphQL Admin API documentation for disputeevidence"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence"
extraction_method: "jina"
sections: ['Shopify Payments', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: disputeEvidence - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence

Markdown Content:
disputeEvidence - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence#main-content)

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

[Anchor to disputeEvidence](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence#top)
dispute Evidence
================

query

Returns dispute evidence details based on ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `ShopifyPaymentsDisputeEvidence` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ShopifyPaymentsDisputeEvidence](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence#returns-ShopifyPaymentsDisputeEvidence)Shopify Payments Dispute Evidence

•[Shopify Payments Dispute Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

The evidence associated with the dispute.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Returns evidence associated with the dispute

#### Query

```graphql
query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
  disputeEvidence(id: $id) {
    dispute {
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
}
``` #### Variables

```json
{
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopifyPaymentsDisputeEvidenceShow($id: ID!) { disputeEvidence(id: $id) { dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
    disputeEvidence(id: $id) {
      dispute {
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
  }`,
  {
    variables: {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
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
  query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
    disputeEvidence(id: $id) {
      dispute {
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
  }
QUERY

variables = {
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
      disputeEvidence(id: $id) {
        dispute {
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
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
    },
  },
});
``` #### Response

```json
{
  "disputeEvidence": {
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
}
``` 

Returns evidence associated with the dispute
--------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ShopifyPaymentsDisputeEvidenceShow(%24id%3A%20ID!)%20%7B%0A%20%20disputeEvidence(id%3A%20%24id)%20%7B%0A%20%20%20%20dispute%20%7B%0A%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20evidenceDueBy%0A%20%20%20%20%20%20evidenceSentOn%0A%20%20%20%20%20%20finalizedOn%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20initiatedAt%0A%20%20%20%20%20%20reasonDetails%20%7B%0A%20%20%20%20%20%20%20%20reason%0A%20%20%20%20%20%20%20%20networkReasonCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20type%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FShopifyPaymentsDisputeEvidence%2F819974671%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {

 disputeEvidence(id: $id) {

 dispute {

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

 }`,

{

variables:{

"id":"gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"

},

},

);

const data=await response.json();

```
query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
  disputeEvidence(id: $id) {
    dispute {
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
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopifyPaymentsDisputeEvidenceShow($id: ID!) { disputeEvidence(id: $id) { dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
    disputeEvidence(id: $id) {
      dispute {
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
  }`,
  {
    variables: {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
      disputeEvidence(id: $id) {
        dispute {
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
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
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
  query ShopifyPaymentsDisputeEvidenceShow($id: ID!) {
    disputeEvidence(id: $id) {
      dispute {
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
  }
QUERY

variables = {
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"
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

"id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671"

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

›

⌄

⌄

⌄

⌄

⌄

{

"disputeEvidence": {

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

}


---
*Content truncated at "Updates" section*