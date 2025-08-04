---
title: "discountNodesCount"
description: "Shopify GraphQL Admin API documentation for discountnodescount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountNodesCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount

Markdown Content:
discountNodesCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#main-content)

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

[Anchor to discountNodesCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#top)
discount Nodes Count
====================

query

Requires `read_discounts` access scope.

The total number of discounts for the shop. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-code)code

•string

Filter by the discount code. Not supported for bulk discounts.

Example:

*   `code:WELCOME10`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-combines_with)combines_with

•string

Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with.

Valid values:

*   `order_discounts`
*   `product_discounts`
*   `shipping_discounts`

Example:

*   `combines_with:product_discounts`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-created_at)created_at

•time

Filter by the date and time, in the shop's timezone, when the discount was created.

Example:

*   `created_at:>'2020-10-21T23:39:20Z'`
*   `created_at:<now`
*   `created_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-discount_class)discount_class

•string

Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes).

Valid values:

*   `order`
*   `product`
*   `shipping`

Example:

*   `discount_class:product`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-discount_type)discount_type

•string

Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `bogo`
*   `fixed_amount`
*   `free_shipping`
*   `percentage`

Example:

*   `type:fixed_amount`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-ends_at)ends_at

•time

Filter by the date and time, in the shop's timezone, when the discount ends.

Example:

*   `ends_at:>'2020-10-21T23:39:20Z'`
*   `ends_at:<now`
*   `ends_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-method)method

•string

Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods).

Valid values:

*   `automatic`
*   `code`

Example:

*   `method:code`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-starts_at)starts_at

•time

Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

Example:

*   `starts_at:>'2020-10-21T23:39:20Z'`
*   `starts_at:<now`
*   `starts_at:<='2024'`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-status)status

•string

Filter by the status of the discount.

Valid values:

*   `active`
*   `expired`
*   `scheduled`

Example:

*   `status:scheduled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-times_used)times_used

•integer

Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times. 

 This value is updated asynchronously. As a result, it might be different than the actual usage count.

Example:

*   `times_used:0`
*   `times_used:>150`
*   `times_used:>=200`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-title)title

•string

Filter by the discount name that displays to merchants in the Shopify admin and to customers.

Example:

*   `title:Black Friday Sale`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-type)type

•string

Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

Valid values:

*   `all`
*   `all_with_app`
*   `app`
*   `bxgy`
*   `fixed_amount`
*   `free_shipping`
*   `percentage`

Example:

*   `type:percentage`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time, in the shop's timezone, when the discount was last updated.

Example:

*   `updated_at:>'2020-10-21T23:39:20Z'`
*   `updated_at:<now`
*   `updated_at:<='2024'`

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve the number of discounts used more than once

#### Description

Returns the number of discounts that were used more than once.

#### Query

```graphql
query discountNodesCount($query: String!) {
  discountNodesCount(query: $query) {
    count
    precision
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
"query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
 "variables": {
    "query": "times_used:>1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
    "query": `query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
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
  "discountNodesCount": {
    "count": 3,
    "precision": "EXACT"
  }
}
``` 
*   ### Retrieve the number of discounts used within a range

#### Description

Returns the number of discounts that were used more than onceand less than four times.

#### Query

```graphql
query discountNodesCount($query: String!) {
  discountNodesCount(query: $query) {
    count
    precision
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
"query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
 "variables": {
    "query": "times_used:>1 AND times_used:<4"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
    "query": `query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
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
  "discountNodesCount": {
    "count": 2,
    "precision": "EXACT"
  }
}
``` 
*   ### Retrieve the number of unused discounts

#### Description

Returns the number of discounts that were never used.

#### Query

```graphql
query discountNodesCount($query: String!) {
  discountNodesCount(query: $query) {
    count
    precision
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
"query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
 "variables": {
    "query": "times_used:0"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
    "query": `query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
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
  "discountNodesCount": {
    "count": 37,
    "precision": "EXACT"
  }
}
``` 
*   ### Retrieve the total number of discounts

#### Description

Returns the total number of discounts.

#### Query

```graphql
query discountNodesCount {
  discountNodesCount {
    count
    precision
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountNodesCount { discountNodesCount { count precision } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountNodesCount {
    discountNodesCount {
      count
      precision
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
  query discountNodesCount {
    discountNodesCount {
      count
      precision
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query discountNodesCount {
    discountNodesCount {
      count
      precision
    }
  }`,
});
``` #### Response

```json
{
  "discountNodesCount": {
    "count": 41,
    "precision": "EXACT"
  }
}
``` 
*   ### Retrieves a count of all price rules

#### Query

```graphql
query DiscountCount {
  discountNodesCount {
    count
    precision
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DiscountCount { discountNodesCount { count precision } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DiscountCount {
    discountNodesCount {
      count
      precision
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
  query DiscountCount {
    discountNodesCount {
      count
      precision
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query DiscountCount {
    discountNodesCount {
      count
      precision
    }
  }`,
});
``` #### Response

```json
{
  "discountNodesCount": {
    "count": 41,
    "precision": "EXACT"
  }
}
``` 

Examples
--------

Retrieve the number of discounts used more than once

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20discountNodesCount(%24query%3A%20String!)%20%7B%0A%20%20discountNodesCount(query%3A%20%24query)%20%7B%0A%20%20%20%20count%0A%20%20%20%20precision%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22query%22%3A%20%22times_used%3A%3E1%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query discountNodesCount($query: String!) {

 discountNodesCount(query: $query) {

 count

 precision

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
query discountNodesCount($query: String!) {
  discountNodesCount(query: $query) {
    count
    precision
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
 "variables": {
    "query": "times_used:>1"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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
    "query": `query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
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
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
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

6

›

⌄

⌄

{

"discountNodesCount": {

"count": 3,

"precision": "EXACT"

}

}


---
*Content truncated at "Updates" section*