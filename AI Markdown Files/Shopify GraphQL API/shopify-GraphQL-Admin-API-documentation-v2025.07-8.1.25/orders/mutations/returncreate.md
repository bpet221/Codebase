---
title: "returnCreate"
description: "Shopify GraphQL Admin API documentation for returncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: returnCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate

Markdown Content:
returnCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#main-content)

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

[Anchor to returnCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#top)
return Create
=============

mutation

Requires `write_returns` access scope or `write_marketplace_returns` access scope.

Creates a return from an existing order that has at least one fulfilled [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) that hasn't yet been refunded. If you create a return on an archived order, then the order is automatically unarchived.

Use the `returnCreate` mutation when your workflow involves [approving](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnApproveRequest) or [declining](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnDeclineRequest) requested returns outside of the Shopify platform.

The `returnCreate` mutation performs the following actions:

*   Creates a return in the `OPEN` state, and assumes that the return request from the customer has already been approved
*   Creates a [reverse fulfillment order](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and enables you to create a [reverse delivery](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) for the reverse fulfillment order
*   Creates a sales agreement with a `RETURN` reason, which links to all sales created for the return or exchange
*   Generates sales records that reverse the sales records for the items being returned
*   Generates sales records for any exchange line items

After you've created a return, use the [`return`](https://shopify.dev/docs/api/admin-graphql/latest/queries/return) query to retrieve the return by its ID. Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#arguments)
Arguments
---------

[Anchor to returnInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#arguments-returnInput)return Input

•[Return Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput)

required

Specifies the input fields for a return.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ReturnCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#returns)Return Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#returns-return)return

•[Return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

The created return.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate#returns-userErrors)user Errors

•[[Return User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a return for a fulfilled line item

#### Description

Create a return for a fulfilled [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) and include a custom reason note—a freeform note that allows the customer to explain their reason for returning the item. The example returns the created return's ID and the associated order ID. Learn more about [building for return management](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

#### Query

```graphql
mutation ReturnCreate($returnInput: ReturnInput!) {
  returnCreate(returnInput: $returnInput) {
    userErrors {
      field
      message
    }
    return {
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
  "returnInput": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReason": "SIZE_TOO_SMALL"
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
"query": "mutation ReturnCreate($returnInput: ReturnInput!) { returnCreate(returnInput: $returnInput) { userErrors { field message } return { id order { id } } } }",
 "variables": {
    "returnInput": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReason": "SIZE_TOO_SMALL"
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
  mutation ReturnCreate($returnInput: ReturnInput!) {
    returnCreate(returnInput: $returnInput) {
      userErrors {
        field
        message
      }
      return {
        id
        order {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "returnInput": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReason": "SIZE_TOO_SMALL"
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
  mutation ReturnCreate($returnInput: ReturnInput!) {
    returnCreate(returnInput: $returnInput) {
      userErrors {
        field
        message
      }
      return {
        id
        order {
          id
        }
      }
    }
  }
QUERY

variables = {
  "returnInput": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReason": "SIZE_TOO_SMALL"
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
    "query": `mutation ReturnCreate($returnInput: ReturnInput!) {
      returnCreate(returnInput: $returnInput) {
        userErrors {
          field
          message
        }
        return {
          id
          order {
            id
          }
        }
      }
    }`,
    "variables": {
        "returnInput": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReason": "SIZE_TOO_SMALL"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "returnCreate": {
    "userErrors": [],
    "return": {
      "id": "gid://shopify/Return/963805073",
      "order": {
        "id": "gid://shopify/Order/625362839"
      }
    }
  }
}
``` 
*   ### Create a return with a custom return reason note

#### Description

Create a return for a fulfilled [line item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) with a note that explains the reason for the return. The example returns the created return's ID and the return reason note. Learn more about [building for return management](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

#### Query

```graphql
mutation ReturnCreateWithNote($returnInput: ReturnInput!) {
  returnCreate(returnInput: $returnInput) {
    userErrors {
      field
      message
    }
    return {
      id
      returnLineItems(first: 1) {
        edges {
          node {
            returnReasonNote
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "returnInput": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReason": "OTHER",
        "returnReasonNote": "Customer changed mind"
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
"query": "mutation ReturnCreateWithNote($returnInput: ReturnInput!) { returnCreate(returnInput: $returnInput) { userErrors { field message } return { id returnLineItems(first: 1) { edges { node { returnReasonNote } } } } } }",
 "variables": {
    "returnInput": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReason": "OTHER",
          "returnReasonNote": "Customer changed mind"
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
  mutation ReturnCreateWithNote($returnInput: ReturnInput!) {
    returnCreate(returnInput: $returnInput) {
      userErrors {
        field
        message
      }
      return {
        id
        returnLineItems(first: 1) {
          edges {
            node {
              returnReasonNote
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "returnInput": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReason": "OTHER",
                    "returnReasonNote": "Customer changed mind"
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
  mutation ReturnCreateWithNote($returnInput: ReturnInput!) {
    returnCreate(returnInput: $returnInput) {
      userErrors {
        field
        message
      }
      return {
        id
        returnLineItems(first: 1) {
          edges {
            node {
              returnReasonNote
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "returnInput": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReason": "OTHER",
        "returnReasonNote": "Customer changed mind"
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
    "query": `mutation ReturnCreateWithNote($returnInput: ReturnInput!) {
      returnCreate(returnInput: $returnInput) {
        userErrors {
          field
          message
        }
        return {
          id
          returnLineItems(first: 1) {
            edges {
              node {
                returnReasonNote
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "returnInput": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReason": "OTHER",
                    "returnReasonNote": "Customer changed mind"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "returnCreate": {
    "userErrors": [],
    "return": {
      "id": "gid://shopify/Return/963805074",
      "returnLineItems": {
        "edges": [
          {
            "node": {
              "returnReasonNote": "Customer changed mind"
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### returnCreate reference

Examples
--------

Create a return for a fulfilled line item

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ReturnCreate(%24returnInput%3A%20ReturnInput!)%20%7B%0A%20%20returnCreate(returnInput%3A%20%24returnInput)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22returnInput%22%3A%20%7B%0A%20%20%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F625362839%22%2C%0A%20%20%20%20%22returnLineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22fulfillmentLineItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentLineItem%2F820022594%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22returnReason%22%3A%20%22SIZE_TOO_SMALL%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ReturnCreate($returnInput: ReturnInput!) {

 returnCreate(returnInput: $returnInput) {

 userErrors {

 field

 message

 }

 return {

 id

 order {

 id

 }

 }

 }

 }`,

{

variables:{

"returnInput":{

"orderId":"gid://shopify/Order/625362839",

"returnLineItems":[

{

"fulfillmentLineItemId":"gid://shopify/FulfillmentLineItem/820022594",

"quantity":1,

"returnReason":"SIZE_TOO_SMALL"

}

]

}

},

},

);

const data=await response.json();

```
mutation ReturnCreate($returnInput: ReturnInput!) {
  returnCreate(returnInput: $returnInput) {
    userErrors {
      field
      message
    }
    return {
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
"query": "mutation ReturnCreate($returnInput: ReturnInput!) { returnCreate(returnInput: $returnInput) { userErrors { field message } return { id order { id } } } }",
 "variables": {
    "returnInput": {
      "orderId": "gid://shopify/Order/625362839",
      "returnLineItems": [
        {
          "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
          "quantity": 1,
          "returnReason": "SIZE_TOO_SMALL"
        }
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ReturnCreate($returnInput: ReturnInput!) {
    returnCreate(returnInput: $returnInput) {
      userErrors {
        field
        message
      }
      return {
        id
        order {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "returnInput": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReason": "SIZE_TOO_SMALL"
                }
            ]
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
    "query": `mutation ReturnCreate($returnInput: ReturnInput!) {
      returnCreate(returnInput: $returnInput) {
        userErrors {
          field
          message
        }
        return {
          id
          order {
            id
          }
        }
      }
    }`,
    "variables": {
        "returnInput": {
            "orderId": "gid://shopify/Order/625362839",
            "returnLineItems": [
                {
                    "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
                    "quantity": 1,
                    "returnReason": "SIZE_TOO_SMALL"
                }
            ]
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
  mutation ReturnCreate($returnInput: ReturnInput!) {
    returnCreate(returnInput: $returnInput) {
      userErrors {
        field
        message
      }
      return {
        id
        order {
          id
        }
      }
    }
  }
QUERY

variables = {
  "returnInput": {
    "orderId": "gid://shopify/Order/625362839",
    "returnLineItems": [
      {
        "fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",
        "quantity": 1,
        "returnReason": "SIZE_TOO_SMALL"
      }
    ]
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

"returnInput": {

"orderId": "gid://shopify/Order/625362839",

"returnLineItems": [

{

"fulfillmentLineItemId": "gid://shopify/FulfillmentLineItem/820022594",

"quantity": 1,

"returnReason": "SIZE_TOO_SMALL"

}

]

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

›

⌄

⌄

⌄

⌄

{

"returnCreate": {

"userErrors": [],

"return": {

"id": "gid://shopify/Return/963805073",

"order": {

"id": "gid://shopify/Order/625362839"

}

}

}

}


---
*Content truncated at "Updates" section*