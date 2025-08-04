---
title: "shopifyPaymentsAccount"
description: "Shopify GraphQL Admin API documentation for shopifypaymentsaccount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount"
extraction_method: "jina"
sections: ['Shopify Payments', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopifyPaymentsAccount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount

Markdown Content:
shopifyPaymentsAccount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount#main-content)

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
*   Inventory   
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
*   
Shopify Payments

    *   
Queries

        *   [dispute](https://shopify.dev/docs/api/admin-graphql/latest/queries/dispute)
        *   [dispute Evidence](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputeevidence)
        *   [finance Kyc Information](https://shopify.dev/docs/api/admin-graphql/latest/queries/financekycinformation)
        *   [shopify Payments Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount)

    *   Mutations   
    *   Objects   

*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to shopifyPaymentsAccount](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount#top)
shopify Payments Account
========================

query

Shopify Payments account information, including balances and payouts.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ShopifyPaymentsAccount](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifypaymentsaccount#returns-ShopifyPaymentsAccount)Shopify Payments Account

•[Shopify Payments Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount)

Balance and payout information for a [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments) account. Balance includes all balances for the currencies supported by the shop. You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Return a list of all balance transactions

#### Query

```graphql
query {
  shopifyPaymentsAccount {
    balanceTransactions(first: 10) {
      nodes {
        id
        type
        test
        associatedPayout {
          id
          status
        }
        amount {
          amount
          currencyCode
        }
        fee {
          amount
        }
        net {
          amount
        }
        sourceId
        sourceType
        sourceOrderTransactionId
        associatedOrder {
          id
        }
        adjustmentsOrders {
          orderTransactionId
          amount {
            amount
          }
          name
        }
        adjustmentReason
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
"query": "query { shopifyPaymentsAccount { balanceTransactions(first: 10) { nodes { id type test associatedPayout { id status } amount { amount currencyCode } fee { amount } net { amount } sourceId sourceType sourceOrderTransactionId associatedOrder { id } adjustmentsOrders { orderTransactionId amount { amount } name } adjustmentReason } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shopifyPaymentsAccount {
      balanceTransactions(first: 10) {
        nodes {
          id
          type
          test
          associatedPayout {
            id
            status
          }
          amount {
            amount
            currencyCode
          }
          fee {
            amount
          }
          net {
            amount
          }
          sourceId
          sourceType
          sourceOrderTransactionId
          associatedOrder {
            id
          }
          adjustmentsOrders {
            orderTransactionId
            amount {
              amount
            }
            name
          }
          adjustmentReason
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
    shopifyPaymentsAccount {
      balanceTransactions(first: 10) {
        nodes {
          id
          type
          test
          associatedPayout {
            id
            status
          }
          amount {
            amount
            currencyCode
          }
          fee {
            amount
          }
          net {
            amount
          }
          sourceId
          sourceType
          sourceOrderTransactionId
          associatedOrder {
            id
          }
          adjustmentsOrders {
            orderTransactionId
            amount {
              amount
            }
            name
          }
          adjustmentReason
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
    shopifyPaymentsAccount {
      balanceTransactions(first: 10) {
        nodes {
          id
          type
          test
          associatedPayout {
            id
            status
          }
          amount {
            amount
            currencyCode
          }
          fee {
            amount
          }
          net {
            amount
          }
          sourceId
          sourceType
          sourceOrderTransactionId
          associatedOrder {
            id
          }
          adjustmentsOrders {
            orderTransactionId
            amount {
              amount
            }
            name
          }
          adjustmentReason
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "shopifyPaymentsAccount": {
    "balanceTransactions": {
      "nodes": [
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/44598600",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/512467833",
            "status": "FAILED"
          },
          "amount": {
            "amount": "-41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-41.9"
          },
          "sourceId": "512467833",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/374523424",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/917000993",
            "status": "FAILED"
          },
          "amount": {
            "amount": "-41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-41.9"
          },
          "sourceId": "917000993",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/631321250",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/631321250",
            "status": "SCHEDULED"
          },
          "amount": {
            "amount": "-41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-41.9"
          },
          "sourceId": "631321250",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/725076685",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/725076685",
            "status": "PAID"
          },
          "amount": {
            "amount": "-41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-41.9"
          },
          "sourceId": "725076685",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/854848137",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/623721858",
            "status": "PAID"
          },
          "amount": {
            "amount": "-41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-41.9"
          },
          "sourceId": "623721858",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/867808544",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/867808544",
            "status": "PAID"
          },
          "amount": {
            "amount": "-41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-41.9"
          },
          "sourceId": "867808544",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/714327683",
          "type": "TRANSFER_FAILURE",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/714327683",
            "status": "FAILED"
          },
          "amount": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "41.9"
          },
          "sourceId": "714327683",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/615671547",
          "type": "TRANSFER_FAILURE",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/714327683",
            "status": "FAILED"
          },
          "amount": {
            "amount": "11.0",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "1.0"
          },
          "net": {
            "amount": "10.0"
          },
          "sourceId": null,
          "sourceType": null,
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/965204187",
          "type": "TRANSFER",
          "test": false,
          "associatedPayout": {
            "id": "gid://shopify/ShopifyPaymentsPayout/39438702",
            "status": "IN_TRANSIT"
          },
          "amount": {
            "amount": "-43.12",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "-43.12"
          },
          "sourceId": "39438702",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        },
        {
          "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/922259259",
          "type": "TRANSFER_FAILURE",
          "test": false,
          "associatedPayout": {
            "id": null,
            "status": "PENDING"
          },
          "amount": {
            "amount": "43.12",
            "currencyCode": "USD"
          },
          "fee": {
            "amount": "0.0"
          },
          "net": {
            "amount": "43.12"
          },
          "sourceId": "512467833",
          "sourceType": "TRANSFER",
          "sourceOrderTransactionId": null,
          "associatedOrder": null,
          "adjustmentsOrders": [],
          "adjustmentReason": null
        }
      ]
    }
  }
}
``` 
*   ### Return a list of all disputes

#### Query

```graphql
query ShopifyPaymentsListDisputes {
  shopifyPaymentsAccount {
    disputes(first: 10) {
      edges {
        node {
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
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopifyPaymentsListDisputes { shopifyPaymentsAccount { disputes(first: 10) { edges { node { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsListDisputes {
    shopifyPaymentsAccount {
      disputes(first: 10) {
        edges {
          node {
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
  query ShopifyPaymentsListDisputes {
    shopifyPaymentsAccount {
      disputes(first: 10) {
        edges {
          node {
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
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ShopifyPaymentsListDisputes {
    shopifyPaymentsAccount {
      disputes(first: 10) {
        edges {
          node {
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
    }
  }`,
});
``` #### Response

```json
{
  "shopifyPaymentsAccount": {
    "disputes": {
      "edges": [
        {
          "node": {
            "amount": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2013-07-03T19:00:00-04:00",
            "evidenceSentOn": "2013-07-04T07:00:00-04:00",
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/1052608616",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "WON",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "11.5",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2024-11-20T19:00:00-05:00",
            "evidenceSentOn": null,
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/815713555",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "CREDIT_NOT_PROCESSED",
              "networkReasonCode": "4827"
            },
            "status": "NEEDS_RESPONSE",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "11.5",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2013-07-03T19:00:00-04:00",
            "evidenceSentOn": "2013-07-04T07:00:00-04:00",
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/782360659",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "WON",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "11.5",
              "currencyCode": "USD"
            },
            "evidenceDueBy": null,
            "evidenceSentOn": null,
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/670893524",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "NEEDS_RESPONSE",
            "type": "INQUIRY"
          }
        },
        {
          "node": {
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
        },
        {
          "node": {
            "amount": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2024-11-20T19:00:00-05:00",
            "evidenceSentOn": null,
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/297752803",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "LOST",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "11.5",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2024-11-20T19:00:00-05:00",
            "evidenceSentOn": null,
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/257169523",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "NEEDS_RESPONSE",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "11.5",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2024-11-20T19:00:00-05:00",
            "evidenceSentOn": "2024-11-07T19:00:00-05:00",
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/85190714",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "UNDER_REVIEW",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2024-11-20T19:00:00-05:00",
            "evidenceSentOn": null,
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/46484353",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "FRAUDULENT",
              "networkReasonCode": "4827"
            },
            "status": "LOST",
            "type": "CHARGEBACK"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "11.5",
              "currencyCode": "USD"
            },
            "evidenceDueBy": "2024-11-20T19:00:00-05:00",
            "evidenceSentOn": null,
            "finalizedOn": null,
            "id": "gid://shopify/ShopifyPaymentsDispute/35982383",
            "initiatedAt": "2013-05-04T00:00:00Z",
            "reasonDetails": {
              "reason": "SUBSCRIPTION_CANCELLED",
              "networkReasonCode": "4827"
            },
            "status": "NEEDS_RESPONSE",
            "type": "CHARGEBACK"
          }
        }
      ]
    }
  }
}
``` 
*   ### Return a list of all payouts

#### Query

```graphql
query ShopifyPaymentsPayoutShow {
  shopifyPaymentsAccount {
    payouts(first: 10) {
      nodes {
        id
        issuedAt
        net {
          amount
          currencyCode
        }
        status
        transactionType
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
"query": "query ShopifyPaymentsPayoutShow { shopifyPaymentsAccount { payouts(first: 10) { nodes { id issuedAt net { amount currencyCode } status transactionType } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsPayoutShow {
    shopifyPaymentsAccount {
      payouts(first: 10) {
        nodes {
          id
          issuedAt
          net {
            amount
            currencyCode
          }
          status
          transactionType
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
  query ShopifyPaymentsPayoutShow {
    shopifyPaymentsAccount {
      payouts(first: 10) {
        nodes {
          id
          issuedAt
          net {
            amount
            currencyCode
          }
          status
          transactionType
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
  data: `query ShopifyPaymentsPayoutShow {
    shopifyPaymentsAccount {
      payouts(first: 10) {
        nodes {
          id
          issuedAt
          net {
            amount
            currencyCode
          }
          status
          transactionType
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "shopifyPaymentsAccount": {
    "payouts": {
      "nodes": [
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/623721858",
          "issuedAt": "2012-11-12T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "PAID",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/631321250",
          "issuedAt": "2012-11-12T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "SCHEDULED",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/714327683",
          "issuedAt": "2012-11-12T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "FAILED",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/725076685",
          "issuedAt": "2012-11-12T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "PAID",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/867808544",
          "issuedAt": "2012-11-12T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "PAID",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/917000993",
          "issuedAt": "2012-11-13T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "FAILED",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/39438702",
          "issuedAt": "2013-11-01T00:00:00Z",
          "net": {
            "amount": "43.12",
            "currencyCode": "USD"
          },
          "status": "SCHEDULED",
          "transactionType": "DEPOSIT"
        },
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/512467833",
          "issuedAt": "2013-12-01T00:00:00Z",
          "net": {
            "amount": "43.12",
            "currencyCode": "USD"
          },
          "status": "FAILED",
          "transactionType": "DEPOSIT"
        }
      ]
    }
  }
}
``` 
*   ### Return a single payout

#### Query

```graphql
query ShopifyPaymentsPayoutShow {
  shopifyPaymentsAccount {
    payouts(first: 10, query: "id:623721858") {
      nodes {
        id
        issuedAt
        net {
          amount
          currencyCode
        }
        status
        transactionType
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
"query": "query ShopifyPaymentsPayoutShow { shopifyPaymentsAccount { payouts(first: 10, query: \"id:623721858\") { nodes { id issuedAt net { amount currencyCode } status transactionType } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsPayoutShow {
    shopifyPaymentsAccount {
      payouts(first: 10, query: "id:623721858") {
        nodes {
          id
          issuedAt
          net {
            amount
            currencyCode
          }
          status
          transactionType
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
  query ShopifyPaymentsPayoutShow {
    shopifyPaymentsAccount {
      payouts(first: 10, query: "id:623721858") {
        nodes {
          id
          issuedAt
          net {
            amount
            currencyCode
          }
          status
          transactionType
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
  data: `query ShopifyPaymentsPayoutShow {
    shopifyPaymentsAccount {
      payouts(first: 10, query: "id:623721858") {
        nodes {
          id
          issuedAt
          net {
            amount
            currencyCode
          }
          status
          transactionType
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "shopifyPaymentsAccount": {
    "payouts": {
      "nodes": [
        {
          "id": "gid://shopify/ShopifyPaymentsPayout/623721858",
          "issuedAt": "2012-11-12T00:00:00Z",
          "net": {
            "amount": "41.9",
            "currencyCode": "USD"
          },
          "status": "PAID",
          "transactionType": "DEPOSIT"
        }
      ]
    }
  }
}
``` 
*   ### Return the current balance

#### Query

```graphql
query ShopifyPaymentsShowBalance {
  shopifyPaymentsAccount {
    balance {
      amount
      currencyCode
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
"query": "query ShopifyPaymentsShowBalance { shopifyPaymentsAccount { balance { amount currencyCode } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopifyPaymentsShowBalance {
    shopifyPaymentsAccount {
      balance {
        amount
        currencyCode
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
  query ShopifyPaymentsShowBalance {
    shopifyPaymentsAccount {
      balance {
        amount
        currencyCode
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ShopifyPaymentsShowBalance {
    shopifyPaymentsAccount {
      balance {
        amount
        currencyCode
      }
    }
  }`,
});
``` #### Response

```json
{
  "shopifyPaymentsAccount": {
    "balance": [
      {
        "amount": "0.0",
        "currencyCode": "USD"
      }
    ]
  }
}
``` 

Examples
--------

Return a list of all balance transactions

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20shopifyPaymentsAccount%20%7B%0A%20%20%20%20balanceTransactions(first%3A%2010)%20%7B%0A%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20test%0A%20%20%20%20%20%20%20%20associatedPayout%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20fee%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20net%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20sourceId%0A%20%20%20%20%20%20%20%20sourceType%0A%20%20%20%20%20%20%20%20sourceOrderTransactionId%0A%20%20%20%20%20%20%20%20associatedOrder%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20adjustmentsOrders%20%7B%0A%20%20%20%20%20%20%20%20%20%20orderTransactionId%0A%20%20%20%20%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20adjustmentReason%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

42

43

44

45

46

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 shopifyPaymentsAccount {

 balanceTransactions(first: 10) {

 nodes {

 id

 type

 test

 associatedPayout {

 id

 status

 }

 amount {

 amount

 currencyCode

 }

 fee {

 amount

 }

 net {

 amount

 }

 sourceId

 sourceType

 sourceOrderTransactionId

 associatedOrder {

 id

 }

 adjustmentsOrders {

 orderTransactionId

 amount {

 amount

 }

 name

 }

 adjustmentReason

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  shopifyPaymentsAccount {
    balanceTransactions(first: 10) {
      nodes {
        id
        type
        test
        associatedPayout {
          id
          status
        }
        amount {
          amount
          currencyCode
        }
        fee {
          amount
        }
        net {
          amount
        }
        sourceId
        sourceType
        sourceOrderTransactionId
        associatedOrder {
          id
        }
        adjustmentsOrders {
          orderTransactionId
          amount {
            amount
          }
          name
        }
        adjustmentReason
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
"query": "query { shopifyPaymentsAccount { balanceTransactions(first: 10) { nodes { id type test associatedPayout { id status } amount { amount currencyCode } fee { amount } net { amount } sourceId sourceType sourceOrderTransactionId associatedOrder { id } adjustmentsOrders { orderTransactionId amount { amount } name } adjustmentReason } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shopifyPaymentsAccount {
      balanceTransactions(first: 10) {
        nodes {
          id
          type
          test
          associatedPayout {
            id
            status
          }
          amount {
            amount
            currencyCode
          }
          fee {
            amount
          }
          net {
            amount
          }
          sourceId
          sourceType
          sourceOrderTransactionId
          associatedOrder {
            id
          }
          adjustmentsOrders {
            orderTransactionId
            amount {
              amount
            }
            name
          }
          adjustmentReason
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
    shopifyPaymentsAccount {
      balanceTransactions(first: 10) {
        nodes {
          id
          type
          test
          associatedPayout {
            id
            status
          }
          amount {
            amount
            currencyCode
          }
          fee {
            amount
          }
          net {
            amount
          }
          sourceId
          sourceType
          sourceOrderTransactionId
          associatedOrder {
            id
          }
          adjustmentsOrders {
            orderTransactionId
            amount {
              amount
            }
            name
          }
          adjustmentReason
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
    shopifyPaymentsAccount {
      balanceTransactions(first: 10) {
        nodes {
          id
          type
          test
          associatedPayout {
            id
            status
          }
          amount {
            amount
            currencyCode
          }
          fee {
            amount
          }
          net {
            amount
          }
          sourceId
          sourceType
          sourceOrderTransactionId
          associatedOrder {
            id
          }
          adjustmentsOrders {
            orderTransactionId
            amount {
              amount
            }
            name
          }
          adjustmentReason
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

999

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

⌄

{

"shopifyPaymentsAccount": {

"balanceTransactions": {

"nodes": [

{

"id": "gid://shopify/ShopifyPaymentsBalanceTransaction/44598600",

"type": "TRANSFER",

"test": false,

"associatedPayout": {

"id": "gid://shopify/ShopifyPaymentsPayout/512467833",

"status": "FAILED"

},

"amount": {

"amount": "-41.9",

"currencyCode": "USD"

},

"fee": {

"amount": "0.0"

},

"net": {

"amount": "-41.9"

},

"sourceId": "512467833",

"sourceType": "TRANSFER",

"sourceOrderTransactionId": null,

"associatedOrder": null,

"adjustmentsOrders": [],

"adjustmentReason": null

},

{

"id": "gid://shopify/ShopifyPaymentsBalanceTransaction/374523424",

"type": "TRANSFER",

"test": false,

"associatedPayout": {

"id": "gid://shopify/ShopifyPaymentsPayout/917000993",

"status": "FAILED"


---
*Content truncated at "Updates" section*