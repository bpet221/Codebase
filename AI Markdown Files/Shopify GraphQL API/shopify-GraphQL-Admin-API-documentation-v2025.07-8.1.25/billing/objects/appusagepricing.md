---
title: "AppUsagePricing"
description: "Shopify GraphQL Admin API documentation for appusagepricing"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppUsagePricing - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing

Markdown Content:
AppUsagePricing - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#main-content)

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

[Anchor to AppUsagePricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#top)
App Usage Pricing
=================

object

Defines a usage pricing model for the app subscription. These charges are variable based on how much the merchant uses the app.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to balanceUsed](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#field-AppUsagePricing.fields.balanceUsed)balance Used

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The total usage records for interval.

Show fields

[Anchor to cappedAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#field-AppUsagePricing.fields.cappedAmount)capped Amount

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The capped amount prevents the merchant from being charged for any usage over that amount during a billing period. This prevents billing from exceeding a maximum threshold over the duration of the billing period. For the merchant to continue using the app after exceeding a capped amount, they would need to agree to a new usage charge.

Show fields

[Anchor to interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#field-AppUsagePricing.fields.interval)interval

•[App Pricing Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

non-null

The frequency with which the app usage records are billed.

Show enum values

[Anchor to terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing#field-AppUsagePricing.fields.terms)terms

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The terms and conditions for app usage pricing. Must be present in order to create usage charges. The terms are presented to the merchant when they approve an app's usage charges.

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [App Pricing Details](https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails)


---
*Content truncated at "Updates" section*