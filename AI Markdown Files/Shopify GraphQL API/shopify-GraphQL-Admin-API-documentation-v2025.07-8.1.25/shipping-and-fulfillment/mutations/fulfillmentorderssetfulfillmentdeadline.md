---
title: "fulfillmentOrdersSetFulfillmentDeadline"
description: "Shopify GraphQL Admin API documentation for fulfillmentorderssetfulfillmentdeadline"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrdersSetFulfillmentDeadline - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline

Markdown Content:
fulfillmentOrdersSetFulfillmentDeadline - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#main-content)

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

[Anchor to fulfillmentOrdersSetFulfillmentDeadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#top)
fulfillment Orders Set Fulfillment Deadline
===========================================

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope, `write_third_party_fulfillment_orders` access scope or `write_marketplace_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Sets the latest date and time by which the fulfillment orders need to be fulfilled.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#arguments)
Arguments
---------

[Anchor to fulfillmentDeadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#arguments-fulfillmentDeadline)fulfillment Deadline

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

required

The new fulfillment deadline of the fulfillment orders.

[Anchor to fulfillmentOrderIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#arguments-fulfillmentOrderIds)fulfillment Order Ids

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The IDs of the fulfillment orders for which the deadline is being set.

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentOrdersSetFulfillmentDeadlinePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#returns)Fulfillment Orders Set Fulfillment Deadline Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to success](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#returns-success)success

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the fulfillment deadline was successfully set.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline#returns-userErrors)user Errors

•[[Fulfillment Orders Set Fulfillment Deadline User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Sets deadline for fulfillment orders

#### Description

The merchant or an order management app set the date and time, by which the fulfillment orders have to be fulfilled

#### Query

```graphql
mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
  fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
    success
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "fulfillmentDeadline": "2024-11-25T18:44:04Z",
  "fulfillmentOrderIds": [
    "gid://shopify/FulfillmentOrder/234125762",
    "gid://shopify/FulfillmentOrder/564786110"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) { fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) { success userErrors { field message } } }",
 "variables": {
    "fulfillmentDeadline": "2024-11-25T18:44:04Z",
    "fulfillmentOrderIds": [
      "gid://shopify/FulfillmentOrder/234125762",
      "gid://shopify/FulfillmentOrder/564786110"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentDeadline": "2024-11-25T18:44:04Z",
        "fulfillmentOrderIds": [
            "gid://shopify/FulfillmentOrder/234125762",
            "gid://shopify/FulfillmentOrder/564786110"
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
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentDeadline": "2024-11-25T18:44:04Z",
  "fulfillmentOrderIds": [
    "gid://shopify/FulfillmentOrder/234125762",
    "gid://shopify/FulfillmentOrder/564786110"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
      fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
        success
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentDeadline": "2024-11-25T18:44:04Z",
        "fulfillmentOrderIds": [
            "gid://shopify/FulfillmentOrder/234125762",
            "gid://shopify/FulfillmentOrder/564786110"
        ]
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrdersSetFulfillmentDeadline": {
    "success": true,
    "userErrors": []
  }
}
``` 
*   ### fulfillmentOrdersSetFulfillmentDeadline reference

Examples
--------

Sets deadline for fulfillment orders

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrdersSetFulfillmentDeadline(%24fulfillmentDeadline%3A%20DateTime!%2C%20%24fulfillmentOrderIds%3A%20%5BID!%5D!)%20%7B%0A%20%20fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline%3A%20%24fulfillmentDeadline%2C%20fulfillmentOrderIds%3A%20%24fulfillmentOrderIds)%20%7B%0A%20%20%20%20success%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22fulfillmentDeadline%22%3A%20%222024-11-25T18%3A44%3A04Z%22%2C%0A%20%20%22fulfillmentOrderIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F234125762%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F564786110%22%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {

 fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {

 success

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"fulfillmentDeadline":"2024-11-25T18:44:04Z",

"fulfillmentOrderIds":[

"gid://shopify/FulfillmentOrder/234125762",

"gid://shopify/FulfillmentOrder/564786110"

]

},

},

);

const data=await response.json();

```
mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
  fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
    success
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
"query": "mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) { fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) { success userErrors { field message } } }",
 "variables": {
    "fulfillmentDeadline": "2024-11-25T18:44:04Z",
    "fulfillmentOrderIds": [
      "gid://shopify/FulfillmentOrder/234125762",
      "gid://shopify/FulfillmentOrder/564786110"
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentDeadline": "2024-11-25T18:44:04Z",
        "fulfillmentOrderIds": [
            "gid://shopify/FulfillmentOrder/234125762",
            "gid://shopify/FulfillmentOrder/564786110"
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
      fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
        success
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentDeadline": "2024-11-25T18:44:04Z",
        "fulfillmentOrderIds": [
            "gid://shopify/FulfillmentOrder/234125762",
            "gid://shopify/FulfillmentOrder/564786110"
        ]
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
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentDeadline": "2024-11-25T18:44:04Z",
  "fulfillmentOrderIds": [
    "gid://shopify/FulfillmentOrder/234125762",
    "gid://shopify/FulfillmentOrder/564786110"
  ]
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

"fulfillmentDeadline": "2024-11-25T18:44:04Z",

"fulfillmentOrderIds": [

"gid://shopify/FulfillmentOrder/234125762",

"gid://shopify/FulfillmentOrder/564786110"

]

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

›

⌄

⌄

{

"fulfillmentOrdersSetFulfillmentDeadline": {

"success": true,

"userErrors": []

}

}


---
*Content truncated at "Updates" section*