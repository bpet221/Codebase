---
title: "codeDiscountNode"
description: "Shopify GraphQL Admin API documentation for codediscountnode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: codeDiscountNode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode

Markdown Content:
codeDiscountNode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode#main-content)

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

[Anchor to codeDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode#top)
code Discount Node
==================

query

Returns a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DiscountCodeNode` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DiscountCodeNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode#returns-DiscountCodeNode)Discount Code Node

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Query a code discount by its ID

#### Description

This query retrieves a [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that's applied on a cart and at checkout when a customer enters a code.

#### Query

```graphql
query {
  codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
    id
    codeDiscount {
      ... on DiscountCodeBasic {
        title
        summary
        codes(first: 1) {
          nodes {
            code
            id
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
"query": "query { codeDiscountNode(id: \"gid://shopify/DiscountCodeNode/206265824\") { id codeDiscount { ... on DiscountCodeBasic { title summary codes(first: 1) { nodes { code id } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
          codes(first: 1) {
            nodes {
              code
              id
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
  query {
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
          codes(first: 1) {
            nodes {
              code
              id
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
  data: `query {
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
          codes(first: 1) {
            nodes {
              code
              id
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
  "codeDiscountNode": {
    "id": "gid://shopify/DiscountCodeNode/206265824",
    "codeDiscount": {
      "title": "percentage_off_code",
      "summary": "10% off one-time purchase products",
      "codes": {
        "nodes": [
          {
            "code": "percentage_off_code",
            "id": "gid://shopify/DiscountRedeemCode/241951653"
          }
        ]
      }
    }
  }
}
``` 
*   ### Querying a non-existent code discount returns null

#### Description

This example shows the response that's returned when you query a code discount that doesn't exist.

#### Query

```graphql
query {
  codeDiscountNode(id: "gid://shopify/DiscountCodeNode/999999") {
    id
    codeDiscount {
      ... on DiscountCodeBasic {
        title
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
"query": "query { codeDiscountNode(id: \"gid://shopify/DiscountCodeNode/999999\") { id codeDiscount { ... on DiscountCodeBasic { title } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/999999") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
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
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/999999") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
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
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/999999") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "codeDiscountNode": null
}
``` 

Examples
--------

Query a code discount by its ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20codeDiscountNode(id%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeNode%2F206265824%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20...%20on%20DiscountCodeBasic%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20summary%0A%20%20%20%20%20%20%20%20codes(first%3A%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {

 id

 codeDiscount {

 ... on DiscountCodeBasic {

 title

 summary

 codes(first: 1) {

 nodes {

 code

 id

 }

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
    id
    codeDiscount {
      ... on DiscountCodeBasic {
        title
        summary
        codes(first: 1) {
          nodes {
            code
            id
          }
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
"query": "query { codeDiscountNode(id: \"gid://shopify/DiscountCodeNode/206265824\") { id codeDiscount { ... on DiscountCodeBasic { title summary codes(first: 1) { nodes { code id } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
          codes(first: 1) {
            nodes {
              code
              id
            }
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
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
          codes(first: 1) {
            nodes {
              code
              id
            }
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
    codeDiscountNode(id: "gid://shopify/DiscountCodeNode/206265824") {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          summary
          codes(first: 1) {
            nodes {
              code
              id
            }
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"codeDiscountNode": {

"id": "gid://shopify/DiscountCodeNode/206265824",

"codeDiscount": {

"title": "percentage_off_code",

"summary": "10% off one-time purchase products",

"codes": {

"nodes": [

{

"code": "percentage_off_code",

"id": "gid://shopify/DiscountRedeemCode/241951653"

}

]

}

}

}

}


---
*Content truncated at "Updates" section*