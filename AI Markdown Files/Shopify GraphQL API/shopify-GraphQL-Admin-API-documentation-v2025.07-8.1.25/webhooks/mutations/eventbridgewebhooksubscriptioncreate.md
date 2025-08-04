---
title: "eventBridgeWebhookSubscriptionCreate"
description: "Shopify GraphQL Admin API documentation for eventbridgewebhooksubscriptioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate"
extraction_method: "jina"
sections: ['Webhooks', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: eventBridgeWebhookSubscriptionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate

Markdown Content:
eventBridgeWebhookSubscriptionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#main-content)

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

[Anchor to eventBridgeWebhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#top)
event Bridge Webhook Subscription Create
========================================

mutation

Deprecated.Use [webhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate) instead.

Creates a new Amazon EventBridge webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#arguments)
Arguments
---------

[Anchor to topic](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#arguments-topic)topic

•[Webhook Subscription Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

required

The type of event that triggers the webhook.

Show enum values

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#arguments-webhookSubscription)webhook Subscription

•[Event Bridge Webhook Subscription Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

required

Specifies the input fields for an EventBridge webhook subscription.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to EventBridgeWebhookSubscriptionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#returns)Event Bridge Webhook Subscription Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgewebhooksubscriptioncreate#returns-webhookSubscription)webhook Subscription

•[Webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

The webhook subscription that was created.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a METAOBJECTS_CREATE EventBridge webhook subscription for lookbook metaobjects

#### Query

```graphql
mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
  eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      filter
      format
      endpoint {
        __typename
        ... on WebhookEventBridgeEndpoint {
          arn
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
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
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
"query": "mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) { eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic filter format endpoint { __typename ... on WebhookEventBridgeEndpoint { arn } } } userErrors { field message } } }",
 "variables": {
    "topic": "METAOBJECTS_CREATE",
    "webhookSubscription": {
      "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
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
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        format
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
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
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        format
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
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
    "query": `mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
      eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          filter
          format
          endpoint {
            __typename
            ... on WebhookEventBridgeEndpoint {
              arn
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
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
            "format": "JSON",
            "filter": "type:lookbook"
        }
    },
  },
});
``` #### Response

```json
{
  "eventBridgeWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934706",
      "topic": "METAOBJECTS_CREATE",
      "filter": "type:lookbook",
      "format": "JSON",
      "endpoint": {
        "__typename": "WebhookEventBridgeEndpoint",
        "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an Amazon EventBridge webhook subscription for ORDERS_CREATE events

#### Query

```graphql
mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
  eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      endpoint {
        __typename
        ... on WebhookEventBridgeEndpoint {
          arn
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
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
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
"query": "mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) { eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format endpoint { __typename ... on WebhookEventBridgeEndpoint { arn } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "webhookSubscription": {
      "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
      "format": "JSON"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
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
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
    "format": "JSON"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
      eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          endpoint {
            __typename
            ... on WebhookEventBridgeEndpoint {
              arn
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
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
            "format": "JSON"
        }
    },
  },
});
``` #### Response

```json
{
  "eventBridgeWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934709",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "endpoint": {
        "__typename": "WebhookEventBridgeEndpoint",
        "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an ORDERS_CREATE EventBridge webhook subscription thatincludes metafields during serialization

#### Query

```graphql
mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
  eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      metafieldNamespaces
      endpoint {
        __typename
        ... on WebhookEventBridgeEndpoint {
          arn
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
  "metafieldNamespaces": [
    "MY_NAMESPACE",
    "ANOTHER_NAMESPACE"
  ],
  "webhookSubscription": {
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
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
"query": "mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) { eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format metafieldNamespaces endpoint { __typename ... on WebhookEventBridgeEndpoint { arn } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "metafieldNamespaces": [
      "MY_NAMESPACE",
      "ANOTHER_NAMESPACE"
    ],
    "webhookSubscription": {
      "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
      "format": "JSON"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
        "metafieldNamespaces": [
            "MY_NAMESPACE",
            "ANOTHER_NAMESPACE"
        ],
        "webhookSubscription": {
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
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
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        metafieldNamespaces
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
  "metafieldNamespaces": [
    "MY_NAMESPACE",
    "ANOTHER_NAMESPACE"
  ],
  "webhookSubscription": {
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
    "format": "JSON"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
      eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          metafieldNamespaces
          endpoint {
            __typename
            ... on WebhookEventBridgeEndpoint {
              arn
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
        "metafieldNamespaces": [
            "MY_NAMESPACE",
            "ANOTHER_NAMESPACE"
        ],
        "webhookSubscription": {
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
            "format": "JSON"
        }
    },
  },
});
``` #### Response

```json
{
  "eventBridgeWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934704",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "metafieldNamespaces": [],
      "endpoint": {
        "__typename": "WebhookEventBridgeEndpoint",
        "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an ORDERS_CREATE EventBridge webhook subscription with fewer resource fields

#### Query

```graphql
mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
  eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      includeFields
      endpoint {
        __typename
        ... on WebhookEventBridgeEndpoint {
          arn
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
  "includeFields": [
    "id",
    "note"
  ],
  "webhookSubscription": {
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
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
"query": "mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) { eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic format includeFields endpoint { __typename ... on WebhookEventBridgeEndpoint { arn } } } userErrors { field message } } }",
 "variables": {
    "topic": "ORDERS_CREATE",
    "includeFields": [
      "id",
      "note"
    ],
    "webhookSubscription": {
      "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
      "format": "JSON"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        includeFields
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
        "includeFields": [
            "id",
            "note"
        ],
        "webhookSubscription": {
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
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
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        format
        includeFields
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
  "includeFields": [
    "id",
    "note"
  ],
  "webhookSubscription": {
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
    "format": "JSON"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
      eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          format
          includeFields
          endpoint {
            __typename
            ... on WebhookEventBridgeEndpoint {
              arn
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
        "includeFields": [
            "id",
            "note"
        ],
        "webhookSubscription": {
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source",
            "format": "JSON"
        }
    },
  },
});
``` #### Response

```json
{
  "eventBridgeWebhookSubscriptionCreate": {
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/8589934702",
      "topic": "ORDERS_CREATE",
      "format": "JSON",
      "includeFields": [],
      "endpoint": {
        "__typename": "WebhookEventBridgeEndpoint",
        "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/166357/test-event-source"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### eventBridgeWebhookSubscriptionCreate reference

Examples
--------

Create a METAOBJECTS_CREATE EventBridge webhook subscription for lookbook metaobjects

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20eventBridgeWebhookSubscriptionCreate(%24topic%3A%20WebhookSubscriptionTopic!%2C%20%24webhookSubscription%3A%20EventBridgeWebhookSubscriptionInput!)%20%7B%0A%20%20eventBridgeWebhookSubscriptionCreate(topic%3A%20%24topic%2C%20webhookSubscription%3A%20%24webhookSubscription)%20%7B%0A%20%20%20%20webhookSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20topic%0A%20%20%20%20%20%20filter%0A%20%20%20%20%20%20format%0A%20%20%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20...%20on%20WebhookEventBridgeEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20arn%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22topic%22%3A%20%22METAOBJECTS_CREATE%22%2C%0A%20%20%22webhookSubscription%22%3A%20%7B%0A%20%20%20%20%22arn%22%3A%20%22arn%3Aaws%3Aevents%3Aus-east-1%3A%3Aevent-source%2Faws.partner%2Fshopify.com%2F1830279%2Ftest-event-source%22%2C%0A%20%20%20%20%22format%22%3A%20%22JSON%22%2C%0A%20%20%20%20%22filter%22%3A%20%22type%3Alookbook%22%0A%20%20%7D%0A%7D)Copy

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

 mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {

 eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {

 webhookSubscription {

 id

 topic

 filter

 format

 endpoint {

 __typename

 ... on WebhookEventBridgeEndpoint {

 arn

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

"arn":"arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",

"format":"JSON",

"filter":"type:lookbook"

}

},

},

);

const data=await response.json();

```
mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
  eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      filter
      format
      endpoint {
        __typename
        ... on WebhookEventBridgeEndpoint {
          arn
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
"query": "mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) { eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) { webhookSubscription { id topic filter format endpoint { __typename ... on WebhookEventBridgeEndpoint { arn } } } userErrors { field message } } }",
 "variables": {
    "topic": "METAOBJECTS_CREATE",
    "webhookSubscription": {
      "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
      "format": "JSON",
      "filter": "type:lookbook"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        format
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
            "format": "JSON",
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
    "query": `mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
      eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription {
          id
          topic
          filter
          format
          endpoint {
            __typename
            ... on WebhookEventBridgeEndpoint {
              arn
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
            "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
            "format": "JSON",
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
  mutation eventBridgeWebhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: EventBridgeWebhookSubscriptionInput!) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
        topic
        filter
        format
        endpoint {
          __typename
          ... on WebhookEventBridgeEndpoint {
            arn
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
    "arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",
    "format": "JSON",
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

8

›

⌄

⌄

{

"topic": "METAOBJECTS_CREATE",

"webhookSubscription": {

"arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source",

"format": "JSON",

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

15

›

⌄

⌄

⌄

⌄

{

"eventBridgeWebhookSubscriptionCreate": {

"webhookSubscription": {

"id": "gid://shopify/WebhookSubscription/8589934706",

"topic": "METAOBJECTS_CREATE",

"filter": "type:lookbook",

"format": "JSON",

"endpoint": {

"__typename": "WebhookEventBridgeEndpoint",

"arn": "arn:aws:events:us-east-1::event-source/aws.partner/shopify.com/1830279/test-event-source"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*