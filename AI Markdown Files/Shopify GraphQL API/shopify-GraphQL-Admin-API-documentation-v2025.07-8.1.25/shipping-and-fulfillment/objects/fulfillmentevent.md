---
title: "FulfillmentEvent"
description: "Shopify GraphQL Admin API documentation for fulfillmentevent"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: FulfillmentEvent - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent

Markdown Content:
FulfillmentEvent - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#interfaces)
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

[Anchor to FulfillmentEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#top)
Fulfillment Event
=================

object

Requires `read_orders` access scope.

The fulfillment event that describes the fulfilllment status at a particular time.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to address1](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.address1)address1

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The street address where this fulfillment event occurred.

[Anchor to city](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.city)city

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The city where this fulfillment event occurred.

[Anchor to country](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.country)country

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The country where this fulfillment event occurred.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the fulfillment event was created.

[Anchor to estimatedDeliveryAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.estimatedDeliveryAt)estimated Delivery At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The estimated delivery date and time of the fulfillment.

[Anchor to happenedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.happenedAt)happened At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The time at which this fulfillment event happened.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to latitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.latitude)latitude

•[Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

The latitude where this fulfillment event occurred.

[Anchor to longitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.longitude)longitude

•[Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

The longitude where this fulfillment event occurred.

[Anchor to message](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.message)message

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A message associated with this fulfillment event.

[Anchor to province](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.province)province

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The province where this fulfillment event occurred.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.status)status

•[Fulfillment Event Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentEventStatus)

non-null

The status of this fulfillment event.

Show enum values

[Anchor to zip](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#field-FulfillmentEvent.fields.zip)zip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The zip code of the location where this fulfillment event occurred.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Fulfillment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-events)
*   <->[FulfillmentEventConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#field-nodes)
*   {}[FulfillmentEventEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEventEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentEventCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#mutation-fulfillmentEventCreate)[fulfillment Event Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

•mutation

Creates a fulfillment event for a specified fulfillment.

Show payload

* * *

Was this section helpful?

Yes No

<~>FulfillmentEvent Mutations
-----------------------------

### Mutated by

*   <~>[fulfillment Event Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentEventCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-FulfillmentEvent Implements
------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*