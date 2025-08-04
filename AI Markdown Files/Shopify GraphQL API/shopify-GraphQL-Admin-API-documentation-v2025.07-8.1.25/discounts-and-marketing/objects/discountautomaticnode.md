---
title: "DiscountAutomaticNode"
description: "Shopify GraphQL Admin API documentation for discountautomaticnode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DiscountAutomaticNode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode

Markdown Content:
DiscountAutomaticNode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#interfaces)
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

[Anchor to DiscountAutomaticNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#top)
Discount Automatic Node
=======================

object

Requires Apps must have `read_discounts` access scope.

The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to automaticDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#field-DiscountAutomaticNode.fields.automaticDiscount)automatic Discount

•[Discount Automatic!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

non-null

A discount that's applied automatically when an order meets specific criteria. Learn more about [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).

Show union types

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#field-DiscountAutomaticNode.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#field-DiscountAutomaticNode.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#field-DiscountAutomaticNode.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#field-DiscountAutomaticNode.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#field-DiscountAutomaticNode.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[DiscountAutomaticNodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection#field-nodes)
*   {}[DiscountAutomaticNodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNodeEdge#field-node)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#queries)Queries
-------------------------------------------------------------------------------------------------------------------

[Anchor to automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#query-automaticDiscountNode)[automatic Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNode)

•query

Returns a `DiscountAutomaticNode` resource by ID.

Show fields

[Anchor to automaticDiscountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#query-automaticDiscountNodes)[automatic Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNodes)

•query

Returns a list of [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts).

Show fields

* * *

Was this section helpful?

Yes No

<?>DiscountAutomaticNode Queries
--------------------------------

### Queried by

*   <?>[automatic Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/DiscountAutomaticNode)
*   <?>[automatic Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/DiscountAutomaticNodeConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------------

[Anchor to discountAutomaticActivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticActivate)[discount Automatic Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)

•mutation

Activates an automatic discount.

Show payload

[Anchor to discountAutomaticBasicCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticBasicCreate)[discount Automatic Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)

•mutation

Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

* * *

Note

To create code discounts, use the [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) mutation.

* * *

Show payload

[Anchor to discountAutomaticBasicUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticBasicUpdate)[discount Automatic Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)

•mutation

Updates an existing [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

* * *

Note

To update code discounts, use the [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate) mutation instead.

* * *

Show payload

[Anchor to discountAutomaticBxgyCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticBxgyCreate)[discount Automatic Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)

•mutation

Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

* * *

Note

To create code discounts, use the [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate) mutation.

* * *

Show payload

[Anchor to discountAutomaticBxgyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticBxgyUpdate)[discount Automatic Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)

•mutation

Updates an existing [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

* * *

Note

To update code discounts, use the [`discountCodeBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate) mutation instead.

* * *

Show payload

[Anchor to discountAutomaticDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticDeactivate)[discount Automatic Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)

•mutation

Deactivates an automatic discount.

Show payload

[Anchor to discountAutomaticFreeShippingCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticFreeShippingCreate)[discount Automatic Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)

•mutation

Creates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

* * *

Note

To create code discounts, use the [`discountCodeFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate) mutation.

* * *

Show payload

[Anchor to discountAutomaticFreeShippingUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#mutation-discountAutomaticFreeShippingUpdate)[discount Automatic Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

•mutation

Updates an existing [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

* * *

Note

To update code discounts, use the [`discountCodeFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate) mutation instead.

* * *

Show payload

* * *

Was this section helpful?

Yes No

<~>DiscountAutomaticNode Mutations
----------------------------------

### Mutated by

*   <~>[discount Automatic Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticActivate)
*   <~>[discount Automatic Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate)
*   <~>[discount Automatic Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)
*   <~>[discount Automatic Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate)
*   <~>[discount Automatic Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate)
*   <~>[discount Automatic Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticDeactivate)
*   <~>[discount Automatic Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate)
*   <~>[discount Automatic Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountautomaticnode#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DiscountAutomaticNode Implements
-----------------------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*