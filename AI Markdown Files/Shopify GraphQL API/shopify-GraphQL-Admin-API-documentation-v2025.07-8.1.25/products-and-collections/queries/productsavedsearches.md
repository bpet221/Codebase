---
title: "productSavedSearches"
description: "Shopify GraphQL Admin API documentation for productsavedsearches"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productSavedSearches - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches

Markdown Content:
productSavedSearches - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#main-content)

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

[Anchor to productSavedSearches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#top)
product Saved Searches
======================

query

Requires `read_products` access scope.

Returns a list of the shop's product saved searches.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#arguments)
SavedSearchConnection arguments
-------------------------------

•[SavedSearchConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#returns-edges)edges

•[[Saved Search Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearchEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#returns-nodes)nodes

•[[Saved Search!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

non-null

A list of nodes that are contained in SavedSearchEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve the first three saved product searches

#### Description

Retrieve the first three saved product searches. A saved search is a specific search query that you can use to quickly find products. This example returns the first three saved product searches.

#### Query

```graphql
query {
  productSavedSearches(first: 3) {
    nodes {
      id
      legacyResourceId
      name
      filters {
        key
        value
      }
      query
      searchTerms
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
"query": "query { productSavedSearches(first: 3) { nodes { id legacyResourceId name filters { key value } query searchTerms } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productSavedSearches(first: 3) {
      nodes {
        id
        legacyResourceId
        name
        filters {
          key
          value
        }
        query
        searchTerms
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
    productSavedSearches(first: 3) {
      nodes {
        id
        legacyResourceId
        name
        filters {
          key
          value
        }
        query
        searchTerms
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
    productSavedSearches(first: 3) {
      nodes {
        id
        legacyResourceId
        name
        filters {
          key
          value
        }
        query
        searchTerms
      }
    }
  }`,
});
``` #### Response

```json
{
  "productSavedSearches": {
    "nodes": [
      {
        "id": "gid://shopify/SavedSearch/136409974",
        "legacyResourceId": "136409974",
        "name": "Foo Products",
        "filters": [],
        "query": "foo",
        "searchTerms": "foo"
      },
      {
        "id": "gid://shopify/SavedSearch/1068136123",
        "legacyResourceId": "1068136123",
        "name": "Drafts",
        "filters": [
          {
            "key": "status",
            "value": "DRAFT"
          }
        ],
        "query": "status:\"DRAFT\"",
        "searchTerms": ""
      },
      {
        "id": "gid://shopify/SavedSearch/1068136124",
        "legacyResourceId": "1068136124",
        "name": "Products from Vendor X",
        "filters": [
          {
            "key": "vendor",
            "value": "Vendor X"
          }
        ],
        "query": "vendor:\"Vendor X\"",
        "searchTerms": ""
      }
    ]
  }
}
``` 

Retrieve the first three saved product searches
-----------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20productSavedSearches(first%3A%203)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20legacyResourceId%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20filters%20%7B%0A%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20query%0A%20%20%20%20%20%20searchTerms%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 productSavedSearches(first: 3) {

 nodes {

 id

 legacyResourceId

 name

 filters {

 key

 value

 }

 query

 searchTerms

 }

 }

 }`,

);

const data=await response.json();

```
query {
  productSavedSearches(first: 3) {
    nodes {
      id
      legacyResourceId
      name
      filters {
        key
        value
      }
      query
      searchTerms
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
"query": "query { productSavedSearches(first: 3) { nodes { id legacyResourceId name filters { key value } query searchTerms } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    productSavedSearches(first: 3) {
      nodes {
        id
        legacyResourceId
        name
        filters {
          key
          value
        }
        query
        searchTerms
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
    productSavedSearches(first: 3) {
      nodes {
        id
        legacyResourceId
        name
        filters {
          key
          value
        }
        query
        searchTerms
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
    productSavedSearches(first: 3) {
      nodes {
        id
        legacyResourceId
        name
        filters {
          key
          value
        }
        query
        searchTerms
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

{

"productSavedSearches": {

"nodes": [

{

"id": "gid://shopify/SavedSearch/136409974",

"legacyResourceId": "136409974",

"name": "Foo Products",

"filters": [],

"query": "foo",

"searchTerms": "foo"

},

{

"id": "gid://shopify/SavedSearch/1068136123",

"legacyResourceId": "1068136123",

"name": "Drafts",

"filters": [

{

"key": "status",

"value": "DRAFT"

}

],

"query": "status:\"DRAFT\"",

"searchTerms": ""

},

{

"id": "gid://shopify/SavedSearch/1068136124",

"legacyResourceId": "1068136124",

"name": "Products from Vendor X",

"filters": [

{

"key": "vendor",

"value": "Vendor X"

}

],

"query": "vendor:\"Vendor X\"",

"searchTerms": ""


---
*Content truncated at "Updates" section*