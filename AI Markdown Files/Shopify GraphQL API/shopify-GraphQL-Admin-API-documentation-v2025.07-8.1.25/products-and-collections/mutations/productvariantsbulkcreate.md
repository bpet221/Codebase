---
title: "productVariantsBulkCreate"
description: "Shopify GraphQL Admin API documentation for productvariantsbulkcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productVariantsBulkCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate

Markdown Content:
productVariantsBulkCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#main-content)

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

[Anchor to productVariantsBulkCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#top)
product Variants Bulk Create
============================

mutation

Requires `write_products` access scope. Also: The user must have a permission to create product variants.

Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

The mutation supports:

*   Creating variants with custom options and values
*   Associating media (for example, images, videos, and 3D models) with the product or its variants
*   Handling complex product configurations

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to create a maximum of 2,048 product variants in a single operation.

* * *

After creating variants, you can make additional changes using one of the following mutations:

*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#arguments)
Arguments
---------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#arguments-media)media

•[[Create Media Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

List of new media to be added to the product.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the product on which to create the variants.

[Anchor to strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#arguments-strategy)strategy

•[Product Variants Bulk Create Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy)

Default:DEFAULT

The strategy defines which behavior the mutation should observe, such as whether to keep or delete the standalone variant (when product has only a single or default variant) when creating new variants in bulk.

Show enum values

[Anchor to variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#arguments-variants)variants

•[[Product Variants Bulk Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

required

An array of product variants to be created.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ProductVariantsBulkCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#returns)Product Variants Bulk Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The updated product object.

Show fields

[Anchor to productVariants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#returns-productVariants)product Variants

•[[Product Variant!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The newly created variants.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate#returns-userErrors)user Errors

•[[Product Variants Bulk Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a single product variant

#### Description

Create a "Golden" color variant for an existing product, setting a sale price of $15.99 and an original compare-at price of $19.99. The response returns the created product variant with its price, compare-at price, and selected option.

#### Query

```graphql
mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "price": 15.99,
      "compareAtPrice": 19.99,
      "optionValues": [
        {
          "name": "Golden",
          "optionId": "gid://shopify/ProductOption/328272167"
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
"query": "mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { productVariants { id title selectedOptions { name value } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "price": 15.99,
        "compareAtPrice": 19.99,
        "optionValues": [
          {
            "name": "Golden",
            "optionId": "gid://shopify/ProductOption/328272167"
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
  mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "price": 15.99,
                "compareAtPrice": 19.99,
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionId": "gid://shopify/ProductOption/328272167"
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
  mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "price": 15.99,
      "compareAtPrice": 19.99,
      "optionValues": [
        {
          "name": "Golden",
          "optionId": "gid://shopify/ProductOption/328272167"
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
    "query": `mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "price": 15.99,
                "compareAtPrice": 19.99,
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionId": "gid://shopify/ProductOption/328272167"
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
  "productVariantsBulkCreate": {
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325338",
        "title": "Golden",
        "selectedOptions": [
          {
            "name": "Title",
            "value": "Golden"
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create metafields when creating product variants in bulk

#### Description

Create a new metafield `my_fields.liner_material` with different values for new product variants created in bulk on a specific product. The response returns the created product variants with their associated metafields, demonstrating how metafields are successfully attached to variants during bulk creation.

#### Query

```graphql
mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
    product {
      id
    }
    productVariants {
      id
      metafields(first: 1) {
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
      "optionValues": [
        {
          "name": "Fashionable",
          "optionName": "Title"
        }
      ],
      "metafields": [
        {
          "namespace": "my_fields",
          "key": "liner_material",
          "type": "single_line_text_field",
          "value": "Synthetic Leather"
        }
      ]
    },
    {
      "optionValues": [
        {
          "name": "Rugged",
          "optionName": "Title"
        }
      ],
      "metafields": [
        {
          "namespace": "my_fields",
          "key": "liner_material",
          "type": "single_line_text_field",
          "value": "Reinforced Polyethylene"
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
"query": "mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { product { id } productVariants { id metafields(first: 1) { edges { node { namespace key value } } } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "optionValues": [
          {
            "name": "Fashionable",
            "optionName": "Title"
          }
        ],
        "metafields": [
          {
            "namespace": "my_fields",
            "key": "liner_material",
            "type": "single_line_text_field",
            "value": "Synthetic Leather"
          }
        ]
      },
      {
        "optionValues": [
          {
            "name": "Rugged",
            "optionName": "Title"
          }
        ],
        "metafields": [
          {
            "namespace": "my_fields",
            "key": "liner_material",
            "type": "single_line_text_field",
            "value": "Reinforced Polyethylene"
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
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        metafields(first: 1) {
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
                "optionValues": [
                    {
                        "name": "Fashionable",
                        "optionName": "Title"
                    }
                ],
                "metafields": [
                    {
                        "namespace": "my_fields",
                        "key": "liner_material",
                        "type": "single_line_text_field",
                        "value": "Synthetic Leather"
                    }
                ]
            },
            {
                "optionValues": [
                    {
                        "name": "Rugged",
                        "optionName": "Title"
                    }
                ],
                "metafields": [
                    {
                        "namespace": "my_fields",
                        "key": "liner_material",
                        "type": "single_line_text_field",
                        "value": "Reinforced Polyethylene"
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
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        metafields(first: 1) {
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
      "optionValues": [
        {
          "name": "Fashionable",
          "optionName": "Title"
        }
      ],
      "metafields": [
        {
          "namespace": "my_fields",
          "key": "liner_material",
          "type": "single_line_text_field",
          "value": "Synthetic Leather"
        }
      ]
    },
    {
      "optionValues": [
        {
          "name": "Rugged",
          "optionName": "Title"
        }
      ],
      "metafields": [
        {
          "namespace": "my_fields",
          "key": "liner_material",
          "type": "single_line_text_field",
          "value": "Reinforced Polyethylene"
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
    "query": `mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
        product {
          id
        }
        productVariants {
          id
          metafields(first: 1) {
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
                "optionValues": [
                    {
                        "name": "Fashionable",
                        "optionName": "Title"
                    }
                ],
                "metafields": [
                    {
                        "namespace": "my_fields",
                        "key": "liner_material",
                        "type": "single_line_text_field",
                        "value": "Synthetic Leather"
                    }
                ]
            },
            {
                "optionValues": [
                    {
                        "name": "Rugged",
                        "optionName": "Title"
                    }
                ],
                "metafields": [
                    {
                        "namespace": "my_fields",
                        "key": "liner_material",
                        "type": "single_line_text_field",
                        "value": "Reinforced Polyethylene"
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
  "productVariantsBulkCreate": {
    "product": {
      "id": "gid://shopify/Product/20995642"
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325341",
        "metafields": {
          "edges": [
            {
              "node": {
                "namespace": "my_fields",
                "key": "liner_material",
                "value": "Synthetic Leather"
              }
            }
          ]
        }
      },
      {
        "id": "gid://shopify/ProductVariant/1070325342",
        "metafields": {
          "edges": [
            {
              "node": {
                "namespace": "my_fields",
                "key": "liner_material",
                "value": "Reinforced Polyethylene"
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
*   ### Create product variants and attach existing media

#### Description

Create two variants, with one variant attached to existing media that is associated with the product, and the other variant without any media attached. The response returns the created variants showing the media association, with one variant containing media nodes and the other containing an empty media array.

#### Query

```graphql
mutation CreateProductVariantsInBulkWithExistingMedia($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
      "optionValues": [
        {
          "name": "one",
          "optionName": "Title"
        }
      ],
      "mediaId": "gid://shopify/MediaImage/730211239"
    },
    {
      "optionValues": [
        {
          "name": "two",
          "optionName": "Title"
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
"query": "mutation CreateProductVariantsInBulkWithExistingMedia($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { product { id } productVariants { id title media(first: 10) { nodes { id alt mediaContentType preview { status } } } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "optionValues": [
          {
            "name": "one",
            "optionName": "Title"
          }
        ],
        "mediaId": "gid://shopify/MediaImage/730211239"
      },
      {
        "optionValues": [
          {
            "name": "two",
            "optionName": "Title"
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
  mutation CreateProductVariantsInBulkWithExistingMedia($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
                "optionValues": [
                    {
                        "name": "one",
                        "optionName": "Title"
                    }
                ],
                "mediaId": "gid://shopify/MediaImage/730211239"
            },
            {
                "optionValues": [
                    {
                        "name": "two",
                        "optionName": "Title"
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
  mutation CreateProductVariantsInBulkWithExistingMedia($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
      "optionValues": [
        {
          "name": "one",
          "optionName": "Title"
        }
      ],
      "mediaId": "gid://shopify/MediaImage/730211239"
    },
    {
      "optionValues": [
        {
          "name": "two",
          "optionName": "Title"
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
    "query": `mutation CreateProductVariantsInBulkWithExistingMedia($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
                "optionValues": [
                    {
                        "name": "one",
                        "optionName": "Title"
                    }
                ],
                "mediaId": "gid://shopify/MediaImage/730211239"
            },
            {
                "optionValues": [
                    {
                        "name": "two",
                        "optionName": "Title"
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
  "productVariantsBulkCreate": {
    "product": {
      "id": "gid://shopify/Product/20995642"
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325343",
        "title": "one",
        "media": {
          "nodes": [
            {
              "id": "gid://shopify/MediaImage/730211239",
              "alt": "a snowboard",
              "mediaContentType": "IMAGE",
              "preview": {
                "status": "READY"
              }
            }
          ]
        }
      },
      {
        "id": "gid://shopify/ProductVariant/1070325344",
        "title": "two",
        "media": {
          "nodes": []
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create product variants with and without compare-at prices

#### Description

Create two variants that each cost $15.99, with one variant that has a compare-at price set to $19.99, and the other variant that doesn't have a price set. The response returns both product variants with their price and compare-at price fields.

#### Query

```graphql
mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
    product {
      id
    }
    productVariants {
      id
      title
      price
      compareAtPrice
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
      "optionValues": [
        {
          "name": "Golden",
          "optionName": "Title"
        }
      ],
      "price": 15.99,
      "compareAtPrice": 19.99
    },
    {
      "optionValues": [
        {
          "name": "Silver",
          "optionName": "Title"
        }
      ],
      "price": 15.99,
      "compareAtPrice": null
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
"query": "mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { product { id } productVariants { id title price compareAtPrice } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "optionValues": [
          {
            "name": "Golden",
            "optionName": "Title"
          }
        ],
        "price": 15.99,
        "compareAtPrice": 19.99
      },
      {
        "optionValues": [
          {
            "name": "Silver",
            "optionName": "Title"
          }
        ],
        "price": 15.99,
        "compareAtPrice": null
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        title
        price
        compareAtPrice
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
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionName": "Title"
                    }
                ],
                "price": 15.99,
                "compareAtPrice": 19.99
            },
            {
                "optionValues": [
                    {
                        "name": "Silver",
                        "optionName": "Title"
                    }
                ],
                "price": 15.99,
                "compareAtPrice": null
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
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        title
        price
        compareAtPrice
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
      "optionValues": [
        {
          "name": "Golden",
          "optionName": "Title"
        }
      ],
      "price": 15.99,
      "compareAtPrice": 19.99
    },
    {
      "optionValues": [
        {
          "name": "Silver",
          "optionName": "Title"
        }
      ],
      "price": 15.99,
      "compareAtPrice": null
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
        product {
          id
        }
        productVariants {
          id
          title
          price
          compareAtPrice
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
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionName": "Title"
                    }
                ],
                "price": 15.99,
                "compareAtPrice": 19.99
            },
            {
                "optionValues": [
                    {
                        "name": "Silver",
                        "optionName": "Title"
                    }
                ],
                "price": 15.99,
                "compareAtPrice": null
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantsBulkCreate": {
    "product": {
      "id": "gid://shopify/Product/20995642"
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325350",
        "title": "Golden",
        "price": "15.99",
        "compareAtPrice": "19.99"
      },
      {
        "id": "gid://shopify/ProductVariant/1070325351",
        "title": "Silver",
        "price": "15.99",
        "compareAtPrice": null
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create product variants with new and existing option values

#### Description

Creates variants with the option values specified. Both the option and the option value can be specified with either an ID or a name, and these can be freely combined. An option referenced with either the `optionId` or `optionName` field must exist on the product. An option value specified with the `id` field must exist on the option. When using the `optionValue` field to specify an option value by `name`, an existing value is linked to the new variant if an option value with the name exists on the option. Otherwise, a new option value is created. All variants must have one value specified for every existing product option. The response returns the product with its updated options and option values, as well as the created variants with their selected options.

#### Query

```graphql
mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
    userErrors {
      field
      message
    }
    product {
      id
      options {
        id
        name
        values
        position
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481087",
  "variants": [
    {
      "optionValues": [
        {
          "name": "Red",
          "optionName": "Color"
        },
        {
          "name": "Brand new style",
          "optionId": "gid://shopify/ProductOption/1064576573"
        },
        {
          "name": "Silk",
          "optionName": "Material"
        }
      ],
      "price": 22
    },
    {
      "optionValues": [
        {
          "name": "Brand new style",
          "optionName": "Style"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672624",
          "optionName": "Color"
        },
        {
          "name": "Silk",
          "optionName": "Material"
        }
      ],
      "price": 23.5
    },
    {
      "optionValues": [
        {
          "name": "Brand new style",
          "optionId": "gid://shopify/ProductOption/1064576573"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672625",
          "optionId": "gid://shopify/ProductOption/1064576572"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672627",
          "optionId": "gid://shopify/ProductOption/1064576574"
        }
      ],
      "price": 29.5
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
"query": "mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { userErrors { field message } product { id options { id name values position optionValues { id name hasVariants } } } productVariants { id title selectedOptions { name value } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481087",
    "variants": [
      {
        "optionValues": [
          {
            "name": "Red",
            "optionName": "Color"
          },
          {
            "name": "Brand new style",
            "optionId": "gid://shopify/ProductOption/1064576573"
          },
          {
            "name": "Silk",
            "optionName": "Material"
          }
        ],
        "price": 22
      },
      {
        "optionValues": [
          {
            "name": "Brand new style",
            "optionName": "Style"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054672624",
            "optionName": "Color"
          },
          {
            "name": "Silk",
            "optionName": "Material"
          }
        ],
        "price": 23.5
      },
      {
        "optionValues": [
          {
            "name": "Brand new style",
            "optionId": "gid://shopify/ProductOption/1064576573"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054672625",
            "optionId": "gid://shopify/ProductOption/1064576572"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054672627",
            "optionId": "gid://shopify/ProductOption/1064576574"
          }
        ],
        "price": 29.5
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      userErrors {
        field
        message
      }
      product {
        id
        options {
          id
          name
          values
          position
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481087",
        "variants": [
            {
                "optionValues": [
                    {
                        "name": "Red",
                        "optionName": "Color"
                    },
                    {
                        "name": "Brand new style",
                        "optionId": "gid://shopify/ProductOption/1064576573"
                    },
                    {
                        "name": "Silk",
                        "optionName": "Material"
                    }
                ],
                "price": 22
            },
            {
                "optionValues": [
                    {
                        "name": "Brand new style",
                        "optionName": "Style"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672624",
                        "optionName": "Color"
                    },
                    {
                        "name": "Silk",
                        "optionName": "Material"
                    }
                ],
                "price": 23.5
            },
            {
                "optionValues": [
                    {
                        "name": "Brand new style",
                        "optionId": "gid://shopify/ProductOption/1064576573"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672625",
                        "optionId": "gid://shopify/ProductOption/1064576572"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672627",
                        "optionId": "gid://shopify/ProductOption/1064576574"
                    }
                ],
                "price": 29.5
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
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      userErrors {
        field
        message
      }
      product {
        id
        options {
          id
          name
          values
          position
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481087",
  "variants": [
    {
      "optionValues": [
        {
          "name": "Red",
          "optionName": "Color"
        },
        {
          "name": "Brand new style",
          "optionId": "gid://shopify/ProductOption/1064576573"
        },
        {
          "name": "Silk",
          "optionName": "Material"
        }
      ],
      "price": 22
    },
    {
      "optionValues": [
        {
          "name": "Brand new style",
          "optionName": "Style"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672624",
          "optionName": "Color"
        },
        {
          "name": "Silk",
          "optionName": "Material"
        }
      ],
      "price": 23.5
    },
    {
      "optionValues": [
        {
          "name": "Brand new style",
          "optionId": "gid://shopify/ProductOption/1064576573"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672625",
          "optionId": "gid://shopify/ProductOption/1064576572"
        },
        {
          "id": "gid://shopify/ProductOptionValue/1054672627",
          "optionId": "gid://shopify/ProductOption/1064576574"
        }
      ],
      "price": 29.5
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
        userErrors {
          field
          message
        }
        product {
          id
          options {
            id
            name
            values
            position
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481087",
        "variants": [
            {
                "optionValues": [
                    {
                        "name": "Red",
                        "optionName": "Color"
                    },
                    {
                        "name": "Brand new style",
                        "optionId": "gid://shopify/ProductOption/1064576573"
                    },
                    {
                        "name": "Silk",
                        "optionName": "Material"
                    }
                ],
                "price": 22
            },
            {
                "optionValues": [
                    {
                        "name": "Brand new style",
                        "optionName": "Style"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672624",
                        "optionName": "Color"
                    },
                    {
                        "name": "Silk",
                        "optionName": "Material"
                    }
                ],
                "price": 23.5
            },
            {
                "optionValues": [
                    {
                        "name": "Brand new style",
                        "optionId": "gid://shopify/ProductOption/1064576573"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672625",
                        "optionId": "gid://shopify/ProductOption/1064576572"
                    },
                    {
                        "id": "gid://shopify/ProductOptionValue/1054672627",
                        "optionId": "gid://shopify/ProductOption/1064576574"
                    }
                ],
                "price": 29.5
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantsBulkCreate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481087",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576572",
          "name": "Color",
          "values": [
            "Blue",
            "Red"
          ],
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672624",
              "name": "Blue",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054672625",
              "name": "Red",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576573",
          "name": "Style",
          "values": [
            "Old style",
            "Brand new style"
          ],
          "position": 2,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672626",
              "name": "Old style",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054672629",
              "name": "Brand new style",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576574",
          "name": "Material",
          "values": [
            "Polyester",
            "Silk"
          ],
          "position": 3,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672627",
              "name": "Polyester",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054672628",
              "name": "Silk",
              "hasVariants": true
            }
          ]
        }
      ]
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/1070325347",
        "title": "Red / Brand new style / Silk",
        "selectedOptions": [
          {
            "name": "Color",
            "value": "Red"
          },
          {
            "name": "Style",
            "value": "Brand new style"
          },
          {
            "name": "Material",
            "value": "Silk"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325348",
        "title": "Blue / Brand new style / Silk",
        "selectedOptions": [
          {
            "name": "Color",
            "value": "Blue"
          },
          {
            "name": "Style",
            "value": "Brand new style"
          },
          {
            "name": "Material",
            "value": "Silk"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070325349",
        "title": "Red / Brand new style / Polyester",
        "selectedOptions": [
          {
            "name": "Color",
            "value": "Red"
          },
          {
            "name": "Style",
            "value": "Brand new style"
          },
          {
            "name": "Material",
            "value": "Polyester"
          }
        ]
      }
    ]
  }
}
``` 
*   ### Handle non-existent product errors

#### Description

Trying to create product variants with non-existent product IDs returns `null`. The response demonstrates error handling by returning `null` for the `product` field, an empty array for `productVariants`, and a user error with the message "Product does not exist".

#### Query

```graphql
mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
    product {
      id
    }
    productVariants {
      id
      title
      price
      compareAtPrice
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
  "productId": "gid://shopify/Product/-1",
  "variants": [
    {
      "optionValues": [
        {
          "name": "Golden",
          "optionName": "Title"
        }
      ],
      "price": 15.99,
      "compareAtPrice": 19.99
    },
    {
      "optionValues": [
        {
          "name": "Silver",
          "optionName": "Title"
        }
      ],
      "price": 13.99,
      "compareAtPrice": null
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
"query": "mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { product { id } productVariants { id title price compareAtPrice } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/-1",
    "variants": [
      {
        "optionValues": [
          {
            "name": "Golden",
            "optionName": "Title"
          }
        ],
        "price": 15.99,
        "compareAtPrice": 19.99
      },
      {
        "optionValues": [
          {
            "name": "Silver",
            "optionName": "Title"
          }
        ],
        "price": 13.99,
        "compareAtPrice": null
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        title
        price
        compareAtPrice
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/-1",
        "variants": [
            {
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionName": "Title"
                    }
                ],
                "price": 15.99,
                "compareAtPrice": 19.99
            },
            {
                "optionValues": [
                    {
                        "name": "Silver",
                        "optionName": "Title"
                    }
                ],
                "price": 13.99,
                "compareAtPrice": null
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
  mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
      product {
        id
      }
      productVariants {
        id
        title
        price
        compareAtPrice
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/-1",
  "variants": [
    {
      "optionValues": [
        {
          "name": "Golden",
          "optionName": "Title"
        }
      ],
      "price": 15.99,
      "compareAtPrice": 19.99
    },
    {
      "optionValues": [
        {
          "name": "Silver",
          "optionName": "Title"
        }
      ],
      "price": 13.99,
      "compareAtPrice": null
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productVariantsBulkCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
        product {
          id
        }
        productVariants {
          id
          title
          price
          compareAtPrice
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/-1",
        "variants": [
            {
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionName": "Title"
                    }
                ],
                "price": 15.99,
                "compareAtPrice": 19.99
            },
            {
                "optionValues": [
                    {
                        "name": "Silver",
                        "optionName": "Title"
                    }
                ],
                "price": 13.99,
                "compareAtPrice": null
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantsBulkCreate": {
    "product": null,
    "productVariants": [],
    "userErrors": [
      {
        "field": [
          "productId"
        ],
        "message": "Product does not exist"
      }
    ]
  }
}
``` 
*   ### productVariantsBulkCreate reference

Examples
--------

Create a single product variant

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ProductVariantsCreate(%24productId%3A%20ID!%2C%20%24variants%3A%20%5BProductVariantsBulkInput!%5D!)%20%7B%0A%20%20productVariantsBulkCreate(productId%3A%20%24productId%2C%20variants%3A%20%24variants)%20%7B%0A%20%20%20%20productVariants%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20selectedOptions%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22variants%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22price%22%3A%2015.99%2C%0A%20%20%20%20%20%20%22compareAtPrice%22%3A%2019.99%2C%0A%20%20%20%20%20%20%22optionValues%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Golden%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22optionId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductOption%2F328272167%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {

 productVariantsBulkCreate(productId: $productId, variants: $variants) {

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

variables:{

"productId":"gid://shopify/Product/20995642",

"variants":[

{

"price":15.99,

"compareAtPrice":19.99,

"optionValues":[

{

"name":"Golden",

"optionId":"gid://shopify/ProductOption/328272167"

}

]

}

]

},

```
mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) { productVariantsBulkCreate(productId: $productId, variants: $variants) { productVariants { id title selectedOptions { name value } } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "variants": [
      {
        "price": 15.99,
        "compareAtPrice": 19.99,
        "optionValues": [
          {
            "name": "Golden",
            "optionId": "gid://shopify/ProductOption/328272167"
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
  mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "price": 15.99,
                "compareAtPrice": 19.99,
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionId": "gid://shopify/ProductOption/328272167"
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
    "query": `mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
        "productId": "gid://shopify/Product/20995642",
        "variants": [
            {
                "price": 15.99,
                "compareAtPrice": 19.99,
                "optionValues": [
                    {
                        "name": "Golden",
                        "optionId": "gid://shopify/ProductOption/328272167"
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
  mutation ProductVariantsCreate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkCreate(productId: $productId, variants: $variants) {
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
  "productId": "gid://shopify/Product/20995642",
  "variants": [
    {
      "price": 15.99,
      "compareAtPrice": 19.99,
      "optionValues": [
        {
          "name": "Golden",
          "optionId": "gid://shopify/ProductOption/328272167"
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

›

⌄

⌄

⌄

⌄

⌄

{

"productId": "gid://shopify/Product/20995642",

"variants": [

{

"price": 15.99,

"compareAtPrice": 19.99,

"optionValues": [

{

"name": "Golden",

"optionId": "gid://shopify/ProductOption/328272167"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"productVariantsBulkCreate": {

"productVariants": [

{

"id": "gid://shopify/ProductVariant/1070325338",

"title": "Golden",

"selectedOptions": [

{

"name": "Title",

"value": "Golden"

}

]

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*