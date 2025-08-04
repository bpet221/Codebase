---
title: "giftCard"
description: "Shopify GraphQL Admin API documentation for giftcard"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: giftCard - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard

Markdown Content:
giftCard - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard#main-content)

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
*   
Common objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentbyabandonedcheckoutid)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerpaymentmethod)
        *   [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)
        *   [finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeappaccesspolicy)
        *   [fulfillment Constraint Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentconstraintrules)
        *   [gift Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard)
        *   [gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardconfiguration)
        *   [gift Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards)
        *   [gift Cards Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardscount)
        *   [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)
        *   [node](https://shopify.dev/docs/api/admin-graphql/latest/queries/node)
        *   [nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/nodes)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [product Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeed)
        *   [product Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeeds)
        *   [public Api Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicapiversions)
        *   [shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunction)
        *   [shopify Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunctions)
        *   [shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipt)
        *   [shop Pay Payment Request Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipts)
        *   [staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember)
        *   [staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmembers)
        *   [store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount)
        *   [validation](https://shopify.dev/docs/api/admin-graphql/latest/queries/validation)
        *   [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

    *   Mutations   
    *   Objects   

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
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to giftCard](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard#top)
gift Card
=========

query

Requires `read_gift_cards` access scope.

Returns a gift card resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the GiftCard to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to GiftCard](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard#returns-GiftCard)Gift Card

•[Gift Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

Represents an issued gift card.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a list of all Gift Card Adjustments

#### Query

```graphql
query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
  giftCard(id: $id) {
    id
    balance {
      amount
      currencyCode
    }
    transactions(first: $firstTransactions) {
      nodes {
        amount {
          amount
          currencyCode
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/GiftCard/411106674",
  "firstTransactions": 5
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GiftCardTransactionList($id: ID!, $firstTransactions: Int) { giftCard(id: $id) { id balance { amount currencyCode } transactions(first: $firstTransactions) { nodes { amount { amount currencyCode } } } } }",
 "variables": {
    "id": "gid://shopify/GiftCard/411106674",
    "firstTransactions": 5
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
    giftCard(id: $id) {
      id
      balance {
        amount
        currencyCode
      }
      transactions(first: $firstTransactions) {
        nodes {
          amount {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/GiftCard/411106674",
        "firstTransactions": 5
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
  query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
    giftCard(id: $id) {
      id
      balance {
        amount
        currencyCode
      }
      transactions(first: $firstTransactions) {
        nodes {
          amount {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/GiftCard/411106674",
  "firstTransactions": 5
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
      giftCard(id: $id) {
        id
        balance {
          amount
          currencyCode
        }
        transactions(first: $firstTransactions) {
          nodes {
            amount {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/GiftCard/411106674",
        "firstTransactions": 5
    },
  },
});
``` #### Response

```json
{
  "giftCard": {
    "id": "gid://shopify/GiftCard/411106674",
    "balance": {
      "amount": "25.0",
      "currencyCode": "USD"
    },
    "transactions": {
      "nodes": []
    }
  }
}
``` 
*   ### Retrieves a single gift card

#### Description

The following query takes a gift card ID, and returns the balance of the gift card.

#### Query

```graphql
query {
  giftCard(id: "gid://shopify/GiftCard/411106674") {
    balance {
      amount
      currencyCode
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
"query": "query { giftCard(id: \"gid://shopify/GiftCard/411106674\") { balance { amount currencyCode } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    giftCard(id: "gid://shopify/GiftCard/411106674") {
      balance {
        amount
        currencyCode
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
    giftCard(id: "gid://shopify/GiftCard/411106674") {
      balance {
        amount
        currencyCode
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
    giftCard(id: "gid://shopify/GiftCard/411106674") {
      balance {
        amount
        currencyCode
      }
    }
  }`,
});
``` #### Response

```json
{
  "giftCard": {
    "balance": {
      "amount": "25.0",
      "currencyCode": "USD"
    }
  }
}
``` 

Examples
--------

Receive a list of all Gift Card Adjustments

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20GiftCardTransactionList(%24id%3A%20ID!%2C%20%24firstTransactions%3A%20Int)%20%7B%0A%20%20giftCard(id%3A%20%24id)%20%7B%0A%20%20%20%20id%0A%20%20%20%20balance%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20currencyCode%0A%20%20%20%20%7D%0A%20%20%20%20transactions(first%3A%20%24firstTransactions)%20%7B%0A%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FGiftCard%2F411106674%22%2C%0A%20%20%22firstTransactions%22%3A%205%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {

 giftCard(id: $id) {

 id

 balance {

 amount

 currencyCode

 }

 transactions(first: $firstTransactions) {

 nodes {

 amount {

 amount

 currencyCode

 }

 }

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/GiftCard/411106674",

"firstTransactions":5

},

},

);

const data=await response.json();

```
query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
  giftCard(id: $id) {
    id
    balance {
      amount
      currencyCode
    }
    transactions(first: $firstTransactions) {
      nodes {
        amount {
          amount
          currencyCode
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
"query": "query GiftCardTransactionList($id: ID!, $firstTransactions: Int) { giftCard(id: $id) { id balance { amount currencyCode } transactions(first: $firstTransactions) { nodes { amount { amount currencyCode } } } } }",
 "variables": {
    "id": "gid://shopify/GiftCard/411106674",
    "firstTransactions": 5
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
    giftCard(id: $id) {
      id
      balance {
        amount
        currencyCode
      }
      transactions(first: $firstTransactions) {
        nodes {
          amount {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/GiftCard/411106674",
        "firstTransactions": 5
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
      giftCard(id: $id) {
        id
        balance {
          amount
          currencyCode
        }
        transactions(first: $firstTransactions) {
          nodes {
            amount {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/GiftCard/411106674",
        "firstTransactions": 5
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
  query GiftCardTransactionList($id: ID!, $firstTransactions: Int) {
    giftCard(id: $id) {
      id
      balance {
        amount
        currencyCode
      }
      transactions(first: $firstTransactions) {
        nodes {
          amount {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/GiftCard/411106674",
  "firstTransactions": 5
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

4

›

⌄

{

"id": "gid://shopify/GiftCard/411106674",

"firstTransactions": 5

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

"giftCard": {

"id": "gid://shopify/GiftCard/411106674",

"balance": {

"amount": "25.0",

"currencyCode": "USD"

},

"transactions": {

"nodes": []

}

}

}


---
*Content truncated at "Updates" section*