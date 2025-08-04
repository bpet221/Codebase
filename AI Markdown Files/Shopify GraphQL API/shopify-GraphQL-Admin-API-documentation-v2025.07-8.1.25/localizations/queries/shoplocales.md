---
title: "shopLocales"
description: "Shopify GraphQL Admin API documentation for shoplocales"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales"
extraction_method: "jina"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopLocales - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales

Markdown Content:
shopLocales - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales#main-content)

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

    *   
Queries

        *   [available Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales)
        *   [market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource)
        *   [market Localizable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources)
        *   [market Localizable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresourcesbyids)
        *   [shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales)
        *   [translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources)

    *   Mutations   
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

[Anchor to shopLocales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales#top)
shop Locales
============

query

Requires `read_locales` access scope or `read_markets_home` access scope.

A list of locales available on a shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales#arguments)
Arguments
---------

[Anchor to published](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales#arguments-published)published

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Return only published locales.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ShopLocale](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales#returns-ShopLocale)Shop Locale

•[[Shop Locale!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopLocale)

A locale that's been enabled on a shop.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a shop's locales

#### Description

The following query retrieves a list of the shop's enabled locales, including the locale tag, the published state, and whether the locale tag is the primary tag.

#### Query

```graphql
query {
  shopLocales {
    locale
    primary
    published
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { shopLocales { locale primary published } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shopLocales {
      locale
      primary
      published
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
  query {
    shopLocales {
      locale
      primary
      published
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    shopLocales {
      locale
      primary
      published
    }
  }`,
});
``` #### Response

```json
{
  "shopLocales": [
    {
      "locale": "en",
      "primary": true,
      "published": true
    },
    {
      "locale": "es",
      "primary": false,
      "published": true
    },
    {
      "locale": "fr",
      "primary": false,
      "published": true
    },
    {
      "locale": "ja",
      "primary": false,
      "published": true
    }
  ]
}
``` 

Retrieve a shop's locales
-------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20shopLocales%20%7B%0A%20%20%20%20locale%0A%20%20%20%20primary%0A%20%20%20%20published%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 shopLocales {

 locale

 primary

 published

 }

 }`,

);

const data=await response.json();

```
query {
  shopLocales {
    locale
    primary
    published
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { shopLocales { locale primary published } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    shopLocales {
      locale
      primary
      published
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    shopLocales {
      locale
      primary
      published
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
  query {
    shopLocales {
      locale
      primary
      published
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"shopLocales": [

{

"locale": "en",

"primary": true,

"published": true

},

{

"locale": "es",

"primary": false,

"published": true

},

{

"locale": "fr",

"primary": false,

"published": true

},

{

"locale": "ja",

"primary": false,

"published": true

}

]

}


---
*Content truncated at "Updates" section*