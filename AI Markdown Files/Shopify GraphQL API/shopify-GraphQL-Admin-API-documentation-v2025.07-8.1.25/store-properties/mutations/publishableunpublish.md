---
title: "publishableUnpublish"
description: "Shopify GraphQL Admin API documentation for publishableunpublish"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publishableUnpublish - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish

Markdown Content:
publishableUnpublish - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#main-content)

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
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store Properties

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
        *   [publishable Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish)
        *   [publishable Publish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel)
        *   [publishable Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish)
        *   [publishable Unpublish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel)
        *   [shop Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate)

    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to publishableUnpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#top)
publishable Unpublish
=====================

mutation

Requires `write_publications` access scope. Also: The user must have permission to create and edit products or create and edit catalogs.

Unpublishes a resource from a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The resource to delete or update publications for.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#arguments-input)input

•[[Publication Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

required

Specifies the input fields required to unpublish a resource.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PublishableUnpublishPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#returns)Publishable Unpublish Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to publishable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#returns-publishable)publishable

•[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

Resource that has been unpublished.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a collection listing to unpublish a collection from your app

#### Query

```graphql
mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
  publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
    publishable {
      publishedOnPublication(publicationId: $publicationId)
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
  "collectionId": "gid://shopify/Collection/142458073",
  "publicationId": "gid://shopify/Publication/762454635"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) { publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "collectionId": "gid://shopify/Collection/142458073",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "collectionId": "gid://shopify/Collection/142458073",
        "publicationId": "gid://shopify/Publication/762454635"
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
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "collectionId": "gid://shopify/Collection/142458073",
  "publicationId": "gid://shopify/Publication/762454635"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
        publishable {
          publishedOnPublication(publicationId: $publicationId)
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "collectionId": "gid://shopify/Collection/142458073",
        "publicationId": "gid://shopify/Publication/762454635"
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "publishedOnPublication": false
    },
    "userErrors": []
  }
}
``` 
*   ### Delete a product listing to unpublish a product from your app

#### Query

```graphql
mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
  publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
    publishable {
      publishedOnPublication(publicationId: $publicationId)
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
  "productId": "gid://shopify/Product/108828309",
  "publicationId": "gid://shopify/Publication/762454635"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) { publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "productId": "gid://shopify/Product/108828309",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/108828309",
        "publicationId": "gid://shopify/Publication/762454635"
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
  mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/108828309",
  "publicationId": "gid://shopify/Publication/762454635"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PublishableUnpublish($productId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $productId, input: {publicationId: $publicationId}) {
        publishable {
          publishedOnPublication(publicationId: $publicationId)
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/108828309",
        "publicationId": "gid://shopify/Publication/762454635"
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "publishedOnPublication": false
    },
    "userErrors": []
  }
}
``` 
*   ### Error response

#### Description

Attempting to unpublish a product without providing either a channel ID or a publication ID returns an error.

#### Query

```graphql
mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/108828309",
  "input": {
    "publishDate": "2024-11-14T11:45:48-05:00"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "input": {
      "publishDate": "2024-11-14T11:45:48-05:00"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "publishDate": "2024-11-14T11:45:48-05:00"
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
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "input": {
    "publishDate": "2024-11-14T11:45:48-05:00"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "publishDate": "2024-11-14T11:45:48-05:00"
        }
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 4
      },
      "resourcePublicationsCount": {
        "count": 4
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": [
      {
        "field": [
          "input",
          "0",
          "publicationId"
        ],
        "message": "PublicationId cannot be empty"
      }
    ]
  }
}
``` 
*   ### Unpublish a product from a channel

#### Query

```graphql
mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/108828309",
  "input": {
    "channelId": "gid://shopify/Channel/762454635"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/762454635"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "channelId": "gid://shopify/Channel/762454635"
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
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "input": {
    "channelId": "gid://shopify/Channel/762454635"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "channelId": "gid://shopify/Channel/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 3
      },
      "resourcePublicationsCount": {
        "count": 3
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": []
  }
}
``` 
*   ### Unpublish a product from a non-existing channel

#### Query

```graphql
mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/108828309",
  "input": {
    "channelId": "gid://shopify/Channel/0"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/0"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "channelId": "gid://shopify/Channel/0"
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
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "input": {
    "channelId": "gid://shopify/Channel/0"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "channelId": "gid://shopify/Channel/0"
        }
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 4
      },
      "resourcePublicationsCount": {
        "count": 4
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": [
      {
        "field": [
          "input",
          "0",
          "publicationId"
        ],
        "message": "Channel does not exist or is not publishable"
      }
    ]
  }
}
``` 
*   ### Unpublish a product from a non-existing publication

#### Query

```graphql
mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/108828309",
  "input": {
    "publicationId": "gid://shopify/Publication/0"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "input": {
      "publicationId": "gid://shopify/Publication/0"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "publicationId": "gid://shopify/Publication/0"
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
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "input": {
    "publicationId": "gid://shopify/Publication/0"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "publicationId": "gid://shopify/Publication/0"
        }
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 4
      },
      "resourcePublicationsCount": {
        "count": 4
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": [
      {
        "field": [
          "input",
          "0",
          "publicationId"
        ],
        "message": "Publication does not exist or is not publishable"
      }
    ]
  }
}
``` 
*   ### Unpublish a product from a publication

#### Query

```graphql
mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/108828309",
  "input": {
    "publicationId": "gid://shopify/Publication/762454635"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635"
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
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "input": {
    "publicationId": "gid://shopify/Publication/762454635"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 3
      },
      "resourcePublicationsCount": {
        "count": 3
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": []
  }
}
``` 
*   ### Unpublish a product using both a channel ID and publication ID

#### Description

If you provide a channel ID and publication ID, then only the publication ID is used.

#### Query

```graphql
mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/108828309",
  "input": {
    "channelId": "gid://shopify/Channel/762454635",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) { publishableUnpublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "input": {
      "channelId": "gid://shopify/Channel/762454635",
      "publicationId": "gid://shopify/Publication/762454635"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "channelId": "gid://shopify/Channel/762454635",
            "publicationId": "gid://shopify/Publication/762454635"
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
  mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
    publishableUnpublish(id: $id, input: $input) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "input": {
    "channelId": "gid://shopify/Channel/762454635",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
      publishableUnpublish(id: $id, input: $input) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "input": {
            "channelId": "gid://shopify/Channel/762454635",
            "publicationId": "gid://shopify/Publication/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishableUnpublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 3
      },
      "resourcePublicationsCount": {
        "count": 3
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": []
  }
}
``` 
*   ### publishableUnpublish reference

Examples
--------

Delete a collection listing to unpublish a collection from your app

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PublishableUnpublish(%24collectionId%3A%20ID!%2C%20%24publicationId%3A%20ID!)%20%7B%0A%20%20publishableUnpublish(id%3A%20%24collectionId%2C%20input%3A%20%7BpublicationId%3A%20%24publicationId%7D)%20%7B%0A%20%20%20%20publishable%20%7B%0A%20%20%20%20%20%20publishedOnPublication(publicationId%3A%20%24publicationId)%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22collectionId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F142458073%22%2C%0A%20%20%22publicationId%22%3A%20%22gid%3A%2F%2Fshopify%2FPublication%2F762454635%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {

 publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {

 publishable {

 publishedOnPublication(publicationId: $publicationId)

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"collectionId":"gid://shopify/Collection/142458073",

"publicationId":"gid://shopify/Publication/762454635"

},

},

);

const data=await response.json();

```
mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
  publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
    publishable {
      publishedOnPublication(publicationId: $publicationId)
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
"query": "mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) { publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "collectionId": "gid://shopify/Collection/142458073",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "collectionId": "gid://shopify/Collection/142458073",
        "publicationId": "gid://shopify/Publication/762454635"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
      publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
        publishable {
          publishedOnPublication(publicationId: $publicationId)
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "collectionId": "gid://shopify/Collection/142458073",
        "publicationId": "gid://shopify/Publication/762454635"
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
  mutation PublishableUnpublish($collectionId: ID!, $publicationId: ID!) {
    publishableUnpublish(id: $collectionId, input: {publicationId: $publicationId}) {
      publishable {
        publishedOnPublication(publicationId: $publicationId)
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "collectionId": "gid://shopify/Collection/142458073",
  "publicationId": "gid://shopify/Publication/762454635"
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

"collectionId": "gid://shopify/Collection/142458073",

"publicationId": "gid://shopify/Publication/762454635"

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

"publishableUnpublish": {

"publishable": {

"publishedOnPublication": false

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*