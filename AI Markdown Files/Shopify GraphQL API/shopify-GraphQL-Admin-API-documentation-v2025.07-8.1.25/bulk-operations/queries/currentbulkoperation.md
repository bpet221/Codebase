---
title: "currentBulkOperation"
description: "Shopify GraphQL Admin API documentation for currentbulkoperation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation"
extraction_method: "jina"
sections: ['Bulk operations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: currentBulkOperation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation

Markdown Content:
currentBulkOperation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation#main-content)

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
*   
Bulk operations

    *   
Queries

        *   [current Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation)

    *   Mutations   
    *   Objects   

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
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to currentBulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation#top)
current Bulk Operation
======================

query

Returns the current app's most recent BulkOperation. Apps can run one bulk query and one bulk mutation operation at a time, by shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation#arguments)
Arguments
---------

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation#arguments-type)type

•[Bulk Operation Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType)

Default:QUERY

The current bulk operation's type.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to BulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentbulkoperation#returns-BulkOperation)Bulk Operation

•[Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

An asynchronous long-running operation to fetch data in bulk or to bulk import data.

Bulk operations are created using the `bulkOperationRunQuery` or `bulkOperationRunMutation` mutation. After they are created, clients should poll the `status` field for updates. When `COMPLETED`, the `url` field contains a link to the data in [JSONL](http://jsonlines.org/) format.

Refer to the [bulk operations guide](https://shopify.dev/api/usage/bulk-operations/imports) for more details.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the currentBulkOperation for a query

#### Description

The following query retrieves the currentBulkOperation for a query.

#### Query

```graphql
query {
  currentBulkOperation(type: QUERY) {
    id
    type
    status
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { currentBulkOperation(type: QUERY) { id type status } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    currentBulkOperation(type: QUERY) {
      id
      type
      status
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
    currentBulkOperation(type: QUERY) {
      id
      type
      status
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    currentBulkOperation(type: QUERY) {
      id
      type
      status
    }
  }`,
});
``` #### Response

```json
{
  "currentBulkOperation": {
    "id": "gid://shopify/BulkOperation/726270413",
    "type": "QUERY",
    "status": "CREATED"
  }
}
``` 

Get the currentBulkOperation for a query
----------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20currentBulkOperation(type%3A%20QUERY)%20%7B%0A%20%20%20%20id%0A%20%20%20%20type%0A%20%20%20%20status%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 currentBulkOperation(type: QUERY) {

 id

 type

 status

 }

 }`,

);

const data=await response.json();

```
query {
  currentBulkOperation(type: QUERY) {
    id
    type
    status
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { currentBulkOperation(type: QUERY) { id type status } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    currentBulkOperation(type: QUERY) {
      id
      type
      status
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    currentBulkOperation(type: QUERY) {
      id
      type
      status
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
    currentBulkOperation(type: QUERY) {
      id
      type
      status
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

7

›

⌄

⌄

{

"currentBulkOperation": {

"id": "gid://shopify/BulkOperation/726270413",

"type": "QUERY",

"status": "CREATED"

}

}


---
*Content truncated at "Updates" section*