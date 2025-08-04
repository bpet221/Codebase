---
title: "OrderDisputeSummary"
description: "Shopify GraphQL Admin API documentation for orderdisputesummary"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary"
extraction_method: "jina"
sections: ['Shopify Payments', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: OrderDisputeSummary - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary

Markdown Content:
OrderDisputeSummary - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#interfaces)
        *   [Shopify Payments Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsaccount)
        *   [Shopify Payments Address Basic](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsaddressbasic)
        *   [Shopify Payments Adjustment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsadjustmentorder)
        *   [Shopify Payments Associated Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsassociatedorder)
        *   [Shopify Payments Balance Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbalancetransaction)
        *   [Shopify Payments Balance Transaction Associated Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbalancetransactionassociatedpayout)
        *   [Shopify Payments Bank Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount)
        *   [Shopify Payments Default Charge Statement Descriptor](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsdefaultchargestatementdescriptor)
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

[Anchor to OrderDisputeSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#top)
Order Dispute Summary
=====================

object

Requires `read_orders` access scope.

A summary of the important details for a dispute on an order.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#field-OrderDisputeSummary.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to initiatedAs](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#field-OrderDisputeSummary.fields.initiatedAs)initiated As

•[Dispute Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeType)

non-null

The type that the dispute was initiated as.

Show enum values

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#field-OrderDisputeSummary.fields.status)status

•[Dispute Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DisputeStatus)

non-null

The current status of the dispute.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Order.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-disputes)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderdisputesummary#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-OrderDisputeSummary Implements
---------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*