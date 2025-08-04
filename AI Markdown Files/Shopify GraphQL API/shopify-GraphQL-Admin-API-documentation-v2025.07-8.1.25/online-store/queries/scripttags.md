---
title: "scriptTags"
description: "Shopify GraphQL Admin API documentation for scripttags"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: scriptTags - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags

Markdown Content:
scriptTags - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#main-content)

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
*   
Online store

    *   
Queries

        *   [article](https://shopify.dev/docs/api/admin-graphql/latest/queries/article)
        *   [article Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleauthors)
        *   [articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)
        *   [blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog)
        *   [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)
        *   [blogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount)
        *   [comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)
        *   [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)
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

[Anchor to scriptTags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#top)
script Tags
===========

query

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

A list of script tags.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments)
ScriptTagConnection arguments
-----------------------------

•[ScriptTagConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#argument-query-filter-src)src

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to src](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#arguments-src)src

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The source URL of the script tag to filter by.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#returns-edges)edges

•[[Script Tag Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTagEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#returns-nodes)nodes

•[[Script Tag!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

non-null

A list of nodes that are contained in ScriptTagEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttags#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the first five script tags

#### Description

The following query retrieves the ID of the first five script tags for a shop.

#### Query

```graphql
query {
  scriptTags(first: 5) {
    edges {
      node {
        id
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
"query": "query { scriptTags(first: 5) { edges { node { id } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    scriptTags(first: 5) {
      edges {
        node {
          id
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
    scriptTags(first: 5) {
      edges {
        node {
          id
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
    scriptTags(first: 5) {
      edges {
        node {
          id
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "scriptTags": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ScriptTag/193372190"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ScriptTag/408148298"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ScriptTag/466217408"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ScriptTag/558170166"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ScriptTag/764371933"
        }
      }
    ]
  }
}
``` 
*   ### Get the first script tag with a specific source URL

#### Description

The following query retrieves the ID of the first script tag for a shop with a specific source URL.

#### Query

```graphql
query {
  scriptTags(first: 1, src: "https://js.example.org/foo.js") {
    edges {
      node {
        id
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
"query": "query { scriptTags(first: 1, src: \"https://js.example.org/foo.js\") { edges { node { id } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    scriptTags(first: 1, src: "https://js.example.org/foo.js") {
      edges {
        node {
          id
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
    scriptTags(first: 1, src: "https://js.example.org/foo.js") {
      edges {
        node {
          id
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
    scriptTags(first: 1, src: "https://js.example.org/foo.js") {
      edges {
        node {
          id
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "scriptTags": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ScriptTag/466217408"
        }
      }
    ]
  }
}
``` 
*   ### Retrieves a list of all script tags

#### Query

```graphql
query GetScriptTags($first: Int!, $cursor: String) {
  scriptTags(first: $first, after: $cursor) {
    nodes {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
    }
    pageInfo {
      startCursor
      endCursor
    }
  }
}
``` #### Variables

```json
{
  "first": 5,
  "cursor": null
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetScriptTags($first: Int!, $cursor: String) { scriptTags(first: $first, after: $cursor) { nodes { id cache createdAt displayScope src updatedAt } pageInfo { startCursor endCursor } } }",
 "variables": {
    "first": 5,
    "cursor": null
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetScriptTags($first: Int!, $cursor: String) {
    scriptTags(first: $first, after: $cursor) {
      nodes {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }`,
  {
    variables: {
        "first": 5,
        "cursor": null
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
  query GetScriptTags($first: Int!, $cursor: String) {
    scriptTags(first: $first, after: $cursor) {
      nodes {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }
QUERY

variables = {
  "first": 5,
  "cursor": null
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetScriptTags($first: Int!, $cursor: String) {
      scriptTags(first: $first, after: $cursor) {
        nodes {
          id
          cache
          createdAt
          displayScope
          src
          updatedAt
        }
        pageInfo {
          startCursor
          endCursor
        }
      }
    }`,
    "variables": {
        "first": 5,
        "cursor": null
    },
  },
});
``` #### Response

```json
{
  "scriptTags": {
    "nodes": [
      {
        "id": "gid://shopify/ScriptTag/193372190",
        "cache": false,
        "createdAt": "2024-10-29T22:38:08Z",
        "displayScope": "ONLINE_STORE",
        "src": "https://js.example.org/online_store.js",
        "updatedAt": "2024-10-29T22:38:08Z"
      },
      {
        "id": "gid://shopify/ScriptTag/408148298",
        "cache": false,
        "createdAt": "2024-10-29T22:38:08Z",
        "displayScope": "ALL",
        "src": "https://protocol-relative.com/foo.js",
        "updatedAt": "2024-10-29T22:38:08Z"
      },
      {
        "id": "gid://shopify/ScriptTag/466217408",
        "cache": false,
        "createdAt": "2024-10-29T22:38:08Z",
        "displayScope": "ALL",
        "src": "https://js.example.org/foo.js",
        "updatedAt": "2024-10-29T22:38:08Z"
      },
      {
        "id": "gid://shopify/ScriptTag/558170166",
        "cache": false,
        "createdAt": "2024-10-29T22:38:08Z",
        "displayScope": "ALL",
        "src": "https://js.example.org/bar.js?bar=baz",
        "updatedAt": "2024-10-29T22:38:08Z"
      },
      {
        "id": "gid://shopify/ScriptTag/764371933",
        "cache": false,
        "createdAt": "2024-10-29T22:38:08Z",
        "displayScope": "ALL",
        "src": "https://secure-js.example.org/bar.js?bar=baz",
        "updatedAt": "2024-10-29T22:38:08Z"
      }
    ],
    "pageInfo": {
      "startCursor": "eyJsYXN0X2lkIjoxOTMzNzIxOTAsImxhc3RfdmFsdWUiOiIxOTMzNzIxOTAifQ==",
      "endCursor": "eyJsYXN0X2lkIjo3NjQzNzE5MzMsImxhc3RfdmFsdWUiOiI3NjQzNzE5MzMifQ=="
    }
  }
}
``` 

Examples
--------

Get the first five script tags

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20scriptTags(first%3A%205)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 scriptTags(first: 5) {

 edges {

 node {

 id

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  scriptTags(first: 5) {
    edges {
      node {
        id
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
"query": "query { scriptTags(first: 5) { edges { node { id } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    scriptTags(first: 5) {
      edges {
        node {
          id
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
    scriptTags(first: 5) {
      edges {
        node {
          id
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
    scriptTags(first: 5) {
      edges {
        node {
          id
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

27

28

29

30

31

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

⌄

⌄

⌄

⌄

{

"scriptTags": {

"edges": [

{

"node": {

"id": "gid://shopify/ScriptTag/193372190"

}

},

{

"node": {

"id": "gid://shopify/ScriptTag/408148298"

}

},

{

"node": {

"id": "gid://shopify/ScriptTag/466217408"

}

},

{

"node": {

"id": "gid://shopify/ScriptTag/558170166"

}

},

{

"node": {

"id": "gid://shopify/ScriptTag/764371933"

}

}

]

}

}


---
*Content truncated at "Updates" section*