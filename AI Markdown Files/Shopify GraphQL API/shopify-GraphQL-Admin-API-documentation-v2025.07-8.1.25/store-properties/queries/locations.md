---
title: "locations"
description: "Shopify GraphQL Admin API documentation for locations"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/locations"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locations - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/locations

Markdown Content:
locations - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#main-content)

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
*   Discounts and marketing   
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
*   
Store properties

    *   
Queries

        *   [business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentities)
        *   [business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentity)
        *   [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)
        *   [location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier)
        *   [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)
        *   [locations Available For Delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofiles)
        *   [locations Available For Delivery Profiles Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsavailablefordeliveryprofilesconnection)
        *   [locations Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount)
        *   [shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop)

    *   Mutations   
    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#top)
locations
=========

query

Returns a list of active inventory locations.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments)
LocationConnection arguments
----------------------------

•[LocationConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to includeInactive](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeInactive)include Inactive

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether to include the locations that are deactivated.

[Anchor to includeLegacy](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeLegacy)include Legacy

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether to include the legacy locations of fulfillment services.

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-active)active

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-address1)address1

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-address2)address2

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-city)city

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-country)country

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-geolocated)geolocated

•boolean

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-legacy)legacy

•boolean

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-location_id)location_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-name)name

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-pickup_in_store)pickup_in_store

•string

Valid values:

*   `enabled`
*   `disabled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-province)province

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#argument-query-filter-zip)zip

•string

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-sortKey)sort Key

•[Location Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationSortKeys)

Default:NAME

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#returns-edges)edges

•[[Location Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#returns-nodes)nodes

•[[Location!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

non-null

A list of nodes that are contained in LocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of locations

#### Description

Retrieves the first 5 locations.

#### Query

```graphql
query {
  locations(first: 5) {
    edges {
      node {
        id
        name
        address {
          formatted
        }
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
"query": "query { locations(first: 5) { edges { node { id name address { formatted } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    locations(first: 5) {
      edges {
        node {
          id
          name
          address {
            formatted
          }
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
  query {
    locations(first: 5) {
      edges {
        node {
          id
          name
          address {
            formatted
          }
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
  data: `query {
    locations(first: 5) {
      edges {
        node {
          id
          name
          address {
            formatted
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "locations": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/Location/346779380",
          "name": "Ottawa Store",
          "address": {
            "formatted": [
              "126 york street",
              "second and third floor",
              "ottawa ON k1n5t5",
              "Canada"
            ]
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Location/648019273",
          "name": "Ottawa Store geo located",
          "address": {
            "formatted": [
              "126 york street",
              "second and third floor",
              "ottawa ON k1n5t5",
              "Canada"
            ]
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Location/884687543",
          "name": "Ottawa Warehouse",
          "address": {
            "formatted": [
              "Canada"
            ]
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Location/124656943",
          "name": "Shipping Origin",
          "address": {
            "formatted": [
              "190 MacLaren Street",
              "Ottawa ON K2P 0L6",
              "Canada"
            ]
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/Location/750123840",
          "name": "Toronto Store",
          "address": {
            "formatted": [
              "620 King St. W",
              "toronto ON m5v1m5",
              "Canada"
            ]
          }
        }
      }
    ]
  }
}
``` 

Retrieve a list of locations
----------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20locations(first%3A%205)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20address%20%7B%0A%20%20%20%20%20%20%20%20%20%20formatted%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query {

 locations(first: 5) {

 edges {

 node {

 id

 name

 address {

 formatted

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  locations(first: 5) {
    edges {
      node {
        id
        name
        address {
          formatted
        }
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
"query": "query { locations(first: 5) { edges { node { id name address { formatted } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    locations(first: 5) {
      edges {
        node {
          id
          name
          address {
            formatted
          }
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
  data: `query {
    locations(first: 5) {
      edges {
        node {
          id
          name
          address {
            formatted
          }
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
  query {
    locations(first: 5) {
      edges {
        node {
          id
          name
          address {
            formatted
          }
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

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"locations": {

"edges": [

{

"node": {

"id": "gid://shopify/Location/346779380",

"name": "Ottawa Store",

"address": {

"formatted": [

"126 york street",

"second and third floor",

"ottawa ON k1n5t5",

"Canada"

]

}

}

},

{

"node": {

"id": "gid://shopify/Location/648019273",

"name": "Ottawa Store geo located",

"address": {

"formatted": [

"126 york street",

"second and third floor",

"ottawa ON k1n5t5",

"Canada"

]

}

}

},

{

"node": {

"id": "gid://shopify/Location/884687543",

"name": "Ottawa Warehouse",

"address": {


---
*Content truncated at "Updates" section*