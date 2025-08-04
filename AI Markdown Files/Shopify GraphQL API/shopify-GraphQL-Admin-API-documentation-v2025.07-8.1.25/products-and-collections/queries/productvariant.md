---
title: "productVariant"
description: "Shopify GraphQL Admin API documentation for productvariant"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productVariant - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant

Markdown Content:
productVariant - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant#main-content)

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

[Anchor to productVariant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant#top)
product Variant
===============

query

Retrieves a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) by its ID.

A product variant is a specific version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

Use the `productVariant` query when you need to:

*   Access essential product variant data (for example, title, price, image, and metafields).
*   Build product detail pages and manage inventory.
*   Handle international sales with localized pricing and content.
*   Manage product variants that are part of a bundle or selling plan.

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `ProductVariant` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ProductVariant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant#returns-ProductVariant)Product Variant

•[Product Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

*   Tracking inventory for each variant
*   Setting unique prices for each variant
*   Assigning barcodes and SKUs to connect variants to fulfillment services
*   Attaching variant-specific images and media
*   Setting delivery and tax requirements
*   Supporting product bundles, subscriptions, and selling plans

A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

*   [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
*   [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
*   [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a metafield associated with a product variant

#### Description

Get the [metafield](https://shopify.dev/docs/apps/build/custom-data) value identified by `my_fields.liner_material` on a specific product variant.

#### Query

```graphql
query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  productVariant(id: $ownerId) {
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
  "ownerId": "gid://shopify/ProductVariant/43729076"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) { productVariant(id: $ownerId) { linerMaterial: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "liner_material",
    "ownerId": "gid://shopify/ProductVariant/43729076"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    productVariant(id: $ownerId) {
      linerMaterial: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "liner_material",
        "ownerId": "gid://shopify/ProductVariant/43729076"
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
  query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    productVariant(id: $ownerId) {
      linerMaterial: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "liner_material",
  "ownerId": "gid://shopify/ProductVariant/43729076"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      productVariant(id: $ownerId) {
        linerMaterial: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "liner_material",
        "ownerId": "gid://shopify/ProductVariant/43729076"
    },
  },
});
``` #### Response

```json
{
  "productVariant": {
    "linerMaterial": {
      "value": "synthetic leather"
    }
  }
}
``` 
*   ### Retrieve a product variant's price for buyers in Canada

#### Description

Use the `contextualPricing` field to retrieve a product variant's price for buyers in Canada. Prices are returned in the currency configured for the country in [Markets settings](https://help.shopify.com/manual/international/managing). They might be calculated from the base variant prices, or provided by the merchant as fixed local prices.

#### Query

```graphql
query {
  productVariant(id: "gid://shopify/ProductVariant/43729076") {
    contextualPricing(context: {country: CA}) {
      price {
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
"query": "query { productVariant(id: \"gid://shopify/ProductVariant/43729076\") { contextualPricing(context: {country: CA}) { price { amount currencyCode } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariant(id: "gid://shopify/ProductVariant/43729076") {
      contextualPricing(context: {country: CA}) {
        price {
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
    productVariant(id: "gid://shopify/ProductVariant/43729076") {
      contextualPricing(context: {country: CA}) {
        price {
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
    productVariant(id: "gid://shopify/ProductVariant/43729076") {
      contextualPricing(context: {country: CA}) {
        price {
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
  "productVariant": {
    "contextualPricing": {
      "price": {
        "amount": "12.99",
        "currencyCode": "CAD"
      }
    }
  }
}
``` 
*   ### Retrieve a product variant's price in different countries

#### Description

Use the `contextualPricing` field to retrieve a product variant's price in Canada, France, and the United States. This example returns the price of the product variant in each country.

#### Query

```graphql
query {
  productVariant(id: "gid://shopify/ProductVariant/43729076") {
    CanadaPrice: contextualPricing(context: {country: CA}) {
      price {
        amount
        currencyCode
      }
    }
    USPrice: contextualPricing(context: {country: US}) {
      price {
        amount
        currencyCode
      }
    }
    FrancePrice: contextualPricing(context: {country: FR}) {
      price {
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
"query": "query { productVariant(id: \"gid://shopify/ProductVariant/43729076\") { CanadaPrice: contextualPricing(context: {country: CA}) { price { amount currencyCode } } USPrice: contextualPricing(context: {country: US}) { price { amount currencyCode } } FrancePrice: contextualPricing(context: {country: FR}) { price { amount currencyCode } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariant(id: "gid://shopify/ProductVariant/43729076") {
      CanadaPrice: contextualPricing(context: {country: CA}) {
        price {
          amount
          currencyCode
        }
      }
      USPrice: contextualPricing(context: {country: US}) {
        price {
          amount
          currencyCode
        }
      }
      FrancePrice: contextualPricing(context: {country: FR}) {
        price {
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
    productVariant(id: "gid://shopify/ProductVariant/43729076") {
      CanadaPrice: contextualPricing(context: {country: CA}) {
        price {
          amount
          currencyCode
        }
      }
      USPrice: contextualPricing(context: {country: US}) {
        price {
          amount
          currencyCode
        }
      }
      FrancePrice: contextualPricing(context: {country: FR}) {
        price {
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
    productVariant(id: "gid://shopify/ProductVariant/43729076") {
      CanadaPrice: contextualPricing(context: {country: CA}) {
        price {
          amount
          currencyCode
        }
      }
      USPrice: contextualPricing(context: {country: US}) {
        price {
          amount
          currencyCode
        }
      }
      FrancePrice: contextualPricing(context: {country: FR}) {
        price {
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
  "productVariant": {
    "CanadaPrice": {
      "price": {
        "amount": "12.99",
        "currencyCode": "CAD"
      }
    },
    "USPrice": {
      "price": {
        "amount": "10.0",
        "currencyCode": "USD"
      }
    },
    "FrancePrice": {
      "price": {
        "amount": "4.95",
        "currencyCode": "EUR"
      }
    }
  }
}
``` 
*   ### Retrieve information about a product variant by its ID

#### Description

Retrieve information about a product variant by its ID. This example returns details including the title, price, and barcode of the product variant.

#### Query

```graphql
query GetProductVariant($id: ID!) {
  productVariant(id: $id) {
    id
    title
    availableForSale
    barcode
    compareAtPrice
    createdAt
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/ProductVariant/43729076"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetProductVariant($id: ID!) { productVariant(id: $id) { id title availableForSale barcode compareAtPrice createdAt } }",
 "variables": {
    "id": "gid://shopify/ProductVariant/43729076"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetProductVariant($id: ID!) {
    productVariant(id: $id) {
      id
      title
      availableForSale
      barcode
      compareAtPrice
      createdAt
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/ProductVariant/43729076"
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
  query GetProductVariant($id: ID!) {
    productVariant(id: $id) {
      id
      title
      availableForSale
      barcode
      compareAtPrice
      createdAt
    }
  }
QUERY

variables = {
  "id": "gid://shopify/ProductVariant/43729076"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetProductVariant($id: ID!) {
      productVariant(id: $id) {
        id
        title
        availableForSale
        barcode
        compareAtPrice
        createdAt
      }
    }`,
    "variables": {
        "id": "gid://shopify/ProductVariant/43729076"
    },
  },
});
``` #### Response

```json
{
  "productVariant": {
    "id": "gid://shopify/ProductVariant/43729076",
    "title": "151cm",
    "availableForSale": true,
    "barcode": "12345678",
    "compareAtPrice": "20.00",
    "createdAt": "2025-06-11T00:27:43Z"
  }
}
``` 
*   ### Retrieve multiple product variants using their IDs and GraphQL aliases

#### Description

Retrieve multiple product variants by their IDs using [aliases](https://shopify.dev/docs/apps/build/graphql/basics/advanced#make-multiple-queries-in-one-request) to name the results. This example returns the ID and title for each product variant.

#### Query

```graphql
query {
  productVariant1: productVariant(id: "gid://shopify/ProductVariant/30322695") {
    id
    title
  }
  productVariant2: productVariant(id: "gid://shopify/ProductVariant/43729076") {
    id
    title
  }
  productVariant3: productVariant(id: "gid://shopify/ProductVariant/113711323") {
    id
    title
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { productVariant1: productVariant(id: \"gid://shopify/ProductVariant/30322695\") { id title } productVariant2: productVariant(id: \"gid://shopify/ProductVariant/43729076\") { id title } productVariant3: productVariant(id: \"gid://shopify/ProductVariant/113711323\") { id title } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariant1: productVariant(id: "gid://shopify/ProductVariant/30322695") {
      id
      title
    }
    productVariant2: productVariant(id: "gid://shopify/ProductVariant/43729076") {
      id
      title
    }
    productVariant3: productVariant(id: "gid://shopify/ProductVariant/113711323") {
      id
      title
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
    productVariant1: productVariant(id: "gid://shopify/ProductVariant/30322695") {
      id
      title
    }
    productVariant2: productVariant(id: "gid://shopify/ProductVariant/43729076") {
      id
      title
    }
    productVariant3: productVariant(id: "gid://shopify/ProductVariant/113711323") {
      id
      title
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    productVariant1: productVariant(id: "gid://shopify/ProductVariant/30322695") {
      id
      title
    }
    productVariant2: productVariant(id: "gid://shopify/ProductVariant/43729076") {
      id
      title
    }
    productVariant3: productVariant(id: "gid://shopify/ProductVariant/113711323") {
      id
      title
    }
  }`,
});
``` #### Response

```json
{
  "productVariant1": {
    "id": "gid://shopify/ProductVariant/30322695",
    "title": "151cm"
  },
  "productVariant2": {
    "id": "gid://shopify/ProductVariant/43729076",
    "title": "151cm"
  },
  "productVariant3": {
    "id": "gid://shopify/ProductVariant/113711323",
    "title": "155cm"
  }
}
``` 

Examples
--------

Retrieve a metafield associated with a product variant

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ProductVariantMetafield(%24namespace%3A%20String!%2C%20%24key%3A%20String!%2C%20%24ownerId%3A%20ID!)%20%7B%0A%20%20productVariant(id%3A%20%24ownerId)%20%7B%0A%20%20%20%20linerMaterial%3A%20metafield(namespace%3A%20%24namespace%2C%20key%3A%20%24key)%20%7B%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22namespace%22%3A%20%22my_fields%22%2C%0A%20%20%22key%22%3A%20%22liner_material%22%2C%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F43729076%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {

 productVariant(id: $ownerId) {

 linerMaterial: metafield(namespace: $namespace, key: $key) {

 value

 }

 }

 }`,

{

variables:{

"namespace":"my_fields",

"key":"liner_material",

"ownerId":"gid://shopify/ProductVariant/43729076"

},

},

);

const data=await response.json();

```
query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  productVariant(id: $ownerId) {
    linerMaterial: metafield(namespace: $namespace, key: $key) {
      value
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
"query": "query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) { productVariant(id: $ownerId) { linerMaterial: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "liner_material",
    "ownerId": "gid://shopify/ProductVariant/43729076"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    productVariant(id: $ownerId) {
      linerMaterial: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "liner_material",
        "ownerId": "gid://shopify/ProductVariant/43729076"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      productVariant(id: $ownerId) {
        linerMaterial: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "liner_material",
        "ownerId": "gid://shopify/ProductVariant/43729076"
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
  query ProductVariantMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    productVariant(id: $ownerId) {
      linerMaterial: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "liner_material",
  "ownerId": "gid://shopify/ProductVariant/43729076"
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

›

⌄

{

"namespace": "my_fields",

"key": "liner_material",

"ownerId": "gid://shopify/ProductVariant/43729076"

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

›

⌄

⌄

⌄

{

"productVariant": {

"linerMaterial": {

"value": "synthetic leather"

}

}

}


---
*Content truncated at "Updates" section*