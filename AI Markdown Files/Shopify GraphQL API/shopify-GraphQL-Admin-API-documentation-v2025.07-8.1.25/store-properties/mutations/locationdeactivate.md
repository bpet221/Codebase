---
title: "locationDeactivate"
description: "Shopify GraphQL Admin API documentation for locationdeactivate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationDeactivate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate

Markdown Content:
locationDeactivate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#main-content)

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
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store Properties

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
        *   [publishable Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish)
        *   [publishable Publish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel)
        *   [publishable Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish)
        *   [publishable Unpublish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel)
        *   [shop Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate)

    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to locationDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#top)
location Deactivate
===================

mutation

Requires `write_locations` access scope.

Deactivates a location and moves inventory, pending orders, and moving transfers to a destination location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#arguments)
Arguments
---------

[Anchor to destinationLocationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#arguments-destinationLocationId)destination Location Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a destination location to which inventory, pending orders and moving transfers will be moved from the location to deactivate.

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#arguments-locationId)location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of a location to deactivate.

* * *

Was this section helpful?

Yes No

[Anchor to LocationDeactivatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#returns)Location Deactivate Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#returns-location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location that was deactivated.

Show fields

[Anchor to locationDeactivateUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate#returns-locationDeactivateUserErrors)location Deactivate User Errors

•[[Location Deactivate User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeactivateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Deactivate a location with active inventory

#### Description

Deactivating a location with inventory without specifying a destination location returns an error.

#### Query

```graphql
mutation locationDeactivate {
  locationDeactivate(locationId: "gid://shopify/Location/922479430") {
    location {
      id
      isActive
    }
    locationDeactivateUserErrors {
      message
      code
      field
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation locationDeactivate { locationDeactivate(locationId: \"gid://shopify/Location/922479430\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
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
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
});
``` #### Response

```json
{
  "locationDeactivate": {
    "location": {
      "id": "gid://shopify/Location/922479430",
      "isActive": true
    },
    "locationDeactivateUserErrors": [
      {
        "message": "Location could not be deactivated without specifying where to relocate inventory stocked at the location.",
        "code": "HAS_ACTIVE_INVENTORY_ERROR",
        "field": [
          "locationId"
        ]
      }
    ]
  }
}
``` 
*   ### Deactivate a location with pending orders

#### Description

Deactivating a location with pending orders without specifying a destination location returns an error

#### Query

```graphql
mutation locationDeactivate {
  locationDeactivate(locationId: "gid://shopify/Location/123") {
    location {
      id
      isActive
    }
    locationDeactivateUserErrors {
      message
      code
      field
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation locationDeactivate { locationDeactivate(locationId: \"gid://shopify/Location/123\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/123") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
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
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/123") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/123") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
});
``` #### Response

```json
{
  "locationDeactivate": {
    "location": null,
    "locationDeactivateUserErrors": [
      {
        "message": "Location could not be deactivated because it has open purchase orders.",
        "code": "HAS_OPEN_PURCHASE_ORDERS_ERROR",
        "field": [
          "locationId"
        ]
      }
    ]
  }
}
``` 
*   ### Deactivate an active location

#### Description

Deactivates a location and transfers inventory, pending orders, and transfers to another location

#### Query

```graphql
mutation {
  locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
    location {
      id
      isActive
    }
    locationDeactivateUserErrors {
      message
      code
      field
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation { locationDeactivate(locationId: \"gid://shopify/Location/922479430\", destinationLocationId: \"gid://shopify/Location/147921425\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
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
  mutation {
    locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    locationDeactivate(locationId: "gid://shopify/Location/922479430", destinationLocationId: "gid://shopify/Location/147921425") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
});
``` #### Response

```json
{
  "locationDeactivate": {
    "location": {
      "id": "gid://shopify/Location/922479430",
      "isActive": false
    },
    "locationDeactivateUserErrors": []
  }
}
``` 
*   ### locationDeactivate reference

Examples
--------

Deactivate a location with active inventory

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20locationDeactivate%20%7B%0A%20%20locationDeactivate(locationId%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F922479430%22)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20isActive%0A%20%20%20%20%7D%0A%20%20%20%20locationDeactivateUserErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation locationDeactivate {

 locationDeactivate(locationId: "gid://shopify/Location/922479430") {

 location {

 id

 isActive

 }

 locationDeactivateUserErrors {

 message

 code

 field

 }

 }

 }`,

);

const data=await response.json();

```
mutation locationDeactivate {
  locationDeactivate(locationId: "gid://shopify/Location/922479430") {
    location {
      id
      isActive
    }
    locationDeactivateUserErrors {
      message
      code
      field
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
"query": "mutation locationDeactivate { locationDeactivate(locationId: \"gid://shopify/Location/922479430\") { location { id isActive } locationDeactivateUserErrors { message code field } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }`,
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
  mutation locationDeactivate {
    locationDeactivate(locationId: "gid://shopify/Location/922479430") {
      location {
        id
        isActive
      }
      locationDeactivateUserErrors {
        message
        code
        field
      }
    }
  }
QUERY

response = client.query(query: query)
```

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

⌄

{

"locationDeactivate": {

"location": {

"id": "gid://shopify/Location/922479430",

"isActive": true

},

"locationDeactivateUserErrors": [

{

"message": "Location could not be deactivated without specifying where to relocate inventory stocked at the location.",

"code": "HAS_ACTIVE_INVENTORY_ERROR",

"field": [

"locationId"

]

}

]

}

}


---
*Content truncated at "Updates" section*