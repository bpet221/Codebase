---
title: "fulfillmentEventCreate"
description: "Shopify GraphQL Admin API documentation for fulfillmenteventcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentEventCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate

Markdown Content:
fulfillmentEventCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#main-content)

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

[Anchor to fulfillmentEventCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#top)
fulfillment Event Create
========================

mutation

Requires `write_fulfillments` access scope. Also: The user must have fulfill_and_ship_orders permission.

Creates a fulfillment event for a specified fulfillment.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#arguments)
Arguments
---------

[Anchor to fulfillmentEvent](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#arguments-fulfillmentEvent)fulfillment Event

•[Fulfillment Event Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput)

required

The input fields used to create a fulfillment event for a fulfillment.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentEventCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#returns)Fulfillment Event Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentEvent](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#returns-fulfillmentEvent)fulfillment Event

•[Fulfillment Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent)

The created fulfillment event.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create fulfillment event when a package is out for delivery

#### Description

Create a fulfillment event when the items in a fulfillment are sent out for delivery.

#### Query

```graphql
mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
  fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
    fulfillmentEvent {
      id
      status
      message
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
  "fulfillmentEvent": {
    "fulfillmentId": "gid://shopify/Fulfillment/237894043",
    "address1": "151 O'Connor St",
    "city": "Ottawa",
    "province": "Ontario",
    "country": "Canada",
    "zip": "K2P 2L8",
    "latitude": 45.4191176,
    "longitude": 75.6966166,
    "happenedAt": "2024-03-07T15:50:00Z",
    "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
    "message": "This package is now out for delivery!",
    "status": "OUT_FOR_DELIVERY"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) { fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) { fulfillmentEvent { id status message } userErrors { field message } } }",
 "variables": {
    "fulfillmentEvent": {
      "fulfillmentId": "gid://shopify/Fulfillment/237894043",
      "address1": "151 O'\''Connor St",
      "city": "Ottawa",
      "province": "Ontario",
      "country": "Canada",
      "zip": "K2P 2L8",
      "latitude": 45.4191176,
      "longitude": 75.6966166,
      "happenedAt": "2024-03-07T15:50:00Z",
      "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
      "message": "This package is now out for delivery!",
      "status": "OUT_FOR_DELIVERY"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
    fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
      fulfillmentEvent {
        id
        status
        message
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentEvent": {
            "fulfillmentId": "gid://shopify/Fulfillment/237894043",
            "address1": "151 O'Connor St",
            "city": "Ottawa",
            "province": "Ontario",
            "country": "Canada",
            "zip": "K2P 2L8",
            "latitude": 45.4191176,
            "longitude": 75.6966166,
            "happenedAt": "2024-03-07T15:50:00Z",
            "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
            "message": "This package is now out for delivery!",
            "status": "OUT_FOR_DELIVERY"
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
  mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
    fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
      fulfillmentEvent {
        id
        status
        message
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentEvent": {
    "fulfillmentId": "gid://shopify/Fulfillment/237894043",
    "address1": "151 O'Connor St",
    "city": "Ottawa",
    "province": "Ontario",
    "country": "Canada",
    "zip": "K2P 2L8",
    "latitude": 45.4191176,
    "longitude": 75.6966166,
    "happenedAt": "2024-03-07T15:50:00Z",
    "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
    "message": "This package is now out for delivery!",
    "status": "OUT_FOR_DELIVERY"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
      fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
        fulfillmentEvent {
          id
          status
          message
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentEvent": {
            "fulfillmentId": "gid://shopify/Fulfillment/237894043",
            "address1": "151 O'Connor St",
            "city": "Ottawa",
            "province": "Ontario",
            "country": "Canada",
            "zip": "K2P 2L8",
            "latitude": 45.4191176,
            "longitude": 75.6966166,
            "happenedAt": "2024-03-07T15:50:00Z",
            "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
            "message": "This package is now out for delivery!",
            "status": "OUT_FOR_DELIVERY"
        }
    },
  },
});
``` #### Response

```json
{
  "fulfillmentEventCreate": {
    "fulfillmentEvent": {
      "id": "gid://shopify/FulfillmentEvent/944956426",
      "status": "OUT_FOR_DELIVERY",
      "message": "This package is now out for delivery!"
    },
    "userErrors": []
  }
}
``` 
*   ### Creates a fulfillment event

#### Query

```graphql
mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
  fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
    fulfillmentEvent {
      address1
      city
      country
      estimatedDeliveryAt
      happenedAt
      latitude
      longitude
      message
      province
      status
      zip
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
  "fulfillmentEvent": {
    "fulfillmentId": "gid://shopify/Fulfillment/237894043",
    "address1": "150 Elgin St.",
    "city": "Ottawa",
    "country": "Canada",
    "estimatedDeliveryAt": "2024-11-15T23:40:59Z",
    "happenedAt": "2024-11-15T23:40:49Z",
    "latitude": 1.234,
    "longitude": 9.876,
    "message": "In transit",
    "province": "Ontario",
    "status": "IN_TRANSIT",
    "zip": "K2P1L4"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) { fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) { fulfillmentEvent { address1 city country estimatedDeliveryAt happenedAt latitude longitude message province status zip } userErrors { field message } } }",
 "variables": {
    "fulfillmentEvent": {
      "fulfillmentId": "gid://shopify/Fulfillment/237894043",
      "address1": "150 Elgin St.",
      "city": "Ottawa",
      "country": "Canada",
      "estimatedDeliveryAt": "2024-11-15T23:40:59Z",
      "happenedAt": "2024-11-15T23:40:49Z",
      "latitude": 1.234,
      "longitude": 9.876,
      "message": "In transit",
      "province": "Ontario",
      "status": "IN_TRANSIT",
      "zip": "K2P1L4"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
    fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
      fulfillmentEvent {
        address1
        city
        country
        estimatedDeliveryAt
        happenedAt
        latitude
        longitude
        message
        province
        status
        zip
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentEvent": {
            "fulfillmentId": "gid://shopify/Fulfillment/237894043",
            "address1": "150 Elgin St.",
            "city": "Ottawa",
            "country": "Canada",
            "estimatedDeliveryAt": "2024-11-15T23:40:59Z",
            "happenedAt": "2024-11-15T23:40:49Z",
            "latitude": 1.234,
            "longitude": 9.876,
            "message": "In transit",
            "province": "Ontario",
            "status": "IN_TRANSIT",
            "zip": "K2P1L4"
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
  mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
    fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
      fulfillmentEvent {
        address1
        city
        country
        estimatedDeliveryAt
        happenedAt
        latitude
        longitude
        message
        province
        status
        zip
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentEvent": {
    "fulfillmentId": "gid://shopify/Fulfillment/237894043",
    "address1": "150 Elgin St.",
    "city": "Ottawa",
    "country": "Canada",
    "estimatedDeliveryAt": "2024-11-15T23:40:59Z",
    "happenedAt": "2024-11-15T23:40:49Z",
    "latitude": 1.234,
    "longitude": 9.876,
    "message": "In transit",
    "province": "Ontario",
    "status": "IN_TRANSIT",
    "zip": "K2P1L4"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
      fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
        fulfillmentEvent {
          address1
          city
          country
          estimatedDeliveryAt
          happenedAt
          latitude
          longitude
          message
          province
          status
          zip
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentEvent": {
            "fulfillmentId": "gid://shopify/Fulfillment/237894043",
            "address1": "150 Elgin St.",
            "city": "Ottawa",
            "country": "Canada",
            "estimatedDeliveryAt": "2024-11-15T23:40:59Z",
            "happenedAt": "2024-11-15T23:40:49Z",
            "latitude": 1.234,
            "longitude": 9.876,
            "message": "In transit",
            "province": "Ontario",
            "status": "IN_TRANSIT",
            "zip": "K2P1L4"
        }
    },
  },
});
``` #### Response

```json
{
  "fulfillmentEventCreate": {
    "fulfillmentEvent": {
      "address1": "150 Elgin St.",
      "city": "Ottawa",
      "country": "Canada",
      "estimatedDeliveryAt": "2024-11-15T23:40:59Z",
      "happenedAt": "2024-11-15T23:40:49Z",
      "latitude": 1.234,
      "longitude": 9.876,
      "message": "In transit",
      "province": "Ontario",
      "status": "IN_TRANSIT",
      "zip": "K2P1L4"
    },
    "userErrors": []
  }
}
``` 
*   ### fulfillmentEventCreate reference

Examples
--------

Create fulfillment event when a package is out for delivery

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentEventCreate(%24fulfillmentEvent%3A%20FulfillmentEventInput!)%20%7B%0A%20%20fulfillmentEventCreate(fulfillmentEvent%3A%20%24fulfillmentEvent)%20%7B%0A%20%20%20%20fulfillmentEvent%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22fulfillmentEvent%22%3A%20%7B%0A%20%20%20%20%22fulfillmentId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillment%2F237894043%22%2C%0A%20%20%20%20%22address1%22%3A%20%22151%20O%27Connor%20St%22%2C%0A%20%20%20%20%22city%22%3A%20%22Ottawa%22%2C%0A%20%20%20%20%22province%22%3A%20%22Ontario%22%2C%0A%20%20%20%20%22country%22%3A%20%22Canada%22%2C%0A%20%20%20%20%22zip%22%3A%20%22K2P%202L8%22%2C%0A%20%20%20%20%22latitude%22%3A%2045.4191176%2C%0A%20%20%20%20%22longitude%22%3A%2075.6966166%2C%0A%20%20%20%20%22happenedAt%22%3A%20%222024-03-07T15%3A50%3A00Z%22%2C%0A%20%20%20%20%22estimatedDeliveryAt%22%3A%20%222024-03-07T16%3A50%3A00Z%22%2C%0A%20%20%20%20%22message%22%3A%20%22This%20package%20is%20now%20out%20for%20delivery!%22%2C%0A%20%20%20%20%22status%22%3A%20%22OUT_FOR_DELIVERY%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {

 fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {

 fulfillmentEvent {

 id

 status

 message

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"fulfillmentEvent":{

"fulfillmentId":"gid://shopify/Fulfillment/237894043",

"address1":"151 O'Connor St",

"city":"Ottawa",

"province":"Ontario",

"country":"Canada",

"zip":"K2P 2L8",

"latitude":45.4191176,

"longitude":75.6966166,

"happenedAt":"2024-03-07T15:50:00Z",

"estimatedDeliveryAt":"2024-03-07T16:50:00Z",

"message":"This package is now out for delivery!",

"status":"OUT_FOR_DELIVERY"

}

},

},

);

```
mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
  fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
    fulfillmentEvent {
      id
      status
      message
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
"query": "mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) { fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) { fulfillmentEvent { id status message } userErrors { field message } } }",
 "variables": {
    "fulfillmentEvent": {
      "fulfillmentId": "gid://shopify/Fulfillment/237894043",
      "address1": "151 O'\''Connor St",
      "city": "Ottawa",
      "province": "Ontario",
      "country": "Canada",
      "zip": "K2P 2L8",
      "latitude": 45.4191176,
      "longitude": 75.6966166,
      "happenedAt": "2024-03-07T15:50:00Z",
      "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
      "message": "This package is now out for delivery!",
      "status": "OUT_FOR_DELIVERY"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
    fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
      fulfillmentEvent {
        id
        status
        message
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentEvent": {
            "fulfillmentId": "gid://shopify/Fulfillment/237894043",
            "address1": "151 O'Connor St",
            "city": "Ottawa",
            "province": "Ontario",
            "country": "Canada",
            "zip": "K2P 2L8",
            "latitude": 45.4191176,
            "longitude": 75.6966166,
            "happenedAt": "2024-03-07T15:50:00Z",
            "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
            "message": "This package is now out for delivery!",
            "status": "OUT_FOR_DELIVERY"
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
    "query": `mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
      fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
        fulfillmentEvent {
          id
          status
          message
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentEvent": {
            "fulfillmentId": "gid://shopify/Fulfillment/237894043",
            "address1": "151 O'Connor St",
            "city": "Ottawa",
            "province": "Ontario",
            "country": "Canada",
            "zip": "K2P 2L8",
            "latitude": 45.4191176,
            "longitude": 75.6966166,
            "happenedAt": "2024-03-07T15:50:00Z",
            "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
            "message": "This package is now out for delivery!",
            "status": "OUT_FOR_DELIVERY"
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
  mutation fulfillmentEventCreate($fulfillmentEvent: FulfillmentEventInput!) {
    fulfillmentEventCreate(fulfillmentEvent: $fulfillmentEvent) {
      fulfillmentEvent {
        id
        status
        message
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentEvent": {
    "fulfillmentId": "gid://shopify/Fulfillment/237894043",
    "address1": "151 O'Connor St",
    "city": "Ottawa",
    "province": "Ontario",
    "country": "Canada",
    "zip": "K2P 2L8",
    "latitude": 45.4191176,
    "longitude": 75.6966166,
    "happenedAt": "2024-03-07T15:50:00Z",
    "estimatedDeliveryAt": "2024-03-07T16:50:00Z",
    "message": "This package is now out for delivery!",
    "status": "OUT_FOR_DELIVERY"
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

14

15

16

›

⌄

⌄

{

"fulfillmentEvent": {

"fulfillmentId": "gid://shopify/Fulfillment/237894043",

"address1": "151 O'Connor St",

"city": "Ottawa",

"province": "Ontario",

"country": "Canada",

"zip": "K2P 2L8",

"latitude": 45.4191176,

"longitude": 75.6966166,

"happenedAt": "2024-03-07T15:50:00Z",

"estimatedDeliveryAt": "2024-03-07T16:50:00Z",

"message": "This package is now out for delivery!",

"status": "OUT_FOR_DELIVERY"

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

›

⌄

⌄

⌄

{

"fulfillmentEventCreate": {

"fulfillmentEvent": {

"id": "gid://shopify/FulfillmentEvent/944956426",

"status": "OUT_FOR_DELIVERY",

"message": "This package is now out for delivery!"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*