---
title: "productOptionUpdate"
description: "Shopify GraphQL Admin API documentation for productoptionupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productOptionUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate

Markdown Content:
productOptionUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#main-content)

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

[Anchor to productOptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#top)
product Option Update
=====================

mutation

Requires `write_products` access scope. Also: The user must have a permission to edit products and manage product variants.

Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

Use the `productOptionUpdate` mutation for the following use cases:

*   **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), so customers can select their preferred variant.
*   **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
*   **Offer seasonal or limited edition products**: Update a value (for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
*   **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
*   **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

* * *

Note

The `productOptionUpdate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

* * *

After you update a product option, you can further manage a product's configuration using related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments)
Arguments
---------

[Anchor to option](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments-option)option

•[Option Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput)

required

Option to update.

Show input fields

[Anchor to optionValuesToAdd](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments-optionValuesToAdd)option Values To Add

•[[Option Value Create Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueCreateInput)

New option values to create.

Show input fields

[Anchor to optionValuesToDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments-optionValuesToDelete)option Values To Delete

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

IDs of the existing option values to delete.

[Anchor to optionValuesToUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments-optionValuesToUpdate)option Values To Update

•[[Option Value Update Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueUpdateInput)

Existing option values to update.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the Product the Option belongs to.

[Anchor to variantStrategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#arguments-variantStrategy)variant Strategy

•[Product Option Update Variant Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy)

The strategy defines which behavior the mutation should observe regarding variants, such as creating variants or deleting them in response to option values to add or to delete. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to ProductOptionUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#returns)Product Option Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product with which the option being updated is associated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate#returns-userErrors)user Errors

•[[Product Option Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update the name and position of a product option

#### Description

Update the name and position of an existing [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) for a product. This example demonstrates how to change the name of an option (for example, from "Color" to "Tint") and move its position in the list of options. In this case, the "Color" option is moved from position 2 to position 1, which results in "Color" displaying first in the product options list and pushing the "Size" option to position 2. When a position changes, other options automatically shift to accommodate the new ordering. The position must be a positive number between one and the number of options. The name must be a maximum of 255 characters. The response returns the product's ID, the updated options (with their new names, positions, and values), and the details of the product variants reflecting the new option order and names.

#### Query

```graphql
mutation updateOption(
  $productId: ID!,
  $option: OptionUpdateInput!,
  $optionValuesToAdd: [OptionValueCreateInput!],
  $optionValuesToUpdate: [OptionValueUpdateInput!],
  $optionValuesToDelete: [ID!]
  $variantStrategy: ProductOptionUpdateVariantStrategy
) {
  productOptionUpdate(
    productId: $productId,
    option: $option,
    optionValuesToAdd: $optionValuesToAdd,
    optionValuesToUpdate: $optionValuesToUpdate,
    optionValuesToDelete: $optionValuesToDelete,
    variantStrategy: $variantStrategy
  ) {
    userErrors { field message code }
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
          selectedOptions { name, value }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481071",
  "option": {
    "id": "gid://shopify/ProductOption/1064576536",
    "position": 1,
    "name": "Tint"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateOption( $productId: ID!, $option: OptionUpdateInput!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!] $variantStrategy: ProductOptionUpdateVariantStrategy ) { productOptionUpdate( productId: $productId, option: $option, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete, variantStrategy: $variantStrategy ) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name, value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481071",
    "option": {
      "id": "gid://shopify/ProductOption/1064576536",
      "position": 1,
      "name": "Tint"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481071",
        "option": {
            "id": "gid://shopify/ProductOption/1064576536",
            "position": 1,
            "name": "Tint"
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
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481071",
  "option": {
    "id": "gid://shopify/ProductOption/1064576536",
    "position": 1,
    "name": "Tint"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateOption(
      $productId: ID!,
      $option: OptionUpdateInput!,
      $optionValuesToAdd: [OptionValueCreateInput!],
      $optionValuesToUpdate: [OptionValueUpdateInput!],
      $optionValuesToDelete: [ID!]
      $variantStrategy: ProductOptionUpdateVariantStrategy
    ) {
      productOptionUpdate(
        productId: $productId,
        option: $option,
        optionValuesToAdd: $optionValuesToAdd,
        optionValuesToUpdate: $optionValuesToUpdate,
        optionValuesToDelete: $optionValuesToDelete,
        variantStrategy: $variantStrategy
      ) {
        userErrors { field message code }
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
              selectedOptions { name, value }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481071",
        "option": {
            "id": "gid://shopify/ProductOption/1064576536",
            "position": 1,
            "name": "Tint"
        }
    },
  },
});
``` #### Response

```json
{
  "productOptionUpdate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481071",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576536",
          "name": "Tint",
          "values": [
            "Blue",
            "Red"
          ],
          "position": 1,
          "optionValues": [
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
          "id": "gid://shopify/ProductOption/1064576535",
          "name": "Size",
          "values": [
            "Small",
            "Medium"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "Small",
              "hasVariants": true
            },
            {
              "name": "Medium",
              "hasVariants": true
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070325117",
            "title": "Blue / Small",
            "selectedOptions": [
              {
                "name": "Tint",
                "value": "Blue"
              },
              {
                "name": "Size",
                "value": "Small"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325118",
            "title": "Red / Medium",
            "selectedOptions": [
              {
                "name": "Tint",
                "value": "Red"
              },
              {
                "name": "Size",
                "value": "Medium"
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### Add and update product option values

#### Description

Add new [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) to an existing product option and update the name of an existing value. This example demonstrates how to add "Yellow" and "Red" values and rename an existing value from "Blue" to "Purple". The response returns the product's ID, the updated option (with all values and their association to variants), and the updated list of product variants reflecting the changes.

#### Query

```graphql
mutation updateOption(
  $productId: ID!,
  $option: OptionUpdateInput!,
  $optionValuesToAdd: [OptionValueCreateInput!],
  $optionValuesToUpdate: [OptionValueUpdateInput!],
  $optionValuesToDelete: [ID!]
  $variantStrategy: ProductOptionUpdateVariantStrategy
) {
  productOptionUpdate(
    productId: $productId,
    option: $option,
    optionValuesToAdd: $optionValuesToAdd,
    optionValuesToUpdate: $optionValuesToUpdate,
    optionValuesToDelete: $optionValuesToDelete,
    variantStrategy: $variantStrategy
  ) {
    userErrors { field message code }
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
          selectedOptions { name, value }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481063",
  "option": {
    "id": "gid://shopify/ProductOption/1064576526"
  },
  "optionValuesToAdd": [
    {
      "name": "Yellow"
    },
    {
      "name": "Red"
    }
  ],
  "optionValuesToUpdate": [
    {
      "id": "gid://shopify/ProductOptionValue/1054672275",
      "name": "Purple"
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
"query": "mutation updateOption( $productId: ID!, $option: OptionUpdateInput!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!] $variantStrategy: ProductOptionUpdateVariantStrategy ) { productOptionUpdate( productId: $productId, option: $option, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete, variantStrategy: $variantStrategy ) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name, value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481063",
    "option": {
      "id": "gid://shopify/ProductOption/1064576526"
    },
    "optionValuesToAdd": [
      {
        "name": "Yellow"
      },
      {
        "name": "Red"
      }
    ],
    "optionValuesToUpdate": [
      {
        "id": "gid://shopify/ProductOptionValue/1054672275",
        "name": "Purple"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481063",
        "option": {
            "id": "gid://shopify/ProductOption/1064576526"
        },
        "optionValuesToAdd": [
            {
                "name": "Yellow"
            },
            {
                "name": "Red"
            }
        ],
        "optionValuesToUpdate": [
            {
                "id": "gid://shopify/ProductOptionValue/1054672275",
                "name": "Purple"
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
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481063",
  "option": {
    "id": "gid://shopify/ProductOption/1064576526"
  },
  "optionValuesToAdd": [
    {
      "name": "Yellow"
    },
    {
      "name": "Red"
    }
  ],
  "optionValuesToUpdate": [
    {
      "id": "gid://shopify/ProductOptionValue/1054672275",
      "name": "Purple"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateOption(
      $productId: ID!,
      $option: OptionUpdateInput!,
      $optionValuesToAdd: [OptionValueCreateInput!],
      $optionValuesToUpdate: [OptionValueUpdateInput!],
      $optionValuesToDelete: [ID!]
      $variantStrategy: ProductOptionUpdateVariantStrategy
    ) {
      productOptionUpdate(
        productId: $productId,
        option: $option,
        optionValuesToAdd: $optionValuesToAdd,
        optionValuesToUpdate: $optionValuesToUpdate,
        optionValuesToDelete: $optionValuesToDelete,
        variantStrategy: $variantStrategy
      ) {
        userErrors { field message code }
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
              selectedOptions { name, value }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481063",
        "option": {
            "id": "gid://shopify/ProductOption/1064576526"
        },
        "optionValuesToAdd": [
            {
                "name": "Yellow"
            },
            {
                "name": "Red"
            }
        ],
        "optionValuesToUpdate": [
            {
                "id": "gid://shopify/ProductOptionValue/1054672275",
                "name": "Purple"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionUpdate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481063",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576526",
          "name": "Color",
          "values": [
            "Purple"
          ],
          "position": 1,
          "optionValues": [
            {
              "name": "Purple",
              "hasVariants": true
            },
            {
              "name": "Yellow",
              "hasVariants": false
            },
            {
              "name": "Red",
              "hasVariants": false
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070325103",
            "title": "Purple",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Purple"
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### Update the values of an option linked to a metafield

#### Description

Update the values of a [product option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) that's linked to a [metafield](https://shopify.dev/docs/apps/build/custom-data). This example demonstrates how to use the `linkedMetafieldValue` field to associate [metaobjects](https://shopify.dev/docs/apps/build/custom-data) with option values, ensuring that each value references a valid metaobject for the linked metafield. The response returns the product's options, including the linked metafield details and the updated option values, each with its name and associated metafield value. [Learn more about metafield-linked product options](https://shopify.dev/api/admin/migrate/new-product-model/metafield-linked).

#### Query

```graphql
mutation updateOption(
  $productId: ID!,
  $option: OptionUpdateInput!,
  $optionValuesToAdd: [OptionValueCreateInput!],
  $optionValuesToUpdate: [OptionValueUpdateInput!],
  $optionValuesToDelete: [ID!]
) {
  productOptionUpdate(
    productId: $productId,
    option: $option,
    optionValuesToAdd: $optionValuesToAdd,
    optionValuesToUpdate: $optionValuesToUpdate,
    optionValuesToDelete: $optionValuesToDelete
  ) {
    userErrors { field message code }
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
  "productId": "gid://shopify/Product/1072481065",
  "option": {
    "id": "gid://shopify/ProductOption/1064576528"
  },
  "optionValuesToAdd": [
    {
      "linkedMetafieldValue": "gid://shopify/Metaobject/971662473"
    }
  ],
  "optionValuesToUpdate": [
    {
      "id": "gid://shopify/ProductOptionValue/1054672281",
      "linkedMetafieldValue": "gid://shopify/Metaobject/971662474"
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
"query": "mutation updateOption( $productId: ID!, $option: OptionUpdateInput!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!] ) { productOptionUpdate( productId: $productId, option: $option, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete ) { userErrors { field message code } product { options { name linkedMetafield { namespace key } optionValues { name linkedMetafieldValue } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481065",
    "option": {
      "id": "gid://shopify/ProductOption/1064576528"
    },
    "optionValuesToAdd": [
      {
        "linkedMetafieldValue": "gid://shopify/Metaobject/971662473"
      }
    ],
    "optionValuesToUpdate": [
      {
        "id": "gid://shopify/ProductOptionValue/1054672281",
        "linkedMetafieldValue": "gid://shopify/Metaobject/971662474"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete
    ) {
      userErrors { field message code }
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
        "productId": "gid://shopify/Product/1072481065",
        "option": {
            "id": "gid://shopify/ProductOption/1064576528"
        },
        "optionValuesToAdd": [
            {
                "linkedMetafieldValue": "gid://shopify/Metaobject/971662473"
            }
        ],
        "optionValuesToUpdate": [
            {
                "id": "gid://shopify/ProductOptionValue/1054672281",
                "linkedMetafieldValue": "gid://shopify/Metaobject/971662474"
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
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete
    ) {
      userErrors { field message code }
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
  "productId": "gid://shopify/Product/1072481065",
  "option": {
    "id": "gid://shopify/ProductOption/1064576528"
  },
  "optionValuesToAdd": [
    {
      "linkedMetafieldValue": "gid://shopify/Metaobject/971662473"
    }
  ],
  "optionValuesToUpdate": [
    {
      "id": "gid://shopify/ProductOptionValue/1054672281",
      "linkedMetafieldValue": "gid://shopify/Metaobject/971662474"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateOption(
      $productId: ID!,
      $option: OptionUpdateInput!,
      $optionValuesToAdd: [OptionValueCreateInput!],
      $optionValuesToUpdate: [OptionValueUpdateInput!],
      $optionValuesToDelete: [ID!]
    ) {
      productOptionUpdate(
        productId: $productId,
        option: $option,
        optionValuesToAdd: $optionValuesToAdd,
        optionValuesToUpdate: $optionValuesToUpdate,
        optionValuesToDelete: $optionValuesToDelete
      ) {
        userErrors { field message code }
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
        "productId": "gid://shopify/Product/1072481065",
        "option": {
            "id": "gid://shopify/ProductOption/1064576528"
        },
        "optionValuesToAdd": [
            {
                "linkedMetafieldValue": "gid://shopify/Metaobject/971662473"
            }
        ],
        "optionValuesToUpdate": [
            {
                "id": "gid://shopify/ProductOptionValue/1054672281",
                "linkedMetafieldValue": "gid://shopify/Metaobject/971662474"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionUpdate": {
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
              "name": "White",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662474"
            },
            {
              "name": "Blue",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662472"
            },
            {
              "name": "Yellow",
              "linkedMetafieldValue": "gid://shopify/Metaobject/971662473"
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Replace an option value with another value

#### Description

Replace an existing [option value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) with a new name and add the old name as a new value. In this example, the value "Small" is renamed to "Medium", and "Small" is re-added as a new value without any associated variants. The response returns the product's ID, the updated options (with their names, positions, and values), and the product variants reflecting the new value assignments.

#### Query

```graphql
mutation updateOption(
  $productId: ID!,
  $option: OptionUpdateInput!,
  $optionValuesToAdd: [OptionValueCreateInput!],
  $optionValuesToUpdate: [OptionValueUpdateInput!],
  $optionValuesToDelete: [ID!]
  $variantStrategy: ProductOptionUpdateVariantStrategy
) {
  productOptionUpdate(
    productId: $productId,
    option: $option,
    optionValuesToAdd: $optionValuesToAdd,
    optionValuesToUpdate: $optionValuesToUpdate,
    optionValuesToDelete: $optionValuesToDelete,
    variantStrategy: $variantStrategy
  ) {
    userErrors { field message code }
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
          selectedOptions { name, value }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481069",
  "option": {
    "id": "gid://shopify/ProductOption/1064576533"
  },
  "optionValuesToAdd": [
    {
      "name": "Small"
    }
  ],
  "optionValuesToUpdate": [
    {
      "id": "gid://shopify/ProductOptionValue/1054672293",
      "name": "Medium"
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
"query": "mutation updateOption( $productId: ID!, $option: OptionUpdateInput!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!] $variantStrategy: ProductOptionUpdateVariantStrategy ) { productOptionUpdate( productId: $productId, option: $option, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete, variantStrategy: $variantStrategy ) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name, value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481069",
    "option": {
      "id": "gid://shopify/ProductOption/1064576533"
    },
    "optionValuesToAdd": [
      {
        "name": "Small"
      }
    ],
    "optionValuesToUpdate": [
      {
        "id": "gid://shopify/ProductOptionValue/1054672293",
        "name": "Medium"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481069",
        "option": {
            "id": "gid://shopify/ProductOption/1064576533"
        },
        "optionValuesToAdd": [
            {
                "name": "Small"
            }
        ],
        "optionValuesToUpdate": [
            {
                "id": "gid://shopify/ProductOptionValue/1054672293",
                "name": "Medium"
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
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481069",
  "option": {
    "id": "gid://shopify/ProductOption/1064576533"
  },
  "optionValuesToAdd": [
    {
      "name": "Small"
    }
  ],
  "optionValuesToUpdate": [
    {
      "id": "gid://shopify/ProductOptionValue/1054672293",
      "name": "Medium"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateOption(
      $productId: ID!,
      $option: OptionUpdateInput!,
      $optionValuesToAdd: [OptionValueCreateInput!],
      $optionValuesToUpdate: [OptionValueUpdateInput!],
      $optionValuesToDelete: [ID!]
      $variantStrategy: ProductOptionUpdateVariantStrategy
    ) {
      productOptionUpdate(
        productId: $productId,
        option: $option,
        optionValuesToAdd: $optionValuesToAdd,
        optionValuesToUpdate: $optionValuesToUpdate,
        optionValuesToDelete: $optionValuesToDelete,
        variantStrategy: $variantStrategy
      ) {
        userErrors { field message code }
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
              selectedOptions { name, value }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481069",
        "option": {
            "id": "gid://shopify/ProductOption/1064576533"
        },
        "optionValuesToAdd": [
            {
                "name": "Small"
            }
        ],
        "optionValuesToUpdate": [
            {
                "id": "gid://shopify/ProductOptionValue/1054672293",
                "name": "Medium"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionUpdate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481069",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576532",
          "name": "Color",
          "values": [
            "Blue",
            "Green"
          ],
          "position": 1,
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
        },
        {
          "id": "gid://shopify/ProductOption/1064576533",
          "name": "Size",
          "values": [
            "Medium"
          ],
          "position": 2,
          "optionValues": [
            {
              "name": "Medium",
              "hasVariants": true
            },
            {
              "name": "Small",
              "hasVariants": false
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070325113",
            "title": "Blue / Medium",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              },
              {
                "name": "Size",
                "value": "Medium"
              }
            ]
          },
          {
            "id": "gid://shopify/ProductVariant/1070325114",
            "title": "Green / Medium",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Green"
              },
              {
                "name": "Size",
                "value": "Medium"
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### Adding a duplicate name for an option value returns an error

#### Description

This example demonstrates an attempt to add a new [option value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) with a name that already exists for the option. The mutation demonstrates the validation that prevents duplicate option value names within the same option. The response returns the product's ID and a user error indicating that the option value already exists, without modifying the existing option values.

#### Query

```graphql
mutation updateOption(
  $productId: ID!,
  $option: OptionUpdateInput!,
  $optionValuesToAdd: [OptionValueCreateInput!],
  $optionValuesToUpdate: [OptionValueUpdateInput!],
  $optionValuesToDelete: [ID!]
  $variantStrategy: ProductOptionUpdateVariantStrategy
) {
  productOptionUpdate(
    productId: $productId,
    option: $option,
    optionValuesToAdd: $optionValuesToAdd,
    optionValuesToUpdate: $optionValuesToUpdate,
    optionValuesToDelete: $optionValuesToDelete,
    variantStrategy: $variantStrategy
  ) {
    userErrors { field message code }
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
          selectedOptions { name, value }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481067",
  "option": {
    "id": "gid://shopify/ProductOption/1064576530"
  },
  "optionValuesToAdd": [
    {
      "name": "Red"
    },
    {
      "name": "Blue"
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
"query": "mutation updateOption( $productId: ID!, $option: OptionUpdateInput!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!] $variantStrategy: ProductOptionUpdateVariantStrategy ) { productOptionUpdate( productId: $productId, option: $option, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete, variantStrategy: $variantStrategy ) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name, value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481067",
    "option": {
      "id": "gid://shopify/ProductOption/1064576530"
    },
    "optionValuesToAdd": [
      {
        "name": "Red"
      },
      {
        "name": "Blue"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481067",
        "option": {
            "id": "gid://shopify/ProductOption/1064576530"
        },
        "optionValuesToAdd": [
            {
                "name": "Red"
            },
            {
                "name": "Blue"
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
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481067",
  "option": {
    "id": "gid://shopify/ProductOption/1064576530"
  },
  "optionValuesToAdd": [
    {
      "name": "Red"
    },
    {
      "name": "Blue"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateOption(
      $productId: ID!,
      $option: OptionUpdateInput!,
      $optionValuesToAdd: [OptionValueCreateInput!],
      $optionValuesToUpdate: [OptionValueUpdateInput!],
      $optionValuesToDelete: [ID!]
      $variantStrategy: ProductOptionUpdateVariantStrategy
    ) {
      productOptionUpdate(
        productId: $productId,
        option: $option,
        optionValuesToAdd: $optionValuesToAdd,
        optionValuesToUpdate: $optionValuesToUpdate,
        optionValuesToDelete: $optionValuesToDelete,
        variantStrategy: $variantStrategy
      ) {
        userErrors { field message code }
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
              selectedOptions { name, value }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481067",
        "option": {
            "id": "gid://shopify/ProductOption/1064576530"
        },
        "optionValuesToAdd": [
            {
                "name": "Red"
            },
            {
                "name": "Blue"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productOptionUpdate": {
    "userErrors": [
      {
        "field": [
          "optionValuesToAdd",
          "1",
          "name"
        ],
        "message": "Option value already exists.",
        "code": "OPTION_VALUE_ALREADY_EXISTS"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/1072481067",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064576530",
          "name": "Color",
          "values": [
            "Blue"
          ],
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054672288",
              "name": "Blue",
              "hasVariants": true
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070325110",
            "title": "Blue",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Blue"
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### productOptionUpdate reference

Examples
--------

Update the name and position of a product option

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateOption(%0A%20%20%24productId%3A%20ID!%2C%0A%20%20%24option%3A%20OptionUpdateInput!%2C%0A%20%20%24optionValuesToAdd%3A%20%5BOptionValueCreateInput!%5D%2C%0A%20%20%24optionValuesToUpdate%3A%20%5BOptionValueUpdateInput!%5D%2C%0A%20%20%24optionValuesToDelete%3A%20%5BID!%5D%0A%20%20%24variantStrategy%3A%20ProductOptionUpdateVariantStrategy%0A)%20%7B%0A%20%20productOptionUpdate(%0A%20%20%20%20productId%3A%20%24productId%2C%0A%20%20%20%20option%3A%20%24option%2C%0A%20%20%20%20optionValuesToAdd%3A%20%24optionValuesToAdd%2C%0A%20%20%20%20optionValuesToUpdate%3A%20%24optionValuesToUpdate%2C%0A%20%20%20%20optionValuesToDelete%3A%20%24optionValuesToDelete%2C%0A%20%20%20%20variantStrategy%3A%20%24variantStrategy%0A%20%20)%20%7B%0A%20%20%20%20userErrors%20%7B%20field%20message%20code%20%7D%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20options%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20values%0A%20%20%20%20%20%20%20%20position%0A%20%20%20%20%20%20%20%20optionValues%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20hasVariants%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20variants(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20selectedOptions%20%7B%20name%2C%20value%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F1072481071%22%2C%0A%20%20%22option%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductOption%2F1064576536%22%2C%0A%20%20%20%20%22position%22%3A%201%2C%0A%20%20%20%20%22name%22%3A%20%22Tint%22%0A%20%20%7D%0A%7D)Copy

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

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation updateOption(

 $productId: ID!,

 $option: OptionUpdateInput!,

 $optionValuesToAdd: [OptionValueCreateInput!],

 $optionValuesToUpdate: [OptionValueUpdateInput!],

 $optionValuesToDelete: [ID!]

 $variantStrategy: ProductOptionUpdateVariantStrategy

 ) {

 productOptionUpdate(

 productId: $productId,

 option: $option,

 optionValuesToAdd: $optionValuesToAdd,

 optionValuesToUpdate: $optionValuesToUpdate,

 optionValuesToDelete: $optionValuesToDelete,

 variantStrategy: $variantStrategy

 ) {

 userErrors { field message code }

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

 selectedOptions { name, value }

 }

 }

 }

 }

 }`,

{

variables:{

"productId":"gid://shopify/Product/1072481071",

"option":{

"id":"gid://shopify/ProductOption/1064576536",

"position":1,

"name":"Tint"

}

},

},

);

const data=await response.json();

```
mutation updateOption(
  $productId: ID!,
  $option: OptionUpdateInput!,
  $optionValuesToAdd: [OptionValueCreateInput!],
  $optionValuesToUpdate: [OptionValueUpdateInput!],
  $optionValuesToDelete: [ID!]
  $variantStrategy: ProductOptionUpdateVariantStrategy
) {
  productOptionUpdate(
    productId: $productId,
    option: $option,
    optionValuesToAdd: $optionValuesToAdd,
    optionValuesToUpdate: $optionValuesToUpdate,
    optionValuesToDelete: $optionValuesToDelete,
    variantStrategy: $variantStrategy
  ) {
    userErrors { field message code }
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
          selectedOptions { name, value }
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
"query": "mutation updateOption( $productId: ID!, $option: OptionUpdateInput!, $optionValuesToAdd: [OptionValueCreateInput!], $optionValuesToUpdate: [OptionValueUpdateInput!], $optionValuesToDelete: [ID!] $variantStrategy: ProductOptionUpdateVariantStrategy ) { productOptionUpdate( productId: $productId, option: $option, optionValuesToAdd: $optionValuesToAdd, optionValuesToUpdate: $optionValuesToUpdate, optionValuesToDelete: $optionValuesToDelete, variantStrategy: $variantStrategy ) { userErrors { field message code } product { id options { id name values position optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name, value } } } } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481071",
    "option": {
      "id": "gid://shopify/ProductOption/1064576536",
      "position": 1,
      "name": "Tint"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481071",
        "option": {
            "id": "gid://shopify/ProductOption/1064576536",
            "position": 1,
            "name": "Tint"
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
    "query": `mutation updateOption(
      $productId: ID!,
      $option: OptionUpdateInput!,
      $optionValuesToAdd: [OptionValueCreateInput!],
      $optionValuesToUpdate: [OptionValueUpdateInput!],
      $optionValuesToDelete: [ID!]
      $variantStrategy: ProductOptionUpdateVariantStrategy
    ) {
      productOptionUpdate(
        productId: $productId,
        option: $option,
        optionValuesToAdd: $optionValuesToAdd,
        optionValuesToUpdate: $optionValuesToUpdate,
        optionValuesToDelete: $optionValuesToDelete,
        variantStrategy: $variantStrategy
      ) {
        userErrors { field message code }
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
              selectedOptions { name, value }
            }
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481071",
        "option": {
            "id": "gid://shopify/ProductOption/1064576536",
            "position": 1,
            "name": "Tint"
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
  mutation updateOption(
    $productId: ID!,
    $option: OptionUpdateInput!,
    $optionValuesToAdd: [OptionValueCreateInput!],
    $optionValuesToUpdate: [OptionValueUpdateInput!],
    $optionValuesToDelete: [ID!]
    $variantStrategy: ProductOptionUpdateVariantStrategy
  ) {
    productOptionUpdate(
      productId: $productId,
      option: $option,
      optionValuesToAdd: $optionValuesToAdd,
      optionValuesToUpdate: $optionValuesToUpdate,
      optionValuesToDelete: $optionValuesToDelete,
      variantStrategy: $variantStrategy
    ) {
      userErrors { field message code }
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
            selectedOptions { name, value }
          }
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481071",
  "option": {
    "id": "gid://shopify/ProductOption/1064576536",
    "position": 1,
    "name": "Tint"
  }
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

7

8

›

⌄

⌄

{

"productId": "gid://shopify/Product/1072481071",

"option": {

"id": "gid://shopify/ProductOption/1064576536",

"position": 1,

"name": "Tint"

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

"productOptionUpdate": {

"userErrors": [],

"product": {

"id": "gid://shopify/Product/1072481071",

"options": [

{

"id": "gid://shopify/ProductOption/1064576536",

"name": "Tint",

"values": [

"Blue",

"Red"

],

"position": 1,

"optionValues": [

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

"id": "gid://shopify/ProductOption/1064576535",

"name": "Size",

"values": [

"Small",

"Medium"

],

"position": 2,

"optionValues": [

{

"name": "Small",


---
*Content truncated at "Updates" section*