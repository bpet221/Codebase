---
title: "inventoryTransfer"
description: "Shopify GraphQL Admin API documentation for inventorytransfer"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer"
extraction_method: "jina"
sections: ['Inventory', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryTransfer - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer

Markdown Content:
inventoryTransfer - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer#main-content)

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
*   
Inventory

    *   
Queries

        *   [inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitem)
        *   [inventory Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryitems)
        *   [inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorylevel)
        *   [inventory Properties](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryproperties)
        *   [inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryshipment)
        *   [inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer)
        *   [inventory Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfers)

    *   Mutations   
    *   Objects   

*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
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

[Anchor to inventoryTransfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer#top)
inventory Transfer
==================

query

Requires `read_inventory_transfers` access scope. Also: The user must have permission to view products.

Returns an inventory transfer by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the inventory transfer.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to InventoryTransfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventorytransfer#returns-InventoryTransfer)Inventory Transfer

•[Inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

Represents the intention to move inventory between locations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### inventoryTransfer reference

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

inventoryTransfer(id){

# inventoryTransfer fields

}

}


---
*Content truncated at "Updates" section*