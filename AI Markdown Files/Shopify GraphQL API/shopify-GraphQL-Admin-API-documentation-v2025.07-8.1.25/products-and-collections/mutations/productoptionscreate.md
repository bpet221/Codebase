---
title: "productOptionsCreate"
description: "Shopify GraphQL Admin API documentation for productoptionscreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productOptionsCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate

Markdown Content:
productOptionsCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#main-content)

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

[Anchor to productOptionsCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#top)
product Options Create
======================

mutation

Requires `write_products` access scope. Also: The user must have a permission to create product variants.

Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

Use the `productOptionsCreate` mutation for the following use cases:

*   **Add product choices**: Add a new option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), to an existing product so customers can select their preferred variant.
*   **Enable personalization features**: Add options such as "Engraving text" to let customers customize their purchase.
*   **Offer seasonal or limited edition products**: Add a new value (for example, "Holiday red") to an existing option to support limited-time or seasonal variants.
*   **Integrate with apps that manage product configuration**: Allow third-party apps to add options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
*   **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

* * *

Note

The `productOptionsCreate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant. If you use the [`CREATE` variant strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy.enums.CREATE), consider the maximum allowed number of variants for each product (100 by default, and 2,048 if you've [enabled the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product)).

* * *

After you create product options, you can further manage a product's configuration using related mutations:

*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#arguments)
Arguments
---------

[Anchor to options](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#arguments-options)options

•[[Option Create Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput)

required

Options to add to the product.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the product to update.

[Anchor to variantStrategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#arguments-variantStrategy)variant Strategy

•[Product Option Create Variant Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy)

Default:LEAVE_AS_IS

The strategy defines which behavior the mutation should observe regarding variants. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to ProductOptionsCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#returns)Product Options Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The updated product object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate#returns-userErrors)user Errors

•[[Product Options Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new product option with an explicit position

#### Description

Create a new [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) with an explicitly specified position. The example shows how to create a new option ("Color") with a position of 1, which makes it the first option (appearing first in variant titles and option ordering). This causes existing options to be repositioned accordingly. The response includes the product's ID, the created option (with its name, position, and value), and the details of the first product variant generated from the new option.

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "position": 1,
      "values": [
        {
          "name": "Blue"
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
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Blue"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "name": "Blue"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "position": 1,
      "values": [
        {
          "name": "Blue"
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
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "name": "Blue"
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
  "productOptionsCreate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/20995642",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/30322695",
            "title": "Blue / 151cm",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              },
              {
                "name": "Title",
                "value": "151cm"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/113711323",
            "title": "Blue / 155cm",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              },
              {
                "name": "Title",
                "value": "155cm"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/236948360",
            "title": "Blue / 158cm",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              },
              {
                "name": "Title",
                "value": "158cm"
              }
            ]
          }
        ]
      },
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576661",
          "name": "Color",
          "values": [
            "Blue"
          ],
          "position": 1,
          "optionValues": [
            {
              "name": "Blue",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/328272167",
          "name": "Title",
          "values": [
            "151cm",
            "155cm",
            "158cm"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "151cm",
              "hasVariants": true
            },
            {
              "name": "155cm",
              "hasVariants": true
            },
            {
              "name": "158cm",
              "hasVariants": true
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Create new product options and values

#### Description

Create new [product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) for an existing product. The example shows how to update a product to have two options: "Color" (with values "Blue" and "Red") and "Size" (with values "Small" and "Medium"). Only the first value for each option is linked to the product variant. The response returns the product's ID, the created options (with their names, positions, and values), and the details of the first product variant generated from the new options.

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481154",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        },
        {
          "name": "Red"
        }
      ]
    },
    {
      "name": "Size",
      "values": [
        {
          "name": "Small"
        },
        {
          "name": "Medium"
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
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481154",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Blue"
          },
          {
            "name": "Red"
          }
        ]
      },
      {
        "name": "Size",
        "values": [
          {
            "name": "Small"
          },
          {
            "name": "Medium"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481154",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Red"
                    }
                ]
            },
            {
                "name": "Size",
                "values": [
                    {
                        "name": "Small"
                    },
                    {
                        "name": "Medium"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481154",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        },
        {
          "name": "Red"
        }
      ]
    },
    {
      "name": "Size",
      "values": [
        {
          "name": "Small"
        },
        {
          "name": "Medium"
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
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481154",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Red"
                    }
                ]
            },
            {
                "name": "Size",
                "values": [
                    {
                        "name": "Small"
                    },
                    {
                        "name": "Medium"
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
  "productOptionsCreate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481154",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070325307",
            "title": "Blue / Small",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              },
              {
                "name": "Size",
                "value": "Small"
              }
            ]
          }
        ]
      },
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576667",
          "name": "Color",
          "values": [
            "Blue"
          ],
          "position": 1,
          "optionValues": [
            {
              "name": "Blue",
              "hasVariants": true
            },
            {
              "name": "Red",
              "hasVariants": false
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576668",
          "name": "Size",
          "values": [
            "Small"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "Small",
              "hasVariants": true
            },
            {
              "name": "Medium",
              "hasVariants": false
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Create product options and product variants

#### Description

Use the `CREATE` value for the `variantStrategy` input to create new product variants for each combination of option values. The response includes the product's ID, the created options (with their names, positions, and values), and the details of the product variants generated from the new options.

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        },
        {
          "name": "Green"
        }
      ]
    }
  ],
  "variantStrategy": "CREATE"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Blue"
          },
          {
            "name": "Green"
          }
        ]
      }
    ],
    "variantStrategy": "CREATE"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Green"
                    }
                ]
            }
        ],
        "variantStrategy": "CREATE"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        },
        {
          "name": "Green"
        }
      ]
    }
  ],
  "variantStrategy": "CREATE"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Green"
                    }
                ]
            }
        ],
        "variantStrategy": "CREATE"
    },
  },
});
``` #### Response

```json
{
  "productOptionsCreate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/20995642",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/30322695",
            "title": "151cm / Blue",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "151cm"
              },
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/113711323",
            "title": "155cm / Blue",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "155cm"
              },
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/236948360",
            "title": "158cm / Blue",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "158cm"
              },
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325308",
            "title": "151cm / Green",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "151cm"
              },
              {
                "name": "Color",
                "value": "Green"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325309",
            "title": "155cm / Green",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "155cm"
              },
              {
                "name": "Color",
                "value": "Green"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325310",
            "title": "158cm / Green",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "158cm"
              },
              {
                "name": "Color",
                "value": "Green"
              }
            ]
          }
        ]
      },
      "options": [
        {
          "id": "gid://shopify/ProductOption/328272167",
          "name": "Title",
          "values": [
            "151cm",
            "155cm",
            "158cm"
          ],
          "position": 1,
          "optionValues": [
            {
              "name": "151cm",
              "hasVariants": true
            },
            {
              "name": "155cm",
              "hasVariants": true
            },
            {
              "name": "158cm",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576670",
          "name": "Color",
          "values": [
            "Blue",
            "Green"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "Blue",
              "hasVariants": true
            },
            {
              "name": "Green",
              "hasVariants": true
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Create product options without creating new product variants

#### Description

Use the `LEAVE_AS_IS` value for the `variantStrategy` input to add new [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) to a product and update existing [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) to remain valid, without creating any new variants. The response includes the product's ID, the updated options (with their names, positions, and values), and the unchanged list of variants, showing how the new option is integrated without expanding the variant set.

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        },
        {
          "name": "Green"
        }
      ]
    }
  ],
  "variantStrategy": "LEAVE_AS_IS"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Blue"
          },
          {
            "name": "Green"
          }
        ]
      }
    ],
    "variantStrategy": "LEAVE_AS_IS"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Green"
                    }
                ]
            }
        ],
        "variantStrategy": "LEAVE_AS_IS"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        },
        {
          "name": "Green"
        }
      ]
    }
  ],
  "variantStrategy": "LEAVE_AS_IS"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Green"
                    }
                ]
            }
        ],
        "variantStrategy": "LEAVE_AS_IS"
    },
  },
});
``` #### Response

```json
{
  "productOptionsCreate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/20995642",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/30322695",
            "title": "151cm / Blue",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "151cm"
              },
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/113711323",
            "title": "155cm / Blue",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "155cm"
              },
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/236948360",
            "title": "158cm / Blue",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "158cm"
              },
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          }
        ]
      },
      "options": [
        {
          "id": "gid://shopify/ProductOption/328272167",
          "name": "Title",
          "values": [
            "151cm",
            "155cm",
            "158cm"
          ],
          "position": 1,
          "optionValues": [
            {
              "name": "151cm",
              "hasVariants": true
            },
            {
              "name": "155cm",
              "hasVariants": true
            },
            {
              "name": "158cm",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576669",
          "name": "Color",
          "values": [
            "Blue"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "Blue",
              "hasVariants": true
            },
            {
              "name": "Green",
              "hasVariants": false
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Creating too many product options returns an error

#### Description

This example shows an attempt to add more options to a product than the allowed limit, and demonstrates validation for the maximum number of product options. The response includes the product's ID and a user error indicating that the options limit has been exceeded, with the error code, message, and field path.

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        }
      ]
    },
    {
      "name": "Style",
      "values": [
        {
          "name": "Classic"
        }
      ]
    },
    {
      "name": "Size",
      "values": [
        {
          "name": "Small"
        }
      ]
    },
    {
      "name": "Material",
      "values": [
        {
          "name": "Linen"
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
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Blue"
          }
        ]
      },
      {
        "name": "Style",
        "values": [
          {
            "name": "Classic"
          }
        ]
      },
      {
        "name": "Size",
        "values": [
          {
            "name": "Small"
          }
        ]
      },
      {
        "name": "Material",
        "values": [
          {
            "name": "Linen"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    }
                ]
            },
            {
                "name": "Style",
                "values": [
                    {
                        "name": "Classic"
                    }
                ]
            },
            {
                "name": "Size",
                "values": [
                    {
                        "name": "Small"
                    }
                ]
            },
            {
                "name": "Material",
                "values": [
                    {
                        "name": "Linen"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
        }
      ]
    },
    {
      "name": "Style",
      "values": [
        {
          "name": "Classic"
        }
      ]
    },
    {
      "name": "Size",
      "values": [
        {
          "name": "Small"
        }
      ]
    },
    {
      "name": "Material",
      "values": [
        {
          "name": "Linen"
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
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
                    }
                ]
            },
            {
                "name": "Style",
                "values": [
                    {
                        "name": "Classic"
                    }
                ]
            },
            {
                "name": "Size",
                "values": [
                    {
                        "name": "Small"
                    }
                ]
            },
            {
                "name": "Material",
                "values": [
                    {
                        "name": "Linen"
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
  "productOptionsCreate": {
    "userErrors": [
      {
        "field": [
          "options"
        ],
        "message": "Can only specify a maximum of 3 options",
        "code": "OPTIONS_OVER_LIMIT"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/20995642",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/30322695",
            "title": "151cm",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "151cm"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/113711323",
            "title": "155cm",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "155cm"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/236948360",
            "title": "158cm",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "158cm"
              }
            ]
          }
        ]
      },
      "options": [
        {
          "id": "gid://shopify/ProductOption/328272167",
          "name": "Title",
          "values": [
            "151cm",
            "155cm",
            "158cm"
          ],
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/141051426",
              "name": "151cm",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/258076414",
              "name": "155cm",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/129596849",
              "name": "158cm",
              "hasVariants": true
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Duplicating product option names returns an error

#### Description

This example demonstrates an attempt to create a [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) with a name that already exists on the product. The validation prevents duplicate option names within the same product. When you try to create an option with a name that already exists (in this case, "Color"), the mutation returns a validation error instead of creating the option. The response includes the product's ID and a user error with the specific error code, message, and field path indicating which option caused the conflict.

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
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
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Blue"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Blue"
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
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Blue"
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
  "productOptionsCreate": {
    "userErrors": [
      {
        "field": [
          "options",
          "0"
        ],
        "message": "Option 'Color' already exists.",
        "code": "OPTION_ALREADY_EXISTS"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/20995642",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/30322695",
            "title": "151cm / Green",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "151cm"
              },
              {
                "name": "Color",
                "value": "Green"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/113711323",
            "title": "155cm / Green",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "155cm"
              },
              {
                "name": "Color",
                "value": "Green"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/236948360",
            "title": "158cm / Green",
            "selectedOptions": [
              {
                "name": "Title",
                "value": "158cm"
              },
              {
                "name": "Color",
                "value": "Green"
              }
            ]
          }
        ]
      },
      "options": [
        {
          "id": "gid://shopify/ProductOption/328272167",
          "name": "Title",
          "values": [
            "151cm",
            "155cm",
            "158cm"
          ],
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/141051426",
              "name": "151cm",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/258076414",
              "name": "155cm",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/129596849",
              "name": "158cm",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576663",
          "name": "Color",
          "values": [
            "Green"
          ],
          "position": 2,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672581",
              "name": "Green",
              "hasVariants": true
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Link a product option to a category metafield

#### Description

Link a new [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) to a [category metafield](https://help.shopify.com/manual/products/details/product-category#category-metafields) using the `linkedMetafield` input. The example shows how to associate a product option ("Color") with a metafield, and specify option values using metaobjects. The response returns the product's options, including the linked metafield details and the option values, each with its name and associated metafield value. [Learn more about metafield-linked product options](https://shopify.dev/api/admin/migrate/new-product-model/metafield-linked).

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
  productOptionsCreate(productId: $productId, options: $options) {
    userErrors {
      field
      message
      code
    }
    product {
      options {
        name
        linkedMetafield {
          namespace
          key
        }
        optionValues {
          name
          linkedMetafieldValue
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481153",
  "options": [
    {
      "name": "Color",
      "linkedMetafield": {
        "namespace": "shopify",
        "key": "color-pattern",
        "values": [
          "gid://shopify/Metaobject/971662499",
          "gid://shopify/Metaobject/971662500",
          "gid://shopify/Metaobject/971662501"
        ]
      }
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
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) { productOptionsCreate(productId: $productId, options: $options) { userErrors { field message code } product { options { name linkedMetafield { namespace key } optionValues { name linkedMetafieldValue } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481153",
    "options": [
      {
        "name": "Color",
        "linkedMetafield": {
          "namespace": "shopify",
          "key": "color-pattern",
          "values": [
            "gid://shopify/Metaobject/971662499",
            "gid://shopify/Metaobject/971662500",
            "gid://shopify/Metaobject/971662501"
          ]
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
    productOptionsCreate(productId: $productId, options: $options) {
      userErrors {
        field
        message
        code
      }
      product {
        options {
          name
          linkedMetafield {
            namespace
            key
          }
          optionValues {
            name
            linkedMetafieldValue
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481153",
        "options": [
            {
                "name": "Color",
                "linkedMetafield": {
                    "namespace": "shopify",
                    "key": "color-pattern",
                    "values": [
                        "gid://shopify/Metaobject/971662499",
                        "gid://shopify/Metaobject/971662500",
                        "gid://shopify/Metaobject/971662501"
                    ]
                }
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
    productOptionsCreate(productId: $productId, options: $options) {
      userErrors {
        field
        message
        code
      }
      product {
        options {
          name
          linkedMetafield {
            namespace
            key
          }
          optionValues {
            name
            linkedMetafieldValue
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481153",
  "options": [
    {
      "name": "Color",
      "linkedMetafield": {
        "namespace": "shopify",
        "key": "color-pattern",
        "values": [
          "gid://shopify/Metaobject/971662499",
          "gid://shopify/Metaobject/971662500",
          "gid://shopify/Metaobject/971662501"
        ]
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
      productOptionsCreate(productId: $productId, options: $options) {
        userErrors {
          field
          message
          code
        }
        product {
          options {
            name
            linkedMetafield {
              namespace
              key
            }
            optionValues {
              name
              linkedMetafieldValue
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481153",
        "options": [
            {
                "name": "Color",
                "linkedMetafield": {
                    "namespace": "shopify",
                    "key": "color-pattern",
                    "values": [
                        "gid://shopify/Metaobject/971662499",
                        "gid://shopify/Metaobject/971662500",
                        "gid://shopify/Metaobject/971662501"
                    ]
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionsCreate": {
    "userErrors": [],
    "product": {
      "options": [
        {
          "name": "Color",
          "linkedMetafield": {
            "namespace": "shopify",
            "key": "color-pattern"
          },
          "optionValues": [
            {
              "name": "Red",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662499"
            },
            {
              "name": "Blue",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662500"
            },
            {
              "name": "Yellow",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662501"
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Link a product option to a metafield with existing values

#### Description

Link a [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) to a [category metafield](https://help.shopify.com/manual/products/details/product-category#category-metafields) when the product already has metafield values set. The example uses all metaobjects referenced by the product's category metafield to create option values. The response includes the product's options, the linked metafield information, and the generated option values with their names and metafield references. [Learn more about metafield-linked product options](https://shopify.dev/api/admin/migrate/new-product-model/metafield-linked).

#### Query

```graphql
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
  productOptionsCreate(productId: $productId, options: $options) {
    userErrors {
      field
      message
      code
    }
    product {
      options {
        name
        linkedMetafield {
          namespace
          key
        }
        optionValues {
          name
          linkedMetafieldValue
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481152",
  "options": [
    {
      "name": "Color",
      "linkedMetafield": {
        "namespace": "shopify",
        "key": "color-pattern"
      }
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
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) { productOptionsCreate(productId: $productId, options: $options) { userErrors { field message code } product { options { name linkedMetafield { namespace key } optionValues { name linkedMetafieldValue } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481152",
    "options": [
      {
        "name": "Color",
        "linkedMetafield": {
          "namespace": "shopify",
          "key": "color-pattern"
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
    productOptionsCreate(productId: $productId, options: $options) {
      userErrors {
        field
        message
        code
      }
      product {
        options {
          name
          linkedMetafield {
            namespace
            key
          }
          optionValues {
            name
            linkedMetafieldValue
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481152",
        "options": [
            {
                "name": "Color",
                "linkedMetafield": {
                    "namespace": "shopify",
                    "key": "color-pattern"
                }
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
    productOptionsCreate(productId: $productId, options: $options) {
      userErrors {
        field
        message
        code
      }
      product {
        options {
          name
          linkedMetafield {
            namespace
            key
          }
          optionValues {
            name
            linkedMetafieldValue
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481152",
  "options": [
    {
      "name": "Color",
      "linkedMetafield": {
        "namespace": "shopify",
        "key": "color-pattern"
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
      productOptionsCreate(productId: $productId, options: $options) {
        userErrors {
          field
          message
          code
        }
        product {
          options {
            name
            linkedMetafield {
              namespace
              key
            }
            optionValues {
              name
              linkedMetafieldValue
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481152",
        "options": [
            {
                "name": "Color",
                "linkedMetafield": {
                    "namespace": "shopify",
                    "key": "color-pattern"
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionsCreate": {
    "userErrors": [],
    "product": {
      "options": [
        {
          "name": "Color",
          "linkedMetafield": {
            "namespace": "shopify",
            "key": "color-pattern"
          },
          "optionValues": [
            {
              "name": "Red",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662496"
            },
            {
              "name": "Blue",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662497"
            },
            {
              "name": "Yellow",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662498"
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### productOptionsCreate reference

Examples
--------

Create a new product option with an explicit position

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20createOptions(%24productId%3A%20ID!%2C%20%24options%3A%20%5BOptionCreateInput!%5D!%2C%20%24variantStrategy%3A%20ProductOptionCreateVariantStrategy)%20%7B%0A%20%20productOptionsCreate(productId%3A%20%24productId%2C%20options%3A%20%24options%2C%20variantStrategy%3A%20%24variantStrategy)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20variants(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20selectedOptions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20options%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20values%0A%20%20%20%20%20%20%20%20position%0A%20%20%20%20%20%20%20%20optionValues%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20hasVariants%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22options%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Color%22%2C%0A%20%20%20%20%20%20%22position%22%3A%201%2C%0A%20%20%20%20%20%20%22values%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Blue%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {

 productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {

 userErrors {

 field

 message

 code

 }

 product {

 id

 variants(first: 10) {

 nodes {

 id

 title

 selectedOptions {

 name

 value

 }

 }

 }

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

 }

```
mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
  productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
    userErrors {
      field
      message
      code
    }
    product {
      id
      variants(first: 10) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) { productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) { userErrors { field message code } product { id variants(first: 10) { nodes { id title selectedOptions { name value } } } options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Blue"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "name": "Blue"
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
    "query": `mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
      productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
        userErrors {
          field
          message
          code
        }
        product {
          id
          variants(first: 10) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "name": "Blue"
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
  mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!, $variantStrategy: ProductOptionCreateVariantStrategy) {
    productOptionsCreate(productId: $productId, options: $options, variantStrategy: $variantStrategy) {
      userErrors {
        field
        message
        code
      }
      product {
        id
        variants(first: 10) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    {
      "name": "Color",
      "position": 1,
      "values": [
        {
          "name": "Blue"
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

›

⌄

⌄

⌄

⌄

⌄

{

"productId": "gid://shopify/Product/20995642",

"options": [

{

"name": "Color",

"position": 1,

"values": [

{

"name": "Blue"

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

{

"productOptionsCreate": {

"userErrors": [],

"product": {

"id": "gid://shopify/Product/20995642",

"variants": {

"nodes": [

{

"id": "gid://shopify/ProductVariant/30322695",

"title": "Blue / 151cm",

"selectedOptions": [

{

"name": "Color",

"value": "Blue"

},

{

"name": "Title",

"value": "151cm"

}

]

},

{

"id": "gid://shopify/ProductVariant/113711323",

"title": "Blue / 155cm",

"selectedOptions": [

{

"name": "Color",

"value": "Blue"

},

{

"name": "Title",

"value": "155cm"

}

]

},

{


---
*Content truncated at "Updates" section*