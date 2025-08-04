---
title: "refund"
description: "Shopify GraphQL Admin API documentation for refund"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/refund"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: refund - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/refund

Markdown Content:
refund - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund#main-content)

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

[Anchor to refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund#top)
refund
======

query

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Retrieves a [refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund) by its ID. A refund represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

Use the `refund` query to retrieve information associated with the following workflows:

*   Displaying refund details in order management interfaces
*   Building customer service tools for reviewing refund history
*   Creating reports on refunded amounts and reasons
*   Auditing refund transactions and payment gateway records
*   Tracking inventory impacts from refunded items

A refund is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes [refund line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem) that specify which items were refunded. Each refund processes through [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) that handle the actual money transfer back to the customer.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the Refund to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to Refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund#returns-Refund)Refund

•[Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

The `Refund` object provides information to:

*   Process customer returns and issue payments back to customers
*   Handle partial or full refunds for line items with optional inventory restocking
*   Refund shipping costs, duties, and additional fees
*   Issue store credit refunds as an alternative to original payment method returns
*   Track and reconcile all financial transactions related to refunds

Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

* * *

Note

The existence of a `Refund` object doesn't guarantee that the money has been returned to the customer. The actual financial processing happens through associated [`OrderTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction) objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status) of the associated transactions.

* * *

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get refund duties

#### Description

The following query retrieves a refund by its ID and returns the refund duties.

#### Query

```graphql
query refund($input: ID!) {
  refund(id: $input) {
    duties {
      originalDuty {
        countryCodeOfOrigin
      }
      amountSet {
        shopMoney {
          amount
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": "gid://shopify/Refund/850600470"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query refund($input: ID!) { refund(id: $input) { duties { originalDuty { countryCodeOfOrigin } amountSet { shopMoney { amount } } } } }",
 "variables": {
    "input": "gid://shopify/Refund/850600470"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query refund($input: ID!) {
    refund(id: $input) {
      duties {
        originalDuty {
          countryCodeOfOrigin
        }
        amountSet {
          shopMoney {
            amount
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": "gid://shopify/Refund/850600470"
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
  query refund($input: ID!) {
    refund(id: $input) {
      duties {
        originalDuty {
          countryCodeOfOrigin
        }
        amountSet {
          shopMoney {
            amount
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": "gid://shopify/Refund/850600470"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query refund($input: ID!) {
      refund(id: $input) {
        duties {
          originalDuty {
            countryCodeOfOrigin
          }
          amountSet {
            shopMoney {
              amount
            }
          }
        }
      }
    }`,
    "variables": {
        "input": "gid://shopify/Refund/850600470"
    },
  },
});
``` #### Response

```json
{
  "refund": {
    "duties": [
      {
        "originalDuty": {
          "countryCodeOfOrigin": "US"
        },
        "amountSet": {
          "shopMoney": {
            "amount": "6.0"
          }
        }
      }
    ]
  }
}
``` 
*   ### Get the total refunded amount

#### Description

The following query retrieves a refund by its ID and returns the total refunded amount.

#### Query

```graphql
query refund($input: ID!) {
  refund(id: $input) {
    totalRefundedSet {
      shopMoney {
        amount
        currencyCode
      }
    }
  }
}
``` #### Variables

```json
{
  "input": "gid://shopify/Refund/196417871"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query refund($input: ID!) { refund(id: $input) { totalRefundedSet { shopMoney { amount currencyCode } } } }",
 "variables": {
    "input": "gid://shopify/Refund/196417871"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query refund($input: ID!) {
    refund(id: $input) {
      totalRefundedSet {
        shopMoney {
          amount
          currencyCode
        }
      }
    }
  }`,
  {
    variables: {
        "input": "gid://shopify/Refund/196417871"
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
  query refund($input: ID!) {
    refund(id: $input) {
      totalRefundedSet {
        shopMoney {
          amount
          currencyCode
        }
      }
    }
  }
QUERY

variables = {
  "input": "gid://shopify/Refund/196417871"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query refund($input: ID!) {
      refund(id: $input) {
        totalRefundedSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
    }`,
    "variables": {
        "input": "gid://shopify/Refund/196417871"
    },
  },
});
``` #### Response

```json
{
  "refund": {
    "totalRefundedSet": {
      "shopMoney": {
        "amount": "5.75",
        "currencyCode": "USD"
      }
    }
  }
}
``` 
*   ### Retrieves a specific refund

#### Query

```graphql
query RefundShow($id: ID!) {
  refund(id: $id) {
    id
    note
    totalRefundedSet {
      presentmentMoney {
        amount
        currencyCode
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Refund/196417871"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query RefundShow($id: ID!) { refund(id: $id) { id note totalRefundedSet { presentmentMoney { amount currencyCode } } } }",
 "variables": {
    "id": "gid://shopify/Refund/196417871"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query RefundShow($id: ID!) {
    refund(id: $id) {
      id
      note
      totalRefundedSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Refund/196417871"
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
  query RefundShow($id: ID!) {
    refund(id: $id) {
      id
      note
      totalRefundedSet {
        presentmentMoney {
          amount
          currencyCode
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Refund/196417871"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query RefundShow($id: ID!) {
      refund(id: $id) {
        id
        note
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Refund/196417871"
    },
  },
});
``` #### Response

```json
{
  "refund": {
    "id": "gid://shopify/Refund/196417871",
    "note": "free shipping",
    "totalRefundedSet": {
      "presentmentMoney": {
        "amount": "5.75",
        "currencyCode": "USD"
      }
    }
  }
}
``` 

Examples
--------

Get refund duties

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20refund(%24input%3A%20ID!)%20%7B%0A%20%20refund(id%3A%20%24input)%20%7B%0A%20%20%20%20duties%20%7B%0A%20%20%20%20%20%20originalDuty%20%7B%0A%20%20%20%20%20%20%20%20countryCodeOfOrigin%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20amountSet%20%7B%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%22gid%3A%2F%2Fshopify%2FRefund%2F850600470%22%0A%7D)Copy

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

 query refund($input: ID!) {

 refund(id: $input) {

 duties {

 originalDuty {

 countryCodeOfOrigin

 }

 amountSet {

 shopMoney {

 amount

 }

 }

 }

 }

 }`,

{

variables:{

"input":"gid://shopify/Refund/850600470"

},

},

);

const data=await response.json();

```
query refund($input: ID!) {
  refund(id: $input) {
    duties {
      originalDuty {
        countryCodeOfOrigin
      }
      amountSet {
        shopMoney {
          amount
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
"query": "query refund($input: ID!) { refund(id: $input) { duties { originalDuty { countryCodeOfOrigin } amountSet { shopMoney { amount } } } } }",
 "variables": {
    "input": "gid://shopify/Refund/850600470"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query refund($input: ID!) {
    refund(id: $input) {
      duties {
        originalDuty {
          countryCodeOfOrigin
        }
        amountSet {
          shopMoney {
            amount
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": "gid://shopify/Refund/850600470"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query refund($input: ID!) {
      refund(id: $input) {
        duties {
          originalDuty {
            countryCodeOfOrigin
          }
          amountSet {
            shopMoney {
              amount
            }
          }
        }
      }
    }`,
    "variables": {
        "input": "gid://shopify/Refund/850600470"
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
  query refund($input: ID!) {
    refund(id: $input) {
      duties {
        originalDuty {
          countryCodeOfOrigin
        }
        amountSet {
          shopMoney {
            amount
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": "gid://shopify/Refund/850600470"
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

"input": "gid://shopify/Refund/850600470"

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

14

15

16

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"refund": {

"duties": [

{

"originalDuty": {

"countryCodeOfOrigin": "US"

},

"amountSet": {

"shopMoney": {

"amount": "6.0"

}

}

}

]

}

}


---
*Content truncated at "Updates" section*