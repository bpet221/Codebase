---
title: "sellingPlanGroupUpdate"
description: "Shopify GraphQL Admin API documentation for sellingplangroupupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: sellingPlanGroupUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate

Markdown Content:
sellingPlanGroupUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#main-content)

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

[Anchor to sellingPlanGroupUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#top)
selling Plan Group Update
=========================

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Update a Selling Plan Group.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The Selling Plan Group to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#arguments-input)input

•[Selling Plan Group Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

required

The properties of the Selling Plan Group to update.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to SellingPlanGroupUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#returns)Selling Plan Group Update Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedSellingPlanIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#returns-deletedSellingPlanIds)deleted Selling Plan Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The IDs of the deleted Subscription Plans.

[Anchor to sellingPlanGroup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#returns-sellingPlanGroup)selling Plan Group

•[Selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

The updated Selling Plan Group.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate#returns-userErrors)user Errors

•[[Selling Plan Group User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a selling plan group and its metafields

#### Query

```graphql
mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
  sellingPlanGroupUpdate(id: $id, input: $input) {
    sellingPlanGroup {
      id
      sellingPlans(first: 1) {
        edges {
          node {
            id
            metafields(first: 1) {
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
        }
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
  "id": "gid://shopify/SellingPlanGroup/964742479",
  "input": {
    "sellingPlansToUpdate": [
      {
        "id": "gid://shopify/SellingPlan/563068713",
        "metafields": [
          {
            "value": "waterproof",
            "type": "single_line_text_field",
            "key": "test_key",
            "namespace": "example-selling-plan"
          }
        ]
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) { sellingPlanGroupUpdate(id: $id, input: $input) { sellingPlanGroup { id sellingPlans(first: 1) { edges { node { id metafields(first: 1) { edges { node { id namespace key value } } } } } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/SellingPlanGroup/964742479",
    "input": {
      "sellingPlansToUpdate": [
        {
          "id": "gid://shopify/SellingPlan/563068713",
          "metafields": [
            {
              "value": "waterproof",
              "type": "single_line_text_field",
              "key": "test_key",
              "namespace": "example-selling-plan"
            }
          ]
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
    sellingPlanGroupUpdate(id: $id, input: $input) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
              metafields(first: 1) {
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
          }
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
        "id": "gid://shopify/SellingPlanGroup/964742479",
        "input": {
            "sellingPlansToUpdate": [
                {
                    "id": "gid://shopify/SellingPlan/563068713",
                    "metafields": [
                        {
                            "value": "waterproof",
                            "type": "single_line_text_field",
                            "key": "test_key",
                            "namespace": "example-selling-plan"
                        }
                    ]
                }
            ]
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
  mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
    sellingPlanGroupUpdate(id: $id, input: $input) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
              metafields(first: 1) {
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
          }
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
  "id": "gid://shopify/SellingPlanGroup/964742479",
  "input": {
    "sellingPlansToUpdate": [
      {
        "id": "gid://shopify/SellingPlan/563068713",
        "metafields": [
          {
            "value": "waterproof",
            "type": "single_line_text_field",
            "key": "test_key",
            "namespace": "example-selling-plan"
          }
        ]
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
      sellingPlanGroupUpdate(id: $id, input: $input) {
        sellingPlanGroup {
          id
          sellingPlans(first: 1) {
            edges {
              node {
                id
                metafields(first: 1) {
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
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/SellingPlanGroup/964742479",
        "input": {
            "sellingPlansToUpdate": [
                {
                    "id": "gid://shopify/SellingPlan/563068713",
                    "metafields": [
                        {
                            "value": "waterproof",
                            "type": "single_line_text_field",
                            "key": "test_key",
                            "namespace": "example-selling-plan"
                        }
                    ]
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "sellingPlanGroupUpdate": {
    "sellingPlanGroup": {
      "id": "gid://shopify/SellingPlanGroup/964742479",
      "sellingPlans": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/SellingPlan/563068713",
              "metafields": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/Metafield/616145134",
                      "namespace": "example-selling-plan",
                      "key": "test_key",
                      "value": "waterproof"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### sellingPlanGroupUpdate reference

Examples
--------

Update a selling plan group and its metafields

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20sellingPlanGroupUpdate(%24id%3A%20ID!%2C%20%24input%3A%20SellingPlanGroupInput!)%20%7B%0A%20%20sellingPlanGroupUpdate(id%3A%20%24id%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20sellingPlanGroup%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20sellingPlans(first%3A%201)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20metafields(first%3A%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FSellingPlanGroup%2F964742479%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22sellingPlansToUpdate%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FSellingPlan%2F563068713%22%2C%0A%20%20%20%20%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22waterproof%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22test_key%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22example-selling-plan%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {

 sellingPlanGroupUpdate(id: $id, input: $input) {

 sellingPlanGroup {

 id

 sellingPlans(first: 1) {

 edges {

 node {

 id

 metafields(first: 1) {

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

 }

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

"id":"gid://shopify/SellingPlanGroup/964742479",

"input":{

```
mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
  sellingPlanGroupUpdate(id: $id, input: $input) {
    sellingPlanGroup {
      id
      sellingPlans(first: 1) {
        edges {
          node {
            id
            metafields(first: 1) {
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
        }
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
"query": "mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) { sellingPlanGroupUpdate(id: $id, input: $input) { sellingPlanGroup { id sellingPlans(first: 1) { edges { node { id metafields(first: 1) { edges { node { id namespace key value } } } } } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/SellingPlanGroup/964742479",
    "input": {
      "sellingPlansToUpdate": [
        {
          "id": "gid://shopify/SellingPlan/563068713",
          "metafields": [
            {
              "value": "waterproof",
              "type": "single_line_text_field",
              "key": "test_key",
              "namespace": "example-selling-plan"
            }
          ]
        }
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
    sellingPlanGroupUpdate(id: $id, input: $input) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
              metafields(first: 1) {
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
          }
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
        "id": "gid://shopify/SellingPlanGroup/964742479",
        "input": {
            "sellingPlansToUpdate": [
                {
                    "id": "gid://shopify/SellingPlan/563068713",
                    "metafields": [
                        {
                            "value": "waterproof",
                            "type": "single_line_text_field",
                            "key": "test_key",
                            "namespace": "example-selling-plan"
                        }
                    ]
                }
            ]
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
    "query": `mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
      sellingPlanGroupUpdate(id: $id, input: $input) {
        sellingPlanGroup {
          id
          sellingPlans(first: 1) {
            edges {
              node {
                id
                metafields(first: 1) {
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
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/SellingPlanGroup/964742479",
        "input": {
            "sellingPlansToUpdate": [
                {
                    "id": "gid://shopify/SellingPlan/563068713",
                    "metafields": [
                        {
                            "value": "waterproof",
                            "type": "single_line_text_field",
                            "key": "test_key",
                            "namespace": "example-selling-plan"
                        }
                    ]
                }
            ]
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
  mutation sellingPlanGroupUpdate($id: ID!, $input: SellingPlanGroupInput!) {
    sellingPlanGroupUpdate(id: $id, input: $input) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
              metafields(first: 1) {
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
          }
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
  "id": "gid://shopify/SellingPlanGroup/964742479",
  "input": {
    "sellingPlansToUpdate": [
      {
        "id": "gid://shopify/SellingPlan/563068713",
        "metafields": [
          {
            "value": "waterproof",
            "type": "single_line_text_field",
            "key": "test_key",
            "namespace": "example-selling-plan"
          }
        ]
      }
    ]
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

16

17

18

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"id": "gid://shopify/SellingPlanGroup/964742479",

"input": {

"sellingPlansToUpdate": [

{

"id": "gid://shopify/SellingPlan/563068713",

"metafields": [

{

"value": "waterproof",

"type": "single_line_text_field",

"key": "test_key",

"namespace": "example-selling-plan"

}

]

}

]

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

"sellingPlanGroupUpdate": {

"sellingPlanGroup": {

"id": "gid://shopify/SellingPlanGroup/964742479",

"sellingPlans": {

"edges": [

{

"node": {

"id": "gid://shopify/SellingPlan/563068713",

"metafields": {

"edges": [

{

"node": {

"id": "gid://shopify/Metafield/616145134",

"namespace": "example-selling-plan",

"key": "test_key",

"value": "waterproof"

}

}

]

}

}

}

]

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*