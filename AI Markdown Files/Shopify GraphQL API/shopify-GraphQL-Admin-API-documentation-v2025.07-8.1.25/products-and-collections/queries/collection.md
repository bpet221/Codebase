---
title: "collection"
description: "Shopify GraphQL Admin API documentation for collection"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/collection"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collection - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/collection

Markdown Content:
collection - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection#main-content)

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

[Anchor to collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection#top)
collection
==========

query

Retrieves a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) by its ID. A collection represents a grouping of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can display and sell as a group in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collection` query when you need to:

*   Manage collection publishing across sales channels
*   Access collection metadata and SEO information
*   Work with collection rules and product relationships

A collection can be either a custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) collection where products are manually added, or a smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collection where products are automatically included based on defined rules. Each collection has associated metadata including title, description, handle, image, and [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Collection` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to Collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection#returns-Collection)Collection

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

*   ### Retrieve a metafield associated with a collection

#### Description

Get the [metafield](https://shopify.dev/docs/apps/build/custom-data) value identified by `my_fields.subtitle` on a specific collection.

#### Query

```graphql
query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  collection(id: $ownerId) {
    subtitle: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "subtitle",
  "ownerId": "gid://shopify/Collection/841564295"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) { collection(id: $ownerId) { subtitle: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "subtitle",
    "ownerId": "gid://shopify/Collection/841564295"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    collection(id: $ownerId) {
      subtitle: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "subtitle",
        "ownerId": "gid://shopify/Collection/841564295"
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
  query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    collection(id: $ownerId) {
      subtitle: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "subtitle",
  "ownerId": "gid://shopify/Collection/841564295"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      collection(id: $ownerId) {
        subtitle: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "subtitle",
        "ownerId": "gid://shopify/Collection/841564295"
    },
  },
});
``` #### Response

```json
{
  "collection": {
    "subtitle": {
      "value": "Best of the best"
    }
  }
}
``` 
*   ### Retrieve a collection by ID

#### Description

Retrieve a specific [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) using its ID. The response returns the collection's basic information including its ID, title, handle, description, update timestamp, image details, and [sort order](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder).

#### Query

```graphql
query GetCollection($id: ID!) {
  collection(id: $id) {
    id
    title
    handle
    descriptionHtml
    updatedAt
    sortOrder
    image {
      url
      height
      width
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Collection/841564295"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetCollection($id: ID!) { collection(id: $id) { id title handle descriptionHtml updatedAt sortOrder image { url height width } } }",
 "variables": {
    "id": "gid://shopify/Collection/841564295"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      updatedAt
      sortOrder
      image {
        url
        height
        width
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/841564295"
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
  query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      updatedAt
      sortOrder
      image {
        url
        height
        width
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/841564295"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        descriptionHtml
        updatedAt
        sortOrder
        image {
          url
          height
          width
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/841564295"
    },
  },
});
``` #### Response

```json
{
  "collection": {
    "id": "gid://shopify/Collection/841564295",
    "title": "IPods",
    "handle": "ipods",
    "descriptionHtml": "<p>The best selling ipod ever</p>",
    "updatedAt": "2008-02-02T00:00:00Z",
    "sortOrder": "MANUAL",
    "image": {
      "url": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1750460312",
      "height": 456,
      "width": 123
    }
  }
}
``` 
*   ### Retrieve a collection with its products

#### Description

Retrieve a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) along with a list of its associated [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). The response includes the collection details and the first 10 products in the collection, with each product's ID and title. This is useful for displaying a collection page with its product listings.

#### Query

```graphql
query GetCollectionWithProducts($id: ID!) {
  collection(id: $id) {
    id
    title
    handle
    descriptionHtml
    products(first: 10) {
      nodes {
        id
        title
        handle
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Collection/841564295"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetCollectionWithProducts($id: ID!) { collection(id: $id) { id title handle descriptionHtml products(first: 10) { nodes { id title handle } pageInfo { hasNextPage hasPreviousPage } } } }",
 "variables": {
    "id": "gid://shopify/Collection/841564295"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetCollectionWithProducts($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      products(first: 10) {
        nodes {
          id
          title
          handle
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/841564295"
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
  query GetCollectionWithProducts($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      descriptionHtml
      products(first: 10) {
        nodes {
          id
          title
          handle
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/841564295"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetCollectionWithProducts($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
        descriptionHtml
        products(first: 10) {
          nodes {
            id
            title
            handle
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/841564295"
    },
  },
});
``` #### Response

```json
{
  "collection": {
    "id": "gid://shopify/Collection/841564295",
    "title": "IPods",
    "handle": "ipods",
    "descriptionHtml": "<p>The best selling ipod ever</p>",
    "products": {
      "nodes": [
        {
          "id": "gid://shopify/Product/632910392",
          "title": "IPod Nano - 8GB",
          "handle": "ipod-nano"
        }
      ],
      "pageInfo": {
        "hasNextPage": false,
        "hasPreviousPage": false
      }
    }
  }
}
``` 
*   ### Retrieve a smart collection with its rules

#### Description

Retrieve a [smart collection](https://help.shopify.com/manual/products/collections/smart-collections) along with its automated [rules](https://help.shopify.com/manual/products/collections/smart-collections/conditions). Smart collections automatically include products that match specific conditions. The response includes the collection details and its rule set, which defines the conditions used to automatically populate the collection with products.

#### Query

```graphql
query GetSmartCollection($id: ID!) {
  collection(id: $id) {
    id
    title
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
    products(first: 5) {
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
  "id": "gid://shopify/Collection/482865238"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetSmartCollection($id: ID!) { collection(id: $id) { id title handle sortOrder ruleSet { appliedDisjunctively rules { column relation condition } } products(first: 5) { nodes { id title } } } }",
 "variables": {
    "id": "gid://shopify/Collection/482865238"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetSmartCollection($id: ID!) {
    collection(id: $id) {
      id
      title
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
      products(first: 5) {
        nodes {
          id
          title
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/482865238"
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
  query GetSmartCollection($id: ID!) {
    collection(id: $id) {
      id
      title
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
      products(first: 5) {
        nodes {
          id
          title
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/482865238"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetSmartCollection($id: ID!) {
      collection(id: $id) {
        id
        title
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
        products(first: 5) {
          nodes {
            id
            title
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/482865238"
    },
  },
});
``` #### Response

```json
{
  "collection": {
    "id": "gid://shopify/Collection/482865238",
    "title": "Smart iPods",
    "handle": "smart-ipods",
    "sortOrder": "MANUAL",
    "ruleSet": {
      "appliedDisjunctively": false,
      "rules": [
        {
          "column": "TYPE",
          "relation": "EQUALS",
          "condition": "Cult Products"
        }
      ]
    },
    "products": {
      "nodes": [
        {
          "id": "gid://shopify/Product/632910392",
          "title": "IPod Nano - 8GB"
        },
        {
          "id": "gid://shopify/Product/921728736",
          "title": "IPod Touch 8GB"
        }
      ]
    }
  }
}
``` 
*   ### Get a collection's product count

#### Description

Retrieve the total number of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection). The response includes a count object with the exact number of products and a precision indicator. This is useful for [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) calculations and displaying collection statistics.

#### Query

```graphql
query GetCollectionProductCount($id: ID!) {
  collection(id: $id) {
    id
    title
    productsCount {
      count
      precision
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Collection/841564295"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetCollectionProductCount($id: ID!) { collection(id: $id) { id title productsCount { count precision } } }",
 "variables": {
    "id": "gid://shopify/Collection/841564295"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetCollectionProductCount($id: ID!) {
    collection(id: $id) {
      id
      title
      productsCount {
        count
        precision
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/841564295"
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
  query GetCollectionProductCount($id: ID!) {
    collection(id: $id) {
      id
      title
      productsCount {
        count
        precision
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/841564295"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetCollectionProductCount($id: ID!) {
      collection(id: $id) {
        id
        title
        productsCount {
          count
          precision
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/841564295"
    },
  },
});
``` #### Response

```json
{
  "collection": {
    "id": "gid://shopify/Collection/841564295",
    "title": "IPods",
    "productsCount": {
      "count": 1,
      "precision": "EXACT"
    }
  }
}
``` 
*   ### Retrieve a collection's publication status

#### Description

Check if a collection is published to a [sales channel](https://shopify.dev/docs/apps/build/sales-channels). The response includes publication status and publication-related fields. This is useful for determining collection visibility and managing which collections are available through your app. > Note: > You must have the `read_product_listings` access scope to retrieve publication information.

#### Query

```graphql
query GetCollectionPublicationStatus($id: ID!) {
  collection(id: $id) {
    id
    title
    publishedOnCurrentPublication
    publicationCount
    resourcePublicationsCount {
      count
      precision
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Collection/841564295"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetCollectionPublicationStatus($id: ID!) { collection(id: $id) { id title publishedOnCurrentPublication publicationCount resourcePublicationsCount { count precision } } }",
 "variables": {
    "id": "gid://shopify/Collection/841564295"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetCollectionPublicationStatus($id: ID!) {
    collection(id: $id) {
      id
      title
      publishedOnCurrentPublication
      publicationCount
      resourcePublicationsCount {
        count
        precision
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/841564295"
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
  query GetCollectionPublicationStatus($id: ID!) {
    collection(id: $id) {
      id
      title
      publishedOnCurrentPublication
      publicationCount
      resourcePublicationsCount {
        count
        precision
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/841564295"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetCollectionPublicationStatus($id: ID!) {
      collection(id: $id) {
        id
        title
        publishedOnCurrentPublication
        publicationCount
        resourcePublicationsCount {
          count
          precision
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/841564295"
    },
  },
});
``` #### Response

```json
{
  "collection": {
    "id": "gid://shopify/Collection/841564295",
    "title": "IPods",
    "publishedOnCurrentPublication": true,
    "publicationCount": 2,
    "resourcePublicationsCount": {
      "count": 2,
      "precision": "EXACT"
    }
  }
}
``` 
*   ### Try retrieving a non-existent collection

#### Description

Attempting to retrieve a collection that doesn't exist returns `null`. This demonstrates the expected behavior when querying for a non-existent collection ID.

#### Query

```graphql
query GetNonExistentCollection($id: ID!) {
  collection(id: $id) {
    id
    title
    handle
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Collection/-1"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetNonExistentCollection($id: ID!) { collection(id: $id) { id title handle } }",
 "variables": {
    "id": "gid://shopify/Collection/-1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetNonExistentCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/-1"
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
  query GetNonExistentCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/-1"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetNonExistentCollection($id: ID!) {
      collection(id: $id) {
        id
        title
        handle
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/-1"
    },
  },
});
``` #### Response

```json
{
  "collection": null
}
``` 

Examples
--------

Retrieve a metafield associated with a collection

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CollectionMetafield(%24namespace%3A%20String!%2C%20%24key%3A%20String!%2C%20%24ownerId%3A%20ID!)%20%7B%0A%20%20collection(id%3A%20%24ownerId)%20%7B%0A%20%20%20%20subtitle%3A%20metafield(namespace%3A%20%24namespace%2C%20key%3A%20%24key)%20%7B%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22namespace%22%3A%20%22my_fields%22%2C%0A%20%20%22key%22%3A%20%22subtitle%22%2C%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F841564295%22%0A%7D)Copy

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

 query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {

 collection(id: $ownerId) {

 subtitle: metafield(namespace: $namespace, key: $key) {

 value

 }

 }

 }`,

{

variables:{

"namespace":"my_fields",

"key":"subtitle",

"ownerId":"gid://shopify/Collection/841564295"

},

},

);

const data=await response.json();

```
query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  collection(id: $ownerId) {
    subtitle: metafield(namespace: $namespace, key: $key) {
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
"query": "query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) { collection(id: $ownerId) { subtitle: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "subtitle",
    "ownerId": "gid://shopify/Collection/841564295"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    collection(id: $ownerId) {
      subtitle: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "subtitle",
        "ownerId": "gid://shopify/Collection/841564295"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      collection(id: $ownerId) {
        subtitle: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "subtitle",
        "ownerId": "gid://shopify/Collection/841564295"
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
  query CollectionMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    collection(id: $ownerId) {
      subtitle: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "subtitle",
  "ownerId": "gid://shopify/Collection/841564295"
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

"key": "subtitle",

"ownerId": "gid://shopify/Collection/841564295"

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

"collection": {

"subtitle": {

"value": "Best of the best"

}

}

}


---
*Content truncated at "Updates" section*