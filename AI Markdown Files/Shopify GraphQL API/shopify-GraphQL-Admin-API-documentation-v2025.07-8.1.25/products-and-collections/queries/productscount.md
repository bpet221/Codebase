---
title: "productsCount"
description: "Shopify GraphQL Admin API documentation for productscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount

Markdown Content:
productsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#main-content)

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

[Anchor to productsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#top)
products Count
==============

query

Requires `read_products` access scope.

Count of products. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-barcode)barcode

•string

Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

Example:

*   `barcode:ABC-abc-1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-bundles)bundles

•boolean

Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

Example:

*   `bundles:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-category_id)category_id

•string

Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

Example:

*   `category_id:sg-4-17-2-17`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-collection_id)collection_id

•id

Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

Example:

*   `collection_id:108179161409`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-combined_listing_role)combined_listing_role

•string

Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

Valid values:

*   `parent`
*   `child`
*   `no_role`

Example:

*   `combined_listing_role:parent`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the product was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-delivery_profile_id)delivery_profile_id

•id

Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

Example:

*   `delivery_profile_id:108179161409`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-error_feedback)error_feedback

•string

Filter by products with publishing errors.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-gift_card)gift_card

•boolean

Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

Example:

*   `gift_card:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-handle)handle

•string

Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

Example:

*   `handle:the-minimal-snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-has_only_composites)has_only_composites

•boolean

Filter by products that have only composite variants.

Example:

*   `has_only_composites:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-has_only_default_variant)has_only_default_variant

•boolean

Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

Example:

*   `has_only_default_variant:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-has_variant_with_components)has_variant_with_components

•boolean

Filter by products that have variants with associated components.

Example:

*   `has_variant_with_components:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-inventory_total)inventory_total

•integer

Filter by inventory count.

Example:

*   `inventory_total:0`
*   `inventory_total:>150`
*   `inventory_total:>=200`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-is_price_reduced)is_price_reduced

•boolean

Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

Example:

*   `is_price_reduced:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-metafields.{namespace}.{key})metafields.{namespace}.{key}

•mixed

Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

Example:

*   `metafields.custom.on_sale:true`
*   `metafields.product.material:"gid://shopify/Metaobject/43458085"`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-out_of_stock_somewhere)out_of_stock_somewhere

•boolean

Filter by products that are out of stock in at least one location.

Example:

*   `out_of_stock_somewhere:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-price)price

•bigdecimal

Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

Example:

*   `price:100.57`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-product_configuration_owner)product_configuration_owner

•string

Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

Example:

*   `product_configuration_owner:10001`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-product_publication_status)product_publication_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-product_type)product_type

•string

Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

Example:

*   `product_type:snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-publication_ids)publication_ids

•string

Filter by a comma-separated list of publication IDs that are associated with the product.

Example:

*   `publication_ids:184111530305,184111694145`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-publishable_status)publishable_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-published_at)published_at

•time

Filter by the date and time when the product was published to the online store and other sales channels.

Example:

*   `published_at:>2020-10-21T23:39:20Z`
*   `published_at:<now`
*   `published_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-published_status)published_status

•string

Filter by the published status of the resource on a channel, such as the online store.

Valid values:

*   `unset`
*   `pending`
*   `approved`
*   `not approved`

Example:

*   `published_status:approved`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-sku)sku

•string

Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

Example:

*   `sku:XYZ-12345`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-status)status

•string

Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

Valid values:

*   `ACTIVE`Default
*   `ARCHIVED`
*   `DRAFT`

Example:

*   `status:ACTIVE,DRAFT`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-tag)tag

•string

Filter objects by the `tag` field.

Example:

*   `tag:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-tag_not)tag_not

•string

Filter by objects that don’t have the specified tag.

Example:

*   `tag_not:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-title)title

•string

Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

Example:

*   `title:The Minimal Snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the product was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-variant_id)variant_id

•id

Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

Example:

*   `variant_id:45779434701121`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-variant_title)variant_title

•string

Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

Example:

*   `variant_title:'Special ski wax'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#argument-query-filter-vendor)vendor

•string

Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

Example:

*   `vendor:Snowdevil`
*   `vendor:Snowdevil OR vendor:Icedevil`

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a count of products

#### Query

```graphql
query {
  productsCount(query: "id:>=1000") {
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
"query": "query { productsCount(query: \"id:>=1000\") { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productsCount(query: "id:>=1000") {
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
  query {
    productsCount(query: "id:>=1000") {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    productsCount(query: "id:>=1000") {
      count
    }
  }`,
});
``` #### Response

```json
{
  "productsCount": {
    "count": 7
  }
}
``` 

Retrieve a count of products
----------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20productsCount(query%3A%20%22id%3A%3E%3D1000%22)%20%7B%0A%20%20%20%20count%0A%20%20%7D%0A%7D)Copy

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

 query {

 productsCount(query: "id:>=1000") {

 count

 }

 }`,

);

const data=await response.json();

```
query {
  productsCount(query: "id:>=1000") {
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
"query": "query { productsCount(query: \"id:>=1000\") { count } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productsCount(query: "id:>=1000") {
      count
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    productsCount(query: "id:>=1000") {
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
  query {
    productsCount(query: "id:>=1000") {
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

"productsCount": {

"count": 7

}

}


---
*Content truncated at "Updates" section*