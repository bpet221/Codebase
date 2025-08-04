---
title: "productByIdentifier"
description: "Shopify GraphQL Admin API documentation for productbyidentifier"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productByIdentifier - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier

Markdown Content:
productByIdentifier - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier#main-content)

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

[Anchor to productByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier#top)
product By Identifier
=====================

query

Requires `read_products` access scope.

Return a product by an identifier.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier#arguments-identifier)identifier

•[Product Identifier Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductIdentifierInput)

required

The identifier of the product.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Product](https://shopify.dev/docs/api/admin-graphql/latest/queries/productbyidentifier#returns-Product)Product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The `Product` object lets you manage products in a merchant’s store.

Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Find a product by custom id

#### Query

```graphql
query($identifier: ProductIdentifierInput!) {
  product: productByIdentifier(identifier: $identifier) {
    id
    handle
    title
  }
}
``` #### Variables

```json
{
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "1001"
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
"query": "query($identifier: ProductIdentifierInput!) { product: productByIdentifier(identifier: $identifier) { id handle title } }",
 "variables": {
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "1001"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: ProductIdentifierInput!) {
    product: productByIdentifier(identifier: $identifier) {
      id
      handle
      title
    }
  }`,
  {
    variables: {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
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
  query($identifier: ProductIdentifierInput!) {
    product: productByIdentifier(identifier: $identifier) {
      id
      handle
      title
    }
  }
QUERY

variables = {
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "1001"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query($identifier: ProductIdentifierInput!) {
      product: productByIdentifier(identifier: $identifier) {
        id
        handle
        title
      }
    }`,
    "variables": {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "product": {
    "id": "gid://shopify/Product/20995642",
    "handle": "element",
    "title": "Element"
  }
}
``` 
*   ### Find a product by handle

#### Query

```graphql
query($identifier: ProductIdentifierInput!) {
  product: productByIdentifier(identifier: $identifier) {
    id
    handle
    title
  }
}
``` #### Variables

```json
{
  "identifier": {
    "handle": "boots"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query($identifier: ProductIdentifierInput!) { product: productByIdentifier(identifier: $identifier) { id handle title } }",
 "variables": {
    "identifier": {
      "handle": "boots"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: ProductIdentifierInput!) {
    product: productByIdentifier(identifier: $identifier) {
      id
      handle
      title
    }
  }`,
  {
    variables: {
        "identifier": {
            "handle": "boots"
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
  query($identifier: ProductIdentifierInput!) {
    product: productByIdentifier(identifier: $identifier) {
      id
      handle
      title
    }
  }
QUERY

variables = {
  "identifier": {
    "handle": "boots"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query($identifier: ProductIdentifierInput!) {
      product: productByIdentifier(identifier: $identifier) {
        id
        handle
        title
      }
    }`,
    "variables": {
        "identifier": {
            "handle": "boots"
        }
    },
  },
});
``` #### Response

```json
{
  "product": {
    "id": "gid://shopify/Product/121709582",
    "handle": "boots",
    "title": "Boots"
  }
}
``` 

Examples
--------

Find a product by custom id

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query(%24identifier%3A%20ProductIdentifierInput!)%20%7B%0A%20%20product%3A%20productByIdentifier(identifier%3A%20%24identifier)%20%7B%0A%20%20%20%20id%0A%20%20%20%20handle%0A%20%20%20%20title%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22identifier%22%3A%20%7B%0A%20%20%20%20%22customId%22%3A%20%7B%0A%20%20%20%20%20%20%22namespace%22%3A%20%22custom%22%2C%0A%20%20%20%20%20%20%22key%22%3A%20%22id%22%2C%0A%20%20%20%20%20%20%22value%22%3A%20%221001%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query($identifier: ProductIdentifierInput!) {

 product: productByIdentifier(identifier: $identifier) {

 id

 handle

 title

 }

 }`,

{

variables:{

"identifier":{

"customId":{

"namespace":"custom",

"key":"id",

"value":"1001"

}

}

},

},

);

const data=await response.json();

```
query($identifier: ProductIdentifierInput!) {
  product: productByIdentifier(identifier: $identifier) {
    id
    handle
    title
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query($identifier: ProductIdentifierInput!) { product: productByIdentifier(identifier: $identifier) { id handle title } }",
 "variables": {
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "1001"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: ProductIdentifierInput!) {
    product: productByIdentifier(identifier: $identifier) {
      id
      handle
      title
    }
  }`,
  {
    variables: {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
            }
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
    "query": `query($identifier: ProductIdentifierInput!) {
      product: productByIdentifier(identifier: $identifier) {
        id
        handle
        title
      }
    }`,
    "variables": {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
            }
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
  query($identifier: ProductIdentifierInput!) {
    product: productByIdentifier(identifier: $identifier) {
      id
      handle
      title
    }
  }
QUERY

variables = {
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "1001"
    }
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

9

›

⌄

⌄

⌄

{

"identifier": {

"customId": {

"namespace": "custom",

"key": "id",

"value": "1001"

}

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

›

⌄

⌄

{

"product": {

"id": "gid://shopify/Product/20995642",

"handle": "element",

"title": "Element"

}

}


---
*Content truncated at "Updates" section*