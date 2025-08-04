---
title: "metafieldDefinitionPin"
description: "Shopify GraphQL Admin API documentation for metafielddefinitionpin"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin"
extraction_method: "jina"
sections: ['Metafields', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinitionPin - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin

Markdown Content:
metafieldDefinitionPin - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#main-content)

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

[Anchor to metafieldDefinitionPin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#top)
metafield Definition Pin
========================

mutation

Requires API client to have access to the namespace and the resource type associated with the metafield definition.

You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#arguments)
Arguments
---------

[Anchor to definitionId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#arguments-definitionId)definition Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The id of the metafield definition to pin. Using `identifier` is preferred.

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#arguments-identifier)identifier

•[Metafield Definition Identifier Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

The identifier of the metafield definition to pin.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetafieldDefinitionPinPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#returns)Metafield Definition Pin Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to pinnedDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#returns-pinnedDefinition)pinned Definition

•[Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

The metafield definition that was pinned.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafielddefinitionpin#returns-userErrors)user Errors

•[[Metafield Definition Pin User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Pin a metafield definition

#### Description

Pin a metafield definition so it's automatically displayed in the Shopify admin for the corresponding resource.

#### Query

```graphql
mutation metafieldDefinitionPin($definitionId: ID!) {
  metafieldDefinitionPin(definitionId: $definitionId) {
    pinnedDefinition {
      name
      key
      namespace
      pinnedPosition
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
  "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation metafieldDefinitionPin($definitionId: ID!) { metafieldDefinitionPin(definitionId: $definitionId) { pinnedDefinition { name key namespace pinnedPosition } userErrors { field message } } }",
 "variables": {
    "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation metafieldDefinitionPin($definitionId: ID!) {
      metafieldDefinitionPin(definitionId: $definitionId) {
        pinnedDefinition {
          name
          key
          namespace
          pinnedPosition
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
    },
  },
});
``` #### Response

```json
{
  "metafieldDefinitionPin": {
    "pinnedDefinition": {
      "name": "Instructions to wash your product",
      "key": "wash",
      "namespace": "instructions",
      "pinnedPosition": 1
    },
    "userErrors": []
  }
}
``` 
*   ### metafieldDefinitionPin reference

Examples
--------

Pin a metafield definition

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20metafieldDefinitionPin(%24definitionId%3A%20ID!)%20%7B%0A%20%20metafieldDefinitionPin(definitionId%3A%20%24definitionId)%20%7B%0A%20%20%20%20pinnedDefinition%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20pinnedPosition%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22definitionId%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafieldDefinition%2F1071456171%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation metafieldDefinitionPin($definitionId: ID!) {

 metafieldDefinitionPin(definitionId: $definitionId) {

 pinnedDefinition {

 name

 key

 namespace

 pinnedPosition

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"definitionId":"gid://shopify/MetafieldDefinition/1071456171"

},

},

);

const data=await response.json();

```
mutation metafieldDefinitionPin($definitionId: ID!) {
  metafieldDefinitionPin(definitionId: $definitionId) {
    pinnedDefinition {
      name
      key
      namespace
      pinnedPosition
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
"query": "mutation metafieldDefinitionPin($definitionId: ID!) { metafieldDefinitionPin(definitionId: $definitionId) { pinnedDefinition { name key namespace pinnedPosition } userErrors { field message } } }",
 "variables": {
    "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation metafieldDefinitionPin($definitionId: ID!) {
      metafieldDefinitionPin(definitionId: $definitionId) {
        pinnedDefinition {
          name
          key
          namespace
          pinnedPosition
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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
  mutation metafieldDefinitionPin($definitionId: ID!) {
    metafieldDefinitionPin(definitionId: $definitionId) {
      pinnedDefinition {
        name
        key
        namespace
        pinnedPosition
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "definitionId": "gid://shopify/MetafieldDefinition/1071456171"
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

›

⌄

{

"definitionId": "gid://shopify/MetafieldDefinition/1071456171"

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

›

⌄

⌄

⌄

{

"metafieldDefinitionPin": {

"pinnedDefinition": {

"name": "Instructions to wash your product",

"key": "wash",

"namespace": "instructions",

"pinnedPosition": 1

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*