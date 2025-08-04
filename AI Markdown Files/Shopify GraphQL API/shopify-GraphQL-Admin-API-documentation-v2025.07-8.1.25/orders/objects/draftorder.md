---
title: "DraftOrder"
description: "Shopify GraphQL Admin API documentation for draftorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DraftOrder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder

Markdown Content:
DraftOrder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interfaces)
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

[Anchor to DraftOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#top)
Draft Order
===========

object

Requires `read_draft_orders` access scope.

An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:

*   Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
*   Send invoices to customers to pay with a secure checkout link.
*   Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
*   Re-create orders manually from active sales channels.
*   Sell products at discount or wholesale rates.
*   Take pre-orders.

For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.

**Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#fields)Fields
-----------------------------------------------------------------------------------------------------

[Anchor to acceptAutomaticDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.acceptAutomaticDiscounts)accept Automatic Discounts

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

[Anchor to allowDiscountCodesInCheckout](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.allowDiscountCodesInCheckout)allow Discount Codes In Checkout

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether discount codes are allowed during checkout of this draft order.

[Anchor to allVariantPricesOverridden](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.allVariantPricesOverridden)all Variant Prices Overridden

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether all variant prices have been overridden.

[Anchor to anyVariantPricesOverridden](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.anyVariantPricesOverridden)any Variant Prices Overridden

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether any variant prices have been overridden.

[Anchor to appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.appliedDiscount)applied Discount

•[Draft Order Applied Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

The custom order-level discount applied.

Show fields

[Anchor to billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.billingAddress)billing Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The billing address of the customer.

Show fields

[Anchor to billingAddressMatchesShippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.billingAddressMatchesShippingAddress)billing Address Matches Shipping Address

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the billing address matches the shipping address.

[Anchor to completedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.completedAt)completed At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the draft order was converted to a new order, and had it's status changed to **Completed**.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the draft order was created in Shopify.

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The shop currency used for calculation.

Show enum values

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

The custom information added to the draft order on behalf of the customer.

Show fields

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The customer who will be sent an invoice.

Show fields

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.discountCodes)discount Codes

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

All discount codes applied.

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.email)email

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The email address of the customer, which is used to send notifications.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The list of events associated with the draft order.

Show fields

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the merchant has added timeline comments to the draft order.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to invoiceEmailTemplateSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.invoiceEmailTemplateSubject)invoice Email Template Subject

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The subject defined for the draft invoice email template.

[Anchor to invoiceSentAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.invoiceSentAt)invoice Sent At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the invoice was last emailed to the customer.

[Anchor to invoiceUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.invoiceUrl)invoice Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The link to the checkout, which is sent to the customer in the invoice email.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.lineItems)line Items

•[Draft Order Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection)

non-null

The list of the line items in the draft order.

Show fields

[Anchor to lineItemsSubtotalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.lineItemsSubtotalPrice)line Items Subtotal Price

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

A subtotal of the line items and corresponding discounts, excluding include shipping charges, shipping discounts, taxes, or order discounts.

Show fields

[Anchor to localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.localizedFields)localized Fields

•[Localized Field Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection)

non-null

List of localized fields for the resource.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The identifier for the draft order, which is unique within the store. For example, _#D1223_.

[Anchor to note2](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.note2)note2

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The text from an optional note attached to the draft order.

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order that was created from the draft order.

Show fields

[Anchor to paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.paymentTerms)payment Terms

•[Payment Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

The associated payment terms for this draft order.

Show fields

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The assigned phone number.

[Anchor to platformDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.platformDiscounts)platform Discounts

•[[Draft Order Platform Discount!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount)

non-null

The list of platform discounts applied.

Show fields

[Anchor to poNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.poNumber)po Number

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The purchase order number.

[Anchor to presentmentCurrencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.presentmentCurrencyCode)presentment Currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The payment currency used for calculation.

Show enum values

[Anchor to purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.purchasingEntity)purchasing Entity

•[Purchasing Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

The purchasing entity.

Show union types

[Anchor to ready](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.ready)ready

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the draft order is ready and can be completed. Draft orders might have asynchronous operations that can take time to finish.

[Anchor to reserveInventoryUntil](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.reserveInventoryUntil)reserve Inventory Until

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The time after which inventory will automatically be restocked.

[Anchor to shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.shippingAddress)shipping Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The shipping address of the customer.

Show fields

[Anchor to shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.shippingLine)shipping Line

•[Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

The line item containing the shipping information and costs.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.status)status

•[Draft Order Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderStatus)

non-null

The status of the draft order.

Show enum values

[Anchor to subtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.subtotalPriceSet)subtotal Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.

Show fields

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The comma separated list of tags associated with the draft order. Updating `tags` overwrites any existing tags that were previously added to the draft order. To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

[Anchor to taxesIncluded](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.taxesIncluded)taxes Included

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the line item prices include taxes.

[Anchor to taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.taxExempt)tax Exempt

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the draft order is tax exempt.

[Anchor to taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.taxLines)tax Lines

•[[Tax Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

non-null

The list of of taxes lines charged for each line item and shipping line.

Show fields

[Anchor to totalDiscountsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalDiscountsSet)total Discounts Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Total discounts.

Show fields

[Anchor to totalLineItemsPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalLineItemsPriceSet)total Line Items Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Total price of line items.

Show fields

[Anchor to totalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalPriceSet)total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price, includes taxes, shipping charges, and discounts.

Show fields

[Anchor to totalQuantityOfLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalQuantityOfLineItems)total Quantity Of Line Items

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The sum of individual line item quantities. If the draft order has bundle items, this is the sum containing the quantities of individual items in the bundle.

[Anchor to totalShippingPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalShippingPriceSet)total Shipping Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total shipping price.

Show fields

[Anchor to totalTaxSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalTaxSet)total Tax Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total tax.

Show fields

[Anchor to totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalWeight)total Weight

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total weight in grams of the draft order.

[Anchor to transformerFingerprint](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.transformerFingerprint)transformer Fingerprint

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Fingerprint of the current cart. In order to have bundles work, the fingerprint must be passed to each request as it was previously returned, unmodified.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the draft order was last changed. The format is YYYY-MM-DD HH:mm:ss. For example, 2016-02-05 17:04:01.

[Anchor to visibleToCustomer](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.visibleToCustomer)visible To Customer

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the draft order will be visible to the customer on the self-serve portal.

[Anchor to warnings](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.warnings)warnings

•[[Draft Order Warning!]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

non-null

The list of warnings raised while calculating.

Show fields

### Deprecated fields

[Anchor to localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.localizationExtensions)localization Extensions

•[Localization Extension Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection)

non-null Deprecated

Show fields

[Anchor to marketName](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.marketName)market Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null Deprecated

[Anchor to marketRegionCountryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.marketRegionCountryCode)market Region Country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null Deprecated

Show enum values

[Anchor to subtotalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.subtotalPrice)subtotal Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalPrice)total Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalShippingPrice)total Shipping Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalTax](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#field-DraftOrder.fields.totalTax)total Tax

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Company.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-draftOrders)
*   {}[CompanyContact.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-draftOrders)
*   {}[CompanyLocation.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-draftOrders)
*   {}[CustomerMergePreviewDefaultFields.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-draftOrders)
*   <->[DraftOrderConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#field-nodes)
*   {}[DraftOrderEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge#field-node)
*   {}[PaymentTerms.draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-draftOrder)

Show deprecations
### Possible type in

*   [Comment Event Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#queries)Queries
--------------------------------------------------------------------------------------------------------

[Anchor to draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#query-draftOrder)[draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrder)

•query

Retrieves a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) by its ID. A draft order is an order created by a merchant on behalf of their customers. Draft orders contain all necessary order details (products, pricing, customer information) but require payment to be accepted before they can be converted into [completed orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete).

Use the `draftOrder` query to retrieve information associated with the following workflows:

*   Creating orders for phone, in-person, or chat sales
*   Sending invoices to customers with secure checkout links
*   Managing custom items and additional costs
*   Selling products at discount or wholesale rates
*   Processing pre-orders and saving drafts for later completion

A draft order is associated with a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and contains multiple [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem). Each draft order has a [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status), which indicates its progress through the sales workflow.

Show fields

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#query-draftOrders)[draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

•query

List of saved draft orders.

Show fields

* * *

Was this section helpful?

Yes No

<?>DraftOrder Queries
---------------------

### Queried by

*   <?>[draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/DraftOrder)
*   <?>[draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/DraftOrderConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutations)Mutations
--------------------------------------------------------------------------------------------------------------

[Anchor to draftOrderComplete](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutation-draftOrderComplete)[draft Order Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)

•mutation

Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

*   Mark the order as paid immediately.
*   Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
*   Specify a custom payment amount.
*   Select a specific payment gateway.

* * *

Note

When completing a draft order, inventory is [reserved](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

* * *

Show payload

[Anchor to draftOrderCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutation-draftOrderCreate)[draft Order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)

•mutation

Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) with attributes such as customer information, line items, shipping and billing addresses, and payment terms. Draft orders are useful for merchants that need to:

*   Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
*   Send invoices to customers with a secure checkout link.
*   Use custom items to represent additional costs or products not in inventory.
*   Re-create orders manually from active sales channels.
*   Sell products at discount or wholesale rates.
*   Take pre-orders.

After creating a draft order, you can:

*   Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
*   Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
*   Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
*   Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
*   Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

* * *

Note

When you create a draft order, you can't [reserve or hold inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order by default. However, you can reserve inventory using the [`reserveInventoryUntil`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.reserveInventoryUntil) input.

* * *

Show payload

[Anchor to draftOrderCreateFromOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutation-draftOrderCreateFromOrder)[draft Order Create From Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)

•mutation

Creates a draft order from order.

Show payload

[Anchor to draftOrderDuplicate](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutation-draftOrderDuplicate)[draft Order Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)

•mutation

Duplicates a draft order.

Show payload

[Anchor to draftOrderInvoiceSend](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutation-draftOrderInvoiceSend)[draft Order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)

•mutation

Sends an email invoice for a draft order.

Show payload

[Anchor to draftOrderUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#mutation-draftOrderUpdate)[draft Order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

•mutation

Updates a draft order.

If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

Show payload

* * *

Was this section helpful?

Yes No

<~>DraftOrder Mutations
-----------------------

### Mutated by

*   <~>[draft Order Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete)
*   <~>[draft Order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate)
*   <~>[draft Order Create From Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder)
*   <~>[draft Order Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate)
*   <~>[draft Order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)
*   <~>[draft Order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasLocalizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-HasLocalizationExtensions)[Has Localization Extensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions)

•interface

[Anchor to HasLocalizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-HasLocalizedFields)[Has Localized Fields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/draftorder#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DraftOrder Implements
------------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Localization Extensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions)
*   ||-[Has Localized Fields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*