---
title: "CalculatedDraftOrder"
description: "Shopify GraphQL Admin API documentation for calculateddraftorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CalculatedDraftOrder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder

Markdown Content:
CalculatedDraftOrder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#mutations)
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

[Anchor to CalculatedDraftOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#top)
Calculated Draft Order
======================

object

Requires `read_draft_orders` access scope.

The calculated fields for a draft order.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to acceptAutomaticDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.acceptAutomaticDiscounts)accept Automatic Discounts

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

[Anchor to alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.alerts)alerts

•[[Resource Alert!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert)

non-null

The list of alerts raised while calculating.

Show fields

[Anchor to allVariantPricesOverridden](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.allVariantPricesOverridden)all Variant Prices Overridden

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether all variant prices have been overridden.

[Anchor to anyVariantPricesOverridden](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.anyVariantPricesOverridden)any Variant Prices Overridden

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether any variant prices have been overridden.

[Anchor to appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.appliedDiscount)applied Discount

•[Draft Order Applied Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

The custom order-level discount applied.

Show fields

[Anchor to availableShippingRates](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.availableShippingRates)available Shipping Rates

•[[Shipping Rate!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate)

non-null

The available shipping rates. Requires a customer with a valid shipping address and at least one line item.

Show fields

[Anchor to billingAddressMatchesShippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.billingAddressMatchesShippingAddress)billing Address Matches Shipping Address

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the billing address matches the shipping address.

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The shop currency used for calculation.

Show enum values

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The customer who will be sent an invoice.

Show fields

[Anchor to discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.discountCodes)discount Codes

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

All discount codes applied.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.lineItems)line Items

•[[Calculated Draft Order Line Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

non-null

The list of the line items in the calculated draft order.

Show fields

[Anchor to lineItemsSubtotalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.lineItemsSubtotalPrice)line Items Subtotal Price

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

A subtotal of the line items and corresponding discounts, excluding include shipping charges, shipping discounts, taxes, or order discounts.

Show fields

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The assigned phone number.

[Anchor to platformDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.platformDiscounts)platform Discounts

•[[Draft Order Platform Discount!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount)

non-null

The list of platform discounts applied.

Show fields

[Anchor to presentmentCurrencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.presentmentCurrencyCode)presentment Currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The payment currency used for calculation.

Show enum values

[Anchor to purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.purchasingEntity)purchasing Entity

•[Purchasing Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

The purchasing entity.

Show union types

[Anchor to shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.shippingLine)shipping Line

•[Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

The line item containing the shipping information and costs.

Show fields

[Anchor to subtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.subtotalPriceSet)subtotal Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.

Show fields

[Anchor to taxesIncluded](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.taxesIncluded)taxes Included

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the line item prices include taxes.

[Anchor to taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.taxLines)tax Lines

•[[Tax Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

non-null

The list of of taxes lines charged for each line item and shipping line.

Show fields

[Anchor to totalDiscountsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalDiscountsSet)total Discounts Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Total discounts.

Show fields

[Anchor to totalLineItemsPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalLineItemsPriceSet)total Line Items Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Total price of line items.

Show fields

[Anchor to totalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalPriceSet)total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price, includes taxes, shipping charges, and discounts.

Show fields

[Anchor to totalQuantityOfLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalQuantityOfLineItems)total Quantity Of Line Items

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The sum of individual line item quantities. If the draft order has bundle items, this is the sum containing the quantities of individual items in the bundle.

[Anchor to totalShippingPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalShippingPriceSet)total Shipping Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total shipping price.

Show fields

[Anchor to totalTaxSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalTaxSet)total Tax Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total tax.

Show fields

[Anchor to transformerFingerprint](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.transformerFingerprint)transformer Fingerprint

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Fingerprint of the current cart. In order to have bundles work, the fingerprint must be passed to each request as it was previously returned, unmodified.

[Anchor to warnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.warnings)warnings

•[[Draft Order Warning!]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

non-null

The list of warnings raised while calculating.

Show fields

### Deprecated fields

[Anchor to marketName](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.marketName)market Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null Deprecated

[Anchor to marketRegionCountryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.marketRegionCountryCode)market Region Country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null Deprecated

Show enum values

[Anchor to subtotalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.subtotalPrice)subtotal Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalPrice)total Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalShippingPrice)total Shipping Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalTax](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#field-CalculatedDraftOrder.fields.totalTax)total Tax

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#mutations)Mutations
------------------------------------------------------------------------------------------------------------------------

[Anchor to draftOrderCalculate](https://shopify.dev/docs/api/admin-graphql/latest/objects/calculateddraftorder#mutation-draftOrderCalculate)[draft Order Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)

•mutation

Calculates the properties of a draft order. Useful for determining information such as total taxes or price without actually creating a draft order.

Show payload

* * *

Was this section helpful?

Yes No

<~>CalculatedDraftOrder Mutations
---------------------------------

### Mutated by

*   <~>[draft Order Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)


---
*Content truncated at "Updates" section*