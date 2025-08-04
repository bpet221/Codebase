---
title: "draftOrderAvailableDeliveryOptions"
description: "Shopify GraphQL Admin API documentation for draftorderavailabledeliveryoptions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrderAvailableDeliveryOptions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions

Markdown Content:
draftOrderAvailableDeliveryOptions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#main-content)

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
*   
Orders

    *   
Queries

        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)
        *   [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)
        *   [returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment)
        *   [returnable Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillments)
        *   [return Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returncalculate)
        *   [reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversedelivery)
        *   [reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversefulfillmentorder)
        *   [subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt)
        *   [subscription Billing Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempts)
        *   [subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycle)
        *   [subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults)
        *   [subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycles)
        *   [subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract)
        *   [subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontracts)
        *   [subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptiondraft)
        *   [tender Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions)

    *   Mutations   
    *   Objects   

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

[Anchor to draftOrderAvailableDeliveryOptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#top)
draft Order Available Delivery Options
======================================

query

Requires `read_draft_orders` access scope.

Returns a list of available delivery options for a draft order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#arguments-input)input

•[Draft Order Available Delivery Options Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput)

required

The fields for the draft order.

Show input fields

[Anchor to localPickupCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#arguments-localPickupCount)local Pickup Count

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The number of local pickup options required.

[Anchor to localPickupFrom](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#arguments-localPickupFrom)local Pickup From

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The offset for the local pickup options.

[Anchor to search](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#arguments-search)search

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The search term for the delivery options.

[Anchor to sessionToken](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#arguments-sessionToken)session Token

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Unique token used to trace execution and help optimize the calculation.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DraftOrderAvailableDeliveryOptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions#returns-DraftOrderAvailableDeliveryOptions)Draft Order Available Delivery Options

•[Draft Order Available Delivery Options!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAvailableDeliveryOptions)

The available delivery options for a draft order.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### draftOrderAvailableDeliveryOptions reference

Hide content

Query Reference
---------------

Copy

9

1

2

3

4

5

›

⌄

⌄

{

draftOrderAvailableDeliveryOptions(input){

# draftOrderAvailableDeliveryOptions fields

}

}


---
*Content truncated at "Updates" section*