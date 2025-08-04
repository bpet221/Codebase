---
title: "collectionRulesConditions"
description: "Shopify GraphQL Admin API documentation for collectionrulesconditions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions"
extraction_method: "jina"
sections: ['Products and collections', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionRulesConditions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions

Markdown Content:
collectionRulesConditions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions#main-content)

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

[Anchor to collectionRulesConditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions#top)
collection Rules Conditions
===========================

query

Lists all rules that can be used to create smart collections.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to CollectionRuleConditions](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionrulesconditions#returns-CollectionRuleConditions)Collection Rule Conditions

•[[Collection Rule Conditions!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions)

This object defines all columns and allowed relations that can be used in rules for smart collections to automatically include the matching products.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of collection rule conditions

#### Query

```graphql
query {
  collectionRulesConditions {
    ruleType
    allowedRelations
    defaultRelation
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { collectionRulesConditions { ruleType allowedRelations defaultRelation } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
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
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
    }
  }`,
});
``` #### Response

```json
{
  "collectionRulesConditions": [
    {
      "ruleType": "TITLE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "CONTAINS"
    },
    {
      "ruleType": "VARIANT_TITLE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "CONTAINS"
    },
    {
      "ruleType": "TYPE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "PRODUCT_TAXONOMY_NODE_ID",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "VENDOR",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "IS_PRICE_REDUCED",
      "allowedRelations": [
        "IS_SET",
        "IS_NOT_SET"
      ],
      "defaultRelation": "IS_SET"
    },
    {
      "ruleType": "VARIANT_PRICE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "VARIANT_COMPARE_AT_PRICE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "VARIANT_INVENTORY",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "VARIANT_WEIGHT",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "TAG",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN"
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS"
    }
  ]
}
``` 
*   ### Retrieve a list of collection rule conditions along with metafield rule objects

#### Description

Retrieves a list of collection rule conditions along with the rule object fields. Each returned rule object is a `CollectionRuleMetafieldCondition` that contains the metafield definition it refers to. See an example on how to create an automated collection with metafield definition collection rules on the `collectionCreate` mutation.

#### Query

```graphql
query {
  collectionRulesConditions {
    ruleType
    allowedRelations
    defaultRelation
    ruleObject {
      ... on CollectionRuleMetafieldCondition {
        metafieldDefinition {
          id
          name
          ownerType
          type {
            name
          }
          validations {
            value
          }
        }
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
"query": "query { collectionRulesConditions { ruleType allowedRelations defaultRelation ruleObject { ... on CollectionRuleMetafieldCondition { metafieldDefinition { id name ownerType type { name } validations { value } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
      ruleObject {
        ... on CollectionRuleMetafieldCondition {
          metafieldDefinition {
            id
            name
            ownerType
            type {
              name
            }
            validations {
              value
            }
          }
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
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
      ruleObject {
        ... on CollectionRuleMetafieldCondition {
          metafieldDefinition {
            id
            name
            ownerType
            type {
              name
            }
            validations {
              value
            }
          }
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
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
      ruleObject {
        ... on CollectionRuleMetafieldCondition {
          metafieldDefinition {
            id
            name
            ownerType
            type {
              name
            }
            validations {
              value
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "collectionRulesConditions": [
    {
      "ruleType": "TITLE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "CONTAINS",
      "ruleObject": null
    },
    {
      "ruleType": "VARIANT_TITLE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "CONTAINS",
      "ruleObject": null
    },
    {
      "ruleType": "TYPE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": null
    },
    {
      "ruleType": "PRODUCT_TAXONOMY_NODE_ID",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": null
    },
    {
      "ruleType": "VENDOR",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "STARTS_WITH",
        "ENDS_WITH",
        "CONTAINS",
        "NOT_CONTAINS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": null
    },
    {
      "ruleType": "IS_PRICE_REDUCED",
      "allowedRelations": [
        "IS_SET",
        "IS_NOT_SET"
      ],
      "defaultRelation": "IS_SET",
      "ruleObject": null
    },
    {
      "ruleType": "VARIANT_PRICE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": null
    },
    {
      "ruleType": "VARIANT_COMPARE_AT_PRICE",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": null
    },
    {
      "ruleType": "VARIANT_INVENTORY",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": null
    },
    {
      "ruleType": "VARIANT_WEIGHT",
      "allowedRelations": [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": null
    },
    {
      "ruleType": "TAG",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": null
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/89321433",
          "name": "Non-standard rating",
          "ownerType": "PRODUCT",
          "type": {
            "name": "rating"
          },
          "validations": [
            {
              "value": "1.0"
            },
            {
              "value": "6.0"
            }
          ]
        }
      }
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/371357715",
          "name": "model",
          "ownerType": "PRODUCT",
          "type": {
            "name": "single_line_text_field"
          },
          "validations": [
            {
              "value": "9"
            }
          ]
        }
      }
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/397285273",
          "name": "Competitor cost",
          "ownerType": "PRODUCT",
          "type": {
            "name": "number_decimal"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/475536288",
          "name": "Year released",
          "ownerType": "PRODUCT",
          "type": {
            "name": "number_integer"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/660917123",
          "name": "Materials",
          "ownerType": "PRODUCT",
          "type": {
            "name": "list.single_line_text_field"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/804905764",
          "name": "Recyclable",
          "ownerType": "PRODUCT",
          "type": {
            "name": "boolean"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "PRODUCT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/985769189",
          "name": "Exporters",
          "ownerType": "PRODUCT",
          "type": {
            "name": "list.single_line_text_field"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/180578340",
          "name": "competitor cost",
          "ownerType": "PRODUCTVARIANT",
          "type": {
            "name": "number_decimal"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/406572501",
          "name": "Contents",
          "ownerType": "PRODUCTVARIANT",
          "type": {
            "name": "list.single_line_text_field"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS",
        "GREATER_THAN",
        "LESS_THAN"
      ],
      "defaultRelation": "GREATER_THAN",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/685760035",
          "name": "size of the item",
          "ownerType": "PRODUCTVARIANT",
          "type": {
            "name": "number_integer"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/898504968",
          "name": "Recyclable",
          "ownerType": "PRODUCTVARIANT",
          "type": {
            "name": "boolean"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/1043030858",
          "name": "available",
          "ownerType": "PRODUCTVARIANT",
          "type": {
            "name": "single_line_text_field"
          },
          "validations": []
        }
      }
    },
    {
      "ruleType": "VARIANT_METAFIELD_DEFINITION",
      "allowedRelations": [
        "EQUALS"
      ],
      "defaultRelation": "EQUALS",
      "ruleObject": {
        "metafieldDefinition": {
          "id": "gid://shopify/MetafieldDefinition/1067782171",
          "name": "Exporters",
          "ownerType": "PRODUCTVARIANT",
          "type": {
            "name": "list.single_line_text_field"
          },
          "validations": []
        }
      }
    }
  ]
}
``` 

Examples
--------

Retrieve a list of collection rule conditions

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20collectionRulesConditions%20%7B%0A%20%20%20%20ruleType%0A%20%20%20%20allowedRelations%0A%20%20%20%20defaultRelation%0A%20%20%7D%0A%7D)Copy

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

 collectionRulesConditions {

 ruleType

 allowedRelations

 defaultRelation

 }

 }`,

);

const data=await response.json();

```
query {
  collectionRulesConditions {
    ruleType
    allowedRelations
    defaultRelation
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { collectionRulesConditions { ruleType allowedRelations defaultRelation } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
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
    collectionRulesConditions {
      ruleType
      allowedRelations
      defaultRelation
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

{

"collectionRulesConditions": [

{

"ruleType": "TITLE",

"allowedRelations": [

"EQUALS",

"NOT_EQUALS",

"STARTS_WITH",

"ENDS_WITH",

"CONTAINS",

"NOT_CONTAINS"

],

"defaultRelation": "CONTAINS"

},

{

"ruleType": "VARIANT_TITLE",

"allowedRelations": [

"EQUALS",

"NOT_EQUALS",

"STARTS_WITH",

"ENDS_WITH",

"CONTAINS",

"NOT_CONTAINS"

],

"defaultRelation": "CONTAINS"

},

{

"ruleType": "TYPE",

"allowedRelations": [

"EQUALS",

"NOT_EQUALS",

"STARTS_WITH",

"ENDS_WITH",

"CONTAINS",

"NOT_CONTAINS"

],


---
*Content truncated at "Updates" section*