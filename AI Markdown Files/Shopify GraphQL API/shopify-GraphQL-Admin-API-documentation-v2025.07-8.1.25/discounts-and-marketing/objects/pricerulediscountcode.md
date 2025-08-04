---
title: "PriceRuleDiscountCode"
description: "Shopify GraphQL Admin API documentation for pricerulediscountcode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: PriceRuleDiscountCode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode

Markdown Content:
PriceRuleDiscountCode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#interfaces)
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

[Anchor to PriceRuleDiscountCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#top)
Price Rule Discount Code
========================

object

Requires `read_price_rules` access scope.

A discount code of a price rule.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#field-PriceRuleDiscountCode.fields.app)app

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

The application that created the discount code.

Show fields

[Anchor to code](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#field-PriceRuleDiscountCode.fields.code)code

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The code to apply the discount.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#field-PriceRuleDiscountCode.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to usageCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#field-PriceRuleDiscountCode.fields.usageCount)usage Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[PriceRule.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-discountCodes)
*   <->[PriceRuleDiscountCodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#field-nodes)
*   {}[PriceRuleDiscountCodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCodeEdge#field-node)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerulediscountcode#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-PriceRuleDiscountCode Implements
-----------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*