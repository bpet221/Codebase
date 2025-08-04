---
title: "fileDelete"
description: "Shopify GraphQL Admin API documentation for filedelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fileDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete

Markdown Content:
fileDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#main-content)

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

[Anchor to fileDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#top)
file Delete
===========

mutation

Requires `write_files` access scope. Also: Users must have delete files permissions.

Deletes file assets that were previously uploaded to your store.

Use the `fileDelete` mutation to permanently remove media and file assets from your store when they are no longer needed. This mutation handles the complete removal of files from both your store's file library and any associated references to products or other resources.

The `fileDelete` mutation supports removal of multiple file types:

*   **Images**: Product photos, variant images, and general store imagery
*   **Videos**: Shopify-hosted videos for product demonstrations and marketing content
*   **External Videos**: YouTube and Vimeo videos linked to your products
*   **3D models**: Interactive 3D representations of products
*   **Generic files**: PDFs, documents, and other file types stored in your [**Files** page](https://shopify.com/admin/settings/files)

When you delete files that are referenced by products, the mutation automatically removes those references and reorders any remaining media to maintain proper positioning. Product file references are database relationships managed through a media reference system, not just links in product descriptions. The Shopify admin provides a UI to manage these relationships, and when files are deleted, the system automatically cleans up all references. Files that are currently being processed by other operations are rejected to prevent conflicts.

* * *

Caution

File deletion is permanent and can't be undone. When you delete a file that's being used in your store, it will immediately stop appearing wherever it was displayed. For example, if you delete a product image, that product will show a broken image or placeholder on your storefront and in the admin. The same applies to any other files linked from themes, blog posts, or pages. Before deleting files, you can use the [`files` query](https://shopify.dev/api/admin-graphql/latest/queries/files) to list and review your store's file assets.

* * *

Learn how to manage [product media and file assets](https://shopify.dev/docs/apps/build/online-store/product-media) in your app.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#arguments)
Arguments
---------

[Anchor to fileIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#arguments-fileIds)file Ids

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The IDs of the files to be deleted.

* * *

Was this section helpful?

Yes No

[Anchor to FileDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#returns)File Delete Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedFileIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#returns-deletedFileIds)deleted File Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The IDs of the deleted files.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete#returns-userErrors)user Errors

•[[Files User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FilesUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete multiple file types

#### Description

Delete multiple types of files from your store's media library to clean up unused assets and free up storage space. This example demonstrates batch deletion of images and documents in a single operation for efficient media library management. Batch deletion is useful for removing outdated assets, cleaning up after product updates, or organizing your file storage. The response returns the IDs of successfully deleted files, confirming which assets have been permanently removed from your store.

#### Query

```graphql
mutation fileDelete($fileIds: [ID!]!) {
  fileDelete(fileIds: $fileIds) {
    deletedFileIds
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
  "fileIds": [
    "gid://shopify/GenericFile/1072273762",
    "gid://shopify/MediaImage/1072273763",
    "gid://shopify/MediaImage/1072273764",
    "gid://shopify/GenericFile/1072273765"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fileDelete($fileIds: [ID!]!) { fileDelete(fileIds: $fileIds) { deletedFileIds userErrors { field message code } } }",
 "variables": {
    "fileIds": [
      "gid://shopify/GenericFile/1072273762",
      "gid://shopify/MediaImage/1072273763",
      "gid://shopify/MediaImage/1072273764",
      "gid://shopify/GenericFile/1072273765"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "fileIds": [
            "gid://shopify/GenericFile/1072273762",
            "gid://shopify/MediaImage/1072273763",
            "gid://shopify/MediaImage/1072273764",
            "gid://shopify/GenericFile/1072273765"
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
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "fileIds": [
    "gid://shopify/GenericFile/1072273762",
    "gid://shopify/MediaImage/1072273763",
    "gid://shopify/MediaImage/1072273764",
    "gid://shopify/GenericFile/1072273765"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileDelete($fileIds: [ID!]!) {
      fileDelete(fileIds: $fileIds) {
        deletedFileIds
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "fileIds": [
            "gid://shopify/GenericFile/1072273762",
            "gid://shopify/MediaImage/1072273763",
            "gid://shopify/MediaImage/1072273764",
            "gid://shopify/GenericFile/1072273765"
        ]
    },
  },
});
``` #### Response

```json
{
  "fileDelete": {
    "deletedFileIds": [
      "gid://shopify/GenericFile/1072273762",
      "gid://shopify/MediaImage/1072273763",
      "gid://shopify/MediaImage/1072273764",
      "gid://shopify/GenericFile/1072273765"
    ],
    "userErrors": []
  }
}
``` 
*   ### Delete product-associated files and clean up references

#### Description

Delete product-associated files and clean up all product references and media positioning. This example deletes two product images from a gallery and demonstrates how Shopify automatically reorders remaining media to maintain proper sequencing.

#### Query

```graphql
mutation fileDelete($fileIds: [ID!]!) {
  fileDelete(fileIds: $fileIds) {
    deletedFileIds
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
  "fileIds": [
    "gid://shopify/MediaImage/1072273759",
    "gid://shopify/MediaImage/1072273761"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fileDelete($fileIds: [ID!]!) { fileDelete(fileIds: $fileIds) { deletedFileIds userErrors { field message code } } }",
 "variables": {
    "fileIds": [
      "gid://shopify/MediaImage/1072273759",
      "gid://shopify/MediaImage/1072273761"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "fileIds": [
            "gid://shopify/MediaImage/1072273759",
            "gid://shopify/MediaImage/1072273761"
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
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "fileIds": [
    "gid://shopify/MediaImage/1072273759",
    "gid://shopify/MediaImage/1072273761"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileDelete($fileIds: [ID!]!) {
      fileDelete(fileIds: $fileIds) {
        deletedFileIds
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "fileIds": [
            "gid://shopify/MediaImage/1072273759",
            "gid://shopify/MediaImage/1072273761"
        ]
    },
  },
});
``` #### Response

```json
{
  "fileDelete": {
    "deletedFileIds": [
      "gid://shopify/MediaImage/1072273759",
      "gid://shopify/MediaImage/1072273761"
    ],
    "userErrors": []
  }
}
``` 
*   ### Handle file deletion errors and validation

#### Description

This example demonstrates how the fileDelete mutation handles various error conditions when files cannot be deleted. Common errors include attempting to delete files that don't exist, files that are currently locked by other operations, or invalid file IDs. The response provides detailed [error information](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileDelete#returns-userErrors) with specific file IDs and error codes to help identify which files couldn't be deleted and why. Proper error handling ensures reliable file management workflows and helps prevent data loss or unexpected behavior.

#### Query

```graphql
mutation fileDelete($fileIds: [ID!]!) {
  fileDelete(fileIds: $fileIds) {
    deletedFileIds
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
  "fileIds": [
    "gid://shopify/GenericFile/999999",
    "gid://shopify/GenericFile/1072273766",
    "gid://shopify/MediaImage/1072273767"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fileDelete($fileIds: [ID!]!) { fileDelete(fileIds: $fileIds) { deletedFileIds userErrors { field message code } } }",
 "variables": {
    "fileIds": [
      "gid://shopify/GenericFile/999999",
      "gid://shopify/GenericFile/1072273766",
      "gid://shopify/MediaImage/1072273767"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "fileIds": [
            "gid://shopify/GenericFile/999999",
            "gid://shopify/GenericFile/1072273766",
            "gid://shopify/MediaImage/1072273767"
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
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "fileIds": [
    "gid://shopify/GenericFile/999999",
    "gid://shopify/GenericFile/1072273766",
    "gid://shopify/MediaImage/1072273767"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fileDelete($fileIds: [ID!]!) {
      fileDelete(fileIds: $fileIds) {
        deletedFileIds
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "fileIds": [
            "gid://shopify/GenericFile/999999",
            "gid://shopify/GenericFile/1072273766",
            "gid://shopify/MediaImage/1072273767"
        ]
    },
  },
});
``` #### Response

```json
{
  "fileDelete": {
    "deletedFileIds": null,
    "userErrors": [
      {
        "field": [
          "fileIds"
        ],
        "message": "File id gid://shopify/GenericFile/999999 does not exist.",
        "code": "FILE_DOES_NOT_EXIST"
      }
    ]
  }
}
``` 
*   ### fileDelete reference

Examples
--------

Delete multiple file types

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fileDelete(%24fileIds%3A%20%5BID!%5D!)%20%7B%0A%20%20fileDelete(fileIds%3A%20%24fileIds)%20%7B%0A%20%20%20%20deletedFileIds%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22fileIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FGenericFile%2F1072273762%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273763%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273764%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FGenericFile%2F1072273765%22%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fileDelete($fileIds: [ID!]!) {

 fileDelete(fileIds: $fileIds) {

 deletedFileIds

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"fileIds":[

"gid://shopify/GenericFile/1072273762",

"gid://shopify/MediaImage/1072273763",

"gid://shopify/MediaImage/1072273764",

"gid://shopify/GenericFile/1072273765"

]

},

},

);

const data=await response.json();

```
mutation fileDelete($fileIds: [ID!]!) {
  fileDelete(fileIds: $fileIds) {
    deletedFileIds
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
"query": "mutation fileDelete($fileIds: [ID!]!) { fileDelete(fileIds: $fileIds) { deletedFileIds userErrors { field message code } } }",
 "variables": {
    "fileIds": [
      "gid://shopify/GenericFile/1072273762",
      "gid://shopify/MediaImage/1072273763",
      "gid://shopify/MediaImage/1072273764",
      "gid://shopify/GenericFile/1072273765"
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "fileIds": [
            "gid://shopify/GenericFile/1072273762",
            "gid://shopify/MediaImage/1072273763",
            "gid://shopify/MediaImage/1072273764",
            "gid://shopify/GenericFile/1072273765"
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
    "query": `mutation fileDelete($fileIds: [ID!]!) {
      fileDelete(fileIds: $fileIds) {
        deletedFileIds
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "fileIds": [
            "gid://shopify/GenericFile/1072273762",
            "gid://shopify/MediaImage/1072273763",
            "gid://shopify/MediaImage/1072273764",
            "gid://shopify/GenericFile/1072273765"
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
  mutation fileDelete($fileIds: [ID!]!) {
    fileDelete(fileIds: $fileIds) {
      deletedFileIds
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "fileIds": [
    "gid://shopify/GenericFile/1072273762",
    "gid://shopify/MediaImage/1072273763",
    "gid://shopify/MediaImage/1072273764",
    "gid://shopify/GenericFile/1072273765"
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

›

⌄

⌄

{

"fileIds": [

"gid://shopify/GenericFile/1072273762",

"gid://shopify/MediaImage/1072273763",

"gid://shopify/MediaImage/1072273764",

"gid://shopify/GenericFile/1072273765"

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

›

⌄

⌄

⌄

{

"fileDelete": {

"deletedFileIds": [

"gid://shopify/GenericFile/1072273762",

"gid://shopify/MediaImage/1072273763",

"gid://shopify/MediaImage/1072273764",

"gid://shopify/GenericFile/1072273765"

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*