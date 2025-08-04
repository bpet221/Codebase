---
title: "InventoryLevel"
description: "Shopify GraphQL Admin API documentation for inventorylevel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryLevel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel

Markdown Content:
InventoryLevel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#interfaces)
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

[Anchor to InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#top)
Inventory Level
===============

object

Requires `read_inventory` access scope.

The quantities of an inventory item that are related to a specific location. Learn [more about the relationships between inventory objects](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to canDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.canDeactivate)can Deactivate

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the inventory items associated with the inventory level can be deactivated.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the inventory level was created.

[Anchor to deactivationAlert](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.deactivationAlert)deactivation Alert

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.item)item

•[Inventory Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

non-null

Inventory item associated with the inventory level.

Show fields

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.location)location

•[Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

non-null

The location associated with the inventory level.

Show fields

[Anchor to quantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.quantities)quantities

•[[Inventory Quantity!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryQuantity)

non-null

Quantities for the requested names.

Show fields

[Anchor to scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.scheduledChanges)scheduled Changes

•[Inventory Scheduled Change Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection)

non-null

Scheduled changes for the requested quantity names.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#field-InventoryLevel.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the inventory level was updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[InventoryItem.inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-inventoryLevel)
*   {}[InventoryItem.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-inventoryLevels)
*   <->[InventoryLevelConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#field-nodes)
*   {}[InventoryLevelEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevelEdge#field-node)
*   {}[InventoryScheduledChange.inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange#field-inventoryLevel)
*   {}[Location.inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-inventoryLevel)
*   {}[Location.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-inventoryLevels)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#queries)Queries
------------------------------------------------------------------------------------------------------------

[Anchor to inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#query-inventoryLevel)[inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryLevel)

•query

Returns an [InventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) object by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>InventoryLevel Queries
-------------------------

### Queried by

*   <?>[inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/queries/InventoryLevel)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#mutations)Mutations
------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryActivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#mutation-inventoryActivate)[inventory Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)

•mutation

Activate an inventory item at a location.

Show payload

[Anchor to inventoryBulkToggleActivation](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#mutation-inventoryBulkToggleActivation)[inventory Bulk Toggle Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

•mutation

Modify the activation status of an inventory item at locations. Activating an inventory item at a particular location allows that location to stock that inventory item. Deactivating an inventory item at a location removes the inventory item's quantities and turns off the inventory item from that location.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryLevel Mutations
---------------------------

### Mutated by

*   <~>[inventory Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryActivate)
*   <~>[inventory Bulk Toggle Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryLevel Implements
----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*