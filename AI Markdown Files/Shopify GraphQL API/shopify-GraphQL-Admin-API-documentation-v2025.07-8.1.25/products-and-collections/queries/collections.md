---
title: "collections"
description: "Shopify GraphQL Admin API documentation for collections"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/collections"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collections - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/collections

Markdown Content:
collections - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#main-content)

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

[Anchor to collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#top)
collections
===========

query

Retrieves a list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) in a store. Collections are groups of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize for display in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

Use the `collections` query when you need to:

*   Build a browsing interface for a store's product groupings.
*   Create collection searching, sorting, and filtering experiences (for example, by title, type, or published status).
*   Sync collection data with external systems.
*   Manage both custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) and smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collections.

The `collections` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) for large catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-savedSearchId) for frequently used collection queries.

The `collections` query returns collections with their associated metadata, including:

*   Basic collection information (title, description, handle, and type)
*   Collection image and SEO metadata
*   Product count and product relationships
*   Collection rules (for smart collections)
*   Publishing status and publication details
*   Metafields and custom attributes

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments)
CollectionConnection arguments
------------------------------

•[CollectionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-collection_type)collection_type

•string

Valid values:

*   `custom`
*   `smart`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-handle)handle

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-product_id)product_id

•id

Filter by collections containing a product by its ID.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-product_publication_status)product_publication_status

•string

Filter by the publication status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid values.

Valid values:

*   `approved`
*   `rejected`
*   `needs_action`
*   `awaiting_review`
*   `published`
*   `demoted`
*   `scheduled`
*   `provisionally_published`

Example:

*   `product_publication_status:189769876-approved`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-publishable_status)publishable_status

•string

Filter by the publishable status of the resource on a channel, such as the online store. The value is a composite of either the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) or [channel `name`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-name) and one of the valid values.

Valid values:

*   `online_store_channel`
*   `published`
*   `unpublished`
*   `visible`
*   `unavailable`
*   `hidden`
*   `intended`
*   `visible`

Example:

*   `publishable_status:published`
*   `publishable_status:189769876-visible`
*   `publishable_status:pos-hidden`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-published_at)published_at

•time

Filter by the date and time when the collection was published to the Online Store.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-published_status)published_status

•string

Filter by the published status of the resource on a channel, such as the online store.

Valid values:

*   `unset`
*   `pending`
*   `approved`
*   `not approved`

Example:

*   `published_status:approved`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-title)title

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#argument-query-filter-updated_at)updated_at

•time

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-sortKey)sort Key

•[Collection Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#returns-edges)edges

•[[Collection Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#returns-nodes)nodes

•[[Collection!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

non-null

A list of nodes that are contained in CollectionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Filter collections by title using a wildcard

#### Description

Retrieve collections whose titles start with a specific prefix using a wildcard in the query filter. In this example, the `title:All*` is used to match collections with titles that begin with "All".

#### Query

```graphql
query {
  collections(first: 10, query: "title:All*") {
    edges {
      node {
        id
        title
        handle
        updatedAt
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
"query": "query { collections(first: 10, query: \"title:All*\") { edges { node { id title handle updatedAt } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collections(first: 10, query: "title:All*") {
      edges {
        node {
          id
          title
          handle
          updatedAt
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
    collections(first: 10, query: "title:All*") {
      edges {
        node {
          id
          title
          handle
          updatedAt
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
    collections(first: 10, query: "title:All*") {
      edges {
        node {
          id
          title
          handle
          updatedAt
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "collections": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Collection/94229130",
          "title": "All products more expensive than free",
          "handle": "everything",
          "updatedAt": "2006-02-02T00:00:00Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/142458073",
          "title": "All snowboards",
          "handle": "snowboards",
          "updatedAt": "2006-02-02T00:00:00Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/431528632",
          "title": "All arbor products tagged deepsnow",
          "handle": "all-arbor-products-tagged-deepsnow",
          "updatedAt": "2006-02-02T00:00:00Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/442946009",
          "title": "All products - handpicked!",
          "handle": "everything-custom",
          "updatedAt": "2006-02-02T00:00:00Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/925420914",
          "title": "All snowboards called Draft",
          "handle": "drafts",
          "updatedAt": "2006-02-02T00:00:00Z"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve a list of custom collections

#### Description

Retrieve the first 50 [custom collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection), using the `collection_type` query filter. The response provides details for each collection, including its ID, handle, title, last updated timestamp, description in HTML format, publication status, sort order, and the suffix of the Liquid template being used to show the collection in the online store. > Note: > You must have the `read_product_listings` access scope to retrieve publication information.

#### Query

```graphql
query CustomCollectionList {
  collections(first: 50, query: "collection_type:custom") {
    nodes {
      id
      handle
      title
      updatedAt
      descriptionHtml
      publishedOnCurrentPublication
      sortOrder
      templateSuffix
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
"query": "query CustomCollectionList { collections(first: 50, query: \"collection_type:custom\") { nodes { id handle title updatedAt descriptionHtml publishedOnCurrentPublication sortOrder templateSuffix } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomCollectionList {
    collections(first: 50, query: "collection_type:custom") {
      nodes {
        id
        handle
        title
        updatedAt
        descriptionHtml
        publishedOnCurrentPublication
        sortOrder
        templateSuffix
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
  query CustomCollectionList {
    collections(first: 50, query: "collection_type:custom") {
      nodes {
        id
        handle
        title
        updatedAt
        descriptionHtml
        publishedOnCurrentPublication
        sortOrder
        templateSuffix
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CustomCollectionList {
    collections(first: 50, query: "collection_type:custom") {
      nodes {
        id
        handle
        title
        updatedAt
        descriptionHtml
        publishedOnCurrentPublication
        sortOrder
        templateSuffix
      }
    }
  }`,
});
``` #### Response

```json
{
  "collections": {
    "nodes": [
      {
        "id": "gid://shopify/Collection/395646240",
        "handle": "ipods_two",
        "title": "IPods Two",
        "updatedAt": "2008-02-02T00:00:00Z",
        "descriptionHtml": "<p>The best selling ipod ever. Again</p>",
        "publishedOnCurrentPublication": true,
        "sortOrder": "MANUAL",
        "templateSuffix": null
      },
      {
        "id": "gid://shopify/Collection/691652237",
        "handle": "non-ipods",
        "title": "Non Ipods",
        "updatedAt": "2013-02-02T00:00:00Z",
        "descriptionHtml": "<p>No ipods here</p>",
        "publishedOnCurrentPublication": true,
        "sortOrder": "MANUAL",
        "templateSuffix": null
      },
      {
        "id": "gid://shopify/Collection/841564295",
        "handle": "ipods",
        "title": "IPods",
        "updatedAt": "2008-02-02T00:00:00Z",
        "descriptionHtml": "<p>The best selling ipod ever</p>",
        "publishedOnCurrentPublication": true,
        "sortOrder": "MANUAL",
        "templateSuffix": null
      }
    ]
  }
}
``` 
*   ### Retrieve a list of smart collections

#### Description

Retrieve the first 50 [smart collections](https://help.shopify.com/manual/products/collections/smart-collections), using the `collection_type` query filter. The response provides comprehensive details for each collection, including its ID, handle, title, last updated timestamp, description in HTML format, publication status, sort order, the suffix of the Liquid template being used to show the collection in the online store, and the rule set that defines the [collection's conditions](https://help.shopify.com/manual/products/collections/smart-collections/conditions). > Note: > You must have the `read_product_listings` access scope to retrieve publication information.

#### Query

```graphql
query SmartCollectionList {
  collections(first: 50, query: "collection_type:smart") {
    nodes {
      id
      handle
      title
      updatedAt
      descriptionHtml
      publishedOnCurrentPublication
      sortOrder
      templateSuffix
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
              }
            }
            ... on CollectionRuleProductCategoryCondition {
              __typename
            }
            ... on CollectionRuleTextCondition {
              value
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
"query": "query SmartCollectionList { collections(first: 50, query: \"collection_type:smart\") { nodes { id handle title updatedAt descriptionHtml publishedOnCurrentPublication sortOrder templateSuffix ruleSet { appliedDisjunctively rules { column relation condition conditionObject { ... on CollectionRuleMetafieldCondition { metafieldDefinition { id } } ... on CollectionRuleProductCategoryCondition { __typename } ... on CollectionRuleTextCondition { value } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query SmartCollectionList {
    collections(first: 50, query: "collection_type:smart") {
      nodes {
        id
        handle
        title
        updatedAt
        descriptionHtml
        publishedOnCurrentPublication
        sortOrder
        templateSuffix
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
                }
              }
              ... on CollectionRuleProductCategoryCondition {
                __typename
              }
              ... on CollectionRuleTextCondition {
                value
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
  query SmartCollectionList {
    collections(first: 50, query: "collection_type:smart") {
      nodes {
        id
        handle
        title
        updatedAt
        descriptionHtml
        publishedOnCurrentPublication
        sortOrder
        templateSuffix
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
                }
              }
              ... on CollectionRuleProductCategoryCondition {
                __typename
              }
              ... on CollectionRuleTextCondition {
                value
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
  data: `query SmartCollectionList {
    collections(first: 50, query: "collection_type:smart") {
      nodes {
        id
        handle
        title
        updatedAt
        descriptionHtml
        publishedOnCurrentPublication
        sortOrder
        templateSuffix
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
                }
              }
              ... on CollectionRuleProductCategoryCondition {
                __typename
              }
              ... on CollectionRuleTextCondition {
                value
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
  "collections": {
    "nodes": [
      {
        "id": "gid://shopify/Collection/482865238",
        "handle": "smart-ipods",
        "title": "Smart iPods",
        "updatedAt": "2008-02-02T00:00:00Z",
        "descriptionHtml": "<p>The best selling ipod ever</p>",
        "publishedOnCurrentPublication": true,
        "sortOrder": "MANUAL",
        "templateSuffix": null,
        "ruleSet": {
          "appliedDisjunctively": false,
          "rules": [
            {
              "column": "TYPE",
              "relation": "EQUALS",
              "condition": "Cult Products",
              "conditionObject": {
                "value": "Cult Products"
              }
            }
          ]
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first five collections

#### Description

Retrieve the first five collections in a store. The response returns a list of the collections, including the collection ID, title, handle, last updated timestamp, and sort order.

#### Query

```graphql
query {
  collections(first: 5) {
    edges {
      node {
        id
        title
        handle
        updatedAt
        sortOrder
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
"query": "query { collections(first: 5) { edges { node { id title handle updatedAt sortOrder } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collections(first: 5) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          sortOrder
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
    collections(first: 5) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          sortOrder
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
    collections(first: 5) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          sortOrder
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "collections": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Collection/79210309",
          "title": "Custom Other Items",
          "handle": "reorder_custom",
          "updatedAt": "2008-10-10T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/94229130",
          "title": "All products more expensive than free",
          "handle": "everything",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/142458073",
          "title": "All snowboards",
          "handle": "snowboards",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/411960790",
          "title": "Bold snowboards",
          "handle": "bold",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/431528632",
          "title": "All arbor products tagged deepsnow",
          "handle": "all-arbor-products-tagged-deepsnow",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the five most recently updated smart collections

#### Description

Retrieve the five most recently updated [smart collections](https://help.shopify.com/manual/products/collections/smart-collections), using the `collection_type` query filter and sorting by when they were last modified (`UPDATED_AT` in reverse order). This query is useful for finding collections that have been recently changed. The response returns a list of collections, including their ID, title, handle, update timestamp, and sort order.

#### Query

```graphql
query {
  collections(first: 5, query: "collection_type:smart", sortKey: UPDATED_AT, reverse: true) {
    edges {
      node {
        id
        title
        handle
        updatedAt
        sortOrder
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
"query": "query { collections(first: 5, query: \"collection_type:smart\", sortKey: UPDATED_AT, reverse: true) { edges { node { id title handle updatedAt sortOrder } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collections(first: 5, query: "collection_type:smart", sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          sortOrder
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
    collections(first: 5, query: "collection_type:smart", sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          sortOrder
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
    collections(first: 5, query: "collection_type:smart", sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          sortOrder
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "collections": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Collection/522532842",
          "title": "Frisbees",
          "handle": "reorder_smart_frisbees",
          "updatedAt": "2008-10-12T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/1063001310",
          "title": "Smart Other items",
          "handle": "reorder_smart",
          "updatedAt": "2008-10-11T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/1009501285",
          "title": "Dummy",
          "handle": "blank",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/925420914",
          "title": "All snowboards called Draft",
          "handle": "drafts",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Collection/619119800",
          "title": "Cheap Stuff",
          "handle": "cheap",
          "updatedAt": "2006-02-02T00:00:00Z",
          "sortOrder": "MANUAL"
        }
      }
    ]
  }
}
``` 

Examples
--------

Filter collections by title using a wildcard

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20collections(first%3A%2010%2C%20query%3A%20%22title%3AAll*%22)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 collections(first: 10, query: "title:All*") {

 edges {

 node {

 id

 title

 handle

 updatedAt

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  collections(first: 10, query: "title:All*") {
    edges {
      node {
        id
        title
        handle
        updatedAt
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
"query": "query { collections(first: 10, query: \"title:All*\") { edges { node { id title handle updatedAt } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collections(first: 10, query: "title:All*") {
      edges {
        node {
          id
          title
          handle
          updatedAt
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
    collections(first: 10, query: "title:All*") {
      edges {
        node {
          id
          title
          handle
          updatedAt
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
    collections(first: 10, query: "title:All*") {
      edges {
        node {
          id
          title
          handle
          updatedAt
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

{

"collections": {

"edges": [

{

"node": {

"id": "gid://shopify/Collection/94229130",

"title": "All products more expensive than free",

"handle": "everything",

"updatedAt": "2006-02-02T00:00:00Z"

}

},

{

"node": {

"id": "gid://shopify/Collection/142458073",

"title": "All snowboards",

"handle": "snowboards",

"updatedAt": "2006-02-02T00:00:00Z"

}

},

{

"node": {

"id": "gid://shopify/Collection/431528632",

"title": "All arbor products tagged deepsnow",

"handle": "all-arbor-products-tagged-deepsnow",

"updatedAt": "2006-02-02T00:00:00Z"

}

},

{

"node": {

"id": "gid://shopify/Collection/442946009",

"title": "All products - handpicked!",

"handle": "everything-custom",

"updatedAt": "2006-02-02T00:00:00Z"

}

},

{


---
*Content truncated at "Updates" section*