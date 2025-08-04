---
title: "appSubscriptionTrialExtend"
description: "Shopify GraphQL Admin API documentation for appsubscriptiontrialextend"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend"
extraction_method: "jina"
sections: ['Billing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appSubscriptionTrialExtend - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend

Markdown Content:
appSubscriptionTrialExtend - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#main-content)

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

[Anchor to appSubscriptionTrialExtend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#top)
app Subscription Trial Extend
=============================

mutation

Requires This must be a third party developed application that you can access.

Extends the trial of an app subscription.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#arguments)
Arguments
---------

[Anchor to days](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#arguments-days)days

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

required

The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the app subscription to extend the trial for.

* * *

Was this section helpful?

Yes No

[Anchor to AppSubscriptionTrialExtendPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#returns)App Subscription Trial Extend Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to appSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#returns-appSubscription)app Subscription

•[App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

The app subscription that had its trial extended.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend#returns-userErrors)user Errors

•[[App Subscription Trial Extend User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionTrialExtendUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Extend an app subscription for a shop

#### Query

```graphql
mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
  appSubscriptionTrialExtend(id: $id, days: $days) {
    userErrors {
      field
      message
      code
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
  "id": "gid://shopify/AppSubscription/443388186",
  "days": 10
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) { appSubscriptionTrialExtend(id: $id, days: $days) { userErrors { field message code } appSubscription { id status } } }",
 "variables": {
    "id": "gid://shopify/AppSubscription/443388186",
    "days": 10
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
    appSubscriptionTrialExtend(id: $id, days: $days) {
      userErrors {
        field
        message
        code
      }
      appSubscription {
        id
        status
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscription/443388186",
        "days": 10
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
  mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
    appSubscriptionTrialExtend(id: $id, days: $days) {
      userErrors {
        field
        message
        code
      }
      appSubscription {
        id
        status
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscription/443388186",
  "days": 10
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
      appSubscriptionTrialExtend(id: $id, days: $days) {
        userErrors {
          field
          message
          code
        }
        appSubscription {
          id
          status
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscription/443388186",
        "days": 10
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionTrialExtend": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/443388186",
      "status": "ACTIVE"
    }
  }
}
``` 
*   ### appSubscriptionTrialExtend reference

Examples
--------

Extend an app subscription for a shop

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20AppSubscriptionTrialExtend(%24id%3A%20ID!%2C%20%24days%3A%20Int!)%20%7B%0A%20%20appSubscriptionTrialExtend(id%3A%20%24id%2C%20days%3A%20%24days)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20appSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FAppSubscription%2F443388186%22%2C%0A%20%20%22days%22%3A%2010%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {

 appSubscriptionTrialExtend(id: $id, days: $days) {

 userErrors {

 field

 message

 code

 }

 appSubscription {

 id

 status

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/AppSubscription/443388186",

"days":10

},

},

);

const data=await response.json();

```
mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
  appSubscriptionTrialExtend(id: $id, days: $days) {
    userErrors {
      field
      message
      code
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
"query": "mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) { appSubscriptionTrialExtend(id: $id, days: $days) { userErrors { field message code } appSubscription { id status } } }",
 "variables": {
    "id": "gid://shopify/AppSubscription/443388186",
    "days": 10
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
    appSubscriptionTrialExtend(id: $id, days: $days) {
      userErrors {
        field
        message
        code
      }
      appSubscription {
        id
        status
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/AppSubscription/443388186",
        "days": 10
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
      appSubscriptionTrialExtend(id: $id, days: $days) {
        userErrors {
          field
          message
          code
        }
        appSubscription {
          id
          status
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/AppSubscription/443388186",
        "days": 10
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
  mutation AppSubscriptionTrialExtend($id: ID!, $days: Int!) {
    appSubscriptionTrialExtend(id: $id, days: $days) {
      userErrors {
        field
        message
        code
      }
      appSubscription {
        id
        status
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/AppSubscription/443388186",
  "days": 10
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

"id": "gid://shopify/AppSubscription/443388186",

"days": 10

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

"appSubscriptionTrialExtend": {

"userErrors": [],

"appSubscription": {

"id": "gid://shopify/AppSubscription/443388186",

"status": "ACTIVE"

}

}

}


---
*Content truncated at "Updates" section*