---
title: "PriceRule"
description: "Shopify GraphQL Admin API documentation for pricerule"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: PriceRule - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule

Markdown Content:
PriceRule - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#interfaces)
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

[Anchor to PriceRule](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#top)
Price Rule
==========

object

Requires `read_price_rules` access scope.

Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply.

We recommend using the types and queries detailed at [Getting started with discounts](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL `PriceRule` object and REST Admin `PriceRule` and `DiscountCode` resources.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#fields)Fields
----------------------------------------------------------------------------------------------------

[Anchor to allocationLimit](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.allocationLimit)allocation Limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The maximum number of times that the price rule can be allocated onto an order.

[Anchor to allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.allocationMethod)allocation Method

•[Price Rule Allocation Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleAllocationMethod)

non-null

The method by which the price rule's value is allocated to its entitled items.

Show enum values

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.app)app

•[App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

The application that created the price rule.

Show fields

[Anchor to combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.combinesWith)combines With

•[Discount Combines With!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith)

non-null

The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the price rule was created.

[Anchor to customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.customerSelection)customer Selection

•[Price Rule Customer Selection!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection)

non-null

The customers that can use this price rule.

Show fields

[Anchor to discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.discountClasses)discount Classes

•[[Discount Class!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null

The classes of the discount.

Show enum values

[Anchor to discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.discountCodes)discount Codes

•[Price Rule Discount Code Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection)

non-null

List of the price rule's discount codes.

Show fields

[Anchor to discountCodesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.discountCodesCount)discount Codes Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

How many discount codes associated with the price rule.

Show fields

[Anchor to endsAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.endsAt)ends At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the price rule ends. For open-ended price rules, use `null`.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the price rule.

Show fields

[Anchor to features](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.features)features

•[[Price Rule Feature!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleFeature)

non-null

A list of the price rule's features.

Show enum values

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Indicates whether there are any timeline comments on the price rule.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to itemEntitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.itemEntitlements)item Entitlements

•[Price Rule Item Entitlements!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements)

non-null

The items to which the price rule applies.

Show fields

[Anchor to itemPrerequisites](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.itemPrerequisites)item Prerequisites

•[Price Rule Line Item Prerequisites!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites)

non-null

The items required for the price rule to be applicable.

Show fields

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to oncePerCustomer](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.oncePerCustomer)once Per Customer

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the price rule can be applied only once per customer.

[Anchor to prerequisiteQuantityRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.prerequisiteQuantityRange)prerequisite Quantity Range

•[Price Rule Quantity Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleQuantityRange)

The number of the entitled items must fall within this range for the price rule to be applicable.

Show fields

[Anchor to prerequisiteShippingPriceRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.prerequisiteShippingPriceRange)prerequisite Shipping Price Range

•[Price Rule Money Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange)

The shipping cost must fall within this range for the price rule to be applicable.

Show fields

[Anchor to prerequisiteSubtotalRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.prerequisiteSubtotalRange)prerequisite Subtotal Range

•[Price Rule Money Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange)

The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable.

Show fields

[Anchor to prerequisiteToEntitlementQuantityRatio](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.prerequisiteToEntitlementQuantityRatio)prerequisite To Entitlement Quantity Ratio

•[Price Rule Prerequisite To Entitlement Quantity Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePrerequisiteToEntitlementQuantityRatio)

Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items.

Show fields

[Anchor to shareableUrls](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.shareableUrls)shareable Urls

•[[Price Rule Shareable Url!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShareableUrl)

non-null

URLs that can be used to share the discount.

Show fields

[Anchor to shippingEntitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.shippingEntitlements)shipping Entitlements

•[Price Rule Shipping Line Entitlements!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleShippingLineEntitlements)

non-null

The shipping lines to which the price rule applies.

Show fields

[Anchor to startsAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.startsAt)starts At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the price rule starts.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.status)status

•[Price Rule Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleStatus)

non-null

The status of the price rule.

Show enum values

[Anchor to summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.summary)summary

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A detailed summary of the price rule.

[Anchor to target](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.target)target

•[Price Rule Target!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTarget)

non-null

The type of lines (line_item or shipping_line) to which the price rule applies.

Show enum values

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the price rule.

[Anchor to totalSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.totalSales)total Sales

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The total sales from orders where the price rule was used.

Show fields

[Anchor to usageCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.usageCount)usage Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count.

[Anchor to usageLimit](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.usageLimit)usage Limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The maximum number of times that the price rule can be used in total.

[Anchor to validityPeriod](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.validityPeriod)validity Period

•[Price Rule Validity Period!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod)

non-null

A time period during which a price rule is applicable.

Show fields

[Anchor to valueV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.valueV2)value V2

•[Pricing Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

non-null

The value of the price rule.

Show union types

### Deprecated fields

[Anchor to discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.discountClass)discount Class

•[Discount Class!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

non-null Deprecated

Show enum values

[Anchor to entitlementToPrerequisiteQuantityRatio](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.entitlementToPrerequisiteQuantityRatio)entitlement To Prerequisite Quantity Ratio

•[Price Rule Entitlement To Prerequisite Quantity Ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleEntitlementToPrerequisiteQuantityRatio)

Deprecated

Show fields

[Anchor to traits](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.traits)traits

•[[Price Rule Trait!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTrait)

non-null Deprecated

Show enum values

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#field-PriceRule.fields.value)value

•[Price Rule Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PriceRuleValue)

non-null Deprecated

Show union types

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[DraftOrderDiscountNotAppliedWarning.priceRule](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderDiscountNotAppliedWarning#field-priceRule)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricerule#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-PriceRule Implements
-----------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*