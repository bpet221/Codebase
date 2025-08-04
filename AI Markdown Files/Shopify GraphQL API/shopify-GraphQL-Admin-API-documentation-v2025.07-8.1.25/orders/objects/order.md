---
title: "Order"
description: "Shopify GraphQL Admin API documentation for order"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/order"
extraction_method: "jina"
sections: ['Orders', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Order - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/order

Markdown Content:
Order - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interfaces)
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

[Anchor to Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#top)
Order
=====

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

Use the `Order` object when you need to:

*   Display order details on customer account pages or admin dashboards.
*   Create orders for phone sales, wholesale customers, or subscription services.
*   Update order information like shipping addresses, notes, or fulfillment status.
*   Process returns, exchanges, and partial refunds.
*   Generate invoices, receipts, and shipping labels.

The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

* * *

Note

Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

* * *

* * *

Caution

Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

* * *

Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#fields)Fields
------------------------------------------------------------------------------------------------

[Anchor to additionalFees](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.additionalFees)additional Fees

•[[Additional Fee!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee)

non-null

A list of additional fees applied to an order, such as duties, import fees, or [tax lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.additionalFees.taxLines).

Show fields

[Anchor to agreements](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.agreements)agreements

•[Sales Agreement Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SalesAgreementConnection)

non-null

A list of sales agreements associated with the order, such as contracts defining payment terms, or delivery schedules between merchants and customers.

Show fields

[Anchor to alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.alerts)alerts

•[[Resource Alert!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert)

non-null

A list of messages that appear on the **Orders** page in the Shopify admin. These alerts provide merchants with important information about an order's status or required actions.

Show fields

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.app)app

•[Order App](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp)

The application that created the order. For example, "Online Store", "Point of Sale", or a custom app name. Use this to identify the order source for attribution and fulfillment workflows. Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

Show fields

[Anchor to billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.billingAddress)billing Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The billing address associated with the payment method selected by the customer for an order. Returns `null` if no billing address was provided during checkout.

Show fields

[Anchor to billingAddressMatchesShippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.billingAddressMatchesShippingAddress)billing Address Matches Shipping Address

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the billing address matches the [shipping address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingAddress). Returns `true` if both addresses are the same, and `false` if they're different or if an address is missing.

[Anchor to cancellation](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cancellation)cancellation

•[Order Cancellation](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancellation)

Details of an order's cancellation, if it has been canceled. This includes the reason, date, and any [staff notes](https://shopify.dev/api/admin-graphql/latest/objects/OrderCancellation#field-OrderCancellation.fields.staffNote).

Show fields

[Anchor to cancelledAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cancelledAt)cancelled At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was canceled. Returns `null` if the order hasn't been canceled.

[Anchor to cancelReason](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cancelReason)cancel Reason

•[Order Cancel Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

The reason provided for an order cancellation. For example, a merchant might cancel an order if there's insufficient inventory. Returns `null` if the order hasn't been canceled.

Show enum values

[Anchor to canMarkAsPaid](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.canMarkAsPaid)can Mark As Paid

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether an order can be manually marked as paid. Returns `false` if the order is already paid, is canceled, has pending [Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/payouts) transactions, or has a negative payment amount.

[Anchor to canNotifyCustomer](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.canNotifyCustomer)can Notify Customer

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether order notifications can be sent to the customer. Returns `true` if the customer has a valid [email address](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.email).

[Anchor to capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.capturable)capturable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether an authorized payment for an order can be captured. Returns `true` if an authorized payment exists that hasn't been fully captured yet. Learn more about [capturing payments](https://help.shopify.com/en/manual/fulfillment/managing-orders/payments/capturing-payments).

[Anchor to cartDiscountAmountSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cartDiscountAmountSet)cart Discount Amount Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The total discount amount applied at the time the order was created, displayed in both shop and presentment currencies, before returns, refunds, order edits, and cancellations. This field only includes discounts applied to the entire order.

Show fields

[Anchor to channelInformation](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.channelInformation)channel Information

•[Channel Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation)

Details about the sales channel that created the order, such as the [channel app type](https://shopify.dev/docs/api/admin-graphql/latest/objects/channel#field-Channel.fields.channelType) and [channel name](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelDefinition#field-ChannelDefinition.fields.channelName), which helps to track order sources.

Show fields

[Anchor to clientIp](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.clientIp)client Ip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The IP address of the customer who placed the order. Useful for fraud detection and geographic analysis.

[Anchor to closed](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.closed)closed

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether an order is closed. An order is considered closed if all its line items have been fulfilled or canceled, and all financial transactions are complete.

[Anchor to closedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.closedAt)closed At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was closed. Shopify automatically records this timestamp when all items have been fulfilled or canceled, and all financial transactions are complete. Returns `null` if the order isn't closed.

[Anchor to confirmationNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.confirmationNumber)confirmation Number

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A customer-facing order identifier, often shown instead of the sequential order name. It uses a random alphanumeric format (for example, `XPAV284CT`) and isn't guaranteed to be unique across orders.

[Anchor to confirmed](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.confirmed)confirmed

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether inventory has been reserved for an order. Returns `true` if inventory quantities for an order's [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) have been reserved. Learn more about [managing inventory quantities and states](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states).

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when an order was created. This timestamp is set when the customer completes checkout and remains unchanged throughout an order's lifecycle.

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The shop currency when the order was placed. For example, "USD" or "CAD".

Show enum values

[Anchor to currentCartDiscountAmountSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentCartDiscountAmountSet)current Cart Discount Amount Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The current total of all discounts applied to the entire order, after returns, refunds, order edits, and cancellations. This includes discount codes, automatic discounts, and other promotions that affect the whole order rather than individual line items. To get the original discount amount at the time of order creation, use the [`cartDiscountAmountSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cartDiscountAmountSet) field.

Show fields

[Anchor to currentShippingPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentShippingPriceSet)current Shipping Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The current shipping price after applying refunds and discounts. If the parent `order.taxesIncluded` field is true, then this price includes taxes. Otherwise, this field is the pre-tax price.

Show fields

[Anchor to currentSubtotalLineItemsQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentSubtotalLineItemsQuantity)current Subtotal Line Items Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The current sum of the quantities for all line items that contribute to the order's subtotal price, after returns, refunds, order edits, and cancellations.

[Anchor to currentSubtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentSubtotalPriceSet)current Subtotal Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price of the order, after returns and refunds, in shop and presentment currencies. This includes taxes and discounts.

Show fields

[Anchor to currentTaxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTaxLines)current Tax Lines

•[[Tax Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

non-null

A list of all tax lines applied to line items on the order, after returns. Tax line prices represent the total price for all tax lines with the same `rate` and `title`.

Show fields

[Anchor to currentTotalAdditionalFeesSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalAdditionalFeesSet)current Total Additional Fees Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The current total of all additional fees for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations. Additional fees can include charges such as duties, import fees, and special handling.

Show fields

[Anchor to currentTotalDiscountsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDiscountsSet)current Total Discounts Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total amount discounted on the order after returns and refunds, in shop and presentment currencies. This includes both order and line level discounts.

Show fields

[Anchor to currentTotalDutiesSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDutiesSet)current Total Duties Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The current total duties amount for an order, after any returns or modifications. Modifications include returns, refunds, order edits, and cancellations.

Show fields

[Anchor to currentTotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalPriceSet)current Total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price of the order, after returns, in shop and presentment currencies. This includes taxes and discounts.

Show fields

[Anchor to currentTotalTaxSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalTaxSet)current Total Tax Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The sum of the prices of all tax lines applied to line items on the order, after returns and refunds, in shop and presentment currencies.

Show fields

[Anchor to currentTotalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalWeight)current Total Weight

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total weight of the order after returns and refunds, in grams.

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

A list of additional information that has been attached to the order. For example, gift message, delivery instructions, or internal notes.

Show fields

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The customer who placed an order. Returns `null` if an order was created through a checkout without customer authentication, such as a guest checkout. Learn more about [customer accounts](https://help.shopify.com/manual/customers/customer-accounts).

Show fields

[Anchor to customerAcceptsMarketing](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.customerAcceptsMarketing)customer Accepts Marketing

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer agreed to receive marketing emails at the time of purchase. Use this to ensure compliance with marketing consent laws and to segment customers for email campaigns. Learn more about [building customer segments](https://shopify.dev/docs/apps/build/marketing-analytics/customer-segments).

[Anchor to customerJourneySummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.customerJourneySummary)customer Journey Summary

•[Customer Journey Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary)

The customer's visits and interactions with the online store before placing the order. Use this to understand customer behavior, attribution sources, and marketing effectiveness to optimize your sales funnel.

Show fields

[Anchor to customerLocale](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.customerLocale)customer Locale

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The customer's language and region preference at the time of purchase. For example, "en" for English, "fr-CA" for French (Canada), or "es-MX" for Spanish (Mexico). Use this to provide localized customer service and targeted marketing in the customer's preferred language.

[Anchor to discountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.discountApplications)discount Applications

•[Discount Application Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountApplicationConnection)

non-null

A list of discounts that are applied to the order, excluding order edits and refunds. Includes discount codes, automatic discounts, and other promotions that reduce the order total.

Show fields

[Anchor to discountCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.discountCode)discount Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The discount code used for an order. Returns `null` if no discount code was applied.

[Anchor to discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.discountCodes)discount Codes

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The discount codes used for the order. Multiple codes can be applied to a single order.

[Anchor to displayAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.displayAddress)display Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The primary address of the customer, prioritizing shipping address over billing address when both are available. Returns `null` if neither shipping address nor billing address was provided.

Show fields

[Anchor to displayFinancialStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.displayFinancialStatus)display Financial Status

•[Order Display Financial Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFinancialStatus)

An order's financial status for display in the Shopify admin.

Show enum values

[Anchor to displayFulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.displayFulfillmentStatus)display Fulfillment Status

•[Order Display Fulfillment Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFulfillmentStatus)

non-null

The order's fulfillment status that displays in the Shopify admin to merchants. For example, an order might be unfulfilled or scheduled. For detailed processing, use the [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object.

Show enum values

[Anchor to disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.disputes)disputes

•[[Order Dispute Summary!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDisputeSummary)

non-null

A list of payment disputes associated with the order, such as chargebacks or payment inquiries. Disputes occur when customers challenge transactions with their bank or payment provider.

Show fields

[Anchor to dutiesIncluded](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.dutiesIncluded)duties Included

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether duties are included in the subtotal price of the order. Duties are import taxes charged by customs authorities when goods cross international borders.

[Anchor to edited](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.edited)edited

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the order has had any edits applied. For example, adding or removing line items, updating quantities, or changing prices.

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.email)email

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The email address associated with the customer for this order. Used for sending order confirmations, shipping notifications, and other order-related communications. Returns `null` if no email address was provided during checkout.

[Anchor to estimatedTaxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.estimatedTaxes)estimated Taxes

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether taxes on the order are estimated. This field returns `false` when taxes on the order are finalized and aren't subject to any changes.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

A list of events associated with the order. Events track significant changes and activities related to the order, such as creation, payment, fulfillment, and cancellation.

Show fields

[Anchor to fulfillable](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.fulfillable)fulfillable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether there are line items that can be fulfilled. This field returns `false` when the order has no fulfillable line items. For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.

[Anchor to fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.fulfillmentOrders)fulfillment Orders

•[Fulfillment Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

non-null

A list of [fulfillment orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) for an order. Each fulfillment order groups [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems) that are fulfilled together, allowing an order to be processed in parts if needed.

Show fields

[Anchor to fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.fulfillments)fulfillments

•[[Fulfillment!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

non-null

A list of shipments for the order. Fulfillments represent the physical shipment of products to customers.

Show fields

[Anchor to fulfillmentsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.fulfillmentsCount)fulfillments Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The total number of fulfillments for the order, including canceled ones.

Show fields

[Anchor to fullyPaid](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.fullyPaid)fully Paid

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the order has been paid in full. This field returns `true` when the total amount received equals or exceeds the order total.

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the merchant has added a timeline comment to the order.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.lineItems)line Items

•[Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection)

non-null

A list of the order's line items. Line items represent the individual products and quantities that make up the order.

Show fields

[Anchor to localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.localizedFields)localized Fields

•[Localized Field Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection)

non-null

List of localized fields for the resource.

Show fields

[Anchor to merchantBusinessEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.merchantBusinessEntity)merchant Business Entity

•[Business Entity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity)

non-null

The legal business structure that the merchant operates under for this order, such as an LLC, corporation, or partnership. Used for tax reporting, legal compliance, and determining which business entity is responsible for the order.

Show fields

[Anchor to merchantEditable](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.merchantEditable)merchant Editable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the order can be edited by the merchant. Returns `false` for orders that can't be modified, such as canceled orders or orders with specific payment statuses.

[Anchor to merchantEditableErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.merchantEditableErrors)merchant Editable Errors

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A list of reasons why the order can't be edited. For example, canceled orders can't be edited.

[Anchor to merchantOfRecordApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.merchantOfRecordApp)merchant Of Record App

•[Order App](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderApp)

The application acting as the Merchant of Record for the order. The Merchant of Record is responsible for tax collection and remittance.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique identifier for the order that appears on the order page in the Shopify admin and the **Order status** page. For example, "#1001", "EN1001", or "1001-A". This value isn't unique across multiple stores. Use this field to identify orders in the Shopify admin and for order tracking.

[Anchor to netPaymentSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.netPaymentSet)net Payment Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies.

Show fields

[Anchor to nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.nonFulfillableLineItems)non Fulfillable Line Items

•[Line Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection)

non-null

A list of line items that can't be fulfilled. For example, tips and fully refunded line items can't be fulfilled. For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.

Show fields

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The note associated with the order. Contains additional information or instructions added by merchants or customers during the order process. Commonly used for special delivery instructions, gift messages, or internal processing notes.

[Anchor to number](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.number)number

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The order number used to generate the name using the store's configured order number prefix/suffix. This number isn't guaranteed to follow a consecutive integer sequence (e.g. 1, 2, 3..), nor is it guaranteed to be unique across multiple stores, or even for a single store.

[Anchor to originalTotalAdditionalFeesSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.originalTotalAdditionalFeesSet)original Total Additional Fees Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The total amount of all additional fees, such as import fees or taxes, that were applied when an order was created. Returns `null` if additional fees aren't applicable.

Show fields

[Anchor to originalTotalDutiesSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.originalTotalDutiesSet)original Total Duties Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The total amount of duties calculated when an order was created, before any modifications. Modifications include returns, refunds, order edits, and cancellations. Use [`currentTotalDutiesSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.currentTotalDutiesSet) to retrieve the current duties amount after adjustments.

Show fields

[Anchor to originalTotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.originalTotalPriceSet)original Total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price of the order at the time of order creation, in shop and presentment currencies. Use this to compare the original order value against the current total after edits, returns, or refunds.

Show fields

[Anchor to paymentCollectionDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.paymentCollectionDetails)payment Collection Details

•[Order Payment Collection Details!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentCollectionDetails)

non-null

The payment collection details for the order, including payment status, outstanding amounts, and collection information. Use this to understand when and how payments should be collected, especially for orders with deferred or installment payment terms.

Show fields

[Anchor to paymentGatewayNames](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.paymentGatewayNames)payment Gateway Names

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A list of the names of all payment gateways used for the order. For example, "Shopify Payments" and "Cash on Delivery (COD)".

[Anchor to paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.paymentTerms)payment Terms

•[Payment Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms)

The payment terms associated with the order, such as net payment due dates or early payment discounts. Payment terms define when and how an order should be paid. Returns `null` if no specific payment terms were set for the order.

Show fields

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The phone number associated with the customer for this order. Useful for contacting customers about shipping updates, delivery notifications, or order issues. Returns `null` if no phone number was provided during checkout.

[Anchor to poNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.poNumber)po Number

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The purchase order (PO) number that's associated with an order. This is typically provided by business customers who require a PO number for their procurement.

[Anchor to presentmentCurrencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.presentmentCurrencyCode)presentment Currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The currency used by the customer when placing the order. For example, "USD", "EUR", or "CAD". This may differ from the shop's base currency when serving international customers or using multi-currency pricing.

Show enum values

[Anchor to processedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.processedAt)processed At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was processed. This date and time might not match the date and time when the order was created.

[Anchor to publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.publication)publication

•[Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

The sales channel that the order was created from, such as the [Online Store](https://shopify.dev/docs/apps/build/app-surfaces#online-store) or [Shopify POS](https://shopify.dev/docs/apps/build/app-surfaces#point-of-sale).

Show fields

[Anchor to purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.purchasingEntity)purchasing Entity

•[Purchasing Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

The business entity that placed the order, including company details and purchasing relationships. Used for B2B transactions to track which company or organization is responsible for the purchase and payment terms.

Show union types

[Anchor to refundable](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.refundable)refundable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the order can be refunded based on its payment transactions. Returns `false` for orders with no eligible payment transactions, such as fully refunded orders or orders with non-refundable payment methods.

[Anchor to refundDiscrepancySet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.refundDiscrepancySet)refund Discrepancy Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The difference between the suggested and actual refund amount of all refunds that have been applied to the order. A positive value indicates a difference in the merchant's favor, and a negative value indicates a difference in the customer's favor.

Show fields

[Anchor to refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.refunds)refunds

•[[Refund!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

non-null

A list of refunds that have been applied to the order. Refunds represent money returned to customers for returned items, cancellations, or adjustments.

Show fields

[Anchor to registeredSourceUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.registeredSourceUrl)registered Source Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL of the source that the order originated from, if found in the domain registry. Returns `null` if the source URL isn't in the domain registry.

[Anchor to requiresShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.requiresShipping)requires Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the order requires physical shipping to the customer. Returns `false` for digital-only orders (such as gift cards or downloadable products) and `true` for orders with physical products that need delivery. Use this to determine shipping workflows and logistics requirements.

[Anchor to restockable](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.restockable)restockable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether any line items on the order can be restocked into inventory. Returns `false` for digital products, custom items, or items that can't be resold.

[Anchor to retailLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.retailLocation)retail Location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The physical location where a retail order is created or completed, except for draft POS orders completed using the "mark as paid" flow in the Shopify admin, which return `null`. Transactions associated with the order might have been processed at a different location.

Show fields

[Anchor to returns](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.returns)returns

•[Return Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnConnection)

non-null

The returns associated with the order. Contains information about items that customers have requested to return, including return reasons, status, and refund details. Use this to track and manage the return process for order items.

Show fields

[Anchor to returnStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.returnStatus)return Status

•[Order Return Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderReturnStatus)

non-null

The order's aggregated return status for display purposes. Indicates the overall state of returns for the order, helping merchants track and manage the return process.

Show enum values

[Anchor to risk](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.risk)risk

•[Order Risk Summary!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary)

non-null

The risk assessment summary for the order. Provides fraud analysis and risk scoring to help you identify potentially fraudulent orders. Use this to make informed decisions about order fulfillment and payment processing.

Show fields

[Anchor to shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingAddress)shipping Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The shipping address where the order will be delivered. Contains the customer's delivery location for fulfillment and shipping label generation. Returns `null` for digital orders or orders that don't require shipping.

Show fields

[Anchor to shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingLine)shipping Line

•[Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

A summary of all shipping costs on the order. Aggregates shipping charges, discounts, and taxes to provide a single view of delivery costs.

Show fields

[Anchor to shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shippingLines)shipping Lines

•[Shipping Line Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection)

non-null

The shipping methods applied to the order. Each shipping line represents a shipping option chosen during checkout, including the carrier, service level, and cost. Use this to understand shipping charges and delivery options for the order.

Show fields

[Anchor to shopifyProtect](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.shopifyProtect)shopify Protect

•[Shopify Protect Order Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyProtectOrderSummary)

The Shopify Protect details for the order, including fraud protection status and coverage information. Shopify Protect helps protect eligible orders against fraudulent chargebacks. Returns `null` if Shopify Protect is disabled for the shop or the order isn't eligible for protection. Learn more about [Shopify Protect](https://www.shopify.com/protect).

Show fields

[Anchor to sourceIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.sourceIdentifier)source Identifier

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A unique POS or third party order identifier. For example, "1234-12-1000" or "111-98567-54". The [`receiptNumber`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-receiptNumber) field is derived from this value for POS orders.

[Anchor to sourceName](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.sourceName)source Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the source associated with the order, such as "web", "mobile_app", or "pos". Use this field to identify the platform where the order was placed.

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.staffMember)staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The staff member who created or is responsible for the order. Useful for tracking which team member handled phone orders, manual orders, or order modifications. Returns `null` for orders created directly by customers through the online store.

Show fields

[Anchor to statusPageUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.statusPageUrl)status Page Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL where customers can check their order's current status, including tracking information and delivery updates. Provides order tracking links in emails, apps, or customer communications.

Show arguments

### Arguments

[Anchor to audience](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.statusPageUrl.arguments.audience)audience

•[Audience](https://shopify.dev/docs/api/admin-graphql/latest/enums/Audience)

Specifies the intended audience for the status page URL.

Show enum values

[Anchor to notificationUsage](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.statusPageUrl.arguments.notificationUsage)notification Usage

•[Notification Usage](https://shopify.dev/docs/api/admin-graphql/latest/enums/NotificationUsage)

Specifies the intended notification usage for the status page URL.

Show enum values

* * *

[Anchor to subtotalLineItemsQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.subtotalLineItemsQuantity)subtotal Line Items Quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The sum of quantities for all line items that contribute to the order's subtotal price. This excludes quantities for items like tips, shipping costs, or gift cards that don't affect the subtotal. Use this to quickly understand the total item count for pricing calculations.

[Anchor to subtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.subtotalPriceSet)subtotal Price Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies. If `taxesIncluded` is `true`, then the subtotal also includes tax.

Show fields

[Anchor to suggestedRefund](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.suggestedRefund)suggested Refund

•[Suggested Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedRefund)

A calculated refund suggestion for the order based on specified line items, shipping, and duties. Use this to preview refund amounts, taxes, and processing fees before creating an actual refund.

Show fields

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A comma separated list of tags associated with the order. Updating `tags` overwrites any existing tags that were previously added to the order. To add new tags without overwriting existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

[Anchor to taxesIncluded](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.taxesIncluded)taxes Included

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether taxes are included in the subtotal price of the order. When `true`, the subtotal and line item prices include tax amounts. When `false`, taxes are calculated and displayed separately.

[Anchor to taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.taxExempt)tax Exempt

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether taxes are exempt on the order. Returns `true` for orders where the customer or business has a valid tax exemption, such as non-profit organizations or tax-free purchases. Use this to understand if tax calculations were skipped during checkout.

[Anchor to taxLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.taxLines)tax Lines

•[[Tax Line!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

non-null

A list of all tax lines applied to line items on the order, before returns. Tax line prices represent the total price for all tax lines with the same `rate` and `title`.

Show fields

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.test)test

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the order is a test. Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled. A test order can't be converted into a real order and vice versa.

[Anchor to totalCapturableSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalCapturableSet)total Capturable Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The authorized amount that's uncaptured or undercaptured, in shop and presentment currencies. This amount isn't adjusted for returns.

Show fields

[Anchor to totalCashRoundingAdjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalCashRoundingAdjustment)total Cash Rounding Adjustment

•[Cash Rounding Adjustment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashRoundingAdjustment)

non-null

The total rounding adjustment applied to payments or refunds for an order involving cash payments. Applies to some countries where cash transactions are rounded to the nearest currency denomination.

Show fields

[Anchor to totalDiscountsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalDiscountsSet)total Discounts Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The total amount discounted on the order before returns, in shop and presentment currencies. This includes both order and line level discounts.

Show fields

[Anchor to totalOutstandingSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalOutstandingSet)total Outstanding Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total amount not yet transacted for the order, in shop and presentment currencies. A positive value indicates a difference in the merchant's favor (payment from customer to merchant) and a negative value indicates a difference in the customer's favor (refund from merchant to customer).

Show fields

[Anchor to totalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalPriceSet)total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price of the order, before returns, in shop and presentment currencies. This includes taxes and discounts.

Show fields

[Anchor to totalReceivedSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalReceivedSet)total Received Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total amount received from the customer before returns, in shop and presentment currencies.

Show fields

[Anchor to totalRefundedSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalRefundedSet)total Refunded Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total amount that was refunded, in shop and presentment currencies.

Show fields

[Anchor to totalRefundedShippingSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalRefundedShippingSet)total Refunded Shipping Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total amount of shipping that was refunded, in shop and presentment currencies.

Show fields

[Anchor to totalShippingPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalShippingPriceSet)total Shipping Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total shipping costs returned to the customer, in shop and presentment currencies. This includes fees and any related discounts that were refunded.

Show fields

[Anchor to totalTaxSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalTaxSet)total Tax Set

•[Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

The total tax amount before returns, in shop and presentment currencies.

Show fields

[Anchor to totalTipReceivedSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalTipReceivedSet)total Tip Received Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The sum of all tip amounts for the order, in shop and presentment currencies.

Show fields

[Anchor to totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalWeight)total Weight

•[Unsigned Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

The total weight of the order before returns, in grams.

[Anchor to transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.transactions)transactions

•[[Order Transaction!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

non-null

A list of transactions associated with the order.

Show fields

[Anchor to transactionsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.transactionsCount)transactions Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of transactions associated with the order.

Show fields

[Anchor to unpaid](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.unpaid)unpaid

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether no payments have been made for the order.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the order was last modified.

### Deprecated fields

[Anchor to cartDiscountAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.cartDiscountAmount)cart Discount Amount

•[Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

Deprecated

[Anchor to channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.channel)channel

•[Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

Deprecated

Show fields

[Anchor to customerJourney](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.customerJourney)customer Journey

•[Customer Journey](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney)

Deprecated

Show fields

[Anchor to landingPageDisplayText](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.landingPageDisplayText)landing Page Display Text

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to landingPageUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.landingPageUrl)landing Page Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Deprecated

[Anchor to localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.localizationExtensions)localization Extensions

•[Localization Extension Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection)

non-null Deprecated

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to netPayment](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.netPayment)net Payment

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to physicalLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.physicalLocation)physical Location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

Deprecated

Show fields

[Anchor to referralCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.referralCode)referral Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to referrerDisplayText](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.referrerDisplayText)referrer Display Text

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to referrerUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.referrerUrl)referrer Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Deprecated

[Anchor to riskLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.riskLevel)risk Level

•[Order Risk Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskLevel)

non-null Deprecated

Show enum values

[Anchor to risks](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.risks)risks

•[[Order Risk!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRisk)

non-null Deprecated

Show fields

[Anchor to subtotalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.subtotalPrice)subtotal Price

•[Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

Deprecated

[Anchor to totalCapturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalCapturable)total Capturable

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalDiscounts)total Discounts

•[Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

Deprecated

[Anchor to totalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalPrice)total Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalReceived](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalReceived)total Received

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalRefunded](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalRefunded)total Refunded

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalShippingPrice)total Shipping Price

•[Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

non-null Deprecated

[Anchor to totalTax](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalTax)total Tax

•[Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

Deprecated

[Anchor to totalTipReceived](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#field-Order.fields.totalTipReceived)total Tip Received

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CalculatedOrder.originalOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-originalOrder)
*   {}[Company.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-orders)
*   {}[CompanyContact.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-orders)
*   {}[CompanyLocation.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-orders)
*   {}[Customer.lastOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-lastOrder)
*   {}[Customer.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-orders)
*   {}[CustomerMergePreviewDefaultFields.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-orders)
*   {}[DraftOrder.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-order)
*   {}[Fulfillment.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-order)
*   {}[FulfillmentOrder.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-order)
*   {}[GiftCard.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-order)
*   {}[OrderAgreement.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-order)
*   <->[OrderConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#field-nodes)
*   {}[OrderEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEdge#field-node)
*   {}[OrderTransaction.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-order)
*   {}[PaymentTerms.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-order)
*   {}[Refund.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-order)
*   {}[Return.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-order)
*   {}[ReverseFulfillmentOrder.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-order)
*   {}[ShopPayPaymentRequestReceipt.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt#field-order)
*   {}[ShopifyPaymentsDispute.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute#field-order)
*   {}[SubscriptionBillingAttempt.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-order)
*   {}[SubscriptionBillingCycleEditedContract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-orders)
*   {}[SubscriptionContract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-orders)
*   {}[SubscriptionContract.originOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-originOrder)
*   ||-[SubscriptionContractBase.orders](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#field-orders)
*   {}[TenderTransaction.order](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction#field-order)

Show deprecations
### Possible type in

*   [Comment Event Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)
*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#queries)Queries
---------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#query-order)[order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)

•query

The `order` query retrieves an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order) by its ID. This query provides access to comprehensive order information such as customer details, line items, financial data, and fulfillment status.

Use the `order` query to retrieve information associated with the following processes:

*   [Order management and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps)
*   [Financial reporting](https://help.shopify.com/manual/finance)
*   [Customer purchase history](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports) and [transaction analysis](https://shopify.dev/docs/apps/launch/billing/view-charges-earnings#transaction-data-through-the-graphql-admin-api)
*   [Shipping](https://shopify.dev/docs/apps/build/checkout/delivery-shipping) and [inventory management](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)

You can only retrieve the last 60 days worth of orders from a store by default. If you want to access older orders, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions).

For large order datasets, consider using [bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries). Bulk operations handle pagination automatically and allow you to retrieve data asynchronously without being constrained by API rate limits. Learn more about [creating orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate) and [building order management apps](https://shopify.dev/docs/apps/build/orders-fulfillment).

Show fields

[Anchor to orderByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#query-orderByIdentifier)[order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderByIdentifier)

•query

Return an order by an identifier.

Show fields

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#query-orders)[orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)

•query

Returns a list of [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) placed in the store, including data such as order status, customer, and line item details. Use the `orders` query to build reports, analyze sales performance, or automate fulfillment workflows. The `orders` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-sortkey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query).

Show fields

* * *

Was this section helpful?

Yes No

<?>Order Queries
----------------

### Queried by

*   <?>[order](https://shopify.dev/docs/api/admin-graphql/latest/queries/Order)
*   <?>[order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/Order)
*   <?>[orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/OrderConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutations)Mutations
---------------------------------------------------------------------------------------------------------

[Anchor to orderClose](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderClose)[order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderClose)

•mutation

Closes an open order.

Show payload

[Anchor to orderCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderCreate)[order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate)

•mutation

Creates an order with attributes such as customer information, line items, and shipping and billing addresses.

Use the `orderCreate` mutation to programmatically generate orders in scenarios where orders aren't created through the standard checkout process, such as when importing orders from an external system or creating orders for wholesale customers.

The `orderCreate` mutation doesn't support applying multiple discounts, such as discounts on line items. Automatic discounts won't be applied unless you replicate the logic of those discounts in your custom implementation. You can [apply a discount code](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput), but only one discount code can be set for each order.

* * *

Note

If you're using the `orderCreate` mutation with a [trial](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/free-trial) or [development store](https://shopify.dev/docs/api/development-stores), then you can create a maximum of five new orders per minute.

* * *

After you create an order, you can make subsequent edits to the order using one of the following mutations:

*   [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate): Used for simple updates to an order, such as changing the order's note, tags, or customer information.
*   [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin): Used when you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

Show payload

[Anchor to orderCreateManualPayment](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderCreateManualPayment)[order Create Manual Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment)

•mutation

Create a manual payment for an order. You can only create a manual payment for an order if it isn't already fully paid.

Show payload

[Anchor to orderCustomerRemove](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderCustomerRemove)[order Customer Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

•mutation

Removes customer from an order.

Show payload

[Anchor to orderCustomerSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderCustomerSet)[order Customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)

•mutation

Sets a customer on an order.

Show payload

[Anchor to orderEditCommit](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderEditCommit)[order Edit Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit)

•mutation

Applies and saves staged changes to an order. Mutations are operating on `OrderEdit`. All order edits start with `orderEditBegin`, have any number of `orderEdit`* mutations made, and end with `orderEditCommit`.

Show payload

[Anchor to orderInvoiceSend](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderInvoiceSend)[order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend)

•mutation

Sends an email invoice for an order.

Show payload

[Anchor to orderMarkAsPaid](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderMarkAsPaid)[order Mark As Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderMarkAsPaid)

•mutation

Marks an order as paid by recording a payment transaction for the outstanding amount.

Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

*   Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
*   Payments were received offline and need to be recorded in the system
*   Previously authorized payments need to be captured manually
*   Orders require manual payment reconciliation due to external payment processing

The mutation validates that the order can be marked as paid before processing. An order can be marked as paid only if it has a positive outstanding balance and its [financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) isn't already `PAID`. The mutation will either create a new sale transaction for the full outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

After successfully marking an order as paid, the order's financial status is updated to reflect the payment, and payment events are logged for tracking and analytics purposes.

Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) in apps.

Show payload

[Anchor to orderOpen](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderOpen)[order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen)

•mutation

Opens a closed order.

Show payload

[Anchor to orderUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-orderUpdate)[order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate)

•mutation

Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

Show payload

[Anchor to refundCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#mutation-refundCreate)[refund Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

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

* * *

Was this section helpful?

Yes No

<~>Order Mutations
------------------

### Mutated by

*   <~>[order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderClose)
*   <~>[order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreate)
*   <~>[order Create Manual Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment)
*   <~>[order Customer Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)
*   <~>[order Customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)
*   <~>[order Edit Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit)
*   <~>[order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend)
*   <~>[order Mark As Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderMarkAsPaid)
*   <~>[order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderOpen)
*   <~>[order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate)
*   <~>[refund Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasLocalizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-HasLocalizationExtensions)[Has Localization Extensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions)

•interface

[Anchor to HasLocalizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-HasLocalizedFields)[Has Localized Fields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/order#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Order Implements
-------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Localization Extensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions)
*   ||-[Has Localized Fields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*