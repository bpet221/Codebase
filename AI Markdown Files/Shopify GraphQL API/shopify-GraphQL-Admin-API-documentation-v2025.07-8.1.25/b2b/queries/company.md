---
title: "company"
description: "Shopify GraphQL Admin API documentation for company"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/company"
extraction_method: "jina"
sections: ['B2B', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: company - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/company

Markdown Content:
company - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/company#main-content)

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
*   
B2b

    *   
Queries

        *   [companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies)
        *   [companies Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/companiescount)
        *   [company](https://shopify.dev/docs/api/admin-graphql/latest/queries/company)
        *   [company Contact](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact)
        *   [company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole)
        *   [company Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/companylocation)
        *   [company Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/companylocations)

    *   Mutations   
    *   Objects   

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

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/queries/company#top)
company
=======

query

Returns a `Company` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/company#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/company#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Company` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/company#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Company](https://shopify.dev/docs/api/admin-graphql/latest/queries/company#returns-Company)Company

•[Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

Represents information about a company which is also a customer of the shop.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a company by its ID

#### Description

Retrieves a company by ID, returning the fields specified in the query.

#### Query

```graphql
query {
  company(id: "gid://shopify/Company/426793626") {
    id
    name
    note
    externalId
    totalSpent {
      amount
      currencyCode
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
"query": "query { company(id: \"gid://shopify/Company/426793626\") { id name note externalId totalSpent { amount currencyCode } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    company(id: "gid://shopify/Company/426793626") {
      id
      name
      note
      externalId
      totalSpent {
        amount
        currencyCode
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
    company(id: "gid://shopify/Company/426793626") {
      id
      name
      note
      externalId
      totalSpent {
        amount
        currencyCode
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
    company(id: "gid://shopify/Company/426793626") {
      id
      name
      note
      externalId
      totalSpent {
        amount
        currencyCode
      }
    }
  }`,
});
``` #### Response

```json
{
  "company": {
    "id": "gid://shopify/Company/426793626",
    "name": "Fancy Pants Inc.",
    "note": "test notes",
    "externalId": "external_id1",
    "totalSpent": {
      "amount": "120.0",
      "currencyCode": "USD"
    }
  }
}
``` 
*   ### Get a metafield attached to a company

#### Description

Get the metafield value identified by `my_fields.industry` on a specific company.

#### Query

```graphql
query CompanyMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  company(id: $ownerId) {
    industry: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "industry",
  "ownerId": "gid://shopify/Company/426793626"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CompanyMetafield($namespace: String!, $key: String!, $ownerId: ID!) { company(id: $ownerId) { industry: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "industry",
    "ownerId": "gid://shopify/Company/426793626"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CompanyMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    company(id: $ownerId) {
      industry: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "industry",
        "ownerId": "gid://shopify/Company/426793626"
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
  query CompanyMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    company(id: $ownerId) {
      industry: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "industry",
  "ownerId": "gid://shopify/Company/426793626"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CompanyMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      company(id: $ownerId) {
        industry: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "industry",
        "ownerId": "gid://shopify/Company/426793626"
    },
  },
});
``` #### Response

```json
{
  "company": {
    "industry": {
      "value": "retail"
    }
  }
}
``` 
*   ### Get metafields attached to a company

#### Description

Get a page of metafields attached to a specific company.

#### Query

```graphql
query CompanyMetafields($ownerId: ID!) {
  company(id: $ownerId) {
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
  "ownerId": "gid://shopify/Company/426793626"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query CompanyMetafields($ownerId: ID!) { company(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/Company/426793626"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CompanyMetafields($ownerId: ID!) {
    company(id: $ownerId) {
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
        "ownerId": "gid://shopify/Company/426793626"
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
  query CompanyMetafields($ownerId: ID!) {
    company(id: $ownerId) {
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
  "ownerId": "gid://shopify/Company/426793626"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CompanyMetafields($ownerId: ID!) {
      company(id: $ownerId) {
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
        "ownerId": "gid://shopify/Company/426793626"
    },
  },
});
``` #### Response

```json
{
  "company": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "industry",
            "value": "retail"
          }
        }
      ]
    }
  }
}
``` 
*   ### Get pinned metafield definitions associated with a company

#### Description

Get names and types of the first page of pinned metafield definitions associated with a company.

#### Query

```graphql
query CompanyMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
  company(id: $ownerId) {
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
  "ownerId": "gid://shopify/Company/426793626",
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
"query": "query CompanyMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) { company(id: $ownerId) { metafieldDefinitions(first: $first, pinnedStatus: $pinnedStatus, sortKey: $sortKey) { edges { node { name namespace key type { name } } } } } }",
 "variables": {
    "pinnedStatus": "PINNED",
    "ownerId": "gid://shopify/Company/426793626",
    "first": 10,
    "sortKey": "PINNED_POSITION"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query CompanyMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    company(id: $ownerId) {
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
        "ownerId": "gid://shopify/Company/426793626",
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
  query CompanyMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
    company(id: $ownerId) {
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
  "ownerId": "gid://shopify/Company/426793626",
  "first": 10,
  "sortKey": "PINNED_POSITION"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query CompanyMetafieldDefinitions($ownerId: ID!, $first: Int, $pinnedStatus: MetafieldDefinitionPinnedStatus, $sortKey: MetafieldDefinitionSortKeys) {
      company(id: $ownerId) {
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
        "ownerId": "gid://shopify/Company/426793626",
        "first": 10,
        "sortKey": "PINNED_POSITION"
    },
  },
});
``` #### Response

```json
{
  "company": {
    "metafieldDefinitions": {
      "edges": [
        {
          "node": {
            "name": "Website",
            "namespace": "my_fields",
            "key": "website",
            "type": {
              "name": "single_line_text_field"
            }
          }
        },
        {
          "node": {
            "name": "Industry",
            "namespace": "my_fields",
            "key": "industry",
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

Examples
--------

Get a company by its ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20company(id%3A%20%22gid%3A%2F%2Fshopify%2FCompany%2F426793626%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20note%0A%20%20%20%20externalId%0A%20%20%20%20totalSpent%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20currencyCode%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 company(id: "gid://shopify/Company/426793626") {

 id

 name

 note

 externalId

 totalSpent {

 amount

 currencyCode

 }

 }

 }`,

);

const data=await response.json();

```
query {
  company(id: "gid://shopify/Company/426793626") {
    id
    name
    note
    externalId
    totalSpent {
      amount
      currencyCode
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
"query": "query { company(id: \"gid://shopify/Company/426793626\") { id name note externalId totalSpent { amount currencyCode } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    company(id: "gid://shopify/Company/426793626") {
      id
      name
      note
      externalId
      totalSpent {
        amount
        currencyCode
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    company(id: "gid://shopify/Company/426793626") {
      id
      name
      note
      externalId
      totalSpent {
        amount
        currencyCode
      }
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
    company(id: "gid://shopify/Company/426793626") {
      id
      name
      note
      externalId
      totalSpent {
        amount
        currencyCode
      }
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

›

⌄

⌄

⌄

{

"company": {

"id": "gid://shopify/Company/426793626",

"name": "Fancy Pants Inc.",

"note": "test notes",

"externalId": "external_id1",

"totalSpent": {

"amount": "120.0",

"currencyCode": "USD"

}

}

}


---
*Content truncated at "Updates" section*