---
title: "fulfillment"
description: "Shopify GraphQL Admin API documentation for fulfillment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment

Markdown Content:
fulfillment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment#main-content)

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

    *   
Queries

        *   [assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders)
        *   [available Carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablecarrierservices)
        *   [carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice)
        *   [carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices)
        *   [delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomization)
        *   [delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomizations)
        *   [delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofile)
        *   [delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles)
        *   [delivery Promise Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseparticipants)
        *   [delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseprovider)
        *   [delivery Promise Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromisesettings)
        *   [delivery Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverysettings)
        *   [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)
        *   [fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder)
        *   [fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorders)
        *   [fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice)
        *   [manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualholdsfulfillmentorders)

    *   Mutations   
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

[Anchor to fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment#top)
fulfillment
===========

query

Requires `read_orders` access scope, `read_marketplace_orders` access scope, `read_assigned_fulfillment_orders` access scope, `read_merchant_managed_fulfillment_orders` access scope, `read_third_party_fulfillment_orders` access scope or `read_marketplace_fulfillment_orders` access scope.

Returns a Fulfillment resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the Fulfillment to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment#returns-Fulfillment)Fulfillment

•[Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one or more items in an order. When an order has been completely fulfilled, it means that all the items that are included in the order have been sent to the customer. There can be more than one fulfillment for an order.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a single Fulfillment

#### Query

```graphql
query FulfillmentShow($id: ID!) {
  fulfillment(id: $id) {
    fulfillmentLineItems(first: 10) {
      edges {
        node {
          id
          lineItem {
            title
            variant {
              id
            }
          }
          quantity
          originalTotalSet {
            shopMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }
    status
    estimatedDeliveryAt
    location {
      id
      legacyResourceId
    }
    service {
      handle
    }
    trackingInfo(first: 10) {
      company
      number
      url
    }
    originAddress {
      address1
      address2
      city
      countryCode
      provinceCode
      zip
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Fulfillment/237894043"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentShow($id: ID!) { fulfillment(id: $id) { fulfillmentLineItems(first: 10) { edges { node { id lineItem { title variant { id } } quantity originalTotalSet { shopMoney { amount currencyCode } } } } } status estimatedDeliveryAt location { id legacyResourceId } service { handle } trackingInfo(first: 10) { company number url } originAddress { address1 address2 city countryCode provinceCode zip } } }",
 "variables": {
    "id": "gid://shopify/Fulfillment/237894043"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentShow($id: ID!) {
    fulfillment(id: $id) {
      fulfillmentLineItems(first: 10) {
        edges {
          node {
            id
            lineItem {
              title
              variant {
                id
              }
            }
            quantity
            originalTotalSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      status
      estimatedDeliveryAt
      location {
        id
        legacyResourceId
      }
      service {
        handle
      }
      trackingInfo(first: 10) {
        company
        number
        url
      }
      originAddress {
        address1
        address2
        city
        countryCode
        provinceCode
        zip
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Fulfillment/237894043"
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
  query FulfillmentShow($id: ID!) {
    fulfillment(id: $id) {
      fulfillmentLineItems(first: 10) {
        edges {
          node {
            id
            lineItem {
              title
              variant {
                id
              }
            }
            quantity
            originalTotalSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      status
      estimatedDeliveryAt
      location {
        id
        legacyResourceId
      }
      service {
        handle
      }
      trackingInfo(first: 10) {
        company
        number
        url
      }
      originAddress {
        address1
        address2
        city
        countryCode
        provinceCode
        zip
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Fulfillment/237894043"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentShow($id: ID!) {
      fulfillment(id: $id) {
        fulfillmentLineItems(first: 10) {
          edges {
            node {
              id
              lineItem {
                title
                variant {
                  id
                }
              }
              quantity
              originalTotalSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        status
        estimatedDeliveryAt
        location {
          id
          legacyResourceId
        }
        service {
          handle
        }
        trackingInfo(first: 10) {
          company
          number
          url
        }
        originAddress {
          address1
          address2
          city
          countryCode
          provinceCode
          zip
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Fulfillment/237894043"
    },
  },
});
``` #### Response

```json
{
  "fulfillment": {
    "fulfillmentLineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/FulfillmentLineItem/761422146",
            "lineItem": {
              "title": "Draft",
              "variant": {
                "id": "gid://shopify/ProductVariant/43729076"
              }
            },
            "quantity": 2,
            "originalTotalSet": {
              "shopMoney": {
                "amount": "20.0",
                "currencyCode": "USD"
              }
            }
          }
        }
      ]
    },
    "status": "SUCCESS",
    "estimatedDeliveryAt": null,
    "location": {
      "id": "gid://shopify/Location/124656943",
      "legacyResourceId": "124656943"
    },
    "service": {
      "handle": "manual"
    },
    "trackingInfo": [
      {
        "company": "UPS",
        "number": "1Z1234512345123456",
        "url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z1234512345123456"
      }
    ],
    "originAddress": {
      "address1": "150 Elgin St",
      "address2": null,
      "city": "Ottawa",
      "countryCode": "CA",
      "provinceCode": "ON",
      "zip": "K2P 1L4"
    }
  }
}
``` 
*   ### Retrieves a list of fulfillment events for a specific fulfillment

#### Query

```graphql
query FulfillmentEventList($id: ID!) {
  fulfillment(id: $id) {
    events(first: 10) {
      edges {
        node {
          happenedAt
          status
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Fulfillment/237894043"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentEventList($id: ID!) { fulfillment(id: $id) { events(first: 10) { edges { node { happenedAt status } } } } }",
 "variables": {
    "id": "gid://shopify/Fulfillment/237894043"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentEventList($id: ID!) {
    fulfillment(id: $id) {
      events(first: 10) {
        edges {
          node {
            happenedAt
            status
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Fulfillment/237894043"
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
  query FulfillmentEventList($id: ID!) {
    fulfillment(id: $id) {
      events(first: 10) {
        edges {
          node {
            happenedAt
            status
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Fulfillment/237894043"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentEventList($id: ID!) {
      fulfillment(id: $id) {
        events(first: 10) {
          edges {
            node {
              happenedAt
              status
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Fulfillment/237894043"
    },
  },
});
``` #### Response

```json
{
  "fulfillment": {
    "events": {
      "edges": [
        {
          "node": {
            "happenedAt": "2016-05-02T11:00:00Z",
            "status": "LABEL_PURCHASED"
          }
        },
        {
          "node": {
            "happenedAt": "2016-05-03T11:00:00Z",
            "status": "OUT_FOR_DELIVERY"
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Receive a single Fulfillment

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20FulfillmentShow(%24id%3A%20ID!)%20%7B%0A%20%20fulfillment(id%3A%20%24id)%20%7B%0A%20%20%20%20fulfillmentLineItems(first%3A%2010)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20lineItem%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20variant%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20originalTotalSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20status%0A%20%20%20%20estimatedDeliveryAt%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20legacyResourceId%0A%20%20%20%20%7D%0A%20%20%20%20service%20%7B%0A%20%20%20%20%20%20handle%0A%20%20%20%20%7D%0A%20%20%20%20trackingInfo(first%3A%2010)%20%7B%0A%20%20%20%20%20%20company%0A%20%20%20%20%20%20number%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20originAddress%20%7B%0A%20%20%20%20%20%20address1%0A%20%20%20%20%20%20address2%0A%20%20%20%20%20%20city%0A%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20provinceCode%0A%20%20%20%20%20%20zip%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillment%2F237894043%22%0A%7D)Copy

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

57

58

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query FulfillmentShow($id: ID!) {

 fulfillment(id: $id) {

 fulfillmentLineItems(first: 10) {

 edges {

 node {

 id

 lineItem {

 title

 variant {

 id

 }

 }

 quantity

 originalTotalSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 }

 }

 }

 status

 estimatedDeliveryAt

 location {

 id

 legacyResourceId

 }

 service {

 handle

 }

 trackingInfo(first: 10) {

 company

 number

 url

 }

 originAddress {

 address1

 address2

 city

 countryCode

 provinceCode

 zip

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Fulfillment/237894043"

},

},

);

const data=await response.json();

```
query FulfillmentShow($id: ID!) {
  fulfillment(id: $id) {
    fulfillmentLineItems(first: 10) {
      edges {
        node {
          id
          lineItem {
            title
            variant {
              id
            }
          }
          quantity
          originalTotalSet {
            shopMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }
    status
    estimatedDeliveryAt
    location {
      id
      legacyResourceId
    }
    service {
      handle
    }
    trackingInfo(first: 10) {
      company
      number
      url
    }
    originAddress {
      address1
      address2
      city
      countryCode
      provinceCode
      zip
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
"query": "query FulfillmentShow($id: ID!) { fulfillment(id: $id) { fulfillmentLineItems(first: 10) { edges { node { id lineItem { title variant { id } } quantity originalTotalSet { shopMoney { amount currencyCode } } } } } status estimatedDeliveryAt location { id legacyResourceId } service { handle } trackingInfo(first: 10) { company number url } originAddress { address1 address2 city countryCode provinceCode zip } } }",
 "variables": {
    "id": "gid://shopify/Fulfillment/237894043"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentShow($id: ID!) {
    fulfillment(id: $id) {
      fulfillmentLineItems(first: 10) {
        edges {
          node {
            id
            lineItem {
              title
              variant {
                id
              }
            }
            quantity
            originalTotalSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      status
      estimatedDeliveryAt
      location {
        id
        legacyResourceId
      }
      service {
        handle
      }
      trackingInfo(first: 10) {
        company
        number
        url
      }
      originAddress {
        address1
        address2
        city
        countryCode
        provinceCode
        zip
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Fulfillment/237894043"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentShow($id: ID!) {
      fulfillment(id: $id) {
        fulfillmentLineItems(first: 10) {
          edges {
            node {
              id
              lineItem {
                title
                variant {
                  id
                }
              }
              quantity
              originalTotalSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        status
        estimatedDeliveryAt
        location {
          id
          legacyResourceId
        }
        service {
          handle
        }
        trackingInfo(first: 10) {
          company
          number
          url
        }
        originAddress {
          address1
          address2
          city
          countryCode
          provinceCode
          zip
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Fulfillment/237894043"
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
  query FulfillmentShow($id: ID!) {
    fulfillment(id: $id) {
      fulfillmentLineItems(first: 10) {
        edges {
          node {
            id
            lineItem {
              title
              variant {
                id
              }
            }
            quantity
            originalTotalSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
      }
      status
      estimatedDeliveryAt
      location {
        id
        legacyResourceId
      }
      service {
        handle
      }
      trackingInfo(first: 10) {
        company
        number
        url
      }
      originAddress {
        address1
        address2
        city
        countryCode
        provinceCode
        zip
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Fulfillment/237894043"
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

"id": "gid://shopify/Fulfillment/237894043"

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

"fulfillment": {

"fulfillmentLineItems": {

"edges": [

{

"node": {

"id": "gid://shopify/FulfillmentLineItem/761422146",

"lineItem": {

"title": "Draft",

"variant": {

"id": "gid://shopify/ProductVariant/43729076"

}

},

"quantity": 2,

"originalTotalSet": {

"shopMoney": {

"amount": "20.0",

"currencyCode": "USD"

}

}

}

}

]

},

"status": "SUCCESS",

"estimatedDeliveryAt": null,

"location": {

"id": "gid://shopify/Location/124656943",

"legacyResourceId": "124656943"

},

"service": {

"handle": "manual"

},

"trackingInfo": [

{

"company": "UPS",


---
*Content truncated at "Updates" section*