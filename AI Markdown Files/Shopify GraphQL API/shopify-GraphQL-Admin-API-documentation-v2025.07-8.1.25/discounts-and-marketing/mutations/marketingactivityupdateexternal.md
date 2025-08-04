---
title: "marketingActivityUpdateExternal"
description: "Shopify GraphQL Admin API documentation for marketingactivityupdateexternal"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivityUpdateExternal - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal

Markdown Content:
marketingActivityUpdateExternal - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#main-content)

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

[Anchor to marketingActivityUpdateExternal](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#top)
marketing Activity Update External
==================================

mutation

Requires `write_marketing_events` access scope.

Update an external marketing activity.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#arguments-input)input

•[Marketing Activity Update External Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput)

required

The input field for updating an external marketing activity.

Show input fields

[Anchor to marketingActivityId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#arguments-marketingActivityId)marketing Activity Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the marketing activity. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

[Anchor to remoteId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#arguments-remoteId)remote Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

[Anchor to utm](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#arguments-utm)utm

•[UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

Specifies the [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters) that are associated with a related marketing campaign. Specify either the marketing activity ID, remote ID, or UTM to update the marketing activity.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketingActivityUpdateExternalPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#returns)Marketing Activity Update External Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#returns-marketingActivity)marketing Activity

•[Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

The updated marketing activity.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal#returns-userErrors)user Errors

•[[Marketing Activity User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update an external marketing activity and its status

#### Description

Starting from API version 2024-01, the status field for creating an external marketing activity will be an optional, modifiable field.

#### Query

```graphql
mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
  marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
    marketingActivity {
      id
      title
      marketingEvent {
        manageUrl
        previewUrl
      }
    }
  }
}
``` #### Variables

```json
{
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "PAUSED"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
 "variables": {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "PAUSED"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }`,
  {
    variables: {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "PAUSED"
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
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
QUERY

variables = {
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "PAUSED"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    "variables": {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "PAUSED"
        }
    },
  },
});
``` #### Response

```json
{
  "marketingActivityUpdateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/36187062",
      "title": "New Title",
      "marketingEvent": {
        "manageUrl": "https://example.com",
        "previewUrl": "https://example.com"
      }
    }
  }
}
``` 
*   ### Update an external marketing activity using the remote id

#### Query

```graphql
mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
  marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
    marketingActivity {
      id
      title
      marketingEvent {
        manageUrl
        previewUrl
      }
    }
  }
}
``` #### Variables

```json
{
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
 "variables": {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }`,
  {
    variables: {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com"
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
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
QUERY

variables = {
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    "variables": {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com"
        }
    },
  },
});
``` #### Response

```json
{
  "marketingActivityUpdateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/36187062",
      "title": "New Title",
      "marketingEvent": {
        "manageUrl": "https://example.com",
        "previewUrl": "https://example.com"
      }
    }
  }
}
``` 
*   ### Update an external marketing activity using the utm parameters

#### Query

```graphql
mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
  marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
    marketingActivity {
      id
      title
      marketingEvent {
        manageUrl
        previewUrl
      }
    }
  }
}
``` #### Variables

```json
{
  "utm": {
    "source": "email",
    "medium": "newsletter",
    "campaign": "external-event-campaign"
  },
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(utm: $utm, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
 "variables": {
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-event-campaign"
    },
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }`,
  {
    variables: {
        "utm": {
            "source": "email",
            "medium": "newsletter",
            "campaign": "external-event-campaign"
        },
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com"
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
  mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
QUERY

variables = {
  "utm": {
    "source": "email",
    "medium": "newsletter",
    "campaign": "external-event-campaign"
  },
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdateExternal($utm: UTMInput!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(utm: $utm, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    "variables": {
        "utm": {
            "source": "email",
            "medium": "newsletter",
            "campaign": "external-event-campaign"
        },
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com"
        }
    },
  },
});
``` #### Response

```json
{
  "marketingActivityUpdateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/36187062",
      "title": "New Title",
      "marketingEvent": {
        "manageUrl": "https://example.com",
        "previewUrl": "https://example.com"
      }
    }
  }
}
``` 
*   ### Updates a marketing event

#### Query

```graphql
mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
  marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
    marketingActivity {
      id
      title
      marketingEvent {
        manageUrl
        previewUrl
      }
    }
  }
}
``` #### Variables

```json
{
  "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
 "variables": {
    "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }`,
  {
    variables: {
        "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com"
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
  mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
QUERY

variables = {
  "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdateExternal($marketingActivityId: ID!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(marketingActivityId: $marketingActivityId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    "variables": {
        "marketingActivityId": "gid://shopify/MarketingActivity/36187062",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com"
        }
    },
  },
});
``` #### Response

```json
{
  "marketingActivityUpdateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/36187062",
      "title": "New Title",
      "marketingEvent": {
        "manageUrl": "https://example.com",
        "previewUrl": "https://example.com"
      }
    }
  }
}
``` 
*   ### marketingActivityUpdateExternal reference

Examples
--------

Update an external marketing activity and its status

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpdateExternal(%24remoteId%3A%20String!%2C%20%24updateInput%3A%20MarketingActivityUpdateExternalInput!)%20%7B%0A%20%20marketingActivityUpdateExternal(remoteId%3A%20%24remoteId%2C%20input%3A%20%24updateInput)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20marketingEvent%20%7B%0A%20%20%20%20%20%20%20%20manageUrl%0A%20%20%20%20%20%20%20%20previewUrl%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22remoteId%22%3A%20%22abcdefg%22%2C%0A%20%20%22updateInput%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22New%20Title%22%2C%0A%20%20%20%20%22remoteUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22remotePreviewImageUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22status%22%3A%20%22PAUSED%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {

 marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {

 marketingActivity {

 id

 title

 marketingEvent {

 manageUrl

 previewUrl

 }

 }

 }

 }`,

{

variables:{

"remoteId":"abcdefg",

"updateInput":{

"title":"New Title",

"remoteUrl":"https://example.com",

"remotePreviewImageUrl":"https://example.com",

"status":"PAUSED"

}

},

},

);

const data=await response.json();

```
mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
  marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
    marketingActivity {
      id
      title
      marketingEvent {
        manageUrl
        previewUrl
      }
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
"query": "mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) { marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) { marketingActivity { id title marketingEvent { manageUrl previewUrl } } } }",
 "variables": {
    "remoteId": "abcdefg",
    "updateInput": {
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "PAUSED"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }`,
  {
    variables: {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "PAUSED"
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
    "query": `mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
      marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
        marketingActivity {
          id
          title
          marketingEvent {
            manageUrl
            previewUrl
          }
        }
      }
    }`,
    "variables": {
        "remoteId": "abcdefg",
        "updateInput": {
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "PAUSED"
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
  mutation marketingActivityUpdateExternal($remoteId: String!, $updateInput: MarketingActivityUpdateExternalInput!) {
    marketingActivityUpdateExternal(remoteId: $remoteId, input: $updateInput) {
      marketingActivity {
        id
        title
        marketingEvent {
          manageUrl
          previewUrl
        }
      }
    }
  }
QUERY

variables = {
  "remoteId": "abcdefg",
  "updateInput": {
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "PAUSED"
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

8

9

›

⌄

⌄

{

"remoteId": "abcdefg",

"updateInput": {

"title": "New Title",

"remoteUrl": "https://example.com",

"remotePreviewImageUrl": "https://example.com",

"status": "PAUSED"

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

›

⌄

⌄

⌄

⌄

{

"marketingActivityUpdateExternal": {

"marketingActivity": {

"id": "gid://shopify/MarketingActivity/36187062",

"title": "New Title",

"marketingEvent": {

"manageUrl": "https://example.com",

"previewUrl": "https://example.com"

}

}

}

}


---
*Content truncated at "Updates" section*