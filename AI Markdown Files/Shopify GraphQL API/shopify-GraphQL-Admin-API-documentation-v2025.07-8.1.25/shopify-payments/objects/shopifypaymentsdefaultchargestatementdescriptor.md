---
title: "ShopifyPaymentsDefaultChargeStatementDescriptor"
description: "Shopify GraphQL Admin API documentation for shopifypaymentsdefaultchargestatementdescriptor"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor"
extraction_method: "jina"
sections: ['Shopify Payments', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopifyPaymentsDefaultChargeStatementDescriptor - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor

Markdown Content:
ShopifyPaymentsDefaultChargeStatementDescriptor - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#main-content)

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
*   
Shopify Payments

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Finance Kyc Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/financekycinformation)
        *   [Financial Kyc Shop Owner](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialkycshopowner)
        *   [Order Dispute Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary)
        *   [Shopify Payments Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsaccount)
        *   [Shopify Payments Address Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsaddressbasic)
        *   [Shopify Payments Adjustment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsadjustmentorder)
        *   [Shopify Payments Associated Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsassociatedorder)
        *   [Shopify Payments Balance Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbalancetransaction)
        *   [Shopify Payments Balance Transaction Associated Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbalancetransactionassociatedpayout)
        *   [Shopify Payments Bank Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount)
        *   [Shopify Payments Default Charge Statement Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#interfaces)
        *   [Shopify Payments Dispute](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdispute)
        *   [Shopify Payments Dispute Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdisputeevidence)
        *   [Shopify Payments Dispute File Upload](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdisputefileupload)
        *   [Shopify Payments Dispute Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdisputefulfillment)
        *   [Shopify Payments Dispute Reason Details](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdisputereasondetails)
        *   [Shopify Payments Jp Charge Statement Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsjpchargestatementdescriptor)
        *   [Shopify Payments Merchant Category Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsmerchantcategorycode)
        *   [Shopify Payments Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentspayout)
        *   [Shopify Payments Payout Schedule](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentspayoutschedule)
        *   [Shopify Payments Payout Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentspayoutsummary)
        *   [Shopify Payments Tax Identification](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentstaxidentification)
        *   [Shopify Payments Tooling Provider Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentstoolingproviderpayout)

*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to ShopifyPaymentsDefaultChargeStatementDescriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#top)
Shopify Payments Default Charge Statement Descriptor
====================================================

object

Requires `read_shopify_payments` access scope.

The charge descriptors for a payments account.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#fields)Fields
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to default](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#field-ShopifyPaymentsDefaultChargeStatementDescriptor.fields.default)default

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The default charge statement descriptor.

[Anchor to prefix](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#field-ShopifyPaymentsDefaultChargeStatementDescriptor.fields.prefix)prefix

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The prefix of the statement descriptor.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ShopifyPaymentsChargeStatementDescriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor#interface-ShopifyPaymentsChargeStatementDescriptor)[Shopify Payments Charge Statement Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)

•interface

* * *

Was this section helpful?

Yes No

||-ShopifyPaymentsDefaultChargeStatementDescriptor Implements
-------------------------------------------------------------

### Implements

*   ||-[Shopify Payments Charge Statement Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ShopifyPaymentsChargeStatementDescriptor)


---
*Content truncated at "Updates" section*