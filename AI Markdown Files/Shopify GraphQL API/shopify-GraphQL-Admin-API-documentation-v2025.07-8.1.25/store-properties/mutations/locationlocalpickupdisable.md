---
title: "locationLocalPickupDisable"
description: "Shopify GraphQL Admin API documentation for locationlocalpickupdisable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationLocalPickupDisable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable

Markdown Content:
locationLocalPickupDisable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#main-content)

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
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store properties

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
        *   [location Local Pickup Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable)
        *   [location Local Pickup Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable)
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

[Anchor to locationLocalPickupDisable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#top)
location Local Pickup Disable
=============================

mutation

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Disables local pickup for a location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#arguments)
Arguments
---------

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#arguments-locationId)location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the location to disable local pickup for.

* * *

Was this section helpful?

Yes No

[Anchor to LocationLocalPickupDisablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#returns)Location Local Pickup Disable Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#returns-locationId)location Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the location for which local pickup was disabled.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable#returns-userErrors)user Errors

•[[Delivery Location Local Pickup Settings Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Disable local pickup for a location

#### Description

Disable local pickup for a valid location.

#### Query

```graphql
mutation disableLocalPickup($locationId: ID!) {
  locationLocalPickupDisable(locationId: $locationId) {
    locationId
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "locationId": "gid://shopify/Location/750123840"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation disableLocalPickup($locationId: ID!) { locationLocalPickupDisable(locationId: $locationId) { locationId userErrors { code field message } } }",
 "variables": {
    "locationId": "gid://shopify/Location/750123840"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation disableLocalPickup($locationId: ID!) {
    locationLocalPickupDisable(locationId: $locationId) {
      locationId
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "locationId": "gid://shopify/Location/750123840"
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
  mutation disableLocalPickup($locationId: ID!) {
    locationLocalPickupDisable(locationId: $locationId) {
      locationId
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "locationId": "gid://shopify/Location/750123840"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation disableLocalPickup($locationId: ID!) {
      locationLocalPickupDisable(locationId: $locationId) {
        locationId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "locationId": "gid://shopify/Location/750123840"
    },
  },
});
``` #### Response

```json
{
  "locationLocalPickupDisable": {
    "locationId": "gid://shopify/Location/750123840",
    "userErrors": []
  }
}
``` 
*   ### Disabling local pickup for an invalid location returns an error

#### Description

Disabling local pickup for an invalid location returns an error.

#### Query

```graphql
mutation disableLocalPickup($locationId: ID!) {
  locationLocalPickupDisable(locationId: $locationId) {
    locationId
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "locationId": "gid://shopify/Location/123"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation disableLocalPickup($locationId: ID!) { locationLocalPickupDisable(locationId: $locationId) { locationId userErrors { code field message } } }",
 "variables": {
    "locationId": "gid://shopify/Location/123"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation disableLocalPickup($locationId: ID!) {
    locationLocalPickupDisable(locationId: $locationId) {
      locationId
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "locationId": "gid://shopify/Location/123"
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
  mutation disableLocalPickup($locationId: ID!) {
    locationLocalPickupDisable(locationId: $locationId) {
      locationId
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "locationId": "gid://shopify/Location/123"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation disableLocalPickup($locationId: ID!) {
      locationLocalPickupDisable(locationId: $locationId) {
        locationId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "locationId": "gid://shopify/Location/123"
    },
  },
});
``` #### Response

```json
{
  "locationLocalPickupDisable": {
    "locationId": null,
    "userErrors": [
      {
        "code": "ACTIVE_LOCATION_NOT_FOUND",
        "field": [
          "locationId"
        ],
        "message": "Unable to find an active location for location ID 123"
      }
    ]
  }
}
``` 
*   ### locationLocalPickupDisable reference

Examples
--------

Disable local pickup for a location

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20disableLocalPickup(%24locationId%3A%20ID!)%20%7B%0A%20%20locationLocalPickupDisable(locationId%3A%20%24locationId)%20%7B%0A%20%20%20%20locationId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F750123840%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation disableLocalPickup($locationId: ID!) {

 locationLocalPickupDisable(locationId: $locationId) {

 locationId

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"locationId":"gid://shopify/Location/750123840"

},

},

);

const data=await response.json();

```
mutation disableLocalPickup($locationId: ID!) {
  locationLocalPickupDisable(locationId: $locationId) {
    locationId
    userErrors {
      code
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
"query": "mutation disableLocalPickup($locationId: ID!) { locationLocalPickupDisable(locationId: $locationId) { locationId userErrors { code field message } } }",
 "variables": {
    "locationId": "gid://shopify/Location/750123840"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation disableLocalPickup($locationId: ID!) {
    locationLocalPickupDisable(locationId: $locationId) {
      locationId
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "locationId": "gid://shopify/Location/750123840"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation disableLocalPickup($locationId: ID!) {
      locationLocalPickupDisable(locationId: $locationId) {
        locationId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "locationId": "gid://shopify/Location/750123840"
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
  mutation disableLocalPickup($locationId: ID!) {
    locationLocalPickupDisable(locationId: $locationId) {
      locationId
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "locationId": "gid://shopify/Location/750123840"
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

"locationId": "gid://shopify/Location/750123840"

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

"locationLocalPickupDisable": {

"locationId": "gid://shopify/Location/750123840",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*