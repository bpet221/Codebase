---
title: "Fulfillment"
description: "Shopify GraphQL Admin API documentation for fulfillment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Fulfillment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment

Markdown Content:
Fulfillment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#main-content)

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
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   
Shipping And Fulfillment

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Countries In Shipping Zones](https://shopify.dev/docs/api/admin-graphql/latest/objects/countriesinshippingzones)
        *   [Delivery Available Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryavailableservice)
        *   [Delivery Branded Promise](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverybrandedpromise)
        *   [Delivery Carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice)
        *   [Delivery Carrier Service And Locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierserviceandlocations)
        *   [Delivery Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycondition)
        *   [Delivery Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountry)
        *   [Delivery Country And Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountryandzone)
        *   [Delivery Country Code Or Rest Of World](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountrycodeorrestofworld)
        *   [Delivery Country Codes Or Rest Of World](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountrycodesorrestofworld)
        *   [Delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization)
        *   [Delivery Customization Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomizationerror)
        *   [Delivery Legacy Mode Blocked](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylegacymodeblocked)
        *   [Delivery Local Pickup Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocalpickupsettings)
        *   [Delivery Location Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocationgroup)
        *   [Delivery Location Group Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocationgroupzone)
        *   [Delivery Location Local Pickup Settings Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocationlocalpickupsettingserror)
        *   [Delivery Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethod)
        *   [Delivery Method Additional Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethodadditionalinformation)
        *   [Delivery Method Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethoddefinition)
        *   [Delivery Method Definition Counts](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethoddefinitioncounts)
        *   [Delivery Participant](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryparticipant)
        *   [Delivery Participant Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryparticipantservice)
        *   [Delivery Product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryproductvariantscount)
        *   [Delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile)
        *   [Delivery Profile Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofileitem)
        *   [Delivery Profile Location Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofilelocationgroup)
        *   [Delivery Promise Participant](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverypromiseparticipant)
        *   [Delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverypromiseprovider)
        *   [Delivery Promise Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverypromisesetting)
        *   [Delivery Province](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprovince)
        *   [Delivery Rate Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryratedefinition)
        *   [Delivery Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverysetting)
        *   [Delivery Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryzone)
        *   [Editable Property](https://shopify.dev/docs/api/admin-graphql/latest/objects/editableproperty)
        *   [Financial Summary Discount Allocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation)
        *   [Financial Summary Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountapplication)
        *   [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#interfaces)
        *   [Fulfillment Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent)
        *   [Fulfillment Hold](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmenthold)
        *   [Fulfillment Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentlineitem)
        *   [Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder)
        *   [Fulfillment Order Assigned Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation)
        *   [Fulfillment Order Destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderdestination)
        *   [Fulfillment Order International Duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderinternationalduties)
        *   [Fulfillment Order Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem)
        *   [Fulfillment Order Line Item Financial Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitemfinancialsummary)
        *   [Fulfillment Order Line Item Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitemwarning)
        *   [Fulfillment Order Location For Move](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlocationformove)
        *   [Fulfillment Order Merchant Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordermerchantrequest)
        *   [Fulfillment Order Merge Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordermergeresult)
        *   [Fulfillment Order Split Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordersplitresult)
        *   [Fulfillment Order Supported Action](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordersupportedaction)
        *   [Fulfillment Origin Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentoriginaddress)
        *   [Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice)
        *   [Fulfillment Tracking Info](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmenttrackinginfo)
        *   [Shipping Rate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shippingrate)

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

[Anchor to Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#top)
Fulfillment
===========

object

Requires `read_orders` access scope, `read_marketplace_orders` access scope, `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the fulfillment was created.

[Anchor to deliveredAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.deliveredAt)delivered At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date that this fulfillment was delivered.

[Anchor to displayStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.displayStatus)display Status

•[Fulfillment Display Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentDisplayStatus)

Human readable display status for this fulfillment.

Show enum values

[Anchor to estimatedDeliveryAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.estimatedDeliveryAt)estimated Delivery At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The estimated date that this fulfillment will arrive.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.events)events

•[Fulfillment Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection)

non-null

The history of events associated with this fulfillment.

Show fields

[Anchor to fulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.fulfillmentLineItems)fulfillment Line Items

•[Fulfillment Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection)

non-null

List of the fulfillment's line items.

Show fields

[Anchor to fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.fulfillmentOrders)fulfillment Orders

•[Fulfillment Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

non-null

A paginated list of fulfillment orders for the fulfillment.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inTransitAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.inTransitAt)in Transit At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the fulfillment went into transit.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location that the fulfillment was processed at.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Human readable reference identifier for this fulfillment.

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.order)order

•[Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

non-null

The order for which the fulfillment was created.

Show fields

[Anchor to originAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.originAddress)origin Address

•[Fulfillment Origin Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOriginAddress)

The address at which the fulfillment occurred. This field is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead.

Show fields

[Anchor to requiresShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.requiresShipping)requires Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether any of the line items in the fulfillment require shipping.

[Anchor to service](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.service)service

•[Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

Fulfillment service associated with the fulfillment.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.status)status

•[Fulfillment Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentStatus)

non-null

The status of the fulfillment.

Show enum values

[Anchor to totalQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.totalQuantity)total Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

Sum of all line item quantities for the fulfillment.

[Anchor to trackingInfo](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.trackingInfo)tracking Info

•[[Fulfillment Tracking Info!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo)

non-null

Tracking information associated with the fulfillment, such as the tracking company, tracking number, and tracking URL.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#field-Fulfillment.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the fulfillment was last modified.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[FulfillmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentConnection#field-nodes)
*   {}[FulfillmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEdge#field-node)
*   {}[FulfillmentOrder.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-fulfillments)
*   {}[Order.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-fulfillments)
*   {}[ReturnableFulfillment.fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-fulfillment)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#queries)Queries
---------------------------------------------------------------------------------------------------------

[Anchor to fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#query-fulfillment)[fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)

•query

Returns a Fulfillment resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>Fulfillment Queries
----------------------

### Queried by

*   <?>[fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/Fulfillment)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentCancel](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutation-fulfillmentCancel)[fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)

•mutation

Cancels a fulfillment.

Show payload

[Anchor to fulfillmentCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutation-fulfillmentCreate)[fulfillment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)

•mutation

Creates a fulfillment for one or many fulfillment orders. The fulfillment orders are associated with the same order and are assigned to the same location.

Show payload

[Anchor to fulfillmentTrackingInfoUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutation-fulfillmentTrackingInfoUpdate)[fulfillment Tracking Info Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

•mutation

Updates tracking information for a fulfillment.

Show payload

### Deprecated mutations

[Anchor to fulfillmentCreateV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutation-fulfillmentCreateV2)[fulfillment Create V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreateV2)

•mutation

Deprecated

Show payload

[Anchor to fulfillmentTrackingInfoUpdateV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#mutation-fulfillmentTrackingInfoUpdateV2)[fulfillment Tracking Info Update V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>Fulfillment Mutations
------------------------

### Mutated by

*   <~>[fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel)
*   <~>[fulfillment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate)
*   <~>[fulfillment Tracking Info Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Fulfillment Implements
-------------------------

### Implements

*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*