---
title: "orderCapture"
description: "Shopify GraphQL Admin API documentation for ordercapture"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderCapture - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture

Markdown Content:
orderCapture - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#main-content)

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

[Anchor to orderCapture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#top)
order Capture
=============

mutation

Requires `write_orders` access scope or `write_marketplace_orders` access scope. Also: The user must have capture_payments_for_orders permission.

Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously reserved by an authorization transaction.

The `orderCapture` mutation can be used in the following scenarios:

*   To capture the full amount of an authorized transaction
*   To capture a partial payment by specifying an amount less than the total order amount
*   To perform multiple captures on the same order, as long as the order transaction is [multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

* * *

Note

Multi-capture functionality is only available to stores on a [Shopify Plus plan](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan). For multi-currency orders, the [`currency`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency) field is required and should match the presentment currency from the order.

* * *

After capturing a payment, you can:

*   View the transaction details including status, amount, and processing information.
*   Track the captured amount in both shop and presentment currencies.
*   Monitor the transaction's settlement status.

Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#arguments-input)input

•[Order Capture Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput)

required

The input for the mutation.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to OrderCapturePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#returns)Order Capture Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to transaction](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#returns-transaction)transaction

•[Order Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

The created capture transaction.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Capture a partial payment amount

#### Description

Capture a partial amount from an authorized payment for split shipments or partial order fulfillment. This example captures $50 from a larger authorized amount, enabling incremental payment collection as you ship different parts of an order.

#### Query

```graphql
mutation orderCapturePartial($input: OrderCaptureInput!) {
  orderCapture(input: $input) {
    transaction {
      id
      kind
      status
      amountSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
      order {
        id
        totalCapturable
        capturable
      }
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
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "50.00"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderCapturePartial($input: OrderCaptureInput!) { orderCapture(input: $input) { transaction { id kind status amountSet { presentmentMoney { amount currencyCode } } order { id totalCapturable capturable } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/431501862",
      "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
      "amount": "50.00"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCapturePartial($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        id
        kind
        status
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        order {
          id
          totalCapturable
          capturable
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "50.00"
        }
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
  mutation orderCapturePartial($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        id
        kind
        status
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        order {
          id
          totalCapturable
          capturable
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "50.00"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCapturePartial($input: OrderCaptureInput!) {
      orderCapture(input: $input) {
        transaction {
          id
          kind
          status
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          order {
            id
            totalCapturable
            capturable
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "50.00"
        }
    },
  },
});
``` #### Response

```json
{
  "orderCapture": {
    "transaction": {
      "id": "gid://shopify/OrderTransaction/1068278474",
      "kind": "CAPTURE",
      "status": "SUCCESS",
      "amountSet": {
        "presentmentMoney": {
          "amount": "50.0",
          "currencyCode": "USD"
        }
      },
      "order": {
        "id": "gid://shopify/Order/431501862",
        "totalCapturable": "950.00",
        "capturable": true
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Capture final payment for multi-part orders

#### Description

Create a multi-capture sequence using the [`finalCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.finalCapture) input to close the authorization. This example captures the remaining authorized amount and prevents future captures on the same authorization, ensuring the payment authorization is completed.

#### Query

```graphql
mutation orderCaptureFinal($input: OrderCaptureInput!) {
  orderCapture(input: $input) {
    transaction {
      id
      kind
      status
      amountSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
      multiCapturable
      order {
        id
        capturable
        totalCapturable
      }
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
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "1000.00",
    "finalCapture": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderCaptureFinal($input: OrderCaptureInput!) { orderCapture(input: $input) { transaction { id kind status amountSet { presentmentMoney { amount currencyCode } } multiCapturable order { id capturable totalCapturable } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/431501862",
      "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
      "amount": "1000.00",
      "finalCapture": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCaptureFinal($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        id
        kind
        status
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        multiCapturable
        order {
          id
          capturable
          totalCapturable
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "1000.00",
            "finalCapture": true
        }
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
  mutation orderCaptureFinal($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        id
        kind
        status
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        multiCapturable
        order {
          id
          capturable
          totalCapturable
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "1000.00",
    "finalCapture": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCaptureFinal($input: OrderCaptureInput!) {
      orderCapture(input: $input) {
        transaction {
          id
          kind
          status
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          multiCapturable
          order {
            id
            capturable
            totalCapturable
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "1000.00",
            "finalCapture": true
        }
    },
  },
});
``` #### Response

```json
{
  "orderCapture": {
    "transaction": {
      "id": "gid://shopify/OrderTransaction/1068278473",
      "kind": "CAPTURE",
      "status": "SUCCESS",
      "amountSet": {
        "presentmentMoney": {
          "amount": "1000.0",
          "currencyCode": "USD"
        }
      },
      "multiCapturable": true,
      "order": {
        "id": "gid://shopify/Order/431501862",
        "capturable": false,
        "totalCapturable": "0.00"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Capture payment for an authorized order

#### Description

Capture the full authorized amount for an order after products are ready to ship and inventory is confirmed. This example demonstrates the standard payment capture process where merchants collect payment from customers after order fulfillment conditions are met, transitioning from payment authorization to final collection. The response includes comprehensive [`transaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) details with payment status and amount.

#### Query

```graphql
mutation orderCapture($input: OrderCaptureInput!) {
  orderCapture(input: $input) {
    transaction {
      amountSet {
        presentmentMoney {
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
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "1000.00"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderCapture($input: OrderCaptureInput!) { orderCapture(input: $input) { transaction { amountSet { presentmentMoney { amount currencyCode } } authorizationCode authorizationExpiresAt createdAt errorCode fees { amount { amount currencyCode } } id kind manuallyCapturable maximumRefundableV2 { amount currencyCode } multiCapturable order { id } parentTransaction { id } paymentDetails { ... on CardPaymentDetails { paymentMethodName } ... on ShopPayInstallmentsPaymentDetails { paymentMethodName } } paymentIcon { url } paymentId processedAt receiptJson settlementCurrency shopifyPaymentsSet { refundSet { acquirerReferenceNumber } } status test totalUnsettledSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } user { id } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/431501862",
      "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
      "amount": "1000.00"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCapture($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        amountSet {
          presentmentMoney {
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
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "1000.00"
        }
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
  mutation orderCapture($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        amountSet {
          presentmentMoney {
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
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "1000.00"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCapture($input: OrderCaptureInput!) {
      orderCapture(input: $input) {
        transaction {
          amountSet {
            presentmentMoney {
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
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "1000.00"
        }
    },
  },
});
``` #### Response

```json
{
  "orderCapture": {
    "transaction": {
      "amountSet": {
        "presentmentMoney": {
          "amount": "1000.0",
          "currencyCode": "USD"
        }
      },
      "authorizationCode": null,
      "authorizationExpiresAt": null,
      "createdAt": "2025-06-26T19:23:48Z",
      "errorCode": null,
      "fees": [],
      "id": "gid://shopify/OrderTransaction/1068278475",
      "kind": "CAPTURE",
      "manuallyCapturable": false,
      "maximumRefundableV2": null,
      "multiCapturable": true,
      "order": {
        "id": "gid://shopify/Order/431501862"
      },
      "parentTransaction": {
        "id": "gid://shopify/OrderTransaction/336526656"
      },
      "paymentDetails": null,
      "paymentIcon": null,
      "paymentId": "#1014.3",
      "processedAt": "2025-06-26T19:23:48Z",
      "receiptJson": "{}",
      "settlementCurrency": null,
      "shopifyPaymentsSet": null,
      "status": "SUCCESS",
      "test": true,
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
    "userErrors": []
  }
}
``` 
*   ### orderCapture reference

Examples
--------

Capture a partial payment amount

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20orderCapturePartial(%24input%3A%20OrderCaptureInput!)%20%7B%0A%20%20orderCapture(input%3A%20%24input)%20%7B%0A%20%20%20%20transaction%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20kind%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20amountSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20totalCapturable%0A%20%20%20%20%20%20%20%20capturable%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F431501862%22%2C%0A%20%20%20%20%22parentTransactionId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrderTransaction%2F336526656%22%2C%0A%20%20%20%20%22amount%22%3A%20%2250.00%22%0A%20%20%7D%0A%7D)Copy

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

37

38

39

40

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation orderCapturePartial($input: OrderCaptureInput!) {

 orderCapture(input: $input) {

 transaction {

 id

 kind

 status

 amountSet {

 presentmentMoney {

 amount

 currencyCode

 }

 }

 order {

 id

 totalCapturable

 capturable

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"id":"gid://shopify/Order/431501862",

"parentTransactionId":"gid://shopify/OrderTransaction/336526656",

"amount":"50.00"

}

},

},

);

const data=await response.json();

```
mutation orderCapturePartial($input: OrderCaptureInput!) {
  orderCapture(input: $input) {
    transaction {
      id
      kind
      status
      amountSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
      order {
        id
        totalCapturable
        capturable
      }
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
"query": "mutation orderCapturePartial($input: OrderCaptureInput!) { orderCapture(input: $input) { transaction { id kind status amountSet { presentmentMoney { amount currencyCode } } order { id totalCapturable capturable } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/431501862",
      "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
      "amount": "50.00"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCapturePartial($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        id
        kind
        status
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        order {
          id
          totalCapturable
          capturable
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "50.00"
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCapturePartial($input: OrderCaptureInput!) {
      orderCapture(input: $input) {
        transaction {
          id
          kind
          status
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          order {
            id
            totalCapturable
            capturable
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/431501862",
            "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
            "amount": "50.00"
        }
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
  mutation orderCapturePartial($input: OrderCaptureInput!) {
    orderCapture(input: $input) {
      transaction {
        id
        kind
        status
        amountSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        order {
          id
          totalCapturable
          capturable
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/431501862",
    "parentTransactionId": "gid://shopify/OrderTransaction/336526656",
    "amount": "50.00"
  }
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

4

5

6

7

›

⌄

⌄

{

"input": {

"id": "gid://shopify/Order/431501862",

"parentTransactionId": "gid://shopify/OrderTransaction/336526656",

"amount": "50.00"

}

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"orderCapture": {

"transaction": {

"id": "gid://shopify/OrderTransaction/1068278474",

"kind": "CAPTURE",

"status": "SUCCESS",

"amountSet": {

"presentmentMoney": {

"amount": "50.0",

"currencyCode": "USD"

}

},

"order": {

"id": "gid://shopify/Order/431501862",

"totalCapturable": "950.00",

"capturable": true

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*