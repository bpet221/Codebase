---
title: "abandonedCheckouts"
description: "Shopify GraphQL Admin API documentation for abandonedcheckouts"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: abandonedCheckouts - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts

Markdown Content:
abandonedCheckouts - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#main-content)

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
*   
Common Objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
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
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [pending Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingorderscount)
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
*   Discounts And Marketing   
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

[Anchor to abandonedCheckouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#top)
abandoned Checkouts
===================

query

List of abandoned checkouts. Includes checkouts that were recovered after being abandoned.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments)
AbandonedCheckoutConnection arguments
-------------------------------------

•[AbandonedCheckoutConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-created_at)created_at

•time

The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-email_state)email_state

•string

Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-recovery_state)recovery_state

•string

Possible values: `recovered` and `not_recovered`.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-status)status

•string

Possible values: `open` and `closed`.

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#argument-query-filter-updated_at)updated_at

•time

The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#arguments-sortKey)sort Key

•[Abandoned Checkout Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#returns-edges)edges

•[[Abandoned Checkout Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#returns-nodes)nodes

•[[Abandoned Checkout!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout)

non-null

A list of nodes that are contained in AbandonedCheckoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a list of abandoned checkouts

#### Query

```graphql
query AbandonedCheckouts {
  abandonedCheckouts(first: 1) {
    nodes {
      abandonedCheckoutUrl
      billingAddress {
        country
      }
      completedAt
      createdAt
      customer {
        firstName
        lastName
        email
      }
      id
      shippingAddress {
        country
      }
      updatedAt
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
"query": "query AbandonedCheckouts { abandonedCheckouts(first: 1) { nodes { abandonedCheckoutUrl billingAddress { country } completedAt createdAt customer { firstName lastName email } id shippingAddress { country } updatedAt } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AbandonedCheckouts {
    abandonedCheckouts(first: 1) {
      nodes {
        abandonedCheckoutUrl
        billingAddress {
          country
        }
        completedAt
        createdAt
        customer {
          firstName
          lastName
          email
        }
        id
        shippingAddress {
          country
        }
        updatedAt
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
  query AbandonedCheckouts {
    abandonedCheckouts(first: 1) {
      nodes {
        abandonedCheckoutUrl
        billingAddress {
          country
        }
        completedAt
        createdAt
        customer {
          firstName
          lastName
          email
        }
        id
        shippingAddress {
          country
        }
        updatedAt
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query AbandonedCheckouts {
    abandonedCheckouts(first: 1) {
      nodes {
        abandonedCheckoutUrl
        billingAddress {
          country
        }
        completedAt
        createdAt
        customer {
          firstName
          lastName
          email
        }
        id
        shippingAddress {
          country
        }
        updatedAt
      }
    }
  }`,
});
``` #### Response

```json
{
  "abandonedCheckouts": {
    "nodes": [
      {
        "abandonedCheckoutUrl": "https://www.snowdevil.ca/26371970/checkouts/ac/cart_token_k23sabns3/recover?key=secret_token_i23kd8f88&locale=en",
        "billingAddress": {
          "country": "Canada"
        },
        "completedAt": null,
        "createdAt": "2125-07-31T15:57:11Z",
        "customer": {
          "firstName": "Bob",
          "lastName": "Bobsen",
          "email": "bob@example.com"
        },
        "id": "gid://shopify/AbandonedCheckout/123",
        "shippingAddress": {
          "country": "Canada"
        },
        "updatedAt": "2125-07-31T15:57:11Z"
      }
    ]
  }
}
``` 

Retrieves a list of abandoned checkouts
---------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20AbandonedCheckouts%20%7B%0A%20%20abandonedCheckouts(first%3A%201)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20abandonedCheckoutUrl%0A%20%20%20%20%20%20billingAddress%20%7B%0A%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20completedAt%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20shippingAddress%20%7B%0A%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query AbandonedCheckouts {

 abandonedCheckouts(first: 1) {

 nodes {

 abandonedCheckoutUrl

 billingAddress {

 country

 }

 completedAt

 createdAt

 customer {

 firstName

 lastName

 email

 }

 id

 shippingAddress {

 country

 }

 updatedAt

 }

 }

 }`,

);

const data=await response.json();

```
query AbandonedCheckouts {
  abandonedCheckouts(first: 1) {
    nodes {
      abandonedCheckoutUrl
      billingAddress {
        country
      }
      completedAt
      createdAt
      customer {
        firstName
        lastName
        email
      }
      id
      shippingAddress {
        country
      }
      updatedAt
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
"query": "query AbandonedCheckouts { abandonedCheckouts(first: 1) { nodes { abandonedCheckoutUrl billingAddress { country } completedAt createdAt customer { firstName lastName email } id shippingAddress { country } updatedAt } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AbandonedCheckouts {
    abandonedCheckouts(first: 1) {
      nodes {
        abandonedCheckoutUrl
        billingAddress {
          country
        }
        completedAt
        createdAt
        customer {
          firstName
          lastName
          email
        }
        id
        shippingAddress {
          country
        }
        updatedAt
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query AbandonedCheckouts {
    abandonedCheckouts(first: 1) {
      nodes {
        abandonedCheckoutUrl
        billingAddress {
          country
        }
        completedAt
        createdAt
        customer {
          firstName
          lastName
          email
        }
        id
        shippingAddress {
          country
        }
        updatedAt
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
  query AbandonedCheckouts {
    abandonedCheckouts(first: 1) {
      nodes {
        abandonedCheckoutUrl
        billingAddress {
          country
        }
        completedAt
        createdAt
        customer {
          firstName
          lastName
          email
        }
        id
        shippingAddress {
          country
        }
        updatedAt
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

"abandonedCheckouts": {

"nodes": [

{

"abandonedCheckoutUrl": "https://www.snowdevil.ca/26371970/checkouts/ac/cart_token_k23sabns3/recover?key=secret_token_i23kd8f88&locale=en",

"billingAddress": {

"country": "Canada"

},

"completedAt": null,

"createdAt": "2125-07-31T15:57:11Z",

"customer": {

"firstName": "Bob",

"lastName": "Bobsen",

"email": "bob@example.com"

},

"id": "gid://shopify/AbandonedCheckout/123",

"shippingAddress": {

"country": "Canada"

},

"updatedAt": "2125-07-31T15:57:11Z"

}

]

}

}


---
*Content truncated at "Updates" section*