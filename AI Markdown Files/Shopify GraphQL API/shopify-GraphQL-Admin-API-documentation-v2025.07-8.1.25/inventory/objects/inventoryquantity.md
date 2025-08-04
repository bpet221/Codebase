---
title: "InventoryQuantity"
description: "Shopify GraphQL Admin API documentation for inventoryquantity"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryQuantity - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity

Markdown Content:
InventoryQuantity - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#main-content)

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
*   
Inventory

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Country Harmonized System Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode)
        *   [Inventory Adjustment Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup)
        *   [Inventory Change](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange)
        *   [Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem)
        *   [Inventory Item Measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitemmeasurement)
        *   [Inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel)
        *   [Inventory Properties](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryproperties)
        *   [Inventory Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#interfaces)
        *   [Inventory Quantity Name](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantityname)
        *   [Inventory Scheduled Change](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange)
        *   [Inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment)
        *   [Inventory Shipment Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem)
        *   [Inventory Shipment Tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking)
        *   [Inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer)
        *   [Inventory Transfer Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem)
        *   [Inventory Transfer Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate)

*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   Products And Collections   
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

[Anchor to InventoryQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#top)
Inventory Quantity
==================

object

Requires `read_inventory` access scope.

Represents a quantity of an inventory item at a specific location, for a specific name.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#fields)Fields
------------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#field-InventoryQuantity.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#field-InventoryQuantity.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) that identifies the inventory quantity.

[Anchor to quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#field-InventoryQuantity.fields.quantity)quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity for the quantity name.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#field-InventoryQuantity.fields.updatedAt)updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

When the quantity was last updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[InventoryLevel.quantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-quantities)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryQuantity Implements
-------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*