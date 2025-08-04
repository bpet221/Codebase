---
title: "MarketingEvent"
description: "Shopify GraphQL Admin API documentation for marketingevent"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketingEvent - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent

Markdown Content:
MarketingEvent - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#interfaces)
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

[Anchor to MarketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#top)
Marketing Event
===============

object

Requires `read_marketing_events` access scope.

Represents actions that market a merchant's store or products.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The app that the marketing event is attributed to.

Show fields

[Anchor to channelHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.channelHandle)channel Handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager.

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A human-readable description of the marketing event.

[Anchor to endedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.endedAt)ended At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the marketing event ended.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to manageUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.manageUrl)manage Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL where the marketing event can be managed.

[Anchor to marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.marketingChannelType)marketing Channel Type

•[Marketing Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

Show enum values

[Anchor to previewUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.previewUrl)preview Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL where the marketing event can be previewed.

[Anchor to remoteId](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.remoteId)remote Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

An optional ID that helps Shopify validate engagement data.

[Anchor to scheduledToEndAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.scheduledToEndAt)scheduled To End At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the marketing event is scheduled to end.

[Anchor to sourceAndMedium](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.sourceAndMedium)source And Medium

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Where the `MarketingEvent` occurred and what kind of content was used. Because `utmSource` and `utmMedium` are often used interchangeably, this is based on a combination of `marketingChannel`, `referringDomain`, and `type` to provide a consistent representation for any given piece of marketing regardless of the app that created it.

[Anchor to startedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.startedAt)started At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the marketing event started.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.type)type

•[Marketing Tactic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

non-null

The marketing event type.

Show enum values

[Anchor to utmCampaign](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.utmCampaign)utm Campaign

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the marketing campaign.

[Anchor to utmMedium](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.utmMedium)utm Medium

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The medium that the marketing campaign is using. Example values: `cpc`, `banner`.

[Anchor to utmSource](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.utmSource)utm Source

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The referrer of the marketing event. Example values: `google`, `newsletter`.

### Deprecated fields

[Anchor to channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.channel)channel

•[Marketing Channel](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

Deprecated

Show enum values

[Anchor to targetTypeDisplayText](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#field-MarketingEvent.fields.targetTypeDisplayText)target Type Display Text

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CustomerVisit.marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-marketingEvent)
*   {}[MarketingActivity.marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-marketingEvent)
*   <->[MarketingEventConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection#field-nodes)
*   {}[MarketingEventEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEventEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#queries)Queries
------------------------------------------------------------------------------------------------------------

[Anchor to marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#query-marketingEvent)[marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvent)

•query

Returns a `MarketingEvent` resource by ID.

Show fields

[Anchor to marketingEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#query-marketingEvents)[marketing Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvents)

•query

A list of marketing events associated with the marketing app.

Show fields

* * *

Was this section helpful?

Yes No

<?>MarketingEvent Queries
-------------------------

### Queried by

*   <?>[marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketingEvent)
*   <?>[marketing Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketingEventConnection)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingevent#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-MarketingEvent Implements
----------------------------

### Implements

*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*