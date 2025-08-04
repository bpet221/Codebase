---
title: "productSet"
description: "Shopify GraphQL Admin API documentation for productset"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productSet - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset

Markdown Content:
productSet - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#main-content)

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

[Anchor to productSet](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#top)
product Set
===========

mutation

Requires `write_products` access scope. Also: The user must have a permission to create products.

Performs multiple operations to create or update products in a single request.

Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

The behavior of `productSet` depends on the type of field it's modifying:

*   **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

*   **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to create or update a maximum of 2,048 product variants in a single operation.

* * *

You can run `productSet` in one of the following modes:

*   **Synchronously**: Returns the updated product in the response.
*   **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

If you need to only manage product variants, then use one of the following mutations:

*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

If you need to only manage product options, then use one of the following mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#arguments-identifier)identifier

•[Product Set Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

Specifies the identifier that will be used to lookup the resource.

Show input fields

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#arguments-input)input

•[Product Set Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput)

required

The properties of the newly created or updated product.

Show input fields

[Anchor to synchronous](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#arguments-synchronous)synchronous

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Whether the mutation should be run synchronously or asynchronously.

If `true`, the mutation will return the updated `product`.

If `false`, the mutation will return a `productSetOperation`.

Defaults to `true`.

Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.

**Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.

* * *

Was this section helpful?

Yes No

[Anchor to ProductSetPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#returns)Product Set Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product object.

Show fields

[Anchor to productSetOperation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#returns-productSetOperation)product Set Operation

•[Product Set Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation)

The product set operation, returned when run in asynchronous mode.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset#returns-userErrors)user Errors

•[[Product Set User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Asynchronously create a product with two variants

#### Description

Create a product with two variants asynchronously using different [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue). This example returns a [`productSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) with the status `CREATED`.

#### Query

```graphql
mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
  productSet(synchronous: $synchronous, input: $productSet) {
    product {
      id
    }
    productSetOperation {
      id
      status
      userErrors {
        code
        field
        message
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
  "synchronous": false,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "price": 79.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "price": 69.99
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
"query": "mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) { productSet(synchronous: $synchronous, input: $productSet) { product { id } productSetOperation { id status userErrors { code field message } } userErrors { code field message } } }",
 "variables": {
    "synchronous": false,
    "productSet": {
      "title": "Winter hat",
      "productOptions": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            {
              "name": "Grey"
            },
            {
              "name": "Black"
            }
          ]
        }
      ],
      "variants": [
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Grey"
            }
          ],
          "price": 79.99
        },
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Black"
            }
          ],
          "price": 69.99
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
  mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
      }
      productSetOperation {
        id
        status
        userErrors {
          code
          field
          message
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
        "synchronous": false,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "price": 79.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "price": 69.99
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
  mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
      }
      productSetOperation {
        id
        status
        userErrors {
          code
          field
          message
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
  "synchronous": false,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "price": 79.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "price": 69.99
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
    "query": `mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
      productSet(synchronous: $synchronous, input: $productSet) {
        product {
          id
        }
        productSetOperation {
          id
          status
          userErrors {
            code
            field
            message
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
        "synchronous": false,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "price": 79.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "price": 69.99
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": null,
    "productSetOperation": {
      "id": "gid://shopify/ProductSetOperation/1010603851",
      "status": "CREATED",
      "userErrors": []
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product and associate files

#### Description

Create a product and associate file attachments (like images or videos). This example returns the product and its associated image files.

#### Query

```graphql
mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
  productSet(synchronous: $synchronous, input: $productSet) {
    product {
      id
      media(first: 5) {
        nodes {
          id
          alt
          mediaContentType
          status
        }
      }
      variants(first: 5) {
        nodes {
          title
          price
          media(first: 5) {
            nodes {
              id
              alt
              mediaContentType
              status
            }
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
  "synchronous": true,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "files": [
      {
        "originalSource": "https://example.com/hats/grey-hat.jpg",
        "alt": "An elegant grey hat",
        "filename": "grey-hat.jpg",
        "contentType": "IMAGE"
      },
      {
        "originalSource": "https://example.com/hats/black-hat.jpg",
        "alt": "An elegant black hat",
        "filename": "black-hat.jpg",
        "contentType": "IMAGE"
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "file": {
          "originalSource": "https://example.com/hats/grey-hat.jpg",
          "alt": "An elegant grey hat",
          "filename": "grey-hat.jpg",
          "contentType": "IMAGE"
        },
        "price": 11.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "file": {
          "originalSource": "https://example.com/hats/black-hat.jpg",
          "alt": "An elegant black hat",
          "filename": "black-hat.jpg",
          "contentType": "IMAGE"
        },
        "price": 11.99
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
"query": "mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) { productSet(synchronous: $synchronous, input: $productSet) { product { id media(first: 5) { nodes { id alt mediaContentType status } } variants(first: 5) { nodes { title price media(first: 5) { nodes { id alt mediaContentType status } } } } } userErrors { field message } } }",
 "variables": {
    "synchronous": true,
    "productSet": {
      "title": "Winter hat",
      "productOptions": [
        {
          "name": "Color",
          "values": [
            {
              "name": "Grey"
            },
            {
              "name": "Black"
            }
          ]
        }
      ],
      "files": [
        {
          "originalSource": "https://example.com/hats/grey-hat.jpg",
          "alt": "An elegant grey hat",
          "filename": "grey-hat.jpg",
          "contentType": "IMAGE"
        },
        {
          "originalSource": "https://example.com/hats/black-hat.jpg",
          "alt": "An elegant black hat",
          "filename": "black-hat.jpg",
          "contentType": "IMAGE"
        }
      ],
      "variants": [
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Grey"
            }
          ],
          "file": {
            "originalSource": "https://example.com/hats/grey-hat.jpg",
            "alt": "An elegant grey hat",
            "filename": "grey-hat.jpg",
            "contentType": "IMAGE"
          },
          "price": 11.99
        },
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Black"
            }
          ],
          "file": {
            "originalSource": "https://example.com/hats/black-hat.jpg",
            "alt": "An elegant black hat",
            "filename": "black-hat.jpg",
            "contentType": "IMAGE"
          },
          "price": 11.99
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
  mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
        media(first: 5) {
          nodes {
            id
            alt
            mediaContentType
            status
          }
        }
        variants(first: 5) {
          nodes {
            title
            price
            media(first: 5) {
              nodes {
                id
                alt
                mediaContentType
                status
              }
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
        "synchronous": true,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "files": [
                {
                    "originalSource": "https://example.com/hats/grey-hat.jpg",
                    "alt": "An elegant grey hat",
                    "filename": "grey-hat.jpg",
                    "contentType": "IMAGE"
                },
                {
                    "originalSource": "https://example.com/hats/black-hat.jpg",
                    "alt": "An elegant black hat",
                    "filename": "black-hat.jpg",
                    "contentType": "IMAGE"
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "file": {
                        "originalSource": "https://example.com/hats/grey-hat.jpg",
                        "alt": "An elegant grey hat",
                        "filename": "grey-hat.jpg",
                        "contentType": "IMAGE"
                    },
                    "price": 11.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "file": {
                        "originalSource": "https://example.com/hats/black-hat.jpg",
                        "alt": "An elegant black hat",
                        "filename": "black-hat.jpg",
                        "contentType": "IMAGE"
                    },
                    "price": 11.99
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
  mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
        media(first: 5) {
          nodes {
            id
            alt
            mediaContentType
            status
          }
        }
        variants(first: 5) {
          nodes {
            title
            price
            media(first: 5) {
              nodes {
                id
                alt
                mediaContentType
                status
              }
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
  "synchronous": true,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "files": [
      {
        "originalSource": "https://example.com/hats/grey-hat.jpg",
        "alt": "An elegant grey hat",
        "filename": "grey-hat.jpg",
        "contentType": "IMAGE"
      },
      {
        "originalSource": "https://example.com/hats/black-hat.jpg",
        "alt": "An elegant black hat",
        "filename": "black-hat.jpg",
        "contentType": "IMAGE"
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "file": {
          "originalSource": "https://example.com/hats/grey-hat.jpg",
          "alt": "An elegant grey hat",
          "filename": "grey-hat.jpg",
          "contentType": "IMAGE"
        },
        "price": 11.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "file": {
          "originalSource": "https://example.com/hats/black-hat.jpg",
          "alt": "An elegant black hat",
          "filename": "black-hat.jpg",
          "contentType": "IMAGE"
        },
        "price": 11.99
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
    "query": `mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
      productSet(synchronous: $synchronous, input: $productSet) {
        product {
          id
          media(first: 5) {
            nodes {
              id
              alt
              mediaContentType
              status
            }
          }
          variants(first: 5) {
            nodes {
              title
              price
              media(first: 5) {
                nodes {
                  id
                  alt
                  mediaContentType
                  status
                }
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
        "synchronous": true,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "files": [
                {
                    "originalSource": "https://example.com/hats/grey-hat.jpg",
                    "alt": "An elegant grey hat",
                    "filename": "grey-hat.jpg",
                    "contentType": "IMAGE"
                },
                {
                    "originalSource": "https://example.com/hats/black-hat.jpg",
                    "alt": "An elegant black hat",
                    "filename": "black-hat.jpg",
                    "contentType": "IMAGE"
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "file": {
                        "originalSource": "https://example.com/hats/grey-hat.jpg",
                        "alt": "An elegant grey hat",
                        "filename": "grey-hat.jpg",
                        "contentType": "IMAGE"
                    },
                    "price": 11.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "file": {
                        "originalSource": "https://example.com/hats/black-hat.jpg",
                        "alt": "An elegant black hat",
                        "filename": "black-hat.jpg",
                        "contentType": "IMAGE"
                    },
                    "price": 11.99
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/1072481957",
      "media": {
        "nodes": [
          {
            "alt": "An elegant grey hat",
            "mediaContentType": "IMAGE",
            "status": "UPLOADED"
          },
          {
            "alt": "An elegant black hat",
            "mediaContentType": "IMAGE",
            "status": "UPLOADED"
          }
        ]
      },
      "variants": {
        "nodes": [
          {
            "title": "Grey",
            "price": "11.99",
            "media": {
              "nodes": [
                {
                  "alt": "An elegant grey hat",
                  "mediaContentType": "IMAGE",
                  "status": "UPLOADED"
                }
              ]
            }
          },
          {
            "title": "Black",
            "price": "11.99",
            "media": {
              "nodes": [
                {
                  "alt": "An elegant black hat",
                  "mediaContentType": "IMAGE",
                  "status": "UPLOADED"
                }
              ]
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with customized inventory quantities

#### Description

Create a product with [inventory quantities](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states). This example returns the product with the specified inventory quantities configured for the variants.

#### Query

```graphql
mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
  productSet(synchronous: $synchronous, input: $productSet) {
    product {
      id
      variants(first: 5) {
        nodes {
          title
          price
          inventoryQuantity
          inventoryItem {
            inventoryLevels(first: 5) {
              nodes {
                location {
                  id
                  name
                }
              }
            }
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
  "synchronous": true,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "inventoryQuantities": [
          {
            "locationId": "gid://shopify/Location/415211365",
            "name": "available",
            "quantity": 12
          },
          {
            "locationId": "gid://shopify/Location/346779380",
            "name": "available",
            "quantity": 19
          }
        ],
        "price": 79.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "inventoryQuantities": [
          {
            "locationId": "gid://shopify/Location/346779380",
            "name": "available",
            "quantity": 976
          },
          {
            "locationId": "gid://shopify/Location/415211365",
            "name": "available",
            "quantity": 844
          }
        ],
        "price": 11.99
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
"query": "mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) { productSet(synchronous: $synchronous, input: $productSet) { product { id variants(first: 5) { nodes { title price inventoryQuantity inventoryItem { inventoryLevels(first: 5) { nodes { location { id name } } } } } } } userErrors { field message } } }",
 "variables": {
    "synchronous": true,
    "productSet": {
      "title": "Winter hat",
      "productOptions": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            {
              "name": "Grey"
            },
            {
              "name": "Black"
            }
          ]
        }
      ],
      "variants": [
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Grey"
            }
          ],
          "inventoryQuantities": [
            {
              "locationId": "gid://shopify/Location/415211365",
              "name": "available",
              "quantity": 12
            },
            {
              "locationId": "gid://shopify/Location/346779380",
              "name": "available",
              "quantity": 19
            }
          ],
          "price": 79.99
        },
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Black"
            }
          ],
          "inventoryQuantities": [
            {
              "locationId": "gid://shopify/Location/346779380",
              "name": "available",
              "quantity": 976
            },
            {
              "locationId": "gid://shopify/Location/415211365",
              "name": "available",
              "quantity": 844
            }
          ],
          "price": 11.99
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
  mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
        variants(first: 5) {
          nodes {
            title
            price
            inventoryQuantity
            inventoryItem {
              inventoryLevels(first: 5) {
                nodes {
                  location {
                    id
                    name
                  }
                }
              }
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
        "synchronous": true,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "inventoryQuantities": [
                        {
                            "locationId": "gid://shopify/Location/415211365",
                            "name": "available",
                            "quantity": 12
                        },
                        {
                            "locationId": "gid://shopify/Location/346779380",
                            "name": "available",
                            "quantity": 19
                        }
                    ],
                    "price": 79.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "inventoryQuantities": [
                        {
                            "locationId": "gid://shopify/Location/346779380",
                            "name": "available",
                            "quantity": 976
                        },
                        {
                            "locationId": "gid://shopify/Location/415211365",
                            "name": "available",
                            "quantity": 844
                        }
                    ],
                    "price": 11.99
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
  mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
        variants(first: 5) {
          nodes {
            title
            price
            inventoryQuantity
            inventoryItem {
              inventoryLevels(first: 5) {
                nodes {
                  location {
                    id
                    name
                  }
                }
              }
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
  "synchronous": true,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "inventoryQuantities": [
          {
            "locationId": "gid://shopify/Location/415211365",
            "name": "available",
            "quantity": 12
          },
          {
            "locationId": "gid://shopify/Location/346779380",
            "name": "available",
            "quantity": 19
          }
        ],
        "price": 79.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "inventoryQuantities": [
          {
            "locationId": "gid://shopify/Location/346779380",
            "name": "available",
            "quantity": 976
          },
          {
            "locationId": "gid://shopify/Location/415211365",
            "name": "available",
            "quantity": 844
          }
        ],
        "price": 11.99
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
    "query": `mutation createProduct($productSet: ProductSetInput!, $synchronous: Boolean!) {
      productSet(synchronous: $synchronous, input: $productSet) {
        product {
          id
          variants(first: 5) {
            nodes {
              title
              price
              inventoryQuantity
              inventoryItem {
                inventoryLevels(first: 5) {
                  nodes {
                    location {
                      id
                      name
                    }
                  }
                }
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
        "synchronous": true,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "inventoryQuantities": [
                        {
                            "locationId": "gid://shopify/Location/415211365",
                            "name": "available",
                            "quantity": 12
                        },
                        {
                            "locationId": "gid://shopify/Location/346779380",
                            "name": "available",
                            "quantity": 19
                        }
                    ],
                    "price": 79.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "inventoryQuantities": [
                        {
                            "locationId": "gid://shopify/Location/346779380",
                            "name": "available",
                            "quantity": 976
                        },
                        {
                            "locationId": "gid://shopify/Location/415211365",
                            "name": "available",
                            "quantity": 844
                        }
                    ],
                    "price": 11.99
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/1072481937",
      "variants": {
        "nodes": [
          {
            "title": "Grey",
            "price": "79.99",
            "inventoryQuantity": 31,
            "inventoryItem": {
              "inventoryLevels": {
                "nodes": [
                  {
                    "location": {
                      "id": "gid://shopify/Location/346779380",
                      "name": "Ottawa Store"
                    }
                  },
                  {
                    "location": {
                      "id": "gid://shopify/Location/415211365",
                      "name": "US Store"
                    }
                  }
                ]
              }
            }
          },
          {
            "title": "Black",
            "price": "11.99",
            "inventoryQuantity": 1820,
            "inventoryItem": {
              "inventoryLevels": {
                "nodes": [
                  {
                    "location": {
                      "id": "gid://shopify/Location/346779380",
                      "name": "Ottawa Store"
                    }
                  },
                  {
                    "location": {
                      "id": "gid://shopify/Location/415211365",
                      "name": "US Store"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with two options and four variants

#### Description

Create a product with [multiple options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and all possible [variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) combinations. This example returns a product with two options and four variants, representing all [option value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) combinations.

#### Query

```graphql
mutation createProductWithTwoOptionsAndVariants($productSet: ProductSetInput!, $synchronous: Boolean!) {
  productSet(synchronous: $synchronous, input: $productSet) {
    product {
      id
      title
      options(first: 5) {
        name
        position
        optionValues {
          name
        }
      }
      variants(first: 5) {
        nodes {
          price
          selectedOptions {
            name
            optionValue {
              id
              name
            }
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
  "synchronous": true,
  "productSet": {
    "title": "A humble tie",
    "productOptions": [
      {
        "name": "Pattern",
        "position": 1,
        "values": [
          {
            "name": "Plain"
          },
          {
            "name": "Stripes"
          }
        ]
      },
      {
        "name": "Width",
        "position": 2,
        "values": [
          {
            "name": "Slim"
          },
          {
            "name": "Classic"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Plain"
          },
          {
            "optionName": "Width",
            "name": "Slim"
          }
        ],
        "price": 15
      },
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Plain"
          },
          {
            "optionName": "Width",
            "name": "Classic"
          }
        ],
        "price": 15
      },
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Stripes"
          },
          {
            "optionName": "Width",
            "name": "Slim"
          }
        ],
        "price": 15
      },
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Stripes"
          },
          {
            "optionName": "Width",
            "name": "Classic"
          }
        ],
        "price": 15
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
"query": "mutation createProductWithTwoOptionsAndVariants($productSet: ProductSetInput!, $synchronous: Boolean!) { productSet(synchronous: $synchronous, input: $productSet) { product { id title options(first: 5) { name position optionValues { name } } variants(first: 5) { nodes { price selectedOptions { name optionValue { id name } } } } } userErrors { field message } } }",
 "variables": {
    "synchronous": true,
    "productSet": {
      "title": "A humble tie",
      "productOptions": [
        {
          "name": "Pattern",
          "position": 1,
          "values": [
            {
              "name": "Plain"
            },
            {
              "name": "Stripes"
            }
          ]
        },
        {
          "name": "Width",
          "position": 2,
          "values": [
            {
              "name": "Slim"
            },
            {
              "name": "Classic"
            }
          ]
        }
      ],
      "variants": [
        {
          "optionValues": [
            {
              "optionName": "Pattern",
              "name": "Plain"
            },
            {
              "optionName": "Width",
              "name": "Slim"
            }
          ],
          "price": 15
        },
        {
          "optionValues": [
            {
              "optionName": "Pattern",
              "name": "Plain"
            },
            {
              "optionName": "Width",
              "name": "Classic"
            }
          ],
          "price": 15
        },
        {
          "optionValues": [
            {
              "optionName": "Pattern",
              "name": "Stripes"
            },
            {
              "optionName": "Width",
              "name": "Slim"
            }
          ],
          "price": 15
        },
        {
          "optionValues": [
            {
              "optionName": "Pattern",
              "name": "Stripes"
            },
            {
              "optionName": "Width",
              "name": "Classic"
            }
          ],
          "price": 15
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
  mutation createProductWithTwoOptionsAndVariants($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
        title
        options(first: 5) {
          name
          position
          optionValues {
            name
          }
        }
        variants(first: 5) {
          nodes {
            price
            selectedOptions {
              name
              optionValue {
                id
                name
              }
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
        "synchronous": true,
        "productSet": {
            "title": "A humble tie",
            "productOptions": [
                {
                    "name": "Pattern",
                    "position": 1,
                    "values": [
                        {
                            "name": "Plain"
                        },
                        {
                            "name": "Stripes"
                        }
                    ]
                },
                {
                    "name": "Width",
                    "position": 2,
                    "values": [
                        {
                            "name": "Slim"
                        },
                        {
                            "name": "Classic"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Plain"
                        },
                        {
                            "optionName": "Width",
                            "name": "Slim"
                        }
                    ],
                    "price": 15
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Plain"
                        },
                        {
                            "optionName": "Width",
                            "name": "Classic"
                        }
                    ],
                    "price": 15
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Stripes"
                        },
                        {
                            "optionName": "Width",
                            "name": "Slim"
                        }
                    ],
                    "price": 15
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Stripes"
                        },
                        {
                            "optionName": "Width",
                            "name": "Classic"
                        }
                    ],
                    "price": 15
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
  mutation createProductWithTwoOptionsAndVariants($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
        title
        options(first: 5) {
          name
          position
          optionValues {
            name
          }
        }
        variants(first: 5) {
          nodes {
            price
            selectedOptions {
              name
              optionValue {
                id
                name
              }
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
  "synchronous": true,
  "productSet": {
    "title": "A humble tie",
    "productOptions": [
      {
        "name": "Pattern",
        "position": 1,
        "values": [
          {
            "name": "Plain"
          },
          {
            "name": "Stripes"
          }
        ]
      },
      {
        "name": "Width",
        "position": 2,
        "values": [
          {
            "name": "Slim"
          },
          {
            "name": "Classic"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Plain"
          },
          {
            "optionName": "Width",
            "name": "Slim"
          }
        ],
        "price": 15
      },
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Plain"
          },
          {
            "optionName": "Width",
            "name": "Classic"
          }
        ],
        "price": 15
      },
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Stripes"
          },
          {
            "optionName": "Width",
            "name": "Slim"
          }
        ],
        "price": 15
      },
      {
        "optionValues": [
          {
            "optionName": "Pattern",
            "name": "Stripes"
          },
          {
            "optionName": "Width",
            "name": "Classic"
          }
        ],
        "price": 15
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
    "query": `mutation createProductWithTwoOptionsAndVariants($productSet: ProductSetInput!, $synchronous: Boolean!) {
      productSet(synchronous: $synchronous, input: $productSet) {
        product {
          id
          title
          options(first: 5) {
            name
            position
            optionValues {
              name
            }
          }
          variants(first: 5) {
            nodes {
              price
              selectedOptions {
                name
                optionValue {
                  id
                  name
                }
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
        "synchronous": true,
        "productSet": {
            "title": "A humble tie",
            "productOptions": [
                {
                    "name": "Pattern",
                    "position": 1,
                    "values": [
                        {
                            "name": "Plain"
                        },
                        {
                            "name": "Stripes"
                        }
                    ]
                },
                {
                    "name": "Width",
                    "position": 2,
                    "values": [
                        {
                            "name": "Slim"
                        },
                        {
                            "name": "Classic"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Plain"
                        },
                        {
                            "optionName": "Width",
                            "name": "Slim"
                        }
                    ],
                    "price": 15
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Plain"
                        },
                        {
                            "optionName": "Width",
                            "name": "Classic"
                        }
                    ],
                    "price": 15
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Stripes"
                        },
                        {
                            "optionName": "Width",
                            "name": "Slim"
                        }
                    ],
                    "price": 15
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Pattern",
                            "name": "Stripes"
                        },
                        {
                            "optionName": "Width",
                            "name": "Classic"
                        }
                    ],
                    "price": 15
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/1072481953",
      "title": "A humble tie",
      "options": [
        {
          "name": "Pattern",
          "position": 1,
          "optionValues": [
            {
              "name": "Plain"
            },
            {
              "name": "Stripes"
            }
          ]
        },
        {
          "name": "Width",
          "position": 2,
          "optionValues": [
            {
              "name": "Slim"
            },
            {
              "name": "Classic"
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "price": "15.00",
            "selectedOptions": [
              {
                "name": "Pattern",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677147",
                  "name": "Plain"
                }
              },
              {
                "name": "Width",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677149",
                  "name": "Slim"
                }
              }
            ]
          },
          {
            "price": "15.00",
            "selectedOptions": [
              {
                "name": "Pattern",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677147",
                  "name": "Plain"
                }
              },
              {
                "name": "Width",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677150",
                  "name": "Classic"
                }
              }
            ]
          },
          {
            "price": "15.00",
            "selectedOptions": [
              {
                "name": "Pattern",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677148",
                  "name": "Stripes"
                }
              },
              {
                "name": "Width",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677149",
                  "name": "Slim"
                }
              }
            ]
          },
          {
            "price": "15.00",
            "selectedOptions": [
              {
                "name": "Pattern",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677148",
                  "name": "Stripes"
                }
              },
              {
                "name": "Width",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054677150",
                  "name": "Classic"
                }
              }
            ]
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Remove custom options and variants from a product

#### Description

Remove existing [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) from a product by updating the product's configuration. This example returns the updated product, with the specified options and variants removed.

#### Query

```graphql
mutation updateProductToLeaveDefaultVariant($productSet: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
  productSet(synchronous: $synchronous, input: $productSet, identifier: $identifier) {
    product {
      id
      hasOnlyDefaultVariant
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
  "synchronous": true,
  "identifier": {
    "id": "gid://shopify/Product/20995642"
  },
  "productSet": {
    "productOptions": [],
    "variants": []
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateProductToLeaveDefaultVariant($productSet: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) { productSet(synchronous: $synchronous, input: $productSet, identifier: $identifier) { product { id hasOnlyDefaultVariant } userErrors { field message } } }",
 "variables": {
    "synchronous": true,
    "identifier": {
      "id": "gid://shopify/Product/20995642"
    },
    "productSet": {
      "productOptions": [],
      "variants": []
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateProductToLeaveDefaultVariant($productSet: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
    productSet(synchronous: $synchronous, input: $productSet, identifier: $identifier) {
      product {
        id
        hasOnlyDefaultVariant
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "synchronous": true,
        "identifier": {
            "id": "gid://shopify/Product/20995642"
        },
        "productSet": {
            "productOptions": [],
            "variants": []
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
  mutation updateProductToLeaveDefaultVariant($productSet: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
    productSet(synchronous: $synchronous, input: $productSet, identifier: $identifier) {
      product {
        id
        hasOnlyDefaultVariant
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "synchronous": true,
  "identifier": {
    "id": "gid://shopify/Product/20995642"
  },
  "productSet": {
    "productOptions": [],
    "variants": []
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateProductToLeaveDefaultVariant($productSet: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
      productSet(synchronous: $synchronous, input: $productSet, identifier: $identifier) {
        product {
          id
          hasOnlyDefaultVariant
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "synchronous": true,
        "identifier": {
            "id": "gid://shopify/Product/20995642"
        },
        "productSet": {
            "productOptions": [],
            "variants": []
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/20995642",
      "hasOnlyDefaultVariant": true
    },
    "userErrors": []
  }
}
``` 
*   ### Update the price of variants by IDs

#### Description

Update the price of variants using their IDs. This example returns the updated variant pricing, while maintaining the existing options and variants.

#### Query

```graphql
mutation updateProductVariantPricing($input: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
  productSet(synchronous: $synchronous, input: $input, identifier: $identifier) {
    product {
      id
      title
      description
      handle
      options(first: 5) {
        name
        position
        optionValues {
          name
        }
      }
      variants(first: 5) {
        nodes {
          price
          compareAtPrice
          selectedOptions {
            name
            optionValue {
              id
              name
            }
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
  "synchronous": true,
  "identifier": {
    "id": "gid://shopify/Product/1072481936"
  },
  "input": {
    "title": "Bike frame",
    "descriptionHtml": "Blending durability with aerodynamics",
    "handle": "bike-frame",
    "productType": "parts",
    "tags": [
      "cycling",
      "bike",
      "parts"
    ],
    "vendor": "Your cycling company",
    "status": "ACTIVE",
    "productOptions": [
      {
        "id": "gid://shopify/ProductOption/1064578002",
        "values": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676956"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676957"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676958"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductOption/1064578003",
        "values": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676960"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676959"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676961"
          }
        ]
      }
    ],
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070328469",
        "position": 1,
        "price": 94.99,
        "compareAtPrice": 99.99,
        "optionValues": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676956",
            "optionId": "gid://shopify/ProductOption/1064578002"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676959",
            "optionId": "gid://shopify/ProductOption/1064578003"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070328470",
        "position": 2,
        "price": 259.99,
        "compareAtPrice": 299.99,
        "optionValues": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676957",
            "optionId": "gid://shopify/ProductOption/1064578002"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676960",
            "optionId": "gid://shopify/ProductOption/1064578003"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070328471",
        "position": 3,
        "price": 169.99,
        "compareAtPrice": 199.99,
        "optionValues": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676958",
            "optionId": "gid://shopify/ProductOption/1064578002"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676961",
            "optionId": "gid://shopify/ProductOption/1064578003"
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
"query": "mutation updateProductVariantPricing($input: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) { productSet(synchronous: $synchronous, input: $input, identifier: $identifier) { product { id title description handle options(first: 5) { name position optionValues { name } } variants(first: 5) { nodes { price compareAtPrice selectedOptions { name optionValue { id name } } } } } userErrors { field message } } }",
 "variables": {
    "synchronous": true,
    "identifier": {
      "id": "gid://shopify/Product/1072481936"
    },
    "input": {
      "title": "Bike frame",
      "descriptionHtml": "Blending durability with aerodynamics",
      "handle": "bike-frame",
      "productType": "parts",
      "tags": [
        "cycling",
        "bike",
        "parts"
      ],
      "vendor": "Your cycling company",
      "status": "ACTIVE",
      "productOptions": [
        {
          "id": "gid://shopify/ProductOption/1064578002",
          "values": [
            {
              "id": "gid://shopify/ProductOptionValue/1054676956"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676957"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676958"
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064578003",
          "values": [
            {
              "id": "gid://shopify/ProductOptionValue/1054676960"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676959"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676961"
            }
          ]
        }
      ],
      "variants": [
        {
          "id": "gid://shopify/ProductVariant/1070328469",
          "position": 1,
          "price": 94.99,
          "compareAtPrice": 99.99,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054676956",
              "optionId": "gid://shopify/ProductOption/1064578002"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676959",
              "optionId": "gid://shopify/ProductOption/1064578003"
            }
          ]
        },
        {
          "id": "gid://shopify/ProductVariant/1070328470",
          "position": 2,
          "price": 259.99,
          "compareAtPrice": 299.99,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054676957",
              "optionId": "gid://shopify/ProductOption/1064578002"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676960",
              "optionId": "gid://shopify/ProductOption/1064578003"
            }
          ]
        },
        {
          "id": "gid://shopify/ProductVariant/1070328471",
          "position": 3,
          "price": 169.99,
          "compareAtPrice": 199.99,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054676958",
              "optionId": "gid://shopify/ProductOption/1064578002"
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054676961",
              "optionId": "gid://shopify/ProductOption/1064578003"
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
  mutation updateProductVariantPricing($input: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
    productSet(synchronous: $synchronous, input: $input, identifier: $identifier) {
      product {
        id
        title
        description
        handle
        options(first: 5) {
          name
          position
          optionValues {
            name
          }
        }
        variants(first: 5) {
          nodes {
            price
            compareAtPrice
            selectedOptions {
              name
              optionValue {
                id
                name
              }
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
        "synchronous": true,
        "identifier": {
            "id": "gid://shopify/Product/1072481936"
        },
        "input": {
            "title": "Bike frame",
            "descriptionHtml": "Blending durability with aerodynamics",
            "handle": "bike-frame",
            "productType": "parts",
            "tags": [
                "cycling",
                "bike",
                "parts"
            ],
            "vendor": "Your cycling company",
            "status": "ACTIVE",
            "productOptions": [
                {
                    "id": "gid://shopify/ProductOption/1064578002",
                    "values": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676956"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676957"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676958"
                        }
                    ]
                },
                {
                    "id": "gid://shopify/ProductOption/1064578003",
                    "values": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676960"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676959"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676961"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "id": "gid://shopify/ProductVariant/1070328469",
                    "position": 1,
                    "price": 94.99,
                    "compareAtPrice": 99.99,
                    "optionValues": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676956",
                            "optionId": "gid://shopify/ProductOption/1064578002"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676959",
                            "optionId": "gid://shopify/ProductOption/1064578003"
                        }
                    ]
                },
                {
                    "id": "gid://shopify/ProductVariant/1070328470",
                    "position": 2,
                    "price": 259.99,
                    "compareAtPrice": 299.99,
                    "optionValues": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676957",
                            "optionId": "gid://shopify/ProductOption/1064578002"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676960",
                            "optionId": "gid://shopify/ProductOption/1064578003"
                        }
                    ]
                },
                {
                    "id": "gid://shopify/ProductVariant/1070328471",
                    "position": 3,
                    "price": 169.99,
                    "compareAtPrice": 199.99,
                    "optionValues": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676958",
                            "optionId": "gid://shopify/ProductOption/1064578002"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676961",
                            "optionId": "gid://shopify/ProductOption/1064578003"
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
  mutation updateProductVariantPricing($input: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
    productSet(synchronous: $synchronous, input: $input, identifier: $identifier) {
      product {
        id
        title
        description
        handle
        options(first: 5) {
          name
          position
          optionValues {
            name
          }
        }
        variants(first: 5) {
          nodes {
            price
            compareAtPrice
            selectedOptions {
              name
              optionValue {
                id
                name
              }
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
  "synchronous": true,
  "identifier": {
    "id": "gid://shopify/Product/1072481936"
  },
  "input": {
    "title": "Bike frame",
    "descriptionHtml": "Blending durability with aerodynamics",
    "handle": "bike-frame",
    "productType": "parts",
    "tags": [
      "cycling",
      "bike",
      "parts"
    ],
    "vendor": "Your cycling company",
    "status": "ACTIVE",
    "productOptions": [
      {
        "id": "gid://shopify/ProductOption/1064578002",
        "values": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676956"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676957"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676958"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductOption/1064578003",
        "values": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676960"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676959"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676961"
          }
        ]
      }
    ],
    "variants": [
      {
        "id": "gid://shopify/ProductVariant/1070328469",
        "position": 1,
        "price": 94.99,
        "compareAtPrice": 99.99,
        "optionValues": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676956",
            "optionId": "gid://shopify/ProductOption/1064578002"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676959",
            "optionId": "gid://shopify/ProductOption/1064578003"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070328470",
        "position": 2,
        "price": 259.99,
        "compareAtPrice": 299.99,
        "optionValues": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676957",
            "optionId": "gid://shopify/ProductOption/1064578002"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676960",
            "optionId": "gid://shopify/ProductOption/1064578003"
          }
        ]
      },
      {
        "id": "gid://shopify/ProductVariant/1070328471",
        "position": 3,
        "price": 169.99,
        "compareAtPrice": 199.99,
        "optionValues": [
          {
            "id": "gid://shopify/ProductOptionValue/1054676958",
            "optionId": "gid://shopify/ProductOption/1064578002"
          },
          {
            "id": "gid://shopify/ProductOptionValue/1054676961",
            "optionId": "gid://shopify/ProductOption/1064578003"
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
    "query": `mutation updateProductVariantPricing($input: ProductSetInput!, $synchronous: Boolean!, $identifier: ProductSetIdentifiers) {
      productSet(synchronous: $synchronous, input: $input, identifier: $identifier) {
        product {
          id
          title
          description
          handle
          options(first: 5) {
            name
            position
            optionValues {
              name
            }
          }
          variants(first: 5) {
            nodes {
              price
              compareAtPrice
              selectedOptions {
                name
                optionValue {
                  id
                  name
                }
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
        "synchronous": true,
        "identifier": {
            "id": "gid://shopify/Product/1072481936"
        },
        "input": {
            "title": "Bike frame",
            "descriptionHtml": "Blending durability with aerodynamics",
            "handle": "bike-frame",
            "productType": "parts",
            "tags": [
                "cycling",
                "bike",
                "parts"
            ],
            "vendor": "Your cycling company",
            "status": "ACTIVE",
            "productOptions": [
                {
                    "id": "gid://shopify/ProductOption/1064578002",
                    "values": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676956"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676957"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676958"
                        }
                    ]
                },
                {
                    "id": "gid://shopify/ProductOption/1064578003",
                    "values": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676960"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676959"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676961"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "id": "gid://shopify/ProductVariant/1070328469",
                    "position": 1,
                    "price": 94.99,
                    "compareAtPrice": 99.99,
                    "optionValues": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676956",
                            "optionId": "gid://shopify/ProductOption/1064578002"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676959",
                            "optionId": "gid://shopify/ProductOption/1064578003"
                        }
                    ]
                },
                {
                    "id": "gid://shopify/ProductVariant/1070328470",
                    "position": 2,
                    "price": 259.99,
                    "compareAtPrice": 299.99,
                    "optionValues": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676957",
                            "optionId": "gid://shopify/ProductOption/1064578002"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676960",
                            "optionId": "gid://shopify/ProductOption/1064578003"
                        }
                    ]
                },
                {
                    "id": "gid://shopify/ProductVariant/1070328471",
                    "position": 3,
                    "price": 169.99,
                    "compareAtPrice": 199.99,
                    "optionValues": [
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676958",
                            "optionId": "gid://shopify/ProductOption/1064578002"
                        },
                        {
                            "id": "gid://shopify/ProductOptionValue/1054676961",
                            "optionId": "gid://shopify/ProductOption/1064578003"
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
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/1072481936",
      "title": "Bike frame",
      "description": "Blending durability with aerodynamics",
      "handle": "bike-frame",
      "options": [
        {
          "name": "Material",
          "position": 1,
          "optionValues": [
            {
              "name": "Aluminium"
            },
            {
              "name": "Carbon"
            },
            {
              "name": "Steel"
            }
          ]
        },
        {
          "name": "Color",
          "position": 2,
          "optionValues": [
            {
              "name": "Grey"
            },
            {
              "name": "Black"
            },
            {
              "name": "Silver"
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "price": "94.99",
            "compareAtPrice": "99.99",
            "selectedOptions": [
              {
                "name": "Material",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054676956",
                  "name": "Aluminium"
                }
              },
              {
                "name": "Color",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054676959",
                  "name": "Grey"
                }
              }
            ]
          },
          {
            "price": "259.99",
            "compareAtPrice": "299.99",
            "selectedOptions": [
              {
                "name": "Material",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054676957",
                  "name": "Carbon"
                }
              },
              {
                "name": "Color",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054676960",
                  "name": "Black"
                }
              }
            ]
          },
          {
            "price": "169.99",
            "compareAtPrice": "199.99",
            "selectedOptions": [
              {
                "name": "Material",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054676958",
                  "name": "Steel"
                }
              },
              {
                "name": "Color",
                "optionValue": {
                  "id": "gid://shopify/ProductOptionValue/1054676961",
                  "name": "Silver"
                }
              }
            ]
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Upsert a product by its custom ID

#### Description

Upsert (update or insert) a product using its [custom ID](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UniqueMetafieldValueInput) as the identifier. Custom IDs are unique metafield values that can be used to identify products across systems. This example returns the newly created product or the updated existing product based on the custom ID match.

#### Query

```graphql
mutation UpsertProductByCustomId($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
  productSet(input: $input, identifier: $identifier) {
    product {
      id
      title
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
  "input": {
    "title": "Summer sandals"
  },
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "12345"
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpsertProductByCustomId($input: ProductSetInput!, $identifier: ProductSetIdentifiers) { productSet(input: $input, identifier: $identifier) { product { id title } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "Summer sandals"
    },
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "12345"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpsertProductByCustomId($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
    productSet(input: $input, identifier: $identifier) {
      product {
        id
        title
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "Summer sandals"
        },
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "12345"
            }
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
  mutation UpsertProductByCustomId($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
    productSet(input: $input, identifier: $identifier) {
      product {
        id
        title
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "Summer sandals"
  },
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "12345"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpsertProductByCustomId($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
      productSet(input: $input, identifier: $identifier) {
        product {
          id
          title
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "Summer sandals"
        },
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "12345"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/1072481925",
      "title": "Summer sandals"
    },
    "userErrors": []
  }
}
``` 
*   ### Upsert a product by its handle

#### Description

Upsert (update or insert) a product using its [handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.handle) as the identifier. This example returns the newly created product or the updated existing product based on the handle match.

#### Query

```graphql
mutation UpsertProductByHandle($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
  productSet(input: $input, identifier: $identifier) {
    product {
      id
      title
      handle
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
  "input": {
    "title": "Winter hat",
    "handle": "winter-hat"
  },
  "identifier": {
    "handle": "winter-hat"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpsertProductByHandle($input: ProductSetInput!, $identifier: ProductSetIdentifiers) { productSet(input: $input, identifier: $identifier) { product { id title handle } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "Winter hat",
      "handle": "winter-hat"
    },
    "identifier": {
      "handle": "winter-hat"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpsertProductByHandle($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
    productSet(input: $input, identifier: $identifier) {
      product {
        id
        title
        handle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "Winter hat",
            "handle": "winter-hat"
        },
        "identifier": {
            "handle": "winter-hat"
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
  mutation UpsertProductByHandle($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
    productSet(input: $input, identifier: $identifier) {
      product {
        id
        title
        handle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "Winter hat",
    "handle": "winter-hat"
  },
  "identifier": {
    "handle": "winter-hat"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpsertProductByHandle($input: ProductSetInput!, $identifier: ProductSetIdentifiers) {
      productSet(input: $input, identifier: $identifier) {
        product {
          id
          title
          handle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "Winter hat",
            "handle": "winter-hat"
        },
        "identifier": {
            "handle": "winter-hat"
        }
    },
  },
});
``` #### Response

```json
{
  "productSet": {
    "product": {
      "id": "gid://shopify/Product/1072481952",
      "title": "Winter hat",
      "handle": "winter-hat"
    },
    "userErrors": []
  }
}
``` 
*   ### productSet reference

Examples
--------

Asynchronously create a product with two variants

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20createProductAsynchronous(%24productSet%3A%20ProductSetInput!%2C%20%24synchronous%3A%20Boolean!)%20%7B%0A%20%20productSet(synchronous%3A%20%24synchronous%2C%20input%3A%20%24productSet)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20productSetOperation%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20field%0A%20%20%20%20%20%20%20%20message%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22synchronous%22%3A%20false%2C%0A%20%20%22productSet%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22Winter%20hat%22%2C%0A%20%20%20%20%22productOptions%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22name%22%3A%20%22Color%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22values%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Grey%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Black%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22variants%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22optionValues%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22optionName%22%3A%20%22Color%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Grey%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22price%22%3A%2079.99%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22optionValues%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22optionName%22%3A%20%22Color%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Black%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22price%22%3A%2069.99%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

 mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {

 productSet(synchronous: $synchronous, input: $productSet) {

 product {

 id

 }

 productSetOperation {

 id

 status

 userErrors {

 code

 field

 message

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

"synchronous":false,

"productSet":{

"title":"Winter hat",

"productOptions":[

{

"name":"Color",

"position":1,

"values":[

{

```
mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
  productSet(synchronous: $synchronous, input: $productSet) {
    product {
      id
    }
    productSetOperation {
      id
      status
      userErrors {
        code
        field
        message
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
"query": "mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) { productSet(synchronous: $synchronous, input: $productSet) { product { id } productSetOperation { id status userErrors { code field message } } userErrors { code field message } } }",
 "variables": {
    "synchronous": false,
    "productSet": {
      "title": "Winter hat",
      "productOptions": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            {
              "name": "Grey"
            },
            {
              "name": "Black"
            }
          ]
        }
      ],
      "variants": [
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Grey"
            }
          ],
          "price": 79.99
        },
        {
          "optionValues": [
            {
              "optionName": "Color",
              "name": "Black"
            }
          ],
          "price": 69.99
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
  mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
      }
      productSetOperation {
        id
        status
        userErrors {
          code
          field
          message
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
        "synchronous": false,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "price": 79.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "price": 69.99
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
    "query": `mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
      productSet(synchronous: $synchronous, input: $productSet) {
        product {
          id
        }
        productSetOperation {
          id
          status
          userErrors {
            code
            field
            message
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
        "synchronous": false,
        "productSet": {
            "title": "Winter hat",
            "productOptions": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        {
                            "name": "Grey"
                        },
                        {
                            "name": "Black"
                        }
                    ]
                }
            ],
            "variants": [
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Grey"
                        }
                    ],
                    "price": 79.99
                },
                {
                    "optionValues": [
                        {
                            "optionName": "Color",
                            "name": "Black"
                        }
                    ],
                    "price": 69.99
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
  mutation createProductAsynchronous($productSet: ProductSetInput!, $synchronous: Boolean!) {
    productSet(synchronous: $synchronous, input: $productSet) {
      product {
        id
      }
      productSetOperation {
        id
        status
        userErrors {
          code
          field
          message
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
  "synchronous": false,
  "productSet": {
    "title": "Winter hat",
    "productOptions": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "name": "Grey"
          },
          {
            "name": "Black"
          }
        ]
      }
    ],
    "variants": [
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Grey"
          }
        ],
        "price": 79.99
      },
      {
        "optionValues": [
          {
            "optionName": "Color",
            "name": "Black"
          }
        ],
        "price": 69.99
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

"synchronous": false,

"productSet": {

"title": "Winter hat",

"productOptions": [

{

"name": "Color",

"position": 1,

"values": [

{

"name": "Grey"

},

{

"name": "Black"

}

]

}

],

"variants": [

{

"optionValues": [

{

"optionName": "Color",

"name": "Grey"

}

],

"price": 79.99

},

{

"optionValues": [

{

"optionName": "Color",

"name": "Black"

}

],

"price": 69.99

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

›

⌄

⌄

⌄

{

"productSet": {

"product": null,

"productSetOperation": {

"id": "gid://shopify/ProductSetOperation/1010603851",

"status": "CREATED",

"userErrors": []

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*