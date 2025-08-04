---
title: "storeCreditAccountDebit"
description: "Shopify GraphQL Admin API documentation for storecreditaccountdebit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: storeCreditAccountDebit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit

Markdown Content:
storeCreditAccountDebit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#main-content)

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

    *   Queries   
    *   
Mutations

        *   [bulk Product Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate)
        *   [customer Payment Method Credit Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardcreate)
        *   [customer Payment Method Credit Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardupdate)
        *   [customer Payment Method Get Update Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodgetupdateurl)
        *   [customer Payment Method Paypal Billing Agreement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementcreate)
        *   [customer Payment Method Paypal Billing Agreement Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate)
        *   [customer Payment Method Remote Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodremotecreate)
        *   [customer Payment Method Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodrevoke)
        *   [customer Payment Method Send Update Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail)
        *   [fulfillment Constraint Rule Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintrulecreate)
        *   [fulfillment Constraint Rule Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruledelete)
        *   [fulfillment Constraint Rule Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruleupdate)
        *   [gift Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate)
        *   [gift Card Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcredit)
        *   [gift Card Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddeactivate)
        *   [gift Card Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit)
        *   [gift Card Send Notification To Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtocustomer)
        *   [gift Card Send Notification To Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtorecipient)
        *   [gift Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardupdate)
        *   [market Regions Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionsdelete)
        *   [payment Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationactivation)
        *   [payment Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationcreate)
        *   [payment Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationdelete)
        *   [payment Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationupdate)
        *   [payment Reminder Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend)
        *   [payment Terms Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate)
        *   [payment Terms Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete)
        *   [payment Terms Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate)
        *   [product Feed Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeedcreate)
        *   [product Feed Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeeddelete)
        *   [product Full Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfullsync)
        *   [saved Search Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchcreate)
        *   [saved Search Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchdelete)
        *   [saved Search Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchupdate)
        *   [staged Upload Target Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetgenerate)
        *   [staged Upload Targets Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetsgenerate)
        *   [store Credit Account Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit)
        *   [store Credit Account Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit)
        *   [tags Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd)
        *   [tags Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsremove)
        *   [validation Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationcreate)
        *   [validation Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationdelete)
        *   [validation Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationupdate)
        *   [web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencedelete)

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

[Anchor to storeCreditAccountDebit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#top)
store Credit Account Debit
==========================

mutation

Requires `write_store_credit_account_transactions` access scope.

Creates a debit transaction that decreases the store credit account balance by the given amount.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#arguments)
Arguments
---------

[Anchor to debitInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#arguments-debitInput)debit Input

•[Store Credit Account Debit Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditAccountDebitInput)

required

The input fields for a store credit account debit transaction.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the store credit account or the ID of the account owner.

* * *

Was this section helpful?

Yes No

[Anchor to StoreCreditAccountDebitPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#returns)Store Credit Account Debit Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to storeCreditAccountTransaction](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#returns-storeCreditAccountTransaction)store Credit Account Transaction

•[Store Credit Account Debit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction)

The store credit account transaction that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit#returns-userErrors)user Errors

•[[Store Credit Account Debit User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Debit a store credit account by account ID

#### Query

```graphql
mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
  storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "9.99",
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
"query": "mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) { storeCreditAccountDebit(id: $id, debitInput: $debitInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/StoreCreditAccount/316863792",
    "debitInput": {
      "debitAmount": {
        "amount": "9.99",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "9.99",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "9.99",
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
    "query": `mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
      storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "9.99",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountDebit": {
    "storeCreditAccountTransaction": {
      "amount": {
        "amount": "-9.99",
        "currencyCode": "USD"
      },
      "account": {
        "id": "gid://shopify/StoreCreditAccount/316863792",
        "balance": {
          "amount": "1.12",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Debit a store credit account by customer ID

#### Query

```graphql
mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
  storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "9.99",
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
"query": "mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) { storeCreditAccountDebit(id: $id, debitInput: $debitInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967",
    "debitInput": {
      "debitAmount": {
        "amount": "9.99",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "9.99",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "9.99",
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
    "query": `mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
      storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "9.99",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountDebit": {
    "storeCreditAccountTransaction": {
      "amount": {
        "amount": "-9.99",
        "currencyCode": "USD"
      },
      "account": {
        "id": "gid://shopify/StoreCreditAccount/316863792",
        "balance": {
          "amount": "1.12",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Debiting an amount that exceeds the account balance returns an error

#### Query

```graphql
mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
  storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "100.00",
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
"query": "mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) { storeCreditAccountDebit(id: $id, debitInput: $debitInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/StoreCreditAccount/316863792",
    "debitInput": {
      "debitAmount": {
        "amount": "100.00",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "100.00",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "100.00",
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
    "query": `mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
      storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "100.00",
                "currencyCode": "USD"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "storeCreditAccountDebit": {
    "storeCreditAccountTransaction": null,
    "userErrors": [
      {
        "message": "The store credit account does not have sufficient funds to satisfy the request",
        "field": [
          "debitInput",
          "debitAmount",
          "amount"
        ]
      }
    ]
  }
}
``` 
*   ### storeCreditAccountDebit reference

Examples
--------

Debit a store credit account by account ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20storeCreditAccountDebit(%24id%3A%20ID!%2C%20%24debitInput%3A%20StoreCreditAccountDebitInput!)%20%7B%0A%20%20storeCreditAccountDebit(id%3A%20%24id%2C%20debitInput%3A%20%24debitInput)%20%7B%0A%20%20%20%20storeCreditAccountTransaction%20%7B%0A%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20account%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20balance%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FStoreCreditAccount%2F316863792%22%2C%0A%20%20%22debitInput%22%3A%20%7B%0A%20%20%20%20%22debitAmount%22%3A%20%7B%0A%20%20%20%20%20%20%22amount%22%3A%20%229.99%22%2C%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {

 storeCreditAccountDebit(id: $id, debitInput: $debitInput) {

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

"id":"gid://shopify/StoreCreditAccount/316863792",

"debitInput":{

"debitAmount":{

"amount":"9.99",

"currencyCode":"USD"

}

}

},

},

);

const data=await response.json();

```
mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
  storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
"query": "mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) { storeCreditAccountDebit(id: $id, debitInput: $debitInput) { storeCreditAccountTransaction { amount { amount currencyCode } account { id balance { amount currencyCode } } } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/StoreCreditAccount/316863792",
    "debitInput": {
      "debitAmount": {
        "amount": "9.99",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "9.99",
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
    "query": `mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
      storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
        "debitInput": {
            "debitAmount": {
                "amount": "9.99",
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
  mutation storeCreditAccountDebit($id: ID!, $debitInput: StoreCreditAccountDebitInput!) {
    storeCreditAccountDebit(id: $id, debitInput: $debitInput) {
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
  "debitInput": {
    "debitAmount": {
      "amount": "9.99",
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

"id": "gid://shopify/StoreCreditAccount/316863792",

"debitInput": {

"debitAmount": {

"amount": "9.99",

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

"storeCreditAccountDebit": {

"storeCreditAccountTransaction": {

"amount": {

"amount": "-9.99",

"currencyCode": "USD"

},

"account": {

"id": "gid://shopify/StoreCreditAccount/316863792",

"balance": {

"amount": "1.12",

"currencyCode": "USD"

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*