---
title: "webhookSubscriptionCreate"
description: "Shopify GraphQL Admin API documentation for webhooksubscriptioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate"
extraction_method: "jina"
sections: ['Webhooks', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webhookSubscriptionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate

Markdown Content:
webhookSubscriptionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#main-content)

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

[Anchor to webhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#top)
webhook Subscription Create
===========================

mutation

Creates a new webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#arguments)
Arguments
---------

[Anchor to topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#arguments-topic)topic

•[Webhook Subscription Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

required

The type of event that triggers the webhook.

Show enum values

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#arguments-webhookSubscription)webhook Subscription

•[Webhook Subscription Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

required

Specifies the input fields for a webhook subscription.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to WebhookSubscriptionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#returns)Webhook Subscription Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate#returns-webhookSubscription)webhook Subscription

•[Webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

The webhook subscription that was created.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a METAOBJECTS_CREATE webhook subscription for lookbook metaobjects

#### Query

```graphql
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      filter
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
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
  "topic": "METAOBJECTS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "filter": "type:lookbook"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) { webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic filter endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } } } userErrors { field message } } }",
 "variables": {
    "topic": "METAOBJECTS_CREATE",
    "webhookSubscription": {
      "callbackUrl": "https://example.org/endpoint",
      "filter": "type:lookbook"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
        "topic": "METAOBJECTS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "filter": "type:lookbook"
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
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
  "topic": "METAOBJECTS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "filter": "type:lookbook"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
      webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          filter
          endpoint {
            __typename
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "topic": "METAOBJECTS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "filter": "type:lookbook"
        }
    },
  },
});
``` #### Response

```json
{
  "webhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934630",
      "topic": "METAOBJECTS_CREATE",
      "filter": "type:lookbook",
      "endpoint": {
        "__typename": "WebhookHttpEndpoint",
        "callbackUrl": "https://example.org/endpoint"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an HTTP webhook subscription for APP_UNINSTALLED events

#### Query

```graphql
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
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
  "topic": "APP_UNINSTALLED",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) { webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } } } userErrors { field message } } }",
 "variables": {
    "topic": "APP_UNINSTALLED",
    "webhookSubscription": {
      "callbackUrl": "https://example.org/endpoint"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
        "topic": "APP_UNINSTALLED",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint"
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
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
  "topic": "APP_UNINSTALLED",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
      webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          endpoint {
            __typename
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "topic": "APP_UNINSTALLED",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint"
        }
    },
  },
});
``` #### Response

```json
{
  "webhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934631",
      "topic": "APP_UNINSTALLED",
      "endpoint": {
        "__typename": "WebhookHttpEndpoint",
        "callbackUrl": "https://example.org/endpoint"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an ORDERS_CREATE webhook subscription that includes metafields during serialization

#### Query

```graphql
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      metafieldNamespaces
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
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
  "topic": "ORDERS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "metafieldNamespaces": [
      "MY_NAMESPACE",
      "ANOTHER_NAMESPACE"
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) { webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic metafieldNamespaces endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "callbackUrl": "https://example.org/endpoint",
      "metafieldNamespaces": [
        "MY_NAMESPACE",
        "ANOTHER_NAMESPACE"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
        "topic": "ORDERS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "metafieldNamespaces": [
                "MY_NAMESPACE",
                "ANOTHER_NAMESPACE"
            ]
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
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
  "topic": "ORDERS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "metafieldNamespaces": [
      "MY_NAMESPACE",
      "ANOTHER_NAMESPACE"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
      webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          metafieldNamespaces
          endpoint {
            __typename
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "topic": "ORDERS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "metafieldNamespaces": [
                "MY_NAMESPACE",
                "ANOTHER_NAMESPACE"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "webhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934625",
      "topic": "ORDERS_CREATE",
      "metafieldNamespaces": [
        "MY_NAMESPACE",
        "ANOTHER_NAMESPACE"
      ],
      "endpoint": {
        "__typename": "WebhookHttpEndpoint",
        "callbackUrl": "https://example.org/endpoint"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an ORDERS_CREATE webhook subscription with fewer resource fields during serialization

#### Query

```graphql
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      includeFields
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
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
  "topic": "ORDERS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "includeFields": [
      "id",
      "note"
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) { webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic includeFields endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "callbackUrl": "https://example.org/endpoint",
      "includeFields": [
        "id",
        "note"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        includeFields
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
        "topic": "ORDERS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "includeFields": [
                "id",
                "note"
            ]
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
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        includeFields
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
  "topic": "ORDERS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "includeFields": [
      "id",
      "note"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
      webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          includeFields
          endpoint {
            __typename
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "topic": "ORDERS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "includeFields": [
                "id",
                "note"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "webhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934627",
      "topic": "ORDERS_CREATE",
      "includeFields": [
        "id",
        "note"
      ],
      "endpoint": {
        "__typename": "WebhookHttpEndpoint",
        "callbackUrl": "https://example.org/endpoint"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### webhookSubscriptionCreate reference

Examples
--------

Create a METAOBJECTS_CREATE webhook subscription for lookbook metaobjects

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20webhookSubscriptionCreate(%24topic%3A%20WebhookSubscriptionTopic!%2C%20%24webhookSubscription%3A%20WebhookSubscriptionInput!)%20%7B%0A%20%20webhookSubscriptionCreate(topic%3A%20%24topic%2C%20webhookSubscription%3A%20%24webhookSubscription)%20%7B%0A%20%20%20%20webhookSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20topic%0A%20%20%20%20%20%20filter%0A%20%20%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20...%20on%20WebhookHttpEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22topic%22%3A%20%22METAOBJECTS_CREATE%22%2C%0A%20%20%22webhookSubscription%22%3A%20%7B%0A%20%20%20%20%22callbackUrl%22%3A%20%22https%3A%2F%2Fexample.org%2Fendpoint%22%2C%0A%20%20%20%20%22filter%22%3A%20%22type%3Alookbook%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {

 webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {

 webhookSubscription {

 id

 topic

 filter

 endpoint {

 __typename

 ... on WebhookHttpEndpoint {

 callbackUrl

 }

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"topic":"METAOBJECTS_CREATE",

"webhookSubscription":{

"callbackUrl":"https://example.org/endpoint",

"filter":"type:lookbook"

}

},

},

);

const data=await response.json();

```
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      filter
      endpoint {
        __typename
        ... on WebhookHttpEndpoint {
          callbackUrl
        }
      }
    }
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
"query": "mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) { webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic filter endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } } } userErrors { field message } } }",
 "variables": {
    "topic": "METAOBJECTS_CREATE",
    "webhookSubscription": {
      "callbackUrl": "https://example.org/endpoint",
      "filter": "type:lookbook"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
        "topic": "METAOBJECTS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "filter": "type:lookbook"
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
    "query": `mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
      webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          filter
          endpoint {
            __typename
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "topic": "METAOBJECTS_CREATE",
        "webhookSubscription": {
            "callbackUrl": "https://example.org/endpoint",
            "filter": "type:lookbook"
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
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        endpoint {
          __typename
          ... on WebhookHttpEndpoint {
            callbackUrl
          }
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
  "topic": "METAOBJECTS_CREATE",
  "webhookSubscription": {
    "callbackUrl": "https://example.org/endpoint",
    "filter": "type:lookbook"
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

"topic": "METAOBJECTS_CREATE",

"webhookSubscription": {

"callbackUrl": "https://example.org/endpoint",

"filter": "type:lookbook"

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

›

⌄

⌄

⌄

⌄

{

"webhookSubscriptionCreate": {

"webhookSubscription": {

"id": "gid://shopify/WebhookSubscription/8589934630",

"topic": "METAOBJECTS_CREATE",

"filter": "type:lookbook",

"endpoint": {

"__typename": "WebhookHttpEndpoint",

"callbackUrl": "https://example.org/endpoint"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*