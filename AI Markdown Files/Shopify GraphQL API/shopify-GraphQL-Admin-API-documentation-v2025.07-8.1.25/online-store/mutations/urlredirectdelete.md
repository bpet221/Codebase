---
title: "urlRedirectDelete"
description: "Shopify GraphQL Admin API documentation for urlredirectdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: urlRedirectDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete

Markdown Content:
urlRedirectDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#main-content)

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

    *   Queries   
    *   
Mutations

        *   [article Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate)
        *   [article Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articledelete)
        *   [article Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleupdate)
        *   [blog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogcreate)
        *   [blog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogdelete)
        *   [blog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogupdate)
        *   [comment Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentapprove)
        *   [comment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentdelete)
        *   [comment Not Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentnotspam)
        *   [comment Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentspam)
        *   [menu Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate)
        *   [menu Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menudelete)
        *   [menu Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate)
        *   [page Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagecreate)
        *   [page Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagedelete)
        *   [page Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageupdate)
        *   [script Tag Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate)
        *   [script Tag Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagdelete)
        *   [script Tag Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagupdate)
        *   [store Credit Account Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit)
        *   [store Credit Account Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit)
        *   [theme Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate)
        *   [theme Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themedelete)
        *   [theme Files Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilescopy)
        *   [theme Files Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesdelete)
        *   [theme Files Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert)
        *   [theme Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themepublish)
        *   [theme Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate)
        *   [url Redirect Bulk Delete All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeleteall)
        *   [url Redirect Bulk Delete By Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebyids)
        *   [url Redirect Bulk Delete By Saved Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysavedsearch)
        *   [url Redirect Bulk Delete By Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysearch)
        *   [url Redirect Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectcreate)
        *   [url Redirect Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete)
        *   [url Redirect Import Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportcreate)
        *   [url Redirect Import Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportsubmit)
        *   [url Redirect Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate)

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

[Anchor to urlRedirectDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#top)
url Redirect Delete
===================

mutation

Requires `write_online_store_navigation` access scope.

Deletes a [`UrlRedirect`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirect) object.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the redirect to delete.

* * *

Was this section helpful?

Yes No

[Anchor to UrlRedirectDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#returns)Url Redirect Delete Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedUrlRedirectId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#returns-deletedUrlRedirectId)deleted Url Redirect Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted redirect.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete#returns-userErrors)user Errors

•[[Url Redirect User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Deletes a redirect

#### Query

```graphql
mutation UrlRedirectDelete($id: ID!) {
  urlRedirectDelete(id: $id) {
    deletedUrlRedirectId
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/UrlRedirect/905192165"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UrlRedirectDelete($id: ID!) { urlRedirectDelete(id: $id) { deletedUrlRedirectId userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/UrlRedirect/905192165"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/UrlRedirect/905192165"
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
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/UrlRedirect/905192165"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UrlRedirectDelete($id: ID!) {
      urlRedirectDelete(id: $id) {
        deletedUrlRedirectId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/UrlRedirect/905192165"
    },
  },
});
``` #### Response

```json
{
  "urlRedirectDelete": {
    "deletedUrlRedirectId": "gid://shopify/UrlRedirect/905192165",
    "userErrors": []
  }
}
``` 
*   ### urlRedirectDelete reference

Examples
--------

Deletes a redirect

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UrlRedirectDelete(%24id%3A%20ID!)%20%7B%0A%20%20urlRedirectDelete(id%3A%20%24id)%20%7B%0A%20%20%20%20deletedUrlRedirectId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FUrlRedirect%2F905192165%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation UrlRedirectDelete($id: ID!) {

 urlRedirectDelete(id: $id) {

 deletedUrlRedirectId

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/UrlRedirect/905192165"

},

},

);

const data=await response.json();

```
mutation UrlRedirectDelete($id: ID!) {
  urlRedirectDelete(id: $id) {
    deletedUrlRedirectId
    userErrors {
      field
      message
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
"query": "mutation UrlRedirectDelete($id: ID!) { urlRedirectDelete(id: $id) { deletedUrlRedirectId userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/UrlRedirect/905192165"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/UrlRedirect/905192165"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UrlRedirectDelete($id: ID!) {
      urlRedirectDelete(id: $id) {
        deletedUrlRedirectId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/UrlRedirect/905192165"
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
  mutation UrlRedirectDelete($id: ID!) {
    urlRedirectDelete(id: $id) {
      deletedUrlRedirectId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/UrlRedirect/905192165"
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

"id": "gid://shopify/UrlRedirect/905192165"

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

›

⌄

⌄

{

"urlRedirectDelete": {

"deletedUrlRedirectId": "gid://shopify/UrlRedirect/905192165",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*