---
title: "storefrontAccessTokenDelete"
description: "Shopify GraphQL Admin API documentation for storefrontaccesstokendelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete"
extraction_method: "jina"
sections: ['Access', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: storefrontAccessTokenDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete

Markdown Content:
storefrontAccessTokenDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#main-content)

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

*   
Access

    *   
Mutations

        *   [app Revoke Access Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes)
        *   [delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate)
        *   [delegate Access Token Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokendestroy)
        *   [storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate)
        *   [storefront Access Token Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete)

    *   Objects   

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
*   Online Store   
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

[Anchor to storefrontAccessTokenDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#top)
storefront Access Token Delete
==============================

mutation

Deletes a storefront access token.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#arguments-input)input

•[Storefront Access Token Delete Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenDeleteInput)

required

Provides the input fields required to delete a storefront access token.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to StorefrontAccessTokenDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#returns)Storefront Access Token Delete Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedStorefrontAccessTokenId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#returns-deletedStorefrontAccessTokenId)deleted Storefront Access Token Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted storefront access token.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a Storefront Access Token.

#### Description

This example demonstrates how to delete a storefront access token.

#### Query

```graphql
mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
  storefrontAccessTokenDelete(input: $input) {
    deletedStorefrontAccessTokenId
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) { storefrontAccessTokenDelete(input: $input) { deletedStorefrontAccessTokenId userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/StorefrontAccessToken/55270800"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/StorefrontAccessToken/55270800"
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
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
      storefrontAccessTokenDelete(input: $input) {
        deletedStorefrontAccessTokenId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/StorefrontAccessToken/55270800"
        }
    },
  },
});
``` #### Response

```json
{
  "storefrontAccessTokenDelete": {
    "deletedStorefrontAccessTokenId": "gid://shopify/StorefrontAccessToken/55270800",
    "userErrors": []
  }
}
``` 
*   ### Deletes an existing storefront access token

#### Query

```graphql
mutation storefrontAccessTokenDelete($id: ID!) {
  storefrontAccessTokenDelete(input: {id: $id}) {
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/StorefrontAccessToken/55270800"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation storefrontAccessTokenDelete($id: ID!) { storefrontAccessTokenDelete(input: {id: $id}) { userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storefrontAccessTokenDelete($id: ID!) {
    storefrontAccessTokenDelete(input: {id: $id}) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StorefrontAccessToken/55270800"
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
  mutation storefrontAccessTokenDelete($id: ID!) {
    storefrontAccessTokenDelete(input: {id: $id}) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StorefrontAccessToken/55270800"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storefrontAccessTokenDelete($id: ID!) {
      storefrontAccessTokenDelete(input: {id: $id}) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/StorefrontAccessToken/55270800"
    },
  },
});
``` #### Response

```json
{
  "storefrontAccessTokenDelete": {
    "userErrors": []
  }
}
``` 
*   ### storefrontAccessTokenDelete reference

Examples
--------

Delete a Storefront Access Token.

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20storefrontAccessTokenDelete(%24input%3A%20StorefrontAccessTokenDeleteInput!)%20%7B%0A%20%20storefrontAccessTokenDelete(input%3A%20%24input)%20%7B%0A%20%20%20%20deletedStorefrontAccessTokenId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FStorefrontAccessToken%2F55270800%22%0A%20%20%7D%0A%7D)Copy

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

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {

 storefrontAccessTokenDelete(input: $input) {

 deletedStorefrontAccessTokenId

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"id":"gid://shopify/StorefrontAccessToken/55270800"

}

},

},

);

const data=await response.json();

```
mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
  storefrontAccessTokenDelete(input: $input) {
    deletedStorefrontAccessTokenId
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
"query": "mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) { storefrontAccessTokenDelete(input: $input) { deletedStorefrontAccessTokenId userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/StorefrontAccessToken/55270800"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/StorefrontAccessToken/55270800"
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
    "query": `mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
      storefrontAccessTokenDelete(input: $input) {
        deletedStorefrontAccessTokenId
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/StorefrontAccessToken/55270800"
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
  mutation storefrontAccessTokenDelete($input: StorefrontAccessTokenDeleteInput!) {
    storefrontAccessTokenDelete(input: $input) {
      deletedStorefrontAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/StorefrontAccessToken/55270800"
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

›

⌄

⌄

{

"input": {

"id": "gid://shopify/StorefrontAccessToken/55270800"

}

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

"storefrontAccessTokenDelete": {

"deletedStorefrontAccessTokenId": "gid://shopify/StorefrontAccessToken/55270800",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*