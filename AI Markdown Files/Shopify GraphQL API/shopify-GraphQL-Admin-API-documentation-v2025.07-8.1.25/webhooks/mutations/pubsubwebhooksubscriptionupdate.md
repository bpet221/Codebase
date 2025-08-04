---
title: "pubSubWebhookSubscriptionUpdate"
description: "Shopify GraphQL Admin API documentation for pubsubwebhooksubscriptionupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate"
extraction_method: "jina"
sections: ['Webhooks', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: pubSubWebhookSubscriptionUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate

Markdown Content:
pubSubWebhookSubscriptionUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#main-content)

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

[Anchor to pubSubWebhookSubscriptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#top)
pub Sub Webhook Subscription Update
===================================

mutation

Deprecated.Use [webhookSubscriptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate) instead.

Updates a Google Cloud Pub/Sub webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the webhook subscription to update.

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#arguments-webhookSubscription)webhook Subscription

•[Pub Sub Webhook Subscription Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

required

Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PubSubWebhookSubscriptionUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#returns)Pub Sub Webhook Subscription Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#returns-userErrors)user Errors

•[[Pub Sub Webhook Subscription Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubwebhooksubscriptionupdate#returns-webhookSubscription)webhook Subscription

•[Webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

The webhook subscription that was updated.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a webhook subscription from HTTP to Google Pub/Sub

#### Query

```graphql
mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
      topic
      endpoint {
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/WebhookSubscription/525699895",
  "webhookSubscription": {
    "pubSubProject": "a-gcp-project",
    "pubSubTopic": "a-pubsub-topic",
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
"query": "mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) { userErrors { field message } webhookSubscription { id topic endpoint { ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } } }",
 "variables": {
    "id": "gid://shopify/WebhookSubscription/525699895",
    "webhookSubscription": {
      "pubSubProject": "a-gcp-project",
      "pubSubTopic": "a-pubsub-topic",
      "format": "JSON"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "webhookSubscription": {
            "pubSubProject": "a-gcp-project",
            "pubSubTopic": "a-pubsub-topic",
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
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/WebhookSubscription/525699895",
  "webhookSubscription": {
    "pubSubProject": "a-gcp-project",
    "pubSubTopic": "a-pubsub-topic",
    "format": "JSON"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
        userErrors {
          field
          message
        }
        webhookSubscription {
          id
          topic
          endpoint {
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "webhookSubscription": {
            "pubSubProject": "a-gcp-project",
            "pubSubTopic": "a-pubsub-topic",
            "format": "JSON"
        }
    },
  },
});
``` #### Response

```json
{
  "pubSubWebhookSubscriptionUpdate": {
    "userErrors": [],
    "webhookSubscription": {
      "id": "gid://shopify/WebhookSubscription/525699895",
      "topic": "ORDERS_CREATE",
      "endpoint": {
        "pubSubProject": "a-gcp-project",
        "pubSubTopic": "a-pubsub-topic"
      }
    }
  }
}
``` 
*   ### pubSubWebhookSubscriptionUpdate reference

Examples
--------

Update a webhook subscription from HTTP to Google Pub/Sub

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20pubSubWebhookSubscriptionUpdate(%24id%3A%20ID!%2C%20%24webhookSubscription%3A%20PubSubWebhookSubscriptionInput!)%20%7B%0A%20%20pubSubWebhookSubscriptionUpdate(id%3A%20%24id%2C%20webhookSubscription%3A%20%24webhookSubscription)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20webhookSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20topic%0A%20%20%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20WebhookPubSubEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20pubSubProject%0A%20%20%20%20%20%20%20%20%20%20pubSubTopic%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FWebhookSubscription%2F525699895%22%2C%0A%20%20%22webhookSubscription%22%3A%20%7B%0A%20%20%20%20%22pubSubProject%22%3A%20%22a-gcp-project%22%2C%0A%20%20%20%20%22pubSubTopic%22%3A%20%22a-pubsub-topic%22%2C%0A%20%20%20%20%22format%22%3A%20%22JSON%22%0A%20%20%7D%0A%7D)Copy

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

 mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {

 pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {

 userErrors {

 field

 message

 }

 webhookSubscription {

 id

 topic

 endpoint {

 ... on WebhookPubSubEndpoint {

 pubSubProject

 pubSubTopic

 }

 }

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/WebhookSubscription/525699895",

"webhookSubscription":{

"pubSubProject":"a-gcp-project",

"pubSubTopic":"a-pubsub-topic",

"format":"JSON"

}

},

},

);

const data=await response.json();

```
mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
  pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
      topic
      endpoint {
        ... on WebhookPubSubEndpoint {
          pubSubProject
          pubSubTopic
        }
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
"query": "mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) { pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) { userErrors { field message } webhookSubscription { id topic endpoint { ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } } }",
 "variables": {
    "id": "gid://shopify/WebhookSubscription/525699895",
    "webhookSubscription": {
      "pubSubProject": "a-gcp-project",
      "pubSubTopic": "a-pubsub-topic",
      "format": "JSON"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "webhookSubscription": {
            "pubSubProject": "a-gcp-project",
            "pubSubTopic": "a-pubsub-topic",
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
    "query": `mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
      pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
        userErrors {
          field
          message
        }
        webhookSubscription {
          id
          topic
          endpoint {
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/WebhookSubscription/525699895",
        "webhookSubscription": {
            "pubSubProject": "a-gcp-project",
            "pubSubTopic": "a-pubsub-topic",
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
  mutation pubSubWebhookSubscriptionUpdate($id: ID!, $webhookSubscription: PubSubWebhookSubscriptionInput!) {
    pubSubWebhookSubscriptionUpdate(id: $id, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
        topic
        endpoint {
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/WebhookSubscription/525699895",
  "webhookSubscription": {
    "pubSubProject": "a-gcp-project",
    "pubSubTopic": "a-pubsub-topic",
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

"id": "gid://shopify/WebhookSubscription/525699895",

"webhookSubscription": {

"pubSubProject": "a-gcp-project",

"pubSubTopic": "a-pubsub-topic",

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

›

⌄

⌄

⌄

⌄

{

"pubSubWebhookSubscriptionUpdate": {

"userErrors": [],

"webhookSubscription": {

"id": "gid://shopify/WebhookSubscription/525699895",

"topic": "ORDERS_CREATE",

"endpoint": {

"pubSubProject": "a-gcp-project",

"pubSubTopic": "a-pubsub-topic"

}

}

}

}


---
*Content truncated at "Updates" section*