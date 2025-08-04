---
title: "DiscountRedeemCodeBulkCreation"
description: "Shopify GraphQL Admin API documentation for discountredeemcodebulkcreation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DiscountRedeemCodeBulkCreation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation

Markdown Content:
DiscountRedeemCodeBulkCreation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#main-content)

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
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   
Discounts and marketing

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#interfaces)
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

[Anchor to DiscountRedeemCodeBulkCreation](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#top)
Discount Redeem Code Bulk Creation
==================================

object

Requires Apps must have `read_discounts` access scope.

The properties and status of a bulk discount redeem code creation operation.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#fields)Fields
-------------------------------------------------------------------------------------------------------------------------

[Anchor to codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.codes)codes

•[Discount Redeem Code Bulk Creation Code Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection)

non-null

The result of each code creation operation associated with the bulk creation operation including any errors that might have occurred during the operation.

Show fields

[Anchor to codesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.codesCount)codes Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of codes to create.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the bulk creation was created.

[Anchor to discountCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.discountCode)discount Code

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The code discount associated with the created codes.

Show fields

[Anchor to done](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.done)done

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the bulk creation is still queued (`false`) or has been run (`true`).

[Anchor to failedCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.failedCount)failed Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of codes that weren't created successfully.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to importedCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#field-DiscountRedeemCodeBulkCreation.fields.importedCount)imported Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of codes created successfully.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#queries)Queries
----------------------------------------------------------------------------------------------------------------------------

[Anchor to discountRedeemCodeBulkCreation](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#query-discountRedeemCodeBulkCreation)[discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation)

•query

Returns a `DiscountRedeemCodeBulkCreation` resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>DiscountRedeemCodeBulkCreation Queries
-----------------------------------------

### Queried by

*   <?>[discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/DiscountRedeemCodeBulkCreation)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to discountRedeemCodeBulkAdd](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#mutation-discountRedeemCodeBulkAdd)[discount Redeem Code Bulk Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

•mutation

Asynchronously add [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation to automate the distribution of discount codes through emails or other marketing channels.

Show payload

* * *

Was this section helpful?

Yes No

<~>DiscountRedeemCodeBulkCreation Mutations
-------------------------------------------

### Mutated by

*   <~>[discount Redeem Code Bulk Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountRedeemCodeBulkAdd)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountredeemcodebulkcreation#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DiscountRedeemCodeBulkCreation Implements
--------------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*