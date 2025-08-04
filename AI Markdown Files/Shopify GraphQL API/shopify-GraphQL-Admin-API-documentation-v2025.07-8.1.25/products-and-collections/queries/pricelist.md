---
title: "priceList"
description: "Shopify GraphQL Admin API documentation for pricelist"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: priceList - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist

Markdown Content:
priceList - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist#main-content)

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

[Anchor to priceList](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist#top)
price List
==========

query

Returns a price list resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `PriceList` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to PriceList](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist#returns-PriceList)Price List

•[Price List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

Represents a price list, including information about related prices and eligibility rules. You can use price lists to specify either fixed prices or adjusted relative prices that override initial product variant prices. Price lists are applied to customers using context rules, which determine price list eligibility.

For more information on price lists, refer to [Support different pricing models](https://shopify.dev/apps/internationalization/product-price-lists).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve Price List Details and Associated Catalog Information

#### Description

Retrieves the price list's catalog title. Fetches the currency used in the price list and details about the parent's adjustment type and value.

#### Query

```graphql
query {
  priceList(id: "gid://shopify/PriceList/524058083") {
    catalog {
      id
      title
    }
    prices(first: 5, query: "product_id:20995642") {
      nodes {
        price {
          amount
          currencyCode
        }
        variant {
          id
        }
      }
    }
    currency
    parent {
      adjustment {
        type
        value
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
"query": "query { priceList(id: \"gid://shopify/PriceList/524058083\") { catalog { id title } prices(first: 5, query: \"product_id:20995642\") { nodes { price { amount currencyCode } variant { id } } } currency parent { adjustment { type value } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceList(id: "gid://shopify/PriceList/524058083") {
      catalog {
        id
        title
      }
      prices(first: 5, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
      currency
      parent {
        adjustment {
          type
          value
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
    priceList(id: "gid://shopify/PriceList/524058083") {
      catalog {
        id
        title
      }
      prices(first: 5, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
      currency
      parent {
        adjustment {
          type
          value
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
    priceList(id: "gid://shopify/PriceList/524058083") {
      catalog {
        id
        title
      }
      prices(first: 5, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
      currency
      parent {
        adjustment {
          type
          value
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "priceList": {
    "catalog": {
      "id": "gid://shopify/MarketCatalog/307400570",
      "title": "Just a simple catalog for a US Price List"
    },
    "prices": {
      "nodes": [
        {
          "price": {
            "amount": "9.0",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/30322695"
          }
        },
        {
          "price": {
            "amount": "13.5",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/113711323"
          }
        },
        {
          "price": {
            "amount": "13.5",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/236948360"
          }
        }
      ]
    },
    "currency": "USD",
    "parent": {
      "adjustment": {
        "type": "PERCENTAGE_DECREASE",
        "value": 10
      }
    }
  }
}
``` 
*   ### Retrieve Quantity Rules on Price List

#### Description

Retrieves the fixed associated quantity rules on a price list.

#### Query

```graphql
query {
  priceList(id: "gid://shopify/PriceList/225060712") {
    quantityRules(first: 3, originType: FIXED) {
      nodes {
        increment
        maximum
        minimum
        productVariant {
          id
          title
        }
      }
    }
    currency
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { priceList(id: \"gid://shopify/PriceList/225060712\") { quantityRules(first: 3, originType: FIXED) { nodes { increment maximum minimum productVariant { id title } } } currency } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceList(id: "gid://shopify/PriceList/225060712") {
      quantityRules(first: 3, originType: FIXED) {
        nodes {
          increment
          maximum
          minimum
          productVariant {
            id
            title
          }
        }
      }
      currency
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
    priceList(id: "gid://shopify/PriceList/225060712") {
      quantityRules(first: 3, originType: FIXED) {
        nodes {
          increment
          maximum
          minimum
          productVariant {
            id
            title
          }
        }
      }
      currency
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    priceList(id: "gid://shopify/PriceList/225060712") {
      quantityRules(first: 3, originType: FIXED) {
        nodes {
          increment
          maximum
          minimum
          productVariant {
            id
            title
          }
        }
      }
      currency
    }
  }`,
});
``` #### Response

```json
{
  "priceList": {
    "quantityRules": {
      "nodes": [
        {
          "increment": 100,
          "maximum": 5000,
          "minimum": 500,
          "productVariant": {
            "id": "gid://shopify/ProductVariant/43729076",
            "title": "151cm"
          }
        },
        {
          "increment": 10,
          "maximum": 1000,
          "minimum": 100,
          "productVariant": {
            "id": "gid://shopify/ProductVariant/138327650",
            "title": "Default"
          }
        },
        {
          "increment": 5,
          "maximum": null,
          "minimum": 10,
          "productVariant": {
            "id": "gid://shopify/ProductVariant/389013007",
            "title": "Small"
          }
        }
      ]
    },
    "currency": "USD"
  }
}
``` 
*   ### Retrieve the FIXED prices on a price list

#### Description

Retrieve the first ten fixed prices on a price list, returning the associated price, compareAtPrice, and variant values.

#### Query

```graphql
query {
  priceList(id: "gid://shopify/PriceList/294167858") {
    id
    name
    prices(first: 10, originType: FIXED) {
      nodes {
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        originType
        variant {
          id
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
"query": "query { priceList(id: \"gid://shopify/PriceList/294167858\") { id name prices(first: 10, originType: FIXED) { nodes { price { amount currencyCode } compareAtPrice { amount currencyCode } originType variant { id } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, originType: FIXED) {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          originType
          variant {
            id
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
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, originType: FIXED) {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          originType
          variant {
            id
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
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, originType: FIXED) {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          originType
          variant {
            id
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "priceList": {
    "id": "gid://shopify/PriceList/294167858",
    "name": "simple_pricelist",
    "prices": {
      "nodes": [
        {
          "price": {
            "amount": "19.96",
            "currencyCode": "USD"
          },
          "compareAtPrice": {
            "amount": "24.99",
            "currencyCode": "USD"
          },
          "originType": "FIXED",
          "variant": {
            "id": "gid://shopify/ProductVariant/113711323"
          }
        },
        {
          "price": {
            "amount": "9.99",
            "currencyCode": "USD"
          },
          "compareAtPrice": {
            "amount": "14.99",
            "currencyCode": "USD"
          },
          "originType": "FIXED",
          "variant": {
            "id": "gid://shopify/ProductVariant/498744621"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the prices on a price list filtered by product_id

#### Description

Retrieve the first ten prices on a price list, filtered by product_id, returning the associated price, compareAtPrice, and variant values.

#### Query

```graphql
query {
  priceList(id: "gid://shopify/PriceList/294167858") {
    id
    name
    prices(first: 10, query: "product_id:20995642") {
      nodes {
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        variant {
          id
          product {
            id
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
"query": "query { priceList(id: \"gid://shopify/PriceList/294167858\") { id name prices(first: 10, query: \"product_id:20995642\") { nodes { price { amount currencyCode } compareAtPrice { amount currencyCode } variant { id product { id } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          variant {
            id
            product {
              id
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
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          variant {
            id
            product {
              id
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
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          variant {
            id
            product {
              id
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
  "priceList": {
    "id": "gid://shopify/PriceList/294167858",
    "name": "simple_pricelist",
    "prices": {
      "nodes": [
        {
          "price": {
            "amount": "10.0",
            "currencyCode": "USD"
          },
          "compareAtPrice": {
            "amount": "14.0",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/30322695",
            "product": {
              "id": "gid://shopify/Product/20995642"
            }
          }
        },
        {
          "price": {
            "amount": "19.96",
            "currencyCode": "USD"
          },
          "compareAtPrice": {
            "amount": "24.99",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/113711323",
            "product": {
              "id": "gid://shopify/Product/20995642"
            }
          }
        },
        {
          "price": {
            "amount": "15.0",
            "currencyCode": "USD"
          },
          "compareAtPrice": {
            "amount": "17.0",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/236948360",
            "product": {
              "id": "gid://shopify/Product/20995642"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the prices on a price list filtered by variant_id

#### Description

Retrieve the first ten prices on a price list, filtered by variant_id, returning the associated price, compareAtPrice, and variant values.

#### Query

```graphql
query {
  priceList(id: "gid://shopify/PriceList/294167858") {
    id
    name
    prices(first: 10, query: "variant_id:498744621") {
      nodes {
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        variant {
          id
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
"query": "query { priceList(id: \"gid://shopify/PriceList/294167858\") { id name prices(first: 10, query: \"variant_id:498744621\") { nodes { price { amount currencyCode } compareAtPrice { amount currencyCode } variant { id } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, query: "variant_id:498744621") {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          variant {
            id
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
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, query: "variant_id:498744621") {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          variant {
            id
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
    priceList(id: "gid://shopify/PriceList/294167858") {
      id
      name
      prices(first: 10, query: "variant_id:498744621") {
        nodes {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "priceList": {
    "id": "gid://shopify/PriceList/294167858",
    "name": "simple_pricelist",
    "prices": {
      "nodes": [
        {
          "price": {
            "amount": "9.99",
            "currencyCode": "USD"
          },
          "compareAtPrice": {
            "amount": "14.99",
            "currencyCode": "USD"
          },
          "variant": {
            "id": "gid://shopify/ProductVariant/498744621"
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Retrieve Price List Details and Associated Catalog Information

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20priceList(id%3A%20%22gid%3A%2F%2Fshopify%2FPriceList%2F524058083%22)%20%7B%0A%20%20%20%20catalog%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%20%20prices(first%3A%205%2C%20query%3A%20%22product_id%3A20995642%22)%20%7B%0A%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20price%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20variant%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20currency%0A%20%20%20%20parent%20%7B%0A%20%20%20%20%20%20adjustment%20%7B%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 priceList(id: "gid://shopify/PriceList/524058083") {

 catalog {

 id

 title

 }

 prices(first: 5, query: "product_id:20995642") {

 nodes {

 price {

 amount

 currencyCode

 }

 variant {

 id

 }

 }

 }

 currency

 parent {

 adjustment {

 type

 value

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  priceList(id: "gid://shopify/PriceList/524058083") {
    catalog {
      id
      title
    }
    prices(first: 5, query: "product_id:20995642") {
      nodes {
        price {
          amount
          currencyCode
        }
        variant {
          id
        }
      }
    }
    currency
    parent {
      adjustment {
        type
        value
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
"query": "query { priceList(id: \"gid://shopify/PriceList/524058083\") { catalog { id title } prices(first: 5, query: \"product_id:20995642\") { nodes { price { amount currencyCode } variant { id } } } currency parent { adjustment { type value } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceList(id: "gid://shopify/PriceList/524058083") {
      catalog {
        id
        title
      }
      prices(first: 5, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
      currency
      parent {
        adjustment {
          type
          value
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
    priceList(id: "gid://shopify/PriceList/524058083") {
      catalog {
        id
        title
      }
      prices(first: 5, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
      currency
      parent {
        adjustment {
          type
          value
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
    priceList(id: "gid://shopify/PriceList/524058083") {
      catalog {
        id
        title
      }
      prices(first: 5, query: "product_id:20995642") {
        nodes {
          price {
            amount
            currencyCode
          }
          variant {
            id
          }
        }
      }
      currency
      parent {
        adjustment {
          type
          value
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

29

30

31

32

33

34

35

36

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

⌄

⌄

⌄

{

"priceList": {

"catalog": {

"id": "gid://shopify/MarketCatalog/307400570",

"title": "Just a simple catalog for a US Price List"

},

"prices": {

"nodes": [

{

"price": {

"amount": "9.0",

"currencyCode": "USD"

},

"variant": {

"id": "gid://shopify/ProductVariant/30322695"

}

},

{

"price": {

"amount": "13.5",

"currencyCode": "USD"

},

"variant": {

"id": "gid://shopify/ProductVariant/113711323"

}

},

{

"price": {

"amount": "13.5",

"currencyCode": "USD"

},

"variant": {

"id": "gid://shopify/ProductVariant/236948360"

}

}

]


---
*Content truncated at "Updates" section*