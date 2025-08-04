---
title: "collectionsCount"
description: "Shopify GraphQL Admin API documentation for collectionscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount

Markdown Content:
collectionsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#main-content)

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

[Anchor to collectionsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#top)
collections Count
=================

query

Requires `read_products` access scope.

Count of collections. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-collection_type)collection_type

•string

Valid values:

*   `custom`
*   `smart`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-handle)handle

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-product_id)product_id

•id

Filter by collections containing a product by its ID.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-product_publication_status)product_publication_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-publishable_status)publishable_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-published_at)published_at

•time

Filter by the date and time when the collection was published to the Online Store.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-published_status)published_status

•string

Filter by the published status of the resource on a channel, such as the online store.

Valid values:

*   `unset`
*   `pending`
*   `approved`
*   `not approved`

Example:

*   `published_status:approved`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-title)title

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#argument-query-filter-updated_at)updated_at

•time

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a count of custom collections

#### Query

```graphql
query CollectionsCount {
  collectionsCount(query: "collection_type:custom") {
    count
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CollectionsCount { collectionsCount(query: \"collection_type:custom\") { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
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
  query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
    }
  }`,
});
``` #### Response

```json
{
  "collectionsCount": {
    "count": 8
  }
}
``` 
*   ### Retrieves a count of smart collections

#### Query

```graphql
query CollectionsCount {
  collectionsCount(query: "collection_type:smart") {
    count
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CollectionsCount { collectionsCount(query: \"collection_type:smart\") { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CollectionsCount {
    collectionsCount(query: "collection_type:smart") {
      count
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
  query CollectionsCount {
    collectionsCount(query: "collection_type:smart") {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CollectionsCount {
    collectionsCount(query: "collection_type:smart") {
      count
    }
  }`,
});
``` #### Response

```json
{
  "collectionsCount": {
    "count": 10
  }
}
``` 

Examples
--------

Retrieves a count of custom collections

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CollectionsCount%20%7B%0A%20%20collectionsCount(query%3A%20%22collection_type%3Acustom%22)%20%7B%0A%20%20%20%20count%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query CollectionsCount {

 collectionsCount(query: "collection_type:custom") {

 count

 }

 }`,

);

const data=await response.json();

```
query CollectionsCount {
  collectionsCount(query: "collection_type:custom") {
    count
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CollectionsCount { collectionsCount(query: \"collection_type:custom\") { count } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
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
  query CollectionsCount {
    collectionsCount(query: "collection_type:custom") {
      count
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

4

5

›

⌄

⌄

{

"collectionsCount": {

"count": 8

}

}


---
*Content truncated at "Updates" section*