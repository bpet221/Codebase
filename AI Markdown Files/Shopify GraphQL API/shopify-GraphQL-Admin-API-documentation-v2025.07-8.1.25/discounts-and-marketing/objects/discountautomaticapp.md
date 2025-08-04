---
title: "DiscountAutomaticApp"
description: "Shopify GraphQL Admin API documentation for discountautomaticapp"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DiscountAutomaticApp - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp

Markdown Content:
DiscountAutomaticApp - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#mutations)
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

[Anchor to DiscountAutomaticApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#top)
Discount Automatic App
======================

object

Requires `read_discounts` access scope.

The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

* * *

Note

The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp) object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp` stores information about discount codes that are managed by an app using Shopify Functions.

* * *

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to appDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.appDiscountType)app Discount Type

•[App Discount Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

non-null

The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

Show fields

[Anchor to appliesOnOneTimePurchase](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.appliesOnOneTimePurchase)applies On One Time Purchase

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the discount applies on one-time purchases.

[Anchor to appliesOnSubscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.appliesOnSubscription)applies On Subscription

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

[Anchor to asyncUsageCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.asyncUsageCount)async Usage Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

[Anchor to combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.combinesWith)combines With

•[Discount Combines With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

non-null

The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the discount was created.

[Anchor to discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.discountClasses)discount Classes

•[[Discount Class!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null

The classes of the discount.

Show enum values

[Anchor to discountId](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.discountId)discount Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The [globally-unique ID](https://shopify.dev/docs/api/usage/gids) for the discount.

[Anchor to endsAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.endsAt)ends At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

[Anchor to errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.errorHistory)error History

•[Functions Error History](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory)

The [error history](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors) for the latest version of the discount type that the app provides.

Show fields

[Anchor to recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.recurringCycleLimit)recurring Cycle Limit

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

[Anchor to startsAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.startsAt)starts At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the discount becomes active and is available to customers.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.status)status

•[Discount Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

non-null

The status of the discount that describes its availability, expiration, or pending activation.

Show enum values

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The discount's name that displays to merchants in the Shopify admin and to customers.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the discount was updated.

[Anchor to discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#field-DiscountAutomaticApp.fields.discountClass)discount Class

•[Discount Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null Deprecated

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/Discount)
*   [Discount Automatic](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#mutations)Mutations
------------------------------------------------------------------------------------------------------------------------

[Anchor to discountAutomaticAppCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#mutation-discountAutomaticAppCreate)[discount Automatic App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)

•mutation

Creates an automatic discount that's managed by an app. Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions) when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to create an automatic discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

* * *

Note

To create code discounts with custom logic, use the [`discountCodeAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate) mutation.

* * *

Show payload

[Anchor to discountAutomaticAppUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticapp#mutation-discountAutomaticAppUpdate)[discount Automatic App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)

•mutation

Updates an existing automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to update a new "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

* * *

Note

To update code discounts with custom logic, use the [`discountCodeAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate) mutation instead.

* * *

Show payload

* * *

Was this section helpful?

Yes No

<~>DiscountAutomaticApp Mutations
---------------------------------

### Mutated by

*   <~>[discount Automatic App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate)
*   <~>[discount Automatic App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppUpdate)


---
*Content truncated at "Updates" section*