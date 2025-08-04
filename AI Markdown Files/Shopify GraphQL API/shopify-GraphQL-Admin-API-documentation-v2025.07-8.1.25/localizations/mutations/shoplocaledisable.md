---
title: "shopLocaleDisable"
description: "Shopify GraphQL Admin API documentation for shoplocaledisable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable"
extraction_method: "jina"
sections: ['Localizations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopLocaleDisable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable

Markdown Content:
shopLocaleDisable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#main-content)

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

[Anchor to shopLocaleDisable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#top)
shop Locale Disable
===================

mutation

Requires `write_locales` access scope.

Deletes a locale for a shop. This also deletes all translations of this locale.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#arguments)
Arguments
---------

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#arguments-locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

ISO code of the locale to delete.

* * *

Was this section helpful?

Yes No

[Anchor to ShopLocaleDisablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#returns)Shop Locale Disable Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#returns-locale)locale

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

ISO code of the locale that was deleted.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete the Korean locale from a shop

#### Description

Deleting a locale also permanently deletes all of its translations.

#### Query

```graphql
mutation disableLocale($locale: String!) {
  shopLocaleDisable(locale: $locale) {
    userErrors {
      message
      field
    }
    locale
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
"query": "mutation disableLocale($locale: String!) { shopLocaleDisable(locale: $locale) { userErrors { message field } locale } }",
 "variables": {
    "locale": "ko"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation disableLocale($locale: String!) {
    shopLocaleDisable(locale: $locale) {
      userErrors {
        message
        field
      }
      locale
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
  mutation disableLocale($locale: String!) {
    shopLocaleDisable(locale: $locale) {
      userErrors {
        message
        field
      }
      locale
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
    "query": `mutation disableLocale($locale: String!) {
      shopLocaleDisable(locale: $locale) {
        userErrors {
          message
          field
        }
        locale
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
  "shopLocaleDisable": {
    "userErrors": [],
    "locale": "ko"
  }
}
``` 
*   ### shopLocaleDisable reference

Examples
--------

Delete the Korean locale from a shop

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20disableLocale(%24locale%3A%20String!)%20%7B%0A%20%20shopLocaleDisable(locale%3A%20%24locale)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%20%20locale%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22locale%22%3A%20%22ko%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation disableLocale($locale: String!) {

 shopLocaleDisable(locale: $locale) {

 userErrors {

 message

 field

 }

 locale

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
mutation disableLocale($locale: String!) {
  shopLocaleDisable(locale: $locale) {
    userErrors {
      message
      field
    }
    locale
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation disableLocale($locale: String!) { shopLocaleDisable(locale: $locale) { userErrors { message field } locale } }",
 "variables": {
    "locale": "ko"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation disableLocale($locale: String!) {
    shopLocaleDisable(locale: $locale) {
      userErrors {
        message
        field
      }
      locale
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
    "query": `mutation disableLocale($locale: String!) {
      shopLocaleDisable(locale: $locale) {
        userErrors {
          message
          field
        }
        locale
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
  mutation disableLocale($locale: String!) {
    shopLocaleDisable(locale: $locale) {
      userErrors {
        message
        field
      }
      locale
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

"shopLocaleDisable": {

"userErrors": [],

"locale": "ko"

}

}


---
*Content truncated at "Updates" section*