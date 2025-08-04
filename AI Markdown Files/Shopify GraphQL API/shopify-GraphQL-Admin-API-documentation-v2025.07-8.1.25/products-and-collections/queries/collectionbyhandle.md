---
title: "collectionByHandle"
description: "Shopify GraphQL Admin API documentation for collectionbyhandle"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionByHandle - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle

Markdown Content:
collectionByHandle - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle#main-content)

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

[Anchor to collectionByHandle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle#top)
collection By Handle
====================

query

Requires `read_products` access scope.

Deprecated.Use [collectionByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionByIdentifier) instead.

Return a collection by its handle.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle#arguments-handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The handle of the collection.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle#returns-Collection)Collection

•[Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

There are two types of collections:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

The `Collection` object provides information to:

*   Organize products by category, season, or promotion.
*   Automate product grouping using rules (for example, by tag, type, or price).
*   Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
*   Manage collection visibility and publication across sales channels.
*   Add rich descriptions, images, and metadata to enhance discovery.

* * *

Note

Collections are unpublished by default. To make them available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

* * *

Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a collection by a handle that doesn't exist

#### Description

Trying to retrieve a collection by a handle that doesn't exist returns `null`.

#### Query

```graphql
query {
  collectionByHandle(handle: "there is no collection with a handle like this") {
    id
    title
    products(first: 5, reverse: true) {
      edges {
        node {
          id
          title
          createdAt
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
"query": "query { collectionByHandle(handle: \"there is no collection with a handle like this\") { id title products(first: 5, reverse: true) { edges { node { id title createdAt priceRangeV2 { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collectionByHandle(handle: "there is no collection with a handle like this") {
      id
      title
      products(first: 5, reverse: true) {
        edges {
          node {
            id
            title
            createdAt
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
    collectionByHandle(handle: "there is no collection with a handle like this") {
      id
      title
      products(first: 5, reverse: true) {
        edges {
          node {
            id
            title
            createdAt
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
    collectionByHandle(handle: "there is no collection with a handle like this") {
      id
      title
      products(first: 5, reverse: true) {
        edges {
          node {
            id
            title
            createdAt
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
      }
    }
  }`,
});
``` #### Response

```json
{
  "collectionByHandle": null
}
``` 
*   ### Retrieve a collection with five of its best-selling products by its handle

#### Query

```graphql
query {
  collectionByHandle(handle: "everything") {
    id
    title
    products(first: 5, sortKey: BEST_SELLING) {
      edges {
        node {
          id
          title
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
"query": "query { collectionByHandle(handle: \"everything\") { id title products(first: 5, sortKey: BEST_SELLING) { edges { node { id title priceRangeV2 { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collectionByHandle(handle: "everything") {
      id
      title
      products(first: 5, sortKey: BEST_SELLING) {
        edges {
          node {
            id
            title
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
    collectionByHandle(handle: "everything") {
      id
      title
      products(first: 5, sortKey: BEST_SELLING) {
        edges {
          node {
            id
            title
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
    collectionByHandle(handle: "everything") {
      id
      title
      products(first: 5, sortKey: BEST_SELLING) {
        edges {
          node {
            id
            title
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
      }
    }
  }`,
});
``` #### Response

```json
{
  "collectionByHandle": {
    "id": "gid://shopify/Collection/94229130",
    "title": "All products more expensive than free",
    "products": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Product/108828309",
            "title": "Draft",
            "priceRangeV2": {
              "minVariantPrice": {
                "amount": "10.0",
                "currencyCode": "USD"
              },
              "maxVariantPrice": {
                "amount": "10.0",
                "currencyCode": "USD"
              }
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/910489600",
            "title": "Crafty Shoes",
            "priceRangeV2": {
              "minVariantPrice": {
                "amount": "100.0",
                "currencyCode": "USD"
              },
              "maxVariantPrice": {
                "amount": "100.0",
                "currencyCode": "USD"
              }
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/20995642",
            "title": "Element",
            "priceRangeV2": {
              "minVariantPrice": {
                "amount": "10.0",
                "currencyCode": "USD"
              },
              "maxVariantPrice": {
                "amount": "15.0",
                "currencyCode": "USD"
              }
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/121709582",
            "title": "Boots",
            "priceRangeV2": {
              "minVariantPrice": {
                "amount": "30.0",
                "currencyCode": "USD"
              },
              "maxVariantPrice": {
                "amount": "30.0",
                "currencyCode": "USD"
              }
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/912855135",
            "title": "SEO Boots",
            "priceRangeV2": {
              "minVariantPrice": {
                "amount": "35.0",
                "currencyCode": "USD"
              },
              "maxVariantPrice": {
                "amount": "35.0",
                "currencyCode": "USD"
              }
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the ID of a collection with a specified handle

#### Query

```graphql
query getCollectionIdFromHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    id
  }
}
``` #### Variables

```json
{
  "handle": "ipods"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query getCollectionIdFromHandle($handle: String!) { collectionByHandle(handle: $handle) { id } }",
 "variables": {
    "handle": "ipods"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query getCollectionIdFromHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
    }
  }`,
  {
    variables: {
        "handle": "ipods"
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
  query getCollectionIdFromHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
    }
  }
QUERY

variables = {
  "handle": "ipods"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query getCollectionIdFromHandle($handle: String!) {
      collectionByHandle(handle: $handle) {
        id
      }
    }`,
    "variables": {
        "handle": "ipods"
    },
  },
});
``` #### Response

```json
{
  "collectionByHandle": {
    "id": "gid://shopify/Collection/841564295"
  }
}
``` 

Examples
--------

Retrieve a collection by a handle that doesn't exist

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20collectionByHandle(handle%3A%20%22there%20is%20no%20collection%20with%20a%20handle%20like%20this%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20products(first%3A%205%2C%20reverse%3A%20true)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20priceRangeV2%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20minVariantPrice%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20maxVariantPrice%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 collectionByHandle(handle: "there is no collection with a handle like this") {

 id

 title

 products(first: 5, reverse: true) {

 edges {

 node {

 id

 title

 createdAt

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

 }

 }

 }`,

);

const data=await response.json();

```
query {
  collectionByHandle(handle: "there is no collection with a handle like this") {
    id
    title
    products(first: 5, reverse: true) {
      edges {
        node {
          id
          title
          createdAt
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
"query": "query { collectionByHandle(handle: \"there is no collection with a handle like this\") { id title products(first: 5, reverse: true) { edges { node { id title createdAt priceRangeV2 { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collectionByHandle(handle: "there is no collection with a handle like this") {
      id
      title
      products(first: 5, reverse: true) {
        edges {
          node {
            id
            title
            createdAt
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
    collectionByHandle(handle: "there is no collection with a handle like this") {
      id
      title
      products(first: 5, reverse: true) {
        edges {
          node {
            id
            title
            createdAt
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
    collectionByHandle(handle: "there is no collection with a handle like this") {
      id
      title
      products(first: 5, reverse: true) {
        edges {
          node {
            id
            title
            createdAt
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

9

1

2

3

›

⌄

{

"collectionByHandle": null

}


---
*Content truncated at "Updates" section*