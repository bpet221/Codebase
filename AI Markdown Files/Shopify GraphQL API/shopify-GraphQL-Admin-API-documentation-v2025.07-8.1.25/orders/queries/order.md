---
title: "order"
description: "Shopify GraphQL Admin API documentation for order"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/order"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: order - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/order

Markdown Content:
order - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/order#main-content)

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

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order#top)
order
=====

query

The `order` query retrieves an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/order) by its ID. This query provides access to comprehensive order information such as customer details, line items, financial data, and fulfillment status.

Use the `order` query to retrieve information associated with the following processes:

*   [Order management and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps)
*   [Financial reporting](https://help.shopify.com/manual/finance)
*   [Customer purchase history](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports) and [transaction analysis](https://shopify.dev/docs/apps/launch/billing/view-charges-earnings#transaction-data-through-the-graphql-admin-api)
*   [Shipping](https://shopify.dev/docs/apps/build/checkout/delivery-shipping) and [inventory management](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps)

You can only retrieve the last 60 days worth of orders from a store by default. If you want to access older orders, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions).

For large order datasets, consider using [bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries). Bulk operations handle pagination automatically and allow you to retrieve data asynchronously without being constrained by API rate limits. Learn more about [creating orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate) and [building order management apps](https://shopify.dev/docs/apps/build/orders-fulfillment).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/order#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/order#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Order` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/order#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------

[Anchor to Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order#returns-Order)Order

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

*   ### Calculate a full duty refund

#### Description

This query retrieves the full refund amount for duty on an order by requesting a `FULL` [refund type](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundDutyRefundType). The example uses the `refundDuties` field within a [`RefundDutyInput`](https://shopify.dev/docs/api/admin-graphql/latest/input_objects/RefundDutyInput) input object to calculate the refund.

#### Query

```graphql
query suggestedRefund {
  order(id: "gid://shopify/Order/469306983") {
    suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
      refundDuties {
        amountSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        originalDuty {
          id
        }
      }
      totalDutiesSet {
        shopMoney {
          amount
          currencyCode
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
"query": "query suggestedRefund { order(id: \"gid://shopify/Order/469306983\") { suggestedRefund(refundDuties: [{dutyId: \"gid://shopify/Duty/1064114503\", refundType: FULL}]) { refundDuties { amountSet { shopMoney { amount currencyCode } } originalDuty { id } } totalDutiesSet { shopMoney { amount currencyCode } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
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
  query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
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
  data: `query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "order": {
    "suggestedRefund": {
      "refundDuties": [
        {
          "amountSet": {
            "shopMoney": {
              "amount": "8.97",
              "currencyCode": "USD"
            }
          },
          "originalDuty": {
            "id": "gid://shopify/Duty/1064114503"
          }
        }
      ],
      "totalDutiesSet": {
        "shopMoney": {
          "amount": "8.97",
          "currencyCode": "USD"
        }
      }
    }
  }
}
``` 
*   ### Calculate a proportional duty refund

#### Description

This query calculates the duty refund amount for an order using a `PROPORTIONAL` [refund type](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundDutyRefundType). The duty is refunded in proportion to the items being refunded (for example, if refunding one of three items, a third of the duty would be refunded). The example uses the [`RefundDutyInput`](https://shopify.dev/docs/api/admin-graphql/latest/input_objects/RefundDutyInput) and [`RefundLineItemInput`](https://shopify.dev/docs/api/admin-graphql/latest/input_objects/RefundLineItemInput) input objects to determine the amount that should be refunded to customers for the selected items.

#### Query

```graphql
query suggestedRefund {
  order(id: "gid://shopify/Order/469306983") {
    suggestedRefund(refundLineItems: [{lineItemId: "gid://shopify/LineItem/983004162", quantity: 1}], refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: PROPORTIONAL}]) {
      refundDuties {
        amountSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        originalDuty {
          id
        }
      }
      totalDutiesSet {
        shopMoney {
          amount
          currencyCode
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
"query": "query suggestedRefund { order(id: \"gid://shopify/Order/469306983\") { suggestedRefund(refundLineItems: [{lineItemId: \"gid://shopify/LineItem/983004162\", quantity: 1}], refundDuties: [{dutyId: \"gid://shopify/Duty/1064114503\", refundType: PROPORTIONAL}]) { refundDuties { amountSet { shopMoney { amount currencyCode } } originalDuty { id } } totalDutiesSet { shopMoney { amount currencyCode } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundLineItems: [{lineItemId: "gid://shopify/LineItem/983004162", quantity: 1}], refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: PROPORTIONAL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
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
  query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundLineItems: [{lineItemId: "gid://shopify/LineItem/983004162", quantity: 1}], refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: PROPORTIONAL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
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
  data: `query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundLineItems: [{lineItemId: "gid://shopify/LineItem/983004162", quantity: 1}], refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: PROPORTIONAL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "order": {
    "suggestedRefund": {
      "refundDuties": [
        {
          "amountSet": {
            "shopMoney": {
              "amount": "8.97",
              "currencyCode": "USD"
            }
          },
          "originalDuty": {
            "id": "gid://shopify/Duty/1064114503"
          }
        }
      ],
      "totalDutiesSet": {
        "shopMoney": {
          "amount": "8.97",
          "currencyCode": "USD"
        }
      }
    }
  }
}
``` 
*   ### Calculate a refund to store credit

#### Description

This query calculates a suggested refund for a specific [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example uses the [`RefundLineItemInput`](https://shopify.dev/docs/api/admin-graphql/latest/input_objects/RefundLineItemInput) input object to specify which line items to include in the calculation. The [`RefundMethodAllocation`](https://shopify.dev/docs/api/admin-graphql/latest/input_objects/RefundMethodAllocation) input object is used to specify if the suggested refund should be allocated to store credit or the original payment methods.

#### Query

```graphql
query SuggestedRefundToStoreCredit($id: ID!, $refundLineItems: [RefundLineItemInput!], $refundMethodAllocation: RefundMethodAllocation!) {
  order(id: $id) {
    id
    suggestedRefund(refundLineItems: $refundLineItems, refundMethodAllocation: $refundMethodAllocation) {
      subtotalSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
      refundLineItems {
        lineItem {
          id
        }
        quantity
      }
      suggestedTransactions {
        parentTransaction {
          id
        }
        gateway
        formattedGateway
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
      suggestedRefundMethods {
        __typename
        amount {
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Order/1073460046",
  "refundLineItems": [
    {
      "lineItemId": "gid://shopify/LineItem/1071823266",
      "quantity": 1
    }
  ],
  "refundMethodAllocation": "STORE_CREDIT"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query SuggestedRefundToStoreCredit($id: ID!, $refundLineItems: [RefundLineItemInput!], $refundMethodAllocation: RefundMethodAllocation!) { order(id: $id) { id suggestedRefund(refundLineItems: $refundLineItems, refundMethodAllocation: $refundMethodAllocation) { subtotalSet { presentmentMoney { amount currencyCode } } refundLineItems { lineItem { id } quantity } suggestedTransactions { parentTransaction { id } gateway formattedGateway amountSet { presentmentMoney { amount currencyCode } } } suggestedRefundMethods { __typename amount { presentmentMoney { amount currencyCode } } } } } }",
 "variables": {
    "id": "gid://shopify/Order/1073460046",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/1071823266",
        "quantity": 1
      }
    ],
    "refundMethodAllocation": "STORE_CREDIT"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query SuggestedRefundToStoreCredit($id: ID!, $refundLineItems: [RefundLineItemInput!], $refundMethodAllocation: RefundMethodAllocation!) {
    order(id: $id) {
      id
      suggestedRefund(refundLineItems: $refundLineItems, refundMethodAllocation: $refundMethodAllocation) {
        subtotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        refundLineItems {
          lineItem {
            id
          }
          quantity
        }
        suggestedTransactions {
          parentTransaction {
            id
          }
          gateway
          formattedGateway
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
        suggestedRefundMethods {
          __typename
          amount {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Order/1073460046",
        "refundLineItems": [
            {
                "lineItemId": "gid://shopify/LineItem/1071823266",
                "quantity": 1
            }
        ],
        "refundMethodAllocation": "STORE_CREDIT"
    },
  },
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
  query SuggestedRefundToStoreCredit($id: ID!, $refundLineItems: [RefundLineItemInput!], $refundMethodAllocation: RefundMethodAllocation!) {
    order(id: $id) {
      id
      suggestedRefund(refundLineItems: $refundLineItems, refundMethodAllocation: $refundMethodAllocation) {
        subtotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        refundLineItems {
          lineItem {
            id
          }
          quantity
        }
        suggestedTransactions {
          parentTransaction {
            id
          }
          gateway
          formattedGateway
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
        suggestedRefundMethods {
          __typename
          amount {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Order/1073460046",
  "refundLineItems": [
    {
      "lineItemId": "gid://shopify/LineItem/1071823266",
      "quantity": 1
    }
  ],
  "refundMethodAllocation": "STORE_CREDIT"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query SuggestedRefundToStoreCredit($id: ID!, $refundLineItems: [RefundLineItemInput!], $refundMethodAllocation: RefundMethodAllocation!) {
      order(id: $id) {
        id
        suggestedRefund(refundLineItems: $refundLineItems, refundMethodAllocation: $refundMethodAllocation) {
          subtotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          refundLineItems {
            lineItem {
              id
            }
            quantity
          }
          suggestedTransactions {
            parentTransaction {
              id
            }
            gateway
            formattedGateway
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
          }
          suggestedRefundMethods {
            __typename
            amount {
              presentmentMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Order/1073460046",
        "refundLineItems": [
            {
                "lineItemId": "gid://shopify/LineItem/1071823266",
                "quantity": 1
            }
        ],
        "refundMethodAllocation": "STORE_CREDIT"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "id": "gid://shopify/Order/1073460046",
    "suggestedRefund": {
      "subtotalSet": {
        "presentmentMoney": {
          "amount": "20.0",
          "currencyCode": "USD"
        }
      },
      "refundLineItems": [
        {
          "lineItem": {
            "id": "gid://shopify/LineItem/1071823266"
          },
          "quantity": 1
        }
      ],
      "suggestedTransactions": [
        {
          "parentTransaction": {
            "id": "gid://shopify/OrderTransaction/1068278508"
          },
          "gateway": "bogus",
          "formattedGateway": "(For Testing) Bogus Gateway",
          "amountSet": {
            "presentmentMoney": {
              "amount": "0.0",
              "currencyCode": "USD"
            }
          }
        }
      ],
      "suggestedRefundMethods": [
        {
          "__typename": "SuggestedStoreCreditRefund",
          "amount": {
            "presentmentMoney": {
              "amount": "20.0",
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Calculate a suggested refund

#### Description

This query calculates a suggested refund for a specific [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example uses the [`RefundLineItemInput`](https://shopify.dev/docs/api/admin-graphql/latest/input_objects/RefundLineItemInput) input object to specify which line items to include in the calculation and returns the subtotal of each refunded item.

#### Query

```graphql
query SuggestedRefund($id: ID!, $refundLineItems: [RefundLineItemInput!]) {
  order(id: $id) {
    id
    suggestedRefund(refundLineItems: $refundLineItems) {
      subtotalSet {
        shopMoney {
          amount
          currencyCode
        }
        presentmentMoney {
          amount
          currencyCode
        }
      }
      refundLineItems {
        lineItem {
          id
        }
        quantity
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Order/469306983",
  "refundLineItems": [
    {
      "lineItemId": "gid://shopify/LineItem/983004162",
      "quantity": 1
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query SuggestedRefund($id: ID!, $refundLineItems: [RefundLineItemInput!]) { order(id: $id) { id suggestedRefund(refundLineItems: $refundLineItems) { subtotalSet { shopMoney { amount currencyCode } presentmentMoney { amount currencyCode } } refundLineItems { lineItem { id } quantity } } } }",
 "variables": {
    "id": "gid://shopify/Order/469306983",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/983004162",
        "quantity": 1
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query SuggestedRefund($id: ID!, $refundLineItems: [RefundLineItemInput!]) {
    order(id: $id) {
      id
      suggestedRefund(refundLineItems: $refundLineItems) {
        subtotalSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
        refundLineItems {
          lineItem {
            id
          }
          quantity
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Order/469306983",
        "refundLineItems": [
            {
                "lineItemId": "gid://shopify/LineItem/983004162",
                "quantity": 1
            }
        ]
    },
  },
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
  query SuggestedRefund($id: ID!, $refundLineItems: [RefundLineItemInput!]) {
    order(id: $id) {
      id
      suggestedRefund(refundLineItems: $refundLineItems) {
        subtotalSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
        refundLineItems {
          lineItem {
            id
          }
          quantity
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Order/469306983",
  "refundLineItems": [
    {
      "lineItemId": "gid://shopify/LineItem/983004162",
      "quantity": 1
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query SuggestedRefund($id: ID!, $refundLineItems: [RefundLineItemInput!]) {
      order(id: $id) {
        id
        suggestedRefund(refundLineItems: $refundLineItems) {
          subtotalSet {
            shopMoney {
              amount
              currencyCode
            }
            presentmentMoney {
              amount
              currencyCode
            }
          }
          refundLineItems {
            lineItem {
              id
            }
            quantity
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Order/469306983",
        "refundLineItems": [
            {
                "lineItemId": "gid://shopify/LineItem/983004162",
                "quantity": 1
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "order": {
    "id": "gid://shopify/Order/469306983",
    "suggestedRefund": {
      "subtotalSet": {
        "shopMoney": {
          "amount": "8.26",
          "currencyCode": "USD"
        },
        "presentmentMoney": {
          "amount": "7.0",
          "currencyCode": "EUR"
        }
      },
      "refundLineItems": [
        {
          "lineItem": {
            "id": "gid://shopify/LineItem/983004162"
          },
          "quantity": 1
        }
      ]
    }
  }
}
``` 
*   ### Get an order using the QueryRoot.node field and a GraphQL fragment

#### Description

The following query retrieves an order, including the order name.

#### Query

```graphql
query {
  node(id: "gid://shopify/Order/148977776") {
    id
    ... on Order {
      name
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
"query": "query { node(id: \"gid://shopify/Order/148977776\") { id ... on Order { name } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    node(id: "gid://shopify/Order/148977776") {
      id
      ... on Order {
        name
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
    node(id: "gid://shopify/Order/148977776") {
      id
      ... on Order {
        name
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
    node(id: "gid://shopify/Order/148977776") {
      id
      ... on Order {
        name
      }
    }
  }`,
});
``` #### Response

```json
{
  "node": {
    "id": "gid://shopify/Order/148977776",
    "name": "#1001"
  }
}
``` 
*   ### Get metafields attached to an order

#### Description

Get a page of metafields attached to a specific order.

#### Query

```graphql
query OrderMetafields($ownerId: ID!) {
  order(id: $ownerId) {
    metafields(first: 3) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query OrderMetafields($ownerId: ID!) { order(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query OrderMetafields($ownerId: ID!) {
    order(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }`,
  {
    variables: {
        "ownerId": "gid://shopify/Order/148977776"
    },
  },
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
  query OrderMetafields($ownerId: ID!) {
    order(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }
QUERY

variables = {
  "ownerId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query OrderMetafields($ownerId: ID!) {
      order(id: $ownerId) {
        metafields(first: 3) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }`,
    "variables": {
        "ownerId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "purchase_order",
            "value": "123"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a count of fulfillments associated with an order

#### Description

This query retrieves the total number of fulfillments for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example uses the [`fulfillmentsCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-fulfillmentscount) field, which returns the count, eliminating the need to query the full list of fulfillments.

#### Query

```graphql
query FulfillmentsCount($orderId: ID!) {
  order(id: $orderId) {
    fulfillmentsCount {
      count
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentsCount($orderId: ID!) { order(id: $orderId) { fulfillmentsCount { count } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentsCount($orderId: ID!) {
    order(id: $orderId) {
      fulfillmentsCount {
        count
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
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
  query FulfillmentsCount($orderId: ID!) {
    order(id: $orderId) {
      fulfillmentsCount {
        count
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentsCount($orderId: ID!) {
      order(id: $orderId) {
        fulfillmentsCount {
          count
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "fulfillmentsCount": {
      "count": 0
    }
  }
}
``` 
*   ### Retrieve a count of transactions for an order

#### Description

This query retrieves the total number of transactions for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example uses the [`transactionsCount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-transactionsCount) field to get the total, without having to retrieve the complete transactions list.

#### Query

```graphql
query TransactionsCountForOrder($orderId: ID!) {
  order(id: $orderId) {
    transactionsCount {
      count
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query TransactionsCountForOrder($orderId: ID!) { order(id: $orderId) { transactionsCount { count } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query TransactionsCountForOrder($orderId: ID!) {
    order(id: $orderId) {
      transactionsCount {
        count
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
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
  query TransactionsCountForOrder($orderId: ID!) {
    order(id: $orderId) {
      transactionsCount {
        count
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query TransactionsCountForOrder($orderId: ID!) {
      order(id: $orderId) {
        transactionsCount {
          count
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "transactionsCount": {
      "count": 4
    }
  }
}
``` 
*   ### Retrieve a list of fulfillment orders

#### Description

This query retrieves a list of fulfillment orders for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), providing information about how the order's line items are grouped for fulfillment. It uses the `fulfillmentOrders` field to return [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects that contain data such as assigned location, delivery method, and associated line items.

#### Query

```graphql
query FulfillmentOrderList($orderId: ID!) {
  order(id: $orderId) {
    fulfillmentOrders(first: 250) {
      nodes {
        id
        createdAt
        updatedAt
        requestStatus
        status
        fulfillAt
        destination {
          id
          address1
          address2
          city
          company
          countryCode
          email
          firstName
          lastName
          phone
          province
          zip
        }
        lineItems(first: 250) {
          nodes {
            id
            totalQuantity
            inventoryItemId
            remainingQuantity
            variant {
              id
            }
          }
        }
        internationalDuties {
          incoterm
        }
        fulfillmentHolds {
          reason
          reasonNotes
        }
        fulfillBy
        deliveryMethod {
          id
          methodType
          minDeliveryDateTime
          maxDeliveryDateTime
          additionalInformation {
            instructions
            phone
          }
          serviceCode
          sourceReference
          presentedName
          brandedPromise {
            handle
            name
          }
        }
        assignedLocation {
          address1
          address2
          city
          countryCode
          location {
            id
          }
          name
          phone
          province
          zip
        }
        merchantRequests(first: 250) {
          nodes {
            message
            requestOptions
            kind
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentOrderList($orderId: ID!) { order(id: $orderId) { fulfillmentOrders(first: 250) { nodes { id createdAt updatedAt requestStatus status fulfillAt destination { id address1 address2 city company countryCode email firstName lastName phone province zip } lineItems(first: 250) { nodes { id totalQuantity inventoryItemId remainingQuantity variant { id } } } internationalDuties { incoterm } fulfillmentHolds { reason reasonNotes } fulfillBy deliveryMethod { id methodType minDeliveryDateTime maxDeliveryDateTime additionalInformation { instructions phone } serviceCode sourceReference presentedName brandedPromise { handle name } } assignedLocation { address1 address2 city countryCode location { id } name phone province zip } merchantRequests(first: 250) { nodes { message requestOptions kind } } } } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentOrderList($orderId: ID!) {
    order(id: $orderId) {
      fulfillmentOrders(first: 250) {
        nodes {
          id
          createdAt
          updatedAt
          requestStatus
          status
          fulfillAt
          destination {
            id
            address1
            address2
            city
            company
            countryCode
            email
            firstName
            lastName
            phone
            province
            zip
          }
          lineItems(first: 250) {
            nodes {
              id
              totalQuantity
              inventoryItemId
              remainingQuantity
              variant {
                id
              }
            }
          }
          internationalDuties {
            incoterm
          }
          fulfillmentHolds {
            reason
            reasonNotes
          }
          fulfillBy
          deliveryMethod {
            id
            methodType
            minDeliveryDateTime
            maxDeliveryDateTime
            additionalInformation {
              instructions
              phone
            }
            serviceCode
            sourceReference
            presentedName
            brandedPromise {
              handle
              name
            }
          }
          assignedLocation {
            address1
            address2
            city
            countryCode
            location {
              id
            }
            name
            phone
            province
            zip
          }
          merchantRequests(first: 250) {
            nodes {
              message
              requestOptions
              kind
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
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
  query FulfillmentOrderList($orderId: ID!) {
    order(id: $orderId) {
      fulfillmentOrders(first: 250) {
        nodes {
          id
          createdAt
          updatedAt
          requestStatus
          status
          fulfillAt
          destination {
            id
            address1
            address2
            city
            company
            countryCode
            email
            firstName
            lastName
            phone
            province
            zip
          }
          lineItems(first: 250) {
            nodes {
              id
              totalQuantity
              inventoryItemId
              remainingQuantity
              variant {
                id
              }
            }
          }
          internationalDuties {
            incoterm
          }
          fulfillmentHolds {
            reason
            reasonNotes
          }
          fulfillBy
          deliveryMethod {
            id
            methodType
            minDeliveryDateTime
            maxDeliveryDateTime
            additionalInformation {
              instructions
              phone
            }
            serviceCode
            sourceReference
            presentedName
            brandedPromise {
              handle
              name
            }
          }
          assignedLocation {
            address1
            address2
            city
            countryCode
            location {
              id
            }
            name
            phone
            province
            zip
          }
          merchantRequests(first: 250) {
            nodes {
              message
              requestOptions
              kind
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentOrderList($orderId: ID!) {
      order(id: $orderId) {
        fulfillmentOrders(first: 250) {
          nodes {
            id
            createdAt
            updatedAt
            requestStatus
            status
            fulfillAt
            destination {
              id
              address1
              address2
              city
              company
              countryCode
              email
              firstName
              lastName
              phone
              province
              zip
            }
            lineItems(first: 250) {
              nodes {
                id
                totalQuantity
                inventoryItemId
                remainingQuantity
                variant {
                  id
                }
              }
            }
            internationalDuties {
              incoterm
            }
            fulfillmentHolds {
              reason
              reasonNotes
            }
            fulfillBy
            deliveryMethod {
              id
              methodType
              minDeliveryDateTime
              maxDeliveryDateTime
              additionalInformation {
                instructions
                phone
              }
              serviceCode
              sourceReference
              presentedName
              brandedPromise {
                handle
                name
              }
            }
            assignedLocation {
              address1
              address2
              city
              countryCode
              location {
                id
              }
              name
              phone
              province
              zip
            }
            merchantRequests(first: 250) {
              nodes {
                message
                requestOptions
                kind
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "fulfillmentOrders": {
      "nodes": [
        {
          "id": "gid://shopify/FulfillmentOrder/564786110",
          "createdAt": "2025-04-29T14:25:19Z",
          "updatedAt": "2025-04-29T14:25:19Z",
          "requestStatus": "UNSUBMITTED",
          "status": "OPEN",
          "fulfillAt": null,
          "destination": {
            "id": "gid://shopify/FulfillmentOrderDestination/402903185",
            "address1": "123 Amoebobacterieae St",
            "address2": "Unit 806",
            "city": "Ottawa",
            "company": "",
            "countryCode": "CA",
            "email": "bob@example.com",
            "firstName": "Bob",
            "lastName": "Bobsen",
            "phone": "(555)555-5555",
            "province": "Ontario",
            "zip": "K2P0V6"
          },
          "lineItems": {
            "nodes": [
              {
                "id": "gid://shopify/FulfillmentOrderLineItem/445529754",
                "totalQuantity": 1,
                "inventoryItemId": "gid://shopify/InventoryItem/43729076",
                "remainingQuantity": 1,
                "variant": {
                  "id": "gid://shopify/ProductVariant/43729076"
                }
              }
            ]
          },
          "internationalDuties": {
            "incoterm": "DAP"
          },
          "fulfillmentHolds": [],
          "fulfillBy": null,
          "deliveryMethod": {
            "id": "gid://shopify/DeliveryMethod/889454384",
            "methodType": "SHIPPING",
            "minDeliveryDateTime": null,
            "maxDeliveryDateTime": null,
            "additionalInformation": {
              "instructions": null,
              "phone": null
            },
            "serviceCode": null,
            "sourceReference": null,
            "presentedName": null,
            "brandedPromise": null
          },
          "assignedLocation": {
            "address1": "190 MacLaren Street",
            "address2": null,
            "city": "Ottawa",
            "countryCode": "CA",
            "location": {
              "id": "gid://shopify/Location/124656943"
            },
            "name": "Shipping Origin",
            "phone": null,
            "province": "Ontario",
            "zip": "K2P 0L6"
          },
          "merchantRequests": {
            "nodes": []
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a list of transactions

#### Description

This query retrieves the first 10 transactions for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example uses the `transactions` field which returns a list of [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) objects with comprehensive data, including payment details, gateway information, and current status. The query also uses inline fragments to retrieve information about payment methods.

#### Query

```graphql
query TransactionsForOrder($orderId: ID!) {
  order(id: $orderId) {
    transactions(first: 10) {
      accountNumber
      amountSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      authorizationCode
      authorizationExpiresAt
      createdAt
      errorCode
      fees {
        amount {
          amount
          currencyCode
        }
      }
      formattedGateway
      gateway
      id
      kind
      manuallyCapturable
      maximumRefundableV2 {
        amount
        currencyCode
      }
      multiCapturable
      order {
        id
      }
      parentTransaction {
        id
      }
      paymentDetails {
        ... on CardPaymentDetails {
          paymentMethodName
        }
        ... on ShopPayInstallmentsPaymentDetails {
          paymentMethodName
        }
      }
      paymentIcon {
        url
      }
      paymentId
      processedAt
      receiptJson
      settlementCurrency
      shopifyPaymentsSet {
        refundSet {
          acquirerReferenceNumber
        }
      }
      status
      test
      totalUnsettledSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      user {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query TransactionsForOrder($orderId: ID!) { order(id: $orderId) { transactions(first: 10) { accountNumber amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } authorizationCode authorizationExpiresAt createdAt errorCode fees { amount { amount currencyCode } } formattedGateway gateway id kind manuallyCapturable maximumRefundableV2 { amount currencyCode } multiCapturable order { id } parentTransaction { id } paymentDetails { ... on CardPaymentDetails { paymentMethodName } ... on ShopPayInstallmentsPaymentDetails { paymentMethodName } } paymentIcon { url } paymentId processedAt receiptJson settlementCurrency shopifyPaymentsSet { refundSet { acquirerReferenceNumber } } status test totalUnsettledSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } user { id } } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query TransactionsForOrder($orderId: ID!) {
    order(id: $orderId) {
      transactions(first: 10) {
        accountNumber
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        authorizationCode
        authorizationExpiresAt
        createdAt
        errorCode
        fees {
          amount {
            amount
            currencyCode
          }
        }
        formattedGateway
        gateway
        id
        kind
        manuallyCapturable
        maximumRefundableV2 {
          amount
          currencyCode
        }
        multiCapturable
        order {
          id
        }
        parentTransaction {
          id
        }
        paymentDetails {
          ... on CardPaymentDetails {
            paymentMethodName
          }
          ... on ShopPayInstallmentsPaymentDetails {
            paymentMethodName
          }
        }
        paymentIcon {
          url
        }
        paymentId
        processedAt
        receiptJson
        settlementCurrency
        shopifyPaymentsSet {
          refundSet {
            acquirerReferenceNumber
          }
        }
        status
        test
        totalUnsettledSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        user {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
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
  query TransactionsForOrder($orderId: ID!) {
    order(id: $orderId) {
      transactions(first: 10) {
        accountNumber
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        authorizationCode
        authorizationExpiresAt
        createdAt
        errorCode
        fees {
          amount {
            amount
            currencyCode
          }
        }
        formattedGateway
        gateway
        id
        kind
        manuallyCapturable
        maximumRefundableV2 {
          amount
          currencyCode
        }
        multiCapturable
        order {
          id
        }
        parentTransaction {
          id
        }
        paymentDetails {
          ... on CardPaymentDetails {
            paymentMethodName
          }
          ... on ShopPayInstallmentsPaymentDetails {
            paymentMethodName
          }
        }
        paymentIcon {
          url
        }
        paymentId
        processedAt
        receiptJson
        settlementCurrency
        shopifyPaymentsSet {
          refundSet {
            acquirerReferenceNumber
          }
        }
        status
        test
        totalUnsettledSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        user {
          id
        }
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query TransactionsForOrder($orderId: ID!) {
      order(id: $orderId) {
        transactions(first: 10) {
          accountNumber
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          authorizationCode
          authorizationExpiresAt
          createdAt
          errorCode
          fees {
            amount {
              amount
              currencyCode
            }
          }
          formattedGateway
          gateway
          id
          kind
          manuallyCapturable
          maximumRefundableV2 {
            amount
            currencyCode
          }
          multiCapturable
          order {
            id
          }
          parentTransaction {
            id
          }
          paymentDetails {
            ... on CardPaymentDetails {
              paymentMethodName
            }
            ... on ShopPayInstallmentsPaymentDetails {
              paymentMethodName
            }
          }
          paymentIcon {
            url
          }
          paymentId
          processedAt
          receiptJson
          settlementCurrency
          shopifyPaymentsSet {
            refundSet {
              acquirerReferenceNumber
            }
          }
          status
          test
          totalUnsettledSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          user {
            id
          }
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "transactions": [
      {
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "11.5",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "11.5",
            "currencyCode": "USD"
          }
        },
        "authorizationCode": "0",
        "authorizationExpiresAt": null,
        "createdAt": "2005-07-31T15:57:10Z",
        "errorCode": null,
        "fees": [],
        "formattedGateway": "(For Testing) Bogus Gateway",
        "gateway": "bogus",
        "id": "gid://shopify/OrderTransaction/42239183",
        "kind": "AUTHORIZATION",
        "manuallyCapturable": false,
        "maximumRefundableV2": null,
        "multiCapturable": true,
        "order": {
          "id": "gid://shopify/Order/148977776"
        },
        "parentTransaction": null,
        "paymentDetails": null,
        "paymentIcon": null,
        "paymentId": "c148977776.1",
        "processedAt": "2005-07-31T15:57:10Z",
        "receiptJson": "{\"testcase\":true,\"response_code\":3,\"response_reason_code\":\"16\",\"response_reason_text\":\"The transaction cannot be found.\",\"avs_result_code\":\"P\",\"transaction_id\":\"0\",\"card_code\":\"M\"}",
        "settlementCurrency": null,
        "shopifyPaymentsSet": null,
        "status": "FAILURE",
        "test": false,
        "totalUnsettledSet": {
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          }
        },
        "user": null
      },
      {
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "50.0",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "50.0",
            "currencyCode": "USD"
          }
        },
        "authorizationCode": null,
        "authorizationExpiresAt": null,
        "createdAt": "2005-07-31T15:57:11Z",
        "errorCode": null,
        "fees": [],
        "formattedGateway": "(For Testing) Bogus Gateway",
        "gateway": "bogus",
        "id": "gid://shopify/OrderTransaction/607668304",
        "kind": "SALE",
        "manuallyCapturable": false,
        "maximumRefundableV2": null,
        "multiCapturable": true,
        "order": {
          "id": "gid://shopify/Order/148977776"
        },
        "parentTransaction": null,
        "paymentDetails": null,
        "paymentIcon": null,
        "paymentId": "c148977776.3",
        "processedAt": "2005-07-31T15:57:11Z",
        "receiptJson": "{\"testcase\":true}",
        "settlementCurrency": null,
        "shopifyPaymentsSet": null,
        "status": "AWAITING_RESPONSE",
        "test": false,
        "totalUnsettledSet": {
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          }
        },
        "user": null
      },
      {
        "accountNumber": "•••• •••• •••• 4242",
        "amountSet": {
          "presentmentMoney": {
            "amount": "11.5",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "11.5",
            "currencyCode": "USD"
          }
        },
        "authorizationCode": "1001",
        "authorizationExpiresAt": null,
        "createdAt": "2005-07-31T15:57:10Z",
        "errorCode": null,
        "fees": [],
        "formattedGateway": "(For Testing) Bogus Gateway",
        "gateway": "bogus",
        "id": "gid://shopify/OrderTransaction/661056787",
        "kind": "AUTHORIZATION",
        "manuallyCapturable": false,
        "maximumRefundableV2": null,
        "multiCapturable": true,
        "order": {
          "id": "gid://shopify/Order/148977776"
        },
        "parentTransaction": null,
        "paymentDetails": {
          "paymentMethodName": "card"
        },
        "paymentIcon": {
          "url": "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg.png"
        },
        "paymentId": "c148977776.1",
        "processedAt": "2005-07-31T15:57:10Z",
        "receiptJson": "{\"testcase\":true,\"response_code\":1,\"response_reason_code\":\"1\",\"response_reason_text\":\"This transaction has been approved.\",\"avs_result_code\":\"Y\",\"transaction_id\":\"123456789\",\"card_code\":\"M\"}",
        "settlementCurrency": null,
        "shopifyPaymentsSet": null,
        "status": "SUCCESS",
        "test": false,
        "totalUnsettledSet": {
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          }
        },
        "user": null
      },
      {
        "accountNumber": "•••• •••• •••• 4242",
        "amountSet": {
          "presentmentMoney": {
            "amount": "11.5",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "11.5",
            "currencyCode": "USD"
          }
        },
        "authorizationCode": "1000",
        "authorizationExpiresAt": null,
        "createdAt": "2005-07-31T15:57:11Z",
        "errorCode": null,
        "fees": [],
        "formattedGateway": "(For Testing) Bogus Gateway",
        "gateway": "bogus",
        "id": "gid://shopify/OrderTransaction/999225631",
        "kind": "CAPTURE",
        "manuallyCapturable": false,
        "maximumRefundableV2": null,
        "multiCapturable": true,
        "order": {
          "id": "gid://shopify/Order/148977776"
        },
        "parentTransaction": {
          "id": "gid://shopify/OrderTransaction/661056787"
        },
        "paymentDetails": {
          "paymentMethodName": "card"
        },
        "paymentIcon": {
          "url": "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg.png"
        },
        "paymentId": "c148977776.2",
        "processedAt": "2005-07-31T15:57:11Z",
        "receiptJson": "{\"testcase\":true}",
        "settlementCurrency": null,
        "shopifyPaymentsSet": null,
        "status": "SUCCESS",
        "test": false,
        "totalUnsettledSet": {
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          }
        },
        "user": null
      }
    ]
  }
}
``` 
*   ### Retrieve a metafield associated with an order

#### Description

Get the metafield value identified by `my_fields.purchase_order` on a specific order.

#### Query

```graphql
query OrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  order(id: $ownerId) {
    purchaseOrder: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "purchase_order",
  "ownerId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query OrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) { order(id: $ownerId) { purchaseOrder: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "purchase_order",
    "ownerId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query OrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    order(id: $ownerId) {
      purchaseOrder: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "purchase_order",
        "ownerId": "gid://shopify/Order/148977776"
    },
  },
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
  query OrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    order(id: $ownerId) {
      purchaseOrder: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "purchase_order",
  "ownerId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query OrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      order(id: $ownerId) {
        purchaseOrder: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "purchase_order",
        "ownerId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "purchaseOrder": {
      "value": "123"
    }
  }
}
``` 
*   ### Retrieve a specific order

#### Description

This query retrieves a specific [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) by its ID. The example returns basic order information including the order's name, total amount, and a list of the first 10 line items, or individual products that are included in the customer's order.

#### Query

```graphql
query {
  order(id: "gid://shopify/Order/148977776") {
    id
    name
    totalPriceSet {
      presentmentMoney {
        amount
      }
    }
    lineItems(first: 10) {
      nodes {
        id
        name
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
"query": "query { order(id: \"gid://shopify/Order/148977776\") { id name totalPriceSet { presentmentMoney { amount } } lineItems(first: 10) { nodes { id name } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order(id: "gid://shopify/Order/148977776") {
      id
      name
      totalPriceSet {
        presentmentMoney {
          amount
        }
      }
      lineItems(first: 10) {
        nodes {
          id
          name
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
    order(id: "gid://shopify/Order/148977776") {
      id
      name
      totalPriceSet {
        presentmentMoney {
          amount
        }
      }
      lineItems(first: 10) {
        nodes {
          id
          name
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
    order(id: "gid://shopify/Order/148977776") {
      id
      name
      totalPriceSet {
        presentmentMoney {
          amount
        }
      }
      lineItems(first: 10) {
        nodes {
          id
          name
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "order": {
    "id": "gid://shopify/Order/148977776",
    "name": "#1001",
    "totalPriceSet": {
      "presentmentMoney": {
        "amount": "11.5"
      }
    },
    "lineItems": {
      "nodes": [
        {
          "id": "gid://shopify/LineItem/510711879",
          "name": "Draft - 151cm"
        }
      ]
    }
  }
}
``` 
*   ### Retrieve an order using node and a fragment

#### Description

This query retrieves an [`order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) by its `id` using the `node` field. It uses a GraphQL fragment, `...on Order`, to access the order's `name` when querying through the [`Node`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node) interface.

#### Query

```graphql
query {
  node(id: "gid://shopify/Order/148977776") {
    id
    ... on Order {
      name
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
"query": "query { node(id: \"gid://shopify/Order/148977776\") { id ... on Order { name } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    node(id: "gid://shopify/Order/148977776") {
      id
      ... on Order {
        name
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
    node(id: "gid://shopify/Order/148977776") {
      id
      ... on Order {
        name
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
    node(id: "gid://shopify/Order/148977776") {
      id
      ... on Order {
        name
      }
    }
  }`,
});
``` #### Response

```json
{
  "node": {
    "id": "gid://shopify/Order/148977776",
    "name": "#1001"
  }
}
``` 
*   ### Retrieve duties applied to an order

#### Description

This query retrieves duty information for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example returns the total duty amount with `currentTotalDutiesSet` and the first 10 line items with their applied duties. Each line item includes a list of [`Duty`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Duty) objects containing harmonized system codes and amounts.

#### Query

```graphql
query {
  order(id: "gid://shopify/Order/469306983") {
    currentTotalDutiesSet {
      shopMoney {
        amount
      }
    }
    lineItems(first: 10) {
      edges {
        node {
          id
          name
          refundableQuantity
          duties {
            id
            harmonizedSystemCode
            price {
              shopMoney {
                amount
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
"query": "query { order(id: \"gid://shopify/Order/469306983\") { currentTotalDutiesSet { shopMoney { amount } } lineItems(first: 10) { edges { node { id name refundableQuantity duties { id harmonizedSystemCode price { shopMoney { amount } } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order(id: "gid://shopify/Order/469306983") {
      currentTotalDutiesSet {
        shopMoney {
          amount
        }
      }
      lineItems(first: 10) {
        edges {
          node {
            id
            name
            refundableQuantity
            duties {
              id
              harmonizedSystemCode
              price {
                shopMoney {
                  amount
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
    order(id: "gid://shopify/Order/469306983") {
      currentTotalDutiesSet {
        shopMoney {
          amount
        }
      }
      lineItems(first: 10) {
        edges {
          node {
            id
            name
            refundableQuantity
            duties {
              id
              harmonizedSystemCode
              price {
                shopMoney {
                  amount
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
    order(id: "gid://shopify/Order/469306983") {
      currentTotalDutiesSet {
        shopMoney {
          amount
        }
      }
      lineItems(first: 10) {
        edges {
          node {
            id
            name
            refundableQuantity
            duties {
              id
              harmonizedSystemCode
              price {
                shopMoney {
                  amount
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
  "order": {
    "currentTotalDutiesSet": {
      "shopMoney": {
        "amount": "8.97"
      }
    },
    "lineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/LineItem/983004162",
            "name": "Element - 151cm",
            "refundableQuantity": 1,
            "duties": [
              {
                "id": "gid://shopify/Duty/1064114503",
                "harmonizedSystemCode": "91051930",
                "price": {
                  "shopMoney": {
                    "amount": "8.97"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve fulfillments associated with an order

#### Description

This query retrieves the first 10 [fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). For each fulfillment, the example returns the first 10 [`FulfillmentLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem) objects with quantities and pricing information.

#### Query

```graphql
query FulfillmentList($orderId: ID!) {
  order(id: $orderId) {
    fulfillments(first: 10) {
      fulfillmentLineItems(first: 10) {
        edges {
          node {
            id
            lineItem {
              title
              variant {
                id
              }
            }
            quantity
            originalTotalSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      status
      estimatedDeliveryAt
      location {
        id
        legacyResourceId
      }
      service {
        handle
      }
      trackingInfo(first: 10) {
        company
        number
        url
      }
      originAddress {
        address1
        address2
        city
        countryCode
        provinceCode
        zip
      }
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentList($orderId: ID!) { order(id: $orderId) { fulfillments(first: 10) { fulfillmentLineItems(first: 10) { edges { node { id lineItem { title variant { id } } quantity originalTotalSet { shopMoney { amount currencyCode } } } } } status estimatedDeliveryAt location { id legacyResourceId } service { handle } trackingInfo(first: 10) { company number url } originAddress { address1 address2 city countryCode provinceCode zip } } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentList($orderId: ID!) {
    order(id: $orderId) {
      fulfillments(first: 10) {
        fulfillmentLineItems(first: 10) {
          edges {
            node {
              id
              lineItem {
                title
                variant {
                  id
                }
              }
              quantity
              originalTotalSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        status
        estimatedDeliveryAt
        location {
          id
          legacyResourceId
        }
        service {
          handle
        }
        trackingInfo(first: 10) {
          company
          number
          url
        }
        originAddress {
          address1
          address2
          city
          countryCode
          provinceCode
          zip
        }
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
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
  query FulfillmentList($orderId: ID!) {
    order(id: $orderId) {
      fulfillments(first: 10) {
        fulfillmentLineItems(first: 10) {
          edges {
            node {
              id
              lineItem {
                title
                variant {
                  id
                }
              }
              quantity
              originalTotalSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        status
        estimatedDeliveryAt
        location {
          id
          legacyResourceId
        }
        service {
          handle
        }
        trackingInfo(first: 10) {
          company
          number
          url
        }
        originAddress {
          address1
          address2
          city
          countryCode
          provinceCode
          zip
        }
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentList($orderId: ID!) {
      order(id: $orderId) {
        fulfillments(first: 10) {
          fulfillmentLineItems(first: 10) {
            edges {
              node {
                id
                lineItem {
                  title
                  variant {
                    id
                  }
                }
                quantity
                originalTotalSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
          status
          estimatedDeliveryAt
          location {
            id
            legacyResourceId
          }
          service {
            handle
          }
          trackingInfo(first: 10) {
            company
            number
            url
          }
          originAddress {
            address1
            address2
            city
            countryCode
            provinceCode
            zip
          }
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "fulfillments": []
  }
}
``` 
*   ### Retrieve multiple orders using GraphQL aliases

#### Description

This query retrieves two [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) in a single request using their ID. The example uses [GraphQL aliases](https://shopify.dev/docs/api/usage/graphql-queries#aliases), `order1:` and `order2:`, to request the same field multiple times without naming conflicts.

#### Query

```graphql
query {
  order1: order(id: "gid://shopify/Order/148977776") {
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
    customer {
      firstName
      lastName
    }
  }
  order2: order(id: "gid://shopify/Order/1073459961") {
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
    customer {
      firstName
      lastName
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
"query": "query { order1: order(id: \"gid://shopify/Order/148977776\") { id name createdAt displayFinancialStatus displayFulfillmentStatus totalPriceSet { shopMoney { amount currencyCode } } customer { firstName lastName } } order2: order(id: \"gid://shopify/Order/1073459961\") { id name createdAt displayFinancialStatus displayFulfillmentStatus totalPriceSet { shopMoney { amount currencyCode } } customer { firstName lastName } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order1: order(id: "gid://shopify/Order/148977776") {
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
      customer {
        firstName
        lastName
      }
    }
    order2: order(id: "gid://shopify/Order/1073459961") {
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
      customer {
        firstName
        lastName
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
    order1: order(id: "gid://shopify/Order/148977776") {
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
      customer {
        firstName
        lastName
      }
    }
    order2: order(id: "gid://shopify/Order/1073459961") {
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
      customer {
        firstName
        lastName
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
    order1: order(id: "gid://shopify/Order/148977776") {
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
      customer {
        firstName
        lastName
      }
    }
    order2: order(id: "gid://shopify/Order/1073459961") {
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
      customer {
        firstName
        lastName
      }
    }
  }`,
});
``` #### Response

```json
{
  "order1": {
    "id": "gid://shopify/Order/148977776",
    "name": "#1001",
    "createdAt": "2005-07-31T15:57:11Z",
    "displayFinancialStatus": "PAID",
    "displayFulfillmentStatus": "UNFULFILLED",
    "totalPriceSet": {
      "shopMoney": {
        "amount": "11.5",
        "currencyCode": "USD"
      }
    },
    "customer": {
      "firstName": "Bob",
      "lastName": "Bobsen"
    }
  },
  "order2": {
    "id": "gid://shopify/Order/1073459961",
    "name": "#1018",
    "createdAt": "2008-07-31T15:57:11Z",
    "displayFinancialStatus": "PAID",
    "displayFulfillmentStatus": "UNFULFILLED",
    "totalPriceSet": {
      "shopMoney": {
        "amount": "11.5",
        "currencyCode": "USD"
      }
    },
    "customer": null
  }
}
``` 
*   ### Retrieve order risk assessments

#### Description

This query retrieves fraud risk information for an `order`. It uses the `risk` field, which returns an [OrderRiskSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskSummary) object containing a list of `assessments` and a [`recommendation`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderRiskRecommendationResult).

#### Query

```graphql
query OrderRiskAssessmentsList($orderId: ID!) {
  order(id: $orderId) {
    risk {
      assessments {
        riskLevel
        provider {
          title
        }
        facts {
          description
          sentiment
        }
      }
      recommendation
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/647667644"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query OrderRiskAssessmentsList($orderId: ID!) { order(id: $orderId) { risk { assessments { riskLevel provider { title } facts { description sentiment } } recommendation } } }",
 "variables": {
    "orderId": "gid://shopify/Order/647667644"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query OrderRiskAssessmentsList($orderId: ID!) {
    order(id: $orderId) {
      risk {
        assessments {
          riskLevel
          provider {
            title
          }
          facts {
            description
            sentiment
          }
        }
        recommendation
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/647667644"
    },
  },
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
  query OrderRiskAssessmentsList($orderId: ID!) {
    order(id: $orderId) {
      risk {
        assessments {
          riskLevel
          provider {
            title
          }
          facts {
            description
            sentiment
          }
        }
        recommendation
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/647667644"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query OrderRiskAssessmentsList($orderId: ID!) {
      order(id: $orderId) {
        risk {
          assessments {
            riskLevel
            provider {
              title
            }
            facts {
              description
              sentiment
            }
          }
          recommendation
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/647667644"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "risk": {
      "assessments": [
        {
          "riskLevel": "HIGH",
          "provider": null,
          "facts": [
            {
              "description": "The order is high risk.",
              "sentiment": "NEGATIVE"
            }
          ]
        },
        {
          "riskLevel": "MEDIUM",
          "provider": {
            "title": "Private Mobile App for Channel"
          },
          "facts": []
        }
      ],
      "recommendation": "NONE"
    }
  }
}
``` 
*   ### Retrieve pinned metafield definitions associated with an order

#### Description

This query retrieves the first 10 [pinned metafield definitions](https://help.shopify.com/en/manual/custom-data/metafields/pinning-metafield-definitions) for an order.It shows each definition's name, namespace, key, and data type, ordered by pinned position.

#### Query

```graphql
query OrderMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
  order(id: $ownerId) {
    metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
      edges {
        node {
          name
          namespace
          key
          type {
            name
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "pinnedStatus": "PINNED",
  "ownerId": "gid://shopify/Order/148977776",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query OrderMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) { order(id: $ownerId) { metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) { edges { node { name namespace key type { name } } } } } }",
 "variables": {
    "pinnedStatus": "PINNED",
    "ownerId": "gid://shopify/Order/148977776",
    "first": 10,
    "sortKey": "PINNED_POSITION"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query OrderMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    order(id: $ownerId) {
      metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
        edges {
          node {
            name
            namespace
            key
            type {
              name
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "pinnedStatus": "PINNED",
        "ownerId": "gid://shopify/Order/148977776",
        "first": 10,
        "sortKey": "PINNED_POSITION"
    },
  },
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
  query OrderMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    order(id: $ownerId) {
      metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
        edges {
          node {
            name
            namespace
            key
            type {
              name
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "pinnedStatus": "PINNED",
  "ownerId": "gid://shopify/Order/148977776",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query OrderMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
      order(id: $ownerId) {
        metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
          edges {
            node {
              name
              namespace
              key
              type {
                name
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "pinnedStatus": "PINNED",
        "ownerId": "gid://shopify/Order/148977776",
        "first": 10,
        "sortKey": "PINNED_POSITION"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "metafieldDefinitions": {
      "edges": [
        {
          "node": {
            "name": "Delivery Instructions",
            "namespace": "my_fields",
            "key": "delivery_instructions",
            "type": {
              "name": "single_line_text_field"
            }
          }
        },
        {
          "node": {
            "name": "Purchase Order",
            "namespace": "my_fields",
            "key": "purchase_order",
            "type": {
              "name": "single_line_text_field"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve shipping lines for an order

#### Description

This query retrieves the first 10 shipping lines for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), including lines removed during order edits. The example uses `includeRemovals: true` on the [`shippingLines`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-shippingLines) object to return both active and removed shipping lines. The `isRemoved` field indicates which lines were removed.

#### Query

```graphql
query shippingLinesByOrder($id: ID!) {
  order(id: $id) {
    shippingLines(first: 10, includeRemovals: true) {
      edges {
        node {
          id
          title
          isRemoved
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Order/816964372"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query shippingLinesByOrder($id: ID!) { order(id: $id) { shippingLines(first: 10, includeRemovals: true) { edges { node { id title isRemoved } } } } }",
 "variables": {
    "id": "gid://shopify/Order/816964372"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query shippingLinesByOrder($id: ID!) {
    order(id: $id) {
      shippingLines(first: 10, includeRemovals: true) {
        edges {
          node {
            id
            title
            isRemoved
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Order/816964372"
    },
  },
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
  query shippingLinesByOrder($id: ID!) {
    order(id: $id) {
      shippingLines(first: 10, includeRemovals: true) {
        edges {
          node {
            id
            title
            isRemoved
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Order/816964372"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query shippingLinesByOrder($id: ID!) {
      order(id: $id) {
        shippingLines(first: 10, includeRemovals: true) {
          edges {
            node {
              id
              title
              isRemoved
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Order/816964372"
    },
  },
});
``` #### Response

```json
{
  "order": {
    "shippingLines": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/ShippingLine/816964372",
            "title": "Ground Service",
            "isRemoved": true
          }
        },
        {
          "node": {
            "id": "gid://shopify/ShippingLine/1072814005",
            "title": "Some shipping charge",
            "isRemoved": false
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve tax information for an order

#### Description

This query retrieves comprehensive tax information for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), including settings, totals, and line-specific details. The example uses nested `taxLines` available on [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) objects to display the applied taxes.

#### Query

```graphql
query {
  order(id: "gid://shopify/Order/53613399") {
    id
    createdAt
    currencyCode
    currentSubtotalPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    currentTotalPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    currentTotalTaxSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    name
    subtotalPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    taxExempt
    taxLines {
      rate
      title
      priceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
    }
    taxesIncluded
    subtotalPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    totalPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    totalShippingPriceSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    totalTaxSet {
      shopMoney {
        amount
        currencyCode
      }
    }
    updatedAt
    lineItems(first: 250) {
      nodes {
        unfulfilledQuantity
        fulfillmentService {
          serviceName
        }
        fulfillmentStatus
        variant {
          id
          title
        }
        id
        originalUnitPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        quantity
        requiresShipping
        sku
        title
        name
        vendor
        customAttributes {
          key
          value
        }
        taxable
        taxLines {
          rate
          title
          channelLiable
          priceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }
    shippingAddress {
      address1
      address2
      city
      country
      phone
      province
      zip
      provinceCode
      countryCodeV2
    }
    shippingLines(first: 50) {
      nodes {
        code
        originalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        taxLines {
          rate
          title
          priceSet {
            shopMoney {
              amount
              currencyCode
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
"query": "query { order(id: \"gid://shopify/Order/53613399\") { id createdAt currencyCode currentSubtotalPriceSet { shopMoney { amount currencyCode } } currentTotalPriceSet { shopMoney { amount currencyCode } } currentTotalTaxSet { shopMoney { amount currencyCode } } name subtotalPriceSet { shopMoney { amount currencyCode } } taxExempt taxLines { rate title priceSet { shopMoney { amount currencyCode } } } taxesIncluded subtotalPriceSet { shopMoney { amount currencyCode } } totalPriceSet { shopMoney { amount currencyCode } } totalShippingPriceSet { shopMoney { amount currencyCode } } totalTaxSet { shopMoney { amount currencyCode } } updatedAt lineItems(first: 250) { nodes { unfulfilledQuantity fulfillmentService { serviceName } fulfillmentStatus variant { id title } id originalUnitPriceSet { shopMoney { amount currencyCode } } quantity requiresShipping sku title name vendor customAttributes { key value } taxable taxLines { rate title channelLiable priceSet { shopMoney { amount currencyCode } } } } } shippingAddress { address1 address2 city country phone province zip provinceCode countryCodeV2 } shippingLines(first: 50) { nodes { code originalPriceSet { shopMoney { amount currencyCode } } taxLines { rate title priceSet { shopMoney { amount currencyCode } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order(id: "gid://shopify/Order/53613399") {
      id
      createdAt
      currencyCode
      currentSubtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      currentTotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      currentTotalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      name
      subtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      taxExempt
      taxLines {
        rate
        title
        priceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
      taxesIncluded
      subtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalShippingPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      updatedAt
      lineItems(first: 250) {
        nodes {
          unfulfilledQuantity
          fulfillmentService {
            serviceName
          }
          fulfillmentStatus
          variant {
            id
            title
          }
          id
          originalUnitPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          quantity
          requiresShipping
          sku
          title
          name
          vendor
          customAttributes {
            key
            value
          }
          taxable
          taxLines {
            rate
            title
            channelLiable
            priceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      shippingAddress {
        address1
        address2
        city
        country
        phone
        province
        zip
        provinceCode
        countryCodeV2
      }
      shippingLines(first: 50) {
        nodes {
          code
          originalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          taxLines {
            rate
            title
            priceSet {
              shopMoney {
                amount
                currencyCode
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
    order(id: "gid://shopify/Order/53613399") {
      id
      createdAt
      currencyCode
      currentSubtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      currentTotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      currentTotalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      name
      subtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      taxExempt
      taxLines {
        rate
        title
        priceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
      taxesIncluded
      subtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalShippingPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      updatedAt
      lineItems(first: 250) {
        nodes {
          unfulfilledQuantity
          fulfillmentService {
            serviceName
          }
          fulfillmentStatus
          variant {
            id
            title
          }
          id
          originalUnitPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          quantity
          requiresShipping
          sku
          title
          name
          vendor
          customAttributes {
            key
            value
          }
          taxable
          taxLines {
            rate
            title
            channelLiable
            priceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      shippingAddress {
        address1
        address2
        city
        country
        phone
        province
        zip
        provinceCode
        countryCodeV2
      }
      shippingLines(first: 50) {
        nodes {
          code
          originalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          taxLines {
            rate
            title
            priceSet {
              shopMoney {
                amount
                currencyCode
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
    order(id: "gid://shopify/Order/53613399") {
      id
      createdAt
      currencyCode
      currentSubtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      currentTotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      currentTotalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      name
      subtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      taxExempt
      taxLines {
        rate
        title
        priceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
      taxesIncluded
      subtotalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalShippingPriceSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      totalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      updatedAt
      lineItems(first: 250) {
        nodes {
          unfulfilledQuantity
          fulfillmentService {
            serviceName
          }
          fulfillmentStatus
          variant {
            id
            title
          }
          id
          originalUnitPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          quantity
          requiresShipping
          sku
          title
          name
          vendor
          customAttributes {
            key
            value
          }
          taxable
          taxLines {
            rate
            title
            channelLiable
            priceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      shippingAddress {
        address1
        address2
        city
        country
        phone
        province
        zip
        provinceCode
        countryCodeV2
      }
      shippingLines(first: 50) {
        nodes {
          code
          originalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          taxLines {
            rate
            title
            priceSet {
              shopMoney {
                amount
                currencyCode
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
  "order": {
    "id": "gid://shopify/Order/53613399",
    "createdAt": "2025-04-08T14:52:51Z",
    "currencyCode": "USD",
    "currentSubtotalPriceSet": {
      "shopMoney": {
        "amount": "1.0",
        "currencyCode": "USD"
      }
    },
    "currentTotalPriceSet": {
      "shopMoney": {
        "amount": "11.0",
        "currencyCode": "USD"
      }
    },
    "currentTotalTaxSet": {
      "shopMoney": {
        "amount": "0.0",
        "currencyCode": "USD"
      }
    },
    "name": "#9563",
    "subtotalPriceSet": {
      "shopMoney": {
        "amount": "15.0",
        "currencyCode": "USD"
      }
    },
    "taxExempt": false,
    "taxLines": [
      {
        "rate": 0.06,
        "title": "GST",
        "priceSet": {
          "shopMoney": {
            "amount": "0.6",
            "currencyCode": "USD"
          }
        }
      }
    ],
    "taxesIncluded": false,
    "totalPriceSet": {
      "shopMoney": {
        "amount": "16.2",
        "currencyCode": "USD"
      }
    },
    "totalShippingPriceSet": {
      "shopMoney": {
        "amount": "10.0",
        "currencyCode": "USD"
      }
    },
    "totalTaxSet": {
      "shopMoney": {
        "amount": "1.2",
        "currencyCode": "USD"
      }
    },
    "updatedAt": "2025-04-08T14:52:51Z",
    "lineItems": {
      "nodes": [
        {
          "unfulfilledQuantity": 1,
          "fulfillmentService": {
            "serviceName": "Manual"
          },
          "fulfillmentStatus": "fulfilled",
          "variant": null,
          "id": "gid://shopify/LineItem/1035841997",
          "originalUnitPriceSet": {
            "shopMoney": {
              "amount": "1.0",
              "currencyCode": "USD"
            }
          },
          "quantity": 1,
          "requiresShipping": true,
          "sku": null,
          "title": "POS sale",
          "name": "POS sale",
          "vendor": null,
          "customAttributes": [],
          "taxable": true,
          "taxLines": []
        }
      ]
    },
    "shippingAddress": {
      "address1": "511 Foothill Road",
      "address2": "",
      "city": "Bevery Hills",
      "country": "United States",
      "phone": "+1(613)555-1212",
      "province": "California",
      "zip": "90210",
      "provinceCode": "CA",
      "countryCodeV2": "US"
    },
    "shippingLines": {
      "nodes": [
        {
          "code": "Local Delivery",
          "originalPriceSet": {
            "shopMoney": {
              "amount": "10.0",
              "currencyCode": "USD"
            }
          },
          "taxLines": [
            {
              "rate": 0.06,
              "title": "GST",
              "priceSet": {
                "shopMoney": {
                  "amount": "0.6",
                  "currencyCode": "USD"
                }
              }
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the first 10 sales agreements for a modified order

#### Description

This query retrieves the first 10 [sales agreements](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement) for a modified [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). This example retrieves sale records with negative quantities, indicating items that were removed during edits. This allows you to monitor both the original purchases and any subsequent modifications.

#### Query

```graphql
query {
  order(id: "gid://shopify/Order/116757651") {
    agreements(first: 10) {
      edges {
        node {
          id
          happenedAt
          sales(first: 10) {
            edges {
              node {
                actionType
                lineType
                quantity
                totalAmount {
                  shopMoney {
                    amount
                  }
                }
                ... on ProductSale {
                  lineItem {
                    id
                    name
                  }
                }
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
"query": "query { order(id: \"gid://shopify/Order/116757651\") { agreements(first: 10) { edges { node { id happenedAt sales(first: 10) { edges { node { actionType lineType quantity totalAmount { shopMoney { amount } } ... on ProductSale { lineItem { id name } } } } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order(id: "gid://shopify/Order/116757651") {
      agreements(first: 10) {
        edges {
          node {
            id
            happenedAt
            sales(first: 10) {
              edges {
                node {
                  actionType
                  lineType
                  quantity
                  totalAmount {
                    shopMoney {
                      amount
                    }
                  }
                  ... on ProductSale {
                    lineItem {
                      id
                      name
                    }
                  }
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
    order(id: "gid://shopify/Order/116757651") {
      agreements(first: 10) {
        edges {
          node {
            id
            happenedAt
            sales(first: 10) {
              edges {
                node {
                  actionType
                  lineType
                  quantity
                  totalAmount {
                    shopMoney {
                      amount
                    }
                  }
                  ... on ProductSale {
                    lineItem {
                      id
                      name
                    }
                  }
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
    order(id: "gid://shopify/Order/116757651") {
      agreements(first: 10) {
        edges {
          node {
            id
            happenedAt
            sales(first: 10) {
              edges {
                node {
                  actionType
                  lineType
                  quantity
                  totalAmount {
                    shopMoney {
                      amount
                    }
                  }
                  ... on ProductSale {
                    lineItem {
                      id
                      name
                    }
                  }
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
  "order": {
    "agreements": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/SalesAgreement/621397082",
            "happenedAt": "2019-04-15T15:57:11Z",
            "sales": {
              "edges": [
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "PRODUCT",
                    "quantity": 3,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "31.05"
                      }
                    },
                    "lineItem": {
                      "id": "gid://shopify/LineItem/114976433",
                      "name": "Wall Climber - 158cm"
                    }
                  }
                },
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "PRODUCT",
                    "quantity": 2,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "20.7"
                      }
                    },
                    "lineItem": {
                      "id": "gid://shopify/LineItem/763128379",
                      "name": "Hill Zipper - 151cm"
                    }
                  }
                },
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "SHIPPING",
                    "quantity": null,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "5.0"
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/SalesAgreement/731429684",
            "happenedAt": "2019-04-16T11:52:10Z",
            "sales": {
              "edges": [
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "PRODUCT",
                    "quantity": 2,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "38.28"
                      }
                    },
                    "lineItem": {
                      "id": "gid://shopify/LineItem/1001351938",
                      "name": "Custom Zebra"
                    }
                  }
                },
                {
                  "node": {
                    "actionType": "RETURN",
                    "lineType": "PRODUCT",
                    "quantity": -2,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "-20.7"
                      }
                    },
                    "lineItem": {
                      "id": "gid://shopify/LineItem/114976433",
                      "name": "Wall Climber - 158cm"
                    }
                  }
                },
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "PRODUCT",
                    "quantity": 2,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "20.7"
                      }
                    },
                    "lineItem": {
                      "id": "gid://shopify/LineItem/763128379",
                      "name": "Hill Zipper - 151cm"
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve the first 10 sales agreements for an order

#### Description

This query retrieves the first 10 [sales agreements](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement) for an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The example uses inline fragments, `...on ProductSale` and `...on ShippingLineSale`, to return type-specific fields for product purchases and shipping charges.

#### Query

```graphql
query {
  order(id: "gid://shopify/Order/816964372") {
    agreements(first: 10) {
      edges {
        node {
          id
          happenedAt
          sales(first: 10) {
            edges {
              node {
                actionType
                lineType
                quantity
                totalAmount {
                  shopMoney {
                    amount
                  }
                }
                ... on ProductSale {
                  lineItem {
                    id
                    name
                  }
                }
                ... on ShippingLineSale {
                  shippingLine {
                    id
                  }
                }
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
"query": "query { order(id: \"gid://shopify/Order/816964372\") { agreements(first: 10) { edges { node { id happenedAt sales(first: 10) { edges { node { actionType lineType quantity totalAmount { shopMoney { amount } } ... on ProductSale { lineItem { id name } } ... on ShippingLineSale { shippingLine { id } } } } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    order(id: "gid://shopify/Order/816964372") {
      agreements(first: 10) {
        edges {
          node {
            id
            happenedAt
            sales(first: 10) {
              edges {
                node {
                  actionType
                  lineType
                  quantity
                  totalAmount {
                    shopMoney {
                      amount
                    }
                  }
                  ... on ProductSale {
                    lineItem {
                      id
                      name
                    }
                  }
                  ... on ShippingLineSale {
                    shippingLine {
                      id
                    }
                  }
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
    order(id: "gid://shopify/Order/816964372") {
      agreements(first: 10) {
        edges {
          node {
            id
            happenedAt
            sales(first: 10) {
              edges {
                node {
                  actionType
                  lineType
                  quantity
                  totalAmount {
                    shopMoney {
                      amount
                    }
                  }
                  ... on ProductSale {
                    lineItem {
                      id
                      name
                    }
                  }
                  ... on ShippingLineSale {
                    shippingLine {
                      id
                    }
                  }
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
    order(id: "gid://shopify/Order/816964372") {
      agreements(first: 10) {
        edges {
          node {
            id
            happenedAt
            sales(first: 10) {
              edges {
                node {
                  actionType
                  lineType
                  quantity
                  totalAmount {
                    shopMoney {
                      amount
                    }
                  }
                  ... on ProductSale {
                    lineItem {
                      id
                      name
                    }
                  }
                  ... on ShippingLineSale {
                    shippingLine {
                      id
                    }
                  }
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
  "order": {
    "agreements": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/SalesAgreement/466882664",
            "happenedAt": "2005-07-31T15:57:11Z",
            "sales": {
              "edges": [
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "SHIPPING",
                    "quantity": null,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "5.0"
                      }
                    },
                    "shippingLine": {
                      "id": "gid://shopify/ShippingLine/816964372"
                    }
                  }
                },
                {
                  "node": {
                    "actionType": "ORDER",
                    "lineType": "PRODUCT",
                    "quantity": 3,
                    "totalAmount": {
                      "shopMoney": {
                        "amount": "30.0"
                      }
                    },
                    "lineItem": {
                      "id": "gid://shopify/LineItem/406313524",
                      "name": "Draft - 151cm"
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Calculate a full duty refund

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20suggestedRefund%20%7B%0A%20%20order(id%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F469306983%22)%20%7B%0A%20%20%20%20suggestedRefund(refundDuties%3A%20%5B%7BdutyId%3A%20%22gid%3A%2F%2Fshopify%2FDuty%2F1064114503%22%2C%20refundType%3A%20FULL%7D%5D)%20%7B%0A%20%20%20%20%20%20refundDuties%20%7B%0A%20%20%20%20%20%20%20%20amountSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20originalDuty%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalDutiesSet%20%7B%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query suggestedRefund {

 order(id: "gid://shopify/Order/469306983") {

 suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {

 refundDuties {

 amountSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 originalDuty {

 id

 }

 }

 totalDutiesSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query suggestedRefund {
  order(id: "gid://shopify/Order/469306983") {
    suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
      refundDuties {
        amountSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        originalDuty {
          id
        }
      }
      totalDutiesSet {
        shopMoney {
          amount
          currencyCode
        }
      }
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
"query": "query suggestedRefund { order(id: \"gid://shopify/Order/469306983\") { suggestedRefund(refundDuties: [{dutyId: \"gid://shopify/Duty/1064114503\", refundType: FULL}]) { refundDuties { amountSet { shopMoney { amount currencyCode } } originalDuty { id } } totalDutiesSet { shopMoney { amount currencyCode } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
          }
        }
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
  query suggestedRefund {
    order(id: "gid://shopify/Order/469306983") {
      suggestedRefund(refundDuties: [{dutyId: "gid://shopify/Duty/1064114503", refundType: FULL}]) {
        refundDuties {
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          originalDuty {
            id
          }
        }
        totalDutiesSet {
          shopMoney {
            amount
            currencyCode
          }
        }
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

{

"order": {

"suggestedRefund": {

"refundDuties": [

{

"amountSet": {

"shopMoney": {

"amount": "8.97",

"currencyCode": "USD"

}

},

"originalDuty": {

"id": "gid://shopify/Duty/1064114503"

}

}

],

"totalDutiesSet": {

"shopMoney": {

"amount": "8.97",

"currencyCode": "USD"

}

}

}

}

}


---
*Content truncated at "Updates" section*