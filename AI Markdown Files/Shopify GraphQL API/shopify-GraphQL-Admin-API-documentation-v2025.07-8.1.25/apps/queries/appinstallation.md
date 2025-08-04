---
title: "appInstallation"
description: "Shopify GraphQL Admin API documentation for appinstallation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appInstallation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation

Markdown Content:
appInstallation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation#main-content)

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
        *   [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)
        *   [publications Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationscount)

    *   Mutations   
    *   Objects   

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
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to appInstallation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation#top)
app Installation
================

query

Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

ID used to lookup AppInstallation.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to AppInstallation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation#returns-AppInstallation)App Installation

•[App Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

Represents an installed application on a shop.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a metafield attached to an app installation

#### Description

Get the metafield value identified by `secret_keys.api_key` on a specific app installation.

#### Query

```graphql
query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  appInstallation(id: $ownerId) {
    apiKey: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "secret_keys",
  "key": "api_key",
  "ownerId": "gid://shopify/AppInstallation/1002334195"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) { appInstallation(id: $ownerId) { apiKey: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "secret_keys",
    "key": "api_key",
    "ownerId": "gid://shopify/AppInstallation/1002334195"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    appInstallation(id: $ownerId) {
      apiKey: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "secret_keys",
        "key": "api_key",
        "ownerId": "gid://shopify/AppInstallation/1002334195"
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
  query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    appInstallation(id: $ownerId) {
      apiKey: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "secret_keys",
  "key": "api_key",
  "ownerId": "gid://shopify/AppInstallation/1002334195"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      appInstallation(id: $ownerId) {
        apiKey: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "secret_keys",
        "key": "api_key",
        "ownerId": "gid://shopify/AppInstallation/1002334195"
    },
  },
});
``` #### Response

```json
{
  "appInstallation": {
    "apiKey": {
      "value": "aSBhbSBhIHNlY3JldCBrZXk="
    }
  }
}
``` 
*   ### Get metafields attached to an app installation

#### Description

Get a page of metafields attached to a specific app installation.

#### Query

```graphql
query AppInstallationMetafields($ownerId: ID!) {
  appInstallation(id: $ownerId) {
    metafields(first: 3) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerId": "gid://shopify/AppInstallation/1002334195"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query AppInstallationMetafields($ownerId: ID!) { appInstallation(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/AppInstallation/1002334195"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AppInstallationMetafields($ownerId: ID!) {
    appInstallation(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }`,
  {
    variables: {
        "ownerId": "gid://shopify/AppInstallation/1002334195"
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
  query AppInstallationMetafields($ownerId: ID!) {
    appInstallation(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }
QUERY

variables = {
  "ownerId": "gid://shopify/AppInstallation/1002334195"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query AppInstallationMetafields($ownerId: ID!) {
      appInstallation(id: $ownerId) {
        metafields(first: 3) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }`,
    "variables": {
        "ownerId": "gid://shopify/AppInstallation/1002334195"
    },
  },
});
``` #### Response

```json
{
  "appInstallation": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "secret_keys",
            "key": "api_key",
            "value": "aSBhbSBhIHNlY3JldCBrZXk="
          }
        }
      ]
    }
  }
}
``` 
*   ### Get the URL used to launch the application

#### Description

The following query retrieves the launchUrl associated with the appInstallation.

#### Query

```graphql
query {
  appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
    launchUrl
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { appInstallation(id: \"gid://shopify/AppInstallation/1002334195\") { launchUrl } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      launchUrl
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
  query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      launchUrl
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      launchUrl
    }
  }`,
});
``` #### Response

```json
{
  "appInstallation": {
    "launchUrl": "https://snowdevil.myshopify.com/admin/api_permissions/1002334195/redirect"
  }
}
``` 
*   ### Get the URL used to uninstall the application

#### Description

The following query retrieves the uninstallUrl associated with the appInstallation.

#### Query

```graphql
query {
  appInstallation(id: "gid://shopify/AppInstallation/688276949") {
    uninstallUrl
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { appInstallation(id: \"gid://shopify/AppInstallation/688276949\") { uninstallUrl } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    appInstallation(id: "gid://shopify/AppInstallation/688276949") {
      uninstallUrl
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
  query {
    appInstallation(id: "gid://shopify/AppInstallation/688276949") {
      uninstallUrl
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    appInstallation(id: "gid://shopify/AppInstallation/688276949") {
      uninstallUrl
    }
  }`,
});
``` #### Response

```json
{
  "appInstallation": {
    "uninstallUrl": null
  }
}
``` 
*   ### Get the access scopes associated with the app installation

#### Description

The following query returns all the access scopes that were granted to the application during installation.

#### Query

```graphql
query {
  appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
    accessScopes {
      handle
      description
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
"query": "query { appInstallation(id: \"gid://shopify/AppInstallation/1002334195\") { accessScopes { handle description } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      accessScopes {
        handle
        description
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
  query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      accessScopes {
        handle
        description
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      accessScopes {
        handle
        description
      }
    }
  }`,
});
``` #### Response

```json
{
  "appInstallation": {
    "accessScopes": [
      {
        "handle": "write_content",
        "description": "Modify store content like articles, blogs, comments, pages, and redirects"
      },
      {
        "handle": "write_themes",
        "description": "Modify theme templates and theme assets"
      },
      {
        "handle": "write_products",
        "description": "Modify products, variants, and collections"
      },
      {
        "handle": "write_customers",
        "description": "Modify customer details and customer groups"
      },
      {
        "handle": "write_orders",
        "description": "Modify orders, transactions, and fulfillments"
      },
      {
        "handle": "write_script_tags",
        "description": "Modify script tags in your store's theme template files"
      },
      {
        "handle": "write_shipping",
        "description": "Modify shipping rates, countries, and provinces"
      },
      {
        "handle": "read_content",
        "description": "Read store content like articles, blogs, comments, pages, and redirects"
      },
      {
        "handle": "read_themes",
        "description": "Read theme templates and theme assets"
      },
      {
        "handle": "read_products",
        "description": "Read products, variants, and collections"
      },
      {
        "handle": "read_customers",
        "description": "Read customer details and customer groups"
      },
      {
        "handle": "read_orders",
        "description": "Read orders, transactions, and fulfillments"
      },
      {
        "handle": "read_script_tags",
        "description": "Read script tags in your store's theme template files"
      },
      {
        "handle": "read_shipping",
        "description": "Read shipping rates, countries, and provinces"
      }
    ]
  }
}
``` 
*   ### Get the active subscriptions for the app installation

#### Description

The following query returns the IDs of the active subscriptions billed by the application. Returns an "access denied" error if the user is not allowed to approve application charges.

#### Query

```graphql
query {
  appInstallation(id: "gid://shopify/AppInstallation/881878037") {
    activeSubscriptions {
      id
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
"query": "query { appInstallation(id: \"gid://shopify/AppInstallation/881878037\") { activeSubscriptions { id } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    appInstallation(id: "gid://shopify/AppInstallation/881878037") {
      activeSubscriptions {
        id
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
  query {
    appInstallation(id: "gid://shopify/AppInstallation/881878037") {
      activeSubscriptions {
        id
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    appInstallation(id: "gid://shopify/AppInstallation/881878037") {
      activeSubscriptions {
        id
      }
    }
  }`,
});
``` #### Response

```json
{
  "appInstallation": {
    "activeSubscriptions": [
      {
        "id": "gid://shopify/AppSubscription/1029266946"
      }
    ]
  }
}
``` 
*   ### Get the app associated with the installation

#### Description

The following query retrieves the application associated with the installation, returning the associated ID.

#### Query

```graphql
query {
  appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
    app {
      id
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
"query": "query { appInstallation(id: \"gid://shopify/AppInstallation/1002334195\") { app { id } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      app {
        id
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
  query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      app {
        id
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    appInstallation(id: "gid://shopify/AppInstallation/1002334195") {
      app {
        id
      }
    }
  }`,
});
``` #### Response

```json
{
  "appInstallation": {
    "app": {
      "id": "gid://shopify/App/1002334195"
    }
  }
}
``` 
*   ### Retrieves all application credits

#### Query

```graphql
query GetAppInstallationCredits($appInstallationId: ID!) {
  appInstallation(id: $appInstallationId) {
    credits(first: 10) {
      edges {
        node {
          amount {
            amount
            currencyCode
          }
          createdAt
          description
          id
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "appInstallationId": "gid://shopify/AppInstallation/236444539"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query GetAppInstallationCredits($appInstallationId: ID!) { appInstallation(id: $appInstallationId) { credits(first: 10) { edges { node { amount { amount currencyCode } createdAt description id } } } } }",
 "variables": {
    "appInstallationId": "gid://shopify/AppInstallation/236444539"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetAppInstallationCredits($appInstallationId: ID!) {
    appInstallation(id: $appInstallationId) {
      credits(first: 10) {
        edges {
          node {
            amount {
              amount
              currencyCode
            }
            createdAt
            description
            id
          }
        }
      }
    }
  }`,
  {
    variables: {
        "appInstallationId": "gid://shopify/AppInstallation/236444539"
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
  query GetAppInstallationCredits($appInstallationId: ID!) {
    appInstallation(id: $appInstallationId) {
      credits(first: 10) {
        edges {
          node {
            amount {
              amount
              currencyCode
            }
            createdAt
            description
            id
          }
        }
      }
    }
  }
QUERY

variables = {
  "appInstallationId": "gid://shopify/AppInstallation/236444539"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query GetAppInstallationCredits($appInstallationId: ID!) {
      appInstallation(id: $appInstallationId) {
        credits(first: 10) {
          edges {
            node {
              amount {
                amount
                currencyCode
              }
              createdAt
              description
              id
            }
          }
        }
      }
    }`,
    "variables": {
        "appInstallationId": "gid://shopify/AppInstallation/236444539"
    },
  },
});
``` #### Response

```json
{
  "appInstallation": {
    "credits": {
      "edges": []
    }
  }
}
``` 

Examples
--------

Get a metafield attached to an app installation

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20AppInstallationMetafield(%24namespace%3A%20String!%2C%20%24key%3A%20String!%2C%20%24ownerId%3A%20ID!)%20%7B%0A%20%20appInstallation(id%3A%20%24ownerId)%20%7B%0A%20%20%20%20apiKey%3A%20metafield(namespace%3A%20%24namespace%2C%20key%3A%20%24key)%20%7B%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22namespace%22%3A%20%22secret_keys%22%2C%0A%20%20%22key%22%3A%20%22api_key%22%2C%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FAppInstallation%2F1002334195%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {

 appInstallation(id: $ownerId) {

 apiKey: metafield(namespace: $namespace, key: $key) {

 value

 }

 }

 }`,

{

variables:{

"namespace":"secret_keys",

"key":"api_key",

"ownerId":"gid://shopify/AppInstallation/1002334195"

},

},

);

const data=await response.json();

```
query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  appInstallation(id: $ownerId) {
    apiKey: metafield(namespace: $namespace, key: $key) {
      value
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
"query": "query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) { appInstallation(id: $ownerId) { apiKey: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "secret_keys",
    "key": "api_key",
    "ownerId": "gid://shopify/AppInstallation/1002334195"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    appInstallation(id: $ownerId) {
      apiKey: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "secret_keys",
        "key": "api_key",
        "ownerId": "gid://shopify/AppInstallation/1002334195"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      appInstallation(id: $ownerId) {
        apiKey: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "secret_keys",
        "key": "api_key",
        "ownerId": "gid://shopify/AppInstallation/1002334195"
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
  query AppInstallationMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    appInstallation(id: $ownerId) {
      apiKey: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "secret_keys",
  "key": "api_key",
  "ownerId": "gid://shopify/AppInstallation/1002334195"
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

›

⌄

{

"namespace": "secret_keys",

"key": "api_key",

"ownerId": "gid://shopify/AppInstallation/1002334195"

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

›

⌄

⌄

⌄

{

"appInstallation": {

"apiKey": {

"value": "aSBhbSBhIHNlY3JldCBrZXk="

}

}

}


---
*Content truncated at "Updates" section*