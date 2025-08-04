---
title: "event"
description: "Shopify GraphQL Admin API documentation for event"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/event"
extraction_method: "jina"
sections: ['Events', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: event - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/event

Markdown Content:
event - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/event#main-content)

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
*   
Events

    *   
Queries

        *   [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)
        *   [deletion Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionevents)
        *   [event](https://shopify.dev/docs/api/admin-graphql/latest/queries/event)
        *   [events](https://shopify.dev/docs/api/admin-graphql/latest/queries/events)
        *   [events Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount)

    *   Mutations   
    *   Objects   

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

[Anchor to event](https://shopify.dev/docs/api/admin-graphql/latest/queries/event#top)
event
=====

query

Get a single event by its id.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/event#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/event#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the event.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/event#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------

[Anchor to Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/event#returns-Event)Event

•[Event](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)

Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the addition of a product.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve the first basic-event

#### Description

Retrieve an event by its id.

#### Query

```graphql
query {
  event(id: "gid://shopify/BasicEvent/422690323") {
    id
    message
    ... on BasicEvent {
      action
      subjectType
      subject {
        __typename
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
"query": "query { event(id: \"gid://shopify/BasicEvent/422690323\") { id message ... on BasicEvent { action subjectType subject { __typename } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    event(id: "gid://shopify/BasicEvent/422690323") {
      id
      message
      ... on BasicEvent {
        action
        subjectType
        subject {
          __typename
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
    event(id: "gid://shopify/BasicEvent/422690323") {
      id
      message
      ... on BasicEvent {
        action
        subjectType
        subject {
          __typename
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
    event(id: "gid://shopify/BasicEvent/422690323") {
      id
      message
      ... on BasicEvent {
        action
        subjectType
        subject {
          __typename
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "event": {
    "id": "gid://shopify/BasicEvent/422690323",
    "message": "bob bobsen included a product on Online Store: <a href=\"https://admin.myshopify.io/store/snowdevil/admin/products/440089423\">IPod Nano - 8GB</a>.",
    "action": "published",
    "subjectType": "PRODUCT",
    "subject": {
      "__typename": "Product"
    }
  }
}
``` 
*   ### Retrieves a single event

#### Query

```graphql
query EventShow($id: ID!) {
  event(id: $id) {
    id
    action
    createdAt
    message
    ... on BasicEvent {
      arguments
      subjectId
      subjectType
      additionalContent
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/BasicEvent/267851118"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query EventShow($id: ID!) { event(id: $id) { id action createdAt message ... on BasicEvent { arguments subjectId subjectType additionalContent } } }",
 "variables": {
    "id": "gid://shopify/BasicEvent/267851118"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query EventShow($id: ID!) {
    event(id: $id) {
      id
      action
      createdAt
      message
      ... on BasicEvent {
        arguments
        subjectId
        subjectType
        additionalContent
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/BasicEvent/267851118"
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
  query EventShow($id: ID!) {
    event(id: $id) {
      id
      action
      createdAt
      message
      ... on BasicEvent {
        arguments
        subjectId
        subjectType
        additionalContent
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/BasicEvent/267851118"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query EventShow($id: ID!) {
      event(id: $id) {
        id
        action
        createdAt
        message
        ... on BasicEvent {
          arguments
          subjectId
          subjectType
          additionalContent
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/BasicEvent/267851118"
    },
  },
});
``` #### Response

```json
{
  "event": {
    "id": "gid://shopify/BasicEvent/267851118",
    "action": "unpublished",
    "createdAt": "2006-06-09T12:00:00Z",
    "message": "",
    "arguments": [],
    "subjectId": "gid://shopify/Product/630255015",
    "subjectType": "PRODUCT",
    "additionalContent": "null"
  }
}
``` 

Examples
--------

Retrieve the first basic-event

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20event(id%3A%20%22gid%3A%2F%2Fshopify%2FBasicEvent%2F422690323%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20message%0A%20%20%20%20...%20on%20BasicEvent%20%7B%0A%20%20%20%20%20%20action%0A%20%20%20%20%20%20subjectType%0A%20%20%20%20%20%20subject%20%7B%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 event(id: "gid://shopify/BasicEvent/422690323") {

 id

 message

 ... on BasicEvent {

 action

 subjectType

 subject {

 __typename

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  event(id: "gid://shopify/BasicEvent/422690323") {
    id
    message
    ... on BasicEvent {
      action
      subjectType
      subject {
        __typename
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
"query": "query { event(id: \"gid://shopify/BasicEvent/422690323\") { id message ... on BasicEvent { action subjectType subject { __typename } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    event(id: "gid://shopify/BasicEvent/422690323") {
      id
      message
      ... on BasicEvent {
        action
        subjectType
        subject {
          __typename
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
    event(id: "gid://shopify/BasicEvent/422690323") {
      id
      message
      ... on BasicEvent {
        action
        subjectType
        subject {
          __typename
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
    event(id: "gid://shopify/BasicEvent/422690323") {
      id
      message
      ... on BasicEvent {
        action
        subjectType
        subject {
          __typename
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

›

⌄

⌄

⌄

{

"event": {

"id": "gid://shopify/BasicEvent/422690323",

"message": "bob bobsen included a product on Online Store: <a href=\"https://admin.myshopify.io/store/snowdevil/admin/products/440089423\">IPod Nano - 8GB</a>.",

"action": "published",

"subjectType": "PRODUCT",

"subject": {

"__typename": "Product"

}

}

}


---
*Content truncated at "Updates" section*