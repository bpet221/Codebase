---
title: "locationActivate"
description: "Shopify GraphQL Admin API documentation for locationactivate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationActivate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate

Markdown Content:
locationActivate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#main-content)

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

[Anchor to locationActivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#top)
location Activate
=================

mutation

Requires `write_locations` access scope.

Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#arguments)
Arguments
---------

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#arguments-locationId)location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of a location to activate.

* * *

Was this section helpful?

Yes No

[Anchor to LocationActivatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#returns)Location Activate Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#returns-location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location that was activated.

Show fields

[Anchor to locationActivateUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate#returns-locationActivateUserErrors)location Activate User Errors

•[[Location Activate User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationActivateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Activate a deactivated location

#### Query

```graphql
mutation {
  locationActivate(locationId: "gid://shopify/Location/658095763") {
    location {
      id
      isActive
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
"query": "mutation { locationActivate(locationId: \"gid://shopify/Location/658095763\") { location { id isActive } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
      }
    }
  }`,
});
``` #### Response

```json
{
  "locationActivate": {
    "location": {
      "id": "gid://shopify/Location/658095763",
      "isActive": true
    }
  }
}
``` 
*   ### locationActivate reference

Examples
--------

Activate a deactivated location

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20locationActivate(locationId%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F658095763%22)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20isActive%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation {

 locationActivate(locationId: "gid://shopify/Location/658095763") {

 location {

 id

 isActive

 }

 }

 }`,

);

const data=await response.json();

```
mutation {
  locationActivate(locationId: "gid://shopify/Location/658095763") {
    location {
      id
      isActive
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
"query": "mutation { locationActivate(locationId: \"gid://shopify/Location/658095763\") { location { id isActive } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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
  mutation {
    locationActivate(locationId: "gid://shopify/Location/658095763") {
      location {
        id
        isActive
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

⌄

{

"locationActivate": {

"location": {

"id": "gid://shopify/Location/658095763",

"isActive": true

}

}

}


---
*Content truncated at "Updates" section*