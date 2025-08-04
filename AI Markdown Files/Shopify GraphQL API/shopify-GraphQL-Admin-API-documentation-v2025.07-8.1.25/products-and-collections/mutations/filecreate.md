---
title: "fileCreate"
description: "Shopify GraphQL Admin API documentation for filecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fileCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate

Markdown Content:
fileCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

Collapse sidebar

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
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   
Products And Collections

    *   Queries   
    *   
Mutations

        *   [bulk Product Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate)
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
        *   [delivery Profile Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate)
        *   [delivery Profile Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileupdate)
        *   [file Acknowledge Update Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileacknowledgeupdatefailed)
        *   [file Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate)
        *   [file Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete)
        *   [file Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate)
        *   [market Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate)
        *   [market Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate)
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
        *   [publication Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationcreate)
        *   [publication Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate)
        *   [quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantitypricingbyvariantupdate)
        *   [quantity Rules Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd)
        *   [quantity Rules Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesdelete)
        *   [saved Search Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchdelete)
        *   [selling Plan Group Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproducts)
        *   [selling Plan Group Add Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproductvariants)
        *   [selling Plan Group Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate)
        *   [selling Plan Group Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupdelete)
        *   [selling Plan Group Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproducts)
        *   [selling Plan Group Remove Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproductvariants)
        *   [selling Plan Group Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate)
        *   [staged Uploads Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate)
        *   [translations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister)
        *   [translations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove)

    *   Objects   

*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to fileCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#top)
file Create
===========

mutation

Requires `write_files` access scope, `write_themes` access scope or `write_images` access scope. Also: Users must have create files permissions.

Creates file assets for a store from external URLs or files that were previously uploaded using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation.

Use the `fileCreate` mutation to add various types of media and documents to your store. These files are added to the [**Files** page](https://shopify.com/admin/settings/files) in the Shopify admin and can be referenced by other resources in your store.

The `fileCreate` mutation supports multiple file types:

*   **Images**: Product photos, variant images, and general store imagery
*   **Videos**: Shopify-hosted videos for product demonstrations and marketing
*   **External videos**: YouTube and Vimeo videos for enhanced product experiences
*   **3D models**: Interactive 3D representations of products
*   **Generic files**: PDFs, documents, and other file types for store resources

The mutation handles duplicate filenames using configurable resolution modes that automatically append UUIDs, replace existing files, or raise errors when conflicts occur.

* * *

Note

Files are processed asynchronously. Check the [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File#fields-fileStatus) field to monitor processing completion. The maximum number of files that can be created in a single batch is 250.

* * *

After creating files, you can make subsequent updates using the following mutations:

*   [`fileUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileUpdate): Update file properties such as alt text or replace file contents while preserving the same URL.
*   [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

To list all files in your store, use the [`files`](https://shopify.dev/docs/api/admin-graphql/latest/queries/files) query.

Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#arguments)
Arguments
---------

[Anchor to files](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#arguments-files)files

•[[File Create Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileCreateInput)

required

List of new files to be created.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to FileCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#returns)File Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to files](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#returns-files)files

•[[File!]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

The newly created files.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate#returns-userErrors)user Errors

•[[Files User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a file using a staged upload URL

#### Description

Create a file asset using a staged upload URL after uploading the file using the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate) mutation. This two-step process allows you to first upload large files to a temporary staging location, then create the file record. The example demonstrates creating an image file from a staged upload, which is ideal for large files or batch uploads. The response returns the file ID, upload status, alt text, creation timestamp, and image dimensions. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [uploading files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads).

#### Query

```graphql
mutation fileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
      ... on MediaImage {
        image {
          width
          height
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
  "files": [
    {
      "alt": "Product showcase image from staged upload",
      "contentType": "IMAGE",
      "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
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
"query": "mutation fileCreate($files: [FileCreateInput!]!) { fileCreate(files: $files) { files { id fileStatus alt createdAt ... on MediaImage { image { width height } } } userErrors { field message } } }",
 "variables": {
    "files": [
      {
        "alt": "Product showcase image from staged upload",
        "contentType": "IMAGE",
        "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
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
        "files": [
            {
                "alt": "Product showcase image from staged upload",
                "contentType": "IMAGE",
                "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
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
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
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
  "files": [
    {
      "alt": "Product showcase image from staged upload",
      "contentType": "IMAGE",
      "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
          ... on MediaImage {
            image {
              width
              height
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
        "files": [
            {
                "alt": "Product showcase image from staged upload",
                "contentType": "IMAGE",
                "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileCreate": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273436",
        "fileStatus": "READY",
        "alt": "Product showcase image from staged upload",
        "createdAt": "2025-06-21T03:47:03Z",
        "image": {
          "width": 372,
          "height": 110
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create mixed media files with custom filenames

#### Description

Create different types of media files including images and documents with custom filenames for better organization. This example demonstrates how to handle multiple [`contentType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType) values in a single file creation operation with descriptive naming conventions. The mutation downloads content from external URLs and creates file records simultaneously, each with appropriate metadata and custom filenames that reflect their purpose. The response returns file IDs, upload status, alt text, and creation timestamps, plus type-specific data like image dimensions and document URLs.

#### Query

```graphql
mutation fileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
      ... on MediaImage {
        image {
          width
          height
        }
      }
      ... on GenericFile {
        url
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
  "files": [
    {
      "alt": "High-resolution product showcase image",
      "contentType": "IMAGE",
      "originalSource": "https://burst.shopifycdn.com/photos/product-photo.jpg",
      "filename": "product-hero-image.jpg"
    },
    {
      "alt": "Technical specifications and dimensions",
      "contentType": "FILE",
      "originalSource": "https://example.com/specifications.pdf",
      "filename": "technical-specifications.pdf"
    },
    {
      "alt": "Product inventory and pricing data",
      "contentType": "FILE",
      "originalSource": "https://example.com/product-data.xlsx",
      "filename": "product-data-sheet.xlsx"
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
"query": "mutation fileCreate($files: [FileCreateInput!]!) { fileCreate(files: $files) { files { id fileStatus alt createdAt ... on MediaImage { image { width height } } ... on GenericFile { url } } userErrors { field message } } }",
 "variables": {
    "files": [
      {
        "alt": "High-resolution product showcase image",
        "contentType": "IMAGE",
        "originalSource": "https://burst.shopifycdn.com/photos/product-photo.jpg",
        "filename": "product-hero-image.jpg"
      },
      {
        "alt": "Technical specifications and dimensions",
        "contentType": "FILE",
        "originalSource": "https://example.com/specifications.pdf",
        "filename": "technical-specifications.pdf"
      },
      {
        "alt": "Product inventory and pricing data",
        "contentType": "FILE",
        "originalSource": "https://example.com/product-data.xlsx",
        "filename": "product-data-sheet.xlsx"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
          }
        }
        ... on GenericFile {
          url
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
        "files": [
            {
                "alt": "High-resolution product showcase image",
                "contentType": "IMAGE",
                "originalSource": "https://burst.shopifycdn.com/photos/product-photo.jpg",
                "filename": "product-hero-image.jpg"
            },
            {
                "alt": "Technical specifications and dimensions",
                "contentType": "FILE",
                "originalSource": "https://example.com/specifications.pdf",
                "filename": "technical-specifications.pdf"
            },
            {
                "alt": "Product inventory and pricing data",
                "contentType": "FILE",
                "originalSource": "https://example.com/product-data.xlsx",
                "filename": "product-data-sheet.xlsx"
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
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
          }
        }
        ... on GenericFile {
          url
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
  "files": [
    {
      "alt": "High-resolution product showcase image",
      "contentType": "IMAGE",
      "originalSource": "https://burst.shopifycdn.com/photos/product-photo.jpg",
      "filename": "product-hero-image.jpg"
    },
    {
      "alt": "Technical specifications and dimensions",
      "contentType": "FILE",
      "originalSource": "https://example.com/specifications.pdf",
      "filename": "technical-specifications.pdf"
    },
    {
      "alt": "Product inventory and pricing data",
      "contentType": "FILE",
      "originalSource": "https://example.com/product-data.xlsx",
      "filename": "product-data-sheet.xlsx"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
          ... on MediaImage {
            image {
              width
              height
            }
          }
          ... on GenericFile {
            url
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "files": [
            {
                "alt": "High-resolution product showcase image",
                "contentType": "IMAGE",
                "originalSource": "https://burst.shopifycdn.com/photos/product-photo.jpg",
                "filename": "product-hero-image.jpg"
            },
            {
                "alt": "Technical specifications and dimensions",
                "contentType": "FILE",
                "originalSource": "https://example.com/specifications.pdf",
                "filename": "technical-specifications.pdf"
            },
            {
                "alt": "Product inventory and pricing data",
                "contentType": "FILE",
                "originalSource": "https://example.com/product-data.xlsx",
                "filename": "product-data-sheet.xlsx"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileCreate": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273439",
        "fileStatus": "READY",
        "alt": "High-resolution product showcase image",
        "createdAt": "2025-06-21T03:47:11Z",
        "image": {
          "width": 372,
          "height": 110
        }
      },
      {
        "id": "gid://shopify/GenericFile/1072273440",
        "fileStatus": "READY",
        "alt": "Technical specifications and dimensions",
        "createdAt": "2025-06-21T03:47:11Z",
        "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/specifications.pdf?v=1750477634"
      },
      {
        "id": "gid://shopify/GenericFile/1072273441",
        "fileStatus": "READY",
        "alt": "Product inventory and pricing data",
        "createdAt": "2025-06-21T03:47:12Z",
        "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/product-data.xlsx?v=1750477637"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create product documentation files from external URLs

#### Description

Create product documentation files such as user manuals, warranty information, and installation guides. This example shows how to create PDF and text files from external URLs that customers can download for product support. The response returns file IDs, upload status, alt text, creation timestamps, and download URLs for each created document. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [uploading files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads).

#### Query

```graphql
mutation fileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
      ... on GenericFile {
        url
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
  "files": [
    {
      "alt": "Complete user manual and setup instructions",
      "contentType": "FILE",
      "originalSource": "https://example.com/user-manual.pdf",
      "filename": "product-user-manual.pdf"
    },
    {
      "alt": "Warranty terms and conditions document",
      "contentType": "FILE",
      "originalSource": "https://example.com/warranty-info.txt",
      "filename": "warranty-information.txt"
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
"query": "mutation fileCreate($files: [FileCreateInput!]!) { fileCreate(files: $files) { files { id fileStatus alt createdAt ... on GenericFile { url } } userErrors { field message } } }",
 "variables": {
    "files": [
      {
        "alt": "Complete user manual and setup instructions",
        "contentType": "FILE",
        "originalSource": "https://example.com/user-manual.pdf",
        "filename": "product-user-manual.pdf"
      },
      {
        "alt": "Warranty terms and conditions document",
        "contentType": "FILE",
        "originalSource": "https://example.com/warranty-info.txt",
        "filename": "warranty-information.txt"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on GenericFile {
          url
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
        "files": [
            {
                "alt": "Complete user manual and setup instructions",
                "contentType": "FILE",
                "originalSource": "https://example.com/user-manual.pdf",
                "filename": "product-user-manual.pdf"
            },
            {
                "alt": "Warranty terms and conditions document",
                "contentType": "FILE",
                "originalSource": "https://example.com/warranty-info.txt",
                "filename": "warranty-information.txt"
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
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on GenericFile {
          url
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
  "files": [
    {
      "alt": "Complete user manual and setup instructions",
      "contentType": "FILE",
      "originalSource": "https://example.com/user-manual.pdf",
      "filename": "product-user-manual.pdf"
    },
    {
      "alt": "Warranty terms and conditions document",
      "contentType": "FILE",
      "originalSource": "https://example.com/warranty-info.txt",
      "filename": "warranty-information.txt"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
          ... on GenericFile {
            url
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "files": [
            {
                "alt": "Complete user manual and setup instructions",
                "contentType": "FILE",
                "originalSource": "https://example.com/user-manual.pdf",
                "filename": "product-user-manual.pdf"
            },
            {
                "alt": "Warranty terms and conditions document",
                "contentType": "FILE",
                "originalSource": "https://example.com/warranty-info.txt",
                "filename": "warranty-information.txt"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileCreate": {
    "files": [
      {
        "id": "gid://shopify/GenericFile/1072273437",
        "fileStatus": "READY",
        "alt": "Complete user manual and setup instructions",
        "createdAt": "2025-06-21T03:47:06Z",
        "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/user-manual.pdf?v=1750477627"
      },
      {
        "id": "gid://shopify/GenericFile/1072273438",
        "fileStatus": "READY",
        "alt": "Warranty terms and conditions document",
        "createdAt": "2025-06-21T03:47:06Z",
        "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/warranty-info.txt?v=1750477629"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create product image files from external URLs

#### Description

Create multiple product image files from external URLs to build a visual gallery for a product. This example demonstrates creating two product image files with descriptive alt text for accessibility. The mutation downloads the images from external URLs and creates file records, returning their file IDs, upload status, alt text, creation timestamps, and image dimensions (width and height). Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [uploading files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads).

#### Query

```graphql
mutation fileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
      ... on MediaImage {
        image {
          width
          height
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
  "files": [
    {
      "alt": "Laptop computer on modern desk setup",
      "contentType": "IMAGE",
      "originalSource": "https://burst.shopifycdn.com/photos/laptop-on-desk.jpg"
    },
    {
      "alt": "Close-up view of laptop keyboard and screen",
      "contentType": "IMAGE",
      "originalSource": "https://burst.shopifycdn.com/photos/laptop-closeup.jpg"
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
"query": "mutation fileCreate($files: [FileCreateInput!]!) { fileCreate(files: $files) { files { id fileStatus alt createdAt ... on MediaImage { image { width height } } } userErrors { field message } } }",
 "variables": {
    "files": [
      {
        "alt": "Laptop computer on modern desk setup",
        "contentType": "IMAGE",
        "originalSource": "https://burst.shopifycdn.com/photos/laptop-on-desk.jpg"
      },
      {
        "alt": "Close-up view of laptop keyboard and screen",
        "contentType": "IMAGE",
        "originalSource": "https://burst.shopifycdn.com/photos/laptop-closeup.jpg"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
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
        "files": [
            {
                "alt": "Laptop computer on modern desk setup",
                "contentType": "IMAGE",
                "originalSource": "https://burst.shopifycdn.com/photos/laptop-on-desk.jpg"
            },
            {
                "alt": "Close-up view of laptop keyboard and screen",
                "contentType": "IMAGE",
                "originalSource": "https://burst.shopifycdn.com/photos/laptop-closeup.jpg"
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
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
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
  "files": [
    {
      "alt": "Laptop computer on modern desk setup",
      "contentType": "IMAGE",
      "originalSource": "https://burst.shopifycdn.com/photos/laptop-on-desk.jpg"
    },
    {
      "alt": "Close-up view of laptop keyboard and screen",
      "contentType": "IMAGE",
      "originalSource": "https://burst.shopifycdn.com/photos/laptop-closeup.jpg"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
          ... on MediaImage {
            image {
              width
              height
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
        "files": [
            {
                "alt": "Laptop computer on modern desk setup",
                "contentType": "IMAGE",
                "originalSource": "https://burst.shopifycdn.com/photos/laptop-on-desk.jpg"
            },
            {
                "alt": "Close-up view of laptop keyboard and screen",
                "contentType": "IMAGE",
                "originalSource": "https://burst.shopifycdn.com/photos/laptop-closeup.jpg"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileCreate": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273434",
        "fileStatus": "READY",
        "alt": "Laptop computer on modern desk setup",
        "createdAt": "2025-06-21T03:46:57Z",
        "image": {
          "width": 372,
          "height": 110
        }
      },
      {
        "id": "gid://shopify/MediaImage/1072273435",
        "fileStatus": "READY",
        "alt": "Close-up view of laptop keyboard and screen",
        "createdAt": "2025-06-21T03:46:57Z",
        "image": {
          "width": 372,
          "height": 110
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Handle file creation errors and validation

#### Description

This example shows how the mutation responds to common errors like invalid URLs and unsupported file extensions. The response includes detailed user errors with specific field paths and error codes to help identify and resolve issues.

#### Query

```graphql
mutation fileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "files": [
    {
      "alt": "Invalid URL example",
      "contentType": "IMAGE",
      "originalSource": "not-a-valid-url"
    },
    {
      "alt": "Unsupported file type example",
      "contentType": "IMAGE",
      "originalSource": "https://example.com/document.html"
    },
    {
      "contentType": "IMAGE",
      "originalSource": "https://example.com/image.jpg",
      "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
"query": "mutation fileCreate($files: [FileCreateInput!]!) { fileCreate(files: $files) { files { id fileStatus alt createdAt } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "alt": "Invalid URL example",
        "contentType": "IMAGE",
        "originalSource": "not-a-valid-url"
      },
      {
        "alt": "Unsupported file type example",
        "contentType": "IMAGE",
        "originalSource": "https://example.com/document.html"
      },
      {
        "contentType": "IMAGE",
        "originalSource": "https://example.com/image.jpg",
        "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "files": [
            {
                "alt": "Invalid URL example",
                "contentType": "IMAGE",
                "originalSource": "not-a-valid-url"
            },
            {
                "alt": "Unsupported file type example",
                "contentType": "IMAGE",
                "originalSource": "https://example.com/document.html"
            },
            {
                "contentType": "IMAGE",
                "originalSource": "https://example.com/image.jpg",
                "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "files": [
    {
      "alt": "Invalid URL example",
      "contentType": "IMAGE",
      "originalSource": "not-a-valid-url"
    },
    {
      "alt": "Unsupported file type example",
      "contentType": "IMAGE",
      "originalSource": "https://example.com/document.html"
    },
    {
      "contentType": "IMAGE",
      "originalSource": "https://example.com/image.jpg",
      "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "files": [
            {
                "alt": "Invalid URL example",
                "contentType": "IMAGE",
                "originalSource": "not-a-valid-url"
            },
            {
                "alt": "Unsupported file type example",
                "contentType": "IMAGE",
                "originalSource": "https://example.com/document.html"
            },
            {
                "contentType": "IMAGE",
                "originalSource": "https://example.com/image.jpg",
                "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileCreate": {
    "files": [],
    "userErrors": [
      {
        "field": [
          "files",
          "0",
          "originalSource"
        ],
        "message": "Image URL is invalid",
        "code": "INVALID"
      },
      {
        "field": [
          "files",
          "1",
          "originalSource"
        ],
        "message": "The file type is not supported.",
        "code": "UNACCEPTABLE_ASSET"
      },
      {
        "field": [
          "files",
          "2",
          "alt"
        ],
        "message": "The alt value exceeds the maximum limit of 512 characters.",
        "code": "ALT_VALUE_LIMIT_EXCEEDED"
      }
    ]
  }
}
``` 
*   ### fileCreate reference

Examples
--------

Create a file using a staged upload URL

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fileCreate(%24files%3A%20%5BFileCreateInput!%5D!)%20%7B%0A%20%20fileCreate(files%3A%20%24files)%20%7B%0A%20%20%20%20files%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20fileStatus%0A%20%20%20%20%20%20alt%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20...%20on%20MediaImage%20%7B%0A%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22files%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22alt%22%3A%20%22Product%20showcase%20image%20from%20staged%20upload%22%2C%0A%20%20%20%20%20%20%22contentType%22%3A%20%22IMAGE%22%2C%0A%20%20%20%20%20%20%22originalSource%22%3A%20%22https%3A%2F%2Fsnowdevil.myshopify.com%2Fadmin%2Ftmp%2Ffiles%2Fstaged-image-upload-123.jpg%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fileCreate($files: [FileCreateInput!]!) {

 fileCreate(files: $files) {

 files {

 id

 fileStatus

 alt

 createdAt

 ... on MediaImage {

 image {

 width

 height

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

"files":[

{

"alt":"Product showcase image from staged upload",

"contentType":"IMAGE",

"originalSource":"https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"

}

]

},

},

);

const data=await response.json();

```
mutation fileCreate($files: [FileCreateInput!]!) {
  fileCreate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
      ... on MediaImage {
        image {
          width
          height
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
"query": "mutation fileCreate($files: [FileCreateInput!]!) { fileCreate(files: $files) { files { id fileStatus alt createdAt ... on MediaImage { image { width height } } } userErrors { field message } } }",
 "variables": {
    "files": [
      {
        "alt": "Product showcase image from staged upload",
        "contentType": "IMAGE",
        "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
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
        "files": [
            {
                "alt": "Product showcase image from staged upload",
                "contentType": "IMAGE",
                "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
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
    "query": `mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
          ... on MediaImage {
            image {
              width
              height
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
        "files": [
            {
                "alt": "Product showcase image from staged upload",
                "contentType": "IMAGE",
                "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
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
  mutation fileCreate($files: [FileCreateInput!]!) {
    fileCreate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on MediaImage {
          image {
            width
            height
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
  "files": [
    {
      "alt": "Product showcase image from staged upload",
      "contentType": "IMAGE",
      "originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"
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

9

1

2

3

4

5

6

7

8

9

›

⌄

⌄

⌄

{

"files": [

{

"alt": "Product showcase image from staged upload",

"contentType": "IMAGE",

"originalSource": "https://snowdevil.myshopify.com/admin/tmp/files/staged-image-upload-123.jpg"

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

›

⌄

⌄

⌄

⌄

⌄

{

"fileCreate": {

"files": [

{

"id": "gid://shopify/MediaImage/1072273436",

"fileStatus": "READY",

"alt": "Product showcase image from staged upload",

"createdAt": "2025-06-21T03:47:03Z",

"image": {

"width": 372,

"height": 110

}

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*