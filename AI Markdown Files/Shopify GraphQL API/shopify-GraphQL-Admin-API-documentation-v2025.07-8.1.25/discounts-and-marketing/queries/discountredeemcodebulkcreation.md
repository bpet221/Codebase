---
title: "discountRedeemCodeBulkCreation"
description: "Shopify GraphQL Admin API documentation for discountredeemcodebulkcreation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountRedeemCodeBulkCreation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation

Markdown Content:
discountRedeemCodeBulkCreation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation#main-content)

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

[Anchor to discountRedeemCodeBulkCreation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation#top)
discount Redeem Code Bulk Creation
==================================

query

Returns a `DiscountRedeemCodeBulkCreation` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DiscountRedeemCodeBulkCreation` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DiscountRedeemCodeBulkCreation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation#returns-DiscountRedeemCodeBulkCreation)Discount Redeem Code Bulk Creation

•[Discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation)

The properties and status of a bulk discount redeem code creation operation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a discount code creation job

#### Query

```graphql
query DiscountRedeemCodeBulkShow($id: ID!) {
  discountRedeemCodeBulkCreation(id: $id) {
    id
    createdAt
    discountCode {
      id
    }
    done
    codesCount
    importedCount
    failedCount
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DiscountRedeemCodeBulkShow($id: ID!) { discountRedeemCodeBulkCreation(id: $id) { id createdAt discountCode { id } done codesCount importedCount failedCount } }",
 "variables": {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
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
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
    },
  },
});
``` #### Response

```json
{
  "discountRedeemCodeBulkCreation": {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202",
    "createdAt": "2024-11-06T21:07:10Z",
    "discountCode": {
      "id": "gid://shopify/DiscountCodeNode/2429471"
    },
    "done": true,
    "codesCount": 2,
    "importedCount": 2,
    "failedCount": 1
  }
}
``` 
*   ### Retrieves a list of discount codes for a discount code creation job

#### Query

```graphql
query DiscountRedeemCodeBulkShow($id: ID!) {
  discountRedeemCodeBulkCreation(id: $id) {
    id
    createdAt
    discountCode {
      id
    }
    codes(first: 10) {
      nodes {
        discountRedeemCode {
          code
        }
        errors {
          message
          field
          extraInfo
          code
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DiscountRedeemCodeBulkShow($id: ID!) { discountRedeemCodeBulkCreation(id: $id) { id createdAt discountCode { id } codes(first: 10) { nodes { discountRedeemCode { code } errors { message field extraInfo code } } } } }",
 "variables": {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      codes(first: 10) {
        nodes {
          discountRedeemCode {
            code
          }
          errors {
            message
            field
            extraInfo
            code
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
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
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      codes(first: 10) {
        nodes {
          discountRedeemCode {
            code
          }
          errors {
            message
            field
            extraInfo
            code
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        codes(first: 10) {
          nodes {
            discountRedeemCode {
              code
            }
            errors {
              message
              field
              extraInfo
              code
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
    },
  },
});
``` #### Response

```json
{
  "discountRedeemCodeBulkCreation": {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205",
    "createdAt": "2024-11-06T21:07:11Z",
    "discountCode": {
      "id": "gid://shopify/DiscountCodeNode/2429471"
    },
    "codes": {
      "nodes": [
        {
          "discountRedeemCode": {
            "code": "FOOBAR"
          },
          "errors": []
        },
        {
          "discountRedeemCode": {
            "code": "FOOBAZ"
          },
          "errors": []
        },
        {
          "discountRedeemCode": null,
          "errors": [
            {
              "message": "must be unique. Please try a different code.",
              "field": [
                "code"
              ],
              "extraInfo": null,
              "code": null
            }
          ]
        }
      ]
    }
  }
}
``` 

Examples
--------

Retrieves a discount code creation job

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20DiscountRedeemCodeBulkShow(%24id%3A%20ID!)%20%7B%0A%20%20discountRedeemCodeBulkCreation(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20createdAt%0A%20%20%20%20discountCode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20done%0A%20%20%20%20codesCount%0A%20%20%20%20importedCount%0A%20%20%20%20failedCount%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountRedeemCodeBulkCreation%2F989355202%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query DiscountRedeemCodeBulkShow($id: ID!) {

 discountRedeemCodeBulkCreation(id: $id) {

 id

 createdAt

 discountCode {

 id

 }

 done

 codesCount

 importedCount

 failedCount

 }

 }`,

{

variables:{

"id":"gid://shopify/DiscountRedeemCodeBulkCreation/989355202"

},

},

);

const data=await response.json();

```
query DiscountRedeemCodeBulkShow($id: ID!) {
  discountRedeemCodeBulkCreation(id: $id) {
    id
    createdAt
    discountCode {
      id
    }
    done
    codesCount
    importedCount
    failedCount
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DiscountRedeemCodeBulkShow($id: ID!) { discountRedeemCodeBulkCreation(id: $id) { id createdAt discountCode { id } done codesCount importedCount failedCount } }",
 "variables": {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
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
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
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

"id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"

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

13

›

⌄

⌄

⌄

{

"discountRedeemCodeBulkCreation": {

"id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202",

"createdAt": "2024-11-06T21:07:10Z",

"discountCode": {

"id": "gid://shopify/DiscountCodeNode/2429471"

},

"done": true,

"codesCount": 2,

"importedCount": 2,

"failedCount": 1

}

}


---
*Content truncated at "Updates" section*