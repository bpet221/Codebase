---
title: "subscriptionBillingCycleBulkResults"
description: "Shopify GraphQL Admin API documentation for subscriptionbillingcyclebulkresults"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: subscriptionBillingCycleBulkResults - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults

Markdown Content:
subscriptionBillingCycleBulkResults - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#main-content)

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
*   
Orders

    *   
Queries

        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)
        *   [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)
        *   [returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment)
        *   [returnable Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillments)
        *   [return Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returncalculate)
        *   [reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversedelivery)
        *   [reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversefulfillmentorder)
        *   [subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt)
        *   [subscription Billing Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempts)
        *   [subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycle)
        *   [subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults)
        *   [subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycles)
        *   [subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract)
        *   [subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontracts)
        *   [subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptiondraft)
        *   [tender Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions)

    *   Mutations   
    *   Objects   

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

[Anchor to subscriptionBillingCycleBulkResults](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#top)
subscription Billing Cycle Bulk Results
=======================================

query

Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID. This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments)
SubscriptionBillingCycleConnection arguments
--------------------------------------------

•[SubscriptionBillingCycleConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to jobId](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments-jobId)job Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the billing cycle bulk operation job.

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#returns-edges)edges

•[[Subscription Billing Cycle Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#returns-nodes)nodes

•[[Subscription Billing Cycle!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

non-null

A list of nodes that are contained in SubscriptionBillingCycleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the list of the billing cycles targeted as part of the bulk action

#### Description

Retrieves a list containing the cycleIndex of the billing cycles targeted as part of the bulk action using the informed job id.

#### Query

```graphql
query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
  subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
    pageInfo {
      startCursor
      endCursor
    }
    edges {
      node {
        cycleIndex
      }
    }
  }
}
``` #### Variables

```json
{
  "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
  "first": 3
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) { subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) { pageInfo { startCursor endCursor } edges { node { cycleIndex } } } }",
 "variables": {
    "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
    "first": 3
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
    subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
          cycleIndex
        }
      }
    }
  }`,
  {
    variables: {
        "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
        "first": 3
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
  query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
    subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
          cycleIndex
        }
      }
    }
  }
QUERY

variables = {
  "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
  "first": 3
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
      subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            cycleIndex
          }
        }
      }
    }`,
    "variables": {
        "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
        "first": 3
    },
  },
});
``` #### Response

```json
{
  "subscriptionBillingCycleBulkResults": {
    "pageInfo": {
      "startCursor": "eyJsYXN0X2lkIjoyMzIzNzkyMjUsImxhc3RfdmFsdWUiOiIyMzIzNzkyMjUifQ==",
      "endCursor": "eyJsYXN0X2lkIjoyMzIzNzkyMjUsImxhc3RfdmFsdWUiOiIyMzIzNzkyMjUifQ=="
    },
    "edges": [
      {
        "node": {
          "cycleIndex": 1
        }
      }
    ]
  }
}
``` 

Get the list of the billing cycles targeted as part of the bulk action
----------------------------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20SubscriptionBillingCycleBulkResults(%24jobId%3A%20ID!%2C%20%24first%3A%20Int!%2C%20%24after%3A%20String)%20%7B%0A%20%20subscriptionBillingCycleBulkResults(first%3A%20%24first%2C%20after%3A%20%24after%2C%20jobId%3A%20%24jobId)%20%7B%0A%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20startCursor%0A%20%20%20%20%20%20endCursor%0A%20%20%20%20%7D%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20cycleIndex%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22jobId%22%3A%20%22gid%3A%2F%2Fshopify%2FJob%2F0faf9493-b523-4c92-8e6e-59139254b03b%22%2C%0A%20%20%22first%22%3A%203%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {

 subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {

 pageInfo {

 startCursor

 endCursor

 }

 edges {

 node {

 cycleIndex

 }

 }

 }

 }`,

{

variables:{

"jobId":"gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",

"first":3

},

},

);

const data=await response.json();

```
query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
  subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
    pageInfo {
      startCursor
      endCursor
    }
    edges {
      node {
        cycleIndex
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
"query": "query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) { subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) { pageInfo { startCursor endCursor } edges { node { cycleIndex } } } }",
 "variables": {
    "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
    "first": 3
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
    subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
          cycleIndex
        }
      }
    }
  }`,
  {
    variables: {
        "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
        "first": 3
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
      subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            cycleIndex
          }
        }
      }
    }`,
    "variables": {
        "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
        "first": 3
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
  query SubscriptionBillingCycleBulkResults($jobId: ID!, $first: Int!, $after: String) {
    subscriptionBillingCycleBulkResults(first: $first, after: $after, jobId: $jobId) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
          cycleIndex
        }
      }
    }
  }
QUERY

variables = {
  "jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",
  "first": 3
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

›

⌄

{

"jobId": "gid://shopify/Job/0faf9493-b523-4c92-8e6e-59139254b03b",

"first": 3

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"subscriptionBillingCycleBulkResults": {

"pageInfo": {

"startCursor": "eyJsYXN0X2lkIjoyMzIzNzkyMjUsImxhc3RfdmFsdWUiOiIyMzIzNzkyMjUifQ==",

"endCursor": "eyJsYXN0X2lkIjoyMzIzNzkyMjUsImxhc3RfdmFsdWUiOiIyMzIzNzkyMjUifQ=="

},

"edges": [

{

"node": {

"cycleIndex": 1

}

}

]

}

}


---
*Content truncated at "Updates" section*