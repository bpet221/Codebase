---
title: "collectionByIdentifier"
description: "Shopify GraphQL Admin API documentation for collectionbyidentifier"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionByIdentifier - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier

Markdown Content:
collectionByIdentifier - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier#main-content)

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

[Anchor to collectionByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier#top)
collection By Identifier
========================

query

Requires `read_products` access scope.

Return a collection by an identifier.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier#arguments-identifier)identifier

•[Collection Identifier Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionIdentifierInput)

required

The identifier of the collection.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier#returns-Collection)Collection

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

*   ### collectionByIdentifier reference

Hide content

Query Reference
---------------

Copy

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

collectionByIdentifier(identifier){

# collectionByIdentifier fields

}

}


---
*Content truncated at "Updates" section*