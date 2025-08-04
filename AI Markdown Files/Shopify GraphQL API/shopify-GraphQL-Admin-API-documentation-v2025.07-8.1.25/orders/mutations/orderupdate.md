---
title: "orderUpdate"
description: "Shopify GraphQL Admin API documentation for orderupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate

Markdown Content:
orderUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#main-content)

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

[Anchor to orderUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#top)
order Update
============

mutation

Requires `write_orders` access scope or `write_marketplace_orders` access scope. Also: The app must have the `write_pos_staff_member_event_attribution_overrides` access scope to assign events to another staff member.

Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#arguments-input)input

•[Order Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderInput)

required

The attributes of the updated order.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to OrderUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#returns)Order Update Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#returns-order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The updated order.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update an order's shipping address and note

#### Description

This mutation updates the shipping address and note of an existing order, identified by its ID. The response includes the order's updated shipping address and note.

#### Query

```graphql
mutation OrderUpdate($input: OrderInput!) {
  orderUpdate(input: $input) {
    order {
      id
      note
      shippingAddress {
        address1
        city
        province
        zip
        country
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
    "id": "gid://shopify/Order/148977776",
    "shippingAddress": {
      "address1": "190 MacLaren",
      "city": "Sudbury",
      "province": "Ontario",
      "zip": "K2P0V6",
      "country": "Canada"
    },
    "note": "Please gift wrap the snowboard."
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderUpdate($input: OrderInput!) { orderUpdate(input: $input) { order { id note shippingAddress { address1 city province zip country } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      },
      "note": "Please gift wrap the snowboard."
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
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
            "id": "gid://shopify/Order/148977776",
            "shippingAddress": {
                "address1": "190 MacLaren",
                "city": "Sudbury",
                "province": "Ontario",
                "zip": "K2P0V6",
                "country": "Canada"
            },
            "note": "Please gift wrap the snowboard."
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
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
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
    "id": "gid://shopify/Order/148977776",
    "shippingAddress": {
      "address1": "190 MacLaren",
      "city": "Sudbury",
      "province": "Ontario",
      "zip": "K2P0V6",
      "country": "Canada"
    },
    "note": "Please gift wrap the snowboard."
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          id
          note
          shippingAddress {
            address1
            city
            province
            zip
            country
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
            "id": "gid://shopify/Order/148977776",
            "shippingAddress": {
                "address1": "190 MacLaren",
                "city": "Sudbury",
                "province": "Ontario",
                "zip": "K2P0V6",
                "country": "Canada"
            },
            "note": "Please gift wrap the snowboard."
        }
    },
  },
});
``` #### Response

```json
{
  "orderUpdate": {
    "order": {
      "id": "gid://shopify/Order/148977776",
      "note": "Please gift wrap the snowboard.",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update an order's tags and customer email address

#### Description

This mutation updates an existing order by its ID, adding new tags and changing the customer's email address. The response includes details about the order's payment status, cancellation status, customer information, and applied discount codes.

#### Query

```graphql
mutation OrderUpdate($input: OrderInput!) {
  orderUpdate(input: $input) {
    order {
      canMarkAsPaid
      cancelReason
      cancelledAt
      clientIp
      confirmed
      customer {
        displayName
        email
      }
      discountCodes
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
    "id": "gid://shopify/Order/148977776",
    "email": "bob@example.com",
    "tags": [
      "foo",
      "bar"
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
"query": "mutation OrderUpdate($input: OrderInput!) { orderUpdate(input: $input) { order { canMarkAsPaid cancelReason cancelledAt clientIp confirmed customer { displayName email } discountCodes } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "email": "bob@example.com",
      "tags": [
        "foo",
        "bar"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        canMarkAsPaid
        cancelReason
        cancelledAt
        clientIp
        confirmed
        customer {
          displayName
          email
        }
        discountCodes
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
            "id": "gid://shopify/Order/148977776",
            "email": "bob@example.com",
            "tags": [
                "foo",
                "bar"
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
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        canMarkAsPaid
        cancelReason
        cancelledAt
        clientIp
        confirmed
        customer {
          displayName
          email
        }
        discountCodes
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
    "id": "gid://shopify/Order/148977776",
    "email": "bob@example.com",
    "tags": [
      "foo",
      "bar"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          canMarkAsPaid
          cancelReason
          cancelledAt
          clientIp
          confirmed
          customer {
            displayName
            email
          }
          discountCodes
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Order/148977776",
            "email": "bob@example.com",
            "tags": [
                "foo",
                "bar"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "orderUpdate": {
    "order": {
      "canMarkAsPaid": false,
      "cancelReason": null,
      "cancelledAt": null,
      "clientIp": "216.191.105.144",
      "confirmed": true,
      "customer": {
        "displayName": "Bob Bobsen",
        "email": "bob@example.com"
      },
      "discountCodes": []
    },
    "userErrors": []
  }
}
``` 
*   ### orderUpdate reference

Examples
--------

Update an order's shipping address and note

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderUpdate(%24input%3A%20OrderInput!)%20%7B%0A%20%20orderUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20note%0A%20%20%20%20%20%20shippingAddress%20%7B%0A%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%20%20province%0A%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F148977776%22%2C%0A%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22190%20MacLaren%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22Sudbury%22%2C%0A%20%20%20%20%20%20%22province%22%3A%20%22Ontario%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22K2P0V6%22%2C%0A%20%20%20%20%20%20%22country%22%3A%20%22Canada%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22note%22%3A%20%22Please%20gift%20wrap%20the%20snowboard.%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation OrderUpdate($input: OrderInput!) {

 orderUpdate(input: $input) {

 order {

 id

 note

 shippingAddress {

 address1

 city

 province

 zip

 country

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

"id":"gid://shopify/Order/148977776",

"shippingAddress":{

"address1":"190 MacLaren",

"city":"Sudbury",

"province":"Ontario",

"zip":"K2P0V6",

"country":"Canada"

},

"note":"Please gift wrap the snowboard."

}

},

},

);

const data=await response.json();

```
mutation OrderUpdate($input: OrderInput!) {
  orderUpdate(input: $input) {
    order {
      id
      note
      shippingAddress {
        address1
        city
        province
        zip
        country
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
"query": "mutation OrderUpdate($input: OrderInput!) { orderUpdate(input: $input) { order { id note shippingAddress { address1 city province zip country } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Order/148977776",
      "shippingAddress": {
        "address1": "190 MacLaren",
        "city": "Sudbury",
        "province": "Ontario",
        "zip": "K2P0V6",
        "country": "Canada"
      },
      "note": "Please gift wrap the snowboard."
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
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
            "id": "gid://shopify/Order/148977776",
            "shippingAddress": {
                "address1": "190 MacLaren",
                "city": "Sudbury",
                "province": "Ontario",
                "zip": "K2P0V6",
                "country": "Canada"
            },
            "note": "Please gift wrap the snowboard."
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
    "query": `mutation OrderUpdate($input: OrderInput!) {
      orderUpdate(input: $input) {
        order {
          id
          note
          shippingAddress {
            address1
            city
            province
            zip
            country
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
            "id": "gid://shopify/Order/148977776",
            "shippingAddress": {
                "address1": "190 MacLaren",
                "city": "Sudbury",
                "province": "Ontario",
                "zip": "K2P0V6",
                "country": "Canada"
            },
            "note": "Please gift wrap the snowboard."
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
  mutation OrderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
        note
        shippingAddress {
          address1
          city
          province
          zip
          country
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
    "id": "gid://shopify/Order/148977776",
    "shippingAddress": {
      "address1": "190 MacLaren",
      "city": "Sudbury",
      "province": "Ontario",
      "zip": "K2P0V6",
      "country": "Canada"
    },
    "note": "Please gift wrap the snowboard."
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

13

›

⌄

⌄

⌄

{

"input": {

"id": "gid://shopify/Order/148977776",

"shippingAddress": {

"address1": "190 MacLaren",

"city": "Sudbury",

"province": "Ontario",

"zip": "K2P0V6",

"country": "Canada"

},

"note": "Please gift wrap the snowboard."

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

›

⌄

⌄

⌄

⌄

{

"orderUpdate": {

"order": {

"id": "gid://shopify/Order/148977776",

"note": "Please gift wrap the snowboard.",

"shippingAddress": {

"address1": "190 MacLaren",

"city": "Sudbury",

"province": "Ontario",

"zip": "K2P0V6",

"country": "Canada"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*