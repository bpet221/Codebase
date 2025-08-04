---
title: "metafieldsDelete"
description: "Shopify GraphQL Admin API documentation for metafieldsdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldsDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete

Markdown Content:
metafieldsDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#main-content)

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

    *   Queries   
    *   
Mutations

        *   [metafield Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitioncreate)
        *   [metafield Definition Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitiondelete)
        *   [metafield Definition Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin)
        *   [metafield Definition Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionunpin)
        *   [metafield Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate)
        *   [metafields Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete)
        *   [metafields Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset)
        *   [standard Metafield Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetafielddefinitionenable)

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

[Anchor to metafieldsDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#top)
metafields Delete
=================

mutation

Requires access defined by each metafield input `ownerId` scalar's type in a `MetafieldsSetInput` field. For example, setting a metafield on a `PRODUCT` requires the same access as mutating a `PRODUCT`.

Deletes multiple metafields in bulk.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#arguments)
Arguments
---------

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#arguments-metafields)metafields

•[[Metafield Identifier Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldIdentifierInput)

required

A list of identifiers specifying metafields to delete. At least one identifier must be specified.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetafieldsDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#returns)Metafields Delete Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedMetafields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#returns-deletedMetafields)deleted Metafields

•[[Metafield Identifier]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldIdentifier)

List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsdelete#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Deletes a metafield by its ID

#### Query

```graphql
mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
  metafieldsDelete(metafields: $metafields) {
    deletedMetafields {
      key
      namespace
      ownerId
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
  "metafields": [
    {
      "ownerId": "gid://shopify/Product/20995642",
      "namespace": "inventory",
      "key": "today"
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) { metafieldsDelete(metafields: $metafields) { deletedMetafields { key namespace ownerId } userErrors { field message } } }",
 "variables": {
    "metafields": [
      {
        "ownerId": "gid://shopify/Product/20995642",
        "namespace": "inventory",
        "key": "today"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
    metafieldsDelete(metafields: $metafields) {
      deletedMetafields {
        key
        namespace
        ownerId
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "metafields": [
            {
                "ownerId": "gid://shopify/Product/20995642",
                "namespace": "inventory",
                "key": "today"
            }
        ]
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
  mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
    metafieldsDelete(metafields: $metafields) {
      deletedMetafields {
        key
        namespace
        ownerId
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "metafields": [
    {
      "ownerId": "gid://shopify/Product/20995642",
      "namespace": "inventory",
      "key": "today"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
      metafieldsDelete(metafields: $metafields) {
        deletedMetafields {
          key
          namespace
          ownerId
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "ownerId": "gid://shopify/Product/20995642",
                "namespace": "inventory",
                "key": "today"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "metafieldsDelete": {
    "deletedMetafields": [
      {
        "key": "today",
        "namespace": "inventory",
        "ownerId": "gid://shopify/Product/20995642"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### metafieldsDelete reference

Examples
--------

Deletes a metafield by its ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20MetafieldsDelete(%24metafields%3A%20%5BMetafieldIdentifierInput!%5D!)%20%7B%0A%20%20metafieldsDelete(metafields%3A%20%24metafields)%20%7B%0A%20%20%20%20deletedMetafields%20%7B%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20ownerId%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%20%20%20%20%22namespace%22%3A%20%22inventory%22%2C%0A%20%20%20%20%20%20%22key%22%3A%20%22today%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {

 metafieldsDelete(metafields: $metafields) {

 deletedMetafields {

 key

 namespace

 ownerId

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"metafields":[

{

"ownerId":"gid://shopify/Product/20995642",

"namespace":"inventory",

"key":"today"

}

]

},

},

);

const data=await response.json();

```
mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
  metafieldsDelete(metafields: $metafields) {
    deletedMetafields {
      key
      namespace
      ownerId
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
"query": "mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) { metafieldsDelete(metafields: $metafields) { deletedMetafields { key namespace ownerId } userErrors { field message } } }",
 "variables": {
    "metafields": [
      {
        "ownerId": "gid://shopify/Product/20995642",
        "namespace": "inventory",
        "key": "today"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
    metafieldsDelete(metafields: $metafields) {
      deletedMetafields {
        key
        namespace
        ownerId
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "metafields": [
            {
                "ownerId": "gid://shopify/Product/20995642",
                "namespace": "inventory",
                "key": "today"
            }
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
      metafieldsDelete(metafields: $metafields) {
        deletedMetafields {
          key
          namespace
          ownerId
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "metafields": [
            {
                "ownerId": "gid://shopify/Product/20995642",
                "namespace": "inventory",
                "key": "today"
            }
        ]
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
  mutation MetafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
    metafieldsDelete(metafields: $metafields) {
      deletedMetafields {
        key
        namespace
        ownerId
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "metafields": [
    {
      "ownerId": "gid://shopify/Product/20995642",
      "namespace": "inventory",
      "key": "today"
    }
  ]
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

6

7

8

9

›

⌄

⌄

⌄

{

"metafields": [

{

"ownerId": "gid://shopify/Product/20995642",

"namespace": "inventory",

"key": "today"

}

]

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

›

⌄

⌄

⌄

⌄

{

"metafieldsDelete": {

"deletedMetafields": [

{

"key": "today",

"namespace": "inventory",

"ownerId": "gid://shopify/Product/20995642"

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*