---
title: "app"
description: "Shopify GraphQL Admin API documentation for app"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/app"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: app - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/app

Markdown Content:
app - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#main-content)

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
*   
Apps

    *   
Queries

        *   [app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)
        *   [app By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle)
        *   [app By Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey)
        *   [app Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation)
        *   [app Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallations)
        *   [current App Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation)
        *   [mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication)
        *   [mobile Platform Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications)
        *   [publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication)

    *   Mutations   
    *   Objects   

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
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#top)
app
===

query

Lookup an App by ID or return the currently authenticated App.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID to lookup the App by.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------

[Anchor to App](https://shopify.dev/docs/api/admin-graphql/latest/queries/app#returns-App)App

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

A Shopify application.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get an app by its ID

#### Description

Retrieve an app with its ID, returning the app title

#### Query

```graphql
query {
  app(id: "gid://shopify/App/193172482") {
    title
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { app(id: \"gid://shopify/App/193172482\") { title } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    app(id: "gid://shopify/App/193172482") {
      title
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
    app(id: "gid://shopify/App/193172482") {
      title
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    app(id: "gid://shopify/App/193172482") {
      title
    }
  }`,
});
``` #### Response

```json
{
  "app": {
    "title": "Invoicing Application"
  }
}
``` 
*   ### Get the currently authenticated app

#### Description

Retrieve the currently authenticated app, returning the app title

#### Query

```graphql
query {
  app {
    title
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { app { title } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    app {
      title
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
    app {
      title
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    app {
      title
    }
  }`,
});
``` #### Response

```json
{
  "app": {
    "title": "Invoicing Application"
  }
}
``` 
*   ### Get the feedback field

#### Query

```graphql
query ShopFeedbackList {
  app(id: "gid://shopify/App/88312") {
    feedback {
      messages {
        message
      }
      feedbackGeneratedAt
      state
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
"query": "query ShopFeedbackList { app(id: \"gid://shopify/App/88312\") { feedback { messages { message } feedbackGeneratedAt state } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopFeedbackList {
    app(id: "gid://shopify/App/88312") {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
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
  query ShopFeedbackList {
    app(id: "gid://shopify/App/88312") {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ShopFeedbackList {
    app(id: "gid://shopify/App/88312") {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
      }
    }
  }`,
});
``` #### Response

```json
{
  "app": {
    "feedback": {
      "messages": [
        {
          "message": "Buy Button is not connected. Connect your account to use this sales channel."
        }
      ],
      "feedbackGeneratedAt": "2024-12-17T19:29:36Z",
      "state": "REQUIRES_ACTION"
    }
  }
}
``` 

Examples
--------

Get an app by its ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20app(id%3A%20%22gid%3A%2F%2Fshopify%2FApp%2F193172482%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 app(id: "gid://shopify/App/193172482") {

 title

 }

 }`,

);

const data=await response.json();

```
query {
  app(id: "gid://shopify/App/193172482") {
    title
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { app(id: \"gid://shopify/App/193172482\") { title } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    app(id: "gid://shopify/App/193172482") {
      title
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    app(id: "gid://shopify/App/193172482") {
      title
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
    app(id: "gid://shopify/App/193172482") {
      title
    }
  }
QUERY

response = client.query(query: query)
```

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

›

⌄

⌄

{

"app": {

"title": "Invoicing Application"

}

}


---
*Content truncated at "Updates" section*