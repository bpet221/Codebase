---
title: "MarketingEngagement"
description: "Shopify GraphQL Admin API documentation for marketingengagement"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketingEngagement - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement

Markdown Content:
MarketingEngagement - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#mutations)
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

[Anchor to MarketingEngagement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#top)
Marketing Engagement
====================

object

Marketing engagement represents customer activity taken on a marketing activity or a marketing channel.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to adSpend](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.adSpend)ad Spend

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The total ad spend for the marketing content. Recurring weekly, monthly, or yearly spend needs to be divided into daily amounts.

Show fields

[Anchor to channelHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.channelHandle)channel Handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

[Anchor to clicksCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.clicksCount)clicks Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of interactions, such as a button press or a screen touch, that occurred on the marketing content.

[Anchor to commentsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.commentsCount)comments Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of comments on the marketing content.

[Anchor to complaintsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.complaintsCount)complaints Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of complaints on the marketing content. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were marked as spam. For social media platforms, this represents the number of dislikes or the number of times marketing content was reported.

[Anchor to failsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.failsCount)fails Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of fails for the marketing content. For message-based platforms such as email or SMS, this represents the number of bounced marketing emails or messages.

[Anchor to favoritesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.favoritesCount)favorites Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of favorites, likes, saves, or bookmarks on the marketing content.

[Anchor to firstTimeCustomers](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.firstTimeCustomers)first Time Customers

•[Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

The number of customers that have placed their first order. Doesn't include adjustments such as edits, exchanges, or returns.

[Anchor to impressionsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.impressionsCount)impressions Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of times marketing content was displayed to users, whether or not an interaction occurred. For message-based platforms such as email or SMS, this represents the number of marketing emails or messages that were delivered.

[Anchor to isCumulative](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.isCumulative)is Cumulative

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Specifies how the provided metrics have been aggregated. Cumulative metrics are aggregated from the first day of reporting up to and including `occuredOn`. Non-cumulative metrics are aggregated over the single day indicated in `occuredOn`. Cumulative metrics will monotonically increase in time as each record includes the previous day's values, and so on. Non-cumulative is strongly preferred, and support for cumulative metrics may be deprecated in the future.

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.marketingActivity)marketing Activity

•[Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

The marketing activity object related to this engagement. This corresponds to the marketingActivityId passed in on creation of the engagement.

Show fields

[Anchor to occurredOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.occurredOn)occurred On

•[Date!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

non-null

The calendar date (in the time zone offset specified by the utcOffset field) for which the metrics are being reported. For example, a shop in UTC-5 would set utcOffset="-05:00" and aggregate all engagements from 05:00:00Z up to 29:00:00Z (5am UTC next day) for each call.

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.orders)orders

•[Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

The number of orders generated from the marketing content.

[Anchor to returningCustomers](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.returningCustomers)returning Customers

•[Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

The number of returning customers that have placed an order. Doesn't include adjustments such as edits, exchanges, or returns.

[Anchor to sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.sales)sales

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The amount of sales generated from the marketing content.

Show fields

[Anchor to sendsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.sendsCount)sends Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of marketing emails or messages that were sent.

[Anchor to sessionsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.sessionsCount)sessions Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The number of online store sessions generated from the marketing content.

[Anchor to sharesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.sharesCount)shares Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of times marketing content was distributed or reposted to either one's own network of followers through a social media platform or other digital channels. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were forwarded.

[Anchor to uniqueClicksCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.uniqueClicksCount)unique Clicks Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of unique clicks on the marketing content.

[Anchor to uniqueViewsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.uniqueViewsCount)unique Views Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of all users who saw marketing content since it was published. For message-based platforms such as email or SMS, this represents the number of unique users that opened a marketing email or message. For video-based content, this represents the number of unique users that played video content.

[Anchor to unsubscribesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.unsubscribesCount)unsubscribes Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of unsubscribes on the marketing content. For social media platforms, this represents the number of unfollows.

[Anchor to utcOffset](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.utcOffset)utc Offset

•[Utc Offset!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UtcOffset)

non-null

The UTC offset for the time zone in which the metrics are being reported, in the format `"+HH:MM"` or `"-HH:MM"`. Used in combination with occurredOn when aggregating daily metrics. Must match the account settings for the shop to minimize eventual discrepancies in reporting.

[Anchor to viewsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#field-MarketingEngagement.fields.viewsCount)views Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The total number of views on the marketing content. For message-based platforms such as email or SMS, this represents the number of times marketing emails or messages were opened. For video-based content, this represents the number of times videos were played.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------------

[Anchor to marketingEngagementCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingengagement#mutation-marketingEngagementCreate)[marketing Engagement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)

•mutation

Creates a new marketing engagement for a marketing activity or a marketing channel.

Show payload

* * *

Was this section helpful?

Yes No

<~>MarketingEngagement Mutations
--------------------------------

### Mutated by

*   <~>[marketing Engagement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate)


---
*Content truncated at "Updates" section*