---
title: "AppRecurringPricing"
description: "Shopify GraphQL Admin API documentation for apprecurringpricing"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppRecurringPricing - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing

Markdown Content:
AppRecurringPricing - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#main-content)

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

[Anchor to AppRecurringPricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#top)
App Recurring Pricing
=====================

object

The pricing information about a subscription app. The object contains an interval (the frequency at which the shop is billed for an app subscription) and a price (the amount to be charged to the subscribing shop at each interval).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#field-AppRecurringPricing.fields.discount)discount

•[App Subscription Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount)

The discount applied to the subscription for a given number of billing intervals.

Show fields

[Anchor to interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#field-AppRecurringPricing.fields.interval)interval

•[App Pricing Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

non-null

The frequency at which the subscribing shop is billed for an app subscription.

Show enum values

[Anchor to planHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#field-AppRecurringPricing.fields.planHandle)plan Handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The app store pricing plan handle.

[Anchor to price](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing#field-AppRecurringPricing.fields.price)price

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The amount and currency to be charged to the subscribing shop every billing interval.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [App Pricing Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails)


---
*Content truncated at "Updates" section*