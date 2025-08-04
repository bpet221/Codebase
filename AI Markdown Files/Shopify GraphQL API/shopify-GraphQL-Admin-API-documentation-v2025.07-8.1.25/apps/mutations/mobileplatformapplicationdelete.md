---
title: "mobilePlatformApplicationDelete"
description: "Shopify GraphQL Admin API documentation for mobileplatformapplicationdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete"
extraction_method: "jina"
sections: ['Apps', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: mobilePlatformApplicationDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete

Markdown Content:
mobilePlatformApplicationDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#main-content)

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
*   
Apps

    *   Queries   
    *   
Mutations

        *   [app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall)
        *   [mobile Platform Application Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate)
        *   [mobile Platform Application Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete)
        *   [mobile Platform Application Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationupdate)
        *   [publication Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete)
        *   [shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate)

    *   Objects   

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to mobilePlatformApplicationDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#top)
mobile Platform Application Delete
==================================

mutation

Requires `write_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

Delete a mobile platform application.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the Mobile Platform Application to be deleted.

* * *

Was this section helpful?

Yes No

[Anchor to MobilePlatformApplicationDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#returns)Mobile Platform Application Delete Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedMobilePlatformApplicationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#returns-deletedMobilePlatformApplicationId)deleted Mobile Platform Application Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the mobile platform application that was just deleted.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete#returns-userErrors)user Errors

•[[Mobile Platform Application User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a mobile platform application

#### Description

Delete a Mobile Platform Application.

#### Query

```graphql
mutation DeleteMobilePlatformApplication($id: ID!) {
  mobilePlatformApplicationDelete(id: $id) {
    deletedMobilePlatformApplicationId
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/MobilePlatformApplication/1066176028"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation DeleteMobilePlatformApplication($id: ID!) { mobilePlatformApplicationDelete(id: $id) { deletedMobilePlatformApplicationId } }",
 "variables": {
    "id": "gid://shopify/MobilePlatformApplication/1066176028"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMobilePlatformApplication($id: ID!) {
    mobilePlatformApplicationDelete(id: $id) {
      deletedMobilePlatformApplicationId
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MobilePlatformApplication/1066176028"
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
  mutation DeleteMobilePlatformApplication($id: ID!) {
    mobilePlatformApplicationDelete(id: $id) {
      deletedMobilePlatformApplicationId
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MobilePlatformApplication/1066176028"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMobilePlatformApplication($id: ID!) {
      mobilePlatformApplicationDelete(id: $id) {
        deletedMobilePlatformApplicationId
      }
    }`,
    "variables": {
        "id": "gid://shopify/MobilePlatformApplication/1066176028"
    },
  },
});
``` #### Response

```json
{
  "mobilePlatformApplicationDelete": {
    "deletedMobilePlatformApplicationId": "gid://shopify/MobilePlatformApplication/1066176028"
  }
}
``` 
*   ### mobilePlatformApplicationDelete reference

Examples
--------

Delete a mobile platform application

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteMobilePlatformApplication(%24id%3A%20ID!)%20%7B%0A%20%20mobilePlatformApplicationDelete(id%3A%20%24id)%20%7B%0A%20%20%20%20deletedMobilePlatformApplicationId%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMobilePlatformApplication%2F1066176028%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation DeleteMobilePlatformApplication($id: ID!) {

 mobilePlatformApplicationDelete(id: $id) {

 deletedMobilePlatformApplicationId

 }

 }`,

{

variables:{

"id":"gid://shopify/MobilePlatformApplication/1066176028"

},

},

);

const data=await response.json();

```
mutation DeleteMobilePlatformApplication($id: ID!) {
  mobilePlatformApplicationDelete(id: $id) {
    deletedMobilePlatformApplicationId
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation DeleteMobilePlatformApplication($id: ID!) { mobilePlatformApplicationDelete(id: $id) { deletedMobilePlatformApplicationId } }",
 "variables": {
    "id": "gid://shopify/MobilePlatformApplication/1066176028"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMobilePlatformApplication($id: ID!) {
    mobilePlatformApplicationDelete(id: $id) {
      deletedMobilePlatformApplicationId
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MobilePlatformApplication/1066176028"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMobilePlatformApplication($id: ID!) {
      mobilePlatformApplicationDelete(id: $id) {
        deletedMobilePlatformApplicationId
      }
    }`,
    "variables": {
        "id": "gid://shopify/MobilePlatformApplication/1066176028"
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
  mutation DeleteMobilePlatformApplication($id: ID!) {
    mobilePlatformApplicationDelete(id: $id) {
      deletedMobilePlatformApplicationId
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MobilePlatformApplication/1066176028"
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

"id": "gid://shopify/MobilePlatformApplication/1066176028"

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

›

⌄

⌄

{

"mobilePlatformApplicationDelete": {

"deletedMobilePlatformApplicationId": "gid://shopify/MobilePlatformApplication/1066176028"

}

}


---
*Content truncated at "Updates" section*