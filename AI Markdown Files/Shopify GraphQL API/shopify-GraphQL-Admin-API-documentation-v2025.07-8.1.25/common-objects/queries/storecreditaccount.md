---
title: "storeCreditAccount"
description: "Shopify GraphQL Admin API documentation for storecreditaccount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: storeCreditAccount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount

Markdown Content:
storeCreditAccount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount#main-content)

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
*   
Common objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentbyabandonedcheckoutid)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerpaymentmethod)
        *   [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)
        *   [finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeappaccesspolicy)
        *   [fulfillment Constraint Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentconstraintrules)
        *   [gift Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard)
        *   [gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardconfiguration)
        *   [gift Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards)
        *   [gift Cards Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardscount)
        *   [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)
        *   [node](https://shopify.dev/docs/api/admin-graphql/latest/queries/node)
        *   [nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/nodes)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [product Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeed)
        *   [product Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeeds)
        *   [public Api Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicapiversions)
        *   [shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunction)
        *   [shopify Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunctions)
        *   [shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipt)
        *   [shop Pay Payment Request Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipts)
        *   [staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember)
        *   [staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmembers)
        *   [store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount)
        *   [validation](https://shopify.dev/docs/api/admin-graphql/latest/queries/validation)
        *   [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

    *   Mutations   
    *   Objects   

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
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to storeCreditAccount](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount#top)
store Credit Account
====================

query

Returns a store credit account resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the store credit account to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to StoreCreditAccount](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount#returns-StoreCreditAccount)Store Credit Account

•[Store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a store credit account by account ID

#### Query

```graphql
query storeCreditAccount($accountId: ID!) {
  storeCreditAccount(id: $accountId) {
    id
    balance {
      amount
      currencyCode
    }
  }
}
``` #### Variables

```json
{
  "accountId": "gid://shopify/StoreCreditAccount/316863792"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query storeCreditAccount($accountId: ID!) { storeCreditAccount(id: $accountId) { id balance { amount currencyCode } } }",
 "variables": {
    "accountId": "gid://shopify/StoreCreditAccount/316863792"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query storeCreditAccount($accountId: ID!) {
    storeCreditAccount(id: $accountId) {
      id
      balance {
        amount
        currencyCode
      }
    }
  }`,
  {
    variables: {
        "accountId": "gid://shopify/StoreCreditAccount/316863792"
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
  query storeCreditAccount($accountId: ID!) {
    storeCreditAccount(id: $accountId) {
      id
      balance {
        amount
        currencyCode
      }
    }
  }
QUERY

variables = {
  "accountId": "gid://shopify/StoreCreditAccount/316863792"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query storeCreditAccount($accountId: ID!) {
      storeCreditAccount(id: $accountId) {
        id
        balance {
          amount
          currencyCode
        }
      }
    }`,
    "variables": {
        "accountId": "gid://shopify/StoreCreditAccount/316863792"
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccount": {
    "id": "gid://shopify/StoreCreditAccount/316863792",
    "balance": {
      "amount": "11.11",
      "currencyCode": "USD"
    }
  }
}
``` 
*   ### Get the first two expirable credit transactions of a store credit account

#### Query

```graphql
query storeCreditAccount($accountId: ID!, $first: Int!) {
  storeCreditAccount(id: $accountId) {
    id
    transactions(first: $first, query: "type:credit AND expires_at:*") {
      edges {
        node {
          amount {
            amount
            currencyCode
          }
          balanceAfterTransaction {
            amount
            currencyCode
          }
          createdAt
          ... on StoreCreditAccountCreditTransaction {
            id
            expiresAt
            remainingAmount {
              amount
              currencyCode
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
  "accountId": "gid://shopify/StoreCreditAccount/669614221",
  "first": 2
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query storeCreditAccount($accountId: ID!, $first: Int!) { storeCreditAccount(id: $accountId) { id transactions(first: $first, query: \"type:credit AND expires_at:*\") { edges { node { amount { amount currencyCode } balanceAfterTransaction { amount currencyCode } createdAt ... on StoreCreditAccountCreditTransaction { id expiresAt remainingAmount { amount currencyCode } } } } } } }",
 "variables": {
    "accountId": "gid://shopify/StoreCreditAccount/669614221",
    "first": 2
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query storeCreditAccount($accountId: ID!, $first: Int!) {
    storeCreditAccount(id: $accountId) {
      id
      transactions(first: $first, query: "type:credit AND expires_at:*") {
        edges {
          node {
            amount {
              amount
              currencyCode
            }
            balanceAfterTransaction {
              amount
              currencyCode
            }
            createdAt
            ... on StoreCreditAccountCreditTransaction {
              id
              expiresAt
              remainingAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "accountId": "gid://shopify/StoreCreditAccount/669614221",
        "first": 2
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
  query storeCreditAccount($accountId: ID!, $first: Int!) {
    storeCreditAccount(id: $accountId) {
      id
      transactions(first: $first, query: "type:credit AND expires_at:*") {
        edges {
          node {
            amount {
              amount
              currencyCode
            }
            balanceAfterTransaction {
              amount
              currencyCode
            }
            createdAt
            ... on StoreCreditAccountCreditTransaction {
              id
              expiresAt
              remainingAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "accountId": "gid://shopify/StoreCreditAccount/669614221",
  "first": 2
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query storeCreditAccount($accountId: ID!, $first: Int!) {
      storeCreditAccount(id: $accountId) {
        id
        transactions(first: $first, query: "type:credit AND expires_at:*") {
          edges {
            node {
              amount {
                amount
                currencyCode
              }
              balanceAfterTransaction {
                amount
                currencyCode
              }
              createdAt
              ... on StoreCreditAccountCreditTransaction {
                id
                expiresAt
                remainingAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "accountId": "gid://shopify/StoreCreditAccount/669614221",
        "first": 2
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccount": {
    "id": "gid://shopify/StoreCreditAccount/669614221",
    "transactions": {
      "edges": [
        {
          "node": {
            "amount": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "balanceAfterTransaction": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "createdAt": "2024-01-01T00:00:00Z",
            "id": "gid://shopify/StoreCreditAccountCreditTransaction/870993577",
            "expiresAt": "2024-02-01T00:00:00Z",
            "remainingAmount": {
              "amount": "50.0",
              "currencyCode": "USD"
            }
          }
        },
        {
          "node": {
            "amount": {
              "amount": "54.99",
              "currencyCode": "USD"
            },
            "balanceAfterTransaction": {
              "amount": "104.99",
              "currencyCode": "USD"
            },
            "createdAt": "2024-01-03T00:00:00Z",
            "id": "gid://shopify/StoreCreditAccountCreditTransaction/870993579",
            "expiresAt": "2024-02-03T00:00:00Z",
            "remainingAmount": {
              "amount": "54.99",
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Get the four most recent transactions of a store credit account

#### Query

```graphql
query storeCreditAccount($accountId: ID!, $first: Int!) {
  storeCreditAccount(id: $accountId) {
    id
    transactions(first: $first, sortKey: CREATED_AT, reverse: true) {
      edges {
        node {
          amount {
            amount
            currencyCode
          }
          balanceAfterTransaction {
            amount
            currencyCode
          }
          createdAt
          ... on StoreCreditAccountCreditTransaction {
            id
            expiresAt
            remainingAmount {
              amount
              currencyCode
            }
          }
          ... on StoreCreditAccountDebitTransaction {
            id
          }
          ... on StoreCreditAccountDebitRevertTransaction {
            id
            debitTransaction {
              id
            }
          }
          ... on StoreCreditAccountExpirationTransaction {
            creditTransaction {
              id
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
  "accountId": "gid://shopify/StoreCreditAccount/669614221",
  "first": 4
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query storeCreditAccount($accountId: ID!, $first: Int!) { storeCreditAccount(id: $accountId) { id transactions(first: $first, sortKey: CREATED_AT, reverse: true) { edges { node { amount { amount currencyCode } balanceAfterTransaction { amount currencyCode } createdAt ... on StoreCreditAccountCreditTransaction { id expiresAt remainingAmount { amount currencyCode } } ... on StoreCreditAccountDebitTransaction { id } ... on StoreCreditAccountDebitRevertTransaction { id debitTransaction { id } } ... on StoreCreditAccountExpirationTransaction { creditTransaction { id } } } } } } }",
 "variables": {
    "accountId": "gid://shopify/StoreCreditAccount/669614221",
    "first": 4
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query storeCreditAccount($accountId: ID!, $first: Int!) {
    storeCreditAccount(id: $accountId) {
      id
      transactions(first: $first, sortKey: CREATED_AT, reverse: true) {
        edges {
          node {
            amount {
              amount
              currencyCode
            }
            balanceAfterTransaction {
              amount
              currencyCode
            }
            createdAt
            ... on StoreCreditAccountCreditTransaction {
              id
              expiresAt
              remainingAmount {
                amount
                currencyCode
              }
            }
            ... on StoreCreditAccountDebitTransaction {
              id
            }
            ... on StoreCreditAccountDebitRevertTransaction {
              id
              debitTransaction {
                id
              }
            }
            ... on StoreCreditAccountExpirationTransaction {
              creditTransaction {
                id
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "accountId": "gid://shopify/StoreCreditAccount/669614221",
        "first": 4
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
  query storeCreditAccount($accountId: ID!, $first: Int!) {
    storeCreditAccount(id: $accountId) {
      id
      transactions(first: $first, sortKey: CREATED_AT, reverse: true) {
        edges {
          node {
            amount {
              amount
              currencyCode
            }
            balanceAfterTransaction {
              amount
              currencyCode
            }
            createdAt
            ... on StoreCreditAccountCreditTransaction {
              id
              expiresAt
              remainingAmount {
                amount
                currencyCode
              }
            }
            ... on StoreCreditAccountDebitTransaction {
              id
            }
            ... on StoreCreditAccountDebitRevertTransaction {
              id
              debitTransaction {
                id
              }
            }
            ... on StoreCreditAccountExpirationTransaction {
              creditTransaction {
                id
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "accountId": "gid://shopify/StoreCreditAccount/669614221",
  "first": 4
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query storeCreditAccount($accountId: ID!, $first: Int!) {
      storeCreditAccount(id: $accountId) {
        id
        transactions(first: $first, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              amount {
                amount
                currencyCode
              }
              balanceAfterTransaction {
                amount
                currencyCode
              }
              createdAt
              ... on StoreCreditAccountCreditTransaction {
                id
                expiresAt
                remainingAmount {
                  amount
                  currencyCode
                }
              }
              ... on StoreCreditAccountDebitTransaction {
                id
              }
              ... on StoreCreditAccountDebitRevertTransaction {
                id
                debitTransaction {
                  id
                }
              }
              ... on StoreCreditAccountExpirationTransaction {
                creditTransaction {
                  id
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "accountId": "gid://shopify/StoreCreditAccount/669614221",
        "first": 4
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccount": {
    "id": "gid://shopify/StoreCreditAccount/669614221",
    "transactions": {
      "edges": [
        {
          "node": {
            "amount": {
              "amount": "-90.0",
              "currencyCode": "USD"
            },
            "balanceAfterTransaction": {
              "amount": "0.0",
              "currencyCode": "USD"
            },
            "createdAt": "2024-02-01T00:00:00Z",
            "creditTransaction": {
              "id": "gid://shopify/StoreCreditAccountCreditTransaction/870993581"
            }
          }
        },
        {
          "node": {
            "amount": {
              "amount": "40.0",
              "currencyCode": "USD"
            },
            "balanceAfterTransaction": {
              "amount": "90.0",
              "currencyCode": "USD"
            },
            "createdAt": "2024-01-03T00:00:00Z",
            "id": "gid://shopify/StoreCreditAccountDebitRevertTransaction/870993583",
            "debitTransaction": {
              "id": "gid://shopify/StoreCreditAccountDebitTransaction/870993582"
            }
          }
        },
        {
          "node": {
            "amount": {
              "amount": "-50.0",
              "currencyCode": "USD"
            },
            "balanceAfterTransaction": {
              "amount": "50.0",
              "currencyCode": "USD"
            },
            "createdAt": "2024-01-02T00:00:00Z",
            "id": "gid://shopify/StoreCreditAccountDebitTransaction/870993582"
          }
        },
        {
          "node": {
            "amount": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "balanceAfterTransaction": {
              "amount": "100.0",
              "currencyCode": "USD"
            },
            "createdAt": "2024-01-01T00:00:00Z",
            "id": "gid://shopify/StoreCreditAccountCreditTransaction/870993581",
            "expiresAt": "2024-02-01T00:00:00Z",
            "remainingAmount": {
              "amount": "90.0",
              "currencyCode": "USD"
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

Get a store credit account by account ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20storeCreditAccount(%24accountId%3A%20ID!)%20%7B%0A%20%20storeCreditAccount(id%3A%20%24accountId)%20%7B%0A%20%20%20%20id%0A%20%20%20%20balance%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20currencyCode%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22accountId%22%3A%20%22gid%3A%2F%2Fshopify%2FStoreCreditAccount%2F316863792%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query storeCreditAccount($accountId: ID!) {

 storeCreditAccount(id: $accountId) {

 id

 balance {

 amount

 currencyCode

 }

 }

 }`,

{

variables:{

"accountId":"gid://shopify/StoreCreditAccount/316863792"

},

},

);

const data=await response.json();

```
query storeCreditAccount($accountId: ID!) {
  storeCreditAccount(id: $accountId) {
    id
    balance {
      amount
      currencyCode
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
"query": "query storeCreditAccount($accountId: ID!) { storeCreditAccount(id: $accountId) { id balance { amount currencyCode } } }",
 "variables": {
    "accountId": "gid://shopify/StoreCreditAccount/316863792"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query storeCreditAccount($accountId: ID!) {
    storeCreditAccount(id: $accountId) {
      id
      balance {
        amount
        currencyCode
      }
    }
  }`,
  {
    variables: {
        "accountId": "gid://shopify/StoreCreditAccount/316863792"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query storeCreditAccount($accountId: ID!) {
      storeCreditAccount(id: $accountId) {
        id
        balance {
          amount
          currencyCode
        }
      }
    }`,
    "variables": {
        "accountId": "gid://shopify/StoreCreditAccount/316863792"
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
  query storeCreditAccount($accountId: ID!) {
    storeCreditAccount(id: $accountId) {
      id
      balance {
        amount
        currencyCode
      }
    }
  }
QUERY

variables = {
  "accountId": "gid://shopify/StoreCreditAccount/316863792"
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

"accountId": "gid://shopify/StoreCreditAccount/316863792"

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

8

9

›

⌄

⌄

⌄

{

"storeCreditAccount": {

"id": "gid://shopify/StoreCreditAccount/316863792",

"balance": {

"amount": "11.11",

"currencyCode": "USD"

}

}

}


---
*Content truncated at "Updates" section*