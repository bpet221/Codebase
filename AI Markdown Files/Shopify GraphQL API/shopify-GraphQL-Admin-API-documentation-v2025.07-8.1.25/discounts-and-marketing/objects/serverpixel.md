---
title: "ServerPixel"
description: "Shopify GraphQL Admin API documentation for serverpixel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ServerPixel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel

Markdown Content:
ServerPixel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#interfaces)
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

[Anchor to ServerPixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#top)
Server Pixel
============

object

Requires `read_pixels` access scope. Also: The app must have the read_server_pixels access scope.

A server pixel stores configuration for streaming customer interactions to an EventBridge or PubSub endpoint.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#field-ServerPixel.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#field-ServerPixel.fields.status)status

•[Server Pixel Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/ServerPixelStatus)

The current state of this server pixel.

Show enum values

[Anchor to webhookEndpointAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#field-ServerPixel.fields.webhookEndpointAddress)webhook Endpoint Address

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Address of the EventBridge or PubSub endpoint.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#queries)Queries
---------------------------------------------------------------------------------------------------------

[Anchor to serverPixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#query-serverPixel)[server Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/serverPixel)

•query

The server pixel configured by the app.

Show fields

* * *

Was this section helpful?

Yes No

<?>ServerPixel Queries
----------------------

### Queried by

*   <?>[server Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/ServerPixel)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to eventBridgeServerPixelUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#mutation-eventBridgeServerPixelUpdate)[event Bridge Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)

•mutation

Updates the server pixel to connect to an EventBridge endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

Show payload

[Anchor to pubSubServerPixelUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#mutation-pubSubServerPixelUpdate)[pub Sub Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)

•mutation

Updates the server pixel to connect to a Google PubSub endpoint. Running this mutation deletes any previous subscriptions for the server pixel.

Show payload

[Anchor to serverPixelCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#mutation-serverPixelCreate)[server Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

•mutation

Creates a new unconfigured server pixel. A single server pixel can exist for an app and shop combination. If you call this mutation when a server pixel already exists, then an error will return.

Show payload

* * *

Was this section helpful?

Yes No

<~>ServerPixel Mutations
------------------------

### Mutated by

*   <~>[event Bridge Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate)
*   <~>[pub Sub Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubServerPixelUpdate)
*   <~>[server Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverPixelCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/serverpixel#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-ServerPixel Implements
-------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*