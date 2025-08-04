---
title: "theme"
description: "Shopify GraphQL Admin API documentation for theme"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/theme"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: theme - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/theme

Markdown Content:
theme - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#main-content)

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

[Anchor to theme](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#top)
theme
=====

query

Requires `read_themes` access scope.

Returns a particular theme for the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the theme.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------

[Anchor to OnlineStoreTheme](https://shopify.dev/docs/api/admin-graphql/latest/queries/theme#returns-OnlineStoreTheme)Online Store Theme

•[Online Store Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

A theme for display on the storefront.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get file content by theme id and filename

#### Query

```graphql
query {
  theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
    id
    name
    role
    files(filenames: ["assets/index.js"], first: 1) {
      nodes {
        body {
          ... on OnlineStoreThemeFileBodyText {
            content
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
"query": "query { theme(id: \"gid://shopify/OnlineStoreTheme/225007463\") { id name role files(filenames: [\"assets/index.js\"], first: 1) { nodes { body { ... on OnlineStoreThemeFileBodyText { content } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files(filenames: ["assets/index.js"], first: 1) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
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
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files(filenames: ["assets/index.js"], first: 1) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
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
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files(filenames: ["assets/index.js"], first: 1) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
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
  "theme": {
    "id": "gid://shopify/OnlineStoreTheme/225007463",
    "name": "Comfort",
    "role": "UNPUBLISHED",
    "files": {
      "nodes": [
        {
          "body": {
            "content": "console.log('foo');"
          }
        }
      ]
    }
  }
}
``` 
*   ### Get theme by id

#### Query

```graphql
query {
  theme(id: "gid://shopify/OnlineStoreTheme/529529152") {
    id
    name
    role
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { theme(id: \"gid://shopify/OnlineStoreTheme/529529152\") { id name role } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    theme(id: "gid://shopify/OnlineStoreTheme/529529152") {
      id
      name
      role
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
    theme(id: "gid://shopify/OnlineStoreTheme/529529152") {
      id
      name
      role
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    theme(id: "gid://shopify/OnlineStoreTheme/529529152") {
      id
      name
      role
    }
  }`,
});
``` #### Response

```json
{
  "theme": {
    "id": "gid://shopify/OnlineStoreTheme/529529152",
    "name": "Comfort",
    "role": "MAIN"
  }
}
``` 
*   ### Get theme files by theme id

#### Query

```graphql
query {
  theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
    id
    name
    role
    files {
      edges {
        node {
          filename
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
            }
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
"query": "query { theme(id: \"gid://shopify/OnlineStoreTheme/225007463\") { id name role files { edges { node { filename body { ... on OnlineStoreThemeFileBodyText { content } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files {
        edges {
          node {
            filename
            body {
              ... on OnlineStoreThemeFileBodyText {
                content
              }
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
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files {
        edges {
          node {
            filename
            body {
              ... on OnlineStoreThemeFileBodyText {
                content
              }
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
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files {
        edges {
          node {
            filename
            body {
              ... on OnlineStoreThemeFileBodyText {
                content
              }
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
  "theme": {
    "id": "gid://shopify/OnlineStoreTheme/225007463",
    "name": "Comfort",
    "role": "UNPUBLISHED",
    "files": {
      "edges": [
        {
          "node": {
            "filename": "assets/index.js",
            "body": {
              "content": "console.log('foo');"
            }
          }
        },
        {
          "node": {
            "filename": "assets/styles.css",
            "body": {
              "content": "p { color: red; }"
            }
          }
        },
        {
          "node": {
            "filename": "layout/theme.liquid",
            "body": {
              "content": "<html><head>{{ content_for_header }}</head><body><p>sandbox</p><div>{{ content_for_layout }}</div></body></html>"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a list of assets for a theme

#### Query

```graphql
query ThemeFilesPaginated($themeId: ID!) {
  theme(id: $themeId) {
    files(first: 50) {
      edges {
        node {
          body {
            ... on OnlineStoreThemeFileBodyBase64 {
              contentBase64
            }
            ... on OnlineStoreThemeFileBodyText {
              content
            }
            ... on OnlineStoreThemeFileBodyUrl {
              url
            }
          }
          checksumMd5
          contentType
          createdAt
          filename
          size
          updatedAt
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      userErrors {
        code
        filename
      }
    }
  }
}
``` #### Variables

```json
{
  "themeId": "gid://shopify/OnlineStoreTheme/225007463"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ThemeFilesPaginated($themeId: ID!) { theme(id: $themeId) { files(first: 50) { edges { node { body { ... on OnlineStoreThemeFileBodyBase64 { contentBase64 } ... on OnlineStoreThemeFileBodyText { content } ... on OnlineStoreThemeFileBodyUrl { url } } checksumMd5 contentType createdAt filename size updatedAt } cursor } pageInfo { endCursor hasNextPage hasPreviousPage startCursor } userErrors { code filename } } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/225007463"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ThemeFilesPaginated($themeId: ID!) {
    theme(id: $themeId) {
      files(first: 50) {
        edges {
          node {
            body {
              ... on OnlineStoreThemeFileBodyBase64 {
                contentBase64
              }
              ... on OnlineStoreThemeFileBodyText {
                content
              }
              ... on OnlineStoreThemeFileBodyUrl {
                url
              }
            }
            checksumMd5
            contentType
            createdAt
            filename
            size
            updatedAt
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        userErrors {
          code
          filename
        }
      }
    }
  }`,
  {
    variables: {
        "themeId": "gid://shopify/OnlineStoreTheme/225007463"
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
  query ThemeFilesPaginated($themeId: ID!) {
    theme(id: $themeId) {
      files(first: 50) {
        edges {
          node {
            body {
              ... on OnlineStoreThemeFileBodyBase64 {
                contentBase64
              }
              ... on OnlineStoreThemeFileBodyText {
                content
              }
              ... on OnlineStoreThemeFileBodyUrl {
                url
              }
            }
            checksumMd5
            contentType
            createdAt
            filename
            size
            updatedAt
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        userErrors {
          code
          filename
        }
      }
    }
  }
QUERY

variables = {
  "themeId": "gid://shopify/OnlineStoreTheme/225007463"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ThemeFilesPaginated($themeId: ID!) {
      theme(id: $themeId) {
        files(first: 50) {
          edges {
            node {
              body {
                ... on OnlineStoreThemeFileBodyBase64 {
                  contentBase64
                }
                ... on OnlineStoreThemeFileBodyText {
                  content
                }
                ... on OnlineStoreThemeFileBodyUrl {
                  url
                }
              }
              checksumMd5
              contentType
              createdAt
              filename
              size
              updatedAt
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          userErrors {
            code
            filename
          }
        }
      }
    }`,
    "variables": {
        "themeId": "gid://shopify/OnlineStoreTheme/225007463"
    },
  },
});
``` #### Response

```json
{
  "theme": {
    "files": {
      "edges": [
        {
          "node": {
            "body": {
              "content": "console.log('foo');"
            },
            "checksumMd5": "fd33535a878f593c91bf93c7b39da272",
            "contentType": "application/javascript",
            "createdAt": "2024-10-30T22:18:48Z",
            "filename": "assets/index.js",
            "size": "19",
            "updatedAt": "2024-10-30T22:18:48Z"
          },
          "cursor": "ImFzc2V0c1wvaW5kZXguanMi"
        },
        {
          "node": {
            "body": {
              "content": "p { color: red; }"
            },
            "checksumMd5": "5fc2748b49b0a877ea0bb50a105038ab",
            "contentType": "text/css",
            "createdAt": "2024-10-30T22:18:48Z",
            "filename": "assets/styles.css",
            "size": "17",
            "updatedAt": "2024-10-30T22:18:48Z"
          },
          "cursor": "ImFzc2V0c1wvc3R5bGVzLmNzcyI="
        },
        {
          "node": {
            "body": {
              "content": "<html><head>{{ content_for_header }}</head><body><p>sandbox</p><div>{{ content_for_layout }}</div></body></html>"
            },
            "checksumMd5": null,
            "contentType": "application/x-liquid",
            "createdAt": "2010-07-12T19:31:50Z",
            "filename": "layout/theme.liquid",
            "size": "3252",
            "updatedAt": "2010-07-12T19:31:50Z"
          },
          "cursor": "ImxheW91dFwvdGhlbWUubGlxdWlkIg=="
        }
      ],
      "pageInfo": {
        "endCursor": "ImxheW91dFwvdGhlbWUubGlxdWlkIg==",
        "hasNextPage": false,
        "hasPreviousPage": false,
        "startCursor": "ImFzc2V0c1wvaW5kZXguanMi"
      },
      "userErrors": []
    }
  }
}
``` 
*   ### Retrieves a single asset for a theme

#### Query

```graphql
query ThemeFiles($themeId: ID!, $filenames: [String!]!) {
  theme(id: $themeId) {
    files(filenames: $filenames) {
      nodes {
        body {
          ... on OnlineStoreThemeFileBodyBase64 {
            contentBase64
          }
          ... on OnlineStoreThemeFileBodyText {
            content
          }
          ... on OnlineStoreThemeFileBodyUrl {
            url
          }
        }
        checksumMd5
        contentType
        createdAt
        filename
        size
        updatedAt
      }
      userErrors {
        code
        filename
      }
    }
  }
}
``` #### Variables

```json
{
  "themeId": "gid://shopify/OnlineStoreTheme/225007463",
  "filenames": [
    "assets/index.js"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ThemeFiles($themeId: ID!, $filenames: [String!]!) { theme(id: $themeId) { files(filenames: $filenames) { nodes { body { ... on OnlineStoreThemeFileBodyBase64 { contentBase64 } ... on OnlineStoreThemeFileBodyText { content } ... on OnlineStoreThemeFileBodyUrl { url } } checksumMd5 contentType createdAt filename size updatedAt } userErrors { code filename } } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/225007463",
    "filenames": [
      "assets/index.js"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ThemeFiles($themeId: ID!, $filenames: [String!]!) {
    theme(id: $themeId) {
      files(filenames: $filenames) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyBase64 {
              contentBase64
            }
            ... on OnlineStoreThemeFileBodyText {
              content
            }
            ... on OnlineStoreThemeFileBodyUrl {
              url
            }
          }
          checksumMd5
          contentType
          createdAt
          filename
          size
          updatedAt
        }
        userErrors {
          code
          filename
        }
      }
    }
  }`,
  {
    variables: {
        "themeId": "gid://shopify/OnlineStoreTheme/225007463",
        "filenames": [
            "assets/index.js"
        ]
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
  query ThemeFiles($themeId: ID!, $filenames: [String!]!) {
    theme(id: $themeId) {
      files(filenames: $filenames) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyBase64 {
              contentBase64
            }
            ... on OnlineStoreThemeFileBodyText {
              content
            }
            ... on OnlineStoreThemeFileBodyUrl {
              url
            }
          }
          checksumMd5
          contentType
          createdAt
          filename
          size
          updatedAt
        }
        userErrors {
          code
          filename
        }
      }
    }
  }
QUERY

variables = {
  "themeId": "gid://shopify/OnlineStoreTheme/225007463",
  "filenames": [
    "assets/index.js"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ThemeFiles($themeId: ID!, $filenames: [String!]!) {
      theme(id: $themeId) {
        files(filenames: $filenames) {
          nodes {
            body {
              ... on OnlineStoreThemeFileBodyBase64 {
                contentBase64
              }
              ... on OnlineStoreThemeFileBodyText {
                content
              }
              ... on OnlineStoreThemeFileBodyUrl {
                url
              }
            }
            checksumMd5
            contentType
            createdAt
            filename
            size
            updatedAt
          }
          userErrors {
            code
            filename
          }
        }
      }
    }`,
    "variables": {
        "themeId": "gid://shopify/OnlineStoreTheme/225007463",
        "filenames": [
            "assets/index.js"
        ]
    },
  },
});
``` #### Response

```json
{
  "theme": {
    "files": {
      "nodes": [
        {
          "body": {
            "content": "console.log('foo');"
          },
          "checksumMd5": "fd33535a878f593c91bf93c7b39da272",
          "contentType": "application/javascript",
          "createdAt": "2024-10-30T22:18:46Z",
          "filename": "assets/index.js",
          "size": "19",
          "updatedAt": "2024-10-30T22:18:46Z"
        }
      ],
      "userErrors": []
    }
  }
}
``` 
*   ### Retrieves a single theme by its ID

#### Query

```graphql
query Theme($id: ID!) {
  theme(id: $id) {
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
}
``` #### Variables

```json
{
  "id": "gid://shopify/OnlineStoreTheme/529529152"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query Theme($id: ID!) { theme(id: $id) { createdAt id name prefix processing processingFailed role themeStoreId updatedAt } }",
 "variables": {
    "id": "gid://shopify/OnlineStoreTheme/529529152"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query Theme($id: ID!) {
    theme(id: $id) {
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
  }`,
  {
    variables: {
        "id": "gid://shopify/OnlineStoreTheme/529529152"
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
  query Theme($id: ID!) {
    theme(id: $id) {
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
  }
QUERY

variables = {
  "id": "gid://shopify/OnlineStoreTheme/529529152"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query Theme($id: ID!) {
      theme(id: $id) {
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
    }`,
    "variables": {
        "id": "gid://shopify/OnlineStoreTheme/529529152"
    },
  },
});
``` #### Response

```json
{
  "theme": {
    "createdAt": "2024-10-30T22:18:09Z",
    "id": "gid://shopify/OnlineStoreTheme/529529152",
    "name": "Comfort",
    "prefix": "/t/1",
    "processing": false,
    "processingFailed": false,
    "role": "MAIN",
    "themeStoreId": 1234,
    "updatedAt": "2024-10-30T22:18:09Z"
  }
}
``` 

Examples
--------

Get file content by theme id and filename

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20theme(id%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F225007463%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20role%0A%20%20%20%20files(filenames%3A%20%5B%22assets%2Findex.js%22%5D%2C%20first%3A%201)%20%7B%0A%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20OnlineStoreThemeFileBodyText%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 theme(id: "gid://shopify/OnlineStoreTheme/225007463") {

 id

 name

 role

 files(filenames: ["assets/index.js"], first: 1) {

 nodes {

 body {

 ... on OnlineStoreThemeFileBodyText {

 content

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
  theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
    id
    name
    role
    files(filenames: ["assets/index.js"], first: 1) {
      nodes {
        body {
          ... on OnlineStoreThemeFileBodyText {
            content
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
"query": "query { theme(id: \"gid://shopify/OnlineStoreTheme/225007463\") { id name role files(filenames: [\"assets/index.js\"], first: 1) { nodes { body { ... on OnlineStoreThemeFileBodyText { content } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files(filenames: ["assets/index.js"], first: 1) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
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
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files(filenames: ["assets/index.js"], first: 1) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
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
    theme(id: "gid://shopify/OnlineStoreTheme/225007463") {
      id
      name
      role
      files(filenames: ["assets/index.js"], first: 1) {
        nodes {
          body {
            ... on OnlineStoreThemeFileBodyText {
              content
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"theme": {

"id": "gid://shopify/OnlineStoreTheme/225007463",

"name": "Comfort",

"role": "UNPUBLISHED",

"files": {

"nodes": [

{

"body": {

"content": "console.log('foo');"

}

}

]

}

}

}


---
*Content truncated at "Updates" section*