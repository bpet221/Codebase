---
title: "storeCreditAccountCredit"
description: "Shopify GraphQL Admin API documentation for storecreditaccountcredit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: storeCreditAccountCredit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit

Markdown Content:
storeCreditAccountCredit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#main-content)

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
*   
Online Store

    *   Queries   
    *   
Mutations

        *   [article Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate)
        *   [article Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articledelete)
        *   [article Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleupdate)
        *   [blog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogcreate)
        *   [blog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogdelete)
        *   [blog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogupdate)
        *   [comment Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentapprove)
        *   [comment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentdelete)
        *   [comment Not Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentnotspam)
        *   [comment Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentspam)
        *   [menu Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate)
        *   [menu Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menudelete)
        *   [menu Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate)
        *   [page Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagecreate)
        *   [page Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagedelete)
        *   [page Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageupdate)
        *   [script Tag Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate)
        *   [script Tag Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagdelete)
        *   [script Tag Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagupdate)
        *   [store Credit Account Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit)
        *   [store Credit Account Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit)
        *   [theme Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate)
        *   [theme Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themedelete)
        *   [theme Files Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilescopy)
        *   [theme Files Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesdelete)
        *   [theme Files Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert)
        *   [theme Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themepublish)
        *   [theme Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate)
        *   [url Redirect Bulk Delete All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeleteall)
        *   [url Redirect Bulk Delete By Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebyids)
        *   [url Redirect Bulk Delete By Saved Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysavedsearch)
        *   [url Redirect Bulk Delete By Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysearch)
        *   [url Redirect Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectcreate)
        *   [url Redirect Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete)
        *   [url Redirect Import Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportcreate)
        *   [url Redirect Import Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportsubmit)
        *   [url Redirect Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate)

    *   Objects   

*   Orders   
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

[Anchor to storeCreditAccountCredit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#top)
store Credit Account Credit
===========================

mutation

Requires `write_store_credit_account_transactions` access scope.

Creates a credit transaction that increases the store credit account balance by the given amount. This operation will create an account if one does not already exist. A store credit account owner can hold multiple accounts each with a different currency. Use the most appropriate currency for the given store credit account owner.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#arguments)
Arguments
---------

[Anchor to creditInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#arguments-creditInput)credit Input

•[Store Credit Account Credit Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountCreditInput)

required

The input fields for a store credit account credit transaction.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the store credit account or the ID of the account owner.

* * *

Was this section helpful?

Yes No

[Anchor to StoreCreditAccountCreditPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#returns)Store Credit Account Credit Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to storeCreditAccountTransaction](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#returns-storeCreditAccountTransaction)store Credit Account Transaction

•[Store Credit Account Credit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction)

The store credit account transaction that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit#returns-userErrors)user Errors

•[[Store Credit Account Credit User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Credit an amount to a store credit account by customer ID

#### Query

```graphql
mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
  storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
    storeCreditAccountTransaction {
      amount {
        amount
        currencyCode
      }
      account {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Customer/544365967",
  "creditInput": {
    "creditAmount": {
      "amount": "49.99",
      "currencyCode": "USD"
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
"query": "mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) { storeCreditAccountCredit(id: $id, creditInput: $creditInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967",
    "creditInput": {
      "creditAmount": {
        "amount": "49.99",
        "currencyCode": "USD"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/544365967",
        "creditInput": {
            "creditAmount": {
                "amount": "49.99",
                "currencyCode": "USD"
            }
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
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/544365967",
  "creditInput": {
    "creditAmount": {
      "amount": "49.99",
      "currencyCode": "USD"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
      storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
        storeCreditAccountTransaction {
          amount {
            amount
            currencyCode
          }
          account {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/544365967",
        "creditInput": {
            "creditAmount": {
                "amount": "49.99",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountCredit": {
    "storeCreditAccountTransaction": {
      "amount": {
        "amount": "49.99",
        "currencyCode": "USD"
      },
      "account": {
        "id": "gid://shopify/StoreCreditAccount/316863792",
        "balance": {
          "amount": "61.1",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Credit an expiring amount to a store credit account by account ID

#### Query

```graphql
mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
  storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
    storeCreditAccountTransaction {
      amount {
        amount
        currencyCode
      }
      account {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/StoreCreditAccount/316863792",
  "creditInput": {
    "expiresAt": "2028-10-26",
    "creditAmount": {
      "amount": "49.99",
      "currencyCode": "USD"
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
"query": "mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) { storeCreditAccountCredit(id: $id, creditInput: $creditInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/StoreCreditAccount/316863792",
    "creditInput": {
      "expiresAt": "2028-10-26",
      "creditAmount": {
        "amount": "49.99",
        "currencyCode": "USD"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StoreCreditAccount/316863792",
        "creditInput": {
            "expiresAt": "2028-10-26",
            "creditAmount": {
                "amount": "49.99",
                "currencyCode": "USD"
            }
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
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StoreCreditAccount/316863792",
  "creditInput": {
    "expiresAt": "2028-10-26",
    "creditAmount": {
      "amount": "49.99",
      "currencyCode": "USD"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
      storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
        storeCreditAccountTransaction {
          amount {
            amount
            currencyCode
          }
          account {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/StoreCreditAccount/316863792",
        "creditInput": {
            "expiresAt": "2028-10-26",
            "creditAmount": {
                "amount": "49.99",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountCredit": {
    "storeCreditAccountTransaction": {
      "amount": {
        "amount": "49.99",
        "currencyCode": "USD"
      },
      "account": {
        "id": "gid://shopify/StoreCreditAccount/316863792",
        "balance": {
          "amount": "61.1",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Crediting a negative amount returns an error

#### Query

```graphql
mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
  storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
    storeCreditAccountTransaction {
      amount {
        amount
        currencyCode
      }
      account {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Customer/1018520244",
  "creditInput": {
    "creditAmount": {
      "amount": "-100.00",
      "currencyCode": "USD"
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
"query": "mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) { storeCreditAccountCredit(id: $id, creditInput: $creditInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/Customer/1018520244",
    "creditInput": {
      "creditAmount": {
        "amount": "-100.00",
        "currencyCode": "USD"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/1018520244",
        "creditInput": {
            "creditAmount": {
                "amount": "-100.00",
                "currencyCode": "USD"
            }
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
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/1018520244",
  "creditInput": {
    "creditAmount": {
      "amount": "-100.00",
      "currencyCode": "USD"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
      storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
        storeCreditAccountTransaction {
          amount {
            amount
            currencyCode
          }
          account {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/1018520244",
        "creditInput": {
            "creditAmount": {
                "amount": "-100.00",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountCredit": {
    "storeCreditAccountTransaction": null,
    "userErrors": [
      {
        "message": "A positive amount must be used to credit a store credit account",
        "field": [
          "creditInput",
          "creditAmount",
          "amount"
        ]
      }
    ]
  }
}
``` 
*   ### Crediting an amount that exceeds the account limit returns an error

#### Description

Store credit accounts have a limit which can differ depending on the currency of the account. Attempting to credit an amount that would exceed the account's limit will return an error.

#### Query

```graphql
mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
  storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
    storeCreditAccountTransaction {
      amount {
        amount
        currencyCode
      }
      account {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Customer/1018520244",
  "creditInput": {
    "creditAmount": {
      "amount": "100000.00",
      "currencyCode": "USD"
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
"query": "mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) { storeCreditAccountCredit(id: $id, creditInput: $creditInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/Customer/1018520244",
    "creditInput": {
      "creditAmount": {
        "amount": "100000.00",
        "currencyCode": "USD"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/1018520244",
        "creditInput": {
            "creditAmount": {
                "amount": "100000.00",
                "currencyCode": "USD"
            }
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
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/1018520244",
  "creditInput": {
    "creditAmount": {
      "amount": "100000.00",
      "currencyCode": "USD"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
      storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
        storeCreditAccountTransaction {
          amount {
            amount
            currencyCode
          }
          account {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/1018520244",
        "creditInput": {
            "creditAmount": {
                "amount": "100000.00",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountCredit": {
    "storeCreditAccountTransaction": null,
    "userErrors": [
      {
        "message": "The operation would cause the account's credit limit to be exceeded",
        "field": [
          "creditInput",
          "creditAmount",
          "amount"
        ]
      }
    ]
  }
}
``` 
*   ### storeCreditAccountCredit reference

Examples
--------

Credit an amount to a store credit account by customer ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20storeCreditAccountCredit(%24id%3A%20ID!%2C%20%24creditInput%3A%20StoreCreditAccountCreditInput!)%20%7B%0A%20%20storeCreditAccountCredit(id%3A%20%24id%2C%20creditInput%3A%20%24creditInput)%20%7B%0A%20%20%20%20storeCreditAccountTransaction%20%7B%0A%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20account%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20balance%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%22creditInput%22%3A%20%7B%0A%20%20%20%20%22creditAmount%22%3A%20%7B%0A%20%20%20%20%20%20%22amount%22%3A%20%2249.99%22%2C%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {

 storeCreditAccountCredit(id: $id, creditInput: $creditInput) {

 storeCreditAccountTransaction {

 amount {

 amount

 currencyCode

 }

 account {

 id

 balance {

 amount

 currencyCode

 }

 }

 }

 userErrors {

 message

 field

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Customer/544365967",

"creditInput":{

"creditAmount":{

"amount":"49.99",

"currencyCode":"USD"

}

}

},

},

);

const data=await response.json();

```
mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
  storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
    storeCreditAccountTransaction {
      amount {
        amount
        currencyCode
      }
      account {
        id
        balance {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      message
      field
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
"query": "mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) { storeCreditAccountCredit(id: $id, creditInput: $creditInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967",
    "creditInput": {
      "creditAmount": {
        "amount": "49.99",
        "currencyCode": "USD"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/544365967",
        "creditInput": {
            "creditAmount": {
                "amount": "49.99",
                "currencyCode": "USD"
            }
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
    "query": `mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
      storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
        storeCreditAccountTransaction {
          amount {
            amount
            currencyCode
          }
          account {
            id
            balance {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/544365967",
        "creditInput": {
            "creditAmount": {
                "amount": "49.99",
                "currencyCode": "USD"
            }
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
  mutation storeCreditAccountCredit($id: ID!, $creditInput: StoreCreditAccountCreditInput!) {
    storeCreditAccountCredit(id: $id, creditInput: $creditInput) {
      storeCreditAccountTransaction {
        amount {
          amount
          currencyCode
        }
        account {
          id
          balance {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/544365967",
  "creditInput": {
    "creditAmount": {
      "amount": "49.99",
      "currencyCode": "USD"
    }
  }
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

"id": "gid://shopify/Customer/544365967",

"creditInput": {

"creditAmount": {

"amount": "49.99",

"currencyCode": "USD"

}

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"storeCreditAccountCredit": {

"storeCreditAccountTransaction": {

"amount": {

"amount": "49.99",

"currencyCode": "USD"

},

"account": {

"id": "gid://shopify/StoreCreditAccount/316863792",

"balance": {

"amount": "61.1",

"currencyCode": "USD"

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*