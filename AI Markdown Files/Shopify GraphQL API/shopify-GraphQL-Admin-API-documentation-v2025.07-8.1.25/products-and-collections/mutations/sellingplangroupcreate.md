---
title: "sellingPlanGroupCreate"
description: "Shopify GraphQL Admin API documentation for sellingplangroupcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: sellingPlanGroupCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate

Markdown Content:
sellingPlanGroupCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#main-content)

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

[Anchor to sellingPlanGroupCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#top)
selling Plan Group Create
=========================

mutation

Requires `write_products` access scope as well as any of `write_own_subscription_contracts`, `write_purchase_options` access scopes. Also: The user must have `manage_orders_information` permissions.

Creates a Selling Plan Group.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#arguments-input)input

•[Selling Plan Group Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupInput)

required

The properties of the new Selling Plan Group.

Show input fields

[Anchor to resources](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#arguments-resources)resources

•[Selling Plan Group Resource Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanGroupResourceInput)

The resources this Selling Plan Group should be applied to.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to SellingPlanGroupCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#returns)Selling Plan Group Create Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to sellingPlanGroup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#returns-sellingPlanGroup)selling Plan Group

•[Selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

The created selling plan group object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate#returns-userErrors)user Errors

•[[Selling Plan Group User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a TBYB selling plan group

#### Query

```graphql
mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
  sellingPlanGroupCreate(input: $input, resources: $resources) {
    sellingPlanGroup {
      id
      sellingPlans(first: 1) {
        edges {
          node {
            id
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
  "input": {
    "name": "TBYB",
    "merchantCode": "tbyb",
    "options": [
      "Try before you buy"
    ],
    "sellingPlansToCreate": [
      {
        "name": "TBYB",
        "options": "Try free for 14 days",
        "category": "TRY_BEFORE_YOU_BUY",
        "billingPolicy": {
          "fixed": {
            "checkoutCharge": {
              "type": "PRICE",
              "value": {
                "fixedValue": 0
              }
            },
            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
            "remainingBalanceChargeTimeAfterCheckout": "P14D"
          }
        },
        "inventoryPolicy": {
          "reserve": "ON_SALE"
        },
        "deliveryPolicy": {
          "fixed": {
            "fulfillmentTrigger": "ASAP"
          }
        }
      }
    ]
  },
  "resources": {
    "productIds": [
      "gid://shopify/Product/121709582"
    ],
    "productVariantIds": []
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) { sellingPlanGroupCreate(input: $input, resources: $resources) { sellingPlanGroup { id sellingPlans(first: 1) { edges { node { id } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "TBYB",
      "merchantCode": "tbyb",
      "options": [
        "Try before you buy"
      ],
      "sellingPlansToCreate": [
        {
          "name": "TBYB",
          "options": "Try free for 14 days",
          "category": "TRY_BEFORE_YOU_BUY",
          "billingPolicy": {
            "fixed": {
              "checkoutCharge": {
                "type": "PRICE",
                "value": {
                  "fixedValue": 0
                }
              },
              "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
              "remainingBalanceChargeTimeAfterCheckout": "P14D"
            }
          },
          "inventoryPolicy": {
            "reserve": "ON_SALE"
          },
          "deliveryPolicy": {
            "fixed": {
              "fulfillmentTrigger": "ASAP"
            }
          }
        }
      ]
    },
    "resources": {
      "productIds": [
        "gid://shopify/Product/121709582"
      ],
      "productVariantIds": []
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
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
        "input": {
            "name": "TBYB",
            "merchantCode": "tbyb",
            "options": [
                "Try before you buy"
            ],
            "sellingPlansToCreate": [
                {
                    "name": "TBYB",
                    "options": "Try free for 14 days",
                    "category": "TRY_BEFORE_YOU_BUY",
                    "billingPolicy": {
                        "fixed": {
                            "checkoutCharge": {
                                "type": "PRICE",
                                "value": {
                                    "fixedValue": 0
                                }
                            },
                            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
                            "remainingBalanceChargeTimeAfterCheckout": "P14D"
                        }
                    },
                    "inventoryPolicy": {
                        "reserve": "ON_SALE"
                    },
                    "deliveryPolicy": {
                        "fixed": {
                            "fulfillmentTrigger": "ASAP"
                        }
                    }
                }
            ]
        },
        "resources": {
            "productIds": [
                "gid://shopify/Product/121709582"
            ],
            "productVariantIds": []
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
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
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
  "input": {
    "name": "TBYB",
    "merchantCode": "tbyb",
    "options": [
      "Try before you buy"
    ],
    "sellingPlansToCreate": [
      {
        "name": "TBYB",
        "options": "Try free for 14 days",
        "category": "TRY_BEFORE_YOU_BUY",
        "billingPolicy": {
          "fixed": {
            "checkoutCharge": {
              "type": "PRICE",
              "value": {
                "fixedValue": 0
              }
            },
            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
            "remainingBalanceChargeTimeAfterCheckout": "P14D"
          }
        },
        "inventoryPolicy": {
          "reserve": "ON_SALE"
        },
        "deliveryPolicy": {
          "fixed": {
            "fulfillmentTrigger": "ASAP"
          }
        }
      }
    ]
  },
  "resources": {
    "productIds": [
      "gid://shopify/Product/121709582"
    ],
    "productVariantIds": []
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
      sellingPlanGroupCreate(input: $input, resources: $resources) {
        sellingPlanGroup {
          id
          sellingPlans(first: 1) {
            edges {
              node {
                id
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
        "input": {
            "name": "TBYB",
            "merchantCode": "tbyb",
            "options": [
                "Try before you buy"
            ],
            "sellingPlansToCreate": [
                {
                    "name": "TBYB",
                    "options": "Try free for 14 days",
                    "category": "TRY_BEFORE_YOU_BUY",
                    "billingPolicy": {
                        "fixed": {
                            "checkoutCharge": {
                                "type": "PRICE",
                                "value": {
                                    "fixedValue": 0
                                }
                            },
                            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
                            "remainingBalanceChargeTimeAfterCheckout": "P14D"
                        }
                    },
                    "inventoryPolicy": {
                        "reserve": "ON_SALE"
                    },
                    "deliveryPolicy": {
                        "fixed": {
                            "fulfillmentTrigger": "ASAP"
                        }
                    }
                }
            ]
        },
        "resources": {
            "productIds": [
                "gid://shopify/Product/121709582"
            ],
            "productVariantIds": []
        }
    },
  },
});
``` #### Response

```json
{
  "sellingPlanGroupCreate": {
    "sellingPlanGroup": {
      "id": "gid://shopify/SellingPlanGroup/1039518935",
      "sellingPlans": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/SellingPlan/1070277430"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a prepaid selling plan group with anchor dates

#### Query

```graphql
mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
  sellingPlanGroupCreate(input: $input, resources: $resources) {
    sellingPlanGroup {
      id
      sellingPlans(first: 1) {
        edges {
          node {
            id
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
  "input": {
    "name": "Delivered every week and billed every three weeks",
    "merchantCode": "prepaid-weekly",
    "options": [
      "1 week"
    ],
    "sellingPlansToCreate": [
      {
        "name": "Delivered every week",
        "options": "1 Week(s)",
        "category": "SUBSCRIPTION",
        "billingPolicy": {
          "recurring": {
            "interval": "WEEK",
            "intervalCount": 3,
            "anchors": [
              {
                "cutoffDay": 2,
                "day": 4,
                "type": "WEEKDAY"
              }
            ]
          }
        },
        "pricingPolicies": [
          {
            "fixed": {
              "adjustmentType": "PERCENTAGE",
              "adjustmentValue": {
                "percentage": 25
              }
            }
          }
        ],
        "deliveryPolicy": {
          "recurring": {
            "interval": "WEEK",
            "intervalCount": 1,
            "anchors": [
              {
                "cutoffDay": 2,
                "day": 4,
                "type": "WEEKDAY"
              }
            ]
          }
        }
      }
    ]
  },
  "resources": {
    "productIds": [
      "gid://shopify/Product/121709582"
    ],
    "productVariantIds": []
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) { sellingPlanGroupCreate(input: $input, resources: $resources) { sellingPlanGroup { id sellingPlans(first: 1) { edges { node { id } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "Delivered every week and billed every three weeks",
      "merchantCode": "prepaid-weekly",
      "options": [
        "1 week"
      ],
      "sellingPlansToCreate": [
        {
          "name": "Delivered every week",
          "options": "1 Week(s)",
          "category": "SUBSCRIPTION",
          "billingPolicy": {
            "recurring": {
              "interval": "WEEK",
              "intervalCount": 3,
              "anchors": [
                {
                  "cutoffDay": 2,
                  "day": 4,
                  "type": "WEEKDAY"
                }
              ]
            }
          },
          "pricingPolicies": [
            {
              "fixed": {
                "adjustmentType": "PERCENTAGE",
                "adjustmentValue": {
                  "percentage": 25
                }
              }
            }
          ],
          "deliveryPolicy": {
            "recurring": {
              "interval": "WEEK",
              "intervalCount": 1,
              "anchors": [
                {
                  "cutoffDay": 2,
                  "day": 4,
                  "type": "WEEKDAY"
                }
              ]
            }
          }
        }
      ]
    },
    "resources": {
      "productIds": [
        "gid://shopify/Product/121709582"
      ],
      "productVariantIds": []
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
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
        "input": {
            "name": "Delivered every week and billed every three weeks",
            "merchantCode": "prepaid-weekly",
            "options": [
                "1 week"
            ],
            "sellingPlansToCreate": [
                {
                    "name": "Delivered every week",
                    "options": "1 Week(s)",
                    "category": "SUBSCRIPTION",
                    "billingPolicy": {
                        "recurring": {
                            "interval": "WEEK",
                            "intervalCount": 3,
                            "anchors": [
                                {
                                    "cutoffDay": 2,
                                    "day": 4,
                                    "type": "WEEKDAY"
                                }
                            ]
                        }
                    },
                    "pricingPolicies": [
                        {
                            "fixed": {
                                "adjustmentType": "PERCENTAGE",
                                "adjustmentValue": {
                                    "percentage": 25
                                }
                            }
                        }
                    ],
                    "deliveryPolicy": {
                        "recurring": {
                            "interval": "WEEK",
                            "intervalCount": 1,
                            "anchors": [
                                {
                                    "cutoffDay": 2,
                                    "day": 4,
                                    "type": "WEEKDAY"
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "resources": {
            "productIds": [
                "gid://shopify/Product/121709582"
            ],
            "productVariantIds": []
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
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
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
  "input": {
    "name": "Delivered every week and billed every three weeks",
    "merchantCode": "prepaid-weekly",
    "options": [
      "1 week"
    ],
    "sellingPlansToCreate": [
      {
        "name": "Delivered every week",
        "options": "1 Week(s)",
        "category": "SUBSCRIPTION",
        "billingPolicy": {
          "recurring": {
            "interval": "WEEK",
            "intervalCount": 3,
            "anchors": [
              {
                "cutoffDay": 2,
                "day": 4,
                "type": "WEEKDAY"
              }
            ]
          }
        },
        "pricingPolicies": [
          {
            "fixed": {
              "adjustmentType": "PERCENTAGE",
              "adjustmentValue": {
                "percentage": 25
              }
            }
          }
        ],
        "deliveryPolicy": {
          "recurring": {
            "interval": "WEEK",
            "intervalCount": 1,
            "anchors": [
              {
                "cutoffDay": 2,
                "day": 4,
                "type": "WEEKDAY"
              }
            ]
          }
        }
      }
    ]
  },
  "resources": {
    "productIds": [
      "gid://shopify/Product/121709582"
    ],
    "productVariantIds": []
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
      sellingPlanGroupCreate(input: $input, resources: $resources) {
        sellingPlanGroup {
          id
          sellingPlans(first: 1) {
            edges {
              node {
                id
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
        "input": {
            "name": "Delivered every week and billed every three weeks",
            "merchantCode": "prepaid-weekly",
            "options": [
                "1 week"
            ],
            "sellingPlansToCreate": [
                {
                    "name": "Delivered every week",
                    "options": "1 Week(s)",
                    "category": "SUBSCRIPTION",
                    "billingPolicy": {
                        "recurring": {
                            "interval": "WEEK",
                            "intervalCount": 3,
                            "anchors": [
                                {
                                    "cutoffDay": 2,
                                    "day": 4,
                                    "type": "WEEKDAY"
                                }
                            ]
                        }
                    },
                    "pricingPolicies": [
                        {
                            "fixed": {
                                "adjustmentType": "PERCENTAGE",
                                "adjustmentValue": {
                                    "percentage": 25
                                }
                            }
                        }
                    ],
                    "deliveryPolicy": {
                        "recurring": {
                            "interval": "WEEK",
                            "intervalCount": 1,
                            "anchors": [
                                {
                                    "cutoffDay": 2,
                                    "day": 4,
                                    "type": "WEEKDAY"
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "resources": {
            "productIds": [
                "gid://shopify/Product/121709582"
            ],
            "productVariantIds": []
        }
    },
  },
});
``` #### Response

```json
{
  "sellingPlanGroupCreate": {
    "sellingPlanGroup": {
      "id": "gid://shopify/SellingPlanGroup/1039518936",
      "sellingPlans": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/SellingPlan/1070277431"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a selling plan group with metafields

#### Query

```graphql
mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
  sellingPlanGroupCreate(input: $input, resources: $resources) {
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
  "input": {
    "name": "Subscribe and save",
    "merchantCode": "subscribe-and-save",
    "appId": "groovy",
    "options": [
      "Delivery every",
      "Delivery interval",
      "Fun every"
    ],
    "position": 1,
    "description": "Subscribe and save group",
    "sellingPlansToCreate": [
      {
        "name": "Pay every month deliver every month",
        "options": [
          "1",
          "month",
          "day"
        ],
        "metafields": [
          {
            "namespace": "for_testing",
            "key": "my_key",
            "value": "selling plan metafield",
            "type": "single_line_text_field"
          }
        ],
        "position": 1,
        "category": "SUBSCRIPTION",
        "billingPolicy": {
          "recurring": {
            "interval": "MONTH",
            "intervalCount": 1,
            "anchors": [
              {
                "type": "MONTHDAY",
                "day": 26
              }
            ]
          }
        },
        "deliveryPolicy": {
          "recurring": {
            "interval": "MONTH",
            "intervalCount": 1,
            "anchors": [
              {
                "type": "MONTHDAY",
                "day": 26
              }
            ],
            "cutoff": 5,
            "intent": "FULFILLMENT_BEGIN",
            "preAnchorBehavior": "ASAP"
          }
        },
        "inventoryPolicy": {
          "reserve": "ON_SALE"
        },
        "pricingPolicies": [
          {
            "fixed": {
              "adjustmentType": "PERCENTAGE",
              "adjustmentValue": {
                "percentage": 25
              }
            }
          },
          {
            "recurring": {
              "afterCycle": 3,
              "adjustmentType": "PERCENTAGE",
              "adjustmentValue": {
                "percentage": 26
              }
            }
          }
        ]
      }
    ]
  },
  "resources": {}
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) { sellingPlanGroupCreate(input: $input, resources: $resources) { sellingPlanGroup { id sellingPlans(first: 1) { edges { node { id metafields(first: 1) { edges { node { id namespace key value } } } } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "Subscribe and save",
      "merchantCode": "subscribe-and-save",
      "appId": "groovy",
      "options": [
        "Delivery every",
        "Delivery interval",
        "Fun every"
      ],
      "position": 1,
      "description": "Subscribe and save group",
      "sellingPlansToCreate": [
        {
          "name": "Pay every month deliver every month",
          "options": [
            "1",
            "month",
            "day"
          ],
          "metafields": [
            {
              "namespace": "for_testing",
              "key": "my_key",
              "value": "selling plan metafield",
              "type": "single_line_text_field"
            }
          ],
          "position": 1,
          "category": "SUBSCRIPTION",
          "billingPolicy": {
            "recurring": {
              "interval": "MONTH",
              "intervalCount": 1,
              "anchors": [
                {
                  "type": "MONTHDAY",
                  "day": 26
                }
              ]
            }
          },
          "deliveryPolicy": {
            "recurring": {
              "interval": "MONTH",
              "intervalCount": 1,
              "anchors": [
                {
                  "type": "MONTHDAY",
                  "day": 26
                }
              ],
              "cutoff": 5,
              "intent": "FULFILLMENT_BEGIN",
              "preAnchorBehavior": "ASAP"
            }
          },
          "inventoryPolicy": {
            "reserve": "ON_SALE"
          },
          "pricingPolicies": [
            {
              "fixed": {
                "adjustmentType": "PERCENTAGE",
                "adjustmentValue": {
                  "percentage": 25
                }
              }
            },
            {
              "recurring": {
                "afterCycle": 3,
                "adjustmentType": "PERCENTAGE",
                "adjustmentValue": {
                  "percentage": 26
                }
              }
            }
          ]
        }
      ]
    },
    "resources": {}
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
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
        "input": {
            "name": "Subscribe and save",
            "merchantCode": "subscribe-and-save",
            "appId": "groovy",
            "options": [
                "Delivery every",
                "Delivery interval",
                "Fun every"
            ],
            "position": 1,
            "description": "Subscribe and save group",
            "sellingPlansToCreate": [
                {
                    "name": "Pay every month deliver every month",
                    "options": [
                        "1",
                        "month",
                        "day"
                    ],
                    "metafields": [
                        {
                            "namespace": "for_testing",
                            "key": "my_key",
                            "value": "selling plan metafield",
                            "type": "single_line_text_field"
                        }
                    ],
                    "position": 1,
                    "category": "SUBSCRIPTION",
                    "billingPolicy": {
                        "recurring": {
                            "interval": "MONTH",
                            "intervalCount": 1,
                            "anchors": [
                                {
                                    "type": "MONTHDAY",
                                    "day": 26
                                }
                            ]
                        }
                    },
                    "deliveryPolicy": {
                        "recurring": {
                            "interval": "MONTH",
                            "intervalCount": 1,
                            "anchors": [
                                {
                                    "type": "MONTHDAY",
                                    "day": 26
                                }
                            ],
                            "cutoff": 5,
                            "intent": "FULFILLMENT_BEGIN",
                            "preAnchorBehavior": "ASAP"
                        }
                    },
                    "inventoryPolicy": {
                        "reserve": "ON_SALE"
                    },
                    "pricingPolicies": [
                        {
                            "fixed": {
                                "adjustmentType": "PERCENTAGE",
                                "adjustmentValue": {
                                    "percentage": 25
                                }
                            }
                        },
                        {
                            "recurring": {
                                "afterCycle": 3,
                                "adjustmentType": "PERCENTAGE",
                                "adjustmentValue": {
                                    "percentage": 26
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "resources": {}
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
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
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
  "input": {
    "name": "Subscribe and save",
    "merchantCode": "subscribe-and-save",
    "appId": "groovy",
    "options": [
      "Delivery every",
      "Delivery interval",
      "Fun every"
    ],
    "position": 1,
    "description": "Subscribe and save group",
    "sellingPlansToCreate": [
      {
        "name": "Pay every month deliver every month",
        "options": [
          "1",
          "month",
          "day"
        ],
        "metafields": [
          {
            "namespace": "for_testing",
            "key": "my_key",
            "value": "selling plan metafield",
            "type": "single_line_text_field"
          }
        ],
        "position": 1,
        "category": "SUBSCRIPTION",
        "billingPolicy": {
          "recurring": {
            "interval": "MONTH",
            "intervalCount": 1,
            "anchors": [
              {
                "type": "MONTHDAY",
                "day": 26
              }
            ]
          }
        },
        "deliveryPolicy": {
          "recurring": {
            "interval": "MONTH",
            "intervalCount": 1,
            "anchors": [
              {
                "type": "MONTHDAY",
                "day": 26
              }
            ],
            "cutoff": 5,
            "intent": "FULFILLMENT_BEGIN",
            "preAnchorBehavior": "ASAP"
          }
        },
        "inventoryPolicy": {
          "reserve": "ON_SALE"
        },
        "pricingPolicies": [
          {
            "fixed": {
              "adjustmentType": "PERCENTAGE",
              "adjustmentValue": {
                "percentage": 25
              }
            }
          },
          {
            "recurring": {
              "afterCycle": 3,
              "adjustmentType": "PERCENTAGE",
              "adjustmentValue": {
                "percentage": 26
              }
            }
          }
        ]
      }
    ]
  },
  "resources": {}
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
      sellingPlanGroupCreate(input: $input, resources: $resources) {
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
        "input": {
            "name": "Subscribe and save",
            "merchantCode": "subscribe-and-save",
            "appId": "groovy",
            "options": [
                "Delivery every",
                "Delivery interval",
                "Fun every"
            ],
            "position": 1,
            "description": "Subscribe and save group",
            "sellingPlansToCreate": [
                {
                    "name": "Pay every month deliver every month",
                    "options": [
                        "1",
                        "month",
                        "day"
                    ],
                    "metafields": [
                        {
                            "namespace": "for_testing",
                            "key": "my_key",
                            "value": "selling plan metafield",
                            "type": "single_line_text_field"
                        }
                    ],
                    "position": 1,
                    "category": "SUBSCRIPTION",
                    "billingPolicy": {
                        "recurring": {
                            "interval": "MONTH",
                            "intervalCount": 1,
                            "anchors": [
                                {
                                    "type": "MONTHDAY",
                                    "day": 26
                                }
                            ]
                        }
                    },
                    "deliveryPolicy": {
                        "recurring": {
                            "interval": "MONTH",
                            "intervalCount": 1,
                            "anchors": [
                                {
                                    "type": "MONTHDAY",
                                    "day": 26
                                }
                            ],
                            "cutoff": 5,
                            "intent": "FULFILLMENT_BEGIN",
                            "preAnchorBehavior": "ASAP"
                        }
                    },
                    "inventoryPolicy": {
                        "reserve": "ON_SALE"
                    },
                    "pricingPolicies": [
                        {
                            "fixed": {
                                "adjustmentType": "PERCENTAGE",
                                "adjustmentValue": {
                                    "percentage": 25
                                }
                            }
                        },
                        {
                            "recurring": {
                                "afterCycle": 3,
                                "adjustmentType": "PERCENTAGE",
                                "adjustmentValue": {
                                    "percentage": 26
                                }
                            }
                        }
                    ]
                }
            ]
        },
        "resources": {}
    },
  },
});
``` #### Response

```json
{
  "sellingPlanGroupCreate": {
    "sellingPlanGroup": {
      "id": "gid://shopify/SellingPlanGroup/1039518934",
      "sellingPlans": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/SellingPlan/1070277429",
              "metafields": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/Metafield/1069228936",
                      "namespace": "for_testing",
                      "key": "my_key",
                      "value": "selling plan metafield"
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
*   ### sellingPlanGroupCreate reference

Examples
--------

Create a TBYB selling plan group

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20createSellingPlanGroup(%24input%3A%20SellingPlanGroupInput!%2C%20%24resources%3A%20SellingPlanGroupResourceInput)%20%7B%0A%20%20sellingPlanGroupCreate(input%3A%20%24input%2C%20resources%3A%20%24resources)%20%7B%0A%20%20%20%20sellingPlanGroup%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20sellingPlans(first%3A%201)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22TBYB%22%2C%0A%20%20%20%20%22merchantCode%22%3A%20%22tbyb%22%2C%0A%20%20%20%20%22options%22%3A%20%5B%0A%20%20%20%20%20%20%22Try%20before%20you%20buy%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22sellingPlansToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22name%22%3A%20%22TBYB%22%2C%0A%20%20%20%20%20%20%20%20%22options%22%3A%20%22Try%20free%20for%2014%20days%22%2C%0A%20%20%20%20%20%20%20%20%22category%22%3A%20%22TRY_BEFORE_YOU_BUY%22%2C%0A%20%20%20%20%20%20%20%20%22billingPolicy%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22fixed%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22checkoutCharge%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22PRICE%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22fixedValue%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22remainingBalanceChargeTrigger%22%3A%20%22TIME_AFTER_CHECKOUT%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22remainingBalanceChargeTimeAfterCheckout%22%3A%20%22P14D%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22inventoryPolicy%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22reserve%22%3A%20%22ON_SALE%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22deliveryPolicy%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22fixed%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22fulfillmentTrigger%22%3A%20%22ASAP%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22resources%22%3A%20%7B%0A%20%20%20%20%22productIds%22%3A%20%5B%0A%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FProduct%2F121709582%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22productVariantIds%22%3A%20%5B%5D%0A%20%20%7D%0A%7D)Copy

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

 mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {

 sellingPlanGroupCreate(input: $input, resources: $resources) {

 sellingPlanGroup {

 id

 sellingPlans(first: 1) {

 edges {

 node {

 id

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

"input":{

"name":"TBYB",

"merchantCode":"tbyb",

"options":[

"Try before you buy"

],

"sellingPlansToCreate":[

{

"name":"TBYB",

"options":"Try free for 14 days",

"category":"TRY_BEFORE_YOU_BUY",

"billingPolicy":{

```
mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
  sellingPlanGroupCreate(input: $input, resources: $resources) {
    sellingPlanGroup {
      id
      sellingPlans(first: 1) {
        edges {
          node {
            id
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
"query": "mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) { sellingPlanGroupCreate(input: $input, resources: $resources) { sellingPlanGroup { id sellingPlans(first: 1) { edges { node { id } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "name": "TBYB",
      "merchantCode": "tbyb",
      "options": [
        "Try before you buy"
      ],
      "sellingPlansToCreate": [
        {
          "name": "TBYB",
          "options": "Try free for 14 days",
          "category": "TRY_BEFORE_YOU_BUY",
          "billingPolicy": {
            "fixed": {
              "checkoutCharge": {
                "type": "PRICE",
                "value": {
                  "fixedValue": 0
                }
              },
              "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
              "remainingBalanceChargeTimeAfterCheckout": "P14D"
            }
          },
          "inventoryPolicy": {
            "reserve": "ON_SALE"
          },
          "deliveryPolicy": {
            "fixed": {
              "fulfillmentTrigger": "ASAP"
            }
          }
        }
      ]
    },
    "resources": {
      "productIds": [
        "gid://shopify/Product/121709582"
      ],
      "productVariantIds": []
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
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
        "input": {
            "name": "TBYB",
            "merchantCode": "tbyb",
            "options": [
                "Try before you buy"
            ],
            "sellingPlansToCreate": [
                {
                    "name": "TBYB",
                    "options": "Try free for 14 days",
                    "category": "TRY_BEFORE_YOU_BUY",
                    "billingPolicy": {
                        "fixed": {
                            "checkoutCharge": {
                                "type": "PRICE",
                                "value": {
                                    "fixedValue": 0
                                }
                            },
                            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
                            "remainingBalanceChargeTimeAfterCheckout": "P14D"
                        }
                    },
                    "inventoryPolicy": {
                        "reserve": "ON_SALE"
                    },
                    "deliveryPolicy": {
                        "fixed": {
                            "fulfillmentTrigger": "ASAP"
                        }
                    }
                }
            ]
        },
        "resources": {
            "productIds": [
                "gid://shopify/Product/121709582"
            ],
            "productVariantIds": []
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
    "query": `mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
      sellingPlanGroupCreate(input: $input, resources: $resources) {
        sellingPlanGroup {
          id
          sellingPlans(first: 1) {
            edges {
              node {
                id
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
        "input": {
            "name": "TBYB",
            "merchantCode": "tbyb",
            "options": [
                "Try before you buy"
            ],
            "sellingPlansToCreate": [
                {
                    "name": "TBYB",
                    "options": "Try free for 14 days",
                    "category": "TRY_BEFORE_YOU_BUY",
                    "billingPolicy": {
                        "fixed": {
                            "checkoutCharge": {
                                "type": "PRICE",
                                "value": {
                                    "fixedValue": 0
                                }
                            },
                            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
                            "remainingBalanceChargeTimeAfterCheckout": "P14D"
                        }
                    },
                    "inventoryPolicy": {
                        "reserve": "ON_SALE"
                    },
                    "deliveryPolicy": {
                        "fixed": {
                            "fulfillmentTrigger": "ASAP"
                        }
                    }
                }
            ]
        },
        "resources": {
            "productIds": [
                "gid://shopify/Product/121709582"
            ],
            "productVariantIds": []
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
  mutation createSellingPlanGroup($input: SellingPlanGroupInput!, $resources: SellingPlanGroupResourceInput) {
    sellingPlanGroupCreate(input: $input, resources: $resources) {
      sellingPlanGroup {
        id
        sellingPlans(first: 1) {
          edges {
            node {
              id
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
  "input": {
    "name": "TBYB",
    "merchantCode": "tbyb",
    "options": [
      "Try before you buy"
    ],
    "sellingPlansToCreate": [
      {
        "name": "TBYB",
        "options": "Try free for 14 days",
        "category": "TRY_BEFORE_YOU_BUY",
        "billingPolicy": {
          "fixed": {
            "checkoutCharge": {
              "type": "PRICE",
              "value": {
                "fixedValue": 0
              }
            },
            "remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",
            "remainingBalanceChargeTimeAfterCheckout": "P14D"
          }
        },
        "inventoryPolicy": {
          "reserve": "ON_SALE"
        },
        "deliveryPolicy": {
          "fixed": {
            "fulfillmentTrigger": "ASAP"
          }
        }
      }
    ]
  },
  "resources": {
    "productIds": [
      "gid://shopify/Product/121709582"
    ],
    "productVariantIds": []
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

{

"input": {

"name": "TBYB",

"merchantCode": "tbyb",

"options": [

"Try before you buy"

],

"sellingPlansToCreate": [

{

"name": "TBYB",

"options": "Try free for 14 days",

"category": "TRY_BEFORE_YOU_BUY",

"billingPolicy": {

"fixed": {

"checkoutCharge": {

"type": "PRICE",

"value": {

"fixedValue": 0

}

},

"remainingBalanceChargeTrigger": "TIME_AFTER_CHECKOUT",

"remainingBalanceChargeTimeAfterCheckout": "P14D"

}

},

"inventoryPolicy": {

"reserve": "ON_SALE"

},

"deliveryPolicy": {

"fixed": {

"fulfillmentTrigger": "ASAP"

}

}

}

]

},

"resources": {

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"sellingPlanGroupCreate": {

"sellingPlanGroup": {

"id": "gid://shopify/SellingPlanGroup/1039518935",

"sellingPlans": {

"edges": [

{

"node": {

"id": "gid://shopify/SellingPlan/1070277430"

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