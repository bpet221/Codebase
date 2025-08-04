---
title: "subscriptionContractAtomicCreate"
description: "Shopify GraphQL Admin API documentation for subscriptioncontractatomiccreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: subscriptionContractAtomicCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate

Markdown Content:
subscriptionContractAtomicCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#main-content)

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
*   
Orders

    *   Queries   
    *   
Mutations

        *   [delegate Access Token Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokendestroy)
        *   [delivery Profile Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileremove)
        *   [delivery Shipping Origin Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryshippingoriginassign)
        *   [draft Order Bulk Add Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderbulkaddtags)
        *   [draft Order Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderbulkdelete)
        *   [draft Order Bulk Remove Tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderbulkremovetags)
        *   [draft Order Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate)
        *   [draft Order Complete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercomplete)
        *   [draft Order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate)
        *   [draft Order Create From Order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreatefromorder)
        *   [draft Order Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderdelete)
        *   [draft Order Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderduplicate)
        *   [draft Order Invoice Preview](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicepreview)
        *   [draft Order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend)
        *   [draft Order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate)
        *   [order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercancel)
        *   [order Capture](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercapture)
        *   [order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderclose)
        *   [order Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate)
        *   [order Create Mandate Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreatemandatepayment)
        *   [order Create Manual Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreatemanualpayment)
        *   [order Customer Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerremove)
        *   [order Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderdelete)
        *   [order Edit Add Custom Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddcustomitem)
        *   [order Edit Add Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddlineitemdiscount)
        *   [order Edit Add Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddshippingline)
        *   [order Edit Add Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditaddvariant)
        *   [order Edit Begin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditbegin)
        *   [order Edit Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditcommit)
        *   [order Edit Remove Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditremovediscount)
        *   [order Edit Remove Line Item Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditremovelineitemdiscount)
        *   [order Edit Remove Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditremoveshippingline)
        *   [order Edit Set Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditsetquantity)
        *   [order Edit Update Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditupdatediscount)
        *   [order Edit Update Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordereditupdateshippingline)
        *   [order Invoice Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderinvoicesend)
        *   [order Mark As Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordermarkaspaid)
        *   [order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderopen)
        *   [order Risk Assessment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderriskassessmentcreate)
        *   [order Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderupdate)
        *   [refund Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundcreate)
        *   [remove From Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/removefromreturn)
        *   [return Approve Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnapproverequest)
        *   [return Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncancel)
        *   [return Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnclose)
        *   [return Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returncreate)
        *   [return Decline Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returndeclinerequest)
        *   [return Line Item Remove From Return](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnlineitemremovefromreturn)
        *   [return Process](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnprocess)
        *   [return Refund](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnrefund)
        *   [return Reopen](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnreopen)
        *   [return Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnrequest)
        *   [reverse Delivery Create With Shipping](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reversedeliverycreatewithshipping)
        *   [reverse Delivery Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reversedeliveryshippingupdate)
        *   [reverse Fulfillment Order Dispose](https://shopify.dev/docs/api/admin-graphql/latest/mutations/reversefulfillmentorderdispose)
        *   [subscription Billing Attempt Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingattemptcreate)
        *   [subscription Billing Cycle Bulk Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclebulkcharge)
        *   [subscription Billing Cycle Bulk Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclebulksearch)
        *   [subscription Billing Cycle Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecharge)
        *   [subscription Billing Cycle Contract Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecontractdraftcommit)
        *   [subscription Billing Cycle Contract Draft Concatenate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecontractdraftconcatenate)
        *   [subscription Billing Cycle Contract Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclecontractedit)
        *   [subscription Billing Cycle Edit Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleeditdelete)
        *   [subscription Billing Cycle Edits Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleeditsdelete)
        *   [subscription Billing Cycle Schedule Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcyclescheduleedit)
        *   [subscription Billing Cycle Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleskip)
        *   [subscription Billing Cycle Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionbillingcycleunskip)
        *   [subscription Contract Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractactivate)
        *   [subscription Contract Atomic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate)
        *   [subscription Contract Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcancel)
        *   [subscription Contract Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate)
        *   [subscription Contract Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractexpire)
        *   [subscription Contract Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractfail)
        *   [subscription Contract Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractpause)
        *   [subscription Contract Product Change](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractproductchange)
        *   [subscription Contract Set Next Billing Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractsetnextbillingdate)
        *   [subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractupdate)
        *   [subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftcommit)
        *   [subscription Draft Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountadd)
        *   [subscription Draft Discount Code Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountcodeapply)
        *   [subscription Draft Discount Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountremove)
        *   [subscription Draft Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftdiscountupdate)
        *   [subscription Draft Free Shipping Discount Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftfreeshippingdiscountadd)
        *   [subscription Draft Free Shipping Discount Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftfreeshippingdiscountupdate)
        *   [subscription Draft Line Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftlineadd)
        *   [subscription Draft Line Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftlineremove)
        *   [subscription Draft Line Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftlineupdate)
        *   [subscription Draft Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptiondraftupdate)
        *   [transaction Void](https://shopify.dev/docs/api/admin-graphql/latest/mutations/transactionvoid)

    *   Objects   

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

[Anchor to subscriptionContractAtomicCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#top)
subscription Contract Atomic Create
===================================

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage_orders_information permission.

Creates a Subscription Contract.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#arguments-input)input

•[Subscription Contract Atomic Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput)

required

The properties of the new Subscription Contract.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to SubscriptionContractAtomicCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#returns)Subscription Contract Atomic Create Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to contract](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#returns-contract)contract

•[Subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

The new Subscription Contract object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractatomiccreate#returns-userErrors)user Errors

•[[Subscription Draft User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a subscription contract with a single line item

#### Description

Creates a subscription contract with a line item with a single GraphQL call.

#### Query

```graphql
mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
  subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
    contract {
      id
      lines(first: 10) {
        nodes {
          id
          quantity
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
  "customerId": "gid://shopify/Customer/544365967",
  "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
  "variantId": "gid://shopify/ProductVariant/30322695"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) { subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: \"2025-06-01\", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: \"John\", lastName: \"King\", address1: \"1483 rue Mossoro\", city: \"Montreal\", province: \"Quebec\", country: \"Canada\", zip: \"H2S1Z5\"}}}}}) { contract { id lines(first: 10) { nodes { id quantity } } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/544365967",
    "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
    "variantId": "gid://shopify/ProductVariant/30322695"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
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
        "customerId": "gid://shopify/Customer/544365967",
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "variantId": "gid://shopify/ProductVariant/30322695"
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
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
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
  "customerId": "gid://shopify/Customer/544365967",
  "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
  "variantId": "gid://shopify/ProductVariant/30322695"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
      subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
        contract {
          id
          lines(first: 10) {
            nodes {
              id
              quantity
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
        "customerId": "gid://shopify/Customer/544365967",
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "variantId": "gid://shopify/ProductVariant/30322695"
    },
  },
});
``` #### Response

```json
{
  "subscriptionContractAtomicCreate": {
    "contract": {
      "id": "gid://shopify/SubscriptionContract/975257121",
      "lines": {
        "nodes": [
          {
            "id": "gid://shopify/SubscriptionLine/93b63eb2-70d1-43db-98a8-031a9b1c8042",
            "quantity": 20
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### subscriptionContractAtomicCreate reference

Examples
--------

Create a subscription contract with a single line item

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation(%24customerId%3A%20ID!%2C%20%24paymentMethodId%3A%20ID!%2C%20%24variantId%3A%20ID!)%20%7B%0A%20%20subscriptionContractAtomicCreate(input%3A%20%7BcustomerId%3A%20%24customerId%2C%20nextBillingDate%3A%20%222025-06-01%22%2C%20currencyCode%3A%20USD%2C%20lines%3A%20%5B%7Bline%3A%20%7BproductVariantId%3A%20%24variantId%2C%20quantity%3A%2020%2C%20currentPrice%3A%2025.0%7D%7D%5D%2C%20contract%3A%20%7Bstatus%3A%20ACTIVE%2C%20paymentMethodId%3A%20%24paymentMethodId%2C%20billingPolicy%3A%20%7Binterval%3A%20MONTH%2C%20intervalCount%3A%201%2C%20minCycles%3A%203%7D%2C%20deliveryPolicy%3A%20%7Binterval%3A%20MONTH%2C%20intervalCount%3A%201%7D%2C%20deliveryPrice%3A%2014.99%2C%20deliveryMethod%3A%20%7Bshipping%3A%20%7Baddress%3A%20%7BfirstName%3A%20%22John%22%2C%20lastName%3A%20%22King%22%2C%20address1%3A%20%221483%20rue%20Mossoro%22%2C%20city%3A%20%22Montreal%22%2C%20province%3A%20%22Quebec%22%2C%20country%3A%20%22Canada%22%2C%20zip%3A%20%22H2S1Z5%22%7D%7D%7D%7D%7D)%20%7B%0A%20%20%20%20contract%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20lines(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%22paymentMethodId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomerPaymentMethod%2Fb7cc6e3267aace169e516ed48be72dff%22%2C%0A%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F30322695%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {

 subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", c ity: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {

 contract {

 id

 lines(first: 10) {

 nodes {

 id

 quantity

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

"customerId":"gid://shopify/Customer/544365967",

"paymentMethodId":"gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",

"variantId":"gid://shopify/ProductVariant/30322695"

},

},

);

const data=await response.json();

```
mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
  subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
    contract {
      id
      lines(first: 10) {
        nodes {
          id
          quantity
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
"query": "mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) { subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: \"2025-06-01\", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: \"John\", lastName: \"King\", address1: \"1483 rue Mossoro\", city: \"Montreal\", province: \"Quebec\", country: \"Canada\", zip: \"H2S1Z5\"}}}}}) { contract { id lines(first: 10) { nodes { id quantity } } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/544365967",
    "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
    "variantId": "gid://shopify/ProductVariant/30322695"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
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
        "customerId": "gid://shopify/Customer/544365967",
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "variantId": "gid://shopify/ProductVariant/30322695"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
      subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
        contract {
          id
          lines(first: 10) {
            nodes {
              id
              quantity
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
        "customerId": "gid://shopify/Customer/544365967",
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "variantId": "gid://shopify/ProductVariant/30322695"
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
  mutation($customerId: ID!, $paymentMethodId: ID!, $variantId: ID!) {
    subscriptionContractAtomicCreate(input: {customerId: $customerId, nextBillingDate: "2025-06-01", currencyCode: USD, lines: [{line: {productVariantId: $variantId, quantity: 20, currentPrice: 25.0}}], contract: {status: ACTIVE, paymentMethodId: $paymentMethodId, billingPolicy: {interval: MONTH, intervalCount: 1, minCycles: 3}, deliveryPolicy: {interval: MONTH, intervalCount: 1}, deliveryPrice: 14.99, deliveryMethod: {shipping: {address: {firstName: "John", lastName: "King", address1: "1483 rue Mossoro", city: "Montreal", province: "Quebec", country: "Canada", zip: "H2S1Z5"}}}}}) {
      contract {
        id
        lines(first: 10) {
          nodes {
            id
            quantity
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
  "customerId": "gid://shopify/Customer/544365967",
  "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
  "variantId": "gid://shopify/ProductVariant/30322695"
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

›

⌄

{

"customerId": "gid://shopify/Customer/544365967",

"paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",

"variantId": "gid://shopify/ProductVariant/30322695"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"subscriptionContractAtomicCreate": {

"contract": {

"id": "gid://shopify/SubscriptionContract/975257121",

"lines": {

"nodes": [

{

"id": "gid://shopify/SubscriptionLine/93b63eb2-70d1-43db-98a8-031a9b1c8042",

"quantity": 20

}

]

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*