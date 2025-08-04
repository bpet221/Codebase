---
title: "CustomerVisit"
description: "Shopify GraphQL Admin API documentation for customervisit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerVisit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit

Markdown Content:
CustomerVisit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#interfaces)
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

[Anchor to CustomerVisit](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#top)
Customer Visit
==============

object

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Represents a customer's session visiting a shop's online store, including information about the marketing activity attributed to starting the session.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to landingPage](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.landingPage)landing Page

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

URL of the first page the customer landed on for the session.

[Anchor to landingPageHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.landingPageHtml)landing Page Html

•[HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1.

[Anchor to marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.marketingEvent)marketing Event

•[Marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

Represent actions taken by an app, on behalf of a merchant, to market Shopify resources such as products, collections, and discounts.

Show fields

[Anchor to occurredAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.occurredAt)occurred At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the customer's session occurred.

[Anchor to referralCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.referralCode)referral Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Marketing referral code from the link that the customer clicked to visit the store. Supports the following URL attributes: _ref_, _source_, or _r_. For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.

[Anchor to referralInfoHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.referralInfoHtml)referral Info Html

•[Formatted String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

non-null

Referral information with URLs linked in HTML.

[Anchor to referrerUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.referrerUrl)referrer Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Webpage where the customer clicked a link that sent them to the online store. For example, _[https://randomblog.com/page1](https://randomblog.com/page1)_ or _android-app://com.google.android.gm_.

[Anchor to source](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.source)source

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct, a website domain, QR code, or unknown.

[Anchor to sourceDescription](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.sourceDescription)source Description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Describes the source explicitly for first or last session.

[Anchor to sourceType](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.sourceType)source Type

•[Marketing Tactic](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

Type of marketing tactic.

Show enum values

[Anchor to utmParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#field-CustomerVisit.fields.utmParameters)utm Parameters

•[UTMParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters)

A set of UTM parameters gathered from the URL parameters of the referrer.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CustomerJourney.firstVisit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney#field-firstVisit)
*   {}[CustomerJourney.lastVisit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney#field-lastVisit)
*   {}[CustomerJourneySummary.firstVisit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-firstVisit)
*   {}[CustomerJourneySummary.lastVisit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-lastVisit)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------

[Anchor to CustomerMoment](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#interface-CustomerMoment)[Customer Moment](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/customervisit#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CustomerVisit Implements
---------------------------

### Implements

*   ||-[Customer Moment](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*