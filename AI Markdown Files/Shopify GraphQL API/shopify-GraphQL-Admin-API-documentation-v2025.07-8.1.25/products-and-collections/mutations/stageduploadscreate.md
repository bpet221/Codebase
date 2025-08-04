---
title: "stagedUploadsCreate"
description: "Shopify GraphQL Admin API documentation for stageduploadscreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: stagedUploadsCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate

Markdown Content:
stagedUploadsCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#main-content)

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

[Anchor to stagedUploadsCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#top)
staged Uploads Create
=====================

mutation

Creates staged upload targets for file uploads such as images, videos, and 3D models.

Use the `stagedUploadsCreate` mutation instead of direct file creation mutations when:

*   **Uploading large files**: Files over a few MB benefit from staged uploads for better reliability
*   **Uploading media files**: Videos, 3D models, and high-resolution images
*   **Bulk importing**: CSV files, product catalogs, or other bulk data
*   **Using external file sources**: When files are stored remotely and need to be transferred to Shopify

For small files or simple use cases, you can use [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate) directly by providing the file content inline.

The `stagedUploadsCreate` mutation is the first step in Shopify's secure two-step upload process:

**Step 1: Create staged upload targets** (this mutation)

*   Generate secure, temporary upload URLs for your files.
*   Receive authentication parameters for the upload.

**Step 2: Upload files and create assets**

*   Upload your files directly to the provided URLs using the authentication parameters.
*   Use the returned `resourceUrl` as the `originalSource` in subsequent mutations like `fileCreate`.

This approach provides better performance for large files, handles network interruptions gracefully, and ensures secure file transfers to Shopify's storage infrastructure.

* * *

Note

File size is required when uploading [`VIDEO`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-VIDEO) or [`MODEL_3D`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-MODEL_3D) resources.

* * *

After creating staged upload targets, complete the process by:

1.   **Uploading files**: Send your files to the returned [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.url) using the provided [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for authentication
2.   **Creating file assets**: Use the [`resourceUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.resourceUrl) as the `originalSource` in mutations such as:
    *   [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Creates file assets from staged uploads
    *   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Updates products with new media from staged uploads

Learn more about [uploading media to Shopify](https://shopify.dev/apps/online-store/media/products).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#arguments-input)input

•[[Staged Upload Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput)

required

The information required to generate staged upload targets.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to StagedUploadsCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#returns)Staged Uploads Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to stagedTargets](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#returns-stagedTargets)staged Targets

•[[Staged Media Upload Target!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget)

The staged upload targets that were generated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create staged upload targets for a product media gallery

#### Description

Create staged upload targets for building a comprehensive product media gallery with images, videos, and 3D models. This example demonstrates creating upload targets for multiple media types that will be used in product galleries. The mutation returns upload URLs, resource URLs for accessing the files after upload, and all necessary [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for the upload process. Each target includes the upload endpoint, form parameters, and resource URLs for subsequent file operations. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [uploading files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads).

#### Query

```graphql
mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
  stagedUploadsCreate(input: $input) {
    stagedTargets {
      url
      resourceUrl
      parameters {
        name
        value
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
  "input": [
    {
      "filename": "product-hero-image.jpg",
      "mimeType": "image/jpeg",
      "httpMethod": "POST",
      "resource": "PRODUCT_IMAGE"
    },
    {
      "filename": "product-demo.mp4",
      "mimeType": "video/mp4",
      "fileSize": "2048000",
      "resource": "VIDEO"
    },
    {
      "filename": "product-model.glb",
      "mimeType": "model/gltf-binary",
      "fileSize": "512000",
      "resource": "MODEL_3D"
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
"query": "mutation stagedUploadsCreate($input: [StagedUploadInput!]!) { stagedUploadsCreate(input: $input) { stagedTargets { url resourceUrl parameters { name value } } userErrors { field message } } }",
 "variables": {
    "input": [
      {
        "filename": "product-hero-image.jpg",
        "mimeType": "image/jpeg",
        "httpMethod": "POST",
        "resource": "PRODUCT_IMAGE"
      },
      {
        "filename": "product-demo.mp4",
        "mimeType": "video/mp4",
        "fileSize": "2048000",
        "resource": "VIDEO"
      },
      {
        "filename": "product-model.glb",
        "mimeType": "model/gltf-binary",
        "fileSize": "512000",
        "resource": "MODEL_3D"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
        "input": [
            {
                "filename": "product-hero-image.jpg",
                "mimeType": "image/jpeg",
                "httpMethod": "POST",
                "resource": "PRODUCT_IMAGE"
            },
            {
                "filename": "product-demo.mp4",
                "mimeType": "video/mp4",
                "fileSize": "2048000",
                "resource": "VIDEO"
            },
            {
                "filename": "product-model.glb",
                "mimeType": "model/gltf-binary",
                "fileSize": "512000",
                "resource": "MODEL_3D"
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
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
  "input": [
    {
      "filename": "product-hero-image.jpg",
      "mimeType": "image/jpeg",
      "httpMethod": "POST",
      "resource": "PRODUCT_IMAGE"
    },
    {
      "filename": "product-demo.mp4",
      "mimeType": "video/mp4",
      "fileSize": "2048000",
      "resource": "VIDEO"
    },
    {
      "filename": "product-model.glb",
      "mimeType": "model/gltf-binary",
      "fileSize": "512000",
      "resource": "MODEL_3D"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          resourceUrl
          parameters {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "filename": "product-hero-image.jpg",
                "mimeType": "image/jpeg",
                "httpMethod": "POST",
                "resource": "PRODUCT_IMAGE"
            },
            {
                "filename": "product-demo.mp4",
                "mimeType": "video/mp4",
                "fileSize": "2048000",
                "resource": "VIDEO"
            },
            {
                "filename": "product-model.glb",
                "mimeType": "model/gltf-binary",
                "fileSize": "512000",
                "resource": "MODEL_3D"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "stagedUploadsCreate": {
    "stagedTargets": [
      {
        "url": "https://snowdevil.myshopify.com/admin/tmp/files",
        "resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",
        "parameters": [
          {
            "name": "filename",
            "value": "product-hero-image.jpg"
          },
          {
            "name": "mime_type",
            "value": "image/jpeg"
          },
          {
            "name": "key",
            "value": "tmp/26371970/products/9dd0ad3b-38b0-453a-ba73-b647480faaf8/product-hero-image.jpg"
          }
        ]
      },
      {
        "url": "http://upload.example.com/video-target",
        "resourceUrl": "http://upload.example.com/video-target?external_video_id=25",
        "parameters": [
          {
            "name": "GoogleAccessId",
            "value": "video-development@video-production123.iam.gserviceaccount.com"
          },
          {
            "name": "key",
            "value": "dev/o/v/product-demo.mp4"
          },
          {
            "name": "policy",
            "value": "abc123"
          },
          {
            "name": "signature",
            "value": "abc123"
          }
        ]
      },
      {
        "url": "http://upload.example.com/model-target/dev/o/v/product-model.glb?external_model3d_id=25",
        "resourceUrl": "http://upload.example.com/model-target/dev/o/v/product-model.glb?external_model3d_id=25",
        "parameters": [
          {
            "name": "GoogleAccessId",
            "value": "video-development@video-production123.iam.gserviceaccount.com"
          },
          {
            "name": "key",
            "value": "dev/o/v/product-model.glb"
          },
          {
            "name": "policy",
            "value": "abc123"
          },
          {
            "name": "signature",
            "value": "abc123"
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create staged upload targets for different resource types

#### Description

Create [staged media upload targets](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget) for different resource types including collection images, shop images, and URL redirect imports. This example demonstrates the flexibility of the staged upload system across various Shopify features and workflows. Each resource type has specific requirements and permissions, and the response includes all necessary upload parameters. The resource URLs allow you to access and manage the uploaded files within their respective contexts.

#### Query

```graphql
mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
  stagedUploadsCreate(input: $input) {
    stagedTargets {
      url
      resourceUrl
      parameters {
        name
        value
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
  "input": [
    {
      "filename": "collection-banner.jpg",
      "mimeType": "image/jpeg",
      "resource": "COLLECTION_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "logo-update.png",
      "mimeType": "image/png",
      "resource": "SHOP_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "url-redirects.csv",
      "mimeType": "text/csv",
      "resource": "URL_REDIRECT_IMPORT",
      "httpMethod": "POST"
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
"query": "mutation stagedUploadsCreate($input: [StagedUploadInput!]!) { stagedUploadsCreate(input: $input) { stagedTargets { url resourceUrl parameters { name value } } userErrors { field message } } }",
 "variables": {
    "input": [
      {
        "filename": "collection-banner.jpg",
        "mimeType": "image/jpeg",
        "resource": "COLLECTION_IMAGE",
        "httpMethod": "POST"
      },
      {
        "filename": "logo-update.png",
        "mimeType": "image/png",
        "resource": "SHOP_IMAGE",
        "httpMethod": "POST"
      },
      {
        "filename": "url-redirects.csv",
        "mimeType": "text/csv",
        "resource": "URL_REDIRECT_IMPORT",
        "httpMethod": "POST"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
        "input": [
            {
                "filename": "collection-banner.jpg",
                "mimeType": "image/jpeg",
                "resource": "COLLECTION_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "logo-update.png",
                "mimeType": "image/png",
                "resource": "SHOP_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "url-redirects.csv",
                "mimeType": "text/csv",
                "resource": "URL_REDIRECT_IMPORT",
                "httpMethod": "POST"
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
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
  "input": [
    {
      "filename": "collection-banner.jpg",
      "mimeType": "image/jpeg",
      "resource": "COLLECTION_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "logo-update.png",
      "mimeType": "image/png",
      "resource": "SHOP_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "url-redirects.csv",
      "mimeType": "text/csv",
      "resource": "URL_REDIRECT_IMPORT",
      "httpMethod": "POST"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          resourceUrl
          parameters {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "filename": "collection-banner.jpg",
                "mimeType": "image/jpeg",
                "resource": "COLLECTION_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "logo-update.png",
                "mimeType": "image/png",
                "resource": "SHOP_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "url-redirects.csv",
                "mimeType": "text/csv",
                "resource": "URL_REDIRECT_IMPORT",
                "httpMethod": "POST"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "stagedUploadsCreate": {
    "stagedTargets": [
      {
        "url": "https://snowdevil.myshopify.com/admin/tmp/files",
        "resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",
        "parameters": [
          {
            "name": "filename",
            "value": "collection-banner.jpg"
          },
          {
            "name": "mime_type",
            "value": "image/jpeg"
          },
          {
            "name": "key",
            "value": "tmp/26371970/collections/a995e8bd-7de1-45a0-8821-e59864076603/collection-banner.jpg"
          }
        ]
      },
      {
        "url": "https://snowdevil.myshopify.com/admin/tmp/files",
        "resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",
        "parameters": [
          {
            "name": "filename",
            "value": "logo-update.png"
          },
          {
            "name": "mime_type",
            "value": "image/png"
          },
          {
            "name": "key",
            "value": "tmp/26371970/files/13f1ff20-8d21-434d-bf40-e7a41ffd1124/logo-update.png"
          }
        ]
      },
      {
        "url": "https://snowdevil.myshopify.com/admin/tmp/files",
        "resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",
        "parameters": [
          {
            "name": "filename",
            "value": "url-redirects.csv"
          },
          {
            "name": "mime_type",
            "value": "text/csv"
          },
          {
            "name": "key",
            "value": "tmp/26371970/redirect_imports/491a8a08-582b-4b11-81c4-9bf6c920cfd0/url-redirects.csv"
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Handle staged upload validation errors and failures

#### Description

Handle common validation errors when creating staged upload targets, including unsupported file types and invalid filenames. This example shows how the mutation responds to problematic input with detailed error messages and field-specific error codes. The response includes both successful [targets](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget) and detailed error information for failed requests.

#### Query

```graphql
mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
  stagedUploadsCreate(input: $input) {
    stagedTargets {
      url
      resourceUrl
      parameters {
        name
        value
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
  "input": [
    {
      "filename": "valid-image.jpg",
      "mimeType": "image/jpeg",
      "resource": "PRODUCT_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "unsupported-file.xyz",
      "mimeType": "application/xyz",
      "resource": "PRODUCT_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "https://invalid.example.com/filename/with/slashes.jpg",
      "mimeType": "image/jpeg",
      "resource": "PRODUCT_IMAGE",
      "httpMethod": "POST"
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
"query": "mutation stagedUploadsCreate($input: [StagedUploadInput!]!) { stagedUploadsCreate(input: $input) { stagedTargets { url resourceUrl parameters { name value } } userErrors { field message } } }",
 "variables": {
    "input": [
      {
        "filename": "valid-image.jpg",
        "mimeType": "image/jpeg",
        "resource": "PRODUCT_IMAGE",
        "httpMethod": "POST"
      },
      {
        "filename": "unsupported-file.xyz",
        "mimeType": "application/xyz",
        "resource": "PRODUCT_IMAGE",
        "httpMethod": "POST"
      },
      {
        "filename": "https://invalid.example.com/filename/with/slashes.jpg",
        "mimeType": "image/jpeg",
        "resource": "PRODUCT_IMAGE",
        "httpMethod": "POST"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
        "input": [
            {
                "filename": "valid-image.jpg",
                "mimeType": "image/jpeg",
                "resource": "PRODUCT_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "unsupported-file.xyz",
                "mimeType": "application/xyz",
                "resource": "PRODUCT_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "https://invalid.example.com/filename/with/slashes.jpg",
                "mimeType": "image/jpeg",
                "resource": "PRODUCT_IMAGE",
                "httpMethod": "POST"
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
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
  "input": [
    {
      "filename": "valid-image.jpg",
      "mimeType": "image/jpeg",
      "resource": "PRODUCT_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "unsupported-file.xyz",
      "mimeType": "application/xyz",
      "resource": "PRODUCT_IMAGE",
      "httpMethod": "POST"
    },
    {
      "filename": "https://invalid.example.com/filename/with/slashes.jpg",
      "mimeType": "image/jpeg",
      "resource": "PRODUCT_IMAGE",
      "httpMethod": "POST"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          resourceUrl
          parameters {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "filename": "valid-image.jpg",
                "mimeType": "image/jpeg",
                "resource": "PRODUCT_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "unsupported-file.xyz",
                "mimeType": "application/xyz",
                "resource": "PRODUCT_IMAGE",
                "httpMethod": "POST"
            },
            {
                "filename": "https://invalid.example.com/filename/with/slashes.jpg",
                "mimeType": "image/jpeg",
                "resource": "PRODUCT_IMAGE",
                "httpMethod": "POST"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "stagedUploadsCreate": {
    "stagedTargets": [
      {
        "url": "https://snowdevil.myshopify.com/admin/tmp/files",
        "resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",
        "parameters": [
          {
            "name": "filename",
            "value": "valid-image.jpg"
          },
          {
            "name": "mime_type",
            "value": "image/jpeg"
          },
          {
            "name": "key",
            "value": "tmp/26371970/products/0fede6f2-195d-44c3-96e9-573c7c863cd1/valid-image.jpg"
          }
        ]
      },
      {
        "url": null,
        "resourceUrl": null,
        "parameters": []
      },
      {
        "url": "https://snowdevil.myshopify.com/admin/tmp/files",
        "resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",
        "parameters": [
          {
            "name": "filename",
            "value": "slashes.jpg"
          },
          {
            "name": "mime_type",
            "value": "image/jpeg"
          },
          {
            "name": "key",
            "value": "tmp/26371970/products/0507d1e2-af22-49cb-ab95-c10a4b19c9c0/slashes.jpg"
          }
        ]
      }
    ],
    "userErrors": [
      {
        "field": [
          "input",
          "1",
          "mimeType"
        ],
        "message": "unsupported-file.xyz: (application/xyz) is not a recognized format"
      }
    ]
  }
}
``` 
*   ### stagedUploadsCreate reference

Examples
--------

Create staged upload targets for a product media gallery

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20stagedUploadsCreate(%24input%3A%20%5BStagedUploadInput!%5D!)%20%7B%0A%20%20stagedUploadsCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20stagedTargets%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20resourceUrl%0A%20%20%20%20%20%20parameters%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22filename%22%3A%20%22product-hero-image.jpg%22%2C%0A%20%20%20%20%20%20%22mimeType%22%3A%20%22image%2Fjpeg%22%2C%0A%20%20%20%20%20%20%22httpMethod%22%3A%20%22POST%22%2C%0A%20%20%20%20%20%20%22resource%22%3A%20%22PRODUCT_IMAGE%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22filename%22%3A%20%22product-demo.mp4%22%2C%0A%20%20%20%20%20%20%22mimeType%22%3A%20%22video%2Fmp4%22%2C%0A%20%20%20%20%20%20%22fileSize%22%3A%20%222048000%22%2C%0A%20%20%20%20%20%20%22resource%22%3A%20%22VIDEO%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22filename%22%3A%20%22product-model.glb%22%2C%0A%20%20%20%20%20%20%22mimeType%22%3A%20%22model%2Fgltf-binary%22%2C%0A%20%20%20%20%20%20%22fileSize%22%3A%20%22512000%22%2C%0A%20%20%20%20%20%20%22resource%22%3A%20%22MODEL_3D%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {

 stagedUploadsCreate(input: $input) {

 stagedTargets {

 url

 resourceUrl

 parameters {

 name

 value

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

"input":[

{

"filename":"product-hero-image.jpg",

"mimeType":"image/jpeg",

"httpMethod":"POST",

"resource":"PRODUCT_IMAGE"

},

{

"filename":"product-demo.mp4",

"mimeType":"video/mp4",

"fileSize":"2048000",

"resource":"VIDEO"

},

{

```
mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
  stagedUploadsCreate(input: $input) {
    stagedTargets {
      url
      resourceUrl
      parameters {
        name
        value
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
"query": "mutation stagedUploadsCreate($input: [StagedUploadInput!]!) { stagedUploadsCreate(input: $input) { stagedTargets { url resourceUrl parameters { name value } } userErrors { field message } } }",
 "variables": {
    "input": [
      {
        "filename": "product-hero-image.jpg",
        "mimeType": "image/jpeg",
        "httpMethod": "POST",
        "resource": "PRODUCT_IMAGE"
      },
      {
        "filename": "product-demo.mp4",
        "mimeType": "video/mp4",
        "fileSize": "2048000",
        "resource": "VIDEO"
      },
      {
        "filename": "product-model.glb",
        "mimeType": "model/gltf-binary",
        "fileSize": "512000",
        "resource": "MODEL_3D"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
        "input": [
            {
                "filename": "product-hero-image.jpg",
                "mimeType": "image/jpeg",
                "httpMethod": "POST",
                "resource": "PRODUCT_IMAGE"
            },
            {
                "filename": "product-demo.mp4",
                "mimeType": "video/mp4",
                "fileSize": "2048000",
                "resource": "VIDEO"
            },
            {
                "filename": "product-model.glb",
                "mimeType": "model/gltf-binary",
                "fileSize": "512000",
                "resource": "MODEL_3D"
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
    "query": `mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          resourceUrl
          parameters {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": [
            {
                "filename": "product-hero-image.jpg",
                "mimeType": "image/jpeg",
                "httpMethod": "POST",
                "resource": "PRODUCT_IMAGE"
            },
            {
                "filename": "product-demo.mp4",
                "mimeType": "video/mp4",
                "fileSize": "2048000",
                "resource": "VIDEO"
            },
            {
                "filename": "product-model.glb",
                "mimeType": "model/gltf-binary",
                "fileSize": "512000",
                "resource": "MODEL_3D"
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
  mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
    stagedUploadsCreate(input: $input) {
      stagedTargets {
        url
        resourceUrl
        parameters {
          name
          value
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
  "input": [
    {
      "filename": "product-hero-image.jpg",
      "mimeType": "image/jpeg",
      "httpMethod": "POST",
      "resource": "PRODUCT_IMAGE"
    },
    {
      "filename": "product-demo.mp4",
      "mimeType": "video/mp4",
      "fileSize": "2048000",
      "resource": "VIDEO"
    },
    {
      "filename": "product-model.glb",
      "mimeType": "model/gltf-binary",
      "fileSize": "512000",
      "resource": "MODEL_3D"
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

{

"input": [

{

"filename": "product-hero-image.jpg",

"mimeType": "image/jpeg",

"httpMethod": "POST",

"resource": "PRODUCT_IMAGE"

},

{

"filename": "product-demo.mp4",

"mimeType": "video/mp4",

"fileSize": "2048000",

"resource": "VIDEO"

},

{

"filename": "product-model.glb",

"mimeType": "model/gltf-binary",

"fileSize": "512000",

"resource": "MODEL_3D"

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

{

"stagedUploadsCreate": {

"stagedTargets": [

{

"url": "https://snowdevil.myshopify.com/admin/tmp/files",

"resourceUrl": "https://snowdevil.myshopify.com/admin/tmp/files",

"parameters": [

{

"name": "filename",

"value": "product-hero-image.jpg"

},

{

"name": "mime_type",

"value": "image/jpeg"

},

{

"name": "key",

"value": "tmp/26371970/products/9dd0ad3b-38b0-453a-ba73-b647480faaf8/product-hero-image.jpg"

}

]

},

{

"url": "http://upload.example.com/video-target",

"resourceUrl": "http://upload.example.com/video-target?external_video_id=25",

"parameters": [

{

"name": "GoogleAccessId",

"value": "video-development@video-production123.iam.gserviceaccount.com"

},

{

"name": "key",

"value": "dev/o/v/product-demo.mp4"

},

{

"name": "policy",

"value": "abc123"


---
*Content truncated at "Updates" section*