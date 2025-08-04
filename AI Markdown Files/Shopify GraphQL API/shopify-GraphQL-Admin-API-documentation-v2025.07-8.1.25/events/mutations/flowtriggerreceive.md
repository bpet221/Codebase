---
title: "flowTriggerReceive"
description: "Shopify GraphQL Admin API documentation for flowtriggerreceive"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive"
extraction_method: "jina"
sections: ['Events', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: flowTriggerReceive - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive

Markdown Content:
flowTriggerReceive - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#main-content)

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
*   
Events

    *   Queries   
    *   
Mutations

        *   [flow Trigger Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive)

    *   Objects   

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

[Anchor to flowTriggerReceive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#top)
flow Trigger Receive
====================

mutation

Triggers any workflows that begin with the trigger specified in the request body. To learn more, refer to [_Create Shopify Flow triggers_](https://shopify.dev/apps/flow/triggers).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#arguments-handle)handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The handle of the trigger.

[Anchor to payload](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#arguments-payload)payload

•[JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

The payload needed to run the Trigger.

[Anchor to body](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#arguments-body)body

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

* * *

Was this section helpful?

Yes No

[Anchor to FlowTriggerReceivePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#returns)Flow Trigger Receive Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowtriggerreceive#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Trigger workflows defined in Shopify Flow

#### Description

Triggers any workflow that uses the trigger specified in the payload.

#### Query

```graphql
mutation flowTriggerReceive($handle: String, $payload: JSON) {
  flowTriggerReceive(handle: $handle, payload: $payload) {
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "handle": "handle",
  "payload": {
    "key": "Some value"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation flowTriggerReceive($handle: String, $payload: JSON) { flowTriggerReceive(handle: $handle, payload: $payload) { userErrors { field message } } }",
 "variables": {
    "handle": "handle",
    "payload": {
      "key": "Some value"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "handle": "handle",
        "payload": {
            "key": "Some value"
        }
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
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "handle": "handle",
  "payload": {
    "key": "Some value"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation flowTriggerReceive($handle: String, $payload: JSON) {
      flowTriggerReceive(handle: $handle, payload: $payload) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "handle": "handle",
        "payload": {
            "key": "Some value"
        }
    },
  },
});
``` #### Response

```json
{
  "flowTriggerReceive": {
    "userErrors": []
  }
}
``` 
*   ### flowTriggerReceive reference

Examples
--------

Trigger workflows defined in Shopify Flow

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20flowTriggerReceive(%24handle%3A%20String%2C%20%24payload%3A%20JSON)%20%7B%0A%20%20flowTriggerReceive(handle%3A%20%24handle%2C%20payload%3A%20%24payload)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22handle%22%3A%20%22handle%22%2C%0A%20%20%22payload%22%3A%20%7B%0A%20%20%20%20%22key%22%3A%20%22Some%20value%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation flowTriggerReceive($handle: String, $payload: JSON) {

 flowTriggerReceive(handle: $handle, payload: $payload) {

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"handle":"handle",

"payload":{

"key":"Some value"

}

},

},

);

const data=await response.json();

```
mutation flowTriggerReceive($handle: String, $payload: JSON) {
  flowTriggerReceive(handle: $handle, payload: $payload) {
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
"query": "mutation flowTriggerReceive($handle: String, $payload: JSON) { flowTriggerReceive(handle: $handle, payload: $payload) { userErrors { field message } } }",
 "variables": {
    "handle": "handle",
    "payload": {
      "key": "Some value"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "handle": "handle",
        "payload": {
            "key": "Some value"
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation flowTriggerReceive($handle: String, $payload: JSON) {
      flowTriggerReceive(handle: $handle, payload: $payload) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "handle": "handle",
        "payload": {
            "key": "Some value"
        }
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
  mutation flowTriggerReceive($handle: String, $payload: JSON) {
    flowTriggerReceive(handle: $handle, payload: $payload) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "handle": "handle",
  "payload": {
    "key": "Some value"
  }
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

5

6

›

⌄

⌄

{

"handle": "handle",

"payload": {

"key": "Some value"

}

}

Hide content

Response
--------

JSON

9

1

2

3

4

5

›

⌄

⌄

{

"flowTriggerReceive": {

"userErrors": []

}

}


---
*Content truncated at "Updates" section*