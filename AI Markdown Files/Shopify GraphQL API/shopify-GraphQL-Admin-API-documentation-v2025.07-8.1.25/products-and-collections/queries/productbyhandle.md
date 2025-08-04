---
title: "productByHandle"
description: "Shopify GraphQL Admin API documentation for productbyhandle"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productByHandle - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle

Markdown Content:
productByHandle - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle#main-content)

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

[Anchor to productByHandle](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle#top)
product By Handle
=================

query

Requires `read_products` access scope.

Deprecated.Use [productByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productByIdentifier) instead.

Return a product by its handle.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle#arguments-handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

A unique string that identifies the product. Handles are automatically generated based on the product's title, and are always lowercase. Whitespace and special characters are replaced with a hyphen: `-`. If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen. Whitespace or special characters at the beginning are removed. If a duplicate product title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`. After a product has been created, changing the product title doesn't update the handle.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Product](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle#returns-Product)Product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The `Product` object lets you manage products in a merchant’s store.

Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a product by a handle that doesn't exist

#### Description

Trying to retrieve a product by a handle that doesn't exist returns `null`.

#### Query

```graphql
query {
  productByHandle(handle: "there is no product with a handle like this") {
    id
    title
    productType
    description
    vendor
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { productByHandle(handle: \"there is no product with a handle like this\") { id title productType description vendor } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productByHandle(handle: "there is no product with a handle like this") {
      id
      title
      productType
      description
      vendor
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
    productByHandle(handle: "there is no product with a handle like this") {
      id
      title
      productType
      description
      vendor
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    productByHandle(handle: "there is no product with a handle like this") {
      id
      title
      productType
      description
      vendor
    }
  }`,
});
``` #### Response

```json
{
  "productByHandle": null
}
``` 
*   ### Retrieve product information using the product handle

#### Query

```graphql
query {
  productByHandle(handle: "ipod-nano") {
    id
    handle
    title
    productType
    description
    vendor
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
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
"query": "query { productByHandle(handle: \"ipod-nano\") { id handle title productType description vendor priceRangeV2 { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productByHandle(handle: "ipod-nano") {
      id
      handle
      title
      productType
      description
      vendor
      priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
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
    productByHandle(handle: "ipod-nano") {
      id
      handle
      title
      productType
      description
      vendor
      priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
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
    productByHandle(handle: "ipod-nano") {
      id
      handle
      title
      productType
      description
      vendor
      priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "productByHandle": {
    "id": "gid://shopify/Product/440089423",
    "handle": "ipod-nano",
    "title": "IPod Nano - 8GB",
    "productType": "Cult Products",
    "description": "It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just $149, little speaks volumes.",
    "vendor": "Apple",
    "priceRangeV2": {
      "minVariantPrice": {
        "amount": "199.0",
        "currencyCode": "USD"
      },
      "maxVariantPrice": {
        "amount": "199.0",
        "currencyCode": "USD"
      }
    }
  }
}
``` 
*   ### Retrieve the ID of a product with a specified handle

#### Query

```graphql
query getProductIdFromHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
  }
}
``` #### Variables

```json
{
  "handle": "element"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query getProductIdFromHandle($handle: String!) { productByHandle(handle: $handle) { id } }",
 "variables": {
    "handle": "element"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query getProductIdFromHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
    }
  }`,
  {
    variables: {
        "handle": "element"
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
  query getProductIdFromHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
    }
  }
QUERY

variables = {
  "handle": "element"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query getProductIdFromHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
      }
    }`,
    "variables": {
        "handle": "element"
    },
  },
});
``` #### Response

```json
{
  "productByHandle": {
    "id": "gid://shopify/Product/20995642"
  }
}
``` 

Examples
--------

Retrieve a product by a handle that doesn't exist

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20productByHandle(handle%3A%20%22there%20is%20no%20product%20with%20a%20handle%20like%20this%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20productType%0A%20%20%20%20description%0A%20%20%20%20vendor%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 productByHandle(handle: "there is no product with a handle like this") {

 id

 title

 productType

 description

 vendor

 }

 }`,

);

const data=await response.json();

```
query {
  productByHandle(handle: "there is no product with a handle like this") {
    id
    title
    productType
    description
    vendor
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { productByHandle(handle: \"there is no product with a handle like this\") { id title productType description vendor } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productByHandle(handle: "there is no product with a handle like this") {
      id
      title
      productType
      description
      vendor
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    productByHandle(handle: "there is no product with a handle like this") {
      id
      title
      productType
      description
      vendor
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
    productByHandle(handle: "there is no product with a handle like this") {
      id
      title
      productType
      description
      vendor
    }
  }
QUERY

response = client.query(query: query)
```

Hide content

Response
--------

JSON

9

1

2

3

›

⌄

{

"productByHandle": null

}


---
*Content truncated at "Updates" section*