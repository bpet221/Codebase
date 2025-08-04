---
title: "orderInvoiceSend"
description: "Shopify GraphQL Admin API documentation for orderinvoicesend"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderInvoiceSend - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend

Markdown Content:
orderInvoiceSend - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#main-content)

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

[Anchor to orderInvoiceSend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#top)
order Invoice Send
==================

mutation

Requires `write_orders` access scope. Also: The user must have access to orders and manage orders information.

Sends an email invoice for an order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#arguments)
Arguments
---------

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#arguments-email)email

•[Email Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

The email input fields for the order invoice. The `bcc` and `from` fields should be store or staff account emails.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The order associated with the invoice.

* * *

Was this section helpful?

Yes No

[Anchor to OrderInvoiceSendPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#returns)Order Invoice Send Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#returns-order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order associated with the invoice email.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend#returns-userErrors)user Errors

•[[Order Invoice Send User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Send invoice

#### Description

Send an order invoice to a customer.

#### Query

```graphql
mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
  orderInvoiceSend(id: $orderId, email: $email) {
    order {
      id
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "orderId": "gid://shopify/Order/17181286",
  "email": {
    "to": "test@example.net",
    "from": "Sales Modyl <salesmodel@example.com>",
    "subject": "Invoice #1001",
    "customMessage": "Thank you for your order"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) { orderInvoiceSend(id: $orderId, email: $email) { order { id } userErrors { message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/17181286",
    "email": {
      "to": "test@example.net",
      "from": "Sales Modyl <salesmodel@example.com>",
      "subject": "Invoice #1001",
      "customMessage": "Thank you for your order"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/17181286",
        "email": {
            "to": "test@example.net",
            "from": "Sales Modyl <salesmodel@example.com>",
            "subject": "Invoice #1001",
            "customMessage": "Thank you for your order"
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
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/17181286",
  "email": {
    "to": "test@example.net",
    "from": "Sales Modyl <salesmodel@example.com>",
    "subject": "Invoice #1001",
    "customMessage": "Thank you for your order"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
      orderInvoiceSend(id: $orderId, email: $email) {
        order {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/17181286",
        "email": {
            "to": "test@example.net",
            "from": "Sales Modyl <salesmodel@example.com>",
            "subject": "Invoice #1001",
            "customMessage": "Thank you for your order"
        }
    },
  },
});
``` #### Response

```json
{
  "orderInvoiceSend": {
    "order": {
      "id": "gid://shopify/Order/17181286"
    },
    "userErrors": []
  }
}
``` 
*   ### orderInvoiceSend reference

Examples
--------

Send invoice

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20OrderInvoiceSend(%24orderId%3A%20ID!%2C%20%24email%3A%20EmailInput)%20%7B%0A%20%20orderInvoiceSend(id%3A%20%24orderId%2C%20email%3A%20%24email)%20%7B%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F17181286%22%2C%0A%20%20%22email%22%3A%20%7B%0A%20%20%20%20%22to%22%3A%20%22test%40example.net%22%2C%0A%20%20%20%20%22from%22%3A%20%22Sales%20Modyl%20%3Csalesmodel%40example.com%3E%22%2C%0A%20%20%20%20%22subject%22%3A%20%22Invoice%20%231001%22%2C%0A%20%20%20%20%22customMessage%22%3A%20%22Thank%20you%20for%20your%20order%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {

 orderInvoiceSend(id: $orderId, email: $email) {

 order {

 id

 }

 userErrors {

 message

 }

 }

 }`,

{

variables:{

"orderId":"gid://shopify/Order/17181286",

"email":{

"to":"test@example.net",

"from":"Sales Modyl <salesmodel@example.com>",

"subject":"Invoice #1001",

"customMessage":"Thank you for your order"

}

},

},

);

const data=await response.json();

```
mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
  orderInvoiceSend(id: $orderId, email: $email) {
    order {
      id
    }
    userErrors {
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
"query": "mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) { orderInvoiceSend(id: $orderId, email: $email) { order { id } userErrors { message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/17181286",
    "email": {
      "to": "test@example.net",
      "from": "Sales Modyl <salesmodel@example.com>",
      "subject": "Invoice #1001",
      "customMessage": "Thank you for your order"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "orderId": "gid://shopify/Order/17181286",
        "email": {
            "to": "test@example.net",
            "from": "Sales Modyl <salesmodel@example.com>",
            "subject": "Invoice #1001",
            "customMessage": "Thank you for your order"
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
    "query": `mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
      orderInvoiceSend(id: $orderId, email: $email) {
        order {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/17181286",
        "email": {
            "to": "test@example.net",
            "from": "Sales Modyl <salesmodel@example.com>",
            "subject": "Invoice #1001",
            "customMessage": "Thank you for your order"
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
  mutation OrderInvoiceSend($orderId: ID!, $email: EmailInput) {
    orderInvoiceSend(id: $orderId, email: $email) {
      order {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "orderId": "gid://shopify/Order/17181286",
  "email": {
    "to": "test@example.net",
    "from": "Sales Modyl <salesmodel@example.com>",
    "subject": "Invoice #1001",
    "customMessage": "Thank you for your order"
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

9

›

⌄

⌄

{

"orderId": "gid://shopify/Order/17181286",

"email": {

"to": "test@example.net",

"from": "Sales Modyl <salesmodel@example.com>",

"subject": "Invoice #1001",

"customMessage": "Thank you for your order"

}

}

Hide content

Response
--------

JSON

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

⌄

{

"orderInvoiceSend": {

"order": {

"id": "gid://shopify/Order/17181286"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*