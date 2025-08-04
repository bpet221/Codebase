---
title: "FulfillmentOrder"
description: "Shopify GraphQL Admin API documentation for fulfillmentorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: FulfillmentOrder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder

Markdown Content:
FulfillmentOrder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#main-content)

[![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 3: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

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
        *   [Fulfillment Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent)
        *   [Fulfillment Hold](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmenthold)
        *   [Fulfillment Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentlineitem)
        *   [Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#interfaces)
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

[Anchor to FulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#top)
Fulfillment Order
=================

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

![Image 4](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)
Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

[See below for more details on creating fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

* * *

Note

Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.

[See below for more details on the lifecycle of a fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#the-lifecycle-of-a-fulfillment-order).

* * *

Retrieving fulfillment orders
-----------------------------

### Fulfillment orders from an order

All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

[API access scopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

### Fulfillment orders assigned to the app for fulfillment

Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

### All fulfillment orders

Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes) it was granted with.

The lifecycle of a fulfillment order
------------------------------------

### Fulfillment Order Creation

After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

### The lifecycle of a fulfillment order at a merchant managed location

Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

[Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

[Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

API access scopes
-----------------

Fulfillment orders are governed by the following API access scopes:

*   The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
*   The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
*   The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

### Fulfillment service app access scopes

Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

### Order management app access scopes

**Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

Notifications about fulfillment orders
--------------------------------------

Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

[Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.assignedLocation)assigned Location

•[Fulfillment Order Assigned Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation)

non-null

The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.

The fulfillment order's assigned location might change in the following cases:

*   The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder) field within the mutation's response.
*   Work on the fulfillment order hasn't yet begun, which means that the fulfillment order has the [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open), [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold) status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).

Show fields

[Anchor to channelId](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.channelId)channel Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

ID of the channel that created the order.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

Date and time when the fulfillment order was created.

[Anchor to deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.deliveryMethod)delivery Method

•[Delivery Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethod)

Delivery method of this fulfillment order.

Show fields

[Anchor to destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.destination)destination

•[Fulfillment Order Destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderDestination)

The destination where the items should be sent.

Show fields

[Anchor to fulfillAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.fulfillAt)fulfill At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time at which the fulfillment order will be fulfillable. When this date and time is reached, the scheduled fulfillment order is automatically transitioned to open. For example, the `fulfill_at` date for a subscription order might be the 1st of each month, a pre-order `fulfill_at` date would be `nil`, and a standard order `fulfill_at` date would be the order creation date.

[Anchor to fulfillBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.fulfillBy)fulfill By

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The latest date and time by which all items in the fulfillment order need to be fulfilled.

[Anchor to fulfillmentHolds](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.fulfillmentHolds)fulfillment Holds

•[[Fulfillment Hold!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold)

non-null

The fulfillment holds applied on the fulfillment order.

Show fields

[Anchor to fulfillmentOrdersForMerge](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.fulfillmentOrdersForMerge)fulfillment Orders For Merge

•[Fulfillment Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

non-null

Fulfillment orders eligible for merging with the given fulfillment order.

Show fields

[Anchor to fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.fulfillments)fulfillments

•[Fulfillment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentConnection)

non-null

A list of fulfillments for the fulfillment order.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to internationalDuties](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.internationalDuties)international Duties

•[Fulfillment Order International Duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderInternationalDuties)

The duties delivery method of this fulfillment order.

Show fields

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.lineItems)line Items

•[Fulfillment Order Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection)

non-null

A list of the fulfillment order's line items.

Show fields

[Anchor to locationsForMove](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.locationsForMove)locations For Move

•[Fulfillment Order Location For Move Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLocationForMoveConnection)

non-null

A list of locations that the fulfillment order can potentially move to.

Show fields

[Anchor to merchantRequests](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.merchantRequests)merchant Requests

•[Fulfillment Order Merchant Request Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderMerchantRequestConnection)

non-null

A list of requests sent by the merchant or an order management app to the fulfillment service for the fulfillment order.

Show fields

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.order)order

•[Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

non-null

The order that's associated with the fulfillment order.

Show fields

[Anchor to orderId](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.orderId)order Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

ID of the order that's associated with the fulfillment order.

[Anchor to orderName](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.orderName)order Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique identifier for the order that appears on the order page in the Shopify admin and the **Order status** page. For example, "#1001", "EN1001", or "1001-A". This value isn't unique across multiple stores.

[Anchor to orderProcessedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.orderProcessedAt)order Processed At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the order was processed. This date and time might not match the date and time when the order was created.

[Anchor to requestStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.requestStatus)request Status

•[Fulfillment Order Request Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus)

non-null

The request status of the fulfillment order.

Show enum values

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.status)status

•[Fulfillment Order Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderStatus)

non-null

The status of the fulfillment order.

Show enum values

[Anchor to supportedActions](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.supportedActions)supported Actions

•[[Fulfillment Order Supported Action!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction)

non-null

The actions that can be performed on this fulfillment order.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-FulfillmentOrder.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the fulfillment order was last updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Fulfillment.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-fulfillmentOrders)
*   {}[FulfillmentOrder.fulfillmentOrdersForMerge](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-fulfillmentOrdersForMerge)
*   <->[FulfillmentOrderConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#field-nodes)
*   {}[FulfillmentOrderEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderEdge#field-node)
*   {}[FulfillmentOrderMerchantRequest.fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest#field-fulfillmentOrder)
*   {}[FulfillmentOrderMergeResult.fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeResult#field-fulfillmentOrder)
*   {}[FulfillmentOrderSplitResult.fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult#field-fulfillmentOrder)
*   {}[FulfillmentOrderSplitResult.remainingFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult#field-remainingFulfillmentOrder)
*   {}[FulfillmentOrderSplitResult.replacementFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult#field-replacementFulfillmentOrder)
*   {}[Order.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-fulfillmentOrders)

Show deprecations
### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#queries)Queries
--------------------------------------------------------------------------------------------------------------

[Anchor to assignedFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#query-assignedFulfillmentOrders)[assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders)

•query

The paginated list of fulfillment orders assigned to the shop locations owned by the app.

Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations managed by [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) that are registered by the app. One app (api_client) can host multiple fulfillment services on a shop. Each fulfillment service manages a dedicated location on a shop. Assigned fulfillment orders can have associated [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus), or might currently not be requested to be fulfilled.

The app must have the `read_assigned_fulfillment_orders`[access scope](https://shopify.dev/docs/api/usage/access-scopes) to be able to retrieve the fulfillment orders assigned to its locations.

All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default. Perform filtering with the `assignmentStatus` argument to receive only fulfillment orders that have been requested to be fulfilled.

Show fields

[Anchor to fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#query-fulfillmentOrder)[fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrder)

•query

Returns a `FulfillmentOrder` resource by ID.

Show fields

[Anchor to fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#query-fulfillmentOrders)[fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders)

•query

The paginated list of all fulfillment orders. The returned fulfillment orders are filtered according to the [fulfillment order access scopes](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes) granted to the app.

Use this query to retrieve fulfillment orders assigned to merchant-managed locations, third-party fulfillment service locations, or all kinds of locations together.

For fetching only the fulfillment orders assigned to the app's locations, use the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection.

Show fields

[Anchor to manualHoldsFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#query-manualHoldsFulfillmentOrders)[manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualHoldsFulfillmentOrders)

•query

Returns a list of fulfillment orders that are on hold.

Show fields

* * *

Was this section helpful?

Yes No

<?>FulfillmentOrder Queries
---------------------------

### Queried by

*   <?>[assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/FulfillmentOrderConnection)
*   <?>[fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/FulfillmentOrder)
*   <?>[fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/FulfillmentOrderConnection)
*   <?>[manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/FulfillmentOrderConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentOrderAcceptCancellationRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderAcceptCancellationRequest)[fulfillment Order Accept Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptCancellationRequest)

•mutation

Accept a cancellation request sent to a fulfillment service for a fulfillment order.

Show payload

[Anchor to fulfillmentOrderAcceptFulfillmentRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderAcceptFulfillmentRequest)[fulfillment Order Accept Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)

•mutation

Accepts a fulfillment request sent to a fulfillment service for a fulfillment order.

Show payload

[Anchor to fulfillmentOrderCancel](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderCancel)[fulfillment Order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel)

•mutation

Marks a fulfillment order as canceled.

Show payload

[Anchor to fulfillmentOrderClose](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderClose)[fulfillment Order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderClose)

•mutation

Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items, and closes the fulfillment request.

This mutation can only be called for fulfillment orders that meet the following criteria:

*   Assigned to a fulfillment service location,
*   The fulfillment request has been accepted,
*   The fulfillment order status is `IN_PROGRESS`.

This mutation can only be called by the fulfillment service app that accepted the fulfillment request. Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to move the fulfillment order line items to another location and fulfill from there, remove and refund the line items, or to request fulfillment from the same fulfillment service again.

Closing a fulfillment order is explained in [the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).

Show payload

[Anchor to fulfillmentOrderHold](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderHold)[fulfillment Order Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

•mutation

Applies a fulfillment hold on a fulfillment order.

As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

Show payload

[Anchor to fulfillmentOrderMove](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderMove)[fulfillment Order Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove)

•mutation

Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.

Moving a fulfillment order will fail in the following circumstances:

*   The fulfillment order is closed.
*   The destination location doesn't stock the requested inventory item.
*   The API client doesn't have the correct permissions.

Line items which have already been fulfilled can't be re-assigned and will always remain assigned to the original location.

You can't change the assigned location while a fulfillment order has a [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus) of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`. These request statuses mean that a fulfillment order is awaiting action by a fulfillment service and can't be re-assigned without first having the fulfillment service accept a cancellation request. This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.

### How re-assigning line items affects fulfillment orders

**First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.

In this case, the [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the original fulfillment order will be updated to the new location.

**Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location. You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter (available as of the `2023-04` API version), or specify that the original fulfillment order contains line items which have already been fulfilled.

If the new location is already assigned to another active fulfillment order, on the same order, then a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated in a new fulfillment order.

Show payload

[Anchor to fulfillmentOrderOpen](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderOpen)[fulfillment Order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen)

•mutation

Marks a scheduled fulfillment order as open.

Show payload

[Anchor to fulfillmentOrderRejectCancellationRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderRejectCancellationRequest)[fulfillment Order Reject Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest)

•mutation

Rejects a cancellation request sent to a fulfillment service for a fulfillment order.

Show payload

[Anchor to fulfillmentOrderRejectFulfillmentRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderRejectFulfillmentRequest)[fulfillment Order Reject Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)

•mutation

Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.

Show payload

[Anchor to fulfillmentOrderReleaseHold](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderReleaseHold)[fulfillment Order Release Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)

•mutation

Releases the fulfillment hold on a fulfillment order.

Show payload

[Anchor to fulfillmentOrderReschedule](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderReschedule)[fulfillment Order Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)

•mutation

Reschedules a scheduled fulfillment order.

Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

The fulfillment order will be marked as ready for fulfillment at this date and time.

Show payload

[Anchor to fulfillmentOrderSubmitCancellationRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderSubmitCancellationRequest)[fulfillment Order Submit Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)

•mutation

Sends a cancellation request to the fulfillment service of a fulfillment order.

Show payload

[Anchor to fulfillmentOrderSubmitFulfillmentRequest](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#mutation-fulfillmentOrderSubmitFulfillmentRequest)[fulfillment Order Submit Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)

•mutation

Sends a fulfillment request to the fulfillment service of a fulfillment order.

Show payload

* * *

Was this section helpful?

Yes No

<~>FulfillmentOrder Mutations
-----------------------------

### Mutated by

*   <~>[fulfillment Order Accept Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptCancellationRequest)
*   <~>[fulfillment Order Accept Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)
*   <~>[fulfillment Order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel)
*   <~>[fulfillment Order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderClose)
*   <~>[fulfillment Order Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)
*   <~>[fulfillment Order Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove)
*   <~>[fulfillment Order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen)
*   <~>[fulfillment Order Reject Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest)
*   <~>[fulfillment Order Reject Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)
*   <~>[fulfillment Order Release Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)
*   <~>[fulfillment Order Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)
*   <~>[fulfillment Order Submit Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)
*   <~>[fulfillment Order Submit Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-FulfillmentOrder Implements
------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*