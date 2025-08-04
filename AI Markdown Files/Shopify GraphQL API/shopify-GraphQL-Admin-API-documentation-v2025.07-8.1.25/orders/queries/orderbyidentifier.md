---
title: "orderByIdentifier"
description: "Shopify GraphQL Admin API documentation for orderbyidentifier"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderByIdentifier - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier

Markdown Content:
orderByIdentifier - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier#main-content)

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
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   
Orders

    *   
Queries

        *   [available Backup Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablebackupregions)
        *   [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)
        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [pending Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingorderscount)
        *   [product Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttags)
        *   [product Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttypes)
        *   [product Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvendors)
        *   [published Products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount)
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

[Anchor to orderByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier#top)
order By Identifier
===================

query

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Return an order by an identifier.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier#arguments-identifier)identifier

•[Order Identifier Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderIdentifierInput)

required

The identifier of the order.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier#returns-Order)Order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

Use the `Order` object when you need to:

*   Display order details on customer account pages or admin dashboards.
*   Create orders for phone sales, wholesale customers, or subscription services.
*   Update order information like shipping addresses, notes, or fulfillment status.
*   Process returns, exchanges, and partial refunds.
*   Generate invoices, receipts, and shipping labels.

The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

* * *

Note

Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

* * *

* * *

Caution

Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

* * *

Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### orderByIdentifier reference

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

orderByIdentifier(identifier){

# orderByIdentifier fields

}

}


---
*Content truncated at "Updates" section*