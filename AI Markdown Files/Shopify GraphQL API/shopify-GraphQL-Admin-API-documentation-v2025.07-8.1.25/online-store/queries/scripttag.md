---
title: "scriptTag"
description: "Shopify GraphQL Admin API documentation for scripttag"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag"
extraction_method: "jina"
sections: ['Online store', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: scriptTag - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag

Markdown Content:
scriptTag - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag#main-content)

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

[Anchor to scriptTag](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag#top)
script Tag
==========

query

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Returns a `ScriptTag` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `ScriptTag` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to ScriptTag](https://shopify.dev/docs/api/admin-graphql/latest/queries/scripttag#returns-ScriptTag)Script Tag

•[Script Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

A script tag represents remote JavaScript code that is loaded into the pages of a shop's storefront or the **Order status** page of checkout.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a single script tag

#### Query

```graphql
query GetScriptTag($id: ID!) {
  scriptTag(id: $id) {
    id
    cache
    createdAt
    displayScope
    src
    updatedAt
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/ScriptTag/466217408"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetScriptTag($id: ID!) { scriptTag(id: $id) { id cache createdAt displayScope src updatedAt } }",
 "variables": {
    "id": "gid://shopify/ScriptTag/466217408"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetScriptTag($id: ID!) {
    scriptTag(id: $id) {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ScriptTag/466217408"
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
  query GetScriptTag($id: ID!) {
    scriptTag(id: $id) {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ScriptTag/466217408"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetScriptTag($id: ID!) {
      scriptTag(id: $id) {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
    }`,
    "variables": {
        "id": "gid://shopify/ScriptTag/466217408"
    },
  },
});
``` #### Response

```json
{
  "scriptTag": {
    "id": "gid://shopify/ScriptTag/466217408",
    "cache": false,
    "createdAt": "2024-10-29T22:38:08Z",
    "displayScope": "ALL",
    "src": "https://js.example.org/foo.js",
    "updatedAt": "2024-10-29T22:38:08Z"
  }
}
``` 

Retrieves a single script tag
-----------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20GetScriptTag(%24id%3A%20ID!)%20%7B%0A%20%20scriptTag(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20cache%0A%20%20%20%20createdAt%0A%20%20%20%20displayScope%0A%20%20%20%20src%0A%20%20%20%20updatedAt%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FScriptTag%2F466217408%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query GetScriptTag($id: ID!) {

 scriptTag(id: $id) {

 id

 cache

 createdAt

 displayScope

 src

 updatedAt

 }

 }`,

{

variables:{

"id":"gid://shopify/ScriptTag/466217408"

},

},

);

const data=await response.json();

```
query GetScriptTag($id: ID!) {
  scriptTag(id: $id) {
    id
    cache
    createdAt
    displayScope
    src
    updatedAt
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetScriptTag($id: ID!) { scriptTag(id: $id) { id cache createdAt displayScope src updatedAt } }",
 "variables": {
    "id": "gid://shopify/ScriptTag/466217408"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetScriptTag($id: ID!) {
    scriptTag(id: $id) {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ScriptTag/466217408"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetScriptTag($id: ID!) {
      scriptTag(id: $id) {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
    }`,
    "variables": {
        "id": "gid://shopify/ScriptTag/466217408"
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
  query GetScriptTag($id: ID!) {
    scriptTag(id: $id) {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ScriptTag/466217408"
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

"id": "gid://shopify/ScriptTag/466217408"

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

›

⌄

⌄

{

"scriptTag": {

"id": "gid://shopify/ScriptTag/466217408",

"cache": false,

"createdAt": "2024-10-29T22:38:08Z",

"displayScope": "ALL",

"src": "https://js.example.org/foo.js",

"updatedAt": "2024-10-29T22:38:08Z"

}

}


---
*Content truncated at "Updates" section*