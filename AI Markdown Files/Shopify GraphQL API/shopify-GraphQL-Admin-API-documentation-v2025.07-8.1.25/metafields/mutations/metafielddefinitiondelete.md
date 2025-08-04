---
title: "metafieldDefinitionDelete"
description: "Shopify GraphQL Admin API documentation for metafielddefinitiondelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinitionDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete

Markdown Content:
metafieldDefinitionDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#main-content)

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
*   
Metafields

    *   Queries   
    *   
Mutations

        *   [metafield Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate)
        *   [metafield Definition Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete)
        *   [metafield Definition Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin)
        *   [metafield Definition Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionunpin)
        *   [metafield Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate)
        *   [metafields Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete)
        *   [metafields Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset)
        *   [standard Metafield Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable)

    *   Objects   

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

[Anchor to metafieldDefinitionDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#top)
metafield Definition Delete
===========================

mutation

Requires API client to have access to the resource type associated with the metafield definition.

Delete a metafield definition. Optionally deletes all associated metafields asynchronously when specified.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#arguments)
Arguments
---------

[Anchor to deleteAllAssociatedMetafields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#arguments-deleteAllAssociatedMetafields)delete All Associated Metafields

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether to delete all associated metafields.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The id of the metafield definition to delete. Using `identifier` is preferred.

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#arguments-identifier)identifier

•[Metafield Definition Identifier Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

The identifier of the metafield definition to delete.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetafieldDefinitionDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#returns)Metafield Definition Delete Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#returns-deletedDefinition)deleted Definition

•[Metafield Definition Identifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier)

The metafield definition that was deleted.

Show fields

[Anchor to deletedDefinitionId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#returns-deletedDefinitionId)deleted Definition Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted metafield definition.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete#returns-userErrors)user Errors

•[[Metafield Definition Delete User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a metafield definition

#### Description

To delete a metafield definition, use the `metafieldDefinitionDelete` mutation. The following example shows how to delete the metafield definition for `bakery.ingredients`, and also deletes all metafields that use the definition.

#### Query

```graphql
mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
  metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
    deletedDefinitionId
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
  "id": "gid://shopify/MetafieldDefinition/1071456130",
  "deleteAllAssociatedMetafields": true
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) { metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) { deletedDefinitionId userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetafieldDefinition/1071456130",
    "deleteAllAssociatedMetafields": true
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
    metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
      deletedDefinitionId
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MetafieldDefinition/1071456130",
        "deleteAllAssociatedMetafields": true
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
  mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
    metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
      deletedDefinitionId
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MetafieldDefinition/1071456130",
  "deleteAllAssociatedMetafields": true
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
      metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
        deletedDefinitionId
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MetafieldDefinition/1071456130",
        "deleteAllAssociatedMetafields": true
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionDelete": {
    "deletedDefinitionId": "gid://shopify/MetafieldDefinition/1071456130",
    "userErrors": []
  }
}
``` 
*   ### metafieldDefinitionDelete reference

Examples
--------

Delete a metafield definition

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteMetafieldDefinition(%24id%3A%20ID!%2C%20%24deleteAllAssociatedMetafields%3A%20Boolean!)%20%7B%0A%20%20metafieldDefinitionDelete(id%3A%20%24id%2C%20deleteAllAssociatedMetafields%3A%20%24deleteAllAssociatedMetafields)%20%7B%0A%20%20%20%20deletedDefinitionId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafieldDefinition%2F1071456130%22%2C%0A%20%20%22deleteAllAssociatedMetafields%22%3A%20true%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {

 metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {

 deletedDefinitionId

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/MetafieldDefinition/1071456130",

"deleteAllAssociatedMetafields":true

},

},

);

const data=await response.json();

```
mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
  metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
    deletedDefinitionId
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
"query": "mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) { metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) { deletedDefinitionId userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetafieldDefinition/1071456130",
    "deleteAllAssociatedMetafields": true
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
    metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
      deletedDefinitionId
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MetafieldDefinition/1071456130",
        "deleteAllAssociatedMetafields": true
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
      metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
        deletedDefinitionId
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MetafieldDefinition/1071456130",
        "deleteAllAssociatedMetafields": true
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
  mutation DeleteMetafieldDefinition($id: ID!, $deleteAllAssociatedMetafields: Boolean!) {
    metafieldDefinitionDelete(id: $id, deleteAllAssociatedMetafields: $deleteAllAssociatedMetafields) {
      deletedDefinitionId
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MetafieldDefinition/1071456130",
  "deleteAllAssociatedMetafields": true
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

›

⌄

{

"id": "gid://shopify/MetafieldDefinition/1071456130",

"deleteAllAssociatedMetafields": true

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

"metafieldDefinitionDelete": {

"deletedDefinitionId": "gid://shopify/MetafieldDefinition/1071456130",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*