---
title: "shop"
description: "Shopify GraphQL Admin API documentation for shop"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/shop"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shop - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/shop

Markdown Content:
shop - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop#main-content)

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

    *   
Queries

        *   [business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentities)
        *   [business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentity)
        *   [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)
        *   [location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier)
        *   [shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop)

    *   Mutations   
    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop#top)
shop
====

query

Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains business and store management settings for the shop.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to Shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop#returns-Shop)Shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

Represents a collection of general settings and information about the shop.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a metafield attached to a shop

#### Description

Get the metafield value identified by `my_fields.copyright_year` on a specific shop.

#### Query

```graphql
query ShopMetafield($namespace: String!, $key: String!) {
  shop {
    copyrightYear: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "copyright_year"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopMetafield($namespace: String!, $key: String!) { shop { copyrightYear: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "copyright_year"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopMetafield($namespace: String!, $key: String!) {
    shop {
      copyrightYear: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "copyright_year"
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
  query ShopMetafield($namespace: String!, $key: String!) {
    shop {
      copyrightYear: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "copyright_year"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopMetafield($namespace: String!, $key: String!) {
      shop {
        copyrightYear: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "copyright_year"
    },
  },
});
``` #### Response

```json
{
  "shop": {
    "copyrightYear": {
      "value": "2022"
    }
  }
}
``` 
*   ### Get metafields attached to a shop

#### Description

Get a page of metafields attached to a specific shop.

#### Query

```graphql
query ShopMetafields {
  shop {
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
{}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopMetafields { shop { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {}
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopMetafields {
    shop {
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
    variables: {},
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
  query ShopMetafields {
    shop {
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

variables = {}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopMetafields {
      shop {
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
    "variables": {},
  },
});
``` #### Response

```json
{
  "shop": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "copyright_year",
            "value": "2022"
          }
        }
      ]
    }
  }
}
``` 
*   ### Receive a list of all FulfillmentServices

#### Query

```graphql
query FulfillmentServiceList {
  shop {
    fulfillmentServices {
      id
      callbackUrl
      fulfillmentOrdersOptIn
      permitsSkuSharing
      handle
      inventoryManagement
      serviceName
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
"query": "query FulfillmentServiceList { shop { fulfillmentServices { id callbackUrl fulfillmentOrdersOptIn permitsSkuSharing handle inventoryManagement serviceName } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentServiceList {
    shop {
      fulfillmentServices {
        id
        callbackUrl
        fulfillmentOrdersOptIn
        permitsSkuSharing
        handle
        inventoryManagement
        serviceName
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
  query FulfillmentServiceList {
    shop {
      fulfillmentServices {
        id
        callbackUrl
        fulfillmentOrdersOptIn
        permitsSkuSharing
        handle
        inventoryManagement
        serviceName
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query FulfillmentServiceList {
    shop {
      fulfillmentServices {
        id
        callbackUrl
        fulfillmentOrdersOptIn
        permitsSkuSharing
        handle
        inventoryManagement
        serviceName
      }
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "fulfillmentServices": [
      {
        "id": "gid://shopify/FulfillmentService/manual",
        "callbackUrl": null,
        "fulfillmentOrdersOptIn": false,
        "permitsSkuSharing": true,
        "handle": "manual",
        "inventoryManagement": false,
        "serviceName": "Manual"
      },
      {
        "id": "gid://shopify/FulfillmentService/18961920?id=true",
        "callbackUrl": "http://shipwire.com",
        "fulfillmentOrdersOptIn": true,
        "permitsSkuSharing": true,
        "handle": "shipwire",
        "inventoryManagement": false,
        "serviceName": "Shipwire"
      },
      {
        "id": "gid://shopify/FulfillmentService/198258461?id=true",
        "callbackUrl": "http://google.com",
        "fulfillmentOrdersOptIn": true,
        "permitsSkuSharing": false,
        "handle": "on-demand-delivery",
        "inventoryManagement": false,
        "serviceName": "On Demand Delivery"
      },
      {
        "id": "gid://shopify/FulfillmentService/736057333?id=true",
        "callbackUrl": null,
        "fulfillmentOrdersOptIn": false,
        "permitsSkuSharing": false,
        "handle": "mr-acme-drop-shipper",
        "inventoryManagement": false,
        "serviceName": "Mr. ACME Drop Shipper"
      },
      {
        "id": "gid://shopify/FulfillmentService/1061774486?id=true",
        "callbackUrl": null,
        "fulfillmentOrdersOptIn": false,
        "permitsSkuSharing": false,
        "handle": "mr-drop-shipper",
        "inventoryManagement": false,
        "serviceName": "Mr. Drop Shipper"
      }
    ]
  }
}
``` 
*   ### Retrieve information about a shop

#### Description

The following query retrieves some shop settings.

#### Query

```graphql
query {
  shop {
    name
    currencyCode
    checkoutApiSupported
    taxesIncluded
    resourceLimits {
      maxProductVariants
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
"query": "query { shop { name currencyCode checkoutApiSupported taxesIncluded resourceLimits { maxProductVariants } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shop {
      name
      currencyCode
      checkoutApiSupported
      taxesIncluded
      resourceLimits {
        maxProductVariants
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
    shop {
      name
      currencyCode
      checkoutApiSupported
      taxesIncluded
      resourceLimits {
        maxProductVariants
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
    shop {
      name
      currencyCode
      checkoutApiSupported
      taxesIncluded
      resourceLimits {
        maxProductVariants
      }
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "name": "Snowdevil",
    "currencyCode": "USD",
    "checkoutApiSupported": true,
    "taxesIncluded": false,
    "resourceLimits": {
      "maxProductVariants": 100
    }
  }
}
``` 
*   ### Retrieves a list of fulfillment orders assigned to the shop locations that are owned by the app

#### Query

```graphql
query AssignedFulfillmentOrderList($assignmentStatus: FulfillmentOrderAssignmentStatus) {
  shop {
    assignedFulfillmentOrders(first: 10, assignmentStatus: $assignmentStatus) {
      edges {
        node {
          id
          status
          requestStatus
          destination {
            firstName
            lastName
            address1
            city
            province
            zip
            countryCode
            phone
          }
          lineItems(first: 10) {
            edges {
              node {
                id
                productTitle
                sku
                remainingQuantity
              }
            }
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "assignmentStatus": "FULFILLMENT_REQUESTED"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query AssignedFulfillmentOrderList($assignmentStatus: FulfillmentOrderAssignmentStatus) { shop { assignedFulfillmentOrders(first: 10, assignmentStatus: $assignmentStatus) { edges { node { id status requestStatus destination { firstName lastName address1 city province zip countryCode phone } lineItems(first: 10) { edges { node { id productTitle sku remainingQuantity } } } } } } } }",
 "variables": {
    "assignmentStatus": "FULFILLMENT_REQUESTED"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AssignedFulfillmentOrderList($assignmentStatus: FulfillmentOrderAssignmentStatus) {
    shop {
      assignedFulfillmentOrders(first: 10, assignmentStatus: $assignmentStatus) {
        edges {
          node {
            id
            status
            requestStatus
            destination {
              firstName
              lastName
              address1
              city
              province
              zip
              countryCode
              phone
            }
            lineItems(first: 10) {
              edges {
                node {
                  id
                  productTitle
                  sku
                  remainingQuantity
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "assignmentStatus": "FULFILLMENT_REQUESTED"
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
  query AssignedFulfillmentOrderList($assignmentStatus: FulfillmentOrderAssignmentStatus) {
    shop {
      assignedFulfillmentOrders(first: 10, assignmentStatus: $assignmentStatus) {
        edges {
          node {
            id
            status
            requestStatus
            destination {
              firstName
              lastName
              address1
              city
              province
              zip
              countryCode
              phone
            }
            lineItems(first: 10) {
              edges {
                node {
                  id
                  productTitle
                  sku
                  remainingQuantity
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "assignmentStatus": "FULFILLMENT_REQUESTED"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query AssignedFulfillmentOrderList($assignmentStatus: FulfillmentOrderAssignmentStatus) {
      shop {
        assignedFulfillmentOrders(first: 10, assignmentStatus: $assignmentStatus) {
          edges {
            node {
              id
              status
              requestStatus
              destination {
                firstName
                lastName
                address1
                city
                province
                zip
                countryCode
                phone
              }
              lineItems(first: 10) {
                edges {
                  node {
                    id
                    productTitle
                    sku
                    remainingQuantity
                  }
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "assignmentStatus": "FULFILLMENT_REQUESTED"
    },
  },
});
``` #### Response

```json
{
  "shop": {
    "assignedFulfillmentOrders": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/FulfillmentOrder/1046001474",
            "status": "OPEN",
            "requestStatus": "SUBMITTED",
            "destination": null,
            "lineItems": {
              "edges": []
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a list of all users

#### Query

```graphql
query {
  shop {
    staffMembers(first: 10) {
      edges {
        node {
          active
          avatar {
            url
          }
          email
          exists
          firstName
          id
          initials
          isShopOwner
          lastName
          locale
          name
          phone
        }
      }
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
"query": "query { shop { staffMembers(first: 10) { edges { node { active avatar { url } email exists firstName id initials isShopOwner lastName locale name phone } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shop {
      staffMembers(first: 10) {
        edges {
          node {
            active
            avatar {
              url
            }
            email
            exists
            firstName
            id
            initials
            isShopOwner
            lastName
            locale
            name
            phone
          }
        }
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
    shop {
      staffMembers(first: 10) {
        edges {
          node {
            active
            avatar {
              url
            }
            email
            exists
            firstName
            id
            initials
            isShopOwner
            lastName
            locale
            name
            phone
          }
        }
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
    shop {
      staffMembers(first: 10) {
        edges {
          node {
            active
            avatar {
              url
            }
            email
            exists
            firstName
            id
            initials
            isShopOwner
            lastName
            locale
            name
            phone
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "staffMembers": {
      "edges": [
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/106ea358a244c6081c66489854c884cbfa858aec3c1730397e34bd4f4992f21e/www.gravatar.com/avatar/a902d35d9cd3096a7285782c69dd4622.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "sales@example.com",
            "exists": true,
            "firstName": "angie",
            "id": "gid://shopify/StaffMember/1039577421",
            "initials": [
              "a",
              "l"
            ],
            "isShopOwner": false,
            "lastName": "lucuos",
            "locale": "en",
            "name": "angie lucuos",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/29f98977e6ce2b24120b4d26ce7fde694b7bafc46a6be575ce88cf26a789c4e6/www.gravatar.com/avatar/4df4299bb7b53d4a9e8989238f81c15d.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "arnie@champion.example.com",
            "exists": true,
            "firstName": "Arnold",
            "id": "gid://shopify/StaffMember/863601736",
            "initials": [
              "S",
              "n"
            ],
            "isShopOwner": false,
            "lastName": "Schwarzenegger",
            "locale": "en",
            "name": "Snow Devil Inc.",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/s/files/1/2637/1970/users/foo.jpg?v=1731443626"
            },
            "email": "bob@example.com",
            "exists": true,
            "firstName": "bob",
            "id": "gid://shopify/StaffMember/902541635",
            "initials": [
              "b",
              "b"
            ],
            "isShopOwner": true,
            "lastName": "bobsen",
            "locale": "en",
            "name": "bob bobsen",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/a2fa3a40bc8b418a7e6a69413fb84a57164b6f4ce6757d4163ffda4302e02682/www.gravatar.com/avatar/59aa4f8e9b82c046003452b23e3b881e.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "pos@shopify.com",
            "exists": true,
            "firstName": "bob",
            "id": "gid://shopify/StaffMember/1004723144",
            "initials": [
              "b",
              "b"
            ],
            "isShopOwner": false,
            "lastName": "bobsen",
            "locale": "en",
            "name": "bob bobsen",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/739472b8350cf18a7f2058ef2d37019d4026bcb276844fa3d192eed26b594e27/www.gravatar.com/avatar/6fe88e20596eb227b53b543c2cece91e.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "collaborator_bob@example.com",
            "exists": true,
            "firstName": "collaborator",
            "id": "gid://shopify/StaffMember/688782760",
            "initials": [
              "S",
              "n"
            ],
            "isShopOwner": false,
            "lastName": "bob",
            "locale": "en",
            "name": "Snow Devil Inc.",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/8149b06b8974a1092082b18147941ef437a669fa6db5aba0ccd80bee9b33b788/www.gravatar.com/avatar/866ad7602839b586d7d18cb11b131881.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "customereventsbob@example.com",
            "exists": true,
            "firstName": "customereventsbob",
            "id": "gid://shopify/StaffMember/216359514",
            "initials": [
              "c",
              "b"
            ],
            "isShopOwner": false,
            "lastName": "bobsen",
            "locale": "en",
            "name": "customereventsbob bobsen",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/9a11b2a61faef02c90cae564d6cd8f61c9c5932abdc470375ea4af38d2234678/www.gravatar.com/avatar/a30775a5f88642adceaa3a6ff418ff4d.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "customereventsbobnoapps@example.com",
            "exists": true,
            "firstName": "customereventsbobnoapps",
            "id": "gid://shopify/StaffMember/257608065",
            "initials": [
              "c",
              "b"
            ],
            "isShopOwner": false,
            "lastName": "bobsen",
            "locale": "en",
            "name": "customereventsbobnoapps bobsen",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/d0f4af069a9948a91f75815dcf3c24b7bd775bb8fa66571da1b257f2fd2eacf5/www.gravatar.com/avatar/3111a27ed0d92a4209a15190114490d4.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "customereventsbobwithoneapp@example.com",
            "exists": true,
            "firstName": "customereventsbobwithoneapp",
            "id": "gid://shopify/StaffMember/584611871",
            "initials": [
              "c",
              "b"
            ],
            "isShopOwner": false,
            "lastName": "bobsen",
            "locale": "en",
            "name": "customereventsbobwithoneapp bobsen",
            "phone": null
          }
        },
        {
          "node": {
            "active": false,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/0feaeef95fe37c482d1472c776d9f5c35f3f4b0a051fef68bf702422c284f5fd/www.gravatar.com/avatar/cc9f2fc36ad3c135e4984fc6f63c4c16.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "deactivateduser@example.com",
            "exists": true,
            "firstName": "deactivated",
            "id": "gid://shopify/StaffMember/667736507",
            "initials": [
              "d",
              "u"
            ],
            "isShopOwner": false,
            "lastName": "user",
            "locale": "en",
            "name": "deactivated user",
            "phone": null
          }
        },
        {
          "node": {
            "active": true,
            "avatar": {
              "url": "https://cdn.shopify.com/proxy/bb267d2b2b59370b919f9c8f42719ece9e33c84ee51230220405746dd8c5c504/www.gravatar.com/avatar/68bd9ae0240cb5cfd89463b1fe778375.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fno-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73.png"
            },
            "email": "existingbob@example.com",
            "exists": true,
            "firstName": "existingbob",
            "id": "gid://shopify/StaffMember/2108187",
            "initials": [
              "e",
              "b"
            ],
            "isShopOwner": false,
            "lastName": "bobsen",
            "locale": "en",
            "name": "existingbob bobsen",
            "phone": "3213213211"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a list of currencies enabled on a shop

#### Query

```graphql
query {
  shop {
    currencySettings(first: 1) {
      edges {
        node {
          currencyCode
          rateUpdatedAt
        }
      }
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
"query": "query { shop { currencySettings(first: 1) { edges { node { currencyCode rateUpdatedAt } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shop {
      currencySettings(first: 1) {
        edges {
          node {
            currencyCode
            rateUpdatedAt
          }
        }
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
    shop {
      currencySettings(first: 1) {
        edges {
          node {
            currencyCode
            rateUpdatedAt
          }
        }
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
    shop {
      currencySettings(first: 1) {
        edges {
          node {
            currencyCode
            rateUpdatedAt
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "currencySettings": {
      "edges": [
        {
          "node": {
            "currencyCode": "CAD",
            "rateUpdatedAt": "2018-01-24T00:01:01Z"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a list of storefront access tokens that have been issued

#### Query

```graphql
query storefrontAccessToken {
  shop {
    storefrontAccessTokens(first: 10) {
      edges {
        node {
          id
          accessToken
          accessScopes {
            handle
          }
          createdAt
          title
        }
      }
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
"query": "query storefrontAccessToken { shop { storefrontAccessTokens(first: 10) { edges { node { id accessToken accessScopes { handle } createdAt title } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query storefrontAccessToken {
    shop {
      storefrontAccessTokens(first: 10) {
        edges {
          node {
            id
            accessToken
            accessScopes {
              handle
            }
            createdAt
            title
          }
        }
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
  query storefrontAccessToken {
    shop {
      storefrontAccessTokens(first: 10) {
        edges {
          node {
            id
            accessToken
            accessScopes {
              handle
            }
            createdAt
            title
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query storefrontAccessToken {
    shop {
      storefrontAccessTokens(first: 10) {
        edges {
          node {
            id
            accessToken
            accessScopes {
              handle
            }
            createdAt
            title
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "storefrontAccessTokens": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/StorefrontAccessToken/55270800",
            "accessToken": "678d97641255a4ab5feff997ee233f4c",
            "accessScopes": [
              {
                "handle": "unauthenticated_read_product_listings"
              },
              {
                "handle": "unauthenticated_write_checkouts"
              },
              {
                "handle": "unauthenticated_read_checkouts"
              },
              {
                "handle": "unauthenticated_read_selling_plans"
              }
            ],
            "createdAt": "2024-11-12T20:33:46Z",
            "title": "Buy Button Extension"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a list of the shop's policies

#### Query

```graphql
query ShopPolicyList {
  shop {
    shopPolicies {
      id
      url
      body
      type
      title
      createdAt
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
"query": "query ShopPolicyList { shop { shopPolicies { id url body type title createdAt updatedAt } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopPolicyList {
    shop {
      shopPolicies {
        id
        url
        body
        type
        title
        createdAt
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
  query ShopPolicyList {
    shop {
      shopPolicies {
        id
        url
        body
        type
        title
        createdAt
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
  data: `query ShopPolicyList {
    shop {
      shopPolicies {
        id
        url
        body
        type
        title
        createdAt
        updatedAt
      }
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "shopPolicies": [
      {
        "id": "gid://shopify/ShopPolicy/1",
        "url": "https://checkout.local/26371970/policies/1.html?locale=en",
        "body": "<p>The following is snowdevil's refund policy. blah blah blah blah blah.</p>",
        "type": "REFUND_POLICY",
        "title": "Refund policy",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/2",
        "url": "https://checkout.local/26371970/policies/2.html?locale=en",
        "body": "<p>PrivacyPolicy - this is a privacy policy document.</p>",
        "type": "PRIVACY_POLICY",
        "title": "Privacy policy",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/3",
        "url": "https://checkout.local/26371970/policies/3.html?locale=en",
        "body": "<p>Terms of Service - this is our terms of service</p>",
        "type": "TERMS_OF_SERVICE",
        "title": "Terms of service",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/4",
        "url": "https://checkout.local/26371970/policies/4.html?locale=en",
        "body": "<p>This is our Legal Notice</p>",
        "type": "LEGAL_NOTICE",
        "title": "Legal notice",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/5",
        "url": "https://checkout.local/26371970/policies/5.html?locale=en",
        "body": "<p>This is our Shipping Policy</p>",
        "type": "SHIPPING_POLICY",
        "title": "Shipping policy",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/6",
        "url": "https://checkout.local/26371970/policies/6.html?locale=en",
        "body": "<p>This is our Terms of Sale 🇫🇷</p>",
        "type": "TERMS_OF_SALE",
        "title": "Terms of sale",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/7",
        "url": "https://checkout.local/26371970/policies/7.html?locale=en",
        "body": "<p>This is our Subscription Policy</p>",
        "type": "SUBSCRIPTION_POLICY",
        "title": "Cancellation policy",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      },
      {
        "id": "gid://shopify/ShopPolicy/8",
        "url": "https://checkout.local/26371970/policies/8.html?locale=en",
        "body": "<p>Contact Information - this is a contact information document.</p>",
        "type": "CONTACT_INFORMATION",
        "title": "Contact information",
        "createdAt": "2024-11-19T09:03:50-05:00",
        "updatedAt": "2024-11-19T09:03:50-05:00"
      }
    ]
  }
}
``` 
*   ### Retrieves the shop's configuration

#### Query

```graphql
query ShopShow {
  shop {
    accountOwner {
      name
    }
    alerts {
      action {
        title
        url
      }
      description
    }
    billingAddress {
      address1
      address2
      city
      company
      country
      countryCodeV2
      latitude
      longitude
      phone
      province
      provinceCode
      zip
    }
    checkoutApiSupported
    contactEmail
    createdAt
    currencyCode
    currencyFormats {
      moneyFormat
      moneyInEmailsFormat
      moneyWithCurrencyFormat
      moneyWithCurrencyInEmailsFormat
    }
    customerAccounts
    description
    email
    enabledPresentmentCurrencies
    fulfillmentServices {
      handle
      serviceName
    }
    ianaTimezone
    id
    marketingSmsConsentEnabledAtCheckout
    myshopifyDomain
    name
    paymentSettings {
      supportedDigitalWallets
    }
    plan {
      displayName
      partnerDevelopment
      shopifyPlus
    }
    primaryDomain {
      host
      id
    }
    productTypes(first: 250) {
      edges {
        node
      }
    }
    setupRequired
    shipsToCountries
    taxesIncluded
    taxShipping
    timezoneAbbreviation
    transactionalSmsDisabled
    updatedAt
    url
    weightUnit
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query ShopShow { shop { accountOwner { name } alerts { action { title url } description } billingAddress { address1 address2 city company country countryCodeV2 latitude longitude phone province provinceCode zip } checkoutApiSupported contactEmail createdAt currencyCode currencyFormats { moneyFormat moneyInEmailsFormat moneyWithCurrencyFormat moneyWithCurrencyInEmailsFormat } customerAccounts description email enabledPresentmentCurrencies fulfillmentServices { handle serviceName } ianaTimezone id marketingSmsConsentEnabledAtCheckout myshopifyDomain name paymentSettings { supportedDigitalWallets } plan { displayName partnerDevelopment shopifyPlus } primaryDomain { host id } productTypes(first: 250) { edges { node } } setupRequired shipsToCountries taxesIncluded taxShipping timezoneAbbreviation transactionalSmsDisabled updatedAt url weightUnit } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopShow {
    shop {
      accountOwner {
        name
      }
      alerts {
        action {
          title
          url
        }
        description
      }
      billingAddress {
        address1
        address2
        city
        company
        country
        countryCodeV2
        latitude
        longitude
        phone
        province
        provinceCode
        zip
      }
      checkoutApiSupported
      contactEmail
      createdAt
      currencyCode
      currencyFormats {
        moneyFormat
        moneyInEmailsFormat
        moneyWithCurrencyFormat
        moneyWithCurrencyInEmailsFormat
      }
      customerAccounts
      description
      email
      enabledPresentmentCurrencies
      fulfillmentServices {
        handle
        serviceName
      }
      ianaTimezone
      id
      marketingSmsConsentEnabledAtCheckout
      myshopifyDomain
      name
      paymentSettings {
        supportedDigitalWallets
      }
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
      primaryDomain {
        host
        id
      }
      productTypes(first: 250) {
        edges {
          node
        }
      }
      setupRequired
      shipsToCountries
      taxesIncluded
      taxShipping
      timezoneAbbreviation
      transactionalSmsDisabled
      updatedAt
      url
      weightUnit
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
  query ShopShow {
    shop {
      accountOwner {
        name
      }
      alerts {
        action {
          title
          url
        }
        description
      }
      billingAddress {
        address1
        address2
        city
        company
        country
        countryCodeV2
        latitude
        longitude
        phone
        province
        provinceCode
        zip
      }
      checkoutApiSupported
      contactEmail
      createdAt
      currencyCode
      currencyFormats {
        moneyFormat
        moneyInEmailsFormat
        moneyWithCurrencyFormat
        moneyWithCurrencyInEmailsFormat
      }
      customerAccounts
      description
      email
      enabledPresentmentCurrencies
      fulfillmentServices {
        handle
        serviceName
      }
      ianaTimezone
      id
      marketingSmsConsentEnabledAtCheckout
      myshopifyDomain
      name
      paymentSettings {
        supportedDigitalWallets
      }
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
      primaryDomain {
        host
        id
      }
      productTypes(first: 250) {
        edges {
          node
        }
      }
      setupRequired
      shipsToCountries
      taxesIncluded
      taxShipping
      timezoneAbbreviation
      transactionalSmsDisabled
      updatedAt
      url
      weightUnit
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query ShopShow {
    shop {
      accountOwner {
        name
      }
      alerts {
        action {
          title
          url
        }
        description
      }
      billingAddress {
        address1
        address2
        city
        company
        country
        countryCodeV2
        latitude
        longitude
        phone
        province
        provinceCode
        zip
      }
      checkoutApiSupported
      contactEmail
      createdAt
      currencyCode
      currencyFormats {
        moneyFormat
        moneyInEmailsFormat
        moneyWithCurrencyFormat
        moneyWithCurrencyInEmailsFormat
      }
      customerAccounts
      description
      email
      enabledPresentmentCurrencies
      fulfillmentServices {
        handle
        serviceName
      }
      ianaTimezone
      id
      marketingSmsConsentEnabledAtCheckout
      myshopifyDomain
      name
      paymentSettings {
        supportedDigitalWallets
      }
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
      primaryDomain {
        host
        id
      }
      productTypes(first: 250) {
        edges {
          node
        }
      }
      setupRequired
      shipsToCountries
      taxesIncluded
      taxShipping
      timezoneAbbreviation
      transactionalSmsDisabled
      updatedAt
      url
      weightUnit
    }
  }`,
});
``` #### Response

```json
{
  "shop": {
    "accountOwner": {
      "name": "bob bobsen"
    },
    "alerts": [],
    "billingAddress": {
      "address1": "190 MacLaren Street",
      "address2": "suite 800",
      "city": "Ottawa",
      "company": "Snowdevil",
      "country": "Canada",
      "countryCodeV2": "CA",
      "latitude": 45.45,
      "longitude": -75.43,
      "phone": "6135551234",
      "province": "Ontario",
      "provinceCode": "ON",
      "zip": "K2P 0L6"
    },
    "checkoutApiSupported": true,
    "contactEmail": "email@snowdevil.ca",
    "createdAt": "2005-05-05T00:00:00Z",
    "currencyCode": "USD",
    "currencyFormats": {
      "moneyFormat": "${{amount}}",
      "moneyInEmailsFormat": "${{amount}}",
      "moneyWithCurrencyFormat": "${{amount}} USD",
      "moneyWithCurrencyInEmailsFormat": "${{amount}} USD"
    },
    "customerAccounts": "OPTIONAL",
    "description": "Snow devil",
    "email": "email@snowdevil.ca",
    "enabledPresentmentCurrencies": [
      "AUD",
      "CAD",
      "JPY",
      "USD"
    ],
    "fulfillmentServices": [
      {
        "handle": "manual",
        "serviceName": "Manual"
      },
      {
        "handle": "shipwire",
        "serviceName": "Shipwire"
      },
      {
        "handle": "on-demand-delivery",
        "serviceName": "On Demand Delivery"
      },
      {
        "handle": "mr-acme-drop-shipper",
        "serviceName": "Mr. ACME Drop Shipper"
      },
      {
        "handle": "mr-drop-shipper",
        "serviceName": "Mr. Drop Shipper"
      }
    ],
    "ianaTimezone": "America/New_York",
    "id": "gid://shopify/Shop/26371970",
    "marketingSmsConsentEnabledAtCheckout": false,
    "myshopifyDomain": "snowdevil.myshopify.com",
    "name": "Snowdevil",
    "paymentSettings": {
      "supportedDigitalWallets": []
    },
    "plan": {
      "displayName": "Basic",
      "partnerDevelopment": false,
      "shopifyPlus": false
    },
    "primaryDomain": {
      "host": "www.snowdevil.ca",
      "id": "gid://shopify/Domain/948873163"
    },
    "productTypes": {
      "edges": [
        {
          "node": "Boots"
        },
        {
          "node": "Cult Products"
        },
        {
          "node": "Footwear"
        },
        {
          "node": "Snowboards"
        }
      ]
    },
    "setupRequired": false,
    "shipsToCountries": [
      "AC",
      "AD",
      "AE",
      "AF",
      "AG",
      "AI",
      "AL",
      "AM",
      "AO",
      "AR",
      "AT",
      "AU",
      "AW",
      "AX",
      "AZ",
      "BA",
      "BB",
      "BD",
      "BE",
      "BF",
      "BG",
      "BH",
      "BI",
      "BJ",
      "BL",
      "BM",
      "BN",
      "BO",
      "BQ",
      "BR",
      "BS",
      "BT",
      "BW",
      "BY",
      "BZ",
      "CA",
      "CC",
      "CD",
      "CF",
      "CG",
      "CH",
      "CI",
      "CK",
      "CL",
      "CM",
      "CN",
      "CO",
      "CR",
      "CV",
      "CW",
      "CX",
      "CY",
      "CZ",
      "DE",
      "DJ",
      "DK",
      "DM",
      "DO",
      "DZ",
      "EC",
      "EE",
      "EG",
      "EH",
      "ER",
      "ES",
      "ET",
      "FI",
      "FJ",
      "FK",
      "FO",
      "FR",
      "GA",
      "GB",
      "GD",
      "GE",
      "GF",
      "GG",
      "GH",
      "GI",
      "GL",
      "GM",
      "GN",
      "GP",
      "GQ",
      "GR",
      "GS",
      "GT",
      "GW",
      "GY",
      "HK",
      "HN",
      "HR",
      "HT",
      "HU",
      "ID",
      "IE",
      "IL",
      "IM",
      "IN",
      "IO",
      "IQ",
      "IS",
      "IT",
      "JE",
      "JM",
      "JO",
      "JP",
      "KE",
      "KG",
      "KH",
      "KI",
      "KM",
      "KN",
      "KR",
      "KW",
      "KY",
      "KZ",
      "LA",
      "LB",
      "LC",
      "LI",
      "LK",
      "LR",
      "LS",
      "LT",
      "LU",
      "LV",
      "LY",
      "MA",
      "MC",
      "MD",
      "ME",
      "MF",
      "MG",
      "MK",
      "ML",
      "MM",
      "MN",
      "MO",
      "MQ",
      "MR",
      "MS",
      "MT",
      "MU",
      "MV",
      "MW",
      "MX",
      "MY",
      "MZ",
      "NA",
      "NC",
      "NE",
      "NF",
      "NG",
      "NI",
      "NL",
      "NO",
      "NP",
      "NR",
      "NU",
      "NZ",
      "OM",
      "PA",
      "PE",
      "PF",
      "PG",
      "PH",
      "PK",
      "PL",
      "PM",
      "PN",
      "PS",
      "PT",
      "PY",
      "QA",
      "RE",
      "RO",
      "RS",
      "RU",
      "RW",
      "SA",
      "SB",
      "SC",
      "SD",
      "SE",
      "SG",
      "SH",
      "SI",
      "SJ",
      "SK",
      "SL",
      "SM",
      "SN",
      "SO",
      "SR",
      "SS",
      "ST",
      "SV",
      "SX",
      "SZ",
      "TA",
      "TC",
      "TD",
      "TF",
      "TG",
      "TH",
      "TJ",
      "TK",
      "TL",
      "TM",
      "TN",
      "TO",
      "TR",
      "TT",
      "TV",
      "TW",
      "TZ",
      "UA",
      "UG",
      "UM",
      "US",
      "UY",
      "UZ",
      "VA",
      "VC",
      "VE",
      "VG",
      "VN",
      "VU",
      "WF",
      "WS",
      "XK",
      "YE",
      "YT",
      "ZA",
      "ZM",
      "ZW"
    ],
    "taxesIncluded": false,
    "taxShipping": false,
    "timezoneAbbreviation": "EST",
    "transactionalSmsDisabled": false,
    "updatedAt": "2024-11-19T14:03:50Z",
    "url": "https://www.snowdevil.ca",
    "weightUnit": "KILOGRAMS"
  }
}
``` 

Examples
--------

Get a metafield attached to a shop

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20ShopMetafield(%24namespace%3A%20String!%2C%20%24key%3A%20String!)%20%7B%0A%20%20shop%20%7B%0A%20%20%20%20copyrightYear%3A%20metafield(namespace%3A%20%24namespace%2C%20key%3A%20%24key)%20%7B%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22namespace%22%3A%20%22my_fields%22%2C%0A%20%20%22key%22%3A%20%22copyright_year%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query ShopMetafield($namespace: String!, $key: String!) {

 shop {

 copyrightYear: metafield(namespace: $namespace, key: $key) {

 value

 }

 }

 }`,

{

variables:{

"namespace":"my_fields",

"key":"copyright_year"

},

},

);

const data=await response.json();

```
query ShopMetafield($namespace: String!, $key: String!) {
  shop {
    copyrightYear: metafield(namespace: $namespace, key: $key) {
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
"query": "query ShopMetafield($namespace: String!, $key: String!) { shop { copyrightYear: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "copyright_year"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query ShopMetafield($namespace: String!, $key: String!) {
    shop {
      copyrightYear: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "copyright_year"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query ShopMetafield($namespace: String!, $key: String!) {
      shop {
        copyrightYear: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "copyright_year"
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
  query ShopMetafield($namespace: String!, $key: String!) {
    shop {
      copyrightYear: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "copyright_year"
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

"namespace": "my_fields",

"key": "copyright_year"

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

"shop": {

"copyrightYear": {

"value": "2022"

}

}

}


---
*Content truncated at "Updates" section*