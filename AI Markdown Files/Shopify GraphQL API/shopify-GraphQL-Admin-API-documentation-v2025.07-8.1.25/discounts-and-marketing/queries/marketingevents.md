---
title: "marketingEvents"
description: "Shopify GraphQL Admin API documentation for marketingevents"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingEvents - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents

Markdown Content:
marketingEvents - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#main-content)

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

[Anchor to marketingEvents](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#top)
marketing Events
================

query

A list of marketing events associated with the marketing app.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments)
MarketingEventConnection arguments
----------------------------------

•[MarketingEventConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#argument-query-filter-app_id)app_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#argument-query-filter-description)description

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#argument-query-filter-started_at)started_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#argument-query-filter-type)type

•string

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#arguments-sortKey)sort Key

•[Marketing Event Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingEventSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#returns-edges)edges

•[[Marketing Event Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEventEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#returns-nodes)nodes

•[[Marketing Event!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

non-null

A list of nodes that are contained in MarketingEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a list of all marketing events

#### Query

```graphql
query MarketingEventList {
  marketingEvents(first: 10) {
    edges {
      node {
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
    pageInfo {
      hasNextPage
      endCursor
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
"query": "query MarketingEventList { marketingEvents(first: 10) { edges { node { id type remoteId startedAt endedAt scheduledToEndAt manageUrl previewUrl utmCampaign utmMedium utmSource description marketingChannelType sourceAndMedium } } pageInfo { hasNextPage endCursor } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MarketingEventList {
    marketingEvents(first: 10) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
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
  query MarketingEventList {
    marketingEvents(first: 10) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MarketingEventList {
    marketingEvents(first: 10) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`,
});
``` #### Response

```json
{
  "marketingEvents": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/40997430",
          "type": "AD",
          "remoteId": "2345:6789",
          "startedAt": "2012-01-01T00:00:00Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": null,
          "previewUrl": null,
          "utmCampaign": "1234567899",
          "utmMedium": "facebook-ad",
          "utmSource": "facebook",
          "description": null,
          "marketingChannelType": "SOCIAL",
          "sourceAndMedium": "Facebook ad"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/56540067",
          "type": "NEWSLETTER",
          "remoteId": "222",
          "startedAt": "2024-11-17T20:47:51Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com/image.png",
          "utmCampaign": null,
          "utmMedium": null,
          "utmSource": null,
          "description": "External Marketing Activity Campaign",
          "marketingChannelType": "DISPLAY",
          "sourceAndMedium": "Display newsletter"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/151661601",
          "type": "NEWSLETTER",
          "remoteId": null,
          "startedAt": "2024-11-08T20:47:51Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": null,
          "previewUrl": null,
          "utmCampaign": "email-for-deleted-automation",
          "utmMedium": "newsletter",
          "utmSource": "email",
          "description": null,
          "marketingChannelType": "EMAIL",
          "sourceAndMedium": "Email newsletter"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/178808684",
          "type": "AD",
          "remoteId": null,
          "startedAt": "2012-01-01T00:00:00Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": null,
          "previewUrl": null,
          "utmCampaign": "google-shopping",
          "utmMedium": "ad",
          "utmSource": "google",
          "description": null,
          "marketingChannelType": "SEARCH",
          "sourceAndMedium": "Google ad"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/179113300",
          "type": "ABANDONED_CART",
          "remoteId": null,
          "startedAt": "2024-11-03T20:47:51Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": null,
          "previewUrl": null,
          "utmCampaign": "shopify_abandoned_checkout_email-1519754247",
          "utmMedium": "email",
          "utmSource": "abandoned_cart",
          "description": null,
          "marketingChannelType": "EMAIL",
          "sourceAndMedium": "Abandoned cart email"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/216774463",
          "type": "NEWSLETTER",
          "remoteId": "333",
          "startedAt": "2024-11-17T20:47:51Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com/image.png",
          "utmCampaign": null,
          "utmMedium": null,
          "utmSource": null,
          "description": "External Marketing Activity Ad Group",
          "marketingChannelType": "DISPLAY",
          "sourceAndMedium": "Display newsletter"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/264437935",
          "type": "NEWSLETTER",
          "remoteId": "444",
          "startedAt": "2024-11-17T20:47:51Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": "https://example.com",
          "previewUrl": "https://example.com/image.png",
          "utmCampaign": null,
          "utmMedium": null,
          "utmSource": null,
          "description": "External Marketing Activity Ad",
          "marketingChannelType": "DISPLAY",
          "sourceAndMedium": "Display newsletter"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/283266064",
          "type": "AD",
          "remoteId": null,
          "startedAt": "2012-01-01T00:00:00Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": null,
          "previewUrl": null,
          "utmCampaign": "google-shopping-4",
          "utmMedium": "ad",
          "utmSource": "google",
          "description": "Marketing Activity 4 for Snowdevil",
          "marketingChannelType": "SEARCH",
          "sourceAndMedium": "Google ad"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MarketingEvent/325573600",
          "type": "POST",
          "remoteId": "1234:56779989",
          "startedAt": "2024-11-17T20:47:51Z",
          "endedAt": null,
          "scheduledToEndAt": null,
          "manageUrl": null,
          "previewUrl": null,
          "utmCampaign": "123456789000",
          "utmMedium": "facebook-post",
          "utmSource": "facebook",
          "description": null,
          "marketingChannelType": "SOCIAL",
          "sourceAndMedium": "Facebook post"
        }
      },
      {
        "node": {
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
    ],
    "pageInfo": {
      "hasNextPage": true,
      "endCursor": "eyJsYXN0X2lkIjo0MjUwMjU3MDIsImxhc3RfdmFsdWUiOiI0MjUwMjU3MDIifQ=="
    }
  }
}
``` 

Retrieves a list of all marketing events
----------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MarketingEventList%20%7B%0A%20%20marketingEvents(first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20remoteId%0A%20%20%20%20%20%20%20%20startedAt%0A%20%20%20%20%20%20%20%20endedAt%0A%20%20%20%20%20%20%20%20scheduledToEndAt%0A%20%20%20%20%20%20%20%20manageUrl%0A%20%20%20%20%20%20%20%20previewUrl%0A%20%20%20%20%20%20%20%20utmCampaign%0A%20%20%20%20%20%20%20%20utmMedium%0A%20%20%20%20%20%20%20%20utmSource%0A%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20marketingChannelType%0A%20%20%20%20%20%20%20%20sourceAndMedium%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%20%20endCursor%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MarketingEventList {

 marketingEvents(first: 10) {

 edges {

 node {

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

 pageInfo {

 hasNextPage

 endCursor

 }

 }

 }`,

);

const data=await response.json();

```
query MarketingEventList {
  marketingEvents(first: 10) {
    edges {
      node {
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
    pageInfo {
      hasNextPage
      endCursor
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
"query": "query MarketingEventList { marketingEvents(first: 10) { edges { node { id type remoteId startedAt endedAt scheduledToEndAt manageUrl previewUrl utmCampaign utmMedium utmSource description marketingChannelType sourceAndMedium } } pageInfo { hasNextPage endCursor } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MarketingEventList {
    marketingEvents(first: 10) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MarketingEventList {
    marketingEvents(first: 10) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
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
  query MarketingEventList {
    marketingEvents(first: 10) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
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

999

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

⌄

{

"marketingEvents": {

"edges": [

{

"node": {

"id": "gid://shopify/MarketingEvent/40997430",

"type": "AD",

"remoteId": "2345:6789",

"startedAt": "2012-01-01T00:00:00Z",

"endedAt": null,

"scheduledToEndAt": null,

"manageUrl": null,

"previewUrl": null,

"utmCampaign": "1234567899",

"utmMedium": "facebook-ad",

"utmSource": "facebook",

"description": null,

"marketingChannelType": "SOCIAL",

"sourceAndMedium": "Facebook ad"

}

},

{

"node": {

"id": "gid://shopify/MarketingEvent/56540067",

"type": "NEWSLETTER",

"remoteId": "222",

"startedAt": "2024-11-17T20:47:51Z",

"endedAt": null,

"scheduledToEndAt": null,

"manageUrl": "https://example.com",

"previewUrl": "https://example.com/image.png",

"utmCampaign": null,

"utmMedium": null,

"utmSource": null,

"description": "External Marketing Activity Campaign",

"marketingChannelType": "DISPLAY",


---
*Content truncated at "Updates" section*