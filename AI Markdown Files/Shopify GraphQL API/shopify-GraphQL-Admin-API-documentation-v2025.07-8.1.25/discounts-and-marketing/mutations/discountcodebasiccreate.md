---
title: "discountCodeBasicCreate"
description: "Shopify GraphQL Admin API documentation for discountcodebasiccreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodeBasicCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate

Markdown Content:
discountCodeBasicCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#main-content)

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

[Anchor to discountCodeBasicCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#top)
discount Code Basic Create
==========================

mutation

Requires Apps must have `write_discounts` access scope.

Creates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

* * *

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicCreate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#arguments)
Arguments
---------

[Anchor to basicCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#arguments-basicCodeDiscount)basic Code Discount

•[Discount Code Basic Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

required

The input data used to create the discount code.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DiscountCodeBasicCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#returns)Discount Code Basic Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to codeDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#returns-codeDiscountNode)code Discount Node

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The discount code that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a discount with a minimum purchase

#### Description

Create an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when customers enter a code. This mutation creates a code that offers a 10% discount on all items to a customer after they spend $50. The discount is limited to one use for each customer.

#### Query

```graphql
mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          startsAt
          endsAt
          customerSelection {
            ... on DiscountCustomers {
              customers {
                id
              }
            }
          }
          customerGets {
            value {
              ... on DiscountPercentage {
                percentage
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
  "basicCodeDiscount": {
    "title": "10% off selected items",
    "code": "10FORYOU",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerSelection": {
      "customers": {
        "add": [
          "gid://shopify/Customer/624407574"
        ]
      }
    },
    "customerGets": {
      "value": {
        "percentage": 0.1
      },
      "items": {
        "all": true
      }
    },
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50.0"
      }
    },
    "usageLimit": 100,
    "appliesOncePerCustomer": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) { discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) { codeDiscountNode { id codeDiscount { ... on DiscountCodeBasic { title startsAt endsAt customerSelection { ... on DiscountCustomers { customers { id } } } customerGets { value { ... on DiscountPercentage { percentage } } } } } } userErrors { field message } } }",
 "variables": {
    "basicCodeDiscount": {
      "title": "10% off selected items",
      "code": "10FORYOU",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerSelection": {
        "customers": {
          "add": [
            "gid://shopify/Customer/624407574"
          ]
        }
      },
      "customerGets": {
        "value": {
          "percentage": 0.1
        },
        "items": {
          "all": true
        }
      },
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50.0"
        }
      },
      "usageLimit": 100,
      "appliesOncePerCustomer": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            startsAt
            endsAt
            customerSelection {
              ... on DiscountCustomers {
                customers {
                  id
                }
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
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
        "basicCodeDiscount": {
            "title": "10% off selected items",
            "code": "10FORYOU",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerSelection": {
                "customers": {
                    "add": [
                        "gid://shopify/Customer/624407574"
                    ]
                }
            },
            "customerGets": {
                "value": {
                    "percentage": 0.1
                },
                "items": {
                    "all": true
                }
            },
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50.0"
                }
            },
            "usageLimit": 100,
            "appliesOncePerCustomer": true
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
  mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            startsAt
            endsAt
            customerSelection {
              ... on DiscountCustomers {
                customers {
                  id
                }
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
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
  "basicCodeDiscount": {
    "title": "10% off selected items",
    "code": "10FORYOU",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerSelection": {
      "customers": {
        "add": [
          "gid://shopify/Customer/624407574"
        ]
      }
    },
    "customerGets": {
      "value": {
        "percentage": 0.1
      },
      "items": {
        "all": true
      }
    },
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50.0"
      }
    },
    "usageLimit": 100,
    "appliesOncePerCustomer": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
      discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              startsAt
              endsAt
              customerSelection {
                ... on DiscountCustomers {
                  customers {
                    id
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountPercentage {
                    percentage
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
        "basicCodeDiscount": {
            "title": "10% off selected items",
            "code": "10FORYOU",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerSelection": {
                "customers": {
                    "add": [
                        "gid://shopify/Customer/624407574"
                    ]
                }
            },
            "customerGets": {
                "value": {
                    "percentage": 0.1
                },
                "items": {
                    "all": true
                }
            },
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50.0"
                }
            },
            "usageLimit": 100,
            "appliesOncePerCustomer": true
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeBasicCreate": {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/1057371591",
      "codeDiscount": {
        "title": "10% off selected items",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "customerSelection": {
          "customers": [
            {
              "id": "gid://shopify/Customer/624407574"
            }
          ]
        },
        "customerGets": {
          "value": {
            "percentage": 0.1
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a limited time discount

#### Description

Create an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when customers enter a code. This mutation creates a code that offers a 20% off discount on all items from June 21st to September 21st. The discount is limited to one use for each customer.

#### Query

```graphql
mutation CreateSummerDiscount($input: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $input) {
    codeDiscountNode {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
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
  "input": {
    "title": "Limited time discount off all items",
    "code": "BUYNOW20",
    "startsAt": "2024-06-21T00:00:00Z",
    "endsAt": "2024-09-21T00:00:00Z",
    "customerSelection": {
      "all": true
    },
    "customerGets": {
      "value": {
        "percentage": 0.2
      },
      "items": {
        "all": true
      }
    },
    "appliesOncePerCustomer": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateSummerDiscount($input: DiscountCodeBasicInput!) { discountCodeBasicCreate(basicCodeDiscount: $input) { codeDiscountNode { id codeDiscount { ... on DiscountCodeBasic { title codes(first: 10) { nodes { code } } startsAt endsAt } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "Limited time discount off all items",
      "code": "BUYNOW20",
      "startsAt": "2024-06-21T00:00:00Z",
      "endsAt": "2024-09-21T00:00:00Z",
      "customerSelection": {
        "all": true
      },
      "customerGets": {
        "value": {
          "percentage": 0.2
        },
        "items": {
          "all": true
        }
      },
      "appliesOncePerCustomer": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateSummerDiscount($input: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $input) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
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
        "input": {
            "title": "Limited time discount off all items",
            "code": "BUYNOW20",
            "startsAt": "2024-06-21T00:00:00Z",
            "endsAt": "2024-09-21T00:00:00Z",
            "customerSelection": {
                "all": true
            },
            "customerGets": {
                "value": {
                    "percentage": 0.2
                },
                "items": {
                    "all": true
                }
            },
            "appliesOncePerCustomer": true
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
  mutation CreateSummerDiscount($input: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $input) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
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
  "input": {
    "title": "Limited time discount off all items",
    "code": "BUYNOW20",
    "startsAt": "2024-06-21T00:00:00Z",
    "endsAt": "2024-09-21T00:00:00Z",
    "customerSelection": {
      "all": true
    },
    "customerGets": {
      "value": {
        "percentage": 0.2
      },
      "items": {
        "all": true
      }
    },
    "appliesOncePerCustomer": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateSummerDiscount($input: DiscountCodeBasicInput!) {
      discountCodeBasicCreate(basicCodeDiscount: $input) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              codes(first: 10) {
                nodes {
                  code
                }
              }
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
        "input": {
            "title": "Limited time discount off all items",
            "code": "BUYNOW20",
            "startsAt": "2024-06-21T00:00:00Z",
            "endsAt": "2024-09-21T00:00:00Z",
            "customerSelection": {
                "all": true
            },
            "customerGets": {
                "value": {
                    "percentage": 0.2
                },
                "items": {
                    "all": true
                }
            },
            "appliesOncePerCustomer": true
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeBasicCreate": {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/1057371606",
      "codeDiscount": {
        "title": "Limited time discount off all items",
        "codes": {
          "nodes": [
            {
              "code": "BUYNOW20"
            }
          ]
        },
        "startsAt": "2024-06-21T00:00:00Z",
        "endsAt": "2024-09-21T00:00:00Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### discountCodeBasicCreate reference

Examples
--------

Create a discount with a minimum purchase

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateDiscountCode(%24basicCodeDiscount%3A%20DiscountCodeBasicInput!)%20%7B%0A%20%20discountCodeBasicCreate(basicCodeDiscount%3A%20%24basicCodeDiscount)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBasic%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%20%20customerSelection%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCustomers%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20customers%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20customerGets%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountPercentage%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20percentage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22basicCodeDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%2210%25%20off%20selected%20items%22%2C%0A%20%20%20%20%22code%22%3A%20%2210FORYOU%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-12-31T23%3A59%3A59Z%22%2C%0A%20%20%20%20%22customerSelection%22%3A%20%7B%0A%20%20%20%20%20%20%22customers%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22add%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22percentage%22%3A%200.1%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22items%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22all%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22minimumRequirement%22%3A%20%7B%0A%20%20%20%20%20%20%22subtotal%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22greaterThanOrEqualToSubtotal%22%3A%20%2250.0%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22usageLimit%22%3A%20100%2C%0A%20%20%20%20%22appliesOncePerCustomer%22%3A%20true%0A%20%20%7D%0A%7D)Copy

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

 mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {

 discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {

 codeDiscountNode {

 id

 codeDiscount {

 ... on DiscountCodeBasic {

 title

 startsAt

 endsAt

 customerSelection {

 ... on DiscountCustomers {

 customers {

 id

 }

 }

 }

 customerGets {

 value {

 ... on DiscountPercentage {

 percentage

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

```
mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      id
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          startsAt
          endsAt
          customerSelection {
            ... on DiscountCustomers {
              customers {
                id
              }
            }
          }
          customerGets {
            value {
              ... on DiscountPercentage {
                percentage
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
"query": "mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) { discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) { codeDiscountNode { id codeDiscount { ... on DiscountCodeBasic { title startsAt endsAt customerSelection { ... on DiscountCustomers { customers { id } } } customerGets { value { ... on DiscountPercentage { percentage } } } } } } userErrors { field message } } }",
 "variables": {
    "basicCodeDiscount": {
      "title": "10% off selected items",
      "code": "10FORYOU",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "customerSelection": {
        "customers": {
          "add": [
            "gid://shopify/Customer/624407574"
          ]
        }
      },
      "customerGets": {
        "value": {
          "percentage": 0.1
        },
        "items": {
          "all": true
        }
      },
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50.0"
        }
      },
      "usageLimit": 100,
      "appliesOncePerCustomer": true
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            startsAt
            endsAt
            customerSelection {
              ... on DiscountCustomers {
                customers {
                  id
                }
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
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
        "basicCodeDiscount": {
            "title": "10% off selected items",
            "code": "10FORYOU",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerSelection": {
                "customers": {
                    "add": [
                        "gid://shopify/Customer/624407574"
                    ]
                }
            },
            "customerGets": {
                "value": {
                    "percentage": 0.1
                },
                "items": {
                    "all": true
                }
            },
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50.0"
                }
            },
            "usageLimit": 100,
            "appliesOncePerCustomer": true
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
    "query": `mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
      discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
          id
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              startsAt
              endsAt
              customerSelection {
                ... on DiscountCustomers {
                  customers {
                    id
                  }
                }
              }
              customerGets {
                value {
                  ... on DiscountPercentage {
                    percentage
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
        "basicCodeDiscount": {
            "title": "10% off selected items",
            "code": "10FORYOU",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "customerSelection": {
                "customers": {
                    "add": [
                        "gid://shopify/Customer/624407574"
                    ]
                }
            },
            "customerGets": {
                "value": {
                    "percentage": 0.1
                },
                "items": {
                    "all": true
                }
            },
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50.0"
                }
            },
            "usageLimit": 100,
            "appliesOncePerCustomer": true
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
  mutation CreateDiscountCode($basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            startsAt
            endsAt
            customerSelection {
              ... on DiscountCustomers {
                customers {
                  id
                }
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
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
  "basicCodeDiscount": {
    "title": "10% off selected items",
    "code": "10FORYOU",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "customerSelection": {
      "customers": {
        "add": [
          "gid://shopify/Customer/624407574"
        ]
      }
    },
    "customerGets": {
      "value": {
        "percentage": 0.1
      },
      "items": {
        "all": true
      }
    },
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50.0"
      }
    },
    "usageLimit": 100,
    "appliesOncePerCustomer": true
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

{

"basicCodeDiscount": {

"title": "10% off selected items",

"code": "10FORYOU",

"startsAt": "2025-01-01T00:00:00Z",

"endsAt": "2025-12-31T23:59:59Z",

"customerSelection": {

"customers": {

"add": [

"gid://shopify/Customer/624407574"

]

}

},

"customerGets": {

"value": {

"percentage": 0.1

},

"items": {

"all": true

}

},

"minimumRequirement": {

"subtotal": {

"greaterThanOrEqualToSubtotal": "50.0"

}

},

"usageLimit": 100,

"appliesOncePerCustomer": true

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

"discountCodeBasicCreate": {

"codeDiscountNode": {

"id": "gid://shopify/DiscountCodeNode/1057371591",

"codeDiscount": {

"title": "10% off selected items",

"startsAt": "2025-01-01T00:00:00Z",

"endsAt": "2025-12-31T23:59:59Z",

"customerSelection": {

"customers": [

{

"id": "gid://shopify/Customer/624407574"

}

]

},

"customerGets": {

"value": {

"percentage": 0.1

}

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*