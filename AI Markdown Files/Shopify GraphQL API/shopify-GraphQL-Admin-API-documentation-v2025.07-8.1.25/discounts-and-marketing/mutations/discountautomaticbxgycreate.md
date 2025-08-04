---
title: "discountAutomaticBxgyCreate"
description: "Shopify GraphQL Admin API documentation for discountautomaticbxgycreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountAutomaticBxgyCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate

Markdown Content:
discountAutomaticBxgyCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#main-content)

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
*   
Discounts and marketing

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

[Anchor to discountAutomaticBxgyCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#top)
discount Automatic Bxgy Create
==============================

mutation

Requires Apps must have `write_discounts` access scope.

Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

* * *

Note

To create code discounts, use the [`discountCodeBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBxgyCreate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#arguments)
Arguments
---------

[Anchor to automaticBxgyDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#arguments-automaticBxgyDiscount)automatic Bxgy Discount

•[Discount Automatic Bxgy Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput)

required

The input data used to create the automatic BXGY discount.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DiscountAutomaticBxgyCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#returns)Discount Automatic Bxgy Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#returns-automaticDiscountNode)automatic Discount Node

•[Discount Automatic Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

The automatic discount that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create an automatic buy X get Y (BXGY) discount for different products

#### Description

Create an automatic [BXGY discount](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free product when they buy a different product. This mutation creates a cross-product promotion where buying one product gets you a different product for free. For example, buy a snowboard and get a free helmet.

#### Query

```graphql
mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          startsAt
          endsAt
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
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
 "variables": {
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
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
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
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
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
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
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticBxgyCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371440",
      "automaticDiscount": {
        "title": "Buy first product, get second product free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create an automatic buy X get Y (BXGY) discount for the same product

#### Description

Create an automatic [BXGY discount](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that gives customers a free duplicate of the product they purchase. This mutation creates a classic "Buy One, Get One Free" discount.

#### Query

```graphql
mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          startsAt
          endsAt
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
  "automaticBxgyDiscount": {
    "title": "Buy one, get one free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "effect": {
            "percentage": 1
          },
          "quantity": "1"
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
 "variables": {
    "automaticBxgyDiscount": {
      "title": "Buy one, get one free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "effect": {
              "percentage": 1
            },
            "quantity": "1"
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
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
        "automaticBxgyDiscount": {
            "title": "Buy one, get one free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "effect": {
                            "percentage": 1
                        },
                        "quantity": "1"
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
  mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
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
  "automaticBxgyDiscount": {
    "title": "Buy one, get one free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "effect": {
            "percentage": 1
          },
          "quantity": "1"
        }
      }
    },
    "usesPerOrderLimit": "1"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateAutomaticBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
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
        "automaticBxgyDiscount": {
            "title": "Buy one, get one free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "effect": {
                            "percentage": 1
                        },
                        "quantity": "1"
                    }
                }
            },
            "usesPerOrderLimit": "1"
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticBxgyCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371443",
      "automaticDiscount": {
        "title": "Buy one, get one free",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### discountAutomaticBxgyCreate reference

Examples
--------

Create an automatic buy X get Y (BXGY) discount for different products

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateBxgyDiscount(%24automaticBxgyDiscount%3A%20DiscountAutomaticBxgyInput!)%20%7B%0A%20%20discountAutomaticBxgyCreate(automaticBxgyDiscount%3A%20%24automaticBxgyDiscount)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticBxgy%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22automaticBxgyDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22Buy%20first%20product%2C%20get%20second%20product%20free%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-12-31T23%3A59%3A59Z%22%2C%0A%20%20%20%20%22customerBuys%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22products%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22productsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%20%221%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22products%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22productsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F20995642%22%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22discountOnQuantity%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22quantity%22%3A%20%221%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22effect%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22percentage%22%3A%201%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22usesPerOrderLimit%22%3A%20%221%22%0A%20%20%7D%0A%7D)Copy

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

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {

 discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {

 automaticDiscountNode {

 id

 automaticDiscount {

 ... on DiscountAutomaticBxgy {

 title

 startsAt

 endsAt

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

"automaticBxgyDiscount":{

"title":"Buy first product, get second product free",

"startsAt":"2025-01-01T00:00:00Z",

"endsAt":"2025-12-31T23:59:59Z",

"customerBuys":{

"items":{

"products":{

"productsToAdd":[

"gid://shopify/Product/108828309"

]

}

},

```
mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
  discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBxgy {
          title
          startsAt
          endsAt
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
"query": "mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) { discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBxgy { title startsAt endsAt } } } userErrors { field message } } }",
 "variables": {
    "automaticBxgyDiscount": {
      "title": "Buy first product, get second product free",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerBuys": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "quantity": "1"
        }
      },
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/20995642"
            ]
          }
        },
        "value": {
          "discountOnQuantity": {
            "quantity": "1",
            "effect": {
              "percentage": 1
            }
          }
        }
      },
      "usesPerOrderLimit": "1"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
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
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
    "query": `mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
      discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              title
              startsAt
              endsAt
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
        "automaticBxgyDiscount": {
            "title": "Buy first product, get second product free",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerBuys": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "quantity": "1"
                }
            },
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/20995642"
                        ]
                    }
                },
                "value": {
                    "discountOnQuantity": {
                        "quantity": "1",
                        "effect": {
                            "percentage": 1
                        }
                    }
                }
            },
            "usesPerOrderLimit": "1"
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
  mutation CreateBxgyDiscount($automaticBxgyDiscount: DiscountAutomaticBxgyInput!) {
    discountAutomaticBxgyCreate(automaticBxgyDiscount: $automaticBxgyDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            title
            startsAt
            endsAt
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
  "automaticBxgyDiscount": {
    "title": "Buy first product, get second product free",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerBuys": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "quantity": "1"
      }
    },
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/20995642"
          ]
        }
      },
      "value": {
        "discountOnQuantity": {
          "quantity": "1",
          "effect": {
            "percentage": 1
          }
        }
      }
    },
    "usesPerOrderLimit": "1"
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

⌄

⌄

⌄

{

"automaticBxgyDiscount": {

"title": "Buy first product, get second product free",

"startsAt": "2025-01-01T00:00:00Z",

"endsAt": "2025-12-31T23:59:59Z",

"customerBuys": {

"items": {

"products": {

"productsToAdd": [

"gid://shopify/Product/108828309"

]

}

},

"value": {

"quantity": "1"

}

},

"customerGets": {

"items": {

"products": {

"productsToAdd": [

"gid://shopify/Product/20995642"

]

}

},

"value": {

"discountOnQuantity": {

"quantity": "1",

"effect": {

"percentage": 1

}

}

}

},

"usesPerOrderLimit": "1"

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

{

"discountAutomaticBxgyCreate": {

"automaticDiscountNode": {

"id": "gid://shopify/DiscountAutomaticNode/1057371440",

"automaticDiscount": {

"title": "Buy first product, get second product free",

"startsAt": "2025-01-01T00:00:00Z",

"endsAt": "2025-12-31T23:59:59Z"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*