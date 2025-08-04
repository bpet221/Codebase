---
title: "orders"
description: "Shopify GraphQL Admin API documentation for orders"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/orders"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orders - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/orders

Markdown Content:
orders - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#main-content)

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

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#top)
orders
======

query

Returns a list of [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) placed in the store, including data such as order status, customer, and line item details. Use the `orders` query to build reports, analyze sales performance, or automate fulfillment workflows. The `orders` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-sortkey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments)
OrderConnection arguments
-------------------------

•[OrderConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-cart_token)cart_token

•string

Filter by the cart token's unique value to track abandoned cart conversions or troubleshoot checkout issues. The token references the cart that's associated with an order.

Example:

*   `cart_token:abc123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-channel)channel

•string

Filter by the channel information [`handle`](https://shopify.dev/api/admin-graphql/latest/objects/ChannelInformation#field-ChannelInformation.fields.channelDefinition.handle) (`ChannelInformation.channelDefinition.handle`) field.

Example:

*   `channel:web`
*   `channel:web,pos`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-channel_id)channel_id

•id

Filter by the channel [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.id) field.

Example:

*   `channel_id:123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-chargeback_status)chargeback_status

•string

Filter by the order's chargeback status. A chargeback occurs when a customer questions the legitimacy of a charge with their financial institution.

Valid values:

*   `accepted`
*   `charge_refunded`
*   `lost`
*   `needs_response`
*   `under_review`
*   `won`

Example:

*   `chargeback_status:accepted`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-checkout_token)checkout_token

•string

Filter by the checkout token's unique value to analyze conversion funnels or resolve payment issues. The checkout token's value references the checkout that's associated with an order.

Example:

*   `checkout_token:abc123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-confirmation_number)confirmation_number

•string

Filter by the randomly generated alpha-numeric identifier for an order that can be displayed to the customer instead of the sequential order name. This value isn't guaranteed to be unique.

Example:

*   `confirmation_number:ABC123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the order was created in Shopify's system.

Example:

*   `created_at:2020-10-21T23:39:20Z`
*   `created_at:<now`
*   `created_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-credit_card_last4)credit_card_last4

•string

Filter by the last four digits of the payment card that was used to pay for the order. This filter matches only the last four digits of the card for heightened security.

Example:

*   `credit_card_last4:1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-customer_id)customer_id

•id

Filter orders by the customer [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Customer#field-Customer.fields.id) field.

Example:

*   `customer_id:123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-delivery_method)delivery_method

•string

Filter by the delivery [`methodType`](https://shopify.dev/api/admin-graphql/2024-07/objects/DeliveryMethod#field-DeliveryMethod.fields.methodType) field.

Valid values:

*   `shipping`
*   `pick-up`
*   `retail`
*   `local`
*   `pickup-point`
*   `none`

Example:

*   `delivery_method:shipping`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-discount_code)discount_code

•string

Filter by the case-insensitive discount code that was applied to the order at checkout. Maximum characters: 255.

Example:

*   `discount_code:ABC123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-email)email

•string

Filter by the email address that's associated with the order to provide customer support or analyze purchasing patterns.

Example:

*   `email:example@shopify.com`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-financial_status)financial_status

•string

Filter by the order [`displayFinancialStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) field.

Valid values:

*   `paid`
*   `pending`
*   `authorized`
*   `partially_paid`
*   `partially_refunded`
*   `refunded`
*   `voided`
*   `expired`

Example:

*   `financial_status:authorized`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-fraud_protection_level)fraud_protection_level

•string

Filter by the level of fraud protection that's applied to the order. Use this filter to manage risk or handle disputes.

Valid values:

*   `fully_protected`
*   `partially_protected`
*   `not_protected`
*   `pending`
*   `not_eligible`
*   `not_available`

Example:

*   `fraud_protection_level:fully_protected`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-fulfillment_location_id)fulfillment_location_id

•id

Filter by the fulfillment location [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.location.id) (`Fulfillment.location.id`) field.

Example:

*   `fulfillment_location_id:123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-fulfillment_status)fulfillment_status

•string

Filter by the [`displayFulfillmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFulfillmentStatus) field to prioritize shipments or monitor order processing.

Valid values:

*   `unshipped`
*   `shipped`
*   `fulfilled`
*   `partial`
*   `scheduled`
*   `on_hold`
*   `unfulfilled`
*   `request_declined`

Example:

*   `fulfillment_status:fulfilled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-gateway)gateway

•string

Filter by the [`paymentGatewayNames`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.paymentGatewayNames) field. Use this filter to find orders that were processed through specific payment providers like Shopify Payments, PayPal, or other custom payment gateways.

Example:

*   `gateway:shopify_payments`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-location_id)location_id

•id

Filter by the location [`id`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.id) that's associated with the order to view and manage orders for specific locations. For POS orders, locations must be defined in the Shopify admin under **Settings**>**Locations**. If no ID is provided, then the primary location of the shop is returned.

Example:

*   `location_id:123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-name)name

•string

Filter by the order [`name`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-name) field.

Example:

*   `name:1001-A`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-payment_id)payment_id

•string

Filter by the payment ID that's associated with the order to reconcile financial records or troubleshoot payment issues.

Example:

*   `payment_id:abc123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-payment_provider_id)payment_provider_id

•id

Filter by the ID of the payment provider that's associated with the order to manage payment methods or troubleshoot transactions.

Example:

*   `payment_provider_id:123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-po_number)po_number

•string

Filter by the order [`poNumber`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.poNumber) field.

Example:

*   `po_number:P01001`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-processed_at)processed_at

•time

Filter by the order [`processedAt`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.processedAt) field.

Example:

*   `processed_at:2021-01-01T00:00:00Z`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-reference_location_id)reference_location_id

•id

Filter by the ID of a location that's associated with the order, such as locations from fulfillments, refunds, or the shop's primary location.

Example:

*   `reference_location_id:123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-return_status)return_status

•string

Filter by the order's [`returnStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.returnStatus) to monitor returns processing and track which orders have active returns.

Valid values:

*   `return_requested`
*   `in_progress`
*   `inspection_complete`
*   `returned`
*   `return_failed`
*   `no_return`

Example:

*   `return_status:in_progress`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-risk_level)risk_level

•string

Filter by the order risk assessment [`riskLevel`](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.riskLevel) field.

Valid values:

*   `high`
*   `medium`
*   `low`
*   `none`
*   `pending`

Example:

*   `risk_level:high`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-sales_channel)sales_channel

•string

Filter by the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) where the order was made to analyze performance or manage fulfillment processes.

Example:

*   `sales_channel: some_sales_channel`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-sku)sku

•string

Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

Example:

*   `sku:ABC123`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-source_identifier)source_identifier

•string

Filter by the ID of the order placed on the originating platform, such as a unique POS or third-party identifier. This value doesn't correspond to the Shopify ID that's generated from a completed draft order.

Example:

*   `source_identifier:1234-12-1000`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-source_name)source_name

•string

Filter by the platform where the order was placed to distinguish between web orders, POS sales, draft orders, or third-party channels. Use this filter to analyze sales performance across different ordering methods.

Example:

*   `source_name:web`
*   `source_name:shopify_draft_order`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-status)status

•string

Filter by the order's status to manage workflows or analyze the order lifecycle.

Valid values:

*   `open`
*   `closed`
*   `cancelled`
*   `not_closed`

Example:

*   `status:open`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-subtotal_line_items_quantity)subtotal_line_items_quantity

•string

Filter by the total number of items across all line items in an order. This filter supports both exact values and ranges, and is useful for identifying bulk orders or analyzing purchase volume patterns.

Example:

*   `subtotal_line_items_quantity:10`
*   `subtotal_line_items_quantity:5..20`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-tag)tag

•string

Filter objects by the `tag` field.

Example:

*   `tag:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-tag_not)tag_not

•string

Filter by objects that don’t have the specified tag.

Example:

*   `tag_not:my_tag`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-test)test

•boolean

Filter by test orders. Test orders are made using the [Shopify Bogus Gateway](https://help.shopify.com/manual/checkout-settings/test-orders/payments-test-mode#bogus-gateway) or a payment provider with test mode enabled.

Example:

*   `test:true`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the order was last updated in Shopify's system.

Example:

*   `updated_at:2020-10-21T23:39:20Z`
*   `updated_at:<now`
*   `updated_at:<=2024`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-sortKey)sort Key

•[Order Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys)

Default:PROCESSED_AT

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#returns-edges)edges

•[[Order Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#returns-nodes)nodes

•[[Order!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

non-null

A list of nodes that are contained in OrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of orders

#### Description

This query retrieves the first 10 [`orders`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) and returns order IDs.

#### Query

```graphql
query {
  orders(first: 10) {
    edges {
      cursor
      node {
        id
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { orders(first: 10) { edges { cursor node { id } } pageInfo { hasNextPage hasPreviousPage startCursor endCursor } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    orders(first: 10) {
      edges {
        cursor
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    orders(first: 10) {
      edges {
        cursor
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    orders(first: 10) {
      edges {
        cursor
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }`,
});
``` #### Response

```json
{
  "orders": {
    "edges": [
      {
        "cursor": "eyJsYXN0X2lkIjoxMjYyMTY1MTYsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/126216516"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjoxNDg5Nzc3NzYsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/148977776"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjoyMzUyNDAzMDIsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/235240302"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjozNTc5NDQ4NTQsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/357944854"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjo0MDQ0ODE1NzUsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/404481575"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjo0MDkyMTQzNjMsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/409214363"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjo0NzE4NjExMjksImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/471861129"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjo0ODA3OTYxODksImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/480796189"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjo1MjcyMjkyODksImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/527229289"
        }
      },
      {
        "cursor": "eyJsYXN0X2lkIjo1NTY1Mjc2MzgsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
        "node": {
          "id": "gid://shopify/Order/556527638"
        }
      }
    ],
    "pageInfo": {
      "hasNextPage": true,
      "hasPreviousPage": false,
      "startCursor": "eyJsYXN0X2lkIjoxMjYyMTY1MTYsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",
      "endCursor": "eyJsYXN0X2lkIjo1NTY1Mjc2MzgsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9"
    }
  }
}
``` 
*   ### Retrieve a list of orders using their IDs and GraphQL aliases

#### Description

This query demonstrates GraphQL aliases such as `order1` and `order2` to fetch multiple orders in a single query. Without aliases, requesting the same field twice would cause an error due to duplicate response keys.

#### Query

```graphql
query {
  order1: order(id: "gid://shopify/Order/148977776") {
    name
  }
  order2: order(id: "gid://shopify/Order/1073459961") {
    name
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { order1: order(id: \"gid://shopify/Order/148977776\") { name } order2: order(id: \"gid://shopify/Order/1073459961\") { name } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order1: order(id: "gid://shopify/Order/148977776") {
      name
    }
    order2: order(id: "gid://shopify/Order/1073459961") {
      name
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    order1: order(id: "gid://shopify/Order/148977776") {
      name
    }
    order2: order(id: "gid://shopify/Order/1073459961") {
      name
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    order1: order(id: "gid://shopify/Order/148977776") {
      name
    }
    order2: order(id: "gid://shopify/Order/1073459961") {
      name
    }
  }`,
});
``` #### Response

```json
{
  "order1": {
    "name": "#1001"
  },
  "order2": {
    "name": "#1018"
  }
}
``` 
*   ### Retrieve specific order details

#### Description

This query retrieves the first five [`orders`](https://shopify.dev/api/admin-graphql/latest/objects/Order), including status information, financial data, and a list of [line items](https://shopify.dev/api/admin-graphql/latest/objects/LineItem). This query is useful for order processing, fulfillment, and financial reporting.

#### Query

```graphql
query {
  orders(first: 5) {
    edges {
      node {
        id
        name
        createdAt
        displayFinancialStatus
        displayFulfillmentStatus
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        subtotalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        email
        shippingAddress {
          address1
          city
          provinceCode
          zip
        }
        lineItems(first: 5) {
          edges {
            node {
              name
              quantity
              sku
              variant {
                id
                title
              }
            }
          }
        }
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { orders(first: 5) { edges { node { id name createdAt displayFinancialStatus displayFulfillmentStatus totalPriceSet { shopMoney { amount currencyCode } } subtotalPriceSet { shopMoney { amount currencyCode } } email shippingAddress { address1 city provinceCode zip } lineItems(first: 5) { edges { node { name quantity sku variant { id title } } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    orders(first: 5) {
      edges {
        node {
          id
          name
          createdAt
          displayFinancialStatus
          displayFulfillmentStatus
          totalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          subtotalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          email
          shippingAddress {
            address1
            city
            provinceCode
            zip
          }
          lineItems(first: 5) {
            edges {
              node {
                name
                quantity
                sku
                variant {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    orders(first: 5) {
      edges {
        node {
          id
          name
          createdAt
          displayFinancialStatus
          displayFulfillmentStatus
          totalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          subtotalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          email
          shippingAddress {
            address1
            city
            provinceCode
            zip
          }
          lineItems(first: 5) {
            edges {
              node {
                name
                quantity
                sku
                variant {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    orders(first: 5) {
      edges {
        node {
          id
          name
          createdAt
          displayFinancialStatus
          displayFulfillmentStatus
          totalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          subtotalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          email
          shippingAddress {
            address1
            city
            provinceCode
            zip
          }
          lineItems(first: 5) {
            edges {
              node {
                name
                quantity
                sku
                variant {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "orders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Order/158040885",
          "name": "#2000",
          "createdAt": "2024-01-01T00:00:00Z",
          "displayFinancialStatus": "PAID",
          "displayFulfillmentStatus": "UNFULFILLED",
          "totalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "subtotalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "email": "bob@example.com",
          "shippingAddress": null,
          "lineItems": {
            "edges": [
              {
                "node": {
                  "name": "Draft - 151cm",
                  "quantity": 10,
                  "sku": "draft-151",
                  "variant": {
                    "id": "gid://shopify/ProductVariant/168923715",
                    "title": "151cm"
                  }
                }
              }
            ]
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/199007853",
          "name": "#2006",
          "createdAt": "2024-01-01T00:00:00Z",
          "displayFinancialStatus": "PAID",
          "displayFulfillmentStatus": "UNFULFILLED",
          "totalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "subtotalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "email": "bob@example.com",
          "shippingAddress": null,
          "lineItems": {
            "edges": []
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/212949620",
          "name": "#2002",
          "createdAt": "2024-01-01T00:00:00Z",
          "displayFinancialStatus": "PAID",
          "displayFulfillmentStatus": "UNFULFILLED",
          "totalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "subtotalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "email": "bob@example.com",
          "shippingAddress": null,
          "lineItems": {
            "edges": []
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/294238686",
          "name": "#2009",
          "createdAt": "2024-01-01T00:00:00Z",
          "displayFinancialStatus": "PAID",
          "displayFulfillmentStatus": "UNFULFILLED",
          "totalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "subtotalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "email": "bob@example.com",
          "shippingAddress": null,
          "lineItems": {
            "edges": []
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/316002265",
          "name": "#2003",
          "createdAt": "2024-01-01T00:00:00Z",
          "displayFinancialStatus": "PAID",
          "displayFulfillmentStatus": "UNFULFILLED",
          "totalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "subtotalPriceSet": {
            "shopMoney": {
              "amount": "2000.0",
              "currencyCode": "CAD"
            }
          },
          "email": "bob@example.com",
          "shippingAddress": null,
          "lineItems": {
            "edges": []
          }
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first 10 orders updated after December 1, 2019

#### Description

This query retrieves the first 10 [`orders`](https://shopify.dev/api/admin-graphql/latest/objects/Order) updated after December 1, 2019. The example shows how to use the [`updated_at`](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#argument-query-filter-updated_at) parameter to determine the orders that were updated after the specified date. Refer to [pagination](https://shopify.dev/api/usage/pagination-graphql) for best practices on handling larger result sets.

#### Query

```graphql
query {
  orders(first: 10, query: "updated_at:>2019-12-01") {
    edges {
      node {
        id
        updatedAt
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { orders(first: 10, query: \"updated_at:>2019-12-01\") { edges { node { id updatedAt } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    orders(first: 10, query: "updated_at:>2019-12-01") {
      edges {
        node {
          id
          updatedAt
        }
      }
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    orders(first: 10, query: "updated_at:>2019-12-01") {
      edges {
        node {
          id
          updatedAt
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    orders(first: 10, query: "updated_at:>2019-12-01") {
      edges {
        node {
          id
          updatedAt
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "orders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Order/158040885",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/199007853",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/212949620",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/294238686",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/316002265",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/459506686",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/634584900",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/744797037",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/1001810659",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/1021030140",
          "updatedAt": "2024-01-01T12:34:43Z"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first 10 orders with authorized payments

#### Description

This query retrieves the first 10 [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) with authorized payments. For individual payment verification, refer to the [`orderPaymentStatus`](https://shopify.dev/api/admin-graphql/latest/queries/orderPaymentStatus) query.

#### Query

```graphql
query {
  orders(first: 10, query: "financial_status:authorized") {
    edges {
      node {
        id
        displayFinancialStatus
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { orders(first: 10, query: \"financial_status:authorized\") { edges { node { id displayFinancialStatus } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    orders(first: 10, query: "financial_status:authorized") {
      edges {
        node {
          id
          displayFinancialStatus
        }
      }
    }
  }`,
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    orders(first: 10, query: "financial_status:authorized") {
      edges {
        node {
          id
          displayFinancialStatus
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    orders(first: 10, query: "financial_status:authorized") {
      edges {
        node {
          id
          displayFinancialStatus
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "orders": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Order/471861129",
          "displayFinancialStatus": "AUTHORIZED"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/527229289",
          "displayFinancialStatus": "AUTHORIZED"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/751082136",
          "displayFinancialStatus": "AUTHORIZED"
        }
      },
      {
        "node": {
          "id": "gid://shopify/Order/431501862",
          "displayFinancialStatus": "AUTHORIZED"
        }
      }
    ]
  }
}
``` 

Examples
--------

Retrieve a list of orders

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20orders(first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%20%20hasPreviousPage%0A%20%20%20%20%20%20startCursor%0A%20%20%20%20%20%20endCursor%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 orders(first: 10) {

 edges {

 cursor

 node {

 id

 }

 }

 pageInfo {

 hasNextPage

 hasPreviousPage

 startCursor

 endCursor

 }

 }

 }`,

);

const data=await response.json();

```
query {
  orders(first: 10) {
    edges {
      cursor
      node {
        id
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { orders(first: 10) { edges { cursor node { id } } pageInfo { hasNextPage hasPreviousPage startCursor endCursor } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    orders(first: 10) {
      edges {
        cursor
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    orders(first: 10) {
      edges {
        cursor
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }`,
});
```

```
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query {
    orders(first: 10) {
      edges {
        cursor
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
QUERY

response = client.query(query: query)
```

Hide content

Response
--------

JSON

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"orders": {

"edges": [

{

"cursor": "eyJsYXN0X2lkIjoxMjYyMTY1MTYsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",

"node": {

"id": "gid://shopify/Order/126216516"

}

},

{

"cursor": "eyJsYXN0X2lkIjoxNDg5Nzc3NzYsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",

"node": {

"id": "gid://shopify/Order/148977776"

}

},

{

"cursor": "eyJsYXN0X2lkIjoyMzUyNDAzMDIsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",

"node": {

"id": "gid://shopify/Order/235240302"

}

},

{

"cursor": "eyJsYXN0X2lkIjozNTc5NDQ4NTQsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",

"node": {

"id": "gid://shopify/Order/357944854"

}

},

{

"cursor": "eyJsYXN0X2lkIjo0MDQ0ODE1NzUsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",

"node": {

"id": "gid://shopify/Order/404481575"

}

},

{

"cursor": "eyJsYXN0X2lkIjo0MDkyMTQzNjMsImxhc3RfdmFsdWUiOiIyMDA1LTA3LTMxIDE1OjU3OjExLjAwMDAwMCJ9",

"node": {


---
*Content truncated at "Updates" section*