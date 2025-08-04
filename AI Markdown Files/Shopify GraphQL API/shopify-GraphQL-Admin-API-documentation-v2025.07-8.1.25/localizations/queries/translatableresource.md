---
title: "translatableResource"
description: "Shopify GraphQL Admin API documentation for translatableresource"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource"
extraction_method: "jina"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: translatableResource - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource

Markdown Content:
translatableResource - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource#main-content)

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

    *   
Queries

        *   [available Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales)
        *   [market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource)
        *   [market Localizable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources)
        *   [market Localizable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresourcesbyids)
        *   [shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales)
        *   [translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource)
        *   [translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources)
        *   [translatable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresourcesbyids)

    *   Mutations   
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

[Anchor to translatableResource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource#top)
translatable Resource
=====================

query

Requires `read_translations` access scope.

A resource that can have localized values for different languages.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource#arguments)
Arguments
---------

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource#arguments-resourceId)resource Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Find a translatable resource by ID.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to TranslatableResource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource#returns-TranslatableResource)Translatable Resource

•[Translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource)

A resource that has translatable fields.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve existing French translations on a collection

#### Description

Query the `translations` field on the return field to check existing translations associated with a collection.

#### Query

```graphql
query {
  translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
    resourceId
    translations(locale: "fr") {
      key
      value
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
"query": "query { translatableResource(resourceId: \"gid://shopify/Collection/1007901140\") { resourceId translations(locale: \"fr\") { key value } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr") {
        key
        value
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
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr") {
        key
        value
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr") {
        key
        value
      }
    }
  }`,
});
``` #### Response

```json
{
  "translatableResource": {
    "resourceId": "gid://shopify/Collection/1007901140",
    "translations": [
      {
        "key": "title",
        "value": "la collection"
      }
    ]
  }
}
``` 
*   ### Retrieve existing French translations specific to a market on a collection

#### Description

Make use of the optional `marketId` argument when querying the `translations` field to retrieve content specific to a market.

#### Query

```graphql
query {
  translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
    resourceId
    translations(locale: "fr", marketId: "gid://shopify/Market/128989799") {
      key
      value
      market {
        id
        name
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
"query": "query { translatableResource(resourceId: \"gid://shopify/Collection/1007901140\") { resourceId translations(locale: \"fr\", marketId: \"gid://shopify/Market/128989799\") { key value market { id name } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr", marketId: "gid://shopify/Market/128989799") {
        key
        value
        market {
          id
          name
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
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr", marketId: "gid://shopify/Market/128989799") {
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

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr", marketId: "gid://shopify/Market/128989799") {
        key
        value
        market {
          id
          name
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "translatableResource": {
    "resourceId": "gid://shopify/Collection/1007901140",
    "translations": [
      {
        "key": "title",
        "value": "la collection canadienne",
        "market": {
          "id": "gid://shopify/Market/128989799",
          "name": "Canada"
        }
      }
    ]
  }
}
``` 
*   ### Retrieve translatable content for a collection

#### Description

Use this query as part of preparing to register translations. The `digest` value is required as an input argument when registering a translation.

#### Query

```graphql
query {
  translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
    resourceId
    translatableContent {
      key
      value
      digest
      locale
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
"query": "query { translatableResource(resourceId: \"gid://shopify/Collection/1007901140\") { resourceId translatableContent { key value digest locale } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translatableContent {
        key
        value
        digest
        locale
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
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translatableContent {
        key
        value
        digest
        locale
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translatableContent {
        key
        value
        digest
        locale
      }
    }
  }`,
});
``` #### Response

```json
{
  "translatableResource": {
    "resourceId": "gid://shopify/Collection/1007901140",
    "translatableContent": [
      {
        "key": "title",
        "value": "Featured items",
        "digest": "a18b34037fda5b1afd720d4b85b86a8a75b5e389452f84f5b6d2b8e210869fd7",
        "locale": "en"
      },
      {
        "key": "body_html",
        "value": "Collection description",
        "digest": "e3fbf5a945f94e5ddbb6bef20f5e5e3a923b34bdf1eb170f770a8aa0fd163bfa",
        "locale": "en"
      },
      {
        "key": "handle",
        "value": "featured",
        "digest": "d562318e9c2d7e6d9c70de511fbf5d3081fae3d6699eed31c3a87c5a0bc6ca51",
        "locale": "en"
      }
    ]
  }
}
``` 

Examples
--------

Retrieve existing French translations on a collection

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20translatableResource(resourceId%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F1007901140%22)%20%7B%0A%20%20%20%20resourceId%0A%20%20%20%20translations(locale%3A%20%22fr%22)%20%7B%0A%20%20%20%20%20%20key%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 translatableResource(resourceId: "gid://shopify/Collection/1007901140") {

 resourceId

 translations(locale: "fr") {

 key

 value

 }

 }

 }`,

);

const data=await response.json();

```
query {
  translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
    resourceId
    translations(locale: "fr") {
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
"query": "query { translatableResource(resourceId: \"gid://shopify/Collection/1007901140\") { resourceId translations(locale: \"fr\") { key value } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr") {
        key
        value
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr") {
        key
        value
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
  query {
    translatableResource(resourceId: "gid://shopify/Collection/1007901140") {
      resourceId
      translations(locale: "fr") {
        key
        value
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

›

⌄

⌄

⌄

⌄

{

"translatableResource": {

"resourceId": "gid://shopify/Collection/1007901140",

"translations": [

{

"key": "title",

"value": "la collection"

}

]

}

}


---
*Content truncated at "Updates" section*