---
title: "Refund"
description: "Shopify GraphQL Admin API documentation for refund"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/refund"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Refund - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/refund

Markdown Content:
Refund - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#interfaces)
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

[Anchor to Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#top)
Refund
======

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

The `Refund` object provides information to:

*   Process customer returns and issue payments back to customers
*   Handle partial or full refunds for line items with optional inventory restocking
*   Refund shipping costs, duties, and additional fees
*   Issue store credit refunds as an alternative to original payment method returns
*   Track and reconcile all financial transactions related to refunds

Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

* * *

Note

The existence of a `Refund` object doesn't guarantee that the money has been returned to the customer. The actual financial processing happens through associated [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status) of the associated transactions.

* * *

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#fields)Fields
-------------------------------------------------------------------------------------------------

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.createdAt)created At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the refund was created.

[Anchor to duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.duties)duties

•[[Refund Duty!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundDuty)

A list of the refunded duties as part of this refund.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The optional note associated with the refund.

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.order)order

•[Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

non-null

The order associated with the refund.

Show fields

[Anchor to orderAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.orderAdjustments)order Adjustments

•[Order Adjustment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection)

non-null

The order adjustments that are attached with the refund.

Show fields

[Anchor to refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.refundLineItems)refund Line Items

•[Refund Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundLineItemConnection)

non-null

The `RefundLineItem` resources attached to the refund.

Show fields

[Anchor to refundShippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.refundShippingLines)refund Shipping Lines

•[Refund Shipping Line Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection)

non-null

The `RefundShippingLine` resources attached to the refund.

Show fields

[Anchor to return](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.return)return

•[Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

The return associated with the refund.

Show fields

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.staffMember)staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The staff member who created the refund.

Show fields

[Anchor to totalRefundedSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.totalRefundedSet)total Refunded Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total amount across all transactions for the refund, in shop and presentment currencies.

Show fields

[Anchor to transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.transactions)transactions

•[Order Transaction Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection)

non-null

The transactions associated with the refund.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the refund was updated.

[Anchor to totalRefunded](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#field-Refund.fields.totalRefunded)total Refunded

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Order.refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-refunds)
*   {}[RefundAgreement.refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-refund)
*   <->[RefundConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundConnection#field-nodes)
*   {}[RefundEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundEdge#field-node)
*   {}[Return.refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-refunds)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#queries)Queries
----------------------------------------------------------------------------------------------------

[Anchor to refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#query-refund)[refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)

•query

Retrieves a [refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund) by its ID. A refund represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

Use the `refund` query to retrieve information associated with the following workflows:

*   Displaying refund details in order management interfaces
*   Building customer service tools for reviewing refund history
*   Creating reports on refunded amounts and reasons
*   Auditing refund transactions and payment gateway records
*   Tracking inventory impacts from refunded items

A refund is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes [refund line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) that specify which items were refunded. Each refund processes through [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) that handle the actual money transfer back to the customer.

Show fields

* * *

Was this section helpful?

Yes No

<?>Refund Queries
-----------------

### Queried by

*   <?>[refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/Refund)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#mutations)Mutations
----------------------------------------------------------------------------------------------------------

[Anchor to refundCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#mutation-refundCreate)[refund Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

•mutation

Creates a refund for an order, allowing you to process returns and issue payments back to customers.

Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

The `refundCreate` mutation supports various refund scenarios:

*   Refunding line items with optional restocking
*   Refunding shipping costs
*   Refunding duties and import taxes
*   Refunding additional fees
*   Processing refunds through different payment methods
*   Issuing store credit refunds (when enabled)

You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

* * *

Note

The refunding behavior of the `refundCreate` mutation is similar to the [`refundReturn`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund) mutation. The key difference is that the `refundCreate` mutation lets you to specify restocking behavior for line items, whereas the `returnRefund` mutation focuses solely on handling the financial refund without any restocking input.

* * *

Show payload

[Anchor to returnRefund](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#mutation-returnRefund)[return Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>Refund Mutations
-------------------

### Mutated by

*   <~>[refund Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Refund Implements
--------------------

### Implements

*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*