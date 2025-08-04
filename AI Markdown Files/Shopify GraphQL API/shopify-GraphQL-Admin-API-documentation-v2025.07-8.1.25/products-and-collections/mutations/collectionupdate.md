---
title: "collectionUpdate"
description: "Shopify GraphQL Admin API documentation for collectionupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: collectionUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate

Markdown Content:
collectionUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#main-content)

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

[Anchor to collectionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#top)
collection Update
=================

mutation

Requires `write_products` access scope. Also: The app must have access to the input fields used to update the collection. Further, the store must not be on the Starter or Retail plans and user must have a permission to update collection.

Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

*   Updating collection details, like title, description, or image
*   Modifying SEO metadata for better search visibility
*   Changing which products are included (using rule updates for smart collections)
*   Publishing or unpublishing collections across different sales channels
*   Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

There are two types of collections with different update capabilities:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You can update collection properties, but rule sets can't be modified since products are manually selected.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You can update both collection properties and the rules that automatically determine which products are included. When updating [rule sets](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions) for smart collections, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#arguments-input)input

•[Collection Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

required

The updated properties for the collection.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CollectionUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#returns)Collection Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to collection](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#returns-collection)collection

•[Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

The updated collection.

Show fields

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job updating the products based on the new rule set.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Apply a rule on a manual collection

#### Description

Trying to apply a rule on a manual collection returns an error.

#### Query

```graphql
mutation updateCollectionRules($input: CollectionInput!) {
  collectionUpdate(input: $input) {
    collection {
      id
      title
      description
      handle
      ruleSet {
        rules {
          column
          relation
          condition
        }
        appliedDisjunctively
      }
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Collection/442946009",
    "ruleSet": {
      "rules": [
        {
          "column": "IS_PRICE_REDUCED",
          "relation": "IS_NOT_SET",
          "condition": ""
        }
      ],
      "appliedDisjunctively": true
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
"query": "mutation updateCollectionRules($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle ruleSet { rules { column relation condition } appliedDisjunctively } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Collection/442946009",
      "ruleSet": {
        "rules": [
          {
            "column": "IS_PRICE_REDUCED",
            "relation": "IS_NOT_SET",
            "condition": ""
          }
        ],
        "appliedDisjunctively": true
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Collection/442946009",
            "ruleSet": {
                "rules": [
                    {
                        "column": "IS_PRICE_REDUCED",
                        "relation": "IS_NOT_SET",
                        "condition": ""
                    }
                ],
                "appliedDisjunctively": true
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
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Collection/442946009",
    "ruleSet": {
      "rules": [
        {
          "column": "IS_PRICE_REDUCED",
          "relation": "IS_NOT_SET",
          "condition": ""
        }
      ],
      "appliedDisjunctively": true
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Collection/442946009",
            "ruleSet": {
                "rules": [
                    {
                        "column": "IS_PRICE_REDUCED",
                        "relation": "IS_NOT_SET",
                        "condition": ""
                    }
                ],
                "appliedDisjunctively": true
            }
        }
    },
  },
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": null,
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Cannot update rule set of a custom collection"
      }
    ]
  }
}
``` 
*   ### Create a new metafield and update another on an existing collection

#### Description

Create a new metafield `my_field.subtitle` and update an existing metafield `my_fields.target_audience` on a specific collection. Alternatively, refer to the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on collection resources.

#### Query

```graphql
mutation updateCollectionMetafields($input: CollectionInput!) {
  collectionUpdate(input: $input) {
    collection {
      id
      metafields(first: 3) {
        edges {
          node {
            id
            namespace
            key
            value
          }
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "subtitle",
        "type": "single_line_text_field",
        "value": "Bold Colors"
      },
      {
        "id": "gid://shopify/Metafield/1069229037",
        "value": "New Mothers"
      }
    ],
    "id": "gid://shopify/Collection/79210309"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateCollectionMetafields($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "subtitle",
          "type": "single_line_text_field",
          "value": "Bold Colors"
        },
        {
          "id": "gid://shopify/Metafield/1069229037",
          "value": "New Mothers"
        }
      ],
      "id": "gid://shopify/Collection/79210309"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCollectionMetafields($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "subtitle",
                    "type": "single_line_text_field",
                    "value": "Bold Colors"
                },
                {
                    "id": "gid://shopify/Metafield/1069229037",
                    "value": "New Mothers"
                }
            ],
            "id": "gid://shopify/Collection/79210309"
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
  mutation updateCollectionMetafields($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "subtitle",
        "type": "single_line_text_field",
        "value": "Bold Colors"
      },
      {
        "id": "gid://shopify/Metafield/1069229037",
        "value": "New Mothers"
      }
    ],
    "id": "gid://shopify/Collection/79210309"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateCollectionMetafields($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          metafields(first: 3) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "subtitle",
                    "type": "single_line_text_field",
                    "value": "Bold Colors"
                },
                {
                    "id": "gid://shopify/Metafield/1069229037",
                    "value": "New Mothers"
                }
            ],
            "id": "gid://shopify/Collection/79210309"
        }
    },
  },
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": {
      "id": "gid://shopify/Collection/79210309",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229037",
              "namespace": "my_fields",
              "key": "target_audience",
              "value": "New Mothers"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229038",
              "namespace": "my_field",
              "key": "subtitle",
              "value": "Bold Colors"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Delete the collection's image

#### Query

```graphql
mutation deleteCollectionImage {
  collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
    collection {
      id
      title
      image {
        src
        altText
      }
    }
    userErrors {
      field
      message
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
"query": "mutation deleteCollectionImage { collectionUpdate(input: {id: \"gid://shopify/Collection/142458073\", image: null}) { collection { id title image { src altText } } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation deleteCollectionImage {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
      collection {
        id
        title
        image {
          src
          altText
        }
      }
      userErrors {
        field
        message
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
  mutation deleteCollectionImage {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
      collection {
        id
        title
        image {
          src
          altText
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation deleteCollectionImage {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
      collection {
        id
        title
        image {
          src
          altText
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "All snowboards",
      "image": null
    },
    "userErrors": []
  }
}
``` 
*   ### Update the collection's handle

#### Query

```graphql
mutation updateCollectionHandle {
  collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
    collection {
      id
      title
      description
      handle
    }
    userErrors {
      field
      message
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
"query": "mutation updateCollectionHandle { collectionUpdate(input: {id: \"gid://shopify/Collection/142458073\", handle: \"my-most-popular-collection\"}) { collection { id title description handle } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCollectionHandle {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
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
  mutation updateCollectionHandle {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation updateCollectionHandle {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
      }
    }
  }`,
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "All snowboards",
      "description": "",
      "handle": "my-most-popular-collection"
    },
    "userErrors": []
  }
}
``` 
*   ### Update the collection's rule set

#### Description

If a collection with the specified ID doesn't exist, then the mutation returns an error.

#### Query

```graphql
mutation updateCollectionRules($input: CollectionInput!) {
  collectionUpdate(input: $input) {
    collection {
      id
      title
      description
      handle
      ruleSet {
        rules {
          column
          relation
          condition
        }
        appliedDisjunctively
      }
    }
    job {
      id
      done
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Collection/142458073",
    "ruleSet": {
      "rules": [
        {
          "column": "VARIANT_PRICE",
          "relation": "LESS_THAN",
          "condition": "200"
        },
        {
          "column": "TAG",
          "relation": "EQUALS",
          "condition": "board"
        }
      ],
      "appliedDisjunctively": true
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
"query": "mutation updateCollectionRules($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle ruleSet { rules { column relation condition } appliedDisjunctively } } job { id done } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Collection/142458073",
      "ruleSet": {
        "rules": [
          {
            "column": "VARIANT_PRICE",
            "relation": "LESS_THAN",
            "condition": "200"
          },
          {
            "column": "TAG",
            "relation": "EQUALS",
            "condition": "board"
          }
        ],
        "appliedDisjunctively": true
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      job {
        id
        done
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Collection/142458073",
            "ruleSet": {
                "rules": [
                    {
                        "column": "VARIANT_PRICE",
                        "relation": "LESS_THAN",
                        "condition": "200"
                    },
                    {
                        "column": "TAG",
                        "relation": "EQUALS",
                        "condition": "board"
                    }
                ],
                "appliedDisjunctively": true
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
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      job {
        id
        done
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Collection/142458073",
    "ruleSet": {
      "rules": [
        {
          "column": "VARIANT_PRICE",
          "relation": "LESS_THAN",
          "condition": "200"
        },
        {
          "column": "TAG",
          "relation": "EQUALS",
          "condition": "board"
        }
      ],
      "appliedDisjunctively": true
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
          }
        }
        job {
          id
          done
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Collection/142458073",
            "ruleSet": {
                "rules": [
                    {
                        "column": "VARIANT_PRICE",
                        "relation": "LESS_THAN",
                        "condition": "200"
                    },
                    {
                        "column": "TAG",
                        "relation": "EQUALS",
                        "condition": "board"
                    }
                ],
                "appliedDisjunctively": true
            }
        }
    },
  },
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "All snowboards",
      "description": "",
      "handle": "snowboards",
      "ruleSet": {
        "rules": [
          {
            "column": "VARIANT_PRICE",
            "relation": "LESS_THAN",
            "condition": "200"
          },
          {
            "column": "TAG",
            "relation": "EQUALS",
            "condition": "board"
          }
        ],
        "appliedDisjunctively": true
      }
    },
    "job": {
      "id": "gid://shopify/Job/2f91478b-ff92-41dc-b9dd-04166fdd0420",
      "done": false
    },
    "userErrors": []
  }
}
``` 
*   ### Updates an existing custom collection

#### Query

```graphql
mutation CollectionUpdate($input: CollectionInput!) {
  collectionUpdate(input: $input) {
    collection {
      id
      title
      description
      handle
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Collection/142458073",
    "title": "Updated Collection Title",
    "handle": "updated-collection-handle"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CollectionUpdate($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Collection Title",
      "handle": "updated-collection-handle"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Collection/142458073",
            "title": "Updated Collection Title",
            "handle": "updated-collection-handle"
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
  mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Collection/142458073",
    "title": "Updated Collection Title",
    "handle": "updated-collection-handle"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionUpdate($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Collection/142458073",
            "title": "Updated Collection Title",
            "handle": "updated-collection-handle"
        }
    },
  },
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Collection Title",
      "description": "",
      "handle": "updated-collection-handle"
    },
    "userErrors": []
  }
}
``` 
*   ### Updates an existing smart collection

#### Query

```graphql
mutation CollectionUpdate($input: CollectionInput!) {
  collectionUpdate(input: $input) {
    collection {
      id
      title
      description
      handle
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Collection/142458073",
    "title": "Updated Smart Collection",
    "handle": "updated-smart-collection"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CollectionUpdate($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Smart Collection",
      "handle": "updated-smart-collection"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Collection/142458073",
            "title": "Updated Smart Collection",
            "handle": "updated-smart-collection"
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
  mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Collection/142458073",
    "title": "Updated Smart Collection",
    "handle": "updated-smart-collection"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CollectionUpdate($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Collection/142458073",
            "title": "Updated Smart Collection",
            "handle": "updated-smart-collection"
        }
    },
  },
});
``` #### Response

```json
{
  "collectionUpdate": {
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Smart Collection",
      "description": "",
      "handle": "updated-smart-collection"
    },
    "userErrors": []
  }
}
``` 
*   ### collectionUpdate reference

Examples
--------

Apply a rule on a manual collection

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateCollectionRules(%24input%3A%20CollectionInput!)%20%7B%0A%20%20collectionUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20collection%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20ruleSet%20%7B%0A%20%20%20%20%20%20%20%20rules%20%7B%0A%20%20%20%20%20%20%20%20%20%20column%0A%20%20%20%20%20%20%20%20%20%20relation%0A%20%20%20%20%20%20%20%20%20%20condition%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20appliedDisjunctively%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F442946009%22%2C%0A%20%20%20%20%22ruleSet%22%3A%20%7B%0A%20%20%20%20%20%20%22rules%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22column%22%3A%20%22IS_PRICE_REDUCED%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22relation%22%3A%20%22IS_NOT_SET%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22condition%22%3A%20%22%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22appliedDisjunctively%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation updateCollectionRules($input: CollectionInput!) {

 collectionUpdate(input: $input) {

 collection {

 id

 title

 description

 handle

 ruleSet {

 rules {

 column

 relation

 condition

 }

 appliedDisjunctively

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"id":"gid://shopify/Collection/442946009",

"ruleSet":{

"rules":[

{

"column":"IS_PRICE_REDUCED",

"relation":"IS_NOT_SET",

"condition":""

```
mutation updateCollectionRules($input: CollectionInput!) {
  collectionUpdate(input: $input) {
    collection {
      id
      title
      description
      handle
      ruleSet {
        rules {
          column
          relation
          condition
        }
        appliedDisjunctively
      }
    }
    userErrors {
      field
      message
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
"query": "mutation updateCollectionRules($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle ruleSet { rules { column relation condition } appliedDisjunctively } } userErrors { field message } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Collection/442946009",
      "ruleSet": {
        "rules": [
          {
            "column": "IS_PRICE_REDUCED",
            "relation": "IS_NOT_SET",
            "condition": ""
          }
        ],
        "appliedDisjunctively": true
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Collection/442946009",
            "ruleSet": {
                "rules": [
                    {
                        "column": "IS_PRICE_REDUCED",
                        "relation": "IS_NOT_SET",
                        "condition": ""
                    }
                ],
                "appliedDisjunctively": true
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
    "query": `mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Collection/442946009",
            "ruleSet": {
                "rules": [
                    {
                        "column": "IS_PRICE_REDUCED",
                        "relation": "IS_NOT_SET",
                        "condition": ""
                    }
                ],
                "appliedDisjunctively": true
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
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Collection/442946009",
    "ruleSet": {
      "rules": [
        {
          "column": "IS_PRICE_REDUCED",
          "relation": "IS_NOT_SET",
          "condition": ""
        }
      ],
      "appliedDisjunctively": true
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

›

⌄

⌄

⌄

⌄

⌄

{

"input": {

"id": "gid://shopify/Collection/442946009",

"ruleSet": {

"rules": [

{

"column": "IS_PRICE_REDUCED",

"relation": "IS_NOT_SET",

"condition": ""

}

],

"appliedDisjunctively": true

}

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

12

13

›

⌄

⌄

⌄

⌄

⌄

{

"collectionUpdate": {

"collection": null,

"userErrors": [

{

"field": [

"id"

],

"message": "Cannot update rule set of a custom collection"

}

]

}

}


---
*Content truncated at "Updates" section*