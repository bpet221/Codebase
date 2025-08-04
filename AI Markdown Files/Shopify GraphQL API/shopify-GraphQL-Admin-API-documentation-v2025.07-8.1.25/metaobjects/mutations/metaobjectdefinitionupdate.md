---
title: "metaobjectDefinitionUpdate"
description: "Shopify GraphQL Admin API documentation for metaobjectdefinitionupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate"
extraction_method: "jina"
sections: ['Metaobjects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectDefinitionUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate

Markdown Content:
metaobjectDefinitionUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#main-content)

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

[Anchor to metaobjectDefinitionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#top)
metaobject Definition Update
============================

mutation

Requires `write_metaobject_definitions` access scope.

Updates a metaobject definition with new settings and metafield definitions.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#arguments)
Arguments
---------

[Anchor to definition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#arguments-definition)definition

•[Metaobject Definition Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionUpdateInput)

required

The input fields for updating a metaobject definition.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the metaobject definition to update.

* * *

Was this section helpful?

Yes No

[Anchor to MetaobjectDefinitionUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#returns)Metaobject Definition Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to metaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#returns-metaobjectDefinition)metaobject Definition

•[Metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

The updated metaobject definition.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate#returns-userErrors)user Errors

•[[Metaobject User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create additional field definitions on an existing metaobject definition

#### Description

To add a field definition to an existing metaobject definition, use the `metaobjectDefinitionUpdate` mutation with the `create` `MetaobjectFieldDefinitionOperationInput`. The following example shows adding a new field definition named "Description" to the "LookBook" metaobject definition.

#### Query

```graphql
mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
    metaobjectDefinition {
      id
      name
      displayNameKey
      fieldDefinitions {
        name
        key
        type {
          name
        }
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "displayNameKey": "description",
    "fieldDefinitions": [
      {
        "create": {
          "key": "description",
          "name": "Description",
          "type": "single_line_text_field"
        }
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) { metaobjectDefinitionUpdate(id: $id, definition: $definition) { metaobjectDefinition { id name displayNameKey fieldDefinitions { name key type { name } } } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetaobjectDefinition/578408816",
    "definition": {
      "displayNameKey": "description",
      "fieldDefinitions": [
        {
          "create": {
            "key": "description",
            "name": "Description",
            "type": "single_line_text_field"
          }
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        displayNameKey
        fieldDefinitions {
          name
          key
          type {
            name
          }
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "displayNameKey": "description",
            "fieldDefinitions": [
                {
                    "create": {
                        "key": "description",
                        "name": "Description",
                        "type": "single_line_text_field"
                    }
                }
            ]
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
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        displayNameKey
        fieldDefinitions {
          name
          key
          type {
            name
          }
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "displayNameKey": "description",
    "fieldDefinitions": [
      {
        "create": {
          "key": "description",
          "name": "Description",
          "type": "single_line_text_field"
        }
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
      metaobjectDefinitionUpdate(id: $id, definition: $definition) {
        metaobjectDefinition {
          id
          name
          displayNameKey
          fieldDefinitions {
            name
            key
            type {
              name
            }
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "displayNameKey": "description",
            "fieldDefinitions": [
                {
                    "create": {
                        "key": "description",
                        "name": "Description",
                        "type": "single_line_text_field"
                    }
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionUpdate": {
    "metaobjectDefinition": {
      "id": "gid://shopify/MetaobjectDefinition/578408816",
      "name": "LookBook",
      "displayNameKey": "description",
      "fieldDefinitions": [
        {
          "name": "Another Lookbook",
          "key": "another_lookbook",
          "type": {
            "name": "metaobject_reference"
          }
        },
        {
          "name": "Season",
          "key": "cover_image",
          "type": {
            "name": "file_reference"
          }
        },
        {
          "name": "Season",
          "key": "season",
          "type": {
            "name": "single_line_text_field"
          }
        },
        {
          "name": "Year",
          "key": "year",
          "type": {
            "name": "number_integer"
          }
        },
        {
          "name": "Description",
          "key": "description",
          "type": {
            "name": "single_line_text_field"
          }
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Delete a field definition from a metaobject definition

#### Description

To delete a field definition from an existing metaobject definnition, use the `metaobjectDefinitionUpdate` mutation with the `delete` `MetaobjectFieldDefinitionOperationInput`. The following example shows deleting the "Season" field definition on "Lookbook".

#### Query

```graphql
mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
    metaobjectDefinition {
      id
      name
      fieldDefinitions {
        name
        key
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "fieldDefinitions": [
      {
        "delete": {
          "key": "season"
        }
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) { metaobjectDefinitionUpdate(id: $id, definition: $definition) { metaobjectDefinition { id name fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetaobjectDefinition/578408816",
    "definition": {
      "fieldDefinitions": [
        {
          "delete": {
            "key": "season"
          }
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        fieldDefinitions {
          name
          key
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "fieldDefinitions": [
                {
                    "delete": {
                        "key": "season"
                    }
                }
            ]
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
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        fieldDefinitions {
          name
          key
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "fieldDefinitions": [
      {
        "delete": {
          "key": "season"
        }
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
      metaobjectDefinitionUpdate(id: $id, definition: $definition) {
        metaobjectDefinition {
          id
          name
          fieldDefinitions {
            name
            key
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "fieldDefinitions": [
                {
                    "delete": {
                        "key": "season"
                    }
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionUpdate": {
    "metaobjectDefinition": {
      "id": "gid://shopify/MetaobjectDefinition/578408816",
      "name": "LookBook",
      "fieldDefinitions": [
        {
          "name": "Another Lookbook",
          "key": "another_lookbook"
        },
        {
          "name": "Season",
          "key": "cover_image"
        },
        {
          "name": "Year",
          "key": "year"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Update an existing field definition on a metaobject definition

#### Description

To update a field definition on an existing metaobject, use the `metaobjectDefinitionUpdate` mutation with the `update` `MetaobjectFieldDefinitionOperationInput`. The following example shows updating the name of the "Season" field definition on the "Lookbook" metaobject definition to be "Edition".

#### Query

```graphql
mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
    metaobjectDefinition {
      name
      fieldDefinitions {
        name
        key
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "fieldDefinitions": [
      {
        "update": {
          "key": "season",
          "name": "Edition"
        }
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) { metaobjectDefinitionUpdate(id: $id, definition: $definition) { metaobjectDefinition { name fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetaobjectDefinition/578408816",
    "definition": {
      "fieldDefinitions": [
        {
          "update": {
            "key": "season",
            "name": "Edition"
          }
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        name
        fieldDefinitions {
          name
          key
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "fieldDefinitions": [
                {
                    "update": {
                        "key": "season",
                        "name": "Edition"
                    }
                }
            ]
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
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        name
        fieldDefinitions {
          name
          key
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "fieldDefinitions": [
      {
        "update": {
          "key": "season",
          "name": "Edition"
        }
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
      metaobjectDefinitionUpdate(id: $id, definition: $definition) {
        metaobjectDefinition {
          name
          fieldDefinitions {
            name
            key
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "fieldDefinitions": [
                {
                    "update": {
                        "key": "season",
                        "name": "Edition"
                    }
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionUpdate": {
    "metaobjectDefinition": {
      "name": "LookBook",
      "fieldDefinitions": [
        {
          "name": "Another Lookbook",
          "key": "another_lookbook"
        },
        {
          "name": "Season",
          "key": "cover_image"
        },
        {
          "name": "Edition",
          "key": "season"
        },
        {
          "name": "Year",
          "key": "year"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Update base attributes of a metaobject definition

#### Description

To update a metaobject definition, use the `metaobjectDefinitionUpdate` mutation. The following example shows updating the name of the metaobject definition "Lookbook" to "Stylebook" and changing the display name key to "season".

#### Query

```graphql
mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
    metaobjectDefinition {
      id
      name
      displayNameKey
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "name": "StyleBook",
    "displayNameKey": "season"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) { metaobjectDefinitionUpdate(id: $id, definition: $definition) { metaobjectDefinition { id name displayNameKey } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetaobjectDefinition/578408816",
    "definition": {
      "name": "StyleBook",
      "displayNameKey": "season"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        displayNameKey
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "name": "StyleBook",
            "displayNameKey": "season"
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
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        displayNameKey
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "name": "StyleBook",
    "displayNameKey": "season"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
      metaobjectDefinitionUpdate(id: $id, definition: $definition) {
        metaobjectDefinition {
          id
          name
          displayNameKey
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "name": "StyleBook",
            "displayNameKey": "season"
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionUpdate": {
    "metaobjectDefinition": {
      "id": "gid://shopify/MetaobjectDefinition/578408816",
      "name": "StyleBook",
      "displayNameKey": "season"
    },
    "userErrors": []
  }
}
``` 
*   ### Update ordering of fields on an existing metaobject definition

#### Description

To update the ordering of fields on an existing metaobject definition, use the `metaobjectDefinitionUpdate` mutation with the `resetFieldOrder` boolean. The following example shows updating the ordering of the fields on the "Color" metaobject definition. Prior to the update, the ordering of the fields is "name", "hex", "accent_color". After the update, the ordering changes to "hex", "name", and "accent_color".

#### Query

```graphql
mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
    metaobjectDefinition {
      id
      name
      fieldDefinitions {
        name
        key
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
  "id": "gid://shopify/MetaobjectDefinition/228758553",
  "definition": {
    "resetFieldOrder": true,
    "fieldDefinitions": [
      {
        "update": {
          "key": "hex"
        }
      },
      {
        "update": {
          "key": "name"
        }
      },
      {
        "update": {
          "key": "accent_color"
        }
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) { metaobjectDefinitionUpdate(id: $id, definition: $definition) { metaobjectDefinition { id name fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetaobjectDefinition/228758553",
    "definition": {
      "resetFieldOrder": true,
      "fieldDefinitions": [
        {
          "update": {
            "key": "hex"
          }
        },
        {
          "update": {
            "key": "name"
          }
        },
        {
          "update": {
            "key": "accent_color"
          }
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        fieldDefinitions {
          name
          key
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
        "id": "gid://shopify/MetaobjectDefinition/228758553",
        "definition": {
            "resetFieldOrder": true,
            "fieldDefinitions": [
                {
                    "update": {
                        "key": "hex"
                    }
                },
                {
                    "update": {
                        "key": "name"
                    }
                },
                {
                    "update": {
                        "key": "accent_color"
                    }
                }
            ]
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
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        fieldDefinitions {
          name
          key
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
  "id": "gid://shopify/MetaobjectDefinition/228758553",
  "definition": {
    "resetFieldOrder": true,
    "fieldDefinitions": [
      {
        "update": {
          "key": "hex"
        }
      },
      {
        "update": {
          "key": "name"
        }
      },
      {
        "update": {
          "key": "accent_color"
        }
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
      metaobjectDefinitionUpdate(id: $id, definition: $definition) {
        metaobjectDefinition {
          id
          name
          fieldDefinitions {
            name
            key
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
        "id": "gid://shopify/MetaobjectDefinition/228758553",
        "definition": {
            "resetFieldOrder": true,
            "fieldDefinitions": [
                {
                    "update": {
                        "key": "hex"
                    }
                },
                {
                    "update": {
                        "key": "name"
                    }
                },
                {
                    "update": {
                        "key": "accent_color"
                    }
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionUpdate": {
    "metaobjectDefinition": {
      "id": "gid://shopify/MetaobjectDefinition/228758553",
      "name": "Color",
      "fieldDefinitions": [
        {
          "name": "Hex code",
          "key": "hex"
        },
        {
          "name": "Name",
          "key": "name"
        },
        {
          "name": "Accent color",
          "key": "accent_color"
        },
        {
          "name": "Related colors",
          "key": "related_colors"
        },
        {
          "name": "Secondary Hex code",
          "key": "secondary_hex"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### metaobjectDefinitionUpdate reference

Examples
--------

Create additional field definitions on an existing metaobject definition

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpdateMetaobjectDefinition(%24id%3A%20ID!%2C%20%24definition%3A%20MetaobjectDefinitionUpdateInput!)%20%7B%0A%20%20metaobjectDefinitionUpdate(id%3A%20%24id%2C%20definition%3A%20%24definition)%20%7B%0A%20%20%20%20metaobjectDefinition%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20displayNameKey%0A%20%20%20%20%20%20fieldDefinitions%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20type%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetaobjectDefinition%2F578408816%22%2C%0A%20%20%22definition%22%3A%20%7B%0A%20%20%20%20%22displayNameKey%22%3A%20%22description%22%2C%0A%20%20%20%20%22fieldDefinitions%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22create%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22description%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Description%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {

 metaobjectDefinitionUpdate(id: $id, definition: $definition) {

 metaobjectDefinition {

 id

 name

 displayNameKey

 fieldDefinitions {

 name

 key

 type {

 name

 }

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

variables:{

"id":"gid://shopify/MetaobjectDefinition/578408816",

"definition":{

"displayNameKey":"description",

"fieldDefinitions":[

{

"create":{

"key":"description",

"name":"Description",

"type":"single_line_text_field"

```
mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
  metaobjectDefinitionUpdate(id: $id, definition: $definition) {
    metaobjectDefinition {
      id
      name
      displayNameKey
      fieldDefinitions {
        name
        key
        type {
          name
        }
      }
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
"query": "mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) { metaobjectDefinitionUpdate(id: $id, definition: $definition) { metaobjectDefinition { id name displayNameKey fieldDefinitions { name key type { name } } } userErrors { field message code } } }",
 "variables": {
    "id": "gid://shopify/MetaobjectDefinition/578408816",
    "definition": {
      "displayNameKey": "description",
      "fieldDefinitions": [
        {
          "create": {
            "key": "description",
            "name": "Description",
            "type": "single_line_text_field"
          }
        }
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        displayNameKey
        fieldDefinitions {
          name
          key
          type {
            name
          }
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "displayNameKey": "description",
            "fieldDefinitions": [
                {
                    "create": {
                        "key": "description",
                        "name": "Description",
                        "type": "single_line_text_field"
                    }
                }
            ]
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
    "query": `mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
      metaobjectDefinitionUpdate(id: $id, definition: $definition) {
        metaobjectDefinition {
          id
          name
          displayNameKey
          fieldDefinitions {
            name
            key
            type {
              name
            }
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
        "id": "gid://shopify/MetaobjectDefinition/578408816",
        "definition": {
            "displayNameKey": "description",
            "fieldDefinitions": [
                {
                    "create": {
                        "key": "description",
                        "name": "Description",
                        "type": "single_line_text_field"
                    }
                }
            ]
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
  mutation UpdateMetaobjectDefinition($id: ID!, $definition: MetaobjectDefinitionUpdateInput!) {
    metaobjectDefinitionUpdate(id: $id, definition: $definition) {
      metaobjectDefinition {
        id
        name
        displayNameKey
        fieldDefinitions {
          name
          key
          type {
            name
          }
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
  "id": "gid://shopify/MetaobjectDefinition/578408816",
  "definition": {
    "displayNameKey": "description",
    "fieldDefinitions": [
      {
        "create": {
          "key": "description",
          "name": "Description",
          "type": "single_line_text_field"
        }
      }
    ]
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

11

12

13

14

15

›

⌄

⌄

⌄

⌄

⌄

{

"id": "gid://shopify/MetaobjectDefinition/578408816",

"definition": {

"displayNameKey": "description",

"fieldDefinitions": [

{

"create": {

"key": "description",

"name": "Description",

"type": "single_line_text_field"

}

}

]

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

27

28

29

30

31

32

33

34

35

36

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

⌄

⌄

⌄

⌄

{

"metaobjectDefinitionUpdate": {

"metaobjectDefinition": {

"id": "gid://shopify/MetaobjectDefinition/578408816",

"name": "LookBook",

"displayNameKey": "description",

"fieldDefinitions": [

{

"name": "Another Lookbook",

"key": "another_lookbook",

"type": {

"name": "metaobject_reference"

}

},

{

"name": "Season",

"key": "cover_image",

"type": {

"name": "file_reference"

}

},

{

"name": "Season",

"key": "season",

"type": {

"name": "single_line_text_field"

}

},

{

"name": "Year",

"key": "year",

"type": {

"name": "number_integer"

}

},

{


---
*Content truncated at "Updates" section*