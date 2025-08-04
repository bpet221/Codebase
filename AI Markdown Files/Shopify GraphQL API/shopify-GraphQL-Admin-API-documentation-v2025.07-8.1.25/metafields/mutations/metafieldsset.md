---
title: "metafieldsSet"
description: "Shopify GraphQL Admin API documentation for metafieldsset"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldsSet - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset

Markdown Content:
metafieldsSet - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#main-content)

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

[Anchor to metafieldsSet](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#top)
metafields Set
==============

mutation

Requires the same access level needed to mutate the owner resource. For instance, if you want to set a metafield on a product, you need the same permissions as you would need to mutate a product.

Sets metafield values. Metafield values will be set regardless if they were previously created or not.

Allows a maximum of 25 metafields to be set at a time.

This operation is atomic, meaning no changes are persisted if an error is encountered.

As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#arguments)
Arguments
---------

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#arguments-metafields)metafields

•[[Metafields Set Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldsSetInput)

required

The list of metafield values to set. Maximum of 25.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetafieldsSetPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#returns)Metafields Set Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#returns-metafields)metafields

•[[Metafield!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

The list of metafields that were set.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset#returns-userErrors)user Errors

•[[Metafields Set User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldsSetUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a metafield

#### Query

```graphql
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      key
      namespace
      value
      createdAt
      updatedAt
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
  "metafields": [
    {
      "key": "example_key",
      "namespace": "example_namespace",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Example Value"
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value createdAt updatedAt } userErrors { field message code } } }",
 "variables": {
    "metafields": [
      {
        "key": "example_key",
        "namespace": "example_namespace",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "single_line_text_field",
        "value": "Example Value"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
        "metafields": [
            {
                "key": "example_key",
                "namespace": "example_namespace",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Example Value"
            }
        ]
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
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
  "metafields": [
    {
      "key": "example_key",
      "namespace": "example_namespace",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Example Value"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          key
          namespace
          value
          createdAt
          updatedAt
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "key": "example_key",
                "namespace": "example_namespace",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Example Value"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "metafieldsSet": {
    "metafields": [
      {
        "key": "example_key",
        "namespace": "example_namespace",
        "value": "Example Value",
        "createdAt": "2024-11-18T21:40:28Z",
        "updatedAt": "2024-11-18T21:40:28Z"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Creating and updating metafields

#### Description

Create and update operations are combined in the `metafieldSet` mutation. The following example shows you how to create one new metafield, `key: "manufactured"`, and update an existing metafield, `key: "materials"` in one mutation.

#### Query

```graphql
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      key
      namespace
      value
      createdAt
      updatedAt
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
  "metafields": [
    {
      "key": "materials",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "multi_line_text_field",
      "value": "95% Cotton\n5% Spandex"
    },
    {
      "key": "manufactured",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Made in Canada"
    },
    {
      "key": "product_description",
      "namespace": "custom",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "rich_text_field",
      "value": "{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"value\":\"This is italicized text and \",\"italic\":true},{\"url\":\"https:\\/\\/example.com\",\"title\":\"Link to example.com\",\"type\":\"link\",\"children\":[{\"type\":\"text\",\"value\":\"a bolded hyperlink\",\"bold\":true}]}]}]}"
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value createdAt updatedAt } userErrors { field message code } } }",
 "variables": {
    "metafields": [
      {
        "key": "materials",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "multi_line_text_field",
        "value": "95% Cotton\n5% Spandex"
      },
      {
        "key": "manufactured",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "single_line_text_field",
        "value": "Made in Canada"
      },
      {
        "key": "product_description",
        "namespace": "custom",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "rich_text_field",
        "value": "{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"value\":\"This is italicized text and \",\"italic\":true},{\"url\":\"https:\\/\\/example.com\",\"title\":\"Link to example.com\",\"type\":\"link\",\"children\":[{\"type\":\"text\",\"value\":\"a bolded hyperlink\",\"bold\":true}]}]}]}"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
        "metafields": [
            {
                "key": "materials",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "multi_line_text_field",
                "value": "95% Cotton\n5% Spandex"
            },
            {
                "key": "manufactured",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Made in Canada"
            },
            {
                "key": "product_description",
                "namespace": "custom",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "rich_text_field",
                "value": "{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"value\":\"This is italicized text and \",\"italic\":true},{\"url\":\"https:\\/\\/example.com\",\"title\":\"Link to example.com\",\"type\":\"link\",\"children\":[{\"type\":\"text\",\"value\":\"a bolded hyperlink\",\"bold\":true}]}]}]}"
            }
        ]
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
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
  "metafields": [
    {
      "key": "materials",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "multi_line_text_field",
      "value": "95% Cotton\n5% Spandex"
    },
    {
      "key": "manufactured",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Made in Canada"
    },
    {
      "key": "product_description",
      "namespace": "custom",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "rich_text_field",
      "value": "{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"value\":\"This is italicized text and \",\"italic\":true},{\"url\":\"https:\\/\\/example.com\",\"title\":\"Link to example.com\",\"type\":\"link\",\"children\":[{\"type\":\"text\",\"value\":\"a bolded hyperlink\",\"bold\":true}]}]}]}"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          key
          namespace
          value
          createdAt
          updatedAt
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "key": "materials",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "multi_line_text_field",
                "value": "95% Cotton\n5% Spandex"
            },
            {
                "key": "manufactured",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Made in Canada"
            },
            {
                "key": "product_description",
                "namespace": "custom",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "rich_text_field",
                "value": "{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"value\":\"This is italicized text and \",\"italic\":true},{\"url\":\"https:\\/\\/example.com\",\"title\":\"Link to example.com\",\"type\":\"link\",\"children\":[{\"type\":\"text\",\"value\":\"a bolded hyperlink\",\"bold\":true}]}]}]}"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "metafieldsSet": {
    "metafields": [
      {
        "key": "materials",
        "namespace": "my_fields",
        "value": "95% Cotton\n5% Spandex",
        "createdAt": "2024-11-13T20:04:12Z",
        "updatedAt": "2024-11-13T20:04:13Z"
      },
      {
        "key": "manufactured",
        "namespace": "my_fields",
        "value": "Made in Canada",
        "createdAt": "2024-11-13T20:04:13Z",
        "updatedAt": "2024-11-13T20:04:13Z"
      },
      {
        "key": "product_description",
        "namespace": "custom",
        "value": "{\"type\":\"root\",\"children\":[{\"type\":\"paragraph\",\"children\":[{\"type\":\"text\",\"value\":\"This is italicized text and \",\"italic\":true},{\"url\":\"https://example.com\",\"title\":\"Link to example.com\",\"type\":\"link\",\"children\":[{\"type\":\"text\",\"value\":\"a bolded hyperlink\",\"bold\":true}]}]}]}",
        "createdAt": "2024-11-13T20:04:13Z",
        "updatedAt": "2024-11-13T20:04:13Z"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Creating and updating metafields using compare-and-swap (CAS)

#### Description

Create and update operations are combined in the `metafieldSet` mutation. The following example shows you how to create one new metafield, `key: "manufactured"`, and update an existing metafield, `key: "materials"` in one mutation in a safer way with compare-and-swap (CAS) through the `compareDigest` field.

#### Query

```graphql
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      key
      namespace
      value
      compareDigest
      createdAt
      updatedAt
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
  "metafields": [
    {
      "key": "materials",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "multi_line_text_field",
      "value": "95% Cotton\n5% Spandex",
      "compareDigest": "fd6b73725c9e83da2d2bcfaf90b27305b9058a48a1565639aa00d718d4caf8e8"
    },
    {
      "key": "manufactured",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Made in Canada",
      "compareDigest": null
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value compareDigest createdAt updatedAt } userErrors { field message code } } }",
 "variables": {
    "metafields": [
      {
        "key": "materials",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "multi_line_text_field",
        "value": "95% Cotton\n5% Spandex",
        "compareDigest": "fd6b73725c9e83da2d2bcfaf90b27305b9058a48a1565639aa00d718d4caf8e8"
      },
      {
        "key": "manufactured",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "single_line_text_field",
        "value": "Made in Canada",
        "compareDigest": null
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        compareDigest
        createdAt
        updatedAt
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
        "metafields": [
            {
                "key": "materials",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "multi_line_text_field",
                "value": "95% Cotton\n5% Spandex",
                "compareDigest": "fd6b73725c9e83da2d2bcfaf90b27305b9058a48a1565639aa00d718d4caf8e8"
            },
            {
                "key": "manufactured",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Made in Canada",
                "compareDigest": null
            }
        ]
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
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        compareDigest
        createdAt
        updatedAt
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
  "metafields": [
    {
      "key": "materials",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "multi_line_text_field",
      "value": "95% Cotton\n5% Spandex",
      "compareDigest": "fd6b73725c9e83da2d2bcfaf90b27305b9058a48a1565639aa00d718d4caf8e8"
    },
    {
      "key": "manufactured",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Made in Canada",
      "compareDigest": null
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          key
          namespace
          value
          compareDigest
          createdAt
          updatedAt
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "key": "materials",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "multi_line_text_field",
                "value": "95% Cotton\n5% Spandex",
                "compareDigest": "fd6b73725c9e83da2d2bcfaf90b27305b9058a48a1565639aa00d718d4caf8e8"
            },
            {
                "key": "manufactured",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Made in Canada",
                "compareDigest": null
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "metafieldsSet": {
    "metafields": [
      {
        "key": "materials",
        "namespace": "my_fields",
        "value": "95% Cotton\n5% Spandex",
        "compareDigest": "8164fa2a8e66a6bb54181ac0c095375c701ae276e801f43efa16ea7be516f678",
        "createdAt": "2024-11-13T20:03:43Z",
        "updatedAt": "2024-11-13T20:04:12Z"
      },
      {
        "key": "manufactured",
        "namespace": "my_fields",
        "value": "Made in Canada",
        "compareDigest": "f8c307f7c79ec624884e1c71640ee3e6441cf7bb4589b9e3cc551ab3e3b95ff1",
        "createdAt": "2024-11-13T20:04:12Z",
        "updatedAt": "2024-11-13T20:04:12Z"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Updates a metafield

#### Query

```graphql
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      key
      namespace
      value
      createdAt
      updatedAt
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
  "metafields": [
    {
      "key": "materials",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "multi_line_text_field",
      "value": "95% Cotton\n5% Spandex"
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value createdAt updatedAt } userErrors { field message code } } }",
 "variables": {
    "metafields": [
      {
        "key": "materials",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "multi_line_text_field",
        "value": "95% Cotton\n5% Spandex"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
        "metafields": [
            {
                "key": "materials",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "multi_line_text_field",
                "value": "95% Cotton\n5% Spandex"
            }
        ]
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
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
  "metafields": [
    {
      "key": "materials",
      "namespace": "my_fields",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "multi_line_text_field",
      "value": "95% Cotton\n5% Spandex"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          key
          namespace
          value
          createdAt
          updatedAt
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "key": "materials",
                "namespace": "my_fields",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "multi_line_text_field",
                "value": "95% Cotton\n5% Spandex"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "metafieldsSet": {
    "metafields": [
      {
        "key": "materials",
        "namespace": "my_fields",
        "value": "95% Cotton\n5% Spandex",
        "createdAt": "2024-11-18T21:40:55Z",
        "updatedAt": "2024-11-18T21:40:55Z"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### metafieldsSet reference

Examples
--------

Create a metafield

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20MetafieldsSet(%24metafields%3A%20%5BMetafieldsSetInput!%5D!)%20%7B%0A%20%20metafieldsSet(metafields%3A%20%24metafields)%20%7B%0A%20%20%20%20metafields%20%7B%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20value%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22key%22%3A%20%22example_key%22%2C%0A%20%20%20%20%20%20%22namespace%22%3A%20%22example_namespace%22%2C%0A%20%20%20%20%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%2C%0A%20%20%20%20%20%20%22value%22%3A%20%22Example%20Value%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {

 metafieldsSet(metafields: $metafields) {

 metafields {

 key

 namespace

 value

 createdAt

 updatedAt

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

"metafields":[

{

"key":"example_key",

"namespace":"example_namespace",

"ownerId":"gid://shopify/Product/20995642",

"type":"single_line_text_field",

"value":"Example Value"

}

]

},

},

);

const data=await response.json();

```
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      key
      namespace
      value
      createdAt
      updatedAt
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
"query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value createdAt updatedAt } userErrors { field message code } } }",
 "variables": {
    "metafields": [
      {
        "key": "example_key",
        "namespace": "example_namespace",
        "ownerId": "gid://shopify/Product/20995642",
        "type": "single_line_text_field",
        "value": "Example Value"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
        "metafields": [
            {
                "key": "example_key",
                "namespace": "example_namespace",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Example Value"
            }
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          key
          namespace
          value
          createdAt
          updatedAt
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "key": "example_key",
                "namespace": "example_namespace",
                "ownerId": "gid://shopify/Product/20995642",
                "type": "single_line_text_field",
                "value": "Example Value"
            }
        ]
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
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
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
  "metafields": [
    {
      "key": "example_key",
      "namespace": "example_namespace",
      "ownerId": "gid://shopify/Product/20995642",
      "type": "single_line_text_field",
      "value": "Example Value"
    }
  ]
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

›

⌄

⌄

⌄

{

"metafields": [

{

"key": "example_key",

"namespace": "example_namespace",

"ownerId": "gid://shopify/Product/20995642",

"type": "single_line_text_field",

"value": "Example Value"

}

]

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

›

⌄

⌄

⌄

⌄

{

"metafieldsSet": {

"metafields": [

{

"key": "example_key",

"namespace": "example_namespace",

"value": "Example Value",

"createdAt": "2024-11-18T21:40:28Z",

"updatedAt": "2024-11-18T21:40:28Z"

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*