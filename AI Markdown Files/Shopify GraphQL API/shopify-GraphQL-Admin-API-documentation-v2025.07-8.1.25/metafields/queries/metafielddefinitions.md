---
title: "metafieldDefinitions"
description: "Shopify GraphQL Admin API documentation for metafielddefinitions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions"
extraction_method: "jina"
sections: ['Metafields', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinitions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions

Markdown Content:
metafieldDefinitions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#main-content)

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
*   
Metafields

    *   
Queries

        *   [metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition)
        *   [metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions)
        *   [metafield Definition Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes)
        *   [standard Metafield Definition Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates)

    *   Mutations   
    *   Objects   

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

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#top)
metafield Definitions
=====================

query

Returns a list of metafield definitions.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments)
MetafieldDefinitionConnection arguments
---------------------------------------

•[MetafieldDefinitionConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to constraintStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-constraintStatus)constraint Status

•[Metafield Definition Constraint Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

Filter metafield definitions based on whether they are constrained.

Show enum values

[Anchor to constraintSubtype](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-constraintSubtype)constraint Subtype

•[Metafield Definition Constraint Subtype Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

Filter metafield definitions based on whether they apply to a given resource subtype.

Show input fields

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-key)key

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Filter metafield definition by key.

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to namespace](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-namespace)namespace

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Filter metafield definition by namespace.

[Anchor to ownerType](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-ownerType)owner Type

•[Metafield Owner Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

required

Filter the metafield definition by the specific owner type.

Show enum values

[Anchor to pinnedStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-pinnedStatus)pinned Status

•[Metafield Definition Pinned Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

Default:ANY

Filter the metafield definition by the pinned status.

Show enum values

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-query)query

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

Show filters

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-default)default

•string

Filter by a case-insensitive search of multiple fields in a document.

Example:

*   `query=Bob Norman`
*   `query=title:green hoodie`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-created_at)created_at

•time

Filter by the date and time when the metafield definition was created.

Example:

*   `created_at:>2020-10-21T23:39:20Z`
*   `created_at:<now`
*   `created_at:<=2024`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-id)id

•id

Filter by `id` range.

Example:

*   `id:1234`
*   `id:>=1234`
*   `id:<=1234`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-key)key

•string

Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

Example:

*   `key:some-key`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-namespace)namespace

•string

Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

Example:

*   `namespace:some-namespace`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-owner_type)owner_type

•string

Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

Example:

*   `owner_type:PRODUCT`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-type)type

•string

Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

Example:

*   `type:single_line_text_field`

[Anchor to](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#argument-query-filter-updated_at)updated_at

•time

Filter by the date and time when the metafield definition was last updated.

Example:

*   `updated_at:>2020-10-21T23:39:20Z`
*   `updated_at:<now`
*   `updated_at:<=2024`

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

[Anchor to sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#arguments-sortKey)sort Key

•[Metafield Definition Sort Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

Default:ID

Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#returns-edges)edges

•[[Metafield Definition Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#returns-nodes)nodes

•[[Metafield Definition!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

non-null

A list of nodes that are contained in MetafieldDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieving a list of metafield definitions

#### Description

The following example shows you how to retrieve a list of metafield definitions.

#### Query

```graphql
query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
  metafieldDefinitions(ownerType: $ownerType, first: $first) {
    nodes {
      name
      namespace
      key
      type {
        name
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerType": "PRODUCT",
  "first": 2
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) { metafieldDefinitions(ownerType: $ownerType, first: $first) { nodes { name namespace key type { name } } } }",
 "variables": {
    "ownerType": "PRODUCT",
    "first": 2
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
    metafieldDefinitions(ownerType: $ownerType, first: $first) {
      nodes {
        name
        namespace
        key
        type {
          name
        }
      }
    }
  }`,
  {
    variables: {
        "ownerType": "PRODUCT",
        "first": 2
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
  query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
    metafieldDefinitions(ownerType: $ownerType, first: $first) {
      nodes {
        name
        namespace
        key
        type {
          name
        }
      }
    }
  }
QUERY

variables = {
  "ownerType": "PRODUCT",
  "first": 2
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
      metafieldDefinitions(ownerType: $ownerType, first: $first) {
        nodes {
          name
          namespace
          key
          type {
            name
          }
        }
      }
    }`,
    "variables": {
        "ownerType": "PRODUCT",
        "first": 2
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitions": {
    "nodes": [
      {
        "name": "Roast type",
        "namespace": "coffee_descriptors",
        "key": "roast",
        "type": {
          "name": "single_line_text_field"
        }
      },
      {
        "name": "Country of origin",
        "namespace": "coffee_descriptors",
        "key": "country_of_origin",
        "type": {
          "name": "single_line_text_field"
        }
      }
    ]
  }
}
``` 
*   ### Retrieving a list of metafield definitions

#### Description

The following example shows you how to retrieve a list of metafield definitions.

#### Query

```graphql
query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
  metafieldDefinitions(ownerType: $ownerType, first: $first) {
    nodes {
      name
      namespace
      key
      type {
        name
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerType": "PRODUCT",
  "first": 2
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) { metafieldDefinitions(ownerType: $ownerType, first: $first) { nodes { name namespace key type { name } } } }",
 "variables": {
    "ownerType": "PRODUCT",
    "first": 2
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
    metafieldDefinitions(ownerType: $ownerType, first: $first) {
      nodes {
        name
        namespace
        key
        type {
          name
        }
      }
    }
  }`,
  {
    variables: {
        "ownerType": "PRODUCT",
        "first": 2
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
  query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
    metafieldDefinitions(ownerType: $ownerType, first: $first) {
      nodes {
        name
        namespace
        key
        type {
          name
        }
      }
    }
  }
QUERY

variables = {
  "ownerType": "PRODUCT",
  "first": 2
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
      metafieldDefinitions(ownerType: $ownerType, first: $first) {
        nodes {
          name
          namespace
          key
          type {
            name
          }
        }
      }
    }`,
    "variables": {
        "ownerType": "PRODUCT",
        "first": 2
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitions": {
    "nodes": [
      {
        "name": "Roast type",
        "namespace": "coffee_descriptors",
        "key": "roast",
        "type": {
          "name": "single_line_text_field"
        }
      },
      {
        "name": "Country of origin",
        "namespace": "coffee_descriptors",
        "key": "country_of_origin",
        "type": {
          "name": "single_line_text_field"
        }
      }
    ]
  }
}
``` 

Examples
--------

Retrieving a list of metafield definitions

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MetafieldDefinitions(%24ownerType%3A%20MetafieldOwnerType!%2C%20%24first%3A%20Int)%20%7B%0A%20%20metafieldDefinitions(ownerType%3A%20%24ownerType%2C%20first%3A%20%24first)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20type%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22ownerType%22%3A%20%22PRODUCT%22%2C%0A%20%20%22first%22%3A%202%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {

 metafieldDefinitions(ownerType: $ownerType, first: $first) {

 nodes {

 name

 namespace

 key

 type {

 name

 }

 }

 }

 }`,

{

variables:{

"ownerType":"PRODUCT",

"first":2

},

},

);

const data=await response.json();

```
query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
  metafieldDefinitions(ownerType: $ownerType, first: $first) {
    nodes {
      name
      namespace
      key
      type {
        name
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
"query": "query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) { metafieldDefinitions(ownerType: $ownerType, first: $first) { nodes { name namespace key type { name } } } }",
 "variables": {
    "ownerType": "PRODUCT",
    "first": 2
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
    metafieldDefinitions(ownerType: $ownerType, first: $first) {
      nodes {
        name
        namespace
        key
        type {
          name
        }
      }
    }
  }`,
  {
    variables: {
        "ownerType": "PRODUCT",
        "first": 2
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
      metafieldDefinitions(ownerType: $ownerType, first: $first) {
        nodes {
          name
          namespace
          key
          type {
            name
          }
        }
      }
    }`,
    "variables": {
        "ownerType": "PRODUCT",
        "first": 2
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
  query MetafieldDefinitions($ownerType: MetafieldOwnerType!, $first: Int) {
    metafieldDefinitions(ownerType: $ownerType, first: $first) {
      nodes {
        name
        namespace
        key
        type {
          name
        }
      }
    }
  }
QUERY

variables = {
  "ownerType": "PRODUCT",
  "first": 2
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

"ownerType": "PRODUCT",

"first": 2

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

15

16

17

18

19

20

21

22

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"metafieldDefinitions": {

"nodes": [

{

"name": "Roast type",

"namespace": "coffee_descriptors",

"key": "roast",

"type": {

"name": "single_line_text_field"

}

},

{

"name": "Country of origin",

"namespace": "coffee_descriptors",

"key": "country_of_origin",

"type": {

"name": "single_line_text_field"

}

}

]

}

}


---
*Content truncated at "Updates" section*