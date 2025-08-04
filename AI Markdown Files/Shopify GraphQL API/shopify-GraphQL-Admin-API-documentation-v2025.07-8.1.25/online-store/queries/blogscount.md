---
title: "blogsCount"
description: "Shopify GraphQL Admin API documentation for blogscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: blogsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount

Markdown Content:
blogsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#main-content)

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

[Anchor to blogsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#top)
blogs Count
===========

query

Requires `read_content` access scope or `read_online_store_pages` access scope.

Count of blogs. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#argument-query-filter-handle)handle

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#argument-query-filter-title)title

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#argument-query-filter-updated_at)updated_at

•time

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a count of all Blogs

#### Query

```graphql
query BlogsCount {
  blogsCount {
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
"query": "query BlogsCount { blogsCount { count precision } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogsCount {
    blogsCount {
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
  query BlogsCount {
    blogsCount {
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
  data: `query BlogsCount {
    blogsCount {
      count
      precision
    }
  }`,
});
``` #### Response

```json
{
  "blogsCount": {
    "count": 3,
    "precision": "EXACT"
  }
}
``` 

Receive a count of all Blogs
----------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20BlogsCount%20%7B%0A%20%20blogsCount%20%7B%0A%20%20%20%20count%0A%20%20%20%20precision%0A%20%20%7D%0A%7D)Copy

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

 query BlogsCount {

 blogsCount {

 count

 precision

 }

 }`,

);

const data=await response.json();

```
query BlogsCount {
  blogsCount {
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
"query": "query BlogsCount { blogsCount { count precision } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query BlogsCount {
    blogsCount {
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
  data: `query BlogsCount {
    blogsCount {
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
  query BlogsCount {
    blogsCount {
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

"blogsCount": {

"count": 3,

"precision": "EXACT"

}

}


---
*Content truncated at "Updates" section*