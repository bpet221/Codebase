---
title: "files"
description: "Shopify GraphQL Admin API documentation for files"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/files"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: files - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/files

Markdown Content:
files - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#main-content)

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

    *   
Queries

        *   [blogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount)
        *   [catalog](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog)
        *   [catalog Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogoperations)
        *   [catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)
        *   [catalogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogscount)
        *   [collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection)
        *   [collection By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle)
        *   [collection By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier)
        *   [collection Rules Conditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions)
        *   [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)
        *   [collection Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsavedsearches)
        *   [collections Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount)
        *   [files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)
        *   [file Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/filesavedsearches)
        *   [price List](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist)
        *   [price Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists)
        *   [product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product)
        *   [product By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle)
        *   [product By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier)
        *   [product Duplicate Job](https://shopify.dev/docs/api/admin-graphql/latest/queries/productduplicatejob)
        *   [product Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation)
        *   [product Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/queries/productresourcefeedback)
        *   [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)
        *   [product Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches)
        *   [products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount)
        *   [product Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttags)
        *   [product Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttypes)
        *   [product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant)
        *   [product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantbyidentifier)
        *   [product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants)
        *   [product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantscount)
        *   [product Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvendors)
        *   [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)
        *   [publications Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationscount)
        *   [published Products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount)
        *   [selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroup)
        *   [selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroups)
        *   [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)
        *   [translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource)
        *   [translatable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresourcesbyids)

    *   Mutations   
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

[Anchor to files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#top)
files
=====

query

Requires `read_files` access scope, `read_themes` access scope or `read_images` access scope.

Retrieves a paginated list of files that have been uploaded to a Shopify store. Files represent digital assets that merchants can upload to their store for various purposes including product images, marketing materials, documents, and brand assets.

Use the `files` query to retrieve information associated with the following workflows:

*   [Managing product media and images](https://shopify.dev/docs/apps/build/online-store/product-media)
*   [Theme development and asset management](https://shopify.dev/docs/storefronts/themes/store/success/brand-assets)
*   Brand asset management and [checkout branding](https://shopify.dev/docs/apps/build/checkout/styling/add-favicon)

Files can include multiple [content types](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType), such as images, videos, 3D models, and generic files. Each file has properties like dimensions, file size, alt text for accessibility, and upload status. Files can be filtered by [media type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType) and can be associated with [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [themes](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme), and other store resources.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments)
FileConnection arguments
------------------------

•[FileConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-filename)filename

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-ids)ids

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-media_type)media_type

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-original_upload_size)original_upload_size

•float

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-product_id)product_id

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-status)status

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-updated_at)updated_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#argument-query-filter-used_in)used_in

•string

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#arguments-sortKey)sort Key

•[File Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#returns-edges)edges

•[[File Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#returns-nodes)nodes

•[[File!]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

non-null

A list of nodes that are contained in FileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/files#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Filter files by whether they are used in products

#### Description

Filter files based on their usage status using the `used_in` query parameter. Use `used_in:product` to find files currently used in products and `used_in:none` to find unused files. This filtering helps with file management and cleanup tasks.

#### Query

```graphql
query {
  usedInProduct: files(first: 10, query: "used_in:product") {
    edges {
      node {
        ... on MediaImage {
          id
          alt
        }
      }
    }
  }
  unusedFiles: files(first: 10, query: "used_in:none") {
    edges {
      node {
        ... on GenericFile {
          id
          alt
        }
      }
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
"query": "query { usedInProduct: files(first: 10, query: \"used_in:product\") { edges { node { ... on MediaImage { id alt } } } } unusedFiles: files(first: 10, query: \"used_in:none\") { edges { node { ... on GenericFile { id alt } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
          }
        }
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
  query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "usedInProduct": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273780",
          "alt": "derp"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273781",
          "alt": "Connected product image"
        }
      }
    ]
  },
  "unusedFiles": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/GenericFile/1072273782",
          "alt": "Unused document"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve a file's features by its ID

#### Description

Retrieve a specific file's features using the [`node` query](https://help.shopify.com/docs/api/admin-graphql/latest/queries/node) with a file's ID. The `node` query is useful for drilling down into specific file attributes. This pattern works with any file type including `MediaImage`, `Video`, `GenericFile`, and others. Use this approach when you need detailed information about a single file resource.

#### Query

```graphql
query {
  node(id: "gid://shopify/MediaImage/1072273779") {
    id
    ... on MediaImage {
      image {
        url
      }
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
"query": "query { node(id: \"gid://shopify/MediaImage/1072273779\") { id ... on MediaImage { image { url } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    node(id: "gid://shopify/MediaImage/1072273779") {
      id
      ... on MediaImage {
        image {
          url
        }
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
  query {
    node(id: "gid://shopify/MediaImage/1072273779") {
      id
      ... on MediaImage {
        image {
          url
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    node(id: "gid://shopify/MediaImage/1072273779") {
      id
      ... on MediaImage {
        image {
          url
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "node": {
    "id": "gid://shopify/MediaImage/1072273779",
    "image": {
      "url": "https://cdn.shopify.com/s/files/1/2637/1970/image_file.jpg?v=1750482057"
    }
  }
}
``` 
*   ### Retrieve a list of files

#### Description

Retrieve the first five files and return the creation date and alt text for each file, along with type-specific attributes. The response includes different [file types](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType) like images, videos, and generic files. Each file type has its own specific fields and metadata that can be queried.

#### Query

```graphql
query {
  files(first: 5) {
    edges {
      node {
        createdAt
        updatedAt
        alt
        ... on GenericFile {
          id
          url
        }
        ... on MediaImage {
          id
          image {
            id
            url
            width
            height
          }
        }
        ... on Video {
          id
          duration
          preview {
            status
            image {
              id
              width
              height
              url
            }
          }
          originalSource {
            url
            width
            height
            format
            mimeType
          }
          sources {
            url
            width
            height
            format
            mimeType
          }
        }
      }
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
"query": "query { files(first: 5) { edges { node { createdAt updatedAt alt ... on GenericFile { id url } ... on MediaImage { id image { id url width height } } ... on Video { id duration preview { status image { id width height url } } originalSource { url width height format mimeType } sources { url width height format mimeType } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    files(first: 5) {
      edges {
        node {
          createdAt
          updatedAt
          alt
          ... on GenericFile {
            id
            url
          }
          ... on MediaImage {
            id
            image {
              id
              url
              width
              height
            }
          }
          ... on Video {
            id
            duration
            preview {
              status
              image {
                id
                width
                height
                url
              }
            }
            originalSource {
              url
              width
              height
              format
              mimeType
            }
            sources {
              url
              width
              height
              format
              mimeType
            }
          }
        }
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
  query {
    files(first: 5) {
      edges {
        node {
          createdAt
          updatedAt
          alt
          ... on GenericFile {
            id
            url
          }
          ... on MediaImage {
            id
            image {
              id
              url
              width
              height
            }
          }
          ... on Video {
            id
            duration
            preview {
              status
              image {
                id
                width
                height
                url
              }
            }
            originalSource {
              url
              width
              height
              format
              mimeType
            }
            sources {
              url
              width
              height
              format
              mimeType
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    files(first: 5) {
      edges {
        node {
          createdAt
          updatedAt
          alt
          ... on GenericFile {
            id
            url
          }
          ... on MediaImage {
            id
            image {
              id
              url
              width
              height
            }
          }
          ... on Video {
            id
            duration
            preview {
              status
              image {
                id
                width
                height
                url
              }
            }
            originalSource {
              url
              width
              height
              format
              mimeType
            }
            sources {
              url
              width
              height
              format
              mimeType
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "files": {
    "edges": [
      {
        "node": {
          "createdAt": "2025-06-21T05:00:58Z",
          "updatedAt": "2025-06-21T05:00:58Z",
          "alt": "this is a generic TXT file",
          "id": "gid://shopify/GenericFile/1072273783",
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/generic_file.txt?v=1750482058"
        }
      },
      {
        "node": {
          "createdAt": "2025-06-21T05:00:58Z",
          "updatedAt": "2025-06-21T05:00:58Z",
          "alt": "this is a JPG image",
          "id": "gid://shopify/MediaImage/1072273784",
          "image": {
            "id": "gid://shopify/ImageSource/1007650582",
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/image_file.jpg?v=1750482058",
            "width": 372,
            "height": 110
          }
        }
      },
      {
        "node": {
          "createdAt": "2025-06-21T05:00:58Z",
          "updatedAt": "2025-06-21T05:00:58Z",
          "alt": "this is an MP4 video",
          "id": "gid://shopify/Video/1072273785",
          "duration": 16510,
          "preview": {
            "status": "READY",
            "image": {
              "id": "gid://shopify/ImageSource/1007650583",
              "width": 123,
              "height": 456,
              "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/preview_images/f65ce5e1-a1bc-4302-a300-61a35e256d01.thumbnail.0000000.jpg?v=1750482058"
            }
          },
          "originalSource": {
            "url": "https://cdn.shopify.com/videos/c/o/v/some_hash.mov",
            "width": 854,
            "height": 480,
            "format": "mov",
            "mimeType": "video/quicktime"
          },
          "sources": [
            {
              "url": "https://cdn.shopify.com/videos/:/vp/some_hash/some_other_hash.m3u8",
              "width": 1280,
              "height": 720,
              "format": "m3u8",
              "mimeType": "application/x-mpegURL"
            },
            {
              "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.HD-720p-4.5Mbps.mp4",
              "width": 1280,
              "height": 720,
              "format": "mp4",
              "mimeType": "video/mp4"
            },
            {
              "url": "https://cdn.shopify.com/videos/c/vp/some_hash/some_other_hash.SD-480p-1.5Mbps.mp4",
              "width": 854,
              "height": 480,
              "format": "mp4",
              "mimeType": "video/mp4"
            }
          ]
        }
      },
      {
        "node": {
          "createdAt": "2025-06-21T05:00:58Z",
          "updatedAt": "2025-06-21T05:00:58Z",
          "alt": ""
        }
      },
      {
        "node": {
          "createdAt": "2025-06-21T05:00:58Z",
          "updatedAt": "2025-06-21T05:00:58Z",
          "alt": ""
        }
      }
    ]
  }
}
``` 
*   ### Retrieve a list of files by type

#### Description

Retrieves the first 3 files of type [`MediaImage`](https://help.shopify.com/docs/api/admin-graphql/latest/objects/MediaImage) using media type filtering. The query supports filtering by media type to find specific file types. Supported query filters include: `IMAGE`, `VIDEO`, `MODEL3D` and `GENERIC_FILE`.

#### Query

```graphql
query {
  files(query: "media_type:IMAGE", first: 3) {
    edges {
      node {
        ... on MediaImage {
          id
          image {
            id
            url
            width
            height
          }
        }
      }
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
"query": "query { files(query: \"media_type:IMAGE\", first: 3) { edges { node { ... on MediaImage { id image { id url width height } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    files(query: "media_type:IMAGE", first: 3) {
      edges {
        node {
          ... on MediaImage {
            id
            image {
              id
              url
              width
              height
            }
          }
        }
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
  query {
    files(query: "media_type:IMAGE", first: 3) {
      edges {
        node {
          ... on MediaImage {
            id
            image {
              id
              url
              width
              height
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    files(query: "media_type:IMAGE", first: 3) {
      edges {
        node {
          ... on MediaImage {
            id
            image {
              id
              url
              width
              height
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "files": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273768",
          "image": {
            "id": "gid://shopify/ImageSource/1007650566",
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/image_file.jpg?v=1750482053",
            "width": 372,
            "height": 110
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273769",
          "image": {
            "id": "gid://shopify/ImageSource/1007650567",
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/image_file.png?v=1750482053",
            "width": 372,
            "height": 110
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273770",
          "image": {
            "id": "gid://shopify/ImageSource/1007650568",
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/image_file.gif?v=1750482053",
            "width": 372,
            "height": 110
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve files connected to a specific product

#### Description

Retrieve all files associated with a specific [product](https://help.shopify.com/docs/api/admin-graphql/latest/objects/Product) using the `product_id` filter. The query returns both directly uploaded [product images](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage) and shop-level files that have been connected to the product. Each file includes its type-specific attributes and metadata, like alt text and file size.

#### Query

```graphql
query {
  files(first: 10, query: "product_id:121709582") {
    edges {
      node {
        ... on MediaImage {
          id
          alt
          image {
            url
            width
            height
          }
        }
      }
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
"query": "query { files(first: 10, query: \"product_id:121709582\") { edges { node { ... on MediaImage { id alt image { url width height } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    files(first: 10, query: "product_id:121709582") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
            image {
              url
              width
              height
            }
          }
        }
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
  query {
    files(first: 10, query: "product_id:121709582") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
            image {
              url
              width
              height
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    files(first: 10, query: "product_id:121709582") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
            image {
              url
              width
              height
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "files": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273771",
          "alt": "derp",
          "image": {
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/abc.jpg?v=1750482054",
            "width": 372,
            "height": 110
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273772",
          "alt": "Product catalog image",
          "image": {
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/image_2a67cb67-5b4d-4ecb-9c59-cc3ca9736065.jpg?v=1750482054",
            "width": 372,
            "height": 110
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve files with detailed metadata

#### Description

Retrieve files along with their basic [metadata and properties](https://shopify.dev/docs/api/admin-graphql/latest/objects/File). This query shows file information which is useful for understanding file details across your store. Use the query to get file attributes like alt text and image dimensions for media management workflows. The response includes file metadata and type-specific attributes for efficient file organization.

#### Query

```graphql
query {
  files(first: 5) {
    edges {
      node {
        ... on MediaImage {
          id
          alt
          image {
            url
            width
            height
          }
        }
        ... on Video {
          id
          alt
          duration
        }
        ... on GenericFile {
          id
          alt
          url
        }
      }
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
"query": "query { files(first: 5) { edges { node { ... on MediaImage { id alt image { url width height } } ... on Video { id alt duration } ... on GenericFile { id alt url } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    files(first: 5) {
      edges {
        node {
          ... on MediaImage {
            id
            alt
            image {
              url
              width
              height
            }
          }
          ... on Video {
            id
            alt
            duration
          }
          ... on GenericFile {
            id
            alt
            url
          }
        }
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
  query {
    files(first: 5) {
      edges {
        node {
          ... on MediaImage {
            id
            alt
            image {
              url
              width
              height
            }
          }
          ... on Video {
            id
            alt
            duration
          }
          ... on GenericFile {
            id
            alt
            url
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    files(first: 5) {
      edges {
        node {
          ... on MediaImage {
            id
            alt
            image {
              url
              width
              height
            }
          }
          ... on Video {
            id
            alt
            duration
          }
          ... on GenericFile {
            id
            alt
            url
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "files": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273773",
          "alt": "derp",
          "image": {
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/abc.jpg?v=1750482055",
            "width": 372,
            "height": 110
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/MediaImage/1072273774",
          "alt": "Shared marketing asset",
          "image": {
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/image_a0210017-70dd-4deb-9c42-e7c5e5282713.jpg?v=1750482055",
            "width": 372,
            "height": 110
          }
        }
      }
    ]
  }
}
``` 
*   ### Search for files by filename pattern

#### Description

Search for files using filename patterns using a wildcard: `*`. A wildcard is a placeholder that matches any character or sequence of characters. This example demonstrates finding all files with names starting with "product", using the `filename` filter with wildcard support. The wildcard search helps locate files when you know part of the filename but need to find all matching variations. Results include both image files and generic files that match the pattern, with their respective type-specific attributes.

#### Query

```graphql
query {
  files(first: 10, query: "filename:product*") {
    edges {
      node {
        alt
        ... on MediaImage {
          id
          image {
            url
          }
        }
        ... on GenericFile {
          id
          url
        }
      }
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
"query": "query { files(first: 10, query: \"filename:product*\") { edges { node { alt ... on MediaImage { id image { url } } ... on GenericFile { id url } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    files(first: 10, query: "filename:product*") {
      edges {
        node {
          alt
          ... on MediaImage {
            id
            image {
              url
            }
          }
          ... on GenericFile {
            id
            url
          }
        }
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
  query {
    files(first: 10, query: "filename:product*") {
      edges {
        node {
          alt
          ... on MediaImage {
            id
            image {
              url
            }
          }
          ... on GenericFile {
            id
            url
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    files(first: 10, query: "filename:product*") {
      edges {
        node {
          alt
          ... on MediaImage {
            id
            image {
              url
            }
          }
          ... on GenericFile {
            id
            url
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "files": {
    "edges": [
      {
        "node": {
          "alt": "Main banner image",
          "id": "gid://shopify/MediaImage/1072273775",
          "image": {
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/product_banner.jpg?v=1750482056"
          }
        }
      },
      {
        "node": {
          "alt": "Detail view image",
          "id": "gid://shopify/MediaImage/1072273776",
          "image": {
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/product_detail.png?v=1750482056"
          }
        }
      },
      {
        "node": {
          "alt": "Technical specifications",
          "id": "gid://shopify/GenericFile/1072273778",
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/files/product_specs.csv?v=1750482056"
        }
      }
    ]
  }
}
``` 

Examples
--------

Filter files by whether they are used in products

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20usedInProduct%3A%20files(first%3A%2010%2C%20query%3A%20%22used_in%3Aproduct%22)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20MediaImage%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20alt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20unusedFiles%3A%20files(first%3A%2010%2C%20query%3A%20%22used_in%3Anone%22)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20GenericFile%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20alt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 usedInProduct: files(first: 10, query: "used_in:product") {

 edges {

 node {

 ... on MediaImage {

 id

 alt

 }

 }

 }

 }

 unusedFiles: files(first: 10, query: "used_in:none") {

 edges {

 node {

 ... on GenericFile {

 id

 alt

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  usedInProduct: files(first: 10, query: "used_in:product") {
    edges {
      node {
        ... on MediaImage {
          id
          alt
        }
      }
    }
  }
  unusedFiles: files(first: 10, query: "used_in:none") {
    edges {
      node {
        ... on GenericFile {
          id
          alt
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
"query": "query { usedInProduct: files(first: 10, query: \"used_in:product\") { edges { node { ... on MediaImage { id alt } } } } unusedFiles: files(first: 10, query: \"used_in:none\") { edges { node { ... on GenericFile { id alt } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
          }
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
          }
        }
      }
    }
  }`,
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
  query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
```

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

{

"usedInProduct": {

"edges": [

{

"node": {

"id": "gid://shopify/MediaImage/1072273780",

"alt": "derp"

}

},

{

"node": {

"id": "gid://shopify/MediaImage/1072273781",

"alt": "Connected product image"

}

}

]

},

"unusedFiles": {

"edges": [

{

"node": {

"id": "gid://shopify/GenericFile/1072273782",

"alt": "Unused document"

}

}

]

}

}


---
*Content truncated at "Updates" section*