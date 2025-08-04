---
title: "marketingEngagementCreate"
description: "Shopify GraphQL Admin API documentation for marketingengagementcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingEngagementCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate

Markdown Content:
marketingEngagementCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#main-content)

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

[Anchor to marketingEngagementCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#top)
marketing Engagement Create
===========================

mutation

Requires `write_marketing_events` access scope.

Creates a new marketing engagement for a marketing activity or a marketing channel.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#arguments)
Arguments
---------

[Anchor to channelHandle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#arguments-channelHandle)channel Handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The unique string identifier of the channel to which the engagement metrics are being provided. This should be set when and only when providing channel-level engagements. This should be nil when providing activity-level engagements. For the correct handle for your channel, contact your partner manager.

[Anchor to marketingActivityId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#arguments-marketingActivityId)marketing Activity Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The identifier of the marketing activity for which the engagement metrics are being provided. This or the remoteId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

[Anchor to marketingEngagement](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#arguments-marketingEngagement)marketing Engagement

•[Marketing Engagement Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput)

required

The marketing engagement's attributes.

Show input fields

[Anchor to remoteId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#arguments-remoteId)remote Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A custom unique identifier for the marketing activity, which can be used to manage the activity and send engagement metrics without having to store our marketing activity ID in your systems. This or the marketingActivityId should be set when and only when providing activity-level engagements. This should be nil when providing channel-level engagements.

* * *

Was this section helpful?

Yes No

[Anchor to MarketingEngagementCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#returns)Marketing Engagement Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to marketingEngagement](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#returns-marketingEngagement)marketing Engagement

•[Marketing Engagement](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement)

The marketing engagement that was created. This represents customer activity taken on a marketing activity or a marketing channel.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate#returns-userErrors)user Errors

•[[Marketing Activity User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create activity-level engagement for a marketing activity ID

#### Query

```graphql
mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
  marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
    marketingEngagement {
      occurredOn
      utcOffset
      isCumulative
      adSpend {
        amount
        currencyCode
      }
      clicksCount
      impressionsCount
      commentsCount
      favoritesCount
      unsubscribesCount
      complaintsCount
      failsCount
      sendsCount
      uniqueViewsCount
      uniqueClicksCount
      sharesCount
      viewsCount
      sessionsCount
      sales {
        amount
        currencyCode
      }
      orders
      firstTimeCustomers
      returningCustomers
      marketingActivity {
        id
      }
      channelHandle
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
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
  "channelHandle": null,
  "remoteId": null
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) { marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) { marketingEngagement { occurredOn utcOffset isCumulative adSpend { amount currencyCode } clicksCount impressionsCount commentsCount favoritesCount unsubscribesCount complaintsCount failsCount sendsCount uniqueViewsCount uniqueClicksCount sharesCount viewsCount sessionsCount sales { amount currencyCode } orders firstTimeCustomers returningCustomers marketingActivity { id } channelHandle } userErrors { field message } } }",
 "variables": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "currencyCode": "CAD",
        "amount": "19.90"
      },
      "impressionsCount": 100,
      "clicksCount": 40,
      "commentsCount": 1,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "favoritesCount": 0,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.50",
        "currencyCode": "CAD"
      },
      "orders": 8,
      "firstTimeCustomers": 5,
      "returningCustomers": 3
    },
    "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
    "channelHandle": null,
    "remoteId": null
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
        "channelHandle": null,
        "remoteId": null
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
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
  "channelHandle": null,
  "remoteId": null
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
      marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
        marketingEngagement {
          occurredOn
          utcOffset
          isCumulative
          adSpend {
            amount
            currencyCode
          }
          clicksCount
          impressionsCount
          commentsCount
          favoritesCount
          unsubscribesCount
          complaintsCount
          failsCount
          sendsCount
          uniqueViewsCount
          uniqueClicksCount
          sharesCount
          viewsCount
          sessionsCount
          sales {
            amount
            currencyCode
          }
          orders
          firstTimeCustomers
          returningCustomers
          marketingActivity {
            id
          }
          channelHandle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
        "channelHandle": null,
        "remoteId": null
    },
  },
});
``` #### Response

```json
{
  "marketingEngagementCreate": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "amount": "19.9",
        "currencyCode": "CAD"
      },
      "clicksCount": 40,
      "impressionsCount": 100,
      "commentsCount": 1,
      "favoritesCount": 0,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.5",
        "currencyCode": "CAD"
      },
      "orders": "8.0",
      "firstTimeCustomers": "5.0",
      "returningCustomers": "3.0",
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/794355127"
      },
      "channelHandle": null
    },
    "userErrors": []
  }
}
``` 
*   ### Create activity-level engagement with a remote ID

#### Query

```graphql
mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
  marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
    marketingEngagement {
      occurredOn
      utcOffset
      isCumulative
      adSpend {
        amount
        currencyCode
      }
      clicksCount
      impressionsCount
      commentsCount
      favoritesCount
      unsubscribesCount
      complaintsCount
      failsCount
      sendsCount
      uniqueViewsCount
      uniqueClicksCount
      sharesCount
      viewsCount
      sessionsCount
      sales {
        amount
        currencyCode
      }
      orders
      firstTimeCustomers
      returningCustomers
      marketingActivity {
        id
      }
      channelHandle
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
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": null,
  "channelHandle": null,
  "remoteId": "1234:5678"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) { marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) { marketingEngagement { occurredOn utcOffset isCumulative adSpend { amount currencyCode } clicksCount impressionsCount commentsCount favoritesCount unsubscribesCount complaintsCount failsCount sendsCount uniqueViewsCount uniqueClicksCount sharesCount viewsCount sessionsCount sales { amount currencyCode } orders firstTimeCustomers returningCustomers marketingActivity { id } channelHandle } userErrors { field message } } }",
 "variables": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "currencyCode": "CAD",
        "amount": "19.90"
      },
      "impressionsCount": 100,
      "clicksCount": 40,
      "commentsCount": 1,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "favoritesCount": 0,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.50",
        "currencyCode": "CAD"
      },
      "orders": 8,
      "firstTimeCustomers": 5,
      "returningCustomers": 3
    },
    "marketingActivityId": null,
    "channelHandle": null,
    "remoteId": "1234:5678"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": null,
        "channelHandle": null,
        "remoteId": "1234:5678"
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
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": null,
  "channelHandle": null,
  "remoteId": "1234:5678"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
      marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
        marketingEngagement {
          occurredOn
          utcOffset
          isCumulative
          adSpend {
            amount
            currencyCode
          }
          clicksCount
          impressionsCount
          commentsCount
          favoritesCount
          unsubscribesCount
          complaintsCount
          failsCount
          sendsCount
          uniqueViewsCount
          uniqueClicksCount
          sharesCount
          viewsCount
          sessionsCount
          sales {
            amount
            currencyCode
          }
          orders
          firstTimeCustomers
          returningCustomers
          marketingActivity {
            id
          }
          channelHandle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": null,
        "channelHandle": null,
        "remoteId": "1234:5678"
    },
  },
});
``` #### Response

```json
{
  "marketingEngagementCreate": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "amount": "19.9",
        "currencyCode": "CAD"
      },
      "clicksCount": 40,
      "impressionsCount": 100,
      "commentsCount": 1,
      "favoritesCount": 0,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.5",
        "currencyCode": "CAD"
      },
      "orders": "8.0",
      "firstTimeCustomers": "5.0",
      "returningCustomers": "3.0",
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/794355127"
      },
      "channelHandle": null
    },
    "userErrors": []
  }
}
``` 
*   ### Create channel-level engagement for a channel handle

#### Query

```graphql
mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
  marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
    marketingEngagement {
      occurredOn
      utcOffset
      isCumulative
      adSpend {
        amount
        currencyCode
      }
      clicksCount
      impressionsCount
      commentsCount
      favoritesCount
      unsubscribesCount
      complaintsCount
      failsCount
      sendsCount
      uniqueViewsCount
      uniqueClicksCount
      sharesCount
      viewsCount
      sessionsCount
      sales {
        amount
        currencyCode
      }
      orders
      firstTimeCustomers
      returningCustomers
      marketingActivity {
        id
      }
      channelHandle
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
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": null,
  "channelHandle": "my-channel-handle",
  "remoteId": null
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) { marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) { marketingEngagement { occurredOn utcOffset isCumulative adSpend { amount currencyCode } clicksCount impressionsCount commentsCount favoritesCount unsubscribesCount complaintsCount failsCount sendsCount uniqueViewsCount uniqueClicksCount sharesCount viewsCount sessionsCount sales { amount currencyCode } orders firstTimeCustomers returningCustomers marketingActivity { id } channelHandle } userErrors { field message } } }",
 "variables": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "currencyCode": "CAD",
        "amount": "19.90"
      },
      "impressionsCount": 100,
      "clicksCount": 40,
      "commentsCount": 1,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "favoritesCount": 0,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.50",
        "currencyCode": "CAD"
      },
      "orders": 8,
      "firstTimeCustomers": 5,
      "returningCustomers": 3
    },
    "marketingActivityId": null,
    "channelHandle": "my-channel-handle",
    "remoteId": null
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": null,
        "channelHandle": "my-channel-handle",
        "remoteId": null
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
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": null,
  "channelHandle": "my-channel-handle",
  "remoteId": null
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
      marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
        marketingEngagement {
          occurredOn
          utcOffset
          isCumulative
          adSpend {
            amount
            currencyCode
          }
          clicksCount
          impressionsCount
          commentsCount
          favoritesCount
          unsubscribesCount
          complaintsCount
          failsCount
          sendsCount
          uniqueViewsCount
          uniqueClicksCount
          sharesCount
          viewsCount
          sessionsCount
          sales {
            amount
            currencyCode
          }
          orders
          firstTimeCustomers
          returningCustomers
          marketingActivity {
            id
          }
          channelHandle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": null,
        "channelHandle": "my-channel-handle",
        "remoteId": null
    },
  },
});
``` #### Response

```json
{
  "marketingEngagementCreate": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "amount": "19.9",
        "currencyCode": "CAD"
      },
      "clicksCount": 40,
      "impressionsCount": 100,
      "commentsCount": 1,
      "favoritesCount": 0,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.5",
        "currencyCode": "CAD"
      },
      "orders": "8.0",
      "firstTimeCustomers": "5.0",
      "returningCustomers": "3.0",
      "marketingActivity": null,
      "channelHandle": "my-channel-handle"
    },
    "userErrors": []
  }
}
``` 
*   ### Creates marketing engagements on a marketing event

#### Query

```graphql
mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID!) {
  marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId) {
    marketingEngagement {
      occurredOn
      clicksCount
      commentsCount
      favoritesCount
      impressionsCount
      unsubscribesCount
      complaintsCount
      failsCount
      sendsCount
      uniqueViewsCount
      uniqueClicksCount
      isCumulative
      utcOffset
      adSpend {
        amount
        currencyCode
      }
      marketingActivity {
        id
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
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "utcOffset": "-07:00",
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "isCumulative": true,
    "favoritesCount": 0
  },
  "marketingActivityId": "gid://shopify/MarketingActivity/794355127"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID!) { marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId) { marketingEngagement { occurredOn clicksCount commentsCount favoritesCount impressionsCount unsubscribesCount complaintsCount failsCount sendsCount uniqueViewsCount uniqueClicksCount isCumulative utcOffset adSpend { amount currencyCode } marketingActivity { id } } userErrors { field message } } }",
 "variables": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "adSpend": {
        "currencyCode": "CAD",
        "amount": "19.90"
      },
      "utcOffset": "-07:00",
      "impressionsCount": 100,
      "clicksCount": 40,
      "commentsCount": 1,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "isCumulative": true,
      "favoritesCount": 0
    },
    "marketingActivityId": "gid://shopify/MarketingActivity/794355127"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID!) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId) {
      marketingEngagement {
        occurredOn
        clicksCount
        commentsCount
        favoritesCount
        impressionsCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        isCumulative
        utcOffset
        adSpend {
          amount
          currencyCode
        }
        marketingActivity {
          id
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
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "utcOffset": "-07:00",
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "isCumulative": true,
            "favoritesCount": 0
        },
        "marketingActivityId": "gid://shopify/MarketingActivity/794355127"
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
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID!) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId) {
      marketingEngagement {
        occurredOn
        clicksCount
        commentsCount
        favoritesCount
        impressionsCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        isCumulative
        utcOffset
        adSpend {
          amount
          currencyCode
        }
        marketingActivity {
          id
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
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "utcOffset": "-07:00",
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "isCumulative": true,
    "favoritesCount": 0
  },
  "marketingActivityId": "gid://shopify/MarketingActivity/794355127"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID!) {
      marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId) {
        marketingEngagement {
          occurredOn
          clicksCount
          commentsCount
          favoritesCount
          impressionsCount
          unsubscribesCount
          complaintsCount
          failsCount
          sendsCount
          uniqueViewsCount
          uniqueClicksCount
          isCumulative
          utcOffset
          adSpend {
            amount
            currencyCode
          }
          marketingActivity {
            id
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "utcOffset": "-07:00",
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "isCumulative": true,
            "favoritesCount": 0
        },
        "marketingActivityId": "gid://shopify/MarketingActivity/794355127"
    },
  },
});
``` #### Response

```json
{
  "marketingEngagementCreate": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "clicksCount": 40,
      "commentsCount": 1,
      "favoritesCount": 0,
      "impressionsCount": 100,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "isCumulative": true,
      "utcOffset": "-07:00",
      "adSpend": {
        "amount": "19.9",
        "currencyCode": "CAD"
      },
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/794355127"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### marketingEngagementCreate reference

Examples
--------

Create activity-level engagement for a marketing activity ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20M(%24marketingEngagement%3A%20MarketingEngagementInput!%2C%20%24marketingActivityId%3A%20ID%2C%20%24channelHandle%3A%20String%2C%20%24remoteId%3A%20String)%20%7B%0A%20%20marketingEngagementCreate(marketingEngagement%3A%20%24marketingEngagement%2C%20marketingActivityId%3A%20%24marketingActivityId%2C%20channelHandle%3A%20%24channelHandle%2C%20remoteId%3A%20%24remoteId)%20%7B%0A%20%20%20%20marketingEngagement%20%7B%0A%20%20%20%20%20%20occurredOn%0A%20%20%20%20%20%20utcOffset%0A%20%20%20%20%20%20isCumulative%0A%20%20%20%20%20%20adSpend%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20clicksCount%0A%20%20%20%20%20%20impressionsCount%0A%20%20%20%20%20%20commentsCount%0A%20%20%20%20%20%20favoritesCount%0A%20%20%20%20%20%20unsubscribesCount%0A%20%20%20%20%20%20complaintsCount%0A%20%20%20%20%20%20failsCount%0A%20%20%20%20%20%20sendsCount%0A%20%20%20%20%20%20uniqueViewsCount%0A%20%20%20%20%20%20uniqueClicksCount%0A%20%20%20%20%20%20sharesCount%0A%20%20%20%20%20%20viewsCount%0A%20%20%20%20%20%20sessionsCount%0A%20%20%20%20%20%20sales%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20orders%0A%20%20%20%20%20%20firstTimeCustomers%0A%20%20%20%20%20%20returningCustomers%0A%20%20%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20channelHandle%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22marketingEngagement%22%3A%20%7B%0A%20%20%20%20%22occurredOn%22%3A%20%222018-06-29%22%2C%0A%20%20%20%20%22utcOffset%22%3A%20%22-07%3A00%22%2C%0A%20%20%20%20%22isCumulative%22%3A%20false%2C%0A%20%20%20%20%22adSpend%22%3A%20%7B%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22CAD%22%2C%0A%20%20%20%20%20%20%22amount%22%3A%20%2219.90%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22impressionsCount%22%3A%20100%2C%0A%20%20%20%20%22clicksCount%22%3A%2040%2C%0A%20%20%20%20%22commentsCount%22%3A%201%2C%0A%20%20%20%20%22unsubscribesCount%22%3A%201%2C%0A%20%20%20%20%22complaintsCount%22%3A%201%2C%0A%20%20%20%20%22failsCount%22%3A%201%2C%0A%20%20%20%20%22sendsCount%22%3A%201%2C%0A%20%20%20%20%22uniqueViewsCount%22%3A%201%2C%0A%20%20%20%20%22uniqueClicksCount%22%3A%201%2C%0A%20%20%20%20%22sharesCount%22%3A%205%2C%0A%20%20%20%20%22viewsCount%22%3A%2010%2C%0A%20%20%20%20%22favoritesCount%22%3A%200%2C%0A%20%20%20%20%22sessionsCount%22%3A%2040%2C%0A%20%20%20%20%22sales%22%3A%20%7B%0A%20%20%20%20%20%20%22amount%22%3A%20%22304.50%22%2C%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22CAD%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22orders%22%3A%208%2C%0A%20%20%20%20%22firstTimeCustomers%22%3A%205%2C%0A%20%20%20%20%22returningCustomers%22%3A%203%0A%20%20%7D%2C%0A%20%20%22marketingActivityId%22%3A%20%22gid%3A%2F%2Fshopify%2FMarketingActivity%2F794355127%22%2C%0A%20%20%22channelHandle%22%3A%20null%2C%0A%20%20%22remoteId%22%3A%20null%0A%7D)Copy

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

32

33

34

35

36

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {

 marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {

 marketingEngagement {

 occurredOn

 utcOffset

 isCumulative

 adSpend {

 amount

 currencyCode

 }

 clicksCount

 impressionsCount

 commentsCount

 favoritesCount

 unsubscribesCount

 complaintsCount

 failsCount

 sendsCount

 uniqueViewsCount

 uniqueClicksCount

 sharesCount

 viewsCount

 sessionsCount

 sales {

 amount

 currencyCode

 }

 orders

 firstTimeCustomers

 returningCustomers

 marketingActivity {

 id

```
mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
  marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
    marketingEngagement {
      occurredOn
      utcOffset
      isCumulative
      adSpend {
        amount
        currencyCode
      }
      clicksCount
      impressionsCount
      commentsCount
      favoritesCount
      unsubscribesCount
      complaintsCount
      failsCount
      sendsCount
      uniqueViewsCount
      uniqueClicksCount
      sharesCount
      viewsCount
      sessionsCount
      sales {
        amount
        currencyCode
      }
      orders
      firstTimeCustomers
      returningCustomers
      marketingActivity {
        id
      }
      channelHandle
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
"query": "mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) { marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) { marketingEngagement { occurredOn utcOffset isCumulative adSpend { amount currencyCode } clicksCount impressionsCount commentsCount favoritesCount unsubscribesCount complaintsCount failsCount sendsCount uniqueViewsCount uniqueClicksCount sharesCount viewsCount sessionsCount sales { amount currencyCode } orders firstTimeCustomers returningCustomers marketingActivity { id } channelHandle } userErrors { field message } } }",
 "variables": {
    "marketingEngagement": {
      "occurredOn": "2018-06-29",
      "utcOffset": "-07:00",
      "isCumulative": false,
      "adSpend": {
        "currencyCode": "CAD",
        "amount": "19.90"
      },
      "impressionsCount": 100,
      "clicksCount": 40,
      "commentsCount": 1,
      "unsubscribesCount": 1,
      "complaintsCount": 1,
      "failsCount": 1,
      "sendsCount": 1,
      "uniqueViewsCount": 1,
      "uniqueClicksCount": 1,
      "sharesCount": 5,
      "viewsCount": 10,
      "favoritesCount": 0,
      "sessionsCount": 40,
      "sales": {
        "amount": "304.50",
        "currencyCode": "CAD"
      },
      "orders": 8,
      "firstTimeCustomers": 5,
      "returningCustomers": 3
    },
    "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
    "channelHandle": null,
    "remoteId": null
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
        "channelHandle": null,
        "remoteId": null
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
      marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
        marketingEngagement {
          occurredOn
          utcOffset
          isCumulative
          adSpend {
            amount
            currencyCode
          }
          clicksCount
          impressionsCount
          commentsCount
          favoritesCount
          unsubscribesCount
          complaintsCount
          failsCount
          sendsCount
          uniqueViewsCount
          uniqueClicksCount
          sharesCount
          viewsCount
          sessionsCount
          sales {
            amount
            currencyCode
          }
          orders
          firstTimeCustomers
          returningCustomers
          marketingActivity {
            id
          }
          channelHandle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "marketingEngagement": {
            "occurredOn": "2018-06-29",
            "utcOffset": "-07:00",
            "isCumulative": false,
            "adSpend": {
                "currencyCode": "CAD",
                "amount": "19.90"
            },
            "impressionsCount": 100,
            "clicksCount": 40,
            "commentsCount": 1,
            "unsubscribesCount": 1,
            "complaintsCount": 1,
            "failsCount": 1,
            "sendsCount": 1,
            "uniqueViewsCount": 1,
            "uniqueClicksCount": 1,
            "sharesCount": 5,
            "viewsCount": 10,
            "favoritesCount": 0,
            "sessionsCount": 40,
            "sales": {
                "amount": "304.50",
                "currencyCode": "CAD"
            },
            "orders": 8,
            "firstTimeCustomers": 5,
            "returningCustomers": 3
        },
        "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
        "channelHandle": null,
        "remoteId": null
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
  mutation M($marketingEngagement: MarketingEngagementInput!, $marketingActivityId: ID, $channelHandle: String, $remoteId: String) {
    marketingEngagementCreate(marketingEngagement: $marketingEngagement, marketingActivityId: $marketingActivityId, channelHandle: $channelHandle, remoteId: $remoteId) {
      marketingEngagement {
        occurredOn
        utcOffset
        isCumulative
        adSpend {
          amount
          currencyCode
        }
        clicksCount
        impressionsCount
        commentsCount
        favoritesCount
        unsubscribesCount
        complaintsCount
        failsCount
        sendsCount
        uniqueViewsCount
        uniqueClicksCount
        sharesCount
        viewsCount
        sessionsCount
        sales {
          amount
          currencyCode
        }
        orders
        firstTimeCustomers
        returningCustomers
        marketingActivity {
          id
        }
        channelHandle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "marketingEngagement": {
    "occurredOn": "2018-06-29",
    "utcOffset": "-07:00",
    "isCumulative": false,
    "adSpend": {
      "currencyCode": "CAD",
      "amount": "19.90"
    },
    "impressionsCount": 100,
    "clicksCount": 40,
    "commentsCount": 1,
    "unsubscribesCount": 1,
    "complaintsCount": 1,
    "failsCount": 1,
    "sendsCount": 1,
    "uniqueViewsCount": 1,
    "uniqueClicksCount": 1,
    "sharesCount": 5,
    "viewsCount": 10,
    "favoritesCount": 0,
    "sessionsCount": 40,
    "sales": {
      "amount": "304.50",
      "currencyCode": "CAD"
    },
    "orders": 8,
    "firstTimeCustomers": 5,
    "returningCustomers": 3
  },
  "marketingActivityId": "gid://shopify/MarketingActivity/794355127",
  "channelHandle": null,
  "remoteId": null
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

32

33

34

›

⌄

⌄

⌄

⌄

{

"marketingEngagement": {

"occurredOn": "2018-06-29",

"utcOffset": "-07:00",

"isCumulative": false,

"adSpend": {

"currencyCode": "CAD",

"amount": "19.90"

},

"impressionsCount": 100,

"clicksCount": 40,

"commentsCount": 1,

"unsubscribesCount": 1,

"complaintsCount": 1,

"failsCount": 1,

"sendsCount": 1,

"uniqueViewsCount": 1,

"uniqueClicksCount": 1,

"sharesCount": 5,

"viewsCount": 10,

"favoritesCount": 0,

"sessionsCount": 40,

"sales": {

"amount": "304.50",

"currencyCode": "CAD"

},

"orders": 8,

"firstTimeCustomers": 5,

"returningCustomers": 3

},

"marketingActivityId": "gid://shopify/MarketingActivity/794355127",

"channelHandle": null,

"remoteId": null

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

32

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"marketingEngagementCreate": {

"marketingEngagement": {

"occurredOn": "2018-06-29",

"utcOffset": "-07:00",

"isCumulative": false,

"adSpend": {

"amount": "19.9",

"currencyCode": "CAD"

},

"clicksCount": 40,

"impressionsCount": 100,

"commentsCount": 1,

"favoritesCount": 0,

"unsubscribesCount": 1,

"complaintsCount": 1,

"failsCount": 1,

"sendsCount": 1,

"uniqueViewsCount": 1,

"uniqueClicksCount": 1,

"sharesCount": 5,

"viewsCount": 10,

"sessionsCount": 40,

"sales": {

"amount": "304.5",

"currencyCode": "CAD"

},

"orders": "8.0",

"firstTimeCustomers": "5.0",

"returningCustomers": "3.0",

"marketingActivity": {

"id": "gid://shopify/MarketingActivity/794355127"

},

"channelHandle": null

},

"userErrors": []


---
*Content truncated at "Updates" section*