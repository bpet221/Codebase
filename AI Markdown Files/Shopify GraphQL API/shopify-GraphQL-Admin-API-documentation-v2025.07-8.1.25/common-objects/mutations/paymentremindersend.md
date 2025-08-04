---
title: "paymentReminderSend"
description: "Shopify GraphQL Admin API documentation for paymentremindersend"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: paymentReminderSend - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend

Markdown Content:
paymentReminderSend - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#main-content)

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
*   
Common Objects

    *   Queries   
    *   
Mutations

        *   [customer Payment Method Credit Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardupdate)
        *   [customer Payment Method Get Update Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodgetupdateurl)
        *   [customer Payment Method Paypal Billing Agreement Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate)
        *   [customer Payment Method Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodrevoke)
        *   [fulfillment Constraint Rule Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruledelete)
        *   [fulfillment Constraint Rule Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruleupdate)
        *   [gift Card Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcredit)
        *   [gift Card Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddeactivate)
        *   [gift Card Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit)
        *   [gift Card Send Notification To Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtocustomer)
        *   [gift Card Send Notification To Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtorecipient)
        *   [market Regions Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionsdelete)
        *   [payment Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationactivation)
        *   [payment Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationcreate)
        *   [payment Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationdelete)
        *   [payment Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationupdate)
        *   [payment Reminder Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend)
        *   [payment Terms Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete)
        *   [payment Terms Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate)
        *   [product Feed Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeedcreate)
        *   [product Feed Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeeddelete)
        *   [product Full Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfullsync)
        *   [saved Search Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchcreate)
        *   [saved Search Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchupdate)
        *   [staged Upload Target Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetgenerate)
        *   [staged Upload Targets Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetsgenerate)
        *   [tags Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd)
        *   [tags Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsremove)
        *   [validation Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationcreate)
        *   [validation Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationdelete)
        *   [validation Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationupdate)
        *   [web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencedelete)

    *   Objects   

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
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to paymentReminderSend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#top)
payment Reminder Send
=====================

mutation

Requires `write_orders` access scope.

Sends an email payment reminder for a payment schedule.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#arguments)
Arguments
---------

[Anchor to paymentScheduleId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#arguments-paymentScheduleId)payment Schedule Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The payment schedule id associated with the reminder.

* * *

Was this section helpful?

Yes No

[Anchor to PaymentReminderSendPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#returns)Payment Reminder Send Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to success](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#returns-success)success

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the payment reminder email was successfully sent.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend#returns-userErrors)user Errors

•[[Payment Reminder Send User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentReminderSendUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Send a payment reminder

#### Description

Send a payment reminder email to a customer.

#### Query

```graphql
mutation paymentReminderSend($paymentScheduleId: ID!) {
  paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
    success
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation paymentReminderSend($paymentScheduleId: ID!) { paymentReminderSend(paymentScheduleId: $paymentScheduleId) { success userErrors { message } } }",
 "variables": {
    "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation paymentReminderSend($paymentScheduleId: ID!) {
    paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
      success
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
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
  mutation paymentReminderSend($paymentScheduleId: ID!) {
    paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
      success
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation paymentReminderSend($paymentScheduleId: ID!) {
      paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
        success
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
    },
  },
});
``` #### Response

```json
{
  "paymentReminderSend": {
    "success": true,
    "userErrors": []
  }
}
``` 
*   ### paymentReminderSend reference

Examples
--------

Send a payment reminder

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20paymentReminderSend(%24paymentScheduleId%3A%20ID!)%20%7B%0A%20%20paymentReminderSend(paymentScheduleId%3A%20%24paymentScheduleId)%20%7B%0A%20%20%20%20success%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22paymentScheduleId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentSchedule%2F864539144%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation paymentReminderSend($paymentScheduleId: ID!) {

 paymentReminderSend(paymentScheduleId: $paymentScheduleId) {

 success

 userErrors {

 message

 }

 }

 }`,

{

variables:{

"paymentScheduleId":"gid://shopify/PaymentSchedule/864539144"

},

},

);

const data=await response.json();

```
mutation paymentReminderSend($paymentScheduleId: ID!) {
  paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
    success
    userErrors {
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
"query": "mutation paymentReminderSend($paymentScheduleId: ID!) { paymentReminderSend(paymentScheduleId: $paymentScheduleId) { success userErrors { message } } }",
 "variables": {
    "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation paymentReminderSend($paymentScheduleId: ID!) {
    paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
      success
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation paymentReminderSend($paymentScheduleId: ID!) {
      paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
        success
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
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
  mutation paymentReminderSend($paymentScheduleId: ID!) {
    paymentReminderSend(paymentScheduleId: $paymentScheduleId) {
      success
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"
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

"paymentScheduleId": "gid://shopify/PaymentSchedule/864539144"

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

›

⌄

⌄

{

"paymentReminderSend": {

"success": true,

"userErrors": []

}

}


---
*Content truncated at "Updates" section*