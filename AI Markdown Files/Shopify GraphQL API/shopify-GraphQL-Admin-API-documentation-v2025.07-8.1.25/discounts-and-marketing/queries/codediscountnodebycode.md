---
title: "codeDiscountNodeByCode"
description: "Shopify GraphQL Admin API documentation for codediscountnodebycode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: codeDiscountNodeByCode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode

Markdown Content:
codeDiscountNodeByCode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode#main-content)

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

[Anchor to codeDiscountNodeByCode](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode#top)
code Discount Node By Code
==========================

query

Requires Apps must have `read_discounts` access scope.

Returns a code discount identified by its discount code.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode#arguments)
Arguments
---------

[Anchor to code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode#arguments-code)code

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The case-insensitive code of the `DiscountCodeNode` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DiscountCodeNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode#returns-DiscountCodeNode)Discount Code Node

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Search for a code discount by discount code

#### Description

Searching for a code discount by a valid discount code will return the code discount.

#### Query

```graphql
query codeDiscountNodeByCode($code: String!) {
  codeDiscountNodeByCode(code: $code) {
    codeDiscount {
      __typename
      ... on DiscountCodeBasic {
        codesCount {
          count
        }
        shortSummary
      }
    }
    id
  }
}
``` #### Variables

```json
{
  "code": "DISCOUNTAPPLICATIONSROCKS"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query codeDiscountNodeByCode($code: String!) { codeDiscountNodeByCode(code: $code) { codeDiscount { __typename ... on DiscountCodeBasic { codesCount { count } shortSummary } } id } }",
 "variables": {
    "code": "DISCOUNTAPPLICATIONSROCKS"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query codeDiscountNodeByCode($code: String!) {
    codeDiscountNodeByCode(code: $code) {
      codeDiscount {
        __typename
        ... on DiscountCodeBasic {
          codesCount {
            count
          }
          shortSummary
        }
      }
      id
    }
  }`,
  {
    variables: {
        "code": "DISCOUNTAPPLICATIONSROCKS"
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
  query codeDiscountNodeByCode($code: String!) {
    codeDiscountNodeByCode(code: $code) {
      codeDiscount {
        __typename
        ... on DiscountCodeBasic {
          codesCount {
            count
          }
          shortSummary
        }
      }
      id
    }
  }
QUERY

variables = {
  "code": "DISCOUNTAPPLICATIONSROCKS"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query codeDiscountNodeByCode($code: String!) {
      codeDiscountNodeByCode(code: $code) {
        codeDiscount {
          __typename
          ... on DiscountCodeBasic {
            codesCount {
              count
            }
            shortSummary
          }
        }
        id
      }
    }`,
    "variables": {
        "code": "DISCOUNTAPPLICATIONSROCKS"
    },
  },
});
``` #### Response

```json
{
  "codeDiscountNodeByCode": {
    "codeDiscount": {
      "__typename": "DiscountCodeBasic",
      "codesCount": {
        "count": 1
      },
      "shortSummary": "$10.00 off Element (151cm)"
    },
    "id": "gid://shopify/DiscountCodeNode/573794601"
  }
}
``` 

Search for a code discount by discount code
-------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20codeDiscountNodeByCode(%24code%3A%20String!)%20%7B%0A%20%20codeDiscountNodeByCode(code%3A%20%24code)%20%7B%0A%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20...%20on%20DiscountCodeBasic%20%7B%0A%20%20%20%20%20%20%20%20codesCount%20%7B%0A%20%20%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shortSummary%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20id%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22code%22%3A%20%22DISCOUNTAPPLICATIONSROCKS%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query codeDiscountNodeByCode($code: String!) {

 codeDiscountNodeByCode(code: $code) {

 codeDiscount {

 __typename

 ... on DiscountCodeBasic {

 codesCount {

 count

 }

 shortSummary

 }

 }

 id

 }

 }`,

{

variables:{

"code":"DISCOUNTAPPLICATIONSROCKS"

},

},

);

const data=await response.json();

```
query codeDiscountNodeByCode($code: String!) {
  codeDiscountNodeByCode(code: $code) {
    codeDiscount {
      __typename
      ... on DiscountCodeBasic {
        codesCount {
          count
        }
        shortSummary
      }
    }
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
"query": "query codeDiscountNodeByCode($code: String!) { codeDiscountNodeByCode(code: $code) { codeDiscount { __typename ... on DiscountCodeBasic { codesCount { count } shortSummary } } id } }",
 "variables": {
    "code": "DISCOUNTAPPLICATIONSROCKS"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query codeDiscountNodeByCode($code: String!) {
    codeDiscountNodeByCode(code: $code) {
      codeDiscount {
        __typename
        ... on DiscountCodeBasic {
          codesCount {
            count
          }
          shortSummary
        }
      }
      id
    }
  }`,
  {
    variables: {
        "code": "DISCOUNTAPPLICATIONSROCKS"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query codeDiscountNodeByCode($code: String!) {
      codeDiscountNodeByCode(code: $code) {
        codeDiscount {
          __typename
          ... on DiscountCodeBasic {
            codesCount {
              count
            }
            shortSummary
          }
        }
        id
      }
    }`,
    "variables": {
        "code": "DISCOUNTAPPLICATIONSROCKS"
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
  query codeDiscountNodeByCode($code: String!) {
    codeDiscountNodeByCode(code: $code) {
      codeDiscount {
        __typename
        ... on DiscountCodeBasic {
          codesCount {
            count
          }
          shortSummary
        }
      }
      id
    }
  }
QUERY

variables = {
  "code": "DISCOUNTAPPLICATIONSROCKS"
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

"code": "DISCOUNTAPPLICATIONSROCKS"

}

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

›

⌄

⌄

⌄

⌄

{

"codeDiscountNodeByCode": {

"codeDiscount": {

"__typename": "DiscountCodeBasic",

"codesCount": {

"count": 1

},

"shortSummary": "$10.00 off Element (151cm)"

},

"id": "gid://shopify/DiscountCodeNode/573794601"

}

}


---
*Content truncated at "Updates" section*