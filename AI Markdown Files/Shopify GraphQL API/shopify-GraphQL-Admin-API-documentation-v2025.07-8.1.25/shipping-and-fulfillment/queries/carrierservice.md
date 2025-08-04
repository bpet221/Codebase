---
title: "carrierService"
description: "Shopify GraphQL Admin API documentation for carrierservice"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: carrierService - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice

Markdown Content:
carrierService - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice#main-content)

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

[Anchor to carrierService](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice#top)
carrier Service
===============

query

Returns a `DeliveryCarrierService` object by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DeliveryCarrierService` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DeliveryCarrierService](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice#returns-DeliveryCarrierService)Delivery Carrier Service

•[Delivery Carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

A carrier service (also known as a carrier calculated service or shipping service) provides real-time shipping rates to Shopify. Some common carrier services include Canada Post, FedEx, UPS, and USPS. The term **carrier** is often used interchangeably with the terms **shipping company** and **rate provider**.

Using the CarrierService resource, you can add a carrier service to a shop and then provide a list of applicable shipping rates at checkout. You can even use the cart data to adjust shipping rates and offer shipping discounts based on what is in the customer's cart.

Requirements for accessing the CarrierService resource
------------------------------------------------------

To access the CarrierService resource, add the `write_shipping` permission to your app's requested scopes. For more information, see [API access scopes](https://shopify.dev/docs/admin-api/access-scopes).

Your app's request to create a carrier service will fail unless the store installing your carrier service meets one of the following requirements:

*   It's on the Advanced Shopify plan or higher.
*   It's on the Shopify plan with yearly billing, or the carrier service feature has been added to the store for a monthly fee. For more information, contact [Shopify Support](https://help.shopify.com/questions).
*   It's a development store.

* * *

Note

If a store changes its Shopify plan, then the store's association with a carrier service is deactivated if the store no long meets one of the requirements above.

* * *

Providing shipping rates to Shopify
-----------------------------------

When adding a carrier service to a store, you need to provide a POST endpoint rooted in the `callbackUrl` property where Shopify can retrieve applicable shipping rates. The callback URL should be a public endpoint that expects these requests from Shopify.

### Example shipping rate request sent to a carrier service

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

{

"rate": {

"origin": {

"country": "CA",

"postal_code": "K2P1L4",

"province": "ON",

"city": "Ottawa",

"name": null,

"address1": "150 Elgin St.",

"address2": "",

"address3": null,

"phone": null,

"fax": null,

"email": null,

"address_type": null,

"company_name": "Jamie D's Emporium"

},

"destination": {

"country": "CA",

"postal_code": "K1M1M4",

"province": "ON",

"city": "Ottawa",

"name": "Bob Norman",

"address1": "24 Sussex Dr.",

"address2": "",

"address3": null,

"phone": null,

"fax": null,

"email": null,

"address_type": null,

"company_name": null

},

"items": [{

"name": "Short Sleeve T-Shirt",

"sku": "",

"quantity": 1,

### Example response

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

{

"rates": [

{

"service_name": "canadapost-overnight",

"service_code": "ON",

"total_price": "1295",

"description": "This is the fastest option by far",

"currency": "CAD",

"min_delivery_date": "2013-04-12 14:48:45 -0400",

"max_delivery_date": "2013-04-12 14:48:45 -0400"

},

{

"service_name": "fedex-2dayground",

"service_code": "2D",

"total_price": "2934",

"currency": "USD",

"min_delivery_date": "2013-04-12 14:48:45 -0400",

"max_delivery_date": "2013-04-12 14:48:45 -0400"

},

{

"service_name": "fedex-priorityovernight",

"service_code": "1D",

"total_price": "3587",

"currency": "USD",

"min_delivery_date": "2013-04-12 14:48:45 -0400",

"max_delivery_date": "2013-04-12 14:48:45 -0400"

}

]

}

The `address3`, `fax`, `address_type`, and `company_name` fields are returned by specific [ActiveShipping](https://github.com/Shopify/active_shipping) providers. For API-created carrier services, you should use only the following shipping address fields:

*   `address1`
*   `address2`
*   `city`
*   `zip`
*   `province`
*   `country`

Other values remain as `null` and are not sent to the callback URL.

### Response fields

When Shopify requests shipping rates using your callback URL, the response object `rates` must be a JSON array of objects with the following fields. Required fields must be included in the response for the carrier service integration to work properly.

| Field | Required | Description |
| --- | --- | --- |
| `service_name` | Yes | The name of the rate, which customers see at checkout. For example: `Expedited Mail`. |
| `description` | Yes | A description of the rate, which customers see at checkout. For example: `Includes tracking and insurance`. |
| `service_code` | Yes | A unique code associated with the rate. For example: `expedited_mail`. |
| `currency` | Yes | The currency of the shipping rate. |
| `total_price` | Yes | The total price expressed in subunits. If the currency doesn't use subunits, then the value must be multiplied by 100. For example: `"total_price": 500` for 5.00 CAD, `"total_price": 100000` for 1000 JPY. |
| `phone_required` | No | Whether the customer must provide a phone number at checkout. |
| `min_delivery_date` | No | The earliest delivery date for the displayed rate. |
| `max_delivery_date` | No | The latest delivery date for the displayed rate to still be valid. |

### Special conditions

*   To indicate that this carrier service cannot handle this shipping request, return an empty array and any successful (20x) HTTP code.
*   To force backup rates instead, return a 40x or 50x HTTP code with any content. A good choice is the regular 404 Not Found code.
*   Redirects (30x codes) will only be followed for the same domain as the original callback URL. Attempting to redirect to a different domain will trigger backup rates.
*   There is no retry mechanism. The response must be successful on the first try, within the time budget listed below. Timeouts or errors will trigger backup rates.

Response Timeouts
-----------------

The read timeout for rate requests are dynamic, based on the number of requests per minute (RPM). These limits are applied to each shop-app pair. The timeout values are as follows.

| RPM Range | Timeout |
| --- | --- |
| Under 1500 | 10s |
| 1500 to 3000 | 5s |
| Over 3000 | 3s |

* * *

Note

These values are upper limits and should not be interpretted as a goal to develop towards. Shopify is constantly evaluating the performance of the platform and working towards improving resilience as well as app capabilities. As such, these numbers may be adjusted outside of our normal versioning timelines.

* * *

Server-side caching of requests
-------------------------------

Shopify provides server-side caching to reduce the number of requests it makes. Any shipping rate request that identically matches the following fields will be retrieved from Shopify's cache of the initial response:

*   variant IDs
*   default shipping box weight and dimensions
*   variant quantities
*   carrier service ID
*   origin address
*   destination address
*   item weights and signatures

If any of these fields differ, or if the cache has expired since the original request, then new shipping rates are requested. The cache expires 15 minutes after rates are successfully returned. If an error occurs, then the cache expires after 30 seconds.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a single CarrierService

#### Query

```graphql
query CarrierServiceShow($id: ID!) {
  carrierService(id: $id) {
    id
    name
    callbackUrl
    active
    supportsServiceDiscovery
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DeliveryCarrierService/763770004"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CarrierServiceShow($id: ID!) { carrierService(id: $id) { id name callbackUrl active supportsServiceDiscovery } }",
 "variables": {
    "id": "gid://shopify/DeliveryCarrierService/763770004"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CarrierServiceShow($id: ID!) {
    carrierService(id: $id) {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DeliveryCarrierService/763770004"
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
  query CarrierServiceShow($id: ID!) {
    carrierService(id: $id) {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DeliveryCarrierService/763770004"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CarrierServiceShow($id: ID!) {
      carrierService(id: $id) {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
    }`,
    "variables": {
        "id": "gid://shopify/DeliveryCarrierService/763770004"
    },
  },
});
``` #### Response

```json
{
  "carrierService": {
    "id": "gid://shopify/DeliveryCarrierService/763770004",
    "name": "usps",
    "callbackUrl": null,
    "active": true,
    "supportsServiceDiscovery": true
  }
}
``` 

Receive a single CarrierService
-------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CarrierServiceShow(%24id%3A%20ID!)%20%7B%0A%20%20carrierService(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20callbackUrl%0A%20%20%20%20active%0A%20%20%20%20supportsServiceDiscovery%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDeliveryCarrierService%2F763770004%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query CarrierServiceShow($id: ID!) {

 carrierService(id: $id) {

 id

 name

 callbackUrl

 active

 supportsServiceDiscovery

 }

 }`,

{

variables:{

"id":"gid://shopify/DeliveryCarrierService/763770004"

},

},

);

const data=await response.json();

```
query CarrierServiceShow($id: ID!) {
  carrierService(id: $id) {
    id
    name
    callbackUrl
    active
    supportsServiceDiscovery
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CarrierServiceShow($id: ID!) { carrierService(id: $id) { id name callbackUrl active supportsServiceDiscovery } }",
 "variables": {
    "id": "gid://shopify/DeliveryCarrierService/763770004"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CarrierServiceShow($id: ID!) {
    carrierService(id: $id) {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DeliveryCarrierService/763770004"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CarrierServiceShow($id: ID!) {
      carrierService(id: $id) {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
    }`,
    "variables": {
        "id": "gid://shopify/DeliveryCarrierService/763770004"
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
  query CarrierServiceShow($id: ID!) {
    carrierService(id: $id) {
      id
      name
      callbackUrl
      active
      supportsServiceDiscovery
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DeliveryCarrierService/763770004"
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

"id": "gid://shopify/DeliveryCarrierService/763770004"

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

{

"carrierService": {

"id": "gid://shopify/DeliveryCarrierService/763770004",

"name": "usps",

"callbackUrl": null,

"active": true,

"supportsServiceDiscovery": true

}

}


---
*Content truncated at "Updates" section*