---
title: "productOptionsDelete"
description: "Shopify GraphQL Admin API documentation for productoptionsdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productOptionsDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete

Markdown Content:
productOptionsDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#main-content)

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

[Anchor to productOptionsDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#top)
product Options Delete
======================

mutation

Requires `write_products` access scope. Also: The user must have a permission to edit products and delete product variants.

Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Product options define the choices available for a product, such as size, color, or material.

* * *

Caution

Removing an option can affect a product's [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and their configuration. Deleting an option might also delete associated option values and, depending on the chosen [strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy), might affect variants.

* * *

Use the `productOptionsDelete` mutation for the following use cases:

*   **Simplify product configuration**: Remove obsolete or unnecessary options (for example, discontinue "Material" if all variants are now the same material).
*   **Clean up after seasonal or limited-time offerings**: Delete options that are no longer relevant (for example, "Holiday edition").
*   **Automate catalog management**: Enable apps or integrations to programmatically remove options as product data changes.

* * *

Note

The `productOptionsDelete` mutation enforces strict data integrity for product options and variants. All option positions must remain sequential, and every remaining option must be used by at least one variant.

* * *

After you delete a product option, you can further manage a product's configuration using related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments)
Arguments
---------

[Anchor to options](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-options)options

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

IDs of the options to delete from the product.

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

ID of the product from which to delete the options.

[Anchor to strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy)strategy

•[Product Option Delete Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy)

Default:DEFAULT

The strategy defines which behavior the mutation should observe,such as how to handle a situation where deleting an option would result in duplicate variants.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to ProductOptionsDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#returns)Product Options Delete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedOptionsIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#returns-deletedOptionsIds)deleted Options Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

IDs of the options deleted.

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The updated product object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#returns-userErrors)user Errors

•[[Product Options Delete User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a product option that doesn't have associated variants

#### Description

Delete a [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from an existing product. This example demonstrates how to remove an option that doesn't have associated variants. When the `strategy` field isn't specified or is set to `DEFAULT`, the mutation only deletes options that don't conflict with existing product variants. If deleting an option results in conflicting variants, then an error is returned instead. The response includes the product's updated option list and the IDs of the successfully deleted options.

#### Query

```graphql
mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
  productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
    userErrors {
      field
      message
      code
    }
    deletedOptionsIds
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272168"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) { productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) { userErrors { field message code } deletedOptionsIds product { id options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      "gid://shopify/ProductOption/328272168"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272168"
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
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272168"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
      productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
        userErrors {
          field
          message
          code
        }
        deletedOptionsIds
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272168"
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionsDelete": {
    "userErrors": [],
    "deletedOptionsIds": [
      "gid://shopify/ProductOption/328272168"
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
      ]
    }
  }
}
``` 
*   ### Delete a product option that has associated variants

#### Description

Delete a [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) using the `POSITION` delete strategy. This example demonstrates how to remove an option that has multiple values and is associated with existing product variants. When the strategy is set to `POSITION`, the mutation deletes duplicate variants that would result from removing the option, keeping only variants with unique combinations of the remaining option values. Variants with the lowest position are prioritized when duplicates are found. The response returns the updated product with its remaining options and variants, along with the IDs of the successfully deleted options.

#### Query

```graphql
mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
  productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
    userErrors {
      field
      message
      code
    }
    deletedOptionsIds
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272167"
  ],
  "strategy": "POSITION"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) { productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) { userErrors { field message code } deletedOptionsIds product { id options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      "gid://shopify/ProductOption/328272167"
    ],
    "strategy": "POSITION"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272167"
        ],
        "strategy": "POSITION"
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
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272167"
  ],
  "strategy": "POSITION"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
      productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
        userErrors {
          field
          message
          code
        }
        deletedOptionsIds
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272167"
        ],
        "strategy": "POSITION"
    },
  },
});
``` #### Response

```json
{
  "productOptionsDelete": {
    "userErrors": [],
    "deletedOptionsIds": [
      "gid://shopify/ProductOption/328272167"
    ],
    "product": {
      "id": "gid://shopify/Product/20995642",
      "options": [
        {
          "id": "gid://shopify/ProductOption/328272169",
          "name": "Title",
          "values": [
            "Default Title"
          ],
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/141051427",
              "name": "Default Title",
              "hasVariants": true
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Deleting an option linked to variants without a strategy returns an error

#### Description

This example shows an attempt to delete a [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) that has multiple option values associated with existing product variants, without specifying a delete strategy. The mutation demonstrates the validation that prevents deleting options when it would result in conflicting or duplicate variants. Since no `strategy` field is provided (defaulting to `DEFAULT` behavior), the mutation can't safely remove the option without potentially creating variant conflicts. The response returns the product's ID, an empty list of deleted options, and a user error indicating that the option cannot be deleted due to its multiple values being linked to variants.

#### Query

```graphql
mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
  productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
    userErrors {
      field
      message
      code
    }
    deletedOptionsIds
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
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272167"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) { productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) { userErrors { field message code } deletedOptionsIds product { id options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      "gid://shopify/ProductOption/328272167"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272167"
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
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272167"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
      productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
        userErrors {
          field
          message
          code
        }
        deletedOptionsIds
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272167"
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionsDelete": {
    "userErrors": [
      {
        "field": [
          "options"
        ],
        "message": "Cannot delete an option with multiple values.",
        "code": "CANNOT_DELETE_OPTION_WITH_MULTIPLE_VALUES"
      }
    ],
    "deletedOptionsIds": [],
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
      ]
    }
  }
}
``` 
*   ### productOptionsDelete reference

Examples
--------

Delete a product option that doesn't have associated variants

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20deleteOptions(%24productId%3A%20ID!%2C%20%24options%3A%20%5BID!%5D!%2C%20%24strategy%3A%20ProductOptionDeleteStrategy)%20%7B%0A%20%20productOptionsDelete(productId%3A%20%24productId%2C%20options%3A%20%24options%2C%20strategy%3A%20%24strategy)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20deletedOptionsIds%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20options%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20values%0A%20%20%20%20%20%20%20%20position%0A%20%20%20%20%20%20%20%20optionValues%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20hasVariants%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22options%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FProductOption%2F328272168%22%0A%20%20%5D%0A%7D)Copy

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

37

38

39

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {

 productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {

 userErrors {

 field

 message

 code

 }

 deletedOptionsIds

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

 }

 }`,

{

variables:{

"productId":"gid://shopify/Product/20995642",

"options":[

"gid://shopify/ProductOption/328272168"

]

},

},

);

const data=await response.json();

```
mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
  productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
    userErrors {
      field
      message
      code
    }
    deletedOptionsIds
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
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) { productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) { userErrors { field message code } deletedOptionsIds product { id options { id name values position optionValues { id name hasVariants } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "options": [
      "gid://shopify/ProductOption/328272168"
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272168"
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
    "query": `mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
      productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
        userErrors {
          field
          message
          code
        }
        deletedOptionsIds
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
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "options": [
            "gid://shopify/ProductOption/328272168"
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
  mutation deleteOptions($productId: ID!, $options: [ID!]!, $strategy: ProductOptionDeleteStrategy) {
    productOptionsDelete(productId: $productId, options: $options, strategy: $strategy) {
      userErrors {
        field
        message
        code
      }
      deletedOptionsIds
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
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "options": [
    "gid://shopify/ProductOption/328272168"
  ]
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

⌄

{

"productId": "gid://shopify/Product/20995642",

"options": [

"gid://shopify/ProductOption/328272168"

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

{

"productOptionsDelete": {

"userErrors": [],

"deletedOptionsIds": [

"gid://shopify/ProductOption/328272168"

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


---
*Content truncated at "Updates" section*