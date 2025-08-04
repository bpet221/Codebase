---
title: "product"
description: "Shopify GraphQL Admin API documentation for product"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/product"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: product - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/product

Markdown Content:
product - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/product#main-content)

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

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product#top)
product
=======

query

Retrieves a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) by its ID. A product is an item that a merchant can sell in their store.

Use the `product` query when you need to:

*   Access essential product data (for example, title, description, price, images, SEO metadata, and metafields).
*   Build product detail pages and manage inventory.
*   Handle international sales with localized pricing and content.
*   Manage product variants and product options.

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/product#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/product#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Product` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/product#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product#returns-Product)Product

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

*   ### Get metafields attached to a product

#### Description

Get a page of metafields attached to a specific product.

#### Query

```graphql
query ProductMetafields($ownerId: ID!) {
  product(id: $ownerId) {
    metafields(first: 3) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductMetafields($ownerId: ID!) { product(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductMetafields($ownerId: ID!) {
    product(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }`,
  {
    variables: {
        "ownerId": "gid://shopify/Product/108828309"
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
  query ProductMetafields($ownerId: ID!) {
    product(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }
QUERY

variables = {
  "ownerId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductMetafields($ownerId: ID!) {
      product(id: $ownerId) {
        metafields(first: 3) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }`,
    "variables": {
        "ownerId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "liner_material",
            "value": "synthetic leather"
          }
        }
      ]
    }
  }
}
``` 
*   ### Get the price range for a product for buyers from Canada

#### Description

Retrieve a product's price range for buyers from Canada by supplying the product ID. Prices are returned in the currency configured for the country in [Markets settings](https://help.shopify.com/manual/international/managing). They may be calculated from the base variant prices, or provided by the merchant as fixed local prices.

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/108828309") {
    contextualPricing(context: {country: CA}) {
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
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
"query": "query { product(id: \"gid://shopify/Product/108828309\") { contextualPricing(context: {country: CA}) { priceRange { maxVariantPrice { amount currencyCode } minVariantPrice { amount currencyCode } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/108828309") {
      contextualPricing(context: {country: CA}) {
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
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
    product(id: "gid://shopify/Product/108828309") {
      contextualPricing(context: {country: CA}) {
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
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
    product(id: "gid://shopify/Product/108828309") {
      contextualPricing(context: {country: CA}) {
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "contextualPricing": {
      "priceRange": {
        "maxVariantPrice": {
          "amount": "12.99",
          "currencyCode": "CAD"
        },
        "minVariantPrice": {
          "amount": "12.99",
          "currencyCode": "CAD"
        }
      }
    }
  }
}
``` 
*   ### Query whether a product is published in a given country

#### Description

Supply the product ID to retrieve whether a product is published in a certain international context. A merchant selling internationally might choose to restrict some products due to logistics, licensing, or market-fit. This example returns whether the product is published in Canada, Great Britain, or the United States. You must have the `read_publications` access scope to return publication information.

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/49527214") {
    title
    publishedInCA: publishedInContext(context: {country: CA})
    publishedInGB: publishedInContext(context: {country: GB})
    publishedInUS: publishedInContext(context: {country: US})
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { product(id: \"gid://shopify/Product/49527214\") { title publishedInCA: publishedInContext(context: {country: CA}) publishedInGB: publishedInContext(context: {country: GB}) publishedInUS: publishedInContext(context: {country: US}) } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/49527214") {
      title
      publishedInCA: publishedInContext(context: {country: CA})
      publishedInGB: publishedInContext(context: {country: GB})
      publishedInUS: publishedInContext(context: {country: US})
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
    product(id: "gid://shopify/Product/49527214") {
      title
      publishedInCA: publishedInContext(context: {country: CA})
      publishedInGB: publishedInContext(context: {country: GB})
      publishedInUS: publishedInContext(context: {country: US})
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    product(id: "gid://shopify/Product/49527214") {
      title
      publishedInCA: publishedInContext(context: {country: CA})
      publishedInGB: publishedInContext(context: {country: GB})
      publishedInUS: publishedInContext(context: {country: US})
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "title": "Alarm clock",
    "publishedInCA": true,
    "publishedInGB": false,
    "publishedInUS": true
  }
}
``` 
*   ### Retrieve a count of all images for a product

#### Description

Supply the product ID to retrieve the count of all images for the product. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media).

#### Query

```graphql
query ProductImageCount($productId: ID!) {
  product(id: $productId) {
    mediaCount {
      count
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductImageCount($productId: ID!) { product(id: $productId) { mediaCount { count } } }",
 "variables": {
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductImageCount($productId: ID!) {
    product(id: $productId) {
      mediaCount {
        count
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/108828309"
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
  query ProductImageCount($productId: ID!) {
    product(id: $productId) {
      mediaCount {
        count
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductImageCount($productId: ID!) {
      product(id: $productId) {
        mediaCount {
          count
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "mediaCount": {
      "count": 5
    }
  }
}
``` 
*   ### Retrieve a metafield associated with a product

#### Description

Get the metafield value identified by `my_fields.liner_material` on a specific product.

#### Query

```graphql
query ProductMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  product(id: $ownerId) {
    linerMaterial: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "liner_material",
  "ownerId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductMetafield($namespace: String!, $key: String!, $ownerId: ID!) { product(id: $ownerId) { linerMaterial: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "liner_material",
    "ownerId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    product(id: $ownerId) {
      linerMaterial: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "liner_material",
        "ownerId": "gid://shopify/Product/108828309"
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
  query ProductMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    product(id: $ownerId) {
      linerMaterial: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "liner_material",
  "ownerId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      product(id: $ownerId) {
        linerMaterial: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "liner_material",
        "ownerId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "linerMaterial": {
      "value": "synthetic leather"
    }
  }
}
``` 
*   ### Retrieve a product that is published to your app

#### Description

Supply the product ID to retrieve a product that's published to your app. This example returns comprehensive product information including basic details, timestamps, variants, and media. You must have the `read_product_listings` access scope to return publication information.

#### Query

```graphql
query ProductShow($id: ID!) {
  product(id: $id) {
    publishedOnCurrentPublication
    id
    createdAt
    updatedAt
    descriptionHtml
    handle
    productType
    title
    vendor
    tags
    publishedAt
    variants(first: 10) {
      nodes {
        id
      }
    }
    images(first: 10) {
      nodes {
        id
        height
        width
        url
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Product/20995642"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductShow($id: ID!) { product(id: $id) { publishedOnCurrentPublication id createdAt updatedAt descriptionHtml handle productType title vendor tags publishedAt variants(first: 10) { nodes { id } } images(first: 10) { nodes { id height width url } } } }",
 "variables": {
    "id": "gid://shopify/Product/20995642"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductShow($id: ID!) {
    product(id: $id) {
      publishedOnCurrentPublication
      id
      createdAt
      updatedAt
      descriptionHtml
      handle
      productType
      title
      vendor
      tags
      publishedAt
      variants(first: 10) {
        nodes {
          id
        }
      }
      images(first: 10) {
        nodes {
          id
          height
          width
          url
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/20995642"
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
  query ProductShow($id: ID!) {
    product(id: $id) {
      publishedOnCurrentPublication
      id
      createdAt
      updatedAt
      descriptionHtml
      handle
      productType
      title
      vendor
      tags
      publishedAt
      variants(first: 10) {
        nodes {
          id
        }
      }
      images(first: 10) {
        nodes {
          id
          height
          width
          url
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/20995642"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductShow($id: ID!) {
      product(id: $id) {
        publishedOnCurrentPublication
        id
        createdAt
        updatedAt
        descriptionHtml
        handle
        productType
        title
        vendor
        tags
        publishedAt
        variants(first: 10) {
          nodes {
            id
          }
        }
        images(first: 10) {
          nodes {
            id
            height
            width
            url
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/20995642"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "publishedOnCurrentPublication": true,
    "id": "gid://shopify/Product/20995642",
    "createdAt": "2005-01-01T00:00:00Z",
    "updatedAt": "2005-01-01T00:00:00Z",
    "descriptionHtml": "<p>bad board</p>",
    "handle": "element",
    "productType": "Snowboards",
    "title": "Element",
    "vendor": "Arbor",
    "tags": [],
    "publishedAt": "2005-01-01T00:00:00Z",
    "variants": {
      "nodes": [
        {
          "id": "gid://shopify/ProductVariant/30322695"
        },
        {
          "id": "gid://shopify/ProductVariant/113711323"
        },
        {
          "id": "gid://shopify/ProductVariant/236948360"
        }
      ]
    },
    "images": {
      "nodes": [
        {
          "id": "gid://shopify/ProductImage/916933471",
          "height": 400,
          "width": 85,
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/element58.jpg?v=1749170878"
        },
        {
          "id": "gid://shopify/ProductImage/671149505",
          "height": 110,
          "width": 372,
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/bacon.jpg?v=1749170878"
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a product using the QueryRoot.node field and a GraphQL fragment

#### Description

Supply the product ID to retrieve the title of the product. This example returns the product title for the specified product.

#### Query

```graphql
query {
  node(id: "gid://shopify/Product/108828309") {
    id
    ... on Product {
      title
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
"query": "query { node(id: \"gid://shopify/Product/108828309\") { id ... on Product { title } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    node(id: "gid://shopify/Product/108828309") {
      id
      ... on Product {
        title
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
    node(id: "gid://shopify/Product/108828309") {
      id
      ... on Product {
        title
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
    node(id: "gid://shopify/Product/108828309") {
      id
      ... on Product {
        title
      }
    }
  }`,
});
``` #### Response

```json
{
  "node": {
    "id": "gid://shopify/Product/108828309",
    "title": "Draft"
  }
}
``` 
*   ### Retrieve a product's fields and connections

#### Description

Supply the product ID to retrieve the product's fields and connections. This example returns comprehensive information about the product, including its collections, created date, description, handle, and variant information. You must have the `read_publications` and `read_product_listings` access scopes to return publication information.

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/108828309") {
    collections(first: 5) {
      edges {
        node {
          handle
        }
      }
    }
    createdAt
    defaultCursor
    description
    descriptionHtml
    featuredMedia {
      id
    }
    feedback {
      details {
        messages {
          message
        }
      }
    }
    giftCardTemplateSuffix
    handle
    hasOnlyDefaultVariant
    hasOutOfStockVariants
    id
    media(first: 5) {
      edges {
        node {
          id
        }
      }
    }
    inCollection(id: "gid://shopify/Collection/1007901140")
    isGiftCard
    legacyResourceId
    metafields(first: 5) {
      edges {
        node {
          id
        }
      }
    }
    onlineStorePreviewUrl
    onlineStoreUrl
    options {
      name
    }
    priceRangeV2 {
      maxVariantPrice {
        amount
      }
      minVariantPrice {
        amount
      }
    }
    productType
    resourcePublicationsCount {
      count
    }
    availablePublicationsCount {
      count
    }
    publishedAt
    resourcePublications(first: 5) {
      edges {
        node {
          isPublished
        }
      }
    }
    resourcePublicationOnCurrentPublication {
      publication {
        id
      }
      publishDate
      isPublished
    }
    seo {
      title
    }
    tags
    templateSuffix
    title
    totalInventory
    tracksInventory
    unpublishedPublications(first: 5) {
      edges {
        node {
          id
        }
      }
    }
    updatedAt
    variants(first: 5) {
      edges {
        node {
          displayName
        }
      }
    }
    variantsCount {
      count
    }
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
"query": "query { product(id: \"gid://shopify/Product/108828309\") { collections(first: 5) { edges { node { handle } } } createdAt defaultCursor description descriptionHtml featuredMedia { id } feedback { details { messages { message } } } giftCardTemplateSuffix handle hasOnlyDefaultVariant hasOutOfStockVariants id media(first: 5) { edges { node { id } } } inCollection(id: \"gid://shopify/Collection/1007901140\") isGiftCard legacyResourceId metafields(first: 5) { edges { node { id } } } onlineStorePreviewUrl onlineStoreUrl options { name } priceRangeV2 { maxVariantPrice { amount } minVariantPrice { amount } } productType resourcePublicationsCount { count } availablePublicationsCount { count } publishedAt resourcePublications(first: 5) { edges { node { isPublished } } } resourcePublicationOnCurrentPublication { publication { id } publishDate isPublished } seo { title } tags templateSuffix title totalInventory tracksInventory unpublishedPublications(first: 5) { edges { node { id } } } updatedAt variants(first: 5) { edges { node { displayName } } } variantsCount { count } vendor } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/108828309") {
      collections(first: 5) {
        edges {
          node {
            handle
          }
        }
      }
      createdAt
      defaultCursor
      description
      descriptionHtml
      featuredMedia {
        id
      }
      feedback {
        details {
          messages {
            message
          }
        }
      }
      giftCardTemplateSuffix
      handle
      hasOnlyDefaultVariant
      hasOutOfStockVariants
      id
      media(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      inCollection(id: "gid://shopify/Collection/1007901140")
      isGiftCard
      legacyResourceId
      metafields(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      onlineStorePreviewUrl
      onlineStoreUrl
      options {
        name
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      productType
      resourcePublicationsCount {
        count
      }
      availablePublicationsCount {
        count
      }
      publishedAt
      resourcePublications(first: 5) {
        edges {
          node {
            isPublished
          }
        }
      }
      resourcePublicationOnCurrentPublication {
        publication {
          id
        }
        publishDate
        isPublished
      }
      seo {
        title
      }
      tags
      templateSuffix
      title
      totalInventory
      tracksInventory
      unpublishedPublications(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      updatedAt
      variants(first: 5) {
        edges {
          node {
            displayName
          }
        }
      }
      variantsCount {
        count
      }
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
    product(id: "gid://shopify/Product/108828309") {
      collections(first: 5) {
        edges {
          node {
            handle
          }
        }
      }
      createdAt
      defaultCursor
      description
      descriptionHtml
      featuredMedia {
        id
      }
      feedback {
        details {
          messages {
            message
          }
        }
      }
      giftCardTemplateSuffix
      handle
      hasOnlyDefaultVariant
      hasOutOfStockVariants
      id
      media(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      inCollection(id: "gid://shopify/Collection/1007901140")
      isGiftCard
      legacyResourceId
      metafields(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      onlineStorePreviewUrl
      onlineStoreUrl
      options {
        name
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      productType
      resourcePublicationsCount {
        count
      }
      availablePublicationsCount {
        count
      }
      publishedAt
      resourcePublications(first: 5) {
        edges {
          node {
            isPublished
          }
        }
      }
      resourcePublicationOnCurrentPublication {
        publication {
          id
        }
        publishDate
        isPublished
      }
      seo {
        title
      }
      tags
      templateSuffix
      title
      totalInventory
      tracksInventory
      unpublishedPublications(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      updatedAt
      variants(first: 5) {
        edges {
          node {
            displayName
          }
        }
      }
      variantsCount {
        count
      }
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
    product(id: "gid://shopify/Product/108828309") {
      collections(first: 5) {
        edges {
          node {
            handle
          }
        }
      }
      createdAt
      defaultCursor
      description
      descriptionHtml
      featuredMedia {
        id
      }
      feedback {
        details {
          messages {
            message
          }
        }
      }
      giftCardTemplateSuffix
      handle
      hasOnlyDefaultVariant
      hasOutOfStockVariants
      id
      media(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      inCollection(id: "gid://shopify/Collection/1007901140")
      isGiftCard
      legacyResourceId
      metafields(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      onlineStorePreviewUrl
      onlineStoreUrl
      options {
        name
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      productType
      resourcePublicationsCount {
        count
      }
      availablePublicationsCount {
        count
      }
      publishedAt
      resourcePublications(first: 5) {
        edges {
          node {
            isPublished
          }
        }
      }
      resourcePublicationOnCurrentPublication {
        publication {
          id
        }
        publishDate
        isPublished
      }
      seo {
        title
      }
      tags
      templateSuffix
      title
      totalInventory
      tracksInventory
      unpublishedPublications(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      updatedAt
      variants(first: 5) {
        edges {
          node {
            displayName
          }
        }
      }
      variantsCount {
        count
      }
      vendor
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "collections": {
      "edges": [
        {
          "node": {
            "handle": "reorder_custom"
          }
        },
        {
          "node": {
            "handle": "everything"
          }
        },
        {
          "node": {
            "handle": "snowboards"
          }
        },
        {
          "node": {
            "handle": "everything-custom"
          }
        },
        {
          "node": {
            "handle": "featured_asc"
          }
        }
      ]
    },
    "createdAt": "2005-01-02T00:00:00Z",
    "defaultCursor": "eyJsaW1pdCI6MSwib3JkZXIiOiJpZCBhc2MiLCJsYXN0X2lkIjoxMDg4MjgzMDksImxhc3RfdmFsdWUiOjEwODgyODMwOSwiZGlyZWN0aW9uIjoibmV4dCJ9",
    "description": "good board",
    "descriptionHtml": "<p>good board</p>",
    "featuredMedia": {
      "id": "gid://shopify/ExternalVideo/1041834415"
    },
    "feedback": null,
    "giftCardTemplateSuffix": null,
    "handle": "draft",
    "hasOnlyDefaultVariant": false,
    "hasOutOfStockVariants": false,
    "id": "gid://shopify/Product/108828309",
    "media": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/ExternalVideo/1041834415"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Video/723685877"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Model3d/544780400"
          }
        },
        {
          "node": {
            "id": "gid://shopify/MediaImage/853695510"
          }
        },
        {
          "node": {
            "id": "gid://shopify/MediaImage/603944694"
          }
        }
      ]
    },
    "inCollection": true,
    "isGiftCard": false,
    "legacyResourceId": "108828309",
    "metafields": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Metafield/61655654"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Metafield/147010266"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Metafield/204658793"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Metafield/485513001"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Metafield/632448133"
          }
        }
      ]
    },
    "onlineStorePreviewUrl": "https://www.snowdevil.ca/products/draft",
    "onlineStoreUrl": "https://www.snowdevil.ca/products/draft",
    "options": [
      {
        "name": "Title"
      }
    ],
    "priceRangeV2": {
      "maxVariantPrice": {
        "amount": "10.0"
      },
      "minVariantPrice": {
        "amount": "10.0"
      }
    },
    "productType": "Snowboards",
    "resourcePublicationsCount": {
      "count": 4
    },
    "availablePublicationsCount": {
      "count": 4
    },
    "publishedAt": "2005-01-02T00:00:00Z",
    "resourcePublications": {
      "edges": [
        {
          "node": {
            "isPublished": true
          }
        },
        {
          "node": {
            "isPublished": true
          }
        },
        {
          "node": {
            "isPublished": true
          }
        }
      ]
    },
    "resourcePublicationOnCurrentPublication": {
      "publication": {
        "id": "gid://shopify/Publication/762454635"
      },
      "publishDate": "2005-01-02T00:00:00Z",
      "isPublished": true
    },
    "seo": {
      "title": null
    },
    "tags": [
      "Deepsnow",
      "Dub Quote\"s",
      "quote's",
      "Wooden Core"
    ],
    "templateSuffix": null,
    "title": "Draft",
    "totalInventory": 1,
    "tracksInventory": true,
    "unpublishedPublications": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Publication/49361227"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Publication/195806409"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Publication/224761294"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Publication/336184109"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Publication/347532733"
          }
        }
      ]
    },
    "updatedAt": "2005-01-02T00:00:00Z",
    "variants": {
      "edges": [
        {
          "node": {
            "displayName": "Draft - 151cm"
          }
        }
      ]
    },
    "variantsCount": {
      "count": 1
    },
    "vendor": "Arbor"
  }
}
``` 
*   ### Retrieve a single product

#### Description

Supply the product ID to retrieve the product. This example returns the product's ID, title, [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant), and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

#### Query

```graphql
query GetProduct($id: ID!) {
  product(id: $id) {
    id
    title
    variants(first: 10) {
      nodes {
        id
        title
      }
    }
    collections(first: 10) {
      nodes {
        id
        title
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetProduct($id: ID!) { product(id: $id) { id title variants(first: 10) { nodes { id title } } collections(first: 10) { nodes { id title } } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      variants(first: 10) {
        nodes {
          id
          title
        }
      }
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309"
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
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      variants(first: 10) {
        nodes {
          id
          title
        }
      }
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetProduct($id: ID!) {
      product(id: $id) {
        id
        title
        variants(first: 10) {
          nodes {
            id
            title
          }
        }
        collections(first: 10) {
          nodes {
            id
            title
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "id": "gid://shopify/Product/108828309",
    "title": "Draft",
    "variants": {
      "nodes": [
        {
          "id": "gid://shopify/ProductVariant/43729076",
          "title": "151cm"
        }
      ]
    },
    "collections": {
      "nodes": [
        {
          "id": "gid://shopify/Collection/79210309",
          "title": "Custom Other Items"
        },
        {
          "id": "gid://shopify/Collection/94229130",
          "title": "All products more expensive than free"
        },
        {
          "id": "gid://shopify/Collection/142458073",
          "title": "All snowboards"
        },
        {
          "id": "gid://shopify/Collection/442946009",
          "title": "All products - handpicked!"
        },
        {
          "id": "gid://shopify/Collection/793607630",
          "title": "Featured items"
        },
        {
          "id": "gid://shopify/Collection/925420914",
          "title": "All snowboards called Draft"
        },
        {
          "id": "gid://shopify/Collection/1007901140",
          "title": "Featured items"
        },
        {
          "id": "gid://shopify/Collection/1063001310",
          "title": "Smart Other items"
        }
      ]
    }
  }
}
``` 
*   ### Retrieve media for a product

#### Description

Supply the product ID to retrieve the media, such as images and videos, for the product. This example returns the media for the specified product. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media).

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/108828309") {
    title
    media(first: 5) {
      edges {
        node {
          ...fieldsForMediaTypes
        }
      }
    }
  }
}

fragment fieldsForMediaTypes on Media {
  alt
  mediaContentType
  preview {
    image {
      id
      altText
      url
    }
  }
  status
  ... on Video {
    id
    sources {
      format
      height
      mimeType
      url
      width
    }
    originalSource {
      format
      height
      mimeType
      url
      width
    }
  }
  ... on ExternalVideo {
    id
    host
    originUrl
  }
  ... on Model3d {
    sources {
      format
      mimeType
      url
    }
    originalSource {
      format
      mimeType
      url
    }
  }
  ... on MediaImage {
    id
    image {
      altText
      url
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
"query": "query { product(id: \"gid://shopify/Product/108828309\") { title media(first: 5) { edges { node { ...fieldsForMediaTypes } } } } } fragment fieldsForMediaTypes on Media { alt mediaContentType preview { image { id altText url } } status ... on Video { id sources { format height mimeType url width } originalSource { format height mimeType url width } } ... on ExternalVideo { id host originUrl } ... on Model3d { sources { format mimeType url } originalSource { format mimeType url } } ... on MediaImage { id image { altText url } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/108828309") {
      title
      media(first: 5) {
        edges {
          node {
            ...fieldsForMediaTypes
          }
        }
      }
    }
  }
  
  fragment fieldsForMediaTypes on Media {
    alt
    mediaContentType
    preview {
      image {
        id
        altText
        url
      }
    }
    status
    ... on Video {
      id
      sources {
        format
        height
        mimeType
        url
        width
      }
      originalSource {
        format
        height
        mimeType
        url
        width
      }
    }
    ... on ExternalVideo {
      id
      host
      originUrl
    }
    ... on Model3d {
      sources {
        format
        mimeType
        url
      }
      originalSource {
        format
        mimeType
        url
      }
    }
    ... on MediaImage {
      id
      image {
        altText
        url
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
    product(id: "gid://shopify/Product/108828309") {
      title
      media(first: 5) {
        edges {
          node {
            ...fieldsForMediaTypes
          }
        }
      }
    }
  }
  
  fragment fieldsForMediaTypes on Media {
    alt
    mediaContentType
    preview {
      image {
        id
        altText
        url
      }
    }
    status
    ... on Video {
      id
      sources {
        format
        height
        mimeType
        url
        width
      }
      originalSource {
        format
        height
        mimeType
        url
        width
      }
    }
    ... on ExternalVideo {
      id
      host
      originUrl
    }
    ... on Model3d {
      sources {
        format
        mimeType
        url
      }
      originalSource {
        format
        mimeType
        url
      }
    }
    ... on MediaImage {
      id
      image {
        altText
        url
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
    product(id: "gid://shopify/Product/108828309") {
      title
      media(first: 5) {
        edges {
          node {
            ...fieldsForMediaTypes
          }
        }
      }
    }
  }
  
  fragment fieldsForMediaTypes on Media {
    alt
    mediaContentType
    preview {
      image {
        id
        altText
        url
      }
    }
    status
    ... on Video {
      id
      sources {
        format
        height
        mimeType
        url
        width
      }
      originalSource {
        format
        height
        mimeType
        url
        width
      }
    }
    ... on ExternalVideo {
      id
      host
      originUrl
    }
    ... on Model3d {
      sources {
        format
        mimeType
        url
      }
      originalSource {
        format
        mimeType
        url
      }
    }
    ... on MediaImage {
      id
      image {
        altText
        url
      }
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "title": "Draft",
    "media": {
      "edges": [
        {
          "node": {
            "alt": "This is a video",
            "mediaContentType": "EXTERNAL_VIDEO",
            "preview": {
              "image": {
                "id": "gid://shopify/ImageSource/425689044",
                "altText": "This is a video",
                "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/external_video_preview.jpg?v=1749170878"
              }
            },
            "status": "READY",
            "id": "gid://shopify/ExternalVideo/1041834415",
            "host": "YOUTUBE",
            "originUrl": "https://youtu.be/dQw4w9WgXcQ"
          }
        },
        {
          "node": {
            "alt": "This is a video",
            "mediaContentType": "VIDEO",
            "preview": {
              "image": {
                "id": "gid://shopify/ImageSource/727549632",
                "altText": "This is a video",
                "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/shopify_video_preview.jpg?v=1749170878"
              }
            },
            "status": "READY",
            "id": "gid://shopify/Video/723685877",
            "sources": [
              {
                "format": "mp4",
                "height": 1080,
                "mimeType": "video/mp4",
                "url": "https://cdn.shopify.com/videos/dev/vp/098dc4345e654352a24b0b033d2a3a1b/HD-1080p.mp4",
                "width": 1920
              },
              {
                "format": "mp4",
                "height": 720,
                "mimeType": "video/mp4",
                "url": "https://cdn.shopify.com/videos/dev/vp/098dc4345e654352a24b0b033d2a3a1b/HD-720p.mp4",
                "width": 1280
              },
              {
                "format": "m3u8",
                "height": 720,
                "mimeType": "application/x-mpegURL",
                "url": "https://cdn.shopify.com/videos/dev/vp/098dc4345e654352a24b0b033d2a3a1b/streaming.m3u8",
                "width": 1280
              }
            ],
            "originalSource": {
              "format": "mov",
              "height": 360,
              "mimeType": "video/quicktime",
              "url": "https://cdn.shopify.com/videos/vp/03d15b89f02b4e1a97e9c5cd76bd0a6d/SD-360p.mov",
              "width": 480
            }
          }
        },
        {
          "node": {
            "alt": "This is a 3d Model",
            "mediaContentType": "MODEL_3D",
            "preview": {
              "image": {
                "id": "gid://shopify/ImageSource/175601098",
                "altText": "This is a 3d Model",
                "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/threed_preview_image.jpg?v=1749170878"
              }
            },
            "status": "READY",
            "sources": [
              {
                "format": "glb",
                "mimeType": "model/gltf-binary",
                "url": "https://storage.googleapis.com/threed-models-test/temp.glb"
              },
              {
                "format": "usdz",
                "mimeType": "model/vnd.usdz+zip",
                "url": "https://storage.googleapis.com/threed-models-test/temp.usdz"
              }
            ],
            "originalSource": {
              "format": "glb",
              "mimeType": "model/gltf-binary",
              "url": "https://storage.googleapis.com/threed-models-test/temp_original.glb"
            }
          }
        },
        {
          "node": {
            "alt": "",
            "mediaContentType": "IMAGE",
            "preview": {
              "image": {
                "id": "gid://shopify/ImageSource/853695510",
                "altText": "",
                "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft58.jpg?v=1749170878"
              }
            },
            "status": "READY",
            "id": "gid://shopify/MediaImage/853695510",
            "image": {
              "altText": "",
              "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft58.jpg?v=1749170878"
            }
          }
        },
        {
          "node": {
            "alt": "",
            "mediaContentType": "IMAGE",
            "preview": {
              "image": {
                "id": "gid://shopify/ImageSource/603944694",
                "altText": "",
                "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft59.jpg?v=1749170878"
              }
            },
            "status": "READY",
            "id": "gid://shopify/MediaImage/603944694",
            "image": {
              "altText": "",
              "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft59.jpg?v=1749170878"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the first ten collections for a product

#### Description

Supply the product ID to retrieve the [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) for the product. This example returns the first ten collections for the specified product.

#### Query

```graphql
query CollectionsForProduct($productId: ID!) {
  product(id: $productId) {
    collections(first: 10) {
      nodes {
        id
        title
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CollectionsForProduct($productId: ID!) { product(id: $productId) { collections(first: 10) { nodes { id title } } } }",
 "variables": {
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CollectionsForProduct($productId: ID!) {
    product(id: $productId) {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/108828309"
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
  query CollectionsForProduct($productId: ID!) {
    product(id: $productId) {
      collections(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CollectionsForProduct($productId: ID!) {
      product(id: $productId) {
        collections(first: 10) {
          nodes {
            id
            title
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "collections": {
      "nodes": [
        {
          "id": "gid://shopify/Collection/79210309",
          "title": "Custom Other Items"
        },
        {
          "id": "gid://shopify/Collection/94229130",
          "title": "All products more expensive than free"
        },
        {
          "id": "gid://shopify/Collection/142458073",
          "title": "All snowboards"
        },
        {
          "id": "gid://shopify/Collection/442946009",
          "title": "All products - handpicked!"
        },
        {
          "id": "gid://shopify/Collection/793607630",
          "title": "Featured items"
        },
        {
          "id": "gid://shopify/Collection/925420914",
          "title": "All snowboards called Draft"
        },
        {
          "id": "gid://shopify/Collection/1007901140",
          "title": "Featured items"
        },
        {
          "id": "gid://shopify/Collection/1063001310",
          "title": "Smart Other items"
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the first ten images for a product

#### Description

This example demonstrates how to retrieve a product's images with [pagination](https://shopify.dev/docs/api/usage/pagination-graphql), returning the first ten images. Learn more about [managing media for products](https://shopify.dev/docs/apps/build/online-store/product-media).

#### Query

```graphql
query ProductImageList($productId: ID!) {
  product(id: $productId) {
    media(first: 10, query: "media_type:IMAGE", sortKey: POSITION) {
      nodes {
        id
        alt
        ... on MediaImage {
          createdAt
          image {
            width
            height
            url
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/108828309"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductImageList($productId: ID!) { product(id: $productId) { media(first: 10, query: \"media_type:IMAGE\", sortKey: POSITION) { nodes { id alt ... on MediaImage { createdAt image { width height url } } } pageInfo { startCursor endCursor } } } }",
 "variables": {
    "productId": "gid://shopify/Product/108828309"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductImageList($productId: ID!) {
    product(id: $productId) {
      media(first: 10, query: "media_type:IMAGE", sortKey: POSITION) {
        nodes {
          id
          alt
          ... on MediaImage {
            createdAt
            image {
              width
              height
              url
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
        }
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/108828309"
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
  query ProductImageList($productId: ID!) {
    product(id: $productId) {
      media(first: 10, query: "media_type:IMAGE", sortKey: POSITION) {
        nodes {
          id
          alt
          ... on MediaImage {
            createdAt
            image {
              width
              height
              url
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
        }
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/108828309"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductImageList($productId: ID!) {
      product(id: $productId) {
        media(first: 10, query: "media_type:IMAGE", sortKey: POSITION) {
          nodes {
            id
            alt
            ... on MediaImage {
              createdAt
              image {
                width
                height
                url
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
          }
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/108828309"
    },
  },
});
``` #### Response

```json
{
  "product": {
    "media": {
      "nodes": [
        {
          "id": "gid://shopify/MediaImage/853695510",
          "alt": "",
          "createdAt": "2025-06-06T00:47:58Z",
          "image": {
            "width": 85,
            "height": 400,
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft58.jpg?v=1749170878"
          }
        },
        {
          "id": "gid://shopify/MediaImage/603944694",
          "alt": "",
          "createdAt": "2025-06-06T00:47:58Z",
          "image": {
            "width": 85,
            "height": 400,
            "url": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft59.jpg?v=1749170878"
          }
        }
      ],
      "pageInfo": {
        "startCursor": "eyJsYXN0X2lkIjo4NTM2OTU1MTAsImxhc3RfdmFsdWUiOiI0In0=",
        "endCursor": "eyJsYXN0X2lkIjo2MDM5NDQ2OTQsImxhc3RfdmFsdWUiOiI1In0="
      }
    }
  }
}
``` 
*   ### Retrieve the title, description, and online store URL of a product

#### Description

Supply the product ID to retrieve the title, description, and online store URL of the product. This example returns the title, description, and online store URL for the specified product.

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/108828309") {
    title
    description
    onlineStoreUrl
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { product(id: \"gid://shopify/Product/108828309\") { title description onlineStoreUrl } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/108828309") {
      title
      description
      onlineStoreUrl
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
    product(id: "gid://shopify/Product/108828309") {
      title
      description
      onlineStoreUrl
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    product(id: "gid://shopify/Product/108828309") {
      title
      description
      onlineStoreUrl
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "title": "Draft",
    "description": "good board",
    "onlineStoreUrl": "https://www.snowdevil.ca/products/draft"
  }
}
``` 
*   ### Retrieve the total count of inventory in stock of a product

#### Description

Supply the product ID to retrieve the total count of inventory in stock of the product. This example returns the product title and total inventory count for the specified product.

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/108828309") {
    title
    totalInventory
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { product(id: \"gid://shopify/Product/108828309\") { title totalInventory } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/108828309") {
      title
      totalInventory
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
    product(id: "gid://shopify/Product/108828309") {
      title
      totalInventory
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    product(id: "gid://shopify/Product/108828309") {
      title
      totalInventory
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "title": "Draft",
    "totalInventory": 1
  }
}
``` 
*   ### Retrieve translations and localizations of a product's title and description

#### Description

Retrieve a product's title and description with translations (per-language overrides) and localizations (per-language, per-market overrides). This query returns the base title and description in HTML format, along with French translations and localizations. Translations and localizations are exposed separately, but the content that's actually surfaced in a particular context falls back to translations when a value isn't localized, and to the base language when a value isn't translated. Learn more about [localizing your app](https://shopify.dev/docs/apps/build/localize-your-app).

#### Query

```graphql
query TranslationsAndLocalizations {
  product(id: "gid://shopify/Product/273955669") {
    title
    descriptionHtml
    translations(locale: "fr") {
      key
      value
    }
    localizations: translations(locale: "fr", marketId: "gid://shopify/Market/249692835") {
      key
      value
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
"query": "query TranslationsAndLocalizations { product(id: \"gid://shopify/Product/273955669\") { title descriptionHtml translations(locale: \"fr\") { key value } localizations: translations(locale: \"fr\", marketId: \"gid://shopify/Market/249692835\") { key value } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query TranslationsAndLocalizations {
    product(id: "gid://shopify/Product/273955669") {
      title
      descriptionHtml
      translations(locale: "fr") {
        key
        value
      }
      localizations: translations(locale: "fr", marketId: "gid://shopify/Market/249692835") {
        key
        value
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
  query TranslationsAndLocalizations {
    product(id: "gid://shopify/Product/273955669") {
      title
      descriptionHtml
      translations(locale: "fr") {
        key
        value
      }
      localizations: translations(locale: "fr", marketId: "gid://shopify/Market/249692835") {
        key
        value
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query TranslationsAndLocalizations {
    product(id: "gid://shopify/Product/273955669") {
      title
      descriptionHtml
      translations(locale: "fr") {
        key
        value
      }
      localizations: translations(locale: "fr", marketId: "gid://shopify/Market/249692835") {
        key
        value
      }
    }
  }`,
});
``` #### Response

```json
{
  "product": {
    "title": "Wool sweater",
    "descriptionHtml": "<p>It is very warm!</p>",
    "translations": [
      {
        "key": "body_html",
        "value": "<p>C’est très chaud!</p>"
      },
      {
        "key": "title",
        "value": "Pull en laine"
      }
    ],
    "localizations": [
      {
        "key": "title",
        "value": "Chandail en laine"
      }
    ]
  }
}
``` 
*   ### Retrieve variants for a product

#### Description

Supply the product ID to retrieve the variants for the product. This example returns the variants and media for the specified product. Learn more about [managing media for product variants](https://shopify.dev/docs/apps/build/online-store/product-variant-media).

#### Query

```graphql
query {
  product(id: "gid://shopify/Product/108828309") {
    title
    variants(first: 10) {
      edges {
        node {
          selectedOptions {
            name
            value
          }
          media(first: 10) {
            edges {
              node {
                alt
                mediaContentType
                status
                __typename
                ... on MediaImage {
                  id
                  preview {
                    image {
                      originalSrc
                    }
                  }
                  __typename
                }
              }
            }
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
"query": "query { product(id: \"gid://shopify/Product/108828309\") { title variants(first: 10) { edges { node { selectedOptions { name value } media(first: 10) { edges { node { alt mediaContentType status __typename ... on MediaImage { id preview { image { originalSrc } } __typename } } } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    product(id: "gid://shopify/Product/108828309") {
      title
      variants(first: 10) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            media(first: 10) {
              edges {
                node {
                  alt
                  mediaContentType
                  status
                  __typename
                  ... on MediaImage {
                    id
                    preview {
                      image {
                        originalSrc
                      }
                    }
                    __typename
                  }
                }
              }
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
    product(id: "gid://shopify/Product/108828309") {
      title
      variants(first: 10) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            media(first: 10) {
              edges {
                node {
                  alt
                  mediaContentType
                  status
                  __typename
                  ... on MediaImage {
                    id
                    preview {
                      image {
                        originalSrc
                      }
                    }
                    __typename
                  }
                }
              }
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
    product(id: "gid://shopify/Product/108828309") {
      title
      variants(first: 10) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            media(first: 10) {
              edges {
                node {
                  alt
                  mediaContentType
                  status
                  __typename
                  ... on MediaImage {
                    id
                    preview {
                      image {
                        originalSrc
                      }
                    }
                    __typename
                  }
                }
              }
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
  "product": {
    "title": "Draft",
    "variants": {
      "edges": [
        {
          "node": {
            "selectedOptions": [
              {
                "name": "Title",
                "value": "151cm"
              }
            ],
            "media": {
              "edges": [
                {
                  "node": {
                    "alt": "",
                    "mediaContentType": "IMAGE",
                    "status": "READY",
                    "__typename": "MediaImage",
                    "id": "gid://shopify/MediaImage/853695510",
                    "preview": {
                      "image": {
                        "originalSrc": "https://cdn.shopify.com/s/files/1/2637/1970/products/draft58.jpg?v=1749170878"
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Get metafields attached to a product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ProductMetafields(%24ownerId%3A%20ID!)%20%7B%0A%20%20product(id%3A%20%24ownerId)%20%7B%0A%20%20%20%20metafields(first%3A%203)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query ProductMetafields($ownerId: ID!) {

 product(id: $ownerId) {

 metafields(first: 3) {

 edges {

 node {

 namespace

 key

 value

 }

 }

 }

 }

 }`,

{

variables:{

"ownerId":"gid://shopify/Product/108828309"

},

},

);

const data=await response.json();

```
query ProductMetafields($ownerId: ID!) {
  product(id: $ownerId) {
    metafields(first: 3) {
      edges {
        node {
          namespace
          key
          value
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
"query": "query ProductMetafields($ownerId: ID!) { product(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/Product/108828309"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductMetafields($ownerId: ID!) {
    product(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }`,
  {
    variables: {
        "ownerId": "gid://shopify/Product/108828309"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductMetafields($ownerId: ID!) {
      product(id: $ownerId) {
        metafields(first: 3) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }`,
    "variables": {
        "ownerId": "gid://shopify/Product/108828309"
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
  query ProductMetafields($ownerId: ID!) {
    product(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }
QUERY

variables = {
  "ownerId": "gid://shopify/Product/108828309"
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

"ownerId": "gid://shopify/Product/108828309"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"product": {

"metafields": {

"edges": [

{

"node": {

"namespace": "my_fields",

"key": "liner_material",

"value": "synthetic leather"

}

}

]

}

}

}


---
*Content truncated at "Updates" section*