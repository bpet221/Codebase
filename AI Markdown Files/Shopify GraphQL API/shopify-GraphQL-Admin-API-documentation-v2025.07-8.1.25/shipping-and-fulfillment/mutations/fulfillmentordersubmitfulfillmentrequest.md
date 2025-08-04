---
title: "fulfillmentOrderSubmitFulfillmentRequest"
description: "Shopify GraphQL Admin API documentation for fulfillmentordersubmitfulfillmentrequest"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrderSubmitFulfillmentRequest - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest

Markdown Content:
fulfillmentOrderSubmitFulfillmentRequest - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#main-content)

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
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   
Shipping And Fulfillment

    *   Queries   
    *   
Mutations

        *   [carrier Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate)
        *   [carrier Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicedelete)
        *   [carrier Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate)
        *   [delivery Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationactivation)
        *   [delivery Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationcreate)
        *   [delivery Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationdelete)
        *   [delivery Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationupdate)
        *   [delivery Profile Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileremove)
        *   [delivery Promise Participants Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseparticipantsupdate)
        *   [delivery Promise Provider Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseproviderupsert)
        *   [delivery Setting Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverysettingupdate)
        *   [delivery Shipping Origin Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryshippingoriginassign)
        *   [fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcancel)
        *   [fulfillment Constraint Rule Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintrulecreate)
        *   [fulfillment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreate)
        *   [fulfillment Create V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2)
        *   [fulfillment Event Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate)
        *   [fulfillment Order Accept Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderacceptcancellationrequest)
        *   [fulfillment Order Accept Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderacceptfulfillmentrequest)
        *   [fulfillment Order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordercancel)
        *   [fulfillment Order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderclose)
        *   [fulfillment Order Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold)
        *   [fulfillment Order Line Items Prepared For Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderlineitemspreparedforpickup)
        *   [fulfillment Order Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermerge)
        *   [fulfillment Order Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove)
        *   [fulfillment Order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderopen)
        *   [fulfillment Order Reject Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderrejectcancellationrequest)
        *   [fulfillment Order Reject Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderrejectfulfillmentrequest)
        *   [fulfillment Order Release Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreleasehold)
        *   [fulfillment Order Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule)
        *   [fulfillment Order Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit)
        *   [fulfillment Orders Set Fulfillment Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline)
        *   [fulfillment Order Submit Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitcancellationrequest)
        *   [fulfillment Order Submit Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest)
        *   [fulfillment Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentservicecreate)
        *   [fulfillment Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentservicedelete)
        *   [fulfillment Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate)
        *   [fulfillment Tracking Info Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenttrackinginfoupdate)
        *   [fulfillment Tracking Info Update V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenttrackinginfoupdatev2)
        *   [location Local Pickup Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable)
        *   [location Local Pickup Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable)
        *   [shipping Package Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagedelete)
        *   [shipping Package Make Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagemakedefault)
        *   [shipping Package Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackageupdate)

    *   Objects   

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

[Anchor to fulfillmentOrderSubmitFulfillmentRequest](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#top)
fulfillment Order Submit Fulfillment Request
============================================

mutation

Requires `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Sends a fulfillment request to the fulfillment service of a fulfillment order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#arguments)
Arguments
---------

[Anchor to fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#arguments-fulfillmentOrderLineItems)fulfillment Order Line Items

•[[Fulfillment Order Line Item Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

The fulfillment order line items to be requested for fulfillment. If left blank, all line items of the fulfillment order are requested for fulfillment.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the fulfillment order associated with fulfillment request.

[Anchor to message](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#arguments-message)message

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

An optional message for the fulfillment request.

[Anchor to notifyCustomer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#arguments-notifyCustomer)notify Customer

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the customer should be notified when fulfillments are created for this fulfillment order.

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentOrderSubmitFulfillmentRequestPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#returns)Fulfillment Order Submit Fulfillment Request Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to originalFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#returns-originalFulfillmentOrder)original Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The original fulfillment order intended to request fulfillment for.

Show fields

[Anchor to submittedFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#returns-submittedFulfillmentOrder)submitted Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The fulfillment order that was submitted to the fulfillment service. This will be the same as the original fulfillment order field. The exception to this is partial fulfillment requests or fulfillment request for cancelled or incomplete fulfillment orders.

Show fields

[Anchor to unsubmittedFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#returns-unsubmittedFulfillmentOrder)unsubmitted Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

This field will only be present for partial fulfillment requests. This will represent the new fulfillment order with the remaining line items not submitted to the fulfillment service.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Sends a fulfillment request

#### Description

A merchant or order management app requests to fulfill an entire fulfillment order.

#### Query

```graphql
mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
  fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
    originalFulfillmentOrder {
      id
      status
      requestStatus
    }
    submittedFulfillmentOrder {
      id
      status
      requestStatus
    }
    unsubmittedFulfillmentOrder {
      id
      status
      requestStatus
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
  "id": "gid://shopify/FulfillmentOrder/1046000784"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) { fulfillmentOrderSubmitFulfillmentRequest(id: $id) { originalFulfillmentOrder { id status requestStatus } submittedFulfillmentOrder { id status requestStatus } unsubmittedFulfillmentOrder { id status requestStatus } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046000784"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
    fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
      originalFulfillmentOrder {
        id
        status
        requestStatus
      }
      submittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      unsubmittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/1046000784"
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
  mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
    fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
      originalFulfillmentOrder {
        id
        status
        requestStatus
      }
      submittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      unsubmittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/1046000784"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
      fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
        originalFulfillmentOrder {
          id
          status
          requestStatus
        }
        submittedFulfillmentOrder {
          id
          status
          requestStatus
        }
        unsubmittedFulfillmentOrder {
          id
          status
          requestStatus
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/1046000784"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderSubmitFulfillmentRequest": {
    "originalFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000784",
      "status": "OPEN",
      "requestStatus": "SUBMITTED"
    },
    "submittedFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000784",
      "status": "OPEN",
      "requestStatus": "SUBMITTED"
    },
    "unsubmittedFulfillmentOrder": null,
    "userErrors": []
  }
}
``` 
*   ### Split a fulfillment order into a partial fulfillment request

#### Description

A merchant or order management app requests to fulfill only specific line items of a fulfillment order.

#### Query

```graphql
mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!, $fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]) {
  fulfillmentOrderSubmitFulfillmentRequest(id: $id, fulfillmentOrderLineItems: $fulfillmentOrderLineItems) {
    originalFulfillmentOrder {
      id
      status
      requestStatus
    }
    submittedFulfillmentOrder {
      id
      status
      requestStatus
    }
    unsubmittedFulfillmentOrder {
      id
      status
      requestStatus
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
  "id": "gid://shopify/FulfillmentOrder/1046000782",
  "fulfillmentOrderLineItems": [
    {
      "id": "gid://shopify/FulfillmentOrderLineItem/1072503280",
      "quantity": 1
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!, $fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]) { fulfillmentOrderSubmitFulfillmentRequest(id: $id, fulfillmentOrderLineItems: $fulfillmentOrderLineItems) { originalFulfillmentOrder { id status requestStatus } submittedFulfillmentOrder { id status requestStatus } unsubmittedFulfillmentOrder { id status requestStatus } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046000782",
    "fulfillmentOrderLineItems": [
      {
        "id": "gid://shopify/FulfillmentOrderLineItem/1072503280",
        "quantity": 1
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!, $fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]) {
    fulfillmentOrderSubmitFulfillmentRequest(id: $id, fulfillmentOrderLineItems: $fulfillmentOrderLineItems) {
      originalFulfillmentOrder {
        id
        status
        requestStatus
      }
      submittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      unsubmittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/1046000782",
        "fulfillmentOrderLineItems": [
            {
                "id": "gid://shopify/FulfillmentOrderLineItem/1072503280",
                "quantity": 1
            }
        ]
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
  mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!, $fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]) {
    fulfillmentOrderSubmitFulfillmentRequest(id: $id, fulfillmentOrderLineItems: $fulfillmentOrderLineItems) {
      originalFulfillmentOrder {
        id
        status
        requestStatus
      }
      submittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      unsubmittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/1046000782",
  "fulfillmentOrderLineItems": [
    {
      "id": "gid://shopify/FulfillmentOrderLineItem/1072503280",
      "quantity": 1
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!, $fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]) {
      fulfillmentOrderSubmitFulfillmentRequest(id: $id, fulfillmentOrderLineItems: $fulfillmentOrderLineItems) {
        originalFulfillmentOrder {
          id
          status
          requestStatus
        }
        submittedFulfillmentOrder {
          id
          status
          requestStatus
        }
        unsubmittedFulfillmentOrder {
          id
          status
          requestStatus
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/1046000782",
        "fulfillmentOrderLineItems": [
            {
                "id": "gid://shopify/FulfillmentOrderLineItem/1072503280",
                "quantity": 1
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderSubmitFulfillmentRequest": {
    "originalFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000782",
      "status": "OPEN",
      "requestStatus": "SUBMITTED"
    },
    "submittedFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000782",
      "status": "OPEN",
      "requestStatus": "SUBMITTED"
    },
    "unsubmittedFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000783",
      "status": "OPEN",
      "requestStatus": "UNSUBMITTED"
    },
    "userErrors": []
  }
}
``` 
*   ### fulfillmentOrderSubmitFulfillmentRequest reference

Examples
--------

Sends a fulfillment request

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderSubmitFulfillmentRequest(%24id%3A%20ID!)%20%7B%0A%20%20fulfillmentOrderSubmitFulfillmentRequest(id%3A%20%24id)%20%7B%0A%20%20%20%20originalFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20submittedFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20unsubmittedFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046000784%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {

 fulfillmentOrderSubmitFulfillmentRequest(id: $id) {

 originalFulfillmentOrder {

 id

 status

 requestStatus

 }

 submittedFulfillmentOrder {

 id

 status

 requestStatus

 }

 unsubmittedFulfillmentOrder {

 id

 status

 requestStatus

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/FulfillmentOrder/1046000784"

},

},

);

const data=await response.json();

```
mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
  fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
    originalFulfillmentOrder {
      id
      status
      requestStatus
    }
    submittedFulfillmentOrder {
      id
      status
      requestStatus
    }
    unsubmittedFulfillmentOrder {
      id
      status
      requestStatus
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
"query": "mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) { fulfillmentOrderSubmitFulfillmentRequest(id: $id) { originalFulfillmentOrder { id status requestStatus } submittedFulfillmentOrder { id status requestStatus } unsubmittedFulfillmentOrder { id status requestStatus } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046000784"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
    fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
      originalFulfillmentOrder {
        id
        status
        requestStatus
      }
      submittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      unsubmittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/1046000784"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
      fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
        originalFulfillmentOrder {
          id
          status
          requestStatus
        }
        submittedFulfillmentOrder {
          id
          status
          requestStatus
        }
        unsubmittedFulfillmentOrder {
          id
          status
          requestStatus
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/1046000784"
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
  mutation fulfillmentOrderSubmitFulfillmentRequest($id: ID!) {
    fulfillmentOrderSubmitFulfillmentRequest(id: $id) {
      originalFulfillmentOrder {
        id
        status
        requestStatus
      }
      submittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      unsubmittedFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/1046000784"
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

"id": "gid://shopify/FulfillmentOrder/1046000784"

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

"fulfillmentOrderSubmitFulfillmentRequest": {

"originalFulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/1046000784",

"status": "OPEN",

"requestStatus": "SUBMITTED"

},

"submittedFulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/1046000784",

"status": "OPEN",

"requestStatus": "SUBMITTED"

},

"unsubmittedFulfillmentOrder": null,

"userErrors": []

}

}


---
*Content truncated at "Updates" section*