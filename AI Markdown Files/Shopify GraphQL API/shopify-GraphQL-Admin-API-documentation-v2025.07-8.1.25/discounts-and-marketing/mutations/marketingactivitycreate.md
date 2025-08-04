---
title: "marketingActivityCreate"
description: "Shopify GraphQL Admin API documentation for marketingactivitycreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivityCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate

Markdown Content:
marketingActivityCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#main-content)

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

[Anchor to marketingActivityCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#top)
marketing Activity Create
=========================

mutation

Requires `write_marketing_events` access scope.

Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#arguments-input)input

•[Marketing Activity Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateInput)

required

The Input of marketing activity create.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketingActivityCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#returns)Marketing Activity Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

### Deprecated marketingactivitycreatepayload returns

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#returns-marketingActivity)marketing Activity

•[Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

Deprecated

The created marketing activity.

Show fields

[Anchor to redirectPath](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate#returns-redirectPath)redirect Path

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

The path to return back to shopify admin from embedded editor.

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a DRAFT marketing activity for a specific marketing activity extension

#### Query

```graphql
mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
  marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
    marketingActivity {
      id
      title
      status
    }
  }
}
``` #### Variables

```json
{
  "marketingActivityTitle": "Draft Marketing Activity",
  "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
  "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
  "status": "DRAFT"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) { marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) { marketingActivity { id title status } } }",
 "variables": {
    "marketingActivityTitle": "Draft Marketing Activity",
    "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
    "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
    "status": "DRAFT"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }`,
  {
    variables: {
        "marketingActivityTitle": "Draft Marketing Activity",
        "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
        "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
        "status": "DRAFT"
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
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }
QUERY

variables = {
  "marketingActivityTitle": "Draft Marketing Activity",
  "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
  "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
  "status": "DRAFT"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
      marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }`,
    "variables": {
        "marketingActivityTitle": "Draft Marketing Activity",
        "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
        "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
        "status": "DRAFT"
    },
  },
});
``` #### Response

```json
{
  "marketingActivityCreate": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/1063897335",
      "title": "Draft Marketing Activity",
      "status": "DRAFT"
    }
  }
}
``` 
*   ### marketingActivityCreate reference

Examples
--------

Create a DRAFT marketing activity for a specific marketing activity extension

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityCreate(%24marketingActivityTitle%3A%20String!%2C%20%24marketingActivityExtensionId%3A%20ID!%2C%20%24context%3A%20String!%2C%20%24status%3A%20MarketingActivityStatus!)%20%7B%0A%20%20marketingActivityCreate(input%3A%20%7BmarketingActivityTitle%3A%20%24marketingActivityTitle%2C%20marketingActivityExtensionId%3A%20%24marketingActivityExtensionId%2C%20status%3A%20%24status%2C%20context%3A%20%24context%7D)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22marketingActivityTitle%22%3A%20%22Draft%20Marketing%20Activity%22%2C%0A%20%20%22marketingActivityExtensionId%22%3A%20%22gid%3A%2F%2Fshopify%2FMarketingActivityExtension%2F666dcce8-6389-425f-bcf0-6c9469b6716f%22%2C%0A%20%20%22context%22%3A%20%22eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ%3D%3D%22%2C%0A%20%20%22status%22%3A%20%22DRAFT%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {

 marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {

 marketingActivity {

 id

 title

 status

 }

 }

 }`,

{

variables:{

"marketingActivityTitle":"Draft Marketing Activity",

"marketingActivityExtensionId":"gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",

"context":"eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",

"status":"DRAFT"

},

},

);

const data=await response.json();

```
mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
  marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
    marketingActivity {
      id
      title
      status
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
"query": "mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) { marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) { marketingActivity { id title status } } }",
 "variables": {
    "marketingActivityTitle": "Draft Marketing Activity",
    "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
    "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
    "status": "DRAFT"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }`,
  {
    variables: {
        "marketingActivityTitle": "Draft Marketing Activity",
        "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
        "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
        "status": "DRAFT"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
      marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }`,
    "variables": {
        "marketingActivityTitle": "Draft Marketing Activity",
        "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
        "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
        "status": "DRAFT"
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
  mutation marketingActivityCreate($marketingActivityTitle: String!, $marketingActivityExtensionId: ID!, $context: String!, $status: MarketingActivityStatus!) {
    marketingActivityCreate(input: {marketingActivityTitle: $marketingActivityTitle, marketingActivityExtensionId: $marketingActivityExtensionId, status: $status, context: $context}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }
QUERY

variables = {
  "marketingActivityTitle": "Draft Marketing Activity",
  "marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",
  "context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",
  "status": "DRAFT"
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

{

"marketingActivityTitle": "Draft Marketing Activity",

"marketingActivityExtensionId": "gid://shopify/MarketingActivityExtension/666dcce8-6389-425f-bcf0-6c9469b6716f",

"context": "eyJtYXJrZXRpbmdfY2FtcGFpZ25faWQiOiI2NDYzMzc3NDMifQ==",

"status": "DRAFT"

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

"marketingActivityCreate": {

"marketingActivity": {

"id": "gid://shopify/MarketingActivity/1063897335",

"title": "Draft Marketing Activity",

"status": "DRAFT"

}

}

}


---
*Content truncated at "Updates" section*