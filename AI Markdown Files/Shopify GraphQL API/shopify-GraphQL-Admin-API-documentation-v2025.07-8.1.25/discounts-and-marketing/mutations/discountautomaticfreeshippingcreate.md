---
title: "discountAutomaticFreeShippingCreate"
description: "Shopify GraphQL Admin API documentation for discountautomaticfreeshippingcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountAutomaticFreeShippingCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate

Markdown Content:
discountAutomaticFreeShippingCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#main-content)

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

[Anchor to discountAutomaticFreeShippingCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#top)
discount Automatic Free Shipping Create
=======================================

mutation

Requires Apps must have `write_discounts` access scope.

Creates a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

* * *

Note

To create code discounts, use the [`discountCodeFreeShippingCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingCreate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#arguments)
Arguments
---------

[Anchor to freeShippingAutomaticDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#arguments-freeShippingAutomaticDiscount)free Shipping Automatic Discount

•[Discount Automatic Free Shipping Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

required

The input data used to create the automatic free shipping discount.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DiscountAutomaticFreeShippingCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#returns)Discount Automatic Free Shipping Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#returns-automaticDiscountNode)automatic Discount Node

•[Discount Automatic Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

The automatic free shipping discount that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a free shipping discount for 5+ items

#### Description

Create an automatic [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) discount. This mutation creates a discount that applies free shipping to all destinations on orders with 5 or more items.

#### Query

```graphql
mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticFreeShipping {
          title
          startsAt
          endsAt
          minimumRequirement {
            ... on DiscountMinimumQuantity {
              greaterThanOrEqualToQuantity
            }
          }
          destinationSelection {
            ... on DiscountCountryAll {
              allCountries
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
    "title": "FREESHIP5PLUS",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "minimumRequirement": {
      "quantity": {
        "greaterThanOrEqualToQuantity": "5"
      }
    },
    "destination": {
      "all": true
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
"query": "mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticFreeShipping { title startsAt endsAt minimumRequirement { ... on DiscountMinimumQuantity { greaterThanOrEqualToQuantity } } destinationSelection { ... on DiscountCountryAll { allCountries } } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "FREESHIP5PLUS",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "minimumRequirement": {
        "quantity": {
          "greaterThanOrEqualToQuantity": "5"
        }
      },
      "destination": {
        "all": true
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
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
            "title": "FREESHIP5PLUS",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "minimumRequirement": {
                "quantity": {
                    "greaterThanOrEqualToQuantity": "5"
                }
            },
            "destination": {
                "all": true
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
  mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
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
    "title": "FREESHIP5PLUS",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "minimumRequirement": {
      "quantity": {
        "greaterThanOrEqualToQuantity": "5"
      }
    },
    "destination": {
      "all": true
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
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
            "title": "FREESHIP5PLUS",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "minimumRequirement": {
                "quantity": {
                    "greaterThanOrEqualToQuantity": "5"
                }
            },
            "destination": {
                "all": true
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticFreeShippingCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371256",
      "automaticDiscount": {
        "title": "FREESHIP5PLUS",
        "startsAt": "2025-01-01T00:00:00Z",
        "endsAt": "2025-12-31T23:59:59Z",
        "minimumRequirement": {
          "greaterThanOrEqualToQuantity": "5"
        },
        "destinationSelection": {
          "allCountries": true
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a subtotal-based shipping discount

#### Description

Create an automatic [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) discount. This mutation creates a discount that applies free shipping to North America on orders with a subtotal of $50 or more. The discount can be [combined](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) with order and product discounts. The discount applies to one-time purchases and orders with a maximum shipping price of $200.

#### Query

```graphql
mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
    automaticDiscountNode {
      id
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
  "freeShippingAutomaticDiscount": {
    "title": "FREESHIPPING50",
    "startsAt": "2025-01-11T22:30:47Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "destination": {
      "countries": {
        "add": [
          "CA",
          "US"
        ]
      }
    },
    "appliesOnOneTimePurchase": true,
    "maximumShippingPrice": "200",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50"
      }
    },
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true
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
"query": "mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) { automaticDiscountNode { id } userErrors { field message } } }",
 "variables": {
    "freeShippingAutomaticDiscount": {
      "title": "FREESHIPPING50",
      "startsAt": "2025-01-11T22:30:47Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "destination": {
        "countries": {
          "add": [
            "CA",
            "US"
          ]
        }
      },
      "appliesOnOneTimePurchase": true,
      "maximumShippingPrice": "200",
      "minimumRequirement": {
        "subtotal": {
          "greaterThanOrEqualToSubtotal": "50"
        }
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "freeShippingAutomaticDiscount": {
            "title": "FREESHIPPING50",
            "startsAt": "2025-01-11T22:30:47Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "destination": {
                "countries": {
                    "add": [
                        "CA",
                        "US"
                    ]
                }
            },
            "appliesOnOneTimePurchase": true,
            "maximumShippingPrice": "200",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50"
                }
            },
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true
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
  mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "freeShippingAutomaticDiscount": {
    "title": "FREESHIPPING50",
    "startsAt": "2025-01-11T22:30:47Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "destination": {
      "countries": {
        "add": [
          "CA",
          "US"
        ]
      }
    },
    "appliesOnOneTimePurchase": true,
    "maximumShippingPrice": "200",
    "minimumRequirement": {
      "subtotal": {
        "greaterThanOrEqualToSubtotal": "50"
      }
    },
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "freeShippingAutomaticDiscount": {
            "title": "FREESHIPPING50",
            "startsAt": "2025-01-11T22:30:47Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "destination": {
                "countries": {
                    "add": [
                        "CA",
                        "US"
                    ]
                }
            },
            "appliesOnOneTimePurchase": true,
            "maximumShippingPrice": "200",
            "minimumRequirement": {
                "subtotal": {
                    "greaterThanOrEqualToSubtotal": "50"
                }
            },
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticFreeShippingCreate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371255"
    },
    "userErrors": []
  }
}
``` 
*   ### discountAutomaticFreeShippingCreate reference

Examples
--------

Create a free shipping discount for 5+ items

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateFreeShippingDiscount(%24input%3A%20DiscountAutomaticFreeShippingInput!)%20%7B%0A%20%20discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount%3A%20%24input)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticFreeShipping%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%20%20minimumRequirement%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountMinimumQuantity%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20greaterThanOrEqualToQuantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20destinationSelection%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20DiscountCountryAll%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20allCountries%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22FREESHIP5PLUS%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-01-01T00%3A00%3A00Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-12-31T23%3A59%3A59Z%22%2C%0A%20%20%20%20%22minimumRequirement%22%3A%20%7B%0A%20%20%20%20%20%20%22quantity%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22greaterThanOrEqualToQuantity%22%3A%20%225%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22destination%22%3A%20%7B%0A%20%20%20%20%20%20%22all%22%3A%20true%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {

 discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {

 automaticDiscountNode {

 id

 automaticDiscount {

 ... on DiscountAutomaticFreeShipping {

 title

 startsAt

 endsAt

 minimumRequirement {

 ... on DiscountMinimumQuantity {

 greaterThanOrEqualToQuantity

 }

 }

 destinationSelection {

 ... on DiscountCountryAll {

 allCountries

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

"input":{

"title":"FREESHIP5PLUS",

```
mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticFreeShipping {
          title
          startsAt
          endsAt
          minimumRequirement {
            ... on DiscountMinimumQuantity {
              greaterThanOrEqualToQuantity
            }
          }
          destinationSelection {
            ... on DiscountCountryAll {
              allCountries
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
"query": "mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticFreeShipping { title startsAt endsAt minimumRequirement { ... on DiscountMinimumQuantity { greaterThanOrEqualToQuantity } } destinationSelection { ... on DiscountCountryAll { allCountries } } } } } userErrors { field message } } }",
 "variables": {
    "input": {
      "title": "FREESHIP5PLUS",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "minimumRequirement": {
        "quantity": {
          "greaterThanOrEqualToQuantity": "5"
        }
      },
      "destination": {
        "all": true
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
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
            "title": "FREESHIP5PLUS",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "minimumRequirement": {
                "quantity": {
                    "greaterThanOrEqualToQuantity": "5"
                }
            },
            "destination": {
                "all": true
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
    "query": `mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
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
            "title": "FREESHIP5PLUS",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "minimumRequirement": {
                "quantity": {
                    "greaterThanOrEqualToQuantity": "5"
                }
            },
            "destination": {
                "all": true
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
  mutation CreateFreeShippingDiscount($input: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingCreate(freeShippingAutomaticDiscount: $input) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
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
    "title": "FREESHIP5PLUS",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "minimumRequirement": {
      "quantity": {
        "greaterThanOrEqualToQuantity": "5"
      }
    },
    "destination": {
      "all": true
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

"title": "FREESHIP5PLUS",

"startsAt": "2025-01-01T00:00:00Z",

"endsAt": "2025-12-31T23:59:59Z",

"minimumRequirement": {

"quantity": {

"greaterThanOrEqualToQuantity": "5"

}

},

"destination": {

"all": true

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"discountAutomaticFreeShippingCreate": {

"automaticDiscountNode": {

"id": "gid://shopify/DiscountAutomaticNode/1057371256",

"automaticDiscount": {

"title": "FREESHIP5PLUS",

"startsAt": "2025-01-01T00:00:00Z",

"endsAt": "2025-12-31T23:59:59Z",

"minimumRequirement": {

"greaterThanOrEqualToQuantity": "5"

},

"destinationSelection": {

"allCountries": true

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*