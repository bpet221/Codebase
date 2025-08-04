---
title: "discountCodesCount"
description: "Shopify GraphQL Admin API documentation for discountcodescount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodesCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount

Markdown Content:
discountCodesCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#main-content)

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

[Anchor to discountCodesCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#top)
discount Codes Count
====================

query

Requires `read_discounts` access scope.

The total number of discount codes for the shop. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#argument-query-filter-times_used)times_used

•integer

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve the number of discount codes used more than once

#### Description

Returns the number of discount codes that were used more than once.

#### Query

```graphql
query discountCodesCount($query: String!) {
  discountCodesCount(query: $query) {
    count
  }
}
``` #### Variables

```json
{
  "query": "times_used:>1"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountCodesCount($query: String!) { discountCodesCount(query: $query) { count } }",
 "variables": {
    "query": "times_used:>1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }`,
  {
    variables: {
        "query": "times_used:>1"
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
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }
QUERY

variables = {
  "query": "times_used:>1"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query discountCodesCount($query: String!) {
      discountCodesCount(query: $query) {
        count
      }
    }`,
    "variables": {
        "query": "times_used:>1"
    },
  },
});
``` #### Response

```json
{
  "discountCodesCount": {
    "count": 3
  }
}
``` 
*   ### Retrieve the number of discount codes used within a range

#### Description

Returns the number of discount codes that were used more than onceand less than four times.

#### Query

```graphql
query discountCodesCount($query: String!) {
  discountCodesCount(query: $query) {
    count
  }
}
``` #### Variables

```json
{
  "query": "times_used:>1 AND times_used:<4"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountCodesCount($query: String!) { discountCodesCount(query: $query) { count } }",
 "variables": {
    "query": "times_used:>1 AND times_used:<4"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }`,
  {
    variables: {
        "query": "times_used:>1 AND times_used:<4"
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
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }
QUERY

variables = {
  "query": "times_used:>1 AND times_used:<4"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query discountCodesCount($query: String!) {
      discountCodesCount(query: $query) {
        count
      }
    }`,
    "variables": {
        "query": "times_used:>1 AND times_used:<4"
    },
  },
});
``` #### Response

```json
{
  "discountCodesCount": {
    "count": 2
  }
}
``` 
*   ### Retrieve the number of unused discount codes

#### Description

Returns the number of discount codes that were never used.

#### Query

```graphql
query discountCodesCount($query: String!) {
  discountCodesCount(query: $query) {
    count
  }
}
``` #### Variables

```json
{
  "query": "times_used:0"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountCodesCount($query: String!) { discountCodesCount(query: $query) { count } }",
 "variables": {
    "query": "times_used:0"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }`,
  {
    variables: {
        "query": "times_used:0"
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
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }
QUERY

variables = {
  "query": "times_used:0"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query discountCodesCount($query: String!) {
      discountCodesCount(query: $query) {
        count
      }
    }`,
    "variables": {
        "query": "times_used:0"
    },
  },
});
``` #### Response

```json
{
  "discountCodesCount": {
    "count": 25
  }
}
``` 
*   ### Retrieve the total number of discount codes

#### Description

Returns the total number of discount codes.

#### Query

```graphql
query discountCodesCount {
  discountCodesCount {
    count
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountCodesCount { discountCodesCount { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountCodesCount {
    discountCodesCount {
      count
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
  query discountCodesCount {
    discountCodesCount {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query discountCodesCount {
    discountCodesCount {
      count
    }
  }`,
});
``` #### Response

```json
{
  "discountCodesCount": {
    "count": 29
  }
}
``` 
*   ### Retrieves a count of discount codes for a shop

#### Query

```graphql
query DiscountRedeemCodeCount {
  discountCodesCount {
    count
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DiscountRedeemCodeCount { discountCodesCount { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DiscountRedeemCodeCount {
    discountCodesCount {
      count
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
  query DiscountRedeemCodeCount {
    discountCodesCount {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query DiscountRedeemCodeCount {
    discountCodesCount {
      count
    }
  }`,
});
``` #### Response

```json
{
  "discountCodesCount": {
    "count": 29
  }
}
``` 

Examples
--------

Retrieve the number of discount codes used more than once

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20discountCodesCount(%24query%3A%20String!)%20%7B%0A%20%20discountCodesCount(query%3A%20%24query)%20%7B%0A%20%20%20%20count%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22query%22%3A%20%22times_used%3A%3E1%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query discountCodesCount($query: String!) {

 discountCodesCount(query: $query) {

 count

 }

 }`,

{

variables:{

"query":"times_used:>1"

},

},

);

const data=await response.json();

```
query discountCodesCount($query: String!) {
  discountCodesCount(query: $query) {
    count
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountCodesCount($query: String!) { discountCodesCount(query: $query) { count } }",
 "variables": {
    "query": "times_used:>1"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }`,
  {
    variables: {
        "query": "times_used:>1"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query discountCodesCount($query: String!) {
      discountCodesCount(query: $query) {
        count
      }
    }`,
    "variables": {
        "query": "times_used:>1"
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
  query discountCodesCount($query: String!) {
    discountCodesCount(query: $query) {
      count
    }
  }
QUERY

variables = {
  "query": "times_used:>1"
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

›

⌄

{

"query": "times_used:>1"

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

›

⌄

⌄

{

"discountCodesCount": {

"count": 3

}

}


---
*Content truncated at "Updates" section*