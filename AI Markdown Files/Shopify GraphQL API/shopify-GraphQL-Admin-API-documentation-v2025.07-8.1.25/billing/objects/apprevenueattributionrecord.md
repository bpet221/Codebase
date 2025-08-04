---
title: "AppRevenueAttributionRecord"
description: "Shopify GraphQL Admin API documentation for apprevenueattributionrecord"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppRevenueAttributionRecord - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord

Markdown Content:
AppRevenueAttributionRecord - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#main-content)

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
*   B2B   
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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#interfaces)
        *   [App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription)
        *   [App Subscription Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscount)
        *   [App Subscription Discount Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscountamount)
        *   [App Subscription Discount Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscountpercentage)
        *   [App Subscription Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem)
        *   [App Usage Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing)
        *   [App Usage Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord)
        *   [Entitlements Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/entitlementstype)
        *   [Markets Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketstype)
        *   [Shop Billing Preferences](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopbillingpreferences)

*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to AppRevenueAttributionRecord](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#top)
App Revenue Attribution Record
==============================

object

Requires Access allowed for apps with `app_attributions` scope using offline tokens only. This API is under a private program and is not available to all partners.

Represents app revenue that was captured externally by the partner.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#fields)Fields
----------------------------------------------------------------------------------------------------------------------

[Anchor to amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.amount)amount

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The financial amount captured in this attribution.

Show fields

[Anchor to capturedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.capturedAt)captured At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The timestamp when the financial amount was captured.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The timestamp at which this revenue attribution was issued.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to idempotencyKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.idempotencyKey)idempotency Key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique value submitted during the creation of the app revenue attribution record. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.test)test

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Indicates whether this is a test submission.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#field-AppRevenueAttributionRecord.fields.type)type

•[App Revenue Attribution Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppRevenueAttributionType)

non-null

The type of revenue attribution.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AppInstallation.revenueAttributionRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-revenueAttributionRecords)
*   <->[AppRevenueAttributionRecordConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection#field-nodes)
*   {}[AppRevenueAttributionRecordEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecordEdge#field-node)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AppRevenueAttributionRecord Implements
-----------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*