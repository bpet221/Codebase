---
title: "InventoryTransfer"
description: "Shopify GraphQL Admin API documentation for inventorytransfer"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryTransfer - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer

Markdown Content:
InventoryTransfer - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interfaces)
        *   [Inventory Transfer Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem)
        *   [Inventory Transfer Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate)

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

[Anchor to InventoryTransfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#top)
Inventory Transfer
==================

object

Requires `read_inventory_transfers` access scope. Also: The user must have permission to view products.

Represents the intention to move inventory between locations.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#fields)Fields
------------------------------------------------------------------------------------------------------------

[Anchor to dateCreated](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.dateCreated)date Created

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time the inventory transfer was created in UTC format.

[Anchor to destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.destination)destination

•[Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot)

Snapshot of the destination location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.

Show fields

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The list of events associated with the inventory transfer.

Show fields

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the merchant has added timeline comments to the inventory transfer.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.lineItems)line Items

•[Inventory Transfer Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection)

non-null

The line items associated with the inventory transfer.

Show fields

[Anchor to lineItemsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.lineItemsCount)line Items Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of line items associated with the inventory transfer. Limited to a maximum of 10000 by default.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the inventory transfer.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Additional note attached to the inventory transfer.

[Anchor to origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.origin)origin

•[Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot)

Snapshot of the origin location (name, address, when snapped) with an optional link to the live Location object. If the original location is deleted, the snapshot data will still be available but the location link will be nil.

Show fields

[Anchor to receivedQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.receivedQuantity)received Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of items received in the transfer.

[Anchor to referenceName](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.referenceName)reference Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The reference name of the inventory transfer.

[Anchor to shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.shipments)shipments

•[Inventory Shipment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection)

non-null

The shipments associated with the inventory transfer.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.status)status

•[Inventory Transfer Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus)

non-null

The current status of the transfer.

Show enum values

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A list of tags that have been added to the inventory transfer.

[Anchor to totalQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.totalQuantity)total Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total quantity of items being transferred.

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#field-InventoryTransfer.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[InventoryTransferConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferConnection#field-nodes)
*   {}[InventoryTransferEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#queries)Queries
---------------------------------------------------------------------------------------------------------------

[Anchor to inventoryTransfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#query-inventoryTransfer)[inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryTransfer)

•query

Returns an inventory transfer by ID.

Show fields

[Anchor to inventoryTransfers](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#query-inventoryTransfers)[inventory Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryTransfers)

•query

Returns a paginated list of transfers.

Show fields

* * *

Was this section helpful?

Yes No

<?>InventoryTransfer Queries
----------------------------

### Queried by

*   <?>[inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/queries/InventoryTransfer)
*   <?>[inventory Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/InventoryTransferConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutations)Mutations
---------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryTransferCancel](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferCancel)[inventory Transfer Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)

•mutation

Cancels an inventory transfer.

Show payload

[Anchor to inventoryTransferCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferCreate)[inventory Transfer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)

•mutation

Creates an inventory transfer.

Show payload

[Anchor to inventoryTransferCreateAsReadyToShip](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferCreateAsReadyToShip)[inventory Transfer Create As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)

•mutation

Creates an inventory transfer in ready to ship.

Show payload

[Anchor to inventoryTransferDuplicate](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferDuplicate)[inventory Transfer Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)

•mutation

This mutation allows duplicating an existing inventory transfer. The duplicated transfer will have the same line items and quantities as the original transfer, but will be in a draft state with no shipments.

Show payload

[Anchor to inventoryTransferEdit](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferEdit)[inventory Transfer Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)

•mutation

Edits an inventory transfer.

Show payload

[Anchor to inventoryTransferMarkAsReadyToShip](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferMarkAsReadyToShip)[inventory Transfer Mark As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)

•mutation

Sets an inventory transfer to ready to ship.

Show payload

[Anchor to inventoryTransferRemoveItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferRemoveItems)[inventory Transfer Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)

•mutation

This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

Show payload

[Anchor to inventoryTransferSetItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#mutation-inventoryTransferSetItems)[inventory Transfer Set Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

•mutation

This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryTransfer Mutations
------------------------------

### Mutated by

*   <~>[inventory Transfer Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCancel)
*   <~>[inventory Transfer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate)
*   <~>[inventory Transfer Create As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip)
*   <~>[inventory Transfer Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferDuplicate)
*   <~>[inventory Transfer Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferEdit)
*   <~>[inventory Transfer Mark As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)
*   <~>[inventory Transfer Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems)
*   <~>[inventory Transfer Set Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-InventoryTransfer Implements
-------------------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*