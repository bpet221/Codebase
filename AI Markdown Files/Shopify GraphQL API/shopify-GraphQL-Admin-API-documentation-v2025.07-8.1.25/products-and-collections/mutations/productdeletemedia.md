---
title: "productDeleteMedia"
description: "Shopify GraphQL Admin API documentation for productdeletemedia"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productDeleteMedia - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia

Markdown Content:
productDeleteMedia - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#main-content)

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

[Anchor to productDeleteMedia](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#top)
product Delete Media
====================

mutation

Requires `write_products` access scope. Also: The user must have a permission to delete media from a product.

Deprecated.Use [fileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate) instead.

Deletes media for a product.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#arguments)
Arguments
---------

[Anchor to mediaIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#arguments-mediaIds)media Ids

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The media IDs to be deleted.

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the product ID from which the media will be deleted.

* * *

Was this section helpful?

Yes No

[Anchor to ProductDeleteMediaPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#returns)Product Delete Media Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedMediaIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#returns-deletedMediaIds)deleted Media Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

List of media IDs which were deleted.

[Anchor to deletedProductImageIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#returns-deletedProductImageIds)deleted Product Image Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

List of product image IDs which were deleted.

[Anchor to mediaUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#returns-mediaUserErrors)media User Errors

•[[Media User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product associated with the deleted media.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null Deprecated

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete existing and non-existing media from a product

#### Description

Trying to delete both existing and non-existing media from a product returns an error and the existing media is not deleted.

#### Query

```graphql
mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
  productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
      media(first: 5) {
        nodes {
          alt
          mediaContentType
          status
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "mediaIds": [
    "gid://shopify/Video/-1",
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
 "variables": {
    "mediaIds": [
      "gid://shopify/Video/-1",
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "mediaIds": [
            "gid://shopify/Video/-1",
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "mediaIds": [
    "gid://shopify/Video/-1",
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "mediaIds": [
            "gid://shopify/Video/-1",
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "productDeleteMedia": {
    "deletedMediaIds": null,
    "deletedProductImageIds": null,
    "mediaUserErrors": [
      {
        "field": [
          "mediaIds"
        ],
        "message": "Media id gid://shopify/Video/-1 does not exist"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Draft",
      "media": {
        "nodes": [
          {
            "alt": "This is a video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a video",
            "mediaContentType": "VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a 3d Model",
            "mediaContentType": "MODEL_3D",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          }
        ]
      }
    }
  }
}
``` 
*   ### Delete media from a non-existent product

#### Description

Trying to delete media from a non-existent product returns an error.

#### Query

```graphql
mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
  productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
      media(first: 5) {
        nodes {
          alt
          mediaContentType
          status
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "mediaIds": [
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/0"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
 "variables": {
    "mediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/0"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "mediaIds": [
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/0"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "mediaIds": [
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/0"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "mediaIds": [
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/0"
    },
  },
});
``` #### Response

```json
{
  "productDeleteMedia": {
    "deletedMediaIds": null,
    "deletedProductImageIds": null,
    "mediaUserErrors": [
      {
        "field": [
          "productId"
        ],
        "message": "Product does not exist"
      }
    ],
    "product": null
  }
}
``` 
*   ### Delete media from an existing product

#### Query

```graphql
mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
  productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
      media(first: 5) {
        nodes {
          alt
          mediaContentType
          status
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "mediaIds": [
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
 "variables": {
    "mediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "mediaIds": [
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "mediaIds": [
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "mediaIds": [
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "productDeleteMedia": {
    "deletedMediaIds": [
      "gid://shopify/Video/723685877"
    ],
    "deletedProductImageIds": [],
    "mediaUserErrors": [],
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Draft",
      "media": {
        "nodes": [
          {
            "alt": "This is a video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a 3d Model",
            "mediaContentType": "MODEL_3D",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          }
        ]
      }
    }
  }
}
``` 
*   ### Delete non-existing media from an existing product

#### Description

Trying to delete non-existing media from a product returns an error.

#### Query

```graphql
mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
  productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
      media(first: 5) {
        nodes {
          alt
          mediaContentType
          status
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "mediaIds": [
    "gid://shopify/Video/-1"
  ],
  "productId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
 "variables": {
    "mediaIds": [
      "gid://shopify/Video/-1"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "mediaIds": [
            "gid://shopify/Video/-1"
        ],
        "productId": "gid://shopify/Product/108828309"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "mediaIds": [
    "gid://shopify/Video/-1"
  ],
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "mediaIds": [
            "gid://shopify/Video/-1"
        ],
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "productDeleteMedia": {
    "deletedMediaIds": null,
    "deletedProductImageIds": null,
    "mediaUserErrors": [
      {
        "field": [
          "mediaIds"
        ],
        "message": "Media id gid://shopify/Video/-1 does not exist"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Draft",
      "media": {
        "nodes": [
          {
            "alt": "This is a video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a video",
            "mediaContentType": "VIDEO",
            "status": "READY"
          },
          {
            "alt": "This is a 3d Model",
            "mediaContentType": "MODEL_3D",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          },
          {
            "alt": "",
            "mediaContentType": "IMAGE",
            "status": "READY"
          }
        ]
      }
    }
  }
}
``` 
*   ### Remove an existing Product Image

#### Query

```graphql
mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
  productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/20995642",
  "mediaIds": [
    "gid://shopify/MediaImage/730211239"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) { productDeleteMedia(productId: $productId, mediaIds: $mediaIds) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/20995642",
    "mediaIds": [
      "gid://shopify/MediaImage/730211239"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
    productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/20995642",
        "mediaIds": [
            "gid://shopify/MediaImage/730211239"
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
  mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
    productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/20995642",
  "mediaIds": [
    "gid://shopify/MediaImage/730211239"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDeleteMedia($productId: ID!, $mediaIds: [ID!]!) {
      productDeleteMedia(productId: $productId, mediaIds: $mediaIds) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/20995642",
        "mediaIds": [
            "gid://shopify/MediaImage/730211239"
        ]
    },
  },
});
``` #### Response

```json
{
  "productDeleteMedia": {
    "deletedMediaIds": [
      "gid://shopify/MediaImage/730211239"
    ],
    "deletedProductImageIds": [
      "gid://shopify/ProductImage/916933471"
    ],
    "mediaUserErrors": []
  }
}
``` 
*   ### productDeleteMedia reference

Examples
--------

Delete existing and non-existing media from a product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productDeleteMedia(%24mediaIds%3A%20%5BID!%5D!%2C%20%24productId%3A%20ID!)%20%7B%0A%20%20productDeleteMedia(mediaIds%3A%20%24mediaIds%2C%20productId%3A%20%24productId)%20%7B%0A%20%20%20%20deletedMediaIds%0A%20%20%20%20deletedProductImageIds%0A%20%20%20%20mediaUserErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20media(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20alt%0A%20%20%20%20%20%20%20%20%20%20mediaContentType%0A%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FVideo%2F-1%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FVideo%2F723685877%22%0A%20%20%5D%2C%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {

 productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {

 deletedMediaIds

 deletedProductImageIds

 mediaUserErrors {

 field

 message

 }

 product {

 id

 title

 media(first: 5) {

 nodes {

 alt

 mediaContentType

 status

 }

 }

 }

 }

 }`,

{

variables:{

"mediaIds":[

"gid://shopify/Video/-1",

"gid://shopify/Video/723685877"

],

"productId":"gid://shopify/Product/108828309"

},

},

);

const data=await response.json();

```
mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
  productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
    deletedMediaIds
    deletedProductImageIds
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
      media(first: 5) {
        nodes {
          alt
          mediaContentType
          status
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
"query": "mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) { productDeleteMedia(mediaIds: $mediaIds, productId: $productId) { deletedMediaIds deletedProductImageIds mediaUserErrors { field message } product { id title media(first: 5) { nodes { alt mediaContentType status } } } } }",
 "variables": {
    "mediaIds": [
      "gid://shopify/Video/-1",
      "gid://shopify/Video/723685877"
    ],
    "productId": "gid://shopify/Product/108828309"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "mediaIds": [
            "gid://shopify/Video/-1",
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
      productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
        deletedMediaIds
        deletedProductImageIds
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
          media(first: 5) {
            nodes {
              alt
              mediaContentType
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "mediaIds": [
            "gid://shopify/Video/-1",
            "gid://shopify/Video/723685877"
        ],
        "productId": "gid://shopify/Product/108828309"
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
  mutation productDeleteMedia($mediaIds: [ID!]!, $productId: ID!) {
    productDeleteMedia(mediaIds: $mediaIds, productId: $productId) {
      deletedMediaIds
      deletedProductImageIds
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
        media(first: 5) {
          nodes {
            alt
            mediaContentType
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "mediaIds": [
    "gid://shopify/Video/-1",
    "gid://shopify/Video/723685877"
  ],
  "productId": "gid://shopify/Product/108828309"
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

›

⌄

⌄

{

"mediaIds": [

"gid://shopify/Video/-1",

"gid://shopify/Video/723685877"

],

"productId": "gid://shopify/Product/108828309"

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

{

"productDeleteMedia": {

"deletedMediaIds": null,

"deletedProductImageIds": null,

"mediaUserErrors": [

{

"field": [

"mediaIds"

],

"message": "Media id gid://shopify/Video/-1 does not exist"

}

],

"product": {

"id": "gid://shopify/Product/108828309",

"title": "Draft",

"media": {

"nodes": [

{

"alt": "This is a video",

"mediaContentType": "EXTERNAL_VIDEO",

"status": "READY"

},

{

"alt": "This is a video",

"mediaContentType": "VIDEO",

"status": "READY"

},

{

"alt": "This is a 3d Model",

"mediaContentType": "MODEL_3D",

"status": "READY"

},

{

"alt": "",

"mediaContentType": "IMAGE",

"status": "READY"


---
*Content truncated at "Updates" section*