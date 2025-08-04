---
title: "appSubscriptionLineItemUpdate"
description: "Shopify GraphQL Admin API documentation for appsubscriptionlineitemupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate"
extraction_method: "jina"
sections: ['Billing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appSubscriptionLineItemUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate

Markdown Content:
appSubscriptionLineItemUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#main-content)

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

[Anchor to appSubscriptionLineItemUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#top)
app Subscription Line Item Update
=================================

mutation

Updates the capped amount on the usage pricing plan of an app subscription line item.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#arguments)
Arguments
---------

[Anchor to cappedAmount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#arguments-cappedAmount)capped Amount

•[Money Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

required

The new maximum amount of usage charges that can be incurred within a subscription billing interval.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the app subscription line item to be updated.

* * *

Was this section helpful?

Yes No

[Anchor to AppSubscriptionLineItemUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#returns)App Subscription Line Item Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to appSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#returns-appSubscription)app Subscription

•[App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

The updated app subscription.

Show fields

[Anchor to confirmationUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#returns-confirmationUrl)confirmation Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL where the merchant approves or declines the updated app subscription line item.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Updates the capped amount of a recurring application charge

#### Description

You can modify the capped amount on a usage pricing plan.

#### Query

```graphql
mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
  appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
    userErrors {
      field
      message
    }
    confirmationUrl
    appSubscription {
      id
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
  "cappedAmount": {
    "amount": 100,
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
"query": "mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) { appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) { userErrors { field message } confirmationUrl appSubscription { id } } }",
 "variables": {
    "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
    "cappedAmount": {
      "amount": 100,
      "currencyCode": "USD"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
    appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
        "cappedAmount": {
            "amount": 100,
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
  mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
    appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
  "cappedAmount": {
    "amount": 100,
    "currencyCode": "USD"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
      appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
        "cappedAmount": {
            "amount": 100,
            "currencyCode": "USD"
        }
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionLineItemUpdate": {
    "userErrors": [],
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/193172482/1029266946/RecurringApplicationCharge/confirm_update_capped_amount?signature=BAh7BzoHaWRpBAJeWT06EmF1dG9fYWN0aXZhdGVG--5d28879b4ac4355216b7e6d2f861f9c245272daa",
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266946"
    }
  }
}
``` 
*   ### appSubscriptionLineItemUpdate reference

Examples
--------

Updates the capped amount of a recurring application charge

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20appSubscriptionLineItemUpdate(%24cappedAmount%3A%20MoneyInput!%2C%20%24id%3A%20ID!)%20%7B%0A%20%20appSubscriptionLineItemUpdate(cappedAmount%3A%20%24cappedAmount%2C%20id%3A%20%24id)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20confirmationUrl%0A%20%20%20%20appSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FAppSubscriptionLineItem%2F1029266946%3Fv%3D1%26index%3D1%22%2C%0A%20%20%22cappedAmount%22%3A%20%7B%0A%20%20%20%20%22amount%22%3A%20100%2C%0A%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {

 appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {

 userErrors {

 field

 message

 }

 confirmationUrl

 appSubscription {

 id

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",

"cappedAmount":{

"amount":100,

"currencyCode":"USD"

}

},

},

);

const data=await response.json();

```
mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
  appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
    userErrors {
      field
      message
    }
    confirmationUrl
    appSubscription {
      id
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
"query": "mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) { appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) { userErrors { field message } confirmationUrl appSubscription { id } } }",
 "variables": {
    "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
    "cappedAmount": {
      "amount": 100,
      "currencyCode": "USD"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
    appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
        "cappedAmount": {
            "amount": 100,
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
    "query": `mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
      appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
        "cappedAmount": {
            "amount": 100,
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
  mutation appSubscriptionLineItemUpdate($cappedAmount: MoneyInput!, $id: ID!) {
    appSubscriptionLineItemUpdate(cappedAmount: $cappedAmount, id: $id) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",
  "cappedAmount": {
    "amount": 100,
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

›

⌄

⌄

{

"id": "gid://shopify/AppSubscriptionLineItem/1029266946?v=1&index=1",

"cappedAmount": {

"amount": 100,

"currencyCode": "USD"

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

9

›

⌄

⌄

⌄

{

"appSubscriptionLineItemUpdate": {

"userErrors": [],

"confirmationUrl": "https://billingshop.myshopify.com/admin/charges/193172482/1029266946/RecurringApplicationCharge/confirm_update_capped_amount?signature=BAh7BzoHaWRpBAJeWT06EmF1dG9fYWN0aXZhdGVG--5d28879b4ac4355216b7e6d2f861f9c245272daa",

"appSubscription": {

"id": "gid://shopify/AppSubscription/1029266946"

}

}

}


---
*Content truncated at "Updates" section*