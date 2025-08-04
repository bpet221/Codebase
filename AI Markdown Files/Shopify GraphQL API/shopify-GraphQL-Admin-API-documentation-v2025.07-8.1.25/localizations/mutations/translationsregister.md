---
title: "translationsRegister"
description: "Shopify GraphQL Admin API documentation for translationsregister"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister"
extraction_method: "jina"
sections: ['Localizations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: translationsRegister - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister

Markdown Content:
translationsRegister - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#main-content)

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
*   
Localizations

    *   Queries   
    *   
Mutations

        *   [market Localizations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsregister)
        *   [market Localizations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove)
        *   [shop Locale Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable)
        *   [shop Locale Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable)
        *   [shop Locale Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate)
        *   [translations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister)
        *   [translations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove)

    *   Objects   

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

[Anchor to translationsRegister](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#top)
translations Register
=====================

mutation

Requires `write_translations` access scope.

Creates or updates translations.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#arguments)
Arguments
---------

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#arguments-resourceId)resource Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

ID of the resource that is being translated.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#arguments-translations)translations

•[[Translation Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/TranslationInput)

required

Specifies the input fields for a translation.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to TranslationsRegisterPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#returns)Translations Register Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#returns-translations)translations

•[[Translation!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

The translations that were created or updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister#returns-userErrors)user Errors

•[[Translation User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Register a French product title

#### Description

A successfully registered translation will be immediately visible to buyers if the locale is already published. In this example, the registered content will be visible to all buyers browsing in French from any market, unless there exists a market-specific translation for that market. To retrieve the `translatableContentDigest`, call the `translatableResource` query beforehand.

#### Query

```graphql
mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
  translationsRegister(resourceId: $resourceId, translations: $translations) {
    userErrors {
      message
      field
    }
    translations {
      key
      value
    }
  }
}
``` #### Variables

```json
{
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "fr",
      "key": "title",
      "value": "L'élément",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
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
"query": "mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) { translationsRegister(resourceId: $resourceId, translations: $translations) { userErrors { message field } translations { key value } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "translations": [
      {
        "locale": "fr",
        "key": "title",
        "value": "L'\''élément",
        "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }`,
  {
    variables: {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "fr",
                "key": "title",
                "value": "L'élément",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
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
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }
QUERY

variables = {
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "fr",
      "key": "title",
      "value": "L'élément",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
      translationsRegister(resourceId: $resourceId, translations: $translations) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
        }
      }
    }`,
    "variables": {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "fr",
                "key": "title",
                "value": "L'élément",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "translationsRegister": {
    "userErrors": [],
    "translations": [
      {
        "key": "title",
        "value": "L'élément"
      }
    ]
  }
}
``` 
*   ### Register a French product title specific to a market

#### Description

To register content that surfaces only to buyers in a specific market, make use of the `TranslationInput` object's optional `marketId` field. In this example, the words "L'élément canadien" will only be visible to buyers in the specified market, which has an ID of `gid://shopify/Market/128989799`.

#### Query

```graphql
mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
  translationsRegister(resourceId: $resourceId, translations: $translations) {
    userErrors {
      message
      field
    }
    translations {
      key
      value
      market {
        id
        name
      }
    }
  }
}
``` #### Variables

```json
{
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "fr",
      "key": "title",
      "value": "L'élément canadien",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
      "marketId": "gid://shopify/Market/128989799"
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
"query": "mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) { translationsRegister(resourceId: $resourceId, translations: $translations) { userErrors { message field } translations { key value market { id name } } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "translations": [
      {
        "locale": "fr",
        "key": "title",
        "value": "L'\''élément canadien",
        "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
        "marketId": "gid://shopify/Market/128989799"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
          name
        }
      }
    }
  }`,
  {
    variables: {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "fr",
                "key": "title",
                "value": "L'élément canadien",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
                "marketId": "gid://shopify/Market/128989799"
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
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
          name
        }
      }
    }
  }
QUERY

variables = {
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "fr",
      "key": "title",
      "value": "L'élément canadien",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
      "marketId": "gid://shopify/Market/128989799"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
      translationsRegister(resourceId: $resourceId, translations: $translations) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
          market {
            id
            name
          }
        }
      }
    }`,
    "variables": {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "fr",
                "key": "title",
                "value": "L'élément canadien",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
                "marketId": "gid://shopify/Market/128989799"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "translationsRegister": {
    "userErrors": [],
    "translations": [
      {
        "key": "title",
        "value": "L'élément canadien",
        "market": {
          "id": "gid://shopify/Market/128989799",
          "name": "Canada"
        }
      }
    ]
  }
}
``` 
*   ### Register a product title in the shop default language specific to a market

#### Description

To register content in the shop default language that surfaces only to buyers in a specific market, make use of the `TranslationInput` object's optional `marketId` field. In this example, the shop default language is English, and the words "Canadian element" will only be visible to buyers in the specified market, which has an ID of `gid://shopify/Market/128989799`.

#### Query

```graphql
mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
  translationsRegister(resourceId: $resourceId, translations: $translations) {
    userErrors {
      message
      field
    }
    translations {
      key
      value
      market {
        id
        name
      }
    }
  }
}
``` #### Variables

```json
{
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "en",
      "key": "title",
      "value": "Canadian element",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
      "marketId": "gid://shopify/Market/128989799"
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
"query": "mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) { translationsRegister(resourceId: $resourceId, translations: $translations) { userErrors { message field } translations { key value market { id name } } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "translations": [
      {
        "locale": "en",
        "key": "title",
        "value": "Canadian element",
        "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
        "marketId": "gid://shopify/Market/128989799"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
          name
        }
      }
    }
  }`,
  {
    variables: {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "en",
                "key": "title",
                "value": "Canadian element",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
                "marketId": "gid://shopify/Market/128989799"
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
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
          name
        }
      }
    }
  }
QUERY

variables = {
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "en",
      "key": "title",
      "value": "Canadian element",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
      "marketId": "gid://shopify/Market/128989799"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
      translationsRegister(resourceId: $resourceId, translations: $translations) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
          market {
            id
            name
          }
        }
      }
    }`,
    "variables": {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "en",
                "key": "title",
                "value": "Canadian element",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6",
                "marketId": "gid://shopify/Market/128989799"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "translationsRegister": {
    "userErrors": [],
    "translations": [
      {
        "key": "title",
        "value": "Canadian element",
        "market": {
          "id": "gid://shopify/Market/128989799",
          "name": "Canada"
        }
      }
    ]
  }
}
``` 
*   ### translationsRegister reference

Examples
--------

Register a French product title

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20translationsRegister(%24resourceId%3A%20ID!%2C%20%24translations%3A%20%5BTranslationInput!%5D!)%20%7B%0A%20%20translationsRegister(resourceId%3A%20%24resourceId%2C%20translations%3A%20%24translations)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20translations%20%7B%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22translations%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22locale%22%3A%20%22fr%22%2C%0A%20%20%20%20%20%20%22key%22%3A%20%22title%22%2C%0A%20%20%20%20%20%20%22value%22%3A%20%22L%27%C3%A9l%C3%A9ment%22%2C%0A%20%20%20%20%20%20%22translatableContentDigest%22%3A%20%224e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {

 translationsRegister(resourceId: $resourceId, translations: $translations) {

 userErrors {

 message

 field

 }

 translations {

 key

 value

 }

 }

 }`,

{

variables:{

"resourceId":"gid://shopify/Product/20995642",

"translations":[

{

"locale":"fr",

"key":"title",

"value":"L'élément",

"translatableContentDigest":"4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"

}

]

},

},

);

const data=await response.json();

```
mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
  translationsRegister(resourceId: $resourceId, translations: $translations) {
    userErrors {
      message
      field
    }
    translations {
      key
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
"query": "mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) { translationsRegister(resourceId: $resourceId, translations: $translations) { userErrors { message field } translations { key value } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "translations": [
      {
        "locale": "fr",
        "key": "title",
        "value": "L'\''élément",
        "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }`,
  {
    variables: {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "fr",
                "key": "title",
                "value": "L'élément",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
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
    "query": `mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
      translationsRegister(resourceId: $resourceId, translations: $translations) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
        }
      }
    }`,
    "variables": {
        "resourceId": "gid://shopify/Product/20995642",
        "translations": [
            {
                "locale": "fr",
                "key": "title",
                "value": "L'élément",
                "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
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
  mutation translationsRegister($resourceId: ID!, $translations: [TranslationInput!]!) {
    translationsRegister(resourceId: $resourceId, translations: $translations) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
      }
    }
  }
QUERY

variables = {
  "resourceId": "gid://shopify/Product/20995642",
  "translations": [
    {
      "locale": "fr",
      "key": "title",
      "value": "L'élément",
      "translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"
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

"resourceId": "gid://shopify/Product/20995642",

"translations": [

{

"locale": "fr",

"key": "title",

"value": "L'élément",

"translatableContentDigest": "4e5b548d6d61f0006840aca106f7464a4b59e5a854317d5b57861b8423901bf6"

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

›

⌄

⌄

⌄

⌄

{

"translationsRegister": {

"userErrors": [],

"translations": [

{

"key": "title",

"value": "L'élément"

}

]

}

}


---
*Content truncated at "Updates" section*