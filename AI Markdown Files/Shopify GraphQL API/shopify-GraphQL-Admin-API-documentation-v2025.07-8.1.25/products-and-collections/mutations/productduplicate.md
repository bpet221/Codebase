---
title: "productDuplicate"
description: "Shopify GraphQL Admin API documentation for productduplicate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productDuplicate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate

Markdown Content:
productDuplicate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#main-content)

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
    *   
Mutations

        *   [catalog Context Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcontextupdate)
        *   [catalog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcreate)
        *   [catalog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogdelete)
        *   [catalog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogupdate)
        *   [collection Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproducts)
        *   [collection Add Products V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproductsv2)
        *   [collection Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate)
        *   [collection Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectiondelete)
        *   [collection Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionpublish)
        *   [collection Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts)
        *   [collection Reorder Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionreorderproducts)
        *   [collection Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionunpublish)
        *   [collection Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate)
        *   [combined Listing Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate)
        *   [file Acknowledge Update Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileacknowledgeupdatefailed)
        *   [file Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate)
        *   [file Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete)
        *   [file Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate)
        *   [price List Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistcreate)
        *   [price List Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistdelete)
        *   [price List Fixed Prices Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesadd)
        *   [price List Fixed Prices By Product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesbyproductupdate)
        *   [price List Fixed Prices Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete)
        *   [price List Fixed Prices Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesupdate)
        *   [price List Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate)
        *   [product Bundle Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundlecreate)
        *   [product Bundle Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundleupdate)
        *   [product Change Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productchangestatus)
        *   [product Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate)
        *   [product Create Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia)
        *   [product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete)
        *   [product Delete Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia)
        *   [product Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate)
        *   [product Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productjoinsellingplangroups)
        *   [product Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productleavesellingplangroups)
        *   [product Options Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate)
        *   [product Options Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete)
        *   [product Options Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder)
        *   [product Option Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate)
        *   [product Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productpublish)
        *   [product Reorder Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productreordermedia)
        *   [product Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset)
        *   [product Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productunpublish)
        *   [product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate)
        *   [product Update Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia)
        *   [product Variant Append Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia)
        *   [product Variant Detach Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantdetachmedia)
        *   [product Variant Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantjoinsellingplangroups)
        *   [product Variant Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantleavesellingplangroups)
        *   [product Variant Relationship Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate)
        *   [product Variants Bulk Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate)
        *   [product Variants Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkdelete)
        *   [product Variants Bulk Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkreorder)
        *   [product Variants Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate)
        *   [quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantitypricingbyvariantupdate)
        *   [quantity Rules Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd)
        *   [quantity Rules Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesdelete)
        *   [selling Plan Group Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproducts)
        *   [selling Plan Group Add Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproductvariants)
        *   [selling Plan Group Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate)
        *   [selling Plan Group Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupdelete)
        *   [selling Plan Group Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproducts)
        *   [selling Plan Group Remove Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproductvariants)
        *   [selling Plan Group Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate)
        *   [staged Uploads Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate)

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

[Anchor to productDuplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#top)
product Duplicate
=================

mutation

Requires `write_products` access scope. Also: The user must have a permission to duplicate a product.

Duplicates a product.

If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

To avoid these timeout errors, you can instead duplicate the product asynchronously.

In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

Metafield values are not duplicated if the unique values capability is enabled.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments)
Arguments
---------

[Anchor to includeImages](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments-includeImages)include Images

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Specifies whether or not to duplicate images.

[Anchor to includeTranslations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments-includeTranslations)include Translations

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Specifies whether or not to duplicate translations.

[Anchor to newStatus](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments-newStatus)new Status

•[Product Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

The new status of the product. If no value is provided the status will be inherited from the original product.

Show enum values

[Anchor to newTitle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments-newTitle)new Title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The new title of the product.

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the product to be duplicated.

[Anchor to synchronous](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#arguments-synchronous)synchronous

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Specifies whether or not to run the mutation synchronously.

* * *

Was this section helpful?

Yes No

[Anchor to ProductDuplicatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#returns)Product Duplicate Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to imageJob](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#returns-imageJob)image Job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job that duplicates the product images.

Show fields

[Anchor to newProduct](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#returns-newProduct)new Product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The duplicated product.

Show fields

[Anchor to productDuplicateOperation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#returns-productDuplicateOperation)product Duplicate Operation

•[Product Duplicate Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDuplicateOperation)

The product duplicate operation, returned when run in asynchronous mode.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### productDuplicate reference

Hide content

Mutation Reference
------------------

Copy

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

mutation productDuplicate($productId: ID!, $newTitle: String!, $newStatus: ProductStatus, $includeImages: Boolean, $includeTranslations: Boolean, $synchronous: Boolean){

productDuplicate(productId: $productId, newTitle: $newTitle, newStatus: $newStatus, includeImages: $includeImages, includeTranslations: $includeTranslations, synchronous: $synchronous){

imageJob {

# Job fields

}

newProduct {

# Product fields

}

 productDuplicateOperation {

# ProductDuplicateOperation fields

}

shop {

# Shop fields

}

 userErrors {

field

message

}

}

}

Hide content

Input
-----

Variables

Copy

9

1

2

3

4

5

6

7

8

›

⌄

{

"productId": "gid://shopify/<objectName>/10079785100",

"newTitle": "<your-newTitle>",

"newStatus": "ACTIVE",

"includeImages": true,

"includeTranslations": true,

"synchronous": true

}

```
{
  "productId": "gid://shopify/<objectName>/10079785100",
  "newTitle": "<your-newTitle>",
  "newStatus": "ACTIVE",
  "includeImages": true,
  "includeTranslations": true,
  "synchronous": true
}
```


---
*Content truncated at "Updates" section*