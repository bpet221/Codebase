---
title: "webhookSubscriptionsCount"
description: "Shopify GraphQL Admin API documentation for webhooksubscriptionscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount"
extraction_method: "jina"
sections: ['Webhooks', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webhookSubscriptionsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount

Markdown Content:
webhookSubscriptionsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#main-content)

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

[Anchor to webhookSubscriptionsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#top)
webhook Subscriptions Count
===========================

query

The count of webhook subscriptions.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe). Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#argument-query-filter-endpoint)endpoint

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#argument-query-filter-topic)topic

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#argument-query-filter-updated_at)updated_at

•time

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhooksubscriptionscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a count of all Webhooks

#### Query

```graphql
query WebhookSubscriptionsCount($query: String!) {
  webhookSubscriptionsCount(query: $query) {
    count
    precision
  }
}
``` #### Variables

```json
{
  "query": "topic:\"orders/create\""
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query WebhookSubscriptionsCount($query: String!) { webhookSubscriptionsCount(query: $query) { count precision } }",
 "variables": {
    "query": "topic:\"orders/create\""
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query WebhookSubscriptionsCount($query: String!) {
    webhookSubscriptionsCount(query: $query) {
      count
      precision
    }
  }`,
  {
    variables: {
        "query": "topic:\"orders/create\""
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
  query WebhookSubscriptionsCount($query: String!) {
    webhookSubscriptionsCount(query: $query) {
      count
      precision
    }
  }
QUERY

variables = {
  "query": "topic:\"orders/create\""
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query WebhookSubscriptionsCount($query: String!) {
      webhookSubscriptionsCount(query: $query) {
        count
        precision
      }
    }`,
    "variables": {
        "query": "topic:\"orders/create\""
    },
  },
});
``` #### Response

```json
{
  "webhookSubscriptionsCount": {
    "count": 1,
    "precision": "EXACT"
  }
}
``` 

Receive a count of all Webhooks
-------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20WebhookSubscriptionsCount(%24query%3A%20String!)%20%7B%0A%20%20webhookSubscriptionsCount(query%3A%20%24query)%20%7B%0A%20%20%20%20count%0A%20%20%20%20precision%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22query%22%3A%20%22topic%3A%5C%22orders%2Fcreate%5C%22%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query WebhookSubscriptionsCount($query: String!) {

 webhookSubscriptionsCount(query: $query) {

 count

 precision

 }

 }`,

{

variables:{

"query":"topic:\"orders/create\""

},

},

);

const data=await response.json();

```
query WebhookSubscriptionsCount($query: String!) {
  webhookSubscriptionsCount(query: $query) {
    count
    precision
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query WebhookSubscriptionsCount($query: String!) { webhookSubscriptionsCount(query: $query) { count precision } }",
 "variables": {
    "query": "topic:\"orders/create\""
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query WebhookSubscriptionsCount($query: String!) {
    webhookSubscriptionsCount(query: $query) {
      count
      precision
    }
  }`,
  {
    variables: {
        "query": "topic:\"orders/create\""
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query WebhookSubscriptionsCount($query: String!) {
      webhookSubscriptionsCount(query: $query) {
        count
        precision
      }
    }`,
    "variables": {
        "query": "topic:\"orders/create\""
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
  query WebhookSubscriptionsCount($query: String!) {
    webhookSubscriptionsCount(query: $query) {
      count
      precision
    }
  }
QUERY

variables = {
  "query": "topic:\"orders/create\""
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

"query": "topic:\"orders/create\""

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

"webhookSubscriptionsCount": {

"count": 1,

"precision": "EXACT"

}

}


---
*Content truncated at "Updates" section*