---
title: "FulfillmentOrderAssignedLocation"
description: "Shopify GraphQL Admin API documentation for fulfillmentorderassignedlocation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: FulfillmentOrderAssignedLocation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation

Markdown Content:
FulfillmentOrderAssignedLocation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#main-content)

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

[Anchor to FulfillmentOrderAssignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#top)
Fulfillment Order Assigned Location
===================================

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.

The fulfillment order's assigned location might change in the following cases:

*   The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder) field within the mutation's response.

*   Work on the fulfillment order has not yet begun, which means that the fulfillment order has the [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open), [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold) status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).

If the [fulfillmentOrderMove](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove) mutation has moved the fulfillment order's line items to a new location, but hasn't moved the fulfillment order instance itself, then the original fulfillment order's assigned location doesn't change. This happens if the fulfillment order is being split during the move, or if all line items can be moved to an existing fulfillment order at a new location.

Once the fulfillment order has been taken into work or canceled, which means that the fulfillment order has the [IN_PROGRESS](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-inprogress), [CLOSED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-closed), [CANCELLED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-cancelled), or [INCOMPLETE](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-incomplete) status, `FulfillmentOrderAssignedLocation` acts as a snapshot of the shop's location content. Up-to-date shop's location data may be queried through [location](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-fulfillmentorderassignedlocation-location) connection.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#fields)Fields
---------------------------------------------------------------------------------------------------------------------------

[Anchor to address1](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.address1)address1

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first line of the address for the location.

[Anchor to address2](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.address2)address2

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The second line of the address for the location.

[Anchor to city](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.city)city

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The city of the location.

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.countryCode)country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

The two-letter country code of the location.

Show enum values

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location where the fulfillment is expected to happen. This value might be different from `FulfillmentOrderAssignedLocation` if the location's attributes were updated after the fulfillment order was taken into work of canceled.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the location.

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The phone number of the location.

[Anchor to province](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.province)province

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The province of the location.

[Anchor to zip](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation#field-FulfillmentOrderAssignedLocation.fields.zip)zip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The ZIP code of the location.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[FulfillmentOrder.assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-assignedLocation)


---
*Content truncated at "Updates" section*