---
title: "storefrontAccessTokenCreate"
description: "Shopify GraphQL Admin API documentation for storefrontaccesstokencreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate"
extraction_method: "jina"
sections: ['Access', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: storefrontAccessTokenCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate

Markdown Content:
storefrontAccessTokenCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#main-content)

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

*   
Access

    *   
Mutations

        *   [app Revoke Access Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes)
        *   [delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate)
        *   [storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate)
        *   [storefront Access Token Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete)

    *   Objects   

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
*   Online store   
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

[Anchor to storefrontAccessTokenCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#top)
storefront Access Token Create
==============================

mutation

Creates a storefront access token for use with the [Storefront API](https://shopify.dev/docs/api/storefront).

An app can have a maximum of 100 active storefront access tokens for each shop.

[Get started with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#arguments-input)input

•[Storefront Access Token Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StorefrontAccessTokenInput)

required

Provides the input fields for creating a storefront access token.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to StorefrontAccessTokenCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#returns)Storefront Access Token Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to storefrontAccessToken](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#returns-storefrontAccessToken)storefront Access Token

•[Storefront Access Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken)

The storefront access token.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a Storefront Access Token

#### Description

This example demonstrates how to create a storefront access token.

#### Query

```graphql
mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
  storefrontAccessTokenCreate(input: $input) {
    userErrors {
      field
      message
    }
    shop {
      id
    }
    storefrontAccessToken {
      accessScopes {
        handle
      }
      accessToken
      title
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "title": "New Storefront Access Token"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) { storefrontAccessTokenCreate(input: $input) { userErrors { field message } shop { id } storefrontAccessToken { accessScopes { handle } accessToken title } } }",
 "variables": {
    "input": {
      "title": "New Storefront Access Token"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
    storefrontAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      shop {
        id
      }
      storefrontAccessToken {
        accessScopes {
          handle
        }
        accessToken
        title
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "New Storefront Access Token"
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
  mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
    storefrontAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      shop {
        id
      }
      storefrontAccessToken {
        accessScopes {
          handle
        }
        accessToken
        title
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "New Storefront Access Token"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
      storefrontAccessTokenCreate(input: $input) {
        userErrors {
          field
          message
        }
        shop {
          id
        }
        storefrontAccessToken {
          accessScopes {
            handle
          }
          accessToken
          title
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "New Storefront Access Token"
        }
    },
  },
});
``` #### Response

```json
{
  "storefrontAccessTokenCreate": {
    "userErrors": [],
    "shop": {
      "id": "gid://shopify/Shop/325953821"
    },
    "storefrontAccessToken": {
      "accessScopes": [
        {
          "handle": "unauthenticated_read_product_listings"
        },
        {
          "handle": "unauthenticated_write_checkouts"
        },
        {
          "handle": "unauthenticated_read_checkouts"
        },
        {
          "handle": "unauthenticated_read_selling_plans"
        }
      ],
      "accessToken": "d016c3f69af5f85abdcd3b3252469efc",
      "title": "New Storefront Access Token"
    }
  }
}
``` 
*   ### Creates a new StorefrontAccessToken

#### Query

```graphql
mutation storeFrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
  storefrontAccessTokenCreate(input: $input) {
    storefrontAccessToken {
      id
      accessToken
      accessScopes {
        handle
      }
      createdAt
      title
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
  "input": {
    "title": "New Storefront Access Token"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation storeFrontAccessTokenCreate($input: StorefrontAccessTokenInput!) { storefrontAccessTokenCreate(input: $input) { storefrontAccessToken { id accessToken accessScopes { handle } createdAt title } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "New Storefront Access Token"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation storeFrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
    storefrontAccessTokenCreate(input: $input) {
      storefrontAccessToken {
        id
        accessToken
        accessScopes {
          handle
        }
        createdAt
        title
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "New Storefront Access Token"
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
  mutation storeFrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
    storefrontAccessTokenCreate(input: $input) {
      storefrontAccessToken {
        id
        accessToken
        accessScopes {
          handle
        }
        createdAt
        title
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "New Storefront Access Token"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation storeFrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
      storefrontAccessTokenCreate(input: $input) {
        storefrontAccessToken {
          id
          accessToken
          accessScopes {
            handle
          }
          createdAt
          title
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "New Storefront Access Token"
        }
    },
  },
});
``` #### Response

```json
{
  "storefrontAccessTokenCreate": {
    "storefrontAccessToken": {
      "id": "gid://shopify/StorefrontAccessToken/1003303992",
      "accessToken": "2a1753b19c85ac630f27391da802765d",
      "accessScopes": [
        {
          "handle": "unauthenticated_read_product_listings"
        },
        {
          "handle": "unauthenticated_write_checkouts"
        },
        {
          "handle": "unauthenticated_read_checkouts"
        },
        {
          "handle": "unauthenticated_read_selling_plans"
        }
      ],
      "createdAt": "2024-10-29T18:54:07Z",
      "title": "New Storefront Access Token"
    },
    "userErrors": []
  }
}
``` 
*   ### storefrontAccessTokenCreate reference

Examples
--------

Create a Storefront Access Token

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20StorefrontAccessTokenCreate(%24input%3A%20StorefrontAccessTokenInput!)%20%7B%0A%20%20storefrontAccessTokenCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20shop%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20storefrontAccessToken%20%7B%0A%20%20%20%20%20%20accessScopes%20%7B%0A%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20accessToken%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22New%20Storefront%20Access%20Token%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {

 storefrontAccessTokenCreate(input: $input) {

 userErrors {

 field

 message

 }

 shop {

 id

 }

 storefrontAccessToken {

 accessScopes {

 handle

 }

 accessToken

 title

 }

 }

 }`,

{

variables:{

"input":{

"title":"New Storefront Access Token"

}

},

},

);

const data=await response.json();

```
mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
  storefrontAccessTokenCreate(input: $input) {
    userErrors {
      field
      message
    }
    shop {
      id
    }
    storefrontAccessToken {
      accessScopes {
        handle
      }
      accessToken
      title
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
"query": "mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) { storefrontAccessTokenCreate(input: $input) { userErrors { field message } shop { id } storefrontAccessToken { accessScopes { handle } accessToken title } } }",
 "variables": {
    "input": {
      "title": "New Storefront Access Token"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
    storefrontAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      shop {
        id
      }
      storefrontAccessToken {
        accessScopes {
          handle
        }
        accessToken
        title
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "New Storefront Access Token"
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
    "query": `mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
      storefrontAccessTokenCreate(input: $input) {
        userErrors {
          field
          message
        }
        shop {
          id
        }
        storefrontAccessToken {
          accessScopes {
            handle
          }
          accessToken
          title
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "New Storefront Access Token"
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
  mutation StorefrontAccessTokenCreate($input: StorefrontAccessTokenInput!) {
    storefrontAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      shop {
        id
      }
      storefrontAccessToken {
        accessScopes {
          handle
        }
        accessToken
        title
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "New Storefront Access Token"
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

"title": "New Storefront Access Token"

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

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"storefrontAccessTokenCreate": {

"userErrors": [],

"shop": {

"id": "gid://shopify/Shop/325953821"

},

"storefrontAccessToken": {

"accessScopes": [

{

"handle": "unauthenticated_read_product_listings"

},

{

"handle": "unauthenticated_write_checkouts"

},

{

"handle": "unauthenticated_read_checkouts"

},

{

"handle": "unauthenticated_read_selling_plans"

}

],

"accessToken": "d016c3f69af5f85abdcd3b3252469efc",

"title": "New Storefront Access Token"

}

}

}


---
*Content truncated at "Updates" section*