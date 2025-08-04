---
title: "locationsCount"
description: "Shopify GraphQL Admin API documentation for locationscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount

Markdown Content:
locationsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#main-content)

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

[Anchor to locationsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#top)
locations Count
===============

query

Returns the count of locations for the given shop. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The upper bound on count value before returning a result. Use `null` to have no limit.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-active)active

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-address1)address1

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-address2)address2

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-city)city

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-country)country

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-created_at)created_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-geolocated)geolocated

•boolean

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-legacy)legacy

•boolean

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-location_id)location_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-name)name

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-pickup_in_store)pickup_in_store

•string

Valid values:

*   `enabled`
*   `disabled`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-province)province

•string

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#argument-query-filter-zip)zip

•string

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a count of locations

#### Description

Count the number of locations in a shop

#### Query

```graphql
query {
  locationsCount {
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
"query": "query { locationsCount { count } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    locationsCount {
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
  query {
    locationsCount {
      count
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    locationsCount {
      count
    }
  }`,
});
``` #### Response

```json
{
  "locationsCount": {
    "count": 10
  }
}
``` 

Retrieve a count of locations
-----------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20locationsCount%20%7B%0A%20%20%20%20count%0A%20%20%7D%0A%7D)Copy

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

 query {

 locationsCount {

 count

 }

 }`,

);

const data=await response.json();

```
query {
  locationsCount {
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
"query": "query { locationsCount { count } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    locationsCount {
      count
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    locationsCount {
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
  query {
    locationsCount {
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

"locationsCount": {

"count": 10

}

}


---
*Content truncated at "Updates" section*