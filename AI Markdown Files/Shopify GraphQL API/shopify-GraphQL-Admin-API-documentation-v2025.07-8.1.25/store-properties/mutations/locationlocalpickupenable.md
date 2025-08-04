---
title: "locationLocalPickupEnable"
description: "Shopify GraphQL Admin API documentation for locationlocalpickupenable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationLocalPickupEnable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable

Markdown Content:
locationLocalPickupEnable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#main-content)

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

[Anchor to locationLocalPickupEnable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#top)
location Local Pickup Enable
============================

mutation

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Enables local pickup for a location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#arguments)
Arguments
---------

[Anchor to localPickupSettings](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#arguments-localPickupSettings)local Pickup Settings

•[Delivery Location Local Pickup Enable Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationLocalPickupEnableInput)

required

The settings required to enable local pickup for a location.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to LocationLocalPickupEnablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#returns)Location Local Pickup Enable Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to localPickupSettings](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#returns-localPickupSettings)local Pickup Settings

•[Delivery Local Pickup Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings)

The local pickup settings that were enabled.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable#returns-userErrors)user Errors

•[[Delivery Location Local Pickup Settings Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationLocalPickupSettingsError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Enable local pickup for a location

#### Description

Enable local pickup for a location with a pickup time and instructions.

#### Query

```graphql
mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
  locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
    localPickupSettings {
      pickupTime
      instructions
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "localPickupSettings": {
    "locationId": "gid://shopify/Location/530388139",
    "pickupTime": "TWENTY_FOUR_HOURS",
    "instructions": "Use side door."
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) { locationLocalPickupEnable(localPickupSettings: $localPickupSettings) { localPickupSettings { pickupTime instructions } userErrors { message field } } }",
 "variables": {
    "localPickupSettings": {
      "locationId": "gid://shopify/Location/530388139",
      "pickupTime": "TWENTY_FOUR_HOURS",
      "instructions": "Use side door."
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
    locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
      localPickupSettings {
        pickupTime
        instructions
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "localPickupSettings": {
            "locationId": "gid://shopify/Location/530388139",
            "pickupTime": "TWENTY_FOUR_HOURS",
            "instructions": "Use side door."
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
  mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
    locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
      localPickupSettings {
        pickupTime
        instructions
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "localPickupSettings": {
    "locationId": "gid://shopify/Location/530388139",
    "pickupTime": "TWENTY_FOUR_HOURS",
    "instructions": "Use side door."
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
      locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
        localPickupSettings {
          pickupTime
          instructions
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "localPickupSettings": {
            "locationId": "gid://shopify/Location/530388139",
            "pickupTime": "TWENTY_FOUR_HOURS",
            "instructions": "Use side door."
        }
    },
  },
});
``` #### Response

```json
{
  "locationLocalPickupEnable": {
    "localPickupSettings": {
      "pickupTime": "TWENTY_FOUR_HOURS",
      "instructions": "Use side door."
    },
    "userErrors": []
  }
}
``` 
*   ### Enabling local pickup for an invalid location returns an error

#### Description

Enabling local pickup for an invalid location returns an error.

#### Query

```graphql
mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
  locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
    localPickupSettings {
      pickupTime
      instructions
    }
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
  "localPickupSettings": {
    "locationId": "gid://shopify/Location/123",
    "pickupTime": "TWENTY_FOUR_HOURS",
    "instructions": "Use side door."
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) { locationLocalPickupEnable(localPickupSettings: $localPickupSettings) { localPickupSettings { pickupTime instructions } userErrors { code field message } } }",
 "variables": {
    "localPickupSettings": {
      "locationId": "gid://shopify/Location/123",
      "pickupTime": "TWENTY_FOUR_HOURS",
      "instructions": "Use side door."
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
    locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
      localPickupSettings {
        pickupTime
        instructions
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "localPickupSettings": {
            "locationId": "gid://shopify/Location/123",
            "pickupTime": "TWENTY_FOUR_HOURS",
            "instructions": "Use side door."
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
  mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
    locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
      localPickupSettings {
        pickupTime
        instructions
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "localPickupSettings": {
    "locationId": "gid://shopify/Location/123",
    "pickupTime": "TWENTY_FOUR_HOURS",
    "instructions": "Use side door."
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
      locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
        localPickupSettings {
          pickupTime
          instructions
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "localPickupSettings": {
            "locationId": "gid://shopify/Location/123",
            "pickupTime": "TWENTY_FOUR_HOURS",
            "instructions": "Use side door."
        }
    },
  },
});
``` #### Response

```json
{
  "locationLocalPickupEnable": {
    "localPickupSettings": null,
    "userErrors": [
      {
        "code": "ACTIVE_LOCATION_NOT_FOUND",
        "field": [
          "localPickupSettings"
        ],
        "message": "Unable to find an active location for location ID 123"
      }
    ]
  }
}
``` 
*   ### locationLocalPickupEnable reference

Examples
--------

Enable local pickup for a location

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20enableLocalPickup(%24localPickupSettings%3A%20DeliveryLocationLocalPickupEnableInput!)%20%7B%0A%20%20locationLocalPickupEnable(localPickupSettings%3A%20%24localPickupSettings)%20%7B%0A%20%20%20%20localPickupSettings%20%7B%0A%20%20%20%20%20%20pickupTime%0A%20%20%20%20%20%20instructions%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22localPickupSettings%22%3A%20%7B%0A%20%20%20%20%22locationId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F530388139%22%2C%0A%20%20%20%20%22pickupTime%22%3A%20%22TWENTY_FOUR_HOURS%22%2C%0A%20%20%20%20%22instructions%22%3A%20%22Use%20side%20door.%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {

 locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {

 localPickupSettings {

 pickupTime

 instructions

 }

 userErrors {

 message

 field

 }

 }

 }`,

{

variables:{

"localPickupSettings":{

"locationId":"gid://shopify/Location/530388139",

"pickupTime":"TWENTY_FOUR_HOURS",

"instructions":"Use side door."

}

},

},

);

const data=await response.json();

```
mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
  locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
    localPickupSettings {
      pickupTime
      instructions
    }
    userErrors {
      message
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
"query": "mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) { locationLocalPickupEnable(localPickupSettings: $localPickupSettings) { localPickupSettings { pickupTime instructions } userErrors { message field } } }",
 "variables": {
    "localPickupSettings": {
      "locationId": "gid://shopify/Location/530388139",
      "pickupTime": "TWENTY_FOUR_HOURS",
      "instructions": "Use side door."
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
    locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
      localPickupSettings {
        pickupTime
        instructions
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "localPickupSettings": {
            "locationId": "gid://shopify/Location/530388139",
            "pickupTime": "TWENTY_FOUR_HOURS",
            "instructions": "Use side door."
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
    "query": `mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
      locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
        localPickupSettings {
          pickupTime
          instructions
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "localPickupSettings": {
            "locationId": "gid://shopify/Location/530388139",
            "pickupTime": "TWENTY_FOUR_HOURS",
            "instructions": "Use side door."
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
  mutation enableLocalPickup($localPickupSettings: DeliveryLocationLocalPickupEnableInput!) {
    locationLocalPickupEnable(localPickupSettings: $localPickupSettings) {
      localPickupSettings {
        pickupTime
        instructions
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "localPickupSettings": {
    "locationId": "gid://shopify/Location/530388139",
    "pickupTime": "TWENTY_FOUR_HOURS",
    "instructions": "Use side door."
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

›

⌄

⌄

{

"localPickupSettings": {

"locationId": "gid://shopify/Location/530388139",

"pickupTime": "TWENTY_FOUR_HOURS",

"instructions": "Use side door."

}

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

"locationLocalPickupEnable": {

"localPickupSettings": {

"pickupTime": "TWENTY_FOUR_HOURS",

"instructions": "Use side door."

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*