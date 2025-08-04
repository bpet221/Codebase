---
title: "events"
description: "Shopify GraphQL Admin API documentation for events"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/events"
extraction_method: "jina"
sections: ['Events', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: events - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/events

Markdown Content:
events - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#main-content)

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
*   
Events

    *   
Queries

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
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#top)
events
======

query

The paginated list of events associated with the store.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments)
EventConnection arguments
-------------------------

•[EventConnection](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#argument-query-filter-action)action

•string

The action that occured.

Example:

*   `action:create`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#argument-query-filter-comments)comments

•boolean

Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

Example:

*   `false`
*   `true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the event happened.

Example:

*   `created_at:>2020-10-21`
*   `created_at:<now`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#argument-query-filter-subject_type)subject_type

•string

The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

Example:

*   `PRODUCT_VARIANT`
*   `PRODUCT`
*   `COLLECTION`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#arguments-sortKey)sort Key

•[Event Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#returns-edges)edges

•[[Event Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/EventEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#returns-nodes)nodes

•[[Event!]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)

non-null

A list of nodes that are contained in EventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/events#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve the first 10 destroy events for products

#### Description

Retrieves the list of product events resulting from a delete.

#### Query

```graphql
query {
  events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
    edges {
      node {
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
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { events(query: \"action:'\''destroy'\'' AND subject_type:'\''PRODUCT'\''\", first: 10) { edges { node { id message ... on BasicEvent { action subjectType subject { __typename } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
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
    events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
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
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
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
    }
  }`,
});
``` #### Response

```json
{
  "events": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/BasicEvent/625930779",
          "message": "Product was deleted: Dandy Googles (Blue).",
          "action": "destroy",
          "subjectType": "PRODUCT",
          "subject": {
            "__typename": "Product"
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first 10 events after a given time

#### Description

Retrieves the first 10 events after the 1st of January 2024.

#### Query

```graphql
query {
  events(query: "created_at:>=2024-01-01", first: 10) {
    edges {
      node {
        id
        message
        createdAt
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
"query": "query { events(query: \"created_at:>=2024-01-01\", first: 10) { edges { node { id message createdAt } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    events(query: "created_at:>=2024-01-01", first: 10) {
      edges {
        node {
          id
          message
          createdAt
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
    events(query: "created_at:>=2024-01-01", first: 10) {
      edges {
        node {
          id
          message
          createdAt
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
    events(query: "created_at:>=2024-01-01", first: 10) {
      edges {
        node {
          id
          message
          createdAt
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "events": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/BasicEvent/20851159",
          "message": "Tax amount was updated from $22.36 USD to $19.85 USD.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/31716108",
          "message": "bob bobsen approved an order cancellation processed by limitedaccessbob bobsen on Point of Sale.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/132778104",
          "message": "Unknown event Order#access_order_fulfillment_approval...",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/155674255",
          "message": "This customer's orders were added to <a href=\"https://snowdevil.myshopify.com/admin/companies/1/locations/1\">Montreal</a>.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/197669626",
          "message": "Order <a href=\"https://snowdevil.myshopify.com/admin/orders/647667644\">#1002</a> was created from this draft order.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/NotificationSentEvent/233139490",
          "message": "An invoice was sent to Bob Bobsen (bobsburgers@example.net).",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/254468230",
          "message": "Order <a href=\"https://snowdevil.myshopify.com/admin/orders/148977776\">#1001</a> was created from this draft order.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/272432974",
          "message": "Payment reminder email was sent to bob@example.com.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/381046666",
          "message": "This customer's orders were removed from <a href=\"https://snowdevil.myshopify.com/admin/companies/1/locations/1\">Montreal</a>.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/458992081",
          "message": "Order covered by the <a href=\"https://help.shopify.com/manual/shipping/shop-promise#limited-guarantee\">Shop Promise guarantee</a>.",
          "createdAt": "2024-11-07T15:11:35Z"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first 10 events for products including comment events

#### Description

Retrieves the list of product events including comment events.

#### Query

```graphql
query {
  events(query: "comments:1 AND subject_type:'PRODUCT'", first: 10) {
    edges {
      node {
        id
        message
        ... on CommentEvent {
          rawMessage
        }
        ... on BasicEvent {
          action
          subjectType
          subject {
            __typename
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
"query": "query { events(query: \"comments:1 AND subject_type:'\''PRODUCT'\''\", first: 10) { edges { node { id message ... on CommentEvent { rawMessage } ... on BasicEvent { action subjectType subject { __typename } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    events(query: "comments:1 AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
          id
          message
          ... on CommentEvent {
            rawMessage
          }
          ... on BasicEvent {
            action
            subjectType
            subject {
              __typename
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
    events(query: "comments:1 AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
          id
          message
          ... on CommentEvent {
            rawMessage
          }
          ... on BasicEvent {
            action
            subjectType
            subject {
              __typename
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
    events(query: "comments:1 AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
          id
          message
          ... on CommentEvent {
            rawMessage
          }
          ... on BasicEvent {
            action
            subjectType
            subject {
              __typename
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
  "events": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/BasicEvent/267851118",
          "message": "",
          "action": "unpublished",
          "subjectType": "PRODUCT",
          "subject": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/422690323",
          "message": "bob bobsen included a product on Online Store: <a href=\"https://admin.myshopify.io/store/snowdevil/admin/products/440089423\">IPod Nano - 8GB</a>.",
          "action": "published",
          "subjectType": "PRODUCT",
          "subject": {
            "__typename": "Product"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/625930779",
          "message": "Product was deleted: Dandy Googles (Blue).",
          "action": "destroy",
          "subjectType": "PRODUCT",
          "subject": {
            "__typename": "Product"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/686413589",
          "message": "",
          "action": "create",
          "subjectType": "PRODUCT",
          "subject": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/806005652",
          "message": "bob bobsen included a product on POS Test Account: <a href=\"https://admin.myshopify.io/store/snowdevil/admin/products/912855135\">SEO Boots</a>.",
          "action": "published",
          "subjectType": "PRODUCT",
          "subject": {
            "__typename": "Product"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/836798121",
          "message": "",
          "action": "create",
          "subjectType": "PRODUCT",
          "subject": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/BasicEvent/842889634",
          "message": "",
          "action": "unpublished",
          "subjectType": "PRODUCT",
          "subject": null
        }
      }
    ]
  }
}
``` 
*   ### Retrieves a list of events

#### Query

```graphql
query EventList {
  events(first: 5) {
    nodes {
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
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query EventList { events(first: 5) { nodes { id action createdAt message ... on BasicEvent { arguments subjectId subjectType additionalContent } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query EventList {
    events(first: 5) {
      nodes {
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
  query EventList {
    events(first: 5) {
      nodes {
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
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query EventList {
    events(first: 5) {
      nodes {
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
  }`,
});
``` #### Response

```json
{
  "events": {
    "nodes": [
      {
        "id": "gid://shopify/BasicEvent/9889833",
        "action": "restock_line_items",
        "createdAt": "2014-03-19T13:31:30Z",
        "message": "bob bobsen restocked 2 line items.",
        "arguments": [
          2
        ],
        "subjectId": "gid://shopify/Order/271719359",
        "subjectType": "ORDER",
        "additionalContent": "null"
      },
      {
        "id": "gid://shopify/BasicEvent/12536286",
        "action": "fulfillment_success",
        "createdAt": "2008-06-06T12:00:00Z",
        "message": "Shopify fulfilled 1 item via Mr. Drop Shipper.",
        "arguments": [
          "267732048",
          1
        ],
        "subjectId": "gid://shopify/Order/535108883",
        "subjectType": "ORDER",
        "additionalContent": "{\"root_component\":{\"type\":\"root_component\",\"content\":[{\"type\":\"list\",\"content\":[{\"type\":\"list_item\",\"content\":[{\"type\":\"text\",\"content\":\"1 × Draft - 151cm\",\"options\":{}},{\"type\":\"text\",\"content\":\" draft-151\",\"options\":{\"subdued\":true}}],\"options\":{\"large_margin\":true}}],\"options\":{\"title\":\"Items\",\"border_bottom\":true}},{\"type\":\"key_value_list\",\"content\":[{\"type\":\"key_value_pair\",\"key\":[{\"type\":\"text\",\"content\":\"Service\",\"options\":{}}],\"value\":[{\"type\":\"text\",\"content\":\"Mr. Drop Shipper\",\"options\":{}}],\"options\":{}}],\"options\":{\"title\":null}}]}}"
      },
      {
        "id": "gid://shopify/BasicEvent/14596041",
        "action": "confirmation_number_generated",
        "createdAt": "2014-03-18T13:31:30Z",
        "message": "Confirmation #QWE1234TF was generated for this order.",
        "arguments": [
          "QWE1234TF"
        ],
        "subjectId": "gid://shopify/Order/148977776",
        "subjectType": "ORDER",
        "additionalContent": "null"
      },
      {
        "id": "gid://shopify/BasicEvent/20851159",
        "action": "taxes_updated",
        "createdAt": "2024-11-07T15:11:35Z",
        "message": "Tax amount was updated from $22.36 USD to $19.85 USD.",
        "arguments": [
          22.36,
          19.85
        ],
        "subjectId": "gid://shopify/Order/148977776",
        "subjectType": "ORDER",
        "additionalContent": "null"
      },
      {
        "id": "gid://shopify/BasicEvent/22713642",
        "action": "exchange_created",
        "createdAt": "2008-06-06T12:00:00Z",
        "message": "bob bobsen completed an exchange on order <a href=\"https://snowdevil.myshopify.com/admin/orders/120375246\">#1060</a>.",
        "arguments": [],
        "subjectId": "gid://shopify/Order/989922345",
        "subjectType": "ORDER",
        "additionalContent": "null"
      }
    ]
  }
}
``` 

Examples
--------

Retrieve the first 10 destroy events for products

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20events(query%3A%20%22action%3A%27destroy%27%20AND%20subject_type%3A%27PRODUCT%27%22%2C%20first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20message%0A%20%20%20%20%20%20%20%20...%20on%20BasicEvent%20%7B%0A%20%20%20%20%20%20%20%20%20%20action%0A%20%20%20%20%20%20%20%20%20%20subjectType%0A%20%20%20%20%20%20%20%20%20%20subject%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {

 edges {

 node {

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

 }

 }`,

);

const data=await response.json();

```
query {
  events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
    edges {
      node {
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
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { events(query: \"action:'\''destroy'\'' AND subject_type:'\''PRODUCT'\''\", first: 10) { edges { node { id message ... on BasicEvent { action subjectType subject { __typename } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
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
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
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
    events(query: "action:'destroy' AND subject_type:'PRODUCT'", first: 10) {
      edges {
        node {
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"events": {

"edges": [

{

"node": {

"id": "gid://shopify/BasicEvent/625930779",

"message": "Product was deleted: Dandy Googles (Blue).",

"action": "destroy",

"subjectType": "PRODUCT",

"subject": {

"__typename": "Product"

}

}

}

]

}

}


---
*Content truncated at "Updates" section*