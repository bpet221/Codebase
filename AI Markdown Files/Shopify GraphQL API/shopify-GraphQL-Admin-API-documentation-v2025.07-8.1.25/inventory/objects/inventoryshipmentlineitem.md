---
title: "InventoryShipmentLineItem"
description: "Shopify GraphQL Admin API documentation for inventoryshipmentlineitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryShipmentLineItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem

Markdown Content:
InventoryShipmentLineItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#interfaces)
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

[Anchor to InventoryShipmentLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#top)
Inventory Shipment Line Item
============================

object

Requires `read_inventory_shipments` access scope.

Represents a single line item within an inventory shipment.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to acceptedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#field-InventoryShipmentLineItem.fields.acceptedQuantity)accepted Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of items that were accepted in this shipment line item.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#field-InventoryShipmentLineItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#field-InventoryShipmentLineItem.fields.inventoryItem)inventory Item

•[Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

The inventory item associated with this line item.

Show fields

[Anchor to quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#field-InventoryShipmentLineItem.fields.quantity)quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of items in this shipment line item.

[Anchor to rejectedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#field-InventoryShipmentLineItem.fields.rejectedQuantity)rejected Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of items that were rejected in this shipment line item.

[Anchor to unreceivedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#field-InventoryShipmentLineItem.fields.unreceivedQuantity)unreceived Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of units that haven't been received (neither accepted or rejected) in this shipment line item.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[InventoryShipment.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-lineItems)
*   <->[InventoryShipmentLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#field-nodes)
*   {}[InventoryShipmentLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItemEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryShipmentAddItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#mutation-inventoryShipmentAddItems)[inventory Shipment Add Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

•mutation

Adds items to an inventory shipment.

Show payload

[Anchor to inventoryShipmentUpdateItemQuantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#mutation-inventoryShipmentUpdateItemQuantities)[inventory Shipment Update Item Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

•mutation

Updates items on an inventory shipment.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryShipmentLineItem Mutations
--------------------------------------

### Mutated by

*   <~>[inventory Shipment Add Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)
*   <~>[inventory Shipment Update Item Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryShipmentLineItem Implements
---------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*