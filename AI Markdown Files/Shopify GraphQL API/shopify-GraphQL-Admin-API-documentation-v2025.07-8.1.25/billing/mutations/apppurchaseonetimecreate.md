---
title: "appPurchaseOneTimeCreate"
description: "Shopify GraphQL Admin API documentation for apppurchaseonetimecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate"
extraction_method: "jina"
sections: ['Billing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appPurchaseOneTimeCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate

Markdown Content:
appPurchaseOneTimeCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#main-content)

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
*   
Billing

    *   Queries   
    *   
Mutations

        *   [app Purchase One Time Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate)
        *   [app Subscription Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel)
        *   [app Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate)
        *   [app Subscription Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate)
        *   [app Subscription Trial Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend)
        *   [app Usage Record Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appusagerecordcreate)

    *   Objects   

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

[Anchor to appPurchaseOneTimeCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#top)
app Purchase One Time Create
============================

mutation

Charges a shop for features or services one time. This type of charge is recommended for apps that aren't billed on a recurring basis. Test and demo shops aren't charged.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#arguments)
Arguments
---------

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#arguments-name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The name of the one-time purchase from the app.

[Anchor to price](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#arguments-price)price

•[Money Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

required

The amount to be charged to the store for the app one-time purchase.

Show input fields

[Anchor to returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#arguments-returnUrl)return Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

required

The URL where the merchant is redirected after approving the app one-time purchase.

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#arguments-test)test

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether the app one-time purchase is a test transaction.

* * *

Was this section helpful?

Yes No

[Anchor to AppPurchaseOneTimeCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#returns)App Purchase One Time Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to appPurchaseOneTime](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#returns-appPurchaseOneTime)app Purchase One Time

•[App Purchase One Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

The newly created app one-time purchase.

Show fields

[Anchor to confirmationUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#returns-confirmationUrl)confirmation Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL that the merchant can access to approve or decline the newly created app one-time purchase.

If the merchant declines, then the merchant is redirected to the app and receives a notification message stating that the charge was declined. If the merchant approves and they're successfully invoiced, then the state of the charge changes from `pending` to `active`.

You get paid after the charge is activated.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Creates an application charge

#### Description

Summarizes the service rendered in the `name` field.

#### Query

```graphql
mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
  appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
    userErrors {
      field
      message
    }
    appPurchaseOneTime {
      createdAt
      id
    }
    confirmationUrl
  }
}
``` #### Variables

```json
{
  "name": "1000 imported orders.",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "price": {
    "amount": 10,
    "currencyCode": "USD"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) { appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) { userErrors { field message } appPurchaseOneTime { createdAt id } confirmationUrl } }",
 "variables": {
    "name": "1000 imported orders.",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "price": {
      "amount": 10,
      "currencyCode": "USD"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
    appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
      userErrors {
        field
        message
      }
      appPurchaseOneTime {
        createdAt
        id
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "1000 imported orders.",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "price": {
            "amount": 10,
            "currencyCode": "USD"
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
  mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
    appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
      userErrors {
        field
        message
      }
      appPurchaseOneTime {
        createdAt
        id
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "1000 imported orders.",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "price": {
    "amount": 10,
    "currencyCode": "USD"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
      appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
        userErrors {
          field
          message
        }
        appPurchaseOneTime {
          createdAt
          id
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "1000 imported orders.",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "price": {
            "amount": 10,
            "currencyCode": "USD"
        }
    },
  },
});
``` #### Response

```json
{
  "appPurchaseOneTimeCreate": {
    "userErrors": [],
    "appPurchaseOneTime": {
      "createdAt": "2024-11-21T22:47:04Z",
      "id": "gid://shopify/AppPurchaseOneTime/1017262352"
    },
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/193172482/1017262352/ApplicationCharge/confirm_application_charge?signature=BAh7BzoHaWRpBBAxojw6EmF1dG9fYWN0aXZhdGVU--a03eedf9ef12d714906af085ebc2aa3d97aa9466"
  }
}
``` 
*   ### appPurchaseOneTimeCreate reference

Examples
--------

Creates an application charge

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20AppPurchaseOneTimeCreate(%24name%3A%20String!%2C%20%24price%3A%20MoneyInput!%2C%20%24returnUrl%3A%20URL!)%20%7B%0A%20%20appPurchaseOneTimeCreate(name%3A%20%24name%2C%20returnUrl%3A%20%24returnUrl%2C%20price%3A%20%24price)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20appPurchaseOneTime%20%7B%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20confirmationUrl%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22name%22%3A%20%221000%20imported%20orders.%22%2C%0A%20%20%22returnUrl%22%3A%20%22http%3A%2F%2Fsuper-duper.shopifyapps.com%2F%22%2C%0A%20%20%22price%22%3A%20%7B%0A%20%20%20%20%22amount%22%3A%2010%2C%0A%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {

 appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {

 userErrors {

 field

 message

 }

 appPurchaseOneTime {

 createdAt

 id

 }

 confirmationUrl

 }

 }`,

{

variables:{

"name":"1000 imported orders.",

"returnUrl":"http://super-duper.shopifyapps.com/",

"price":{

"amount":10,

"currencyCode":"USD"

}

},

},

);

const data=await response.json();

```
mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
  appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
    userErrors {
      field
      message
    }
    appPurchaseOneTime {
      createdAt
      id
    }
    confirmationUrl
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) { appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) { userErrors { field message } appPurchaseOneTime { createdAt id } confirmationUrl } }",
 "variables": {
    "name": "1000 imported orders.",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "price": {
      "amount": 10,
      "currencyCode": "USD"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
    appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
      userErrors {
        field
        message
      }
      appPurchaseOneTime {
        createdAt
        id
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "1000 imported orders.",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "price": {
            "amount": 10,
            "currencyCode": "USD"
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
    "query": `mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
      appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
        userErrors {
          field
          message
        }
        appPurchaseOneTime {
          createdAt
          id
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "1000 imported orders.",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "price": {
            "amount": 10,
            "currencyCode": "USD"
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
  mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
    appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
      userErrors {
        field
        message
      }
      appPurchaseOneTime {
        createdAt
        id
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "1000 imported orders.",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "price": {
    "amount": 10,
    "currencyCode": "USD"
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

›

⌄

⌄

{

"name": "1000 imported orders.",

"returnUrl": "http://super-duper.shopifyapps.com/",

"price": {

"amount": 10,

"currencyCode": "USD"

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

›

⌄

⌄

⌄

{

"appPurchaseOneTimeCreate": {

"userErrors": [],

"appPurchaseOneTime": {

"createdAt": "2024-11-21T22:47:04Z",

"id": "gid://shopify/AppPurchaseOneTime/1017262352"

},

"confirmationUrl": "https://billingshop.myshopify.com/admin/charges/193172482/1017262352/ApplicationCharge/confirm_application_charge?signature=BAh7BzoHaWRpBBAxojw6EmF1dG9fYWN0aXZhdGVU--a03eedf9ef12d714906af085ebc2aa3d97aa9466"

}

}


---
*Content truncated at "Updates" section*