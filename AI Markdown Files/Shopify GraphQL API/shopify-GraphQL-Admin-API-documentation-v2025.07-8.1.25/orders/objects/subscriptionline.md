---
title: "SubscriptionLine"
description: "Shopify GraphQL Admin API documentation for subscriptionline"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: SubscriptionLine - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline

Markdown Content:
SubscriptionLine - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

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
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#mutations)
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
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to SubscriptionLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#top)
Subscription Line
=================

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a Subscription Line.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to concatenatedOriginContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.concatenatedOriginContract)concatenated Origin Contract

•[Subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

The origin contract of the line if it was concatenated from another contract.

Show fields

[Anchor to currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.currentPrice)current Price

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The price per unit for the subscription line in the contract's currency.

Show fields

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

List of custom attributes associated to the line item.

Show fields

[Anchor to discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.discountAllocations)discount Allocations

•[[Subscription Discount Allocation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountAllocation)

non-null

Discount allocations.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The unique ID.

[Anchor to lineDiscountedPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.lineDiscountedPrice)line Discounted Price

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

Total line price including all discounts.

Show fields

[Anchor to pricingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.pricingPolicy)pricing Policy

•[Subscription Pricing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy)

Describe the price changes of the line over time.

Show fields

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.productId)product Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The product ID associated with the subscription line.

[Anchor to quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.quantity)quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the unit selected for the subscription line.

[Anchor to requiresShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.requiresShipping)requires Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether physical shipping is required for the variant.

[Anchor to sellingPlanId](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.sellingPlanId)selling Plan Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The selling plan ID associated to the line.

Indicates which selling plan was used to create this contract line initially. The selling plan ID is also used to find the associated delivery profile.

The subscription contract, subscription line, or selling plan might have changed. As a result, the selling plan's attributes might not match the information on the contract.

[Anchor to sellingPlanName](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.sellingPlanName)selling Plan Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The selling plan name associated to the line. This name describes the order line items created from this subscription line for both merchants and customers.

The value can be different from the selling plan's name, because both the selling plan's name and the subscription line's selling_plan_name attribute can be updated independently.

[Anchor to sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.sku)sku

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Variant SKU number of the item associated with the subscription line.

[Anchor to taxable](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.taxable)taxable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the variant is taxable.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Product title of the item associated with the subscription line.

[Anchor to variantId](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.variantId)variant Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The product variant ID associated with the subscription line.

[Anchor to variantImage](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.variantImage)variant Image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image associated with the line item's variant or product.

Show fields

[Anchor to variantTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#field-SubscriptionLine.fields.variantTitle)variant Title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Product variant title of the item associated with the subscription line.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[SubscriptionBillingCycleEditedContract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-lines)
*   {}[SubscriptionContract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-lines)
*   ||-[SubscriptionContractBase.lines](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#field-lines)
*   {}[SubscriptionDiscountEntitledLines.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines#field-lines)
*   {}[SubscriptionDraft.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-lines)
*   {}[SubscriptionDraft.linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-linesAdded)
*   {}[SubscriptionDraft.linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-linesRemoved)
*   <->[SubscriptionLineConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#field-nodes)
*   {}[SubscriptionLineEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLineEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionContractProductChange](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#mutation-subscriptionContractProductChange)[subscription Contract Product Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

•mutation

Allows for the easy change of a Product in a Contract or a Product price change.

Show payload

[Anchor to subscriptionDraftLineAdd](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#mutation-subscriptionDraftLineAdd)[subscription Draft Line Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

•mutation

Adds a subscription line to a subscription draft.

Show payload

[Anchor to subscriptionDraftLineRemove](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#mutation-subscriptionDraftLineRemove)[subscription Draft Line Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

•mutation

Removes a subscription line from a subscription draft.

Show payload

[Anchor to subscriptionDraftLineUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionline#mutation-subscriptionDraftLineUpdate)[subscription Draft Line Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

•mutation

Updates a subscription line on a subscription draft.

Show payload

* * *

Was this section helpful?

Yes No

<~>SubscriptionLine Mutations
-----------------------------

### Mutated by

*   <~>[subscription Contract Product Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)
*   <~>[subscription Draft Line Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)
*   <~>[subscription Draft Line Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)
*   <~>[subscription Draft Line Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)


---
*Content truncated at "Updates" section*