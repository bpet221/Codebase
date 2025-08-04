---
title: "fulfillmentServiceUpdate"
description: "Shopify GraphQL Admin API documentation for fulfillmentserviceupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentServiceUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate

Markdown Content:
fulfillmentServiceUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#main-content)

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

[Anchor to fulfillmentServiceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#top)
fulfillment Service Update
==========================

mutation

Requires `write_fulfillments` access scope. Also: The user must have fulfill_and_ship_orders permission.

Updates a fulfillment service.

If you are using API version `2023-10` or later, and you need to update the location managed by the fulfillment service (for example, to change the address of a fulfillment service), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments)
Arguments
---------

[Anchor to callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-callbackUrl)callback Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL to send requests for the fulfillment service. The following considerations apply:

*   Shopify queries the `callback_url/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders, if `trackingSupport` is set to `true`.
*   Shopify queries the `callback_url/fetch_stock` endpoint to retrieve inventory levels, if `inventoryManagement` is set to `true`.
*   Shopify uses the `callback_url/fulfillment_order_notification` endpoint to send [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The id of the fulfillment service.

[Anchor to inventoryManagement](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-inventoryManagement)inventory Management

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the fulfillment service tracks product inventory and provides updates to Shopify.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-name)name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the fulfillment service.

[Anchor to requiresShippingMethod](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-requiresShippingMethod)requires Shipping Method

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Whether the fulfillment service requires products to be physically shipped.

[Anchor to trackingSupport](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-trackingSupport)tracking Support

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the fulfillment service provides tracking numbers for packages.

### Deprecated arguments

[Anchor to fulfillmentOrdersOptIn](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-fulfillmentOrdersOptIn)fulfillment Orders Opt In

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Deprecated

[Anchor to permitsSkuSharing](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#arguments-permitsSkuSharing)permits Sku Sharing

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Deprecated

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentServiceUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#returns)Fulfillment Service Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#returns-fulfillmentService)fulfillment Service

•[Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

The updated fulfillment service.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Modify an existing FulfillmentService

#### Description

A fulfillment service app updates the name of its fulfillment service.

#### Query

```graphql
mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
  fulfillmentServiceUpdate(id: $id, name: $name) {
    fulfillmentService {
      id
      serviceName
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
  "id": "gid://shopify/FulfillmentService/198258461",
  "name": "My Updated Fulfillment Warehouse"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentServiceUpdate($id: ID!, $name: String!) { fulfillmentServiceUpdate(id: $id, name: $name) { fulfillmentService { id serviceName } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentService/198258461",
    "name": "My Updated Fulfillment Warehouse"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
    fulfillmentServiceUpdate(id: $id, name: $name) {
      fulfillmentService {
        id
        serviceName
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentService/198258461",
        "name": "My Updated Fulfillment Warehouse"
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
  mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
    fulfillmentServiceUpdate(id: $id, name: $name) {
      fulfillmentService {
        id
        serviceName
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentService/198258461",
  "name": "My Updated Fulfillment Warehouse"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
      fulfillmentServiceUpdate(id: $id, name: $name) {
        fulfillmentService {
          id
          serviceName
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentService/198258461",
        "name": "My Updated Fulfillment Warehouse"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentServiceUpdate": {
    "fulfillmentService": {
      "id": "gid://shopify/FulfillmentService/198258461?id=true",
      "serviceName": "My Updated Fulfillment Warehouse"
    },
    "userErrors": []
  }
}
``` 
*   ### fulfillmentServiceUpdate reference

Examples
--------

Modify an existing FulfillmentService

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentServiceUpdate(%24id%3A%20ID!%2C%20%24name%3A%20String!)%20%7B%0A%20%20fulfillmentServiceUpdate(id%3A%20%24id%2C%20name%3A%20%24name)%20%7B%0A%20%20%20%20fulfillmentService%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20serviceName%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentService%2F198258461%22%2C%0A%20%20%22name%22%3A%20%22My%20Updated%20Fulfillment%20Warehouse%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {

 fulfillmentServiceUpdate(id: $id, name: $name) {

 fulfillmentService {

 id

 serviceName

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/FulfillmentService/198258461",

"name":"My Updated Fulfillment Warehouse"

},

},

);

const data=await response.json();

```
mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
  fulfillmentServiceUpdate(id: $id, name: $name) {
    fulfillmentService {
      id
      serviceName
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
"query": "mutation fulfillmentServiceUpdate($id: ID!, $name: String!) { fulfillmentServiceUpdate(id: $id, name: $name) { fulfillmentService { id serviceName } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentService/198258461",
    "name": "My Updated Fulfillment Warehouse"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
    fulfillmentServiceUpdate(id: $id, name: $name) {
      fulfillmentService {
        id
        serviceName
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentService/198258461",
        "name": "My Updated Fulfillment Warehouse"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
      fulfillmentServiceUpdate(id: $id, name: $name) {
        fulfillmentService {
          id
          serviceName
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentService/198258461",
        "name": "My Updated Fulfillment Warehouse"
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
  mutation fulfillmentServiceUpdate($id: ID!, $name: String!) {
    fulfillmentServiceUpdate(id: $id, name: $name) {
      fulfillmentService {
        id
        serviceName
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentService/198258461",
  "name": "My Updated Fulfillment Warehouse"
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

"id": "gid://shopify/FulfillmentService/198258461",

"name": "My Updated Fulfillment Warehouse"

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

"fulfillmentServiceUpdate": {

"fulfillmentService": {

"id": "gid://shopify/FulfillmentService/198258461?id=true",

"serviceName": "My Updated Fulfillment Warehouse"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*