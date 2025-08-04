---
title: "shopResourceFeedbackCreate"
description: "Shopify GraphQL Admin API documentation for shopresourcefeedbackcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate"
extraction_method: "jina"
sections: ['Apps', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopResourceFeedbackCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate

Markdown Content:
shopResourceFeedbackCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#main-content)

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
*   
Apps

    *   Queries   
    *   
Mutations

        *   [app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall)
        *   [mobile Platform Application Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate)
        *   [mobile Platform Application Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete)
        *   [mobile Platform Application Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationupdate)
        *   [publication Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete)
        *   [shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate)

    *   Objects   

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

[Anchor to shopResourceFeedbackCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#top)
shop Resource Feedback Create
=============================

mutation

Requires `write_resource_feedbacks` access scope. Also: App must be configured to use the Storefront API or as a Sales Channel.

The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

Sending feedback on a shop
--------------------------

You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `requires_action` or `success`. You need to send a `requires_action` feedback request for each step that the merchant is required to complete.

If there are multiple set-up steps that require merchant action, then send feedback with a state of `requires_action` as merchants complete prior steps. And to remove the feedback message from the Shopify admin, send a `success` feedback request.

#### Important

Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#arguments-input)input

•[Resource Feedback Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ResourceFeedbackCreateInput)

required

The fields required to create shop feedback.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ShopResourceFeedbackCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#returns)Shop Resource Feedback Create Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to feedback](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#returns-feedback)feedback

•[App Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

The shop feedback that's created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate#returns-userErrors)user Errors

•[[Shop Resource Feedback Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceFeedbackCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new ResourceFeedback

#### Query

```graphql
mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    feedback {
      messages {
        message
      }
      feedbackGeneratedAt
      state
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
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) { shopResourceFeedbackCreate(input: $input) { feedback { messages { message } feedbackGeneratedAt state } userErrors { field message } } }",
 "variables": {
    "input": {
      "messages": [
        "is not connected. Connect your account to use this sales channel."
      ],
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
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
  mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
      shopResourceFeedbackCreate(input: $input) {
        feedback {
          messages {
            message
          }
          feedbackGeneratedAt
          state
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
        }
    },
  },
});
``` #### Response

```json
{
  "shopResourceFeedbackCreate": {
    "feedback": {
      "messages": [
        {
          "message": "Generic Channel is not connected. Connect your account to use this sales channel."
        }
      ],
      "feedbackGeneratedAt": "2024-12-05T14:05:02Z",
      "state": "REQUIRES_ACTION"
    },
    "userErrors": []
  }
}
``` 
*   ### Create a shop feedback record indicating a problem specific to your app

#### Query

```graphql
mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2024-12-05T14:05:00.688444Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) { shopResourceFeedbackCreate(input: $input) { userErrors { field message } } }",
 "variables": {
    "input": {
      "messages": [
        "is not connected. Connect your account to use this sales channel."
      ],
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2024-12-05T14:05:00.688444Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2024-12-05T14:05:00.688444Z"
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
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2024-12-05T14:05:00.688444Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
      shopResourceFeedbackCreate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2024-12-05T14:05:00.688444Z"
        }
    },
  },
});
``` #### Response

```json
{
  "shopResourceFeedbackCreate": {
    "userErrors": []
  }
}
``` 
*   ### Create a shop feedback record indicating the shop is usable by your app

#### Query

```graphql
mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "state": "ACCEPTED",
    "feedbackGeneratedAt": "2024-12-05T14:05:01.601550Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) { shopResourceFeedbackCreate(input: $input) { userErrors { field message } } }",
 "variables": {
    "input": {
      "state": "ACCEPTED",
      "feedbackGeneratedAt": "2024-12-05T14:05:01.601550Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "state": "ACCEPTED",
            "feedbackGeneratedAt": "2024-12-05T14:05:01.601550Z"
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
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "state": "ACCEPTED",
    "feedbackGeneratedAt": "2024-12-05T14:05:01.601550Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
      shopResourceFeedbackCreate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "state": "ACCEPTED",
            "feedbackGeneratedAt": "2024-12-05T14:05:01.601550Z"
        }
    },
  },
});
``` #### Response

```json
{
  "shopResourceFeedbackCreate": {
    "userErrors": []
  }
}
``` 
*   ### Sending an invalid feedback payload returns an error

#### Query

```graphql
mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "state": "FOOBAR",
    "feedbackGeneratedAt": "2024-12-05T14:05:01.831106Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) { shopResourceFeedbackCreate(input: $input) { userErrors { field message } } }",
 "variables": {
    "input": {
      "state": "FOOBAR",
      "feedbackGeneratedAt": "2024-12-05T14:05:01.831106Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "state": "FOOBAR",
            "feedbackGeneratedAt": "2024-12-05T14:05:01.831106Z"
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
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "state": "FOOBAR",
    "feedbackGeneratedAt": "2024-12-05T14:05:01.831106Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
      shopResourceFeedbackCreate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "state": "FOOBAR",
            "feedbackGeneratedAt": "2024-12-05T14:05:01.831106Z"
        }
    },
  },
});
``` 
*   ### Sending outdated feedback (previous feedback payload has a greater resource_updated_at value) returns an error

#### Query

```graphql
mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "1998-06-07T10:00:00Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) { shopResourceFeedbackCreate(input: $input) { userErrors { field message } } }",
 "variables": {
    "input": {
      "messages": [
        "is not connected. Connect your account to use this sales channel."
      ],
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "1998-06-07T10:00:00Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "1998-06-07T10:00:00Z"
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
  mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "1998-06-07T10:00:00Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation shopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
      shopResourceFeedbackCreate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "1998-06-07T10:00:00Z"
        }
    },
  },
});
``` #### Response

```json
{
  "shopResourceFeedbackCreate": {
    "userErrors": [
      {
        "field": [
          "input"
        ],
        "message": "Feedback for a later version of this resource was already accepted."
      }
    ]
  }
}
``` 
*   ### shopResourceFeedbackCreate reference

Examples
--------

Create a new ResourceFeedback

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ShopResourceFeedbackCreate(%24input%3A%20ResourceFeedbackCreateInput!)%20%7B%0A%20%20shopResourceFeedbackCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20feedback%20%7B%0A%20%20%20%20%20%20messages%20%7B%0A%20%20%20%20%20%20%20%20message%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20feedbackGeneratedAt%0A%20%20%20%20%20%20state%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22messages%22%3A%20%5B%0A%20%20%20%20%20%20%22is%20not%20connected.%20Connect%20your%20account%20to%20use%20this%20sales%20channel.%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22state%22%3A%20%22REQUIRES_ACTION%22%2C%0A%20%20%20%20%22feedbackGeneratedAt%22%3A%20%222024-12-05T14%3A05%3A02.351662Z%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {

 shopResourceFeedbackCreate(input: $input) {

 feedback {

 messages {

 message

 }

 feedbackGeneratedAt

 state

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"messages":[

"is not connected. Connect your account to use this sales channel."

],

"state":"REQUIRES_ACTION",

"feedbackGeneratedAt":"2024-12-05T14:05:02.351662Z"

}

},

},

);

const data=await response.json();

```
mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
  shopResourceFeedbackCreate(input: $input) {
    feedback {
      messages {
        message
      }
      feedbackGeneratedAt
      state
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
"query": "mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) { shopResourceFeedbackCreate(input: $input) { feedback { messages { message } feedbackGeneratedAt state } userErrors { field message } } }",
 "variables": {
    "input": {
      "messages": [
        "is not connected. Connect your account to use this sales channel."
      ],
      "state": "REQUIRES_ACTION",
      "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
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
    "query": `mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
      shopResourceFeedbackCreate(input: $input) {
        feedback {
          messages {
            message
          }
          feedbackGeneratedAt
          state
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "messages": [
                "is not connected. Connect your account to use this sales channel."
            ],
            "state": "REQUIRES_ACTION",
            "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
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
  mutation ShopResourceFeedbackCreate($input: ResourceFeedbackCreateInput!) {
    shopResourceFeedbackCreate(input: $input) {
      feedback {
        messages {
          message
        }
        feedbackGeneratedAt
        state
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "messages": [
      "is not connected. Connect your account to use this sales channel."
    ],
    "state": "REQUIRES_ACTION",
    "feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"
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

7

8

9

›

⌄

⌄

⌄

{

"input": {

"messages": [

"is not connected. Connect your account to use this sales channel."

],

"state": "REQUIRES_ACTION",

"feedbackGeneratedAt": "2024-12-05T14:05:02.351662Z"

}

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

›

⌄

⌄

⌄

⌄

⌄

{

"shopResourceFeedbackCreate": {

"feedback": {

"messages": [

{

"message": "Generic Channel is not connected. Connect your account to use this sales channel."

}

],

"feedbackGeneratedAt": "2024-12-05T14:05:02Z",

"state": "REQUIRES_ACTION"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*