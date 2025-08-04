---
title: "metaobjectDelete"
description: "Shopify GraphQL Admin API documentation for metaobjectdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete"
extraction_method: "jina"
sections: ['Metaobjects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete

Markdown Content:
metaobjectDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#main-content)

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
*   
Metaobjects

    *   Queries   
    *   
Mutations

        *   [metaobject Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete)
        *   [metaobject Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate)
        *   [metaobject Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate)
        *   [metaobject Definition Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitiondelete)
        *   [metaobject Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate)
        *   [metaobject Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete)
        *   [metaobject Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectupdate)
        *   [metaobject Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectupsert)
        *   [standard Metaobject Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable)

    *   Objects   

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

[Anchor to metaobjectDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#top)
metaobject Delete
=================

mutation

Requires `write_metaobjects` access scope.

Deletes the specified metaobject and its associated metafields.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the metaobject to delete.

* * *

Was this section helpful?

Yes No

[Anchor to MetaobjectDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#returns)Metaobject Delete Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#returns-deletedId)deleted Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted metaobject.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete#returns-userErrors)user Errors

•[[Metaobject User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Deletes a metaobject

#### Description

Delete an existing metaobject using its ID.

#### Query

```graphql
mutation DeleteMetaobject($id: ID!) {
  metaobjectDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Metaobject/515107504"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation DeleteMetaobject($id: ID!) { metaobjectDelete(id: $id) { deletedId userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/Metaobject/515107504"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Metaobject/515107504"
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
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Metaobject/515107504"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMetaobject($id: ID!) {
      metaobjectDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Metaobject/515107504"
    },
  },
});
``` #### Response

```json
{
  "metaobjectDelete": {
    "deletedId": "gid://shopify/Metaobject/515107504",
    "userErrors": []
  }
}
``` 
*   ### metaobjectDelete reference

Examples
--------

Deletes a metaobject

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteMetaobject(%24id%3A%20ID!)%20%7B%0A%20%20metaobjectDelete(id%3A%20%24id)%20%7B%0A%20%20%20%20deletedId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetaobject%2F515107504%22%0A%7D)Copy

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

 mutation DeleteMetaobject($id: ID!) {

 metaobjectDelete(id: $id) {

 deletedId

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Metaobject/515107504"

},

},

);

const data=await response.json();

```
mutation DeleteMetaobject($id: ID!) {
  metaobjectDelete(id: $id) {
    deletedId
    userErrors {
      field
      message
      code
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
"query": "mutation DeleteMetaobject($id: ID!) { metaobjectDelete(id: $id) { deletedId userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/Metaobject/515107504"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Metaobject/515107504"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMetaobject($id: ID!) {
      metaobjectDelete(id: $id) {
        deletedId
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Metaobject/515107504"
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
  mutation DeleteMetaobject($id: ID!) {
    metaobjectDelete(id: $id) {
      deletedId
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Metaobject/515107504"
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

"id": "gid://shopify/Metaobject/515107504"

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

"metaobjectDelete": {

"deletedId": "gid://shopify/Metaobject/515107504",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*