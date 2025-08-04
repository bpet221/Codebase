---
title: "refundCreate"
description: "Shopify GraphQL Admin API documentation for refundcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: refundCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate

Markdown Content:
refundCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#main-content)

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

[Anchor to refundCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#top)
refund Create
=============

mutation

Requires `orders` access scope, `marketplace_orders` access scope or `buyer_membership_orders` access scope.

Creates a refund for an order, allowing you to process returns and issue payments back to customers.

Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

The `refundCreate` mutation supports various refund scenarios:

*   Refunding line items with optional restocking
*   Refunding shipping costs
*   Refunding duties and import taxes
*   Refunding additional fees
*   Processing refunds through different payment methods
*   Issuing store credit refunds (when enabled)

You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

* * *

Note

The refunding behavior of the `refundCreate` mutation is similar to the [`refundReturn`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund) mutation. The key difference is that the `refundCreate` mutation lets you to specify restocking behavior for line items, whereas the `returnRefund` mutation focuses solely on handling the financial refund without any restocking input.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#arguments-input)input

•[Refund Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput)

required

The input fields that are used in the mutation for creating a refund.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to RefundCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#returns)Refund Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#returns-order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order associated with the created refund.

Show fields

[Anchor to refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#returns-refund)refund

•[Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

The created refund.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a refund for an item in an order

#### Description

Create a refund for a single [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) in an order. The mutation input includes the order ID and the line item to be refunded, along with its quantity. No transactions are specified, which means the refund will be processed without associating it to a particular payment transaction—the system will determine how to apply the refund. The mutation returns the created refund's ID and the total refunded amount.

#### Query

```graphql
mutation RefundLineItem($input: RefundInput!) {
  refundCreate(input: $input) {
    refund {
      id
      totalRefundedSet {
        presentmentMoney {
          amount
          currencyCode
        }
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
    "orderId": "gid://shopify/Order/734509473",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/25746870",
        "quantity": 1
      }
    ],
    "transactions": []
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation RefundLineItem($input: RefundInput!) { refundCreate(input: $input) { refund { id totalRefundedSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 1
        }
      ],
      "transactions": []
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RefundLineItem($input: RefundInput!) {
    refundCreate(input: $input) {
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
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
            "orderId": "gid://shopify/Order/734509473",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/25746870",
                    "quantity": 1
                }
            ],
            "transactions": []
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
  mutation RefundLineItem($input: RefundInput!) {
    refundCreate(input: $input) {
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
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
    "orderId": "gid://shopify/Order/734509473",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/25746870",
        "quantity": 1
      }
    ],
    "transactions": []
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RefundLineItem($input: RefundInput!) {
      refundCreate(input: $input) {
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
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
            "orderId": "gid://shopify/Order/734509473",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/25746870",
                    "quantity": 1
                }
            ],
            "transactions": []
        }
    },
  },
});
``` #### Response

```json
{
  "refundCreate": {
    "refund": {
      "id": "gid://shopify/Refund/929361463",
      "totalRefundedSet": {
        "presentmentMoney": {
          "amount": "0.0",
          "currencyCode": "CAD"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a refund for shipping costs

#### Description

Create a refund that includes a partial reimbursement for shipping costs. The example shows how shipping refunds are factored into the `REFUND` kind transaction amount. The mutation returns the total refunded amount and detailed information about the first two associated transactions, including their statuses and amounts.

#### Query

```graphql
mutation PartiallyRefundShipping($input: RefundInput!) {
  refundCreate(input: $input) {
    userErrors {
      field
      message
    }
    refund {
      id
      totalRefundedSet {
        presentmentMoney {
          amount
        }
      }
      transactions(first: 2) {
        edges {
          node {
            amountSet {
              presentmentMoney {
                amount
              }
            }
            status
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "orderId": "gid://shopify/Order/734509473",
    "transactions": [
      {
        "orderId": "gid://shopify/Order/734509473",
        "parentId": "gid://shopify/OrderTransaction/723599266",
        "kind": "REFUND",
        "gateway": "foo",
        "amount": "16.99"
      }
    ],
    "shipping": {
      "amount": "6.99"
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
"query": "mutation PartiallyRefundShipping($input: RefundInput!) { refundCreate(input: $input) { userErrors { field message } refund { id totalRefundedSet { presentmentMoney { amount } } transactions(first: 2) { edges { node { amountSet { presentmentMoney { amount } } status } } } } } }",
 "variables": {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "parentId": "gid://shopify/OrderTransaction/723599266",
          "kind": "REFUND",
          "gateway": "foo",
          "amount": "16.99"
        }
      ],
      "shipping": {
        "amount": "6.99"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PartiallyRefundShipping($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
        transactions(first: 2) {
          edges {
            node {
              amountSet {
                presentmentMoney {
                  amount
                }
              }
              status
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "orderId": "gid://shopify/Order/734509473",
            "transactions": [
                {
                    "orderId": "gid://shopify/Order/734509473",
                    "parentId": "gid://shopify/OrderTransaction/723599266",
                    "kind": "REFUND",
                    "gateway": "foo",
                    "amount": "16.99"
                }
            ],
            "shipping": {
                "amount": "6.99"
            }
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
  mutation PartiallyRefundShipping($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
        transactions(first: 2) {
          edges {
            node {
              amountSet {
                presentmentMoney {
                  amount
                }
              }
              status
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "orderId": "gid://shopify/Order/734509473",
    "transactions": [
      {
        "orderId": "gid://shopify/Order/734509473",
        "parentId": "gid://shopify/OrderTransaction/723599266",
        "kind": "REFUND",
        "gateway": "foo",
        "amount": "16.99"
      }
    ],
    "shipping": {
      "amount": "6.99"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PartiallyRefundShipping($input: RefundInput!) {
      refundCreate(input: $input) {
        userErrors {
          field
          message
        }
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
            }
          }
          transactions(first: 2) {
            edges {
              node {
                amountSet {
                  presentmentMoney {
                    amount
                  }
                }
                status
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "orderId": "gid://shopify/Order/734509473",
            "transactions": [
                {
                    "orderId": "gid://shopify/Order/734509473",
                    "parentId": "gid://shopify/OrderTransaction/723599266",
                    "kind": "REFUND",
                    "gateway": "foo",
                    "amount": "16.99"
                }
            ],
            "shipping": {
                "amount": "6.99"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "refundCreate": {
    "userErrors": [],
    "refund": {
      "id": "gid://shopify/Refund/929361464",
      "totalRefundedSet": {
        "presentmentMoney": {
          "amount": "16.99"
        }
      },
      "transactions": {
        "edges": [
          {
            "node": {
              "amountSet": {
                "presentmentMoney": {
                  "amount": "16.99"
                }
              },
              "status": "SUCCESS"
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Create a refund that's issued as a store credit

#### Description

Create a refund that's issued as store credit instead of returning it to the original payment method. The store credit amount is specified in the `refundMethods` field and applies to a specific line item in the order. The mutation returns the refund ID, total refunded amount, and transaction details associated with the store credit.

#### Query

```graphql
mutation RefundToStoreCredit($input: RefundInput!) {
  refundCreate(input: $input) {
    userErrors {
      field
      message
    }
    refund {
      id
      totalRefundedSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
      transactions(first: 2) {
        edges {
          node {
            gateway
            kind
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
    order {
      id
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "orderId": "gid://shopify/Order/1073459962",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/1071823172",
        "quantity": 1
      }
    ],
    "transactions": [],
    "refundMethods": [
      {
        "storeCreditRefund": {
          "amount": {
            "amount": "10.00",
            "currencyCode": "USD"
          }
        }
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation RefundToStoreCredit($input: RefundInput!) { refundCreate(input: $input) { userErrors { field message } refund { id totalRefundedSet { presentmentMoney { amount currencyCode } } transactions(first: 2) { edges { node { gateway kind amountSet { presentmentMoney { amount currencyCode } } } } } } order { id } } }",
 "variables": {
    "input": {
      "orderId": "gid://shopify/Order/1073459962",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/1071823172",
          "quantity": 1
        }
      ],
      "transactions": [],
      "refundMethods": [
        {
          "storeCreditRefund": {
            "amount": {
              "amount": "10.00",
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RefundToStoreCredit($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 2) {
          edges {
            node {
              gateway
              kind
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      order {
        id
      }
    }
  }`,
  {
    variables: {
        "input": {
            "orderId": "gid://shopify/Order/1073459962",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/1071823172",
                    "quantity": 1
                }
            ],
            "transactions": [],
            "refundMethods": [
                {
                    "storeCreditRefund": {
                        "amount": {
                            "amount": "10.00",
                            "currencyCode": "USD"
                        }
                    }
                }
            ]
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
  mutation RefundToStoreCredit($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 2) {
          edges {
            node {
              gateway
              kind
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      order {
        id
      }
    }
  }
QUERY

variables = {
  "input": {
    "orderId": "gid://shopify/Order/1073459962",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/1071823172",
        "quantity": 1
      }
    ],
    "transactions": [],
    "refundMethods": [
      {
        "storeCreditRefund": {
          "amount": {
            "amount": "10.00",
            "currencyCode": "USD"
          }
        }
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RefundToStoreCredit($input: RefundInput!) {
      refundCreate(input: $input) {
        userErrors {
          field
          message
        }
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          transactions(first: 2) {
            edges {
              node {
                gateway
                kind
                amountSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        order {
          id
        }
      }
    }`,
    "variables": {
        "input": {
            "orderId": "gid://shopify/Order/1073459962",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/1071823172",
                    "quantity": 1
                }
            ],
            "transactions": [],
            "refundMethods": [
                {
                    "storeCreditRefund": {
                        "amount": {
                            "amount": "10.00",
                            "currencyCode": "USD"
                        }
                    }
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "refundCreate": {
    "userErrors": [],
    "refund": {
      "id": "gid://shopify/Refund/929361462",
      "totalRefundedSet": {
        "presentmentMoney": {
          "amount": "10.0",
          "currencyCode": "USD"
        }
      },
      "transactions": {
        "edges": [
          {
            "node": {
              "gateway": "shopify_store_credit",
              "kind": "REFUND",
              "amountSet": {
                "presentmentMoney": {
                  "amount": "10.0",
                  "currencyCode": "USD"
                }
              }
            }
          }
        ]
      }
    },
    "order": {
      "id": "gid://shopify/Order/1073459962"
    }
  }
}
``` 
*   ### Create a refund with a note and transaction details

#### Description

Issue a refund for an order and attach a note explaining the reason for the refund (for example, a customer request for an item exchange). The response includes the refund's unique ID, the explanatory note, and the total refunded amount in the order's [presentment currency](https://help.shopify.com/manual/international/pricing/exchange-rates).

#### Query

```graphql
mutation RefundWithNoteAndTransactions($input: RefundInput!) {
  refundCreate(input: $input) {
    userErrors {
      field
      message
    }
    refund {
      id
      note
      totalRefundedSet {
        presentmentMoney {
          amount
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "orderId": "gid://shopify/Order/734509473",
    "note": "Want to exchange for a different item",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/25746870",
        "quantity": 2
      }
    ],
    "transactions": [
      {
        "orderId": "gid://shopify/Order/734509473",
        "gateway": "foo",
        "kind": "REFUND",
        "amount": "10.0",
        "parentId": "gid://shopify/OrderTransaction/723599266"
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation RefundWithNoteAndTransactions($input: RefundInput!) { refundCreate(input: $input) { userErrors { field message } refund { id note totalRefundedSet { presentmentMoney { amount } } } } }",
 "variables": {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "note": "Want to exchange for a different item",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 2
        }
      ],
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "gateway": "foo",
          "kind": "REFUND",
          "amount": "10.0",
          "parentId": "gid://shopify/OrderTransaction/723599266"
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RefundWithNoteAndTransactions($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        note
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "orderId": "gid://shopify/Order/734509473",
            "note": "Want to exchange for a different item",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/25746870",
                    "quantity": 2
                }
            ],
            "transactions": [
                {
                    "orderId": "gid://shopify/Order/734509473",
                    "gateway": "foo",
                    "kind": "REFUND",
                    "amount": "10.0",
                    "parentId": "gid://shopify/OrderTransaction/723599266"
                }
            ]
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
  mutation RefundWithNoteAndTransactions($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        note
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "orderId": "gid://shopify/Order/734509473",
    "note": "Want to exchange for a different item",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/25746870",
        "quantity": 2
      }
    ],
    "transactions": [
      {
        "orderId": "gid://shopify/Order/734509473",
        "gateway": "foo",
        "kind": "REFUND",
        "amount": "10.0",
        "parentId": "gid://shopify/OrderTransaction/723599266"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation RefundWithNoteAndTransactions($input: RefundInput!) {
      refundCreate(input: $input) {
        userErrors {
          field
          message
        }
        refund {
          id
          note
          totalRefundedSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "orderId": "gid://shopify/Order/734509473",
            "note": "Want to exchange for a different item",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/25746870",
                    "quantity": 2
                }
            ],
            "transactions": [
                {
                    "orderId": "gid://shopify/Order/734509473",
                    "gateway": "foo",
                    "kind": "REFUND",
                    "amount": "10.0",
                    "parentId": "gid://shopify/OrderTransaction/723599266"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "refundCreate": {
    "userErrors": [],
    "refund": {
      "id": "gid://shopify/Refund/929361465",
      "note": "Want to exchange for a different item",
      "totalRefundedSet": {
        "presentmentMoney": {
          "amount": "10.0"
        }
      }
    }
  }
}
``` 
*   ### refundCreate reference

Examples
--------

Create a refund for an item in an order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20RefundLineItem(%24input%3A%20RefundInput!)%20%7B%0A%20%20refundCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20refund%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20totalRefundedSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F734509473%22%2C%0A%20%20%20%20%22refundLineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22lineItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FLineItem%2F25746870%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22transactions%22%3A%20%5B%5D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation RefundLineItem($input: RefundInput!) {

 refundCreate(input: $input) {

 refund {

 id

 totalRefundedSet {

 presentmentMoney {

 amount

 currencyCode

 }

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

"orderId":"gid://shopify/Order/734509473",

"refundLineItems":[

{

"lineItemId":"gid://shopify/LineItem/25746870",

"quantity":1

}

],

"transactions":[]

}

},

},

);

const data=await response.json();

```
mutation RefundLineItem($input: RefundInput!) {
  refundCreate(input: $input) {
    refund {
      id
      totalRefundedSet {
        presentmentMoney {
          amount
          currencyCode
        }
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
"query": "mutation RefundLineItem($input: RefundInput!) { refundCreate(input: $input) { refund { id totalRefundedSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 1
        }
      ],
      "transactions": []
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation RefundLineItem($input: RefundInput!) {
    refundCreate(input: $input) {
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
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
            "orderId": "gid://shopify/Order/734509473",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/25746870",
                    "quantity": 1
                }
            ],
            "transactions": []
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
    "query": `mutation RefundLineItem($input: RefundInput!) {
      refundCreate(input: $input) {
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
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
            "orderId": "gid://shopify/Order/734509473",
            "refundLineItems": [
                {
                    "lineItemId": "gid://shopify/LineItem/25746870",
                    "quantity": 1
                }
            ],
            "transactions": []
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
  mutation RefundLineItem($input: RefundInput!) {
    refundCreate(input: $input) {
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
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
    "orderId": "gid://shopify/Order/734509473",
    "refundLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/25746870",
        "quantity": 1
      }
    ],
    "transactions": []
  }
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

11

12

›

⌄

⌄

⌄

⌄

{

"input": {

"orderId": "gid://shopify/Order/734509473",

"refundLineItems": [

{

"lineItemId": "gid://shopify/LineItem/25746870",

"quantity": 1

}

],

"transactions": []

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

›

⌄

⌄

⌄

⌄

⌄

{

"refundCreate": {

"refund": {

"id": "gid://shopify/Refund/929361463",

"totalRefundedSet": {

"presentmentMoney": {

"amount": "0.0",

"currencyCode": "CAD"

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*