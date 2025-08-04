---
title: "priceLists"
description: "Shopify GraphQL Admin API documentation for pricelists"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: priceLists - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists

Markdown Content:
priceLists - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#main-content)

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
*   
Products and collections

    *   
Queries

        *   [catalog](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog)
        *   [catalog Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogoperations)
        *   [catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)
        *   [catalogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogscount)
        *   [collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection)
        *   [collection By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle)
        *   [collection By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier)
        *   [collection Rules Conditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions)
        *   [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)
        *   [collection Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsavedsearches)
        *   [collections Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount)
        *   [files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)
        *   [file Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/filesavedsearches)
        *   [price List](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist)
        *   [price Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists)
        *   [product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product)
        *   [product By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle)
        *   [product By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier)
        *   [product Duplicate Job](https://shopify.dev/docs/api/admin-graphql/latest/queries/productduplicatejob)
        *   [product Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation)
        *   [product Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/queries/productresourcefeedback)
        *   [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)
        *   [product Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches)
        *   [products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount)
        *   [product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant)
        *   [product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantbyidentifier)
        *   [product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants)
        *   [product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantscount)
        *   [selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroup)
        *   [selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroups)
        *   [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)

    *   Mutations   
    *   Objects   

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

[Anchor to priceLists](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#top)
price Lists
===========

query

All price lists for a shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments)
PriceListConnection arguments
-----------------------------

•[PriceListConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#arguments-sortKey)sort Key

•[Price List Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#returns-edges)edges

•[[Price List Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#returns-nodes)nodes

•[[Price List!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

non-null

A list of nodes that are contained in PriceListEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve price list in reversed order

#### Description

Fetch the first price list and return the ID, currency, fixed prices count and catalog information

#### Query

```graphql
query {
  priceLists(first: 1, reverse: true) {
    nodes {
      id
      currency
      fixedPricesCount
      catalog {
        id
        title
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
"query": "query { priceLists(first: 1, reverse: true) { nodes { id currency fixedPricesCount catalog { id title } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceLists(first: 1, reverse: true) {
      nodes {
        id
        currency
        fixedPricesCount
        catalog {
          id
          title
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
    priceLists(first: 1, reverse: true) {
      nodes {
        id
        currency
        fixedPricesCount
        catalog {
          id
          title
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
    priceLists(first: 1, reverse: true) {
      nodes {
        id
        currency
        fixedPricesCount
        catalog {
          id
          title
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "priceLists": {
    "nodes": [
      {
        "id": "gid://shopify/PriceList/1014716632",
        "currency": "USD",
        "fixedPricesCount": 0,
        "catalog": null
      }
    ]
  }
}
``` 
*   ### Retrieve the ID, name, currency and quantity rules information

#### Description

Fetch the first price list and retrieves the ID, currency, and fetches the first three fixed quantity rules associated with that price list, including the increment, maximum, minimum values for each rule, and the product variant it is on.

#### Query

```graphql
query {
  priceLists(first: 1) {
    nodes {
      id
      name
      currency
      quantityRules(first: 3, originType: FIXED) {
        nodes {
          increment
          maximum
          minimum
          productVariant {
            id
            title
          }
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
"query": "query { priceLists(first: 1) { nodes { id name currency quantityRules(first: 3, originType: FIXED) { nodes { increment maximum minimum productVariant { id title } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceLists(first: 1) {
      nodes {
        id
        name
        currency
        quantityRules(first: 3, originType: FIXED) {
          nodes {
            increment
            maximum
            minimum
            productVariant {
              id
              title
            }
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
    priceLists(first: 1) {
      nodes {
        id
        name
        currency
        quantityRules(first: 3, originType: FIXED) {
          nodes {
            increment
            maximum
            minimum
            productVariant {
              id
              title
            }
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
    priceLists(first: 1) {
      nodes {
        id
        name
        currency
        quantityRules(first: 3, originType: FIXED) {
          nodes {
            increment
            maximum
            minimum
            productVariant {
              id
              title
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "priceLists": {
    "nodes": [
      {
        "id": "gid://shopify/PriceList/225060712",
        "name": "price_list_with_quantity_rules",
        "currency": "USD",
        "quantityRules": {
          "nodes": [
            {
              "increment": 100,
              "maximum": 5000,
              "minimum": 500,
              "productVariant": {
                "id": "gid://shopify/ProductVariant/43729076",
                "title": "151cm"
              }
            },
            {
              "increment": 10,
              "maximum": 1000,
              "minimum": 100,
              "productVariant": {
                "id": "gid://shopify/ProductVariant/138327650",
                "title": "Default"
              }
            },
            {
              "increment": 5,
              "maximum": null,
              "minimum": 10,
              "productVariant": {
                "id": "gid://shopify/ProductVariant/389013007",
                "title": "Small"
              }
            }
          ]
        }
      }
    ]
  }
}
``` 
*   ### Retrieve the first two price lists

#### Description

Fetches the first two price lists. For each price list, it retrieves the ID, name, currency, and the count of fixed prices. It also fetches the adjustment type and value of the price list.

#### Query

```graphql
query {
  priceLists(first: 2) {
    edges {
      node {
        id
        name
        currency
        fixedPricesCount
        parent {
          adjustment {
            type
            value
          }
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
"query": "query { priceLists(first: 2) { edges { node { id name currency fixedPricesCount parent { adjustment { type value } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceLists(first: 2) {
      edges {
        node {
          id
          name
          currency
          fixedPricesCount
          parent {
            adjustment {
              type
              value
            }
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
    priceLists(first: 2) {
      edges {
        node {
          id
          name
          currency
          fixedPricesCount
          parent {
            adjustment {
              type
              value
            }
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
    priceLists(first: 2) {
      edges {
        node {
          id
          name
          currency
          fixedPricesCount
          parent {
            adjustment {
              type
              value
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "priceLists": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/PriceList/11668351",
          "name": "location_price_list",
          "currency": "USD",
          "fixedPricesCount": 0,
          "parent": {
            "adjustment": {
              "type": "PERCENTAGE_DECREASE",
              "value": 50
            }
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/PriceList/36142538",
          "name": "relative_pricelist_nullify",
          "currency": "CAD",
          "fixedPricesCount": 0,
          "parent": {
            "adjustment": {
              "type": "PERCENTAGE_DECREASE",
              "value": 5
            }
          }
        }
      }
    ]
  }
}
``` 

Examples
--------

Retrieve price list in reversed order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20priceLists(first%3A%201%2C%20reverse%3A%20true)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20currency%0A%20%20%20%20%20%20fixedPricesCount%0A%20%20%20%20%20%20catalog%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 priceLists(first: 1, reverse: true) {

 nodes {

 id

 currency

 fixedPricesCount

 catalog {

 id

 title

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  priceLists(first: 1, reverse: true) {
    nodes {
      id
      currency
      fixedPricesCount
      catalog {
        id
        title
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
"query": "query { priceLists(first: 1, reverse: true) { nodes { id currency fixedPricesCount catalog { id title } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    priceLists(first: 1, reverse: true) {
      nodes {
        id
        currency
        fixedPricesCount
        catalog {
          id
          title
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
    priceLists(first: 1, reverse: true) {
      nodes {
        id
        currency
        fixedPricesCount
        catalog {
          id
          title
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
    priceLists(first: 1, reverse: true) {
      nodes {
        id
        currency
        fixedPricesCount
        catalog {
          id
          title
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

›

⌄

⌄

⌄

⌄

{

"priceLists": {

"nodes": [

{

"id": "gid://shopify/PriceList/1014716632",

"currency": "USD",

"fixedPricesCount": 0,

"catalog": null

}

]

}

}


---
*Content truncated at "Updates" section*