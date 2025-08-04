---
title: "publishedProductsCount"
description: "Shopify GraphQL Admin API documentation for publishedproductscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publishedProductsCount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount

Markdown Content:
publishedProductsCount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#main-content)

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
*   
Orders

    *   
Queries

        *   [available Backup Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablebackupregions)
        *   [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)
        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [pending Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingorderscount)
        *   [product Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttags)
        *   [product Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/producttypes)
        *   [product Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvendors)
        *   [published Products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount)
        *   [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)
        *   [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)
        *   [returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment)
        *   [returnable Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillments)
        *   [return Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returncalculate)
        *   [reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversedelivery)
        *   [reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversefulfillmentorder)
        *   [subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt)
        *   [subscription Billing Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempts)
        *   [subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycle)
        *   [subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults)
        *   [subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycles)
        *   [subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract)
        *   [subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontracts)
        *   [subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptiondraft)
        *   [tender Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions)

    *   Mutations   
    *   Objects   

*   Privacy   
*   Products and collections   
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

[Anchor to publishedProductsCount](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#top)
published Products Count
========================

query

Requires `read_publications` access scope.

Returns a count of published products by publication ID. Limited to a maximum of 10000 by default.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#arguments)
Arguments
---------

[Anchor to limit](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#arguments-limit)limit

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Default:10000

The maximum number of products to count.

[Anchor to publicationId](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#arguments-publicationId)publication Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the publication that the products are published to.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publishedproductscount#returns-Count)Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Details for count of elements.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a count of products that are published to your app

#### Query

```graphql
query PublishedProductCount($publicationId: ID!) {
  publishedProductsCount(publicationId: $publicationId) {
    count
    precision
  }
}
``` #### Variables

```json
{
  "publicationId": "gid://shopify/Publication/244171671"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query PublishedProductCount($publicationId: ID!) { publishedProductsCount(publicationId: $publicationId) { count precision } }",
 "variables": {
    "publicationId": "gid://shopify/Publication/244171671"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query PublishedProductCount($publicationId: ID!) {
    publishedProductsCount(publicationId: $publicationId) {
      count
      precision
    }
  }`,
  {
    variables: {
        "publicationId": "gid://shopify/Publication/244171671"
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
  query PublishedProductCount($publicationId: ID!) {
    publishedProductsCount(publicationId: $publicationId) {
      count
      precision
    }
  }
QUERY

variables = {
  "publicationId": "gid://shopify/Publication/244171671"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query PublishedProductCount($publicationId: ID!) {
      publishedProductsCount(publicationId: $publicationId) {
        count
        precision
      }
    }`,
    "variables": {
        "publicationId": "gid://shopify/Publication/244171671"
    },
  },
});
``` #### Response

```json
{
  "publishedProductsCount": {
    "count": 6,
    "precision": "EXACT"
  }
}
``` 

Retrieve a count of products that are published to your app
-----------------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20PublishedProductCount(%24publicationId%3A%20ID!)%20%7B%0A%20%20publishedProductsCount(publicationId%3A%20%24publicationId)%20%7B%0A%20%20%20%20count%0A%20%20%20%20precision%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22publicationId%22%3A%20%22gid%3A%2F%2Fshopify%2FPublication%2F244171671%22%0A%7D)Copy

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

 query PublishedProductCount($publicationId: ID!) {

 publishedProductsCount(publicationId: $publicationId) {

 count

 precision

 }

 }`,

{

variables:{

"publicationId":"gid://shopify/Publication/244171671"

},

},

);

const data=await response.json();

```
query PublishedProductCount($publicationId: ID!) {
  publishedProductsCount(publicationId: $publicationId) {
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
"query": "query PublishedProductCount($publicationId: ID!) { publishedProductsCount(publicationId: $publicationId) { count precision } }",
 "variables": {
    "publicationId": "gid://shopify/Publication/244171671"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query PublishedProductCount($publicationId: ID!) {
    publishedProductsCount(publicationId: $publicationId) {
      count
      precision
    }
  }`,
  {
    variables: {
        "publicationId": "gid://shopify/Publication/244171671"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query PublishedProductCount($publicationId: ID!) {
      publishedProductsCount(publicationId: $publicationId) {
        count
        precision
      }
    }`,
    "variables": {
        "publicationId": "gid://shopify/Publication/244171671"
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
  query PublishedProductCount($publicationId: ID!) {
    publishedProductsCount(publicationId: $publicationId) {
      count
      precision
    }
  }
QUERY

variables = {
  "publicationId": "gid://shopify/Publication/244171671"
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

"publicationId": "gid://shopify/Publication/244171671"

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

"publishedProductsCount": {

"count": 6,

"precision": "EXACT"

}

}


---
*Content truncated at "Updates" section*