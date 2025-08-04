---
title: "subscriptionBillingCycleScheduleEdit"
description: "Shopify GraphQL Admin API documentation for subscriptionbillingcyclescheduleedit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: subscriptionBillingCycleScheduleEdit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit

Markdown Content:
subscriptionBillingCycleScheduleEdit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#main-content)

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

[Anchor to subscriptionBillingCycleScheduleEdit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#top)
subscription Billing Cycle Schedule Edit
========================================

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage_orders_information permission.

Modify the schedule of a specific billing cycle.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#arguments)
Arguments
---------

[Anchor to billingCycleInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#arguments-billingCycleInput)billing Cycle Input

•[Subscription Billing Cycle Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

required

Input object for selecting and using billing cycles.

Show input fields

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#arguments-input)input

•[Subscription Billing Cycle Schedule Edit Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput)

required

Data used to create or modify billing cycle schedule edit.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to SubscriptionBillingCycleScheduleEditPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#returns)Subscription Billing Cycle Schedule Edit Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to billingCycle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#returns-billingCycle)billing Cycle

•[Subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

The updated billing cycle.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit#returns-userErrors)user Errors

•[[Subscription Billing Cycle User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Change the billing date of a cycle

#### Description

Changes the `billingAttemptExpectedDate` for the specified cycle.

#### Query

```graphql
mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
  subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
    billingCycle {
      cycleIndex
      billingAttemptExpectedDate
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
  "contractId": "gid://shopify/SubscriptionContract/398475269",
  "index": 1,
  "date": "2021-12-31T07:00:00-05:00"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) { subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) { billingCycle { cycleIndex billingAttemptExpectedDate } userErrors { field message } } }",
 "variables": {
    "contractId": "gid://shopify/SubscriptionContract/398475269",
    "index": 1,
    "date": "2021-12-31T07:00:00-05:00"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
    subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
      billingCycle {
        cycleIndex
        billingAttemptExpectedDate
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "contractId": "gid://shopify/SubscriptionContract/398475269",
        "index": 1,
        "date": "2021-12-31T07:00:00-05:00"
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
  mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
    subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
      billingCycle {
        cycleIndex
        billingAttemptExpectedDate
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "contractId": "gid://shopify/SubscriptionContract/398475269",
  "index": 1,
  "date": "2021-12-31T07:00:00-05:00"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
      subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
        billingCycle {
          cycleIndex
          billingAttemptExpectedDate
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "contractId": "gid://shopify/SubscriptionContract/398475269",
        "index": 1,
        "date": "2021-12-31T07:00:00-05:00"
    },
  },
});
``` #### Response

```json
{
  "subscriptionBillingCycleScheduleEdit": {
    "billingCycle": {
      "cycleIndex": 1,
      "billingAttemptExpectedDate": "2021-12-31T12:00:00Z"
    },
    "userErrors": []
  }
}
``` 
*   ### Skip a cycle

#### Description

Skips the billing and delivery for the billing cycle with cycle index `1`. The reason that is given for the skip is a customer request.

#### Query

```graphql
mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!) {
  subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {skip: true, reason: BUYER_INITIATED}) {
    billingCycle {
      cycleIndex
      skipped
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
  "contractId": "gid://shopify/SubscriptionContract/398475269",
  "index": 1
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!) { subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {skip: true, reason: BUYER_INITIATED}) { billingCycle { cycleIndex skipped } userErrors { field message } } }",
 "variables": {
    "contractId": "gid://shopify/SubscriptionContract/398475269",
    "index": 1
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!) {
    subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {skip: true, reason: BUYER_INITIATED}) {
      billingCycle {
        cycleIndex
        skipped
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "contractId": "gid://shopify/SubscriptionContract/398475269",
        "index": 1
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
  mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!) {
    subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {skip: true, reason: BUYER_INITIATED}) {
      billingCycle {
        cycleIndex
        skipped
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "contractId": "gid://shopify/SubscriptionContract/398475269",
  "index": 1
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!) {
      subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {skip: true, reason: BUYER_INITIATED}) {
        billingCycle {
          cycleIndex
          skipped
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "contractId": "gid://shopify/SubscriptionContract/398475269",
        "index": 1
    },
  },
});
``` #### Response

```json
{
  "subscriptionBillingCycleScheduleEdit": {
    "billingCycle": {
      "cycleIndex": 1,
      "skipped": true
    },
    "userErrors": []
  }
}
``` 
*   ### subscriptionBillingCycleScheduleEdit reference

Examples
--------

Change the billing date of a cycle

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20subscriptionBillingCycleScheduleEdit(%24contractId%3A%20ID!%2C%20%24index%3A%20Int!%2C%20%24date%3A%20DateTime!)%20%7B%0A%20%20subscriptionBillingCycleScheduleEdit(billingCycleInput%3A%20%7BcontractId%3A%20%24contractId%2C%20selector%3A%20%7Bindex%3A%20%24index%7D%7D%2C%20input%3A%20%7BbillingDate%3A%20%24date%2C%20reason%3A%20BUYER_INITIATED%7D)%20%7B%0A%20%20%20%20billingCycle%20%7B%0A%20%20%20%20%20%20cycleIndex%0A%20%20%20%20%20%20billingAttemptExpectedDate%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22contractId%22%3A%20%22gid%3A%2F%2Fshopify%2FSubscriptionContract%2F398475269%22%2C%0A%20%20%22index%22%3A%201%2C%0A%20%20%22date%22%3A%20%222021-12-31T07%3A00%3A00-05%3A00%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {

 subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {

 billingCycle {

 cycleIndex

 billingAttemptExpectedDate

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"contractId":"gid://shopify/SubscriptionContract/398475269",

"index":1,

"date":"2021-12-31T07:00:00-05:00"

},

},

);

const data=await response.json();

```
mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
  subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
    billingCycle {
      cycleIndex
      billingAttemptExpectedDate
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
"query": "mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) { subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) { billingCycle { cycleIndex billingAttemptExpectedDate } userErrors { field message } } }",
 "variables": {
    "contractId": "gid://shopify/SubscriptionContract/398475269",
    "index": 1,
    "date": "2021-12-31T07:00:00-05:00"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
    subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
      billingCycle {
        cycleIndex
        billingAttemptExpectedDate
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "contractId": "gid://shopify/SubscriptionContract/398475269",
        "index": 1,
        "date": "2021-12-31T07:00:00-05:00"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
      subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
        billingCycle {
          cycleIndex
          billingAttemptExpectedDate
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "contractId": "gid://shopify/SubscriptionContract/398475269",
        "index": 1,
        "date": "2021-12-31T07:00:00-05:00"
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
  mutation subscriptionBillingCycleScheduleEdit($contractId: ID!, $index: Int!, $date: DateTime!) {
    subscriptionBillingCycleScheduleEdit(billingCycleInput: {contractId: $contractId, selector: {index: $index}}, input: {billingDate: $date, reason: BUYER_INITIATED}) {
      billingCycle {
        cycleIndex
        billingAttemptExpectedDate
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "contractId": "gid://shopify/SubscriptionContract/398475269",
  "index": 1,
  "date": "2021-12-31T07:00:00-05:00"
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

{

"contractId": "gid://shopify/SubscriptionContract/398475269",

"index": 1,

"date": "2021-12-31T07:00:00-05:00"

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

9

›

⌄

⌄

⌄

{

"subscriptionBillingCycleScheduleEdit": {

"billingCycle": {

"cycleIndex": 1,

"billingAttemptExpectedDate": "2021-12-31T12:00:00Z"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*