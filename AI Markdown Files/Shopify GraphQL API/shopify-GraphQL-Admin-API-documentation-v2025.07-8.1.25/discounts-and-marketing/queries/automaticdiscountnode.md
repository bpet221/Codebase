---
title: "automaticDiscountNode"
description: "Shopify GraphQL Admin API documentation for automaticdiscountnode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: automaticDiscountNode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode

Markdown Content:
automaticDiscountNode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode#main-content)

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

[Anchor to automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode#top)
automatic Discount Node
=======================

query

Returns a `DiscountAutomaticNode` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DiscountAutomaticNode` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DiscountAutomaticNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode#returns-DiscountAutomaticNode)Discount Automatic Node

•[Discount Automatic Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a buy X get Y automatic discount by its ID

#### Description

Retrieve a [buy X get Y](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) discount that's automatically applied on a cart and at checkout when an order meets specific criteria.

#### Query

```graphql
query {
  automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
    id
    automaticDiscount {
      ... on DiscountAutomaticBxgy {
        title
        status
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
"query": "query { automaticDiscountNode(id: \"gid://shopify/DiscountAutomaticNode/1057371284\") { id automaticDiscount { ... on DiscountAutomaticBxgy { title status } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
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
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
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
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "automaticDiscountNode": {
    "id": "gid://shopify/DiscountAutomaticNode/1057371284",
    "automaticDiscount": {
      "title": "An automatic bogo discount",
      "status": "SCHEDULED"
    }
  }
}
``` 
*   ### Retrieve an automatic discount by its ID

#### Description

Retrieve an automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

#### Query

```graphql
query {
  automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371285") {
    id
    automaticDiscount {
      ... on DiscountAutomaticApp {
        title
        status
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
"query": "query { automaticDiscountNode(id: \"gid://shopify/DiscountAutomaticNode/1057371285\") { id automaticDiscount { ... on DiscountAutomaticApp { title status } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371285") {
      id
      automaticDiscount {
        ... on DiscountAutomaticApp {
          title
          status
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
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371285") {
      id
      automaticDiscount {
        ... on DiscountAutomaticApp {
          title
          status
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
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371285") {
      id
      automaticDiscount {
        ... on DiscountAutomaticApp {
          title
          status
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "automaticDiscountNode": {
    "id": "gid://shopify/DiscountAutomaticNode/1057371285",
    "automaticDiscount": {
      "title": "An automatic app discount",
      "status": "ACTIVE"
    }
  }
}
``` 

Examples
--------

Retrieve a buy X get Y automatic discount by its ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20automaticDiscountNode(id%3A%20%22gid%3A%2F%2Fshopify%2FDiscountAutomaticNode%2F1057371284%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20...%20on%20DiscountAutomaticBxgy%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {

 id

 automaticDiscount {

 ... on DiscountAutomaticBxgy {

 title

 status

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
    id
    automaticDiscount {
      ... on DiscountAutomaticBxgy {
        title
        status
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
"query": "query { automaticDiscountNode(id: \"gid://shopify/DiscountAutomaticNode/1057371284\") { id automaticDiscount { ... on DiscountAutomaticBxgy { title status } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
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
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
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
    automaticDiscountNode(id: "gid://shopify/DiscountAutomaticNode/1057371284") {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          status
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

9

1

2

3

4

5

6

7

8

9

›

⌄

⌄

⌄

{

"automaticDiscountNode": {

"id": "gid://shopify/DiscountAutomaticNode/1057371284",

"automaticDiscount": {

"title": "An automatic bogo discount",

"status": "SCHEDULED"

}

}

}


---
*Content truncated at "Updates" section*