---
title: "fulfillmentOrderHold"
description: "Shopify GraphQL Admin API documentation for fulfillmentorderhold"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrderHold - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold

Markdown Content:
fulfillmentOrderHold - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#main-content)

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

[Anchor to fulfillmentOrderHold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#top)
fulfillment Order Hold
======================

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Applies a fulfillment hold on a fulfillment order.

As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#arguments)
Arguments
---------

[Anchor to fulfillmentHold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#arguments-fulfillmentHold)fulfillment Hold

•[Fulfillment Order Hold Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput)

required

The details of the fulfillment hold applied on the fulfillment order.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the fulfillment order on which a fulfillment hold is applied.

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentOrderHoldPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#returns)Fulfillment Order Hold Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentHold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#returns-fulfillmentHold)fulfillment Hold

•[Fulfillment Hold](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold)

The fulfillment hold created for the fulfillment order. Null if no hold was created.

Show fields

[Anchor to fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#returns-fulfillmentOrder)fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The fulfillment order on which a fulfillment hold was applied.

Show fields

[Anchor to remainingFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#returns-remainingFulfillmentOrder)remaining Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The remaining fulfillment order containing the line items to which the hold wasn't applied, if specific line items were specified to be placed on hold.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold#returns-userErrors)user Errors

•[[Fulfillment Order Hold User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Applies a fulfillment hold on an open fulfillment order

#### Query

```graphql
mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
  fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
    fulfillmentOrder {
      id
    }
    remainingFulfillmentOrder {
      id
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
  "fulfillmentHold": {
    "reason": "INVENTORY_OUT_OF_STOCK",
    "reasonNotes": "Waiting on new shipment"
  },
  "id": "gid://shopify/FulfillmentOrder/1046001479"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) { fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) { fulfillmentOrder { id } remainingFulfillmentOrder { id } userErrors { field message } } }",
 "variables": {
    "fulfillmentHold": {
      "reason": "INVENTORY_OUT_OF_STOCK",
      "reasonNotes": "Waiting on new shipment"
    },
    "id": "gid://shopify/FulfillmentOrder/1046001479"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
    fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
      fulfillmentOrder {
        id
      }
      remainingFulfillmentOrder {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentHold": {
            "reason": "INVENTORY_OUT_OF_STOCK",
            "reasonNotes": "Waiting on new shipment"
        },
        "id": "gid://shopify/FulfillmentOrder/1046001479"
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
  mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
    fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
      fulfillmentOrder {
        id
      }
      remainingFulfillmentOrder {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentHold": {
    "reason": "INVENTORY_OUT_OF_STOCK",
    "reasonNotes": "Waiting on new shipment"
  },
  "id": "gid://shopify/FulfillmentOrder/1046001479"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
      fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
        fulfillmentOrder {
          id
        }
        remainingFulfillmentOrder {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentHold": {
            "reason": "INVENTORY_OUT_OF_STOCK",
            "reasonNotes": "Waiting on new shipment"
        },
        "id": "gid://shopify/FulfillmentOrder/1046001479"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderHold": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046001479"
    },
    "remainingFulfillmentOrder": null,
    "userErrors": []
  }
}
``` 
*   ### Put a fulfillment order on hold

#### Description

A merchant or order management app puts a fulfillment order on hold because the items are out of stock.

#### Query

```graphql
mutation fulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
  fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
    fulfillmentOrder {
      id
      status
      requestStatus
      fulfillmentHolds {
        reason
        reasonNotes
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
  "fulfillmentHold": {
    "notifyMerchant": true,
    "reason": "INVENTORY_OUT_OF_STOCK",
    "reasonNotes": "Waiting on new shipment"
  },
  "id": "gid://shopify/FulfillmentOrder/1046001480"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) { fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) { fulfillmentOrder { id status requestStatus fulfillmentHolds { reason reasonNotes } } userErrors { field message } } }",
 "variables": {
    "fulfillmentHold": {
      "notifyMerchant": true,
      "reason": "INVENTORY_OUT_OF_STOCK",
      "reasonNotes": "Waiting on new shipment"
    },
    "id": "gid://shopify/FulfillmentOrder/1046001480"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
    fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
      fulfillmentOrder {
        id
        status
        requestStatus
        fulfillmentHolds {
          reason
          reasonNotes
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
        "fulfillmentHold": {
            "notifyMerchant": true,
            "reason": "INVENTORY_OUT_OF_STOCK",
            "reasonNotes": "Waiting on new shipment"
        },
        "id": "gid://shopify/FulfillmentOrder/1046001480"
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
  mutation fulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
    fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
      fulfillmentOrder {
        id
        status
        requestStatus
        fulfillmentHolds {
          reason
          reasonNotes
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
  "fulfillmentHold": {
    "notifyMerchant": true,
    "reason": "INVENTORY_OUT_OF_STOCK",
    "reasonNotes": "Waiting on new shipment"
  },
  "id": "gid://shopify/FulfillmentOrder/1046001480"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
      fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
        fulfillmentOrder {
          id
          status
          requestStatus
          fulfillmentHolds {
            reason
            reasonNotes
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentHold": {
            "notifyMerchant": true,
            "reason": "INVENTORY_OUT_OF_STOCK",
            "reasonNotes": "Waiting on new shipment"
        },
        "id": "gid://shopify/FulfillmentOrder/1046001480"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderHold": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046001480",
      "status": "ON_HOLD",
      "requestStatus": "UNSUBMITTED",
      "fulfillmentHolds": [
        {
          "reason": "INVENTORY_OUT_OF_STOCK",
          "reasonNotes": "Waiting on new shipment"
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### fulfillmentOrderHold reference

Examples
--------

Applies a fulfillment hold on an open fulfillment order

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20FulfillmentOrderHold(%24fulfillmentHold%3A%20FulfillmentOrderHoldInput!%2C%20%24id%3A%20ID!)%20%7B%0A%20%20fulfillmentOrderHold(fulfillmentHold%3A%20%24fulfillmentHold%2C%20id%3A%20%24id)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20remainingFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22fulfillmentHold%22%3A%20%7B%0A%20%20%20%20%22reason%22%3A%20%22INVENTORY_OUT_OF_STOCK%22%2C%0A%20%20%20%20%22reasonNotes%22%3A%20%22Waiting%20on%20new%20shipment%22%0A%20%20%7D%2C%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046001479%22%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {

 fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {

 fulfillmentOrder {

 id

 }

 remainingFulfillmentOrder {

 id

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"fulfillmentHold":{

"reason":"INVENTORY_OUT_OF_STOCK",

"reasonNotes":"Waiting on new shipment"

},

"id":"gid://shopify/FulfillmentOrder/1046001479"

},

},

);

const data=await response.json();

```
mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
  fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
    fulfillmentOrder {
      id
    }
    remainingFulfillmentOrder {
      id
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
"query": "mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) { fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) { fulfillmentOrder { id } remainingFulfillmentOrder { id } userErrors { field message } } }",
 "variables": {
    "fulfillmentHold": {
      "reason": "INVENTORY_OUT_OF_STOCK",
      "reasonNotes": "Waiting on new shipment"
    },
    "id": "gid://shopify/FulfillmentOrder/1046001479"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
    fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
      fulfillmentOrder {
        id
      }
      remainingFulfillmentOrder {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentHold": {
            "reason": "INVENTORY_OUT_OF_STOCK",
            "reasonNotes": "Waiting on new shipment"
        },
        "id": "gid://shopify/FulfillmentOrder/1046001479"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
      fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
        fulfillmentOrder {
          id
        }
        remainingFulfillmentOrder {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentHold": {
            "reason": "INVENTORY_OUT_OF_STOCK",
            "reasonNotes": "Waiting on new shipment"
        },
        "id": "gid://shopify/FulfillmentOrder/1046001479"
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
  mutation FulfillmentOrderHold($fulfillmentHold: FulfillmentOrderHoldInput!, $id: ID!) {
    fulfillmentOrderHold(fulfillmentHold: $fulfillmentHold, id: $id) {
      fulfillmentOrder {
        id
      }
      remainingFulfillmentOrder {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentHold": {
    "reason": "INVENTORY_OUT_OF_STOCK",
    "reasonNotes": "Waiting on new shipment"
  },
  "id": "gid://shopify/FulfillmentOrder/1046001479"
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

"fulfillmentHold": {

"reason": "INVENTORY_OUT_OF_STOCK",

"reasonNotes": "Waiting on new shipment"

},

"id": "gid://shopify/FulfillmentOrder/1046001479"

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

"fulfillmentOrderHold": {

"fulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/1046001479"

},

"remainingFulfillmentOrder": null,

"userErrors": []

}

}


---
*Content truncated at "Updates" section*