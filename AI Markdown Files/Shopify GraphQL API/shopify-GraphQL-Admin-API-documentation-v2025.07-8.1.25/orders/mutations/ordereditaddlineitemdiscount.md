---
title: "orderEditAddLineItemDiscount"
description: "Shopify GraphQL Admin API documentation for ordereditaddlineitemdiscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderEditAddLineItemDiscount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount

Markdown Content:
orderEditAddLineItemDiscount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#main-content)

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

[Anchor to orderEditAddLineItemDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#top)
order Edit Add Line Item Discount
=================================

mutation

Requires `write_order_edits` access scope. Also: The user must have apply_discounts_to_orders permission.

Adds a discount to a line item on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#arguments)
Arguments
---------

[Anchor to discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#arguments-discount)discount

•[Order Edit Applied Discount Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

required

The discount to add to the line item.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) to update.

[Anchor to lineItemId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#arguments-lineItemId)line Item Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the calculated line item to add the discount to.

* * *

Was this section helpful?

Yes No

[Anchor to OrderEditAddLineItemDiscountPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#returns)Order Edit Add Line Item Discount Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to addedDiscountStagedChange](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#returns-addedDiscountStagedChange)added Discount Staged Change

•[Order Staged Change Add Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount)

The discount applied to a line item during this order edit.

Show fields

[Anchor to calculatedLineItem](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#returns-calculatedLineItem)calculated Line Item

•[Calculated Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

The line item with the edits applied but not saved.

Show fields

[Anchor to calculatedOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#returns-calculatedOrder)calculated Order

•[Calculated Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder)

An order with the edits applied but not saved.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add a 50% discount to a line item in an order edit

#### Query

```graphql
mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
  orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
    calculatedOrder {
      id
    }
    calculatedLineItem {
      id
      calculatedDiscountAllocations {
        discountApplication {
          id
        }
      }
    }
    addedDiscountStagedChange {
      id
      description
      value {
        __typename
        ... on PricingPercentageValue {
          percentage
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
  "id": "gid://shopify/CalculatedOrder/607673109",
  "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
  "discount": {
    "description": "50% off promotion",
    "percentValue": 50
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) { orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) { calculatedOrder { id } calculatedLineItem { id calculatedDiscountAllocations { discountApplication { id } } } addedDiscountStagedChange { id description value { __typename ... on PricingPercentageValue { percentage } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/CalculatedOrder/607673109",
    "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
    "discount": {
      "description": "50% off promotion",
      "percentValue": 50
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
    orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
      calculatedOrder {
        id
      }
      calculatedLineItem {
        id
        calculatedDiscountAllocations {
          discountApplication {
            id
          }
        }
      }
      addedDiscountStagedChange {
        id
        description
        value {
          __typename
          ... on PricingPercentageValue {
            percentage
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
        "id": "gid://shopify/CalculatedOrder/607673109",
        "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
        "discount": {
            "description": "50% off promotion",
            "percentValue": 50
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
  mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
    orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
      calculatedOrder {
        id
      }
      calculatedLineItem {
        id
        calculatedDiscountAllocations {
          discountApplication {
            id
          }
        }
      }
      addedDiscountStagedChange {
        id
        description
        value {
          __typename
          ... on PricingPercentageValue {
            percentage
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
  "id": "gid://shopify/CalculatedOrder/607673109",
  "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
  "discount": {
    "description": "50% off promotion",
    "percentValue": 50
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
      orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
        calculatedOrder {
          id
        }
        calculatedLineItem {
          id
          calculatedDiscountAllocations {
            discountApplication {
              id
            }
          }
        }
        addedDiscountStagedChange {
          id
          description
          value {
            __typename
            ... on PricingPercentageValue {
              percentage
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
        "id": "gid://shopify/CalculatedOrder/607673109",
        "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
        "discount": {
            "description": "50% off promotion",
            "percentValue": 50
        }
    },
  },
});
``` #### Response

```json
{
  "orderEditAddLineItemDiscount": {
    "calculatedOrder": {
      "id": "gid://shopify/CalculatedOrder/607673109"
    },
    "calculatedLineItem": {
      "id": "gid://shopify/CalculatedLineItem/510711879",
      "calculatedDiscountAllocations": [
        {
          "discountApplication": {
            "id": "gid://shopify/CalculatedManualDiscountApplication/68bd25c3-b74e-4250-814f-9fec0549c043"
          }
        }
      ]
    },
    "addedDiscountStagedChange": {
      "id": "gid://shopify/OrderStagedChangeAddLineItemDiscount/925898897",
      "description": "50% off promotion",
      "value": {
        "__typename": "PricingPercentageValue",
        "percentage": 50
      }
    },
    "userErrors": []
  }
}
``` 
*   ### orderEditAddLineItemDiscount reference

Examples
--------

Add a 50% discount to a line item in an order edit

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20orderEditAddLineItemDiscount(%24id%3A%20ID!%2C%20%24lineItemId%3A%20ID!%2C%20%24discount%3A%20OrderEditAppliedDiscountInput!)%20%7B%0A%20%20orderEditAddLineItemDiscount(id%3A%20%24id%2C%20lineItemId%3A%20%24lineItemId%2C%20discount%3A%20%24discount)%20%7B%0A%20%20%20%20calculatedOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20calculatedLineItem%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20calculatedDiscountAllocations%20%7B%0A%20%20%20%20%20%20%20%20discountApplication%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20addedDiscountStagedChange%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20value%20%7B%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20...%20on%20PricingPercentageValue%20%7B%0A%20%20%20%20%20%20%20%20%20%20percentage%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCalculatedOrder%2F607673109%22%2C%0A%20%20%22lineItemId%22%3A%20%22gid%3A%2F%2Fshopify%2FCalculatedLineItem%2F510711879%22%2C%0A%20%20%22discount%22%3A%20%7B%0A%20%20%20%20%22description%22%3A%20%2250%25%20off%20promotion%22%2C%0A%20%20%20%20%22percentValue%22%3A%2050%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {

 orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {

 calculatedOrder {

 id

 }

 calculatedLineItem {

 id

 calculatedDiscountAllocations {

 discountApplication {

 id

 }

 }

 }

 addedDiscountStagedChange {

 id

 description

 value {

 __typename

 ... on PricingPercentageValue {

 percentage

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

"id":"gid://shopify/CalculatedOrder/607673109",

"lineItemId":"gid://shopify/CalculatedLineItem/510711879",

"discount":{

"description":"50% off promotion",

"percentValue":50

}

},

},

);

const data=await response.json();

```
mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
  orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
    calculatedOrder {
      id
    }
    calculatedLineItem {
      id
      calculatedDiscountAllocations {
        discountApplication {
          id
        }
      }
    }
    addedDiscountStagedChange {
      id
      description
      value {
        __typename
        ... on PricingPercentageValue {
          percentage
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
"query": "mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) { orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) { calculatedOrder { id } calculatedLineItem { id calculatedDiscountAllocations { discountApplication { id } } } addedDiscountStagedChange { id description value { __typename ... on PricingPercentageValue { percentage } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/CalculatedOrder/607673109",
    "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
    "discount": {
      "description": "50% off promotion",
      "percentValue": 50
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
    orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
      calculatedOrder {
        id
      }
      calculatedLineItem {
        id
        calculatedDiscountAllocations {
          discountApplication {
            id
          }
        }
      }
      addedDiscountStagedChange {
        id
        description
        value {
          __typename
          ... on PricingPercentageValue {
            percentage
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
        "id": "gid://shopify/CalculatedOrder/607673109",
        "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
        "discount": {
            "description": "50% off promotion",
            "percentValue": 50
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
    "query": `mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
      orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
        calculatedOrder {
          id
        }
        calculatedLineItem {
          id
          calculatedDiscountAllocations {
            discountApplication {
              id
            }
          }
        }
        addedDiscountStagedChange {
          id
          description
          value {
            __typename
            ... on PricingPercentageValue {
              percentage
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
        "id": "gid://shopify/CalculatedOrder/607673109",
        "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
        "discount": {
            "description": "50% off promotion",
            "percentValue": 50
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
  mutation orderEditAddLineItemDiscount($id: ID!, $lineItemId: ID!, $discount: OrderEditAppliedDiscountInput!) {
    orderEditAddLineItemDiscount(id: $id, lineItemId: $lineItemId, discount: $discount) {
      calculatedOrder {
        id
      }
      calculatedLineItem {
        id
        calculatedDiscountAllocations {
          discountApplication {
            id
          }
        }
      }
      addedDiscountStagedChange {
        id
        description
        value {
          __typename
          ... on PricingPercentageValue {
            percentage
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
  "id": "gid://shopify/CalculatedOrder/607673109",
  "lineItemId": "gid://shopify/CalculatedLineItem/510711879",
  "discount": {
    "description": "50% off promotion",
    "percentValue": 50
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

8

›

⌄

⌄

{

"id": "gid://shopify/CalculatedOrder/607673109",

"lineItemId": "gid://shopify/CalculatedLineItem/510711879",

"discount": {

"description": "50% off promotion",

"percentValue": 50

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

{

"orderEditAddLineItemDiscount": {

"calculatedOrder": {

"id": "gid://shopify/CalculatedOrder/607673109"

},

"calculatedLineItem": {

"id": "gid://shopify/CalculatedLineItem/510711879",

"calculatedDiscountAllocations": [

{

"discountApplication": {

"id": "gid://shopify/CalculatedManualDiscountApplication/68bd25c3-b74e-4250-814f-9fec0549c043"

}

}

]

},

"addedDiscountStagedChange": {

"id": "gid://shopify/OrderStagedChangeAddLineItemDiscount/925898897",

"description": "50% off promotion",

"value": {

"__typename": "PricingPercentageValue",

"percentage": 50

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*