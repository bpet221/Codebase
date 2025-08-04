---
title: "discountCodeAppCreate"
description: "Shopify GraphQL Admin API documentation for discountcodeappcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodeAppCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate

Markdown Content:
discountCodeAppCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#main-content)

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

[Anchor to discountCodeAppCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#top)
discount Code App Create
========================

mutation

Requires `write_discounts` access scope.

Creates a code discount. The discount type must be provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Functions can implement [order](https://shopify.dev/docs/api/functions/reference/order-discounts), [product](https://shopify.dev/docs/api/functions/reference/product-discounts), or [shipping](https://shopify.dev/docs/api/functions/reference/shipping-discounts) discount functions. Use this mutation with Shopify Functions when you need custom logic beyond [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

For example, use this mutation to create a code discount using an app's "Volume" discount type that applies a percentage off when customers purchase more than the minimum quantity of a product. For an example implementation, refer to [our tutorial](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

* * *

Note

To create automatic discounts with custom logic, use [`discountAutomaticAppCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticAppCreate).

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#arguments)
Arguments
---------

[Anchor to codeAppDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#arguments-codeAppDiscount)code App Discount

•[Discount Code App Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput)

required

The input data used to create the discount.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DiscountCodeAppCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#returns)Discount Code App Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to codeAppDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#returns-codeAppDiscount)code App Discount

•[Discount Code App](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp)

The discount that the app provides.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a combinable code discount that's managed by an app

#### Description

Create a code discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). This example shows how to create a [combinable](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) code discount that takes $5 off the order subtotal.

#### Query

```graphql
mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
  discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
    codeAppDiscount {
      discountId
      title
      appDiscountType {
        description
        functionId
      }
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
      }
      codes(first: 100) {
        nodes {
          code
        }
      }
      status
      usageLimit
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
  "codeAppDiscount": {
    "code": "APP_DISCOUNT",
    "title": "Take 5$ from order discount",
    "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
    "appliesOncePerCustomer": true,
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true,
      "shippingDiscounts": true
    },
    "startsAt": "2021-02-02T17:09:21Z",
    "endsAt": "2022-02-02T17:09:21Z",
    "usageLimit": 1,
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
"query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title appDiscountType { description functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } codes(first: 100) { nodes { code } } status usageLimit } userErrors { field message } } }",
 "variables": {
    "codeAppDiscount": {
      "code": "APP_DISCOUNT",
      "title": "Take 5$ from order discount",
      "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
      "appliesOncePerCustomer": true,
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true,
        "shippingDiscounts": true
      },
      "startsAt": "2021-02-02T17:09:21Z",
      "endsAt": "2022-02-02T17:09:21Z",
      "usageLimit": 1,
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 100) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "codeAppDiscount": {
            "code": "APP_DISCOUNT",
            "title": "Take 5$ from order discount",
            "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
            "appliesOncePerCustomer": true,
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true,
                "shippingDiscounts": true
            },
            "startsAt": "2021-02-02T17:09:21Z",
            "endsAt": "2022-02-02T17:09:21Z",
            "usageLimit": 1,
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 100) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "codeAppDiscount": {
    "code": "APP_DISCOUNT",
    "title": "Take 5$ from order discount",
    "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
    "appliesOncePerCustomer": true,
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true,
      "shippingDiscounts": true
    },
    "startsAt": "2021-02-02T17:09:21Z",
    "endsAt": "2022-02-02T17:09:21Z",
    "usageLimit": 1,
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
    "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 100) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "codeAppDiscount": {
            "code": "APP_DISCOUNT",
            "title": "Take 5$ from order discount",
            "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
            "appliesOncePerCustomer": true,
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true,
                "shippingDiscounts": true
            },
            "startsAt": "2021-02-02T17:09:21Z",
            "endsAt": "2022-02-02T17:09:21Z",
            "usageLimit": 1,
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeAppCreate": {
    "codeAppDiscount": {
      "discountId": "gid://shopify/DiscountCodeNode/1057371199",
      "title": "Take 5$ from order discount",
      "appDiscountType": {
        "description": "my function does a thing",
        "functionId": "af8aad4b-5db2-4eb8-8a22-1d5d11657d17"
      },
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true,
        "shippingDiscounts": true
      },
      "codes": {
        "nodes": [
          {
            "code": "APP_DISCOUNT"
          }
        ]
      },
      "status": "EXPIRED",
      "usageLimit": 1
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product-based code discount that's managed by an app

#### Description

Create a code discount that's managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). This example shows how to create a code discount that takes 10% off specific products.

#### Query

```graphql
mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
  discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
    codeAppDiscount {
      discountId
      title
      appDiscountType {
        description
        functionId
      }
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
      }
      codes(first: 5) {
        nodes {
          code
        }
      }
      status
      usageLimit
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
  "codeAppDiscount": {
    "code": "PRODUCT10",
    "title": "10% off selected products",
    "functionId": "6ca45d1e-e776-4e86-8404-ad521b258b60",
    "appliesOncePerCustomer": false,
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": true
    },
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                      {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                      \"discountApplicationStrategy\":\"FIRST\"}"
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
"query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title appDiscountType { description functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } codes(first: 5) { nodes { code } } status usageLimit } userErrors { field message } } }",
 "variables": {
    "codeAppDiscount": {
      "code": "PRODUCT10",
      "title": "10% off selected products",
      "functionId": "6ca45d1e-e776-4e86-8404-ad521b258b60",
      "appliesOncePerCustomer": false,
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": true
      },
      "startsAt": "2025-01-01T00:00:00Z",
      "endsAt": "2025-12-31T23:59:59Z",
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                      {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                      \"discountApplicationStrategy\":\"FIRST\"}"
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
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 5) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "codeAppDiscount": {
            "code": "PRODUCT10",
            "title": "10% off selected products",
            "functionId": "6ca45d1e-e776-4e86-8404-ad521b258b60",
            "appliesOncePerCustomer": false,
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": true
            },
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                      {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                      \"discountApplicationStrategy\":\"FIRST\"}"
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
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 5) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "codeAppDiscount": {
    "code": "PRODUCT10",
    "title": "10% off selected products",
    "functionId": "6ca45d1e-e776-4e86-8404-ad521b258b60",
    "appliesOncePerCustomer": false,
    "combinesWith": {
      "orderDiscounts": false,
      "productDiscounts": false,
      "shippingDiscounts": true
    },
    "startsAt": "2025-01-01T00:00:00Z",
    "endsAt": "2025-12-31T23:59:59Z",
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                      {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                      \"discountApplicationStrategy\":\"FIRST\"}"
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
    "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 5) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "codeAppDiscount": {
            "code": "PRODUCT10",
            "title": "10% off selected products",
            "functionId": "6ca45d1e-e776-4e86-8404-ad521b258b60",
            "appliesOncePerCustomer": false,
            "combinesWith": {
                "orderDiscounts": false,
                "productDiscounts": false,
                "shippingDiscounts": true
            },
            "startsAt": "2025-01-01T00:00:00Z",
            "endsAt": "2025-12-31T23:59:59Z",
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"percentage\":0.10},\"targets\":[{\"productVariants\":\n                      {\"productsToDiscount\":[\"gid://shopify/Product/123\"],\"excludedVariantIds\":[]}}]}],\n                      \"discountApplicationStrategy\":\"FIRST\"}"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeAppCreate": {
    "codeAppDiscount": {
      "discountId": "gid://shopify/DiscountCodeNode/1057371198",
      "title": "10% off selected products",
      "appDiscountType": {
        "description": "my function does a thing",
        "functionId": "6ca45d1e-e776-4e86-8404-ad521b258b60"
      },
      "combinesWith": {
        "orderDiscounts": false,
        "productDiscounts": false,
        "shippingDiscounts": true
      },
      "codes": {
        "nodes": [
          {
            "code": "PRODUCT10"
          }
        ]
      },
      "status": "ACTIVE",
      "usageLimit": null
    },
    "userErrors": []
  }
}
``` 
*   ### discountCodeAppCreate reference

Examples
--------

Create a combinable code discount that's managed by an app

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeAppCreate(%24codeAppDiscount%3A%20DiscountCodeAppInput!)%20%7B%0A%20%20discountCodeAppCreate(codeAppDiscount%3A%20%24codeAppDiscount)%20%7B%0A%20%20%20%20codeAppDiscount%20%7B%0A%20%20%20%20%20%20discountId%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20appDiscountType%20%7B%0A%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20functionId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20combinesWith%20%7B%0A%20%20%20%20%20%20%20%20orderDiscounts%0A%20%20%20%20%20%20%20%20productDiscounts%0A%20%20%20%20%20%20%20%20shippingDiscounts%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20codes(first%3A%20100)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20usageLimit%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22codeAppDiscount%22%3A%20%7B%0A%20%20%20%20%22code%22%3A%20%22APP_DISCOUNT%22%2C%0A%20%20%20%20%22title%22%3A%20%22Take%205%24%20from%20order%20discount%22%2C%0A%20%20%20%20%22functionId%22%3A%20%22241d1090-ce51-4c0e-8b87-a6fa14fe580a%22%2C%0A%20%20%20%20%22appliesOncePerCustomer%22%3A%20true%2C%0A%20%20%20%20%22combinesWith%22%3A%20%7B%0A%20%20%20%20%20%20%22orderDiscounts%22%3A%20true%2C%0A%20%20%20%20%20%20%22productDiscounts%22%3A%20true%2C%0A%20%20%20%20%20%20%22shippingDiscounts%22%3A%20true%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22startsAt%22%3A%20%222021-02-02T17%3A09%3A21Z%22%2C%0A%20%20%20%20%22endsAt%22%3A%20%222022-02-02T17%3A09%3A21Z%22%2C%0A%20%20%20%20%22usageLimit%22%3A%201%2C%0A%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22default%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22function-configuration%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22json%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22%7B%5C%22discounts%5C%22%3A%5B%7B%5C%22value%5C%22%3A%7B%5C%22fixedAmount%5C%22%3A%7B%5C%22amount%5C%22%3A5%7D%7D%2C%5C%22targets%5C%22%3A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%7B%5C%22orderSubtotal%5C%22%3A%7B%5C%22excludedVariantIds%5C%22%3A%5B%5D%7D%7D%5D%7D%5D%2C%5C%22discountApplicationStrategy%5C%22%3A%5C%22FIRST%5C%22%7D%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

 mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {

 discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {

 codeAppDiscount {

 discountId

 title

 appDiscountType {

 description

 functionId

 }

 combinesWith {

 orderDiscounts

 productDiscounts

 shippingDiscounts

 }

 codes(first: 100) {

 nodes {

 code

 }

 }

 status

 usageLimit

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"codeAppDiscount":{

"code":"APP_DISCOUNT",

```
mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
  discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
    codeAppDiscount {
      discountId
      title
      appDiscountType {
        description
        functionId
      }
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
      }
      codes(first: 100) {
        nodes {
          code
        }
      }
      status
      usageLimit
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
"query": "mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) { discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) { codeAppDiscount { discountId title appDiscountType { description functionId } combinesWith { orderDiscounts productDiscounts shippingDiscounts } codes(first: 100) { nodes { code } } status usageLimit } userErrors { field message } } }",
 "variables": {
    "codeAppDiscount": {
      "code": "APP_DISCOUNT",
      "title": "Take 5$ from order discount",
      "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
      "appliesOncePerCustomer": true,
      "combinesWith": {
        "orderDiscounts": true,
        "productDiscounts": true,
        "shippingDiscounts": true
      },
      "startsAt": "2021-02-02T17:09:21Z",
      "endsAt": "2022-02-02T17:09:21Z",
      "usageLimit": 1,
      "metafields": [
        {
          "namespace": "default",
          "key": "function-configuration",
          "type": "json",
          "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 100) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "codeAppDiscount": {
            "code": "APP_DISCOUNT",
            "title": "Take 5$ from order discount",
            "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
            "appliesOncePerCustomer": true,
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true,
                "shippingDiscounts": true
            },
            "startsAt": "2021-02-02T17:09:21Z",
            "endsAt": "2022-02-02T17:09:21Z",
            "usageLimit": 1,
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
    "query": `mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
      discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
        codeAppDiscount {
          discountId
          title
          appDiscountType {
            description
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
          codes(first: 100) {
            nodes {
              code
            }
          }
          status
          usageLimit
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "codeAppDiscount": {
            "code": "APP_DISCOUNT",
            "title": "Take 5$ from order discount",
            "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
            "appliesOncePerCustomer": true,
            "combinesWith": {
                "orderDiscounts": true,
                "productDiscounts": true,
                "shippingDiscounts": true
            },
            "startsAt": "2021-02-02T17:09:21Z",
            "endsAt": "2022-02-02T17:09:21Z",
            "usageLimit": 1,
            "metafields": [
                {
                    "namespace": "default",
                    "key": "function-configuration",
                    "type": "json",
                    "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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
  mutation discountCodeAppCreate($codeAppDiscount: DiscountCodeAppInput!) {
    discountCodeAppCreate(codeAppDiscount: $codeAppDiscount) {
      codeAppDiscount {
        discountId
        title
        appDiscountType {
          description
          functionId
        }
        combinesWith {
          orderDiscounts
          productDiscounts
          shippingDiscounts
        }
        codes(first: 100) {
          nodes {
            code
          }
        }
        status
        usageLimit
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "codeAppDiscount": {
    "code": "APP_DISCOUNT",
    "title": "Take 5$ from order discount",
    "functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",
    "appliesOncePerCustomer": true,
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true,
      "shippingDiscounts": true
    },
    "startsAt": "2021-02-02T17:09:21Z",
    "endsAt": "2022-02-02T17:09:21Z",
    "usageLimit": 1,
    "metafields": [
      {
        "namespace": "default",
        "key": "function-configuration",
        "type": "json",
        "value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n                      [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"
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

22

23

24

›

⌄

⌄

⌄

⌄

⌄

{

"codeAppDiscount": {

"code": "APP_DISCOUNT",

"title": "Take 5$ from order discount",

"functionId": "241d1090-ce51-4c0e-8b87-a6fa14fe580a",

"appliesOncePerCustomer": true,

"combinesWith": {

"orderDiscounts": true,

"productDiscounts": true,

"shippingDiscounts": true

},

"startsAt": "2021-02-02T17:09:21Z",

"endsAt": "2022-02-02T17:09:21Z",

"usageLimit": 1,

"metafields": [

{

"namespace": "default",

"key": "function-configuration",

"type": "json",

"value": "{\"discounts\":[{\"value\":{\"fixedAmount\":{\"amount\":5}},\"targets\":\n [{\"orderSubtotal\":{\"excludedVariantIds\":[]}}]}],\"discountApplicationStrategy\":\"FIRST\"}"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"discountCodeAppCreate": {

"codeAppDiscount": {

"discountId": "gid://shopify/DiscountCodeNode/1057371199",

"title": "Take 5$ from order discount",

"appDiscountType": {

"description": "my function does a thing",

"functionId": "af8aad4b-5db2-4eb8-8a22-1d5d11657d17"

},

"combinesWith": {

"orderDiscounts": true,

"productDiscounts": true,

"shippingDiscounts": true

},

"codes": {

"nodes": [

{

"code": "APP_DISCOUNT"

}

]

},

"status": "EXPIRED",

"usageLimit": 1

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*