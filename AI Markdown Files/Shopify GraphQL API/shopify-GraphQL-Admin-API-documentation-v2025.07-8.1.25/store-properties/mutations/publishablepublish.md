---
title: "publishablePublish"
description: "Shopify GraphQL Admin API documentation for publishablepublish"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publishablePublish - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish

Markdown Content:
publishablePublish - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#main-content)

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
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store properties

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
        *   [location Local Pickup Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable)
        *   [location Local Pickup Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable)
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

[Anchor to publishablePublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#top)
publishable Publish
===================

mutation

Requires `write_publications` access scope. Also: The user must have permission to create and edit products or create and edit catalogs.

Publishes a resource to a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The resource to create or update publications for.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#arguments-input)input

•[[Publication Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationInput)

required

Specifies the input fields required to publish a resource.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PublishablePublishPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#returns)Publishable Publish Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to publishable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#returns-publishable)publishable

•[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

Resource that has been published.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a collection listing to publish a collection to your app

#### Query

```graphql
mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
  publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
  "collectionId": "gid://shopify/Collection/636030761",
  "publicationId": "gid://shopify/Publication/762454635"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) { publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "collectionId": "gid://shopify/Collection/636030761",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
        "collectionId": "gid://shopify/Collection/636030761",
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
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
  "collectionId": "gid://shopify/Collection/636030761",
  "publicationId": "gid://shopify/Publication/762454635"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
      publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
        "collectionId": "gid://shopify/Collection/636030761",
        "publicationId": "gid://shopify/Publication/762454635"
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": {
      "publishedOnPublication": true
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product listing to publish a product to your app

#### Query

```graphql
mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/558169081",
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
"query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/558169081",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/558169081",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/558169081",
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
    "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/558169081",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 1
      },
      "resourcePublicationsCount": {
        "count": 1
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": []
  }
}
``` 
*   ### Publish a collection with a publication ID

#### Query

```graphql
mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Collection/636030761",
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
"query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/636030761",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Collection/636030761",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Collection/636030761",
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
    "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Collection/636030761",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 1
      },
      "resourcePublicationsCount": {
        "count": 1
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": []
  }
}
``` 
*   ### Publish a product that does not belong to the shop

#### Description

Attempting to publish a product that does not belong to the same shop returns an error.

#### Query

```graphql
mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/921728736",
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
"query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/921728736",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/921728736",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/921728736",
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
    "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/921728736",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": null,
    "shop": {
      "publicationCount": 8
    },
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Resource does not exist"
      }
    ]
  }
}
``` 
*   ### Publish a product that does not exist

#### Description

Attempting to publish a product that does not exists returns an error.

#### Query

```graphql
mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/0",
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
"query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/0",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/0",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/0",
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
    "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/0",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635"
        }
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": null,
    "shop": {
      "publicationCount": 8
    },
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Resource does not exist"
      }
    ]
  }
}
``` 
*   ### Publish a product with a future publication date

#### Query

```graphql
mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/558169081",
  "input": {
    "publicationId": "gid://shopify/Publication/762454635",
    "publishDate": "2999-01-01T00:00:00-00:00"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/558169081",
    "input": {
      "publicationId": "gid://shopify/Publication/762454635",
      "publishDate": "2999-01-01T00:00:00-00:00"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/558169081",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635",
            "publishDate": "2999-01-01T00:00:00-00:00"
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/558169081",
  "input": {
    "publicationId": "gid://shopify/Publication/762454635",
    "publishDate": "2999-01-01T00:00:00-00:00"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/558169081",
        "input": {
            "publicationId": "gid://shopify/Publication/762454635",
            "publishDate": "2999-01-01T00:00:00-00:00"
        }
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 0
      },
      "resourcePublicationsCount": {
        "count": 0
      }
    },
    "shop": {
      "publicationCount": 8
    },
    "userErrors": []
  }
}
``` 
*   ### Publish a product with an invalid publication ID

#### Description

Attempting to publish a product with an invalid publication ID returns an error.

#### Query

```graphql
mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
  publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/558169081",
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
"query": "mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/558169081",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/558169081",
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
  mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
    publishablePublish(id: $id, input: $input) {
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
  "id": "gid://shopify/Product/558169081",
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
    "query": `mutation publishablePublish($id: ID!, $input: [PublicationInput!]!) {
      publishablePublish(id: $id, input: $input) {
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
        "id": "gid://shopify/Product/558169081",
        "input": {
            "publicationId": "gid://shopify/Publication/0"
        }
    },
  },
});
``` #### Response

```json
{
  "publishablePublish": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 0
      },
      "resourcePublicationsCount": {
        "count": 0
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
*   ### publishablePublish reference

Examples
--------

Create a collection listing to publish a collection to your app

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20PublishablePublish(%24collectionId%3A%20ID!%2C%20%24publicationId%3A%20ID!)%20%7B%0A%20%20publishablePublish(id%3A%20%24collectionId%2C%20input%3A%20%7BpublicationId%3A%20%24publicationId%7D)%20%7B%0A%20%20%20%20publishable%20%7B%0A%20%20%20%20%20%20publishedOnPublication(publicationId%3A%20%24publicationId)%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22collectionId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F636030761%22%2C%0A%20%20%22publicationId%22%3A%20%22gid%3A%2F%2Fshopify%2FPublication%2F762454635%22%0A%7D)Copy

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

 mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {

 publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {

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

"collectionId":"gid://shopify/Collection/636030761",

"publicationId":"gid://shopify/Publication/762454635"

},

},

);

const data=await response.json();

```
mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
  publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
"query": "mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) { publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) { publishable { publishedOnPublication(publicationId: $publicationId) } userErrors { field message } } }",
 "variables": {
    "collectionId": "gid://shopify/Collection/636030761",
    "publicationId": "gid://shopify/Publication/762454635"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
        "collectionId": "gid://shopify/Collection/636030761",
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
    "query": `mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
      publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
        "collectionId": "gid://shopify/Collection/636030761",
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
  mutation PublishablePublish($collectionId: ID!, $publicationId: ID!) {
    publishablePublish(id: $collectionId, input: {publicationId: $publicationId}) {
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
  "collectionId": "gid://shopify/Collection/636030761",
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

"collectionId": "gid://shopify/Collection/636030761",

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

"publishablePublish": {

"publishable": {

"publishedOnPublication": true

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*