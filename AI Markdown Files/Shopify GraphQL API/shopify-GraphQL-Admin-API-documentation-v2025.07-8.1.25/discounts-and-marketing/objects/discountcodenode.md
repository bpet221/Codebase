---
title: "DiscountCodeNode"
description: "Shopify GraphQL Admin API documentation for discountcodenode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DiscountCodeNode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode

Markdown Content:
DiscountCodeNode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#interfaces)
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

[Anchor to DiscountCodeNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#top)
Discount Code Node
==================

object

Requires Apps must have `read_discounts` access scope.

The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to codeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#field-DiscountCodeNode.fields.codeDiscount)code Discount

•[Discount Code!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode)

non-null

The underlying code discount object.

Show union types

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#field-DiscountCodeNode.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#field-DiscountCodeNode.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#field-DiscountCodeNode.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#field-DiscountCodeNode.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#field-DiscountCodeNode.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[DiscountCodeNodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#field-nodes)
*   {}[DiscountCodeNodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge#field-node)
*   {}[DiscountRedeemCodeBulkCreation.discountCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-discountCode)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#queries)Queries
--------------------------------------------------------------------------------------------------------------

[Anchor to codeDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#query-codeDiscountNode)[code Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNode)

•query

Returns a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) resource by ID.

Show fields

[Anchor to codeDiscountNodeByCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#query-codeDiscountNodeByCode)[code Discount Node By Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodeByCode)

•query

Returns a code discount identified by its discount code.

Show fields

[Anchor to codeDiscountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#query-codeDiscountNodes)[code Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes)

•query

Returns a list of [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes).

Show fields

* * *

Was this section helpful?

Yes No

<?>DiscountCodeNode Queries
---------------------------

### Queried by

*   <?>[code Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/DiscountCodeNode)
*   <?>[code Discount Node By Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/DiscountCodeNode)
*   <?>[code Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/DiscountCodeNodeConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------

[Anchor to discountCodeActivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeActivate)[discount Code Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)

•mutation

Activates a code discount.

Show payload

[Anchor to discountCodeBasicCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeBasicCreate)[discount Code Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)

•mutation

Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

* * *

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate) mutation.

* * *

Show payload

[Anchor to discountCodeBasicUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeBasicUpdate)[discount Code Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)

•mutation

Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

* * *

Note

To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate) mutation.

* * *

Show payload

[Anchor to discountCodeBxgyCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeBxgyCreate)[discount Code Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)

•mutation

Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

* * *

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate) mutation.

* * *

Show payload

[Anchor to discountCodeBxgyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeBxgyUpdate)[discount Code Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)

•mutation

Updates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

* * *

Note

To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate) mutation.

* * *

Show payload

[Anchor to discountCodeDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeDeactivate)[discount Code Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)

•mutation

Deactivates a code discount.

Show payload

[Anchor to discountCodeFreeShippingCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeFreeShippingCreate)[discount Code Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)

•mutation

Creates an [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

* * *

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingCreate) mutation.

* * *

Show payload

[Anchor to discountCodeFreeShippingUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#mutation-discountCodeFreeShippingUpdate)[discount Code Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

•mutation

Updates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

* * *

Note

To update a free shipping discount that's automatically applied on a cart and at checkout, use the [`discountAutomaticFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticFreeShippingUpdate) mutation.

* * *

Show payload

* * *

Was this section helpful?

Yes No

<~>DiscountCodeNode Mutations
-----------------------------

### Mutated by

*   <~>[discount Code Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeActivate)
*   <~>[discount Code Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate)
*   <~>[discount Code Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate)
*   <~>[discount Code Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate)
*   <~>[discount Code Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyUpdate)
*   <~>[discount Code Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeDeactivate)
*   <~>[discount Code Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate)
*   <~>[discount Code Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/discountcodenode#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DiscountCodeNode Implements
------------------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*