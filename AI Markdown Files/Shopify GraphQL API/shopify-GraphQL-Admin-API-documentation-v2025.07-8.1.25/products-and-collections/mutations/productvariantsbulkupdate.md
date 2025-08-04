---
title: "productVariantsBulkUpdate"
description: "Shopify GraphQL Admin API documentation for productvariantsbulkupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productVariantsBulkUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate

Markdown Content:
productVariantsBulkUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#main-content)

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

[Anchor to productVariantsBulkUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#top)
product Variants Bulk Update
============================

mutation

Requires `write_products` access scope. Also: The user must have a permission to update product variants.

Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

The mutation supports:

*   Updating variants with custom options and values
*   Associating media (for example, images, videos, and 3D models) with the product or its variants
*   Handling complex product configurations

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to update a maximum of 2,048 product variants in a single operation.

* * *

After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#arguments)
Arguments
---------

[Anchor to allowPartialUpdates](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#arguments-allowPartialUpdates)allow Partial Updates

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

When partial updates are allowed, valid variant changes may be persisted even if some of the variants updated have invalid data and cannot be persisted. When partial updates are not allowed, any error will prevent all variants from updating.

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#arguments-media)media

•[[Create Media Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

List of new media to be added to the product.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the product associated with the variants to update.

[Anchor to variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#arguments-variants)variants

•[[Product Variants Bulk Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

required

An array of product variants to update.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ProductVariantsBulkUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#returns)Product Variants Bulk Update Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The updated product object.

Show fields

[Anchor to productVariants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#returns-productVariants)product Variants

•[[Product Variant!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The updated variants.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate#returns-userErrors)user Errors

•[[Product Variants Bulk Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create and update metafields when updating product variants in bulk

#### Description

Update metadata for multiple product variants in a single request. This example modifies existing metafields under `my_fields.liner_material` and adds new metafields under `my_fields.sole_material` for variants of a specific product. The response includes the product with its updated metafields and the variants.

#### Query

```graphql
mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants) {
    product {
      id
    }
    productVariants {
      id
      metafields(first: 2) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
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
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197",
      "metafields": [
        {
          "id": "gid://shopify/Metafield/1069229095",
          "value": "SYNTHETIC LEATHER"
        },
        {
          "namespace": "my_fields",
          "key": "sole_material",
          "value": "RUBBER",
          "type": "single_line_text_field"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198",
      "metafields": [
        {
          "id": "gid://shopify/Metafield/1069229096",
          "value": "SYNTHETIC LEATHER"
        },
        {
          "namespace": "my_fields",
          "key": "sole_material",
          "value": "CREPE",
          "type": "single_line_text_field"
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
"query": "mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkUpdate(productId: $productId, variants: $variants) { product { id } productVariants { id metafields(first: 2) { edges { node { namespace key value } } } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197",
        "metafields": [
          {
            "id": "gid://shopify/Metafield/1069229095",
            "value": "SYNTHETIC LEATHER"
          },
          {
            "namespace": "my_fields",
            "key": "sole_material",
            "value": "RUBBER",
            "type": "single_line_text_field"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198",
        "metafields": [
          {
            "id": "gid://shopify/Metafield/1069229096",
            "value": "SYNTHETIC LEATHER"
          },
          {
            "namespace": "my_fields",
            "key": "sole_material",
            "value": "CREPE",
            "type": "single_line_text_field"
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
  mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        metafields(first: 2) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229095",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "RUBBER",
                        "type": "single_line_text_field"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229096",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "CREPE",
                        "type": "single_line_text_field"
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
  mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        metafields(first: 2) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197",
      "metafields": [
        {
          "id": "gid://shopify/Metafield/1069229095",
          "value": "SYNTHETIC LEATHER"
        },
        {
          "namespace": "my_fields",
          "key": "sole_material",
          "value": "RUBBER",
          "type": "single_line_text_field"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198",
      "metafields": [
        {
          "id": "gid://shopify/Metafield/1069229096",
          "value": "SYNTHETIC LEATHER"
        },
        {
          "namespace": "my_fields",
          "key": "sole_material",
          "value": "CREPE",
          "type": "single_line_text_field"
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
    "query": `mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        product {
          id
        }
        productVariants {
          id
          metafields(first: 2) {
            edges {
              node {
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229095",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "RUBBER",
                        "type": "single_line_text_field"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229096",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "CREPE",
                        "type": "single_line_text_field"
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
  "productVariantsBulkUpdate": {
    "product": {
      "id": "gid://shopify/Product/20995642"
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197",
        "metafields": {
          "edges": [
            {
              "node": {
                "namespace": "my_fields",
                "key": "liner_material",
                "value": "SYNTHETIC LEATHER"
              }
            },
            {
              "node": {
                "namespace": "my_fields",
                "key": "sole_material",
                "value": "RUBBER"
              }
            }
          ]
        }
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198",
        "metafields": {
          "edges": [
            {
              "node": {
                "namespace": "my_fields",
                "key": "liner_material",
                "value": "SYNTHETIC LEATHER"
              }
            },
            {
              "node": {
                "namespace": "my_fields",
                "key": "sole_material",
                "value": "CREPE"
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
*   ### Update product variants with option values

#### Description

Update existing product variants with new size and color combinations. This example shows different ways to reference options and values (by name or ID). The response includes the product with its updated variants.

#### Query

```graphql
mutation UpdateProductVariantsOptionValuesInBulk($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants) {
    product {
      id
      title
      options {
        id
        position
        name
        values
        optionValues {
          id
          name
          hasVariants
        }
      }
    }
    productVariants {
      id
      title
      selectedOptions {
        name
        value
      }
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
  "productId": "gid://shopify/Product/1072481069",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325199",
      "optionValues": [
        {
          "name": "Green",
          "optionName": "Color"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325200",
      "optionValues": [
        {
          "name": "Large",
          "optionId": "gid://shopify/ProductOption/1064576536"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672367",
          "optionId": "gid://shopify/ProductOption/1064576537"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325201",
      "optionValues": [
        {
          "name": "Medium",
          "optionName": "Size"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672367",
          "optionName": "Color"
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
"query": "mutation UpdateProductVariantsOptionValuesInBulk($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkUpdate(productId: $productId, variants: $variants) { product { id title options { id position name values optionValues { id name hasVariants } } } productVariants { id title selectedOptions { name value } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481069",
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070325199",
        "optionValues": [
          {
            "name": "Green",
            "optionName": "Color"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325200",
        "optionValues": [
          {
            "name": "Large",
            "optionId": "gid://shopify/ProductOption/1064576536"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054672367",
            "optionId": "gid://shopify/ProductOption/1064576537"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325201",
        "optionValues": [
          {
            "name": "Medium",
            "optionName": "Size"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054672367",
            "optionName": "Color"
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
  mutation UpdateProductVariantsOptionValuesInBulk($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
        title
        options {
          id
          position
          name
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
      productVariants {
        id
        title
        selectedOptions {
          name
          value
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481069",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325199",
                "optionValues": [
                    {
                        "name": "Green",
                        "optionName": "Color"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325200",
                "optionValues": [
                    {
                        "name": "Large",
                        "optionId": "gid://shopify/ProductOption/1064576536"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672367",
                        "optionId": "gid://shopify/ProductOption/1064576537"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325201",
                "optionValues": [
                    {
                        "name": "Medium",
                        "optionName": "Size"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672367",
                        "optionName": "Color"
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
  mutation UpdateProductVariantsOptionValuesInBulk($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
        title
        options {
          id
          position
          name
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
      productVariants {
        id
        title
        selectedOptions {
          name
          value
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481069",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325199",
      "optionValues": [
        {
          "name": "Green",
          "optionName": "Color"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325200",
      "optionValues": [
        {
          "name": "Large",
          "optionId": "gid://shopify/ProductOption/1064576536"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672367",
          "optionId": "gid://shopify/ProductOption/1064576537"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325201",
      "optionValues": [
        {
          "name": "Medium",
          "optionName": "Size"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672367",
          "optionName": "Color"
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
    "query": `mutation UpdateProductVariantsOptionValuesInBulk($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        product {
          id
          title
          options {
            id
            position
            name
            values
            optionValues {
              id
              name
              hasVariants
            }
          }
        }
        productVariants {
          id
          title
          selectedOptions {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481069",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325199",
                "optionValues": [
                    {
                        "name": "Green",
                        "optionName": "Color"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325200",
                "optionValues": [
                    {
                        "name": "Large",
                        "optionId": "gid://shopify/ProductOption/1064576536"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672367",
                        "optionId": "gid://shopify/ProductOption/1064576537"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325201",
                "optionValues": [
                    {
                        "name": "Medium",
                        "optionName": "Size"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672367",
                        "optionName": "Color"
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
  "productVariantsBulkUpdate": {
    "product": {
      "id": "gid://shopify/Product/1072481069",
      "title": "A shirt",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576536",
          "position": 1,
          "name": "Size",
          "values": [
            "Small",
            "Large",
            "Medium"
          ],
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672364",
              "name": "Small",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054672366",
              "name": "Large",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054672365",
              "name": "Medium",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576537",
          "position": 2,
          "name": "Color",
          "values": [
            "Green",
            "Red"
          ],
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672369",
              "name": "Green",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054672367",
              "name": "Red",
              "hasVariants": true
            }
          ]
        }
      ]
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325199",
        "title": "Small / Green",
        "selectedOptions": [
          {
            "name": "Size",
            "value": "Small"
          },
          {
            "name": "Color",
            "value": "Green"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325200",
        "title": "Large / Red",
        "selectedOptions": [
          {
            "name": "Size",
            "value": "Large"
          },
          {
            "name": "Color",
            "value": "Red"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325201",
        "title": "Medium / Red",
        "selectedOptions": [
          {
            "name": "Size",
            "value": "Medium"
          },
          {
            "name": "Color",
            "value": "Red"
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Update product variants and add media to a product

#### Description

Update three product variants and upload new media [asynchronously](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management). The media is associated with the product that the variants belong to. The response returns both the product with its newly created media and the product variants.

#### Query

```graphql
mutation UpdateProductVariantsInBulkAndMedia(
  $productId: ID!,
  $variants: [ProductVariantsBulkInput!]!,
  $media: [CreateMediaInput!]
) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants, media: $media) {
    product {
      id
      media(first: 10) {
        nodes {
          id
          alt
          mediaContentType
          preview {
            status
          }
        }
      }
    }
    productVariants {
      id
      media(first: 10) {
        nodes {
          id
          alt
          mediaContentType
          preview {
            status
          }
        }
      }
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
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197"
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198"
    },
    {
      "id": "gid://shopify/ProductVariant/1070325199"
    }
  ],
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
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
"query": "mutation UpdateProductVariantsInBulkAndMedia( $productId: ID!, $variants: [ProductVariantsBulkInput!]!, $media: [CreateMediaInput!] ) { productVariantsBulkUpdate(productId: $productId, variants: $variants, media: $media) { product { id media(first: 10) { nodes { id alt mediaContentType preview { status } } } } productVariants { id media(first: 10) { nodes { id alt mediaContentType preview { status } } } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197"
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198"
      },
      {
        "id": "gid://shopify/ProductVariant/1070325199"
      }
    ],
    "media": [
      {
        "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
        "alt": "Gray helmet for bikers",
        "mediaContentType": "IMAGE"
      },
      {
        "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
        "alt": "Testing helmet resistance against impacts",
        "mediaContentType": "EXTERNAL_VIDEO"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateProductVariantsInBulkAndMedia(
    $productId: ID!,
    $variants: [ProductVariantsBulkInput!]!,
    $media: [CreateMediaInput!]
  ) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants, media: $media) {
      product {
        id
        media(first: 10) {
          nodes {
            id
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      productVariants {
        id
        media(first: 10) {
          nodes {
            id
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197"
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198"
            },
            {
                "id": "gid://shopify/ProductVariant/1070325199"
            }
        ],
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
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
  mutation UpdateProductVariantsInBulkAndMedia(
    $productId: ID!,
    $variants: [ProductVariantsBulkInput!]!,
    $media: [CreateMediaInput!]
  ) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants, media: $media) {
      product {
        id
        media(first: 10) {
          nodes {
            id
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      productVariants {
        id
        media(first: 10) {
          nodes {
            id
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197"
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198"
    },
    {
      "id": "gid://shopify/ProductVariant/1070325199"
    }
  ],
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateProductVariantsInBulkAndMedia(
      $productId: ID!,
      $variants: [ProductVariantsBulkInput!]!,
      $media: [CreateMediaInput!]
    ) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants, media: $media) {
        product {
          id
          media(first: 10) {
            nodes {
              id
              alt
              mediaContentType
              preview {
                status
              }
            }
          }
        }
        productVariants {
          id
          media(first: 10) {
            nodes {
              id
              alt
              mediaContentType
              preview {
                status
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197"
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198"
            },
            {
                "id": "gid://shopify/ProductVariant/1070325199"
            }
        ],
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantsBulkUpdate": {
    "product": {
      "id": "gid://shopify/Product/20995642",
      "media": {
        "nodes": [
          {
            "id": "gid://shopify/MediaImage/1023119543",
            "alt": "Gray helmet for bikers",
            "mediaContentType": "IMAGE",
            "preview": {
              "status": "UPLOADED"
            }
          },
          {
            "id": "gid://shopify/ExternalVideo/1023119544",
            "alt": "Testing helmet resistance against impacts",
            "mediaContentType": "EXTERNAL_VIDEO",
            "preview": {
              "status": "UPLOADED"
            }
          }
        ]
      }
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197",
        "media": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198",
        "media": {
          "nodes": []
        }
      },
      {
        "id": "gid://shopify/ProductVariant/1070325199",
        "media": {
          "nodes": []
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Update product variants and attach existing media

#### Description

Update two product variants, with one variant attached to existing media that is associated with the product, and the other variant without any media attached. The response returns both the product with its updated variants.

#### Query

```graphql
mutation UpdateProductVariantsInBulkWithExistingMedia(
  $productId: ID!,
  $variants: [ProductVariantsBulkInput!]!
) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants) {
    product {
      id
    }
    productVariants {
      id
      title
      media(first: 10) {
        nodes {
          id
          alt
          mediaContentType
          preview {
            status
          }
        }
      }
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
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197",
      "mediaId": "gid://shopify/MediaImage/1023119543"
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198"
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
"query": "mutation UpdateProductVariantsInBulkWithExistingMedia( $productId: ID!, $variants: [ProductVariantsBulkInput!]! ) { productVariantsBulkUpdate(productId: $productId, variants: $variants) { product { id } productVariants { id title media(first: 10) { nodes { id alt mediaContentType preview { status } } } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197",
        "mediaId": "gid://shopify/MediaImage/1023119543"
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateProductVariantsInBulkWithExistingMedia(
    $productId: ID!,
    $variants: [ProductVariantsBulkInput!]!
  ) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        title
        media(first: 10) {
          nodes {
            id
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197",
                "mediaId": "gid://shopify/MediaImage/1023119543"
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198"
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
  mutation UpdateProductVariantsInBulkWithExistingMedia(
    $productId: ID!,
    $variants: [ProductVariantsBulkInput!]!
  ) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        title
        media(first: 10) {
          nodes {
            id
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197",
      "mediaId": "gid://shopify/MediaImage/1023119543"
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateProductVariantsInBulkWithExistingMedia(
      $productId: ID!,
      $variants: [ProductVariantsBulkInput!]!
    ) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        product {
          id
        }
        productVariants {
          id
          title
          media(first: 10) {
            nodes {
              id
              alt
              mediaContentType
              preview {
                status
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197",
                "mediaId": "gid://shopify/MediaImage/1023119543"
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantsBulkUpdate": {
    "product": {
      "id": "gid://shopify/Product/20995642"
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197",
        "title": "Default Title",
        "media": {
          "nodes": [
            {
              "id": "gid://shopify/MediaImage/1023119543",
              "alt": "Product image",
              "mediaContentType": "IMAGE",
              "preview": {
                "status": "READY"
              }
            }
          ]
        }
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198",
        "title": "Default Title",
        "media": {
          "nodes": []
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### productVariantsBulkUpdate reference

Examples
--------

Create and update metafields when updating product variants in bulk

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productVariantsBulkUpdate(%24productId%3A%20ID!%2C%20%24variants%3A%20%5BProductVariantsBulkInput!%5D!)%20%7B%0A%20%20productVariantsBulkUpdate(productId%3A%20%24productId%2C%20variants%3A%20%24variants)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20productVariants%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20metafields(first%3A%202)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22variants%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325197%22%2C%0A%20%20%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafield%2F1069229095%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22SYNTHETIC%20LEATHER%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22my_fields%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22sole_material%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22RUBBER%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325198%22%2C%0A%20%20%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafield%2F1069229096%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22SYNTHETIC%20LEATHER%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22my_fields%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22sole_material%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22CREPE%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {

 productVariantsBulkUpdate(productId: $productId, variants: $variants) {

 product {

 id

 }

 productVariants {

 id

 metafields(first: 2) {

 edges {

 node {

 namespace

 key

 value

 }

 }

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"productId":"gid://shopify/Product/20995642",

"variants":[

{

"id":"gid://shopify/ProductVariant/1070325197",

"metafields":[

{

"id":"gid://shopify/Metafield/1069229095",

```
mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants) {
    product {
      id
    }
    productVariants {
      id
      metafields(first: 2) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
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
"query": "mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkUpdate(productId: $productId, variants: $variants) { product { id } productVariants { id metafields(first: 2) { edges { node { namespace key value } } } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070325197",
        "metafields": [
          {
            "id": "gid://shopify/Metafield/1069229095",
            "value": "SYNTHETIC LEATHER"
          },
          {
            "namespace": "my_fields",
            "key": "sole_material",
            "value": "RUBBER",
            "type": "single_line_text_field"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325198",
        "metafields": [
          {
            "id": "gid://shopify/Metafield/1069229096",
            "value": "SYNTHETIC LEATHER"
          },
          {
            "namespace": "my_fields",
            "key": "sole_material",
            "value": "CREPE",
            "type": "single_line_text_field"
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
  mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        metafields(first: 2) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229095",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "RUBBER",
                        "type": "single_line_text_field"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229096",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "CREPE",
                        "type": "single_line_text_field"
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
    "query": `mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        product {
          id
        }
        productVariants {
          id
          metafields(first: 2) {
            edges {
              node {
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "id": "gid://shopify/ProductVariant/1070325197",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229095",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "RUBBER",
                        "type": "single_line_text_field"
                    }
                ]
            },
            {
                "id": "gid://shopify/ProductVariant/1070325198",
                "metafields": [
                    {
                        "id": "gid://shopify/Metafield/1069229096",
                        "value": "SYNTHETIC LEATHER"
                    },
                    {
                        "namespace": "my_fields",
                        "key": "sole_material",
                        "value": "CREPE",
                        "type": "single_line_text_field"
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
  mutation productVariantsBulkUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        metafields(first: 2) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "id": "gid://shopify/ProductVariant/1070325197",
      "metafields": [
        {
          "id": "gid://shopify/Metafield/1069229095",
          "value": "SYNTHETIC LEATHER"
        },
        {
          "namespace": "my_fields",
          "key": "sole_material",
          "value": "RUBBER",
          "type": "single_line_text_field"
        }
      ]
    },
    {
      "id": "gid://shopify/ProductVariant/1070325198",
      "metafields": [
        {
          "id": "gid://shopify/Metafield/1069229096",
          "value": "SYNTHETIC LEATHER"
        },
        {
          "namespace": "my_fields",
          "key": "sole_material",
          "value": "CREPE",
          "type": "single_line_text_field"
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

"productId": "gid://shopify/Product/20995642",

"variants": [

{

"id": "gid://shopify/ProductVariant/1070325197",

"metafields": [

{

"id": "gid://shopify/Metafield/1069229095",

"value": "SYNTHETIC LEATHER"

},

{

"namespace": "my_fields",

"key": "sole_material",

"value": "RUBBER",

"type": "single_line_text_field"

}

]

},

{

"id": "gid://shopify/ProductVariant/1070325198",

"metafields": [

{

"id": "gid://shopify/Metafield/1069229096",

"value": "SYNTHETIC LEATHER"

},

{

"namespace": "my_fields",

"key": "sole_material",

"value": "CREPE",

"type": "single_line_text_field"

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

⌄

⌄

⌄

{

"productVariantsBulkUpdate": {

"product": {

"id": "gid://shopify/Product/20995642"

},

"productVariants": [

{

"id": "gid://shopify/ProductVariant/1070325197",

"metafields": {

"edges": [

{

"node": {

"namespace": "my_fields",

"key": "liner_material",

"value": "SYNTHETIC LEATHER"

}

},

{

"node": {

"namespace": "my_fields",

"key": "sole_material",

"value": "RUBBER"

}

}

]

}

},

{

"id": "gid://shopify/ProductVariant/1070325198",

"metafields": {

"edges": [

{

"node": {

"namespace": "my_fields",

"key": "liner_material",

"value": "SYNTHETIC LEATHER"


---
*Content truncated at "Updates" section*