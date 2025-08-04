---
title: "translatableResources"
description: "Shopify GraphQL Admin API documentation for translatableresources"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources"
extraction_method: "jina"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: translatableResources - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources

Markdown Content:
translatableResources - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#main-content)

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
*   
Localizations

    *   
Queries

        *   [available Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales)
        *   [market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource)
        *   [market Localizable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources)
        *   [market Localizable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresourcesbyids)
        *   [shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales)
        *   [translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources)

    *   Mutations   
    *   Objects   

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

[Anchor to translatableResources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#top)
translatable Resources
======================

query

Requires `read_translations` access scope.

Resources that can have localized values for different languages.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments)
TranslatableResourceConnection arguments
----------------------------------------

•[TranslatableResourceConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to resourceType](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments-resourceType)resource Type

•[Translatable Resource Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType)

required

Return only resources of a type.

Show enum values

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#returns-edges)edges

•[[Translatable Resource Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#returns-nodes)nodes

•[[Translatable Resource!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource)

non-null

A list of nodes that are contained in TranslatableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve translatable content for the first 5 products

#### Description

Use this query as part of preparing to register translations. The `digest` value is required as an input argument when registering a translation.

#### Query

```graphql
query {
  translatableResources(first: 5, resourceType: PRODUCT) {
    edges {
      node {
        resourceId
        translatableContent {
          key
          value
          digest
          locale
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
"query": "query { translatableResources(first: 5, resourceType: PRODUCT) { edges { node { resourceId translatableContent { key value digest locale } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    translatableResources(first: 5, resourceType: PRODUCT) {
      edges {
        node {
          resourceId
          translatableContent {
            key
            value
            digest
            locale
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
    translatableResources(first: 5, resourceType: PRODUCT) {
      edges {
        node {
          resourceId
          translatableContent {
            key
            value
            digest
            locale
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
    translatableResources(first: 5, resourceType: PRODUCT) {
      edges {
        node {
          resourceId
          translatableContent {
            key
            value
            digest
            locale
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "translatableResources": {
    "edges": [
      {
        "node": {
          "resourceId": "gid://shopify/Product/20995642",
          "translatableContent": [
            {
              "key": "title",
              "value": "Element",
              "digest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
              "locale": "en"
            },
            {
              "key": "body_html",
              "value": "<p>bad board</p>",
              "digest": "60cd8aaeeec8e14d9da0dd1ed4cff31c0bb8f9c64255adad9dc1d2140c472f3b",
              "locale": "en"
            },
            {
              "key": "handle",
              "value": "element",
              "digest": "445929267209c034d1e324834c17e0c8305df3dcb21d1710a639ac6ca08c648b",
              "locale": "en"
            },
            {
              "key": "product_type",
              "value": "Snowboards",
              "digest": "3c752b33c3546064f02d47978a3883019e5bef320ddbc48875318b8d76c6154b",
              "locale": "en"
            }
          ]
        }
      },
      {
        "node": {
          "resourceId": "gid://shopify/Product/108828309",
          "translatableContent": [
            {
              "key": "title",
              "value": "Draft",
              "digest": "ebf12ef47cf575b3ba9a3cc019c5310146fdac88f6d1be6618d6e91158c2f174",
              "locale": "en"
            },
            {
              "key": "body_html",
              "value": "<p>good board</p>",
              "digest": "6e634d476ca1dde2a0992fd6f57fc48b5979c8a4ee19117044a054f9f601ae56",
              "locale": "en"
            },
            {
              "key": "handle",
              "value": "draft",
              "digest": "7743ce348d9284d677a185f33295b92266cc435a5b5f775029b300066d26693a",
              "locale": "en"
            },
            {
              "key": "product_type",
              "value": "Snowboards",
              "digest": "3c752b33c3546064f02d47978a3883019e5bef320ddbc48875318b8d76c6154b",
              "locale": "en"
            }
          ]
        }
      },
      {
        "node": {
          "resourceId": "gid://shopify/Product/121709582",
          "translatableContent": [
            {
              "key": "title",
              "value": "Boots",
              "digest": "929433e4be1dbd23ffc6b076da2e6f3854ccc5fe606a1e59419110b71fe0a833",
              "locale": "en"
            },
            {
              "key": "body_html",
              "value": "<p>some boots</p>",
              "digest": "8e6907bdb64ea435ccc2874160eaa35db63c95bb5804d93ea460c3a72a68c00c",
              "locale": "en"
            },
            {
              "key": "handle",
              "value": "boots",
              "digest": "40cafc18e93464f86d5d304e726df74311237955bcf7d99909bcef3f0bcb90bb",
              "locale": "en"
            },
            {
              "key": "product_type",
              "value": "Boots",
              "digest": "929433e4be1dbd23ffc6b076da2e6f3854ccc5fe606a1e59419110b71fe0a833",
              "locale": "en"
            }
          ]
        }
      },
      {
        "node": {
          "resourceId": "gid://shopify/Product/440089423",
          "translatableContent": [
            {
              "key": "title",
              "value": "IPod Nano - 8GB",
              "digest": "4ce3c71c164cd0ddc7c95e7d554d9b028e6a6ed4abff8a71ad714c6f2f1a7e4a",
              "locale": "en"
            },
            {
              "key": "body_html",
              "value": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just $149, little speaks volumes.</p>",
              "digest": "d3378109cc15e6d88148c52661e687203c692141fe837dbe983fd02e9b095803",
              "locale": "en"
            },
            {
              "key": "handle",
              "value": "ipod-nano",
              "digest": "226259c06fdbf95cd3b681de6db73d0346c7dae4d381f0472c0e405b73cf57e0",
              "locale": "en"
            },
            {
              "key": "product_type",
              "value": "Cult Products",
              "digest": "be736be3f50f1755fdc2f5bc96b10251d56cd1888a51889321cb96d605078c42",
              "locale": "en"
            }
          ]
        }
      },
      {
        "node": {
          "resourceId": "gid://shopify/Product/558169081",
          "translatableContent": [
            {
              "key": "title",
              "value": "Unpublished Boots",
              "digest": "1654ceb776b32b1bf3298e88ce86829478d3be20669887faebc98daf88ebabc0",
              "locale": "en"
            },
            {
              "key": "body_html",
              "value": "<p>some boots</p>",
              "digest": "8e6907bdb64ea435ccc2874160eaa35db63c95bb5804d93ea460c3a72a68c00c",
              "locale": "en"
            },
            {
              "key": "handle",
              "value": "unpublished_boots",
              "digest": "8fa116cf72ed66775134127295e199c727b3756c676b13699b2060db2f19d78c",
              "locale": "en"
            },
            {
              "key": "product_type",
              "value": "Boots",
              "digest": "929433e4be1dbd23ffc6b076da2e6f3854ccc5fe606a1e59419110b71fe0a833",
              "locale": "en"
            }
          ]
        }
      }
    ]
  }
}
``` 

Retrieve translatable content for the first 5 products
------------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20translatableResources(first%3A%205%2C%20resourceType%3A%20PRODUCT)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20resourceId%0A%20%20%20%20%20%20%20%20translatableContent%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20digest%0A%20%20%20%20%20%20%20%20%20%20locale%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 translatableResources(first: 5, resourceType: PRODUCT) {

 edges {

 node {

 resourceId

 translatableContent {

 key

 value

 digest

 locale

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  translatableResources(first: 5, resourceType: PRODUCT) {
    edges {
      node {
        resourceId
        translatableContent {
          key
          value
          digest
          locale
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
"query": "query { translatableResources(first: 5, resourceType: PRODUCT) { edges { node { resourceId translatableContent { key value digest locale } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    translatableResources(first: 5, resourceType: PRODUCT) {
      edges {
        node {
          resourceId
          translatableContent {
            key
            value
            digest
            locale
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
    translatableResources(first: 5, resourceType: PRODUCT) {
      edges {
        node {
          resourceId
          translatableContent {
            key
            value
            digest
            locale
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
    translatableResources(first: 5, resourceType: PRODUCT) {
      edges {
        node {
          resourceId
          translatableContent {
            key
            value
            digest
            locale
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

⌄

⌄

⌄

⌄

⌄

{

"translatableResources": {

"edges": [

{

"node": {

"resourceId": "gid://shopify/Product/20995642",

"translatableContent": [

{

"key": "title",

"value": "Element",

"digest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",

"locale": "en"

},

{

"key": "body_html",

"value": "<p>bad board</p>",

"digest": "60cd8aaeeec8e14d9da0dd1ed4cff31c0bb8f9c64255adad9dc1d2140c472f3b",

"locale": "en"

},

{

"key": "handle",

"value": "element",

"digest": "445929267209c034d1e324834c17e0c8305df3dcb21d1710a639ac6ca08c648b",

"locale": "en"

},

{

"key": "product_type",

"value": "Snowboards",

"digest": "3c752b33c3546064f02d47978a3883019e5bef320ddbc48875318b8d76c6154b",

"locale": "en"

}

]

}

},

{

"node": {


---
*Content truncated at "Updates" section*