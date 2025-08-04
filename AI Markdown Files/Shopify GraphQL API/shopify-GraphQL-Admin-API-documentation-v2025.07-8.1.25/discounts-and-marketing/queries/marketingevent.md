---
title: "marketingEvent"
description: "Shopify GraphQL Admin API documentation for marketingevent"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingEvent - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent

Markdown Content:
marketingEvent - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent#main-content)

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

    *   
Queries

        *   [abandonment](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonment)
        *   [abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentbyabandonedcheckoutid)
        *   [app Discount Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttype)
        *   [app Discount Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttypes)
        *   [app Discount Types Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttypesnodes)
        *   [automatic Discount](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount)
        *   [automatic Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode)
        *   [automatic Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes)
        *   [automatic Discounts](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscounts)
        *   [automatic Discount Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountsavedsearches)
        *   [code Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode)
        *   [code Discount Node By Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode)
        *   [code Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes)
        *   [code Discount Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches)
        *   [discount Codes Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount)
        *   [discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode)
        *   [discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes)
        *   [discount Nodes Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount)
        *   [discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation)
        *   [discount Redeem Code Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodesavedsearches)
        *   [marketing Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities)
        *   [marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivity)
        *   [marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent)
        *   [marketing Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents)
        *   [server Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/serverpixel)
        *   [web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpixel)

    *   Mutations   
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

[Anchor to marketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent#top)
marketing Event
===============

query

Returns a `MarketingEvent` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `MarketingEvent` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MarketingEvent](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent#returns-MarketingEvent)Marketing Event

•[Marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

Represents actions that market a merchant's store or products.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a single marketing event

#### Query

```graphql
query MarketingEventShow {
  marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
    id
    type
    remoteId
    startedAt
    endedAt
    scheduledToEndAt
    manageUrl
    previewUrl
    utmCampaign
    utmMedium
    utmSource
    description
    marketingChannelType
    sourceAndMedium
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MarketingEventShow { marketingEvent(id: \"gid://shopify/MarketingEvent/425025702\") { id type remoteId startedAt endedAt scheduledToEndAt manageUrl previewUrl utmCampaign utmMedium utmSource description marketingChannelType sourceAndMedium } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MarketingEventShow {
    marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
      id
      type
      remoteId
      startedAt
      endedAt
      scheduledToEndAt
      manageUrl
      previewUrl
      utmCampaign
      utmMedium
      utmSource
      description
      marketingChannelType
      sourceAndMedium
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
  query MarketingEventShow {
    marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
      id
      type
      remoteId
      startedAt
      endedAt
      scheduledToEndAt
      manageUrl
      previewUrl
      utmCampaign
      utmMedium
      utmSource
      description
      marketingChannelType
      sourceAndMedium
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MarketingEventShow {
    marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
      id
      type
      remoteId
      startedAt
      endedAt
      scheduledToEndAt
      manageUrl
      previewUrl
      utmCampaign
      utmMedium
      utmSource
      description
      marketingChannelType
      sourceAndMedium
    }
  }`,
});
``` #### Response

```json
{
  "marketingEvent": {
    "id": "gid://shopify/MarketingEvent/425025702",
    "type": "NEWSLETTER",
    "remoteId": null,
    "startedAt": "2024-11-08T20:47:51Z",
    "endedAt": null,
    "scheduledToEndAt": null,
    "manageUrl": null,
    "previewUrl": null,
    "utmCampaign": "asdf",
    "utmMedium": "newsletter",
    "utmSource": "email",
    "description": null,
    "marketingChannelType": "EMAIL",
    "sourceAndMedium": "Email newsletter"
  }
}
``` 

Retrieves a single marketing event
----------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MarketingEventShow%20%7B%0A%20%20marketingEvent(id%3A%20%22gid%3A%2F%2Fshopify%2FMarketingEvent%2F425025702%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20type%0A%20%20%20%20remoteId%0A%20%20%20%20startedAt%0A%20%20%20%20endedAt%0A%20%20%20%20scheduledToEndAt%0A%20%20%20%20manageUrl%0A%20%20%20%20previewUrl%0A%20%20%20%20utmCampaign%0A%20%20%20%20utmMedium%0A%20%20%20%20utmSource%0A%20%20%20%20description%0A%20%20%20%20marketingChannelType%0A%20%20%20%20sourceAndMedium%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MarketingEventShow {

 marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {

 id

 type

 remoteId

 startedAt

 endedAt

 scheduledToEndAt

 manageUrl

 previewUrl

 utmCampaign

 utmMedium

 utmSource

 description

 marketingChannelType

 sourceAndMedium

 }

 }`,

);

const data=await response.json();

```
query MarketingEventShow {
  marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
    id
    type
    remoteId
    startedAt
    endedAt
    scheduledToEndAt
    manageUrl
    previewUrl
    utmCampaign
    utmMedium
    utmSource
    description
    marketingChannelType
    sourceAndMedium
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MarketingEventShow { marketingEvent(id: \"gid://shopify/MarketingEvent/425025702\") { id type remoteId startedAt endedAt scheduledToEndAt manageUrl previewUrl utmCampaign utmMedium utmSource description marketingChannelType sourceAndMedium } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MarketingEventShow {
    marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
      id
      type
      remoteId
      startedAt
      endedAt
      scheduledToEndAt
      manageUrl
      previewUrl
      utmCampaign
      utmMedium
      utmSource
      description
      marketingChannelType
      sourceAndMedium
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MarketingEventShow {
    marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
      id
      type
      remoteId
      startedAt
      endedAt
      scheduledToEndAt
      manageUrl
      previewUrl
      utmCampaign
      utmMedium
      utmSource
      description
      marketingChannelType
      sourceAndMedium
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
  query MarketingEventShow {
    marketingEvent(id: "gid://shopify/MarketingEvent/425025702") {
      id
      type
      remoteId
      startedAt
      endedAt
      scheduledToEndAt
      manageUrl
      previewUrl
      utmCampaign
      utmMedium
      utmSource
      description
      marketingChannelType
      sourceAndMedium
    }
  }
QUERY

response = client.query(query: query)
```

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

›

⌄

⌄

{

"marketingEvent": {

"id": "gid://shopify/MarketingEvent/425025702",

"type": "NEWSLETTER",

"remoteId": null,

"startedAt": "2024-11-08T20:47:51Z",

"endedAt": null,

"scheduledToEndAt": null,

"manageUrl": null,

"previewUrl": null,

"utmCampaign": "asdf",

"utmMedium": "newsletter",

"utmSource": "email",

"description": null,

"marketingChannelType": "EMAIL",

"sourceAndMedium": "Email newsletter"

}

}


---
*Content truncated at "Updates" section*