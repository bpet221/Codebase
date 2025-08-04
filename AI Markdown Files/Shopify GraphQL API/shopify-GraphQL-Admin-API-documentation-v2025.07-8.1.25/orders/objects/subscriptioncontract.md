---
title: "SubscriptionContract"
description: "Shopify GraphQL Admin API documentation for subscriptioncontract"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: SubscriptionContract - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract

Markdown Content:
SubscriptionContract - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#interfaces)
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

[Anchor to SubscriptionContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#top)
Subscription Contract
=====================

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a Subscription Contract.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.app)app

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

The subscription app that the subscription contract is registered to.

Show fields

[Anchor to appAdminUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.appAdminUrl)app Admin Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL of the subscription contract page on the subscription app.

[Anchor to billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.billingAttempts)billing Attempts

•[Subscription Billing Attempt Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection)

non-null

The list of billing attempts associated with the subscription contract.

Show fields

[Anchor to billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.billingPolicy)billing Policy

•[Subscription Billing Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy)

non-null

The billing policy associated with the subscription contract.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the subscription contract was created.

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The currency that's used for the subscription contract.

Show enum values

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

A list of the custom attributes to be added to the generated orders.

Show fields

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The customer to whom the subscription contract belongs.

Show fields

[Anchor to customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.customerPaymentMethod)customer Payment Method

•[Customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

The customer payment method that's used for the subscription contract.

Show fields

[Anchor to deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.deliveryMethod)delivery Method

•[Subscription Delivery Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

The delivery method for each billing of the subscription contract.

Show union types

[Anchor to deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.deliveryPolicy)delivery Policy

•[Subscription Delivery Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy)

non-null

The delivery policy associated with the subscription contract.

Show fields

[Anchor to deliveryPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.deliveryPrice)delivery Price

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The delivery price for each billing of the subscription contract.

Show fields

[Anchor to discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.discounts)discounts

•[Subscription Manual Discount Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection)

non-null

The list of subscription discounts associated with the subscription contract.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lastBillingAttemptErrorType](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.lastBillingAttemptErrorType)last Billing Attempt Error Type

•[Subscription Contract Last Billing Error Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractLastBillingErrorType)

The last billing error type of the contract.

Show enum values

[Anchor to lastPaymentStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.lastPaymentStatus)last Payment Status

•[Subscription Contract Last Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractLastPaymentStatus)

The current status of the last payment.

Show enum values

[Anchor to lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.lines)lines

•[Subscription Line Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

non-null

The list of subscription lines associated with the subscription contract.

Show fields

[Anchor to linesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.linesCount)lines Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of lines associated with the subscription contract.

Show fields

[Anchor to nextBillingDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.nextBillingDate)next Billing Date

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The next billing date for the subscription contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The note field that will be applied to the generated orders.

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null

A list of the subscription contract's orders.

Show fields

[Anchor to originOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.originOrder)origin Order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order from which this contract originated.

Show fields

[Anchor to revisionId](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.revisionId)revision Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The revision id of the contract.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.status)status

•[Subscription Contract Subscription Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

non-null

The current status of the subscription contract.

Show enum values

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the subscription contract was updated.

[Anchor to lineCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#field-SubscriptionContract.fields.lineCount)line Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Customer.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-subscriptionContracts)
*   {}[CustomerPaymentMethod.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-subscriptionContracts)
*   {}[LineItem.contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-contract)
*   {}[SubscriptionBillingAttempt.subscriptionContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-subscriptionContract)
*   {}[SubscriptionBillingCycle.sourceContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-sourceContract)
*   <->[SubscriptionContractConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection#field-nodes)
*   {}[SubscriptionContractEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractEdge#field-node)
*   {}[SubscriptionDraft.originalContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-originalContract)
*   {}[SubscriptionLine.concatenatedOriginContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine#field-concatenatedOriginContract)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#queries)Queries
------------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#query-subscriptionContract)[subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContract)

•query

Returns a Subscription Contract resource by ID.

Show fields

[Anchor to subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#query-subscriptionContracts)[subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts)

•query

List Subscription Contracts.

Show fields

* * *

Was this section helpful?

Yes No

<?>SubscriptionContract Queries
-------------------------------

### Queried by

*   <?>[subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/SubscriptionContract)
*   <?>[subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/SubscriptionContractConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutations)Mutations
------------------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionContractActivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractActivate)[subscription Contract Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)

•mutation

Activates a Subscription Contract. Contract status must be either active, paused, or failed.

Show payload

[Anchor to subscriptionContractAtomicCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractAtomicCreate)[subscription Contract Atomic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)

•mutation

Creates a Subscription Contract.

Show payload

[Anchor to subscriptionContractCancel](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractCancel)[subscription Contract Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)

•mutation

Cancels a Subscription Contract.

Show payload

[Anchor to subscriptionContractExpire](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractExpire)[subscription Contract Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)

•mutation

Expires a Subscription Contract.

Show payload

[Anchor to subscriptionContractFail](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractFail)[subscription Contract Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)

•mutation

Fails a Subscription Contract.

Show payload

[Anchor to subscriptionContractPause](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractPause)[subscription Contract Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

•mutation

Pauses a Subscription Contract.

Show payload

[Anchor to subscriptionContractProductChange](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractProductChange)[subscription Contract Product Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)

•mutation

Allows for the easy change of a Product in a Contract or a Product price change.

Show payload

[Anchor to subscriptionContractSetNextBillingDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionContractSetNextBillingDate)[subscription Contract Set Next Billing Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

•mutation

Sets the next billing date of a Subscription Contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

Show payload

[Anchor to subscriptionDraftCommit](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#mutation-subscriptionDraftCommit)[subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

•mutation

Commits the updates of a Subscription Contract draft.

Show payload

* * *

Was this section helpful?

Yes No

<~>SubscriptionContract Mutations
---------------------------------

### Mutated by

*   <~>[subscription Contract Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)
*   <~>[subscription Contract Atomic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractAtomicCreate)
*   <~>[subscription Contract Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)
*   <~>[subscription Contract Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)
*   <~>[subscription Contract Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)
*   <~>[subscription Contract Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)
*   <~>[subscription Contract Product Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractProductChange)
*   <~>[subscription Contract Set Next Billing Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)
*   <~>[subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

[Anchor to SubscriptionContractBase](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptioncontract#interface-SubscriptionContractBase)[Subscription Contract Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase)

•interface

* * *

Was this section helpful?

Yes No

||-SubscriptionContract Implements
----------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
*   ||-[Subscription Contract Base](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase)


---
*Content truncated at "Updates" section*