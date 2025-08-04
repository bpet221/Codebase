---
title: "shopLocaleUpdate"
description: "Shopify GraphQL Admin API documentation for shoplocaleupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate"
extraction_method: "jina"
sections: ['Localizations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopLocaleUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate

Markdown Content:
shopLocaleUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#main-content)

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
*   
Localizations

    *   Queries   
    *   
Mutations

        *   [shop Locale Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable)
        *   [shop Locale Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable)
        *   [shop Locale Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate)

    *   Objects   

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

[Anchor to shopLocaleUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#top)
shop Locale Update
==================

mutation

Requires `write_locales` access scope.

Updates a locale for a shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#arguments)
Arguments
---------

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#arguments-locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

ISO code of the locale to update.

[Anchor to shopLocale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#arguments-shopLocale)shop Locale

•[Shop Locale Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopLocaleInput)

required

Specifies the input fields for a shop locale.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ShopLocaleUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#returns)Shop Locale Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to shopLocale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#returns-shopLocale)shop Locale

•[Shop Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

The locale that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Publish a locale

#### Description

Publishing a locale makes it available for translation. Make sure that you enable the locale before publishing it. A shop can have up to 20 alternate published locales.

#### Query

```graphql
mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
  shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
    userErrors {
      message
      field
    }
    shopLocale {
      name
      locale
      primary
      published
    }
  }
}
``` #### Variables

```json
{
  "locale": "ko",
  "shopLocale": {
    "published": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) { shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) { userErrors { message field } shopLocale { name locale primary published } } }",
 "variables": {
    "locale": "ko",
    "shopLocale": {
      "published": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }`,
  {
    variables: {
        "locale": "ko",
        "shopLocale": {
            "published": true
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
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }
QUERY

variables = {
  "locale": "ko",
  "shopLocale": {
    "published": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }`,
    "variables": {
        "locale": "ko",
        "shopLocale": {
            "published": true
        }
    },
  },
});
``` #### Response

```json
{
  "shopLocaleUpdate": {
    "userErrors": [],
    "shopLocale": {
      "name": "Korean",
      "locale": "ko",
      "primary": false,
      "published": true
    }
  }
}
``` 
*   ### Unpublish a locale

#### Query

```graphql
mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
  shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
    userErrors {
      message
      field
    }
    shopLocale {
      name
      locale
      primary
      published
    }
  }
}
``` #### Variables

```json
{
  "locale": "ko",
  "shopLocale": {
    "published": false
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) { shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) { userErrors { message field } shopLocale { name locale primary published } } }",
 "variables": {
    "locale": "ko",
    "shopLocale": {
      "published": false
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }`,
  {
    variables: {
        "locale": "ko",
        "shopLocale": {
            "published": false
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
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }
QUERY

variables = {
  "locale": "ko",
  "shopLocale": {
    "published": false
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }`,
    "variables": {
        "locale": "ko",
        "shopLocale": {
            "published": false
        }
    },
  },
});
``` #### Response

```json
{
  "shopLocaleUpdate": {
    "userErrors": [],
    "shopLocale": {
      "name": "Korean",
      "locale": "ko",
      "primary": false,
      "published": false
    }
  }
}
``` 
*   ### shopLocaleUpdate reference

Examples
--------

Publish a locale

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateLocale(%24locale%3A%20String!%2C%20%24shopLocale%3A%20ShopLocaleInput!)%20%7B%0A%20%20shopLocaleUpdate(locale%3A%20%24locale%2C%20shopLocale%3A%20%24shopLocale)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20shopLocale%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20locale%0A%20%20%20%20%20%20primary%0A%20%20%20%20%20%20published%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22locale%22%3A%20%22ko%22%2C%0A%20%20%22shopLocale%22%3A%20%7B%0A%20%20%20%20%22published%22%3A%20true%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {

 shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {

 userErrors {

 message

 field

 }

 shopLocale {

 name

 locale

 primary

 published

 }

 }

 }`,

{

variables:{

"locale":"ko",

"shopLocale":{

"published":true

}

},

},

);

const data=await response.json();

```
mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
  shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
    userErrors {
      message
      field
    }
    shopLocale {
      name
      locale
      primary
      published
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
"query": "mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) { shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) { userErrors { message field } shopLocale { name locale primary published } } }",
 "variables": {
    "locale": "ko",
    "shopLocale": {
      "published": true
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }`,
  {
    variables: {
        "locale": "ko",
        "shopLocale": {
            "published": true
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
    "query": `mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
      shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
        userErrors {
          message
          field
        }
        shopLocale {
          name
          locale
          primary
          published
        }
      }
    }`,
    "variables": {
        "locale": "ko",
        "shopLocale": {
            "published": true
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
  mutation updateLocale($locale: String!, $shopLocale: ShopLocaleInput!) {
    shopLocaleUpdate(locale: $locale, shopLocale: $shopLocale) {
      userErrors {
        message
        field
      }
      shopLocale {
        name
        locale
        primary
        published
      }
    }
  }
QUERY

variables = {
  "locale": "ko",
  "shopLocale": {
    "published": true
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

›

⌄

⌄

{

"locale": "ko",

"shopLocale": {

"published": true

}

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

"shopLocaleUpdate": {

"userErrors": [],

"shopLocale": {

"name": "Korean",

"locale": "ko",

"primary": false,

"published": true

}

}

}


---
*Content truncated at "Updates" section*