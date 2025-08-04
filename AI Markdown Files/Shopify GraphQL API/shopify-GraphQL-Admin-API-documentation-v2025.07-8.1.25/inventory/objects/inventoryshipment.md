---
title: "InventoryShipment"
description: "Shopify GraphQL Admin API documentation for inventoryshipment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryShipment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment

Markdown Content:
InventoryShipment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#interfaces)
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

[Anchor to InventoryShipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#top)
Inventory Shipment
==================

object

Requires `read_inventory_shipments` access scope.

Represents an inventory shipment.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#fields)Fields
------------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.lineItems)line Items

•[Inventory Shipment Line Item Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection)

The line items included in this shipment.

Show fields

[Anchor to lineItemsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.lineItemsCount)line Items Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of line items associated with the inventory shipment. Limited to a maximum of 10000 by default.

Show fields

[Anchor to lineItemTotalQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.lineItemTotalQuantity)line Item Total Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of all items in the shipment.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the inventory shipment.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.status)status

•[Inventory Shipment Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus)

non-null

The current status of the shipment.

Show enum values

[Anchor to totalAcceptedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.totalAcceptedQuantity)total Accepted Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of items accepted across all line items in this shipment.

[Anchor to totalReceivedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.totalReceivedQuantity)total Received Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of items received (both accepted and rejected) across all line items in this shipment.

[Anchor to totalRejectedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.totalRejectedQuantity)total Rejected Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of items rejected across all line items in this shipment.

[Anchor to tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#field-InventoryShipment.fields.tracking)tracking

•[Inventory Shipment Tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentTracking)

The tracking information for the shipment.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[InventoryShipmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#field-nodes)
*   {}[InventoryShipmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge#field-node)
*   {}[InventoryTransfer.shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-shipments)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#queries)Queries
---------------------------------------------------------------------------------------------------------------

[Anchor to inventoryShipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#query-inventoryShipment)[inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipment)

•query

Returns an inventory shipment by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>InventoryShipment Queries
----------------------------

### Queried by

*   <?>[inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/queries/InventoryShipment)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutations)Mutations
---------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryShipmentAddItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentAddItems)[inventory Shipment Add Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)

•mutation

Adds items to an inventory shipment.

Show payload

[Anchor to inventoryShipmentCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentCreate)[inventory Shipment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)

•mutation

Adds a draft shipment to an inventory transfer.

Show payload

[Anchor to inventoryShipmentCreateInTransit](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentCreateInTransit)[inventory Shipment Create In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)

•mutation

Adds an in-transit shipment to an inventory transfer.

Show payload

[Anchor to inventoryShipmentMarkInTransit](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentMarkInTransit)[inventory Shipment Mark In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)

•mutation

Marks a draft inventory shipment as in transit.

Show payload

[Anchor to inventoryShipmentReceive](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentReceive)[inventory Shipment Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)

•mutation

Receive an inventory shipment.

Show payload

[Anchor to inventoryShipmentRemoveItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentRemoveItems)[inventory Shipment Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)

•mutation

Remove items from an inventory shipment.

Show payload

[Anchor to inventoryShipmentSetTracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentSetTracking)[inventory Shipment Set Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)

•mutation

Edits the tracking info on an inventory shipment.

Show payload

[Anchor to inventoryShipmentUpdateItemQuantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#mutation-inventoryShipmentUpdateItemQuantities)[inventory Shipment Update Item Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

•mutation

Updates items on an inventory shipment.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryShipment Mutations
------------------------------

### Mutated by

*   <~>[inventory Shipment Add Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems)
*   <~>[inventory Shipment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreate)
*   <~>[inventory Shipment Create In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit)
*   <~>[inventory Shipment Mark In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit)
*   <~>[inventory Shipment Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive)
*   <~>[inventory Shipment Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentRemoveItems)
*   <~>[inventory Shipment Set Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking)
*   <~>[inventory Shipment Update Item Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryShipment Implements
-------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*