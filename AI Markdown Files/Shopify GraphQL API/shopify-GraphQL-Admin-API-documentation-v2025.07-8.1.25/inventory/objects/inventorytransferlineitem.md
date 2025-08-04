---
title: "InventoryTransferLineItem"
description: "Shopify GraphQL Admin API documentation for inventorytransferlineitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryTransferLineItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem

Markdown Content:
InventoryTransferLineItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#interfaces)
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

[Anchor to InventoryTransferLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#top)
Inventory Transfer Line Item
============================

object

Requires `read_inventory_transfers` access scope. Also: The user must have permission to view products.

Represents a line item belonging to an inventory transfer.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.inventoryItem)inventory Item

•[Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

The inventory item associated with this line item.

Show fields

[Anchor to pickedForShipmentQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.pickedForShipmentQuantity)picked For Shipment Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the item that has been picked for a draft shipment but not yet shipped.

[Anchor to processableQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.processableQuantity)processable Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the item that can be actioned upon, such as editing the item quantity on the transfer or adding to a shipment.

[Anchor to shippableQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.shippableQuantity)shippable Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the item that can be shipped.

[Anchor to shippedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.shippedQuantity)shipped Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the item that has been shipped.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.title)title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The title of the product associated with this line item.

[Anchor to totalQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#field-InventoryTransferLineItem.fields.totalQuantity)total Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of items being transferred.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[InventoryTransfer.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-lineItems)
*   <->[InventoryTransferLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#field-nodes)
*   {}[InventoryTransferLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemEdge#field-node)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryTransferLineItem Implements
---------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*