---
title: "productOptionsReorder"
description: "Shopify GraphQL Admin API documentation for productoptionsreorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productOptionsReorder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder

Markdown Content:
productOptionsReorder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#main-content)

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

[Anchor to productOptionsReorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#top)
product Options Reorder
=======================

mutation

Requires `write_products` access scope. Also: The user must have a permission to update product variants.

Reorders the [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), updating the order in which [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) are presented to customers.

The `productOptionsReorder` mutation accepts a list of product options, each identified by `id` or `name`, and an optional list of values (also by `id` or `name`) specifying the new order. The order of options in the mutation's input determines their new positions (for example, the first option becomes `option1`). The order of values within each option determines their new positions. The mutation recalculates the order of variants based on the new option and value order.

Suppose a product has the following variants:

1.   `"Red / Small"`
2.   `"Green / Medium"`
3.   `"Blue / Small"`

You reorder options and values:

```
options: [
  { name: "Size", values: [{ name: "Small" }, { name: "Medium" }] },
  { name: "Color", values: [{ name: "Green" }, { name: "Red" }, { name: "Blue" }] }
]
```

The resulting variant order will be:

1.   `"Small / Green"`
2.   `"Small / Red"`
3.   `"Small / Blue"`
4.   `"Medium / Green"`

Use the `productOptionsReorder` mutation for the following use cases:

*   **Change the order of product options**: For example, display "Color" before "Size" in a store.
*   **Reorder option values within an option**: For example, show "Red" before "Blue" in a color picker.
*   **Control the order of product variants**: The order of options and their values determines the sequence in which variants are listed and selected.
*   **Highlight best-selling options**: Present the most popular or relevant options and values first.
*   **Promote merchandising strategies**: Highlight seasonal colors, limited editions, or featured sizes.

* * *

Note

The `productOptionsReorder` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

* * *

After you reorder product options, you can further manage a product's configuration using related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [managing product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#arguments)
Arguments
---------

[Anchor to options](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#arguments-options)options

•[[Option Reorder Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionReorderInput)

required

Options to reorder on the product.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the product to update.

* * *

Was this section helpful?

Yes No

[Anchor to ProductOptionsReorderPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#returns)Product Options Reorder Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The updated product object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder#returns-userErrors)user Errors

•[[Product Options Reorder User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsReorderUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Reorder options and change the order of option values

#### Description

Reorder the [product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and the order of their [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) for an existing product. This example demonstrates how to update a product so that the "Color" option appears before "Size", and the color values are reordered to "Green", "Blue", and "Red". The `values` field can be omitted for an option to preserve its existing order. The response returns the product's ID, the updated list of options (with their names, positions, and reordered values), and the details of the product variants generated from the new option order.

#### Query

```graphql
mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
  productOptionsReorder(options: $options, productId: $productId) {
    userErrors {
      field
      message
      code
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
      variants(first: 5) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481177",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Green"
        },
        {
          "name": "Blue"
        },
        {
          "name": "Red"
        }
      ]
    },
    {
      "name": "Size"
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
"query": "mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) { productOptionsReorder(options: $options, productId: $productId) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481177",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Green"
          },
          {
            "name": "Blue"
          },
          {
            "name": "Red"
          }
        ]
      },
      {
        "name": "Size"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
    productOptionsReorder(options: $options, productId: $productId) {
      userErrors {
        field
        message
        code
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
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481177",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Green"
                    },
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Red"
                    }
                ]
            },
            {
                "name": "Size"
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
  mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
    productOptionsReorder(options: $options, productId: $productId) {
      userErrors {
        field
        message
        code
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
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481177",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Green"
        },
        {
          "name": "Blue"
        },
        {
          "name": "Red"
        }
      ]
    },
    {
      "name": "Size"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
      productOptionsReorder(options: $options, productId: $productId) {
        userErrors {
          field
          message
          code
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
          variants(first: 5) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481177",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Green"
                    },
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Red"
                    }
                ]
            },
            {
                "name": "Size"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionsReorder": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481177",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576699",
          "name": "Color",
          "values": [
            "Green",
            "Blue",
            "Red"
          ],
          "position": 1,
          "optionValues": [
            {
              "name": "Green",
              "hasVariants": true
            },
            {
              "name": "Blue",
              "hasVariants": true
            },
            {
              "name": "Red",
              "hasVariants": true
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064576698",
          "name": "Size",
          "values": [
            "L",
            "S",
            "M"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "L",
              "hasVariants": true
            },
            {
              "name": "S",
              "hasVariants": true
            },
            {
              "name": "M",
              "hasVariants": true
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070325355",
            "title": "Green / L",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Green"
              },
              {
                "name": "Size",
                "value": "L"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325353",
            "title": "Blue / S",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              },
              {
                "name": "Size",
                "value": "S"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325354",
            "title": "Red / M",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Red"
              },
              {
                "name": "Size",
                "value": "M"
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### Reordering option values with any value missing in the input returns an error

#### Description

This example shows an attempt to reorder the option values for a product, but one of the values is missing from the input. The mutation demonstrates the validation that prevents reordering option values if any value is missing. The response returns the product's ID and a user error indicating that the value is missing, without modifying the existing option values.

#### Query

```graphql
mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
  productOptionsReorder(options: $options, productId: $productId) {
    userErrors {
      field
      message
      code
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
      variants(first: 5) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
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
      "name": "Title",
      "values": [
        {
          "name": "158cm"
        },
        {
          "name": "151cm"
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
"query": "mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) { productOptionsReorder(options: $options, productId: $productId) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      {
        "name": "Title",
        "values": [
          {
            "name": "158cm"
          },
          {
            "name": "151cm"
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
  mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
    productOptionsReorder(options: $options, productId: $productId) {
      userErrors {
        field
        message
        code
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
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
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
                "name": "Title",
                "values": [
                    {
                        "name": "158cm"
                    },
                    {
                        "name": "151cm"
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
  mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
    productOptionsReorder(options: $options, productId: $productId) {
      userErrors {
        field
        message
        code
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
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
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
      "name": "Title",
      "values": [
        {
          "name": "158cm"
        },
        {
          "name": "151cm"
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
    "query": `mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
      productOptionsReorder(options: $options, productId: $productId) {
        userErrors {
          field
          message
          code
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
          variants(first: 5) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            {
                "name": "Title",
                "values": [
                    {
                        "name": "158cm"
                    },
                    {
                        "name": "151cm"
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
  "productOptionsReorder": {
    "userErrors": [
      {
        "field": [
          "options"
        ],
        "message": "Missing option value '155cm'.",
        "code": "MISSING_OPTION_VALUE"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/20995642",
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
      ],
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
      }
    }
  }
}
``` 
*   ### productOptionsReorder reference

Examples
--------

Reorder options and change the order of option values

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20reorderOptions(%24options%3A%20%5BOptionReorderInput!%5D!%2C%20%24productId%3A%20ID!)%20%7B%0A%20%20productOptionsReorder(options%3A%20%24options%2C%20productId%3A%20%24productId)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20options%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20values%0A%20%20%20%20%20%20%20%20position%0A%20%20%20%20%20%20%20%20optionValues%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20hasVariants%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20variants(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20selectedOptions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F1072481177%22%2C%0A%20%20%22options%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Color%22%2C%0A%20%20%20%20%20%20%22values%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Green%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Blue%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Red%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Size%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {

 productOptionsReorder(options: $options, productId: $productId) {

 userErrors {

 field

 message

 code

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

 variants(first: 5) {

 nodes {

 id

 title

 selectedOptions {

 name

 value

 }

 }

 }

 }

 }

```
mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
  productOptionsReorder(options: $options, productId: $productId) {
    userErrors {
      field
      message
      code
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
      variants(first: 5) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
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
"query": "mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) { productOptionsReorder(options: $options, productId: $productId) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481177",
    "options": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Green"
          },
          {
            "name": "Blue"
          },
          {
            "name": "Red"
          }
        ]
      },
      {
        "name": "Size"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
    productOptionsReorder(options: $options, productId: $productId) {
      userErrors {
        field
        message
        code
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
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481177",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Green"
                    },
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Red"
                    }
                ]
            },
            {
                "name": "Size"
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
    "query": `mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
      productOptionsReorder(options: $options, productId: $productId) {
        userErrors {
          field
          message
          code
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
          variants(first: 5) {
            nodes {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481177",
        "options": [
            {
                "name": "Color",
                "values": [
                    {
                        "name": "Green"
                    },
                    {
                        "name": "Blue"
                    },
                    {
                        "name": "Red"
                    }
                ]
            },
            {
                "name": "Size"
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
  mutation reorderOptions($options: [OptionReorderInput!]!, $productId: ID!) {
    productOptionsReorder(options: $options, productId: $productId) {
      userErrors {
        field
        message
        code
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
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481177",
  "options": [
    {
      "name": "Color",
      "values": [
        {
          "name": "Green"
        },
        {
          "name": "Blue"
        },
        {
          "name": "Red"
        }
      ]
    },
    {
      "name": "Size"
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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"productId": "gid://shopify/Product/1072481177",

"options": [

{

"name": "Color",

"values": [

{

"name": "Green"

},

{

"name": "Blue"

},

{

"name": "Red"

}

]

},

{

"name": "Size"

}

]

}

Hide content

Response
--------

JSON

999

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

{

"productOptionsReorder": {

"userErrors": [],

"product": {

"id": "gid://shopify/Product/1072481177",

"options": [

{

"id": "gid://shopify/ProductOption/1064576699",

"name": "Color",

"values": [

"Green",

"Blue",

"Red"

],

"position": 1,

"optionValues": [

{

"name": "Green",

"hasVariants": true

},

{

"name": "Blue",

"hasVariants": true

},

{

"name": "Red",

"hasVariants": true

}

]

},

{

"id": "gid://shopify/ProductOption/1064576698",

"name": "Size",

"values": [

"L",

"S",


---
*Content truncated at "Updates" section*