---
title: "discountAutomaticBasicCreate"
description: "Shopify GraphQL Admin API documentation for discountautomaticbasiccreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountAutomaticBasicCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate

Markdown Content:
discountAutomaticBasicCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#main-content)

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

[Anchor to discountAutomaticBasicCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#top)
discount Automatic Basic Create
===============================

mutation

Requires Apps must have `write_discounts` access scope.

Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

* * *

Note

To create code discounts, use the [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#arguments)
Arguments
---------

[Anchor to automaticBasicDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#arguments-automaticBasicDiscount)automatic Basic Discount

•[Discount Automatic Basic Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput)

required

The input data used to create the automatic amount off discount.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DiscountAutomaticBasicCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#returns)Discount Automatic Basic Create Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#returns-automaticDiscountNode)automatic Discount Node

•[Discount Automatic Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

The automatic discount that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a combinable automatic discount

#### Description

Create an [automatic discount](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that offers $10.00 off on orders over $100.00 and can also be [combined](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) with shipping discounts.

#### Query

```graphql
mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
  discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBasic {
          title
          startsAt
          combinesWith {
            productDiscounts
            shippingDiscounts
            orderDiscounts
          }
          minimumRequirement {
            ... on DiscountMinimumSubtotal {
              greaterThanOrEqualToSubtotal {
                amount
                currencyCode
              }
            }
          }
          customerGets {
            value {
              ... on DiscountAmount {
                amount {
                  amount
                  currencyCode
                }
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
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
  "automaticBasicDiscount": {
    "title": "$10 off orders over $100 (combinable with shipping discounts)",
    "startsAt": "2025-01-07T01:28:55-05:00",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "100.00"
      }
    },
    "customerGets": {
      "value": {
        "discountAmount": {
          "amount": "10.00",
          "appliesOnEachItem": false
        }
      },
      "items": {
        "all": true
      }
    },
    "combinesWith": {
      "productDiscounts": false,
      "shippingDiscounts": true,
      "orderDiscounts": false
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
"query": "mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) { discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBasic { title startsAt combinesWith { productDiscounts shippingDiscounts orderDiscounts } minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount currencyCode } } } customerGets { value { ... on DiscountAmount { amount { amount currencyCode } } } items { ... on AllDiscountItems { allItems } } } } } } userErrors { field code message } } }",
 "variables": {
    "automaticBasicDiscount": {
      "title": "$10 off orders over $100 (combinable with shipping discounts)",
      "startsAt": "2025-01-07T01:28:55-05:00",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "100.00"
        }
      },
      "customerGets": {
        "value": {
          "discountAmount": {
            "amount": "10.00",
            "appliesOnEachItem": false
          }
        },
        "items": {
          "all": true
        }
      },
      "combinesWith": {
        "productDiscounts": false,
        "shippingDiscounts": true,
        "orderDiscounts": false
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            startsAt
            combinesWith {
              productDiscounts
              shippingDiscounts
              orderDiscounts
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
        "automaticBasicDiscount": {
            "title": "$10 off orders over $100 (combinable with shipping discounts)",
            "startsAt": "2025-01-07T01:28:55-05:00",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "100.00"
                }
            },
            "customerGets": {
                "value": {
                    "discountAmount": {
                        "amount": "10.00",
                        "appliesOnEachItem": false
                    }
                },
                "items": {
                    "all": true
                }
            },
            "combinesWith": {
                "productDiscounts": false,
                "shippingDiscounts": true,
                "orderDiscounts": false
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
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            startsAt
            combinesWith {
              productDiscounts
              shippingDiscounts
              orderDiscounts
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
  "automaticBasicDiscount": {
    "title": "$10 off orders over $100 (combinable with shipping discounts)",
    "startsAt": "2025-01-07T01:28:55-05:00",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "100.00"
      }
    },
    "customerGets": {
      "value": {
        "discountAmount": {
          "amount": "10.00",
          "appliesOnEachItem": false
        }
      },
      "items": {
        "all": true
      }
    },
    "combinesWith": {
      "productDiscounts": false,
      "shippingDiscounts": true,
      "orderDiscounts": false
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
      discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              startsAt
              combinesWith {
                productDiscounts
                shippingDiscounts
                orderDiscounts
              }
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountAmount {
                    amount {
                      amount
                      currencyCode
                    }
                  }
                }
                items {
                  ... on AllDiscountItems {
                    allItems
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
        "automaticBasicDiscount": {
            "title": "$10 off orders over $100 (combinable with shipping discounts)",
            "startsAt": "2025-01-07T01:28:55-05:00",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "100.00"
                }
            },
            "customerGets": {
                "value": {
                    "discountAmount": {
                        "amount": "10.00",
                        "appliesOnEachItem": false
                    }
                },
                "items": {
                    "all": true
                }
            },
            "combinesWith": {
                "productDiscounts": false,
                "shippingDiscounts": true,
                "orderDiscounts": false
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticBasicCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371276",
      "automaticDiscount": {
        "title": "$10 off orders over $100 (combinable with shipping discounts)",
        "startsAt": "2025-01-07T06:28:55Z",
        "combinesWith": {
          "productDiscounts": false,
          "shippingDiscounts": true,
          "orderDiscounts": false
        },
        "minimumRequirement": {
          "greaterThanOrEqualToSubtotal": {
            "amount": "100.0",
            "currencyCode": "USD"
          }
        },
        "customerGets": {
          "value": {
            "amount": {
              "amount": "10.0",
              "currencyCode": "USD"
            }
          },
          "items": {
            "allItems": true
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a fixed amount off discount

#### Description

Create an [automatic discount](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that offers $50.00 off on all orders over $200.00. The discount applies to all customers on all items from June through September 2025.

#### Query

```graphql
mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
  discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBasic {
          startsAt
          endsAt
          minimumRequirement {
            ... on DiscountMinimumSubtotal {
              greaterThanOrEqualToSubtotal {
                amount
                currencyCode
              }
            }
          }
          customerGets {
            value {
              ... on DiscountAmount {
                amount {
                  amount
                  currencyCode
                }
                appliesOnEachItem
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
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
  "automaticBasicDiscount": {
    "title": "$50 off all orders over $200 (June - September 2025)",
    "startsAt": "2025-06-01T00:00:00Z",
    "endsAt": "2025-09-30T00:00:00Z",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "200.00"
      }
    },
    "customerGets": {
      "value": {
        "discountAmount": {
          "amount": "50.00",
          "appliesOnEachItem": false
        }
      },
      "items": {
        "all": true
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
"query": "mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) { discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBasic { startsAt endsAt minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount currencyCode } } } customerGets { value { ... on DiscountAmount { amount { amount currencyCode } appliesOnEachItem } } items { ... on AllDiscountItems { allItems } } } } } } userErrors { field code message } } }",
 "variables": {
    "automaticBasicDiscount": {
      "title": "$50 off all orders over $200 (June - September 2025)",
      "startsAt": "2025-06-01T00:00:00Z",
      "endsAt": "2025-09-30T00:00:00Z",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "200.00"
        }
      },
      "customerGets": {
        "value": {
          "discountAmount": {
            "amount": "50.00",
            "appliesOnEachItem": false
          }
        },
        "items": {
          "all": true
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
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                  appliesOnEachItem
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
        "automaticBasicDiscount": {
            "title": "$50 off all orders over $200 (June - September 2025)",
            "startsAt": "2025-06-01T00:00:00Z",
            "endsAt": "2025-09-30T00:00:00Z",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "200.00"
                }
            },
            "customerGets": {
                "value": {
                    "discountAmount": {
                        "amount": "50.00",
                        "appliesOnEachItem": false
                    }
                },
                "items": {
                    "all": true
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
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                  appliesOnEachItem
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
  "automaticBasicDiscount": {
    "title": "$50 off all orders over $200 (June - September 2025)",
    "startsAt": "2025-06-01T00:00:00Z",
    "endsAt": "2025-09-30T00:00:00Z",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "200.00"
      }
    },
    "customerGets": {
      "value": {
        "discountAmount": {
          "amount": "50.00",
          "appliesOnEachItem": false
        }
      },
      "items": {
        "all": true
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
    "query": `mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
      discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountAmount {
                    amount {
                      amount
                      currencyCode
                    }
                    appliesOnEachItem
                  }
                }
                items {
                  ... on AllDiscountItems {
                    allItems
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
        "automaticBasicDiscount": {
            "title": "$50 off all orders over $200 (June - September 2025)",
            "startsAt": "2025-06-01T00:00:00Z",
            "endsAt": "2025-09-30T00:00:00Z",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "200.00"
                }
            },
            "customerGets": {
                "value": {
                    "discountAmount": {
                        "amount": "50.00",
                        "appliesOnEachItem": false
                    }
                },
                "items": {
                    "all": true
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticBasicCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371278",
      "automaticDiscount": {
        "startsAt": "2025-06-01T00:00:00Z",
        "endsAt": "2025-09-30T00:00:00Z",
        "minimumRequirement": {
          "greaterThanOrEqualToSubtotal": {
            "amount": "200.0",
            "currencyCode": "USD"
          }
        },
        "customerGets": {
          "value": {
            "amount": {
              "amount": "50.0",
              "currencyCode": "USD"
            },
            "appliesOnEachItem": false
          },
          "items": {
            "allItems": true
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a percentage off discount with a minimum purchase

#### Description

Create an [automatic discount](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that offers 15% off when customers spend $50.00 or more. The discount applies to all items.

#### Query

```graphql
mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
  discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBasic {
          title
          startsAt
          minimumRequirement {
            ... on DiscountMinimumSubtotal {
              greaterThanOrEqualToSubtotal {
                amount
                currencyCode
              }
            }
          }
          customerGets {
            value {
              ... on DiscountPercentage {
                percentage
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
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
  "automaticBasicDiscount": {
    "title": "15% off orders over $50",
    "startsAt": "2024-01-01T00:00:00Z",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50.00"
      }
    },
    "customerGets": {
      "value": {
        "percentage": 0.15
      },
      "items": {
        "all": true
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
"query": "mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) { discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBasic { title startsAt minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount currencyCode } } } customerGets { value { ... on DiscountPercentage { percentage } } items { ... on AllDiscountItems { allItems } } } } } } userErrors { field code message } } }",
 "variables": {
    "automaticBasicDiscount": {
      "title": "15% off orders over $50",
      "startsAt": "2024-01-01T00:00:00Z",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50.00"
        }
      },
      "customerGets": {
        "value": {
          "percentage": 0.15
        },
        "items": {
          "all": true
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
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            startsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
        "automaticBasicDiscount": {
            "title": "15% off orders over $50",
            "startsAt": "2024-01-01T00:00:00Z",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50.00"
                }
            },
            "customerGets": {
                "value": {
                    "percentage": 0.15
                },
                "items": {
                    "all": true
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
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            startsAt
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
  "automaticBasicDiscount": {
    "title": "15% off orders over $50",
    "startsAt": "2024-01-01T00:00:00Z",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50.00"
      }
    },
    "customerGets": {
      "value": {
        "percentage": 0.15
      },
      "items": {
        "all": true
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
    "query": `mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
      discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              startsAt
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountPercentage {
                    percentage
                  }
                }
                items {
                  ... on AllDiscountItems {
                    allItems
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
        "automaticBasicDiscount": {
            "title": "15% off orders over $50",
            "startsAt": "2024-01-01T00:00:00Z",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50.00"
                }
            },
            "customerGets": {
                "value": {
                    "percentage": 0.15
                },
                "items": {
                    "all": true
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticBasicCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371277",
      "automaticDiscount": {
        "title": "15% off orders over $50",
        "startsAt": "2024-01-01T00:00:00Z",
        "minimumRequirement": {
          "greaterThanOrEqualToSubtotal": {
            "amount": "50.0",
            "currencyCode": "USD"
          }
        },
        "customerGets": {
          "value": {
            "percentage": 0.15
          },
          "items": {
            "allItems": true
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### discountAutomaticBasicCreate reference

Examples
--------

Create a combinable automatic discount

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountAutomaticBasicCreate(%24automaticBasicDiscount%3A%20DiscountAutomaticBasicInput!)%20%7B%0A%20%20discountAutomaticBasicCreate(automaticBasicDiscount%3A%20%24automaticBasicDiscount)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticBasic%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20combinesWith%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20productDiscounts%0A%20%20%20%20%20%20%20%20%20%20%20%20shippingDiscounts%0A%20%20%20%20%20%20%20%20%20%20%20%20orderDiscounts%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20minimumRequirement%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountMinimumSubtotal%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20greaterThanOrEqualToSubtotal%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20customerGets%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountAmount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20AllDiscountItems%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allItems%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22automaticBasicDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22%2410%20off%20orders%20over%20%24100%20(combinable%20with%20shipping%20discounts)%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-07T01%3A28%3A55-05%3A00%22%2C%0A%20%20%20%20%22minimumRequirement%22%3A%20%7B%0A%20%20%20%20%20%20%22subtotal%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22greaterThanOrEqualToSubtotal%22%3A%20%22100.00%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22discountAmount%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%20%2210.00%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22appliesOnEachItem%22%3A%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22all%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22combinesWith%22%3A%20%7B%0A%20%20%20%20%20%20%22productDiscounts%22%3A%20false%2C%0A%20%20%20%20%20%20%22shippingDiscounts%22%3A%20true%2C%0A%20%20%20%20%20%20%22orderDiscounts%22%3A%20false%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {

 discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {

 automaticDiscountNode {

 id

 automaticDiscount {

 ... on DiscountAutomaticBasic {

 title

 startsAt

 combinesWith {

 productDiscounts

 shippingDiscounts

 orderDiscounts

 }

 minimumRequirement {

 ... on DiscountMinimumSubtotal {

 greaterThanOrEqualToSubtotal {

 amount

 currencyCode

 }

 }

 }

 customerGets {

 value {

 ... on DiscountAmount {

 amount {

 amount

 currencyCode

 }

 }

 }

 items {

 ... on AllDiscountItems {

```
mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
  discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticBasic {
          title
          startsAt
          combinesWith {
            productDiscounts
            shippingDiscounts
            orderDiscounts
          }
          minimumRequirement {
            ... on DiscountMinimumSubtotal {
              greaterThanOrEqualToSubtotal {
                amount
                currencyCode
              }
            }
          }
          customerGets {
            value {
              ... on DiscountAmount {
                amount {
                  amount
                  currencyCode
                }
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) { discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticBasic { title startsAt combinesWith { productDiscounts shippingDiscounts orderDiscounts } minimumRequirement { ... on DiscountMinimumSubtotal { greaterThanOrEqualToSubtotal { amount currencyCode } } } customerGets { value { ... on DiscountAmount { amount { amount currencyCode } } } items { ... on AllDiscountItems { allItems } } } } } } userErrors { field code message } } }",
 "variables": {
    "automaticBasicDiscount": {
      "title": "$10 off orders over $100 (combinable with shipping discounts)",
      "startsAt": "2025-01-07T01:28:55-05:00",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "100.00"
        }
      },
      "customerGets": {
        "value": {
          "discountAmount": {
            "amount": "10.00",
            "appliesOnEachItem": false
          }
        },
        "items": {
          "all": true
        }
      },
      "combinesWith": {
        "productDiscounts": false,
        "shippingDiscounts": true,
        "orderDiscounts": false
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            startsAt
            combinesWith {
              productDiscounts
              shippingDiscounts
              orderDiscounts
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
        "automaticBasicDiscount": {
            "title": "$10 off orders over $100 (combinable with shipping discounts)",
            "startsAt": "2025-01-07T01:28:55-05:00",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "100.00"
                }
            },
            "customerGets": {
                "value": {
                    "discountAmount": {
                        "amount": "10.00",
                        "appliesOnEachItem": false
                    }
                },
                "items": {
                    "all": true
                }
            },
            "combinesWith": {
                "productDiscounts": false,
                "shippingDiscounts": true,
                "orderDiscounts": false
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
    "query": `mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
      discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticBasic {
              title
              startsAt
              combinesWith {
                productDiscounts
                shippingDiscounts
                orderDiscounts
              }
              minimumRequirement {
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                    currencyCode
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountAmount {
                    amount {
                      amount
                      currencyCode
                    }
                  }
                }
                items {
                  ... on AllDiscountItems {
                    allItems
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
        "automaticBasicDiscount": {
            "title": "$10 off orders over $100 (combinable with shipping discounts)",
            "startsAt": "2025-01-07T01:28:55-05:00",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "100.00"
                }
            },
            "customerGets": {
                "value": {
                    "discountAmount": {
                        "amount": "10.00",
                        "appliesOnEachItem": false
                    }
                },
                "items": {
                    "all": true
                }
            },
            "combinesWith": {
                "productDiscounts": false,
                "shippingDiscounts": true,
                "orderDiscounts": false
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
  mutation discountAutomaticBasicCreate($automaticBasicDiscount: DiscountAutomaticBasicInput!) {
    discountAutomaticBasicCreate(automaticBasicDiscount: $automaticBasicDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBasic {
            title
            startsAt
            combinesWith {
              productDiscounts
              shippingDiscounts
              orderDiscounts
            }
            minimumRequirement {
              ... on DiscountMinimumSubtotal {
                greaterThanOrEqualToSubtotal {
                  amount
                  currencyCode
                }
              }
            }
            customerGets {
              value {
                ... on DiscountAmount {
                  amount {
                    amount
                    currencyCode
                  }
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
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
  "automaticBasicDiscount": {
    "title": "$10 off orders over $100 (combinable with shipping discounts)",
    "startsAt": "2025-01-07T01:28:55-05:00",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "100.00"
      }
    },
    "customerGets": {
      "value": {
        "discountAmount": {
          "amount": "10.00",
          "appliesOnEachItem": false
        }
      },
      "items": {
        "all": true
      }
    },
    "combinesWith": {
      "productDiscounts": false,
      "shippingDiscounts": true,
      "orderDiscounts": false
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

⌄

⌄

{

"automaticBasicDiscount": {

"title": "$10 off orders over $100 (combinable with shipping discounts)",

"startsAt": "2025-01-07T01:28:55-05:00",

"minimumRequirement": {

"subtotal": {

"greaterThanOrEqualToSubtotal": "100.00"

}

},

"customerGets": {

"value": {

"discountAmount": {

"amount": "10.00",

"appliesOnEachItem": false

}

},

"items": {

"all": true

}

},

"combinesWith": {

"productDiscounts": false,

"shippingDiscounts": true,

"orderDiscounts": false

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

"discountAutomaticBasicCreate": {

"automaticDiscountNode": {

"id": "gid://shopify/DiscountAutomaticNode/1057371276",

"automaticDiscount": {

"title": "$10 off orders over $100 (combinable with shipping discounts)",

"startsAt": "2025-01-07T06:28:55Z",

"combinesWith": {

"productDiscounts": false,

"shippingDiscounts": true,

"orderDiscounts": false

},

"minimumRequirement": {

"greaterThanOrEqualToSubtotal": {

"amount": "100.0",

"currencyCode": "USD"

}

},

"customerGets": {

"value": {

"amount": {

"amount": "10.0",

"currencyCode": "USD"

}

},

"items": {

"allItems": true

}

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*