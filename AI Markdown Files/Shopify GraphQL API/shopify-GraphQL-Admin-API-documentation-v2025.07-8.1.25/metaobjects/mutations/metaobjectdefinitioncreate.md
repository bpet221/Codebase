---
title: "metaobjectDefinitionCreate"
description: "Shopify GraphQL Admin API documentation for metaobjectdefinitioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate"
extraction_method: "jina"
sections: ['Metaobjects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectDefinitionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate

Markdown Content:
metaobjectDefinitionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#main-content)

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

[Anchor to metaobjectDefinitionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#top)
metaobject Definition Create
============================

mutation

Requires `write_metaobject_definitions` access scope.

Creates a new metaobject definition.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#arguments)
Arguments
---------

[Anchor to definition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#arguments-definition)definition

•[Metaobject Definition Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectDefinitionCreateInput)

required

The input fields for creating a metaobject definition.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetaobjectDefinitionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#returns)Metaobject Definition Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to metaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#returns-metaobjectDefinition)metaobject Definition

•[Metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

The created metaobject definition.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate#returns-userErrors)user Errors

•[[Metaobject User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a metaobject definition

#### Description

A metaobject definition provides the blueprint for a metaobject by defining its type and possible fields. You can create a metaobject definition using the `metaobjectDefinitionCreate` mutation. The following example shows how to add a metaobject definition called "Color swatch" that has a single line text field called "Hex" which stores the color's hex code.

#### Query

```graphql
mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
  metaobjectDefinitionCreate(definition: $definition) {
    metaobjectDefinition {
      name
      type
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
  "definition": {
    "name": "Color swatch",
    "type": "color-swatch",
    "fieldDefinitions": [
      {
        "name": "Hex",
        "key": "hex",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "regex",
            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          }
        ]
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
"query": "mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) { metaobjectDefinitionCreate(definition: $definition) { metaobjectDefinition { name type fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Color swatch",
      "type": "color-swatch",
      "fieldDefinitions": [
        {
          "name": "Hex",
          "key": "hex",
          "type": "single_line_text_field",
          "validations": [
            {
              "name": "regex",
              "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            }
          ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
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
        "definition": {
            "name": "Color swatch",
            "type": "color-swatch",
            "fieldDefinitions": [
                {
                    "name": "Hex",
                    "key": "hex",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "regex",
                            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                        }
                    ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
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
  "definition": {
    "name": "Color swatch",
    "type": "color-swatch",
    "fieldDefinitions": [
      {
        "name": "Hex",
        "key": "hex",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "regex",
            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          }
        ]
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
    "query": `mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
      metaobjectDefinitionCreate(definition: $definition) {
        metaobjectDefinition {
          name
          type
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
        "definition": {
            "name": "Color swatch",
            "type": "color-swatch",
            "fieldDefinitions": [
                {
                    "name": "Hex",
                    "key": "hex",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "regex",
                            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                        }
                    ]
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionCreate": {
    "metaobjectDefinition": {
      "name": "Color swatch",
      "type": "color-swatch",
      "fieldDefinitions": [
        {
          "name": "Hex",
          "key": "hex"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Create a metaobject definition with custom access controls

#### Description

You can create a metaobject definition with custom access controls by using the `metaobjectDefinitionCreate` mutation along with the `access` input. The following example shows how to create a metaobject definition called "FAQ" that has two fields: "Question" and "Answer". The FAQ metaobject is defined using the `MERCHANT_READ_WRITE` admin access setting and `PUBLIC_READ` storefront access setting to make it read/writable within the merchant's admin and also be readable by the storefront. Note: By using the `$app:` prefix in the `type` field, the metaobject definition will be reserved for use by the app that created it and prevents other apps from modifying the definition.

#### Query

```graphql
mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
  metaobjectDefinitionCreate(definition: $definition) {
    metaobjectDefinition {
      name
      type
      access {
        admin
        storefront
      }
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
  "definition": {
    "name": "FAQ",
    "type": "$app:faq",
    "access": {
      "admin": "MERCHANT_READ_WRITE",
      "storefront": "PUBLIC_READ"
    },
    "fieldDefinitions": [
      {
        "name": "Question",
        "key": "question",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "100"
          }
        ]
      },
      {
        "name": "Answer",
        "key": "answer",
        "type": "multi_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "250"
          }
        ]
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
"query": "mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) { metaobjectDefinitionCreate(definition: $definition) { metaobjectDefinition { name type access { admin storefront } fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "FAQ",
      "type": "$app:faq",
      "access": {
        "admin": "MERCHANT_READ_WRITE",
        "storefront": "PUBLIC_READ"
      },
      "fieldDefinitions": [
        {
          "name": "Question",
          "key": "question",
          "type": "single_line_text_field",
          "validations": [
            {
              "name": "max",
              "value": "100"
            }
          ]
        },
        {
          "name": "Answer",
          "key": "answer",
          "type": "multi_line_text_field",
          "validations": [
            {
              "name": "max",
              "value": "250"
            }
          ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
        access {
          admin
          storefront
        }
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
        "definition": {
            "name": "FAQ",
            "type": "$app:faq",
            "access": {
                "admin": "MERCHANT_READ_WRITE",
                "storefront": "PUBLIC_READ"
            },
            "fieldDefinitions": [
                {
                    "name": "Question",
                    "key": "question",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "100"
                        }
                    ]
                },
                {
                    "name": "Answer",
                    "key": "answer",
                    "type": "multi_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "250"
                        }
                    ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
        access {
          admin
          storefront
        }
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
  "definition": {
    "name": "FAQ",
    "type": "$app:faq",
    "access": {
      "admin": "MERCHANT_READ_WRITE",
      "storefront": "PUBLIC_READ"
    },
    "fieldDefinitions": [
      {
        "name": "Question",
        "key": "question",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "100"
          }
        ]
      },
      {
        "name": "Answer",
        "key": "answer",
        "type": "multi_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "250"
          }
        ]
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
    "query": `mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
      metaobjectDefinitionCreate(definition: $definition) {
        metaobjectDefinition {
          name
          type
          access {
            admin
            storefront
          }
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
        "definition": {
            "name": "FAQ",
            "type": "$app:faq",
            "access": {
                "admin": "MERCHANT_READ_WRITE",
                "storefront": "PUBLIC_READ"
            },
            "fieldDefinitions": [
                {
                    "name": "Question",
                    "key": "question",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "100"
                        }
                    ]
                },
                {
                    "name": "Answer",
                    "key": "answer",
                    "type": "multi_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "250"
                        }
                    ]
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionCreate": {
    "metaobjectDefinition": {
      "name": "FAQ",
      "type": "app--1830279--faq",
      "access": {
        "admin": "MERCHANT_READ_WRITE",
        "storefront": "PUBLIC_READ"
      },
      "fieldDefinitions": [
        {
          "name": "Question",
          "key": "question"
        },
        {
          "name": "Answer",
          "key": "answer"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Create a metaobject definition with the publishable capability enabled

#### Description

Using the `capabilities` input, you can enable the publishable capability within your `metaobjectDefinitionCreate` mutation. The following example shows how to create a metaobject definition called "Custom Page" that has a "title" and "author" field. Enabling `publishable` provides metaobjects created with this definition a `status` field that can be used to stage metaobjects using `DRAFT` or `ACTIVE`.

#### Query

```graphql
mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
  metaobjectDefinitionCreate(definition: $definition) {
    metaobjectDefinition {
      name
      type
      capabilities {
        publishable {
          enabled
        }
      }
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
  "definition": {
    "name": "Custom Page",
    "type": "$app:custom-page",
    "capabilities": {
      "publishable": {
        "enabled": true
      }
    },
    "fieldDefinitions": [
      {
        "name": "Title",
        "key": "title",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "100"
          }
        ]
      },
      {
        "name": "Author",
        "key": "author",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "32"
          }
        ]
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
"query": "mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) { metaobjectDefinitionCreate(definition: $definition) { metaobjectDefinition { name type capabilities { publishable { enabled } } fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Custom Page",
      "type": "$app:custom-page",
      "capabilities": {
        "publishable": {
          "enabled": true
        }
      },
      "fieldDefinitions": [
        {
          "name": "Title",
          "key": "title",
          "type": "single_line_text_field",
          "validations": [
            {
              "name": "max",
              "value": "100"
            }
          ]
        },
        {
          "name": "Author",
          "key": "author",
          "type": "single_line_text_field",
          "validations": [
            {
              "name": "max",
              "value": "32"
            }
          ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
        capabilities {
          publishable {
            enabled
          }
        }
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
        "definition": {
            "name": "Custom Page",
            "type": "$app:custom-page",
            "capabilities": {
                "publishable": {
                    "enabled": true
                }
            },
            "fieldDefinitions": [
                {
                    "name": "Title",
                    "key": "title",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "100"
                        }
                    ]
                },
                {
                    "name": "Author",
                    "key": "author",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "32"
                        }
                    ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
        capabilities {
          publishable {
            enabled
          }
        }
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
  "definition": {
    "name": "Custom Page",
    "type": "$app:custom-page",
    "capabilities": {
      "publishable": {
        "enabled": true
      }
    },
    "fieldDefinitions": [
      {
        "name": "Title",
        "key": "title",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "100"
          }
        ]
      },
      {
        "name": "Author",
        "key": "author",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "max",
            "value": "32"
          }
        ]
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
    "query": `mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
      metaobjectDefinitionCreate(definition: $definition) {
        metaobjectDefinition {
          name
          type
          capabilities {
            publishable {
              enabled
            }
          }
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
        "definition": {
            "name": "Custom Page",
            "type": "$app:custom-page",
            "capabilities": {
                "publishable": {
                    "enabled": true
                }
            },
            "fieldDefinitions": [
                {
                    "name": "Title",
                    "key": "title",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "100"
                        }
                    ]
                },
                {
                    "name": "Author",
                    "key": "author",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "max",
                            "value": "32"
                        }
                    ]
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectDefinitionCreate": {
    "metaobjectDefinition": {
      "name": "Custom Page",
      "type": "app--1830279--custom-page",
      "capabilities": {
        "publishable": {
          "enabled": true
        }
      },
      "fieldDefinitions": [
        {
          "name": "Title",
          "key": "title"
        },
        {
          "name": "Author",
          "key": "author"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### metaobjectDefinitionCreate reference

Examples
--------

Create a metaobject definition

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateMetaobjectDefinition(%24definition%3A%20MetaobjectDefinitionCreateInput!)%20%7B%0A%20%20metaobjectDefinitionCreate(definition%3A%20%24definition)%20%7B%0A%20%20%20%20metaobjectDefinition%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20fieldDefinitions%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22definition%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Color%20swatch%22%2C%0A%20%20%20%20%22type%22%3A%20%22color-swatch%22%2C%0A%20%20%20%20%22fieldDefinitions%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22name%22%3A%20%22Hex%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22hex%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%2C%0A%20%20%20%20%20%20%20%20%22validations%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22regex%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22%5E%23(%5BA-Fa-f0-9%5D%7B6%7D%7C%5BA-Fa-f0-9%5D%7B3%7D)%24%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {

 metaobjectDefinitionCreate(definition: $definition) {

 metaobjectDefinition {

 name

 type

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

variables:{

"definition":{

"name":"Color swatch",

"type":"color-swatch",

"fieldDefinitions":[

{

"name":"Hex",

"key":"hex",

"type":"single_line_text_field",

"validations":[

{

"name":"regex",

"value":"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"

}

```
mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
  metaobjectDefinitionCreate(definition: $definition) {
    metaobjectDefinition {
      name
      type
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) { metaobjectDefinitionCreate(definition: $definition) { metaobjectDefinition { name type fieldDefinitions { name key } } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Color swatch",
      "type": "color-swatch",
      "fieldDefinitions": [
        {
          "name": "Hex",
          "key": "hex",
          "type": "single_line_text_field",
          "validations": [
            {
              "name": "regex",
              "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            }
          ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
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
        "definition": {
            "name": "Color swatch",
            "type": "color-swatch",
            "fieldDefinitions": [
                {
                    "name": "Hex",
                    "key": "hex",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "regex",
                            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                        }
                    ]
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
    "query": `mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
      metaobjectDefinitionCreate(definition: $definition) {
        metaobjectDefinition {
          name
          type
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
        "definition": {
            "name": "Color swatch",
            "type": "color-swatch",
            "fieldDefinitions": [
                {
                    "name": "Hex",
                    "key": "hex",
                    "type": "single_line_text_field",
                    "validations": [
                        {
                            "name": "regex",
                            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                        }
                    ]
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
  mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition {
        name
        type
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
  "definition": {
    "name": "Color swatch",
    "type": "color-swatch",
    "fieldDefinitions": [
      {
        "name": "Hex",
        "key": "hex",
        "type": "single_line_text_field",
        "validations": [
          {
            "name": "regex",
            "value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          }
        ]
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

16

17

18

19

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"definition": {

"name": "Color swatch",

"type": "color-swatch",

"fieldDefinitions": [

{

"name": "Hex",

"key": "hex",

"type": "single_line_text_field",

"validations": [

{

"name": "regex",

"value": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"

}

]

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

›

⌄

⌄

⌄

⌄

⌄

{

"metaobjectDefinitionCreate": {

"metaobjectDefinition": {

"name": "Color swatch",

"type": "color-swatch",

"fieldDefinitions": [

{

"name": "Hex",

"key": "hex"

}

]

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*