---
title: "paymentTermsUpdate"
description: "Shopify GraphQL Admin API documentation for paymenttermsupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: paymentTermsUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate

Markdown Content:
paymentTermsUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#main-content)

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

[Anchor to paymentTermsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#top)
payment Terms Update
====================

mutation

Requires `write_payment_terms` access scope. Also: User must have either orders or draft orders access according to the reference.

Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#arguments-input)input

•[Payment Terms Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

required

The input fields used to update the payment terms.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PaymentTermsUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#returns)Payment Terms Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#returns-paymentTerms)payment Terms

•[Payment Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

The updated payment terms.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate#returns-userErrors)user Errors

•[[Payment Terms Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update payment terms date

#### Description

Update the due date for fixed date payment terms.

#### Query

```graphql
mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
  paymentTermsUpdate(input: $input) {
    paymentTerms {
      id
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
      "paymentSchedules": [
        {
          "dueAt": "2022-06-13T22:35:23.311Z"
        }
      ]
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
"query": "mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) { paymentTermsUpdate(input: $input) { paymentTerms { id } userErrors { code field message } } }",
 "variables": {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
        "paymentSchedules": [
          {
            "dueAt": "2022-06-13T22:35:23.311Z"
          }
        ]
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                "paymentSchedules": [
                    {
                        "dueAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
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
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
      "paymentSchedules": [
        {
          "dueAt": "2022-06-13T22:35:23.311Z"
        }
      ]
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                "paymentSchedules": [
                    {
                        "dueAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
            }
        }
    },
  },
});
``` #### Response

```json
{
  "paymentTermsUpdate": {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/977822362"
    },
    "userErrors": []
  }
}
``` 
*   ### Update payment terms type

#### Description

Change payment terms to net terms.

#### Query

```graphql
mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
  paymentTermsUpdate(input: $input) {
    paymentTerms {
      id
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
      "paymentSchedules": [
        {
          "issuedAt": "2022-06-13T22:35:23.311Z"
        }
      ]
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
"query": "mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) { paymentTermsUpdate(input: $input) { paymentTerms { id } userErrors { code field message } } }",
 "variables": {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
        "paymentSchedules": [
          {
            "issuedAt": "2022-06-13T22:35:23.311Z"
          }
        ]
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
                "paymentSchedules": [
                    {
                        "issuedAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
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
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
      "paymentSchedules": [
        {
          "issuedAt": "2022-06-13T22:35:23.311Z"
        }
      ]
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/2",
                "paymentSchedules": [
                    {
                        "issuedAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
            }
        }
    },
  },
});
``` #### Response

```json
{
  "paymentTermsUpdate": {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/977822362"
    },
    "userErrors": []
  }
}
``` 
*   ### paymentTermsUpdate reference

Examples
--------

Update payment terms date

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PaymentTermsUpdate(%24input%3A%20PaymentTermsUpdateInput!)%20%7B%0A%20%20paymentTermsUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20paymentTerms%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22paymentTermsId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentTerms%2F977822362%22%2C%0A%20%20%20%20%22paymentTermsAttributes%22%3A%20%7B%0A%20%20%20%20%20%20%22paymentTermsTemplateId%22%3A%20%22gid%3A%2F%2Fshopify%2FPaymentTermsTemplate%2F7%22%2C%0A%20%20%20%20%20%20%22paymentSchedules%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22dueAt%22%3A%20%222022-06-13T22%3A35%3A23.311Z%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {

 paymentTermsUpdate(input: $input) {

 paymentTerms {

 id

 }

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"paymentTermsId":"gid://shopify/PaymentTerms/977822362",

"paymentTermsAttributes":{

"paymentTermsTemplateId":"gid://shopify/PaymentTermsTemplate/7",

"paymentSchedules":[

{

"dueAt":"2022-06-13T22:35:23.311Z"

}

]

}

}

},

},

);

const data=await response.json();

```
mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
  paymentTermsUpdate(input: $input) {
    paymentTerms {
      id
    }
    userErrors {
      code
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
"query": "mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) { paymentTermsUpdate(input: $input) { paymentTerms { id } userErrors { code field message } } }",
 "variables": {
    "input": {
      "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
      "paymentTermsAttributes": {
        "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
        "paymentSchedules": [
          {
            "dueAt": "2022-06-13T22:35:23.311Z"
          }
        ]
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                "paymentSchedules": [
                    {
                        "dueAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
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
    "query": `mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
      paymentTermsUpdate(input: $input) {
        paymentTerms {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
            "paymentTermsAttributes": {
                "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
                "paymentSchedules": [
                    {
                        "dueAt": "2022-06-13T22:35:23.311Z"
                    }
                ]
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
  mutation PaymentTermsUpdate($input: PaymentTermsUpdateInput!) {
    paymentTermsUpdate(input: $input) {
      paymentTerms {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "paymentTermsId": "gid://shopify/PaymentTerms/977822362",
    "paymentTermsAttributes": {
      "paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",
      "paymentSchedules": [
        {
          "dueAt": "2022-06-13T22:35:23.311Z"
        }
      ]
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

13

›

⌄

⌄

⌄

⌄

⌄

{

"input": {

"paymentTermsId": "gid://shopify/PaymentTerms/977822362",

"paymentTermsAttributes": {

"paymentTermsTemplateId": "gid://shopify/PaymentTermsTemplate/7",

"paymentSchedules": [

{

"dueAt": "2022-06-13T22:35:23.311Z"

}

]

}

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

"paymentTermsUpdate": {

"paymentTerms": {

"id": "gid://shopify/PaymentTerms/977822362"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*