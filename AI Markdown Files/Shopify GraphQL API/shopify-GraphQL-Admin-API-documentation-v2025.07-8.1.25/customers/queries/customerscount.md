---
title: "customersCount"
description: "Shopify GraphQL Admin API documentation for customerscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount"
extraction_method: "jina"
sections: ['Customers', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customersCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount

Markdown Content:
customersCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#main-content)

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
*   
Customers

    *   
Queries

        *   [customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer)
        *   [customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergepreview)
        *   [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)
        *   [customer Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersavedsearches)
        *   [customers Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount)
        *   [customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers)
        *   [customer Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembership)
        *   [customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembersquery)
        *   [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)
        *   [segment Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfilters)
        *   [segment Filter Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfiltersuggestions)
        *   [segment Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentmigrations)
        *   [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)
        *   [segments Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentscount)
        *   [segment Value Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions)

    *   Mutations   
    *   Objects   

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to customersCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#top)
customers Count
===============

query

Requires `read_customers` access scope.

The number of customers. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#argument-query-filter-updated_at)updated_at

•time

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a count of customers

#### Description

Retrieve the total number of customers

#### Query

```graphql
query CustomerCount {
  customersCount {
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
"query": "query CustomerCount { customersCount { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerCount {
    customersCount {
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
  query CustomerCount {
    customersCount {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CustomerCount {
    customersCount {
      count
    }
  }`,
});
``` #### Response

```json
{
  "customersCount": {
    "count": 20
  }
}
``` 

Retrieves a count of customers
------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20CustomerCount%20%7B%0A%20%20customersCount%20%7B%0A%20%20%20%20count%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query CustomerCount {

 customersCount {

 count

 }

 }`,

);

const data=await response.json();

```
query CustomerCount {
  customersCount {
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
"query": "query CustomerCount { customersCount { count } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerCount {
    customersCount {
      count
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query CustomerCount {
    customersCount {
      count
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
  query CustomerCount {
    customersCount {
      count
    }
  }
QUERY

response = client.query(query: query)
```

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

"customersCount": {

"count": 20

}

}


---
*Content truncated at "Updates" section*