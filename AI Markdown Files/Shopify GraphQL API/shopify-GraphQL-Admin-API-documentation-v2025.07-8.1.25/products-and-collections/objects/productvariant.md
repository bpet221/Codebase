---
title: "ProductVariant"
description: "Shopify GraphQL Admin API documentation for productvariant"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant"
extraction_method: "jina"
sections: ['Products and collections', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ProductVariant - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant

Markdown Content:
ProductVariant - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#main-content)

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

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Add All Products Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/addallproductsoperation)
        *   [App Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcatalog)
        *   [Bundles Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/bundlesfeature)
        *   [Catalog Csv Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/catalogcsvoperation)
        *   [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection)
        *   [Collection Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionpublication)
        *   [Collection Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionrule)
        *   [Collection Rule Category Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionrulecategorycondition)
        *   [Collection Rule Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruleconditions)
        *   [Collection Rule Metafield Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionrulemetafieldcondition)
        *   [Collection Rule Product Category Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruleproductcategorycondition)
        *   [Collection Rule Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruleset)
        *   [Collection Rule Text Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruletextcondition)
        *   [Combined Listing](https://shopify.dev/docs/api/admin-graphql/latest/objects/combinedlisting)
        *   [Combined Listing Child](https://shopify.dev/docs/api/admin-graphql/latest/objects/combinedlistingchild)
        *   [Company Location Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationcatalog)
        *   [External Video](https://shopify.dev/docs/api/admin-graphql/latest/objects/externalvideo)
        *   [File Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/fileerror)
        *   [Generic File](https://shopify.dev/docs/api/admin-graphql/latest/objects/genericfile)
        *   [Linked Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/linkedmetafield)
        *   [Market Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketcatalog)
        *   [Markets Catalogs Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketscatalogsentitlement)
        *   [Media Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaerror)
        *   [Media Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage)
        *   [Media Image Original Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimageoriginalsource)
        *   [Media Preview Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediapreviewimage)
        *   [Media Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediawarning)
        *   [Metafield Capability Smart Collection Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldcapabilitysmartcollectioncondition)
        *   [Model3d](https://shopify.dev/docs/api/admin-graphql/latest/objects/model3d)
        *   [Model3d Bounding Box](https://shopify.dev/docs/api/admin-graphql/latest/objects/model3dboundingbox)
        *   [Model3d Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/model3dsource)
        *   [Price List](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelist)
        *   [Price List Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistadjustment)
        *   [Price List Adjustment Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistadjustmentsettings)
        *   [Price List Parent](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistparent)
        *   [Price List Price](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistprice)
        *   [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/product)
        *   [Product Bundle Component](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponent)
        *   [Product Bundle Component Option Selection](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentoptionselection)
        *   [Product Bundle Component Option Selection Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentoptionselectionvalue)
        *   [Product Bundle Component Quantity Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentquantityoption)
        *   [Product Bundle Component Quantity Option Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentquantityoptionvalue)
        *   [Product Bundle Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundleoperation)
        *   [Product Category](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcategory)
        *   [Product Compare At Price Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcompareatpricerange)
        *   [Product Component Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcomponenttype)
        *   [Product Contextual Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcontextualpricing)
        *   [Product Delete Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation)
        *   [Product Duplicate Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/productduplicatejob)
        *   [Product Duplicate Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productduplicateoperation)
        *   [Product Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/productoption)
        *   [Product Option Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/productoptionvalue)
        *   [Product Option Value Swatch](https://shopify.dev/docs/api/admin-graphql/latest/objects/productoptionvalueswatch)
        *   [Product Price Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/productpricerange)
        *   [Product Price Range V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/productpricerangev2)
        *   [Product Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/productpublication)
        *   [Product Set Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productsetoperation)
        *   [Product Taxonomy Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/producttaxonomynode)
        *   [Product Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interfaces)
        *   [Product Variant Component](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariantcomponent)
        *   [Product Variant Contextual Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariantcontextualpricing)
        *   [Product Variant Price Pair](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariantpricepair)
        *   [Publication Resource Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/publicationresourceoperation)
        *   [Quantity Price Break](https://shopify.dev/docs/api/admin-graphql/latest/objects/quantitypricebreak)
        *   [Quantity Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/quantityrule)
        *   [Resource Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcepublication)
        *   [Resource Publication V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcepublicationv2)
        *   [Restricted For Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/restrictedforresource)
        *   [Row Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/rowcount)
        *   [Selected Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/selectedoption)
        *   [Selling Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan)
        *   [Selling Plan Anchor](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplananchor)
        *   [Selling Plan Checkout Charge](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplancheckoutcharge)
        *   [Selling Plan Checkout Charge Percentage Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplancheckoutchargepercentagevalue)
        *   [Selling Plan Fixed Billing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanfixedbillingpolicy)
        *   [Selling Plan Fixed Delivery Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanfixeddeliverypolicy)
        *   [Selling Plan Fixed Pricing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanfixedpricingpolicy)
        *   [Selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplangroup)
        *   [Selling Plan Inventory Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplaninventorypolicy)
        *   [Selling Plan Pricing Policy Percentage Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanpricingpolicypercentagevalue)
        *   [Selling Plan Recurring Billing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanrecurringbillingpolicy)
        *   [Selling Plan Recurring Delivery Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanrecurringdeliverypolicy)
        *   [Selling Plan Recurring Pricing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanrecurringpricingpolicy)
        *   [Staged Media Upload Target](https://shopify.dev/docs/api/admin-graphql/latest/objects/stagedmediauploadtarget)
        *   [Standardized Product Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardizedproducttype)
        *   [Taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomy)
        *   [Taxonomy Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomyattribute)
        *   [Taxonomy Category](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomycategory)
        *   [Taxonomy Choice List Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomychoicelistattribute)
        *   [Taxonomy Measurement Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomymeasurementattribute)
        *   [Taxonomy Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomyvalue)
        *   [Unit Price Measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/unitpricemeasurement)
        *   [Vector3](https://shopify.dev/docs/api/admin-graphql/latest/objects/vector3)
        *   [Video](https://shopify.dev/docs/api/admin-graphql/latest/objects/video)
        *   [Video Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/videosource)
        *   [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/weight)

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

[Anchor to ProductVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#top)
Product Variant
===============

object

Requires `read_products` access scope.

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

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to availableForSale](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.availableForSale)available For Sale

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the product variant is available for sale.

[Anchor to barcode](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.barcode)barcode

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The value of the barcode associated with the product.

[Anchor to compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.compareAtPrice)compare At Price

•[Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

The compare-at price of the variant in the default shop currency.

[Anchor to contextualPricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.contextualPricing)contextual Pricing

•[Product Variant Contextual Pricing!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing)

non-null

The pricing that applies for a customer in a given context. As of API version 2025-04, only active markets are considered in the price resolution.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the variant was created.

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to deliveryProfile](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.deliveryProfile)delivery Profile

•[Delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

The [delivery profile](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile) for the variant.

Show fields

[Anchor to displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.displayName)display Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Display name of the variant, based on product's title + variant's title.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The featured image for the variant.

Show fields

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.inventoryItem)inventory Item

•[Inventory Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

non-null

The inventory item, which is used to query for inventory information.

Show fields

[Anchor to inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.inventoryPolicy)inventory Policy

•[Product Variant Inventory Policy!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantInventoryPolicy)

non-null

Whether customers are allowed to place an order for the product variant when it's out of stock.

Show enum values

[Anchor to inventoryQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.inventoryQuantity)inventory Quantity

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total sellable quantity of the variant.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.media)media

•[Media Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection)

non-null

The media associated with the product variant.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to position](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.position)position

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The order of the product variant in the list of product variants. The first position in the list is 1.

[Anchor to price](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.price)price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null

The price of the product variant in the default shop currency.

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.product)product

•[Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

non-null

The product that this variant belongs to.

Show fields

[Anchor to productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.productParents)product Parents

•[Product Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

non-null

A list of products that have product variants that contain this variant as a product component.

Show fields

[Anchor to productVariantComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.productVariantComponents)product Variant Components

•[Product Variant Component Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantComponentConnection)

non-null

A list of the product variant components.

Show fields

[Anchor to requiresComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.requiresComponents)requires Components

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a product variant requires components. The default value is `false`. If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted from channels that don't support bundles.

[Anchor to selectedOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.selectedOptions)selected Options

•[[Selected Option!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SelectedOption)

non-null

List of product options applied to the variant.

Show fields

[Anchor to sellableOnlineQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.sellableOnlineQuantity)sellable Online Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total sellable quantity of the variant for online channels. This doesn't represent the total available inventory or capture [limitations based on customer location](https://help.shopify.com/manual/markets/inventory_and_fulfillment).

[Anchor to sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.sellingPlanGroups)selling Plan Groups

•[Selling Plan Group Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection)

non-null

A list of all selling plan groups defined in the current shop associated with the product variant.

Show fields

[Anchor to sellingPlanGroupsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.sellingPlanGroupsCount)selling Plan Groups Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Count of selling plan groups associated with the product variant.

Show fields

[Anchor to showUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.showUnitPrice)show Unit Price

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether to show the unit price for this product variant.

[Anchor to sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.sku)sku

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A case-sensitive identifier for the product variant in the shop. Required in order to connect to a fulfillment service.

[Anchor to taxable](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.taxable)taxable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a tax is charged when the product variant is sold.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the product variant.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to unitPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.unitPrice)unit Price

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The unit price value for the variant based on the variant measurement.

Show fields

[Anchor to unitPriceMeasurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.unitPriceMeasurement)unit Price Measurement

•[Unit Price Measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnitPriceMeasurement)

The unit price measurement for the variant.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time (ISO 8601 format) when the product variant was last modified.

### Deprecated fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to presentmentPrices](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.presentmentPrices)presentment Prices

•[Product Variant Price Pair Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection)

non-null Deprecated

Show fields

[Anchor to sellingPlanGroupCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.sellingPlanGroupCount)selling Plan Group Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

[Anchor to storefrontId](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.storefrontId)storefront Id

•[Storefront ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/StorefrontID)

non-null Deprecated

[Anchor to taxCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#field-ProductVariant.fields.taxCode)tax Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AbandonedCheckoutLineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-variant)
*   {}[CalculatedDraftOrderLineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-variant)
*   {}[CalculatedExchangeLineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem#field-variant)
*   {}[CalculatedLineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-variant)
*   {}[CombinedListingChild.parentVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild#field-parentVariant)
*   {}[CustomerVisitProductInfo.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo#field-variant)
*   {}[DeliveryProfileItem.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-variants)
*   {}[DiscountProducts.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-productVariants)
*   {}[DraftOrderLineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-variant)
*   {}[FulfillmentOrderLineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-variant)
*   {}[InventoryItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-variant)
*   {}[LineItem.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-variant)
*   {}[OrderStagedChangeAddVariant.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddVariant#field-variant)
*   {}[PriceListPrice.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-variant)
*   {}[PriceRuleItemEntitlements.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-productVariants)
*   {}[PriceRuleLineItemPrerequisites.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-productVariants)
*   {}[Product.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-variants)
*   {}[ProductBundleComponent.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-componentVariants)
*   {}[ProductComponentType.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-componentVariants)
*   {}[ProductComponentType.nonComponentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-nonComponentVariants)
*   {}[ProductVariantComponent.productVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponent#field-productVariant)
*   <->[ProductVariantConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#field-nodes)
*   {}[ProductVariantEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantEdge#field-node)
*   {}[QuantityPriceBreak.variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak#field-variant)
*   {}[QuantityRule.productVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule#field-productVariant)
*   {}[SellingPlanGroup.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-productVariants)
*   {}[SubscriptionBillingAttemptInsufficientStockProductVariantsError.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-insufficientStockProductVariants)

Show deprecations
### Possible type in

*   [Comment Event Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)
*   [Delivery Promise Participant Owner](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryPromiseParticipantOwner)
*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#queries)Queries
------------------------------------------------------------------------------------------------------------

[Anchor to productVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#query-productVariant)[product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariant)

•query

Retrieves a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) by its ID.

A product variant is a specific version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

Use the `productVariant` query when you need to:

*   Access essential product variant data (for example, title, price, image, and metafields).
*   Build product detail pages and manage inventory.
*   Handle international sales with localized pricing and content.
*   Manage product variants that are part of a bundle or selling plan.

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

Show fields

[Anchor to productVariantByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#query-productVariantByIdentifier)[product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariantByIdentifier)

•query

Return a product variant by an identifier.

Show fields

[Anchor to productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#query-productVariants)[product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants)

•query

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

Show fields

* * *

Was this section helpful?

Yes No

<?>ProductVariant Queries
-------------------------

### Queried by

*   <?>[product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/ProductVariant)
*   <?>[product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/ProductVariant)
*   <?>[product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/ProductVariantConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutations)Mutations
------------------------------------------------------------------------------------------------------------------

[Anchor to productVariantAppendMedia](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantAppendMedia)[product Variant Append Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)

•mutation

Appends media from a product to variants of the product.

Show payload

[Anchor to productVariantDetachMedia](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantDetachMedia)[product Variant Detach Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)

•mutation

Detaches media from product variants.

Show payload

[Anchor to productVariantJoinSellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantJoinSellingPlanGroups)[product Variant Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)

•mutation

Adds multiple selling plan groups to a product variant.

Show payload

[Anchor to productVariantLeaveSellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantLeaveSellingPlanGroups)[product Variant Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)

•mutation

Remove multiple groups from a product variant.

Show payload

[Anchor to productVariantRelationshipBulkUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantRelationshipBulkUpdate)[product Variant Relationship Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate)

•mutation

Creates new bundles, updates existing bundles, and removes bundle components for one or multiple bundles.

Show payload

[Anchor to productVariantsBulkCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantsBulkCreate)[product Variants Bulk Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)

•mutation

Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

The mutation supports:

*   Creating variants with custom options and values
*   Associating media (for example, images, videos, and 3D models) with the product or its variants
*   Handling complex product configurations

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to create a maximum of 2,048 product variants in a single operation.

* * *

After creating variants, you can make additional changes using one of the following mutations:

*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Show payload

[Anchor to productVariantsBulkUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-productVariantsBulkUpdate)[product Variants Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

•mutation

Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

The mutation supports:

*   Updating variants with custom options and values
*   Associating media (for example, images, videos, and 3D models) with the product or its variants
*   Handling complex product configurations

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to update a maximum of 2,048 product variants in a single operation.

* * *

After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Show payload

[Anchor to quantityPricingByVariantUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#mutation-quantityPricingByVariantUpdate)[quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate)

•mutation

Updates quantity pricing on a price list. You can use the `quantityPricingByVariantUpdate` mutation to set fixed prices, quantity rules, and quantity price breaks. This mutation does not allow partial successes. If any of the requested resources fail to update, none of the requested resources will be updated. Delete operations are executed before create operations.

Show payload

* * *

Was this section helpful?

Yes No

<~>ProductVariant Mutations
---------------------------

### Mutated by

*   <~>[product Variant Append Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)
*   <~>[product Variant Detach Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)
*   <~>[product Variant Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantJoinSellingPlanGroups)
*   <~>[product Variant Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantLeaveSellingPlanGroups)
*   <~>[product Variant Relationship Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantRelationshipBulkUpdate)
*   <~>[product Variants Bulk Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   <~>[product Variants Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   <~>[quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityPricingByVariantUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-ProductVariant Implements
----------------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*