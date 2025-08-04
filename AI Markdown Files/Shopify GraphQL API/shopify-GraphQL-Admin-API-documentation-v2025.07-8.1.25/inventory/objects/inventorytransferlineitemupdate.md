---
title: "InventoryTransferLineItemUpdate"
description: "Shopify GraphQL Admin API documentation for inventorytransferlineitemupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryTransferLineItemUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate

Markdown Content:
InventoryTransferLineItemUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#mutations)

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

[Anchor to InventoryTransferLineItemUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#top)
Inventory Transfer Line Item Update
===================================

object

Requires `read_inventory` access scope.

Represents an update to a single transfer line item.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#fields)Fields
--------------------------------------------------------------------------------------------------------------------------

[Anchor to deltaQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#field-InventoryTransferLineItemUpdate.fields.deltaQuantity)delta Quantity

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The delta quantity for the transfer line item.

[Anchor to inventoryItemId](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#field-InventoryTransferLineItemUpdate.fields.inventoryItemId)inventory Item Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The inventory item ID for the transfer line item.

[Anchor to newQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#field-InventoryTransferLineItemUpdate.fields.newQuantity)new Quantity

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The new quantity for the transfer line item.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryTransferRemoveItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#mutation-inventoryTransferRemoveItems)[inventory Transfer Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

•mutation

This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

Show payload

[Anchor to inventoryTransferSetItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate#mutation-inventoryTransferSetItems)[inventory Transfer Set Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

•mutation

This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryTransferLineItemUpdate Mutations
--------------------------------------------

### Mutated by

*   <~>[inventory Transfer Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)
*   <~>[inventory Transfer Set Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)


---
*Content truncated at "Updates" section*