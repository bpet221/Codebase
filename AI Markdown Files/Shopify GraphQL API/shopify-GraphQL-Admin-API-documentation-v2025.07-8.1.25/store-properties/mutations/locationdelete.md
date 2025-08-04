---
title: "locationDelete"
description: "Shopify GraphQL Admin API documentation for locationdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete

Markdown Content:
locationDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#main-content)

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

[Anchor to locationDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#top)
location Delete
===============

mutation

Requires `write_locations` access scope.

Deletes a location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#arguments)
Arguments
---------

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#arguments-locationId)location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of a location to delete.

* * *

Was this section helpful?

Yes No

[Anchor to LocationDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#returns)Location Delete Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedLocationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#returns-deletedLocationId)deleted Location Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the location that was deleted.

[Anchor to locationDeleteUserErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete#returns-locationDeleteUserErrors)location Delete User Errors

•[[Location Delete User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationDeleteUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a location and return the location ID

#### Description

Delete a location that has been deactivated.

#### Query

```graphql
mutation {
  locationDelete(locationId: "gid://shopify/Location/658095763") {
    deletedLocationId
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation { locationDelete(locationId: \"gid://shopify/Location/658095763\") { deletedLocationId } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
    }
  }`,
});
``` #### Response

```json
{
  "locationDelete": {
    "deletedLocationId": "gid://shopify/Location/658095763"
  }
}
``` 
*   ### Delete an active location

#### Description

Deleting an active location returns an error.

#### Query

```graphql
mutation {
  locationDelete(locationId: "gid://shopify/Location/658095763") {
    deletedLocationId
    locationDeleteUserErrors {
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
"query": "mutation { locationDelete(locationId: \"gid://shopify/Location/658095763\") { deletedLocationId locationDeleteUserErrors { message code field } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
      locationDeleteUserErrors {
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
      locationDeleteUserErrors {
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
      locationDeleteUserErrors {
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
  "locationDelete": {
    "deletedLocationId": null,
    "locationDeleteUserErrors": [
      {
        "message": "The location cannot be deleted while it is active.",
        "code": "LOCATION_IS_ACTIVE",
        "field": [
          "locationId"
        ]
      }
    ]
  }
}
``` 
*   ### locationDelete reference

Examples
--------

Delete a location and return the location ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20locationDelete(locationId%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F658095763%22)%20%7B%0A%20%20%20%20deletedLocationId%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation {

 locationDelete(locationId: "gid://shopify/Location/658095763") {

 deletedLocationId

 }

 }`,

);

const data=await response.json();

```
mutation {
  locationDelete(locationId: "gid://shopify/Location/658095763") {
    deletedLocationId
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation { locationDelete(locationId: \"gid://shopify/Location/658095763\") { deletedLocationId } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
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
    locationDelete(locationId: "gid://shopify/Location/658095763") {
      deletedLocationId
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

›

⌄

⌄

{

"locationDelete": {

"deletedLocationId": "gid://shopify/Location/658095763"

}

}


---
*Content truncated at "Updates" section*