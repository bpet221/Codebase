---
title: "tagsAdd"
description: "Shopify GraphQL Admin API documentation for tagsadd"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: tagsAdd - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd

Markdown Content:
tagsAdd - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#main-content)

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

    *   Queries   
    *   
Mutations

        *   [customer Payment Method Credit Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardupdate)
        *   [customer Payment Method Get Update Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodgetupdateurl)
        *   [customer Payment Method Paypal Billing Agreement Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate)
        *   [customer Payment Method Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodrevoke)
        *   [fulfillment Constraint Rule Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruledelete)
        *   [fulfillment Constraint Rule Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruleupdate)
        *   [gift Card Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcredit)
        *   [gift Card Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddeactivate)
        *   [gift Card Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit)
        *   [gift Card Send Notification To Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtocustomer)
        *   [gift Card Send Notification To Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtorecipient)
        *   [market Regions Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionsdelete)
        *   [payment Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationactivation)
        *   [payment Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationcreate)
        *   [payment Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationdelete)
        *   [payment Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationupdate)
        *   [payment Reminder Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend)
        *   [payment Terms Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete)
        *   [payment Terms Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate)
        *   [product Feed Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeedcreate)
        *   [product Feed Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeeddelete)
        *   [product Full Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfullsync)
        *   [saved Search Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchcreate)
        *   [saved Search Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchupdate)
        *   [staged Upload Target Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetgenerate)
        *   [staged Upload Targets Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetsgenerate)
        *   [tags Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd)
        *   [tags Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsremove)
        *   [validation Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationcreate)
        *   [validation Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationdelete)
        *   [validation Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationupdate)
        *   [web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencedelete)

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

[Anchor to tagsAdd](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#top)
tags Add
========

mutation

Add tags to an order, a draft order, a customer, a product, or an online store article.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of a resource to add tags to.

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#arguments-tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

A list of tags to add to the resource. Can be an array of strings or a single string composed of a comma-separated list of values. Example values: `["tag1", "tag2", "tag3"]`, `"tag1, tag2, tag3"`.

* * *

Was this section helpful?

Yes No

[Anchor to TagsAddPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#returns)Tags Add Payload returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to node](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#returns-node)node

•[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

The object that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add tags to a customer

#### Query

```graphql
mutation addTags($id: ID!, $tags: [String!]!) {
  tagsAdd(id: $id, tags: $tags) {
    node {
      id
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Customer/544365967",
  "tags": "one, two, three"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation addTags($id: ID!, $tags: [String!]!) { tagsAdd(id: $id, tags: $tags) { node { id } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967",
    "tags": "one, two, three"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/544365967",
        "tags": "one, two, three"
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
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/544365967",
  "tags": "one, two, three"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation addTags($id: ID!, $tags: [String!]!) {
      tagsAdd(id: $id, tags: $tags) {
        node {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/544365967",
        "tags": "one, two, three"
    },
  },
});
``` #### Response

```json
{
  "tagsAdd": {
    "node": {
      "id": "gid://shopify/Customer/544365967"
    },
    "userErrors": []
  }
}
``` 
*   ### Add tags to a product

#### Query

```graphql
mutation addTags($id: ID!, $tags: [String!]!) {
  tagsAdd(id: $id, tags: $tags) {
    node {
      id
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Product/20995642",
  "tags": "one, two, three"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation addTags($id: ID!, $tags: [String!]!) { tagsAdd(id: $id, tags: $tags) { node { id } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/Product/20995642",
    "tags": "one, two, three"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/20995642",
        "tags": "one, two, three"
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
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/20995642",
  "tags": "one, two, three"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation addTags($id: ID!, $tags: [String!]!) {
      tagsAdd(id: $id, tags: $tags) {
        node {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/20995642",
        "tags": "one, two, three"
    },
  },
});
``` #### Response

```json
{
  "tagsAdd": {
    "node": {
      "id": "gid://shopify/Product/20995642"
    },
    "userErrors": []
  }
}
``` 
*   ### Attempt to add tags to an product that does not exist

#### Query

```graphql
mutation addTags($id: ID!, $tags: [String!]!) {
  tagsAdd(id: $id, tags: $tags) {
    node {
      id
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Product/12345",
  "tags": "one, two, three"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation addTags($id: ID!, $tags: [String!]!) { tagsAdd(id: $id, tags: $tags) { node { id } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/Product/12345",
    "tags": "one, two, three"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/12345",
        "tags": "one, two, three"
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
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/12345",
  "tags": "one, two, three"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation addTags($id: ID!, $tags: [String!]!) {
      tagsAdd(id: $id, tags: $tags) {
        node {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/12345",
        "tags": "one, two, three"
    },
  },
});
``` #### Response

```json
{
  "tagsAdd": {
    "node": null,
    "userErrors": [
      {
        "message": "Product does not exist"
      }
    ]
  }
}
``` 
*   ### tagsAdd reference

Examples
--------

Add tags to a customer

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20addTags(%24id%3A%20ID!%2C%20%24tags%3A%20%5BString!%5D!)%20%7B%0A%20%20tagsAdd(id%3A%20%24id%2C%20tags%3A%20%24tags)%20%7B%0A%20%20%20%20node%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%22tags%22%3A%20%22one%2C%20two%2C%20three%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation addTags($id: ID!, $tags: [String!]!) {

 tagsAdd(id: $id, tags: $tags) {

 node {

 id

 }

 userErrors {

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Customer/544365967",

"tags":"one, two, three"

},

},

);

const data=await response.json();

```
mutation addTags($id: ID!, $tags: [String!]!) {
  tagsAdd(id: $id, tags: $tags) {
    node {
      id
    }
    userErrors {
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
"query": "mutation addTags($id: ID!, $tags: [String!]!) { tagsAdd(id: $id, tags: $tags) { node { id } userErrors { message } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967",
    "tags": "one, two, three"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/544365967",
        "tags": "one, two, three"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation addTags($id: ID!, $tags: [String!]!) {
      tagsAdd(id: $id, tags: $tags) {
        node {
          id
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/544365967",
        "tags": "one, two, three"
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
  mutation addTags($id: ID!, $tags: [String!]!) {
    tagsAdd(id: $id, tags: $tags) {
      node {
        id
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/544365967",
  "tags": "one, two, three"
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

"id": "gid://shopify/Customer/544365967",

"tags": "one, two, three"

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

6

7

8

›

⌄

⌄

⌄

{

"tagsAdd": {

"node": {

"id": "gid://shopify/Customer/544365967"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*