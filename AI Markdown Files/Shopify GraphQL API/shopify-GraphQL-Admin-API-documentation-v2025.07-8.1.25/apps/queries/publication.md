---
title: "publication"
description: "Shopify GraphQL Admin API documentation for publication"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/publication"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publication - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/publication

Markdown Content:
publication - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication#main-content)

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

    *   
Queries

        *   [app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)
        *   [app By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle)
        *   [app By Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey)
        *   [app Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation)
        *   [app Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallations)
        *   [current App Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation)
        *   [mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication)
        *   [mobile Platform Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications)
        *   [publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication)

    *   Mutations   
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

[Anchor to publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication#top)
publication
===========

query

Lookup a publication by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the Publication to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication#returns-Publication)Publication

•[Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

A publication is a group of products and collections that is published to an app.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a publication that doesn't exist

#### Description

Retrieving a publication by an ID that doesn't exist returns `null`.

#### Query

```graphql
query publication($id: ID!) {
  publication(id: $id) {
    name
    collections(first: 5) {
      edges {
        node {
          id
          title
          updatedAt
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Publication/-1"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query publication($id: ID!) { publication(id: $id) { name collections(first: 5) { edges { node { id title updatedAt } } } } }",
 "variables": {
    "id": "gid://shopify/Publication/-1"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query publication($id: ID!) {
    publication(id: $id) {
      name
      collections(first: 5) {
        edges {
          node {
            id
            title
            updatedAt
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Publication/-1"
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
  query publication($id: ID!) {
    publication(id: $id) {
      name
      collections(first: 5) {
        edges {
          node {
            id
            title
            updatedAt
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Publication/-1"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query publication($id: ID!) {
      publication(id: $id) {
        name
        collections(first: 5) {
          edges {
            node {
              id
              title
              updatedAt
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Publication/-1"
    },
  },
});
``` #### Response

```json
{
  "publication": null
}
``` 
*   ### Retrieve an existing publication

#### Query

```graphql
query publication($id: ID!) {
  publication(id: $id) {
    name
    collections(first: 5) {
      edges {
        node {
          id
          title
          updatedAt
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Publication/244171671"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query publication($id: ID!) { publication(id: $id) { name collections(first: 5) { edges { node { id title updatedAt } } } } }",
 "variables": {
    "id": "gid://shopify/Publication/244171671"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query publication($id: ID!) {
    publication(id: $id) {
      name
      collections(first: 5) {
        edges {
          node {
            id
            title
            updatedAt
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Publication/244171671"
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
  query publication($id: ID!) {
    publication(id: $id) {
      name
      collections(first: 5) {
        edges {
          node {
            id
            title
            updatedAt
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Publication/244171671"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query publication($id: ID!) {
      publication(id: $id) {
        name
        collections(first: 5) {
          edges {
            node {
              id
              title
              updatedAt
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Publication/244171671"
    },
  },
});
``` #### Response

```json
{
  "publication": {
    "name": "Online Store",
    "collections": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Collection/79210309",
            "title": "Custom Other Items",
            "updatedAt": "2008-10-10T00:00:00Z"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Collection/94229130",
            "title": "All products more expensive than free",
            "updatedAt": "2006-02-02T00:00:00Z"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Collection/142458073",
            "title": "All snowboards",
            "updatedAt": "2006-02-02T00:00:00Z"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Collection/411960790",
            "title": "Bold snowboards",
            "updatedAt": "2006-02-02T00:00:00Z"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Collection/431528632",
            "title": "All arbor products tagged deepsnow",
            "updatedAt": "2006-02-02T00:00:00Z"
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Retrieve a publication that doesn't exist

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20publication(%24id%3A%20ID!)%20%7B%0A%20%20publication(id%3A%20%24id)%20%7B%0A%20%20%20%20name%0A%20%20%20%20collections(first%3A%205)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FPublication%2F-1%22%0A%7D)Copy

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

 query publication($id: ID!) {

 publication(id: $id) {

 name

 collections(first: 5) {

 edges {

 node {

 id

 title

 updatedAt

 }

 }

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Publication/-1"

},

},

);

const data=await response.json();

```
query publication($id: ID!) {
  publication(id: $id) {
    name
    collections(first: 5) {
      edges {
        node {
          id
          title
          updatedAt
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
"query": "query publication($id: ID!) { publication(id: $id) { name collections(first: 5) { edges { node { id title updatedAt } } } } }",
 "variables": {
    "id": "gid://shopify/Publication/-1"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query publication($id: ID!) {
    publication(id: $id) {
      name
      collections(first: 5) {
        edges {
          node {
            id
            title
            updatedAt
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Publication/-1"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query publication($id: ID!) {
      publication(id: $id) {
        name
        collections(first: 5) {
          edges {
            node {
              id
              title
              updatedAt
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Publication/-1"
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
  query publication($id: ID!) {
    publication(id: $id) {
      name
      collections(first: 5) {
        edges {
          node {
            id
            title
            updatedAt
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Publication/-1"
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

"id": "gid://shopify/Publication/-1"

}

Hide content

Response
--------

JSON

9

1

2

3

›

⌄

{

"publication": null

}


---
*Content truncated at "Updates" section*