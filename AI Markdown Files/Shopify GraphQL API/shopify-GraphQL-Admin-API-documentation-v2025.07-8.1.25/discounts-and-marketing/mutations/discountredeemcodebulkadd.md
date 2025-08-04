---
title: "discountRedeemCodeBulkAdd"
description: "Shopify GraphQL Admin API documentation for discountredeemcodebulkadd"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountRedeemCodeBulkAdd - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd

Markdown Content:
discountRedeemCodeBulkAdd - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#main-content)

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

[Anchor to discountRedeemCodeBulkAdd](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#top)
discount Redeem Code Bulk Add
=============================

mutation

Requires Apps must have `write_discounts` access scope.

Asynchronously add [discount codes](https://help.shopify.com/manual/discounts/discount-types#discount-codes) in bulk that customers can use to redeem a discount. You can use the `discountRedeemCodeBulkAdd` mutation to automate the distribution of discount codes through emails or other marketing channels.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#arguments)
Arguments
---------

[Anchor to codes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#arguments-codes)codes

•[[Discount Redeem Code Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountRedeemCodeInput)

required

The list of codes to associate with the [code discount](https://help.shopify.com/manual/discounts/discount-types#discount-codes). Maximum: 250 codes.

Show input fields

[Anchor to discountId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#arguments-discountId)discount Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the [`DiscountCodeNode`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-id) object that the codes will be added to. For example, `gid://shopify/DiscountCodeNode/123`. You can use the [`codeDiscountNodes` query](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes) to retrieve the ID.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountRedeemCodeBulkAddPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#returns)Discount Redeem Code Bulk Add Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to bulkCreation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#returns-bulkCreation)bulk Creation

•[Discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation)

The ID of bulk operation that creates multiple unique discount codes. You can use the [`discountRedeemCodeBulkCreation` query](https://shopify.dev/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation) to track the status of the bulk operation.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Asynchronously add redeem codes to a code discount

#### Description

Asynchronously add 3 redeem codes to a code discount

#### Query

```graphql
mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
  discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
    bulkCreation {
      id
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
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
"query": "mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) { discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) { bulkCreation { id } userErrors { code field message } } }",
 "variables": {
    "discountId": "gid://shopify/DiscountCodeNode/2429471",
    "codes": [
      {
        "code": "DISCOUNT_1"
      },
      {
        "code": "DISCOUNT_2"
      },
      {
        "code": "DISCOUNT_3"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
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
  mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
      discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
        bulkCreation {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "discountRedeemCodeBulkAdd": {
    "bulkCreation": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355207"
    },
    "userErrors": []
  }
}
``` 
*   ### Creates a discount code

#### Query

```graphql
mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
  discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
    bulkCreation {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
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
"query": "mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) { discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) { bulkCreation { id createdAt discountCode { id } done codesCount importedCount failedCount } userErrors { code field message } } }",
 "variables": {
    "discountId": "gid://shopify/DiscountCodeNode/2429471",
    "codes": [
      {
        "code": "DISCOUNT_1"
      },
      {
        "code": "DISCOUNT_2"
      },
      {
        "code": "DISCOUNT_3"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
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
  mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
      discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
        bulkCreation {
          id
          createdAt
          discountCode {
            id
          }
          done
          codesCount
          importedCount
          failedCount
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "discountRedeemCodeBulkAdd": {
    "bulkCreation": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355210",
      "createdAt": "2024-11-06T21:59:51Z",
      "discountCode": {
        "id": "gid://shopify/DiscountCodeNode/2429471"
      },
      "done": false,
      "codesCount": 3,
      "importedCount": 0,
      "failedCount": 0
    },
    "userErrors": []
  }
}
``` 
*   ### Creates a discount code creation job

#### Query

```graphql
mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
  discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
    bulkCreation {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
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
"query": "mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) { discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) { bulkCreation { id createdAt discountCode { id } done codesCount importedCount failedCount } userErrors { code field message } } }",
 "variables": {
    "discountId": "gid://shopify/DiscountCodeNode/2429471",
    "codes": [
      {
        "code": "DISCOUNT_1"
      },
      {
        "code": "DISCOUNT_2"
      },
      {
        "code": "DISCOUNT_3"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
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
  mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DiscountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
      discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
        bulkCreation {
          id
          createdAt
          discountCode {
            id
          }
          done
          codesCount
          importedCount
          failedCount
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "discountRedeemCodeBulkAdd": {
    "bulkCreation": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355209",
      "createdAt": "2024-11-06T21:59:51Z",
      "discountCode": {
        "id": "gid://shopify/DiscountCodeNode/2429471"
      },
      "done": false,
      "codesCount": 3,
      "importedCount": 0,
      "failedCount": 0
    },
    "userErrors": []
  }
}
``` 
*   ### discountRedeemCodeBulkAdd reference

Examples
--------

Asynchronously add redeem codes to a code discount

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountRedeemCodeBulkAdd(%24discountId%3A%20ID!%2C%20%24codes%3A%20%5BDiscountRedeemCodeInput!%5D!)%20%7B%0A%20%20discountRedeemCodeBulkAdd(discountId%3A%20%24discountId%2C%20codes%3A%20%24codes)%20%7B%0A%20%20%20%20bulkCreation%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22discountId%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeNode%2F2429471%22%2C%0A%20%20%22codes%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22code%22%3A%20%22DISCOUNT_1%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22code%22%3A%20%22DISCOUNT_2%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22code%22%3A%20%22DISCOUNT_3%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

 mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {

 discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {

 bulkCreation {

 id

 }

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"discountId":"gid://shopify/DiscountCodeNode/2429471",

"codes":[

{

"code":"DISCOUNT_1"

},

{

"code":"DISCOUNT_2"

},

{

"code":"DISCOUNT_3"

}

]

},

},

);

const data=await response.json();

```
mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
  discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
    bulkCreation {
      id
    }
    userErrors {
      code
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
"query": "mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) { discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) { bulkCreation { id } userErrors { code field message } } }",
 "variables": {
    "discountId": "gid://shopify/DiscountCodeNode/2429471",
    "codes": [
      {
        "code": "DISCOUNT_1"
      },
      {
        "code": "DISCOUNT_2"
      },
      {
        "code": "DISCOUNT_3"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
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
    "query": `mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
      discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
        bulkCreation {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "discountId": "gid://shopify/DiscountCodeNode/2429471",
        "codes": [
            {
                "code": "DISCOUNT_1"
            },
            {
                "code": "DISCOUNT_2"
            },
            {
                "code": "DISCOUNT_3"
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
  mutation discountRedeemCodeBulkAdd($discountId: ID!, $codes: [DiscountRedeemCodeInput!]!) {
    discountRedeemCodeBulkAdd(discountId: $discountId, codes: $codes) {
      bulkCreation {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "discountId": "gid://shopify/DiscountCodeNode/2429471",
  "codes": [
    {
      "code": "DISCOUNT_1"
    },
    {
      "code": "DISCOUNT_2"
    },
    {
      "code": "DISCOUNT_3"
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

›

⌄

⌄

⌄

⌄

⌄

{

"discountId": "gid://shopify/DiscountCodeNode/2429471",

"codes": [

{

"code": "DISCOUNT_1"

},

{

"code": "DISCOUNT_2"

},

{

"code": "DISCOUNT_3"

}

]

}

Hide content

Response
--------

JSON

9

1

2

3

4

5

6

7

8

›

⌄

⌄

⌄

{

"discountRedeemCodeBulkAdd": {

"bulkCreation": {

"id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355207"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*