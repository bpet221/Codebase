---
title: "productVariants"
description: "Shopify GraphQL Admin API documentation for productvariants"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productVariants - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants

Markdown Content:
productVariants - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#main-content)

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

[Anchor to productVariants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#top)
product Variants
================

query

Retrieves a list of [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

A product variant is a specific version of a product that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

Use the `productVariants` query when you need to:

*   Search for product variants by attributes such as SKU, barcode, or inventory quantity.
*   Filter product variants by attributes, such as whether they're gift cards or have custom metafields.
*   Fetch product variants for bulk operations, such as updating prices or inventory.
*   Preload data for product variants, such as inventory items, selected options, or associated products.

The `productVariants` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants#arguments-savedSearchId) for frequently used product variant queries.

The `productVariants` query returns product variants with their associated metadata, including:

*   Basic product variant information (for example, title, SKU, barcode, price, and inventory)
*   Media attachments (for example, images and videos)
*   Associated products, selling plans, bundles, and metafields

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments)
ProductVariantConnection arguments
----------------------------------

•[ProductVariantConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-barcode)barcode

•string

Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

Example:

*   `barcode:ABC-abc-123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-collection)collection

•string

Filter by the [ID of the collection](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) that the product variant belongs to.

Example:

*   `collection:465903092033`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-delivery_profile_id)delivery_profile_id

•id

Filter by the product variant [delivery profile ID](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-deliveryprofile) (`ProductVariant.deliveryProfile.id`).

Example:

*   `delivery_profile_id:108179161409`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-exclude_composite)exclude_composite

•boolean

Filter by product variants that aren't composites.

Example:

*   `exclude_composite:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-exclude_variants_with_components)exclude_variants_with_components

•boolean

Filter by whether there are [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle) that are associated with the product variants in a bundle.

Example:

*   `exclude_variants_with_components:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-gift_card)gift_card

•boolean

Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

Example:

*   `gift_card:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-inventory_quantity)inventory_quantity

•integer

Filter by an aggregate of inventory across all locations where the product variant is stocked.

Example:

*   `inventory_quantity:10`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-location_id)location_id

•id

Filter by the [location ID](https://shopify.dev/api/admin-graphql/latest/objects/Location#field-id) for the product variant.

Example:

*   `location_id:88511152449`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-managed)managed

•boolean

Filter by whether there is fulfillment service tracking associated with the product variants.

Example:

*   `managed:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-managed_by)managed_by

•string

Filter by the fulfillment service that tracks the number of items in stock for the product variant.

Example:

*   `managed_by:shopify`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-option1)option1

•string

Filter by a custom property that a shop owner uses to define product variants.

Example:

*   `option1:small`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-option2)option2

•string

Filter by a custom property that a shop owner uses to define product variants.

Example:

*   `option2:medium`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-option3)option3

•string

Filter by a custom property that a shop owner uses to define product variants.

Example:

*   `option3:large`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-product_id)product_id

•id

Filter by the product [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id) field.

Example:

*   `product_id:8474977763649`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-product_ids)product_ids

•string

Filter by a comma-separated list of product [IDs](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id).

Example:

*   `product_ids:8474977763649,8474977796417`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-product_publication_status)product_publication_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-product_status)product_status

•string

Filter by a comma-separated list of product [statuses](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-status).

Example:

*   `product_status:ACTIVE,DRAFT`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-product_type)product_type

•string

Filter by the product type that's associated with the product variants.

Example:

*   `product_type:snowboard`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-publishable_status)publishable_status

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

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-published_status)published_status

•string

Filter by the published status of the resource on a channel, such as the online store.

Valid values:

*   `unset`
*   `pending`
*   `approved`
*   `not approved`

Example:

*   `published_status:approved`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-requires_components)requires_components

•boolean

Filter by whether the product variant can only be purchased with components. [Learn more](https://shopify.dev/apps/build/product-merchandising/bundles#store-eligibility).

Example:

*   `requires_components:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-sku)sku

•string

Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

Example:

*   `sku:XYZ-12345`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-tag)tag

•string

Filter objects by the `tag` field.

Example:

*   `tag:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-tag_not)tag_not

•string

Filter by objects that don’t have the specified tag.

Example:

*   `tag_not:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-taxable)taxable

•boolean

Filter by the product variant [`taxable`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-taxable) field.

Example:

*   `taxable:false`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-title)title

•string

Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

Example:

*   `title:ice`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-updated_at)updated_at

•time

Filter by date and time when the product variant was updated.

Example:

*   `updated_at:>2020-10-21T23:39:20Z`
*   `updated_at:<now`
*   `updated_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#argument-query-filter-vendor)vendor

•string

Filter by the origin or source of the product variant. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

Example:

*   `vendor:Snowdevil`
*   `vendor:Snowdevil OR vendor:Icedevil`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#arguments-sortKey)sort Key

•[Product Variant Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#returns-edges)edges

•[[Product Variant Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#returns-nodes)nodes

•[[Product Variant!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

non-null

A list of nodes that are contained in ProductVariantEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of product variants for a product

#### Description

Retrieve the first ten product variants for a product. The example returns the IDs and titles of the product variants. The `pageInfo` field is also included, which contains [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) information. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query ProductVariantsList {
  productVariants(first: 10, query: "product_id:20995642") {
    nodes {
      id
      title
    }
    pageInfo {
      startCursor
      endCursor
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
"query": "query ProductVariantsList { productVariants(first: 10, query: \"product_id:20995642\") { nodes { id title } pageInfo { startCursor endCursor } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductVariantsList {
    productVariants(first: 10, query: "product_id:20995642") {
      nodes {
        id
        title
      }
      pageInfo {
        startCursor
        endCursor
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
  query ProductVariantsList {
    productVariants(first: 10, query: "product_id:20995642") {
      nodes {
        id
        title
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ProductVariantsList {
    productVariants(first: 10, query: "product_id:20995642") {
      nodes {
        id
        title
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }`,
});
``` #### Response

```json
{
  "productVariants": {
    "nodes": [
      {
        "id": "gid://shopify/ProductVariant/30322695",
        "title": "151cm"
      },
      {
        "id": "gid://shopify/ProductVariant/113711323",
        "title": "155cm"
      },
      {
        "id": "gid://shopify/ProductVariant/236948360",
        "title": "158cm"
      }
    ],
    "pageInfo": {
      "startCursor": "eyJsYXN0X2lkIjozMDMyMjY5NSwibGFzdF92YWx1ZSI6IjMwMzIyNjk1In0=",
      "endCursor": "eyJsYXN0X2lkIjoyMzY5NDgzNjAsImxhc3RfdmFsdWUiOiIyMzY5NDgzNjAifQ=="
    }
  }
}
``` 
*   ### Retrieve product variants by SKU pattern

#### Description

Retrieve product variants using a [SKU](https://help.shopify.com/manual/products/details/sku) pattern. This example uses a wildcard search to find all product variants with SKUs that start with "element". The `*` wildcard allows you to find multiple variants that share a common SKU prefix, which is useful for finding related products or product lines. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  productVariants(first: 10, query: "sku:element*") {
    edges {
      node {
        id
        title
        sku
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
"query": "query { productVariants(first: 10, query: \"sku:element*\") { edges { node { id title sku } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariants(first: 10, query: "sku:element*") {
      edges {
        node {
          id
          title
          sku
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
    productVariants(first: 10, query: "sku:element*") {
      edges {
        node {
          id
          title
          sku
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
    productVariants(first: 10, query: "sku:element*") {
      edges {
        node {
          id
          title
          sku
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "productVariants": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ProductVariant/30322695",
          "title": "151cm",
          "sku": "element-151"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/113711323",
          "title": "155cm",
          "sku": "element-155"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/236948360",
          "title": "158cm",
          "sku": "element-158"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve product variants by available quantity at a location

#### Description

Retrieve the first three product variants stocked at a location, sorted by lowest available quantity. This example returns the IDs and inventory quantities of the product variants. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  productVariants(first: 3, query: "location_id:124656943", sortKey: INVENTORY_LEVELS_AVAILABLE) {
    edges {
      node {
        id
        inventoryItem {
          inventoryLevel(locationId: "gid://shopify/Location/124656943") {
            quantities(names: "available") {
              quantity
              name
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
"query": "query { productVariants(first: 3, query: \"location_id:124656943\", sortKey: INVENTORY_LEVELS_AVAILABLE) { edges { node { id inventoryItem { inventoryLevel(locationId: \"gid://shopify/Location/124656943\") { quantities(names: \"available\") { quantity name } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariants(first: 3, query: "location_id:124656943", sortKey: INVENTORY_LEVELS_AVAILABLE) {
      edges {
        node {
          id
          inventoryItem {
            inventoryLevel(locationId: "gid://shopify/Location/124656943") {
              quantities(names: "available") {
                quantity
                name
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
    productVariants(first: 3, query: "location_id:124656943", sortKey: INVENTORY_LEVELS_AVAILABLE) {
      edges {
        node {
          id
          inventoryItem {
            inventoryLevel(locationId: "gid://shopify/Location/124656943") {
              quantities(names: "available") {
                quantity
                name
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
    productVariants(first: 3, query: "location_id:124656943", sortKey: INVENTORY_LEVELS_AVAILABLE) {
      edges {
        node {
          id
          inventoryItem {
            inventoryLevel(locationId: "gid://shopify/Location/124656943") {
              quantities(names: "available") {
                quantity
                name
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
  "productVariants": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ProductVariant/419425742",
          "inventoryItem": {
            "inventoryLevel": {
              "quantities": [
                {
                  "quantity": 0,
                  "name": "available"
                }
              ]
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/30322695",
          "inventoryItem": {
            "inventoryLevel": {
              "quantities": [
                {
                  "quantity": 1,
                  "name": "available"
                }
              ]
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/43729076",
          "inventoryItem": {
            "inventoryLevel": {
              "quantities": [
                {
                  "quantity": 1,
                  "name": "available"
                }
              ]
            }
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve product variants by product IDs

#### Description

Retrieve product variants for a specific set of product IDs using the `product_ids` query parameter. This example returns the IDs and titles of the product variants for the specified products. The `product` field is also included, which contains the ID of the product that's associated with the product variant. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  productVariants(first: 100, query: "product_ids:20995642,108828309") {
    edges {
      node {
        id
        title
        product {
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
"query": "query { productVariants(first: 100, query: \"product_ids:20995642,108828309\") { edges { node { id title product { id } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariants(first: 100, query: "product_ids:20995642,108828309") {
      edges {
        node {
          id
          title
          product {
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
    productVariants(first: 100, query: "product_ids:20995642,108828309") {
      edges {
        node {
          id
          title
          product {
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
    productVariants(first: 100, query: "product_ids:20995642,108828309") {
      edges {
        node {
          id
          title
          product {
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
  "productVariants": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ProductVariant/30322695",
          "title": "151cm",
          "product": {
            "id": "gid://shopify/Product/20995642"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/43729076",
          "title": "151cm",
          "product": {
            "id": "gid://shopify/Product/108828309"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/113711323",
          "title": "155cm",
          "product": {
            "id": "gid://shopify/Product/20995642"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/236948360",
          "title": "158cm",
          "product": {
            "id": "gid://shopify/Product/20995642"
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve product variants by publication statuses

#### Description

Retrieve product variants by `published_status` and `product_publication_status`. This example returns the title and [SKU](https://help.shopify.com/manual/products/details/sku) of product variants that are both published and approved. A product variant is `published` when it's visible and available for purchase on a sales channel, such as the Online Store. A product variant is `approved` when it has passed any content review or approval workflows configured for the store. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  productVariants(first: 1, query: "published_status:published AND product_publication_status:approved") {
    edges {
      node {
        title
        sku
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
"query": "query { productVariants(first: 1, query: \"published_status:published AND product_publication_status:approved\") { edges { node { title sku } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariants(first: 1, query: "published_status:published AND product_publication_status:approved") {
      edges {
        node {
          title
          sku
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
    productVariants(first: 1, query: "published_status:published AND product_publication_status:approved") {
      edges {
        node {
          title
          sku
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
    productVariants(first: 1, query: "published_status:published AND product_publication_status:approved") {
      edges {
        node {
          title
          sku
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "productVariants": {
    "edges": [
      {
        "node": {
          "title": "151cm",
          "sku": "element-151"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the IDs of the first 10 product variants

#### Description

Retrieve the first 10 product variants in a store. The example returns the IDs of the product variants.

#### Query

```graphql
query {
  productVariants(first: 10) {
    edges {
      node {
        id
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
"query": "query { productVariants(first: 10) { edges { node { id } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariants(first: 10) {
      edges {
        node {
          id
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
    productVariants(first: 10) {
      edges {
        node {
          id
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
    productVariants(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "productVariants": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ProductVariant/30322695"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/43729076"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/113711323"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/138327650"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/236948360"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/330284860"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/389013007"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/419425742"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/438458761"
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/445365074"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first three product variants updated after a specified date

#### Description

Retrieve the first three products updated after 2021-01-01. This example returns the IDs, titles, prices, inventory quantities, and the date and time the product variant was last updated. The `product` field is also included, which contains the ID and title of the product that's associated with the product variant. Learn more about using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to filter products.

#### Query

```graphql
query {
  productVariants(first: 3, query: "updated_at:>2021-01-01") {
    edges {
      node {
        id
        title
        price
        updatedAt
        inventoryQuantity
        product {
          id
          title
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
"query": "query { productVariants(first: 3, query: \"updated_at:>2021-01-01\") { edges { node { id title price updatedAt inventoryQuantity product { id title } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productVariants(first: 3, query: "updated_at:>2021-01-01") {
      edges {
        node {
          id
          title
          price
          updatedAt
          inventoryQuantity
          product {
            id
            title
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
    productVariants(first: 3, query: "updated_at:>2021-01-01") {
      edges {
        node {
          id
          title
          price
          updatedAt
          inventoryQuantity
          product {
            id
            title
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
    productVariants(first: 3, query: "updated_at:>2021-01-01") {
      edges {
        node {
          id
          title
          price
          updatedAt
          inventoryQuantity
          product {
            id
            title
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "productVariants": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/ProductVariant/30322695",
          "title": "151cm",
          "price": "10.00",
          "updatedAt": "2021-11-11T11:11:11Z",
          "inventoryQuantity": 3,
          "product": {
            "id": "gid://shopify/Product/20995642",
            "title": "Element"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/43729076",
          "title": "151cm",
          "price": "10.00",
          "updatedAt": "2021-11-11T11:11:11Z",
          "inventoryQuantity": 1,
          "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Draft"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/ProductVariant/113711323",
          "title": "155cm",
          "price": "15.00",
          "updatedAt": "2021-11-11T11:11:11Z",
          "inventoryQuantity": 15,
          "product": {
            "id": "gid://shopify/Product/20995642",
            "title": "Element"
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Retrieve a list of product variants for a product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ProductVariantsList%20%7B%0A%20%20productVariants(first%3A%2010%2C%20query%3A%20%22product_id%3A20995642%22)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20startCursor%0A%20%20%20%20%20%20endCursor%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query ProductVariantsList {

 productVariants(first: 10, query: "product_id:20995642") {

 nodes {

 id

 title

 }

 pageInfo {

 startCursor

 endCursor

 }

 }

 }`,

);

const data=await response.json();

```
query ProductVariantsList {
  productVariants(first: 10, query: "product_id:20995642") {
    nodes {
      id
      title
    }
    pageInfo {
      startCursor
      endCursor
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
"query": "query ProductVariantsList { productVariants(first: 10, query: \"product_id:20995642\") { nodes { id title } pageInfo { startCursor endCursor } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ProductVariantsList {
    productVariants(first: 10, query: "product_id:20995642") {
      nodes {
        id
        title
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ProductVariantsList {
    productVariants(first: 10, query: "product_id:20995642") {
      nodes {
        id
        title
      }
      pageInfo {
        startCursor
        endCursor
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
  query ProductVariantsList {
    productVariants(first: 10, query: "product_id:20995642") {
      nodes {
        id
        title
      }
      pageInfo {
        startCursor
        endCursor
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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"productVariants": {

"nodes": [

{

"id": "gid://shopify/ProductVariant/30322695",

"title": "151cm"

},

{

"id": "gid://shopify/ProductVariant/113711323",

"title": "155cm"

},

{

"id": "gid://shopify/ProductVariant/236948360",

"title": "158cm"

}

],

"pageInfo": {

"startCursor": "eyJsYXN0X2lkIjozMDMyMjY5NSwibGFzdF92YWx1ZSI6IjMwMzIyNjk1In0=",

"endCursor": "eyJsYXN0X2lkIjoyMzY5NDgzNjAsImxhc3RfdmFsdWUiOiIyMzY5NDgzNjAifQ=="

}

}

}


---
*Content truncated at "Updates" section*