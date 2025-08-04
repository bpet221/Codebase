---
title: "carrierServices"
description: "Shopify GraphQL Admin API documentation for carrierservices"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: carrierServices - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices

Markdown Content:
carrierServices - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#main-content)

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
*   
Shipping And Fulfillment

    *   
Queries

        *   [assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders)
        *   [available Carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablecarrierservices)
        *   [carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice)
        *   [carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices)
        *   [delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomization)
        *   [delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomizations)
        *   [delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofile)
        *   [delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles)
        *   [delivery Promise Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseparticipants)
        *   [delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseprovider)
        *   [delivery Promise Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromisesettings)
        *   [delivery Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverysettings)
        *   [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)
        *   [fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder)
        *   [fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorders)
        *   [fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice)
        *   [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)
        *   [locations Available For Delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles)
        *   [locations Available For Delivery Profiles Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection)
        *   [locations Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount)
        *   [manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualholdsfulfillmentorders)

    *   Mutations   
    *   Objects   

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

[Anchor to carrierServices](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#top)
carrier Services
================

query

Requires `read_shipping` access scope.

Retrieve a list of CarrierServices.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments)
DeliveryCarrierServiceConnection arguments
------------------------------------------

•[DeliveryCarrierServiceConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#argument-query-filter-active)active

•boolean

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#arguments-sortKey)sort Key

•[Carrier Service Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#returns-edges)edges

•[[Delivery Carrier Service Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#returns-nodes)nodes

•[[Delivery Carrier Service!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

non-null

A list of nodes that are contained in DeliveryCarrierServiceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of CarrierServices

#### Query

```graphql
query CarrierServiceList {
  carrierServices(first: 10, query: "active:true") {
    edges {
      node {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
      }
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
"query": "query CarrierServiceList { carrierServices(first: 10, query: \"active:true\") { edges { node { id name callbackUrl active supportsServiceDiscovery } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CarrierServiceList {
    carrierServices(first: 10, query: "active:true") {
      edges {
        node {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
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
  query CarrierServiceList {
    carrierServices(first: 10, query: "active:true") {
      edges {
        node {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CarrierServiceList {
    carrierServices(first: 10, query: "active:true") {
      edges {
        node {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "carrierServices": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DeliveryCarrierService/1036895101",
          "name": "test name",
          "callbackUrl": null,
          "active": true,
          "supportsServiceDiscovery": false
        }
      }
    ]
  }
}
``` 

Retrieve a list of CarrierServices
----------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CarrierServiceList%20%7B%0A%20%20carrierServices(first%3A%2010%2C%20query%3A%20%22active%3Atrue%22)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20callbackUrl%0A%20%20%20%20%20%20%20%20active%0A%20%20%20%20%20%20%20%20supportsServiceDiscovery%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query CarrierServiceList {

 carrierServices(first: 10, query: "active:true") {

 edges {

 node {

 id

 name

 callbackUrl

 active

 supportsServiceDiscovery

 }

 }

 }

 }`,

);

const data=await response.json();

```
query CarrierServiceList {
  carrierServices(first: 10, query: "active:true") {
    edges {
      node {
        id
        name
        callbackUrl
        active
        supportsServiceDiscovery
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
"query": "query CarrierServiceList { carrierServices(first: 10, query: \"active:true\") { edges { node { id name callbackUrl active supportsServiceDiscovery } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CarrierServiceList {
    carrierServices(first: 10, query: "active:true") {
      edges {
        node {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CarrierServiceList {
    carrierServices(first: 10, query: "active:true") {
      edges {
        node {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
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
  query CarrierServiceList {
    carrierServices(first: 10, query: "active:true") {
      edges {
        node {
          id
          name
          callbackUrl
          active
          supportsServiceDiscovery
        }
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

{

"carrierServices": {

"edges": [

{

"node": {

"id": "gid://shopify/DeliveryCarrierService/1036895101",

"name": "test name",

"callbackUrl": null,

"active": true,

"supportsServiceDiscovery": false

}

}

]

}

}


---
*Content truncated at "Updates" section*