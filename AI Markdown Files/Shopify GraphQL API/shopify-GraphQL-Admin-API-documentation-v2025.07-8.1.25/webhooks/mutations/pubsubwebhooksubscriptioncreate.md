---
title: "pubSubWebhookSubscriptionCreate"
description: "Shopify GraphQL Admin API documentation for pubsubwebhooksubscriptioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate"
extraction_method: "jina"
sections: ['Webhooks', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: pubSubWebhookSubscriptionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate

Markdown Content:
pubSubWebhookSubscriptionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#main-content)

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

[Anchor to pubSubWebhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#top)
pub Sub Webhook Subscription Create
===================================

mutation

Deprecated.Use [webhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate) instead.

Creates a new Google Cloud Pub/Sub webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#arguments)
Arguments
---------

[Anchor to topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#arguments-topic)topic

•[Webhook Subscription Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

required

The type of event that triggers the webhook.

Show enum values

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#arguments-webhookSubscription)webhook Subscription

•[Pub Sub Webhook Subscription Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

required

Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PubSubWebhookSubscriptionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#returns)Pub Sub Webhook Subscription Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#returns-userErrors)user Errors

•[[Pub Sub Webhook Subscription Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptioncreate#returns-webhookSubscription)webhook Subscription

•[Webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

The webhook subscription that was created.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a Google Cloud Pub/Sub webhook subscription for ORDERS_CREATE events

#### Query

```graphql
mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      endpoint {
        __typename
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format endpoint { __typename ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "pubSubProject": "my-gcp-project",
      "pubSubTopic": "my-gcp-topic",
      "format": "JSON"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON"
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          endpoint {
            __typename
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON"
        }
    },
  },
});
``` #### Response

```json
{
  "pubSubWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934664",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "endpoint": {
        "__typename": "WebhookPubSubEndpoint",
        "pubSubProject": "my-gcp-project",
        "pubSubTopic": "my-gcp-topic"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a METAOBJECTS_CREATE Pub/Sub webhook subscription for lookbook metaobjects

#### Query

```graphql
mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      filter
      format
      endpoint {
        __typename
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON",
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
"query": "mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic filter format endpoint { __typename ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } userErrors { field message } } }",
 "variables": {
    "topic": "METAOBJECTS_CREATE",
    "webhookSubscription": {
      "pubSubProject": "my-gcp-project",
      "pubSubTopic": "my-gcp-topic",
      "format": "JSON",
      "filter": "type:lookbook"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        format
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON",
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        format
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON",
    "filter": "type:lookbook"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          filter
          format
          endpoint {
            __typename
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON",
            "filter": "type:lookbook"
        }
    },
  },
});
``` #### Response

```json
{
  "pubSubWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934655",
      "topic": "METAOBJECTS_CREATE",
      "filter": "type:lookbook",
      "format": "JSON",
      "endpoint": {
        "__typename": "WebhookPubSubEndpoint",
        "pubSubProject": "my-gcp-project",
        "pubSubTopic": "my-gcp-topic"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an ORDERS_CREATE Pub/Sub webhook subscription that includes metafields during serialization

#### Query

```graphql
mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      metafieldNamespaces
      endpoint {
        __typename
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON",
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
"query": "mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format metafieldNamespaces endpoint { __typename ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "pubSubProject": "my-gcp-project",
      "pubSubTopic": "my-gcp-topic",
      "format": "JSON",
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON",
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON",
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
    "query": `mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          metafieldNamespaces
          endpoint {
            __typename
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON",
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
  "pubSubWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934658",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "metafieldNamespaces": [
        "MY_NAMESPACE",
        "ANOTHER_NAMESPACE"
      ],
      "endpoint": {
        "__typename": "WebhookPubSubEndpoint",
        "pubSubProject": "my-gcp-project",
        "pubSubTopic": "my-gcp-topic"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an ORDERS_CREATE Pub/Sub webhook subscription with fewer resource fields

#### Query

```graphql
mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      includeFields
      endpoint {
        __typename
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON",
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
"query": "mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format includeFields endpoint { __typename ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "pubSubProject": "my-gcp-project",
      "pubSubTopic": "my-gcp-topic",
      "format": "JSON",
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        includeFields
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON",
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        includeFields
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON",
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
    "query": `mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          includeFields
          endpoint {
            __typename
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON",
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
  "pubSubWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934662",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "includeFields": [
        "id",
        "note"
      ],
      "endpoint": {
        "__typename": "WebhookPubSubEndpoint",
        "pubSubProject": "my-gcp-project",
        "pubSubTopic": "my-gcp-topic"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### pubSubWebhookSubscriptionCreate reference

Examples
--------

Create a Google Cloud Pub/Sub webhook subscription for ORDERS_CREATE events

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20pubSubWebhookSubscriptionCreate(%24topic%3A%20WebhookSubscriptionTopic!%2C%20%24webhookSubscription%3A%20PubSubWebhookSubscriptionInput!)%20%7B%0A%20%20pubSubWebhookSubscriptionCreate(topic%3A%20%24topic%2C%20webhookSubscription%3A%20%24webhookSubscription)%20%7B%0A%20%20%20%20webhookSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20topic%0A%20%20%20%20%20%20format%0A%20%20%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20...%20on%20WebhookPubSubEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20pubSubProject%0A%20%20%20%20%20%20%20%20%20%20pubSubTopic%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22topic%22%3A%20%22ORDERS_CREATE%22%2C%0A%20%20%22webhookSubscription%22%3A%20%7B%0A%20%20%20%20%22pubSubProject%22%3A%20%22my-gcp-project%22%2C%0A%20%20%20%20%22pubSubTopic%22%3A%20%22my-gcp-topic%22%2C%0A%20%20%20%20%22format%22%3A%20%22JSON%22%0A%20%20%7D%0A%7D)Copy

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

37

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {

 pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {

 webhookSubscription {

 id

 topic

 format

 endpoint {

 __typename

 ... on WebhookPubSubEndpoint {

 pubSubProject

 pubSubTopic

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

"topic":"ORDERS_CREATE",

"webhookSubscription":{

"pubSubProject":"my-gcp-project",

"pubSubTopic":"my-gcp-topic",

"format":"JSON"

}

},

},

);

const data=await response.json();

```
mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      endpoint {
        __typename
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
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
"query": "mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format endpoint { __typename ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "pubSubProject": "my-gcp-project",
      "pubSubTopic": "my-gcp-topic",
      "format": "JSON"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON"
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
    "query": `mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          endpoint {
            __typename
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
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
            "pubSubProject": "my-gcp-project",
            "pubSubTopic": "my-gcp-topic",
            "format": "JSON"
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
  mutation pubSubWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        endpoint {
          __typename
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
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
    "pubSubProject": "my-gcp-project",
    "pubSubTopic": "my-gcp-topic",
    "format": "JSON"
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

"topic": "ORDERS_CREATE",

"webhookSubscription": {

"pubSubProject": "my-gcp-project",

"pubSubTopic": "my-gcp-topic",

"format": "JSON"

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

›

⌄

⌄

⌄

⌄

{

"pubSubWebhookSubscriptionCreate": {

"webhookSubscription": {

"id": "gid://shopify/WebhookSubscription/8589934664",

"topic": "ORDERS_CREATE",

"format": "JSON",

"endpoint": {

"__typename": "WebhookPubSubEndpoint",

"pubSubProject": "my-gcp-project",

"pubSubTopic": "my-gcp-topic"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*