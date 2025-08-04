---
title: "urlRedirects"
description: "Shopify GraphQL Admin API documentation for urlredirects"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: urlRedirects - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects

Markdown Content:
urlRedirects - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#main-content)

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

[Anchor to urlRedirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#top)
url Redirects
=============

query

A list of redirects for a shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments)
UrlRedirectConnection arguments
-------------------------------

•[UrlRedirectConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#argument-query-filter-path)path

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#argument-query-filter-target)target

•string

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#arguments-sortKey)sort Key

•[Url Redirect Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#returns-edges)edges

•[[Url Redirect Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#returns-nodes)nodes

•[[Url Redirect!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

non-null

A list of nodes that are contained in UrlRedirectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlredirects#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a list of URL redirects

#### Query

```graphql
query UrlRedirects {
  urlRedirects(first: 100) {
    edges {
      node {
        id
        path
        target
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
"query": "query UrlRedirects { urlRedirects(first: 100) { edges { node { id path target } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query UrlRedirects {
    urlRedirects(first: 100) {
      edges {
        node {
          id
          path
          target
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
  query UrlRedirects {
    urlRedirects(first: 100) {
      edges {
        node {
          id
          path
          target
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
  data: `query UrlRedirects {
    urlRedirects(first: 100) {
      edges {
        node {
          id
          path
          target
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "urlRedirects": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/UrlRedirect/510765931",
          "path": "/page%20with%20many%20spaces",
          "target": "/products/element"
        }
      },
      {
        "node": {
          "id": "gid://shopify/UrlRedirect/891487173",
          "path": "/about-us",
          "target": "/pages/aboutus"
        }
      },
      {
        "node": {
          "id": "gid://shopify/UrlRedirect/905192165",
          "path": "/about",
          "target": "/pages/aboutus"
        }
      },
      {
        "node": {
          "id": "gid://shopify/UrlRedirect/979034143",
          "path": "/2008/01/01/look-at-my-cool-new-snowboard",
          "target": "/products/draft"
        }
      },
      {
        "node": {
          "id": "gid://shopify/UrlRedirect/984542198",
          "path": "/aboutus",
          "target": "/pages/aboutus"
        }
      }
    ]
  }
}
``` 

Retrieves a list of URL redirects
---------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20UrlRedirects%20%7B%0A%20%20urlRedirects(first%3A%20100)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%20%20target%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query UrlRedirects {

 urlRedirects(first: 100) {

 edges {

 node {

 id

 path

 target

 }

 }

 }

 }`,

);

const data=await response.json();

```
query UrlRedirects {
  urlRedirects(first: 100) {
    edges {
      node {
        id
        path
        target
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
"query": "query UrlRedirects { urlRedirects(first: 100) { edges { node { id path target } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query UrlRedirects {
    urlRedirects(first: 100) {
      edges {
        node {
          id
          path
          target
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
  data: `query UrlRedirects {
    urlRedirects(first: 100) {
      edges {
        node {
          id
          path
          target
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
  query UrlRedirects {
    urlRedirects(first: 100) {
      edges {
        node {
          id
          path
          target
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

32

33

34

35

36

37

38

39

40

41

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

"urlRedirects": {

"edges": [

{

"node": {

"id": "gid://shopify/UrlRedirect/510765931",

"path": "/page%20with%20many%20spaces",

"target": "/products/element"

}

},

{

"node": {

"id": "gid://shopify/UrlRedirect/891487173",

"path": "/about-us",

"target": "/pages/aboutus"

}

},

{

"node": {

"id": "gid://shopify/UrlRedirect/905192165",

"path": "/about",

"target": "/pages/aboutus"

}

},

{

"node": {

"id": "gid://shopify/UrlRedirect/979034143",

"path": "/2008/01/01/look-at-my-cool-new-snowboard",

"target": "/products/draft"

}

},

{

"node": {

"id": "gid://shopify/UrlRedirect/984542198",

"path": "/aboutus",

"target": "/pages/aboutus"

}

}

]

}

}


---
*Content truncated at "Updates" section*