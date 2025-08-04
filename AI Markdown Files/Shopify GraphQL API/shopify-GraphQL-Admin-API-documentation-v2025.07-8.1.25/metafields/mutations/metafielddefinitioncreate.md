---
title: "metafieldDefinitionCreate"
description: "Shopify GraphQL Admin API documentation for metafielddefinitioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinitionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate

Markdown Content:
metafieldDefinitionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#main-content)

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

[Anchor to metafieldDefinitionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#top)
metafield Definition Create
===========================

mutation

Requires API client to have access to the namespace and the resource type associated with the metafield definition.

Creates a metafield definition. Any metafields existing under the same owner type, namespace, and key will be checked against this definition and will have their type updated accordingly. For metafields that are not valid, they will remain unchanged but any attempts to update them must align with this definition.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#arguments)
Arguments
---------

[Anchor to definition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#arguments-definition)definition

•[Metafield Definition Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionInput)

required

Specifies the input fields for a metafield definition.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetafieldDefinitionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#returns)Metafield Definition Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to createdDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#returns-createdDefinition)created Definition

•[Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

The metafield definition that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate#returns-userErrors)user Errors

•[[Metafield Definition Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a metafield definition

#### Description

You can create a metafield definition using the `metafieldDefinitionCreate` mutation. The following example shows how to add a metafield definition called "Ingredients" to the Product resource, which stores multi-line text (such as a list of ingredients used to make the product).

#### Query

```graphql
mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
  metafieldDefinitionCreate(definition: $definition) {
    createdDefinition {
      id
      name
    }
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
  "definition": {
    "name": "Ingredients",
    "namespace": "bakery",
    "key": "ingredients",
    "description": "A list of ingredients used to make the product.",
    "type": "multi_line_text_field",
    "ownerType": "PRODUCT"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) { metafieldDefinitionCreate(definition: $definition) { createdDefinition { id name } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Ingredients",
      "namespace": "bakery",
      "key": "ingredients",
      "description": "A list of ingredients used to make the product.",
      "type": "multi_line_text_field",
      "ownerType": "PRODUCT"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Ingredients",
            "namespace": "bakery",
            "key": "ingredients",
            "description": "A list of ingredients used to make the product.",
            "type": "multi_line_text_field",
            "ownerType": "PRODUCT"
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
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Ingredients",
    "namespace": "bakery",
    "key": "ingredients",
    "description": "A list of ingredients used to make the product.",
    "type": "multi_line_text_field",
    "ownerType": "PRODUCT"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
      metafieldDefinitionCreate(definition: $definition) {
        createdDefinition {
          id
          name
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Ingredients",
            "namespace": "bakery",
            "key": "ingredients",
            "description": "A list of ingredients used to make the product.",
            "type": "multi_line_text_field",
            "ownerType": "PRODUCT"
        }
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionCreate": {
    "createdDefinition": {
      "id": "gid://shopify/MetafieldDefinition/1071456166",
      "name": "Ingredients"
    },
    "userErrors": []
  }
}
``` 
*   ### Create a metafield definition to be used with automated collections

#### Description

You can use metafield definitions as collection condition rules for automated collections. The first step is to enable the metafield definition `useAsCollectionCondition` flag. This flag can be activated on a maximum of 128 definitions per product and variant metafield defintions. Note that you cannot delete the metafield definition if it is being used as a collection condition rule.

#### Query

```graphql
mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
  metafieldDefinitionCreate(definition: $definition) {
    createdDefinition {
      id
      name
      useAsCollectionCondition
    }
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
  "definition": {
    "name": "Material",
    "namespace": "custom",
    "key": "material",
    "description": "A list of materials used to make the product.",
    "type": "list.single_line_text_field",
    "ownerType": "PRODUCT",
    "useAsCollectionCondition": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) { metafieldDefinitionCreate(definition: $definition) { createdDefinition { id name useAsCollectionCondition } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Material",
      "namespace": "custom",
      "key": "material",
      "description": "A list of materials used to make the product.",
      "type": "list.single_line_text_field",
      "ownerType": "PRODUCT",
      "useAsCollectionCondition": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
        useAsCollectionCondition
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Material",
            "namespace": "custom",
            "key": "material",
            "description": "A list of materials used to make the product.",
            "type": "list.single_line_text_field",
            "ownerType": "PRODUCT",
            "useAsCollectionCondition": true
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
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
        useAsCollectionCondition
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Material",
    "namespace": "custom",
    "key": "material",
    "description": "A list of materials used to make the product.",
    "type": "list.single_line_text_field",
    "ownerType": "PRODUCT",
    "useAsCollectionCondition": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
      metafieldDefinitionCreate(definition: $definition) {
        createdDefinition {
          id
          name
          useAsCollectionCondition
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Material",
            "namespace": "custom",
            "key": "material",
            "description": "A list of materials used to make the product.",
            "type": "list.single_line_text_field",
            "ownerType": "PRODUCT",
            "useAsCollectionCondition": true
        }
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionCreate": {
    "createdDefinition": {
      "id": "gid://shopify/MetafieldDefinition/1071456167",
      "name": "Material",
      "useAsCollectionCondition": true
    },
    "userErrors": []
  }
}
``` 
*   ### Create a metafield definition with access controls

#### Description

The following example shows how to create a metafield definition in a namespace with a reserved prefix that is read- only to the merchant, grants explicit access to 2 specified apps, and no other app can access it via the Admin API.

#### Query

```graphql
mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
  metafieldDefinitionCreate(definition: $definition) {
    createdDefinition {
      id
      namespace
      access {
        admin
      }
    }
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
  "definition": {
    "name": "Pizza size",
    "namespace": "$app:bakery",
    "key": "pizza_size",
    "type": "dimension",
    "description": "The size (diameter) of the pizza in inches.",
    "ownerType": "PRODUCT",
    "access": {
      "admin": "MERCHANT_READ"
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) { metafieldDefinitionCreate(definition: $definition) { createdDefinition { id namespace access { admin } } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Pizza size",
      "namespace": "$app:bakery",
      "key": "pizza_size",
      "type": "dimension",
      "description": "The size (diameter) of the pizza in inches.",
      "ownerType": "PRODUCT",
      "access": {
        "admin": "MERCHANT_READ"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        namespace
        access {
          admin
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Pizza size",
            "namespace": "$app:bakery",
            "key": "pizza_size",
            "type": "dimension",
            "description": "The size (diameter) of the pizza in inches.",
            "ownerType": "PRODUCT",
            "access": {
                "admin": "MERCHANT_READ"
            }
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
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        namespace
        access {
          admin
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Pizza size",
    "namespace": "$app:bakery",
    "key": "pizza_size",
    "type": "dimension",
    "description": "The size (diameter) of the pizza in inches.",
    "ownerType": "PRODUCT",
    "access": {
      "admin": "MERCHANT_READ"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
      metafieldDefinitionCreate(definition: $definition) {
        createdDefinition {
          id
          namespace
          access {
            admin
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Pizza size",
            "namespace": "$app:bakery",
            "key": "pizza_size",
            "type": "dimension",
            "description": "The size (diameter) of the pizza in inches.",
            "ownerType": "PRODUCT",
            "access": {
                "admin": "MERCHANT_READ"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionCreate": {
    "createdDefinition": {
      "id": "gid://shopify/MetafieldDefinition/1071456164",
      "namespace": "app--23898054--bakery",
      "access": {
        "admin": "MERCHANT_READ"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a metafield definition with validations

#### Description

The following example shows how to create a metafield definition called `Pizza size` with a `minimum` size of 9 and a `maximum` size of 15.

#### Query

```graphql
mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
  metafieldDefinitionCreate(definition: $definition) {
    createdDefinition {
      id
      name
    }
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
  "definition": {
    "name": "Pizza size",
    "namespace": "bakery",
    "key": "pizza_size",
    "type": "dimension",
    "description": "The size (diameter) of the pizza in inches.",
    "validations": [
      {
        "name": "min",
        "value": "{\"unit\": \"INCHES\", \"value\": \"9\"}"
      },
      {
        "name": "max",
        "value": "{\"unit\": \"INCHES\", \"value\": \"15\"}"
      }
    ],
    "ownerType": "PRODUCT"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) { metafieldDefinitionCreate(definition: $definition) { createdDefinition { id name } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Pizza size",
      "namespace": "bakery",
      "key": "pizza_size",
      "type": "dimension",
      "description": "The size (diameter) of the pizza in inches.",
      "validations": [
        {
          "name": "min",
          "value": "{\"unit\": \"INCHES\", \"value\": \"9\"}"
        },
        {
          "name": "max",
          "value": "{\"unit\": \"INCHES\", \"value\": \"15\"}"
        }
      ],
      "ownerType": "PRODUCT"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Pizza size",
            "namespace": "bakery",
            "key": "pizza_size",
            "type": "dimension",
            "description": "The size (diameter) of the pizza in inches.",
            "validations": [
                {
                    "name": "min",
                    "value": "{\"unit\": \"INCHES\", \"value\": \"9\"}"
                },
                {
                    "name": "max",
                    "value": "{\"unit\": \"INCHES\", \"value\": \"15\"}"
                }
            ],
            "ownerType": "PRODUCT"
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
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Pizza size",
    "namespace": "bakery",
    "key": "pizza_size",
    "type": "dimension",
    "description": "The size (diameter) of the pizza in inches.",
    "validations": [
      {
        "name": "min",
        "value": "{\"unit\": \"INCHES\", \"value\": \"9\"}"
      },
      {
        "name": "max",
        "value": "{\"unit\": \"INCHES\", \"value\": \"15\"}"
      }
    ],
    "ownerType": "PRODUCT"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
      metafieldDefinitionCreate(definition: $definition) {
        createdDefinition {
          id
          name
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Pizza size",
            "namespace": "bakery",
            "key": "pizza_size",
            "type": "dimension",
            "description": "The size (diameter) of the pizza in inches.",
            "validations": [
                {
                    "name": "min",
                    "value": "{\"unit\": \"INCHES\", \"value\": \"9\"}"
                },
                {
                    "name": "max",
                    "value": "{\"unit\": \"INCHES\", \"value\": \"15\"}"
                }
            ],
            "ownerType": "PRODUCT"
        }
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionCreate": {
    "createdDefinition": {
      "id": "gid://shopify/MetafieldDefinition/1071456165",
      "name": "Pizza size"
    },
    "userErrors": []
  }
}
``` 
*   ### metafieldDefinitionCreate reference

Examples
--------

Create a metafield definition

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateMetafieldDefinition(%24definition%3A%20MetafieldDefinitionInput!)%20%7B%0A%20%20metafieldDefinitionCreate(definition%3A%20%24definition)%20%7B%0A%20%20%20%20createdDefinition%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22definition%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Ingredients%22%2C%0A%20%20%20%20%22namespace%22%3A%20%22bakery%22%2C%0A%20%20%20%20%22key%22%3A%20%22ingredients%22%2C%0A%20%20%20%20%22description%22%3A%20%22A%20list%20of%20ingredients%20used%20to%20make%20the%20product.%22%2C%0A%20%20%20%20%22type%22%3A%20%22multi_line_text_field%22%2C%0A%20%20%20%20%22ownerType%22%3A%20%22PRODUCT%22%0A%20%20%7D%0A%7D)Copy

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

 mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {

 metafieldDefinitionCreate(definition: $definition) {

 createdDefinition {

 id

 name

 }

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"definition":{

"name":"Ingredients",

"namespace":"bakery",

"key":"ingredients",

"description":"A list of ingredients used to make the product.",

"type":"multi_line_text_field",

"ownerType":"PRODUCT"

}

},

},

);

const data=await response.json();

```
mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
  metafieldDefinitionCreate(definition: $definition) {
    createdDefinition {
      id
      name
    }
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
"query": "mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) { metafieldDefinitionCreate(definition: $definition) { createdDefinition { id name } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Ingredients",
      "namespace": "bakery",
      "key": "ingredients",
      "description": "A list of ingredients used to make the product.",
      "type": "multi_line_text_field",
      "ownerType": "PRODUCT"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Ingredients",
            "namespace": "bakery",
            "key": "ingredients",
            "description": "A list of ingredients used to make the product.",
            "type": "multi_line_text_field",
            "ownerType": "PRODUCT"
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
    "query": `mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
      metafieldDefinitionCreate(definition: $definition) {
        createdDefinition {
          id
          name
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Ingredients",
            "namespace": "bakery",
            "key": "ingredients",
            "description": "A list of ingredients used to make the product.",
            "type": "multi_line_text_field",
            "ownerType": "PRODUCT"
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
  mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Ingredients",
    "namespace": "bakery",
    "key": "ingredients",
    "description": "A list of ingredients used to make the product.",
    "type": "multi_line_text_field",
    "ownerType": "PRODUCT"
  }
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

"definition": {

"name": "Ingredients",

"namespace": "bakery",

"key": "ingredients",

"description": "A list of ingredients used to make the product.",

"type": "multi_line_text_field",

"ownerType": "PRODUCT"

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

7

8

9

›

⌄

⌄

⌄

{

"metafieldDefinitionCreate": {

"createdDefinition": {

"id": "gid://shopify/MetafieldDefinition/1071456166",

"name": "Ingredients"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*