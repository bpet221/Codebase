---
title: "MarketingActivity"
description: "Shopify GraphQL Admin API documentation for marketingactivity"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketingActivity - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity

Markdown Content:
MarketingActivity - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#interfaces)
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

[Anchor to MarketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#top)
Marketing Activity
==================

object

Requires `read_marketing_events` access scope.

The marketing activity resource represents marketing that a merchant created through an app.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#fields)Fields
------------------------------------------------------------------------------------------------------------

[Anchor to activityListUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.activityListUrl)activity List Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL of the marketing activity listing page in the marketing section.

[Anchor to adSpend](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.adSpend)ad Spend

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The amount spent on the marketing activity.

Show fields

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The app which created this marketing activity.

Show fields

[Anchor to appErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.appErrors)app Errors

•[Marketing Activity Extension App Errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityExtensionAppErrors)

The errors generated when an app publishes the marketing activity.

Show fields

[Anchor to budget](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.budget)budget

•[Marketing Budget](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingBudget)

The allocated budget for the marketing activity.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the marketing activity was created.

[Anchor to formData](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.formData)form Data

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The completed content in the marketing activity creation form.

[Anchor to hierarchyLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.hierarchyLevel)hierarchy Level

•[Marketing Activity Hierarchy Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityHierarchyLevel)

The hierarchy level of the marketing activity.

Show enum values

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inMainWorkflowVersion](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.inMainWorkflowVersion)in Main Workflow Version

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the marketing activity is in the main workflow version of the marketing automation.

[Anchor to isExternal](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.isExternal)is External

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

The marketing activity represents an external marketing activity.

[Anchor to marketingChannelType](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.marketingChannelType)marketing Channel Type

•[Marketing Channel!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

non-null

The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.

Show enum values

[Anchor to marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.marketingEvent)marketing Event

•[Marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

Associated marketing event of this marketing activity.

Show fields

[Anchor to parentActivityId](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.parentActivityId)parent Activity Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

ID of the parent activity of this marketing activity.

[Anchor to parentRemoteId](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.parentRemoteId)parent Remote Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

ID of the parent activity of this marketing activity.

[Anchor to sourceAndMedium](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.sourceAndMedium)source And Medium

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A contextual description of the marketing activity based on the platform and tactic used.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.status)status

•[Marketing Activity Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus)

non-null

The current state of the marketing activity.

Show enum values

[Anchor to statusBadgeTypeV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.statusBadgeTypeV2)status Badge Type V2

•[Badge Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/BadgeType)

The severity of the marketing activity's status.

Show enum values

[Anchor to statusLabel](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.statusLabel)status Label

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The rendered status of the marketing activity.

[Anchor to statusTransitionedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.statusTransitionedAt)status Transitioned At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The [date and time](https://help.shopify.com/https://en.wikipedia.org/wiki/ISO_8601) when the activity's status last changed.

[Anchor to tactic](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.tactic)tactic

•[Marketing Tactic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingTactic)

non-null

The method of marketing used for this marketing activity.

Show enum values

[Anchor to targetStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.targetStatus)target Status

•[Marketing Activity Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatus)

The status to which the marketing activity is currently transitioning.

Show enum values

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The marketing activity's title, which is rendered on the marketing listing page.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the marketing activity was updated.

[Anchor to urlParameterValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.urlParameterValue)url Parameter Value

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The value portion of the URL query parameter used in attributing sessions to this activity.

[Anchor to utmParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.utmParameters)utm Parameters

•[UTMParameters](https://shopify.dev/docs/api/admin-graphql/latest/objects/UTMParameters)

The set of [Urchin Tracking Module](https://help.shopify.com/https://en.wikipedia.org/wiki/UTM_parameters) used in the URL for tracking this marketing activity.

Show fields

### Deprecated fields

[Anchor to marketingChannel](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.marketingChannel)marketing Channel

•[Marketing Channel!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingChannel)

non-null Deprecated

Show enum values

[Anchor to statusBadgeType](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#field-MarketingActivity.fields.statusBadgeType)status Badge Type

•[Marketing Activity Status Badge Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivityStatusBadgeType)

Deprecated

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[MarketingActivityConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection#field-nodes)
*   {}[MarketingActivityEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityEdge#field-node)
*   {}[MarketingEngagement.marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-marketingActivity)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#queries)Queries
---------------------------------------------------------------------------------------------------------------

[Anchor to marketingActivities](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#query-marketingActivities)[marketing Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivities)

•query

A list of marketing activities associated with the marketing app.

Show fields

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#query-marketingActivity)[marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivity)

•query

Returns a `MarketingActivity` resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>MarketingActivity Queries
----------------------------

### Queried by

*   <?>[marketing Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketingActivityConnection)
*   <?>[marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/MarketingActivity)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutations)Mutations
---------------------------------------------------------------------------------------------------------------------

[Anchor to marketingActivityCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutation-marketingActivityCreate)[marketing Activity Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)

•mutation

Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

Show payload

[Anchor to marketingActivityCreateExternal](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutation-marketingActivityCreateExternal)[marketing Activity Create External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)

•mutation

Creates a new external marketing activity.

Show payload

[Anchor to marketingActivityUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutation-marketingActivityUpdate)[marketing Activity Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)

•mutation

Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

Show payload

[Anchor to marketingActivityUpdateExternal](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutation-marketingActivityUpdateExternal)[marketing Activity Update External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)

•mutation

Update an external marketing activity.

Show payload

[Anchor to marketingActivityUpsertExternal](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#mutation-marketingActivityUpsertExternal)[marketing Activity Upsert External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

•mutation

Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

Show payload

* * *

Was this section helpful?

Yes No

<~>MarketingActivity Mutations
------------------------------

### Mutated by

*   <~>[marketing Activity Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreate)
*   <~>[marketing Activity Create External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal)
*   <~>[marketing Activity Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdate)
*   <~>[marketing Activity Update External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpdateExternal)
*   <~>[marketing Activity Upsert External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketingactivity#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-MarketingActivity Implements
-------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*