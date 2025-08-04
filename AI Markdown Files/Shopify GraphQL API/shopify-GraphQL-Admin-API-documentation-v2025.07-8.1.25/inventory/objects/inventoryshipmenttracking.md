---
title: "InventoryShipmentTracking"
description: "Shopify GraphQL Admin API documentation for inventoryshipmenttracking"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: InventoryShipmentTracking - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking

Markdown Content:
InventoryShipmentTracking - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#main-content)

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

[Anchor to InventoryShipmentTracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#top)
Inventory Shipment Tracking
===========================

object

Requires `read_inventory_shipments` access scope.

Represents the tracking information for an inventory shipment.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to arrivesAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#field-InventoryShipmentTracking.fields.arrivesAt)arrives At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The estimated date and time that the shipment will arrive.

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#field-InventoryShipmentTracking.fields.company)company

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the shipping carrier company.

[Anchor to trackingNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#field-InventoryShipmentTracking.fields.trackingNumber)tracking Number

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The tracking number used by the carrier to identify the shipment.

[Anchor to trackingUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking#field-InventoryShipmentTracking.fields.trackingUrl)tracking Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL to track the shipment.

Given a tracking number and a shipping carrier company name from [the list](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#field-company), Shopify will return a generated tracking URL if no tracking URL was set manually.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[InventoryShipment.tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-tracking)


---
*Content truncated at "Updates" section*