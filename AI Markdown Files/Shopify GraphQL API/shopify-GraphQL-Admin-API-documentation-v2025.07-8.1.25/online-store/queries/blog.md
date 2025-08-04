---
title: "blog"
description: "Shopify GraphQL Admin API documentation for blog"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/blog"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: blog - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/blog

Markdown Content:
blog - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog#main-content)

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

[Anchor to blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog#top)
blog
====

query

Returns a Blog resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Blog` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to Blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog#returns-Blog)Blog

•[Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs. Blogs are meant to be used as a type of magazine or newsletter for the shop, with content that changes over time.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a single Blog

#### Query

```graphql
query BlogShow($id: ID!) {
  blog(id: $id) {
    id
    title
    handle
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Blog/397675442"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query BlogShow($id: ID!) { blog(id: $id) { id title handle } }",
 "variables": {
    "id": "gid://shopify/Blog/397675442"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogShow($id: ID!) {
    blog(id: $id) {
      id
      title
      handle
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Blog/397675442"
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
  query BlogShow($id: ID!) {
    blog(id: $id) {
      id
      title
      handle
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Blog/397675442"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query BlogShow($id: ID!) {
      blog(id: $id) {
        id
        title
        handle
      }
    }`,
    "variables": {
        "id": "gid://shopify/Blog/397675442"
    },
  },
});
``` #### Response

```json
{
  "blog": {
    "id": "gid://shopify/Blog/397675442",
    "title": "Yo Blog",
    "handle": "smallcheese-blog"
  }
}
``` 
*   ### Retrieves a count of all articles from a blog

#### Query

```graphql
query BlogArticleCount($id: ID!) {
  blog(id: $id) {
    articlesCount {
      count
      precision
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Blog/397675442"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query BlogArticleCount($id: ID!) { blog(id: $id) { articlesCount { count precision } } }",
 "variables": {
    "id": "gid://shopify/Blog/397675442"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogArticleCount($id: ID!) {
    blog(id: $id) {
      articlesCount {
        count
        precision
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Blog/397675442"
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
  query BlogArticleCount($id: ID!) {
    blog(id: $id) {
      articlesCount {
        count
        precision
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Blog/397675442"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query BlogArticleCount($id: ID!) {
      blog(id: $id) {
        articlesCount {
          count
          precision
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Blog/397675442"
    },
  },
});
``` #### Response

```json
{
  "blog": {
    "articlesCount": {
      "count": 1,
      "precision": "EXACT"
    }
  }
}
``` 
*   ### Retrieves a list of all articles from a blog

#### Query

```graphql
query BlogArticleList($id: ID!) {
  blog(id: $id) {
    id
    articles(first: 10) {
      nodes {
        id
        handle
        author {
          firstName
          lastName
        }
        body
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Blog/397675442"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query BlogArticleList($id: ID!) { blog(id: $id) { id articles(first: 10) { nodes { id handle author { firstName lastName } body } } } }",
 "variables": {
    "id": "gid://shopify/Blog/397675442"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogArticleList($id: ID!) {
    blog(id: $id) {
      id
      articles(first: 10) {
        nodes {
          id
          handle
          author {
            firstName
            lastName
          }
          body
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Blog/397675442"
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
  query BlogArticleList($id: ID!) {
    blog(id: $id) {
      id
      articles(first: 10) {
        nodes {
          id
          handle
          author {
            firstName
            lastName
          }
          body
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Blog/397675442"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query BlogArticleList($id: ID!) {
      blog(id: $id) {
        id
        articles(first: 10) {
          nodes {
            id
            handle
            author {
              firstName
              lastName
            }
            body
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Blog/397675442"
    },
  },
});
``` #### Response

```json
{
  "blog": {
    "id": "gid://shopify/Blog/397675442",
    "articles": {
      "nodes": [
        {
          "id": "gid://shopify/Article/959752435",
          "handle": "you-should-buy-this",
          "author": {
            "firstName": "",
            "lastName": ""
          },
          "body": "<p>Go for it, get three.</p>"
        }
      ]
    }
  }
}
``` 

Examples
--------

Receive a single Blog

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20BlogShow(%24id%3A%20ID!)%20%7B%0A%20%20blog(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20handle%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FBlog%2F397675442%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query BlogShow($id: ID!) {

 blog(id: $id) {

 id

 title

 handle

 }

 }`,

{

variables:{

"id":"gid://shopify/Blog/397675442"

},

},

);

const data=await response.json();

```
query BlogShow($id: ID!) {
  blog(id: $id) {
    id
    title
    handle
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query BlogShow($id: ID!) { blog(id: $id) { id title handle } }",
 "variables": {
    "id": "gid://shopify/Blog/397675442"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogShow($id: ID!) {
    blog(id: $id) {
      id
      title
      handle
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Blog/397675442"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query BlogShow($id: ID!) {
      blog(id: $id) {
        id
        title
        handle
      }
    }`,
    "variables": {
        "id": "gid://shopify/Blog/397675442"
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
  query BlogShow($id: ID!) {
    blog(id: $id) {
      id
      title
      handle
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Blog/397675442"
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

"id": "gid://shopify/Blog/397675442"

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

7

›

⌄

⌄

{

"blog": {

"id": "gid://shopify/Blog/397675442",

"title": "Yo Blog",

"handle": "smallcheese-blog"

}

}


---
*Content truncated at "Updates" section*