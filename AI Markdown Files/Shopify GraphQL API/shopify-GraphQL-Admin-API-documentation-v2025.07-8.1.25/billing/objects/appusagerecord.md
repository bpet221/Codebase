---
title: "AppUsageRecord"
description: "Shopify GraphQL Admin API documentation for appusagerecord"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppUsageRecord - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord

Markdown Content:
AppUsageRecord - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#main-content)

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
*   
Billing

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [App Credit](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit)
        *   [App Plan V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/appplanv2)
        *   [App Purchase One Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime)
        *   [App Recurring Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing)
        *   [App Revenue Attribution Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord)
        *   [App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription)
        *   [App Subscription Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscount)
        *   [App Subscription Discount Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscountamount)
        *   [App Subscription Discount Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscountpercentage)
        *   [App Subscription Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem)
        *   [App Usage Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing)
        *   [App Usage Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#interfaces)
        *   [Entitlements Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/entitlementstype)
        *   [Markets Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketstype)
        *   [Shop Billing Preferences](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopbillingpreferences)

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

[Anchor to AppUsageRecord](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#top)
App Usage Record
================

object

Requires The staff member must have permission to manage app billing or approve app charges if authenticated with an online access token as described in [https://shopify.dev/apps/auth/oauth/access-modes](https://shopify.dev/apps/auth/oauth/access-modes).

Store usage for app subscriptions with usage pricing.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#field-AppUsageRecord.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the usage record was created.

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#field-AppUsageRecord.fields.description)description

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The description of the app usage record.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#field-AppUsageRecord.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to idempotencyKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#field-AppUsageRecord.fields.idempotencyKey)idempotency Key

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A unique key generated by the client to avoid duplicate charges.

[Anchor to price](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#field-AppUsageRecord.fields.price)price

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The price of the usage record.

Show fields

[Anchor to subscriptionLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#field-AppUsageRecord.fields.subscriptionLineItem)subscription Line Item

•[App Subscription Line Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem)

non-null

Defines the usage pricing plan the merchant is subscribed to.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AppSubscriptionLineItem.usageRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-usageRecords)
*   <->[AppUsageRecordConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#field-nodes)
*   {}[AppUsageRecordEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecordEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#mutations)Mutations
------------------------------------------------------------------------------------------------------------------

[Anchor to appUsageRecordCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#mutation-appUsageRecordCreate)[app Usage Record Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUsageRecordCreate)

•mutation

Enables an app to charge a store for features or services on a per-use basis. The usage charge value is counted towards the `cappedAmount` limit that was specified in the `appUsagePricingDetails` field when the app subscription was created. If you create an app usage charge that causes the total usage charges in a billing interval to exceed the capped amount, then a `Total price exceeds balance remaining` error is returned.

Show payload

* * *

Was this section helpful?

Yes No

<~>AppUsageRecord Mutations
---------------------------

### Mutated by

*   <~>[app Usage Record Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUsageRecordCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AppUsageRecord Implements
----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*