---
title: "returnableFulfillment"
description: "Shopify GraphQL Admin API documentation for returnablefulfillment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: returnableFulfillment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment

Markdown Content:
returnableFulfillment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment#main-content)

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
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   
Orders

    *   
Queries

        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
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

[Anchor to returnableFulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment#top)
returnable Fulfillment
======================

query

Lookup a returnable fulfillment by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `ReturnableFulfillment` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ReturnableFulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment#returns-ReturnableFulfillment)Returnable Fulfillment

•[Returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment)

A returnable fulfillment, which is an order that has been delivered and is eligible to be returned to the merchant.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a returnable fulfillment and its line items.

#### Description

A returnable fulfillment contains fulfillment line items that are eligible for a return. To create a return, use the `returnCreate` or `returnRequest` mutations. The `id` of each `fulfillmentLineItem` returned in this query can be used in the mutation input.

#### Query

```graphql
query {
  returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
    id
    fulfillment {
      id
      status
    }
    returnableFulfillmentLineItems(first: 5) {
      edges {
        node {
          quantity
          fulfillmentLineItem {
            id
            lineItem {
              id
              originalUnitPriceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              quantity
              requiresShipping
              taxable
              unfulfilledQuantity
            }
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
"query": "query { returnableFulfillment(id: \"gid://shopify/ReturnableFulfillment/607470790\") { id fulfillment { id status } returnableFulfillmentLineItems(first: 5) { edges { node { quantity fulfillmentLineItem { id lineItem { id originalUnitPriceSet { shopMoney { amount currencyCode } } quantity requiresShipping taxable unfulfilledQuantity } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
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
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
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
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
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
  "returnableFulfillment": {
    "id": "gid://shopify/ReturnableFulfillment/607470790",
    "fulfillment": {
      "id": "gid://shopify/Fulfillment/607470790",
      "status": "SUCCESS"
    },
    "returnableFulfillmentLineItems": {
      "edges": [
        {
          "node": {
            "quantity": 2,
            "fulfillmentLineItem": {
              "id": "gid://shopify/FulfillmentLineItem/667843070",
              "lineItem": {
                "id": "gid://shopify/LineItem/571194661",
                "originalUnitPriceSet": {
                  "shopMoney": {
                    "amount": "10.0",
                    "currencyCode": "USD"
                  }
                },
                "quantity": 2,
                "requiresShipping": true,
                "taxable": true,
                "unfulfilledQuantity": 0
              }
            }
          }
        }
      ]
    }
  }
}
``` 

Retrieve a returnable fulfillment and its line items.
-----------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20returnableFulfillment(id%3A%20%22gid%3A%2F%2Fshopify%2FReturnableFulfillment%2F607470790%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20fulfillment%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20returnableFulfillmentLineItems(first%3A%205)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20fulfillmentLineItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20lineItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20originalUnitPriceSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20requiresShipping%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20taxable%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20unfulfilledQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

27

28

29

30

31

32

33

34

35

36

37

38

39

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {

 id

 fulfillment {

 id

 status

 }

 returnableFulfillmentLineItems(first: 5) {

 edges {

 node {

 quantity

 fulfillmentLineItem {

 id

 lineItem {

 id

 originalUnitPriceSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 quantity

 requiresShipping

 taxable

 unfulfilledQuantity

 }

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
  returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
    id
    fulfillment {
      id
      status
    }
    returnableFulfillmentLineItems(first: 5) {
      edges {
        node {
          quantity
          fulfillmentLineItem {
            id
            lineItem {
              id
              originalUnitPriceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
              quantity
              requiresShipping
              taxable
              unfulfilledQuantity
            }
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
"query": "query { returnableFulfillment(id: \"gid://shopify/ReturnableFulfillment/607470790\") { id fulfillment { id status } returnableFulfillmentLineItems(first: 5) { edges { node { quantity fulfillmentLineItem { id lineItem { id originalUnitPriceSet { shopMoney { amount currencyCode } } quantity requiresShipping taxable unfulfilledQuantity } } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
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
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
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
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
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

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"returnableFulfillment": {

"id": "gid://shopify/ReturnableFulfillment/607470790",

"fulfillment": {

"id": "gid://shopify/Fulfillment/607470790",

"status": "SUCCESS"

},

"returnableFulfillmentLineItems": {

"edges": [

{

"node": {

"quantity": 2,

"fulfillmentLineItem": {

"id": "gid://shopify/FulfillmentLineItem/667843070",

"lineItem": {

"id": "gid://shopify/LineItem/571194661",

"originalUnitPriceSet": {

"shopMoney": {

"amount": "10.0",

"currencyCode": "USD"

}

},

"quantity": 2,

"requiresShipping": true,

"taxable": true,

"unfulfilledQuantity": 0

}

}

}

}

]

}

}

}


---
*Content truncated at "Updates" section*