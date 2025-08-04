---
title: "paymentTermsDelete"
description: "Shopify GraphQL Admin API documentation for paymenttermsdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: paymentTermsDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete

Markdown Content:
paymentTermsDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#main-content)

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

[Anchor to paymentTermsDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#top)
payment Terms Delete
====================

mutation

Requires `write_payment_terms` access scope. Also: User must have either orders or draft orders access according to the reference.

Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#arguments-input)input

•[Payment Terms Delete Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsDeleteInput)

required

The input fields used to delete the payment terms.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PaymentTermsDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#returns)Payment Terms Delete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#returns-deletedId)deleted Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The deleted payment terms ID.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete#returns-userErrors)user Errors

•[[Payment Terms Delete User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsDeleteUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete payment terms

#### Description

Delete payment terms for an order.

#### Query

```graphql
mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
  paymentTermsDelete(input: $input) {
    deletedId
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
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) { paymentTermsDelete(input: $input) { deletedId userErrors { field message } } }",
 "variables": {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
    paymentTermsDelete(input: $input) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
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
  mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
    paymentTermsDelete(input: $input) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
      paymentTermsDelete(input: $input) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
        }
    },
  },
});
``` #### Response

```json
{
  "paymentTermsDelete": {
    "deletedId": "gid://shopify/PaymentTerms/977822362",
    "userErrors": []
  }
}
``` 
*   ### paymentTermsDelete reference

Examples
--------

Delete payment terms

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PaymentTermsDelete(%24input%3A%20PaymentTermsDeleteInput!)%20%7B%0A%20%20paymentTermsDelete(input%3A%20%24input)%20%7B%0A%20%20%20%20deletedId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22paymentTermsId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentTerms%2F977822362%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {

 paymentTermsDelete(input: $input) {

 deletedId

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"paymentTermsId":"gid://shopify/PaymentTerms/977822362"

}

},

},

);

const data=await response.json();

```
mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
  paymentTermsDelete(input: $input) {
    deletedId
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
"query": "mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) { paymentTermsDelete(input: $input) { deletedId userErrors { field message } } }",
 "variables": {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
    paymentTermsDelete(input: $input) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
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
    "query": `mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
      paymentTermsDelete(input: $input) {
        deletedId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
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
  mutation PaymentTermsDelete($input: PaymentTermsDeleteInput!) {
    paymentTermsDelete(input: $input) {
      deletedId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362"
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

›

⌄

⌄

{

"input": {

"paymentTermsId": "gid://shopify/PaymentTerms/977822362"

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

›

⌄

⌄

{

"paymentTermsDelete": {

"deletedId": "gid://shopify/PaymentTerms/977822362",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*