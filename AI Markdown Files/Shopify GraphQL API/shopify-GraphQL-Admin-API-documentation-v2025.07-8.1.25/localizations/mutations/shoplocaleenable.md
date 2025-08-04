---
title: "shopLocaleEnable"
description: "Shopify GraphQL Admin API documentation for shoplocaleenable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable"
extraction_method: "jina"
sections: ['Localizations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopLocaleEnable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable

Markdown Content:
shopLocaleEnable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#main-content)

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

[Anchor to shopLocaleEnable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#top)
shop Locale Enable
==================

mutation

Requires `write_locales` access scope.

Adds a locale for a shop. The newly added locale is in the unpublished state.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#arguments)
Arguments
---------

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#arguments-locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

ISO code of the locale to enable.

[Anchor to marketWebPresenceIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#arguments-marketWebPresenceIds)market Web Presence Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The list of markets web presences to add the locale to.

* * *

Was this section helpful?

Yes No

[Anchor to ShopLocaleEnablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#returns)Shop Locale Enable Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to shopLocale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#returns-shopLocale)shop Locale

•[Shop Locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

ISO code of the locale that was enabled.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Enable a locale

#### Description

A locale must be enabled before it can be published. The shopLocaleEnable mutation takes a locale tag. The shop locale is requested in the response to verify that the localewas enabled correctly. A shop can have up to 20 enabled locales.

#### Query

```graphql
mutation enableLocale($locale: String!) {
  shopLocaleEnable(locale: $locale) {
    userErrors {
      message
      field
    }
    shopLocale {
      locale
      name
      primary
      published
    }
  }
}
``` #### Variables

```json
{
  "locale": "ko"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation enableLocale($locale: String!) { shopLocaleEnable(locale: $locale) { userErrors { message field } shopLocale { locale name primary published } } }",
 "variables": {
    "locale": "ko"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation enableLocale($locale: String!) {
    shopLocaleEnable(locale: $locale) {
      userErrors {
        message
        field
      }
      shopLocale {
        locale
        name
        primary
        published
      }
    }
  }`,
  {
    variables: {
        "locale": "ko"
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
  mutation enableLocale($locale: String!) {
    shopLocaleEnable(locale: $locale) {
      userErrors {
        message
        field
      }
      shopLocale {
        locale
        name
        primary
        published
      }
    }
  }
QUERY

variables = {
  "locale": "ko"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation enableLocale($locale: String!) {
      shopLocaleEnable(locale: $locale) {
        userErrors {
          message
          field
        }
        shopLocale {
          locale
          name
          primary
          published
        }
      }
    }`,
    "variables": {
        "locale": "ko"
    },
  },
});
``` #### Response

```json
{
  "shopLocaleEnable": {
    "userErrors": [],
    "shopLocale": {
      "locale": "ko",
      "name": "Korean",
      "primary": false,
      "published": false
    }
  }
}
``` 
*   ### shopLocaleEnable reference

Examples
--------

Enable a locale

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20enableLocale(%24locale%3A%20String!)%20%7B%0A%20%20shopLocaleEnable(locale%3A%20%24locale)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20shopLocale%20%7B%0A%20%20%20%20%20%20locale%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20primary%0A%20%20%20%20%20%20published%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22locale%22%3A%20%22ko%22%0A%7D)Copy

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

 mutation enableLocale($locale: String!) {

 shopLocaleEnable(locale: $locale) {

 userErrors {

 message

 field

 }

 shopLocale {

 locale

 name

 primary

 published

 }

 }

 }`,

{

variables:{

"locale":"ko"

},

},

);

const data=await response.json();

```
mutation enableLocale($locale: String!) {
  shopLocaleEnable(locale: $locale) {
    userErrors {
      message
      field
    }
    shopLocale {
      locale
      name
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
"query": "mutation enableLocale($locale: String!) { shopLocaleEnable(locale: $locale) { userErrors { message field } shopLocale { locale name primary published } } }",
 "variables": {
    "locale": "ko"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation enableLocale($locale: String!) {
    shopLocaleEnable(locale: $locale) {
      userErrors {
        message
        field
      }
      shopLocale {
        locale
        name
        primary
        published
      }
    }
  }`,
  {
    variables: {
        "locale": "ko"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation enableLocale($locale: String!) {
      shopLocaleEnable(locale: $locale) {
        userErrors {
          message
          field
        }
        shopLocale {
          locale
          name
          primary
          published
        }
      }
    }`,
    "variables": {
        "locale": "ko"
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
  mutation enableLocale($locale: String!) {
    shopLocaleEnable(locale: $locale) {
      userErrors {
        message
        field
      }
      shopLocale {
        locale
        name
        primary
        published
      }
    }
  }
QUERY

variables = {
  "locale": "ko"
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

"locale": "ko"

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

"shopLocaleEnable": {

"userErrors": [],

"shopLocale": {

"locale": "ko",

"name": "Korean",

"primary": false,

"published": false

}

}

}


---
*Content truncated at "Updates" section*