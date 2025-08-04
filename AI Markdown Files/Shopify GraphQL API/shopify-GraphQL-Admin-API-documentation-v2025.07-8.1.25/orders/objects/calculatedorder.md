---
title: "CalculatedOrder"
description: "Shopify GraphQL Admin API documentation for calculatedorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CalculatedOrder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder

Markdown Content:
CalculatedOrder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#main-content)

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
*   
Orders

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Additional Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/additionalfee)
        *   [Additional Fee Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/additionalfeesale)
        *   [Adjustment Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/adjustmentsale)
        *   [Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/attribute)
        *   [Automatic Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/automaticdiscountapplication)
        *   [Calculated Automatic Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedautomaticdiscountapplication)
        *   [Calculated Discount Allocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddiscountallocation)
        *   [Calculated Discount Code Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddiscountcodeapplication)
        *   [Calculated Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder)
        *   [Calculated Draft Order Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorderlineitem)
        *   [Calculated Exchange Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedexchangelineitem)
        *   [Calculated Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedlineitem)
        *   [Calculated Manual Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedmanualdiscountapplication)
        *   [Calculated Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#interfaces)
        *   [Calculated Restocking Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedrestockingfee)
        *   [Calculated Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedreturn)
        *   [Calculated Return Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedreturnlineitem)
        *   [Calculated Return Shipping Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedreturnshippingfee)
        *   [Calculated Script Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedscriptdiscountapplication)
        *   [Calculated Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedshippingline)
        *   [Card Payment Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/cardpaymentdetails)
        *   [Cash Rounding Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashroundingadjustment)
        *   [Currency Exchange Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyexchangeadjustment)
        *   [Currency Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencysetting)
        *   [Discount Allocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountallocation)
        *   [Discount Code Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodeapplication)
        *   [Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder)
        *   [Draft Order Applied Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderapplieddiscount)
        *   [Draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderavailabledeliveryoptions)
        *   [Draft Order Bundle Added Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderbundleaddedwarning)
        *   [Draft Order Discount Not Applied Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderdiscountnotappliedwarning)
        *   [Draft Order Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderlineitem)
        *   [Draft Order Market Region Country Code Not Supported Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftordermarketregioncountrycodenotsupportedwarning)
        *   [Draft Order Platform Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderplatformdiscount)
        *   [Draft Order Platform Discount Allocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorderplatformdiscountallocation)
        *   [Draft Order Shipping Rate](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftordershippingrate)
        *   [Draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftordertag)
        *   [Duty](https://shopify.dev/docs/api/admin-graphql/latest/objects/duty)
        *   [Duty Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/dutysale)
        *   [Exchange Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/exchangelineitem)
        *   [Fee Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/feesale)
        *   [Gift Card Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/giftcardsale)
        *   [Invoice Return Outcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/invoicereturnoutcome)
        *   [Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem)
        *   [Line Item Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitemgroup)
        *   [Line Item Selling Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitemsellingplan)
        *   [Local Payment Methods Payment Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/localpaymentmethodspaymentdetails)
        *   [Manual Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/manualdiscountapplication)
        *   [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order)
        *   [Order Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderadjustment)
        *   [Order Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderagreement)
        *   [Order App](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderapp)
        *   [Order Cancellation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordercancellation)
        *   [Order Create Manual Payment Order Create Manual Payment Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordercreatemanualpaymentordercreatemanualpaymenterror)
        *   [Order Edit Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordereditagreement)
        *   [Order Payment Collection Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderpaymentcollectiondetails)
        *   [Order Risk](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderrisk)
        *   [Order Risk Assessment](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderriskassessment)
        *   [Order Risk Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderrisksummary)
        *   [Order Staged Change Add Custom Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangeaddcustomitem)
        *   [Order Staged Change Add Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangeaddlineitemdiscount)
        *   [Order Staged Change Add Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangeaddshippingline)
        *   [Order Staged Change Add Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangeaddvariant)
        *   [Order Staged Change Decrement Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangedecrementitem)
        *   [Order Staged Change Increment Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangeincrementitem)
        *   [Order Staged Change Remove Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderstagedchangeremoveshippingline)
        *   [Order Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction)
        *   [Payment Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymentsettings)
        *   [Paypal Wallet Payment Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/paypalwalletpaymentdetails)
        *   [Pickup In Store Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/pickupinstorelocation)
        *   [Product Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/productsale)
        *   [Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund)
        *   [Refund Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/refundagreement)
        *   [Refund Duty](https://shopify.dev/docs/api/admin-graphql/latest/objects/refundduty)
        *   [Refund Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/refundlineitem)
        *   [Refund Return Outcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/refundreturnoutcome)
        *   [Refund Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/refundshippingline)
        *   [Restocking Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/restockingfee)
        *   [Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/return)
        *   [Returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/returnablefulfillment)
        *   [Returnable Fulfillment Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/returnablefulfillmentlineitem)
        *   [Return Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/returnagreement)
        *   [Return Decline](https://shopify.dev/docs/api/admin-graphql/latest/objects/returndecline)
        *   [Return Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/returnlineitem)
        *   [Return Shipping Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/returnshippingfee)
        *   [Reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversedelivery)
        *   [Reverse Delivery Label V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversedeliverylabelv2)
        *   [Reverse Delivery Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversedeliverylineitem)
        *   [Reverse Delivery Shipping Deliverable](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversedeliveryshippingdeliverable)
        *   [Reverse Delivery Tracking V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversedeliverytrackingv2)
        *   [Reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversefulfillmentorder)
        *   [Reverse Fulfillment Order Disposition](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversefulfillmentorderdisposition)
        *   [Reverse Fulfillment Order Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversefulfillmentorderlineitem)
        *   [Reverse Fulfillment Order Third Party Confirmation](https://shopify.dev/docs/api/admin-graphql/latest/objects/reversefulfillmentorderthirdpartyconfirmation)
        *   [Risk Fact](https://shopify.dev/docs/api/admin-graphql/latest/objects/riskfact)
        *   [Sale Additional Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/saleadditionalfee)
        *   [Sale Tax](https://shopify.dev/docs/api/admin-graphql/latest/objects/saletax)
        *   [Script Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/scriptdiscountapplication)
        *   [Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/shippingline)
        *   [Shipping Line Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/shippinglinesale)
        *   [Shipping Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/shippingrefund)
        *   [Shopify Payments Extended Authorization](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsextendedauthorization)
        *   [Shopify Payments Refund Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsrefundset)
        *   [Shopify Payments Transaction Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentstransactionset)
        *   [Shopify Protect Order Eligibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifyprotectordereligibility)
        *   [Shopify Protect Order Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifyprotectordersummary)
        *   [Shop Pay Installments Payment Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppayinstallmentspaymentdetails)
        *   [Subscription Applied Code Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionappliedcodediscount)
        *   [Subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingattempt)
        *   [Subscription Billing Attempt Generic Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingattemptgenericerror)
        *   [Subscription Billing Attempt Insufficient Stock Product Variants Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingattemptinsufficientstockproductvariantserror)
        *   [Subscription Billing Attempt Out Of Stock Product Variants Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingattemptoutofstockproductvariantserror)
        *   [Subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle)
        *   [Subscription Billing Cycle Edited Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycleeditedcontract)
        *   [Subscription Billing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingpolicy)
        *   [Subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract)
        *   [Subscription Cycle Price Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncyclepriceadjustment)
        *   [Subscription Delivery Method Local Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverymethodlocaldelivery)
        *   [Subscription Delivery Method Local Delivery Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverymethodlocaldeliveryoption)
        *   [Subscription Delivery Method Pickup](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverymethodpickup)
        *   [Subscription Delivery Method Pickup Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverymethodpickupoption)
        *   [Subscription Delivery Method Shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverymethodshipping)
        *   [Subscription Delivery Method Shipping Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverymethodshippingoption)
        *   [Subscription Delivery Option Result Failure](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliveryoptionresultfailure)
        *   [Subscription Delivery Option Result Success](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliveryoptionresultsuccess)
        *   [Subscription Delivery Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondeliverypolicy)
        *   [Subscription Discount Allocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondiscountallocation)
        *   [Subscription Discount Entitled Lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondiscountentitledlines)
        *   [Subscription Discount Fixed Amount Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondiscountfixedamountvalue)
        *   [Subscription Discount Percentage Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondiscountpercentagevalue)
        *   [Subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft)
        *   [Subscription Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline)
        *   [Subscription Local Delivery Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionlocaldeliveryoption)
        *   [Subscription Manual Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionmanualdiscount)
        *   [Subscription Pickup Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionpickupoption)
        *   [Subscription Pricing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionpricingpolicy)
        *   [Subscription Shipping Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionshippingoption)
        *   [Subscription Shipping Option Result Failure](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionshippingoptionresultfailure)
        *   [Subscription Shipping Option Result Success](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionshippingoptionresultsuccess)
        *   [Suggested Order Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/suggestedordertransaction)
        *   [Suggested Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/suggestedrefund)
        *   [Suggested Return Financial Outcome](https://shopify.dev/docs/api/admin-graphql/latest/objects/suggestedreturnfinancialoutcome)
        *   [Suggested Return Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/suggestedreturnrefund)
        *   [Suggested Store Credit Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/suggestedstorecreditrefund)
        *   [Tax Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxline)
        *   [Tender Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/tendertransaction)
        *   [Tender Transaction Credit Card Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/tendertransactioncreditcarddetails)
        *   [Tip Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/tipsale)
        *   [Transaction Fee](https://shopify.dev/docs/api/admin-graphql/latest/objects/transactionfee)
        *   [Unknown Sale](https://shopify.dev/docs/api/admin-graphql/latest/objects/unknownsale)
        *   [Unverified Return Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/unverifiedreturnlineitem)

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

[Anchor to CalculatedOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#top)
Calculated Order
================

object

Requires `read_order_edits` access scope.

An order with edits applied but not saved.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to addedDiscountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.addedDiscountApplications)added Discount Applications

•[Calculated Discount Application Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection)

non-null

Returns only the new discount applications being added to the order in the current edit.

Show fields

[Anchor to addedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.addedLineItems)added Line Items

•[Calculated Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection)

non-null

Returns only the new line items being added to the order during the current edit.

Show fields

[Anchor to cartDiscountAmountSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.cartDiscountAmountSet)cart Discount Amount Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

Amount of the order-level discount (doesn't contain any line item discounts) in shop and presentment currencies.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.lineItems)line Items

•[Calculated Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection)

non-null

Returns all items on the order that existed before starting the edit. Will include any changes that have been made. Will not include line items added during the current edit.

Show fields

[Anchor to notificationPreviewHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.notificationPreviewHtml)notification Preview Html

•[HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

The HTML of the customer notification for the order edit.

[Anchor to notificationPreviewTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.notificationPreviewTitle)notification Preview Title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The customer notification title.

[Anchor to originalOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.originalOrder)original Order

•[Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

non-null

The order without any changes applied.

Show fields

[Anchor to shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.shippingLines)shipping Lines

•[[Calculated Shipping Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedShippingLine)

non-null

Returns the shipping lines on the order that existed before starting the edit. Will include any changes that have been made as well as shipping lines added during the current edit. Returns only the first 250 shipping lines.

Show fields

[Anchor to stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.stagedChanges)staged Changes

•[Order Staged Change Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection)

non-null

List of changes made to the order during the current edit.

Show fields

[Anchor to subtotalLineItemsQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.subtotalLineItemsQuantity)subtotal Line Items Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The sum of the quantities for the line items that contribute to the order's subtotal.

[Anchor to subtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.subtotalPriceSet)subtotal Price Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The subtotal of the line items, in shop and presentment currencies, after all the discounts are applied. The subtotal doesn't include shipping. The subtotal includes taxes for taxes-included orders and excludes taxes for taxes-excluded orders.

Show fields

[Anchor to taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.taxLines)tax Lines

•[[Tax Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

non-null

Taxes charged for the line item.

Show fields

[Anchor to totalOutstandingSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.totalOutstandingSet)total Outstanding Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Total price of the order less the total amount received from the customer in shop and presentment currencies.

Show fields

[Anchor to totalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.totalPriceSet)total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Total amount of the order (includes taxes and discounts) in shop and presentment currencies.

Show fields

[Anchor to committed](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#field-CalculatedOrder.fields.committed)committed

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------

[Anchor to orderEditAddCustomItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditAddCustomItem)[order Edit Add Custom Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)

•mutation

Adds a custom line item to an existing order. For example, you could add a gift wrapping service as a [custom line item](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing#add-a-custom-line-item). To learn how to edit existing orders, refer to [Edit an existing order with Admin API](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditAddLineItemDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditAddLineItemDiscount)[order Edit Add Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

•mutation

Adds a discount to a line item on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditAddShippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditAddShippingLine)[order Edit Add Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

•mutation

Adds a shipping line to an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditAddVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditAddVariant)[order Edit Add Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)

•mutation

Adds a line item from an existing product variant. As of API version 2025-04, the [orderEditAddVariant](https://shopify.dev/api/admin-graphql/latest/mutations/ordereditaddvariant) API will respect the contextual pricing of the variant.

Show payload

[Anchor to orderEditBegin](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditBegin)[order Edit Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)

•mutation

Starts editing an order. Mutations are operating on `OrderEdit`. All order edits start with `orderEditBegin`, have any number of `orderEdit`* mutations made, and end with `orderEditCommit`.

Show payload

[Anchor to orderEditRemoveDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditRemoveDiscount)[order Edit Remove Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)

•mutation

Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditRemoveShippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditRemoveShippingLine)[order Edit Remove Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)

•mutation

Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditSetQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditSetQuantity)[order Edit Set Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)

•mutation

Sets the quantity of a line item on an order that is being edited. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditUpdateDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditUpdateDiscount)[order Edit Update Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateDiscount)

•mutation

Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditUpdateShippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditUpdateShippingLine)[order Edit Update Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

•mutation

Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Show payload

[Anchor to orderEditRemoveLineItemDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#mutation-orderEditRemoveLineItemDiscount)[order Edit Remove Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveLineItemDiscount)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>CalculatedOrder Mutations
----------------------------

### Mutated by

*   <~>[order Edit Add Custom Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)
*   <~>[order Edit Add Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)
*   <~>[order Edit Add Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)
*   <~>[order Edit Add Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)
*   <~>[order Edit Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin)
*   <~>[order Edit Remove Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)
*   <~>[order Edit Remove Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)
*   <~>[order Edit Set Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)
*   <~>[order Edit Update Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateDiscount)
*   <~>[order Edit Update Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculatedorder#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CalculatedOrder Implements
-----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*