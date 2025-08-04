---
title: "translationsRemove"
description: "Shopify GraphQL Admin API documentation for translationsremove"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove"
extraction_method: "jina"
sections: ['Localizations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: translationsRemove - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove

Markdown Content:
translationsRemove - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#main-content)

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

[Anchor to translationsRemove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#top)
translations Remove
===================

mutation

Requires `write_translations` access scope.

Deletes translations.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#arguments)
Arguments
---------

[Anchor to locales](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#arguments-locales)locales

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The list of translation locales. Only locales returned in `shopLocales` are valid.

[Anchor to marketIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#arguments-marketIds)market Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The list of market IDs.

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#arguments-resourceId)resource Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

ID of the translatable resource for which translations are being deleted.

[Anchor to translationKeys](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#arguments-translationKeys)translation Keys

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The list of translation keys.

* * *

Was this section helpful?

Yes No

[Anchor to TranslationsRemovePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#returns)Translations Remove Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#returns-translations)translations

•[[Translation!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

The translations that were deleted.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove#returns-userErrors)user Errors

•[[Translation User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Remove a French product title translation

#### Description

Translations matching all of the inputs will be removed. In this example, we are removing the product title's French translation that is not specific to any market.

#### Query

```graphql
mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
  translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) { translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) { userErrors { message field } translations { key value } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
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
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
        ]
    },
  },
});
``` #### Response

```json
{
  "translationsRemove": {
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
*   ### Remove a French product title translation specific to a market

#### Description

To remove content that surfaces only to buyers in specific markets, make use of the optional `marketIds` argument. In this example, the targeted market has an ID of `gid://shopify/Market/128989799`.

#### Query

```graphql
mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
  translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
    userErrors {
      message
      field
    }
    translations {
      key
      value
      market {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "resourceId": "gid://shopify/Product/20995642",
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
  ],
  "marketIds": [
    "gid://shopify/Market/128989799"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) { translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) { userErrors { message field } translations { key value market { id } } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ],
    "marketIds": [
      "gid://shopify/Market/128989799"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "resourceId": "gid://shopify/Product/20995642",
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
        ],
        "marketIds": [
            "gid://shopify/Market/128989799"
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
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
      userErrors {
        message
        field
      }
      translations {
        key
        value
        market {
          id
        }
      }
    }
  }
QUERY

variables = {
  "resourceId": "gid://shopify/Product/20995642",
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
  ],
  "marketIds": [
    "gid://shopify/Market/128989799"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!, $marketIds: [ID!]) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales, marketIds: $marketIds) {
        userErrors {
          message
          field
        }
        translations {
          key
          value
          market {
            id
          }
        }
      }
    }`,
    "variables": {
        "resourceId": "gid://shopify/Product/20995642",
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
        ],
        "marketIds": [
            "gid://shopify/Market/128989799"
        ]
    },
  },
});
``` #### Response

```json
{
  "translationsRemove": {
    "userErrors": [],
    "translations": [
      {
        "key": "title",
        "value": "L'élément canadien",
        "market": {
          "id": "gid://shopify/Market/128989799"
        }
      }
    ]
  }
}
``` 
*   ### translationsRemove reference

Examples
--------

Remove a French product title translation

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20translationsRemove(%24resourceId%3A%20ID!%2C%20%24translationKeys%3A%20%5BString!%5D!%2C%20%24locales%3A%20%5BString!%5D!)%20%7B%0A%20%20translationsRemove(resourceId%3A%20%24resourceId%2C%20translationKeys%3A%20%24translationKeys%2C%20locales%3A%20%24locales)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20translations%20%7B%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%2C%0A%20%20%22locales%22%3A%20%5B%0A%20%20%20%20%22fr%22%0A%20%20%5D%2C%0A%20%20%22translationKeys%22%3A%20%5B%0A%20%20%20%20%22title%22%0A%20%20%5D%0A%7D)Copy

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

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {

 translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {

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

"locales":[

"fr"

],

"translationKeys":[

"title"

]

},

},

);

const data=await response.json();

```
mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
  translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
"query": "mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) { translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) { userErrors { message field } translations { key value } } }",
 "variables": {
    "resourceId": "gid://shopify/Product/20995642",
    "locales": [
      "fr"
    ],
    "translationKeys": [
      "title"
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
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
    "query": `mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
      translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
        "locales": [
            "fr"
        ],
        "translationKeys": [
            "title"
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
  mutation translationsRemove($resourceId: ID!, $translationKeys: [String!]!, $locales: [String!]!) {
    translationsRemove(resourceId: $resourceId, translationKeys: $translationKeys, locales: $locales) {
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
  "locales": [
    "fr"
  ],
  "translationKeys": [
    "title"
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

"resourceId": "gid://shopify/Product/20995642",

"locales": [

"fr"

],

"translationKeys": [

"title"

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

"translationsRemove": {

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