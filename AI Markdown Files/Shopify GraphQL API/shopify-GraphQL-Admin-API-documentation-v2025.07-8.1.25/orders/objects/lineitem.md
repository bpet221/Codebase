---
title: "LineItem"
description: "Shopify GraphQL Admin API documentation for lineitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: LineItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem

Markdown Content:
LineItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#interfaces)
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

[Anchor to LineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#top)
Line Item
=========

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The `LineItem` object represents a single product or service that a customer purchased in an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Each line item is associated with a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and can have multiple [discount allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation). Line items contain details about what was purchased, including the product variant, quantity, pricing, and fulfillment status.

Use the `LineItem` object to manage the following processes:

*   [Track the quantity of items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions) ordered, fulfilled, and unfulfilled.
*   [Calculate prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders), including discounts and taxes.
*   Manage fulfillment through [fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).
*   Manage [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).
*   Handle [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) and recurring orders.

Line items can also include custom attributes and properties, allowing merchants to add specific details about each item in an order. Learn more about [managing orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#fields)Fields
---------------------------------------------------------------------------------------------------

[Anchor to contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.contract)contract

•[Subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

The subscription contract associated with this line item.

Show fields

[Anchor to currentQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.currentQuantity)current Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of units ordered, excluding refunded and removed units.

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

A list of attributes that represent custom features or special requests.

Show fields

[Anchor to discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.discountAllocations)discount Allocations

•[[Discount Allocation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

non-null

The discounts that have been allocated to the line item by discount applications, including discounts allocated to refunded and removed quantities.

Show fields

[Anchor to discountedTotalSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.discountedTotalSet)discounted Total Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total discounted price of the line item in shop and presentment currencies, including refunded and removed quantities. This value doesn't include order-level discounts. Code-based discounts aren't included by default.

Show fields

[Anchor to discountedUnitPriceAfterAllDiscountsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.discountedUnitPriceAfterAllDiscountsSet)discounted Unit Price After All Discounts Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The approximate unit price of the line item in shop and presentment currencies. This value includes discounts applied to refunded and removed quantities.

Show fields

[Anchor to discountedUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.discountedUnitPriceSet)discounted Unit Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The approximate unit price of the line item in shop and presentment currencies. This value includes line-level discounts and discounts applied to refunded and removed quantities. It doesn't include order-level or code-based discounts.

Show fields

[Anchor to duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.duties)duties

•[[Duty!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty)

non-null

The duties associated with the line item.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image associated to the line item's variant.

Show fields

[Anchor to isGiftCard](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.isGiftCard)is Gift Card

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the line item represents the purchase of a gift card.

[Anchor to lineItemGroup](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.lineItemGroup)line Item Group

•[Line Item Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup)

The line item group associated to the line item.

Show fields

[Anchor to merchantEditable](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.merchantEditable)merchant Editable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the line item can be edited or not.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the product, optionally appended with the title of the variant (if applicable).

[Anchor to nonFulfillableQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.nonFulfillableQuantity)non Fulfillable Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The total number of units that can't be fulfilled. For example, if items have been refunded, or the item is not something that can be fulfilled, like a tip. Please see the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object for more fulfillment details.

[Anchor to originalTotalSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.originalTotalSet)original Total Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

In shop and presentment currencies, the total price of the line item when the order was created. This value doesn't include discounts.

Show fields

[Anchor to originalUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.originalUnitPriceSet)original Unit Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

In shop and presentment currencies, the unit price of the line item when the order was created. This value doesn't include discounts.

Show fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The Product object associated with this line item's variant.

Show fields

[Anchor to quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.quantity)quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of units ordered, including refunded and removed units.

[Anchor to refundableQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.refundableQuantity)refundable Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of units ordered, excluding refunded units and removed units.

[Anchor to requiresShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.requiresShipping)requires Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether physical shipping is required for the variant.

[Anchor to restockable](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.restockable)restockable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the line item can be restocked.

[Anchor to sellingPlan](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.sellingPlan)selling Plan

•[Line Item Selling Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemSellingPlan)

The selling plan details associated with the line item.

Show fields

[Anchor to sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.sku)sku

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The variant SKU number.

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.staffMember)staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

Staff attributed to the line item.

Show fields

[Anchor to taxable](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.taxable)taxable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the variant is taxable.

[Anchor to taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.taxLines)tax Lines

•[[Tax Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

non-null

The taxes charged for the line item, including taxes charged for refunded and removed quantities.

Show fields

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the product at time of order creation.

[Anchor to totalDiscountSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.totalDiscountSet)total Discount Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total discount allocated to the line item in shop and presentment currencies, including the total allocated to refunded and removed quantities. This value doesn't include order-level discounts.

Show fields

[Anchor to unfulfilledDiscountedTotalSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.unfulfilledDiscountedTotalSet)unfulfilled Discounted Total Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

In shop and presentment currencies, the total discounted price of the unfulfilled quantity for the line item.

Show fields

[Anchor to unfulfilledOriginalTotalSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.unfulfilledOriginalTotalSet)unfulfilled Original Total Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

In shop and presentment currencies, the total price of the unfulfilled quantity for the line item. This value doesn't include discounts.

Show fields

[Anchor to unfulfilledQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.unfulfilledQuantity)unfulfilled Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of units not yet fulfilled.

[Anchor to variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.variant)variant

•[Product Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The Variant object associated with this line item.

Show fields

[Anchor to variantTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.variantTitle)variant Title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The title of the variant at time of order creation.

[Anchor to vendor](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.vendor)vendor

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the vendor who made the variant.

### Deprecated fields

[Anchor to canRestock](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.canRestock)can Restock

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to discountedTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.discountedTotal)discounted Total

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to discountedUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.discountedUnitPrice)discounted Unit Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to fulfillableQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.fulfillableQuantity)fulfillable Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

[Anchor to fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.fulfillmentService)fulfillment Service

•[Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

Deprecated

Show fields

[Anchor to fulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.fulfillmentStatus)fulfillment Status

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null Deprecated

[Anchor to originalTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.originalTotal)original Total

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to originalUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.originalUnitPrice)original Unit Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.totalDiscount)total Discount

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to unfulfilledDiscountedTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.unfulfilledDiscountedTotal)unfulfilled Discounted Total

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to unfulfilledOriginalTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#field-LineItem.fields.unfulfilledOriginalTotal)unfulfilled Original Total

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[ExchangeLineItem.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem#field-lineItems)
*   {}[FulfillmentLineItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem#field-lineItem)
*   {}[FulfillmentOrderLineItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-lineItem)
*   {}[GiftCardSale.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-lineItem)
*   <->[LineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#field-nodes)
*   {}[LineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemEdge#field-node)
*   {}[Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-lineItems)
*   {}[Order.nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-nonFulfillableLineItems)
*   {}[OrderStagedChangeDecrementItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeDecrementItem#field-lineItem)
*   {}[OrderStagedChangeIncrementItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeIncrementItem#field-lineItem)
*   {}[ProductSale.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-lineItem)
*   {}[RefundLineItem.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-lineItem)
*   {}[TipSale.lineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-lineItem)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-LineItem Implements
----------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*