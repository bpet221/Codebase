---
title: "tenderTransactions"
description: "Shopify GraphQL Admin API documentation for tendertransactions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: tenderTransactions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions

Markdown Content:
tenderTransactions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#main-content)

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

[Anchor to tenderTransactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#top)
tender Transactions
===================

query

Returns a list of TenderTransactions associated with the shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments)
TenderTransactionConnection arguments
-------------------------------------

•[TenderTransactionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#argument-query-filter-point_of_sale_device_id)point_of_sale_device_id

•id

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#argument-query-filter-processed_at)processed_at

•time

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#argument-query-filter-test)test

•boolean

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#returns-edges)edges

•[[Tender Transaction Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#returns-nodes)nodes

•[[Tender Transaction!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction)

non-null

A list of nodes that are contained in TenderTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a list of tender transactions

#### Query

```graphql
query TenderTransactionList {
  tenderTransactions(first: 10) {
    nodes {
      id
      order {
        id
      }
      amount {
        amount
        currencyCode
      }
      user {
        id
      }
      test
      processedAt
      remoteReference
      paymentDetails: transactionDetails {
        ... on TenderTransactionCreditCardDetails {
          creditCardCompany
          creditCardNumber
        }
      }
      paymentMethod
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
"query": "query TenderTransactionList { tenderTransactions(first: 10) { nodes { id order { id } amount { amount currencyCode } user { id } test processedAt remoteReference paymentDetails: transactionDetails { ... on TenderTransactionCreditCardDetails { creditCardCompany creditCardNumber } } paymentMethod } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query TenderTransactionList {
    tenderTransactions(first: 10) {
      nodes {
        id
        order {
          id
        }
        amount {
          amount
          currencyCode
        }
        user {
          id
        }
        test
        processedAt
        remoteReference
        paymentDetails: transactionDetails {
          ... on TenderTransactionCreditCardDetails {
            creditCardCompany
            creditCardNumber
          }
        }
        paymentMethod
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
  query TenderTransactionList {
    tenderTransactions(first: 10) {
      nodes {
        id
        order {
          id
        }
        amount {
          amount
          currencyCode
        }
        user {
          id
        }
        test
        processedAt
        remoteReference
        paymentDetails: transactionDetails {
          ... on TenderTransactionCreditCardDetails {
            creditCardCompany
            creditCardNumber
          }
        }
        paymentMethod
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query TenderTransactionList {
    tenderTransactions(first: 10) {
      nodes {
        id
        order {
          id
        }
        amount {
          amount
          currencyCode
        }
        user {
          id
        }
        test
        processedAt
        remoteReference
        paymentDetails: transactionDetails {
          ... on TenderTransactionCreditCardDetails {
            creditCardCompany
            creditCardNumber
          }
        }
        paymentMethod
      }
    }
  }`,
});
``` #### Response

```json
{
  "tenderTransactions": {
    "nodes": [
      {
        "id": "gid://shopify/TenderTransaction/765446009",
        "order": {
          "id": "gid://shopify/Order/148977776"
        },
        "amount": {
          "amount": "11.5",
          "currencyCode": "USD"
        },
        "user": {
          "id": "gid://shopify/StaffMember/902541635"
        },
        "test": false,
        "processedAt": "2005-07-31T15:57:11Z",
        "remoteReference": "1000",
        "paymentDetails": null,
        "paymentMethod": null
      }
    ]
  }
}
``` 

Retrieves a list of tender transactions
---------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20TenderTransactionList%20%7B%0A%20%20tenderTransactions(first%3A%2010)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20order%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20user%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20test%0A%20%20%20%20%20%20processedAt%0A%20%20%20%20%20%20remoteReference%0A%20%20%20%20%20%20paymentDetails%3A%20transactionDetails%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20TenderTransactionCreditCardDetails%20%7B%0A%20%20%20%20%20%20%20%20%20%20creditCardCompany%0A%20%20%20%20%20%20%20%20%20%20creditCardNumber%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20paymentMethod%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query TenderTransactionList {

 tenderTransactions(first: 10) {

 nodes {

 id

 order {

 id

 }

 amount {

 amount

 currencyCode

 }

 user {

 id

 }

 test

 processedAt

 remoteReference

 paymentDetails: transactionDetails {

 ... on TenderTransactionCreditCardDetails {

 creditCardCompany

 creditCardNumber

 }

 }

 paymentMethod

 }

 }

 }`,

);

const data=await response.json();

```
query TenderTransactionList {
  tenderTransactions(first: 10) {
    nodes {
      id
      order {
        id
      }
      amount {
        amount
        currencyCode
      }
      user {
        id
      }
      test
      processedAt
      remoteReference
      paymentDetails: transactionDetails {
        ... on TenderTransactionCreditCardDetails {
          creditCardCompany
          creditCardNumber
        }
      }
      paymentMethod
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
"query": "query TenderTransactionList { tenderTransactions(first: 10) { nodes { id order { id } amount { amount currencyCode } user { id } test processedAt remoteReference paymentDetails: transactionDetails { ... on TenderTransactionCreditCardDetails { creditCardCompany creditCardNumber } } paymentMethod } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query TenderTransactionList {
    tenderTransactions(first: 10) {
      nodes {
        id
        order {
          id
        }
        amount {
          amount
          currencyCode
        }
        user {
          id
        }
        test
        processedAt
        remoteReference
        paymentDetails: transactionDetails {
          ... on TenderTransactionCreditCardDetails {
            creditCardCompany
            creditCardNumber
          }
        }
        paymentMethod
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query TenderTransactionList {
    tenderTransactions(first: 10) {
      nodes {
        id
        order {
          id
        }
        amount {
          amount
          currencyCode
        }
        user {
          id
        }
        test
        processedAt
        remoteReference
        paymentDetails: transactionDetails {
          ... on TenderTransactionCreditCardDetails {
            creditCardCompany
            creditCardNumber
          }
        }
        paymentMethod
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
  query TenderTransactionList {
    tenderTransactions(first: 10) {
      nodes {
        id
        order {
          id
        }
        amount {
          amount
          currencyCode
        }
        user {
          id
        }
        test
        processedAt
        remoteReference
        paymentDetails: transactionDetails {
          ... on TenderTransactionCreditCardDetails {
            creditCardCompany
            creditCardNumber
          }
        }
        paymentMethod
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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"tenderTransactions": {

"nodes": [

{

"id": "gid://shopify/TenderTransaction/765446009",

"order": {

"id": "gid://shopify/Order/148977776"

},

"amount": {

"amount": "11.5",

"currencyCode": "USD"

},

"user": {

"id": "gid://shopify/StaffMember/902541635"

},

"test": false,

"processedAt": "2005-07-31T15:57:11Z",

"remoteReference": "1000",

"paymentDetails": null,

"paymentMethod": null

}

]

}

}


---
*Content truncated at "Updates" section*