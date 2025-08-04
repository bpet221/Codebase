---
title: "marketingActivityDeleteExternal"
description: "Shopify GraphQL Admin API documentation for marketingactivitydeleteexternal"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivityDeleteExternal - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal

Markdown Content:
marketingActivityDeleteExternal - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#main-content)

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
*   
Discounts and marketing

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
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
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

[Anchor to marketingActivityDeleteExternal](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#top)
marketing Activity Delete External
==================================

mutation

Requires `write_marketing_events` access scope.

Deletes an external marketing activity.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#arguments)
Arguments
---------

[Anchor to marketingActivityId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#arguments-marketingActivityId)marketing Activity Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the marketing activity. A marketing activity ID or remote ID must be provided.

[Anchor to remoteId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#arguments-remoteId)remote Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. A marketing activity ID or remote ID must be provided.

* * *

Was this section helpful?

Yes No

[Anchor to MarketingActivityDeleteExternalPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#returns)Marketing Activity Delete External Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedMarketingActivityId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#returns-deletedMarketingActivityId)deleted Marketing Activity Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the marketing activity that was deleted, if one was deleted.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal#returns-userErrors)user Errors

•[[Marketing Activity User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete an external marketing activity using the remote ID

#### Query

```graphql
mutation marketingActivityUpdateExternal($remoteId: String!) {
  marketingActivityDeleteExternal(remoteId: $remoteId) {
    deletedMarketingActivityId
  }
}
``` #### Variables

```json
{
  "remoteId": "abcdefg"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdateExternal($remoteId: String!) { marketingActivityDeleteExternal(remoteId: $remoteId) { deletedMarketingActivityId } }",
 "variables": {
    "remoteId": "abcdefg"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($remoteId: String!) {
    marketingActivityDeleteExternal(remoteId: $remoteId) {
      deletedMarketingActivityId
    }
  }`,
  {
    variables: {
        "remoteId": "abcdefg"
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
  mutation marketingActivityUpdateExternal($remoteId: String!) {
    marketingActivityDeleteExternal(remoteId: $remoteId) {
      deletedMarketingActivityId
    }
  }
QUERY

variables = {
  "remoteId": "abcdefg"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdateExternal($remoteId: String!) {
      marketingActivityDeleteExternal(remoteId: $remoteId) {
        deletedMarketingActivityId
      }
    }`,
    "variables": {
        "remoteId": "abcdefg"
    },
  },
});
``` #### Response

```json
{
  "marketingActivityDeleteExternal": {
    "deletedMarketingActivityId": "gid://shopify/MarketingActivity/36187062"
  }
}
``` 
*   ### Deletes a marketing event

#### Query

```graphql
mutation marketingActivityDeleteExternal($marketingActivityId: ID!) {
  marketingActivityDeleteExternal(marketingActivityId: $marketingActivityId) {
    deletedMarketingActivityId
  }
}
``` #### Variables

```json
{
  "marketingActivityId": "gid://shopify/MarketingActivity/36187062"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityDeleteExternal($marketingActivityId: ID!) { marketingActivityDeleteExternal(marketingActivityId: $marketingActivityId) { deletedMarketingActivityId } }",
 "variables": {
    "marketingActivityId": "gid://shopify/MarketingActivity/36187062"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityDeleteExternal($marketingActivityId: ID!) {
    marketingActivityDeleteExternal(marketingActivityId: $marketingActivityId) {
      deletedMarketingActivityId
    }
  }`,
  {
    variables: {
        "marketingActivityId": "gid://shopify/MarketingActivity/36187062"
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
  mutation marketingActivityDeleteExternal($marketingActivityId: ID!) {
    marketingActivityDeleteExternal(marketingActivityId: $marketingActivityId) {
      deletedMarketingActivityId
    }
  }
QUERY

variables = {
  "marketingActivityId": "gid://shopify/MarketingActivity/36187062"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityDeleteExternal($marketingActivityId: ID!) {
      marketingActivityDeleteExternal(marketingActivityId: $marketingActivityId) {
        deletedMarketingActivityId
      }
    }`,
    "variables": {
        "marketingActivityId": "gid://shopify/MarketingActivity/36187062"
    },
  },
});
``` #### Response

```json
{
  "marketingActivityDeleteExternal": {
    "deletedMarketingActivityId": "gid://shopify/MarketingActivity/36187062"
  }
}
``` 
*   ### marketingActivityDeleteExternal reference

Examples
--------

Delete an external marketing activity using the remote ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpdateExternal(%24remoteId%3A%20String!)%20%7B%0A%20%20marketingActivityDeleteExternal(remoteId%3A%20%24remoteId)%20%7B%0A%20%20%20%20deletedMarketingActivityId%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22remoteId%22%3A%20%22abcdefg%22%0A%7D)Copy

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

 mutation marketingActivityUpdateExternal($remoteId: String!) {

 marketingActivityDeleteExternal(remoteId: $remoteId) {

 deletedMarketingActivityId

 }

 }`,

{

variables:{

"remoteId":"abcdefg"

},

},

);

const data=await response.json();

```
mutation marketingActivityUpdateExternal($remoteId: String!) {
  marketingActivityDeleteExternal(remoteId: $remoteId) {
    deletedMarketingActivityId
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdateExternal($remoteId: String!) { marketingActivityDeleteExternal(remoteId: $remoteId) { deletedMarketingActivityId } }",
 "variables": {
    "remoteId": "abcdefg"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($remoteId: String!) {
    marketingActivityDeleteExternal(remoteId: $remoteId) {
      deletedMarketingActivityId
    }
  }`,
  {
    variables: {
        "remoteId": "abcdefg"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdateExternal($remoteId: String!) {
      marketingActivityDeleteExternal(remoteId: $remoteId) {
        deletedMarketingActivityId
      }
    }`,
    "variables": {
        "remoteId": "abcdefg"
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
  mutation marketingActivityUpdateExternal($remoteId: String!) {
    marketingActivityDeleteExternal(remoteId: $remoteId) {
      deletedMarketingActivityId
    }
  }
QUERY

variables = {
  "remoteId": "abcdefg"
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

"remoteId": "abcdefg"

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

"marketingActivityDeleteExternal": {

"deletedMarketingActivityId": "gid://shopify/MarketingActivity/36187062"

}

}


---
*Content truncated at "Updates" section*