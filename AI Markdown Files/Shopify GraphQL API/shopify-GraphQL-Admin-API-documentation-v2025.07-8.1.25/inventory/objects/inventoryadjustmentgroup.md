---
title: "InventoryAdjustmentGroup"
description: "Shopify GraphQL Admin API documentation for inventoryadjustmentgroup"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryAdjustmentGroup - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup

Markdown Content:
InventoryAdjustmentGroup - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#interfaces)
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

[Anchor to InventoryAdjustmentGroup](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#top)
Inventory Adjustment Group
==========================

object

Requires `read_inventory` access scope.

Represents a group of adjustments made as part of the same operation.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#fields)Fields
-------------------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.app)app

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

The app that triggered the inventory event, if one exists.

Show fields

[Anchor to changes](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.changes)changes

•[[Inventory Change!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange)

non-null

The set of inventory quantity changes that occurred in the inventory event.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time the inventory adjustment group was created.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.reason)reason

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The reason for the group of adjustments.

[Anchor to referenceDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.referenceDocumentUri)reference Document Uri

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A freeform URI that represents why the inventory change happened. This can be the entity adjusting inventory quantities or the Shopify resource that's associated with the inventory adjustment. For example, a unit in a draft order might have been previously reserved, and a merchant later creates an order from the draft order. In this case, the `referenceDocumentUri` for the inventory adjustment is a URI referencing the order ID.

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#field-InventoryAdjustmentGroup.fields.staffMember)staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The staff member associated with the inventory event.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryAdjustQuantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#mutation-inventoryAdjustQuantities)[inventory Adjust Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)

•mutation

Apply changes to inventory quantities.

Show payload

[Anchor to inventoryMoveQuantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#mutation-inventoryMoveQuantities)[inventory Move Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)

•mutation

Moves inventory between inventory quantity names at a single location.

Show payload

[Anchor to inventorySetQuantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#mutation-inventorySetQuantities)[inventory Set Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

•mutation

Set quantities of specified name using absolute values. This mutation supports compare-and-set functionality to handle concurrent requests properly. If `ignoreCompareQuantity` is not set to true, the mutation will only update the quantity if the persisted quantity matches the `compareQuantity` value. If the `compareQuantity` value does not match the persisted value, the mutation will return an error. In order to opt out of the `compareQuantity` check, the `ignoreCompareQuantity` argument can be set to true.

* * *

Note

Only use this mutation if calling on behalf of a system that acts as the source of truth for inventory quantities, otherwise please consider using the [inventoryAdjustQuantities](https://shopify.dev/api/admin-graphql/latest/mutations/inventoryAdjustQuantities) mutation.

Opting out of the `compareQuantity` check can lead to inaccurate inventory quantities if multiple requests are made concurrently. It is recommended to always include the `compareQuantity` value to ensure the accuracy of the inventory quantities and to opt out of the check using `ignoreCompareQuantity` only when necessary.

* * *

Show payload

[Anchor to inventorySetOnHandQuantities](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#mutation-inventorySetOnHandQuantities)[inventory Set On Hand Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetOnHandQuantities)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryAdjustmentGroup Mutations
-------------------------------------

### Mutated by

*   <~>[inventory Adjust Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryAdjustQuantities)
*   <~>[inventory Move Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryMoveQuantities)
*   <~>[inventory Set Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryAdjustmentGroup Implements
--------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*