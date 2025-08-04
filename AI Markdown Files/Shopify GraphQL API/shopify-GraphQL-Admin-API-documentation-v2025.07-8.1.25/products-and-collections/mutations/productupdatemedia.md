---
title: "productUpdateMedia"
description: "Shopify GraphQL Admin API documentation for productupdatemedia"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productUpdateMedia - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia

Markdown Content:
productUpdateMedia - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#main-content)

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

[Anchor to productUpdateMedia](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#top)
product Update Media
====================

mutation

Requires `write_products` access scope. Also: The user must have a permission to update media for a product.

Deprecated.Use [fileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate) instead.

Updates media for a product.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#arguments)
Arguments
---------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#arguments-media)media

•[[Update Media Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UpdateMediaInput)

required

A list of media updates.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the product on which media will be updated.

* * *

Was this section helpful?

Yes No

[Anchor to ProductUpdateMediaPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#returns)Product Update Media Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#returns-media)media

•[[Media!]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

The updated media object.

Show fields

[Anchor to mediaUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#returns-mediaUserErrors)media User Errors

•[[Media User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product on which media was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null Deprecated

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Modify an existing Product Image

#### Query

```graphql
mutation ProductImageUpdate($id: ID!) {
  productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
    media {
      id
      alt
      status
      ... on MediaImage {
        image {
          url
        }
      }
    }
    mediaUserErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ProductImageUpdate($id: ID!) { productUpdateMedia(productId: $id, media: [{id: \"gid://shopify/MediaImage/853695510\", alt: \"Updated alt text.\"}]) { media { id alt status ... on MediaImage { image { url } } } mediaUserErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ProductImageUpdate($id: ID!) {
    productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
      media {
        id
        alt
        status
        ... on MediaImage {
          image {
            url
          }
        }
      }
      mediaUserErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309"
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
  mutation ProductImageUpdate($id: ID!) {
    productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
      media {
        id
        alt
        status
        ... on MediaImage {
          image {
            url
          }
        }
      }
      mediaUserErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ProductImageUpdate($id: ID!) {
      productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
        media {
          id
          alt
          status
          ... on MediaImage {
            image {
              url
            }
          }
        }
        mediaUserErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "productUpdateMedia": {
    "media": [
      {
        "id": "gid://shopify/MediaImage/853695510",
        "alt": "Updated alt text.",
        "status": "READY",
        "image": {
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft58.jpg?v=1730761095"
        }
      }
    ],
    "mediaUserErrors": []
  }
}
``` 
*   ### Update a product's media fields

#### Description

Update the media fields of a product

#### Query

```graphql
mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
  productUpdateMedia(media: $media, productId: $productId) {
    media {
      alt
    }
  }
}
``` #### Variables

```json
{
  "media": [
    {
      "alt": "Some alt text",
      "id": "gid://shopify/Video/723685877"
    },
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/853695510"
    }
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
"query": "mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) { productUpdateMedia(media: $media, productId: $productId) { media { alt } } }",
 "variables": {
    "media": [
      {
        "alt": "Some alt text",
        "id": "gid://shopify/Video/723685877"
      },
      {
        "alt": "Some more alt text",
        "id": "gid://shopify/MediaImage/853695510"
      }
    ],
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      media {
        alt
      }
    }
  }`,
  {
    variables: {
        "media": [
            {
                "alt": "Some alt text",
                "id": "gid://shopify/Video/723685877"
            },
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/853695510"
            }
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
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      media {
        alt
      }
    }
  }
QUERY

variables = {
  "media": [
    {
      "alt": "Some alt text",
      "id": "gid://shopify/Video/723685877"
    },
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/853695510"
    }
  ],
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
      productUpdateMedia(media: $media, productId: $productId) {
        media {
          alt
        }
      }
    }`,
    "variables": {
        "media": [
            {
                "alt": "Some alt text",
                "id": "gid://shopify/Video/723685877"
            },
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/853695510"
            }
        ],
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "productUpdateMedia": {
    "media": [
      {
        "alt": "Some alt text"
      },
      {
        "alt": "Some more alt text"
      }
    ]
  }
}
``` 
*   ### Update new media on a non-existent product

#### Description

Trying to update media on a non-existent product returns an error.

#### Query

```graphql
mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
  productUpdateMedia(media: $media, productId: $productId) {
    product {
      id
      title
    }
    media {
      alt
    }
    mediaUserErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "media": [
    {
      "alt": "Some alt text",
      "id": "gid://shopify/Video/723685877"
    },
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/853695510"
    }
  ],
  "productId": "gid://shopify/Product/-1"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) { productUpdateMedia(media: $media, productId: $productId) { product { id title } media { alt } mediaUserErrors { field message } } }",
 "variables": {
    "media": [
      {
        "alt": "Some alt text",
        "id": "gid://shopify/Video/723685877"
      },
      {
        "alt": "Some more alt text",
        "id": "gid://shopify/MediaImage/853695510"
      }
    ],
    "productId": "gid://shopify/Product/-1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      product {
        id
        title
      }
      media {
        alt
      }
      mediaUserErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "media": [
            {
                "alt": "Some alt text",
                "id": "gid://shopify/Video/723685877"
            },
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/853695510"
            }
        ],
        "productId": "gid://shopify/Product/-1"
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
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      product {
        id
        title
      }
      media {
        alt
      }
      mediaUserErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "media": [
    {
      "alt": "Some alt text",
      "id": "gid://shopify/Video/723685877"
    },
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/853695510"
    }
  ],
  "productId": "gid://shopify/Product/-1"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
      productUpdateMedia(media: $media, productId: $productId) {
        product {
          id
          title
        }
        media {
          alt
        }
        mediaUserErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "media": [
            {
                "alt": "Some alt text",
                "id": "gid://shopify/Video/723685877"
            },
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/853695510"
            }
        ],
        "productId": "gid://shopify/Product/-1"
    },
  },
});
``` #### Response

```json
{
  "productUpdateMedia": {
    "product": null,
    "media": null,
    "mediaUserErrors": [
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
*   ### Update non-existent media on a non-existent product

#### Description

Trying to update non-existent media on a non-existent product returns an error.

#### Query

```graphql
mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
  productUpdateMedia(media: $media, productId: $productId) {
    product {
      id
      title
    }
    media {
      alt
    }
    mediaUserErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "media": [
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/-1"
    }
  ],
  "productId": "gid://shopify/Product/-1"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) { productUpdateMedia(media: $media, productId: $productId) { product { id title } media { alt } mediaUserErrors { field message code } } }",
 "variables": {
    "media": [
      {
        "alt": "Some more alt text",
        "id": "gid://shopify/MediaImage/-1"
      }
    ],
    "productId": "gid://shopify/Product/-1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      product {
        id
        title
      }
      media {
        alt
      }
      mediaUserErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "media": [
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/-1"
            }
        ],
        "productId": "gid://shopify/Product/-1"
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
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      product {
        id
        title
      }
      media {
        alt
      }
      mediaUserErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "media": [
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/-1"
    }
  ],
  "productId": "gid://shopify/Product/-1"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
      productUpdateMedia(media: $media, productId: $productId) {
        product {
          id
          title
        }
        media {
          alt
        }
        mediaUserErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "media": [
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/-1"
            }
        ],
        "productId": "gid://shopify/Product/-1"
    },
  },
});
``` #### Response

```json
{
  "productUpdateMedia": {
    "product": null,
    "media": null,
    "mediaUserErrors": [
      {
        "field": [
          "productId"
        ],
        "message": "Product does not exist",
        "code": "PRODUCT_DOES_NOT_EXIST"
      }
    ]
  }
}
``` 
*   ### Update non-existent media on a valid product

#### Description

Trying to update non-existent media on a valid product returns an error.

#### Query

```graphql
mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
  productUpdateMedia(media: $media, productId: $productId) {
    product {
      id
      title
    }
    media {
      alt
    }
    mediaUserErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "media": [
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/-1"
    }
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
"query": "mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) { productUpdateMedia(media: $media, productId: $productId) { product { id title } media { alt } mediaUserErrors { field message code } } }",
 "variables": {
    "media": [
      {
        "alt": "Some more alt text",
        "id": "gid://shopify/MediaImage/-1"
      }
    ],
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      product {
        id
        title
      }
      media {
        alt
      }
      mediaUserErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "media": [
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/-1"
            }
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
  mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
    productUpdateMedia(media: $media, productId: $productId) {
      product {
        id
        title
      }
      media {
        alt
      }
      mediaUserErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "media": [
    {
      "alt": "Some more alt text",
      "id": "gid://shopify/MediaImage/-1"
    }
  ],
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productUpdateMedia($media: [UpdateMediaInput!]!, $productId: ID!) {
      productUpdateMedia(media: $media, productId: $productId) {
        product {
          id
          title
        }
        media {
          alt
        }
        mediaUserErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "media": [
            {
                "alt": "Some more alt text",
                "id": "gid://shopify/MediaImage/-1"
            }
        ],
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "productUpdateMedia": {
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Draft"
    },
    "media": null,
    "mediaUserErrors": [
      {
        "field": [
          "media"
        ],
        "message": "Media id gid://shopify/MediaImage/-1 does not exist",
        "code": "MEDIA_DOES_NOT_EXIST"
      }
    ]
  }
}
``` 
*   ### productUpdateMedia reference

Examples
--------

Modify an existing Product Image

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ProductImageUpdate(%24id%3A%20ID!)%20%7B%0A%20%20productUpdateMedia(productId%3A%20%24id%2C%20media%3A%20%5B%7Bid%3A%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F853695510%22%2C%20alt%3A%20%22Updated%20alt%20text.%22%7D%5D)%20%7B%0A%20%20%20%20media%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20alt%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20...%20on%20MediaImage%20%7B%0A%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20mediaUserErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ProductImageUpdate($id: ID!) {

 productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {

 media {

 id

 alt

 status

 ... on MediaImage {

 image {

 url

 }

 }

 }

 mediaUserErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Product/108828309"

},

},

);

const data=await response.json();

```
mutation ProductImageUpdate($id: ID!) {
  productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
    media {
      id
      alt
      status
      ... on MediaImage {
        image {
          url
        }
      }
    }
    mediaUserErrors {
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
"query": "mutation ProductImageUpdate($id: ID!) { productUpdateMedia(productId: $id, media: [{id: \"gid://shopify/MediaImage/853695510\", alt: \"Updated alt text.\"}]) { media { id alt status ... on MediaImage { image { url } } } mediaUserErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ProductImageUpdate($id: ID!) {
    productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
      media {
        id
        alt
        status
        ... on MediaImage {
          image {
            url
          }
        }
      }
      mediaUserErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ProductImageUpdate($id: ID!) {
      productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
        media {
          id
          alt
          status
          ... on MediaImage {
            image {
              url
            }
          }
        }
        mediaUserErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309"
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
  mutation ProductImageUpdate($id: ID!) {
    productUpdateMedia(productId: $id, media: [{id: "gid://shopify/MediaImage/853695510", alt: "Updated alt text."}]) {
      media {
        id
        alt
        status
        ... on MediaImage {
          image {
            url
          }
        }
      }
      mediaUserErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309"
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

›

⌄

{

"id": "gid://shopify/Product/108828309"

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

›

⌄

⌄

⌄

⌄

⌄

{

"productUpdateMedia": {

"media": [

{

"id": "gid://shopify/MediaImage/853695510",

"alt": "Updated alt text.",

"status": "READY",

"image": {

"url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft58.jpg?v=1730761095"

}

}

],

"mediaUserErrors": []

}

}


---
*Content truncated at "Updates" section*