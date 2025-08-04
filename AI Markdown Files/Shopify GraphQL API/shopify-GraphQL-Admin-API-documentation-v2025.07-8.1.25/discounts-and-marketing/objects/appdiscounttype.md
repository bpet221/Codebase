---
title: "AppDiscountType"
description: "Shopify GraphQL Admin API documentation for appdiscounttype"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppDiscountType - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype

Markdown Content:
AppDiscountType - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#queries)
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

[Anchor to AppDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#top)
App Discount Type
=================

object

Requires Apps must have `read_discounts` access scope.

The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The name of the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Show fields

[Anchor to appBridge](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.appBridge)app Bridge

•[Functions App Bridge!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsAppBridge)

non-null

The [App Bridge configuration](https://shopify.dev/docs/api/app-bridge) for the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Show fields

[Anchor to appKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.appKey)app Key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets) of the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A description of the [discount type](https://help.shopify.com/manual/discounts/discount-types) provided by the app extension.

[Anchor to discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.discountClasses)discount Classes

•[[Discount Class!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null

The list of [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that this app extension supports.

Show enum values

[Anchor to functionId](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.functionId)function Id

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries) associated with the app extension providing the [discount type](https://help.shopify.com/manual/discounts/discount-types).

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the [discount type](https://help.shopify.com/manual/discounts/discount-types) that the app extension is providing.

### Deprecated fields

[Anchor to discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.discountClass)discount Class

•[Discount Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null Deprecated

Show enum values

[Anchor to targetType](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#field-AppDiscountType.fields.targetType)target Type

•[Discount Application Target Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

non-null Deprecated

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[AppDiscountTypeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#field-nodes)
*   {}[AppDiscountTypeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountTypeEdge#field-node)
*   {}[DiscountAutomaticApp.appDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-appDiscountType)
*   {}[DiscountCodeApp.appDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-appDiscountType)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#queries)Queries
-------------------------------------------------------------------------------------------------------------

[Anchor to appDiscountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#query-appDiscountType)[app Discount Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountType)

•query

An app discount type.

Show fields

[Anchor to appDiscountTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#query-appDiscountTypes)[app Discount Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypes)

•query

A list of app discount types installed by apps.

Show fields

[Anchor to appDiscountTypesNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/appdiscounttype#query-appDiscountTypesNodes)[app Discount Types Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)

•query

A list of app discount types installed by apps.

Show fields

* * *

Was this section helpful?

Yes No

<?>AppDiscountType Queries
--------------------------

### Queried by

*   <?>[app Discount Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/AppDiscountType)
*   <?>[app Discount Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/AppDiscountType)
*   <?>[app Discount Types Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/AppDiscountTypeConnection)


---
*Content truncated at "Updates" section*