---
title: "SubscriptionDraft"
description: "Shopify GraphQL Admin API documentation for subscriptiondraft"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: SubscriptionDraft - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft

Markdown Content:
SubscriptionDraft - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#interfaces)
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

[Anchor to SubscriptionDraft](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#top)
Subscription Draft
==================

object

Requires `read_own_subscription_contracts` access scope.

The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

Use the `SubscriptionDraft` object to:

*   Add, remove, or modify subscription lines and their quantities
*   Manage discounts (add, remove, or update manual and code-based discounts)
*   Configure delivery options and shipping methods
*   Set up billing and delivery policies
*   Manage customer payment methods
*   Add custom attributes and notes to generated orders
*   Configure billing cycles and next billing dates
*   Preview the projected state of the subscription

Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#fields)Fields
------------------------------------------------------------------------------------------------------------

[Anchor to billingCycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.billingCycle)billing Cycle

•[Subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

The billing cycle that the subscription contract will be associated with.

Show fields

[Anchor to billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.billingPolicy)billing Policy

•[Subscription Billing Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy)

non-null

The billing policy for the subscription contract.

Show fields

[Anchor to concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.concatenatedBillingCycles)concatenated Billing Cycles

•[Subscription Billing Cycle Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection)

non-null

The billing cycles of the contracts that will be concatenated to the subscription contract.

Show fields

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The currency used for the subscription contract.

Show enum values

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

A list of the custom attributes to be added to the generated orders.

Show fields

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.customer)customer

•[Customer!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

non-null

The customer to whom the subscription contract belongs.

Show fields

[Anchor to customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.customerPaymentMethod)customer Payment Method

•[Customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

The customer payment method used for the subscription contract.

Show fields

[Anchor to deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.deliveryMethod)delivery Method

•[Subscription Delivery Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

The delivery method for each billing of the subscription contract.

Show union types

[Anchor to deliveryOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.deliveryOptions)delivery Options

•[Subscription Delivery Option Result](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryOptionResult)

The available delivery options for a given delivery address. Returns `null` for pending requests.

Show union types

[Anchor to deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.deliveryPolicy)delivery Policy

•[Subscription Delivery Policy!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy)

non-null

The delivery policy for the subscription contract.

Show fields

[Anchor to deliveryPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.deliveryPrice)delivery Price

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The delivery price for each billing the subscription contract.

Show fields

[Anchor to discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.discounts)discounts

•[Subscription Discount Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

non-null

The list of subscription discounts which will be associated with the subscription contract.

Show fields

[Anchor to discountsAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.discountsAdded)discounts Added

•[Subscription Discount Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

non-null

The list of subscription discounts to be added to the subscription contract.

Show fields

[Anchor to discountsRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.discountsRemoved)discounts Removed

•[Subscription Discount Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

non-null

The list of subscription discounts to be removed from the subscription contract.

Show fields

[Anchor to discountsUpdated](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.discountsUpdated)discounts Updated

•[Subscription Discount Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection)

non-null

The list of subscription discounts to be updated on the subscription contract.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.lines)lines

•[Subscription Line Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

non-null

The list of subscription lines which will be associated with the subscription contract.

Show fields

[Anchor to linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.linesAdded)lines Added

•[Subscription Line Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

non-null

The list of subscription lines to be added to the subscription contract.

Show fields

[Anchor to linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.linesRemoved)lines Removed

•[Subscription Line Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

non-null

The list of subscription lines to be removed from the subscription contract.

Show fields

[Anchor to nextBillingDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.nextBillingDate)next Billing Date

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The next billing date for the subscription contract.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The note field that will be applied to the generated orders.

[Anchor to originalContract](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.originalContract)original Contract

•[Subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

The original subscription contract.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.status)status

•[Subscription Contract Subscription Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus)

The current status of the subscription contract.

Show enum values

[Anchor to shippingOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#field-SubscriptionDraft.fields.shippingOptions)shipping Options

•[Subscription Shipping Option Result](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionShippingOptionResult)

Deprecated

Show union types

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#queries)Queries
---------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionDraft](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#query-subscriptionDraft)[subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionDraft)

•query

Returns a Subscription Draft resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>SubscriptionDraft Queries
----------------------------

### Queried by

*   <?>[subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/SubscriptionDraft)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutations)Mutations
---------------------------------------------------------------------------------------------------------------------

[Anchor to subscriptionBillingCycleContractDraftConcatenate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionBillingCycleContractDraftConcatenate)[subscription Billing Cycle Contract Draft Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)

•mutation

Concatenates a contract to a Subscription Draft.

Show payload

[Anchor to subscriptionBillingCycleContractEdit](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionBillingCycleContractEdit)[subscription Billing Cycle Contract Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)

•mutation

Edit the contents of a subscription contract for the specified billing cycle.

Show payload

[Anchor to subscriptionContractCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionContractCreate)[subscription Contract Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)

•mutation

Creates a Subscription Contract Draft. You can submit all the desired information for the draft using [Subscription Draft Input object](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput). You can also update the draft using the [Subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate) mutation. The draft is not saved until you call the [Subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) mutation.

Show payload

[Anchor to subscriptionContractUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionContractUpdate)[subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)

•mutation

The subscriptionContractUpdate mutation allows you to create a draft of an existing subscription contract. This [draft](https://shopify.dev/api/admin-graphql/latest/objects/SubscriptionDraft) can be reviewed and modified as needed. Once the draft is committed with [subscriptionDraftCommit](https://shopify.dev/api/admin-graphql/latest/mutations/subscriptionDraftCommit), the changes are applied to the original subscription contract.

Show payload

[Anchor to subscriptionDraftDiscountAdd](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftDiscountAdd)[subscription Draft Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)

•mutation

Adds a subscription discount to a subscription draft.

Show payload

[Anchor to subscriptionDraftDiscountCodeApply](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftDiscountCodeApply)[subscription Draft Discount Code Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)

•mutation

Applies a code discount on the subscription draft.

Show payload

[Anchor to subscriptionDraftDiscountRemove](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftDiscountRemove)[subscription Draft Discount Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)

•mutation

Removes a subscription discount from a subscription draft.

Show payload

[Anchor to subscriptionDraftDiscountUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftDiscountUpdate)[subscription Draft Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)

•mutation

Updates a subscription discount on a subscription draft.

Show payload

[Anchor to subscriptionDraftFreeShippingDiscountAdd](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftFreeShippingDiscountAdd)[subscription Draft Free Shipping Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)

•mutation

Adds a subscription free shipping discount to a subscription draft.

Show payload

[Anchor to subscriptionDraftFreeShippingDiscountUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftFreeShippingDiscountUpdate)[subscription Draft Free Shipping Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)

•mutation

Updates a subscription free shipping discount on a subscription draft.

Show payload

[Anchor to subscriptionDraftLineAdd](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftLineAdd)[subscription Draft Line Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)

•mutation

Adds a subscription line to a subscription draft.

Show payload

[Anchor to subscriptionDraftLineRemove](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftLineRemove)[subscription Draft Line Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)

•mutation

Removes a subscription line from a subscription draft.

Show payload

[Anchor to subscriptionDraftLineUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftLineUpdate)[subscription Draft Line Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)

•mutation

Updates a subscription line on a subscription draft.

Show payload

[Anchor to subscriptionDraftUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#mutation-subscriptionDraftUpdate)[subscription Draft Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

•mutation

Updates a Subscription Draft.

Show payload

* * *

Was this section helpful?

Yes No

<~>SubscriptionDraft Mutations
------------------------------

### Mutated by

*   <~>[subscription Billing Cycle Contract Draft Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate)
*   <~>[subscription Billing Cycle Contract Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit)
*   <~>[subscription Contract Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCreate)
*   <~>[subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate)
*   <~>[subscription Draft Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)
*   <~>[subscription Draft Discount Code Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)
*   <~>[subscription Draft Discount Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)
*   <~>[subscription Draft Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)
*   <~>[subscription Draft Free Shipping Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)
*   <~>[subscription Draft Free Shipping Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate)
*   <~>[subscription Draft Line Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd)
*   <~>[subscription Draft Line Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineRemove)
*   <~>[subscription Draft Line Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate)
*   <~>[subscription Draft Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/subscriptiondraft#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-SubscriptionDraft Implements
-------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*