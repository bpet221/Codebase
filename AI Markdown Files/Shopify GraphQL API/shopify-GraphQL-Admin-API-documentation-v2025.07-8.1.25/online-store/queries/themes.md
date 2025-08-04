---
title: "themes"
description: "Shopify GraphQL Admin API documentation for themes"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/themes"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: themes - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/themes

Markdown Content:
themes - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#main-content)

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
*   
Online Store

    *   
Queries

        *   [article](https://shopify.dev/docs/api/admin-graphql/latest/queries/article)
        *   [article Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors)
        *   [articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)
        *   [blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog)
        *   [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)
        *   [comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)
        *   [customer Account Page](https://shopify.dev/docs/api/admin-graphql/latest/queries/customeraccountpage)
        *   [customer Account Pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/customeraccountpages)
        *   [menu](https://shopify.dev/docs/api/admin-graphql/latest/queries/menu)
        *   [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)
        *   [online Store](https://shopify.dev/docs/api/admin-graphql/latest/queries/onlinestore)
        *   [page](https://shopify.dev/docs/api/admin-graphql/latest/queries/page)
        *   [pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)
        *   [pages Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pagescount)
        *   [script Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag)
        *   [script Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags)
        *   [theme](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme)
        *   [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)
        *   [url Redirect](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirect)
        *   [url Redirect Import](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirectimport)
        *   [url Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects)
        *   [url Redirect Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirectsavedsearches)
        *   [url Redirects Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirectscount)

    *   Mutations   
    *   Objects   

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

[Anchor to themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#top)
themes
======

query

Requires `read_themes` access scope.

Returns a paginated list of themes for the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments)
OnlineStoreThemeConnection arguments
------------------------------------

•[OnlineStoreThemeConnection](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to names](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-names)names

•[[String!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The theme names to filter by. Use '*' to match zero or more characters.

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to roles](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles)roles

•[[Theme Role!]](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

The theme roles to filter by.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#returns-edges)edges

•[[Online Store Theme Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#returns-nodes)nodes

•[[Online Store Theme!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

non-null

A list of nodes that are contained in OnlineStoreThemeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get first theme

#### Query

```graphql
query {
  themes(first: 1) {
    edges {
      node {
        name
        id
        role
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
"query": "query { themes(first: 1) { edges { node { name id role } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    themes(first: 1) {
      edges {
        node {
          name
          id
          role
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
    themes(first: 1) {
      edges {
        node {
          name
          id
          role
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
    themes(first: 1) {
      edges {
        node {
          name
          id
          role
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "themes": {
    "edges": [
      {
        "node": {
          "name": "main",
          "id": "gid://shopify/OnlineStoreTheme/672824141",
          "role": "MAIN"
        }
      }
    ]
  }
}
``` 
*   ### Get themes by name

#### Query

```graphql
query {
  themes(first: 10, names: ["Com*", "Development"]) {
    nodes {
      id
      name
      role
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
"query": "query { themes(first: 10, names: [\"Com*\", \"Development\"]) { nodes { id name role } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    themes(first: 10, names: ["Com*", "Development"]) {
      nodes {
        id
        name
        role
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
    themes(first: 10, names: ["Com*", "Development"]) {
      nodes {
        id
        name
        role
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
    themes(first: 10, names: ["Com*", "Development"]) {
      nodes {
        id
        name
        role
      }
    }
  }`,
});
``` #### Response

```json
{
  "themes": {
    "nodes": [
      {
        "id": "gid://shopify/OnlineStoreTheme/225007463",
        "name": "Comfort",
        "role": "UNPUBLISHED"
      },
      {
        "id": "gid://shopify/OnlineStoreTheme/273775728",
        "name": "Development",
        "role": "DEVELOPMENT"
      },
      {
        "id": "gid://shopify/OnlineStoreTheme/529529152",
        "name": "Comfort",
        "role": "MAIN"
      },
      {
        "id": "gid://shopify/OnlineStoreTheme/756912091",
        "name": "Comfort Copy",
        "role": "UNPUBLISHED"
      }
    ]
  }
}
``` 
*   ### Retrieves a list of themes

#### Query

```graphql
query ThemeList {
  themes(first: 10) {
    edges {
      node {
        createdAt
        id
        name
        prefix
        processing
        processingFailed
        role
        themeStoreId
        updatedAt
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
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
"query": "query ThemeList { themes(first: 10) { edges { node { createdAt id name prefix processing processingFailed role themeStoreId updatedAt } cursor } pageInfo { hasNextPage hasPreviousPage } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ThemeList {
    themes(first: 10) {
      edges {
        node {
          createdAt
          id
          name
          prefix
          processing
          processingFailed
          role
          themeStoreId
          updatedAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
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
  query ThemeList {
    themes(first: 10) {
      edges {
        node {
          createdAt
          id
          name
          prefix
          processing
          processingFailed
          role
          themeStoreId
          updatedAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ThemeList {
    themes(first: 10) {
      edges {
        node {
          createdAt
          id
          name
          prefix
          processing
          processingFailed
          role
          themeStoreId
          updatedAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }`,
});
``` #### Response

```json
{
  "themes": {
    "edges": [
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/69265273",
          "name": "Blockified",
          "prefix": "/t/5",
          "processing": false,
          "processingFailed": false,
          "role": "UNPUBLISHED",
          "themeStoreId": null,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo2OTI2NTI3MywibGFzdF92YWx1ZSI6NjkyNjUyNzN9"
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/225007463",
          "name": "Comfort",
          "prefix": "/t/10",
          "processing": false,
          "processingFailed": false,
          "role": "UNPUBLISHED",
          "themeStoreId": 1234,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjoyMjUwMDc0NjMsImxhc3RfdmFsdWUiOjIyNTAwNzQ2M30="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/273775728",
          "name": "Development",
          "prefix": "/t/8",
          "processing": false,
          "processingFailed": false,
          "role": "DEVELOPMENT",
          "themeStoreId": null,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjoyNzM3NzU3MjgsImxhc3RfdmFsdWUiOjI3Mzc3NTcyOH0="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/486964194",
          "name": "Legacy",
          "prefix": "/t/4",
          "processing": false,
          "processingFailed": false,
          "role": "UNPUBLISHED",
          "themeStoreId": 12,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo0ODY5NjQxOTQsImxhc3RfdmFsdWUiOjQ4Njk2NDE5NH0="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/529529152",
          "name": "Comfort",
          "prefix": "/t/1",
          "processing": false,
          "processingFailed": false,
          "role": "MAIN",
          "themeStoreId": 1234,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo1Mjk1MjkxNTIsImxhc3RfdmFsdWUiOjUyOTUyOTE1Mn0="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/535899345",
          "name": "Internationalized",
          "prefix": "/t/6",
          "processing": false,
          "processingFailed": false,
          "role": "UNPUBLISHED",
          "themeStoreId": null,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo1MzU4OTkzNDUsImxhc3RfdmFsdWUiOjUzNTg5OTM0NX0="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/756912091",
          "name": "Comfort Copy",
          "prefix": "/t/9",
          "processing": false,
          "processingFailed": false,
          "role": "UNPUBLISHED",
          "themeStoreId": 12345,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo3NTY5MTIwOTEsImxhc3RfdmFsdWUiOjc1NjkxMjA5MX0="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/908009861",
          "name": "Sandbox",
          "prefix": "/t/3",
          "processing": false,
          "processingFailed": false,
          "role": "UNPUBLISHED",
          "themeStoreId": 1234,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo5MDgwMDk4NjEsImxhc3RfdmFsdWUiOjkwODAwOTg2MX0="
      },
      {
        "node": {
          "createdAt": "2024-10-30T22:18:09Z",
          "id": "gid://shopify/OnlineStoreTheme/918442480",
          "name": "Speed",
          "prefix": "/t/2",
          "processing": false,
          "processingFailed": false,
          "role": "MOBILE",
          "themeStoreId": null,
          "updatedAt": "2024-10-30T22:18:09Z"
        },
        "cursor": "eyJsYXN0X2lkIjo5MTg0NDI0ODAsImxhc3RfdmFsdWUiOjkxODQ0MjQ4MH0="
      }
    ],
    "pageInfo": {
      "hasNextPage": false,
      "hasPreviousPage": false
    }
  }
}
``` 

Examples
--------

Get first theme

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20themes(first%3A%201)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20role%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 themes(first: 1) {

 edges {

 node {

 name

 id

 role

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  themes(first: 1) {
    edges {
      node {
        name
        id
        role
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
"query": "query { themes(first: 1) { edges { node { name id role } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    themes(first: 1) {
      edges {
        node {
          name
          id
          role
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
    themes(first: 1) {
      edges {
        node {
          name
          id
          role
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
    themes(first: 1) {
      edges {
        node {
          name
          id
          role
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

›

⌄

⌄

⌄

⌄

⌄

{

"themes": {

"edges": [

{

"node": {

"name": "main",

"id": "gid://shopify/OnlineStoreTheme/672824141",

"role": "MAIN"

}

}

]

}

}


---
*Content truncated at "Updates" section*