---
title: "comments"
description: "Shopify GraphQL Admin API documentation for comments"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/comments"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: comments - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/comments

Markdown Content:
comments - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#main-content)

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

[Anchor to comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#top)
comments
========

query

List of the shop's comments.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments)
CommentConnection arguments
---------------------------

•[CommentConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the comment was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-published_at)published_at

•time

Filter by the date and time when the comment was published.

Example:

*   `published_at:>'2020-10-21T23:39:20Z'`
*   `published_at:<now`
*   `published_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-published_status)published_status

•string

Filter by published status

Valid values:

*   `any`
*   `published`
*   `unpublished`

Example:

*   `published_status:any`
*   `published_status:published`
*   `published_status:unpublished`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-status)status

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the comment was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<=2024`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#arguments-sortKey)sort Key

•[Comment Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#returns-edges)edges

•[[Comment Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#returns-nodes)nodes

•[[Comment!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

non-null

A list of nodes that are contained in CommentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a list of comments

#### Query

```graphql
query CommentList {
  comments(first: 50) {
    nodes {
      id
      body
      bodyHtml
      author {
        name
      }
      ip
      publishedAt
      status
      userAgent
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
"query": "query CommentList { comments(first: 50) { nodes { id body bodyHtml author { name } ip publishedAt status userAgent } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CommentList {
    comments(first: 50) {
      nodes {
        id
        body
        bodyHtml
        author {
          name
        }
        ip
        publishedAt
        status
        userAgent
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
  query CommentList {
    comments(first: 50) {
      nodes {
        id
        body
        bodyHtml
        author {
          name
        }
        ip
        publishedAt
        status
        userAgent
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CommentList {
    comments(first: 50) {
      nodes {
        id
        body
        bodyHtml
        author {
          name
        }
        ip
        publishedAt
        status
        userAgent
      }
    }
  }`,
});
``` #### Response

```json
{
  "comments": {
    "nodes": [
      {
        "id": "gid://shopify/Comment/9450891",
        "body": "Check my casino at ... This will be marked as spam by akismet, because of the author name.",
        "bodyHtml": "<p>Check my casino at ... This will be marked as spam by akismet, because of the author name.</p>",
        "author": {
          "name": "viagra-test-123"
        },
        "ip": "127.0.0.1",
        "publishedAt": null,
        "status": "SPAM",
        "userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"
      },
      {
        "id": "gid://shopify/Comment/52127930",
        "body": "Hi author, I really _like_ what you're doing there.",
        "bodyHtml": "<p>Hi author, I really <em>like</em> what you're doing there.</p>",
        "author": {
          "name": "Soleone"
        },
        "ip": "127.0.0.1",
        "publishedAt": null,
        "status": "PENDING",
        "userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"
      },
      {
        "id": "gid://shopify/Comment/64683838",
        "body": "Check my casino at ... This will be marked as spam by akismet, because of the author name.",
        "bodyHtml": "<p>Check my casino at ... This will be marked as spam by akismet, because of the author name.</p>",
        "author": {
          "name": "viagra-test-123"
        },
        "ip": "127.0.0.1",
        "publishedAt": null,
        "status": "PENDING",
        "userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"
      },
      {
        "id": "gid://shopify/Comment/145356500",
        "body": "Great blog, love it!",
        "bodyHtml": "<p>Great blog, love it!</p>",
        "author": {
          "name": "Bob Bobsen"
        },
        "ip": "127.0.0.1",
        "publishedAt": null,
        "status": "PUBLISHED",
        "userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"
      },
      {
        "id": "gid://shopify/Comment/757536350",
        "body": "Check my casino at ... This will be marked as spam by akismet, because of the author name.",
        "bodyHtml": "<p>Check my casino at ... This will be marked as spam by akismet, because of the author name.</p>",
        "author": {
          "name": "viagra-test-123"
        },
        "ip": "127.0.0.1",
        "publishedAt": null,
        "status": "UNAPPROVED",
        "userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"
      }
    ]
  }
}
``` 

Retrieves a list of comments
----------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CommentList%20%7B%0A%20%20comments(first%3A%2050)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20body%0A%20%20%20%20%20%20bodyHtml%0A%20%20%20%20%20%20author%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20ip%0A%20%20%20%20%20%20publishedAt%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20userAgent%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query CommentList {

 comments(first: 50) {

 nodes {

 id

 body

 bodyHtml

 author {

 name

 }

 ip

 publishedAt

 status

 userAgent

 }

 }

 }`,

);

const data=await response.json();

```
query CommentList {
  comments(first: 50) {
    nodes {
      id
      body
      bodyHtml
      author {
        name
      }
      ip
      publishedAt
      status
      userAgent
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
"query": "query CommentList { comments(first: 50) { nodes { id body bodyHtml author { name } ip publishedAt status userAgent } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CommentList {
    comments(first: 50) {
      nodes {
        id
        body
        bodyHtml
        author {
          name
        }
        ip
        publishedAt
        status
        userAgent
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CommentList {
    comments(first: 50) {
      nodes {
        id
        body
        bodyHtml
        author {
          name
        }
        ip
        publishedAt
        status
        userAgent
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
  query CommentList {
    comments(first: 50) {
      nodes {
        id
        body
        bodyHtml
        author {
          name
        }
        ip
        publishedAt
        status
        userAgent
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

{

"comments": {

"nodes": [

{

"id": "gid://shopify/Comment/9450891",

"body": "Check my casino at ... This will be marked as spam by akismet, because of the author name.",

"bodyHtml": "<p>Check my casino at ... This will be marked as spam by akismet, because of the author name.</p>",

"author": {

"name": "viagra-test-123"

},

"ip": "127.0.0.1",

"publishedAt": null,

"status": "SPAM",

"userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"

},

{

"id": "gid://shopify/Comment/52127930",

"body": "Hi author, I really _like_ what you're doing there.",

"bodyHtml": "<p>Hi author, I really <em>like</em> what you're doing there.</p>",

"author": {

"name": "Soleone"

},

"ip": "127.0.0.1",

"publishedAt": null,

"status": "PENDING",

"userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1"

},

{

"id": "gid://shopify/Comment/64683838",

"body": "Check my casino at ... This will be marked as spam by akismet, because of the author name.",

"bodyHtml": "<p>Check my casino at ... This will be marked as spam by akismet, because of the author name.</p>",

"author": {

"name": "viagra-test-123"

},

"ip": "127.0.0.1",

"publishedAt": null,


---
*Content truncated at "Updates" section*