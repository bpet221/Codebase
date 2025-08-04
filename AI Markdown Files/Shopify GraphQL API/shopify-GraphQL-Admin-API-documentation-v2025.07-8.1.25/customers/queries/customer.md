---
title: "customer"
description: "Shopify GraphQL Admin API documentation for customer"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/customer"
extraction_method: "jina"
sections: ['Customers', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customer - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/customer

Markdown Content:
customer - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer#main-content)

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
*   
Customers

    *   
Queries

        *   [customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer)
        *   [customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergepreview)
        *   [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)
        *   [customer Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersavedsearches)
        *   [customers Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount)
        *   [customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers)
        *   [customer Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembership)
        *   [customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembersquery)
        *   [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)
        *   [segment Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfilters)
        *   [segment Filter Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfiltersuggestions)
        *   [segment Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentmigrations)
        *   [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)
        *   [segments Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentscount)
        *   [segment Value Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions)

    *   Mutations   
    *   Objects   

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

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer#top)
customer
========

query

Returns a `Customer` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Customer` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------

[Anchor to Customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer#returns-Customer)Customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

Represents information about a customer of the shop, such as the customer's contact details, their order history, and whether they've agreed to receive marketing material by email.

**Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a customer by ID

#### Description

The following query retrieves the customer with the associated ID. It returns the customer fields specified in the query.

#### Query

```graphql
query {
  customer(id: "gid://shopify/Customer/544365967") {
    id
    firstName
    lastName
    email
    phone
    numberOfOrders
    amountSpent {
      amount
      currencyCode
    }
    createdAt
    updatedAt
    note
    verifiedEmail
    validEmailAddress
    tags
    lifetimeDuration
    defaultAddress {
      formattedArea
      address1
    }
    addresses {
      address1
    }
    image {
      src
    }
    canDelete
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { customer(id: \"gid://shopify/Customer/544365967\") { id firstName lastName email phone numberOfOrders amountSpent { amount currencyCode } createdAt updatedAt note verifiedEmail validEmailAddress tags lifetimeDuration defaultAddress { formattedArea address1 } addresses { address1 } image { src } canDelete } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customer(id: "gid://shopify/Customer/544365967") {
      id
      firstName
      lastName
      email
      phone
      numberOfOrders
      amountSpent {
        amount
        currencyCode
      }
      createdAt
      updatedAt
      note
      verifiedEmail
      validEmailAddress
      tags
      lifetimeDuration
      defaultAddress {
        formattedArea
        address1
      }
      addresses {
        address1
      }
      image {
        src
      }
      canDelete
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
    customer(id: "gid://shopify/Customer/544365967") {
      id
      firstName
      lastName
      email
      phone
      numberOfOrders
      amountSpent {
        amount
        currencyCode
      }
      createdAt
      updatedAt
      note
      verifiedEmail
      validEmailAddress
      tags
      lifetimeDuration
      defaultAddress {
        formattedArea
        address1
      }
      addresses {
        address1
      }
      image {
        src
      }
      canDelete
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    customer(id: "gid://shopify/Customer/544365967") {
      id
      firstName
      lastName
      email
      phone
      numberOfOrders
      amountSpent {
        amount
        currencyCode
      }
      createdAt
      updatedAt
      note
      verifiedEmail
      validEmailAddress
      tags
      lifetimeDuration
      defaultAddress {
        formattedArea
        address1
      }
      addresses {
        address1
      }
      image {
        src
      }
      canDelete
    }
  }`,
});
``` #### Response

```json
{
  "customer": {
    "id": "gid://shopify/Customer/544365967",
    "firstName": "Bob",
    "lastName": "Bobsen",
    "email": "bob@example.com",
    "phone": "+13125551212",
    "numberOfOrders": "25",
    "amountSpent": {
      "amount": "8305.6",
      "currencyCode": "USD"
    },
    "createdAt": "2005-06-15T15:57:11Z",
    "updatedAt": "2005-06-16T15:57:11Z",
    "note": null,
    "verifiedEmail": true,
    "validEmailAddress": true,
    "tags": [
      "Bob",
      "Canadian",
      "Léon",
      "Noël"
    ],
    "lifetimeDuration": "almost 20 years",
    "defaultAddress": {
      "formattedArea": "Ottawa ON, Canada",
      "address1": "123 Amoebobacterieae St"
    },
    "addresses": [
      {
        "address1": "123 Amoebobacterieae St"
      }
    ],
    "image": {
      "src": "https://cdn.shopify.com/proxy/d02a582792c73c48b4b62a95f42bcbf6eff91c5d232efb2057ca4c41005e4728/www.gravatar.com/avatar/4b9bb80620f03eb3719e0a061c14283d.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fadmin%2Fcustomers%2Fpolaris%2Favatar-2-a0ee6e3fb3ae515b66b68388b265e5bd1e90646c4c72d59170518f45351e668b.png"
    },
    "canDelete": false
  }
}
``` 
*   ### Get a customer's name, email, and default address

#### Description

The following query retrieves the customer with the associated ID. It returns the customer's name, email and default address specified by the fields in the query.

#### Query

```graphql
query {
  customer(id: "gid://shopify/Customer/544365967") {
    email
    firstName
    lastName
    defaultAddress {
      address1
      city
      province
      zip
      country
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
"query": "query { customer(id: \"gid://shopify/Customer/544365967\") { email firstName lastName defaultAddress { address1 city province zip country } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customer(id: "gid://shopify/Customer/544365967") {
      email
      firstName
      lastName
      defaultAddress {
        address1
        city
        province
        zip
        country
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
    customer(id: "gid://shopify/Customer/544365967") {
      email
      firstName
      lastName
      defaultAddress {
        address1
        city
        province
        zip
        country
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
    customer(id: "gid://shopify/Customer/544365967") {
      email
      firstName
      lastName
      defaultAddress {
        address1
        city
        province
        zip
        country
      }
    }
  }`,
});
``` #### Response

```json
{
  "customer": {
    "email": "bob@example.com",
    "firstName": "Bob",
    "lastName": "Bobsen",
    "defaultAddress": {
      "address1": "123 Amoebobacterieae St",
      "city": "Ottawa",
      "province": "Ontario",
      "zip": "K2P0V6",
      "country": "Canada"
    }
  }
}
``` 
*   ### Get all a customer's fields and connections

#### Description

The following query retrieves the customer with the associated ID. It returns all of the available fields and connections specified in the query.

#### Query

```graphql
query {
  customer(id: "gid://shopify/Customer/544365967") {
    addresses(first: 5) {
      address1
    }
    canDelete
    createdAt
    defaultAddress {
      address1
    }
    displayName
    email
    events(first: 5) {
      edges {
        node {
          message
        }
      }
    }
    firstName
    id
    image {
      id
    }
    lastName
    legacyResourceId
    lifetimeDuration
    mergeable {
      isMergeable
      reason
    }
    metafield(key: "app_key", namespace: "affiliates") {
      description
    }
    metafields(first: 5) {
      edges {
        node {
          id
        }
      }
    }
    note
    orders(first: 5) {
      edges {
        node {
          id
        }
      }
    }
    numberOfOrders
    phone
    state
    tags
    taxExempt
    amountSpent {
      amount
    }
    updatedAt
    validEmailAddress
    verifiedEmail
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { customer(id: \"gid://shopify/Customer/544365967\") { addresses(first: 5) { address1 } canDelete createdAt defaultAddress { address1 } displayName email events(first: 5) { edges { node { message } } } firstName id image { id } lastName legacyResourceId lifetimeDuration mergeable { isMergeable reason } metafield(key: \"app_key\", namespace: \"affiliates\") { description } metafields(first: 5) { edges { node { id } } } note orders(first: 5) { edges { node { id } } } numberOfOrders phone state tags taxExempt amountSpent { amount } updatedAt validEmailAddress verifiedEmail } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customer(id: "gid://shopify/Customer/544365967") {
      addresses(first: 5) {
        address1
      }
      canDelete
      createdAt
      defaultAddress {
        address1
      }
      displayName
      email
      events(first: 5) {
        edges {
          node {
            message
          }
        }
      }
      firstName
      id
      image {
        id
      }
      lastName
      legacyResourceId
      lifetimeDuration
      mergeable {
        isMergeable
        reason
      }
      metafield(key: "app_key", namespace: "affiliates") {
        description
      }
      metafields(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      note
      orders(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      numberOfOrders
      phone
      state
      tags
      taxExempt
      amountSpent {
        amount
      }
      updatedAt
      validEmailAddress
      verifiedEmail
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
    customer(id: "gid://shopify/Customer/544365967") {
      addresses(first: 5) {
        address1
      }
      canDelete
      createdAt
      defaultAddress {
        address1
      }
      displayName
      email
      events(first: 5) {
        edges {
          node {
            message
          }
        }
      }
      firstName
      id
      image {
        id
      }
      lastName
      legacyResourceId
      lifetimeDuration
      mergeable {
        isMergeable
        reason
      }
      metafield(key: "app_key", namespace: "affiliates") {
        description
      }
      metafields(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      note
      orders(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      numberOfOrders
      phone
      state
      tags
      taxExempt
      amountSpent {
        amount
      }
      updatedAt
      validEmailAddress
      verifiedEmail
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    customer(id: "gid://shopify/Customer/544365967") {
      addresses(first: 5) {
        address1
      }
      canDelete
      createdAt
      defaultAddress {
        address1
      }
      displayName
      email
      events(first: 5) {
        edges {
          node {
            message
          }
        }
      }
      firstName
      id
      image {
        id
      }
      lastName
      legacyResourceId
      lifetimeDuration
      mergeable {
        isMergeable
        reason
      }
      metafield(key: "app_key", namespace: "affiliates") {
        description
      }
      metafields(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      note
      orders(first: 5) {
        edges {
          node {
            id
          }
        }
      }
      numberOfOrders
      phone
      state
      tags
      taxExempt
      amountSpent {
        amount
      }
      updatedAt
      validEmailAddress
      verifiedEmail
    }
  }`,
});
``` #### Response

```json
{
  "customer": {
    "addresses": [
      {
        "address1": "123 Amoebobacterieae St"
      }
    ],
    "canDelete": false,
    "createdAt": "2005-06-15T15:57:11Z",
    "defaultAddress": {
      "address1": "123 Amoebobacterieae St"
    },
    "displayName": "Bob Bobsen",
    "email": "bob@example.com",
    "events": {
      "edges": []
    },
    "firstName": "Bob",
    "id": "gid://shopify/Customer/544365967",
    "image": {
      "id": null
    },
    "lastName": "Bobsen",
    "legacyResourceId": "544365967",
    "lifetimeDuration": "almost 20 years",
    "mergeable": {
      "isMergeable": false,
      "reason": "Bob Bobsen is scheduled for redaction or has been redacted and can’t be merged."
    },
    "metafield": null,
    "metafields": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Metafield/749520593"
          }
        }
      ]
    },
    "note": null,
    "orders": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Order/116757651"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/126216516"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/148977776"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/215577410"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Order/235240302"
          }
        }
      ]
    },
    "numberOfOrders": "25",
    "phone": "+13125551212",
    "state": "ENABLED",
    "tags": [
      "Bob",
      "Canadian",
      "Léon",
      "Noël"
    ],
    "taxExempt": false,
    "amountSpent": {
      "amount": "8305.6"
    },
    "updatedAt": "2005-06-16T15:57:11Z",
    "validEmailAddress": true,
    "verifiedEmail": true
  }
}
``` 
*   ### Get metafields attached to a customer

#### Description

Get a page of metafields attached to a specific customer.

#### Query

```graphql
query CustomerMetafields($ownerId: ID!) {
  customer(id: $ownerId) {
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
  "ownerId": "gid://shopify/Customer/544365967"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CustomerMetafields($ownerId: ID!) { customer(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/Customer/544365967"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerMetafields($ownerId: ID!) {
    customer(id: $ownerId) {
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
        "ownerId": "gid://shopify/Customer/544365967"
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
  query CustomerMetafields($ownerId: ID!) {
    customer(id: $ownerId) {
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
  "ownerId": "gid://shopify/Customer/544365967"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CustomerMetafields($ownerId: ID!) {
      customer(id: $ownerId) {
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
        "ownerId": "gid://shopify/Customer/544365967"
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "nickname",
            "value": "rob"
          }
        }
      ]
    }
  }
}
``` 
*   ### Get the email, name, and account creation date of three customers using a fragment

#### Description

The following query retrieves three specific customers with the associated IDs, which are aliased to the names provided. It returns the customer fields specified in the fragment.

#### Query

```graphql
query {
  Bob: customer(id: "gid://shopify/Customer/544365967") {
    ...customerProfile
  }
  Jane: customer(id: "gid://shopify/Customer/567375318") {
    ...customerProfile
  }
  Jenny: customer(id: "gid://shopify/Customer/56501169") {
    ...customerProfile
  }
}

fragment customerProfile on Customer {
  firstName
  lastName
  email
  createdAt
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { Bob: customer(id: \"gid://shopify/Customer/544365967\") { ...customerProfile } Jane: customer(id: \"gid://shopify/Customer/567375318\") { ...customerProfile } Jenny: customer(id: \"gid://shopify/Customer/56501169\") { ...customerProfile } } fragment customerProfile on Customer { firstName lastName email createdAt }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    Bob: customer(id: "gid://shopify/Customer/544365967") {
      ...customerProfile
    }
    Jane: customer(id: "gid://shopify/Customer/567375318") {
      ...customerProfile
    }
    Jenny: customer(id: "gid://shopify/Customer/56501169") {
      ...customerProfile
    }
  }
  
  fragment customerProfile on Customer {
    firstName
    lastName
    email
    createdAt
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
    Bob: customer(id: "gid://shopify/Customer/544365967") {
      ...customerProfile
    }
    Jane: customer(id: "gid://shopify/Customer/567375318") {
      ...customerProfile
    }
    Jenny: customer(id: "gid://shopify/Customer/56501169") {
      ...customerProfile
    }
  }
  
  fragment customerProfile on Customer {
    firstName
    lastName
    email
    createdAt
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    Bob: customer(id: "gid://shopify/Customer/544365967") {
      ...customerProfile
    }
    Jane: customer(id: "gid://shopify/Customer/567375318") {
      ...customerProfile
    }
    Jenny: customer(id: "gid://shopify/Customer/56501169") {
      ...customerProfile
    }
  }
  
  fragment customerProfile on Customer {
    firstName
    lastName
    email
    createdAt
  }`,
});
``` #### Response

```json
{
  "Bob": {
    "firstName": "Bob",
    "lastName": "Bobsen",
    "email": "bob@example.com",
    "createdAt": "2005-06-15T15:57:11Z"
  },
  "Jane": {
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "janesmith@b2b.example.com",
    "createdAt": "2025-05-12T20:21:18Z"
  },
  "Jenny": {
    "firstName": "Jenny",
    "lastName": "Test",
    "email": "jennytest@b2b.example.com",
    "createdAt": "2025-05-12T20:21:18Z"
  }
}
``` 
*   ### Get the first five line items of the customer's last order

#### Description

The following query retrieves the customer with the associated ID. It returns details about the last 5 line items associated with the customer's most recent order.

#### Query

```graphql
query {
  customer(id: "gid://shopify/Customer/624407574") {
    lastOrder {
      lineItems(first: 5) {
        edges {
          node {
            name
            quantity
          }
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
"query": "query { customer(id: \"gid://shopify/Customer/624407574\") { lastOrder { lineItems(first: 5) { edges { node { name quantity } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customer(id: "gid://shopify/Customer/624407574") {
      lastOrder {
        lineItems(first: 5) {
          edges {
            node {
              name
              quantity
            }
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
    customer(id: "gid://shopify/Customer/624407574") {
      lastOrder {
        lineItems(first: 5) {
          edges {
            node {
              name
              quantity
            }
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
    customer(id: "gid://shopify/Customer/624407574") {
      lastOrder {
        lineItems(first: 5) {
          edges {
            node {
              name
              quantity
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "customer": {
    "lastOrder": {
      "lineItems": {
        "edges": [
          {
            "node": {
              "name": "Draft - 151cm",
              "quantity": 1
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Get the merge status of a customer

#### Description

Retrieve the merge status of a customer.

#### Query

```graphql
query {
  customer(id: "gid://shopify/Customer/105906728") {
    mergeable {
      isMergeable
      reason
      errorFields
      mergeInProgress {
        jobId
        status
        resultingCustomerId
        customerMergeErrors {
          errorFields
          message
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
"query": "query { customer(id: \"gid://shopify/Customer/105906728\") { mergeable { isMergeable reason errorFields mergeInProgress { jobId status resultingCustomerId customerMergeErrors { errorFields message } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customer(id: "gid://shopify/Customer/105906728") {
      mergeable {
        isMergeable
        reason
        errorFields
        mergeInProgress {
          jobId
          status
          resultingCustomerId
          customerMergeErrors {
            errorFields
            message
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
    customer(id: "gid://shopify/Customer/105906728") {
      mergeable {
        isMergeable
        reason
        errorFields
        mergeInProgress {
          jobId
          status
          resultingCustomerId
          customerMergeErrors {
            errorFields
            message
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
    customer(id: "gid://shopify/Customer/105906728") {
      mergeable {
        isMergeable
        reason
        errorFields
        mergeInProgress {
          jobId
          status
          resultingCustomerId
          customerMergeErrors {
            errorFields
            message
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "customer": {
    "mergeable": {
      "isMergeable": false,
      "reason": "John Smith is scheduled for redaction or has been redacted and can’t be merged.",
      "errorFields": [
        "REDACTED_AT"
      ],
      "mergeInProgress": null
    }
  }
}
``` 
*   ### Get two specific customers by their ID using aliases

#### Description

The following query retrieves two specific customers with the associated IDs. It returns the customer fields specified in the query, aliased to the names provided.

#### Query

```graphql
query {
  bob: customer(id: "gid://shopify/Customer/544365967") {
    firstName
    lastName
    email
  }
  john: customer(id: "gid://shopify/Customer/105906728") {
    firstName
    lastName
    email
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { bob: customer(id: \"gid://shopify/Customer/544365967\") { firstName lastName email } john: customer(id: \"gid://shopify/Customer/105906728\") { firstName lastName email } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    bob: customer(id: "gid://shopify/Customer/544365967") {
      firstName
      lastName
      email
    }
    john: customer(id: "gid://shopify/Customer/105906728") {
      firstName
      lastName
      email
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
    bob: customer(id: "gid://shopify/Customer/544365967") {
      firstName
      lastName
      email
    }
    john: customer(id: "gid://shopify/Customer/105906728") {
      firstName
      lastName
      email
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    bob: customer(id: "gid://shopify/Customer/544365967") {
      firstName
      lastName
      email
    }
    john: customer(id: "gid://shopify/Customer/105906728") {
      firstName
      lastName
      email
    }
  }`,
});
``` #### Response

```json
{
  "bob": {
    "firstName": "Bob",
    "lastName": "Bobsen",
    "email": "bob@example.com"
  },
  "john": {
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@example.com"
  }
}
``` 
*   ### Retrieve a metafield associated with a customer

#### Description

Get the metafield value identified by `my_fields.nickname` on a specific customer.

#### Query

```graphql
query CustomerMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  customer(id: $ownerId) {
    nickname: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "nickname",
  "ownerId": "gid://shopify/Customer/544365967"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CustomerMetafield($namespace: String!, $key: String!, $ownerId: ID!) { customer(id: $ownerId) { nickname: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "nickname",
    "ownerId": "gid://shopify/Customer/544365967"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    customer(id: $ownerId) {
      nickname: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "nickname",
        "ownerId": "gid://shopify/Customer/544365967"
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
  query CustomerMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    customer(id: $ownerId) {
      nickname: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "nickname",
  "ownerId": "gid://shopify/Customer/544365967"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CustomerMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      customer(id: $ownerId) {
        nickname: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "nickname",
        "ownerId": "gid://shopify/Customer/544365967"
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "nickname": {
      "value": "rob"
    }
  }
}
``` 
*   ### Retrieve details for all addresses associated with a customer

#### Description

This query retrieves a customer's ID, address, and city for the first 250 addresses associated with a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer) using the `addressesV2` field. Use the `id` argument to specify the customer.

#### Query

```graphql
query CustomerAddressShow($id: ID!) {
  customer(id: $id) {
    addressesV2(first: 250) {
      edges {
        node {
          id
          address1
          city
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Customer/544365967"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CustomerAddressShow($id: ID!) { customer(id: $id) { addressesV2(first: 250) { edges { node { id address1 city } } } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerAddressShow($id: ID!) {
    customer(id: $id) {
      addressesV2(first: 250) {
        edges {
          node {
            id
            address1
            city
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/544365967"
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
  query CustomerAddressShow($id: ID!) {
    customer(id: $id) {
      addressesV2(first: 250) {
        edges {
          node {
            id
            address1
            city
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/544365967"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CustomerAddressShow($id: ID!) {
      customer(id: $id) {
        addressesV2(first: 250) {
          edges {
            node {
              id
              address1
              city
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/544365967"
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "addressesV2": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
            "address1": "123 Amoebobacterieae St",
            "city": "Ottawa"
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieve pinned metafield definitions associated with a customer

#### Description

This query retrieves the first 10 [pinned metafield definitions](https://help.shopify.com/en/manual/custom-data/metafields/pinning-metafield-definitions) for a customer.It shows each definition's name, namespace, key, and data type, ordered by pinned position.

#### Query

```graphql
query CustomerMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
  customer(id: $ownerId) {
    metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
      edges {
        node {
          name
          namespace
          key
          type {
            name
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "pinnedStatus": "PINNED",
  "ownerId": "gid://shopify/Customer/544365967",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CustomerMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) { customer(id: $ownerId) { metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) { edges { node { name namespace key type { name } } } } } }",
 "variables": {
    "pinnedStatus": "PINNED",
    "ownerId": "gid://shopify/Customer/544365967",
    "first": 10,
    "sortKey": "PINNED_POSITION"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    customer(id: $ownerId) {
      metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
        edges {
          node {
            name
            namespace
            key
            type {
              name
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "pinnedStatus": "PINNED",
        "ownerId": "gid://shopify/Customer/544365967",
        "first": 10,
        "sortKey": "PINNED_POSITION"
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
  query CustomerMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    customer(id: $ownerId) {
      metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
        edges {
          node {
            name
            namespace
            key
            type {
              name
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "pinnedStatus": "PINNED",
  "ownerId": "gid://shopify/Customer/544365967",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CustomerMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
      customer(id: $ownerId) {
        metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) {
          edges {
            node {
              name
              namespace
              key
              type {
                name
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "pinnedStatus": "PINNED",
        "ownerId": "gid://shopify/Customer/544365967",
        "first": 10,
        "sortKey": "PINNED_POSITION"
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "metafieldDefinitions": {
      "edges": [
        {
          "node": {
            "name": "Pronouns",
            "namespace": "my_fields",
            "key": "pronouns",
            "type": {
              "name": "single_line_text_field"
            }
          }
        },
        {
          "node": {
            "name": "Nickname",
            "namespace": "my_fields",
            "key": "nickname",
            "type": {
              "name": "single_line_text_field"
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a list of addresses for a customer

#### Description

This query retrieves the default address and the first 10 secondary addresses for a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer) using the `addressesV2` field. Use the `id` argument to specify the customer.

#### Query

```graphql
query CustomerAddressList($id: ID!) {
  customer(id: $id) {
    defaultAddress {
      address1
      city
    }
    addressesV2(first: 10) {
      edges {
        node {
          address1
          city
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/Customer/544365967"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CustomerAddressList($id: ID!) { customer(id: $id) { defaultAddress { address1 city } addressesV2(first: 10) { edges { node { address1 city } } } } }",
 "variables": {
    "id": "gid://shopify/Customer/544365967"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CustomerAddressList($id: ID!) {
    customer(id: $id) {
      defaultAddress {
        address1
        city
      }
      addressesV2(first: 10) {
        edges {
          node {
            address1
            city
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Customer/544365967"
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
  query CustomerAddressList($id: ID!) {
    customer(id: $id) {
      defaultAddress {
        address1
        city
      }
      addressesV2(first: 10) {
        edges {
          node {
            address1
            city
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Customer/544365967"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CustomerAddressList($id: ID!) {
      customer(id: $id) {
        defaultAddress {
          address1
          city
        }
        addressesV2(first: 10) {
          edges {
            node {
              address1
              city
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Customer/544365967"
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "defaultAddress": {
      "address1": "123 Amoebobacterieae St",
      "city": "Ottawa"
    },
    "addressesV2": {
      "edges": [
        {
          "node": {
            "address1": "123 Amoebobacterieae St",
            "city": "Ottawa"
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Get a customer by ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20customer(id%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20email%0A%20%20%20%20phone%0A%20%20%20%20numberOfOrders%0A%20%20%20%20amountSpent%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20currencyCode%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20updatedAt%0A%20%20%20%20note%0A%20%20%20%20verifiedEmail%0A%20%20%20%20validEmailAddress%0A%20%20%20%20tags%0A%20%20%20%20lifetimeDuration%0A%20%20%20%20defaultAddress%20%7B%0A%20%20%20%20%20%20formattedArea%0A%20%20%20%20%20%20address1%0A%20%20%20%20%7D%0A%20%20%20%20addresses%20%7B%0A%20%20%20%20%20%20address1%0A%20%20%20%20%7D%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20src%0A%20%20%20%20%7D%0A%20%20%20%20canDelete%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 customer(id: "gid://shopify/Customer/544365967") {

 id

 firstName

 lastName

 email

 phone

 numberOfOrders

 amountSpent {

 amount

 currencyCode

 }

 createdAt

 updatedAt

 note

 verifiedEmail

 validEmailAddress

 tags

 lifetimeDuration

 defaultAddress {

 formattedArea

 address1

 }

 addresses {

 address1

 }

 image {

 src

 }

 canDelete

 }

 }`,

);

const data=await response.json();

```
query {
  customer(id: "gid://shopify/Customer/544365967") {
    id
    firstName
    lastName
    email
    phone
    numberOfOrders
    amountSpent {
      amount
      currencyCode
    }
    createdAt
    updatedAt
    note
    verifiedEmail
    validEmailAddress
    tags
    lifetimeDuration
    defaultAddress {
      formattedArea
      address1
    }
    addresses {
      address1
    }
    image {
      src
    }
    canDelete
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { customer(id: \"gid://shopify/Customer/544365967\") { id firstName lastName email phone numberOfOrders amountSpent { amount currencyCode } createdAt updatedAt note verifiedEmail validEmailAddress tags lifetimeDuration defaultAddress { formattedArea address1 } addresses { address1 } image { src } canDelete } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customer(id: "gid://shopify/Customer/544365967") {
      id
      firstName
      lastName
      email
      phone
      numberOfOrders
      amountSpent {
        amount
        currencyCode
      }
      createdAt
      updatedAt
      note
      verifiedEmail
      validEmailAddress
      tags
      lifetimeDuration
      defaultAddress {
        formattedArea
        address1
      }
      addresses {
        address1
      }
      image {
        src
      }
      canDelete
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    customer(id: "gid://shopify/Customer/544365967") {
      id
      firstName
      lastName
      email
      phone
      numberOfOrders
      amountSpent {
        amount
        currencyCode
      }
      createdAt
      updatedAt
      note
      verifiedEmail
      validEmailAddress
      tags
      lifetimeDuration
      defaultAddress {
        formattedArea
        address1
      }
      addresses {
        address1
      }
      image {
        src
      }
      canDelete
    }
  }`,
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
  query {
    customer(id: "gid://shopify/Customer/544365967") {
      id
      firstName
      lastName
      email
      phone
      numberOfOrders
      amountSpent {
        amount
        currencyCode
      }
      createdAt
      updatedAt
      note
      verifiedEmail
      validEmailAddress
      tags
      lifetimeDuration
      defaultAddress {
        formattedArea
        address1
      }
      addresses {
        address1
      }
      image {
        src
      }
      canDelete
    }
  }
QUERY

response = client.query(query: query)
```

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

37

38

39

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"customer": {

"id": "gid://shopify/Customer/544365967",

"firstName": "Bob",

"lastName": "Bobsen",

"email": "bob@example.com",

"phone": "+13125551212",

"numberOfOrders": "25",

"amountSpent": {

"amount": "8305.6",

"currencyCode": "USD"

},

"createdAt": "2005-06-15T15:57:11Z",

"updatedAt": "2005-06-16T15:57:11Z",

"note": null,

"verifiedEmail": true,

"validEmailAddress": true,

"tags": [

"Bob",

"Canadian",

"Léon",

"Noël"

],

"lifetimeDuration": "almost 20 years",

"defaultAddress": {

"formattedArea": "Ottawa ON, Canada",

"address1": "123 Amoebobacterieae St"

},

"addresses": [

{

"address1": "123 Amoebobacterieae St"

}

],

"image": {

"src": "https://cdn.shopify.com/proxy/d02a582792c73c48b4b62a95f42bcbf6eff91c5d232efb2057ca4c41005e4728/www.gravatar.com/avatar/4b9bb80620f03eb3719e0a061c14283d.jpg?s=2048&d=https%3A%2F%2Fcdn.shopify.com%2Fshopifycloud%2Fshopify%2Fassets%2Fadmin%2Fcustomers%2Fpolaris%2Favatar-2-a0ee6e3fb3ae515b66b68388b265e5bd1e90646c4c72d59170518f45351e668b.png"

},

"canDelete": false

}

}


---
*Content truncated at "Updates" section*