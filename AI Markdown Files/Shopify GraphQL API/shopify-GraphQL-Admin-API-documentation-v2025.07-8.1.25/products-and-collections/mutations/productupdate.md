---
title: "productUpdate"
description: "Shopify GraphQL Admin API documentation for productupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate

Markdown Content:
productUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#main-content)

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

[Anchor to productUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#top)
product Update
==============

mutation

Requires `write_products` access scope. Also: The user must have a permission to update products.

Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

The `productUpdate` mutation helps you modify many products at once, avoiding the tedious or time-consuming process of updating them one by one in the Shopify admin. Common examples including updating product details like status or tags.

The `productUpdate` mutation doesn't support updating [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To update multiple product variants for a single product and manage prices, use the [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) mutation.

* * *

Note

The `productUpdate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be updated per day.

* * *

After updating a product, you can make additional changes using one of the following mutations:

*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.
*   [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers, if the product is currently unpublished.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#arguments)
Arguments
---------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#arguments-media)media

•[[Create Media Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

List of new media to be added to the product.

Show input fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#arguments-product)product

•[Product Update Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput)

The updated properties for a product.

Show input fields

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#arguments-input)input

•[Product Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

Deprecated

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ProductUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#returns)Product Update Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The updated product object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add new media to an existing product

#### Description

Add new media, such as an image and a video, to an existing product. The media is [asynchronously](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management) uploaded and associated with the product. This example returns the product's ID, title, and media. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media).

#### Query

```graphql
mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
  productUpdate(product: $product, media: $media) {
    product {
      id
      media(first: 10) {
        nodes {
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
  "product": {
    "id": "gid://shopify/Product/912855135"
  },
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
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
"query": "mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) { productUpdate(product: $product, media: $media) { product { id media(first: 10) { nodes { alt mediaContentType preview { status } } } } userErrors { field message } } }",
 "variables": {
    "product": {
      "id": "gid://shopify/Product/912855135"
    },
    "media": [
      {
        "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
        "alt": "Gray helmet for bikers",
        "mediaContentType": "IMAGE"
      },
      {
        "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
        "alt": "Testing helmet resistance against impacts",
        "mediaContentType": "EXTERNAL_VIDEO"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
    productUpdate(product: $product, media: $media) {
      product {
        id
        media(first: 10) {
          nodes {
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
        "product": {
            "id": "gid://shopify/Product/912855135"
        },
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
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
  mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
    productUpdate(product: $product, media: $media) {
      product {
        id
        media(first: 10) {
          nodes {
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
  "product": {
    "id": "gid://shopify/Product/912855135"
  },
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
      productUpdate(product: $product, media: $media) {
        product {
          id
          media(first: 10) {
            nodes {
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
        "product": {
            "id": "gid://shopify/Product/912855135"
        },
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productUpdate": {
    "product": {
      "id": "gid://shopify/Product/912855135",
      "media": {
        "nodes": [
          {
            "alt": "Gray helmet for bikers",
            "mediaContentType": "IMAGE",
            "preview": {
              "status": "UPLOADED"
            }
          },
          {
            "alt": "Testing helmet resistance against impacts",
            "mediaContentType": "EXTERNAL_VIDEO",
            "preview": {
              "status": "UPLOADED"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update a product with comprehensive details

#### Description

Update a product to include information such as SEO settings, vendor details, and tags. This example returns the product's ID, title, handle, vendor, product type, status, tags, and SEO settings. Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

#### Query

```graphql
mutation UpdateProductComprehensive($product: ProductUpdateInput!) {
  productUpdate(product: $product) {
    userErrors {
      field
      message
    }
    product {
      id
      title
      handle
      vendor
      productType
      status
      tags
      seo {
        title
        description
      }
    }
  }
}
``` #### Variables

```json
{
  "product": {
    "id": "gid://shopify/Product/108828309",
    "title": "Eco-Friendly Bamboo Water Bottle",
    "handle": "eco-bamboo-water-bottle",
    "vendor": "EcoLife Products",
    "productType": "Water Bottles",
    "status": "ACTIVE",
    "tags": [
      "eco-friendly",
      "bamboo",
      "sustainable",
      "water bottle",
      "reusable"
    ],
    "seo": {
      "title": "Eco-Friendly Bamboo Water Bottle - Sustainable Hydration | EcoLife",
      "description": "Discover our premium bamboo water bottle made from 100% natural materials. Perfect for sustainable living. Free shipping available."
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
"query": "mutation UpdateProductComprehensive($product: ProductUpdateInput!) { productUpdate(product: $product) { userErrors { field message } product { id title handle vendor productType status tags seo { title description } } } }",
 "variables": {
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Eco-Friendly Bamboo Water Bottle",
      "handle": "eco-bamboo-water-bottle",
      "vendor": "EcoLife Products",
      "productType": "Water Bottles",
      "status": "ACTIVE",
      "tags": [
        "eco-friendly",
        "bamboo",
        "sustainable",
        "water bottle",
        "reusable"
      ],
      "seo": {
        "title": "Eco-Friendly Bamboo Water Bottle - Sustainable Hydration | EcoLife",
        "description": "Discover our premium bamboo water bottle made from 100% natural materials. Perfect for sustainable living. Free shipping available."
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateProductComprehensive($product: ProductUpdateInput!) {
    productUpdate(product: $product) {
      userErrors {
        field
        message
      }
      product {
        id
        title
        handle
        vendor
        productType
        status
        tags
        seo {
          title
          description
        }
      }
    }
  }`,
  {
    variables: {
        "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Eco-Friendly Bamboo Water Bottle",
            "handle": "eco-bamboo-water-bottle",
            "vendor": "EcoLife Products",
            "productType": "Water Bottles",
            "status": "ACTIVE",
            "tags": [
                "eco-friendly",
                "bamboo",
                "sustainable",
                "water bottle",
                "reusable"
            ],
            "seo": {
                "title": "Eco-Friendly Bamboo Water Bottle - Sustainable Hydration | EcoLife",
                "description": "Discover our premium bamboo water bottle made from 100% natural materials. Perfect for sustainable living. Free shipping available."
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
  mutation UpdateProductComprehensive($product: ProductUpdateInput!) {
    productUpdate(product: $product) {
      userErrors {
        field
        message
      }
      product {
        id
        title
        handle
        vendor
        productType
        status
        tags
        seo {
          title
          description
        }
      }
    }
  }
QUERY

variables = {
  "product": {
    "id": "gid://shopify/Product/108828309",
    "title": "Eco-Friendly Bamboo Water Bottle",
    "handle": "eco-bamboo-water-bottle",
    "vendor": "EcoLife Products",
    "productType": "Water Bottles",
    "status": "ACTIVE",
    "tags": [
      "eco-friendly",
      "bamboo",
      "sustainable",
      "water bottle",
      "reusable"
    ],
    "seo": {
      "title": "Eco-Friendly Bamboo Water Bottle - Sustainable Hydration | EcoLife",
      "description": "Discover our premium bamboo water bottle made from 100% natural materials. Perfect for sustainable living. Free shipping available."
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateProductComprehensive($product: ProductUpdateInput!) {
      productUpdate(product: $product) {
        userErrors {
          field
          message
        }
        product {
          id
          title
          handle
          vendor
          productType
          status
          tags
          seo {
            title
            description
          }
        }
      }
    }`,
    "variables": {
        "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Eco-Friendly Bamboo Water Bottle",
            "handle": "eco-bamboo-water-bottle",
            "vendor": "EcoLife Products",
            "productType": "Water Bottles",
            "status": "ACTIVE",
            "tags": [
                "eco-friendly",
                "bamboo",
                "sustainable",
                "water bottle",
                "reusable"
            ],
            "seo": {
                "title": "Eco-Friendly Bamboo Water Bottle - Sustainable Hydration | EcoLife",
                "description": "Discover our premium bamboo water bottle made from 100% natural materials. Perfect for sustainable living. Free shipping available."
            }
        }
    },
  },
});
``` #### Response

```json
{
  "productUpdate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Eco-Friendly Bamboo Water Bottle",
      "handle": "eco-bamboo-water-bottle",
      "vendor": "EcoLife Products",
      "productType": "Water Bottles",
      "status": "ACTIVE",
      "tags": [
        "bamboo",
        "eco-friendly",
        "reusable",
        "sustainable",
        "water bottle"
      ],
      "seo": {
        "title": "Eco-Friendly Bamboo Water Bottle - Sustainable Hydration | EcoLife",
        "description": "Discover our premium bamboo water bottle made from 100% natural materials. Perfect for sustainable living. Free shipping available."
      }
    }
  }
}
``` 
*   ### Update a product with custom metafields

#### Description

Update a product with custom metafields to track additional product information like care instructions, material composition, and warranty details. This example returns the product's ID, title, handle, and metafields. Learn more about using [metafields](https://shopify.dev/docs/apps/build/custom-data).

#### Query

```graphql
mutation UpdateProductWithMetafields($product: ProductUpdateInput!) {
  productUpdate(product: $product) {
    userErrors {
      field
      message
    }
    product {
      id
      title
      handle
      metafields(first: 10) {
        edges {
          node {
            id
            namespace
            key
            value
            type
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "product": {
    "id": "gid://shopify/Product/108828309",
    "title": "Premium Cotton T-Shirt",
    "handle": "premium-cotton-tshirt",
    "metafields": [
      {
        "namespace": "custom",
        "key": "care_instructions",
        "value": "Machine wash cold, tumble dry low, do not bleach",
        "type": "single_line_text_field"
      },
      {
        "namespace": "custom",
        "key": "material_composition",
        "value": "100% Organic Cotton",
        "type": "single_line_text_field"
      },
      {
        "namespace": "warranty",
        "key": "warranty_period",
        "value": "12",
        "type": "number_integer"
      },
      {
        "namespace": "inventory",
        "key": "supplier_code",
        "value": "SUP-001-TCH",
        "type": "single_line_text_field"
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
"query": "mutation UpdateProductWithMetafields($product: ProductUpdateInput!) { productUpdate(product: $product) { userErrors { field message } product { id title handle metafields(first: 10) { edges { node { id namespace key value type } } } } } }",
 "variables": {
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Premium Cotton T-Shirt",
      "handle": "premium-cotton-tshirt",
      "metafields": [
        {
          "namespace": "custom",
          "key": "care_instructions",
          "value": "Machine wash cold, tumble dry low, do not bleach",
          "type": "single_line_text_field"
        },
        {
          "namespace": "custom",
          "key": "material_composition",
          "value": "100% Organic Cotton",
          "type": "single_line_text_field"
        },
        {
          "namespace": "warranty",
          "key": "warranty_period",
          "value": "12",
          "type": "number_integer"
        },
        {
          "namespace": "inventory",
          "key": "supplier_code",
          "value": "SUP-001-TCH",
          "type": "single_line_text_field"
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
  mutation UpdateProductWithMetafields($product: ProductUpdateInput!) {
    productUpdate(product: $product) {
      userErrors {
        field
        message
      }
      product {
        id
        title
        handle
        metafields(first: 10) {
          edges {
            node {
              id
              namespace
              key
              value
              type
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Premium Cotton T-Shirt",
            "handle": "premium-cotton-tshirt",
            "metafields": [
                {
                    "namespace": "custom",
                    "key": "care_instructions",
                    "value": "Machine wash cold, tumble dry low, do not bleach",
                    "type": "single_line_text_field"
                },
                {
                    "namespace": "custom",
                    "key": "material_composition",
                    "value": "100% Organic Cotton",
                    "type": "single_line_text_field"
                },
                {
                    "namespace": "warranty",
                    "key": "warranty_period",
                    "value": "12",
                    "type": "number_integer"
                },
                {
                    "namespace": "inventory",
                    "key": "supplier_code",
                    "value": "SUP-001-TCH",
                    "type": "single_line_text_field"
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
  mutation UpdateProductWithMetafields($product: ProductUpdateInput!) {
    productUpdate(product: $product) {
      userErrors {
        field
        message
      }
      product {
        id
        title
        handle
        metafields(first: 10) {
          edges {
            node {
              id
              namespace
              key
              value
              type
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "product": {
    "id": "gid://shopify/Product/108828309",
    "title": "Premium Cotton T-Shirt",
    "handle": "premium-cotton-tshirt",
    "metafields": [
      {
        "namespace": "custom",
        "key": "care_instructions",
        "value": "Machine wash cold, tumble dry low, do not bleach",
        "type": "single_line_text_field"
      },
      {
        "namespace": "custom",
        "key": "material_composition",
        "value": "100% Organic Cotton",
        "type": "single_line_text_field"
      },
      {
        "namespace": "warranty",
        "key": "warranty_period",
        "value": "12",
        "type": "number_integer"
      },
      {
        "namespace": "inventory",
        "key": "supplier_code",
        "value": "SUP-001-TCH",
        "type": "single_line_text_field"
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
    "query": `mutation UpdateProductWithMetafields($product: ProductUpdateInput!) {
      productUpdate(product: $product) {
        userErrors {
          field
          message
        }
        product {
          id
          title
          handle
          metafields(first: 10) {
            edges {
              node {
                id
                namespace
                key
                value
                type
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Premium Cotton T-Shirt",
            "handle": "premium-cotton-tshirt",
            "metafields": [
                {
                    "namespace": "custom",
                    "key": "care_instructions",
                    "value": "Machine wash cold, tumble dry low, do not bleach",
                    "type": "single_line_text_field"
                },
                {
                    "namespace": "custom",
                    "key": "material_composition",
                    "value": "100% Organic Cotton",
                    "type": "single_line_text_field"
                },
                {
                    "namespace": "warranty",
                    "key": "warranty_period",
                    "value": "12",
                    "type": "number_integer"
                },
                {
                    "namespace": "inventory",
                    "key": "supplier_code",
                    "value": "SUP-001-TCH",
                    "type": "single_line_text_field"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "productUpdate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/108828309",
      "title": "Premium Cotton T-Shirt",
      "handle": "premium-cotton-tshirt",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/61655654",
              "namespace": "translations",
              "key": "title_de",
              "value": "produkt",
              "type": "single_line_text_field"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/147010266",
              "namespace": "information",
              "key": "exporters",
              "value": "[\"Brazil\",\"USA\",\"Mexico\",\"Canada\"]",
              "type": "list.single_line_text_field"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/204658793",
              "namespace": "information",
              "key": "recyclable",
              "value": "false",
              "type": "boolean"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/485513001",
              "namespace": "information",
              "key": "model",
              "value": "Ski Magic",
              "type": "single_line_text_field"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/632448133",
              "namespace": "information",
              "key": "materials",
              "value": "[\"carbon fiber 4\",\"plastic - HDPE\",\"velcro\"]",
              "type": "list.single_line_text_field"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/911569663",
              "namespace": "information",
              "key": "competitor_cost",
              "value": "50.35",
              "type": "float"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1007023387",
              "namespace": "information",
              "key": "year_released",
              "value": "2019",
              "type": "number_integer"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229912",
              "namespace": "custom",
              "key": "care_instructions",
              "value": "Machine wash cold, tumble dry low, do not bleach",
              "type": "single_line_text_field"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229913",
              "namespace": "custom",
              "key": "material_composition",
              "value": "100% Organic Cotton",
              "type": "single_line_text_field"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229914",
              "namespace": "warranty",
              "key": "warranty_period",
              "value": "12",
              "type": "number_integer"
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Update a product's title

#### Description

Update a product's title and return the product's ID. Learn more about [editing product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/edit-data).

#### Query

```graphql
mutation {
  productUpdate(product: {id: "gid://shopify/Product/108828309", title: "Sweet new product - GraphQL Edition"}) {
    product {
      id
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
"query": "mutation { productUpdate(product: {id: \"gid://shopify/Product/108828309\", title: \"Sweet new product - GraphQL Edition\"}) { product { id } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productUpdate(product: {id: "gid://shopify/Product/108828309", title: "Sweet new product - GraphQL Edition"}) {
      product {
        id
      }
    }
  }`,
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
  mutation {
    productUpdate(product: {id: "gid://shopify/Product/108828309", title: "Sweet new product - GraphQL Edition"}) {
      product {
        id
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    productUpdate(product: {id: "gid://shopify/Product/108828309", title: "Sweet new product - GraphQL Edition"}) {
      product {
        id
      }
    }
  }`,
});
``` #### Response

```json
{
  "productUpdate": {
    "product": {
      "id": "gid://shopify/Product/108828309"
    }
  }
}
``` 
*   ### productUpdate reference

Examples
--------

Add new media to an existing product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpdateProductWithNewMedia(%24product%3A%20ProductUpdateInput!%2C%20%24media%3A%20%5BCreateMediaInput!%5D)%20%7B%0A%20%20productUpdate(product%3A%20%24product%2C%20media%3A%20%24media)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20media(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20alt%0A%20%20%20%20%20%20%20%20%20%20mediaContentType%0A%20%20%20%20%20%20%20%20%20%20preview%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22product%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F912855135%22%0A%20%20%7D%2C%0A%20%20%22media%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22originalSource%22%3A%20%22https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fbrochure%2Fassets%2Fsell%2Fimage%2Fimage-%40artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png%22%2C%0A%20%20%20%20%20%20%22alt%22%3A%20%22Gray%20helmet%20for%20bikers%22%2C%0A%20%20%20%20%20%20%22mediaContentType%22%3A%20%22IMAGE%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22originalSource%22%3A%20%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4L8VbGRibj8%26list%3DPLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz%22%2C%0A%20%20%20%20%20%20%22alt%22%3A%20%22Testing%20helmet%20resistance%20against%20impacts%22%2C%0A%20%20%20%20%20%20%22mediaContentType%22%3A%20%22EXTERNAL_VIDEO%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {

 productUpdate(product: $product, media: $media) {

 product {

 id

 media(first: 10) {

 nodes {

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

variables:{

"product":{

"id":"gid://shopify/Product/912855135"

},

"media":[

{

"originalSource":"https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",

"alt":"Gray helmet for bikers",

"mediaContentType":"IMAGE"

},

{

```
mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
  productUpdate(product: $product, media: $media) {
    product {
      id
      media(first: 10) {
        nodes {
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) { productUpdate(product: $product, media: $media) { product { id media(first: 10) { nodes { alt mediaContentType preview { status } } } } userErrors { field message } } }",
 "variables": {
    "product": {
      "id": "gid://shopify/Product/912855135"
    },
    "media": [
      {
        "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
        "alt": "Gray helmet for bikers",
        "mediaContentType": "IMAGE"
      },
      {
        "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
        "alt": "Testing helmet resistance against impacts",
        "mediaContentType": "EXTERNAL_VIDEO"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
    productUpdate(product: $product, media: $media) {
      product {
        id
        media(first: 10) {
          nodes {
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
        "product": {
            "id": "gid://shopify/Product/912855135"
        },
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
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
    "query": `mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
      productUpdate(product: $product, media: $media) {
        product {
          id
          media(first: 10) {
            nodes {
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
        "product": {
            "id": "gid://shopify/Product/912855135"
        },
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
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
  mutation UpdateProductWithNewMedia($product: ProductUpdateInput!, $media: [CreateMediaInput!]) {
    productUpdate(product: $product, media: $media) {
      product {
        id
        media(first: 10) {
          nodes {
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
  "product": {
    "id": "gid://shopify/Product/912855135"
  },
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
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

›

⌄

⌄

⌄

⌄

⌄

{

"product": {

"id": "gid://shopify/Product/912855135"

},

"media": [

{

"originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",

"alt": "Gray helmet for bikers",

"mediaContentType": "IMAGE"

},

{

"originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",

"alt": "Testing helmet resistance against impacts",

"mediaContentType": "EXTERNAL_VIDEO"

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

{

"productUpdate": {

"product": {

"id": "gid://shopify/Product/912855135",

"media": {

"nodes": [

{

"alt": "Gray helmet for bikers",

"mediaContentType": "IMAGE",

"preview": {

"status": "UPLOADED"

}

},

{

"alt": "Testing helmet resistance against impacts",

"mediaContentType": "EXTERNAL_VIDEO",

"preview": {

"status": "UPLOADED"

}

}

]

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*