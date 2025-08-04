---
title: "urlRedirectUpdate"
description: "Shopify GraphQL Admin API documentation for urlredirectupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: urlRedirectUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate

Markdown Content:
urlRedirectUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#main-content)

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

[Anchor to urlRedirectUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#top)
url Redirect Update
===================

mutation

Requires `write_online_store_navigation` access scope.

Updates a URL redirect.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the URL redirect to update.

[Anchor to urlRedirect](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#arguments-urlRedirect)url Redirect

•[Url Redirect Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UrlRedirectInput)

required

The input fields required to update the URL redirect.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to UrlRedirectUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#returns)Url Redirect Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to urlRedirect](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#returns-urlRedirect)url Redirect

•[Url Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

Returns the updated URL redirect.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate#returns-userErrors)user Errors

•[[Url Redirect User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Updates an existing redirect

#### Query

```graphql
mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
  urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
    urlRedirect {
      id
      path
      target
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/UrlRedirect/905192165",
  "urlRedirect": {
    "path": "/thepath",
    "target": "/thetarget"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) { urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) { urlRedirect { id path target } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/UrlRedirect/905192165",
    "urlRedirect": {
      "path": "/thepath",
      "target": "/thetarget"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/UrlRedirect/905192165",
        "urlRedirect": {
            "path": "/thepath",
            "target": "/thetarget"
        }
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
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/UrlRedirect/905192165",
  "urlRedirect": {
    "path": "/thepath",
    "target": "/thetarget"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
      urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
        urlRedirect {
          id
          path
          target
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/UrlRedirect/905192165",
        "urlRedirect": {
            "path": "/thepath",
            "target": "/thetarget"
        }
    },
  },
});
``` #### Response

```json
{
  "urlRedirectUpdate": {
    "urlRedirect": {
      "id": "gid://shopify/UrlRedirect/905192165",
      "path": "/thepath",
      "target": "/thetarget"
    },
    "userErrors": []
  }
}
``` 
*   ### urlRedirectUpdate reference

Examples
--------

Updates an existing redirect

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UrlRedirectUpdate(%24id%3A%20ID!%2C%20%24urlRedirect%3A%20UrlRedirectInput!)%20%7B%0A%20%20urlRedirectUpdate(id%3A%20%24id%2C%20urlRedirect%3A%20%24urlRedirect)%20%7B%0A%20%20%20%20urlRedirect%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20path%0A%20%20%20%20%20%20target%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FUrlRedirect%2F905192165%22%2C%0A%20%20%22urlRedirect%22%3A%20%7B%0A%20%20%20%20%22path%22%3A%20%22%2Fthepath%22%2C%0A%20%20%20%20%22target%22%3A%20%22%2Fthetarget%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {

 urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {

 urlRedirect {

 id

 path

 target

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/UrlRedirect/905192165",

"urlRedirect":{

"path":"/thepath",

"target":"/thetarget"

}

},

},

);

const data=await response.json();

```
mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
  urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
    urlRedirect {
      id
      path
      target
    }
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
"query": "mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) { urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) { urlRedirect { id path target } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/UrlRedirect/905192165",
    "urlRedirect": {
      "path": "/thepath",
      "target": "/thetarget"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/UrlRedirect/905192165",
        "urlRedirect": {
            "path": "/thepath",
            "target": "/thetarget"
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
      urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
        urlRedirect {
          id
          path
          target
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/UrlRedirect/905192165",
        "urlRedirect": {
            "path": "/thepath",
            "target": "/thetarget"
        }
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
  mutation UrlRedirectUpdate($id: ID!, $urlRedirect: UrlRedirectInput!) {
    urlRedirectUpdate(id: $id, urlRedirect: $urlRedirect) {
      urlRedirect {
        id
        path
        target
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/UrlRedirect/905192165",
  "urlRedirect": {
    "path": "/thepath",
    "target": "/thetarget"
  }
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

4

5

6

7

›

⌄

⌄

{

"id": "gid://shopify/UrlRedirect/905192165",

"urlRedirect": {

"path": "/thepath",

"target": "/thetarget"

}

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

⌄

{

"urlRedirectUpdate": {

"urlRedirect": {

"id": "gid://shopify/UrlRedirect/905192165",

"path": "/thepath",

"target": "/thetarget"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*