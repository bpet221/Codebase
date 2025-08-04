---
title: "DiscountAutomaticFreeShipping"
description: "Shopify GraphQL Admin API documentation for discountautomaticfreeshipping"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DiscountAutomaticFreeShipping - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping

Markdown Content:
DiscountAutomaticFreeShipping - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#main-content)

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

[Anchor to DiscountAutomaticFreeShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#top)
Discount Automatic Free Shipping
================================

object

Requires Apps must have `read_discounts` access scope.

The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

* * *

Note

The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

* * *

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#fields)Fields
------------------------------------------------------------------------------------------------------------------------

[Anchor to appliesOnOneTimePurchase](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.appliesOnOneTimePurchase)applies On One Time Purchase

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.

[Anchor to appliesOnSubscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.appliesOnSubscription)applies On Subscription

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

[Anchor to asyncUsageCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.asyncUsageCount)async Usage Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of times that the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. This value is updated asynchronously. As a result, it might be lower than the actual usage count until the asynchronous process is completed.

[Anchor to combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.combinesWith)combines With

•[Discount Combines With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

non-null

The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the discount was created.

[Anchor to destinationSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.destinationSelection)destination Selection

•[Discount Shipping Destination Selection!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection)

non-null

The countries that qualify for the discount. You can define [a list of countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries) or specify [all countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll) to be eligible for the discount.

Show union types

[Anchor to discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.discountClasses)discount Classes

•[[Discount Class!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null

The classes of the discount.

Show enum values

[Anchor to endsAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.endsAt)ends At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether there are [timeline comments](https://help.shopify.com/manual/discounts/managing-discount-codes#use-the-discount-timeline) associated with the discount.

[Anchor to maximumShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.maximumShippingPrice)maximum Shipping Price

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The maximum shipping price amount accepted to qualify for the discount.

Show fields

[Anchor to minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.minimumRequirement)minimum Requirement

•[Discount Minimum Requirement](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement)

The minimum subtotal or quantity of items that are required for the discount to be applied.

Show union types

[Anchor to recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.recurringCycleLimit)recurring Cycle Limit

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

[Anchor to shortSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.shortSummary)short Summary

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

An abbreviated version of the discount [`summary`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-summary) field.

[Anchor to startsAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.startsAt)starts At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the discount becomes active and is available to customers.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.status)status

•[Discount Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus)

non-null

The status of the discount that describes its availability, expiration, or pending activation.

Show enum values

[Anchor to summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.summary)summary

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A detailed explanation of what the discount is, who can use it, when and where it applies, and any associated rules or limitations.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The discount's name that displays to merchants in the Shopify admin and to customers.

[Anchor to totalSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.totalSales)total Sales

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The total sales from orders where the discount was used.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the discount was updated.

[Anchor to discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticfreeshipping#field-DiscountAutomaticFreeShipping.fields.discountClass)discount Class

•[Shipping Discount Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingDiscountClass)

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


---
*Content truncated at "Updates" section*