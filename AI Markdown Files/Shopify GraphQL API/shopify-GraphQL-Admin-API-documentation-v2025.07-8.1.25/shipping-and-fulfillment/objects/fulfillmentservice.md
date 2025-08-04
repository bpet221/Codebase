---
title: "FulfillmentService"
description: "Shopify GraphQL Admin API documentation for fulfillmentservice"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: FulfillmentService - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice

Markdown Content:
FulfillmentService - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#mutations)
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

[Anchor to FulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#top)
Fulfillment Service
===================

object

A **Fulfillment Service** is a third party warehouse that prepares and ships orders on behalf of the store owner. Fulfillment services charge a fee to package and ship items and update product inventory levels. Some well known fulfillment services with Shopify integrations include: Amazon, Shipwire, and Rakuten. When an app registers a new `FulfillmentService` on a store, Shopify automatically creates a `Location` that's associated to the fulfillment service. To learn more about fulfillment services, refer to [Manage fulfillments as a fulfillment service app](https://shopify.dev/apps/fulfillment/fulfillment-service-apps) guide.

Mutations
---------

You can work with the `FulfillmentService` object with the [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate), [fulfillmentServiceUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate), and [fulfillmentServiceDelete](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceDelete) mutations.

Hosted endpoints
----------------

Fulfillment service providers integrate with Shopify by providing Shopify with a set of hosted endpoints that Shopify can query on certain conditions. These endpoints must have a common prefix, and this prefix should be supplied in the `callbackUrl` parameter in the [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate) mutation.

*   Shopify sends POST requests to the `<callbackUrl>/fulfillment_order_notification` endpoint to notify the fulfillment service about fulfillment requests and fulfillment cancellation requests.

For more information, refer to [Receive fulfillment requests and cancellations](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

*   Shopify sends GET requests to the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders if `trackingSupport` is set to `true`.

For more information, refer to [Enable tracking support](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-8-enable-tracking-support-optional).

Fulfillment services can also update tracking information using the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate) mutation, rather than waiting for Shopify to ask for tracking numbers.

*   Shopify sends GET requests to the `<callbackUrl>/fetch_stock` endpoint to retrieve on hand inventory levels for the fulfillment service location if `inventoryManagement` is set to `true`.

For more information, refer to [Sharing inventory levels with Shopify](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-10-optional-share-inventory-levels-with-shopify).

To make sure you have everything set up correctly, you can test the `callbackUrl`-prefixed endpoints in your development store.

Resources and webhooks
----------------------

There are a variety of objects and webhooks that enable a fulfillment service to work. To exchange fulfillment information with Shopify, fulfillment services use the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder), [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) and [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) objects and related mutations. To act on fulfillment process events that happen on the Shopify side, besides awaiting calls to `callbackUrl`-prefixed endpoints, fulfillment services can subscribe to the [fulfillment order](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) and [order](https://shopify.dev/api/admin-rest/latest/resources/webhook) webhooks.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.callbackUrl)callback Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The callback URL that the fulfillment service has registered for requests. The following considerations apply:

*   Shopify queries the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
*   Shopify queries the `<callbackUrl>/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
*   Shopify uses the `<callbackUrl>/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-9-optional-enable-tracking-support).

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Human-readable unique identifier for this fulfillment service.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The ID of the fulfillment service.

[Anchor to inventoryManagement](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.inventoryManagement)inventory Management

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the fulfillment service tracks product inventory and provides updates to Shopify.

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

Location associated with the fulfillment service.

Show fields

[Anchor to permitsSkuSharing](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.permitsSkuSharing)permits Sku Sharing

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the fulfillment service can stock inventory alongside other locations.

[Anchor to requiresShippingMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.requiresShippingMethod)requires Shipping Method

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the fulfillment service requires products to be physically shipped.

[Anchor to serviceName](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.serviceName)service Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the fulfillment service as seen by merchants.

[Anchor to trackingSupport](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.trackingSupport)tracking Support

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the fulfillment service implemented the /fetch_tracking_numbers endpoint.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.type)type

•[Fulfillment Service Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentServiceType)

non-null

Type associated with the fulfillment service.

Show enum values

[Anchor to fulfillmentOrdersOptIn](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#field-FulfillmentService.fields.fulfillmentOrdersOptIn)fulfillment Orders Opt In

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CalculatedDraftOrderLineItem.fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-fulfillmentService)
*   {}[DraftOrderLineItem.fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-fulfillmentService)
*   {}[Fulfillment.service](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-service)
*   {}[Location.fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-fulfillmentService)
*   {}[Shop.fulfillmentServices](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-fulfillmentServices)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#queries)Queries
----------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#query-fulfillmentService)[fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentService)

•query

Returns a FulfillmentService resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>FulfillmentService Queries
-----------------------------

### Queried by

*   <?>[fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/FulfillmentService)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentServiceCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#mutation-fulfillmentServiceCreate)[fulfillment Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)

•mutation

Creates a fulfillment service.

Fulfillment service location
----------------------------

When creating a fulfillment service, a new location will be automatically created on the shop and will be associated with this fulfillment service. This location will be named after the fulfillment service and inherit the shop's address.

If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location (for example, to change its address to a country different from the shop's country), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation after creating the fulfillment service.

Show payload

[Anchor to fulfillmentServiceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice#mutation-fulfillmentServiceUpdate)[fulfillment Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)

•mutation

Updates a fulfillment service.

If you are using API version `2023-10` or later, and you need to update the location managed by the fulfillment service (for example, to change the address of a fulfillment service), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation.

Show payload

* * *

Was this section helpful?

Yes No

<~>FulfillmentService Mutations
-------------------------------

### Mutated by

*   <~>[fulfillment Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)
*   <~>[fulfillment Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate)


---
*Content truncated at "Updates" section*