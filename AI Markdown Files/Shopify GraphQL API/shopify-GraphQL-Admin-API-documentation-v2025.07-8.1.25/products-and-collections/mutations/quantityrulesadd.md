---
title: "quantityRulesAdd"
description: "Shopify GraphQL Admin API documentation for quantityrulesadd"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: quantityRulesAdd - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd

Markdown Content:
quantityRulesAdd - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#main-content)

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

    *   Queries   
    *   
Mutations

        *   [catalog Context Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcontextupdate)
        *   [catalog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcreate)
        *   [catalog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogdelete)
        *   [catalog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogupdate)
        *   [collection Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproducts)
        *   [collection Add Products V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproductsv2)
        *   [collection Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate)
        *   [collection Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectiondelete)
        *   [collection Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionpublish)
        *   [collection Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts)
        *   [collection Reorder Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionreorderproducts)
        *   [collection Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionunpublish)
        *   [collection Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate)
        *   [combined Listing Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate)
        *   [file Acknowledge Update Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileacknowledgeupdatefailed)
        *   [file Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate)
        *   [file Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete)
        *   [file Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate)
        *   [price List Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistcreate)
        *   [price List Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistdelete)
        *   [price List Fixed Prices Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesadd)
        *   [price List Fixed Prices By Product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesbyproductupdate)
        *   [price List Fixed Prices Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete)
        *   [price List Fixed Prices Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesupdate)
        *   [price List Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate)
        *   [product Bundle Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundlecreate)
        *   [product Bundle Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundleupdate)
        *   [product Change Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productchangestatus)
        *   [product Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate)
        *   [product Create Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia)
        *   [product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete)
        *   [product Delete Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia)
        *   [product Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate)
        *   [product Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productjoinsellingplangroups)
        *   [product Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productleavesellingplangroups)
        *   [product Options Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate)
        *   [product Options Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete)
        *   [product Options Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder)
        *   [product Option Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate)
        *   [product Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productpublish)
        *   [product Reorder Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productreordermedia)
        *   [product Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset)
        *   [product Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productunpublish)
        *   [product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate)
        *   [product Update Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia)
        *   [product Variant Append Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia)
        *   [product Variant Detach Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantdetachmedia)
        *   [product Variant Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantjoinsellingplangroups)
        *   [product Variant Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantleavesellingplangroups)
        *   [product Variant Relationship Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate)
        *   [product Variants Bulk Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate)
        *   [product Variants Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkdelete)
        *   [product Variants Bulk Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkreorder)
        *   [product Variants Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate)
        *   [quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantitypricingbyvariantupdate)
        *   [quantity Rules Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd)
        *   [quantity Rules Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesdelete)
        *   [selling Plan Group Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproducts)
        *   [selling Plan Group Add Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproductvariants)
        *   [selling Plan Group Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate)
        *   [selling Plan Group Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupdelete)
        *   [selling Plan Group Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproducts)
        *   [selling Plan Group Remove Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproductvariants)
        *   [selling Plan Group Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate)
        *   [staged Uploads Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate)

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

[Anchor to quantityRulesAdd](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#top)
quantity Rules Add
==================

mutation

Requires `write_products` access scope. Also: The user must have permission to create and edit catalogs, and the shop requires B2B features enabled.

Creates or updates existing quantity rules on a price list. You can use the `quantityRulesAdd` mutation to set order level minimums, maximumums and increments for specific product variants.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#arguments)
Arguments
---------

[Anchor to priceListId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#arguments-priceListId)price List Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the price list to which the quantity rules will be added or updated.

[Anchor to quantityRules](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#arguments-quantityRules)quantity Rules

•[[Quantity Rule Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput)

required

The list of quantity rules to add or update in the price list.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to QuantityRulesAddPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#returns)Quantity Rules Add Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to quantityRules](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#returns-quantityRules)quantity Rules

•[[Quantity Rule!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)

The list of quantity rules that were added to or updated in the price list.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd#returns-userErrors)user Errors

•[[Quantity Rule User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add multiple quantity rules to a price list

#### Description

Add quantity rules for two product variants

#### Query

```graphql
mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
  quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
    userErrors {
      field
      code
      message
    }
    quantityRules {
      minimum
      maximum
      increment
      isDefault
      originType
      productVariant {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "priceListId": "gid://shopify/PriceList/155157792",
  "quantityRules": [
    {
      "variantId": "gid://shopify/ProductVariant/138327650",
      "minimum": 1,
      "maximum": null,
      "increment": 1
    },
    {
      "variantId": "gid://shopify/ProductVariant/113711323",
      "minimum": 5,
      "maximum": 25,
      "increment": 5
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) { quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) { userErrors { field code message } quantityRules { minimum maximum increment isDefault originType productVariant { id } } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/155157792",
    "quantityRules": [
      {
        "variantId": "gid://shopify/ProductVariant/138327650",
        "minimum": 1,
        "maximum": null,
        "increment": 1
      },
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "minimum": 5,
        "maximum": 25,
        "increment": 5
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
    quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
      userErrors {
        field
        code
        message
      }
      quantityRules {
        minimum
        maximum
        increment
        isDefault
        originType
        productVariant {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/155157792",
        "quantityRules": [
            {
                "variantId": "gid://shopify/ProductVariant/138327650",
                "minimum": 1,
                "maximum": null,
                "increment": 1
            },
            {
                "variantId": "gid://shopify/ProductVariant/113711323",
                "minimum": 5,
                "maximum": 25,
                "increment": 5
            }
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
  mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
    quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
      userErrors {
        field
        code
        message
      }
      quantityRules {
        minimum
        maximum
        increment
        isDefault
        originType
        productVariant {
          id
        }
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/155157792",
  "quantityRules": [
    {
      "variantId": "gid://shopify/ProductVariant/138327650",
      "minimum": 1,
      "maximum": null,
      "increment": 1
    },
    {
      "variantId": "gid://shopify/ProductVariant/113711323",
      "minimum": 5,
      "maximum": 25,
      "increment": 5
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
      quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
        userErrors {
          field
          code
          message
        }
        quantityRules {
          minimum
          maximum
          increment
          isDefault
          originType
          productVariant {
            id
          }
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/155157792",
        "quantityRules": [
            {
                "variantId": "gid://shopify/ProductVariant/138327650",
                "minimum": 1,
                "maximum": null,
                "increment": 1
            },
            {
                "variantId": "gid://shopify/ProductVariant/113711323",
                "minimum": 5,
                "maximum": 25,
                "increment": 5
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "quantityRulesAdd": {
    "userErrors": [],
    "quantityRules": [
      {
        "minimum": 1,
        "maximum": null,
        "increment": 1,
        "isDefault": true,
        "originType": "FIXED",
        "productVariant": {
          "id": "gid://shopify/ProductVariant/138327650"
        }
      },
      {
        "minimum": 5,
        "maximum": 25,
        "increment": 5,
        "isDefault": false,
        "originType": "FIXED",
        "productVariant": {
          "id": "gid://shopify/ProductVariant/113711323"
        }
      }
    ]
  }
}
``` 
*   ### Adding invalid quantity rules returns an error

#### Description

Attempt to add quantity rules with invalid values

#### Query

```graphql
mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
  quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
    userErrors {
      field
      code
      message
    }
    quantityRules {
      minimum
      maximum
      increment
      isDefault
      originType
      productVariant {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "priceListId": "gid://shopify/PriceList/155157792",
  "quantityRules": [
    {
      "variantId": "gid://shopify/ProductVariant/138327650",
      "minimum": 1,
      "maximum": 5,
      "increment": 2
    },
    {
      "variantId": "gid://shopify/ProductVariant/113711323",
      "minimum": 10,
      "maximum": 5,
      "increment": 5
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) { quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) { userErrors { field code message } quantityRules { minimum maximum increment isDefault originType productVariant { id } } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/155157792",
    "quantityRules": [
      {
        "variantId": "gid://shopify/ProductVariant/138327650",
        "minimum": 1,
        "maximum": 5,
        "increment": 2
      },
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "minimum": 10,
        "maximum": 5,
        "increment": 5
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
    quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
      userErrors {
        field
        code
        message
      }
      quantityRules {
        minimum
        maximum
        increment
        isDefault
        originType
        productVariant {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/155157792",
        "quantityRules": [
            {
                "variantId": "gid://shopify/ProductVariant/138327650",
                "minimum": 1,
                "maximum": 5,
                "increment": 2
            },
            {
                "variantId": "gid://shopify/ProductVariant/113711323",
                "minimum": 10,
                "maximum": 5,
                "increment": 5
            }
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
  mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
    quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
      userErrors {
        field
        code
        message
      }
      quantityRules {
        minimum
        maximum
        increment
        isDefault
        originType
        productVariant {
          id
        }
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/155157792",
  "quantityRules": [
    {
      "variantId": "gid://shopify/ProductVariant/138327650",
      "minimum": 1,
      "maximum": 5,
      "increment": 2
    },
    {
      "variantId": "gid://shopify/ProductVariant/113711323",
      "minimum": 10,
      "maximum": 5,
      "increment": 5
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
      quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
        userErrors {
          field
          code
          message
        }
        quantityRules {
          minimum
          maximum
          increment
          isDefault
          originType
          productVariant {
            id
          }
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/155157792",
        "quantityRules": [
            {
                "variantId": "gid://shopify/ProductVariant/138327650",
                "minimum": 1,
                "maximum": 5,
                "increment": 2
            },
            {
                "variantId": "gid://shopify/ProductVariant/113711323",
                "minimum": 10,
                "maximum": 5,
                "increment": 5
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "quantityRulesAdd": {
    "userErrors": [
      {
        "field": [
          "quantityRules",
          "0",
          "increment"
        ],
        "code": "INCREMENT_IS_GREATER_THAN_MINIMUM",
        "message": "Increment must be lower than or equal to the minimum."
      },
      {
        "field": [
          "quantityRules",
          "0",
          "maximum"
        ],
        "code": "MAXIMUM_NOT_MULTIPLE_OF_INCREMENT",
        "message": "Maximum must be a multiple of the increment."
      },
      {
        "field": [
          "quantityRules",
          "0",
          "minimum"
        ],
        "code": "MINIMUM_NOT_MULTIPLE_OF_INCREMENT",
        "message": "Minimum must be a multiple of the increment."
      },
      {
        "field": [
          "quantityRules",
          "1",
          "minimum"
        ],
        "code": "MINIMUM_IS_GREATER_THAN_MAXIMUM",
        "message": "Minimum must be lower than or equal to the maximum."
      }
    ],
    "quantityRules": []
  }
}
``` 
*   ### quantityRulesAdd reference

Examples
--------

Add multiple quantity rules to a price list

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20quantityRulesAdd(%24priceListId%3A%20ID!%2C%20%24quantityRules%3A%20%5BQuantityRuleInput!%5D!)%20%7B%0A%20%20quantityRulesAdd(priceListId%3A%20%24priceListId%2C%20quantityRules%3A%20%24quantityRules)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20quantityRules%20%7B%0A%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20maximum%0A%20%20%20%20%20%20increment%0A%20%20%20%20%20%20isDefault%0A%20%20%20%20%20%20originType%0A%20%20%20%20%20%20productVariant%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22priceListId%22%3A%20%22gid%3A%2F%2Fshopify%2FPriceList%2F155157792%22%2C%0A%20%20%22quantityRules%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F138327650%22%2C%0A%20%20%20%20%20%20%22minimum%22%3A%201%2C%0A%20%20%20%20%20%20%22maximum%22%3A%20null%2C%0A%20%20%20%20%20%20%22increment%22%3A%201%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F113711323%22%2C%0A%20%20%20%20%20%20%22minimum%22%3A%205%2C%0A%20%20%20%20%20%20%22maximum%22%3A%2025%2C%0A%20%20%20%20%20%20%22increment%22%3A%205%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {

 quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {

 userErrors {

 field

 code

 message

 }

 quantityRules {

 minimum

 maximum

 increment

 isDefault

 originType

 productVariant {

 id

 }

 }

 }

 }`,

{

variables:{

"priceListId":"gid://shopify/PriceList/155157792",

"quantityRules":[

{

"variantId":"gid://shopify/ProductVariant/138327650",

"minimum":1,

"maximum":null,

"increment":1

},

{

"variantId":"gid://shopify/ProductVariant/113711323",

"minimum":5,

```
mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
  quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
    userErrors {
      field
      code
      message
    }
    quantityRules {
      minimum
      maximum
      increment
      isDefault
      originType
      productVariant {
        id
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
"query": "mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) { quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) { userErrors { field code message } quantityRules { minimum maximum increment isDefault originType productVariant { id } } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/155157792",
    "quantityRules": [
      {
        "variantId": "gid://shopify/ProductVariant/138327650",
        "minimum": 1,
        "maximum": null,
        "increment": 1
      },
      {
        "variantId": "gid://shopify/ProductVariant/113711323",
        "minimum": 5,
        "maximum": 25,
        "increment": 5
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
    quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
      userErrors {
        field
        code
        message
      }
      quantityRules {
        minimum
        maximum
        increment
        isDefault
        originType
        productVariant {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/155157792",
        "quantityRules": [
            {
                "variantId": "gid://shopify/ProductVariant/138327650",
                "minimum": 1,
                "maximum": null,
                "increment": 1
            },
            {
                "variantId": "gid://shopify/ProductVariant/113711323",
                "minimum": 5,
                "maximum": 25,
                "increment": 5
            }
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
    "query": `mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
      quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
        userErrors {
          field
          code
          message
        }
        quantityRules {
          minimum
          maximum
          increment
          isDefault
          originType
          productVariant {
            id
          }
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/155157792",
        "quantityRules": [
            {
                "variantId": "gid://shopify/ProductVariant/138327650",
                "minimum": 1,
                "maximum": null,
                "increment": 1
            },
            {
                "variantId": "gid://shopify/ProductVariant/113711323",
                "minimum": 5,
                "maximum": 25,
                "increment": 5
            }
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
  mutation quantityRulesAdd($priceListId: ID!, $quantityRules: [QuantityRuleInput!]!) {
    quantityRulesAdd(priceListId: $priceListId, quantityRules: $quantityRules) {
      userErrors {
        field
        code
        message
      }
      quantityRules {
        minimum
        maximum
        increment
        isDefault
        originType
        productVariant {
          id
        }
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/155157792",
  "quantityRules": [
    {
      "variantId": "gid://shopify/ProductVariant/138327650",
      "minimum": 1,
      "maximum": null,
      "increment": 1
    },
    {
      "variantId": "gid://shopify/ProductVariant/113711323",
      "minimum": 5,
      "maximum": 25,
      "increment": 5
    }
  ]
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

›

⌄

⌄

⌄

⌄

{

"priceListId": "gid://shopify/PriceList/155157792",

"quantityRules": [

{

"variantId": "gid://shopify/ProductVariant/138327650",

"minimum": 1,

"maximum": null,

"increment": 1

},

{

"variantId": "gid://shopify/ProductVariant/113711323",

"minimum": 5,

"maximum": 25,

"increment": 5

}

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"quantityRulesAdd": {

"userErrors": [],

"quantityRules": [

{

"minimum": 1,

"maximum": null,

"increment": 1,

"isDefault": true,

"originType": "FIXED",

"productVariant": {

"id": "gid://shopify/ProductVariant/138327650"

}

},

{

"minimum": 5,

"maximum": 25,

"increment": 5,

"isDefault": false,

"originType": "FIXED",

"productVariant": {

"id": "gid://shopify/ProductVariant/113711323"

}

}

]

}

}


---
*Content truncated at "Updates" section*