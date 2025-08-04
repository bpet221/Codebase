---
title: "collectionCreate"
description: "Shopify GraphQL Admin API documentation for collectioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate

Markdown Content:
collectionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#main-content)

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

[Anchor to collectionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#top)
collection Create
=================

mutation

Requires `write_products` access scope. Also: The app must have access to the input fields used to create the collection. Further, the store must not be on the Starter or Retail plans and user must have a permission to create collection.

Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

There are two types of collections:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

Use the `collectionCreate` mutation when you need to:

*   Create a new collection for a product launch or campaign
*   Organize products by category, season, or promotion
*   Automate product grouping using rules (for example, by tag, type, or price)

* * *

Note

The created collection is unpublished by default. To make it available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

* * *

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#arguments-input)input

•[Collection Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

required

The properties to use when creating the collection.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CollectionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#returns)Collection Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to collection](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#returns-collection)collection

•[Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

The collection that has been created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a collection with an image

#### Description

Create a collection that includes an image. This example shows how to attach image details, such as the source URL and alt text during the process of creating the collection. The response returns the collection's ID, title, and other specified image details.

#### Query

```graphql
mutation CollectionCreate($input: CollectionInput!) {
  collectionCreate(input: $input) {
    userErrors {
      field
      message
    }
    collection {
      id
      title
      image {
        url
        altText
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "title": "Collection with Image",
    "image": {
      "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
      "altText": "A beautiful collection image"
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
"query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title image { url altText } } } }",
 "variables": {
    "input": {
      "title": "Collection with Image",
      "image": {
        "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
        "altText": "A beautiful collection image"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        image {
          url
          altText
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "Collection with Image",
            "image": {
                "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
                "altText": "A beautiful collection image"
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
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        image {
          url
          altText
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "Collection with Image",
    "image": {
      "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
      "altText": "A beautiful collection image"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          image {
            url
            altText
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "Collection with Image",
            "image": {
                "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
                "altText": "A beautiful collection image"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "collectionCreate": {
    "userErrors": [],
    "collection": {
      "id": "gid://shopify/Collection/1063001313",
      "title": "Collection with Image",
      "image": {
        "url": "https://cdn.shopify.com/s/files/1/2637/1970/collections/test_file.jpg?v=1749673519",
        "altText": "A beautiful collection image"
      }
    }
  }
}
``` 
*   ### Create a custom collection

#### Description

Create a [custom collection](https://help.shopify.com/manual/products/collections/manual-shopify-collection) by defining the collection's title, description, handle, and associated products. The response returns detailed information about the newly created collection, including its ID, title, description, update timestamp, handle, an image, and a list of associated products.

#### Query

```graphql
mutation CollectionCreate($input: CollectionInput!) {
  collectionCreate(input: $input) {
    collection {
      id
      title
      descriptionHtml
      updatedAt
      handle
      image {
        id
        height
        width
        url
      }
      products(first: 10) {
        nodes {
          id
          featuredMedia {
            id
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
  "input": {
    "title": "New Custom Collection",
    "descriptionHtml": "This is a custom collection.",
    "handle": "custom-collection",
    "products": [
      "gid://shopify/Product/20995642"
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
"query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { collection { id title descriptionHtml updatedAt handle image { id height width url } products(first: 10) { nodes { id featuredMedia { id } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "New Custom Collection",
      "descriptionHtml": "This is a custom collection.",
      "handle": "custom-collection",
      "products": [
        "gid://shopify/Product/20995642"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        id
        title
        descriptionHtml
        updatedAt
        handle
        image {
          id
          height
          width
          url
        }
        products(first: 10) {
          nodes {
            id
            featuredMedia {
              id
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
        "input": {
            "title": "New Custom Collection",
            "descriptionHtml": "This is a custom collection.",
            "handle": "custom-collection",
            "products": [
                "gid://shopify/Product/20995642"
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
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        id
        title
        descriptionHtml
        updatedAt
        handle
        image {
          id
          height
          width
          url
        }
        products(first: 10) {
          nodes {
            id
            featuredMedia {
              id
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
  "input": {
    "title": "New Custom Collection",
    "descriptionHtml": "This is a custom collection.",
    "handle": "custom-collection",
    "products": [
      "gid://shopify/Product/20995642"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        collection {
          id
          title
          descriptionHtml
          updatedAt
          handle
          image {
            id
            height
            width
            url
          }
          products(first: 10) {
            nodes {
              id
              featuredMedia {
                id
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
        "input": {
            "title": "New Custom Collection",
            "descriptionHtml": "This is a custom collection.",
            "handle": "custom-collection",
            "products": [
                "gid://shopify/Product/20995642"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "collectionCreate": {
    "collection": {
      "id": "gid://shopify/Collection/1063001312",
      "title": "New Custom Collection",
      "descriptionHtml": "This is a custom collection.",
      "updatedAt": "2025-06-11T20:25:18Z",
      "handle": "custom-collection",
      "image": null,
      "products": {
        "nodes": [
          {
            "id": "gid://shopify/Product/20995642",
            "featuredMedia": {
              "id": "gid://shopify/MediaImage/730211239"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a new metafield on a new collection

#### Description

Create a new metafield `my_field.subtitle` on a new collection. Alternatively, refer to the [`metafieldsSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and update metafields on collection resources.

#### Query

```graphql
mutation createCollectionMetafields($input: CollectionInput!) {
  collectionCreate(input: $input) {
    collection {
      id
      metafields(first: 3) {
        edges {
          node {
            id
            namespace
            key
            value
          }
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "subtitle",
        "type": "single_line_text_field",
        "value": "Bold Colors"
      }
    ],
    "title": "Spring Styles"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createCollectionMetafields($input: CollectionInput!) { collectionCreate(input: $input) { collection { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "subtitle",
          "type": "single_line_text_field",
          "value": "Bold Colors"
        }
      ],
      "title": "Spring Styles"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createCollectionMetafields($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "subtitle",
                    "type": "single_line_text_field",
                    "value": "Bold Colors"
                }
            ],
            "title": "Spring Styles"
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
  mutation createCollectionMetafields($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "subtitle",
        "type": "single_line_text_field",
        "value": "Bold Colors"
      }
    ],
    "title": "Spring Styles"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createCollectionMetafields($input: CollectionInput!) {
      collectionCreate(input: $input) {
        collection {
          id
          metafields(first: 3) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "subtitle",
                    "type": "single_line_text_field",
                    "value": "Bold Colors"
                }
            ],
            "title": "Spring Styles"
        }
    },
  },
});
``` #### Response

```json
{
  "collectionCreate": {
    "collection": {
      "id": "gid://shopify/Collection/1063001315",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069228935",
              "namespace": "my_field",
              "key": "subtitle",
              "value": "Bold Colors"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a smart collection

#### Description

Create a [smart collection](https://help.shopify.com/manual/products/collections/smart-collections), specifically tailored for a store's shoe collection. The response returns the details of the newly created collection, including its ID, title, description, handle, sort order, and the defined rule set in the [collection's conditions](https://help.shopify.com/manual/products/collections/smart-collections/conditions).

#### Query

```graphql
mutation CollectionCreate($input: CollectionInput!) {
  collectionCreate(input: $input) {
    userErrors {
      field
      message
    }
    collection {
      id
      title
      descriptionHtml
      handle
      sortOrder
      ruleSet {
        appliedDisjunctively
        rules {
          column
          relation
          condition
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "title": "Our entire shoe collection",
    "descriptionHtml": "View <b>every</b> shoe available in our store.",
    "ruleSet": {
      "appliedDisjunctively": false,
      "rules": {
        "column": "TITLE",
        "relation": "CONTAINS",
        "condition": "shoe"
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
"query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title descriptionHtml handle sortOrder ruleSet { appliedDisjunctively rules { column relation condition } } } } }",
 "variables": {
    "input": {
      "title": "Our entire shoe collection",
      "descriptionHtml": "View <b>every</b> shoe available in our store.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": {
          "column": "TITLE",
          "relation": "CONTAINS",
          "condition": "shoe"
        }
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "Our entire shoe collection",
            "descriptionHtml": "View <b>every</b> shoe available in our store.",
            "ruleSet": {
                "appliedDisjunctively": false,
                "rules": {
                    "column": "TITLE",
                    "relation": "CONTAINS",
                    "condition": "shoe"
                }
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
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "Our entire shoe collection",
    "descriptionHtml": "View <b>every</b> shoe available in our store.",
    "ruleSet": {
      "appliedDisjunctively": false,
      "rules": {
        "column": "TITLE",
        "relation": "CONTAINS",
        "condition": "shoe"
      }
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
            }
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "Our entire shoe collection",
            "descriptionHtml": "View <b>every</b> shoe available in our store.",
            "ruleSet": {
                "appliedDisjunctively": false,
                "rules": {
                    "column": "TITLE",
                    "relation": "CONTAINS",
                    "condition": "shoe"
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "collectionCreate": {
    "userErrors": [],
    "collection": {
      "id": "gid://shopify/Collection/1063001311",
      "title": "Our entire shoe collection",
      "descriptionHtml": "View <b>every</b> shoe available in our store.",
      "handle": "our-entire-shoe-collection",
      "sortOrder": "BEST_SELLING",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "TITLE",
            "relation": "CONTAINS",
            "condition": "shoe"
          }
        ]
      }
    }
  }
}
``` 
*   ### Create a smart collection with metafield definition conditions

#### Description

Create a [smart collection](https://help.shopify.com/manual/products/collections/smart-collections) that contains all products with the specific product and variant [metafield definition conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions). The collection includes all products that have the product metafield value `leather` and the variant metafield value `true`.

#### Query

```graphql
mutation CollectionCreate($input: CollectionInput!) {
  collectionCreate(input: $input) {
    userErrors {
      field
      message
    }
    collection {
      id
      title
      descriptionHtml
      handle
      sortOrder
      ruleSet {
        appliedDisjunctively
        rules {
          column
          relation
          condition
          conditionObject {
            ... on CollectionRuleMetafieldCondition {
              metafieldDefinition {
                id
                name
                type {
                  name
                }
                ownerType
              }
            }
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "title": "Our entire leather collection",
    "descriptionHtml": "Check out our leather products.",
    "ruleSet": {
      "appliedDisjunctively": false,
      "rules": [
        {
          "column": "PRODUCT_METAFIELD_DEFINITION",
          "relation": "EQUALS",
          "condition": "leather",
          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456107"
        },
        {
          "column": "VARIANT_METAFIELD_DEFINITION",
          "relation": "EQUALS",
          "condition": "true",
          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456108"
        }
      ]
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
"query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title descriptionHtml handle sortOrder ruleSet { appliedDisjunctively rules { column relation condition conditionObject { ... on CollectionRuleMetafieldCondition { metafieldDefinition { id name type { name } ownerType } } } } } } } }",
 "variables": {
    "input": {
      "title": "Our entire leather collection",
      "descriptionHtml": "Check out our leather products.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "PRODUCT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "leather",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456107"
          },
          {
            "column": "VARIANT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "true",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456108"
          }
        ]
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
            conditionObject {
              ... on CollectionRuleMetafieldCondition {
                metafieldDefinition {
                  id
                  name
                  type {
                    name
                  }
                  ownerType
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "Our entire leather collection",
            "descriptionHtml": "Check out our leather products.",
            "ruleSet": {
                "appliedDisjunctively": false,
                "rules": [
                    {
                        "column": "PRODUCT_METAFIELD_DEFINITION",
                        "relation": "EQUALS",
                        "condition": "leather",
                        "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456107"
                    },
                    {
                        "column": "VARIANT_METAFIELD_DEFINITION",
                        "relation": "EQUALS",
                        "condition": "true",
                        "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456108"
                    }
                ]
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
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
            conditionObject {
              ... on CollectionRuleMetafieldCondition {
                metafieldDefinition {
                  id
                  name
                  type {
                    name
                  }
                  ownerType
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "Our entire leather collection",
    "descriptionHtml": "Check out our leather products.",
    "ruleSet": {
      "appliedDisjunctively": false,
      "rules": [
        {
          "column": "PRODUCT_METAFIELD_DEFINITION",
          "relation": "EQUALS",
          "condition": "leather",
          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456107"
        },
        {
          "column": "VARIANT_METAFIELD_DEFINITION",
          "relation": "EQUALS",
          "condition": "true",
          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456108"
        }
      ]
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
              conditionObject {
                ... on CollectionRuleMetafieldCondition {
                  metafieldDefinition {
                    id
                    name
                    type {
                      name
                    }
                    ownerType
                  }
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "Our entire leather collection",
            "descriptionHtml": "Check out our leather products.",
            "ruleSet": {
                "appliedDisjunctively": false,
                "rules": [
                    {
                        "column": "PRODUCT_METAFIELD_DEFINITION",
                        "relation": "EQUALS",
                        "condition": "leather",
                        "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456107"
                    },
                    {
                        "column": "VARIANT_METAFIELD_DEFINITION",
                        "relation": "EQUALS",
                        "condition": "true",
                        "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456108"
                    }
                ]
            }
        }
    },
  },
});
``` #### Response

```json
{
  "collectionCreate": {
    "userErrors": [],
    "collection": {
      "id": "gid://shopify/Collection/1063001314",
      "title": "Our entire leather collection",
      "descriptionHtml": "Check out our leather products.",
      "handle": "our-entire-leather-collection",
      "sortOrder": "BEST_SELLING",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "PRODUCT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "leather",
            "conditionObject": {
              "metafieldDefinition": {
                "id": "gid://shopify/MetafieldDefinition/1071456107",
                "name": "Material",
                "type": {
                  "name": "single_line_text_field"
                },
                "ownerType": "PRODUCT"
              }
            }
          },
          {
            "column": "VARIANT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "true",
            "conditionObject": {
              "metafieldDefinition": {
                "id": "gid://shopify/MetafieldDefinition/1071456108",
                "name": "Imported",
                "type": {
                  "name": "boolean"
                },
                "ownerType": "PRODUCTVARIANT"
              }
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### collectionCreate reference

Examples
--------

Create a collection with an image

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CollectionCreate(%24input%3A%20CollectionInput!)%20%7B%0A%20%20collectionCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20collection%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20altText%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22Collection%20with%20Image%22%2C%0A%20%20%20%20%22image%22%3A%20%7B%0A%20%20%20%20%20%20%22src%22%3A%20%22tmp%2F26371970%2Fcollections%2Fe36e8f91-08a6-46f0-8db7-dd37a55ccd57%2Ftest_file%22%2C%0A%20%20%20%20%20%20%22altText%22%3A%20%22A%20beautiful%20collection%20image%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CollectionCreate($input: CollectionInput!) {

 collectionCreate(input: $input) {

 userErrors {

 field

 message

 }

 collection {

 id

 title

 image {

 url

 altText

 }

 }

 }

 }`,

{

variables:{

"input":{

"title":"Collection with Image",

"image":{

"src":"tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",

"altText":"A beautiful collection image"

}

}

},

},

);

const data=await response.json();

```
mutation CollectionCreate($input: CollectionInput!) {
  collectionCreate(input: $input) {
    userErrors {
      field
      message
    }
    collection {
      id
      title
      image {
        url
        altText
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
"query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title image { url altText } } } }",
 "variables": {
    "input": {
      "title": "Collection with Image",
      "image": {
        "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
        "altText": "A beautiful collection image"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        image {
          url
          altText
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "title": "Collection with Image",
            "image": {
                "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
                "altText": "A beautiful collection image"
            }
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          image {
            url
            altText
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "title": "Collection with Image",
            "image": {
                "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
                "altText": "A beautiful collection image"
            }
        }
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
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        image {
          url
          altText
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "title": "Collection with Image",
    "image": {
      "src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",
      "altText": "A beautiful collection image"
    }
  }
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

"input": {

"title": "Collection with Image",

"image": {

"src": "tmp/26371970/collections/e36e8f91-08a6-46f0-8db7-dd37a55ccd57/test_file",

"altText": "A beautiful collection image"

}

}

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

›

⌄

⌄

⌄

⌄

{

"collectionCreate": {

"userErrors": [],

"collection": {

"id": "gid://shopify/Collection/1063001313",

"title": "Collection with Image",

"image": {

"url": "https://cdn.shopify.com/s/files/1/2637/1970/collections/test_file.jpg?v=1749673519",

"altText": "A beautiful collection image"

}

}

}

}


---
*Content truncated at "Updates" section*