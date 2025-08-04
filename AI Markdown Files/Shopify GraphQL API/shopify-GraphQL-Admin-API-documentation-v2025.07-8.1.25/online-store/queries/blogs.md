---
title: "blogs"
description: "Shopify GraphQL Admin API documentation for blogs"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: blogs - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs

Markdown Content:
blogs - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#main-content)

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

[Anchor to blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#top)
blogs
=====

query

List of the shop's blogs.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments)
BlogConnection arguments
------------------------

•[BlogConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#argument-query-filter-handle)handle

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#argument-query-filter-title)title

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-sortKey)sort Key

•[Blog Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#returns-edges)edges

•[[Blog Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#returns-nodes)nodes

•[[Blog!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

non-null

A list of nodes that are contained in BlogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of all blogs

#### Query

```graphql
query BlogList {
  blogs(first: 50) {
    nodes {
      id
      handle
      title
      updatedAt
      commentPolicy
      feed {
        path
        location
      }
      createdAt
      templateSuffix
      tags
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
"query": "query BlogList { blogs(first: 50) { nodes { id handle title updatedAt commentPolicy feed { path location } createdAt templateSuffix tags } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogList {
    blogs(first: 50) {
      nodes {
        id
        handle
        title
        updatedAt
        commentPolicy
        feed {
          path
          location
        }
        createdAt
        templateSuffix
        tags
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
  query BlogList {
    blogs(first: 50) {
      nodes {
        id
        handle
        title
        updatedAt
        commentPolicy
        feed {
          path
          location
        }
        createdAt
        templateSuffix
        tags
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query BlogList {
    blogs(first: 50) {
      nodes {
        id
        handle
        title
        updatedAt
        commentPolicy
        feed {
          path
          location
        }
        createdAt
        templateSuffix
        tags
      }
    }
  }`,
});
``` #### Response

```json
{
  "blogs": {
    "nodes": [
      {
        "id": "gid://shopify/Blog/389767568",
        "handle": "bluecheese-blog",
        "title": "The Blog",
        "updatedAt": "2024-02-02T00:00:00Z",
        "commentPolicy": "CLOSED",
        "feed": null,
        "createdAt": "2023-02-01T00:00:00Z",
        "templateSuffix": null,
        "tags": []
      },
      {
        "id": "gid://shopify/Blog/397675442",
        "handle": "smallcheese-blog",
        "title": "Yo Blog",
        "updatedAt": "2011-11-02T00:00:00Z",
        "commentPolicy": "CLOSED",
        "feed": null,
        "createdAt": "2024-10-29T22:38:08Z",
        "templateSuffix": null,
        "tags": [
          "not_alpha"
        ]
      },
      {
        "id": "gid://shopify/Blog/854997985",
        "handle": "bigcheese-blog",
        "title": "Mah Blog",
        "updatedAt": "2006-02-02T00:00:00Z",
        "commentPolicy": "CLOSED",
        "feed": null,
        "createdAt": "2006-02-01T00:00:00Z",
        "templateSuffix": null,
        "tags": [
          "alpha",
          "important"
        ]
      }
    ]
  }
}
``` 

Retrieve a list of all blogs
----------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20BlogList%20%7B%0A%20%20blogs(first%3A%2050)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20commentPolicy%0A%20%20%20%20%20%20feed%20%7B%0A%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%20%20location%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20templateSuffix%0A%20%20%20%20%20%20tags%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query BlogList {

 blogs(first: 50) {

 nodes {

 id

 handle

 title

 updatedAt

 commentPolicy

 feed {

 path

 location

 }

 createdAt

 templateSuffix

 tags

 }

 }

 }`,

);

const data=await response.json();

```
query BlogList {
  blogs(first: 50) {
    nodes {
      id
      handle
      title
      updatedAt
      commentPolicy
      feed {
        path
        location
      }
      createdAt
      templateSuffix
      tags
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
"query": "query BlogList { blogs(first: 50) { nodes { id handle title updatedAt commentPolicy feed { path location } createdAt templateSuffix tags } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogList {
    blogs(first: 50) {
      nodes {
        id
        handle
        title
        updatedAt
        commentPolicy
        feed {
          path
          location
        }
        createdAt
        templateSuffix
        tags
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query BlogList {
    blogs(first: 50) {
      nodes {
        id
        handle
        title
        updatedAt
        commentPolicy
        feed {
          path
          location
        }
        createdAt
        templateSuffix
        tags
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
  query BlogList {
    blogs(first: 50) {
      nodes {
        id
        handle
        title
        updatedAt
        commentPolicy
        feed {
          path
          location
        }
        createdAt
        templateSuffix
        tags
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

42

43

44

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"blogs": {

"nodes": [

{

"id": "gid://shopify/Blog/389767568",

"handle": "bluecheese-blog",

"title": "The Blog",

"updatedAt": "2024-02-02T00:00:00Z",

"commentPolicy": "CLOSED",

"feed": null,

"createdAt": "2023-02-01T00:00:00Z",

"templateSuffix": null,

"tags": []

},

{

"id": "gid://shopify/Blog/397675442",

"handle": "smallcheese-blog",

"title": "Yo Blog",

"updatedAt": "2011-11-02T00:00:00Z",

"commentPolicy": "CLOSED",

"feed": null,

"createdAt": "2024-10-29T22:38:08Z",

"templateSuffix": null,

"tags": [

"not_alpha"

]

},

{

"id": "gid://shopify/Blog/854997985",

"handle": "bigcheese-blog",

"title": "Mah Blog",

"updatedAt": "2006-02-02T00:00:00Z",

"commentPolicy": "CLOSED",

"feed": null,

"createdAt": "2006-02-01T00:00:00Z",

"templateSuffix": null,

"tags": [

"alpha",

"important"

]

}

]

}

}


---
*Content truncated at "Updates" section*