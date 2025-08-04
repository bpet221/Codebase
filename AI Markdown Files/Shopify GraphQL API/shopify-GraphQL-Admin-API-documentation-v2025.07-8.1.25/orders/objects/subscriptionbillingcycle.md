---
title: "SubscriptionBillingCycle"
description: "Shopify GraphQL Admin API documentation for subscriptionbillingcycle"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: SubscriptionBillingCycle - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle

Markdown Content:
SubscriptionBillingCycle - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutations)
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

[Anchor to SubscriptionBillingCycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#top)
Subscription Billing Cycle
==========================

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

A subscription billing cycle.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#fields)Fields
-------------------------------------------------------------------------------------------------------------------

[Anchor to billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.billingAttemptExpectedDate)billing Attempt Expected Date

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date on which the billing attempt is expected to be made.

[Anchor to billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.billingAttempts)billing Attempts

•[Subscription Billing Attempt Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection)

non-null

The list of billing attempts associated with the billing cycle.

Show fields

[Anchor to cycleEndAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.cycleEndAt)cycle End At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The end date of the billing cycle.

[Anchor to cycleIndex](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.cycleIndex)cycle Index

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The index of the billing cycle.

[Anchor to cycleStartAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.cycleStartAt)cycle Start At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The start date of the billing cycle.

[Anchor to edited](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.edited)edited

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this billing cycle was edited.

[Anchor to editedContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.editedContract)edited Contract

•[Subscription Billing Cycle Edited Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract)

The active edited contract for the billing cycle.

Show fields

[Anchor to skipped](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.skipped)skipped

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this billing cycle was skipped.

[Anchor to sourceContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.sourceContract)source Contract

•[Subscription Contract!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

non-null

The subscription contract that the billing cycle belongs to.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#field-SubscriptionBillingCycle.fields.status)status

•[Subscription Billing Cycle Billing Cycle Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleBillingCycleStatus)

non-null

The status of the billing cycle.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[SubscriptionBillingCycleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#field-nodes)
*   {}[SubscriptionBillingCycleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge#field-node)
*   {}[SubscriptionBillingCycleEditedContract.billingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-billingCycles)
*   {}[SubscriptionDraft.billingCycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-billingCycle)
*   {}[SubscriptionDraft.concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-concatenatedBillingCycles)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#queries)Queries
----------------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionBillingCycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#query-subscriptionBillingCycle)[subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycle)

•query

Returns a subscription billing cycle found either by cycle index or date.

Show fields

[Anchor to subscriptionBillingCycleBulkResults](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#query-subscriptionBillingCycleBulkResults)[subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)

•query

Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID. This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

Show fields

[Anchor to subscriptionBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#query-subscriptionBillingCycles)[subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

•query

Returns subscription billing cycles for a contract ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>SubscriptionBillingCycle Queries
-----------------------------------

### Queried by

*   <?>[subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/SubscriptionBillingCycle)
*   <?>[subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/SubscriptionBillingCycleConnection)
*   <?>[subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/SubscriptionBillingCycleConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionBillingCycleEditDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutation-subscriptionBillingCycleEditDelete)[subscription Billing Cycle Edit Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)

•mutation

Delete the schedule and contract edits of the selected subscription billing cycle.

Show payload

[Anchor to subscriptionBillingCycleEditsDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutation-subscriptionBillingCycleEditsDelete)[subscription Billing Cycle Edits Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)

•mutation

Delete the current and future schedule and contract edits of a list of subscription billing cycles.

Show payload

[Anchor to subscriptionBillingCycleScheduleEdit](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutation-subscriptionBillingCycleScheduleEdit)[subscription Billing Cycle Schedule Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

•mutation

Modify the schedule of a specific billing cycle.

Show payload

[Anchor to subscriptionBillingCycleSkip](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutation-subscriptionBillingCycleSkip)[subscription Billing Cycle Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

•mutation

Skips a Subscription Billing Cycle.

Show payload

[Anchor to subscriptionBillingCycleUnskip](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptionbillingcycle#mutation-subscriptionBillingCycleUnskip)[subscription Billing Cycle Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

•mutation

Unskips a Subscription Billing Cycle.

Show payload

* * *

Was this section helpful?

Yes No

<~>SubscriptionBillingCycle Mutations
-------------------------------------

### Mutated by

*   <~>[subscription Billing Cycle Edit Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)
*   <~>[subscription Billing Cycle Edits Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)
*   <~>[subscription Billing Cycle Schedule Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)
*   <~>[subscription Billing Cycle Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)
*   <~>[subscription Billing Cycle Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)


---
*Content truncated at "Updates" section*