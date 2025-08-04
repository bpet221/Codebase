---
title: "productVariantRelationshipBulkUpdate"
description: "Shopify GraphQL Admin API documentation for productvariantrelationshipbulkupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productVariantRelationshipBulkUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate

Markdown Content:
productVariantRelationshipBulkUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#main-content)

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
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   
Products and collections

    *   Queries   
    *   
Mutations

        *   [catalog Context Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcontextupdate)
        *   [catalog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcreate)
        *   [catalog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogdelete)
        *   [catalog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogupdate)
        *   [collection Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproducts)
        *   [collection Add Products V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproductsv2)
        *   [collection Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate)
        *   [collection Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectiondelete)
        *   [collection Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionpublish)
        *   [collection Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts)
        *   [collection Reorder Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionreorderproducts)
        *   [collection Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionunpublish)
        *   [collection Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate)
        *   [combined Listing Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate)
        *   [file Acknowledge Update Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileacknowledgeupdatefailed)
        *   [file Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate)
        *   [file Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete)
        *   [file Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate)
        *   [price List Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistcreate)
        *   [price List Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistdelete)
        *   [price List Fixed Prices Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesadd)
        *   [price List Fixed Prices By Product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesbyproductupdate)
        *   [price List Fixed Prices Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete)
        *   [price List Fixed Prices Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesupdate)
        *   [price List Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate)
        *   [product Bundle Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundlecreate)
        *   [product Bundle Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundleupdate)
        *   [product Change Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productchangestatus)
        *   [product Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate)
        *   [product Create Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia)
        *   [product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete)
        *   [product Delete Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia)
        *   [product Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate)
        *   [product Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productjoinsellingplangroups)
        *   [product Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productleavesellingplangroups)
        *   [product Options Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate)
        *   [product Options Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete)
        *   [product Options Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder)
        *   [product Option Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate)
        *   [product Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productpublish)
        *   [product Reorder Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productreordermedia)
        *   [product Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset)
        *   [product Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productunpublish)
        *   [product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate)
        *   [product Update Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia)
        *   [product Variant Append Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia)
        *   [product Variant Detach Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantdetachmedia)
        *   [product Variant Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantjoinsellingplangroups)
        *   [product Variant Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantleavesellingplangroups)
        *   [product Variant Relationship Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate)
        *   [product Variants Bulk Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate)
        *   [product Variants Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkdelete)
        *   [product Variants Bulk Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkreorder)
        *   [product Variants Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate)
        *   [quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantitypricingbyvariantupdate)
        *   [quantity Rules Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd)
        *   [quantity Rules Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesdelete)
        *   [selling Plan Group Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproducts)
        *   [selling Plan Group Add Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproductvariants)
        *   [selling Plan Group Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate)
        *   [selling Plan Group Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupdelete)
        *   [selling Plan Group Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproducts)
        *   [selling Plan Group Remove Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproductvariants)
        *   [selling Plan Group Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate)
        *   [staged Uploads Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate)

    *   Objects   

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

[Anchor to productVariantRelationshipBulkUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#top)
product Variant Relationship Bulk Update
========================================

mutation

Requires `write_products` access scope. Also: The shop must have access to bundles feature.

Creates new bundles, updates existing bundles, and removes bundle components for one or multiple bundles.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#arguments-input)input

•[[Product Variant Relationship Update Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput)

required

The input options for the product variant being updated.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ProductVariantRelationshipBulkUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#returns)Product Variant Relationship Bulk Update Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to parentProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#returns-parentProductVariants)parent Product Variants

•[[Product Variant!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The product variants with successfully updated product variant relationships.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate#returns-userErrors)user Errors

•[[Product Variant Relationship Bulk Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantRelationshipBulkUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a bundle by adding components to a product variant

#### Description

Creates a new product variant relationship between the parent variant and the child variant passed in the input.

#### Query

```graphql
mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
      productVariantComponents(first: 10) {
        nodes {
          id
          productVariant {
            id
            displayName
          }
        }
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToCreate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 1
        },
        {
          "id": "gid://shopify/ProductVariant/709406719",
          "quantity": 1
        }
      ]
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
"query": "mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
 "variables": {
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToCreate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "id": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToCreate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 1
                    },
                    {
                        "id": "gid://shopify/ProductVariant/709406719",
                        "quantity": 1
                    }
                ]
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
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToCreate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 1
        },
        {
          "id": "gid://shopify/ProductVariant/709406719",
          "quantity": 1
        }
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToCreate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 1
                    },
                    {
                        "id": "gid://shopify/ProductVariant/709406719",
                        "quantity": 1
                    }
                ]
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantRelationshipBulkUpdate": {
    "parentProductVariants": [
      {
        "id": "gid://shopify/ProductVariant/799757249",
        "productVariantComponents": {
          "nodes": [
            {
              "id": "gid://shopify/ProductVariantComponent/993184086",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/149896808",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_hot_sauce"
              }
            },
            {
              "id": "gid://shopify/ProductVariantComponent/993184087",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/709406719",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
              }
            }
          ]
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Delete a product variant component

#### Description

Removes all the product variant relationships associated with a variant.

#### Query

```graphql
mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
      productVariantComponents(first: 10) {
        nodes {
          id
          productVariant {
            id
            displayName
          }
        }
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToRemove": [
        "gid://shopify/ProductVariant/149896808"
      ]
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
"query": "mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
 "variables": {
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToRemove": [
          "gid://shopify/ProductVariant/149896808"
        ]
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToRemove": [
                    "gid://shopify/ProductVariant/149896808"
                ]
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
  mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToRemove": [
        "gid://shopify/ProductVariant/149896808"
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RemoveABundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToRemove": [
                    "gid://shopify/ProductVariant/149896808"
                ]
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantRelationshipBulkUpdate": {
    "parentProductVariants": [
      {
        "id": "gid://shopify/ProductVariant/799757249",
        "productVariantComponents": {
          "nodes": [
            {
              "id": "gid://shopify/ProductVariantComponent/636669297",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/709406719",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
              }
            }
          ]
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Remove all product variant components of a bundle

#### Description

Removes all the product variant relationships associated with a variant.

#### Query

```graphql
mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
      productVariantComponents(first: 10) {
        nodes {
          id
          productVariant {
            id
            displayName
          }
        }
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "removeAllProductVariantRelationships": true
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
"query": "mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
 "variables": {
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "removeAllProductVariantRelationships": true
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "removeAllProductVariantRelationships": true
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
  mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "removeAllProductVariantRelationships": true
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RemoveAllBundleComponents($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "removeAllProductVariantRelationships": true
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantRelationshipBulkUpdate": {
    "parentProductVariants": [
      {
        "id": "gid://shopify/ProductVariant/799757249",
        "productVariantComponents": {
          "nodes": []
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Update a product variant relationship

#### Description

Updates the quantity of a bundle component.

#### Query

```graphql
mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
      productVariantComponents(first: 10) {
        nodes {
          id
          productVariant {
            id
            displayName
          }
        }
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToUpdate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 33
        }
      ]
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
"query": "mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
 "variables": {
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToUpdate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 33
          }
        ]
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToUpdate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 33
                    }
                ]
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
  mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToUpdate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 33
        }
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateBundleComponent($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToUpdate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 33
                    }
                ]
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantRelationshipBulkUpdate": {
    "parentProductVariants": [
      {
        "id": "gid://shopify/ProductVariant/799757249",
        "productVariantComponents": {
          "nodes": [
            {
              "id": "gid://shopify/ProductVariantComponent/477596995",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/149896808",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_hot_sauce"
              }
            },
            {
              "id": "gid://shopify/ProductVariantComponent/636669297",
              "productVariant": {
                "id": "gid://shopify/ProductVariant/709406719",
                "displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"
              }
            }
          ]
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### productVariantRelationshipBulkUpdate reference

Examples
--------

Create a bundle by adding components to a product variant

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateBundle(%24input%3A%20%5BProductVariantRelationshipUpdateInput!%5D!)%20%7B%0A%20%20productVariantRelationshipBulkUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20parentProductVariants%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20productVariantComponents(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20productVariant%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parentProductVariantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F799757249%22%2C%0A%20%20%20%20%20%20%22productVariantRelationshipsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F149896808%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%201%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F709406719%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%201%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {

 productVariantRelationshipBulkUpdate(input: $input) {

 parentProductVariants {

 id

 productVariantComponents(first: 10) {

 nodes {

 id

 productVariant {

 id

 displayName

 }

 }

 }

 }

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"input":[

{

"parentProductVariantId":"gid://shopify/ProductVariant/799757249",

"productVariantRelationshipsToCreate":[

{

"id":"gid://shopify/ProductVariant/149896808",

"quantity":1

},

{

```
mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
  productVariantRelationshipBulkUpdate(input: $input) {
    parentProductVariants {
      id
      productVariantComponents(first: 10) {
        nodes {
          id
          productVariant {
            id
            displayName
          }
        }
      }
    }
    userErrors {
      code
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
"query": "mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) { productVariantRelationshipBulkUpdate(input: $input) { parentProductVariants { id productVariantComponents(first: 10) { nodes { id productVariant { id displayName } } } } userErrors { code field message } } }",
 "variables": {
    "input": [
      {
        "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
        "productVariantRelationshipsToCreate": [
          {
            "id": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "id": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToCreate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 1
                    },
                    {
                        "id": "gid://shopify/ProductVariant/709406719",
                        "quantity": 1
                    }
                ]
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
    "query": `mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
      productVariantRelationshipBulkUpdate(input: $input) {
        parentProductVariants {
          id
          productVariantComponents(first: 10) {
            nodes {
              id
              productVariant {
                id
                displayName
              }
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
                "productVariantRelationshipsToCreate": [
                    {
                        "id": "gid://shopify/ProductVariant/149896808",
                        "quantity": 1
                    },
                    {
                        "id": "gid://shopify/ProductVariant/709406719",
                        "quantity": 1
                    }
                ]
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
  mutation CreateBundle($input: [ProductVariantRelationshipUpdateInput!]!) {
    productVariantRelationshipBulkUpdate(input: $input) {
      parentProductVariants {
        id
        productVariantComponents(first: 10) {
          nodes {
            id
            productVariant {
              id
              displayName
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": [
    {
      "parentProductVariantId": "gid://shopify/ProductVariant/799757249",
      "productVariantRelationshipsToCreate": [
        {
          "id": "gid://shopify/ProductVariant/149896808",
          "quantity": 1
        },
        {
          "id": "gid://shopify/ProductVariant/709406719",
          "quantity": 1
        }
      ]
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

12

13

14

15

16

17

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"input": [

{

"parentProductVariantId": "gid://shopify/ProductVariant/799757249",

"productVariantRelationshipsToCreate": [

{

"id": "gid://shopify/ProductVariant/149896808",

"quantity": 1

},

{

"id": "gid://shopify/ProductVariant/709406719",

"quantity": 1

}

]

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

{

"productVariantRelationshipBulkUpdate": {

"parentProductVariants": [

{

"id": "gid://shopify/ProductVariant/799757249",

"productVariantComponents": {

"nodes": [

{

"id": "gid://shopify/ProductVariantComponent/993184086",

"productVariant": {

"id": "gid://shopify/ProductVariant/149896808",

"displayName": "Composite_Sauce_Pack - component_product_variant_classic_hot_sauce"

}

},

{

"id": "gid://shopify/ProductVariantComponent/993184087",

"productVariant": {

"id": "gid://shopify/ProductVariant/709406719",

"displayName": "Composite_Sauce_Pack - component_product_variant_classic_garlic_sauce"

}

}

]

}

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*