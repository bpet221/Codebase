---
title: "discountAutomaticAppCreate"
description: "Shopify GraphQL Admin API documentation for discountautomaticappcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountAutomaticAppCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate

Markdown Content:
discountAutomaticAppCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#main-content)

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

[Anchor to discountAutomaticAppCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#top)
discount Automatic App Create
=============================

mutation

Requires `write_discounts` access scope.

Creates an automatic discount that's managed by an app. Use this mutation with [Shopify Functions](https://shopify.dev/docs/apps/build/functions) when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to create an automatic discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

* * *

Note

To create code discounts with custom logic, use the [`discountCodeAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeAppCreate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#arguments)
Arguments
---------

[Anchor to automaticAppDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#arguments-automaticAppDiscount)automatic App Discount

•[Discount Automatic App Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput)

required

The input data used to create the automatic discount.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DiscountAutomaticAppCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#returns)Discount Automatic App Create Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to automaticAppDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#returns-automaticAppDiscount)automatic App Discount

•[Discount Automatic App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp)

The automatic discount that the app manages.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a non-combinable automatic discount that's managed by an app

#### Description

Create an automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). This example shows how to create an automatic discount that takes $5 off the order subtotal and can't be [combined](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) with other discounts.

#### Query

```graphql
mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
  discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
    userErrors {
      field
      message
    }
    automaticAppDiscount {
      discountId
      title
      startsAt
      endsAt
      status
      appDiscountType {
        appKey
        functionId
      }
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
      }
    }
  }
}
``` #### Variables

```json
{
  "automaticAppDiscount": {
    "title": "$5 discount",
    "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
    "startsAt": "2025-02-02T17:09:21Z",
    "endsAt": "2025-02-02T17:09:21Z",
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": false
    },
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
"query": "mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) { discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) { userErrors { field message } automaticAppDiscount { discountId title startsAt endsAt status appDiscountType { appKey functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } } } }",
 "variables": {
    "automaticAppDiscount": {
      "title": "$5 discount",
      "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
      "startsAt": "2025-02-02T17:09:21Z",
      "endsAt": "2025-02-02T17:09:21Z",
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": false
      },
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
  mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
    discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
      userErrors {
        field
        message
      }
      automaticAppDiscount {
        discountId
        title
        startsAt
        endsAt
        status
        appDiscountType {
          appKey
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
      }
    }
  }`,
  {
    variables: {
        "automaticAppDiscount": {
            "title": "$5 discount",
            "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
            "startsAt": "2025-02-02T17:09:21Z",
            "endsAt": "2025-02-02T17:09:21Z",
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": false
            },
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
  mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
    discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
      userErrors {
        field
        message
      }
      automaticAppDiscount {
        discountId
        title
        startsAt
        endsAt
        status
        appDiscountType {
          appKey
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
      }
    }
  }
QUERY

variables = {
  "automaticAppDiscount": {
    "title": "$5 discount",
    "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
    "startsAt": "2025-02-02T17:09:21Z",
    "endsAt": "2025-02-02T17:09:21Z",
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": false
    },
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
    "query": `mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    "variables": {
        "automaticAppDiscount": {
            "title": "$5 discount",
            "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
            "startsAt": "2025-02-02T17:09:21Z",
            "endsAt": "2025-02-02T17:09:21Z",
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": false
            },
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticAppCreate": {
    "userErrors": [],
    "automaticAppDiscount": {
      "discountId": "gid://shopify/DiscountAutomaticNode/1057371215",
      "title": "$5 discount",
      "startsAt": "2025-02-02T17:09:21Z",
      "endsAt": "2025-02-02T17:09:21Z",
      "status": "SCHEDULED",
      "appDiscountType": {
        "appKey": "shopify-web",
        "functionId": "f14c0c43-7660-44bf-9c5e-78c2ad0defe7"
      },
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": false
      }
    }
  }
}
``` 
*   ### Create an automatic product discount that's managed by an app

#### Description

Create an automatic discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). This example shows how to create an automatic discount that takes $10 off a specific product.

#### Query

```graphql
mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
  discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
    userErrors {
      field
      message
    }
    automaticAppDiscount {
      discountId
      title
      startsAt
      endsAt
      status
      appDiscountType {
        appKey
        functionId
      }
    }
  }
}
``` #### Variables

```json
{
  "automaticAppDiscount": {
    "title": "Product discount $10 off",
    "functionId": "0490cd8a-7bba-48f4-8987-0240b0a2ddbe",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 10}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
"query": "mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) { discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) { userErrors { field message } automaticAppDiscount { discountId title startsAt endsAt status appDiscountType { appKey functionId } } } }",
 "variables": {
    "automaticAppDiscount": {
      "title": "Product discount $10 off",
      "functionId": "0490cd8a-7bba-48f4-8987-0240b0a2ddbe",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 10}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
  mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
    discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
      userErrors {
        field
        message
      }
      automaticAppDiscount {
        discountId
        title
        startsAt
        endsAt
        status
        appDiscountType {
          appKey
          functionId
        }
      }
    }
  }`,
  {
    variables: {
        "automaticAppDiscount": {
            "title": "Product discount $10 off",
            "functionId": "0490cd8a-7bba-48f4-8987-0240b0a2ddbe",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 10}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
  mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
    discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
      userErrors {
        field
        message
      }
      automaticAppDiscount {
        discountId
        title
        startsAt
        endsAt
        status
        appDiscountType {
          appKey
          functionId
        }
      }
    }
  }
QUERY

variables = {
  "automaticAppDiscount": {
    "title": "Product discount $10 off",
    "functionId": "0490cd8a-7bba-48f4-8987-0240b0a2ddbe",
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 10}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
    "query": `mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
        }
      }
    }`,
    "variables": {
        "automaticAppDiscount": {
            "title": "Product discount $10 off",
            "functionId": "0490cd8a-7bba-48f4-8987-0240b0a2ddbe",
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 10}},\n    \"targets\": [{\"productVariant\": {\"id\": \"gid://shopify/ProductVariant/12345\"}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticAppCreate": {
    "userErrors": [],
    "automaticAppDiscount": {
      "discountId": "gid://shopify/DiscountAutomaticNode/1057371216",
      "title": "Product discount $10 off",
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "status": "ACTIVE",
      "appDiscountType": {
        "appKey": "shopify-web",
        "functionId": "0490cd8a-7bba-48f4-8987-0240b0a2ddbe"
      }
    }
  }
}
``` 
*   ### discountAutomaticAppCreate reference

Examples
--------

Create a non-combinable automatic discount that's managed by an app

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountAutomaticAppCreate(%24automaticAppDiscount%3A%20DiscountAutomaticAppInput!)%20%7B%0A%20%20discountAutomaticAppCreate(automaticAppDiscount%3A%20%24automaticAppDiscount)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20automaticAppDiscount%20%7B%0A%20%20%20%20%20%20discountId%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20appDiscountType%20%7B%0A%20%20%20%20%20%20%20%20appKey%0A%20%20%20%20%20%20%20%20functionId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20combinesWith%20%7B%0A%20%20%20%20%20%20%20%20orderDiscounts%0A%20%20%20%20%20%20%20%20productDiscounts%0A%20%20%20%20%20%20%20%20shippingDiscounts%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22automaticAppDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22%245%20discount%22%2C%0A%20%20%20%20%22functionId%22%3A%20%22de7a6b74-5ac7-432f-8d5b-98dd14fb8af5%22%2C%0A%20%20%20%20%22startsAt%22%3A%20%222025-02-02T17%3A09%3A21Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222025-02-02T17%3A09%3A21Z%22%2C%0A%20%20%20%20%22combinesWith%22%3A%20%7B%0A%20%20%20%20%20%20%22orderDiscounts%22%3A%20false%2C%0A%20%20%20%20%20%20%22productDiscounts%22%3A%20false%2C%0A%20%20%20%20%20%20%22shippingDiscounts%22%3A%20false%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22default%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22function-configuration%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22json%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22%7B%5Cn%20%20%5C%22discounts%5C%22%3A%20%5B%7B%5Cn%20%20%20%20%5C%22value%5C%22%3A%20%7B%5C%22fixedAmount%5C%22%3A%20%7B%5C%22amount%5C%22%3A%205%7D%7D%2C%5Cn%20%20%20%20%5C%22targets%5C%22%3A%20%5B%7B%5C%22orderSubtotal%5C%22%3A%20%7B%5C%22excludedVariantIds%5C%22%3A%20%5B%5D%7D%7D%5D%5Cn%20%20%7D%5D%2C%5Cn%20%20%5C%22discountApplicationStrategy%5C%22%3A%20%5C%22FIRST%5C%22%5Cn%7D%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {

 discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {

 userErrors {

 field

 message

 }

 automaticAppDiscount {

 discountId

 title

 startsAt

 endsAt

 status

 appDiscountType {

 appKey

 functionId

 }

 combinesWith {

 orderDiscounts

 productDiscounts

 shippingDiscounts

 }

 }

 }

 }`,

{

variables:{

"automaticAppDiscount":{

"title":"$5 discount",

"functionId":"de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",

"startsAt":"2025-02-02T17:09:21Z",

"endsAt":"2025-02-02T17:09:21Z",

"combinesWith":{

```
mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
  discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
    userErrors {
      field
      message
    }
    automaticAppDiscount {
      discountId
      title
      startsAt
      endsAt
      status
      appDiscountType {
        appKey
        functionId
      }
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
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
"query": "mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) { discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) { userErrors { field message } automaticAppDiscount { discountId title startsAt endsAt status appDiscountType { appKey functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } } } }",
 "variables": {
    "automaticAppDiscount": {
      "title": "$5 discount",
      "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
      "startsAt": "2025-02-02T17:09:21Z",
      "endsAt": "2025-02-02T17:09:21Z",
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": false
      },
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
  mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
    discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
      userErrors {
        field
        message
      }
      automaticAppDiscount {
        discountId
        title
        startsAt
        endsAt
        status
        appDiscountType {
          appKey
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
      }
    }
  }`,
  {
    variables: {
        "automaticAppDiscount": {
            "title": "$5 discount",
            "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
            "startsAt": "2025-02-02T17:09:21Z",
            "endsAt": "2025-02-02T17:09:21Z",
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": false
            },
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
    "query": `mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    "variables": {
        "automaticAppDiscount": {
            "title": "$5 discount",
            "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
            "startsAt": "2025-02-02T17:09:21Z",
            "endsAt": "2025-02-02T17:09:21Z",
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": false
            },
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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
  mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
    discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
      userErrors {
        field
        message
      }
      automaticAppDiscount {
        discountId
        title
        startsAt
        endsAt
        status
        appDiscountType {
          appKey
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
      }
    }
  }
QUERY

variables = {
  "automaticAppDiscount": {
    "title": "$5 discount",
    "functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",
    "startsAt": "2025-02-02T17:09:21Z",
    "endsAt": "2025-02-02T17:09:21Z",
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": false
    },
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\n  \"discounts\": [{\n    \"value\": {\"fixedAmount\": {\"amount\": 5}},\n    \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n  }],\n  \"discountApplicationStrategy\": \"FIRST\"\n}"
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

19

20

21

›

⌄

⌄

⌄

⌄

⌄

{

"automaticAppDiscount": {

"title": "$5 discount",

"functionId": "de7a6b74-5ac7-432f-8d5b-98dd14fb8af5",

"startsAt": "2025-02-02T17:09:21Z",

"endsAt": "2025-02-02T17:09:21Z",

"combinesWith": {

"orderDiscounts": false,

"productDiscounts": false,

"shippingDiscounts": false

},

"metafields": [

{

"namespace": "default",

"key": "function-configuration",

"type": "json",

"value": "{\n \"discounts\": [{\n \"value\": {\"fixedAmount\": {\"amount\": 5}},\n \"targets\": [{\"orderSubtotal\": {\"excludedVariantIds\": []}}]\n }],\n \"discountApplicationStrategy\": \"FIRST\"\n}"

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

›

⌄

⌄

⌄

⌄

⌄

{

"discountAutomaticAppCreate": {

"userErrors": [],

"automaticAppDiscount": {

"discountId": "gid://shopify/DiscountAutomaticNode/1057371215",

"title": "$5 discount",

"startsAt": "2025-02-02T17:09:21Z",

"endsAt": "2025-02-02T17:09:21Z",

"status": "SCHEDULED",

"appDiscountType": {

"appKey": "shopify-web",

"functionId": "f14c0c43-7660-44bf-9c5e-78c2ad0defe7"

},

"combinesWith": {

"orderDiscounts": false,

"productDiscounts": false,

"shippingDiscounts": false

}

}

}

}


---
*Content truncated at "Updates" section*