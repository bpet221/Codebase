---
title: "productOperation"
description: "Shopify GraphQL Admin API documentation for productoperation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productOperation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation

Markdown Content:
productOperation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation#main-content)

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

    *   
Queries

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
        *   [product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant)
        *   [product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantbyidentifier)
        *   [product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants)
        *   [product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantscount)
        *   [selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroup)
        *   [selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroups)
        *   [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)

    *   Mutations   
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

[Anchor to productOperation](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation#top)
product Operation
=================

query

Returns a ProductOperation resource by ID.

This can be used to query the [ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation), using the ID that was returned [when the product was created or updated](https://shopify.dev/api/admin/migrate/new-product-model/sync-data#create-a-product-with-variants-and-options-asynchronously) by the [ProductSet](https://shopify.dev/api/admin-graphql/current/mutations/productSet) mutation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `product` field provides the details of the created or updated product.

For the [ProductSetOperation](https://shopify.dev/api/admin-graphql/current/objects/ProductSetOperation), the `userErrors` field provides mutation errors that occurred during the operation.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `ProductOperation` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ProductOperation](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation#returns-ProductOperation)Product Operation

•[Product Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

An entity that represents details of an asynchronous operation on a product.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### View the status of an asynchronous product delete operation

#### Query

```graphql
query ProductDeleteOperation($id: ID!) {
  productOperation(id: $id) {
    ... on ProductDeleteOperation {
      id
      status
      deletedProductId
      product {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/ProductDeleteOperation/843567278"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductDeleteOperation($id: ID!) { productOperation(id: $id) { ... on ProductDeleteOperation { id status deletedProductId product { id } } } }",
 "variables": {
    "id": "gid://shopify/ProductDeleteOperation/843567278"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductDeleteOperation($id: ID!) {
    productOperation(id: $id) {
      ... on ProductDeleteOperation {
        id
        status
        deletedProductId
        product {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ProductDeleteOperation/843567278"
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
  query ProductDeleteOperation($id: ID!) {
    productOperation(id: $id) {
      ... on ProductDeleteOperation {
        id
        status
        deletedProductId
        product {
          id
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ProductDeleteOperation/843567278"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductDeleteOperation($id: ID!) {
      productOperation(id: $id) {
        ... on ProductDeleteOperation {
          id
          status
          deletedProductId
          product {
            id
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ProductDeleteOperation/843567278"
    },
  },
});
``` #### Response

```json
{
  "productOperation": {
    "id": "gid://shopify/ProductDeleteOperation/843567278",
    "status": "COMPLETE",
    "deletedProductId": "gid://shopify/Product/20995642",
    "product": null
  }
}
``` 
*   ### View the status of an asynchronous product duplicate operation

#### Query

```graphql
query ProductDuplicateOperation($operationId: ID!) {
  productOperation(id: $operationId) {
    ... on ProductDuplicateOperation {
      id
      status
      newProduct {
        id
        title
      }
      userErrors {
        field
        message
      }
    }
  }
}
``` #### Variables

```json
{
  "operationId": "gid://shopify/ProductDuplicateOperation/893212316"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductDuplicateOperation($operationId: ID!) { productOperation(id: $operationId) { ... on ProductDuplicateOperation { id status newProduct { id title } userErrors { field message } } } }",
 "variables": {
    "operationId": "gid://shopify/ProductDuplicateOperation/893212316"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductDuplicateOperation($operationId: ID!) {
    productOperation(id: $operationId) {
      ... on ProductDuplicateOperation {
        id
        status
        newProduct {
          id
          title
        }
        userErrors {
          field
          message
        }
      }
    }
  }`,
  {
    variables: {
        "operationId": "gid://shopify/ProductDuplicateOperation/893212316"
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
  query ProductDuplicateOperation($operationId: ID!) {
    productOperation(id: $operationId) {
      ... on ProductDuplicateOperation {
        id
        status
        newProduct {
          id
          title
        }
        userErrors {
          field
          message
        }
      }
    }
  }
QUERY

variables = {
  "operationId": "gid://shopify/ProductDuplicateOperation/893212316"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductDuplicateOperation($operationId: ID!) {
      productOperation(id: $operationId) {
        ... on ProductDuplicateOperation {
          id
          status
          newProduct {
            id
            title
          }
          userErrors {
            field
            message
          }
        }
      }
    }`,
    "variables": {
        "operationId": "gid://shopify/ProductDuplicateOperation/893212316"
    },
  },
});
``` #### Response

```json
{
  "productOperation": {
    "id": "gid://shopify/ProductDuplicateOperation/893212316",
    "status": "COMPLETE",
    "newProduct": {
      "id": "gid://shopify/Product/108828309",
      "title": "Draft (Copy)"
    },
    "userErrors": []
  }
}
``` 
*   ### View the status of an asynchronous product set operation

#### Query

```graphql
query productSetOperation($id: ID!) {
  productOperation(id: $id) {
    ... on ProductSetOperation {
      id
      status
      product {
        id
      }
      userErrors {
        field
        message
        code
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/ProductSetOperation/824846712"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query productSetOperation($id: ID!) { productOperation(id: $id) { ... on ProductSetOperation { id status product { id } userErrors { field message code } } } }",
 "variables": {
    "id": "gid://shopify/ProductSetOperation/824846712"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query productSetOperation($id: ID!) {
    productOperation(id: $id) {
      ... on ProductSetOperation {
        id
        status
        product {
          id
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ProductSetOperation/824846712"
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
  query productSetOperation($id: ID!) {
    productOperation(id: $id) {
      ... on ProductSetOperation {
        id
        status
        product {
          id
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ProductSetOperation/824846712"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query productSetOperation($id: ID!) {
      productOperation(id: $id) {
        ... on ProductSetOperation {
          id
          status
          product {
            id
          }
          userErrors {
            field
            message
            code
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ProductSetOperation/824846712"
    },
  },
});
``` #### Response

```json
{
  "productOperation": {
    "id": "gid://shopify/ProductSetOperation/824846712",
    "status": "COMPLETE",
    "product": {
      "id": "gid://shopify/Product/20995642"
    },
    "userErrors": []
  }
}
``` 

Examples
--------

View the status of an asynchronous product delete operation

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ProductDeleteOperation(%24id%3A%20ID!)%20%7B%0A%20%20productOperation(id%3A%20%24id)%20%7B%0A%20%20%20%20...%20on%20ProductDeleteOperation%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20deletedProductId%0A%20%20%20%20%20%20product%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProductDeleteOperation%2F843567278%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query ProductDeleteOperation($id: ID!) {

 productOperation(id: $id) {

 ... on ProductDeleteOperation {

 id

 status

 deletedProductId

 product {

 id

 }

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/ProductDeleteOperation/843567278"

},

},

);

const data=await response.json();

```
query ProductDeleteOperation($id: ID!) {
  productOperation(id: $id) {
    ... on ProductDeleteOperation {
      id
      status
      deletedProductId
      product {
        id
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
"query": "query ProductDeleteOperation($id: ID!) { productOperation(id: $id) { ... on ProductDeleteOperation { id status deletedProductId product { id } } } }",
 "variables": {
    "id": "gid://shopify/ProductDeleteOperation/843567278"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductDeleteOperation($id: ID!) {
    productOperation(id: $id) {
      ... on ProductDeleteOperation {
        id
        status
        deletedProductId
        product {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ProductDeleteOperation/843567278"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductDeleteOperation($id: ID!) {
      productOperation(id: $id) {
        ... on ProductDeleteOperation {
          id
          status
          deletedProductId
          product {
            id
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ProductDeleteOperation/843567278"
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
  query ProductDeleteOperation($id: ID!) {
    productOperation(id: $id) {
      ... on ProductDeleteOperation {
        id
        status
        deletedProductId
        product {
          id
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ProductDeleteOperation/843567278"
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

"id": "gid://shopify/ProductDeleteOperation/843567278"

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

›

⌄

⌄

{

"productOperation": {

"id": "gid://shopify/ProductDeleteOperation/843567278",

"status": "COMPLETE",

"deletedProductId": "gid://shopify/Product/20995642",

"product": null

}

}


---
*Content truncated at "Updates" section*