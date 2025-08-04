---
title: "fulfillmentOrderMove"
description: "Shopify GraphQL Admin API documentation for fulfillmentordermove"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrderMove - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove

Markdown Content:
fulfillmentOrderMove - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#main-content)

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

[Anchor to fulfillmentOrderMove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#top)
fulfillment Order Move
======================

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.

Moving a fulfillment order will fail in the following circumstances:

*   The fulfillment order is closed.
*   The destination location doesn't stock the requested inventory item.
*   The API client doesn't have the correct permissions.

Line items which have already been fulfilled can't be re-assigned and will always remain assigned to the original location.

You can't change the assigned location while a fulfillment order has a [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus) of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`. These request statuses mean that a fulfillment order is awaiting action by a fulfillment service and can't be re-assigned without first having the fulfillment service accept a cancellation request. This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.

### How re-assigning line items affects fulfillment orders

**First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.

In this case, the [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the original fulfillment order will be updated to the new location.

**Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location. You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter (available as of the `2023-04` API version), or specify that the original fulfillment order contains line items which have already been fulfilled.

If the new location is already assigned to another active fulfillment order, on the same order, then a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated in a new fulfillment order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#arguments)
Arguments
---------

[Anchor to fulfillmentOrderLineItems](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#arguments-fulfillmentOrderLineItems)fulfillment Order Line Items

•[[Fulfillment Order Line Item Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemInput)

The fulfillment order line items to be moved. If left blank, all unfulfilled line items belonging to the fulfillment order are moved.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the fulfillment order to be moved.

[Anchor to newLocationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#arguments-newLocationId)new Location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the location where the fulfillment order will be moved.

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentOrderMovePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#returns)Fulfillment Order Move Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to movedFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#returns-movedFulfillmentOrder)moved Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The fulfillment order which now contains the moved line items and is assigned to the destination location.

If the original fulfillment order doesn't have any line items which are fully or partially fulfilled, the original fulfillment order will be moved to the new location. However if this isn't the case, the moved fulfillment order will differ from the original one.

Show fields

[Anchor to originalFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#returns-originalFulfillmentOrder)original Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The final state of the original fulfillment order.

As a result of the move operation, the original fulfillment order might be moved to the new location or remain in the original location. The original fulfillment order might have the same status or be closed.

Show fields

[Anchor to remainingFulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#returns-remainingFulfillmentOrder)remaining Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

This field is deprecated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Move some of the line items in a fulfillment order to a new location

#### Description

Only the line items that are stocked at the new location get moved.

#### Query

```graphql
mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
  fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
    movedFulfillmentOrder {
      id
      status
    }
    originalFulfillmentOrder {
      id
      status
    }
    remainingFulfillmentOrder {
      id
      status
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
  "id": "gid://shopify/FulfillmentOrder/940656279",
  "newLocationId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) { fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) { movedFulfillmentOrder { id status } originalFulfillmentOrder { id status } remainingFulfillmentOrder { id status } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/940656279",
    "newLocationId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
    fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
      movedFulfillmentOrder {
        id
        status
      }
      originalFulfillmentOrder {
        id
        status
      }
      remainingFulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/940656279",
        "newLocationId": "gid://shopify/Location/346779380"
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
  mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
    fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
      movedFulfillmentOrder {
        id
        status
      }
      originalFulfillmentOrder {
        id
        status
      }
      remainingFulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/940656279",
  "newLocationId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
      fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
        movedFulfillmentOrder {
          id
          status
        }
        originalFulfillmentOrder {
          id
          status
        }
        remainingFulfillmentOrder {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/940656279",
        "newLocationId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderMove": {
    "movedFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000780",
      "status": "OPEN"
    },
    "originalFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/940656279",
      "status": "OPEN"
    },
    "remainingFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/940656279",
      "status": "OPEN"
    },
    "userErrors": []
  }
}
``` 
*   ### Moves a fulfillment order to a new location

#### Description

Move all of the line items in a fulfillment order to a new location.

#### Query

```graphql
mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
  fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
    movedFulfillmentOrder {
      id
      status
    }
    originalFulfillmentOrder {
      id
      status
    }
    remainingFulfillmentOrder {
      id
      status
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
  "id": "gid://shopify/FulfillmentOrder/564786110",
  "newLocationId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) { fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) { movedFulfillmentOrder { id status } originalFulfillmentOrder { id status } remainingFulfillmentOrder { id status } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/564786110",
    "newLocationId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
    fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
      movedFulfillmentOrder {
        id
        status
      }
      originalFulfillmentOrder {
        id
        status
      }
      remainingFulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "newLocationId": "gid://shopify/Location/346779380"
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
  mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
    fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
      movedFulfillmentOrder {
        id
        status
      }
      originalFulfillmentOrder {
        id
        status
      }
      remainingFulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/564786110",
  "newLocationId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
      fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
        movedFulfillmentOrder {
          id
          status
        }
        originalFulfillmentOrder {
          id
          status
        }
        remainingFulfillmentOrder {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "newLocationId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderMove": {
    "movedFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/564786110",
      "status": "OPEN"
    },
    "originalFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/564786110",
      "status": "OPEN"
    },
    "remainingFulfillmentOrder": null,
    "userErrors": []
  }
}
``` 
*   ### fulfillmentOrderMove reference

Examples
--------

Move some of the line items in a fulfillment order to a new location

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderMove(%24id%3A%20ID!%2C%20%24newLocationId%3A%20ID!)%20%7B%0A%20%20fulfillmentOrderMove(id%3A%20%24id%2C%20newLocationId%3A%20%24newLocationId)%20%7B%0A%20%20%20%20movedFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20originalFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20remainingFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F940656279%22%2C%0A%20%20%22newLocationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F346779380%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {

 fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {

 movedFulfillmentOrder {

 id

 status

 }

 originalFulfillmentOrder {

 id

 status

 }

 remainingFulfillmentOrder {

 id

 status

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/FulfillmentOrder/940656279",

"newLocationId":"gid://shopify/Location/346779380"

},

},

);

const data=await response.json();

```
mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
  fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
    movedFulfillmentOrder {
      id
      status
    }
    originalFulfillmentOrder {
      id
      status
    }
    remainingFulfillmentOrder {
      id
      status
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
"query": "mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) { fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) { movedFulfillmentOrder { id status } originalFulfillmentOrder { id status } remainingFulfillmentOrder { id status } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/940656279",
    "newLocationId": "gid://shopify/Location/346779380"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
    fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
      movedFulfillmentOrder {
        id
        status
      }
      originalFulfillmentOrder {
        id
        status
      }
      remainingFulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/940656279",
        "newLocationId": "gid://shopify/Location/346779380"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
      fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
        movedFulfillmentOrder {
          id
          status
        }
        originalFulfillmentOrder {
          id
          status
        }
        remainingFulfillmentOrder {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/940656279",
        "newLocationId": "gid://shopify/Location/346779380"
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
  mutation fulfillmentOrderMove($id: ID!, $newLocationId: ID!) {
    fulfillmentOrderMove(id: $id, newLocationId: $newLocationId) {
      movedFulfillmentOrder {
        id
        status
      }
      originalFulfillmentOrder {
        id
        status
      }
      remainingFulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/940656279",
  "newLocationId": "gid://shopify/Location/346779380"
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

›

⌄

{

"id": "gid://shopify/FulfillmentOrder/940656279",

"newLocationId": "gid://shopify/Location/346779380"

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

›

⌄

⌄

⌄

⌄

⌄

{

"fulfillmentOrderMove": {

"movedFulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/1046000780",

"status": "OPEN"

},

"originalFulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/940656279",

"status": "OPEN"

},

"remainingFulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/940656279",

"status": "OPEN"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*