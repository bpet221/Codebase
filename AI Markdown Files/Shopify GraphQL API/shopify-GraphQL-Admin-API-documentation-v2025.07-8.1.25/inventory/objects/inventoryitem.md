---
title: "InventoryItem"
description: "Shopify GraphQL Admin API documentation for inventoryitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem

Markdown Content:
InventoryItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#interfaces)
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

[Anchor to InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#top)
Inventory Item
==============

object

Requires `read_inventory` access scope or `read_products` access scope.

Represents the goods available to be shipped to a customer. It holds essential information about the goods, including SKU and whether it is tracked. Learn [more about the relationships between inventory objects](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to countryCodeOfOrigin](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.countryCodeOfOrigin)country Code Of Origin

•[Country Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

The ISO 3166-1 alpha-2 country code of where the item originated from.

Show enum values

[Anchor to countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.countryHarmonizedSystemCodes)country Harmonized System Codes

•[Country Harmonized System Code Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection)

non-null

A list of country specific harmonized system codes.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the inventory item was created.

[Anchor to duplicateSkuCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.duplicateSkuCount)duplicate Sku Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of inventory items that share the same SKU with this item.

[Anchor to harmonizedSystemCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.harmonizedSystemCode)harmonized System Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The harmonized system code of the item. This must be a number between 6 and 13 digits.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inventoryHistoryUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.inventoryHistoryUrl)inventory History Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL that points to the inventory history for the item.

[Anchor to inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.inventoryLevel)inventory Level

•[Inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

The inventory item's quantities at the specified location.

Show fields

[Anchor to inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.inventoryLevels)inventory Levels

•[Inventory Level Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection)

non-null

A list of the inventory item's quantities for each location that the inventory item can be stocked at.

Show fields

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to locationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.locationsCount)locations Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of locations where this inventory item is stocked.

Show fields

[Anchor to measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.measurement)measurement

•[Inventory Item Measurement!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemMeasurement)

non-null

The packaging dimensions of the inventory item.

Show fields

[Anchor to provinceCodeOfOrigin](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.provinceCodeOfOrigin)province Code Of Origin

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The ISO 3166-2 alpha-2 province code of where the item originated from.

[Anchor to requiresShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.requiresShipping)requires Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the inventory item requires shipping.

[Anchor to sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.sku)sku

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Inventory item SKU. Case-sensitive string.

[Anchor to tracked](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.tracked)tracked

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether inventory levels are tracked for the item.

[Anchor to trackedEditable](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.trackedEditable)tracked Editable

•[Editable Property!](https://shopify.dev/docs/api/admin-graphql/latest/objects/EditableProperty)

non-null

Whether the value of the `tracked` field for the inventory item can be changed.

Show fields

[Anchor to unitCost](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.unitCost)unit Cost

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

Unit cost associated with the inventory item. Note: the user must have "View product costs" permission granted in order to access this field once product granular permissions are enabled.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the inventory item was updated.

[Anchor to variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#field-InventoryItem.fields.variant)variant

•[Product Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

non-null

The variant that owns this inventory item.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[InventoryChange.item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-item)
*   <->[InventoryItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#field-nodes)
*   {}[InventoryItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge#field-node)
*   {}[InventoryLevel.item](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-item)
*   {}[InventoryShipmentLineItem.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem#field-inventoryItem)
*   {}[InventoryTransferLineItem.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem#field-inventoryItem)
*   {}[ProductVariant.inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-inventoryItem)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#queries)Queries
-----------------------------------------------------------------------------------------------------------

[Anchor to inventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#query-inventoryItem)[inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItem)

•query

Returns an [InventoryItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) object by ID.

Show fields

[Anchor to inventoryItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#query-inventoryItems)[inventory Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

•query

Returns a list of inventory items.

Show fields

* * *

Was this section helpful?

Yes No

<?>InventoryItem Queries
------------------------

### Queried by

*   <?>[inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/queries/InventoryItem)
*   <?>[inventory Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/InventoryItemConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------

[Anchor to inventoryBulkToggleActivation](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#mutation-inventoryBulkToggleActivation)[inventory Bulk Toggle Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)

•mutation

Modify the activation status of an inventory item at locations. Activating an inventory item at a particular location allows that location to stock that inventory item. Deactivating an inventory item at a location removes the inventory item's quantities and turns off the inventory item from that location.

Show payload

[Anchor to inventoryItemUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#mutation-inventoryItemUpdate)[inventory Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

•mutation

Updates an inventory item.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryItem Mutations
--------------------------

### Mutated by

*   <~>[inventory Bulk Toggle Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryBulkToggleActivation)
*   <~>[inventory Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryItemUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryItem Implements
---------------------------

### Implements

*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*