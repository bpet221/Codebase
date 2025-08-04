---
title: "giftCardCreate"
description: "Shopify GraphQL Admin API documentation for giftcardcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: giftCardCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate

Markdown Content:
giftCardCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#main-content)

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

[Anchor to giftCardCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#top)
gift Card Create
================

mutation

Requires `write_gift_cards` access scope.

Create a gift card.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#arguments-input)input

•[Gift Card Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput)

required

The input fields to create a gift card.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to GiftCardCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#returns)Gift Card Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to giftCard](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#returns-giftCard)gift Card

•[Gift Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

The created gift card.

Show fields

[Anchor to giftCardCode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#returns-giftCardCode)gift Card Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The created gift card's code.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate#returns-userErrors)user Errors

•[[Gift Card User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a gift card with a customer and a recipient

#### Query

```graphql
mutation giftCardCreate($input: GiftCardCreateInput!) {
  giftCardCreate(input: $input) {
    giftCard {
      id
      initialValue {
        amount
      }
      customer {
        id
      }
      recipientAttributes {
        recipient {
          id
        }
        message
        preferredName
        sendNotificationAt
      }
    }
    userErrors {
      message
      field
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "initialValue": "100.0",
    "customerId": "gid://shopify/Customer/331283560",
    "recipientAttributes": {
      "id": "gid://shopify/Customer/743592264",
      "message": "Happy Birthday!",
      "preferredName": "Dad",
      "sendNotificationAt": "2024-10-01T12:00:00Z"
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
"query": "mutation giftCardCreate($input: GiftCardCreateInput!) { giftCardCreate(input: $input) { giftCard { id initialValue { amount } customer { id } recipientAttributes { recipient { id } message preferredName sendNotificationAt } } userErrors { message field code } } }",
 "variables": {
    "input": {
      "initialValue": "100.0",
      "customerId": "gid://shopify/Customer/331283560",
      "recipientAttributes": {
        "id": "gid://shopify/Customer/743592264",
        "message": "Happy Birthday!",
        "preferredName": "Dad",
        "sendNotificationAt": "2024-10-01T12:00:00Z"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        id
        initialValue {
          amount
        }
        customer {
          id
        }
        recipientAttributes {
          recipient {
            id
          }
          message
          preferredName
          sendNotificationAt
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "initialValue": "100.0",
            "customerId": "gid://shopify/Customer/331283560",
            "recipientAttributes": {
                "id": "gid://shopify/Customer/743592264",
                "message": "Happy Birthday!",
                "preferredName": "Dad",
                "sendNotificationAt": "2024-10-01T12:00:00Z"
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
  mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        id
        initialValue {
          amount
        }
        customer {
          id
        }
        recipientAttributes {
          recipient {
            id
          }
          message
          preferredName
          sendNotificationAt
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "initialValue": "100.0",
    "customerId": "gid://shopify/Customer/331283560",
    "recipientAttributes": {
      "id": "gid://shopify/Customer/743592264",
      "message": "Happy Birthday!",
      "preferredName": "Dad",
      "sendNotificationAt": "2024-10-01T12:00:00Z"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation giftCardCreate($input: GiftCardCreateInput!) {
      giftCardCreate(input: $input) {
        giftCard {
          id
          initialValue {
            amount
          }
          customer {
            id
          }
          recipientAttributes {
            recipient {
              id
            }
            message
            preferredName
            sendNotificationAt
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "initialValue": "100.0",
            "customerId": "gid://shopify/Customer/331283560",
            "recipientAttributes": {
                "id": "gid://shopify/Customer/743592264",
                "message": "Happy Birthday!",
                "preferredName": "Dad",
                "sendNotificationAt": "2024-10-01T12:00:00Z"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "giftCardCreate": {
    "giftCard": {
      "id": "gid://shopify/GiftCard/1063936324",
      "initialValue": {
        "amount": "100.0"
      },
      "customer": {
        "id": "gid://shopify/Customer/331283560"
      },
      "recipientAttributes": {
        "recipient": {
          "id": "gid://shopify/Customer/743592264"
        },
        "message": "Happy Birthday!",
        "preferredName": "Dad",
        "sendNotificationAt": "2024-10-01T12:00:00Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a non-expiring gift card with a generated code for a customer

#### Query

```graphql
mutation giftCardCreate($input: GiftCardCreateInput!) {
  giftCardCreate(input: $input) {
    userErrors {
      message
      field
    }
    giftCard {
      id
      expiresOn
      note
      initialValue {
        amount
      }
      customer {
        id
      }
    }
    giftCardCode
  }
}
``` #### Variables

```json
{
  "input": {
    "initialValue": "27.84",
    "customerId": "gid://shopify/Customer/743592264",
    "note": "Refund for Order #1"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation giftCardCreate($input: GiftCardCreateInput!) { giftCardCreate(input: $input) { userErrors { message field } giftCard { id expiresOn note initialValue { amount } customer { id } } giftCardCode } }",
 "variables": {
    "input": {
      "initialValue": "27.84",
      "customerId": "gid://shopify/Customer/743592264",
      "note": "Refund for Order #1"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      userErrors {
        message
        field
      }
      giftCard {
        id
        expiresOn
        note
        initialValue {
          amount
        }
        customer {
          id
        }
      }
      giftCardCode
    }
  }`,
  {
    variables: {
        "input": {
            "initialValue": "27.84",
            "customerId": "gid://shopify/Customer/743592264",
            "note": "Refund for Order #1"
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
  mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      userErrors {
        message
        field
      }
      giftCard {
        id
        expiresOn
        note
        initialValue {
          amount
        }
        customer {
          id
        }
      }
      giftCardCode
    }
  }
QUERY

variables = {
  "input": {
    "initialValue": "27.84",
    "customerId": "gid://shopify/Customer/743592264",
    "note": "Refund for Order #1"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation giftCardCreate($input: GiftCardCreateInput!) {
      giftCardCreate(input: $input) {
        userErrors {
          message
          field
        }
        giftCard {
          id
          expiresOn
          note
          initialValue {
            amount
          }
          customer {
            id
          }
        }
        giftCardCode
      }
    }`,
    "variables": {
        "input": {
            "initialValue": "27.84",
            "customerId": "gid://shopify/Customer/743592264",
            "note": "Refund for Order #1"
        }
    },
  },
});
``` #### Response

```json
{
  "giftCardCreate": {
    "userErrors": [],
    "giftCard": {
      "id": "gid://shopify/GiftCard/1063936322",
      "expiresOn": null,
      "note": "Refund for Order #1",
      "initialValue": {
        "amount": "27.84"
      },
      "customer": {
        "id": "gid://shopify/Customer/743592264"
      }
    },
    "giftCardCode": "a5bhbh645b32934f"
  }
}
``` 
*   ### Creates a gift card

#### Query

```graphql
mutation GiftCardCreate($input: GiftCardCreateInput!) {
  giftCardCreate(input: $input) {
    giftCard {
      id
      balance {
        amount
        currencyCode
      }
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
  "input": {
    "initialValue": "100.0",
    "customerId": "gid://shopify/Customer/331283560"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation GiftCardCreate($input: GiftCardCreateInput!) { giftCardCreate(input: $input) { giftCard { id balance { amount currencyCode } } userErrors { field message } } }",
 "variables": {
    "input": {
      "initialValue": "100.0",
      "customerId": "gid://shopify/Customer/331283560"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation GiftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        id
        balance {
          amount
          currencyCode
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "initialValue": "100.0",
            "customerId": "gid://shopify/Customer/331283560"
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
  mutation GiftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        id
        balance {
          amount
          currencyCode
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "initialValue": "100.0",
    "customerId": "gid://shopify/Customer/331283560"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation GiftCardCreate($input: GiftCardCreateInput!) {
      giftCardCreate(input: $input) {
        giftCard {
          id
          balance {
            amount
            currencyCode
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "initialValue": "100.0",
            "customerId": "gid://shopify/Customer/331283560"
        }
    },
  },
});
``` #### Response

```json
{
  "giftCardCreate": {
    "giftCard": {
      "id": "gid://shopify/GiftCard/1063936323",
      "balance": {
        "amount": "100.0",
        "currencyCode": "USD"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### giftCardCreate reference

Examples
--------

Create a gift card with a customer and a recipient

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20giftCardCreate(%24input%3A%20GiftCardCreateInput!)%20%7B%0A%20%20giftCardCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20giftCard%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20initialValue%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20recipientAttributes%20%7B%0A%20%20%20%20%20%20%20%20recipient%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20message%0A%20%20%20%20%20%20%20%20preferredName%0A%20%20%20%20%20%20%20%20sendNotificationAt%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22initialValue%22%3A%20%22100.0%22%2C%0A%20%20%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F331283560%22%2C%0A%20%20%20%20%22recipientAttributes%22%3A%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F743592264%22%2C%0A%20%20%20%20%20%20%22message%22%3A%20%22Happy%20Birthday!%22%2C%0A%20%20%20%20%20%20%22preferredName%22%3A%20%22Dad%22%2C%0A%20%20%20%20%20%20%22sendNotificationAt%22%3A%20%222024-10-01T12%3A00%3A00Z%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation giftCardCreate($input: GiftCardCreateInput!) {

 giftCardCreate(input: $input) {

 giftCard {

 id

 initialValue {

 amount

 }

 customer {

 id

 }

 recipientAttributes {

 recipient {

 id

 }

 message

 preferredName

 sendNotificationAt

 }

 }

 userErrors {

 message

 field

 code

 }

 }

 }`,

{

variables:{

"input":{

"initialValue":"100.0",

"customerId":"gid://shopify/Customer/331283560",

"recipientAttributes":{

```
mutation giftCardCreate($input: GiftCardCreateInput!) {
  giftCardCreate(input: $input) {
    giftCard {
      id
      initialValue {
        amount
      }
      customer {
        id
      }
      recipientAttributes {
        recipient {
          id
        }
        message
        preferredName
        sendNotificationAt
      }
    }
    userErrors {
      message
      field
      code
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
"query": "mutation giftCardCreate($input: GiftCardCreateInput!) { giftCardCreate(input: $input) { giftCard { id initialValue { amount } customer { id } recipientAttributes { recipient { id } message preferredName sendNotificationAt } } userErrors { message field code } } }",
 "variables": {
    "input": {
      "initialValue": "100.0",
      "customerId": "gid://shopify/Customer/331283560",
      "recipientAttributes": {
        "id": "gid://shopify/Customer/743592264",
        "message": "Happy Birthday!",
        "preferredName": "Dad",
        "sendNotificationAt": "2024-10-01T12:00:00Z"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        id
        initialValue {
          amount
        }
        customer {
          id
        }
        recipientAttributes {
          recipient {
            id
          }
          message
          preferredName
          sendNotificationAt
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "initialValue": "100.0",
            "customerId": "gid://shopify/Customer/331283560",
            "recipientAttributes": {
                "id": "gid://shopify/Customer/743592264",
                "message": "Happy Birthday!",
                "preferredName": "Dad",
                "sendNotificationAt": "2024-10-01T12:00:00Z"
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
    "query": `mutation giftCardCreate($input: GiftCardCreateInput!) {
      giftCardCreate(input: $input) {
        giftCard {
          id
          initialValue {
            amount
          }
          customer {
            id
          }
          recipientAttributes {
            recipient {
              id
            }
            message
            preferredName
            sendNotificationAt
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "initialValue": "100.0",
            "customerId": "gid://shopify/Customer/331283560",
            "recipientAttributes": {
                "id": "gid://shopify/Customer/743592264",
                "message": "Happy Birthday!",
                "preferredName": "Dad",
                "sendNotificationAt": "2024-10-01T12:00:00Z"
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
  mutation giftCardCreate($input: GiftCardCreateInput!) {
    giftCardCreate(input: $input) {
      giftCard {
        id
        initialValue {
          amount
        }
        customer {
          id
        }
        recipientAttributes {
          recipient {
            id
          }
          message
          preferredName
          sendNotificationAt
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "initialValue": "100.0",
    "customerId": "gid://shopify/Customer/331283560",
    "recipientAttributes": {
      "id": "gid://shopify/Customer/743592264",
      "message": "Happy Birthday!",
      "preferredName": "Dad",
      "sendNotificationAt": "2024-10-01T12:00:00Z"
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

›

⌄

⌄

⌄

{

"input": {

"initialValue": "100.0",

"customerId": "gid://shopify/Customer/331283560",

"recipientAttributes": {

"id": "gid://shopify/Customer/743592264",

"message": "Happy Birthday!",

"preferredName": "Dad",

"sendNotificationAt": "2024-10-01T12:00:00Z"

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

19

20

21

22

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"giftCardCreate": {

"giftCard": {

"id": "gid://shopify/GiftCard/1063936324",

"initialValue": {

"amount": "100.0"

},

"customer": {

"id": "gid://shopify/Customer/331283560"

},

"recipientAttributes": {

"recipient": {

"id": "gid://shopify/Customer/743592264"

},

"message": "Happy Birthday!",

"preferredName": "Dad",

"sendNotificationAt": "2024-10-01T12:00:00Z"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*