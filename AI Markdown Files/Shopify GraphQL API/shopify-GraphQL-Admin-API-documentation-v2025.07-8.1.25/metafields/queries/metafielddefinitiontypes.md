---
title: "metafieldDefinitionTypes"
description: "Shopify GraphQL Admin API documentation for metafielddefinitiontypes"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes"
extraction_method: "jina"
sections: ['Metafields', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metafieldDefinitionTypes - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes

Markdown Content:
metafieldDefinitionTypes - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes#main-content)

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
*   
Metafields

    *   
Queries

        *   [metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinition)
        *   [metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitions)
        *   [metafield Definition Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes)
        *   [standard Metafield Definition Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardmetafielddefinitiontemplates)

    *   Mutations   
    *   Objects   

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

[Anchor to metafieldDefinitionTypes](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes#top)
metafield Definition Types
==========================

query

Each metafield definition has a type, which defines the type of information that it can store. This type is enforced across every instance of the resource that owns the metafield definition.

Refer to the [list of supported metafield types](https://shopify.dev/apps/metafields/types).

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MetafieldDefinitionType](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafielddefinitiontypes#returns-MetafieldDefinitionType)Metafield Definition Type

•[[Metafield Definition Type!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

A metafield definition type provides basic foundation and validation for a metafield.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Fetch all metafield definition types

#### Description

Fetch the full list of metafield definition types along with their supported validations.

#### Query

```graphql
query MetafieldDefinitionTypes {
  metafieldDefinitionTypes {
    category
    name
    supportsDefinitionMigrations
    supportedValidations {
      name
      type
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
"query": "query MetafieldDefinitionTypes { metafieldDefinitionTypes { category name supportsDefinitionMigrations supportedValidations { name type } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldDefinitionTypes {
    metafieldDefinitionTypes {
      category
      name
      supportsDefinitionMigrations
      supportedValidations {
        name
        type
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
  query MetafieldDefinitionTypes {
    metafieldDefinitionTypes {
      category
      name
      supportsDefinitionMigrations
      supportedValidations {
        name
        type
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MetafieldDefinitionTypes {
    metafieldDefinitionTypes {
      category
      name
      supportsDefinitionMigrations
      supportedValidations {
        name
        type
      }
    }
  }`,
});
``` #### Response

```json
{
  "metafieldDefinitionTypes": [
    {
      "category": "TRUE_FALSE",
      "name": "boolean",
      "supportsDefinitionMigrations": true,
      "supportedValidations": []
    },
    {
      "category": "COLOR",
      "name": "color",
      "supportsDefinitionMigrations": true,
      "supportedValidations": []
    },
    {
      "category": "DATE_TIME",
      "name": "date_time",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "date_time"
        },
        {
          "name": "max",
          "type": "date_time"
        }
      ]
    },
    {
      "category": "DATE_TIME",
      "name": "date",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "date"
        },
        {
          "name": "max",
          "type": "date"
        }
      ]
    },
    {
      "category": "MEASUREMENT",
      "name": "dimension",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "dimension"
        },
        {
          "name": "max",
          "type": "dimension"
        }
      ]
    },
    {
      "category": "JSON",
      "name": "json",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "schema",
          "type": "json"
        }
      ]
    },
    {
      "category": "LANGUAGE",
      "name": "language",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "COLOR",
      "name": "list.color",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "DATE_TIME",
      "name": "list.date_time",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "date_time"
        },
        {
          "name": "max",
          "type": "date_time"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "DATE_TIME",
      "name": "list.date",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "date"
        },
        {
          "name": "max",
          "type": "date"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "MEASUREMENT",
      "name": "list.dimension",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "dimension"
        },
        {
          "name": "max",
          "type": "dimension"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "NUMBER",
      "name": "list.number_decimal",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_decimal"
        },
        {
          "name": "max",
          "type": "number_decimal"
        },
        {
          "name": "max_precision",
          "type": "number_integer"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "NUMBER",
      "name": "list.number_integer",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_integer"
        },
        {
          "name": "max",
          "type": "number_integer"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "RATING",
      "name": "list.rating",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "scale_min",
          "type": "number_decimal"
        },
        {
          "name": "scale_max",
          "type": "number_decimal"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "TEXT",
      "name": "list.single_line_text_field",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_integer"
        },
        {
          "name": "max",
          "type": "number_integer"
        },
        {
          "name": "regex",
          "type": "single_line_text_field"
        },
        {
          "name": "choices",
          "type": "list.single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "URL",
      "name": "list.url",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "allowed_domains",
          "type": "list.single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "MEASUREMENT",
      "name": "list.volume",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "volume"
        },
        {
          "name": "max",
          "type": "volume"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "MEASUREMENT",
      "name": "list.weight",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "min",
          "type": "weight"
        },
        {
          "name": "max",
          "type": "weight"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "MONEY",
      "name": "money",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "TEXT",
      "name": "multi_line_text_field",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_integer"
        },
        {
          "name": "max",
          "type": "number_integer"
        },
        {
          "name": "regex",
          "type": "single_line_text_field"
        }
      ]
    },
    {
      "category": "NUMBER",
      "name": "number_decimal",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_decimal"
        },
        {
          "name": "max",
          "type": "number_decimal"
        },
        {
          "name": "max_precision",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "NUMBER",
      "name": "number_integer",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_integer"
        },
        {
          "name": "max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "RATING",
      "name": "rating",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "scale_min",
          "type": "number_decimal"
        },
        {
          "name": "scale_max",
          "type": "number_decimal"
        }
      ]
    },
    {
      "category": "TEXT",
      "name": "rich_text_field",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "TEXT",
      "name": "single_line_text_field",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "number_integer"
        },
        {
          "name": "max",
          "type": "number_integer"
        },
        {
          "name": "regex",
          "type": "single_line_text_field"
        },
        {
          "name": "choices",
          "type": "list.single_line_text_field"
        }
      ]
    },
    {
      "category": "URL",
      "name": "url",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "allowed_domains",
          "type": "list.single_line_text_field"
        }
      ]
    },
    {
      "category": "LINK",
      "name": "link",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "allowed_domains",
          "type": "list.single_line_text_field"
        }
      ]
    },
    {
      "category": "LINK",
      "name": "list.link",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "allowed_domains",
          "type": "list.single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "MEASUREMENT",
      "name": "volume",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "volume"
        },
        {
          "name": "max",
          "type": "volume"
        }
      ]
    },
    {
      "category": "MEASUREMENT",
      "name": "weight",
      "supportsDefinitionMigrations": true,
      "supportedValidations": [
        {
          "name": "min",
          "type": "weight"
        },
        {
          "name": "max",
          "type": "weight"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "company_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "REFERENCE",
      "name": "list.company_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "customer_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "REFERENCE",
      "name": "list.customer_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "product_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "REFERENCE",
      "name": "list.product_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "collection_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "REFERENCE",
      "name": "list.collection_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "variant_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "REFERENCE",
      "name": "list.variant_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "file_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "file_type_options",
          "type": "list.single_line_text_field"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "list.file_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "file_type_options",
          "type": "list.single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "product_taxonomy_value_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "product_taxonomy_attribute_handle",
          "type": "single_line_text_field"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "list.product_taxonomy_value_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "product_taxonomy_attribute_handle",
          "type": "single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "metaobject_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "metaobject_definition_id",
          "type": "single_line_text_field"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "list.metaobject_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "metaobject_definition_id",
          "type": "single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "mixed_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "metaobject_definition_ids",
          "type": "list.single_line_text_field"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "list.mixed_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "metaobject_definition_ids",
          "type": "list.single_line_text_field"
        },
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "page_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    },
    {
      "category": "REFERENCE",
      "name": "list.page_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": [
        {
          "name": "list.min",
          "type": "number_integer"
        },
        {
          "name": "list.max",
          "type": "number_integer"
        }
      ]
    },
    {
      "category": "REFERENCE",
      "name": "order_reference",
      "supportsDefinitionMigrations": false,
      "supportedValidations": []
    }
  ]
}
``` 

Fetch all metafield definition types
------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MetafieldDefinitionTypes%20%7B%0A%20%20metafieldDefinitionTypes%20%7B%0A%20%20%20%20category%0A%20%20%20%20name%0A%20%20%20%20supportsDefinitionMigrations%0A%20%20%20%20supportedValidations%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20type%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MetafieldDefinitionTypes {

 metafieldDefinitionTypes {

 category

 name

 supportsDefinitionMigrations

 supportedValidations {

 name

 type

 }

 }

 }`,

);

const data=await response.json();

```
query MetafieldDefinitionTypes {
  metafieldDefinitionTypes {
    category
    name
    supportsDefinitionMigrations
    supportedValidations {
      name
      type
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
"query": "query MetafieldDefinitionTypes { metafieldDefinitionTypes { category name supportsDefinitionMigrations supportedValidations { name type } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MetafieldDefinitionTypes {
    metafieldDefinitionTypes {
      category
      name
      supportsDefinitionMigrations
      supportedValidations {
        name
        type
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MetafieldDefinitionTypes {
    metafieldDefinitionTypes {
      category
      name
      supportsDefinitionMigrations
      supportedValidations {
        name
        type
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
  query MetafieldDefinitionTypes {
    metafieldDefinitionTypes {
      category
      name
      supportsDefinitionMigrations
      supportedValidations {
        name
        type
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

999

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

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"metafieldDefinitionTypes": [

{

"category": "TRUE_FALSE",

"name": "boolean",

"supportsDefinitionMigrations": true,

"supportedValidations": []

},

{

"category": "COLOR",

"name": "color",

"supportsDefinitionMigrations": true,

"supportedValidations": []

},

{

"category": "DATE_TIME",

"name": "date_time",

"supportsDefinitionMigrations": true,

"supportedValidations": [

{

"name": "min",

"type": "date_time"

},

{

"name": "max",

"type": "date_time"

}

]

},

{

"category": "DATE_TIME",

"name": "date",

"supportsDefinitionMigrations": true,

"supportedValidations": [

{

"name": "min",


---
*Content truncated at "Updates" section*