---
title: "webhookSubscriptionDelete"
description: "Shopify GraphQL Admin API documentation for webhooksubscriptiondelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete"
extraction_method: "jina"
sections: ['Webhooks', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webhookSubscriptionDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete

Markdown Content:
webhookSubscriptionDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#main-content)

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
*   
Webhooks

    *   Queries   
    *   
Mutations

        *   [event Bridge Webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate)
        *   [event Bridge Webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptionupdate)
        *   [pub Sub Webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate)
        *   [pub Sub Webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate)
        *   [webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate)
        *   [webhook Subscription Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete)
        *   [webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptionupdate)

    *   Objects   

*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to webhookSubscriptionDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#top)
webhook Subscription Delete
===========================

mutation

Deletes a webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the webhook subscription to delete.

* * *

Was this section helpful?

Yes No

[Anchor to WebhookSubscriptionDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#returns)Webhook Subscription Delete Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedWebhookSubscriptionId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#returns-deletedWebhookSubscriptionId)deleted Webhook Subscription Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted webhook subscription.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptiondelete#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Remove an existing Webhook

#### Query

```graphql
mutation webhookSubscriptionDelete($id: ID!) {
  webhookSubscriptionDelete(id: $id) {
    userErrors {
      field
      message
    }
    deletedWebhookSubscriptionId
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/WebhookSubscription/525699895"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webhookSubscriptionDelete($id: ID!) { webhookSubscriptionDelete(id: $id) { userErrors { field message } deletedWebhookSubscriptionId } }",
 "variables": {
    "id": "gid://shopify/WebhookSubscription/525699895"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionDelete($id: ID!) {
    webhookSubscriptionDelete(id: $id) {
      userErrors {
        field
        message
      }
      deletedWebhookSubscriptionId
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/WebhookSubscription/525699895"
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
  mutation webhookSubscriptionDelete($id: ID!) {
    webhookSubscriptionDelete(id: $id) {
      userErrors {
        field
        message
      }
      deletedWebhookSubscriptionId
    }
  }
QUERY

variables = {
  "id": "gid://shopify/WebhookSubscription/525699895"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webhookSubscriptionDelete($id: ID!) {
      webhookSubscriptionDelete(id: $id) {
        userErrors {
          field
          message
        }
        deletedWebhookSubscriptionId
      }
    }`,
    "variables": {
        "id": "gid://shopify/WebhookSubscription/525699895"
    },
  },
});
``` #### Response

```json
{
  "webhookSubscriptionDelete": {
    "userErrors": [],
    "deletedWebhookSubscriptionId": "gid://shopify/WebhookSubscription/525699895"
  }
}
``` 
*   ### webhookSubscriptionDelete reference

Examples
--------

Remove an existing Webhook

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20webhookSubscriptionDelete(%24id%3A%20ID!)%20%7B%0A%20%20webhookSubscriptionDelete(id%3A%20%24id)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20deletedWebhookSubscriptionId%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FWebhookSubscription%2F525699895%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation webhookSubscriptionDelete($id: ID!) {

 webhookSubscriptionDelete(id: $id) {

 userErrors {

 field

 message

 }

 deletedWebhookSubscriptionId

 }

 }`,

{

variables:{

"id":"gid://shopify/WebhookSubscription/525699895"

},

},

);

const data=await response.json();

```
mutation webhookSubscriptionDelete($id: ID!) {
  webhookSubscriptionDelete(id: $id) {
    userErrors {
      field
      message
    }
    deletedWebhookSubscriptionId
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webhookSubscriptionDelete($id: ID!) { webhookSubscriptionDelete(id: $id) { userErrors { field message } deletedWebhookSubscriptionId } }",
 "variables": {
    "id": "gid://shopify/WebhookSubscription/525699895"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionDelete($id: ID!) {
    webhookSubscriptionDelete(id: $id) {
      userErrors {
        field
        message
      }
      deletedWebhookSubscriptionId
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/WebhookSubscription/525699895"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webhookSubscriptionDelete($id: ID!) {
      webhookSubscriptionDelete(id: $id) {
        userErrors {
          field
          message
        }
        deletedWebhookSubscriptionId
      }
    }`,
    "variables": {
        "id": "gid://shopify/WebhookSubscription/525699895"
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
  mutation webhookSubscriptionDelete($id: ID!) {
    webhookSubscriptionDelete(id: $id) {
      userErrors {
        field
        message
      }
      deletedWebhookSubscriptionId
    }
  }
QUERY

variables = {
  "id": "gid://shopify/WebhookSubscription/525699895"
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

"id": "gid://shopify/WebhookSubscription/525699895"

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

"webhookSubscriptionDelete": {

"userErrors": [],

"deletedWebhookSubscriptionId": "gid://shopify/WebhookSubscription/525699895"

}

}


---
*Content truncated at "Updates" section*