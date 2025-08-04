---
title: "FulfillmentOrderLineItem"
description: "Shopify GraphQL Admin API documentation for fulfillmentorderlineitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: FulfillmentOrderLineItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem

Markdown Content:
FulfillmentOrderLineItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#interfaces)
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

[Anchor to FulfillmentOrderLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#top)
Fulfillment Order Line Item
===========================

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope or `read_third_party_fulfillment_orders` access scope.

Associates an order line item with quantities requiring fulfillment from the respective fulfillment order.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#fields)Fields
-------------------------------------------------------------------------------------------------------------------

[Anchor to financialSummaries](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.financialSummaries)financial Summaries

•[[Fulfillment Order Line Item Financial Summary!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemFinancialSummary)

non-null

The financial summary for the Fulfillment Order's Line Items.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image associated to the line item's variant.

Show fields

[Anchor to inventoryItemId](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.inventoryItemId)inventory Item Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the inventory item.

[Anchor to lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.lineItem)line Item

•[Line Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

non-null

The associated order line item.

Show fields

[Anchor to productTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.productTitle)product Title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the product.

[Anchor to remainingQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.remainingQuantity)remaining Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of units remaining to be fulfilled.

[Anchor to requiresShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.requiresShipping)requires Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether physical shipping is required for the variant.

[Anchor to sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.sku)sku

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The variant SKU number.

[Anchor to totalQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.totalQuantity)total Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total number of units to be fulfilled.

[Anchor to variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.variant)variant

•[Product Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The product variant associated to the fulfillment order line item.

Show fields

[Anchor to variantTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.variantTitle)variant Title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the variant.

[Anchor to vendor](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.vendor)vendor

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the vendor who made the variant.

[Anchor to warnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.warnings)warnings

•[[Fulfillment Order Line Item Warning!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemWarning)

non-null

Warning messages for a fulfillment order line item.

Show fields

[Anchor to weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.weight)weight

•[Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

The weight of a line item unit.

Show fields

[Anchor to originalUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#field-FulfillmentOrderLineItem.fields.originalUnitPriceSet)original Unit Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[FulfillmentOrder.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-lineItems)
*   <->[FulfillmentOrderLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection#field-nodes)
*   {}[FulfillmentOrderLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemEdge#field-node)
*   {}[FulfillmentOrderLocationForMove.availableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-availableLineItems)
*   {}[FulfillmentOrderLocationForMove.unavailableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-unavailableLineItems)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-FulfillmentOrderLineItem Implements
--------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*