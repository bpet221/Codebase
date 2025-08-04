---
title: "FinancialSummaryDiscountAllocation"
description: "Shopify GraphQL Admin API documentation for financialsummarydiscountallocation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: FinancialSummaryDiscountAllocation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation

Markdown Content:
FinancialSummaryDiscountAllocation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation#main-content)

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

[Anchor to FinancialSummaryDiscountAllocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation#top)
Financial Summary Discount Allocation
=====================================

object

Requires `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

An amount that's allocated to a line item based on an associated discount application.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation#fields)Fields
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to approximateAllocatedAmountPerItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation#field-FinancialSummaryDiscountAllocation.fields.approximateAllocatedAmountPerItem)approximate Allocated Amount Per Item

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The money amount that's allocated per unit on the associated line based on the discount application in shop and presentment currencies. If the allocated amount for the line cannot be evenly divided by the quantity, then this amount will be an approximate amount, avoiding fractional pennies. For example, if the associated line had a quantity of 3 with a discount of 4 cents, then the discount distribution would be [0.01, 0.01, 0.02]. This field returns the highest number of the distribution. In this example, this would be 0.02.

Show fields

[Anchor to discountApplication](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation#field-FinancialSummaryDiscountAllocation.fields.discountApplication)discount Application

•[Financial Summary Discount Application!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FinancialSummaryDiscountApplication)

non-null

The discount application that the allocated amount originated from.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[FulfillmentOrderLineItemFinancialSummary.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemFinancialSummary#field-discountAllocations)


---
*Content truncated at "Updates" section*