---
title: "markets"
description: "Shopify GraphQL Admin API documentation for markets"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/markets"
extraction_method: "jina"
sections: ['Shopify Markets', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: markets - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/markets

Markdown Content:
markets - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#main-content)

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
*   
Shopify Markets

    *   
Queries

        *   [backup Region](https://shopify.dev/docs/api/admin-graphql/latest/queries/backupregion)
        *   [market](https://shopify.dev/docs/api/admin-graphql/latest/queries/market)
        *   [market By Geography](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketbygeography)
        *   [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)
        *   [markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketsresolvedvalues)
        *   [primary Market](https://shopify.dev/docs/api/admin-graphql/latest/queries/primarymarket)
        *   [web Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpresences)

    *   Mutations   
    *   Objects   

*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#top)
markets
=======

query

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The markets configured for the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments)
MarketConnection arguments
--------------------------

•[MarketConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-market_condition_types)market_condition_types

•string

A comma-separated list of condition types.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-market_type)market_type

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-name)name

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-status)status

•string

Valid values:

*   `ACTIVE`
*   `DRAFT`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#argument-query-filter-wildcard_company_location_with_country_code)wildcard_company_location_with_country_code

•string

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-sortKey)sort Key

•[Markets Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketsSortKeys)

Default:NAME

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-type)type

•[Market Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

Default:null

Filters markets by type.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#returns-edges)edges

•[[Market Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#returns-nodes)nodes

•[[Market!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

non-null

A list of nodes that are contained in MarketEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get market web presences and their root URLs

#### Description

The following query loads the web presences configured for a shop’s markets and the language-specific root URLs available on each.

#### Query

```graphql
query Markets {
  markets(first: 4) {
    nodes {
      name
      webPresence {
        rootUrls {
          locale
          url
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
"query": "query Markets { markets(first: 4) { nodes { name webPresence { rootUrls { locale url } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query Markets {
    markets(first: 4) {
      nodes {
        name
        webPresence {
          rootUrls {
            locale
            url
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
  query Markets {
    markets(first: 4) {
      nodes {
        name
        webPresence {
          rootUrls {
            locale
            url
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
  data: `query Markets {
    markets(first: 4) {
      nodes {
        name
        webPresence {
          rootUrls {
            locale
            url
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "markets": {
    "nodes": [
      {
        "name": "Canada",
        "webPresence": {
          "rootUrls": [
            {
              "locale": "en",
              "url": "https://defaultglobal.com/en-ca"
            },
            {
              "locale": "fr",
              "url": "https://defaultglobal.com/fr-ca"
            }
          ]
        }
      },
      {
        "name": "European Union",
        "webPresence": {
          "rootUrls": [
            {
              "locale": "en",
              "url": "https://defaultglobal.com/en-eu"
            },
            {
              "locale": "es",
              "url": "https://defaultglobal.com/es-eu"
            },
            {
              "locale": "fr",
              "url": "https://defaultglobal.com/fr-eu"
            }
          ]
        }
      },
      {
        "name": "United Kingdom",
        "webPresence": {
          "rootUrls": [
            {
              "locale": "en",
              "url": "https://uk.defaultglobal.com"
            }
          ]
        }
      },
      {
        "name": "United States",
        "webPresence": {
          "rootUrls": [
            {
              "locale": "en",
              "url": "https://defaultglobal.com"
            },
            {
              "locale": "es",
              "url": "https://defaultglobal.com/es"
            }
          ]
        }
      }
    ]
  }
}
``` 
*   ### Get the first four markets

#### Description

The following query retrieves the first four markets, their names, and what regions are included in them.

#### Query

```graphql
query Markets {
  markets(first: 4) {
    nodes {
      id
      name
      regions(first: 2) {
        pageInfo {
          hasNextPage
        }
        nodes {
          name
          ... on MarketRegionCountry {
            code
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
"query": "query Markets { markets(first: 4) { nodes { id name regions(first: 2) { pageInfo { hasNextPage } nodes { name ... on MarketRegionCountry { code } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query Markets {
    markets(first: 4) {
      nodes {
        id
        name
        regions(first: 2) {
          pageInfo {
            hasNextPage
          }
          nodes {
            name
            ... on MarketRegionCountry {
              code
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
  query Markets {
    markets(first: 4) {
      nodes {
        id
        name
        regions(first: 2) {
          pageInfo {
            hasNextPage
          }
          nodes {
            name
            ... on MarketRegionCountry {
              code
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
  data: `query Markets {
    markets(first: 4) {
      nodes {
        id
        name
        regions(first: 2) {
          pageInfo {
            hasNextPage
          }
          nodes {
            name
            ... on MarketRegionCountry {
              code
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
  "markets": {
    "nodes": [
      {
        "id": "gid://shopify/Market/249692835",
        "name": "Canada",
        "regions": {
          "pageInfo": {
            "hasNextPage": false
          },
          "nodes": [
            {
              "name": "Canada",
              "code": "CA"
            }
          ]
        }
      },
      {
        "id": "gid://shopify/Market/58345162",
        "name": "European Union",
        "regions": {
          "pageInfo": {
            "hasNextPage": true
          },
          "nodes": [
            {
              "name": "Germany",
              "code": "DE"
            },
            {
              "name": "Belgium",
              "code": "BE"
            }
          ]
        }
      },
      {
        "id": "gid://shopify/Market/867658238",
        "name": "United Kingdom",
        "regions": {
          "pageInfo": {
            "hasNextPage": false
          },
          "nodes": [
            {
              "name": "United Kingdom",
              "code": "GB"
            }
          ]
        }
      },
      {
        "id": "gid://shopify/Market/371343838",
        "name": "United States",
        "regions": {
          "pageInfo": {
            "hasNextPage": false
          },
          "nodes": [
            {
              "name": "United States",
              "code": "US"
            }
          ]
        }
      }
    ]
  }
}
``` 

Examples
--------

Get market web presences and their root URLs

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20Markets%20%7B%0A%20%20markets(first%3A%204)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20webPresence%20%7B%0A%20%20%20%20%20%20%20%20rootUrls%20%7B%0A%20%20%20%20%20%20%20%20%20%20locale%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 query Markets {

 markets(first: 4) {

 nodes {

 name

 webPresence {

 rootUrls {

 locale

 url

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query Markets {
  markets(first: 4) {
    nodes {
      name
      webPresence {
        rootUrls {
          locale
          url
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
"query": "query Markets { markets(first: 4) { nodes { name webPresence { rootUrls { locale url } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query Markets {
    markets(first: 4) {
      nodes {
        name
        webPresence {
          rootUrls {
            locale
            url
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
  data: `query Markets {
    markets(first: 4) {
      nodes {
        name
        webPresence {
          rootUrls {
            locale
            url
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
  query Markets {
    markets(first: 4) {
      nodes {
        name
        webPresence {
          rootUrls {
            locale
            url
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

"markets": {

"nodes": [

{

"name": "Canada",

"webPresence": {

"rootUrls": [

{

"locale": "en",

"url": "https://defaultglobal.com/en-ca"

},

{

"locale": "fr",

"url": "https://defaultglobal.com/fr-ca"

}

]

}

},

{

"name": "European Union",

"webPresence": {

"rootUrls": [

{

"locale": "en",

"url": "https://defaultglobal.com/en-eu"

},

{

"locale": "es",

"url": "https://defaultglobal.com/es-eu"

},

{

"locale": "fr",

"url": "https://defaultglobal.com/fr-eu"

}

]

}


---
*Content truncated at "Updates" section*