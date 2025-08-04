---
title: "Collection"
description: "Shopify GraphQL Admin API documentation for collection"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/collection"
extraction_method: "jina"
sections: ['Products and collections', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Collection - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/collection

Markdown Content:
Collection - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interfaces)
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

[Anchor to Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#top)
Collection
==========

object

Requires `read_products` access scope.

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

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#fields)Fields
-----------------------------------------------------------------------------------------------------

[Anchor to availablePublicationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.availablePublicationsCount)available Publications Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

Show fields

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.description)description

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description.

Show arguments

### Arguments

[Anchor to truncateAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.description.arguments.truncateAt)truncate At

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Truncates a string after the given length.

* * *

[Anchor to descriptionHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.descriptionHtml)description Html

•[HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

non-null

The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.feedback)feedback

•[Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback)

Information about the collection that's provided through resource feedback.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.

If the title is changed, the handle doesn't automatically change.

The handle can be used in themes by the Liquid templating language to refer to the collection, but using the ID is preferred because it never changes.

[Anchor to hasProduct](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.hasProduct)has Product

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the collection includes the specified product.

Show arguments

### Arguments

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.hasProduct.arguments.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the product to check.

* * *

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image associated with the collection.

Show fields

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to products](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.products)products

•[Product Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

non-null

The products that are included in the collection.

Show fields

[Anchor to productsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.productsCount)products Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of products in the collection.

Show fields

[Anchor to publishedOnCurrentPublication](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publishedOnCurrentPublication)published On Current Publication

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the resource is published to the app's [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). For example, the resource might be published to the app's online store channel.

[Anchor to publishedOnPublication](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publishedOnPublication)published On Publication

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the resource is published to a specified [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

Show arguments

### Arguments

[Anchor to publicationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publishedOnPublication.arguments.publicationId)publication Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the publication to check. For example, `id: "gid://shopify/Publication/123"`.

* * *

[Anchor to resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.resourcePublications)resource Publications

•[Resource Publication Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

non-null

The list of resources that are published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

Show fields

[Anchor to resourcePublicationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.resourcePublicationsCount)resource Publications Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

Show fields

[Anchor to resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.resourcePublicationsV2)resource Publications V2

•[Resource Publication V2Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection)

non-null

The list of resources that are either published or staged to be published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

Show fields

[Anchor to ruleSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.ruleSet)rule Set

•[Collection Rule Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleSet)

For a smart (automated) collection, specifies the rules that determine whether a product is included.

Show fields

[Anchor to seo](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.seo)seo

•[SEO!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SEO)

non-null

If the default SEO fields for page title and description have been modified, contains the modified information.

Show fields

[Anchor to sortOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.sortOrder)sort Order

•[Collection Sort Order!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder)

non-null

The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store.

Show enum values

[Anchor to templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.templateSuffix)template Suffix

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.unpublishedPublications)unpublished Publications

•[Publication Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection)

non-null

The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that the resource isn't published to.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified.

### Deprecated fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to publicationCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publicationCount)publication Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

Show arguments

### Arguments

[Anchor to onlyPublished](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publicationCount.arguments.onlyPublished)only Published

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

* * *

[Anchor to publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publications)publications

•[Collection Publication Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection)

non-null Deprecated

Show fields

[Anchor to publishedOnChannel](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publishedOnChannel)published On Channel

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

Show arguments

### Arguments

[Anchor to channelId](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publishedOnChannel.arguments.channelId)channel Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the channel to check.

* * *

[Anchor to publishedOnCurrentChannel](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.publishedOnCurrentChannel)published On Current Channel

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to storefrontId](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.storefrontId)storefront Id

•[Storefront ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/StorefrontID)

non-null Deprecated

[Anchor to unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#field-Collection.fields.unpublishedChannels)unpublished Channels

•[Channel Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Channel.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-collections)
*   <->[CollectionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#field-nodes)
*   {}[CollectionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge#field-node)
*   {}[CollectionPublication.collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication#field-collection)
*   {}[DiscountCollections.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections#field-collections)
*   {}[PriceRuleItemEntitlements.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-collections)
*   {}[PriceRuleLineItemPrerequisites.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-collections)
*   {}[Product.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-collections)
*   {}[Publication.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-collections)

Show deprecations
### Possible type in

*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#queries)Queries
--------------------------------------------------------------------------------------------------------

[Anchor to collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#query-collection)[collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection)

•query

Retrieves a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) by its ID. A collection represents a grouping of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can display and sell as a group in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collection` query when you need to:

*   Manage collection publishing across sales channels
*   Access collection metadata and SEO information
*   Work with collection rules and product relationships

A collection can be either a custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) collection where products are manually added, or a smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collection where products are automatically included based on defined rules. Each collection has associated metadata including title, description, handle, image, and [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).

Show fields

[Anchor to collectionByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#query-collectionByIdentifier)[collection By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionByIdentifier)

•query

Return a collection by an identifier.

Show fields

[Anchor to collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#query-collections)[collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

•query

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

Show fields

[Anchor to collectionByHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#query-collectionByHandle)[collection By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionByHandle)

•query

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

<?>Collection Queries
---------------------

### Queried by

*   <?>[collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/Collection)
*   <?>[collection By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/Collection)
*   <?>[collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/CollectionConnection)

Show deprecations

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutations)Mutations
--------------------------------------------------------------------------------------------------------------

[Anchor to collectionAddProducts](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutation-collectionAddProducts)[collection Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)

•mutation

Adds products to a collection.

Show payload

[Anchor to collectionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutation-collectionCreate)[collection Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)

•mutation

Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

There are two types of collections:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

Use the `collectionCreate` mutation when you need to:

*   Create a new collection for a product launch or campaign
*   Organize products by category, season, or promotion
*   Automate product grouping using rules (for example, by tag, type, or price)

* * *

Note

The created collection is unpublished by default. To make it available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

* * *

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

Show payload

[Anchor to collectionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutation-collectionUpdate)[collection Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

•mutation

Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

*   Updating collection details, like title, description, or image
*   Modifying SEO metadata for better search visibility
*   Changing which products are included (using rule updates for smart collections)
*   Publishing or unpublishing collections across different sales channels
*   Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

There are two types of collections with different update capabilities:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You can update collection properties, but rule sets can't be modified since products are manually selected.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You can update both collection properties and the rules that automatically determine which products are included. When updating [rule sets](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions) for smart collections, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

Show payload

### Deprecated mutations

[Anchor to collectionPublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutation-collectionPublish)[collection Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionPublish)

•mutation

Deprecated

Show payload

[Anchor to collectionUnpublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#mutation-collectionUnpublish)[collection Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUnpublish)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>Collection Mutations
-----------------------

### Mutated by

*   <~>[collection Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)
*   <~>[collection Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)
*   <~>[collection Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

[Anchor to Publishable](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection#interface-Publishable)[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

•interface

* * *

Was this section helpful?

Yes No

||-Collection Implements
------------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
*   ||-[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)


---
*Content truncated at "Updates" section*