---
title: "fulfillmentOrderSplit"
description: "Shopify GraphQL Admin API documentation for fulfillmentordersplit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrderSplit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit

Markdown Content:
fulfillmentOrderSplit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#main-content)

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
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   
Shipping and fulfillment

    *   Queries   
    *   
Mutations

        *   [carrier Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate)
        *   [carrier Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicedelete)
        *   [carrier Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate)
        *   [delivery Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationactivation)
        *   [delivery Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationcreate)
        *   [delivery Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationdelete)
        *   [delivery Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationupdate)
        *   [delivery Profile Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate)
        *   [delivery Profile Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileupdate)
        *   [delivery Promise Participants Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseparticipantsupdate)
        *   [delivery Promise Provider Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseproviderupsert)
        *   [delivery Setting Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverysettingupdate)
        *   [fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcancel)
        *   [fulfillment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreate)
        *   [fulfillment Create V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2)
        *   [fulfillment Event Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate)
        *   [fulfillment Order Accept Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderacceptcancellationrequest)
        *   [fulfillment Order Accept Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderacceptfulfillmentrequest)
        *   [fulfillment Order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordercancel)
        *   [fulfillment Order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderclose)
        *   [fulfillment Order Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold)
        *   [fulfillment Order Line Items Prepared For Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderlineitemspreparedforpickup)
        *   [fulfillment Order Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermerge)
        *   [fulfillment Order Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove)
        *   [fulfillment Order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderopen)
        *   [fulfillment Order Reject Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderrejectcancellationrequest)
        *   [fulfillment Order Reject Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderrejectfulfillmentrequest)
        *   [fulfillment Order Release Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreleasehold)
        *   [fulfillment Order Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule)
        *   [fulfillment Order Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit)
        *   [fulfillment Orders Set Fulfillment Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline)
        *   [fulfillment Order Submit Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitcancellationrequest)
        *   [fulfillment Order Submit Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest)
        *   [fulfillment Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentservicecreate)
        *   [fulfillment Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentservicedelete)
        *   [fulfillment Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate)
        *   [fulfillment Tracking Info Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenttrackinginfoupdate)
        *   [fulfillment Tracking Info Update V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenttrackinginfoupdatev2)
        *   [shipping Package Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagedelete)
        *   [shipping Package Make Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagemakedefault)
        *   [shipping Package Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackageupdate)

    *   Objects   

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

[Anchor to fulfillmentOrderSplit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#top)
fulfillment Order Split
=======================

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Splits a fulfillment order or orders based on line item inputs and quantities.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#arguments)
Arguments
---------

[Anchor to fulfillmentOrderSplits](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#arguments-fulfillmentOrderSplits)fulfillment Order Splits

•[[Fulfillment Order Split Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

required

The fulfillment orders, line items and quantities to be split into new fulfillment orders.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentOrderSplitPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#returns)Fulfillment Order Split Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillmentOrderSplits](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#returns-fulfillmentOrderSplits)fulfillment Order Splits

•[[Fulfillment Order Split Result!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitResult)

The result of the fulfillment order splits.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit#returns-userErrors)user Errors

•[[Fulfillment Order Split User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Split a single fulfillment order

#### Description

A merchant or order management app splits one or more fulfillment orders into multiple fulfillment orders, by specifying line items and quantities to split.

#### Query

```graphql
mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
  fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
    fulfillmentOrderSplits {
      fulfillmentOrder {
        id
        lineItems(first: 10) {
          edges {
            cursor
            node {
              id
              totalQuantity
            }
          }
        }
      }
      remainingFulfillmentOrder {
        id
        lineItems(first: 10) {
          edges {
            cursor
            node {
              id
              totalQuantity
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "fulfillmentOrderSplits": [
    {
      "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
      "fulfillmentOrderLineItems": [
        {
          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
          "quantity": 2
        }
      ]
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) { fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) { fulfillmentOrderSplits { fulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } remainingFulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } } userErrors { field message } } }",
 "variables": {
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
        "fulfillmentOrderLineItems": [
          {
            "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
            "quantity": 2
          }
        ]
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentOrderSplits": [
            {
                "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                "fulfillmentOrderLineItems": [
                    {
                        "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                        "quantity": 2
                    }
                ]
            }
        ]
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
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentOrderSplits": [
    {
      "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
      "fulfillmentOrderLineItems": [
        {
          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
          "quantity": 2
        }
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
      fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
        fulfillmentOrderSplits {
          fulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
          remainingFulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentOrderSplits": [
            {
                "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                "fulfillmentOrderLineItems": [
                    {
                        "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                        "quantity": 2
                    }
                ]
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrderSplit": {
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrder": {
          "id": "gid://shopify/FulfillmentOrder/1046000796",
          "lineItems": {
            "edges": [
              {
                "cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTAzLCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTAzfQ==",
                "node": {
                  "id": "gid://shopify/FulfillmentOrderLineItem/1058737503",
                  "totalQuantity": 1
                }
              }
            ]
          }
        },
        "remainingFulfillmentOrder": {
          "id": "gid://shopify/FulfillmentOrder/1046000797",
          "lineItems": {
            "edges": [
              {
                "cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTA0LCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTA0fQ==",
                "node": {
                  "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                  "totalQuantity": 2
                }
              }
            ]
          }
        }
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### fulfillmentOrderSplit reference

Examples
--------

Split a single fulfillment order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderSplit(%24fulfillmentOrderSplits%3A%20%5BFulfillmentOrderSplitInput!%5D!)%20%7B%0A%20%20fulfillmentOrderSplit(fulfillmentOrderSplits%3A%20%24fulfillmentOrderSplits)%20%7B%0A%20%20%20%20fulfillmentOrderSplits%20%7B%0A%20%20%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20lineItems(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20totalQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20remainingFulfillmentOrder%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20lineItems(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20totalQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22fulfillmentOrderSplits%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22fulfillmentOrderId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046000796%22%2C%0A%20%20%20%20%20%20%22fulfillmentOrderLineItems%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrderLineItem%2F1058737504%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%202%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

›

⌄

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {

 fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {

 fulfillmentOrderSplits {

 fulfillmentOrder {

 id

 lineItems(first: 10) {

 edges {

 cursor

 node {

 id

 totalQuantity

 }

 }

 }

 }

 remainingFulfillmentOrder {

 id

 lineItems(first: 10) {

 edges {

 cursor

 node {

 id

 totalQuantity

 }

 }

 }

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"fulfillmentOrderSplits":[

{

"fulfillmentOrderId":"gid://shopify/FulfillmentOrder/1046000796",

"fulfillmentOrderLineItems":[

{

"id":"gid://shopify/FulfillmentOrderLineItem/1058737504",

"quantity":2

}

]

}

]

},

},

);

const data=await response.json();

```
mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
  fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
    fulfillmentOrderSplits {
      fulfillmentOrder {
        id
        lineItems(first: 10) {
          edges {
            cursor
            node {
              id
              totalQuantity
            }
          }
        }
      }
      remainingFulfillmentOrder {
        id
        lineItems(first: 10) {
          edges {
            cursor
            node {
              id
              totalQuantity
            }
          }
        }
      }
    }
    userErrors {
      field
      message
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
"query": "mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) { fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) { fulfillmentOrderSplits { fulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } remainingFulfillmentOrder { id lineItems(first: 10) { edges { cursor node { id totalQuantity } } } } } userErrors { field message } } }",
 "variables": {
    "fulfillmentOrderSplits": [
      {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
        "fulfillmentOrderLineItems": [
          {
            "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
            "quantity": 2
          }
        ]
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentOrderSplits": [
            {
                "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                "fulfillmentOrderLineItems": [
                    {
                        "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                        "quantity": 2
                    }
                ]
            }
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
      fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
        fulfillmentOrderSplits {
          fulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
          remainingFulfillmentOrder {
            id
            lineItems(first: 10) {
              edges {
                cursor
                node {
                  id
                  totalQuantity
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentOrderSplits": [
            {
                "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
                "fulfillmentOrderLineItems": [
                    {
                        "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
                        "quantity": 2
                    }
                ]
            }
        ]
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
  mutation fulfillmentOrderSplit($fulfillmentOrderSplits: [FulfillmentOrderSplitInput!]!) {
    fulfillmentOrderSplit(fulfillmentOrderSplits: $fulfillmentOrderSplits) {
      fulfillmentOrderSplits {
        fulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
        remainingFulfillmentOrder {
          id
          lineItems(first: 10) {
            edges {
              cursor
              node {
                id
                totalQuantity
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentOrderSplits": [
    {
      "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",
      "fulfillmentOrderLineItems": [
        {
          "id": "gid://shopify/FulfillmentOrderLineItem/1058737504",
          "quantity": 2
        }
      ]
    }
  ]
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

⌄

⌄

{

"fulfillmentOrderSplits": [

{

"fulfillmentOrderId": "gid://shopify/FulfillmentOrder/1046000796",

"fulfillmentOrderLineItems": [

{

"id": "gid://shopify/FulfillmentOrderLineItem/1058737504",

"quantity": 2

}

]

}

]

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

⌄

⌄

⌄

{

"fulfillmentOrderSplit": {

"fulfillmentOrderSplits": [

{

"fulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/1046000796",

"lineItems": {

"edges": [

{

"cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTAzLCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTAzfQ==",

"node": {

"id": "gid://shopify/FulfillmentOrderLineItem/1058737503",

"totalQuantity": 1

}

}

]

}

},

"remainingFulfillmentOrder": {

"id": "gid://shopify/FulfillmentOrder/1046000797",

"lineItems": {

"edges": [

{

"cursor": "eyJsYXN0X2lkIjoxMDU4NzM3NTA0LCJsYXN0X3ZhbHVlIjoxMDU4NzM3NTA0fQ==",

"node": {

"id": "gid://shopify/FulfillmentOrderLineItem/1058737504",

"totalQuantity": 2

}

}

]

}

}

}

],

"userErrors": []

}


---
*Content truncated at "Updates" section*