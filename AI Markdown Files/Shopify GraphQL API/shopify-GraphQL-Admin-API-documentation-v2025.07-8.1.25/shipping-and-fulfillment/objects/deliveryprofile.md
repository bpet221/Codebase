---
title: "DeliveryProfile"
description: "Shopify GraphQL Admin API documentation for deliveryprofile"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DeliveryProfile - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile

Markdown Content:
DeliveryProfile - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#interfaces)
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

[Anchor to DeliveryProfile](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#top)
Delivery Profile
================

object

A shipping profile. In Shopify, a shipping profile is a set of shipping rates scoped to a set of products or variants that can be shipped from selected locations to zones. Learn more about [building with delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to activeMethodDefinitionsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.activeMethodDefinitionsCount)active Method Definitions Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of active shipping rates for the profile.

[Anchor to default](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.default)default

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this is the default profile.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to legacyMode](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.legacyMode)legacy Mode

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this shop has enabled legacy compatibility mode for delivery profiles.

[Anchor to locationsWithoutRatesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.locationsWithoutRatesCount)locations Without Rates Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of locations without rates defined.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the delivery profile.

[Anchor to originLocationCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.originLocationCount)origin Location Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of active origin locations for the profile.

[Anchor to productVariantsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.productVariantsCount)product Variants Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

How many product variants are in this profile.

Show fields

[Anchor to profileItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.profileItems)profile Items

•[Delivery Profile Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection)

non-null

The products and variants associated with this profile.

Show fields

[Anchor to profileLocationGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.profileLocationGroups)profile Location Groups

•[[Delivery Profile Location Group!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup)

non-null

The location groups and associated zones using this profile.

Show fields

[Anchor to sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.sellingPlanGroups)selling Plan Groups

•[Selling Plan Group Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection)

non-null

Selling plan groups associated with the specified delivery profile.

Show fields

[Anchor to unassignedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.unassignedLocations)unassigned Locations

•[[Location!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

non-null

List of locations that haven't been assigned to a location group for this profile.

Show fields

[Anchor to unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.unassignedLocationsPaginated)unassigned Locations Paginated

•[Location Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

non-null

List of locations that have not been assigned to a location group for this profile.

Show fields

[Anchor to zoneCountryCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.zoneCountryCount)zone Country Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of countries with active rates to deliver to.

[Anchor to productVariantsCountV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#field-DeliveryProfile.fields.productVariantsCountV2)product Variants Count V2

•[Delivery Product Variants Count!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProductVariantsCount)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[DeliveryProfileConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#field-nodes)
*   {}[DeliveryProfileEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge#field-node)
*   {}[ProductVariant.deliveryProfile](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-deliveryProfile)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#queries)Queries
-------------------------------------------------------------------------------------------------------------

[Anchor to deliveryProfile](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#query-deliveryProfile)[delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfile)

•query

Returns a Delivery Profile resource by ID.

Show fields

[Anchor to deliveryProfiles](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#query-deliveryProfiles)[delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

•query

Returns a list of saved delivery profiles.

Show fields

* * *

Was this section helpful?

Yes No

<?>DeliveryProfile Queries
--------------------------

### Queried by

*   <?>[delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/DeliveryProfile)
*   <?>[delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/DeliveryProfileConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------

[Anchor to deliveryProfileCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#mutation-deliveryProfileCreate)[delivery Profile Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)

•mutation

Create a delivery profile.

Show payload

[Anchor to deliveryProfileUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#mutation-deliveryProfileUpdate)[delivery Profile Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

•mutation

Update a delivery profile.

Show payload

* * *

Was this section helpful?

Yes No

<~>DeliveryProfile Mutations
----------------------------

### Mutated by

*   <~>[delivery Profile Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileCreate)
*   <~>[delivery Profile Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryProfileUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DeliveryProfile Implements
-----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*