---
title: "fulfillmentOrderReschedule"
description: "Shopify GraphQL Admin API documentation for fulfillmentorderreschedule"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrderReschedule - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule

Markdown Content:
fulfillmentOrderReschedule - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#main-content)

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
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   
Shipping and fulfillment

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
        *   [delivery Profile Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate)
        *   [delivery Profile Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileupdate)
        *   [delivery Promise Participants Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseparticipantsupdate)
        *   [delivery Promise Provider Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseproviderupsert)
        *   [delivery Setting Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverysettingupdate)
        *   [fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcancel)
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
        *   [shipping Package Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagedelete)
        *   [shipping Package Make Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagemakedefault)
        *   [shipping Package Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackageupdate)

    *   Objects   

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

[Anchor to fulfillmentOrderReschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#top)
fulfillment Order Reschedule
============================

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Reschedules a scheduled fulfillment order.

Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

The fulfillment order will be marked as ready for fulfillment at this date and time.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#arguments)
Arguments
---------

[Anchor to fulfillAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#arguments-fulfillAt)fulfill At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

required

A future date and time when the fulfillment order will be marked as ready for fulfillment.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the fulfillment order to reschedule.

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentOrderReschedulePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#returns)Fulfillment Order Reschedule Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#returns-fulfillmentOrder)fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

A fulfillment order with the rescheduled line items.

Fulfillment orders may be merged if they have the same `fulfillAt` datetime.

If the fulfillment order is merged then the resulting fulfillment order will be returned. Otherwise the original fulfillment order will be returned with an updated `fulfillAt` datetime.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule#returns-userErrors)user Errors

•[[Fulfillment Order Reschedule User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Reschedules the fulfill_at time of a scheduled fulfillment order

#### Description

The merchant or an order management app postpones a scheduled fulfillment order for a later date

#### Query

```graphql
mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
  fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
    fulfillmentOrder {
      id
      status
      fulfillAt
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
  "fulfillAt": "2024-11-25T18:40:54Z"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) { fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) { fulfillmentOrder { id status fulfillAt } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/564786110",
    "fulfillAt": "2024-11-25T18:40:54Z"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
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
        "fulfillAt": "2024-11-25T18:40:54Z"
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
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
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
  "fulfillAt": "2024-11-25T18:40:54Z"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
      fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
        fulfillmentOrder {
          id
          status
          fulfillAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "fulfillAt": "2024-11-25T18:40:54Z"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderReschedule": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/564786110",
      "status": "SCHEDULED",
      "fulfillAt": "2024-11-25T18:40:54Z"
    },
    "userErrors": []
  }
}
``` 
*   ### fulfillmentOrderReschedule reference

Examples
--------

Reschedules the fulfill_at time of a scheduled fulfillment order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderReschedule(%24fulfillAt%3A%20DateTime!%2C%20%24id%3A%20ID!)%20%7B%0A%20%20fulfillmentOrderReschedule(fulfillAt%3A%20%24fulfillAt%2C%20id%3A%20%24id)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20fulfillAt%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F564786110%22%2C%0A%20%20%22fulfillAt%22%3A%20%222024-11-25T18%3A40%3A54Z%22%0A%7D)Copy

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

 mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {

 fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {

 fulfillmentOrder {

 id

 status

 fulfillAt

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/FulfillmentOrder/564786110",

"fulfillAt":"2024-11-25T18:40:54Z"

},

},

);

const data=await response.json();

```
mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
  fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
    fulfillmentOrder {
      id
      status
      fulfillAt
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
"query": "mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) { fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) { fulfillmentOrder { id status fulfillAt } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/564786110",
    "fulfillAt": "2024-11-25T18:40:54Z"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
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
        "fulfillAt": "2024-11-25T18:40:54Z"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
      fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
        fulfillmentOrder {
          id
          status
          fulfillAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "fulfillAt": "2024-11-25T18:40:54Z"
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
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
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
  "fulfillAt": "2024-11-25T18:40:54Z"
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

"id": "gid://shopify/FulfillmentOrder/564786110",

"fulfillAt": "2024-11-25T18:40:54Z"

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

›

⌄

⌄

⌄

{

"fulfillmentOrderReschedule": {

"fulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/564786110",

"status": "SCHEDULED",

"fulfillAt": "2024-11-25T18:40:54Z"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*