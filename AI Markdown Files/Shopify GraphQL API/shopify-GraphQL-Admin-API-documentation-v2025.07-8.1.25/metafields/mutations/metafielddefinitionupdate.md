---
title: "metafieldDefinitionUpdate"
description: "Shopify GraphQL Admin API documentation for metafielddefinitionupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinitionUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate

Markdown Content:
metafieldDefinitionUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#main-content)

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

[Anchor to metafieldDefinitionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#top)
metafield Definition Update
===========================

mutation

Requires API client to have access to the namespace and the resource type associated with the metafield definition.

Updates a metafield definition.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#arguments)
Arguments
---------

[Anchor to definition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#arguments-definition)definition

•[Metafield Definition Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput)

required

The input fields for the metafield definition update.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetafieldDefinitionUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#returns)Metafield Definition Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to updatedDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#returns-updatedDefinition)updated Definition

•[Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

The metafield definition that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#returns-userErrors)user Errors

•[[Metafield Definition Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to validationJob](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionupdate#returns-validationJob)validation Job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job updating the metafield definition's validation_status.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a metafield definition

#### Description

To update a metafield definition, use the `metafieldDefinitionUpdate` mutation. The following example shows how to change a metafield definition's name from `Pizza size` to `Pizza size (inches)`.

#### Query

```graphql
mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
  metafieldDefinitionUpdate(definition: $definition) {
    updatedDefinition {
      id
      name
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "definition": {
    "name": "Pizza size (inches)",
    "namespace": "bakery",
    "key": "pizza_size",
    "ownerType": "PRODUCT"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) { metafieldDefinitionUpdate(definition: $definition) { updatedDefinition { id name } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Pizza size (inches)",
      "namespace": "bakery",
      "key": "pizza_size",
      "ownerType": "PRODUCT"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
    metafieldDefinitionUpdate(definition: $definition) {
      updatedDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Pizza size (inches)",
            "namespace": "bakery",
            "key": "pizza_size",
            "ownerType": "PRODUCT"
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
  mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
    metafieldDefinitionUpdate(definition: $definition) {
      updatedDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Pizza size (inches)",
    "namespace": "bakery",
    "key": "pizza_size",
    "ownerType": "PRODUCT"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
      metafieldDefinitionUpdate(definition: $definition) {
        updatedDefinition {
          id
          name
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Pizza size (inches)",
            "namespace": "bakery",
            "key": "pizza_size",
            "ownerType": "PRODUCT"
        }
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionUpdate": {
    "updatedDefinition": {
      "id": "gid://shopify/MetafieldDefinition/1071456170",
      "name": "Pizza size (inches)"
    },
    "userErrors": []
  }
}
``` 
*   ### Update a metafield definition with access controls

#### Description

To change the access settings on an existing definition, use the `access` property in your `metafieldDefinitionUpdate` mutation. You can set the default admin access setting and also specify additional grants to create, update or delete.

#### Query

```graphql
mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
  metafieldDefinitionUpdate(definition: $definition) {
    updatedDefinition {
      id
      name
      access {
        admin
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "definition": {
    "name": "Pizza size (inches)",
    "namespace": "$app:bakery",
    "key": "pizza_size",
    "ownerType": "PRODUCT",
    "access": {
      "admin": "PRIVATE"
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
"query": "mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) { metafieldDefinitionUpdate(definition: $definition) { updatedDefinition { id name access { admin } } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Pizza size (inches)",
      "namespace": "$app:bakery",
      "key": "pizza_size",
      "ownerType": "PRODUCT",
      "access": {
        "admin": "PRIVATE"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
    metafieldDefinitionUpdate(definition: $definition) {
      updatedDefinition {
        id
        name
        access {
          admin
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Pizza size (inches)",
            "namespace": "$app:bakery",
            "key": "pizza_size",
            "ownerType": "PRODUCT",
            "access": {
                "admin": "PRIVATE"
            }
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
  mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
    metafieldDefinitionUpdate(definition: $definition) {
      updatedDefinition {
        id
        name
        access {
          admin
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Pizza size (inches)",
    "namespace": "$app:bakery",
    "key": "pizza_size",
    "ownerType": "PRODUCT",
    "access": {
      "admin": "PRIVATE"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
      metafieldDefinitionUpdate(definition: $definition) {
        updatedDefinition {
          id
          name
          access {
            admin
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Pizza size (inches)",
            "namespace": "$app:bakery",
            "key": "pizza_size",
            "ownerType": "PRODUCT",
            "access": {
                "admin": "PRIVATE"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionUpdate": {
    "updatedDefinition": {
      "id": "gid://shopify/MetafieldDefinition/1071456171",
      "name": "Pizza size (inches)",
      "access": {
        "admin": "PRIVATE"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### metafieldDefinitionUpdate reference

Examples
--------

Update a metafield definition

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpdateMetafieldDefinition(%24definition%3A%20MetafieldDefinitionUpdateInput!)%20%7B%0A%20%20metafieldDefinitionUpdate(definition%3A%20%24definition)%20%7B%0A%20%20%20%20updatedDefinition%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22definition%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Pizza%20size%20(inches)%22%2C%0A%20%20%20%20%22namespace%22%3A%20%22bakery%22%2C%0A%20%20%20%20%22key%22%3A%20%22pizza_size%22%2C%0A%20%20%20%20%22ownerType%22%3A%20%22PRODUCT%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {

 metafieldDefinitionUpdate(definition: $definition) {

 updatedDefinition {

 id

 name

 }

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"definition":{

"name":"Pizza size (inches)",

"namespace":"bakery",

"key":"pizza_size",

"ownerType":"PRODUCT"

}

},

},

);

const data=await response.json();

```
mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
  metafieldDefinitionUpdate(definition: $definition) {
    updatedDefinition {
      id
      name
    }
    userErrors {
      field
      message
      code
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
"query": "mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) { metafieldDefinitionUpdate(definition: $definition) { updatedDefinition { id name } userErrors { field message code } } }",
 "variables": {
    "definition": {
      "name": "Pizza size (inches)",
      "namespace": "bakery",
      "key": "pizza_size",
      "ownerType": "PRODUCT"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
    metafieldDefinitionUpdate(definition: $definition) {
      updatedDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "definition": {
            "name": "Pizza size (inches)",
            "namespace": "bakery",
            "key": "pizza_size",
            "ownerType": "PRODUCT"
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
      metafieldDefinitionUpdate(definition: $definition) {
        updatedDefinition {
          id
          name
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "definition": {
            "name": "Pizza size (inches)",
            "namespace": "bakery",
            "key": "pizza_size",
            "ownerType": "PRODUCT"
        }
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
  mutation UpdateMetafieldDefinition($definition: MetafieldDefinitionUpdateInput!) {
    metafieldDefinitionUpdate(definition: $definition) {
      updatedDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "definition": {
    "name": "Pizza size (inches)",
    "namespace": "bakery",
    "key": "pizza_size",
    "ownerType": "PRODUCT"
  }
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

›

⌄

⌄

{

"definition": {

"name": "Pizza size (inches)",

"namespace": "bakery",

"key": "pizza_size",

"ownerType": "PRODUCT"

}

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

9

›

⌄

⌄

⌄

{

"metafieldDefinitionUpdate": {

"updatedDefinition": {

"id": "gid://shopify/MetafieldDefinition/1071456170",

"name": "Pizza size (inches)"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*