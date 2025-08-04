---
title: "webhookSubscription"
description: "Shopify GraphQL Admin API documentation for webhooksubscription"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription"
extraction_method: "jina"
sections: ['Webhooks', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webhookSubscription - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription

Markdown Content:
webhookSubscription - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription#main-content)

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
*   Common objects   
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
*   
Webhooks

    *   
Queries

        *   [webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription)
        *   [webhook Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions)
        *   [webhook Subscriptions Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount)

    *   Mutations   
    *   Objects   

*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription#top)
webhook Subscription
====================

query

Returns a webhook subscription by ID.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `WebhookSubscription` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to WebhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscription#returns-WebhookSubscription)Webhook Subscription

•[Webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API. It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic. When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination. Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a single webhook subscription's ID, topic, and endpoint

#### Query

```graphql
query {
  webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
    id
    topic
    endpoint {
      __typename
      ... on WebhookHttpEndpoint {
        callbackUrl
      }
      ... on WebhookEventBridgeEndpoint {
        arn
      }
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
"query": "query { webhookSubscription(id: \"gid://shopify/WebhookSubscription/892403750\") { id topic endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } ... on WebhookEventBridgeEndpoint { arn } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
        ... on WebhookEventBridgeEndpoint {
          arn
        }
      }
    }
  }`,
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
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
        ... on WebhookEventBridgeEndpoint {
          arn
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
        ... on WebhookEventBridgeEndpoint {
          arn
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "webhookSubscription": {
    "id": "gid://shopify/WebhookSubscription/892403750",
    "topic": "ORDERS_CANCELLED",
    "endpoint": {
      "__typename": "WebhookHttpEndpoint",
      "callbackUrl": "https://example.org/fully_loaded_1"
    }
  }
}
``` 
*   ### Get a specific webhook subscription using the node field and a GraphQL fragment

#### Query

```graphql
query {
  node(id: "gid://shopify/WebhookSubscription/892403750") {
    ... on WebhookSubscription {
      id
      createdAt
      updatedAt
      legacyResourceId
      topic
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
"query": "query { node(id: \"gid://shopify/WebhookSubscription/892403750\") { ... on WebhookSubscription { id createdAt updatedAt legacyResourceId topic } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    node(id: "gid://shopify/WebhookSubscription/892403750") {
      ... on WebhookSubscription {
        id
        createdAt
        updatedAt
        legacyResourceId
        topic
      }
    }
  }`,
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
  query {
    node(id: "gid://shopify/WebhookSubscription/892403750") {
      ... on WebhookSubscription {
        id
        createdAt
        updatedAt
        legacyResourceId
        topic
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    node(id: "gid://shopify/WebhookSubscription/892403750") {
      ... on WebhookSubscription {
        id
        createdAt
        updatedAt
        legacyResourceId
        topic
      }
    }
  }`,
});
``` #### Response

```json
{
  "node": {
    "id": "gid://shopify/WebhookSubscription/892403750",
    "createdAt": "2021-12-01T10:23:43Z",
    "updatedAt": "2021-12-01T10:23:43Z",
    "legacyResourceId": "892403750",
    "topic": "ORDERS_CANCELLED"
  }
}
``` 
*   ### Get the dates a webhook subscription was created and updated

#### Query

```graphql
query {
  webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
    createdAt
    updatedAt
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { webhookSubscription(id: \"gid://shopify/WebhookSubscription/892403750\") { createdAt updatedAt } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      createdAt
      updatedAt
    }
  }`,
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
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      createdAt
      updatedAt
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      createdAt
      updatedAt
    }
  }`,
});
``` #### Response

```json
{
  "webhookSubscription": {
    "createdAt": "2021-12-01T10:23:43Z",
    "updatedAt": "2021-12-01T10:23:43Z"
  }
}
``` 
*   ### Get the topic of a webhook subscription

#### Query

```graphql
query {
  webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
    topic
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { webhookSubscription(id: \"gid://shopify/WebhookSubscription/892403750\") { topic } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      topic
    }
  }`,
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
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      topic
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      topic
    }
  }`,
});
``` #### Response

```json
{
  "webhookSubscription": {
    "topic": "ORDERS_CANCELLED"
  }
}
``` 

Examples
--------

Get a single webhook subscription's ID, topic, and endpoint

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20webhookSubscription(id%3A%20%22gid%3A%2F%2Fshopify%2FWebhookSubscription%2F892403750%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20topic%0A%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20...%20on%20WebhookHttpEndpoint%20%7B%0A%20%20%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20...%20on%20WebhookEventBridgeEndpoint%20%7B%0A%20%20%20%20%20%20%20%20arn%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {

 id

 topic

 endpoint {

 __typename

 ... on WebhookHttpEndpoint {

 callbackUrl

 }

 ... on WebhookEventBridgeEndpoint {

 arn

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
    id
    topic
    endpoint {
      __typename
      ... on WebhookHttpEndpoint {
        callbackUrl
      }
      ... on WebhookEventBridgeEndpoint {
        arn
      }
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
"query": "query { webhookSubscription(id: \"gid://shopify/WebhookSubscription/892403750\") { id topic endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } ... on WebhookEventBridgeEndpoint { arn } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
        ... on WebhookEventBridgeEndpoint {
          arn
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
        ... on WebhookEventBridgeEndpoint {
          arn
        }
      }
    }
  }`,
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
  query {
    webhookSubscription(id: "gid://shopify/WebhookSubscription/892403750") {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
        ... on WebhookEventBridgeEndpoint {
          arn
        }
      }
    }
  }
QUERY

response = client.query(query: query)
```

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

"webhookSubscription": {

"id": "gid://shopify/WebhookSubscription/892403750",

"topic": "ORDERS_CANCELLED",

"endpoint": {

"__typename": "WebhookHttpEndpoint",

"callbackUrl": "https://example.org/fully_loaded_1"

}

}

}


---
*Content truncated at "Updates" section*