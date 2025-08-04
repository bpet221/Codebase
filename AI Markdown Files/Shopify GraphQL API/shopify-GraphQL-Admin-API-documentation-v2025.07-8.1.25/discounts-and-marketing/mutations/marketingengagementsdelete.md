---
title: "marketingEngagementsDelete"
description: "Shopify GraphQL Admin API documentation for marketingengagementsdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingEngagementsDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete

Markdown Content:
marketingEngagementsDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#main-content)

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

[Anchor to marketingEngagementsDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#top)
marketing Engagements Delete
============================

mutation

Requires `write_marketing_events` access scope.

Marks channel-level engagement data such that it no longer appears in reports. Activity-level data cannot be deleted directly, instead the MarketingActivity itself should be deleted to hide it from reports.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#arguments)
Arguments
---------

[Anchor to channelHandle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#arguments-channelHandle)channel Handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The handle of the channel for which engagement data should be deleted.

[Anchor to deleteEngagementsForAllChannels](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#arguments-deleteEngagementsForAllChannels)delete Engagements For All Channels

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

When true, engagements for all channels that belong to the api client will be deleted.

* * *

Was this section helpful?

Yes No

[Anchor to MarketingEngagementsDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#returns)Marketing Engagements Delete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to result](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#returns-result)result

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Informational message about the engagement data that has been marked for deletion.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete#returns-userErrors)user Errors

•[[Marketing Activity User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Mark all channel level engagement data associated to the api client for deletion

#### Query

```graphql
mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
  marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
    result
    userErrors {
      field
      message
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
"query": "mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) { marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) { result userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
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
  mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
      }
    }
  }`,
});
``` #### Response

```json
{
  "marketingEngagementsDelete": {
    "result": "Engagement data marked for deletion for 5 channel(s)",
    "userErrors": []
  }
}
``` 
*   ### Mark engagement data associated to a specific channel for deletion

#### Query

```graphql
mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
  marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
    result
    userErrors {
      field
      message
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
"query": "mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) { marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) { result userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
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
  mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
      }
    }
  }`,
});
``` #### Response

```json
{
  "marketingEngagementsDelete": {
    "result": "Engagement data associated to channel handle 'my-channel-handle' marked for deletion",
    "userErrors": []
  }
}
``` 
*   ### marketingEngagementsDelete reference

Examples
--------

Mark all channel level engagement data associated to the api client for deletion

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20M(%24channelHandle%3A%20String%2C%20%24deleteEngagementsForAllChannels%3A%20Boolean)%20%7B%0A%20%20marketingEngagementsDelete(channelHandle%3A%20%24channelHandle%2C%20deleteEngagementsForAllChannels%3A%20%24deleteEngagementsForAllChannels)%20%7B%0A%20%20%20%20result%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {

 marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {

 result

 userErrors {

 field

 message

 }

 }

 }`,

);

const data=await response.json();

```
mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
  marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
    result
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
"query": "mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) { marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) { result userErrors { field message } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
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
  mutation M($channelHandle: String, $deleteEngagementsForAllChannels: Boolean) {
    marketingEngagementsDelete(channelHandle: $channelHandle, deleteEngagementsForAllChannels: $deleteEngagementsForAllChannels) {
      result
      userErrors {
        field
        message
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

›

⌄

⌄

{

"marketingEngagementsDelete": {

"result": "Engagement data marked for deletion for 5 channel(s)",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*