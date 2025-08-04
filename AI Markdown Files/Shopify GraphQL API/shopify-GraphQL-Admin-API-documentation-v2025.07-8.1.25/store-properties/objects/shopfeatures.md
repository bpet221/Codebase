---
title: "ShopFeatures"
description: "Shopify GraphQL Admin API documentation for shopfeatures"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopFeatures - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures

Markdown Content:
ShopFeatures - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#main-content)

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
*   
Store Properties

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Business Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity)
        *   [Business Entity Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress)
        *   [Cart Transform Eligible Operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformeligibleoperations)
        *   [Cart Transform Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformfeature)
        *   [Currency Formats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats)
        *   [Filter Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/filteroption)
        *   [Limited Pending Order Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/limitedpendingordercount)
        *   [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location)
        *   [Location Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationaddress)
        *   [Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationscondition)
        *   [Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot)
        *   [Location Suggested Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsuggestedaddress)
        *   [Navigation Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/navigationitem)
        *   [Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop)
        *   [Shop Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress)
        *   [Shop Features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures)
        *   [Shop Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopplan)
        *   [Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to ShopFeatures](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#top)
Shop Features
=============

object

Represents the feature set available to the shop. Most fields specify whether a feature is enabled for a shop, and some fields return information related to specific features.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#fields)Fields
-------------------------------------------------------------------------------------------------------

[Anchor to avalaraAvatax](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.avalaraAvatax)avalara Avatax

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop has access to Avalara AvaTax.

[Anchor to branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.branding)branding

•[Shop Branding!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopBranding)

non-null

The branding of the shop, which influences its look and feel in the Shopify admin.

Show enum values

[Anchor to bundles](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.bundles)bundles

•[Bundles Feature!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BundlesFeature)

non-null

Represents the Bundles feature configuration for the shop.

Show fields

[Anchor to captcha](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.captcha)captcha

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop's online store can have CAPTCHA protection.

[Anchor to cartTransform](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.cartTransform)cart Transform

•[Cart Transform Feature!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformFeature)

non-null

Represents the cart transform feature configuration for the shop.

Show fields

[Anchor to dynamicRemarketing](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.dynamicRemarketing)dynamic Remarketing

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop has access to the Google Analytics dynamic remarketing feature.

[Anchor to eligibleForSubscriptionMigration](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.eligibleForSubscriptionMigration)eligible For Subscription Migration

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop can be migrated to use Shopify subscriptions.

[Anchor to eligibleForSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.eligibleForSubscriptions)eligible For Subscriptions

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop is configured properly to sell subscriptions.

[Anchor to giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.giftCards)gift Cards

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop can create gift cards.

[Anchor to harmonizedSystemCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.harmonizedSystemCode)harmonized System Code

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop displays Harmonized System codes on products. This is used for customs when shipping internationally.

[Anchor to legacySubscriptionGatewayEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.legacySubscriptionGatewayEnabled)legacy Subscription Gateway Enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop has enabled a legacy subscription gateway to handle older subscriptions.

[Anchor to liveView](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.liveView)live View

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether to show the Live View metrics in the Shopify admin. Live view is hidden from merchants that are on a trial or don't have a storefront.

[Anchor to paypalExpressSubscriptionGatewayStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.paypalExpressSubscriptionGatewayStatus)paypal Express Subscription Gateway Status

•[Paypal Express Subscriptions Gateway Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaypalExpressSubscriptionsGatewayStatus)

non-null

Whether a shop is configured to sell subscriptions with PayPal Express.

Show enum values

[Anchor to reports](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.reports)reports

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop has access to all reporting features.

[Anchor to sellsSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.sellsSubscriptions)sells Subscriptions

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop has ever had subscription products.

[Anchor to showMetrics](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.showMetrics)show Metrics

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether to show metrics in the Shopify admin. Metrics are hidden for new merchants until they become meaningful.

[Anchor to storefront](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.storefront)storefront

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop has an online store.

[Anchor to unifiedMarkets](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.unifiedMarkets)unified Markets

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop is eligible for Unified Markets.

[Anchor to usingShopifyBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.usingShopifyBalance)using Shopify Balance

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether a shop is using Shopify Balance.

### Deprecated fields

[Anchor to captchaExternalDomains](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.captchaExternalDomains)captcha External Domains

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to deliveryProfiles](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.deliveryProfiles)delivery Profiles

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to internationalDomains](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.internationalDomains)international Domains

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to internationalPriceOverrides](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.internationalPriceOverrides)international Price Overrides

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to internationalPriceRules](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.internationalPriceRules)international Price Rules

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to onboardingVisual](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.onboardingVisual)onboarding Visual

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to shopifyPlus](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures#field-ShopFeatures.fields.shopifyPlus)shopify Plus

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Shop.features](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-features)


---
*Content truncated at "Updates" section*