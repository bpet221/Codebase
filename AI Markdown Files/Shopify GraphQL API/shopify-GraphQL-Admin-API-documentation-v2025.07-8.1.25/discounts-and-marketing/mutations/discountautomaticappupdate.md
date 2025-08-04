---
title: "discountAutomaticAppUpdate"
description: "Shopify GraphQL Admin API documentation for discountautomaticappupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountAutomaticAppUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate

Markdown Content:
discountAutomaticAppUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#main-content)

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
*   
Discounts And Marketing

    *   Queries   
    *   
Mutations

        *   [abandonment Email State Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentemailstateupdate)
        *   [abandonment Update Activities Delivery Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentupdateactivitiesdeliverystatuses)
        *   [discount Automatic Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticactivate)
        *   [discount Automatic App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate)
        *   [discount Automatic App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate)
        *   [discount Automatic Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate)
        *   [discount Automatic Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasicupdate)
        *   [discount Automatic Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbulkdelete)
        *   [discount Automatic Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate)
        *   [discount Automatic Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgyupdate)
        *   [discount Automatic Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdeactivate)
        *   [discount Automatic Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdelete)
        *   [discount Automatic Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate)
        *   [discount Automatic Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate)
        *   [discount Code Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeactivate)
        *   [discount Code App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate)
        *   [discount Code App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappupdate)
        *   [discount Code Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate)
        *   [discount Code Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate)
        *   [discount Code Bulk Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkactivate)
        *   [discount Code Bulk Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate)
        *   [discount Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdelete)
        *   [discount Code Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate)
        *   [discount Code Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate)
        *   [discount Code Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate)
        *   [discount Code Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedelete)
        *   [discount Code Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingcreate)
        *   [discount Code Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingupdate)
        *   [discount Code Redeem Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcoderedeemcodebulkdelete)
        *   [discount Redeem Code Bulk Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd)
        *   [event Bridge Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgeserverpixelupdate)
        *   [marketing Activities Delete All External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitiesdeleteallexternal)
        *   [marketing Activity Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate)
        *   [marketing Activity Create External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal)
        *   [marketing Activity Delete External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal)
        *   [marketing Activity Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate)
        *   [marketing Activity Update External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal)
        *   [marketing Activity Upsert External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal)
        *   [marketing Engagement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate)
        *   [marketing Engagements Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete)
        *   [pub Sub Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubserverpixelupdate)
        *   [server Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixelcreate)
        *   [server Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixeldelete)
        *   [web Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate)
        *   [web Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixeldelete)
        *   [web Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelupdate)

    *   Objects   

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

[Anchor to discountAutomaticAppUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#top)
discount Automatic App Update
=============================

mutation

Requires `write_discounts` access scope.

Updates an existing automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use this mutation when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to update a new "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

* * *

Note

To update code discounts with custom logic, use the [`discountCodeAppUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppUpdate) mutation instead.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#arguments)
Arguments
---------

[Anchor to automaticAppDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#arguments-automaticAppDiscount)automatic App Discount

•[Discount Automatic App Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

required

The input fields required to update the automatic discount.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the automatic discount to update.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountAutomaticAppUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#returns)Discount Automatic App Update Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to automaticAppDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#returns-automaticAppDiscount)automatic App Discount

•[Discount Automatic App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

The updated automatic discount that the app provides.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update an app-managed automatic discount title

#### Description

Update an automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). This example shows how to update the title of an automatic discount.

#### Query

```graphql
mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
  discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
    automaticAppDiscount {
      title
      status
      appDiscountType {
        appKey
        functionId
      }
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
  "id": "gid://shopify/DiscountAutomaticNode/159339796",
  "automaticAppDiscount": {
    "title": "$5 discount"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) { discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) { automaticAppDiscount { title status appDiscountType { appKey functionId } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticNode/159339796",
    "automaticAppDiscount": {
      "title": "$5 discount"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
      automaticAppDiscount {
        title
        status
        appDiscountType {
          appKey
          functionId
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountAutomaticNode/159339796",
        "automaticAppDiscount": {
            "title": "$5 discount"
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
  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
      automaticAppDiscount {
        title
        status
        appDiscountType {
          appKey
          functionId
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountAutomaticNode/159339796",
  "automaticAppDiscount": {
    "title": "$5 discount"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
      discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
        automaticAppDiscount {
          title
          status
          appDiscountType {
            appKey
            functionId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountAutomaticNode/159339796",
        "automaticAppDiscount": {
            "title": "$5 discount"
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticAppUpdate": {
    "automaticAppDiscount": {
      "title": "$5 discount",
      "status": "EXPIRED",
      "appDiscountType": {
        "appKey": "shopify-vm-test-app",
        "functionId": "135222cd-678c-47a9-880d-a59dba77d975"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update the date range of an app-managed automatic discount

#### Description

Update an automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). This example shows how to update the start and end dates of an automatic discount.

#### Query

```graphql
mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
  discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
    automaticAppDiscount {
      title
      startsAt
      endsAt
      status
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
  "id": "gid://shopify/DiscountAutomaticNode/159339796",
  "automaticAppDiscount": {
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-09-30T23:59:59Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) { discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) { automaticAppDiscount { title startsAt endsAt status } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticNode/159339796",
    "automaticAppDiscount": {
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-09-30T23:59:59Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
      automaticAppDiscount {
        title
        startsAt
        endsAt
        status
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountAutomaticNode/159339796",
        "automaticAppDiscount": {
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-09-30T23:59:59Z"
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
  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
      automaticAppDiscount {
        title
        startsAt
        endsAt
        status
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountAutomaticNode/159339796",
  "automaticAppDiscount": {
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-09-30T23:59:59Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
      discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
        automaticAppDiscount {
          title
          startsAt
          endsAt
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountAutomaticNode/159339796",
        "automaticAppDiscount": {
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-09-30T23:59:59Z"
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticAppUpdate": {
    "automaticAppDiscount": {
      "title": "Percentage off (Product)",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-09-30T23:59:59Z",
      "status": "ACTIVE"
    },
    "userErrors": []
  }
}
``` 
*   ### discountAutomaticAppUpdate reference

Examples
--------

Update an app-managed automatic discount title

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountAutomaticAppUpdate(%24automaticAppDiscount%3A%20DiscountAutomaticAppInput!%2C%20%24id%3A%20ID!)%20%7B%0A%20%20discountAutomaticAppUpdate(automaticAppDiscount%3A%20%24automaticAppDiscount%2C%20id%3A%20%24id)%20%7B%0A%20%20%20%20automaticAppDiscount%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20appDiscountType%20%7B%0A%20%20%20%20%20%20%20%20appKey%0A%20%20%20%20%20%20%20%20functionId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountAutomaticNode%2F159339796%22%2C%0A%20%20%22automaticAppDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22%245%20discount%22%0A%20%20%7D%0A%7D)Copy

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

 mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {

 discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {

 automaticAppDiscount {

 title

 status

 appDiscountType {

 appKey

 functionId

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/DiscountAutomaticNode/159339796",

"automaticAppDiscount":{

"title":"$5 discount"

}

},

},

);

const data=await response.json();

```
mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
  discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
    automaticAppDiscount {
      title
      status
      appDiscountType {
        appKey
        functionId
      }
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
"query": "mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) { discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) { automaticAppDiscount { title status appDiscountType { appKey functionId } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticNode/159339796",
    "automaticAppDiscount": {
      "title": "$5 discount"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
      automaticAppDiscount {
        title
        status
        appDiscountType {
          appKey
          functionId
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountAutomaticNode/159339796",
        "automaticAppDiscount": {
            "title": "$5 discount"
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
    "query": `mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
      discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
        automaticAppDiscount {
          title
          status
          appDiscountType {
            appKey
            functionId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountAutomaticNode/159339796",
        "automaticAppDiscount": {
            "title": "$5 discount"
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
  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
      automaticAppDiscount {
        title
        status
        appDiscountType {
          appKey
          functionId
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountAutomaticNode/159339796",
  "automaticAppDiscount": {
    "title": "$5 discount"
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

›

⌄

⌄

{

"id": "gid://shopify/DiscountAutomaticNode/159339796",

"automaticAppDiscount": {

"title": "$5 discount"

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

13

›

⌄

⌄

⌄

⌄

{

"discountAutomaticAppUpdate": {

"automaticAppDiscount": {

"title": "$5 discount",

"status": "EXPIRED",

"appDiscountType": {

"appKey": "shopify-vm-test-app",

"functionId": "135222cd-678c-47a9-880d-a59dba77d975"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*