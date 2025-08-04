---
title: "comment"
description: "Shopify GraphQL Admin API documentation for comment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/comment"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: comment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/comment

Markdown Content:
comment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment#main-content)

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

[Anchor to comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment#top)
comment
=======

query

Returns a Comment resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Comment` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment#returns-Comment)Comment

•[Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

A comment on an article.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a single comment by its ID

#### Query

```graphql
query CommentShow($id: ID!) {
  comment(id: $id) {
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
``` #### Variables

```json
{
  "id": "gid://shopify/Comment/9450891"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CommentShow($id: ID!) { comment(id: $id) { id body bodyHtml author { name } ip publishedAt status userAgent } }",
 "variables": {
    "id": "gid://shopify/Comment/9450891"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CommentShow($id: ID!) {
    comment(id: $id) {
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
  }`,
  {
    variables: {
        "id": "gid://shopify/Comment/9450891"
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
  query CommentShow($id: ID!) {
    comment(id: $id) {
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
QUERY

variables = {
  "id": "gid://shopify/Comment/9450891"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CommentShow($id: ID!) {
      comment(id: $id) {
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
    }`,
    "variables": {
        "id": "gid://shopify/Comment/9450891"
    },
  },
});
``` #### Response

```json
{
  "comment": {
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
  }
}
``` 

Retrieves a single comment by its ID
------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CommentShow(%24id%3A%20ID!)%20%7B%0A%20%20comment(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20body%0A%20%20%20%20bodyHtml%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20ip%0A%20%20%20%20publishedAt%0A%20%20%20%20status%0A%20%20%20%20userAgent%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FComment%2F9450891%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query CommentShow($id: ID!) {

 comment(id: $id) {

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

 }`,

{

variables:{

"id":"gid://shopify/Comment/9450891"

},

},

);

const data=await response.json();

```
query CommentShow($id: ID!) {
  comment(id: $id) {
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CommentShow($id: ID!) { comment(id: $id) { id body bodyHtml author { name } ip publishedAt status userAgent } }",
 "variables": {
    "id": "gid://shopify/Comment/9450891"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CommentShow($id: ID!) {
    comment(id: $id) {
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
  }`,
  {
    variables: {
        "id": "gid://shopify/Comment/9450891"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CommentShow($id: ID!) {
      comment(id: $id) {
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
    }`,
    "variables": {
        "id": "gid://shopify/Comment/9450891"
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
  query CommentShow($id: ID!) {
    comment(id: $id) {
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
QUERY

variables = {
  "id": "gid://shopify/Comment/9450891"
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

"id": "gid://shopify/Comment/9450891"

}

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

›

⌄

⌄

⌄

{

"comment": {

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

}

}


---
*Content truncated at "Updates" section*