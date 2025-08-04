---
title: "orderCancel"
description: "Shopify GraphQL Admin API documentation for ordercancel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderCancel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel

Markdown Content:
orderCancel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#main-content)

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

[Anchor to orderCancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#top)
order Cancel
============

mutation

Requires `write_orders` access scope or `write_marketplace_orders` access scope. Also: This action cannot be reversed.

Cancels an order, with options for refunding, restocking inventory, and customer notification.

* * *

Caution

Order cancellation is irreversible. An order that has been cancelled can't be restored to its original state.

* * *

Use the `orderCancel` mutation to programmatically cancel orders in scenarios such as:

*   Customer-requested cancellations due to size, color, or other preference changes
*   Payment processing failures or declined transactions
*   Fraud detection and prevention
*   Insufficient inventory availability
*   Staff errors in order processing
*   Wholesale or B2B order management workflows

The `orderCancel` mutation provides flexible refund options including refunding to original payment methods or issuing store credit. If a payment was only authorized (temporarily held) but not yet charged, that hold will be automatically released when the order is cancelled, even if you choose not to refund other payments.

The mutation supports different cancellation reasons: customer requests, payment declines, fraud, inventory issues, staff errors, or other unspecified reasons. Each cancellation can include optional staff notes for internal documentation (notes aren't visible to customers).

An order can only be cancelled if it meets the following criteria:

*   The order hasn't already been cancelled.
*   The order has no pending payment authorizations.
*   The order has no active returns in progress.
*   The order has no outstanding fulfillments that can't be cancelled.

Orders might be assigned to locations that become [deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations) after the order was created. When cancelling such orders, inventory behavior depends on payment status:

*   **Paid orders**: Cancellation will fail with an error if restocking is enabled, since inventory can't be returned to deactivated locations.
*   **Unpaid orders**: Cancellation succeeds but inventory is not restocked anywhere, even when the restock option is enabled. The committed inventory effectively becomes unavailable rather than being returned to stock at the deactivated location.

After you cancel an order, you can still make limited updates to certain fields (like notes and tags) using the [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).

For partial refunds or more complex refund scenarios on active orders, such as refunding only specific line items while keeping the rest of the order fulfilled, consider using the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate) mutation instead of full order cancellation.

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments)
Arguments
---------

[Anchor to notifyCustomer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-notifyCustomer)notify Customer

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether to send a notification to the customer about the order cancellation.

[Anchor to orderId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-orderId)order Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the order to be canceled.

[Anchor to reason](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-reason)reason

•[Order Cancel Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelReason)

required

The reason for canceling the order.

Show enum values

[Anchor to refundMethod](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-refundMethod)refund Method

•[Order Cancel Refund Method Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCancelRefundMethodInput)

Indicates how to refund the amount paid by the customer. Authorized payments will be voided regardless of this setting.

Show input fields

[Anchor to restock](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-restock)restock

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

required

Whether to restock the inventory committed to the order. For unpaid orders fulfilled from locations that have been deactivated, inventory will not be restocked to the deactivated locations even if this argument is set to true.

[Anchor to staffNote](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-staffNote)staff Note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Default:null

A staff-facing note about the order cancellation. This is not visible to the customer. Maximum length of 255 characters.

[Anchor to refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#arguments-refund)refund

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Deprecated

* * *

Was this section helpful?

Yes No

[Anchor to OrderCancelPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#returns)Order Cancel Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The job that asynchronously cancels the order.

Show fields

[Anchor to orderCancelUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#returns-orderCancelUserErrors)order Cancel User Errors

•[[Order Cancel User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancelUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null Deprecated

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Cancel an order

#### Description

Cancel an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) with full refund to the original payment method. The mutation refunds the customer, sends a notification, restocks inventory, and records a cancellation reason with staff notes. The response includes [job details](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) and comprehensive order status information.

#### Query

```graphql
mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
  orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
    job {
      id
      done
    }
    orderCancelUserErrors {
      field
      message
      code
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776",
  "notifyCustomer": true,
  "refundMethod": {
    "originalPaymentMethodsRefund": true
  },
  "restock": true,
  "reason": "CUSTOMER",
  "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) { orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776",
    "notifyCustomer": true,
    "refundMethod": {
      "originalPaymentMethodsRefund": true
    },
    "restock": true,
    "reason": "CUSTOMER",
    "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776",
        "notifyCustomer": true,
        "refundMethod": {
            "originalPaymentMethodsRefund": true
        },
        "restock": true,
        "reason": "CUSTOMER",
        "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
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
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776",
  "notifyCustomer": true,
  "refundMethod": {
    "originalPaymentMethodsRefund": true
  },
  "restock": true,
  "reason": "CUSTOMER",
  "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776",
        "notifyCustomer": true,
        "refundMethod": {
            "originalPaymentMethodsRefund": true
        },
        "restock": true,
        "reason": "CUSTOMER",
        "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
    },
  },
});
``` #### Response

```json
{
  "orderCancel": {
    "job": {
      "id": "gid://shopify/Job/1fb9ff6d-d99c-49cf-80c5-6f915f0735ad",
      "done": false
    },
    "orderCancelUserErrors": [],
    "userErrors": []
  }
}
``` 
*   ### Cancel an order and refund to store credit

#### Description

Cancel an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and refund the payment to the customer's store credit account. The mutation creates store credit with an expiration date and maintains the refundable amount for future use. This example demonstrates the alternative refund method for providing customer value without processing traditional refunds.

#### Query

```graphql
mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
  orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
    job {
      id
      done
    }
    orderCancelUserErrors {
      field
      message
      code
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776",
  "refundMethod": {
    "storeCreditRefund": {
      "expiresAt": "2026-06-19T23:35:01-04:00"
    }
  },
  "restock": true,
  "reason": "CUSTOMER"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) { orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776",
    "refundMethod": {
      "storeCreditRefund": {
        "expiresAt": "2026-06-19T23:35:01-04:00"
      }
    },
    "restock": true,
    "reason": "CUSTOMER"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776",
        "refundMethod": {
            "storeCreditRefund": {
                "expiresAt": "2026-06-19T23:35:01-04:00"
            }
        },
        "restock": true,
        "reason": "CUSTOMER"
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
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776",
  "refundMethod": {
    "storeCreditRefund": {
      "expiresAt": "2026-06-19T23:35:01-04:00"
    }
  },
  "restock": true,
  "reason": "CUSTOMER"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776",
        "refundMethod": {
            "storeCreditRefund": {
                "expiresAt": "2026-06-19T23:35:01-04:00"
            }
        },
        "restock": true,
        "reason": "CUSTOMER"
    },
  },
});
``` #### Response

```json
{
  "orderCancel": {
    "job": {
      "id": "gid://shopify/Job/fce26225-36ae-4ae8-b42e-793a8c6bbdaa",
      "done": false
    },
    "orderCancelUserErrors": [],
    "userErrors": []
  }
}
``` 
*   ### Cancel an order without refunding

#### Description

Cancel an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) without refunding the customer while still voiding authorized payments. The mutation cancels the order and restocks inventory but maintains the refundable amount, allowing for manual refund processing later. This example demonstrates order cancellation without automatic customer refunds.

#### Query

```graphql
mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
  orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
    job {
      id
      done
    }
    orderCancelUserErrors {
      field
      message
      code
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/148977776",
  "refundMethod": {
    "originalPaymentMethodsRefund": false
  },
  "restock": true,
  "reason": "INVENTORY"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) { orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776",
    "refundMethod": {
      "originalPaymentMethodsRefund": false
    },
    "restock": true,
    "reason": "INVENTORY"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
    orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776",
        "refundMethod": {
            "originalPaymentMethodsRefund": false
        },
        "restock": true,
        "reason": "INVENTORY"
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
  mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
    orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776",
  "refundMethod": {
    "originalPaymentMethodsRefund": false
  },
  "restock": true,
  "reason": "INVENTORY"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderCancel($orderId: ID!, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!) {
      orderCancel(orderId: $orderId, refundMethod: $refundMethod, restock: $restock, reason: $reason) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776",
        "refundMethod": {
            "originalPaymentMethodsRefund": false
        },
        "restock": true,
        "reason": "INVENTORY"
    },
  },
});
``` #### Response

```json
{
  "orderCancel": {
    "job": {
      "id": "gid://shopify/Job/90d193b2-6e66-49e9-b594-09abcbe48c1d",
      "done": false
    },
    "orderCancelUserErrors": [],
    "userErrors": []
  }
}
``` 
*   ### orderCancel reference

Examples
--------

Cancel an order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderCancel(%24orderId%3A%20ID!%2C%20%24notifyCustomer%3A%20Boolean%2C%20%24refundMethod%3A%20OrderCancelRefundMethodInput!%2C%20%24restock%3A%20Boolean!%2C%20%24reason%3A%20OrderCancelReason!%2C%20%24staffNote%3A%20String)%20%7B%0A%20%20orderCancel(orderId%3A%20%24orderId%2C%20notifyCustomer%3A%20%24notifyCustomer%2C%20refundMethod%3A%20%24refundMethod%2C%20restock%3A%20%24restock%2C%20reason%3A%20%24reason%2C%20staffNote%3A%20%24staffNote)%20%7B%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20done%0A%20%20%20%20%7D%0A%20%20%20%20orderCancelUserErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F148977776%22%2C%0A%20%20%22notifyCustomer%22%3A%20true%2C%0A%20%20%22refundMethod%22%3A%20%7B%0A%20%20%20%20%22originalPaymentMethodsRefund%22%3A%20true%0A%20%20%7D%2C%0A%20%20%22restock%22%3A%20true%2C%0A%20%20%22reason%22%3A%20%22CUSTOMER%22%2C%0A%20%20%22staffNote%22%3A%20%22Wrong%20size.%20Customer%20reached%20out%20saying%20they%20already%20re-purchased%20the%20correct%20size.%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {

 orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {

 job {

 id

 done

 }

 orderCancelUserErrors {

 field

 message

 code

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"orderId":"gid://shopify/Order/148977776",

"notifyCustomer":true,

"refundMethod":{

"originalPaymentMethodsRefund":true

},

"restock":true,

"reason":"CUSTOMER",

"staffNote":"Wrong size. Customer reached out saying they already re-purchased the correct size."

},

},

);

const data=await response.json();

```
mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
  orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
    job {
      id
      done
    }
    orderCancelUserErrors {
      field
      message
      code
    }
    userErrors {
      field
      message
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
"query": "mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) { orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) { job { id done } orderCancelUserErrors { field message code } userErrors { field message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776",
    "notifyCustomer": true,
    "refundMethod": {
      "originalPaymentMethodsRefund": true
    },
    "restock": true,
    "reason": "CUSTOMER",
    "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/148977776",
        "notifyCustomer": true,
        "refundMethod": {
            "originalPaymentMethodsRefund": true
        },
        "restock": true,
        "reason": "CUSTOMER",
        "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
      orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
        job {
          id
          done
        }
        orderCancelUserErrors {
          field
          message
          code
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776",
        "notifyCustomer": true,
        "refundMethod": {
            "originalPaymentMethodsRefund": true
        },
        "restock": true,
        "reason": "CUSTOMER",
        "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
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
  mutation OrderCancel($orderId: ID!, $notifyCustomer: Boolean, $refundMethod: OrderCancelRefundMethodInput!, $restock: Boolean!, $reason: OrderCancelReason!, $staffNote: String) {
    orderCancel(orderId: $orderId, notifyCustomer: $notifyCustomer, refundMethod: $refundMethod, restock: $restock, reason: $reason, staffNote: $staffNote) {
      job {
        id
        done
      }
      orderCancelUserErrors {
        field
        message
        code
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/148977776",
  "notifyCustomer": true,
  "refundMethod": {
    "originalPaymentMethodsRefund": true
  },
  "restock": true,
  "reason": "CUSTOMER",
  "staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

{

"orderId": "gid://shopify/Order/148977776",

"notifyCustomer": true,

"refundMethod": {

"originalPaymentMethodsRefund": true

},

"restock": true,

"reason": "CUSTOMER",

"staffNote": "Wrong size. Customer reached out saying they already re-purchased the correct size."

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

{

"orderCancel": {

"job": {

"id": "gid://shopify/Job/1fb9ff6d-d99c-49cf-80c5-6f915f0735ad",

"done": false

},

"orderCancelUserErrors": [],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*