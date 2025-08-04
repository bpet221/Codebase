---
title: "productCreateMedia"
description: "Shopify GraphQL Admin API documentation for productcreatemedia"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productCreateMedia - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia

Markdown Content:
productCreateMedia - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#main-content)

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

[Anchor to productCreateMedia](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#top)
product Create Media
====================

mutation

Requires `write_products` access scope. Also: The user must have a permission to create media for a product.

Deprecated.Use [productUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate) or [productSet](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) instead.

Creates media for a product.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#arguments)
Arguments
---------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#arguments-media)media

•[[Create Media Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

required

List of new media to be added to a product.

Show input fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the product associated with the media.

* * *

Was this section helpful?

Yes No

[Anchor to ProductCreateMediaPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#returns)Product Create Media Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#returns-media)media

•[[Media!]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

The newly created media.

Show fields

[Anchor to mediaUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#returns-mediaUserErrors)media User Errors

•[[Media User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product associated with the media.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null Deprecated

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add both valid and invalid media to an existing product

#### Description

Trying to add both valid and invalid media to a product adds the valid media and returns an error for the invalid media.

#### Query

```graphql
mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
  productCreateMedia(media: $media, productId: $productId) {
    media {
      alt
      mediaContentType
      status
    }
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
    }
  }
}
``` #### Variables

```json
{
  "media": [
    {
      "alt": "Image",
      "mediaContentType": "EXTERNAL_VIDEO",
      "originalSource": "https://youtu.be/32mGBDk3LSo"
    },
    {
      "alt": "Image",
      "mediaContentType": "IMAGE",
      "originalSource": "invalid_img"
    }
  ],
  "productId": "gid://shopify/Product/121709582"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) { productCreateMedia(media: $media, productId: $productId) { media { alt mediaContentType status } mediaUserErrors { field message } product { id title } } }",
 "variables": {
    "media": [
      {
        "alt": "Image",
        "mediaContentType": "EXTERNAL_VIDEO",
        "originalSource": "https://youtu.be/32mGBDk3LSo"
      },
      {
        "alt": "Image",
        "mediaContentType": "IMAGE",
        "originalSource": "invalid_img"
      }
    ],
    "productId": "gid://shopify/Product/121709582"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }`,
  {
    variables: {
        "media": [
            {
                "alt": "Image",
                "mediaContentType": "EXTERNAL_VIDEO",
                "originalSource": "https://youtu.be/32mGBDk3LSo"
            },
            {
                "alt": "Image",
                "mediaContentType": "IMAGE",
                "originalSource": "invalid_img"
            }
        ],
        "productId": "gid://shopify/Product/121709582"
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
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }
QUERY

variables = {
  "media": [
    {
      "alt": "Image",
      "mediaContentType": "EXTERNAL_VIDEO",
      "originalSource": "https://youtu.be/32mGBDk3LSo"
    },
    {
      "alt": "Image",
      "mediaContentType": "IMAGE",
      "originalSource": "invalid_img"
    }
  ],
  "productId": "gid://shopify/Product/121709582"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
      productCreateMedia(media: $media, productId: $productId) {
        media {
          alt
          mediaContentType
          status
        }
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
        }
      }
    }`,
    "variables": {
        "media": [
            {
                "alt": "Image",
                "mediaContentType": "EXTERNAL_VIDEO",
                "originalSource": "https://youtu.be/32mGBDk3LSo"
            },
            {
                "alt": "Image",
                "mediaContentType": "IMAGE",
                "originalSource": "invalid_img"
            }
        ],
        "productId": "gid://shopify/Product/121709582"
    },
  },
});
``` #### Response

```json
{
  "productCreateMedia": {
    "media": [
      {
        "alt": "Image",
        "mediaContentType": "EXTERNAL_VIDEO",
        "status": "UPLOADED"
      }
    ],
    "mediaUserErrors": [
      {
        "field": [
          "media",
          "1",
          "originalSource"
        ],
        "message": "Image URL is invalid"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/121709582",
      "title": "Boots"
    }
  }
}
``` 
*   ### Add invalid media to an existing product

#### Description

Trying to add invalid media to a product returns an error.

#### Query

```graphql
mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
  productCreateMedia(media: $media, productId: $productId) {
    media {
      alt
      mediaContentType
      status
    }
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
    }
  }
}
``` #### Variables

```json
{
  "media": {
    "alt": "Image",
    "mediaContentType": "IMAGE",
    "originalSource": "invalid_img"
  },
  "productId": "gid://shopify/Product/121709582"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) { productCreateMedia(media: $media, productId: $productId) { media { alt mediaContentType status } mediaUserErrors { field message } product { id title } } }",
 "variables": {
    "media": {
      "alt": "Image",
      "mediaContentType": "IMAGE",
      "originalSource": "invalid_img"
    },
    "productId": "gid://shopify/Product/121709582"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }`,
  {
    variables: {
        "media": {
            "alt": "Image",
            "mediaContentType": "IMAGE",
            "originalSource": "invalid_img"
        },
        "productId": "gid://shopify/Product/121709582"
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
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }
QUERY

variables = {
  "media": {
    "alt": "Image",
    "mediaContentType": "IMAGE",
    "originalSource": "invalid_img"
  },
  "productId": "gid://shopify/Product/121709582"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
      productCreateMedia(media: $media, productId: $productId) {
        media {
          alt
          mediaContentType
          status
        }
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
        }
      }
    }`,
    "variables": {
        "media": {
            "alt": "Image",
            "mediaContentType": "IMAGE",
            "originalSource": "invalid_img"
        },
        "productId": "gid://shopify/Product/121709582"
    },
  },
});
``` #### Response

```json
{
  "productCreateMedia": {
    "media": [],
    "mediaUserErrors": [
      {
        "field": [
          "media",
          "0",
          "originalSource"
        ],
        "message": "Image URL is invalid"
      }
    ],
    "product": {
      "id": "gid://shopify/Product/121709582",
      "title": "Boots"
    }
  }
}
``` 
*   ### Add new media to a non-existent product

#### Description

Trying to add media to a non-existent product returns an error.

#### Query

```graphql
mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
  productCreateMedia(media: $media, productId: $productId) {
    media {
      alt
      mediaContentType
      status
    }
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
    }
  }
}
``` #### Variables

```json
{
  "media": {
    "alt": "Video",
    "mediaContentType": "EXTERNAL_VIDEO",
    "originalSource": "https://youtu.be/32mGBDk3LSo"
  },
  "productId": "gid://shopify/Product/-1"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) { productCreateMedia(media: $media, productId: $productId) { media { alt mediaContentType status } mediaUserErrors { field message } product { id title } } }",
 "variables": {
    "media": {
      "alt": "Video",
      "mediaContentType": "EXTERNAL_VIDEO",
      "originalSource": "https://youtu.be/32mGBDk3LSo"
    },
    "productId": "gid://shopify/Product/-1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }`,
  {
    variables: {
        "media": {
            "alt": "Video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "originalSource": "https://youtu.be/32mGBDk3LSo"
        },
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
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }
QUERY

variables = {
  "media": {
    "alt": "Video",
    "mediaContentType": "EXTERNAL_VIDEO",
    "originalSource": "https://youtu.be/32mGBDk3LSo"
  },
  "productId": "gid://shopify/Product/-1"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
      productCreateMedia(media: $media, productId: $productId) {
        media {
          alt
          mediaContentType
          status
        }
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
        }
      }
    }`,
    "variables": {
        "media": {
            "alt": "Video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "originalSource": "https://youtu.be/32mGBDk3LSo"
        },
        "productId": "gid://shopify/Product/-1"
    },
  },
});
``` #### Response

```json
{
  "productCreateMedia": {
    "media": null,
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
*   ### Add new media to an existing product

#### Query

```graphql
mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
  productCreateMedia(media: $media, productId: $productId) {
    media {
      alt
      mediaContentType
      status
    }
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
    }
  }
}
``` #### Variables

```json
{
  "media": {
    "alt": "Video",
    "mediaContentType": "EXTERNAL_VIDEO",
    "originalSource": "https://youtu.be/32mGBDk3LSo"
  },
  "productId": "gid://shopify/Product/121709582"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) { productCreateMedia(media: $media, productId: $productId) { media { alt mediaContentType status } mediaUserErrors { field message } product { id title } } }",
 "variables": {
    "media": {
      "alt": "Video",
      "mediaContentType": "EXTERNAL_VIDEO",
      "originalSource": "https://youtu.be/32mGBDk3LSo"
    },
    "productId": "gid://shopify/Product/121709582"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }`,
  {
    variables: {
        "media": {
            "alt": "Video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "originalSource": "https://youtu.be/32mGBDk3LSo"
        },
        "productId": "gid://shopify/Product/121709582"
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
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }
QUERY

variables = {
  "media": {
    "alt": "Video",
    "mediaContentType": "EXTERNAL_VIDEO",
    "originalSource": "https://youtu.be/32mGBDk3LSo"
  },
  "productId": "gid://shopify/Product/121709582"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
      productCreateMedia(media: $media, productId: $productId) {
        media {
          alt
          mediaContentType
          status
        }
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
        }
      }
    }`,
    "variables": {
        "media": {
            "alt": "Video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "originalSource": "https://youtu.be/32mGBDk3LSo"
        },
        "productId": "gid://shopify/Product/121709582"
    },
  },
});
``` #### Response

```json
{
  "productCreateMedia": {
    "media": [
      {
        "alt": "Video",
        "mediaContentType": "EXTERNAL_VIDEO",
        "status": "UPLOADED"
      }
    ],
    "mediaUserErrors": [],
    "product": {
      "id": "gid://shopify/Product/121709582",
      "title": "Boots"
    }
  }
}
``` 
*   ### Create a new Product Image

#### Query

```graphql
mutation ProductImageCreate($id: ID!) {
  productCreateMedia(productId: $id, media: [{mediaContentType: IMAGE, originalSource: "https://path.to/image.jpg", alt: "Alt text."}]) {
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
  "id": "gid://shopify/Product/121709582"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ProductImageCreate($id: ID!) { productCreateMedia(productId: $id, media: [{mediaContentType: IMAGE, originalSource: \"https://path.to/image.jpg\", alt: \"Alt text.\"}]) { media { id alt status ... on MediaImage { image { url } } } mediaUserErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/121709582"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ProductImageCreate($id: ID!) {
    productCreateMedia(productId: $id, media: [{mediaContentType: IMAGE, originalSource: "https://path.to/image.jpg", alt: "Alt text."}]) {
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
        "id": "gid://shopify/Product/121709582"
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
  mutation ProductImageCreate($id: ID!) {
    productCreateMedia(productId: $id, media: [{mediaContentType: IMAGE, originalSource: "https://path.to/image.jpg", alt: "Alt text."}]) {
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
  "id": "gid://shopify/Product/121709582"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ProductImageCreate($id: ID!) {
      productCreateMedia(productId: $id, media: [{mediaContentType: IMAGE, originalSource: "https://path.to/image.jpg", alt: "Alt text."}]) {
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
        "id": "gid://shopify/Product/121709582"
    },
  },
});
``` #### Response

```json
{
  "productCreateMedia": {
    "media": [
      {
        "id": "gid://shopify/MediaImage/1072273196",
        "alt": "Alt text.",
        "status": "UPLOADED",
        "image": null
      }
    ],
    "mediaUserErrors": []
  }
}
``` 
*   ### productCreateMedia reference

Examples
--------

Add both valid and invalid media to an existing product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productCreateMedia(%24media%3A%20%5BCreateMediaInput!%5D!%2C%20%24productId%3A%20ID!)%20%7B%0A%20%20productCreateMedia(media%3A%20%24media%2C%20productId%3A%20%24productId)%20%7B%0A%20%20%20%20media%20%7B%0A%20%20%20%20%20%20alt%0A%20%20%20%20%20%20mediaContentType%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20mediaUserErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22media%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22alt%22%3A%20%22Image%22%2C%0A%20%20%20%20%20%20%22mediaContentType%22%3A%20%22EXTERNAL_VIDEO%22%2C%0A%20%20%20%20%20%20%22originalSource%22%3A%20%22https%3A%2F%2Fyoutu.be%2F32mGBDk3LSo%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22alt%22%3A%20%22Image%22%2C%0A%20%20%20%20%20%20%22mediaContentType%22%3A%20%22IMAGE%22%2C%0A%20%20%20%20%20%20%22originalSource%22%3A%20%22invalid_img%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F121709582%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {

 productCreateMedia(media: $media, productId: $productId) {

 media {

 alt

 mediaContentType

 status

 }

 mediaUserErrors {

 field

 message

 }

 product {

 id

 title

 }

 }

 }`,

{

variables:{

"media":[

{

"alt":"Image",

"mediaContentType":"EXTERNAL_VIDEO",

"originalSource":"https://youtu.be/32mGBDk3LSo"

},

{

"alt":"Image",

"mediaContentType":"IMAGE",

"originalSource":"invalid_img"

}

],

"productId":"gid://shopify/Product/121709582"

```
mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
  productCreateMedia(media: $media, productId: $productId) {
    media {
      alt
      mediaContentType
      status
    }
    mediaUserErrors {
      field
      message
    }
    product {
      id
      title
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
"query": "mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) { productCreateMedia(media: $media, productId: $productId) { media { alt mediaContentType status } mediaUserErrors { field message } product { id title } } }",
 "variables": {
    "media": [
      {
        "alt": "Image",
        "mediaContentType": "EXTERNAL_VIDEO",
        "originalSource": "https://youtu.be/32mGBDk3LSo"
      },
      {
        "alt": "Image",
        "mediaContentType": "IMAGE",
        "originalSource": "invalid_img"
      }
    ],
    "productId": "gid://shopify/Product/121709582"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }`,
  {
    variables: {
        "media": [
            {
                "alt": "Image",
                "mediaContentType": "EXTERNAL_VIDEO",
                "originalSource": "https://youtu.be/32mGBDk3LSo"
            },
            {
                "alt": "Image",
                "mediaContentType": "IMAGE",
                "originalSource": "invalid_img"
            }
        ],
        "productId": "gid://shopify/Product/121709582"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
      productCreateMedia(media: $media, productId: $productId) {
        media {
          alt
          mediaContentType
          status
        }
        mediaUserErrors {
          field
          message
        }
        product {
          id
          title
        }
      }
    }`,
    "variables": {
        "media": [
            {
                "alt": "Image",
                "mediaContentType": "EXTERNAL_VIDEO",
                "originalSource": "https://youtu.be/32mGBDk3LSo"
            },
            {
                "alt": "Image",
                "mediaContentType": "IMAGE",
                "originalSource": "invalid_img"
            }
        ],
        "productId": "gid://shopify/Product/121709582"
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
  mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) {
    productCreateMedia(media: $media, productId: $productId) {
      media {
        alt
        mediaContentType
        status
      }
      mediaUserErrors {
        field
        message
      }
      product {
        id
        title
      }
    }
  }
QUERY

variables = {
  "media": [
    {
      "alt": "Image",
      "mediaContentType": "EXTERNAL_VIDEO",
      "originalSource": "https://youtu.be/32mGBDk3LSo"
    },
    {
      "alt": "Image",
      "mediaContentType": "IMAGE",
      "originalSource": "invalid_img"
    }
  ],
  "productId": "gid://shopify/Product/121709582"
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

{

"media": [

{

"alt": "Image",

"mediaContentType": "EXTERNAL_VIDEO",

"originalSource": "https://youtu.be/32mGBDk3LSo"

},

{

"alt": "Image",

"mediaContentType": "IMAGE",

"originalSource": "invalid_img"

}

],

"productId": "gid://shopify/Product/121709582"

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

"productCreateMedia": {

"media": [

{

"alt": "Image",

"mediaContentType": "EXTERNAL_VIDEO",

"status": "UPLOADED"

}

],

"mediaUserErrors": [

{

"field": [

"media",

"1",

"originalSource"

],

"message": "Image URL is invalid"

}

],

"product": {

"id": "gid://shopify/Product/121709582",

"title": "Boots"

}

}

}


---
*Content truncated at "Updates" section*