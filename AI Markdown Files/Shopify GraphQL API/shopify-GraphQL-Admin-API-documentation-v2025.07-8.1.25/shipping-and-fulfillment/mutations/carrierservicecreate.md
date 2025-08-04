---
title: "carrierServiceCreate"
description: "Shopify GraphQL Admin API documentation for carrierservicecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: carrierServiceCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate

Markdown Content:
carrierServiceCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#main-content)

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

[Anchor to carrierServiceCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#top)
carrier Service Create
======================

mutation

Requires `write_shipping` access scope.

Creates a new carrier service.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#arguments-input)input

•[Delivery Carrier Service Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput)

required

The input fields used to create a carrier service.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CarrierServiceCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#returns)Carrier Service Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to carrierService](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#returns-carrierService)carrier Service

•[Delivery Carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

The created carrier service.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate#returns-userErrors)user Errors

•[[Carrier Service Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new CarrierService

#### Query

```graphql
mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
  carrierServiceCreate(input: $input) {
    carrierService {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
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
  "input": {
    "name": "test carrier service",
    "callbackUrl": "https://example.com/",
    "supportsServiceDiscovery": true,
    "active": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) { carrierServiceCreate(input: $input) { carrierService { id name callbackUrl active supportsServiceDiscovery } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "supportsServiceDiscovery": true,
      "active": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "test carrier service",
            "callbackUrl": "https://example.com/",
            "supportsServiceDiscovery": true,
            "active": true
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
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "test carrier service",
    "callbackUrl": "https://example.com/",
    "supportsServiceDiscovery": true,
    "active": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
      carrierServiceCreate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "test carrier service",
            "callbackUrl": "https://example.com/",
            "supportsServiceDiscovery": true,
            "active": true
        }
    },
  },
});
``` #### Response

```json
{
  "carrierServiceCreate": {
    "carrierService": {
      "id": "gid://shopify/DeliveryCarrierService/1036895098",
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "active": true,
      "supportsServiceDiscovery": true
    },
    "userErrors": []
  }
}
``` 
*   ### carrierServiceCreate reference

Examples
--------

Create a new CarrierService

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CarrierServiceCreate(%24input%3A%20DeliveryCarrierServiceCreateInput!)%20%7B%0A%20%20carrierServiceCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20carrierService%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20active%0A%20%20%20%20%20%20supportsServiceDiscovery%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22test%20carrier%20service%22%2C%0A%20%20%20%20%22callbackUrl%22%3A%20%22https%3A%2F%2Fexample.com%2F%22%2C%0A%20%20%20%20%22supportsServiceDiscovery%22%3A%20true%2C%0A%20%20%20%20%22active%22%3A%20true%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {

 carrierServiceCreate(input: $input) {

 carrierService {

 id

 name

 callbackUrl

 active

 supportsServiceDiscovery

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"name":"test carrier service",

"callbackUrl":"https://example.com/",

"supportsServiceDiscovery":true,

"active":true

}

},

},

);

const data=await response.json();

```
mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
  carrierServiceCreate(input: $input) {
    carrierService {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
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
"query": "mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) { carrierServiceCreate(input: $input) { carrierService { id name callbackUrl active supportsServiceDiscovery } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "test carrier service",
      "callbackUrl": "https://example.com/",
      "supportsServiceDiscovery": true,
      "active": true
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "test carrier service",
            "callbackUrl": "https://example.com/",
            "supportsServiceDiscovery": true,
            "active": true
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
    "query": `mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
      carrierServiceCreate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "test carrier service",
            "callbackUrl": "https://example.com/",
            "supportsServiceDiscovery": true,
            "active": true
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
  mutation CarrierServiceCreate($input: DeliveryCarrierServiceCreateInput!) {
    carrierServiceCreate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "test carrier service",
    "callbackUrl": "https://example.com/",
    "supportsServiceDiscovery": true,
    "active": true
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

›

⌄

⌄

{

"input": {

"name": "test carrier service",

"callbackUrl": "https://example.com/",

"supportsServiceDiscovery": true,

"active": true

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

11

12

›

⌄

⌄

⌄

{

"carrierServiceCreate": {

"carrierService": {

"id": "gid://shopify/DeliveryCarrierService/1036895098",

"name": "test carrier service",

"callbackUrl": "https://example.com/",

"active": true,

"supportsServiceDiscovery": true

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*