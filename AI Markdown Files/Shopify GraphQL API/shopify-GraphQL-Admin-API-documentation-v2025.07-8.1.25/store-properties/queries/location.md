---
title: "location"
description: "Shopify GraphQL Admin API documentation for location"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/location"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: location - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/location

Markdown Content:
location - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/location#main-content)

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
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store Properties

    *   
Queries

        *   [business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentities)
        *   [business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentity)
        *   [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)
        *   [location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier)
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

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location#top)
location
========

query

Returns an inventory Location resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/location#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/location#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the location to return. If no ID is provided, the primary location of the Shop is returned.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/location#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location#returns-Location)Location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

Represents the location where the physical good resides. You can stock inventory at active locations. Active locations that have `fulfills_online_orders: true` and are configured with a shipping rate, pickup enabled or local delivery will be able to sell from their storefront.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a metafield attached to a location

#### Description

Get the metafield value identified by `my_fields.hours` on a specific location.

#### Query

```graphql
query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  location(id: $ownerId) {
    hours: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "hours",
  "ownerId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) { location(id: $ownerId) { hours: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "hours",
    "ownerId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    location(id: $ownerId) {
      hours: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "hours",
        "ownerId": "gid://shopify/Location/346779380"
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
  query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    location(id: $ownerId) {
      hours: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "hours",
  "ownerId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      location(id: $ownerId) {
        hours: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "hours",
        "ownerId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "location": {
    "hours": {
      "value": "Open daily 9AM-5PM"
    }
  }
}
``` 
*   ### Get metafields attached to a location

#### Description

Get a page of metafields attached to a specific location.

#### Query

```graphql
query LocationMetafields($ownerId: ID!) {
  location(id: $ownerId) {
    metafields(first: 3) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationMetafields($ownerId: ID!) { location(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationMetafields($ownerId: ID!) {
    location(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }`,
  {
    variables: {
        "ownerId": "gid://shopify/Location/346779380"
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
  query LocationMetafields($ownerId: ID!) {
    location(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }
QUERY

variables = {
  "ownerId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationMetafields($ownerId: ID!) {
      location(id: $ownerId) {
        metafields(first: 3) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }`,
    "variables": {
        "ownerId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "location": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "hours",
            "value": "Open daily 9AM-5PM"
          }
        }
      ]
    }
  }
}
``` 
*   ### Get pinned metafield definitions associated with a location

#### Description

Get names and types of the first page of pinned metafield definitions associated with a location.

#### Query

```graphql
query LocationMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
  location(id: $ownerId) {
    metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
      edges {
        node {
          name
          namespace
          key
          type {
            name
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "pinnedStatus": "PINNED",
  "ownerId": "gid://shopify/Location/346779380",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) { location(id: $ownerId) { metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) { edges { node { name namespace key type { name } } } } } }",
 "variables": {
    "pinnedStatus": "PINNED",
    "ownerId": "gid://shopify/Location/346779380",
    "first": 10,
    "sortKey": "PINNED_POSITION"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    location(id: $ownerId) {
      metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
        edges {
          node {
            name
            namespace
            key
            type {
              name
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "pinnedStatus": "PINNED",
        "ownerId": "gid://shopify/Location/346779380",
        "first": 10,
        "sortKey": "PINNED_POSITION"
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
  query LocationMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    location(id: $ownerId) {
      metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
        edges {
          node {
            name
            namespace
            key
            type {
              name
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "pinnedStatus": "PINNED",
  "ownerId": "gid://shopify/Location/346779380",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
      location(id: $ownerId) {
        metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
          edges {
            node {
              name
              namespace
              key
              type {
                name
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "pinnedStatus": "PINNED",
        "ownerId": "gid://shopify/Location/346779380",
        "first": 10,
        "sortKey": "PINNED_POSITION"
    },
  },
});
``` #### Response

```json
{
  "location": {
    "metafieldDefinitions": {
      "edges": [
        {
          "node": {
            "name": "Additional Notes",
            "namespace": "my_fields",
            "key": "notes",
            "type": {
              "name": "single_line_text_field"
            }
          }
        },
        {
          "node": {
            "name": "Operating Since",
            "namespace": "my_fields",
            "key": "operating_since",
            "type": {
              "name": "date"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a list of inventory levels for a location

#### Query

```graphql
query LocationInventoryLevelList($id: ID!) {
  location(id: $id) {
    inventoryLevels(first: 10) {
      nodes {
        item {
          id
        }
        location {
          id
        }
        quantities(names: ["available"]) {
          name
          quantity
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationInventoryLevelList($id: ID!) { location(id: $id) { inventoryLevels(first: 10) { nodes { item { id } location { id } quantities(names: [\"available\"]) { name quantity } } } } }",
 "variables": {
    "id": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationInventoryLevelList($id: ID!) {
    location(id: $id) {
      inventoryLevels(first: 10) {
        nodes {
          item {
            id
          }
          location {
            id
          }
          quantities(names: ["available"]) {
            name
            quantity
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Location/346779380"
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
  query LocationInventoryLevelList($id: ID!) {
    location(id: $id) {
      inventoryLevels(first: 10) {
        nodes {
          item {
            id
          }
          location {
            id
          }
          quantities(names: ["available"]) {
            name
            quantity
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationInventoryLevelList($id: ID!) {
      location(id: $id) {
        inventoryLevels(first: 10) {
          nodes {
            item {
              id
            }
            location {
              id
            }
            quantities(names: ["available"]) {
              name
              quantity
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "location": {
    "inventoryLevels": {
      "nodes": [
        {
          "item": {
            "id": "gid://shopify/InventoryItem/113711323"
          },
          "location": {
            "id": "gid://shopify/Location/346779380"
          },
          "quantities": [
            {
              "name": "available",
              "quantity": 8
            }
          ]
        },
        {
          "item": {
            "id": "gid://shopify/InventoryItem/30322695"
          },
          "location": {
            "id": "gid://shopify/Location/346779380"
          },
          "quantities": [
            {
              "name": "available",
              "quantity": 2
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Retrieve a single location by its ID

#### Query

```graphql
query LocationShow($id: ID!) {
  location(id: $id) {
    id
    name
    fulfillmentService {
      handle
    }
    address {
      address1
      address2
      city
      country
      countryCode
      province
      provinceCode
      zip
    }
    fulfillsOnlineOrders
    hasActiveInventory
    isActive
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationShow($id: ID!) { location(id: $id) { id name fulfillmentService { handle } address { address1 address2 city country countryCode province provinceCode zip } fulfillsOnlineOrders hasActiveInventory isActive } }",
 "variables": {
    "id": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationShow($id: ID!) {
    location(id: $id) {
      id
      name
      fulfillmentService {
        handle
      }
      address {
        address1
        address2
        city
        country
        countryCode
        province
        provinceCode
        zip
      }
      fulfillsOnlineOrders
      hasActiveInventory
      isActive
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Location/346779380"
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
  query LocationShow($id: ID!) {
    location(id: $id) {
      id
      name
      fulfillmentService {
        handle
      }
      address {
        address1
        address2
        city
        country
        countryCode
        province
        provinceCode
        zip
      }
      fulfillsOnlineOrders
      hasActiveInventory
      isActive
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationShow($id: ID!) {
      location(id: $id) {
        id
        name
        fulfillmentService {
          handle
        }
        address {
          address1
          address2
          city
          country
          countryCode
          province
          provinceCode
          zip
        }
        fulfillsOnlineOrders
        hasActiveInventory
        isActive
      }
    }`,
    "variables": {
        "id": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "location": {
    "id": "gid://shopify/Location/346779380",
    "name": "Ottawa Store",
    "fulfillmentService": null,
    "address": {
      "address1": "126 york street",
      "address2": "second and third floor",
      "city": "ottawa",
      "country": "Canada",
      "countryCode": "CA",
      "province": "Ontario",
      "provinceCode": "ON",
      "zip": "k1n5t5"
    },
    "fulfillsOnlineOrders": true,
    "hasActiveInventory": true,
    "isActive": true
  }
}
``` 
*   ### Returns a Location resource by ID

#### Description

The following query retrieves the location with the associated ID. It returns the location fields specified in the query.

#### Query

```graphql
query {
  location(id: "gid://shopify/Location/346779380") {
    id
    name
    address {
      formatted
    }
    deactivatable
    fulfillsOnlineOrders
    hasActiveInventory
    isActive
    shipsInventory
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { location(id: \"gid://shopify/Location/346779380\") { id name address { formatted } deactivatable fulfillsOnlineOrders hasActiveInventory isActive shipsInventory } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    location(id: "gid://shopify/Location/346779380") {
      id
      name
      address {
        formatted
      }
      deactivatable
      fulfillsOnlineOrders
      hasActiveInventory
      isActive
      shipsInventory
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
    location(id: "gid://shopify/Location/346779380") {
      id
      name
      address {
        formatted
      }
      deactivatable
      fulfillsOnlineOrders
      hasActiveInventory
      isActive
      shipsInventory
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    location(id: "gid://shopify/Location/346779380") {
      id
      name
      address {
        formatted
      }
      deactivatable
      fulfillsOnlineOrders
      hasActiveInventory
      isActive
      shipsInventory
    }
  }`,
});
``` #### Response

```json
{
  "location": {
    "id": "gid://shopify/Location/346779380",
    "name": "Ottawa Store",
    "address": {
      "formatted": [
        "126 york street",
        "second and third floor",
        "ottawa ON k1n5t5",
        "Canada"
      ]
    },
    "deactivatable": true,
    "fulfillsOnlineOrders": true,
    "hasActiveInventory": true,
    "isActive": true,
    "shipsInventory": false
  }
}
``` 

Examples
--------

Get a metafield attached to a location

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20LocationMetafield(%24namespace%3A%20String!%2C%20%24key%3A%20String!%2C%20%24ownerId%3A%20ID!)%20%7B%0A%20%20location(id%3A%20%24ownerId)%20%7B%0A%20%20%20%20hours%3A%20metafield(namespace%3A%20%24namespace%2C%20key%3A%20%24key)%20%7B%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22namespace%22%3A%20%22my_fields%22%2C%0A%20%20%22key%22%3A%20%22hours%22%2C%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F346779380%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {

 location(id: $ownerId) {

 hours: metafield(namespace: $namespace, key: $key) {

 value

 }

 }

 }`,

{

variables:{

"namespace":"my_fields",

"key":"hours",

"ownerId":"gid://shopify/Location/346779380"

},

},

);

const data=await response.json();

```
query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  location(id: $ownerId) {
    hours: metafield(namespace: $namespace, key: $key) {
      value
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
"query": "query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) { location(id: $ownerId) { hours: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "hours",
    "ownerId": "gid://shopify/Location/346779380"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    location(id: $ownerId) {
      hours: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "hours",
        "ownerId": "gid://shopify/Location/346779380"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      location(id: $ownerId) {
        hours: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "hours",
        "ownerId": "gid://shopify/Location/346779380"
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
  query LocationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    location(id: $ownerId) {
      hours: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "hours",
  "ownerId": "gid://shopify/Location/346779380"
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

›

⌄

{

"namespace": "my_fields",

"key": "hours",

"ownerId": "gid://shopify/Location/346779380"

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

›

⌄

⌄

⌄

{

"location": {

"hours": {

"value": "Open daily 9AM-5PM"

}

}

}


---
*Content truncated at "Updates" section*