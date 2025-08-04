---
title: "webhookSubscriptions"
description: "Shopify GraphQL Admin API documentation for webhooksubscriptions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions"
extraction_method: "jina"
sections: ['Webhooks', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webhookSubscriptions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions

Markdown Content:
webhookSubscriptions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#main-content)

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

[Anchor to webhookSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#top)
webhook Subscriptions
=====================

query

Returns a list of webhook subscriptions.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments)
WebhookSubscriptionConnection arguments
---------------------------------------

•[WebhookSubscriptionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-callbackUrl)callback Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Callback URL to filter by.

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to format](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-format)format

•[Webhook Subscription Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

Response format to filter by.

Show enum values

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-sortKey)sort Key

•[Webhook Subscription Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionSortKeys)

Default:CREATED_AT

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

[Anchor to topics](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#arguments-topics)topics

•[[Webhook Subscription Topic!]](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

List of webhook subscription topics to filter by.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#returns-edges)edges

•[[Webhook Subscription Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#returns-nodes)nodes

•[[Webhook Subscription!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

non-null

A list of nodes that are contained in WebhookSubscriptionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptions#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the IDs, topics, and endpoints of the first 2 webhook subscriptions

#### Query

```graphql
query {
  webhookSubscriptions(first: 2) {
    edges {
      node {
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
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
        }
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
"query": "query { webhookSubscriptions(first: 2) { edges { node { id topic endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } ... on WebhookEventBridgeEndpoint { arn } ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscriptions(first: 2) {
      edges {
        node {
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
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
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
    webhookSubscriptions(first: 2) {
      edges {
        node {
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
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
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
    webhookSubscriptions(first: 2) {
      edges {
        node {
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
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "webhookSubscriptions": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/WebhookSubscription/892403750",
          "topic": "ORDERS_CANCELLED",
          "endpoint": {
            "__typename": "WebhookHttpEndpoint",
            "callbackUrl": "https://example.org/fully_loaded_1"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/WebhookSubscription/901431826",
          "topic": "APP_UNINSTALLED",
          "endpoint": {
            "__typename": "WebhookHttpEndpoint",
            "callbackUrl": "https://apple.com/uninstall"
          }
        }
      }
    ]
  }
}
``` 
*   ### Get the first two webhook subscriptions with the APP_UNINSTALLED topic

#### Query

```graphql
query {
  webhookSubscriptions(first: 2, topics: APP_UNINSTALLED) {
    edges {
      node {
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
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { webhookSubscriptions(first: 2, topics: APP_UNINSTALLED) { edges { node { id topic endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } ... on WebhookEventBridgeEndpoint { arn } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscriptions(first: 2, topics: APP_UNINSTALLED) {
      edges {
        node {
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
    webhookSubscriptions(first: 2, topics: APP_UNINSTALLED) {
      edges {
        node {
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
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    webhookSubscriptions(first: 2, topics: APP_UNINSTALLED) {
      edges {
        node {
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
    }
  }`,
});
``` #### Response

```json
{
  "webhookSubscriptions": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/WebhookSubscription/901431826",
          "topic": "APP_UNINSTALLED",
          "endpoint": {
            "__typename": "WebhookHttpEndpoint",
            "callbackUrl": "https://apple.com/uninstall"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/WebhookSubscription/1014196360",
          "topic": "APP_UNINSTALLED",
          "endpoint": {
            "__typename": "WebhookHttpEndpoint",
            "callbackUrl": "https://example.org/app_uninstalled"
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Get the IDs, topics, and endpoints of the first 2 webhook subscriptions

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20webhookSubscriptions(first%3A%202)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20topic%0A%20%20%20%20%20%20%20%20endpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20...%20on%20WebhookHttpEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20...%20on%20WebhookEventBridgeEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20arn%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20...%20on%20WebhookPubSubEndpoint%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20pubSubProject%0A%20%20%20%20%20%20%20%20%20%20%20%20pubSubTopic%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 webhookSubscriptions(first: 2) {

 edges {

 node {

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

 ... on WebhookPubSubEndpoint {

 pubSubProject

 pubSubTopic

 }

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  webhookSubscriptions(first: 2) {
    edges {
      node {
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
          ... on WebhookPubSubEndpoint {
            pubSubProject
            pubSubTopic
          }
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
"query": "query { webhookSubscriptions(first: 2) { edges { node { id topic endpoint { __typename ... on WebhookHttpEndpoint { callbackUrl } ... on WebhookEventBridgeEndpoint { arn } ... on WebhookPubSubEndpoint { pubSubProject pubSubTopic } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    webhookSubscriptions(first: 2) {
      edges {
        node {
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
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
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
    webhookSubscriptions(first: 2) {
      edges {
        node {
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
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
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
    webhookSubscriptions(first: 2) {
      edges {
        node {
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
            ... on WebhookPubSubEndpoint {
              pubSubProject
              pubSubTopic
            }
          }
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

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"webhookSubscriptions": {

"edges": [

{

"node": {

"id": "gid://shopify/WebhookSubscription/892403750",

"topic": "ORDERS_CANCELLED",

"endpoint": {

"__typename": "WebhookHttpEndpoint",

"callbackUrl": "https://example.org/fully_loaded_1"

}

}

},

{

"node": {

"id": "gid://shopify/WebhookSubscription/901431826",

"topic": "APP_UNINSTALLED",

"endpoint": {

"__typename": "WebhookHttpEndpoint",

"callbackUrl": "https://apple.com/uninstall"

}

}

}

]

}

}


---
*Content truncated at "Updates" section*