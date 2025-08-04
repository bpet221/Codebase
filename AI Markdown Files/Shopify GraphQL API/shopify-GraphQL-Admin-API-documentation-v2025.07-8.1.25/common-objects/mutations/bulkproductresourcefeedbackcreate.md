---
title: "bulkProductResourceFeedbackCreate"
description: "Shopify GraphQL Admin API documentation for bulkproductresourcefeedbackcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: bulkProductResourceFeedbackCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate

Markdown Content:
bulkProductResourceFeedbackCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#main-content)

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

[Anchor to bulkProductResourceFeedbackCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#top)
bulk Product Resource Feedback Create
=====================================

mutation

Requires `write_resource_feedbacks` access scope. Also: App must be configured to use the Storefront API or as a Sales Channel.

Creates product feedback for multiple products.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#arguments)
Arguments
---------

[Anchor to feedbackInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#arguments-feedbackInput)feedback Input

•[[Product Resource Feedback Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductResourceFeedbackInput)

required

An array of inputs to create the feedback. Limited to 50.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to BulkProductResourceFeedbackCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#returns)Bulk Product Resource Feedback Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to feedback](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#returns-feedback)feedback

•[[Product Resource Feedback!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductResourceFeedback)

The feedback that's created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate#returns-userErrors)user Errors

•[[Bulk Product Resource Feedback Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkProductResourceFeedbackCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a feedback record indicating the product is usable by your app

#### Description

Indicates that the app does not have any outstanding issues with this product.

#### Query

```graphql
mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
  bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
    userErrors {
      field
      message
    }
    feedback {
      productId
      state
      feedbackGeneratedAt
      productUpdatedAt
      messages
    }
  }
}
``` #### Variables

```json
{
  "feedbackInput": {
    "productId": "gid://shopify/Product/172561227",
    "state": "ACCEPTED",
    "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
    "productUpdatedAt": "2021-04-28T16:00:00Z",
    "messages": []
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation($feedbackInput: [ProductResourceFeedbackInput!]!) { bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) { userErrors { field message } feedback { productId state feedbackGeneratedAt productUpdatedAt messages } } }",
 "variables": {
    "feedbackInput": {
      "productId": "gid://shopify/Product/172561227",
      "state": "ACCEPTED",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": []
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        feedbackGeneratedAt
        productUpdatedAt
        messages
      }
    }
  }`,
  {
    variables: {
        "feedbackInput": {
            "productId": "gid://shopify/Product/172561227",
            "state": "ACCEPTED",
            "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
            "productUpdatedAt": "2021-04-28T16:00:00Z",
            "messages": []
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
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        feedbackGeneratedAt
        productUpdatedAt
        messages
      }
    }
  }
QUERY

variables = {
  "feedbackInput": {
    "productId": "gid://shopify/Product/172561227",
    "state": "ACCEPTED",
    "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
    "productUpdatedAt": "2021-04-28T16:00:00Z",
    "messages": []
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
      bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
        userErrors {
          field
          message
        }
        feedback {
          productId
          state
          feedbackGeneratedAt
          productUpdatedAt
          messages
        }
      }
    }`,
    "variables": {
        "feedbackInput": {
            "productId": "gid://shopify/Product/172561227",
            "state": "ACCEPTED",
            "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
            "productUpdatedAt": "2021-04-28T16:00:00Z",
            "messages": []
        }
    },
  },
});
``` #### Response

```json
{
  "bulkProductResourceFeedbackCreate": {
    "userErrors": [],
    "feedback": [
      {
        "productId": "gid://shopify/Product/172561227",
        "state": "ACCEPTED",
        "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
        "productUpdatedAt": "2021-04-28T16:00:00Z",
        "messages": []
      }
    ]
  }
}
``` 
*   ### Create a new Product ResourceFeedback

#### Query

```graphql
mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
  bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
    userErrors {
      field
      message
    }
    feedback {
      productId
      state
      feedbackGeneratedAt
      productUpdatedAt
      messages
    }
  }
}
``` #### Variables

```json
{
  "feedbackInput": [
    {
      "productId": "gid://shopify/Product/172561227",
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": [
        "Needs a description."
      ]
    },
    {
      "productId": "gid://shopify/Product/788638954",
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": [
        "Needs an image."
      ]
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation($feedbackInput: [ProductResourceFeedbackInput!]!) { bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) { userErrors { field message } feedback { productId state feedbackGeneratedAt productUpdatedAt messages } } }",
 "variables": {
    "feedbackInput": [
      {
        "productId": "gid://shopify/Product/172561227",
        "state": "REQUIRES_ACTION",
        "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
        "productUpdatedAt": "2021-04-28T16:00:00Z",
        "messages": [
          "Needs a description."
        ]
      },
      {
        "productId": "gid://shopify/Product/788638954",
        "state": "REQUIRES_ACTION",
        "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
        "productUpdatedAt": "2021-04-28T16:00:00Z",
        "messages": [
          "Needs an image."
        ]
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        feedbackGeneratedAt
        productUpdatedAt
        messages
      }
    }
  }`,
  {
    variables: {
        "feedbackInput": [
            {
                "productId": "gid://shopify/Product/172561227",
                "state": "REQUIRES_ACTION",
                "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
                "productUpdatedAt": "2021-04-28T16:00:00Z",
                "messages": [
                    "Needs a description."
                ]
            },
            {
                "productId": "gid://shopify/Product/788638954",
                "state": "REQUIRES_ACTION",
                "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
                "productUpdatedAt": "2021-04-28T16:00:00Z",
                "messages": [
                    "Needs an image."
                ]
            }
        ]
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
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        feedbackGeneratedAt
        productUpdatedAt
        messages
      }
    }
  }
QUERY

variables = {
  "feedbackInput": [
    {
      "productId": "gid://shopify/Product/172561227",
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": [
        "Needs a description."
      ]
    },
    {
      "productId": "gid://shopify/Product/788638954",
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": [
        "Needs an image."
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
      bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
        userErrors {
          field
          message
        }
        feedback {
          productId
          state
          feedbackGeneratedAt
          productUpdatedAt
          messages
        }
      }
    }`,
    "variables": {
        "feedbackInput": [
            {
                "productId": "gid://shopify/Product/172561227",
                "state": "REQUIRES_ACTION",
                "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
                "productUpdatedAt": "2021-04-28T16:00:00Z",
                "messages": [
                    "Needs a description."
                ]
            },
            {
                "productId": "gid://shopify/Product/788638954",
                "state": "REQUIRES_ACTION",
                "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
                "productUpdatedAt": "2021-04-28T16:00:00Z",
                "messages": [
                    "Needs an image."
                ]
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "bulkProductResourceFeedbackCreate": {
    "userErrors": [],
    "feedback": [
      {
        "productId": "gid://shopify/Product/172561227",
        "state": "REQUIRES_ACTION",
        "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
        "productUpdatedAt": "2021-04-28T16:00:00Z",
        "messages": [
          "Needs a description."
        ]
      },
      {
        "productId": "gid://shopify/Product/788638954",
        "state": "REQUIRES_ACTION",
        "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
        "productUpdatedAt": "2021-04-28T16:00:00Z",
        "messages": [
          "Needs an image."
        ]
      }
    ]
  }
}
``` 
*   ### Error response

#### Description

Sending outdated feedback (previous feedback payload has a greater resource_updated_at value) returns an error

#### Query

```graphql
mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
  bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
    userErrors {
      field
      message
    }
    feedback {
      productId
      state
      messages
    }
  }
}
``` #### Variables

```json
{
  "feedbackInput": {
    "productId": "gid://shopify/Product/172561227",
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
    "productUpdatedAt": "2021-04-28T16:00:00Z",
    "messages": [
      "Needs a description."
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
"query": "mutation($feedbackInput: [ProductResourceFeedbackInput!]!) { bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) { userErrors { field message } feedback { productId state messages } } }",
 "variables": {
    "feedbackInput": {
      "productId": "gid://shopify/Product/172561227",
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": [
        "Needs a description."
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        messages
      }
    }
  }`,
  {
    variables: {
        "feedbackInput": {
            "productId": "gid://shopify/Product/172561227",
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
            "productUpdatedAt": "2021-04-28T16:00:00Z",
            "messages": [
                "Needs a description."
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
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        messages
      }
    }
  }
QUERY

variables = {
  "feedbackInput": {
    "productId": "gid://shopify/Product/172561227",
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
    "productUpdatedAt": "2021-04-28T16:00:00Z",
    "messages": [
      "Needs a description."
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
      bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
        userErrors {
          field
          message
        }
        feedback {
          productId
          state
          messages
        }
      }
    }`,
    "variables": {
        "feedbackInput": {
            "productId": "gid://shopify/Product/172561227",
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
            "productUpdatedAt": "2021-04-28T16:00:00Z",
            "messages": [
                "Needs a description."
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "bulkProductResourceFeedbackCreate": {
    "userErrors": [
      {
        "field": [
          "feedbackInput",
          "0",
          "feedbackGeneratedAt"
        ],
        "message": "Feedback for a later version of this resource was already accepted."
      }
    ],
    "feedback": []
  }
}
``` 
*   ### bulkProductResourceFeedbackCreate reference

Examples
--------

Create a feedback record indicating the product is usable by your app

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation(%24feedbackInput%3A%20%5BProductResourceFeedbackInput!%5D!)%20%7B%0A%20%20bulkProductResourceFeedbackCreate(feedbackInput%3A%20%24feedbackInput)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20feedback%20%7B%0A%20%20%20%20%20%20productId%0A%20%20%20%20%20%20state%0A%20%20%20%20%20%20feedbackGeneratedAt%0A%20%20%20%20%20%20productUpdatedAt%0A%20%20%20%20%20%20messages%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22feedbackInput%22%3A%20%7B%0A%20%20%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F172561227%22%2C%0A%20%20%20%20%22state%22%3A%20%22ACCEPTED%22%2C%0A%20%20%20%20%22feedbackGeneratedAt%22%3A%20%222021-05-01T23%3A00%3A00Z%22%2C%0A%20%20%20%20%22productUpdatedAt%22%3A%20%222021-04-28T16%3A00%3A00Z%22%2C%0A%20%20%20%20%22messages%22%3A%20%5B%5D%0A%20%20%7D%0A%7D)Copy

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

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {

 bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {

 userErrors {

 field

 message

 }

 feedback {

 productId

 state

 feedbackGeneratedAt

 productUpdatedAt

 messages

 }

 }

 }`,

{

variables:{

"feedbackInput":{

"productId":"gid://shopify/Product/172561227",

"state":"ACCEPTED",

"feedbackGeneratedAt":"2021-05-01T23:00:00Z",

"productUpdatedAt":"2021-04-28T16:00:00Z",

"messages":[]

}

},

},

);

const data=await response.json();

```
mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
  bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
    userErrors {
      field
      message
    }
    feedback {
      productId
      state
      feedbackGeneratedAt
      productUpdatedAt
      messages
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
"query": "mutation($feedbackInput: [ProductResourceFeedbackInput!]!) { bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) { userErrors { field message } feedback { productId state feedbackGeneratedAt productUpdatedAt messages } } }",
 "variables": {
    "feedbackInput": {
      "productId": "gid://shopify/Product/172561227",
      "state": "ACCEPTED",
      "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
      "productUpdatedAt": "2021-04-28T16:00:00Z",
      "messages": []
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        feedbackGeneratedAt
        productUpdatedAt
        messages
      }
    }
  }`,
  {
    variables: {
        "feedbackInput": {
            "productId": "gid://shopify/Product/172561227",
            "state": "ACCEPTED",
            "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
            "productUpdatedAt": "2021-04-28T16:00:00Z",
            "messages": []
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
    "query": `mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
      bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
        userErrors {
          field
          message
        }
        feedback {
          productId
          state
          feedbackGeneratedAt
          productUpdatedAt
          messages
        }
      }
    }`,
    "variables": {
        "feedbackInput": {
            "productId": "gid://shopify/Product/172561227",
            "state": "ACCEPTED",
            "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
            "productUpdatedAt": "2021-04-28T16:00:00Z",
            "messages": []
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
  mutation($feedbackInput: [ProductResourceFeedbackInput!]!) {
    bulkProductResourceFeedbackCreate(feedbackInput: $feedbackInput) {
      userErrors {
        field
        message
      }
      feedback {
        productId
        state
        feedbackGeneratedAt
        productUpdatedAt
        messages
      }
    }
  }
QUERY

variables = {
  "feedbackInput": {
    "productId": "gid://shopify/Product/172561227",
    "state": "ACCEPTED",
    "feedbackGeneratedAt": "2021-05-01T23:00:00Z",
    "productUpdatedAt": "2021-04-28T16:00:00Z",
    "messages": []
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

{

"feedbackInput": {

"productId": "gid://shopify/Product/172561227",

"state": "ACCEPTED",

"feedbackGeneratedAt": "2021-05-01T23:00:00Z",

"productUpdatedAt": "2021-04-28T16:00:00Z",

"messages": []

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

›

⌄

⌄

⌄

⌄

{

"bulkProductResourceFeedbackCreate": {

"userErrors": [],

"feedback": [

{

"productId": "gid://shopify/Product/172561227",

"state": "ACCEPTED",

"feedbackGeneratedAt": "2021-05-01T23:00:00Z",

"productUpdatedAt": "2021-04-28T16:00:00Z",

"messages": []

}

]

}

}


---
*Content truncated at "Updates" section*