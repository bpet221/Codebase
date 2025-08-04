---
title: "AppSubscriptionLineItem"
description: "Shopify GraphQL Admin API documentation for appsubscriptionlineitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppSubscriptionLineItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem

Markdown Content:
AppSubscriptionLineItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem#main-content)

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

[Anchor to AppSubscriptionLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem#top)
App Subscription Line Item
==========================

object

The plan attached to an app subscription.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem#fields)Fields
------------------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem#field-AppSubscriptionLineItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem#field-AppSubscriptionLineItem.fields.plan)plan

•[App Plan V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPlanV2)

non-null

The pricing model for the app subscription.

Show fields

[Anchor to usageRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem#field-AppSubscriptionLineItem.fields.usageRecords)usage Records

•[App Usage Record Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection)

non-null

A list of the store's usage records for a usage pricing plan.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[AppSubscription.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-lineItems)
*   {}[AppUsageRecord.subscriptionLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-subscriptionLineItem)


---
*Content truncated at "Updates" section*