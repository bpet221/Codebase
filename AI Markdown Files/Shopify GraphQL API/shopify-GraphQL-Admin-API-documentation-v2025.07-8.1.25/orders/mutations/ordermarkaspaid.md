---
title: "orderMarkAsPaid"
description: "Shopify GraphQL Admin API documentation for ordermarkaspaid"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderMarkAsPaid - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid

Markdown Content:
orderMarkAsPaid - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#main-content)

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

    *   Queries   
    *   
Mutations

        *   [delegate Access Token Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokendestroy)
        *   [delivery Profile Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileremove)
        *   [delivery Shipping Origin Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryshippingoriginassign)
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

[Anchor to orderMarkAsPaid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#top)
order Mark As Paid
==================

mutation

Requires `write_orders` access scope. Also: The user must have mark_orders_as_paid permission.

Marks an order as paid by recording a payment transaction for the outstanding amount.

Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

*   Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
*   Payments were received offline and need to be recorded in the system
*   Previously authorized payments need to be captured manually
*   Orders require manual payment reconciliation due to external payment processing

The mutation validates that the order can be marked as paid before processing. An order can be marked as paid only if it has a positive outstanding balance and its [financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) isn't already `PAID`. The mutation will either create a new sale transaction for the full outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

After successfully marking an order as paid, the order's financial status is updated to reflect the payment, and payment events are logged for tracking and analytics purposes.

Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) in apps.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#arguments-input)input

•[Order Mark As Paid Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderMarkAsPaidInput)

required

The input for the mutation.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to OrderMarkAsPaidPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#returns)Order Mark As Paid Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#returns-order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order marked as paid.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Attempt to mark an already paid order as paid

#### Description

Attempt to mark an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) as paid when it has already been fully paid. The mutation returns user errors explaining why the operation can't be completed while still providing order data for reference.

#### Query

```graphql
mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
  orderMarkAsPaid(input: $input) {
    userErrors {
      field
      message
    }
    order {
      id
      name
      canMarkAsPaid
      displayFinancialStatus
      totalPrice
      totalOutstandingSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      transactions(first: 10) {
        id
        kind
        status
        amountSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        gateway
        createdAt
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Order/148977776"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) { orderMarkAsPaid(input: $input) { userErrors { field message } order { id name canMarkAsPaid displayFinancialStatus totalPrice totalOutstandingSet { shopMoney { amount currencyCode } } transactions(first: 10) { id kind status amountSet { shopMoney { amount currencyCode } } gateway createdAt } } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/148977776"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
    orderMarkAsPaid(input: $input) {
      userErrors {
        field
        message
      }
      order {
        id
        name
        canMarkAsPaid
        displayFinancialStatus
        totalPrice
        totalOutstandingSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 10) {
          id
          kind
          status
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          gateway
          createdAt
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/148977776"
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
  mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
    orderMarkAsPaid(input: $input) {
      userErrors {
        field
        message
      }
      order {
        id
        name
        canMarkAsPaid
        displayFinancialStatus
        totalPrice
        totalOutstandingSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 10) {
          id
          kind
          status
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          gateway
          createdAt
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/148977776"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
      orderMarkAsPaid(input: $input) {
        userErrors {
          field
          message
        }
        order {
          id
          name
          canMarkAsPaid
          displayFinancialStatus
          totalPrice
          totalOutstandingSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          transactions(first: 10) {
            id
            kind
            status
            amountSet {
              shopMoney {
                amount
                currencyCode
              }
            }
            gateway
            createdAt
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/148977776"
        }
    },
  },
});
``` #### Response

```json
{
  "orderMarkAsPaid": {
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Order cannot be marked as paid."
      }
    ],
    "order": {
      "id": "gid://shopify/Order/148977776",
      "name": "#1001",
      "canMarkAsPaid": false,
      "displayFinancialStatus": "PAID",
      "totalPrice": "11.50",
      "totalOutstandingSet": {
        "shopMoney": {
          "amount": "0.0",
          "currencyCode": "USD"
        }
      },
      "transactions": [
        {
          "id": "gid://shopify/OrderTransaction/42239183",
          "kind": "AUTHORIZATION",
          "status": "FAILURE",
          "amountSet": {
            "shopMoney": {
              "amount": "11.5",
              "currencyCode": "USD"
            }
          },
          "gateway": "bogus",
          "createdAt": "2005-07-31T15:57:10Z"
        },
        {
          "id": "gid://shopify/OrderTransaction/607668304",
          "kind": "SALE",
          "status": "AWAITING_RESPONSE",
          "amountSet": {
            "shopMoney": {
              "amount": "50.0",
              "currencyCode": "USD"
            }
          },
          "gateway": "bogus",
          "createdAt": "2005-07-31T15:57:11Z"
        },
        {
          "id": "gid://shopify/OrderTransaction/661056787",
          "kind": "AUTHORIZATION",
          "status": "SUCCESS",
          "amountSet": {
            "shopMoney": {
              "amount": "11.5",
              "currencyCode": "USD"
            }
          },
          "gateway": "bogus",
          "createdAt": "2005-07-31T15:57:10Z"
        },
        {
          "id": "gid://shopify/OrderTransaction/999225631",
          "kind": "CAPTURE",
          "status": "SUCCESS",
          "amountSet": {
            "shopMoney": {
              "amount": "11.5",
              "currencyCode": "USD"
            }
          },
          "gateway": "bogus",
          "createdAt": "2005-07-31T15:57:11Z"
        }
      ]
    }
  }
}
``` 
*   ### Mark an authorized order as paid

#### Description

Mark an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) with authorized payment as paid by capturing the full authorized amount. The mutation creates a new `CAPTURE` transaction, updates the order's financial status to `PAID`, and sets the outstanding balance to zero. The response includes comprehensive order details and transaction history.

#### Query

```graphql
mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
  orderMarkAsPaid(input: $input) {
    userErrors {
      field
      message
    }
    order {
      id
      name
      canMarkAsPaid
      displayFinancialStatus
      totalPrice
      totalOutstandingSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      transactions(first: 10) {
        id
        kind
        status
        amountSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        gateway
        createdAt
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Order/431501862"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) { orderMarkAsPaid(input: $input) { userErrors { field message } order { id name canMarkAsPaid displayFinancialStatus totalPrice totalOutstandingSet { shopMoney { amount currencyCode } } transactions(first: 10) { id kind status amountSet { shopMoney { amount currencyCode } } gateway createdAt } } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/431501862"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
    orderMarkAsPaid(input: $input) {
      userErrors {
        field
        message
      }
      order {
        id
        name
        canMarkAsPaid
        displayFinancialStatus
        totalPrice
        totalOutstandingSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 10) {
          id
          kind
          status
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          gateway
          createdAt
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/431501862"
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
  mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
    orderMarkAsPaid(input: $input) {
      userErrors {
        field
        message
      }
      order {
        id
        name
        canMarkAsPaid
        displayFinancialStatus
        totalPrice
        totalOutstandingSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 10) {
          id
          kind
          status
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          gateway
          createdAt
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/431501862"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
      orderMarkAsPaid(input: $input) {
        userErrors {
          field
          message
        }
        order {
          id
          name
          canMarkAsPaid
          displayFinancialStatus
          totalPrice
          totalOutstandingSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          transactions(first: 10) {
            id
            kind
            status
            amountSet {
              shopMoney {
                amount
                currencyCode
              }
            }
            gateway
            createdAt
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/431501862"
        }
    },
  },
});
``` #### Response

```json
{
  "orderMarkAsPaid": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/431501862",
      "name": "#1014",
      "canMarkAsPaid": false,
      "displayFinancialStatus": "PAID",
      "totalPrice": "1000.00",
      "totalOutstandingSet": {
        "shopMoney": {
          "amount": "0.0",
          "currencyCode": "USD"
        }
      },
      "transactions": [
        {
          "id": "gid://shopify/OrderTransaction/336526656",
          "kind": "AUTHORIZATION",
          "status": "SUCCESS",
          "amountSet": {
            "shopMoney": {
              "amount": "1000.0",
              "currencyCode": "USD"
            }
          },
          "gateway": "bogus",
          "createdAt": "2005-08-01T15:57:11Z"
        },
        {
          "id": "gid://shopify/OrderTransaction/1068278469",
          "kind": "CAPTURE",
          "status": "SUCCESS",
          "amountSet": {
            "shopMoney": {
              "amount": "1000.0",
              "currencyCode": "USD"
            }
          },
          "gateway": "manual",
          "createdAt": "2025-06-20T03:18:30Z"
        }
      ]
    }
  }
}
``` 
*   ### orderMarkAsPaid reference

Examples
--------

Attempt to mark an already paid order as paid

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20orderMarkAsPaid(%24input%3A%20OrderMarkAsPaidInput!)%20%7B%0A%20%20orderMarkAsPaid(input%3A%20%24input)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20canMarkAsPaid%0A%20%20%20%20%20%20displayFinancialStatus%0A%20%20%20%20%20%20totalPrice%0A%20%20%20%20%20%20totalOutstandingSet%20%7B%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20transactions(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20kind%0A%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20amountSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20gateway%0A%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F148977776%22%0A%20%20%7D%0A%7D)Copy

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

41

42

43

44

45

46

47

48

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {

 orderMarkAsPaid(input: $input) {

 userErrors {

 field

 message

 }

 order {

 id

 name

 canMarkAsPaid

 displayFinancialStatus

 totalPrice

 totalOutstandingSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 transactions(first: 10) {

 id

 kind

 status

 amountSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 gateway

 createdAt

 }

 }

 }

 }`,

{

variables:{

"input":{

"id":"gid://shopify/Order/148977776"

}

},

},

);

const data=await response.json();

```
mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
  orderMarkAsPaid(input: $input) {
    userErrors {
      field
      message
    }
    order {
      id
      name
      canMarkAsPaid
      displayFinancialStatus
      totalPrice
      totalOutstandingSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      transactions(first: 10) {
        id
        kind
        status
        amountSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        gateway
        createdAt
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
"query": "mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) { orderMarkAsPaid(input: $input) { userErrors { field message } order { id name canMarkAsPaid displayFinancialStatus totalPrice totalOutstandingSet { shopMoney { amount currencyCode } } transactions(first: 10) { id kind status amountSet { shopMoney { amount currencyCode } } gateway createdAt } } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/148977776"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
    orderMarkAsPaid(input: $input) {
      userErrors {
        field
        message
      }
      order {
        id
        name
        canMarkAsPaid
        displayFinancialStatus
        totalPrice
        totalOutstandingSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 10) {
          id
          kind
          status
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          gateway
          createdAt
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Order/148977776"
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
    "query": `mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
      orderMarkAsPaid(input: $input) {
        userErrors {
          field
          message
        }
        order {
          id
          name
          canMarkAsPaid
          displayFinancialStatus
          totalPrice
          totalOutstandingSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          transactions(first: 10) {
            id
            kind
            status
            amountSet {
              shopMoney {
                amount
                currencyCode
              }
            }
            gateway
            createdAt
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/148977776"
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
  mutation orderMarkAsPaid($input: OrderMarkAsPaidInput!) {
    orderMarkAsPaid(input: $input) {
      userErrors {
        field
        message
      }
      order {
        id
        name
        canMarkAsPaid
        displayFinancialStatus
        totalPrice
        totalOutstandingSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 10) {
          id
          kind
          status
          amountSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          gateway
          createdAt
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Order/148977776"
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

›

⌄

⌄

{

"input": {

"id": "gid://shopify/Order/148977776"

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

{

"orderMarkAsPaid": {

"userErrors": [

{

"field": [

"id"

],

"message": "Order cannot be marked as paid."

}

],

"order": {

"id": "gid://shopify/Order/148977776",

"name": "#1001",

"canMarkAsPaid": false,

"displayFinancialStatus": "PAID",

"totalPrice": "11.50",

"totalOutstandingSet": {

"shopMoney": {

"amount": "0.0",

"currencyCode": "USD"

}

},

"transactions": [

{

"id": "gid://shopify/OrderTransaction/42239183",

"kind": "AUTHORIZATION",

"status": "FAILURE",

"amountSet": {

"shopMoney": {

"amount": "11.5",

"currencyCode": "USD"

}

},

"gateway": "bogus",

"createdAt": "2005-07-31T15:57:10Z"

},


---
*Content truncated at "Updates" section*