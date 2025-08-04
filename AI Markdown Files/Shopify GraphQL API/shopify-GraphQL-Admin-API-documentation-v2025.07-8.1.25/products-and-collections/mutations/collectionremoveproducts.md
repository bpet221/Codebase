---
title: "collectionRemoveProducts"
description: "Shopify GraphQL Admin API documentation for collectionremoveproducts"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionRemoveProducts - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts

Markdown Content:
collectionRemoveProducts - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#main-content)

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

[Anchor to collectionRemoveProducts](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#top)
collection Remove Products
==========================

mutation

Requires `write_products` access scope. Also: The user must have a permission to remove products from a collection.

Removes a set of products from a given collection. The mutation can take a long time to run. Instead of returning an updated collection the mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). For use with manual collections only.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the collection to remove products from. The ID must reference an existing manual collection.

[Anchor to productIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#arguments-productIds)product Ids

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The IDs of products to remove from the collection. The mutation doesn't validate that the products belong to the collection or whether the products exist.

* * *

Was this section helpful?

Yes No

[Anchor to CollectionRemoveProductsPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#returns)Collection Remove Products Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job removing the products.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Remove a product from a manual collection

#### Description

Removing a product from a manual collection returns a job ID.

#### Query

```graphql
mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $id, productIds: $productIds) {
    job {
      done
      id
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
  "id": "gid://shopify/Collection/1007901140",
  "productIds": [
    "gid://shopify/Product/20995642"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) { collectionRemoveProducts(id: $id, productIds: $productIds) { job { done id } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/1007901140",
    "productIds": [
      "gid://shopify/Product/20995642"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/1007901140",
        "productIds": [
            "gid://shopify/Product/20995642"
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
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/1007901140",
  "productIds": [
    "gid://shopify/Product/20995642"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
      collectionRemoveProducts(id: $id, productIds: $productIds) {
        job {
          done
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/1007901140",
        "productIds": [
            "gid://shopify/Product/20995642"
        ]
    },
  },
});
``` #### Response

```json
{
  "collectionRemoveProducts": {
    "job": {
      "done": false,
      "id": "gid://shopify/Job/0d9c63ab-d903-4f1e-b9b1-6ddf55948dfb"
    },
    "userErrors": []
  }
}
``` 
*   ### Remove a product from a non-existent collection

#### Description

Trying to remove a product from a non-existent collection returns a user error.

#### Query

```graphql
mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $id, productIds: $productIds) {
    job {
      done
      id
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
  "id": "gid://shopify/Collection/-1",
  "productIds": [
    "gid://shopify/Product/20995642"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) { collectionRemoveProducts(id: $id, productIds: $productIds) { job { done id } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/-1",
    "productIds": [
      "gid://shopify/Product/20995642"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/-1",
        "productIds": [
            "gid://shopify/Product/20995642"
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
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/-1",
  "productIds": [
    "gid://shopify/Product/20995642"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
      collectionRemoveProducts(id: $id, productIds: $productIds) {
        job {
          done
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/-1",
        "productIds": [
            "gid://shopify/Product/20995642"
        ]
    },
  },
});
``` #### Response

```json
{
  "collectionRemoveProducts": {
    "job": null,
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Collection does not exist"
      }
    ]
  }
}
``` 
*   ### Remove a product from a smart collection

#### Description

Trying to manually remove a product from a smart collection returns a user error.

#### Query

```graphql
mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $id, productIds: $productIds) {
    job {
      done
      id
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
  "id": "gid://shopify/Collection/142458073",
  "productIds": [
    "gid://shopify/Product/108828309"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) { collectionRemoveProducts(id: $id, productIds: $productIds) { job { done id } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/142458073",
    "productIds": [
      "gid://shopify/Product/108828309"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/142458073",
        "productIds": [
            "gid://shopify/Product/108828309"
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
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/142458073",
  "productIds": [
    "gid://shopify/Product/108828309"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
      collectionRemoveProducts(id: $id, productIds: $productIds) {
        job {
          done
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/142458073",
        "productIds": [
            "gid://shopify/Product/108828309"
        ]
    },
  },
});
``` #### Response

```json
{
  "collectionRemoveProducts": {
    "job": null,
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Can't manually remove products from a smart collection"
      }
    ]
  }
}
``` 
*   ### Removes a product from a collection

#### Query

```graphql
mutation RemoveFromCollection($id: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $id, productIds: $productIds) {
    job {
      done
      id
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
  "id": "gid://shopify/Collection/1007901140",
  "productIds": [
    "gid://shopify/Product/20995642"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation RemoveFromCollection($id: ID!, $productIds: [ID!]!) { collectionRemoveProducts(id: $id, productIds: $productIds) { job { done id } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/1007901140",
    "productIds": [
      "gid://shopify/Product/20995642"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RemoveFromCollection($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/1007901140",
        "productIds": [
            "gid://shopify/Product/20995642"
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
  mutation RemoveFromCollection($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/1007901140",
  "productIds": [
    "gid://shopify/Product/20995642"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RemoveFromCollection($id: ID!, $productIds: [ID!]!) {
      collectionRemoveProducts(id: $id, productIds: $productIds) {
        job {
          done
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/1007901140",
        "productIds": [
            "gid://shopify/Product/20995642"
        ]
    },
  },
});
``` #### Response

```json
{
  "collectionRemoveProducts": {
    "job": {
      "done": false,
      "id": "gid://shopify/Job/8b553d69-6076-4dee-bc21-8c2d52457a36"
    },
    "userErrors": []
  }
}
``` 
*   ### collectionRemoveProducts reference

Examples
--------

Remove a product from a manual collection

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20collectionRemoveProducts(%24id%3A%20ID!%2C%20%24productIds%3A%20%5BID!%5D!)%20%7B%0A%20%20collectionRemoveProducts(id%3A%20%24id%2C%20productIds%3A%20%24productIds)%20%7B%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20done%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F1007901140%22%2C%0A%20%20%22productIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%0A%20%20%5D%0A%7D)Copy

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

 mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {

 collectionRemoveProducts(id: $id, productIds: $productIds) {

 job {

 done

 id

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Collection/1007901140",

"productIds":[

"gid://shopify/Product/20995642"

]

},

},

);

const data=await response.json();

```
mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
  collectionRemoveProducts(id: $id, productIds: $productIds) {
    job {
      done
      id
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
"query": "mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) { collectionRemoveProducts(id: $id, productIds: $productIds) { job { done id } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/1007901140",
    "productIds": [
      "gid://shopify/Product/20995642"
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/1007901140",
        "productIds": [
            "gid://shopify/Product/20995642"
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
    "query": `mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
      collectionRemoveProducts(id: $id, productIds: $productIds) {
        job {
          done
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/1007901140",
        "productIds": [
            "gid://shopify/Product/20995642"
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
  mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
    collectionRemoveProducts(id: $id, productIds: $productIds) {
      job {
        done
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/1007901140",
  "productIds": [
    "gid://shopify/Product/20995642"
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

›

⌄

⌄

{

"id": "gid://shopify/Collection/1007901140",

"productIds": [

"gid://shopify/Product/20995642"

]

}

Hide content

Response
--------

JSON

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

"collectionRemoveProducts": {

"job": {

"done": false,

"id": "gid://shopify/Job/0d9c63ab-d903-4f1e-b9b1-6ddf55948dfb"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*