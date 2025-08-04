---
title: "metafieldDefinition"
description: "Shopify GraphQL Admin API documentation for metafielddefinition"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition"
extraction_method: "jina"
sections: ['Metafields', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinition - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition

Markdown Content:
metafieldDefinition - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#main-content)

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

    *   
Queries

        *   [metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition)
        *   [metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions)
        *   [metafield Definition Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes)
        *   [standard Metafield Definition Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates)

    *   Mutations   
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

[Anchor to metafieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#top)
metafield Definition
====================

query

Requires API client to have access to the resource type associated with the metafield definition.

Returns a metafield definition by identifier.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#arguments-identifier)identifier

•[Metafield Definition Identifier Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

The identifier of the MetafieldDefinition to return.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

Deprecated

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MetafieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition#returns-MetafieldDefinition)Metafield Definition

•[Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

Metafield definitions enable you to define additional validation constraints for metafields, and enable the merchant to edit metafield values in context.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a count of a resource's metafields.

#### Query

```graphql
query MetafieldsCount($metafieldDefinitionId: ID!) {
  metafieldDefinition(id: $metafieldDefinitionId) {
    id
    metafieldsCount
  }
}
``` #### Variables

```json
{
  "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MetafieldsCount($metafieldDefinitionId: ID!) { metafieldDefinition(id: $metafieldDefinitionId) { id metafieldsCount } }",
 "variables": {
    "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldsCount($metafieldDefinitionId: ID!) {
    metafieldDefinition(id: $metafieldDefinitionId) {
      id
      metafieldsCount
    }
  }`,
  {
    variables: {
        "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
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
  query MetafieldsCount($metafieldDefinitionId: ID!) {
    metafieldDefinition(id: $metafieldDefinitionId) {
      id
      metafieldsCount
    }
  }
QUERY

variables = {
  "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query MetafieldsCount($metafieldDefinitionId: ID!) {
      metafieldDefinition(id: $metafieldDefinitionId) {
        id
        metafieldsCount
      }
    }`,
    "variables": {
        "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinition": {
    "id": "gid://shopify/MetafieldDefinition/1071456212",
    "metafieldsCount": 0
  }
}
``` 
*   ### Retrieve a metafield definition

#### Description

To retrieve a single metafield definition, use the `metafieldDefinition` query with its ID. The following example shows how to retrieve a metafield definition.

#### Query

```graphql
query {
  metafieldDefinition(id: "gid://shopify/MetafieldDefinition/1071456211") {
    name
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { metafieldDefinition(id: \"gid://shopify/MetafieldDefinition/1071456211\") { name } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    metafieldDefinition(id: "gid://shopify/MetafieldDefinition/1071456211") {
      name
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
  query {
    metafieldDefinition(id: "gid://shopify/MetafieldDefinition/1071456211") {
      name
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    metafieldDefinition(id: "gid://shopify/MetafieldDefinition/1071456211") {
      name
    }
  }`,
});
``` #### Response

```json
{
  "metafieldDefinition": {
    "name": "ingredients"
  }
}
``` 

Examples
--------

Retrieve a count of a resource's metafields.

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MetafieldsCount(%24metafieldDefinitionId%3A%20ID!)%20%7B%0A%20%20metafieldDefinition(id%3A%20%24metafieldDefinitionId)%20%7B%0A%20%20%20%20id%0A%20%20%20%20metafieldsCount%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22metafieldDefinitionId%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafieldDefinition%2F1071456212%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MetafieldsCount($metafieldDefinitionId: ID!) {

 metafieldDefinition(id: $metafieldDefinitionId) {

 id

 metafieldsCount

 }

 }`,

{

variables:{

"metafieldDefinitionId":"gid://shopify/MetafieldDefinition/1071456212"

},

},

);

const data=await response.json();

```
query MetafieldsCount($metafieldDefinitionId: ID!) {
  metafieldDefinition(id: $metafieldDefinitionId) {
    id
    metafieldsCount
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MetafieldsCount($metafieldDefinitionId: ID!) { metafieldDefinition(id: $metafieldDefinitionId) { id metafieldsCount } }",
 "variables": {
    "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldsCount($metafieldDefinitionId: ID!) {
    metafieldDefinition(id: $metafieldDefinitionId) {
      id
      metafieldsCount
    }
  }`,
  {
    variables: {
        "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query MetafieldsCount($metafieldDefinitionId: ID!) {
      metafieldDefinition(id: $metafieldDefinitionId) {
        id
        metafieldsCount
      }
    }`,
    "variables": {
        "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
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
  query MetafieldsCount($metafieldDefinitionId: ID!) {
    metafieldDefinition(id: $metafieldDefinitionId) {
      id
      metafieldsCount
    }
  }
QUERY

variables = {
  "metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"
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

"metafieldDefinitionId": "gid://shopify/MetafieldDefinition/1071456212"

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

"metafieldDefinition": {

"id": "gid://shopify/MetafieldDefinition/1071456212",

"metafieldsCount": 0

}

}


---
*Content truncated at "Updates" section*