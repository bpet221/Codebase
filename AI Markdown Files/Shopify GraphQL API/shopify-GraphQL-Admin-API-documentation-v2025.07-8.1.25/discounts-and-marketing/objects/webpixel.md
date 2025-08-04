---
title: "WebPixel"
description: "Shopify GraphQL Admin API documentation for webpixel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: WebPixel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel

Markdown Content:
WebPixel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#main-content)

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
        *   [UTMParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/utmparameters)
        *   [Web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#interfaces)

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

[Anchor to WebPixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#top)
Web Pixel
=========

object

Requires `read_pixels` access scope.

The `WebPixel` object enables you to manage JavaScript code snippets that run on an online store and collect [behavioral data](https://shopify.dev/docs/api/web-pixels-api/standard-events) for marketing campaign optimization and analytics.

Learn how to create a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) to subscribe your app to events that are emitted by Shopify.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#fields)Fields
---------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#field-WebPixel.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#field-WebPixel.fields.settings)settings

•[JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

non-null

The [settings object](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings) for the web pixel. This object specifies configuration options that control the web pixel's functionality and behavior. You can find the settings for a web pixel in `extensions/<your_extension_name>/shopify.extension.toml`.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#queries)Queries
------------------------------------------------------------------------------------------------------

[Anchor to webPixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#query-webPixel)[web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPixel)

•query

Returns a [web pixel](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>WebPixel Queries
-------------------

### Queried by

*   <?>[web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/WebPixel)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#mutations)Mutations
------------------------------------------------------------------------------------------------------------

[Anchor to webPixelCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#mutation-webPixelCreate)[web Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)

•mutation

Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by creating a web pixel record on the store where you installed your app.

When you run the `webPixelCreate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

Show payload

[Anchor to webPixelUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#mutation-webPixelUpdate)[web Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

•mutation

Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by updating a web pixel record on the store where you installed your app.

When you run the `webPixelUpdate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

Show payload

* * *

Was this section helpful?

Yes No

<~>WebPixel Mutations
---------------------

### Mutated by

*   <~>[web Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelCreate)
*   <~>[web Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPixelUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/webpixel#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-WebPixel Implements
----------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*