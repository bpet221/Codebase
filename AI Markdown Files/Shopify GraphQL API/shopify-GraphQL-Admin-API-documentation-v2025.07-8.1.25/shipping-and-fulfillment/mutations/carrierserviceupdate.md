---
title: "carrierServiceUpdate"
description: "Shopify GraphQL Admin API documentation for carrierserviceupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: carrierServiceUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate

Markdown Content:
carrierServiceUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#main-content)

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

[Anchor to carrierServiceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#top)
carrier Service Update
======================

mutation

Requires `write_shipping` access scope.

Updates a carrier service. Only the app that creates a carrier service can update it.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#arguments-input)input

•[Delivery Carrier Service Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput)

required

The input fields used to update a carrier service.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CarrierServiceUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#returns)Carrier Service Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to carrierService](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#returns-carrierService)carrier Service

•[Delivery Carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

The updated carrier service.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate#returns-userErrors)user Errors

•[[Carrier Service Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CarrierServiceUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Modify an existing CarrierService

#### Query

```graphql
mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
  carrierServiceUpdate(input: $input) {
    carrierService {
      id
      name
      callbackUrl
      active
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
    "id": "gid://shopify/DeliveryCarrierService/1036895102",
    "name": "new test carrier service",
    "callbackUrl": "https://new.example.com/",
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
"query": "mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) { carrierServiceUpdate(input: $input) { carrierService { id name callbackUrl active } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
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
            "id": "gid://shopify/DeliveryCarrierService/1036895102",
            "name": "new test carrier service",
            "callbackUrl": "https://new.example.com/",
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
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
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
    "id": "gid://shopify/DeliveryCarrierService/1036895102",
    "name": "new test carrier service",
    "callbackUrl": "https://new.example.com/",
    "active": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
      carrierServiceUpdate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/DeliveryCarrierService/1036895102",
            "name": "new test carrier service",
            "callbackUrl": "https://new.example.com/",
            "active": true
        }
    },
  },
});
``` #### Response

```json
{
  "carrierServiceUpdate": {
    "carrierService": {
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
    },
    "userErrors": []
  }
}
``` 
*   ### carrierServiceUpdate reference

Examples
--------

Modify an existing CarrierService

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CarrierServiceUpdate(%24input%3A%20DeliveryCarrierServiceUpdateInput!)%20%7B%0A%20%20carrierServiceUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20carrierService%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20active%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDeliveryCarrierService%2F1036895102%22%2C%0A%20%20%20%20%22name%22%3A%20%22new%20test%20carrier%20service%22%2C%0A%20%20%20%20%22callbackUrl%22%3A%20%22https%3A%2F%2Fnew.example.com%2F%22%2C%0A%20%20%20%20%22active%22%3A%20true%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {

 carrierServiceUpdate(input: $input) {

 carrierService {

 id

 name

 callbackUrl

 active

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

"id":"gid://shopify/DeliveryCarrierService/1036895102",

"name":"new test carrier service",

"callbackUrl":"https://new.example.com/",

"active":true

}

},

},

);

const data=await response.json();

```
mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
  carrierServiceUpdate(input: $input) {
    carrierService {
      id
      name
      callbackUrl
      active
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
"query": "mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) { carrierServiceUpdate(input: $input) { carrierService { id name callbackUrl active } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/DeliveryCarrierService/1036895102",
      "name": "new test carrier service",
      "callbackUrl": "https://new.example.com/",
      "active": true
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
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
            "id": "gid://shopify/DeliveryCarrierService/1036895102",
            "name": "new test carrier service",
            "callbackUrl": "https://new.example.com/",
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
    "query": `mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
      carrierServiceUpdate(input: $input) {
        carrierService {
          id
          name
          callbackUrl
          active
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/DeliveryCarrierService/1036895102",
            "name": "new test carrier service",
            "callbackUrl": "https://new.example.com/",
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
  mutation CarrierServiceUpdate($input: DeliveryCarrierServiceUpdateInput!) {
    carrierServiceUpdate(input: $input) {
      carrierService {
        id
        name
        callbackUrl
        active
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
    "id": "gid://shopify/DeliveryCarrierService/1036895102",
    "name": "new test carrier service",
    "callbackUrl": "https://new.example.com/",
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

"id": "gid://shopify/DeliveryCarrierService/1036895102",

"name": "new test carrier service",

"callbackUrl": "https://new.example.com/",

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

›

⌄

⌄

⌄

{

"carrierServiceUpdate": {

"carrierService": {

"id": "gid://shopify/DeliveryCarrierService/1036895102",

"name": "new test carrier service",

"callbackUrl": "https://new.example.com/",

"active": true

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*