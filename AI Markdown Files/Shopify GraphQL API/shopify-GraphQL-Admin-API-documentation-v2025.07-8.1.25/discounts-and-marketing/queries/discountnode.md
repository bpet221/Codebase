---
title: "discountNode"
description: "Shopify GraphQL Admin API documentation for discountnode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountNode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode

Markdown Content:
discountNode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode#main-content)

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

[Anchor to discountNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode#top)
discount Node
=============

query

Returns a discount resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DiscountNode` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode#returns-DiscountNode)Discount Node

•[Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Querying a non-existent discount returns null

#### Description

This example shows the response that's returned when you query a discount that doesn't exist.

#### Query

```graphql
query {
  discountNode(id: "gid://shopify/DiscountNode/999999999") {
    id
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { discountNode(id: \"gid://shopify/DiscountNode/999999999\") { id } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    discountNode(id: "gid://shopify/DiscountNode/999999999") {
      id
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
    discountNode(id: "gid://shopify/DiscountNode/999999999") {
      id
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    discountNode(id: "gid://shopify/DiscountNode/999999999") {
      id
    }
  }`,
});
``` #### Response

```json
{
  "discountNode": null
}
``` 
*   ### Retrieve a discount by its ID

#### Description

Retrieve a [discount](https://help.shopify.com/manual/discounts) that's applied on a cart and at checkout when an order meets specific criteria.

#### Query

```graphql
query {
  discountNode(id: "gid://shopify/DiscountAutomaticNode/299501151") {
    id
    discount {
      ... on DiscountCodeBasic {
        title
        summary
        status
        codes(first: 1) {
          nodes {
            code
          }
        }
      }
      ... on DiscountAutomaticBasic {
        title
        summary
        status
      }
      ... on DiscountCodeBxgy {
        title
        summary
        status
        codes(first: 1) {
          nodes {
            code
          }
        }
      }
      ... on DiscountAutomaticBxgy {
        title
        summary
        status
      }
      ... on DiscountCodeFreeShipping {
        title
        summary
        status
        codes(first: 1) {
          nodes {
            code
          }
        }
      }
      ... on DiscountCodeApp {
        title
        status
        appDiscountType {
          title
        }
        codes(first: 1) {
          nodes {
            code
          }
        }
      }
      ... on DiscountAutomaticApp {
        title
        status
        appDiscountType {
          title
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
"query": "query { discountNode(id: \"gid://shopify/DiscountAutomaticNode/299501151\") { id discount { ... on DiscountCodeBasic { title summary status codes(first: 1) { nodes { code } } } ... on DiscountAutomaticBasic { title summary status } ... on DiscountCodeBxgy { title summary status codes(first: 1) { nodes { code } } } ... on DiscountAutomaticBxgy { title summary status } ... on DiscountCodeFreeShipping { title summary status codes(first: 1) { nodes { code } } } ... on DiscountCodeApp { title status appDiscountType { title } codes(first: 1) { nodes { code } } } ... on DiscountAutomaticApp { title status appDiscountType { title } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    discountNode(id: "gid://shopify/DiscountAutomaticNode/299501151") {
      id
      discount {
        ... on DiscountCodeBasic {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticBasic {
          title
          summary
          status
        }
        ... on DiscountCodeBxgy {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticBxgy {
          title
          summary
          status
        }
        ... on DiscountCodeFreeShipping {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountCodeApp {
          title
          status
          appDiscountType {
            title
          }
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticApp {
          title
          status
          appDiscountType {
            title
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
    discountNode(id: "gid://shopify/DiscountAutomaticNode/299501151") {
      id
      discount {
        ... on DiscountCodeBasic {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticBasic {
          title
          summary
          status
        }
        ... on DiscountCodeBxgy {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticBxgy {
          title
          summary
          status
        }
        ... on DiscountCodeFreeShipping {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountCodeApp {
          title
          status
          appDiscountType {
            title
          }
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticApp {
          title
          status
          appDiscountType {
            title
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
    discountNode(id: "gid://shopify/DiscountAutomaticNode/299501151") {
      id
      discount {
        ... on DiscountCodeBasic {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticBasic {
          title
          summary
          status
        }
        ... on DiscountCodeBxgy {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticBxgy {
          title
          summary
          status
        }
        ... on DiscountCodeFreeShipping {
          title
          summary
          status
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountCodeApp {
          title
          status
          appDiscountType {
            title
          }
          codes(first: 1) {
            nodes {
              code
            }
          }
        }
        ... on DiscountAutomaticApp {
          title
          status
          appDiscountType {
            title
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "discountNode": {
    "id": "gid://shopify/DiscountAutomaticNode/299501151",
    "discount": {
      "title": "My automatic discount",
      "summary": "$100.00 off entire order • Minimum quantity of 1",
      "status": "SCHEDULED"
    }
  }
}
``` 

Examples
--------

Querying a non-existent discount returns null

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20discountNode(id%3A%20%22gid%3A%2F%2Fshopify%2FDiscountNode%2F999999999%22)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D)Copy

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

 discountNode(id: "gid://shopify/DiscountNode/999999999") {

 id

 }

 }`,

);

const data=await response.json();

```
query {
  discountNode(id: "gid://shopify/DiscountNode/999999999") {
    id
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { discountNode(id: \"gid://shopify/DiscountNode/999999999\") { id } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    discountNode(id: "gid://shopify/DiscountNode/999999999") {
      id
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    discountNode(id: "gid://shopify/DiscountNode/999999999") {
      id
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
    discountNode(id: "gid://shopify/DiscountNode/999999999") {
      id
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

›

⌄

{

"discountNode": null

}


---
*Content truncated at "Updates" section*