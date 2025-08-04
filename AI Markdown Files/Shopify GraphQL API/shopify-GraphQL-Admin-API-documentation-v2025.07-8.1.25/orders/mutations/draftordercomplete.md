---
title: "draftOrderComplete"
description: "Shopify GraphQL Admin API documentation for draftordercomplete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrderComplete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete

Markdown Content:
draftOrderComplete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#main-content)

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

    *   Queries   
    *   
Mutations

        *   [draft Order Bulk Add Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderbulkaddtags)
        *   [draft Order Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderbulkdelete)
        *   [draft Order Bulk Remove Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderbulkremovetags)
        *   [draft Order Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate)
        *   [draft Order Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete)
        *   [draft Order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate)
        *   [draft Order Create From Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreatefromorder)
        *   [draft Order Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderdelete)
        *   [draft Order Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderduplicate)
        *   [draft Order Invoice Preview](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicepreview)
        *   [draft Order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend)
        *   [draft Order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate)
        *   [gift Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate)
        *   [gift Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardupdate)
        *   [order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel)
        *   [order Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture)
        *   [order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderclose)
        *   [order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate)
        *   [order Create Mandate Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreatemandatepayment)
        *   [order Create Manual Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreatemanualpayment)
        *   [order Customer Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerremove)
        *   [order Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderdelete)
        *   [order Edit Add Custom Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddcustomitem)
        *   [order Edit Add Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount)
        *   [order Edit Add Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddshippingline)
        *   [order Edit Add Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddvariant)
        *   [order Edit Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditbegin)
        *   [order Edit Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditcommit)
        *   [order Edit Remove Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditremovediscount)
        *   [order Edit Remove Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditremovelineitemdiscount)
        *   [order Edit Remove Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditremoveshippingline)
        *   [order Edit Set Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditsetquantity)
        *   [order Edit Update Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditupdatediscount)
        *   [order Edit Update Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditupdateshippingline)
        *   [order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend)
        *   [order Mark As Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid)
        *   [order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderopen)
        *   [order Risk Assessment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderriskassessmentcreate)
        *   [order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate)
        *   [payment Terms Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate)
        *   [refund Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate)
        *   [remove From Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removefromreturn)
        *   [return Approve Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnapproverequest)
        *   [return Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncancel)
        *   [return Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnclose)
        *   [return Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate)
        *   [return Decline Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returndeclinerequest)
        *   [return Line Item Remove From Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnlineitemremovefromreturn)
        *   [return Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnprocess)
        *   [return Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnrefund)
        *   [return Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnreopen)
        *   [return Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnrequest)
        *   [reverse Delivery Create With Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reversedeliverycreatewithshipping)
        *   [reverse Delivery Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reversedeliveryshippingupdate)
        *   [reverse Fulfillment Order Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reversefulfillmentorderdispose)
        *   [subscription Billing Attempt Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingattemptcreate)
        *   [subscription Billing Cycle Bulk Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclebulkcharge)
        *   [subscription Billing Cycle Bulk Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclebulksearch)
        *   [subscription Billing Cycle Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecharge)
        *   [subscription Billing Cycle Contract Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecontractdraftcommit)
        *   [subscription Billing Cycle Contract Draft Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecontractdraftconcatenate)
        *   [subscription Billing Cycle Contract Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecontractedit)
        *   [subscription Billing Cycle Edit Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleeditdelete)
        *   [subscription Billing Cycle Edits Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleeditsdelete)
        *   [subscription Billing Cycle Schedule Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit)
        *   [subscription Billing Cycle Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleskip)
        *   [subscription Billing Cycle Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleunskip)
        *   [subscription Contract Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractactivate)
        *   [subscription Contract Atomic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate)
        *   [subscription Contract Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcancel)
        *   [subscription Contract Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate)
        *   [subscription Contract Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractexpire)
        *   [subscription Contract Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractfail)
        *   [subscription Contract Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractpause)
        *   [subscription Contract Product Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractproductchange)
        *   [subscription Contract Set Next Billing Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractsetnextbillingdate)
        *   [subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractupdate)
        *   [subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftcommit)
        *   [subscription Draft Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountadd)
        *   [subscription Draft Discount Code Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountcodeapply)
        *   [subscription Draft Discount Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountremove)
        *   [subscription Draft Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountupdate)
        *   [subscription Draft Free Shipping Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftfreeshippingdiscountadd)
        *   [subscription Draft Free Shipping Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftfreeshippingdiscountupdate)
        *   [subscription Draft Line Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftlineadd)
        *   [subscription Draft Line Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftlineremove)
        *   [subscription Draft Line Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftlineupdate)
        *   [subscription Draft Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftupdate)
        *   [transaction Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionvoid)

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

[Anchor to draftOrderComplete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#top)
draft Order Complete
====================

mutation

Requires `write_draft_orders` access scope. Also: The user must have access to mark as paid, or set payment terms.

Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

*   Mark the order as paid immediately.
*   Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
*   Specify a custom payment amount.
*   Select a specific payment gateway.

* * *

Note

When completing a draft order, inventory is [reserved](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The draft order to complete.

[Anchor to paymentGatewayId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#arguments-paymentGatewayId)payment Gateway Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The gateway for the completed draft order.

[Anchor to sourceName](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#arguments-sourceName)source Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A channel definition handle used for sales channel attribution.

[Anchor to paymentPending](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#arguments-paymentPending)payment Pending

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Deprecated Default:false

* * *

Was this section helpful?

Yes No

[Anchor to DraftOrderCompletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#returns)Draft Order Complete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#returns-draftOrder)draft Order

•[Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

The completed draft order.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Complete a draft order

#### Description

Convert a finalized draft order into a completed [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's ready for fulfillment and payment processing. This example shows the process for completing an order. When an order is marked as paid, you receive a new order ID to track and fulfill the order. Use this example when a customer has confirmed their purchase and payment is received.

#### Query

```graphql
mutation draftOrderComplete($id: ID!) {
  draftOrderComplete(id: $id) {
    draftOrder {
      id
      order {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/276395349"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderComplete($id: ID!) { draftOrderComplete(id: $id) { draftOrder { id order { id } } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderComplete($id: ID!) {
    draftOrderComplete(id: $id) {
      draftOrder {
        id
        order {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349"
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
  mutation draftOrderComplete($id: ID!) {
    draftOrderComplete(id: $id) {
      draftOrder {
        id
        order {
          id
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderComplete($id: ID!) {
      draftOrderComplete(id: $id) {
        draftOrder {
          id
          order {
            id
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349"
    },
  },
});
``` #### Response

```json
{
  "draftOrderComplete": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349",
      "order": {
        "id": "gid://shopify/Order/1073459969"
      }
    }
  }
}
``` 
*   ### Complete a draft order using a payment gateway

#### Description

Create a draft order using the [`paymentGatewayId`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-paymentGatewayId) argument for specialized payment processing. This example demonstrates completing orders through specific payment providers, such as custom payment gateways or alternative payment methods. Learn more about [third-party payment providers](https://help.shopify.com/manual/payments/third-party-providers).

#### Query

```graphql
mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
  draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
    draftOrder {
      id
      order {
        id
        paymentGatewayNames
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/276395349",
  "paymentGatewayId": "gid://shopify/PaymentGateway/371889432"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) { draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) { draftOrder { id order { id paymentGatewayNames } } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349",
    "paymentGatewayId": "gid://shopify/PaymentGateway/371889432"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
    draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
      draftOrder {
        id
        order {
          id
          paymentGatewayNames
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349",
        "paymentGatewayId": "gid://shopify/PaymentGateway/371889432"
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
  mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
    draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
      draftOrder {
        id
        order {
          id
          paymentGatewayNames
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349",
  "paymentGatewayId": "gid://shopify/PaymentGateway/371889432"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
      draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
        draftOrder {
          id
          order {
            id
            paymentGatewayNames
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349",
        "paymentGatewayId": "gid://shopify/PaymentGateway/371889432"
    },
  },
});
``` #### Response

```json
{
  "draftOrderComplete": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349",
      "order": {
        "id": "gid://shopify/Order/1073459968",
        "paymentGatewayNames": [
          "Cash on Delivery (COD)"
        ]
      }
    }
  }
}
``` 
*   ### Completing a draft order with an invalid payment gateway returns a user error

#### Description

Create a draft order with an invalid [`paymentGatewayId`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-paymentGatewayId) to demonstrate error handling. This example shows the [`userErrors`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#returns-userErrors) response when specifying a payment gateway that doesn't exist or is disabled, helping you build robust payment processing that handles invalid payment gateway configurations.

#### Query

```graphql
mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
  draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/276395349",
  "paymentGatewayId": "gid://shopify/PaymentGateway/12121213"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) { draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) { userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349",
    "paymentGatewayId": "gid://shopify/PaymentGateway/12121213"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
    draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349",
        "paymentGatewayId": "gid://shopify/PaymentGateway/12121213"
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
  mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
    draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349",
  "paymentGatewayId": "gid://shopify/PaymentGateway/12121213"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderComplete($id: ID!, $paymentGatewayId: ID) {
      draftOrderComplete(id: $id, paymentGatewayId: $paymentGatewayId) {
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349",
        "paymentGatewayId": "gid://shopify/PaymentGateway/12121213"
    },
  },
});
``` #### Response

```json
{
  "draftOrderComplete": {
    "userErrors": [
      {
        "message": "Invalid payment gateway",
        "field": null
      }
    ]
  }
}
``` 
*   ### draftOrderComplete reference

Examples
--------

Complete a draft order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20draftOrderComplete(%24id%3A%20ID!)%20%7B%0A%20%20draftOrderComplete(id%3A%20%24id)%20%7B%0A%20%20%20%20draftOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDraftOrder%2F276395349%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation draftOrderComplete($id: ID!) {

 draftOrderComplete(id: $id) {

 draftOrder {

 id

 order {

 id

 }

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/DraftOrder/276395349"

},

},

);

const data=await response.json();

```
mutation draftOrderComplete($id: ID!) {
  draftOrderComplete(id: $id) {
    draftOrder {
      id
      order {
        id
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
"query": "mutation draftOrderComplete($id: ID!) { draftOrderComplete(id: $id) { draftOrder { id order { id } } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderComplete($id: ID!) {
    draftOrderComplete(id: $id) {
      draftOrder {
        id
        order {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderComplete($id: ID!) {
      draftOrderComplete(id: $id) {
        draftOrder {
          id
          order {
            id
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349"
    },
  },
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
  mutation draftOrderComplete($id: ID!) {
    draftOrderComplete(id: $id) {
      draftOrder {
        id
        order {
          id
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

9

1

2

3

›

⌄

{

"id": "gid://shopify/DraftOrder/276395349"

}

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

›

⌄

⌄

⌄

⌄

{

"draftOrderComplete": {

"draftOrder": {

"id": "gid://shopify/DraftOrder/276395349",

"order": {

"id": "gid://shopify/Order/1073459969"

}

}

}

}


---
*Content truncated at "Updates" section*