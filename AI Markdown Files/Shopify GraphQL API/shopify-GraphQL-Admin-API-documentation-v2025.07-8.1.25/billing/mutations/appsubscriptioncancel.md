---
title: "appSubscriptionCancel"
description: "Shopify GraphQL Admin API documentation for appsubscriptioncancel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel"
extraction_method: "jina"
sections: ['Billing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appSubscriptionCancel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel

Markdown Content:
appSubscriptionCancel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#main-content)

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

[Anchor to appSubscriptionCancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#top)
app Subscription Cancel
=======================

mutation

Cancels an app subscription on a store.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the app subscription to be cancelled.

[Anchor to prorate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#arguments-prorate)prorate

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether to issue prorated credits for the unused portion of the app subscription. There will be a corresponding deduction (based on revenue share) to your Partner account. For example, if a $10.00 app subscription (with 0% revenue share) is cancelled and prorated half way through the billing cycle, then the merchant will be credited $5.00 and that amount will be deducted from your Partner account.

* * *

Was this section helpful?

Yes No

[Anchor to AppSubscriptionCancelPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#returns)App Subscription Cancel Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to appSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#returns-appSubscription)app Subscription

•[App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

The cancelled app subscription.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Cancel an app subscription on a shop and issue prorated credits

#### Query

```graphql
mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
  appSubscriptionCancel(id: $id, prorate: $prorate) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
      status
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/AppSubscription/1029266957",
  "prorate": true
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) { appSubscriptionCancel(id: $id, prorate: $prorate) { userErrors { field message } appSubscription { id status } } }",
 "variables": {
    "id": "gid://shopify/AppSubscription/1029266957",
    "prorate": true
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscription/1029266957",
        "prorate": true
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
  mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscription/1029266957",
  "prorate": true
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
      appSubscriptionCancel(id: $id, prorate: $prorate) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
          status
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscription/1029266957",
        "prorate": true
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCancel": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266957",
      "status": "CANCELLED"
    }
  }
}
``` 
*   ### Cancels a recurring application charge

#### Query

```graphql
mutation AppSubscriptionCancel($id: ID!) {
  appSubscriptionCancel(id: $id) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
      status
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/AppSubscription/1029266958"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCancel($id: ID!) { appSubscriptionCancel(id: $id) { userErrors { field message } appSubscription { id status } } }",
 "variables": {
    "id": "gid://shopify/AppSubscription/1029266958"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCancel($id: ID!) {
    appSubscriptionCancel(id: $id) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscription/1029266958"
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
  mutation AppSubscriptionCancel($id: ID!) {
    appSubscriptionCancel(id: $id) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscription/1029266958"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCancel($id: ID!) {
      appSubscriptionCancel(id: $id) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
          status
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscription/1029266958"
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCancel": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266958",
      "status": "CANCELLED"
    }
  }
}
``` 
*   ### appSubscriptionCancel reference

Examples
--------

Cancel an app subscription on a shop and issue prorated credits

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20AppSubscriptionCancel(%24id%3A%20ID!%2C%20%24prorate%3A%20Boolean)%20%7B%0A%20%20appSubscriptionCancel(id%3A%20%24id%2C%20prorate%3A%20%24prorate)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20appSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FAppSubscription%2F1029266957%22%2C%0A%20%20%22prorate%22%3A%20true%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {

 appSubscriptionCancel(id: $id, prorate: $prorate) {

 userErrors {

 field

 message

 }

 appSubscription {

 id

 status

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/AppSubscription/1029266957",

"prorate":true

},

},

);

const data=await response.json();

```
mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
  appSubscriptionCancel(id: $id, prorate: $prorate) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
      status
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
"query": "mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) { appSubscriptionCancel(id: $id, prorate: $prorate) { userErrors { field message } appSubscription { id status } } }",
 "variables": {
    "id": "gid://shopify/AppSubscription/1029266957",
    "prorate": true
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscription/1029266957",
        "prorate": true
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
      appSubscriptionCancel(id: $id, prorate: $prorate) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
          status
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscription/1029266957",
        "prorate": true
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
  mutation AppSubscriptionCancel($id: ID!, $prorate: Boolean) {
    appSubscriptionCancel(id: $id, prorate: $prorate) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscription/1029266957",
  "prorate": true
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

›

⌄

{

"id": "gid://shopify/AppSubscription/1029266957",

"prorate": true

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

"appSubscriptionCancel": {

"userErrors": [],

"appSubscription": {

"id": "gid://shopify/AppSubscription/1029266957",

"status": "CANCELLED"

}

}

}


---
*Content truncated at "Updates" section*