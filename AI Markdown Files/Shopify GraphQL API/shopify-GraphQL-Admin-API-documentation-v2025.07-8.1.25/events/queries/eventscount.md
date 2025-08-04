---
title: "eventsCount"
description: "Shopify GraphQL Admin API documentation for eventscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount"
extraction_method: "jina"
sections: ['Events', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: eventsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount

Markdown Content:
eventsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#main-content)

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

[Anchor to eventsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#top)
events Count
============

query

Count of events. Limited to a maximum of 10000.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#arguments)
Arguments
---------

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#argument-query-filter-action)action

•string

The action that occured.

Example:

*   `action:create`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#argument-query-filter-comments)comments

•boolean

Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

Example:

*   `false`
*   `true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the event happened.

Example:

*   `created_at:>2020-10-21`
*   `created_at:<now`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#argument-query-filter-subject_type)subject_type

•string

The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

Example:

*   `PRODUCT_VARIANT`
*   `PRODUCT`
*   `COLLECTION`

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/eventscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve the amount of events after a given time

#### Description

Retrieve the amount of events that happened after the 1st of January 2024.

#### Query

```graphql
query {
  eventsCount(query: "created_at:>=2024-01-01") {
    count
    precision
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { eventsCount(query: \"created_at:>=2024-01-01\") { count precision } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    eventsCount(query: "created_at:>=2024-01-01") {
      count
      precision
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
    eventsCount(query: "created_at:>=2024-01-01") {
      count
      precision
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    eventsCount(query: "created_at:>=2024-01-01") {
      count
      precision
    }
  }`,
});
``` #### Response

```json
{
  "eventsCount": {
    "count": 28,
    "precision": "EXACT"
  }
}
``` 
*   ### Retrieve the amount of product events, including comment events

#### Description

Retrieve the amount of product events, including comment events.

#### Query

```graphql
query {
  eventsCount(query: "comments:1 AND subject_type:'PRODUCT'") {
    count
    precision
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { eventsCount(query: \"comments:1 AND subject_type:'\''PRODUCT'\''\") { count precision } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    eventsCount(query: "comments:1 AND subject_type:'PRODUCT'") {
      count
      precision
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
    eventsCount(query: "comments:1 AND subject_type:'PRODUCT'") {
      count
      precision
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    eventsCount(query: "comments:1 AND subject_type:'PRODUCT'") {
      count
      precision
    }
  }`,
});
``` #### Response

```json
{
  "eventsCount": {
    "count": 7,
    "precision": "EXACT"
  }
}
``` 
*   ### Retrieves a count of events

#### Query

```graphql
query EventCount {
  eventsCount {
    count
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query EventCount { eventsCount { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query EventCount {
    eventsCount {
      count
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
  query EventCount {
    eventsCount {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query EventCount {
    eventsCount {
      count
    }
  }`,
});
``` #### Response

```json
{
  "eventsCount": {
    "count": 166
  }
}
``` 

Examples
--------

Retrieve the amount of events after a given time

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20eventsCount(query%3A%20%22created_at%3A%3E%3D2024-01-01%22)%20%7B%0A%20%20%20%20count%0A%20%20%20%20precision%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 eventsCount(query: "created_at:>=2024-01-01") {

 count

 precision

 }

 }`,

);

const data=await response.json();

```
query {
  eventsCount(query: "created_at:>=2024-01-01") {
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
"query": "query { eventsCount(query: \"created_at:>=2024-01-01\") { count precision } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    eventsCount(query: "created_at:>=2024-01-01") {
      count
      precision
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    eventsCount(query: "created_at:>=2024-01-01") {
      count
      precision
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
    eventsCount(query: "created_at:>=2024-01-01") {
      count
      precision
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

6

›

⌄

⌄

{

"eventsCount": {

"count": 28,

"precision": "EXACT"

}

}


---
*Content truncated at "Updates" section*