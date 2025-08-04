---
title: "catalog"
description: "Shopify GraphQL Admin API documentation for catalog"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: catalog - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog

Markdown Content:
catalog - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog#main-content)

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
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   
Products and collections

    *   
Queries

        *   [catalog](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog)
        *   [catalog Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogoperations)
        *   [catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)
        *   [catalogs Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogscount)
        *   [collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection)
        *   [collection By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyhandle)
        *   [collection By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionbyidentifier)
        *   [collection Rules Conditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions)
        *   [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)
        *   [collection Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionsavedsearches)
        *   [collections Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionscount)
        *   [files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)
        *   [file Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/filesavedsearches)
        *   [price List](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelist)
        *   [price Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/pricelists)
        *   [product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product)
        *   [product By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyhandle)
        *   [product By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier)
        *   [product Duplicate Job](https://shopify.dev/docs/api/admin-graphql/latest/queries/productduplicatejob)
        *   [product Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/productoperation)
        *   [product Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/queries/productresourcefeedback)
        *   [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)
        *   [product Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productsavedsearches)
        *   [products Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productscount)
        *   [product Variant](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariant)
        *   [product Variant By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantbyidentifier)
        *   [product Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariants)
        *   [product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/productvariantscount)
        *   [selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroup)
        *   [selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingplangroups)
        *   [taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/queries/taxonomy)

    *   Mutations   
    *   Objects   

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

[Anchor to catalog](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog#top)
catalog
=======

query

Retrieves a [catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) by its ID. A catalog represents a list of products with publishing and pricing information, and can be associated with a context, such as a market, company location, or app.

Use the `catalog` query to retrieve information associated with the following workflows:

*   Managing product publications across different contexts
*   Setting up contextual pricing with price lists
*   Managing market-specific product availability
*   Configuring B2B customer catalogs

There are several types of catalogs:

*   [`MarketCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)
*   [`AppCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog)
*   [`CompanyLocationCatalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog)

Learn more about [catalogs for different markets](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `Catalog` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Catalog](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalog#returns-Catalog)Catalog

•[Catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

A list of products with publishing and pricing information. A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/api/admin-graphql/current/objects/market), [`CompanyLocation`](https://shopify.dev/api/admin-graphql/current/objects/companylocation), or [`App`](https://shopify.dev/api/admin-graphql/current/objects/app).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Monitor catalog operations and status

#### Description

Monitor the operational status and recent activities of a [catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) by retrieving its operations history. This query is useful for tracking catalog updates, imports, and other administrative operations. The `operations` field provides insight into recent changes and can help you identify any issues or ongoing processes affecting the catalog's functionality.

#### Query

```graphql
query {
  catalog(id: "gid://shopify/Catalog/1068177658") {
    id
    title
    status
    operations {
      __typename
      ... on CatalogCsvOperation {
        id
        status
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
"query": "query { catalog(id: \"gid://shopify/Catalog/1068177658\") { id title status operations { __typename ... on CatalogCsvOperation { id status } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    catalog(id: "gid://shopify/Catalog/1068177658") {
      id
      title
      status
      operations {
        __typename
        ... on CatalogCsvOperation {
          id
          status
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
    catalog(id: "gid://shopify/Catalog/1068177658") {
      id
      title
      status
      operations {
        __typename
        ... on CatalogCsvOperation {
          id
          status
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
    catalog(id: "gid://shopify/Catalog/1068177658") {
      id
      title
      status
      operations {
        __typename
        ... on CatalogCsvOperation {
          id
          status
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "catalog": {
    "id": "gid://shopify/AppCatalog/1068177658",
    "title": "Operations Monitoring Catalog",
    "status": "ACTIVE",
    "operations": [
      {
        "__typename": "CatalogCsvOperation",
        "id": "gid://shopify/CatalogCsvOperation/1065229254",
        "status": "COMPLETE"
      }
    ]
  }
}
``` 
*   ### Retrieve a catalog with pricing details

#### Description

Retrieve comprehensive catalog information including the associated [price list](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) details. This query demonstrates how to access the catalog's pricing information through the price list, which contains the currency and pricing rules that apply to products in this catalog. This information is essential for understanding how products are priced within the catalog context. Learn more about [catalog pricing](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

#### Query

```graphql
query {
  catalog(id: "gid://shopify/Catalog/1068177656") {
    id
    title
    status
    priceList {
      id
      currency
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
"query": "query { catalog(id: \"gid://shopify/Catalog/1068177656\") { id title status priceList { id currency } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    catalog(id: "gid://shopify/Catalog/1068177656") {
      id
      title
      status
      priceList {
        id
        currency
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
    catalog(id: "gid://shopify/Catalog/1068177656") {
      id
      title
      status
      priceList {
        id
        currency
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
    catalog(id: "gid://shopify/Catalog/1068177656") {
      id
      title
      status
      priceList {
        id
        currency
      }
    }
  }`,
});
``` #### Response

```json
{
  "catalog": {
    "id": "gid://shopify/CompanyLocationCatalog/1068177656",
    "title": "B2B Catalog with Pricing",
    "status": "ACTIVE",
    "priceList": null
  }
}
``` 
*   ### Retrieve a catalog's title and status

#### Description

Retrieve the title and status of a [catalog](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) using its ID. This query is useful when building admin interfaces or dashboards where you need to show catalog details to merchants. The response includes the catalog's human-readable title for display purposes and its status to indicate whether it's active and ready for use.

#### Query

```graphql
query {
  catalog(id: "gid://shopify/Catalog/1068177657") {
    id
    title
    status
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { catalog(id: \"gid://shopify/Catalog/1068177657\") { id title status } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    catalog(id: "gid://shopify/Catalog/1068177657") {
      id
      title
      status
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
    catalog(id: "gid://shopify/Catalog/1068177657") {
      id
      title
      status
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    catalog(id: "gid://shopify/Catalog/1068177657") {
      id
      title
      status
    }
  }`,
});
``` #### Response

```json
{
  "catalog": {
    "id": "gid://shopify/MarketCatalog/1068177657",
    "title": "Market Catalog Example",
    "status": "ACTIVE"
  }
}
``` 

Examples
--------

Monitor catalog operations and status

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20catalog(id%3A%20%22gid%3A%2F%2Fshopify%2FCatalog%2F1068177658%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20status%0A%20%20%20%20operations%20%7B%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20...%20on%20CatalogCsvOperation%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 catalog(id: "gid://shopify/Catalog/1068177658") {

 id

 title

 status

 operations {

 __typename

 ... on CatalogCsvOperation {

 id

 status

 }

 }

 }

 }`,

);

const data=await response.json();

```
query {
  catalog(id: "gid://shopify/Catalog/1068177658") {
    id
    title
    status
    operations {
      __typename
      ... on CatalogCsvOperation {
        id
        status
      }
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
"query": "query { catalog(id: \"gid://shopify/Catalog/1068177658\") { id title status operations { __typename ... on CatalogCsvOperation { id status } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    catalog(id: "gid://shopify/Catalog/1068177658") {
      id
      title
      status
      operations {
        __typename
        ... on CatalogCsvOperation {
          id
          status
        }
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
    catalog(id: "gid://shopify/Catalog/1068177658") {
      id
      title
      status
      operations {
        __typename
        ... on CatalogCsvOperation {
          id
          status
        }
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
    catalog(id: "gid://shopify/Catalog/1068177658") {
      id
      title
      status
      operations {
        __typename
        ... on CatalogCsvOperation {
          id
          status
        }
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

12

13

14

›

⌄

⌄

⌄

⌄

{

"catalog": {

"id": "gid://shopify/AppCatalog/1068177658",

"title": "Operations Monitoring Catalog",

"status": "ACTIVE",

"operations": [

{

"__typename": "CatalogCsvOperation",

"id": "gid://shopify/CatalogCsvOperation/1065229254",

"status": "COMPLETE"

}

]

}

}


---
*Content truncated at "Updates" section*