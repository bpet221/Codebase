---
title: "fulfillmentService"
description: "Shopify GraphQL Admin API documentation for fulfillmentservice"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentService - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice

Markdown Content:
fulfillmentService - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice#main-content)

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

    *   
Queries

        *   [assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders)
        *   [available Carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablecarrierservices)
        *   [carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice)
        *   [carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices)
        *   [delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomization)
        *   [delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomizations)
        *   [delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofile)
        *   [delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles)
        *   [delivery Promise Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseparticipants)
        *   [delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseprovider)
        *   [delivery Promise Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromisesettings)
        *   [delivery Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverysettings)
        *   [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)
        *   [fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder)
        *   [fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorders)
        *   [fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice)
        *   [manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualholdsfulfillmentorders)

    *   Mutations   
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

[Anchor to fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice#top)
fulfillment Service
===================

query

Returns a FulfillmentService resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the FulfillmentService to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to FulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice#returns-FulfillmentService)Fulfillment Service

•[Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

A **Fulfillment Service** is a third party warehouse that prepares and ships orders on behalf of the store owner. Fulfillment services charge a fee to package and ship items and update product inventory levels. Some well known fulfillment services with Shopify integrations include: Amazon, Shipwire, and Rakuten. When an app registers a new `FulfillmentService` on a store, Shopify automatically creates a `Location` that's associated to the fulfillment service. To learn more about fulfillment services, refer to [Manage fulfillments as a fulfillment service app](https://shopify.dev/apps/fulfillment/fulfillment-service-apps) guide.

Mutations
---------

You can work with the `FulfillmentService` object with the [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate), [fulfillmentServiceUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate), and [fulfillmentServiceDelete](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceDelete) mutations.

Hosted endpoints
----------------

Fulfillment service providers integrate with Shopify by providing Shopify with a set of hosted endpoints that Shopify can query on certain conditions. These endpoints must have a common prefix, and this prefix should be supplied in the `callbackUrl` parameter in the [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate) mutation.

*   Shopify sends POST requests to the `<callbackUrl>/fulfillment_order_notification` endpoint to notify the fulfillment service about fulfillment requests and fulfillment cancellation requests.

For more information, refer to [Receive fulfillment requests and cancellations](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

*   Shopify sends GET requests to the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders if `trackingSupport` is set to `true`.

For more information, refer to [Enable tracking support](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-8-enable-tracking-support-optional).

Fulfillment services can also update tracking information using the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdate) mutation, rather than waiting for Shopify to ask for tracking numbers.

*   Shopify sends GET requests to the `<callbackUrl>/fetch_stock` endpoint to retrieve on hand inventory levels for the fulfillment service location if `inventoryManagement` is set to `true`.

For more information, refer to [Sharing inventory levels with Shopify](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-10-optional-share-inventory-levels-with-shopify).

To make sure you have everything set up correctly, you can test the `callbackUrl`-prefixed endpoints in your development store.

Resources and webhooks
----------------------

There are a variety of objects and webhooks that enable a fulfillment service to work. To exchange fulfillment information with Shopify, fulfillment services use the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder), [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) and [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) objects and related mutations. To act on fulfillment process events that happen on the Shopify side, besides awaiting calls to `callbackUrl`-prefixed endpoints, fulfillment services can subscribe to the [fulfillment order](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) and [order](https://shopify.dev/api/admin-rest/latest/resources/webhook) webhooks.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a single FulfillmentService

#### Query

```graphql
query FulfillmentServiceShow($id: ID!) {
  fulfillmentService(id: $id) {
    id
    callbackUrl
    fulfillmentOrdersOptIn
    permitsSkuSharing
    handle
    inventoryManagement
    serviceName
    location {
      legacyResourceId
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/FulfillmentService/18961920"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentServiceShow($id: ID!) { fulfillmentService(id: $id) { id callbackUrl fulfillmentOrdersOptIn permitsSkuSharing handle inventoryManagement serviceName location { legacyResourceId } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentService/18961920"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentServiceShow($id: ID!) {
    fulfillmentService(id: $id) {
      id
      callbackUrl
      fulfillmentOrdersOptIn
      permitsSkuSharing
      handle
      inventoryManagement
      serviceName
      location {
        legacyResourceId
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentService/18961920"
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
  query FulfillmentServiceShow($id: ID!) {
    fulfillmentService(id: $id) {
      id
      callbackUrl
      fulfillmentOrdersOptIn
      permitsSkuSharing
      handle
      inventoryManagement
      serviceName
      location {
        legacyResourceId
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentService/18961920"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentServiceShow($id: ID!) {
      fulfillmentService(id: $id) {
        id
        callbackUrl
        fulfillmentOrdersOptIn
        permitsSkuSharing
        handle
        inventoryManagement
        serviceName
        location {
          legacyResourceId
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentService/18961920"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentService": {
    "id": "gid://shopify/FulfillmentService/18961920?id=true",
    "callbackUrl": "http://shipwire.com",
    "fulfillmentOrdersOptIn": true,
    "permitsSkuSharing": true,
    "handle": "shipwire",
    "inventoryManagement": false,
    "serviceName": "Shipwire",
    "location": {
      "legacyResourceId": "215093630"
    }
  }
}
``` 

Receive a single FulfillmentService
-----------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20FulfillmentServiceShow(%24id%3A%20ID!)%20%7B%0A%20%20fulfillmentService(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20callbackUrl%0A%20%20%20%20fulfillmentOrdersOptIn%0A%20%20%20%20permitsSkuSharing%0A%20%20%20%20handle%0A%20%20%20%20inventoryManagement%0A%20%20%20%20serviceName%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20legacyResourceId%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentService%2F18961920%22%0A%7D)Copy

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

 query FulfillmentServiceShow($id: ID!) {

 fulfillmentService(id: $id) {

 id

 callbackUrl

 fulfillmentOrdersOptIn

 permitsSkuSharing

 handle

 inventoryManagement

 serviceName

 location {

 legacyResourceId

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/FulfillmentService/18961920"

},

},

);

const data=await response.json();

```
query FulfillmentServiceShow($id: ID!) {
  fulfillmentService(id: $id) {
    id
    callbackUrl
    fulfillmentOrdersOptIn
    permitsSkuSharing
    handle
    inventoryManagement
    serviceName
    location {
      legacyResourceId
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
"query": "query FulfillmentServiceShow($id: ID!) { fulfillmentService(id: $id) { id callbackUrl fulfillmentOrdersOptIn permitsSkuSharing handle inventoryManagement serviceName location { legacyResourceId } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentService/18961920"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentServiceShow($id: ID!) {
    fulfillmentService(id: $id) {
      id
      callbackUrl
      fulfillmentOrdersOptIn
      permitsSkuSharing
      handle
      inventoryManagement
      serviceName
      location {
        legacyResourceId
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentService/18961920"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentServiceShow($id: ID!) {
      fulfillmentService(id: $id) {
        id
        callbackUrl
        fulfillmentOrdersOptIn
        permitsSkuSharing
        handle
        inventoryManagement
        serviceName
        location {
          legacyResourceId
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentService/18961920"
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
  query FulfillmentServiceShow($id: ID!) {
    fulfillmentService(id: $id) {
      id
      callbackUrl
      fulfillmentOrdersOptIn
      permitsSkuSharing
      handle
      inventoryManagement
      serviceName
      location {
        legacyResourceId
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentService/18961920"
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

"id": "gid://shopify/FulfillmentService/18961920"

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

›

⌄

⌄

⌄

{

"fulfillmentService": {

"id": "gid://shopify/FulfillmentService/18961920?id=true",

"callbackUrl": "http://shipwire.com",

"fulfillmentOrdersOptIn": true,

"permitsSkuSharing": true,

"handle": "shipwire",

"inventoryManagement": false,

"serviceName": "Shipwire",

"location": {

"legacyResourceId": "215093630"

}

}

}


---
*Content truncated at "Updates" section*