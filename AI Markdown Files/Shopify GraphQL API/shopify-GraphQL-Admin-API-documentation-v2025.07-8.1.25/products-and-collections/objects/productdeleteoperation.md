---
title: "ProductDeleteOperation"
description: "Shopify GraphQL Admin API documentation for productdeleteoperation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation"
extraction_method: "jina"
sections: ['Products and collections', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ProductDeleteOperation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation

Markdown Content:
ProductDeleteOperation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#interfaces)
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

[Anchor to ProductDeleteOperation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#top)
Product Delete Operation
========================

object

Requires `read_products` access scope.

An entity that represents details of an asynchronous [ProductDelete](https://shopify.dev/api/admin-graphql/current/mutations/productDelete) mutation.

By querying this entity with the [productOperation](https://shopify.dev/api/admin-graphql/current/queries/productOperation) query using the ID that was returned when the product was deleted, this can be used to check the status of an operation.

The `status` field indicates whether the operation is `CREATED`, `ACTIVE`, or `COMPLETE`.

The `deletedProductId` field provides the ID of the deleted product.

The `userErrors` field provides mutation errors that occurred during the operation.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#fields)Fields
-----------------------------------------------------------------------------------------------------------------

[Anchor to deletedProductId](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#field-ProductDeleteOperation.fields.deletedProductId)deleted Product Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted product.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#field-ProductDeleteOperation.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#field-ProductDeleteOperation.fields.product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product on which the operation is being performed.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#field-ProductDeleteOperation.fields.status)status

•[Product Operation Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

non-null

The status of this operation.

Show enum values

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#field-ProductDeleteOperation.fields.userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

Returns mutation errors occurred during background mutation processing.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------------

[Anchor to productDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#mutation-productDelete)[product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

•mutation

Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

*   All product variants and their inventory items
*   Product media (images, videos) that are not referenced by other products
*   [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
*   Product publications across all sales channels
*   Product tags and metadata associations

The `productDelete` mutation also has the following effects on existing orders and transactions:

*   **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
*   **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

* * *

Caution

Product deletion is irreversible. After a product is deleted, it can't be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

* * *

If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

If you need more granular control over product cleanup, consider using these alternative mutations:

*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
*   [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

Show payload

* * *

Was this section helpful?

Yes No

<~>ProductDeleteOperation Mutations
-----------------------------------

### Mutated by

*   <~>[product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

[Anchor to ProductOperation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation#interface-ProductOperation)[Product Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)

•interface

* * *

Was this section helpful?

Yes No

||-ProductDeleteOperation Implements
------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
*   ||-[Product Operation](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ProductOperation)


---
*Content truncated at "Updates" section*