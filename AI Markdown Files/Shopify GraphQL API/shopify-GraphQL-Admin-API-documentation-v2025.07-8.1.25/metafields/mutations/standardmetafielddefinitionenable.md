---
title: "standardMetafieldDefinitionEnable"
description: "Shopify GraphQL Admin API documentation for standardmetafielddefinitionenable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: standardMetafieldDefinitionEnable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable

Markdown Content:
standardMetafieldDefinitionEnable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#main-content)

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

[Anchor to standardMetafieldDefinitionEnable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#top)
standard Metafield Definition Enable
====================================

mutation

Requires API client to have access to the resource type associated with the metafield definition owner type.

Activates the specified standard metafield definition from its template.

Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments)
Arguments
---------

[Anchor to access](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-access)access

•[Standard Metafield Definition Access Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StandardMetafieldDefinitionAccessInput)

The access settings that apply to each of the metafields that belong to the metafield definition.

Show input fields

[Anchor to capabilities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-capabilities)capabilities

•[Metafield Capability Create Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

The capabilities of the metafield definition.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the standard metafield definition template to enable.

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-key)key

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The key of the standard metafield to enable. Used in combination with `namespace`.

[Anchor to namespace](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-namespace)namespace

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The namespace of the standard metafield to enable. Used in combination with `key`.

[Anchor to ownerType](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-ownerType)owner Type

•[Metafield Owner Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

required

The resource type that the metafield definition is scoped to.

Show enum values

[Anchor to pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-pin)pin

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:null

Whether to pin the metafield definition.

### Deprecated arguments

[Anchor to useAsCollectionCondition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-useAsCollectionCondition)use As Collection Condition

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Deprecated Default:null

[Anchor to visibleToStorefrontApi](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#arguments-visibleToStorefrontApi)visible To Storefront Api

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Deprecated Default:null

* * *

Was this section helpful?

Yes No

[Anchor to StandardMetafieldDefinitionEnablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#returns)Standard Metafield Definition Enable Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to createdDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#returns-createdDefinition)created Definition

•[Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

The metafield definition that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable#returns-userErrors)user Errors

•[[Standard Metafield Definition Enable User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Creates a metafield definition from an existing template

#### Description

Create a metafield definition from the standard templates.

#### Query

```graphql
mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
  standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
    createdDefinition {
      name
      key
      namespace
      description
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
  "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
  "ownerType": "PRODUCT",
  "pin": false,
  "visibleToStorefrontApi": true
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) { standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) { createdDefinition { name key namespace description } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
    "ownerType": "PRODUCT",
    "pin": false,
    "visibleToStorefrontApi": true
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
        "ownerType": "PRODUCT",
        "pin": false,
        "visibleToStorefrontApi": true
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
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
  "ownerType": "PRODUCT",
  "pin": false,
  "visibleToStorefrontApi": true
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
      standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
        createdDefinition {
          name
          key
          namespace
          description
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
        "ownerType": "PRODUCT",
        "pin": false,
        "visibleToStorefrontApi": true
    },
  },
});
``` #### Response

```json
{
  "standardMetafieldDefinitionEnable": {
    "createdDefinition": {
      "name": "Care guide",
      "key": "care_guide",
      "namespace": "descriptors",
      "description": "Instructions for taking care of a product or apparel"
    },
    "userErrors": []
  }
}
``` 
*   ### standardMetafieldDefinitionEnable reference

Examples
--------

Creates a metafield definition from an existing template

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20standardMetafieldDefinitionEnable(%24id%3A%20ID!%2C%20%24ownerType%3A%20MetafieldOwnerType!%2C%20%24pin%3A%20Boolean!%2C%20%24visibleToStorefrontApi%3A%20Boolean!)%20%7B%0A%20%20standardMetafieldDefinitionEnable(id%3A%20%24id%2C%20ownerType%3A%20%24ownerType%2C%20pin%3A%20%24pin%2C%20visibleToStorefrontApi%3A%20%24visibleToStorefrontApi)%20%7B%0A%20%20%20%20createdDefinition%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FStandardMetafieldDefinitionTemplate%2F2%22%2C%0A%20%20%22ownerType%22%3A%20%22PRODUCT%22%2C%0A%20%20%22pin%22%3A%20false%2C%0A%20%20%22visibleToStorefrontApi%22%3A%20true%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {

 standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {

 createdDefinition {

 name

 key

 namespace

 description

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/StandardMetafieldDefinitionTemplate/2",

"ownerType":"PRODUCT",

"pin":false,

"visibleToStorefrontApi":true

},

},

);

const data=await response.json();

```
mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
  standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
    createdDefinition {
      name
      key
      namespace
      description
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
"query": "mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) { standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) { createdDefinition { name key namespace description } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
    "ownerType": "PRODUCT",
    "pin": false,
    "visibleToStorefrontApi": true
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
        "ownerType": "PRODUCT",
        "pin": false,
        "visibleToStorefrontApi": true
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
      standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
        createdDefinition {
          name
          key
          namespace
          description
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
        "ownerType": "PRODUCT",
        "pin": false,
        "visibleToStorefrontApi": true
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
  mutation standardMetafieldDefinitionEnable($id: ID!, $ownerType: MetafieldOwnerType!, $pin: Boolean!, $visibleToStorefrontApi: Boolean!) {
    standardMetafieldDefinitionEnable(id: $id, ownerType: $ownerType, pin: $pin, visibleToStorefrontApi: $visibleToStorefrontApi) {
      createdDefinition {
        name
        key
        namespace
        description
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
  "ownerType": "PRODUCT",
  "pin": false,
  "visibleToStorefrontApi": true
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

›

⌄

{

"id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",

"ownerType": "PRODUCT",

"pin": false,

"visibleToStorefrontApi": true

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

›

⌄

⌄

⌄

{

"standardMetafieldDefinitionEnable": {

"createdDefinition": {

"name": "Care guide",

"key": "care_guide",

"namespace": "descriptors",

"description": "Instructions for taking care of a product or apparel"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*