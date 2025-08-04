---
title: "standardMetafieldDefinitionTemplates"
description: "Shopify GraphQL Admin API documentation for standardmetafielddefinitiontemplates"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates"
extraction_method: "jina"
sections: ['Metafields', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: standardMetafieldDefinitionTemplates - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates

Markdown Content:
standardMetafieldDefinitionTemplates - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#main-content)

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

[Anchor to standardMetafieldDefinitionTemplates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#top)
standard Metafield Definition Templates
=======================================

query

Standard metafield definitions are intended for specific, common use cases. Their namespace and keys reflect these use cases and are reserved.

Refer to all available [`Standard Metafield Definition Templates`](https://shopify.dev/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments)
StandardMetafieldDefinitionTemplateConnection arguments
-------------------------------------------------------

•[StandardMetafieldDefinitionTemplateConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to constraintStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-constraintStatus)constraint Status

•[Metafield Definition Constraint Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

Filter standard metafield definitions based on whether they are constrained.

Show enum values

[Anchor to constraintSubtype](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-constraintSubtype)constraint Subtype

•[Metafield Definition Constraint Subtype Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

Filter standard metafield definitions based on whether they apply to a given resource subtype.

Show input fields

[Anchor to excludeActivated](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-excludeActivated)exclude Activated

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Filter standard metafield definitions that have already been activated.

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#returns-edges)edges

•[[Standard Metafield Definition Template Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplateEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#returns-nodes)nodes

•[[Standard Metafield Definition Template!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate)

non-null

A list of nodes that are contained in StandardMetafieldDefinitionTemplateEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a list of standard metafield definition templates

#### Description

The following query retrieves the first 5 standard metafield definition templates.

#### Query

```graphql
query StandardMetafieldDefinitionTemplates {
  standardMetafieldDefinitionTemplates(first: 5) {
    edges {
      node {
        id
        name
        namespace
        key
        description
        ownerTypes
        type {
          name
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
"query": "query StandardMetafieldDefinitionTemplates { standardMetafieldDefinitionTemplates(first: 5) { edges { node { id name namespace key description ownerTypes type { name } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query StandardMetafieldDefinitionTemplates {
    standardMetafieldDefinitionTemplates(first: 5) {
      edges {
        node {
          id
          name
          namespace
          key
          description
          ownerTypes
          type {
            name
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
  query StandardMetafieldDefinitionTemplates {
    standardMetafieldDefinitionTemplates(first: 5) {
      edges {
        node {
          id
          name
          namespace
          key
          description
          ownerTypes
          type {
            name
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
  data: `query StandardMetafieldDefinitionTemplates {
    standardMetafieldDefinitionTemplates(first: 5) {
      edges {
        node {
          id
          name
          namespace
          key
          description
          ownerTypes
          type {
            name
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "standardMetafieldDefinitionTemplates": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/1",
          "name": "Product subtitle",
          "namespace": "descriptors",
          "key": "subtitle",
          "description": "Used as a shorthand for a product name",
          "ownerTypes": [
            "PRODUCT",
            "PRODUCTVARIANT"
          ],
          "type": {
            "name": "single_line_text_field"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",
          "name": "Care guide",
          "namespace": "descriptors",
          "key": "care_guide",
          "description": "Instructions for taking care of a product or apparel",
          "ownerTypes": [
            "PRODUCT",
            "PRODUCTVARIANT"
          ],
          "type": {
            "name": "multi_line_text_field"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/3",
          "name": "ISBN",
          "namespace": "facts",
          "key": "isbn",
          "description": "International Standard Book Number",
          "ownerTypes": [
            "PRODUCT",
            "PRODUCTVARIANT"
          ],
          "type": {
            "name": "single_line_text_field"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/4",
          "name": "UPC",
          "namespace": "facts",
          "key": "upc",
          "description": "Universal Product Code",
          "ownerTypes": [
            "PRODUCT",
            "PRODUCTVARIANT"
          ],
          "type": {
            "name": "single_line_text_field"
          }
        }
      },
      {
        "node": {
          "id": "gid://shopify/StandardMetafieldDefinitionTemplate/5",
          "name": "EAN",
          "namespace": "facts",
          "key": "ean",
          "description": "European Article Number",
          "ownerTypes": [
            "PRODUCT",
            "PRODUCTVARIANT"
          ],
          "type": {
            "name": "single_line_text_field"
          }
        }
      }
    ]
  }
}
``` 

Get a list of standard metafield definition templates
-----------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20StandardMetafieldDefinitionTemplates%20%7B%0A%20%20standardMetafieldDefinitionTemplates(first%3A%205)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20ownerTypes%0A%20%20%20%20%20%20%20%20type%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query StandardMetafieldDefinitionTemplates {

 standardMetafieldDefinitionTemplates(first: 5) {

 edges {

 node {

 id

 name

 namespace

 key

 description

 ownerTypes

 type {

 name

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query StandardMetafieldDefinitionTemplates {
  standardMetafieldDefinitionTemplates(first: 5) {
    edges {
      node {
        id
        name
        namespace
        key
        description
        ownerTypes
        type {
          name
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
"query": "query StandardMetafieldDefinitionTemplates { standardMetafieldDefinitionTemplates(first: 5) { edges { node { id name namespace key description ownerTypes type { name } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query StandardMetafieldDefinitionTemplates {
    standardMetafieldDefinitionTemplates(first: 5) {
      edges {
        node {
          id
          name
          namespace
          key
          description
          ownerTypes
          type {
            name
          }
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query StandardMetafieldDefinitionTemplates {
    standardMetafieldDefinitionTemplates(first: 5) {
      edges {
        node {
          id
          name
          namespace
          key
          description
          ownerTypes
          type {
            name
          }
        }
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
  query StandardMetafieldDefinitionTemplates {
    standardMetafieldDefinitionTemplates(first: 5) {
      edges {
        node {
          id
          name
          namespace
          key
          description
          ownerTypes
          type {
            name
          }
        }
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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"standardMetafieldDefinitionTemplates": {

"edges": [

{

"node": {

"id": "gid://shopify/StandardMetafieldDefinitionTemplate/1",

"name": "Product subtitle",

"namespace": "descriptors",

"key": "subtitle",

"description": "Used as a shorthand for a product name",

"ownerTypes": [

"PRODUCT",

"PRODUCTVARIANT"

],

"type": {

"name": "single_line_text_field"

}

}

},

{

"node": {

"id": "gid://shopify/StandardMetafieldDefinitionTemplate/2",

"name": "Care guide",

"namespace": "descriptors",

"key": "care_guide",

"description": "Instructions for taking care of a product or apparel",

"ownerTypes": [

"PRODUCT",

"PRODUCTVARIANT"

],

"type": {

"name": "multi_line_text_field"

}

}

},

{


---
*Content truncated at "Updates" section*