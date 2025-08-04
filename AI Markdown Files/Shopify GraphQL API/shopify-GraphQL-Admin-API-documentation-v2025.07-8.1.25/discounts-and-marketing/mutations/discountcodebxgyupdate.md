---
title: "discountCodeBxgyUpdate"
description: "Shopify GraphQL Admin API documentation for discountcodebxgyupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodeBxgyUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate

Markdown Content:
discountCodeBxgyUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#main-content)

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
*   
Discounts And Marketing

    *   Queries   
    *   
Mutations

        *   [abandonment Email State Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentemailstateupdate)
        *   [abandonment Update Activities Delivery Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentupdateactivitiesdeliverystatuses)
        *   [discount Automatic Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticactivate)
        *   [discount Automatic App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate)
        *   [discount Automatic App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate)
        *   [discount Automatic Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate)
        *   [discount Automatic Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasicupdate)
        *   [discount Automatic Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbulkdelete)
        *   [discount Automatic Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate)
        *   [discount Automatic Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgyupdate)
        *   [discount Automatic Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdeactivate)
        *   [discount Automatic Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdelete)
        *   [discount Automatic Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate)
        *   [discount Automatic Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate)
        *   [discount Code Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeactivate)
        *   [discount Code App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate)
        *   [discount Code App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappupdate)
        *   [discount Code Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate)
        *   [discount Code Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate)
        *   [discount Code Bulk Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkactivate)
        *   [discount Code Bulk Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate)
        *   [discount Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdelete)
        *   [discount Code Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate)
        *   [discount Code Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate)
        *   [discount Code Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate)
        *   [discount Code Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedelete)
        *   [discount Code Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingcreate)
        *   [discount Code Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingupdate)
        *   [discount Code Redeem Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcoderedeemcodebulkdelete)
        *   [discount Redeem Code Bulk Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd)
        *   [event Bridge Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgeserverpixelupdate)
        *   [marketing Activities Delete All External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitiesdeleteallexternal)
        *   [marketing Activity Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate)
        *   [marketing Activity Create External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal)
        *   [marketing Activity Delete External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal)
        *   [marketing Activity Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate)
        *   [marketing Activity Update External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal)
        *   [marketing Activity Upsert External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal)
        *   [marketing Engagement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate)
        *   [marketing Engagements Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete)
        *   [pub Sub Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubserverpixelupdate)
        *   [server Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixelcreate)
        *   [server Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixeldelete)
        *   [web Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate)
        *   [web Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixeldelete)
        *   [web Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelupdate)

    *   Objects   

*   Events   
*   Inventory   
*   Localizations   
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

[Anchor to discountCodeBxgyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#top)
discount Code Bxgy Update
=========================

mutation

Requires Apps must have `write_discounts` access scope.

Updates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

* * *

Note

To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyUpdate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#arguments)
Arguments
---------

[Anchor to bxgyCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#arguments-bxgyCodeDiscount)bxgy Code Discount

•[Discount Code Bxgy Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

required

The input data used to update the BXGY code discount.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the BXGY code discount to update.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountCodeBxgyUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#returns)Discount Code Bxgy Update Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to codeDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#returns-codeDiscountNode)code Discount Node

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The code discount that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update an existing BXGY code discount's expiration date

#### Description

Update the code discount's expiration date

#### Query

```graphql
mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
  discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBxgy {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
          endsAt
        }
      }
    }
    userErrors {
      field
      code
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountCodeNode/732991387",
  "bxgyCodeDiscount": {
    "endsAt": "2022-12-25T00:00:00Z"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) { discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) { codeDiscountNode { codeDiscount { ... on DiscountCodeBxgy { title codes(first: 10) { nodes { code } } endsAt } } } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/732991387",
    "bxgyCodeDiscount": {
      "endsAt": "2022-12-25T00:00:00Z"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            endsAt
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountCodeNode/732991387",
        "bxgyCodeDiscount": {
            "endsAt": "2022-12-25T00:00:00Z"
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
  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            endsAt
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountCodeNode/732991387",
  "bxgyCodeDiscount": {
    "endsAt": "2022-12-25T00:00:00Z"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/732991387",
        "bxgyCodeDiscount": {
            "endsAt": "2022-12-25T00:00:00Z"
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeBxgyUpdate": {
    "codeDiscountNode": {
      "codeDiscount": {
        "title": "simple_bogo",
        "codes": {
          "nodes": [
            {
              "code": "BOGO"
            }
          ]
        },
        "endsAt": "2022-12-25T00:00:00Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update an existing BXGY discount code's product variants, quantities, and percentages

#### Description

Add a new product variant, set the required quantity to two, and set the percentage to 50%

#### Query

```graphql
mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
  discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBxgy {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
          customerBuys {
            value {
              ... on DiscountQuantity {
                quantity
              }
            }
            items {
              ... on DiscountProducts {
                productVariants(first: 5) {
                  nodes {
                    id
                  }
                }
              }
            }
          }
          customerGets {
            value {
              ... on DiscountOnQuantity {
                effect {
                  ... on DiscountPercentage {
                    percentage
                  }
                }
              }
            }
            items {
              ... on DiscountProducts {
                products(first: 5) {
                  nodes {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      code
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountCodeNode/101551934",
  "bxgyCodeDiscount": {
    "customerBuys": {
      "items": {
        "products": {
          "productVariantsToAdd": [
            "gid://shopify/ProductVariant/138327650"
          ]
        }
      },
      "value": {
        "quantity": "2"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/121709582"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "effect": {
            "percentage": 0.5
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
"query": "mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) { discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) { codeDiscountNode { codeDiscount { ... on DiscountCodeBxgy { title codes(first: 10) { nodes { code } } customerBuys { value { ... on DiscountQuantity { quantity } } items { ... on DiscountProducts { productVariants(first: 5) { nodes { id } } } } } customerGets { value { ... on DiscountOnQuantity { effect { ... on DiscountPercentage { percentage } } } } items { ... on DiscountProducts { products(first: 5) { nodes { id } } } } } } } } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/101551934",
    "bxgyCodeDiscount": {
      "customerBuys": {
        "items": {
          "products": {
            "productVariantsToAdd": [
              "gid://shopify/ProductVariant/138327650"
            ]
          }
        },
        "value": {
          "quantity": "2"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/121709582"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 0.5
            }
          }
        }
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            customerBuys {
              value {
                ... on DiscountQuantity {
                  quantity
                }
              }
              items {
                ... on DiscountProducts {
                  productVariants(first: 5) {
                    nodes {
                      id
                    }
                  }
                }
              }
            }
            customerGets {
              value {
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                }
              }
              items {
                ... on DiscountProducts {
                  products(first: 5) {
                    nodes {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountCodeNode/101551934",
        "bxgyCodeDiscount": {
            "customerBuys": {
                "items": {
                    "products": {
                        "productVariantsToAdd": [
                            "gid://shopify/ProductVariant/138327650"
                        ]
                    }
                },
                "value": {
                    "quantity": "2"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/121709582"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "effect": {
                            "percentage": 0.5
                        }
                    }
                }
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
  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            customerBuys {
              value {
                ... on DiscountQuantity {
                  quantity
                }
              }
              items {
                ... on DiscountProducts {
                  productVariants(first: 5) {
                    nodes {
                      id
                    }
                  }
                }
              }
            }
            customerGets {
              value {
                ... on DiscountOnQuantity {
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                }
              }
              items {
                ... on DiscountProducts {
                  products(first: 5) {
                    nodes {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountCodeNode/101551934",
  "bxgyCodeDiscount": {
    "customerBuys": {
      "items": {
        "products": {
          "productVariantsToAdd": [
            "gid://shopify/ProductVariant/138327650"
          ]
        }
      },
      "value": {
        "quantity": "2"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/121709582"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "effect": {
            "percentage": 0.5
          }
        }
      }
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              customerBuys {
                value {
                  ... on DiscountQuantity {
                    quantity
                  }
                }
                items {
                  ... on DiscountProducts {
                    productVariants(first: 5) {
                      nodes {
                        id
                      }
                    }
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountOnQuantity {
                    effect {
                      ... on DiscountPercentage {
                        percentage
                      }
                    }
                  }
                }
                items {
                  ... on DiscountProducts {
                    products(first: 5) {
                      nodes {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/101551934",
        "bxgyCodeDiscount": {
            "customerBuys": {
                "items": {
                    "products": {
                        "productVariantsToAdd": [
                            "gid://shopify/ProductVariant/138327650"
                        ]
                    }
                },
                "value": {
                    "quantity": "2"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/121709582"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "effect": {
                            "percentage": 0.5
                        }
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeBxgyUpdate": {
    "codeDiscountNode": {
      "codeDiscount": {
        "title": "simple_bxgy",
        "codes": {
          "nodes": [
            {
              "code": "BXGY"
            }
          ]
        },
        "customerBuys": {
          "value": {
            "quantity": "2"
          },
          "items": {
            "productVariants": {
              "nodes": [
                {
                  "id": "gid://shopify/ProductVariant/30322695"
                },
                {
                  "id": "gid://shopify/ProductVariant/138327650"
                }
              ]
            }
          }
        },
        "customerGets": {
          "value": {
            "effect": {
              "percentage": 0.5
            }
          },
          "items": {
            "products": {
              "nodes": [
                {
                  "id": "gid://shopify/Product/121709582"
                }
              ]
            }
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### discountCodeBxgyUpdate reference

Examples
--------

Update an existing BXGY code discount's expiration date

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeBxgyUpdate(%24id%3A%20ID!%2C%20%24bxgyCodeDiscount%3A%20DiscountCodeBxgyInput!)%20%7B%0A%20%20discountCodeBxgyUpdate(id%3A%20%24id%2C%20bxgyCodeDiscount%3A%20%24bxgyCodeDiscount)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20codes(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeNode%2F732991387%22%2C%0A%20%20%22bxgyCodeDiscount%22%3A%20%7B%0A%20%20%20%20%22endsAt%22%3A%20%222022-12-25T00%3A00%3A00Z%22%0A%20%20%7D%0A%7D)Copy

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

37

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {

 discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {

 codeDiscountNode {

 codeDiscount {

 ... on DiscountCodeBxgy {

 title

 codes(first: 10) {

 nodes {

 code

 }

 }

 endsAt

 }

 }

 }

 userErrors {

 field

 code

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/DiscountCodeNode/732991387",

"bxgyCodeDiscount":{

"endsAt":"2022-12-25T00:00:00Z"

}

},

},

);

const data=await response.json();

```
mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
  discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBxgy {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
          endsAt
        }
      }
    }
    userErrors {
      field
      code
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
"query": "mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) { discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) { codeDiscountNode { codeDiscount { ... on DiscountCodeBxgy { title codes(first: 10) { nodes { code } } endsAt } } } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/732991387",
    "bxgyCodeDiscount": {
      "endsAt": "2022-12-25T00:00:00Z"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            endsAt
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountCodeNode/732991387",
        "bxgyCodeDiscount": {
            "endsAt": "2022-12-25T00:00:00Z"
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
    "query": `mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
      discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBxgy {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/732991387",
        "bxgyCodeDiscount": {
            "endsAt": "2022-12-25T00:00:00Z"
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
  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {
    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBxgy {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            endsAt
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountCodeNode/732991387",
  "bxgyCodeDiscount": {
    "endsAt": "2022-12-25T00:00:00Z"
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

›

⌄

⌄

{

"id": "gid://shopify/DiscountCodeNode/732991387",

"bxgyCodeDiscount": {

"endsAt": "2022-12-25T00:00:00Z"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"discountCodeBxgyUpdate": {

"codeDiscountNode": {

"codeDiscount": {

"title": "simple_bogo",

"codes": {

"nodes": [

{

"code": "BOGO"

}

]

},

"endsAt": "2022-12-25T00:00:00Z"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*