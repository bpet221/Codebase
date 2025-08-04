---
title: "Abandonment"
description: "Shopify GraphQL Admin API documentation for abandonment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Abandonment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment

Markdown Content:
Abandonment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#main-content)

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
*   
Discounts And Marketing

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#interfaces)
        *   [All Discount Items](https://shopify.dev/docs/api/admin-graphql/latest/objects/alldiscountitems)
        *   [App Discount Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype)
        *   [Customer Journey](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerjourney)
        *   [Customer Journey Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerjourneysummary)
        *   [Customer Visit](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit)
        *   [Customer Visit Product Info](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisitproductinfo)
        *   [Discount Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountamount)
        *   [Discount Automatic App](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp)
        *   [Discount Automatic Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticbasic)
        *   [Discount Automatic Bxgy](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticbxgy)
        *   [Discount Automatic Free Shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping)
        *   [Discount Automatic Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode)
        *   [Discount Code App](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodeapp)
        *   [Discount Code Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodebasic)
        *   [Discount Code Bxgy](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodebxgy)
        *   [Discount Code Free Shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodefreeshipping)
        *   [Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode)
        *   [Discount Collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcollections)
        *   [Discount Combines With](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcombineswith)
        *   [Discount Countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcountries)
        *   [Discount Country All](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcountryall)
        *   [Discount Customer All](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcustomerall)
        *   [Discount Customer Buys](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcustomerbuys)
        *   [Discount Customer Gets](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcustomergets)
        *   [Discount Customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcustomers)
        *   [Discount Customer Segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcustomersegments)
        *   [Discount Minimum Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountminimumquantity)
        *   [Discount Minimum Subtotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountminimumsubtotal)
        *   [Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountnode)
        *   [Discount On Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountonquantity)
        *   [Discount Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountpercentage)
        *   [Discount Products](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountproducts)
        *   [Discount Purchase Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountpurchaseamount)
        *   [Discount Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountquantity)
        *   [Discount Redeem Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcode)
        *   [Discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation)
        *   [Discount Redeem Code Bulk Creation Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreationcode)
        *   [Discount Shareable Url](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountshareableurl)
        *   [Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity)
        *   [Marketing Activity Extension App Errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivityextensionapperrors)
        *   [Marketing Budget](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingbudget)
        *   [Marketing Engagement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement)
        *   [Marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent)
        *   [Price Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule)
        *   [Price Rule Customer Selection](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulecustomerselection)
        *   [Price Rule Discount Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode)
        *   [Price Rule Entitlement To Prerequisite Quantity Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/priceruleentitlementtoprerequisitequantityratio)
        *   [Price Rule Fixed Amount Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulefixedamountvalue)
        *   [Price Rule Item Entitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/priceruleitementitlements)
        *   [Price Rule Line Item Prerequisites](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulelineitemprerequisites)
        *   [Price Rule Money Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulemoneyrange)
        *   [Price Rule Percent Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulepercentvalue)
        *   [Price Rule Prerequisite To Entitlement Quantity Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/priceruleprerequisitetoentitlementquantityratio)
        *   [Price Rule Quantity Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulequantityrange)
        *   [Price Rule Shareable Url](https://shopify.dev/docs/api/admin-graphql/latest/objects/priceruleshareableurl)
        *   [Price Rule Shipping Line Entitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/priceruleshippinglineentitlements)
        *   [Price Rule Validity Period](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulevalidityperiod)
        *   [Pricing Percentage Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricingpercentagevalue)
        *   [Server Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel)
        *   [UTMParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/utmparameters)
        *   [Web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel)

*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
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

[Anchor to Abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#top)
Abandonment
===========

object

A browse, cart, or checkout that was abandoned by a customer.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to abandonedCheckoutPayload](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.abandonedCheckoutPayload)abandoned Checkout Payload

•[Abandoned Checkout](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout)

The abandonment payload for the abandoned checkout.

Show fields

[Anchor to abandonmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.abandonmentType)abandonment Type

•[Abandonment Abandonment Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentAbandonmentType)

non-null

The abandonment type.

Show enum values

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The app associated with an abandoned checkout.

Show fields

[Anchor to cartUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.cartUrl)cart Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Permalink to the cart page.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the abandonment was created.

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.customer)customer

•[Customer!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

non-null

The customer who abandoned this event.

Show fields

[Anchor to customerHasNoDraftOrderSinceAbandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.customerHasNoDraftOrderSinceAbandonment)customer Has No Draft Order Since Abandonment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer has a draft order since this abandonment has been abandoned.

[Anchor to customerHasNoOrderSinceAbandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.customerHasNoOrderSinceAbandonment)customer Has No Order Since Abandonment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer has completed an order since this checkout has been abandoned.

[Anchor to daysSinceLastAbandonmentEmail](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.daysSinceLastAbandonmentEmail)days Since Last Abandonment Email

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of days since the last abandonment email was sent to the customer.

[Anchor to emailSentAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.emailSentAt)email Sent At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

When the email was sent, if that's the case.

[Anchor to emailState](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.emailState)email State

•[Abandonment Email State](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentEmailState)

The email state (e.g., sent or not sent).

Show enum values

[Anchor to hoursSinceLastAbandonedCheckout](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.hoursSinceLastAbandonedCheckout)hours Since Last Abandoned Checkout

•[Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

The number of hours since the customer has last abandoned a checkout.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inventoryAvailable](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.inventoryAvailable)inventory Available

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the products in abandonment are available.

[Anchor to isFromCustomStorefront](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.isFromCustomStorefront)is From Custom Storefront

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the abandonment event comes from a custom storefront channel.

[Anchor to isFromOnlineStore](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.isFromOnlineStore)is From Online Store

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the abandonment event comes from the Online Store sales channel.

[Anchor to isFromShopApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.isFromShopApp)is From Shop App

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the abandonment event comes from the Shop app sales channel.

[Anchor to isFromShopPay](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.isFromShopPay)is From Shop Pay

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the abandonment event comes from Shop Pay.

[Anchor to isMostSignificantAbandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.isMostSignificantAbandonment)is Most Significant Abandonment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer didn't complete another most significant step since this abandonment.

[Anchor to lastBrowseAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.lastBrowseAbandonmentDate)last Browse Abandonment Date

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date for the latest browse abandonment.

[Anchor to lastCartAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.lastCartAbandonmentDate)last Cart Abandonment Date

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date for the latest cart abandonment.

[Anchor to lastCheckoutAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.lastCheckoutAbandonmentDate)last Checkout Abandonment Date

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date for the latest checkout abandonment.

[Anchor to mostRecentStep](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.mostRecentStep)most Recent Step

•[Abandonment Abandonment Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonmentAbandonmentType)

non-null

The most recent step type.

Show enum values

[Anchor to productsAddedToCart](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.productsAddedToCart)products Added To Cart

•[Customer Visit Product Info Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection)

non-null

The products added to the cart during the customer abandoned visit.

Show fields

[Anchor to productsViewed](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.productsViewed)products Viewed

•[Customer Visit Product Info Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection)

non-null

The products viewed during the customer abandoned visit.

Show fields

[Anchor to visitStartedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#field-Abandonment.fields.visitStartedAt)visit Started At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the visit started.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#queries)Queries
---------------------------------------------------------------------------------------------------------

[Anchor to abandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#query-abandonment)[abandonment](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonment)

•query

Returns an abandonment by ID.

Show fields

[Anchor to abandonmentByAbandonedCheckoutId](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#query-abandonmentByAbandonedCheckoutId)[abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentByAbandonedCheckoutId)

•query

Returns an Abandonment by the Abandoned Checkout ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>Abandonment Queries
----------------------

### Queried by

*   <?>[abandonment](https://shopify.dev/docs/api/admin-graphql/latest/queries/Abandonment)
*   <?>[abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/Abandonment)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to abandonmentUpdateActivitiesDeliveryStatuses](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#mutation-abandonmentUpdateActivitiesDeliveryStatuses)[abandonment Update Activities Delivery Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses)

•mutation

Updates the marketing activities delivery statuses for an abandonment.

Show payload

[Anchor to abandonmentEmailStateUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#mutation-abandonmentEmailStateUpdate)[abandonment Email State Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>Abandonment Mutations
------------------------

### Mutated by

*   <~>[abandonment Update Activities Delivery Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Abandonment Implements
-------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*