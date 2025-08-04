---
title: "products"
description: "Shopify GraphQL Admin API documentation for products"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/products"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: products - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/products

Markdown Content:
products - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

Collapse sidebar

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
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   
Products And Collections

    *   
Queries

        *   [blogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogscount)
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
        *   [product Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttags)
        *   [product Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttypes)
        *   [product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant)
        *   [product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantbyidentifier)
        *   [product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants)
        *   [product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantscount)
        *   [product Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvendors)
        *   [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)
        *   [publications Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationscount)
        *   [published Products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount)
        *   [selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroup)
        *   [selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroups)
        *   [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)
        *   [translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource)
        *   [translatable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresourcesbyids)

    *   Mutations   
    *   Objects   

*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#top)
products
========

query

Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a store. Products are the items that merchants can sell in their store.

Use the `products` query when you need to:

*   Build a browsing interface for a product catalog.
*   Create product [searching](https://shopify.dev/docs/api/usage/search-syntax), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query) experiences.
*   Implement product recommendations.
*   Sync product data with external systems.

The `products` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId) for frequently used product queries.

The `products` query returns products with their associated metadata, including:

*   Basic product information (for example, title, description, vendor, and type)
*   Product options and product variants, with their prices and inventory
*   Media attachments (for example, images and videos)
*   SEO metadata
*   Product categories and tags
*   Product availability and publishing statuses

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments)
ProductConnection arguments
---------------------------

•[ProductConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-barcode)barcode

•string

Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

Example:

*   `barcode:ABC-abc-1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-bundles)bundles

•boolean

Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

Example:

*   `bundles:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-category_id)category_id

•string

Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

Example:

*   `category_id:sg-4-17-2-17`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-collection_id)collection_id

•id

Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

Example:

*   `collection_id:108179161409`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-combined_listing_role)combined_listing_role

•string

Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

Valid values:

*   `parent`
*   `child`
*   `no_role`

Example:

*   `combined_listing_role:parent`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the product was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-delivery_profile_id)delivery_profile_id

•id

Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

Example:

*   `delivery_profile_id:108179161409`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-error_feedback)error_feedback

•string

Filter by products with publishing errors.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-gift_card)gift_card

•boolean

Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

Example:

*   `gift_card:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-handle)handle

•string

Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

Example:

*   `handle:the-minimal-snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-has_only_composites)has_only_composites

•boolean

Filter by products that have only composite variants.

Example:

*   `has_only_composites:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-has_only_default_variant)has_only_default_variant

•boolean

Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

Example:

*   `has_only_default_variant:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-has_variant_with_components)has_variant_with_components

•boolean

Filter by products that have variants with associated components.

Example:

*   `has_variant_with_components:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-inventory_total)inventory_total

•integer

Filter by inventory count.

Example:

*   `inventory_total:0`
*   `inventory_total:>150`
*   `inventory_total:>=200`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-is_price_reduced)is_price_reduced

•boolean

Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

Example:

*   `is_price_reduced:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-metafields.{namespace}.{key})metafields.{namespace}.{key}

•mixed

Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

Example:

*   `metafields.custom.on_sale:true`
*   `metafields.product.material:"gid://shopify/Metaobject/43458085"`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-out_of_stock_somewhere)out_of_stock_somewhere

•boolean

Filter by products that are out of stock in at least one location.

Example:

*   `out_of_stock_somewhere:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-price)price

•bigdecimal

Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

Example:

*   `price:100.57`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-product_configuration_owner)product_configuration_owner

•string

Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

Example:

*   `product_configuration_owner:10001`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-product_publication_status)product_publication_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-product_type)product_type

•string

Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

Example:

*   `product_type:snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-publication_ids)publication_ids

•string

Filter by a comma-separated list of publication IDs that are associated with the product.

Example:

*   `publication_ids:184111530305,184111694145`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status)publishable_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-published_at)published_at

•time

Filter by the date and time when the product was published to the online store and other sales channels.

Example:

*   `published_at:>2020-10-21T23:39:20Z`
*   `published_at:<now`
*   `published_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-published_status)published_status

•string

Filter by the published status of the resource on a channel, such as the online store.

Valid values:

*   `unset`
*   `pending`
*   `approved`
*   `not approved`

Example:

*   `published_status:approved`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-sku)sku

•string

Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

Example:

*   `sku:XYZ-12345`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-status)status

•string

Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

Valid values:

*   `ACTIVE`Default
*   `ARCHIVED`
*   `DRAFT`

Example:

*   `status:ACTIVE,DRAFT`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-tag)tag

•string

Filter objects by the `tag` field.

Example:

*   `tag:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-tag_not)tag_not

•string

Filter by objects that don’t have the specified tag.

Example:

*   `tag_not:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-title)title

•string

Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

Example:

*   `title:The Minimal Snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the product was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-variant_id)variant_id

•id

Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

Example:

*   `variant_id:45779434701121`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-variant_title)variant_title

•string

Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

Example:

*   `variant_title:'Special ski wax'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#argument-query-filter-vendor)vendor

•string

Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

Example:

*   `vendor:Snowdevil`
*   `vendor:Snowdevil OR vendor:Icedevil`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey)sort Key

•[Product Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#returns-edges)edges

•[[Product Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#returns-nodes)nodes

•[[Product!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

non-null

A list of nodes that are contained in ProductEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of products

#### Description

Retrieve a list of the first ten products. This example returns the ID and title for each product.

#### Query

```graphql
query GetProducts {
  products(first: 10) {
    nodes {
      id
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
"query": "query GetProducts { products(first: 10) { nodes { id title } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetProducts {
    products(first: 10) {
      nodes {
        id
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
  query GetProducts {
    products(first: 10) {
      nodes {
        id
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
  data: `query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
      }
    }
  }`,
});
``` #### Response

```json
{
  "products": {
    "nodes": [
      {
        "id": "gid://shopify/Product/20995642",
        "title": "Element"
      },
      {
        "id": "gid://shopify/Product/108828309",
        "title": "Draft"
      },
      {
        "id": "gid://shopify/Product/121709582",
        "title": "Boots"
      },
      {
        "id": "gid://shopify/Product/440089423",
        "title": "IPod Nano - 8GB"
      },
      {
        "id": "gid://shopify/Product/558169081",
        "title": "Unpublished Boots"
      },
      {
        "id": "gid://shopify/Product/910489600",
        "title": "Crafty Shoes"
      },
      {
        "id": "gid://shopify/Product/912855135",
        "title": "SEO Boots"
      }
    ]
  }
}
``` 
*   ### Retrieve multiple sets of products with a single query

#### Description

Retrieve the five oldest and newest products by using [aliases](https://shopify.dev/docs/apps/build/graphql/basics/advanced#make-multiple-queries-in-one-request) to name the results. This example returns the ID and title for each product.

#### Query

```graphql
query {
  newestProducts: products(first: 5, reverse: true) {
    edges {
      node {
        id
        title
      }
    }
  }
  oldestProducts: products(first: 5) {
    edges {
      node {
        id
        title
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
"query": "query { newestProducts: products(first: 5, reverse: true) { edges { node { id title } } } oldestProducts: products(first: 5) { edges { node { id title } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    newestProducts: products(first: 5, reverse: true) {
      edges {
        node {
          id
          title
        }
      }
    }
    oldestProducts: products(first: 5) {
      edges {
        node {
          id
          title
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
    newestProducts: products(first: 5, reverse: true) {
      edges {
        node {
          id
          title
        }
      }
    }
    oldestProducts: products(first: 5) {
      edges {
        node {
          id
          title
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
    newestProducts: products(first: 5, reverse: true) {
      edges {
        node {
          id
          title
        }
      }
    }
    oldestProducts: products(first: 5) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "newestProducts": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Product/912855135",
          "title": "SEO Boots"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/910489600",
          "title": "Crafty Shoes"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/558169081",
          "title": "Unpublished Boots"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/440089423",
          "title": "IPod Nano - 8GB"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/121709582",
          "title": "Boots"
        }
      }
    ]
  },
  "oldestProducts": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Product/20995642",
          "title": "Element"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/108828309",
          "title": "Draft"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/121709582",
          "title": "Boots"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/440089423",
          "title": "IPod Nano - 8GB"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/558169081",
          "title": "Unpublished Boots"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve product IDs from published products

#### Description

Retrieve the IDs of the first two products that are published to your app. This example returns the product ID and whether the product is published to your app. You must have the `read_product_listings` access scope to return publication information.

#### Query

```graphql
query ProductList {
  products(first: 2) {
    nodes {
      publishedOnCurrentPublication
      id
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
"query": "query ProductList { products(first: 2) { nodes { publishedOnCurrentPublication id } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductList {
    products(first: 2) {
      nodes {
        publishedOnCurrentPublication
        id
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
  query ProductList {
    products(first: 2) {
      nodes {
        publishedOnCurrentPublication
        id
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ProductList {
    products(first: 2) {
      nodes {
        publishedOnCurrentPublication
        id
      }
    }
  }`,
});
``` #### Response

```json
{
  "products": {
    "nodes": [
      {
        "publishedOnCurrentPublication": true,
        "id": "gid://shopify/Product/20995642"
      },
      {
        "publishedOnCurrentPublication": true,
        "id": "gid://shopify/Product/108828309"
      }
    ]
  }
}
``` 
*   ### Retrieve products by their ID using aliases

#### Description

This example demonstrates using [aliases](https://shopify.dev/docs/apps/build/graphql/basics/advanced#make-multiple-queries-in-one-request) to retrieve multiple products in a single query.

#### Query

```graphql
query {
  glasses: product(id: "gid://shopify/Product/108828309") {
    title
    description
  }
  shoes: product(id: "gid://shopify/Product/910489600") {
    title
    description
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { glasses: product(id: \"gid://shopify/Product/108828309\") { title description } shoes: product(id: \"gid://shopify/Product/910489600\") { title description } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    glasses: product(id: "gid://shopify/Product/108828309") {
      title
      description
    }
    shoes: product(id: "gid://shopify/Product/910489600") {
      title
      description
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
    glasses: product(id: "gid://shopify/Product/108828309") {
      title
      description
    }
    shoes: product(id: "gid://shopify/Product/910489600") {
      title
      description
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    glasses: product(id: "gid://shopify/Product/108828309") {
      title
      description
    }
    shoes: product(id: "gid://shopify/Product/910489600") {
      title
      description
    }
  }`,
});
``` #### Response

```json
{
  "glasses": {
    "title": "Cool Glasses",
    "description": "Cool Glasses"
  },
  "shoes": {
    "title": "Crafty Shoes",
    "description": "Crafty Shoes"
  }
}
``` 
*   ### Retrieve the first ten products after a given cursor

#### Description

Retrieve the first ten products after a given cursor and whether there's a subsequent page of results. This example returns the cursor for the next page of results. Learn more about [pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

#### Query

```graphql
query {
  products(first: 10, after: "eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=") {
    edges {
      node {
        id
        title
        handle
      }
      cursor
    }
    pageInfo {
      hasNextPage
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
"query": "query { products(first: 10, after: \"eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=\") { edges { node { id title handle } cursor } pageInfo { hasNextPage } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    products(first: 10, after: "eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=") {
      edges {
        node {
          id
          title
          handle
        }
        cursor
      }
      pageInfo {
        hasNextPage
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
    products(first: 10, after: "eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=") {
      edges {
        node {
          id
          title
          handle
        }
        cursor
      }
      pageInfo {
        hasNextPage
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
    products(first: 10, after: "eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=") {
      edges {
        node {
          id
          title
          handle
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }`,
});
``` #### Response

```json
{
  "products": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Product/108828309",
          "title": "Draft",
          "handle": "draft"
        },
        "cursor": "eyJsYXN0X2lkIjoxMDg4MjgzMDksImxhc3RfdmFsdWUiOiIxMDg4MjgzMDkifQ=="
      },
      {
        "node": {
          "id": "gid://shopify/Product/121709582",
          "title": "Boots",
          "handle": "boots"
        },
        "cursor": "eyJsYXN0X2lkIjoxMjE3MDk1ODIsImxhc3RfdmFsdWUiOiIxMjE3MDk1ODIifQ=="
      },
      {
        "node": {
          "id": "gid://shopify/Product/440089423",
          "title": "IPod Nano - 8GB",
          "handle": "ipod-nano"
        },
        "cursor": "eyJsYXN0X2lkIjo0NDAwODk0MjMsImxhc3RfdmFsdWUiOiI0NDAwODk0MjMifQ=="
      },
      {
        "node": {
          "id": "gid://shopify/Product/558169081",
          "title": "Unpublished Boots",
          "handle": "unpublished_boots"
        },
        "cursor": "eyJsYXN0X2lkIjo1NTgxNjkwODEsImxhc3RfdmFsdWUiOiI1NTgxNjkwODEifQ=="
      },
      {
        "node": {
          "id": "gid://shopify/Product/910489600",
          "title": "Crafty Shoes",
          "handle": "crappy-shoes"
        },
        "cursor": "eyJsYXN0X2lkIjo5MTA0ODk2MDAsImxhc3RfdmFsdWUiOiI5MTA0ODk2MDAifQ=="
      },
      {
        "node": {
          "id": "gid://shopify/Product/912855135",
          "title": "SEO Boots",
          "handle": "seo_boots"
        },
        "cursor": "eyJsYXN0X2lkIjo5MTI4NTUxMzUsImxhc3RfdmFsdWUiOiI5MTI4NTUxMzUifQ=="
      }
    ],
    "pageInfo": {
      "hasNextPage": false
    }
  }
}
``` 
*   ### Retrieve the first ten products associated with a product type

#### Description

Retrieve the first ten products associated with the snowboards product type. A [product type](https://help.shopify.com/manual/products/details/product-type) is a category that you can use to group products. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  products(first: 10, query: "product_type:snowboards") {
    edges {
      node {
        title
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
"query": "query { products(first: 10, query: \"product_type:snowboards\") { edges { node { title } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    products(first: 10, query: "product_type:snowboards") {
      edges {
        node {
          title
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
    products(first: 10, query: "product_type:snowboards") {
      edges {
        node {
          title
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
    products(first: 10, query: "product_type:snowboards") {
      edges {
        node {
          title
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "products": {
    "edges": [
      {
        "node": {
          "title": "Element"
        }
      },
      {
        "node": {
          "title": "Draft"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first ten products updated after a specified date

#### Description

Retrieve the first ten products updated after 2019-12-01. This example returns the ID and updated date for each product. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  products(first: 10, query: "updated_at:>2019-12-01") {
    edges {
      node {
        id
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
"query": "query { products(first: 10, query: \"updated_at:>2019-12-01\") { edges { node { id updatedAt } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    products(first: 10, query: "updated_at:>2019-12-01") {
      edges {
        node {
          id
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
    products(first: 10, query: "updated_at:>2019-12-01") {
      edges {
        node {
          id
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
    products(first: 10, query: "updated_at:>2019-12-01") {
      edges {
        node {
          id
          updatedAt
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "products": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Product/440089423",
          "updatedAt": "2021-12-01T12:14:52Z"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the ten most recently created products

#### Description

Retrieve the ten most recently created products and the [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) information for each product. You must have the `read_product_listings` access scope to return publication information.

#### Query

```graphql
query {
  products(first: 10, reverse: true) {
    edges {
      node {
        id
        title
        handle
        resourcePublicationOnCurrentPublication {
          publication {
            id
          }
          publishDate
          isPublished
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
"query": "query { products(first: 10, reverse: true) { edges { node { id title handle resourcePublicationOnCurrentPublication { publication { id } publishDate isPublished } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          title
          handle
          resourcePublicationOnCurrentPublication {
            publication {
              id
            }
            publishDate
            isPublished
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
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          title
          handle
          resourcePublicationOnCurrentPublication {
            publication {
              id
            }
            publishDate
            isPublished
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
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          title
          handle
          resourcePublicationOnCurrentPublication {
            publication {
              id
            }
            publishDate
            isPublished
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "products": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Product/912855135",
          "title": "SEO Boots",
          "handle": "seo_boots",
          "resourcePublicationOnCurrentPublication": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/910489600",
          "title": "Crafty Shoes",
          "handle": "crappy-shoes",
          "resourcePublicationOnCurrentPublication": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/558169081",
          "title": "Unpublished Boots",
          "handle": "unpublished_boots",
          "resourcePublicationOnCurrentPublication": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/440089423",
          "title": "IPod Nano - 8GB",
          "handle": "ipod-nano",
          "resourcePublicationOnCurrentPublication": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/121709582",
          "title": "Boots",
          "handle": "boots",
          "resourcePublicationOnCurrentPublication": null
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/108828309",
          "title": "Draft",
          "handle": "draft",
          "resourcePublicationOnCurrentPublication": {
            "publication": {
              "id": "gid://shopify/Publication/762454635"
            },
            "publishDate": "2005-01-02T00:00:00Z",
            "isPublished": true
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Product/20995642",
          "title": "Element",
          "handle": "element",
          "resourcePublicationOnCurrentPublication": null
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the total inventory and price range of products

#### Description

Retrieve the total inventory and price range of three products using a fragment. The example returns the minimum and maximum variant prices and total inventory count for each product. Learn more about [fragments](https://shopify.dev/docs/apps/build/graphql/basics/advanced#inline-fragments).

#### Query

```graphql
query {
  Glasses: product(id: "gid://shopify/Product/20995642") {
    ...productInformation
  }
  Shoes: product(id: "gid://shopify/Product/910489600") {
    ...productInformation
  }
  Bracelet: product(id: "gid://shopify/Product/108828309") {
    ...productInformation
  }
}

fragment productInformation on Product {
  totalInventory
  priceRangeV2 {
    minVariantPrice {
      amount
    }
    maxVariantPrice {
      amount
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
"query": "query { Glasses: product(id: \"gid://shopify/Product/20995642\") { ...productInformation } Shoes: product(id: \"gid://shopify/Product/910489600\") { ...productInformation } Bracelet: product(id: \"gid://shopify/Product/108828309\") { ...productInformation } } fragment productInformation on Product { totalInventory priceRangeV2 { minVariantPrice { amount } maxVariantPrice { amount } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    Glasses: product(id: "gid://shopify/Product/20995642") {
      ...productInformation
    }
    Shoes: product(id: "gid://shopify/Product/910489600") {
      ...productInformation
    }
    Bracelet: product(id: "gid://shopify/Product/108828309") {
      ...productInformation
    }
  }
  
  fragment productInformation on Product {
    totalInventory
    priceRangeV2 {
      minVariantPrice {
        amount
      }
      maxVariantPrice {
        amount
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
    Glasses: product(id: "gid://shopify/Product/20995642") {
      ...productInformation
    }
    Shoes: product(id: "gid://shopify/Product/910489600") {
      ...productInformation
    }
    Bracelet: product(id: "gid://shopify/Product/108828309") {
      ...productInformation
    }
  }
  
  fragment productInformation on Product {
    totalInventory
    priceRangeV2 {
      minVariantPrice {
        amount
      }
      maxVariantPrice {
        amount
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
    Glasses: product(id: "gid://shopify/Product/20995642") {
      ...productInformation
    }
    Shoes: product(id: "gid://shopify/Product/910489600") {
      ...productInformation
    }
    Bracelet: product(id: "gid://shopify/Product/108828309") {
      ...productInformation
    }
  }
  
  fragment productInformation on Product {
    totalInventory
    priceRangeV2 {
      minVariantPrice {
        amount
      }
      maxVariantPrice {
        amount
      }
    }
  }`,
});
``` #### Response

```json
{
  "Glasses": {
    "totalInventory": 19,
    "priceRangeV2": {
      "minVariantPrice": {
        "amount": "10.0"
      },
      "maxVariantPrice": {
        "amount": "15.0"
      }
    }
  },
  "Shoes": {
    "totalInventory": 4000,
    "priceRangeV2": {
      "minVariantPrice": {
        "amount": "100.0"
      },
      "maxVariantPrice": {
        "amount": "100.0"
      }
    }
  },
  "Bracelet": {
    "totalInventory": 1,
    "priceRangeV2": {
      "minVariantPrice": {
        "amount": "10.0"
      },
      "maxVariantPrice": {
        "amount": "10.0"
      }
    }
  }
}
``` 

Examples
--------

Retrieve a list of products

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20GetProducts%20%7B%0A%20%20products(first%3A%2010)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query GetProducts {

 products(first: 10) {

 nodes {

 id

 title

 }

 }

 }`,

);

const data=await response.json();

```
query GetProducts {
  products(first: 10) {
    nodes {
      id
      title
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
"query": "query GetProducts { products(first: 10) { nodes { id title } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
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
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
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

{

"products": {

"nodes": [

{

"id": "gid://shopify/Product/20995642",

"title": "Element"

},

{

"id": "gid://shopify/Product/108828309",

"title": "Draft"

},

{

"id": "gid://shopify/Product/121709582",

"title": "Boots"

},

{

"id": "gid://shopify/Product/440089423",

"title": "IPod Nano - 8GB"

},

{

"id": "gid://shopify/Product/558169081",

"title": "Unpublished Boots"

},

{

"id": "gid://shopify/Product/910489600",

"title": "Crafty Shoes"

},

{

"id": "gid://shopify/Product/912855135",

"title": "SEO Boots"

}

]

}

}


---
*Content truncated at "Updates" section*