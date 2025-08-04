---
title: "InventoryScheduledChange"
description: "Shopify GraphQL Admin API documentation for inventoryscheduledchange"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryScheduledChange - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange

Markdown Content:
InventoryScheduledChange - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#mutations)
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

[Anchor to InventoryScheduledChange](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#top)
Inventory Scheduled Change
==========================

object

Requires `read_inventory` access scope.

Returns the scheduled changes to inventory states related to the ledger document.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#fields)Fields
-------------------------------------------------------------------------------------------------------------------

[Anchor to expectedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#field-InventoryScheduledChange.fields.expectedAt)expected At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time that the scheduled change is expected to happen.

[Anchor to fromName](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#field-InventoryScheduledChange.fields.fromName)from Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states) to transition from.

[Anchor to inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#field-InventoryScheduledChange.fields.inventoryLevel)inventory Level

•[Inventory Level!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

non-null

The quantities of an inventory item that are related to a specific location.

Show fields

[Anchor to ledgerDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#field-InventoryScheduledChange.fields.ledgerDocumentUri)ledger Document Uri

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

A freeform URI that represents what changed the inventory quantities.

[Anchor to quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#field-InventoryScheduledChange.fields.quantity)quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the scheduled change associated with the ledger document in the `fromName` state.

[Anchor to toName](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#field-InventoryScheduledChange.fields.toName)to Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states) to transition to.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[InventoryLevel.scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-scheduledChanges)
*   <->[InventoryScheduledChangeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#field-nodes)
*   {}[InventoryScheduledChangeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChangeEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------------

[Anchor to inventorySetScheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange#mutation-inventorySetScheduledChanges)[inventory Set Scheduled Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges)

•mutation

Set up scheduled changes of inventory items.

Show payload

* * *

Was this section helpful?

Yes No

<~>InventoryScheduledChange Mutations
-------------------------------------

### Mutated by

*   <~>[inventory Set Scheduled Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetScheduledChanges)


---
*Content truncated at "Updates" section*