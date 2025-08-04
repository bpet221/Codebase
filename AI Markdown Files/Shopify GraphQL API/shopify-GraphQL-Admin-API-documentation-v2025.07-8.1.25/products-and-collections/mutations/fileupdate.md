---
title: "fileUpdate"
description: "Shopify GraphQL Admin API documentation for fileupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fileUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate

Markdown Content:
fileUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#main-content)

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

[Anchor to fileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#top)
file Update
===========

mutation

Requires `write_files` access scope or `write_themes` access scope. Also: Users must have edit files permissions.

Updates properties, content, and metadata associated with an existing file asset that has already been uploaded to Shopify.

Use the `fileUpdate` mutation to modify various aspects of files already stored in your store. Files can be updated individually or in batches.

The `fileUpdate` mutation supports updating multiple file properties:

*   **Alt text**: Update accessibility descriptions for images and other media.
*   **File content**: Replace image or generic file content while maintaining the same URL.
*   **Filename**: Modify file names (extension must match the original).
*   **Product references**: Add or remove associations between files and products. Removing file-product associations deletes the file from the product's media gallery and clears the image from any product variants that were using it.

The mutation handles different file types with specific capabilities:

*   **Images**: Update preview images, original source, filename, and alt text.
*   **Generic files**: Update original source, filename, and alt text.
*   **Videos and 3D models**: Update alt text and product references.

* * *

Note

Files must be in `ready` state before they can be updated. The mutation includes file locking to prevent conflicts during updates. You can't simultaneously update both `originalSource` and `previewImageSource`.

* * *

After updating files, you can use related mutations for additional file management:

*   [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Create new file assets from external URLs or staged uploads.
*   [`fileDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete): Remove files from your store when they are no longer needed.

Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#arguments)
Arguments
---------

[Anchor to files](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#arguments-files)files

•[[File Update Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileUpdateInput)

required

List of files to be updated.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to FileUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#returns)File Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to files](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#returns-files)files

•[[File!]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

The list of updated files.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate#returns-userErrors)user Errors

•[[Files User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Handle file update errors and validation

#### Description

This example demonstrates how the `fileUpdate` mutation handles various error conditions and validation failures. Common errors include files that don't exist, alt text that exceeds length limits, and invalid source URLs. The response provides detailed error information with specific field paths and error codes using the [`userErrors`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError) object to help you identify and resolve issues quickly.

#### Query

```graphql
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
    files {
      id
      alt
      fileStatus
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
      "id": "gid://shopify/GenericFile/999999",
      "alt": "File that doesn't exist"
    },
    {
      "id": "gid://shopify/GenericFile/1072273825",
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id alt fileStatus } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/GenericFile/999999",
        "alt": "File that doesn'\''t exist"
      },
      {
        "id": "gid://shopify/GenericFile/1072273825",
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
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
                "id": "gid://shopify/GenericFile/999999",
                "alt": "File that doesn't exist"
            },
            {
                "id": "gid://shopify/GenericFile/1072273825",
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
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
      "id": "gid://shopify/GenericFile/999999",
      "alt": "File that doesn't exist"
    },
    {
      "id": "gid://shopify/GenericFile/1072273825",
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
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files {
          id
          alt
          fileStatus
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
                "id": "gid://shopify/GenericFile/999999",
                "alt": "File that doesn't exist"
            },
            {
                "id": "gid://shopify/GenericFile/1072273825",
                "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileUpdate": {
    "files": [],
    "userErrors": [
      {
        "field": [
          "files"
        ],
        "message": "File id [\"gid://shopify/GenericFile/999999\"] does not exist.",
        "code": "FILE_DOES_NOT_EXIST"
      }
    ]
  }
}
``` 
*   ### Update a file's alt text and other metadata

#### Description

Update a file's alt text and other metadata to improve accessibility. This example demonstrates updating the alt text of an existing [image file](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage) to provide better context for screen readers and search engines. The response returns the updated file with its new alt text, file status, and creation timestamp.

#### Query

```graphql
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
    files {
      id
      alt
      fileStatus
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
      code
    }
  }
}
``` #### Variables

```json
{
  "files": [
    {
      "id": "gid://shopify/MediaImage/1072273831",
      "alt": "High-resolution product image showing laptop computer on modern desk with wireless accessories"
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id alt fileStatus createdAt ... on MediaImage { image { width height } } } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273831",
        "alt": "High-resolution product image showing laptop computer on modern desk with wireless accessories"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
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
        code
      }
    }
  }`,
  {
    variables: {
        "files": [
            {
                "id": "gid://shopify/MediaImage/1072273831",
                "alt": "High-resolution product image showing laptop computer on modern desk with wireless accessories"
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
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
        code
      }
    }
  }
QUERY

variables = {
  "files": [
    {
      "id": "gid://shopify/MediaImage/1072273831",
      "alt": "High-resolution product image showing laptop computer on modern desk with wireless accessories"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files {
          id
          alt
          fileStatus
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
          code
        }
      }
    }`,
    "variables": {
        "files": [
            {
                "id": "gid://shopify/MediaImage/1072273831",
                "alt": "High-resolution product image showing laptop computer on modern desk with wireless accessories"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileUpdate": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273831",
        "alt": "High-resolution product image showing laptop computer on modern desk with wireless accessories",
        "fileStatus": "READY",
        "createdAt": "2025-06-22T09:19:04Z",
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
*   ### Update file content by replacing the source URL

#### Description

Update the actual content of a file by providing a new source URL while maintaining the same file ID and URL structure. This example shows how to replace an image file's content with a new version from a different URL, useful for updating product photos or correcting image issues. The operation preserves the file's existing metadata and associations while updating the underlying image data. The response includes the [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus) which will show as `READY` initially and may change to `PROCESSING` during the background update job. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [uploading files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads).

#### Query

```graphql
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
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
      "id": "gid://shopify/MediaImage/1072273829",
      "originalSource": "https://burst.shopifycdn.com/photos/updated-product-photo.jpg"
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id fileStatus alt createdAt } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273829",
        "originalSource": "https://burst.shopifycdn.com/photos/updated-product-photo.jpg"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
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
                "id": "gid://shopify/MediaImage/1072273829",
                "originalSource": "https://burst.shopifycdn.com/photos/updated-product-photo.jpg"
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
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
      "id": "gid://shopify/MediaImage/1072273829",
      "originalSource": "https://burst.shopifycdn.com/photos/updated-product-photo.jpg"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
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
                "id": "gid://shopify/MediaImage/1072273829",
                "originalSource": "https://burst.shopifycdn.com/photos/updated-product-photo.jpg"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileUpdate": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273829",
        "fileStatus": "READY",
        "alt": "derp",
        "createdAt": "2025-06-22T09:19:03Z"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Update multiple files with different operations

#### Description

Perform multiple update operations on different files in a single request. This example demonstrates updating alt text on multiple files simultaneously to improve accessibility across your media library. Batch operations allow you to make multiple changes efficiently and maintain consistent metadata across related files. The response includes individual file updates showing the new alt text and the [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus) for each updated file. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [web accessibility](https://help.shopify.com/manual/online-store/images/alt-text).

#### Query

```graphql
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
    files {
      id
      alt
      fileStatus
      ... on MediaImage {
        image {
          width
          height
        }
      }
      ... on Video {
        sources {
          url
          width
          height
        }
      }
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
      "id": "gid://shopify/MediaImage/1072273826",
      "alt": "Professional product photography showcasing laptop in modern office environment"
    },
    {
      "id": "gid://shopify/Video/1072273827",
      "alt": "Product demonstration video showing laptop features and capabilities"
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id alt fileStatus ... on MediaImage { image { width height } } ... on Video { sources { url width height } } } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273826",
        "alt": "Professional product photography showcasing laptop in modern office environment"
      },
      {
        "id": "gid://shopify/Video/1072273827",
        "alt": "Product demonstration video showing laptop features and capabilities"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
        ... on MediaImage {
          image {
            width
            height
          }
        }
        ... on Video {
          sources {
            url
            width
            height
          }
        }
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
                "id": "gid://shopify/MediaImage/1072273826",
                "alt": "Professional product photography showcasing laptop in modern office environment"
            },
            {
                "id": "gid://shopify/Video/1072273827",
                "alt": "Product demonstration video showing laptop features and capabilities"
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
        ... on MediaImage {
          image {
            width
            height
          }
        }
        ... on Video {
          sources {
            url
            width
            height
          }
        }
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
      "id": "gid://shopify/MediaImage/1072273826",
      "alt": "Professional product photography showcasing laptop in modern office environment"
    },
    {
      "id": "gid://shopify/Video/1072273827",
      "alt": "Product demonstration video showing laptop features and capabilities"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files {
          id
          alt
          fileStatus
          ... on MediaImage {
            image {
              width
              height
            }
          }
          ... on Video {
            sources {
              url
              width
              height
            }
          }
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
                "id": "gid://shopify/MediaImage/1072273826",
                "alt": "Professional product photography showcasing laptop in modern office environment"
            },
            {
                "id": "gid://shopify/Video/1072273827",
                "alt": "Product demonstration video showing laptop features and capabilities"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileUpdate": {
    "files": [
      {
        "id": "gid://shopify/MediaImage/1072273826",
        "alt": "Professional product photography showcasing laptop in modern office environment",
        "fileStatus": "READY",
        "image": {
          "width": 372,
          "height": 110
        }
      },
      {
        "id": "gid://shopify/Video/1072273827",
        "alt": "Product demonstration video showing laptop features and capabilities",
        "fileStatus": "READY",
        "sources": [
          {
            "url": "https://cdn.shopify.com/videos/:/vp/some_hash/some_other_hash.m3u8",
            "width": 1280,
            "height": 720
          },
          {
            "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.HD-720p-4.5Mbps.mp4",
            "width": 1280,
            "height": 720
          },
          {
            "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.SD-480p-1.5Mbps.mp4",
            "width": 854,
            "height": 480
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Update the preview image for a video file

#### Description

Update the preview image (thumbnail) for a video file to provide a better visual representation in your store. This example shows how to change the preview image of an existing video by providing a new image URL. Shopify will download, validate, process, and optimize your image from the provided URL before using it as the thumbnail. The response includes the updated file information and the [`fileStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus) for the new preview image. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [uploading files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads).

#### Query

```graphql
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
    files {
      id
      alt
      fileStatus
      ... on Video {
        sources {
          url
          width
          height
        }
      }
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
      "id": "gid://shopify/Video/1072273828",
      "previewImageSource": "https://burst.shopifycdn.com/photos/video-thumbnail.jpg"
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id alt fileStatus ... on Video { sources { url width height } } } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/Video/1072273828",
        "previewImageSource": "https://burst.shopifycdn.com/photos/video-thumbnail.jpg"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
        ... on Video {
          sources {
            url
            width
            height
          }
        }
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
                "id": "gid://shopify/Video/1072273828",
                "previewImageSource": "https://burst.shopifycdn.com/photos/video-thumbnail.jpg"
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
        ... on Video {
          sources {
            url
            width
            height
          }
        }
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
      "id": "gid://shopify/Video/1072273828",
      "previewImageSource": "https://burst.shopifycdn.com/photos/video-thumbnail.jpg"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files {
          id
          alt
          fileStatus
          ... on Video {
            sources {
              url
              width
              height
            }
          }
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
                "id": "gid://shopify/Video/1072273828",
                "previewImageSource": "https://burst.shopifycdn.com/photos/video-thumbnail.jpg"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileUpdate": {
    "files": [
      {
        "id": "gid://shopify/Video/1072273828",
        "alt": "",
        "fileStatus": "READY",
        "sources": [
          {
            "url": "https://cdn.shopify.com/videos/:/vp/some_hash/some_other_hash.m3u8",
            "width": 1280,
            "height": 720
          },
          {
            "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.HD-720p-4.5Mbps.mp4",
            "width": 1280,
            "height": 720
          },
          {
            "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.SD-480p-1.5Mbps.mp4",
            "width": 854,
            "height": 480
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Update video file metadata

#### Description

Update a video file's metadata such as alt text to improve accessibility and provide better context for users. This example demonstrates updating the alt text of a video file to describe its content for screen readers and search engines. The response returns the updated [video](https://shopify.dev/docs/api/admin-graphql/latest/objects/Video) with its new metadata, [file status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus), and video source information. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media) and [web accessibility](https://help.shopify.com/manual/online-store/images/alt-text).

#### Query

```graphql
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
    files {
      id
      fileStatus
      alt
      createdAt
      ... on Video {
        sources {
          url
          width
          height
        }
      }
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
      "id": "gid://shopify/Video/1072273830",
      "alt": "Product demonstration video showing step-by-step assembly instructions and safety guidelines"
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id fileStatus alt createdAt ... on Video { sources { url width height } } } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/Video/1072273830",
        "alt": "Product demonstration video showing step-by-step assembly instructions and safety guidelines"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on Video {
          sources {
            url
            width
            height
          }
        }
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
                "id": "gid://shopify/Video/1072273830",
                "alt": "Product demonstration video showing step-by-step assembly instructions and safety guidelines"
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        fileStatus
        alt
        createdAt
        ... on Video {
          sources {
            url
            width
            height
          }
        }
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
      "id": "gid://shopify/Video/1072273830",
      "alt": "Product demonstration video showing step-by-step assembly instructions and safety guidelines"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files {
          id
          fileStatus
          alt
          createdAt
          ... on Video {
            sources {
              url
              width
              height
            }
          }
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
                "id": "gid://shopify/Video/1072273830",
                "alt": "Product demonstration video showing step-by-step assembly instructions and safety guidelines"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fileUpdate": {
    "files": [
      {
        "id": "gid://shopify/Video/1072273830",
        "fileStatus": "READY",
        "alt": "Product demonstration video showing step-by-step assembly instructions and safety guidelines",
        "createdAt": "2025-06-22T09:19:03Z",
        "sources": [
          {
            "url": "https://cdn.shopify.com/videos/:/vp/some_hash/some_other_hash.m3u8",
            "width": 1280,
            "height": 720
          },
          {
            "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.HD-720p-4.5Mbps.mp4",
            "width": 1280,
            "height": 720
          },
          {
            "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.SD-480p-1.5Mbps.mp4",
            "width": 854,
            "height": 480
          }
        ]
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### fileUpdate reference

Examples
--------

Handle file update errors and validation

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fileUpdate(%24files%3A%20%5BFileUpdateInput!%5D!)%20%7B%0A%20%20fileUpdate(files%3A%20%24files)%20%7B%0A%20%20%20%20files%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20alt%0A%20%20%20%20%20%20fileStatus%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22files%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FGenericFile%2F999999%22%2C%0A%20%20%20%20%20%20%22alt%22%3A%20%22File%20that%20doesn%27t%20exist%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FGenericFile%2F1072273825%22%2C%0A%20%20%20%20%20%20%22alt%22%3A%20%22aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fileUpdate($files: [FileUpdateInput!]!) {

 fileUpdate(files: $files) {

 files {

 id

 alt

 fileStatus

 }

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"files":[

{

"id":"gid://shopify/GenericFile/999999",

"alt":"File that doesn't exist"

},

{

"id":"gid://shopify/GenericFile/1072273825",

"alt":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

}

]

},

},

);

const data=await response.json();

```
mutation fileUpdate($files: [FileUpdateInput!]!) {
  fileUpdate(files: $files) {
    files {
      id
      alt
      fileStatus
    }
    userErrors {
      field
      message
      code
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
"query": "mutation fileUpdate($files: [FileUpdateInput!]!) { fileUpdate(files: $files) { files { id alt fileStatus } userErrors { field message code } } }",
 "variables": {
    "files": [
      {
        "id": "gid://shopify/GenericFile/999999",
        "alt": "File that doesn'\''t exist"
      },
      {
        "id": "gid://shopify/GenericFile/1072273825",
        "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
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
                "id": "gid://shopify/GenericFile/999999",
                "alt": "File that doesn't exist"
            },
            {
                "id": "gid://shopify/GenericFile/1072273825",
                "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
    "query": `mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files {
          id
          alt
          fileStatus
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
                "id": "gid://shopify/GenericFile/999999",
                "alt": "File that doesn't exist"
            },
            {
                "id": "gid://shopify/GenericFile/1072273825",
                "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
  mutation fileUpdate($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files {
        id
        alt
        fileStatus
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
      "id": "gid://shopify/GenericFile/999999",
      "alt": "File that doesn't exist"
    },
    {
      "id": "gid://shopify/GenericFile/1072273825",
      "alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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

›

⌄

⌄

⌄

⌄

{

"files": [

{

"id": "gid://shopify/GenericFile/999999",

"alt": "File that doesn't exist"

},

{

"id": "gid://shopify/GenericFile/1072273825",

"alt": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

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

›

⌄

⌄

⌄

⌄

⌄

{

"fileUpdate": {

"files": [],

"userErrors": [

{

"field": [

"files"

],

"message": "File id [\"gid://shopify/GenericFile/999999\"] does not exist.",

"code": "FILE_DOES_NOT_EXIST"

}

]

}

}


---
*Content truncated at "Updates" section*