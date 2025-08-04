---
title: "InventoryChange"
description: "Shopify GraphQL Admin API documentation for inventorychange"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryChange - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange

Markdown Content:
InventoryChange - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#main-content)

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

[Anchor to InventoryChange](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#top)
Inventory Change
================

object

Requires `read_inventory` access scope.

Represents a change in an inventory quantity of an inventory item at a location.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to delta](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#field-InventoryChange.fields.delta)delta

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The amount by which the inventory quantity was changed.

[Anchor to item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#field-InventoryChange.fields.item)item

•[Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

The inventory item associated with this inventory change.

Show fields

[Anchor to ledgerDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#field-InventoryChange.fields.ledgerDocumentUri)ledger Document Uri

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A URI that represents what the inventory quantity change was applied to.

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#field-InventoryChange.fields.location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location associated with this inventory change.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#field-InventoryChange.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) of the inventory quantity that was changed.

[Anchor to quantityAfterChange](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange#field-InventoryChange.fields.quantityAfterChange)quantity After Change

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The quantity of named inventory after the change.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[InventoryAdjustmentGroup.changes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-changes)


---
*Content truncated at "Updates" section*