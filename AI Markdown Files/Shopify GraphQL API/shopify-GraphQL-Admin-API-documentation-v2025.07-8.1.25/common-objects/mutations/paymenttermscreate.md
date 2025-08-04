---
title: "paymentTermsCreate"
description: "Shopify GraphQL Admin API documentation for paymenttermscreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: paymentTermsCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate

Markdown Content:
paymentTermsCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#main-content)

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

[Anchor to paymentTermsCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#top)
payment Terms Create
====================

mutation

Requires `write_payment_terms` access scope. Also: The user must have access to orders or draft orders.

Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#arguments)
Arguments
---------

[Anchor to paymentTermsAttributes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#arguments-paymentTermsAttributes)payment Terms Attributes

•[Payment Terms Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput)

required

The attributes used to create the payment terms.

Show input fields

[Anchor to referenceId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#arguments-referenceId)reference Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the reference orderId to add the payment terms for.

* * *

Was this section helpful?

Yes No

[Anchor to PaymentTermsCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#returns)Payment Terms Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#returns-paymentTerms)payment Terms

•[Payment Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

The created payment terms.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate#returns-userErrors)user Errors

•[[Payment Terms Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create due on receipt payment terms

#### Description

Create payment terms that indicate payment is due when the invoice is sent by the merchant.

#### Query

```graphql
mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
  paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
    paymentTerms {
      id
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) { paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) { paymentTerms { id } userErrors { field message } } }",
 "variables": {
    "referenceId": "gid://shopify/Order/922426937",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
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
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
      paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
        paymentTerms {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
        }
    },
  },
});
``` #### Response

```json
{
  "paymentTermsCreate": {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/1054663035"
    },
    "userErrors": []
  }
}
``` 
*   ### Create fixed payment terms

#### Description

Create payment terms that indicate payment is due on a fixed date.

#### Query

```graphql
mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
  paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
    paymentTerms {
      id
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
    "paymentSchedules": [
      {
        "dueAt": "2022-06-13T22:35:23.311Z"
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) { paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) { paymentTerms { id } userErrors { field message } } }",
 "variables": {
    "referenceId": "gid://shopify/Order/922426937",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
      "paymentSchedules": [
        {
          "dueAt": "2022-06-13T22:35:23.311Z"
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
            "paymentSchedules": [
                {
                    "dueAt": "2022-06-13T22:35:23.311Z"
                }
            ]
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
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
    "paymentSchedules": [
      {
        "dueAt": "2022-06-13T22:35:23.311Z"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
      paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
        paymentTerms {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
            "paymentSchedules": [
                {
                    "dueAt": "2022-06-13T22:35:23.311Z"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "paymentTermsCreate": {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/1054663034"
    },
    "userErrors": []
  }
}
``` 
*   ### Create net payment terms

#### Description

Create payment terms that indicate payment is due a set number of days after the invoice is sent.

#### Query

```graphql
mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
  paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
    paymentTerms {
      id
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
    "paymentSchedules": [
      {
        "issuedAt": "2022-06-13T22:30:18.019Z"
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) { paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) { paymentTerms { id } userErrors { field message } } }",
 "variables": {
    "referenceId": "gid://shopify/Order/922426937",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
      "paymentSchedules": [
        {
          "issuedAt": "2022-06-13T22:30:18.019Z"
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
            "paymentSchedules": [
                {
                    "issuedAt": "2022-06-13T22:30:18.019Z"
                }
            ]
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
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
    "paymentSchedules": [
      {
        "issuedAt": "2022-06-13T22:30:18.019Z"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
      paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
        paymentTerms {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
            "paymentSchedules": [
                {
                    "issuedAt": "2022-06-13T22:30:18.019Z"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "paymentTermsCreate": {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/1054663033"
    },
    "userErrors": []
  }
}
``` 
*   ### paymentTermsCreate reference

Examples
--------

Create due on receipt payment terms

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PaymentTermsCreate(%24referenceId%3A%20ID!%2C%20%24paymentTermsAttributes%3A%20PaymentTermsCreateInput!)%20%7B%0A%20%20paymentTermsCreate(referenceId%3A%20%24referenceId%2C%20paymentTermsAttributes%3A%20%24paymentTermsAttributes)%20%7B%0A%20%20%20%20paymentTerms%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22referenceId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F922426937%22%2C%0A%20%20%22paymentTermsAttributes%22%3A%20%7B%0A%20%20%20%20%22paymentTermsTemplateId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentTermsTemplate%2F1%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {

 paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {

 paymentTerms {

 id

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"referenceId":"gid://shopify/Order/922426937",

"paymentTermsAttributes":{

"paymentTermsTemplateId":"gid://shopify/PaymentTermsTemplate/1"

}

},

},

);

const data=await response.json();

```
mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
  paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
    paymentTerms {
      id
    }
    userErrors {
      field
      message
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
"query": "mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) { paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) { paymentTerms { id } userErrors { field message } } }",
 "variables": {
    "referenceId": "gid://shopify/Order/922426937",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
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
    "query": `mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
      paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
        paymentTerms {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "referenceId": "gid://shopify/Order/922426937",
        "paymentTermsAttributes": {
            "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
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
  mutation PaymentTermsCreate($referenceId: ID!, $paymentTermsAttributes: PaymentTermsCreateInput!) {
    paymentTermsCreate(referenceId: $referenceId, paymentTermsAttributes: $paymentTermsAttributes) {
      paymentTerms {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "referenceId": "gid://shopify/Order/922426937",
  "paymentTermsAttributes": {
    "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"
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

›

⌄

⌄

{

"referenceId": "gid://shopify/Order/922426937",

"paymentTermsAttributes": {

"paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/1"

}

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

›

⌄

⌄

⌄

{

"paymentTermsCreate": {

"paymentTerms": {

"id": "gid://shopify/PaymentTerms/1054663035"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*