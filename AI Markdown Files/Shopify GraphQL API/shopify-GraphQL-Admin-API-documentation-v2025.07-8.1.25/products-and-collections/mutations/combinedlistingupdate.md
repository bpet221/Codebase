---
title: "combinedListingUpdate"
description: "Shopify GraphQL Admin API documentation for combinedlistingupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: combinedListingUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate

Markdown Content:
combinedListingUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#main-content)

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

[Anchor to combinedListingUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#top)
combined Listing Update
=======================

mutation

Requires `write_products` access scope. Also: The user must have permission to manage products.

Add, remove and update `CombinedListing`s of a given Product.

`CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

1.   Parent products
2.   Child products

The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

The combined listing is the association of parent product to one or more child products.

Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments)
Arguments
---------

[Anchor to optionsAndValues](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments-optionsAndValues)options And Values

•[[Option And Value Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionAndValueInput)

The ordered options and values to be used by the combined listing. Options and values will be reordered to match the order specified here.

Show input fields

[Anchor to parentProductId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments-parentProductId)parent Product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the parent product.

[Anchor to productsAdded](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments-productsAdded)products Added

•[[Child Product Relation Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

The child products to add and their assigned options and option values.

Show input fields

[Anchor to productsEdited](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments-productsEdited)products Edited

•[[Child Product Relation Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput)

The child products to edit and their assigned options and option values.

Show input fields

[Anchor to productsRemovedIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments-productsRemovedIds)products Removed Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The IDs of products to be removed from the combined listing.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#arguments-title)title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The updated title for the combined listing.

* * *

Was this section helpful?

Yes No

[Anchor to CombinedListingUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#returns)Combined Listing Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The parent product.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate#returns-userErrors)user Errors

•[[Combined Listing Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add child products to a combined listing

#### Description

Add new child products to an existing combined listing product.

#### Query

```graphql
mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
  combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
    product {
      id
      combinedListing {
        combinedListingChildren(first: 10) {
          nodes {
            product {
              id
            }
            parentVariant {
              selectedOptions {
                value
              }
            }
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
  "parentProductId": "gid://shopify/Product/108828309",
  "productsAdded": [
    {
      "childProductId": "gid://shopify/Product/121709582",
      "selectedParentOptionValues": [
        {
          "name": "color",
          "value": "Blue"
        },
        {
          "name": "size",
          "value": "12"
        }
      ]
    },
    {
      "childProductId": "gid://shopify/Product/912855135",
      "selectedParentOptionValues": [
        {
          "name": "color",
          "value": "Red"
        },
        {
          "name": "size",
          "value": "12"
        }
      ]
    }
  ],
  "optionsAndValues": [
    {
      "name": "color",
      "values": [
        "Blue",
        "Red"
      ]
    },
    {
      "name": "size",
      "values": [
        "12"
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
"query": "mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) { combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) { product { id combinedListing { combinedListingChildren(first: 10) { nodes { product { id } parentVariant { selectedOptions { value } } } } } } userErrors { code field message } } }",
 "variables": {
    "parentProductId": "gid://shopify/Product/108828309",
    "productsAdded": [
      {
        "childProductId": "gid://shopify/Product/121709582",
        "selectedParentOptionValues": [
          {
            "name": "color",
            "value": "Blue"
          },
          {
            "name": "size",
            "value": "12"
          }
        ]
      },
      {
        "childProductId": "gid://shopify/Product/912855135",
        "selectedParentOptionValues": [
          {
            "name": "color",
            "value": "Red"
          },
          {
            "name": "size",
            "value": "12"
          }
        ]
      }
    ],
    "optionsAndValues": [
      {
        "name": "color",
        "values": [
          "Blue",
          "Red"
        ]
      },
      {
        "name": "size",
        "values": [
          "12"
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
  mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
              parentVariant {
                selectedOptions {
                  value
                }
              }
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
        "parentProductId": "gid://shopify/Product/108828309",
        "productsAdded": [
            {
                "childProductId": "gid://shopify/Product/121709582",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Blue"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            },
            {
                "childProductId": "gid://shopify/Product/912855135",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Red"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            }
        ],
        "optionsAndValues": [
            {
                "name": "color",
                "values": [
                    "Blue",
                    "Red"
                ]
            },
            {
                "name": "size",
                "values": [
                    "12"
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
  mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
              parentVariant {
                selectedOptions {
                  value
                }
              }
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
  "parentProductId": "gid://shopify/Product/108828309",
  "productsAdded": [
    {
      "childProductId": "gid://shopify/Product/121709582",
      "selectedParentOptionValues": [
        {
          "name": "color",
          "value": "Blue"
        },
        {
          "name": "size",
          "value": "12"
        }
      ]
    },
    {
      "childProductId": "gid://shopify/Product/912855135",
      "selectedParentOptionValues": [
        {
          "name": "color",
          "value": "Red"
        },
        {
          "name": "size",
          "value": "12"
        }
      ]
    }
  ],
  "optionsAndValues": [
    {
      "name": "color",
      "values": [
        "Blue",
        "Red"
      ]
    },
    {
      "name": "size",
      "values": [
        "12"
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
    "query": `mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
      combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
        product {
          id
          combinedListing {
            combinedListingChildren(first: 10) {
              nodes {
                product {
                  id
                }
                parentVariant {
                  selectedOptions {
                    value
                  }
                }
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
        "parentProductId": "gid://shopify/Product/108828309",
        "productsAdded": [
            {
                "childProductId": "gid://shopify/Product/121709582",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Blue"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            },
            {
                "childProductId": "gid://shopify/Product/912855135",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Red"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            }
        ],
        "optionsAndValues": [
            {
                "name": "color",
                "values": [
                    "Blue",
                    "Red"
                ]
            },
            {
                "name": "size",
                "values": [
                    "12"
                ]
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "combinedListingUpdate": {
    "product": {
      "id": "gid://shopify/Product/108828309",
      "combinedListing": {
        "combinedListingChildren": {
          "nodes": [
            {
              "product": {
                "id": "gid://shopify/Product/121709582"
              },
              "parentVariant": {
                "selectedOptions": [
                  {
                    "value": "Blue"
                  },
                  {
                    "value": "12"
                  }
                ]
              }
            },
            {
              "product": {
                "id": "gid://shopify/Product/912855135"
              },
              "parentVariant": {
                "selectedOptions": [
                  {
                    "value": "Red"
                  },
                  {
                    "value": "12"
                  }
                ]
              }
            }
          ]
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Remove child products from a combined listing

#### Description

Remove child products from an existing combined listing product.

#### Query

```graphql
mutation RemoveChildProductsFromCombinedListing($parentProductId: ID!, $productsRemovedIds: [ID!]) {
  combinedListingUpdate(parentProductId: $parentProductId, productsRemovedIds: $productsRemovedIds) {
    product {
      id
      combinedListing {
        combinedListingChildren(first: 10) {
          nodes {
            product {
              id
            }
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
  "parentProductId": "gid://shopify/Product/362339553",
  "productsRemovedIds": [
    "gid://shopify/Product/223392616"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation RemoveChildProductsFromCombinedListing($parentProductId: ID!, $productsRemovedIds: [ID!]) { combinedListingUpdate(parentProductId: $parentProductId, productsRemovedIds: $productsRemovedIds) { product { id combinedListing { combinedListingChildren(first: 10) { nodes { product { id } } } } } userErrors { code field message } } }",
 "variables": {
    "parentProductId": "gid://shopify/Product/362339553",
    "productsRemovedIds": [
      "gid://shopify/Product/223392616"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RemoveChildProductsFromCombinedListing($parentProductId: ID!, $productsRemovedIds: [ID!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsRemovedIds: $productsRemovedIds) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
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
        "parentProductId": "gid://shopify/Product/362339553",
        "productsRemovedIds": [
            "gid://shopify/Product/223392616"
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
  mutation RemoveChildProductsFromCombinedListing($parentProductId: ID!, $productsRemovedIds: [ID!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsRemovedIds: $productsRemovedIds) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
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
  "parentProductId": "gid://shopify/Product/362339553",
  "productsRemovedIds": [
    "gid://shopify/Product/223392616"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RemoveChildProductsFromCombinedListing($parentProductId: ID!, $productsRemovedIds: [ID!]) {
      combinedListingUpdate(parentProductId: $parentProductId, productsRemovedIds: $productsRemovedIds) {
        product {
          id
          combinedListing {
            combinedListingChildren(first: 10) {
              nodes {
                product {
                  id
                }
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
        "parentProductId": "gid://shopify/Product/362339553",
        "productsRemovedIds": [
            "gid://shopify/Product/223392616"
        ]
    },
  },
});
``` #### Response

```json
{
  "combinedListingUpdate": {
    "product": {
      "id": "gid://shopify/Product/362339553",
      "combinedListing": {
        "combinedListingChildren": {
          "nodes": [
            {
              "product": {
                "id": "gid://shopify/Product/555575834"
              }
            }
          ]
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update option values of combined listing child product

#### Description

Update child products of an existing combined listing product.

#### Query

```graphql
mutation UpdateChildProductsOfCombinedListing($parentProductId: ID!, $productsEdited: [ChildProductRelationInput!]) {
  combinedListingUpdate(parentProductId: $parentProductId, productsEdited: $productsEdited) {
    product {
      id
      combinedListing {
        combinedListingChildren(first: 10) {
          nodes {
            product {
              id
            }
            parentVariant {
              selectedOptions {
                value
              }
            }
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
  "parentProductId": "gid://shopify/Product/362339553",
  "productsEdited": [
    {
      "childProductId": "gid://shopify/Product/223392616",
      "selectedParentOptionValues": [
        {
          "name": "Color",
          "value": "green"
        }
      ]
    },
    {
      "childProductId": "gid://shopify/Product/555575834",
      "selectedParentOptionValues": [
        {
          "name": "Color",
          "value": "blue"
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
"query": "mutation UpdateChildProductsOfCombinedListing($parentProductId: ID!, $productsEdited: [ChildProductRelationInput!]) { combinedListingUpdate(parentProductId: $parentProductId, productsEdited: $productsEdited) { product { id combinedListing { combinedListingChildren(first: 10) { nodes { product { id } parentVariant { selectedOptions { value } } } } } } userErrors { code field message } } }",
 "variables": {
    "parentProductId": "gid://shopify/Product/362339553",
    "productsEdited": [
      {
        "childProductId": "gid://shopify/Product/223392616",
        "selectedParentOptionValues": [
          {
            "name": "Color",
            "value": "green"
          }
        ]
      },
      {
        "childProductId": "gid://shopify/Product/555575834",
        "selectedParentOptionValues": [
          {
            "name": "Color",
            "value": "blue"
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
  mutation UpdateChildProductsOfCombinedListing($parentProductId: ID!, $productsEdited: [ChildProductRelationInput!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsEdited: $productsEdited) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
              parentVariant {
                selectedOptions {
                  value
                }
              }
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
        "parentProductId": "gid://shopify/Product/362339553",
        "productsEdited": [
            {
                "childProductId": "gid://shopify/Product/223392616",
                "selectedParentOptionValues": [
                    {
                        "name": "Color",
                        "value": "green"
                    }
                ]
            },
            {
                "childProductId": "gid://shopify/Product/555575834",
                "selectedParentOptionValues": [
                    {
                        "name": "Color",
                        "value": "blue"
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
  mutation UpdateChildProductsOfCombinedListing($parentProductId: ID!, $productsEdited: [ChildProductRelationInput!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsEdited: $productsEdited) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
              parentVariant {
                selectedOptions {
                  value
                }
              }
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
  "parentProductId": "gid://shopify/Product/362339553",
  "productsEdited": [
    {
      "childProductId": "gid://shopify/Product/223392616",
      "selectedParentOptionValues": [
        {
          "name": "Color",
          "value": "green"
        }
      ]
    },
    {
      "childProductId": "gid://shopify/Product/555575834",
      "selectedParentOptionValues": [
        {
          "name": "Color",
          "value": "blue"
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
    "query": `mutation UpdateChildProductsOfCombinedListing($parentProductId: ID!, $productsEdited: [ChildProductRelationInput!]) {
      combinedListingUpdate(parentProductId: $parentProductId, productsEdited: $productsEdited) {
        product {
          id
          combinedListing {
            combinedListingChildren(first: 10) {
              nodes {
                product {
                  id
                }
                parentVariant {
                  selectedOptions {
                    value
                  }
                }
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
        "parentProductId": "gid://shopify/Product/362339553",
        "productsEdited": [
            {
                "childProductId": "gid://shopify/Product/223392616",
                "selectedParentOptionValues": [
                    {
                        "name": "Color",
                        "value": "green"
                    }
                ]
            },
            {
                "childProductId": "gid://shopify/Product/555575834",
                "selectedParentOptionValues": [
                    {
                        "name": "Color",
                        "value": "blue"
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
  "combinedListingUpdate": {
    "product": {
      "id": "gid://shopify/Product/362339553",
      "combinedListing": {
        "combinedListingChildren": {
          "nodes": [
            {
              "product": {
                "id": "gid://shopify/Product/555575834"
              },
              "parentVariant": {
                "selectedOptions": [
                  {
                    "value": "blue"
                  }
                ]
              }
            },
            {
              "product": {
                "id": "gid://shopify/Product/223392616"
              },
              "parentVariant": {
                "selectedOptions": [
                  {
                    "value": "green"
                  }
                ]
              }
            }
          ]
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### combinedListingUpdate reference

Examples
--------

Add child products to a combined listing

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20AddChildProductsToCombinedListing(%24parentProductId%3A%20ID!%2C%20%24productsAdded%3A%20%5BChildProductRelationInput!%5D%2C%20%24optionsAndValues%3A%20%5BOptionAndValueInput!%5D)%20%7B%0A%20%20combinedListingUpdate(parentProductId%3A%20%24parentProductId%2C%20productsAdded%3A%20%24productsAdded%2C%20optionsAndValues%3A%20%24optionsAndValues)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20combinedListing%20%7B%0A%20%20%20%20%20%20%20%20combinedListingChildren(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20product%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20parentVariant%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedOptions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22parentProductId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%2C%0A%20%20%22productsAdded%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22childProductId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F121709582%22%2C%0A%20%20%20%20%20%20%22selectedParentOptionValues%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22color%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22Blue%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22size%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%2212%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22childProductId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F912855135%22%2C%0A%20%20%20%20%20%20%22selectedParentOptionValues%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22color%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22Red%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22size%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%2212%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22optionsAndValues%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22color%22%2C%0A%20%20%20%20%20%20%22values%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22Blue%22%2C%0A%20%20%20%20%20%20%20%20%22Red%22%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22size%22%2C%0A%20%20%20%20%20%20%22values%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%2212%22%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {

 combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {

 product {

 id

 combinedListing {

 combinedListingChildren(first: 10) {

 nodes {

 product {

 id

 }

 parentVariant {

 selectedOptions {

 value

 }

 }

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

"parentProductId":"gid://shopify/Product/108828309",

"productsAdded":[

{

"childProductId":"gid://shopify/Product/121709582",

```
mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
  combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
    product {
      id
      combinedListing {
        combinedListingChildren(first: 10) {
          nodes {
            product {
              id
            }
            parentVariant {
              selectedOptions {
                value
              }
            }
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
"query": "mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) { combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) { product { id combinedListing { combinedListingChildren(first: 10) { nodes { product { id } parentVariant { selectedOptions { value } } } } } } userErrors { code field message } } }",
 "variables": {
    "parentProductId": "gid://shopify/Product/108828309",
    "productsAdded": [
      {
        "childProductId": "gid://shopify/Product/121709582",
        "selectedParentOptionValues": [
          {
            "name": "color",
            "value": "Blue"
          },
          {
            "name": "size",
            "value": "12"
          }
        ]
      },
      {
        "childProductId": "gid://shopify/Product/912855135",
        "selectedParentOptionValues": [
          {
            "name": "color",
            "value": "Red"
          },
          {
            "name": "size",
            "value": "12"
          }
        ]
      }
    ],
    "optionsAndValues": [
      {
        "name": "color",
        "values": [
          "Blue",
          "Red"
        ]
      },
      {
        "name": "size",
        "values": [
          "12"
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
  mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
              parentVariant {
                selectedOptions {
                  value
                }
              }
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
        "parentProductId": "gid://shopify/Product/108828309",
        "productsAdded": [
            {
                "childProductId": "gid://shopify/Product/121709582",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Blue"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            },
            {
                "childProductId": "gid://shopify/Product/912855135",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Red"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            }
        ],
        "optionsAndValues": [
            {
                "name": "color",
                "values": [
                    "Blue",
                    "Red"
                ]
            },
            {
                "name": "size",
                "values": [
                    "12"
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
    "query": `mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
      combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
        product {
          id
          combinedListing {
            combinedListingChildren(first: 10) {
              nodes {
                product {
                  id
                }
                parentVariant {
                  selectedOptions {
                    value
                  }
                }
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
        "parentProductId": "gid://shopify/Product/108828309",
        "productsAdded": [
            {
                "childProductId": "gid://shopify/Product/121709582",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Blue"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            },
            {
                "childProductId": "gid://shopify/Product/912855135",
                "selectedParentOptionValues": [
                    {
                        "name": "color",
                        "value": "Red"
                    },
                    {
                        "name": "size",
                        "value": "12"
                    }
                ]
            }
        ],
        "optionsAndValues": [
            {
                "name": "color",
                "values": [
                    "Blue",
                    "Red"
                ]
            },
            {
                "name": "size",
                "values": [
                    "12"
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
  mutation AddChildProductsToCombinedListing($parentProductId: ID!, $productsAdded: [ChildProductRelationInput!], $optionsAndValues: [OptionAndValueInput!]) {
    combinedListingUpdate(parentProductId: $parentProductId, productsAdded: $productsAdded, optionsAndValues: $optionsAndValues) {
      product {
        id
        combinedListing {
          combinedListingChildren(first: 10) {
            nodes {
              product {
                id
              }
              parentVariant {
                selectedOptions {
                  value
                }
              }
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
  "parentProductId": "gid://shopify/Product/108828309",
  "productsAdded": [
    {
      "childProductId": "gid://shopify/Product/121709582",
      "selectedParentOptionValues": [
        {
          "name": "color",
          "value": "Blue"
        },
        {
          "name": "size",
          "value": "12"
        }
      ]
    },
    {
      "childProductId": "gid://shopify/Product/912855135",
      "selectedParentOptionValues": [
        {
          "name": "color",
          "value": "Red"
        },
        {
          "name": "size",
          "value": "12"
        }
      ]
    }
  ],
  "optionsAndValues": [
    {
      "name": "color",
      "values": [
        "Blue",
        "Red"
      ]
    },
    {
      "name": "size",
      "values": [
        "12"
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

"parentProductId": "gid://shopify/Product/108828309",

"productsAdded": [

{

"childProductId": "gid://shopify/Product/121709582",

"selectedParentOptionValues": [

{

"name": "color",

"value": "Blue"

},

{

"name": "size",

"value": "12"

}

]

},

{

"childProductId": "gid://shopify/Product/912855135",

"selectedParentOptionValues": [

{

"name": "color",

"value": "Red"

},

{

"name": "size",

"value": "12"

}

]

}

],

"optionsAndValues": [

{

"name": "color",

"values": [

"Blue",

"Red"

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

⌄

⌄

{

"combinedListingUpdate": {

"product": {

"id": "gid://shopify/Product/108828309",

"combinedListing": {

"combinedListingChildren": {

"nodes": [

{

"product": {

"id": "gid://shopify/Product/121709582"

},

"parentVariant": {

"selectedOptions": [

{

"value": "Blue"

},

{

"value": "12"

}

]

}

},

{

"product": {

"id": "gid://shopify/Product/912855135"

},

"parentVariant": {

"selectedOptions": [

{

"value": "Red"

},

{

"value": "12"

}

]

}


---
*Content truncated at "Updates" section*