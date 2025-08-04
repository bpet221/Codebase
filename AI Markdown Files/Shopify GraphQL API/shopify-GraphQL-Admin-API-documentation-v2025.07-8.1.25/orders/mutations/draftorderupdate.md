---
title: "draftOrderUpdate"
description: "Shopify GraphQL Admin API documentation for draftorderupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrderUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate

Markdown Content:
draftOrderUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#main-content)

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

[Anchor to draftOrderUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#top)
draft Order Update
==================

mutation

Requires `write_draft_orders` access scope. Also: The user must have access to manage draft orders.

Updates a draft order.

If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the draft order to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#arguments-input)input

•[Draft Order Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

required

The draft order properties to update.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DraftOrderUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#returns)Draft Order Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#returns-draftOrder)draft Order

•[Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

The updated draft order.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new metafield and update another on an existing draft order

#### Description

Create a new metafield `my_field.delivery_instructions` and update an existing metafield `my_fields.purchase_order` on a specific draft order. Alternatively, refer to the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on draft order resources.

#### Query

```graphql
mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
  draftOrderUpdate(input: $input, id: $ownerId) {
    draftOrder {
      id
      metafields(first: 3) {
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
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "delivery_instructions",
        "type": "single_line_text_field",
        "value": "leave on back porch"
      },
      {
        "id": "gid://shopify/Metafield/1069229059",
        "value": "123"
      }
    ]
  },
  "ownerId": "gid://shopify/DraftOrder/276395349"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) { draftOrderUpdate(input: $input, id: $ownerId) { draftOrder { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "delivery_instructions",
          "type": "single_line_text_field",
          "value": "leave on back porch"
        },
        {
          "id": "gid://shopify/Metafield/1069229059",
          "value": "123"
        }
      ]
    },
    "ownerId": "gid://shopify/DraftOrder/276395349"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
    draftOrderUpdate(input: $input, id: $ownerId) {
      draftOrder {
        id
        metafields(first: 3) {
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
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "delivery_instructions",
                    "type": "single_line_text_field",
                    "value": "leave on back porch"
                },
                {
                    "id": "gid://shopify/Metafield/1069229059",
                    "value": "123"
                }
            ]
        },
        "ownerId": "gid://shopify/DraftOrder/276395349"
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
  mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
    draftOrderUpdate(input: $input, id: $ownerId) {
      draftOrder {
        id
        metafields(first: 3) {
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
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "delivery_instructions",
        "type": "single_line_text_field",
        "value": "leave on back porch"
      },
      {
        "id": "gid://shopify/Metafield/1069229059",
        "value": "123"
      }
    ]
  },
  "ownerId": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
      draftOrderUpdate(input: $input, id: $ownerId) {
        draftOrder {
          id
          metafields(first: 3) {
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
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "delivery_instructions",
                    "type": "single_line_text_field",
                    "value": "leave on back porch"
                },
                {
                    "id": "gid://shopify/Metafield/1069229059",
                    "value": "123"
                }
            ]
        },
        "ownerId": "gid://shopify/DraftOrder/276395349"
    },
  },
});
``` #### Response

```json
{
  "draftOrderUpdate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229059",
              "namespace": "my_fields",
              "key": "purchase_order",
              "value": "123"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229060",
              "namespace": "my_field",
              "key": "delivery_instructions",
              "value": "leave on back porch"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Modify an existing DraftOrder

#### Query

```graphql
mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
  draftOrderUpdate(id: $id, input: $input) {
    draftOrder {
      id
      note2
      email
      taxesIncluded
      currencyCode
      invoiceSentAt
      createdAt
      updatedAt
      taxExempt
      completedAt
      name
      status
      marketRegionCountryCode
      presentmentCurrencyCode
      shippingAddress {
        firstName
        address1
        phone
        city
        zip
        province
        country
        lastName
        address2
        company
        latitude
        longitude
        name
        country
        countryCodeV2
        provinceCode
      }
      billingAddress {
        firstName
        address1
        phone
        city
        zip
        province
        country
        lastName
        address2
        company
        latitude
        longitude
        name
        country
        countryCodeV2
        provinceCode
      }
      invoiceUrl
      appliedDiscount {
        title
        value
        valueType
      }
      order {
        id
        customAttributes {
          key
          value
        }
      }
      shippingLine {
        id
        title
        carrierIdentifier
        custom
        code
        deliveryCategory
        source
        discountedPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
      }
      taxLines {
        channelLiable
        priceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        rate
        ratePercentage
        source
        title
      }
      tags
      customer {
        id
        email
        smsMarketingConsent {
          consentCollectedFrom
          consentUpdatedAt
          marketingOptInLevel
          marketingState
        }
        emailMarketingConsent {
          consentUpdatedAt
          marketingOptInLevel
          marketingState
        }
        createdAt
        updatedAt
        firstName
        lastName
        state
        amountSpent {
          amount
          currencyCode
        }
        lastOrder {
          id
          name
          currencyCode
        }
        note
        verifiedEmail
        multipassIdentifier
        taxExempt
        tags
        phone
        taxExemptions
        defaultAddress {
          id
          firstName
          lastName
          company
          address1
          address2
          city
          province
          country
          zip
          phone
          name
          provinceCode
          countryCodeV2
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
  "id": "gid://shopify/DraftOrder/276395349",
  "input": {
    "shippingAddress": {
      "address1": "123 shipping ave",
      "city": "Ottawa",
      "provinceCode": "ON",
      "zip": "K1L 2J3",
      "country": "Canada"
    },
    "marketRegionCountryCode": "CA",
    "presentmentCurrencyCode": "CAD"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) { draftOrderUpdate(id: $id, input: $input) { draftOrder { id note2 email taxesIncluded currencyCode invoiceSentAt createdAt updatedAt taxExempt completedAt name status marketRegionCountryCode presentmentCurrencyCode shippingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } billingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } invoiceUrl appliedDiscount { title value valueType } order { id customAttributes { key value } } shippingLine { id title carrierIdentifier custom code deliveryCategory source discountedPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } taxLines { channelLiable priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } rate ratePercentage source title } tags customer { id email smsMarketingConsent { consentCollectedFrom consentUpdatedAt marketingOptInLevel marketingState } emailMarketingConsent { consentUpdatedAt marketingOptInLevel marketingState } createdAt updatedAt firstName lastName state amountSpent { amount currencyCode } lastOrder { id name currencyCode } note verifiedEmail multipassIdentifier taxExempt tags phone taxExemptions defaultAddress { id firstName lastName company address1 address2 city province country zip phone name provinceCode countryCodeV2 } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349",
    "input": {
      "shippingAddress": {
        "address1": "123 shipping ave",
        "city": "Ottawa",
        "provinceCode": "ON",
        "zip": "K1L 2J3",
        "country": "Canada"
      },
      "marketRegionCountryCode": "CA",
      "presentmentCurrencyCode": "CAD"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        id
        note2
        email
        taxesIncluded
        currencyCode
        invoiceSentAt
        createdAt
        updatedAt
        taxExempt
        completedAt
        name
        status
        marketRegionCountryCode
        presentmentCurrencyCode
        shippingAddress {
          firstName
          address1
          phone
          city
          zip
          province
          country
          lastName
          address2
          company
          latitude
          longitude
          name
          country
          countryCodeV2
          provinceCode
        }
        billingAddress {
          firstName
          address1
          phone
          city
          zip
          province
          country
          lastName
          address2
          company
          latitude
          longitude
          name
          country
          countryCodeV2
          provinceCode
        }
        invoiceUrl
        appliedDiscount {
          title
          value
          valueType
        }
        order {
          id
          customAttributes {
            key
            value
          }
        }
        shippingLine {
          id
          title
          carrierIdentifier
          custom
          code
          deliveryCategory
          source
          discountedPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
        }
        taxLines {
          channelLiable
          priceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          rate
          ratePercentage
          source
          title
        }
        tags
        customer {
          id
          email
          smsMarketingConsent {
            consentCollectedFrom
            consentUpdatedAt
            marketingOptInLevel
            marketingState
          }
          emailMarketingConsent {
            consentUpdatedAt
            marketingOptInLevel
            marketingState
          }
          createdAt
          updatedAt
          firstName
          lastName
          state
          amountSpent {
            amount
            currencyCode
          }
          lastOrder {
            id
            name
            currencyCode
          }
          note
          verifiedEmail
          multipassIdentifier
          taxExempt
          tags
          phone
          taxExemptions
          defaultAddress {
            id
            firstName
            lastName
            company
            address1
            address2
            city
            province
            country
            zip
            phone
            name
            provinceCode
            countryCodeV2
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
        "id": "gid://shopify/DraftOrder/276395349",
        "input": {
            "shippingAddress": {
                "address1": "123 shipping ave",
                "city": "Ottawa",
                "provinceCode": "ON",
                "zip": "K1L 2J3",
                "country": "Canada"
            },
            "marketRegionCountryCode": "CA",
            "presentmentCurrencyCode": "CAD"
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
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        id
        note2
        email
        taxesIncluded
        currencyCode
        invoiceSentAt
        createdAt
        updatedAt
        taxExempt
        completedAt
        name
        status
        marketRegionCountryCode
        presentmentCurrencyCode
        shippingAddress {
          firstName
          address1
          phone
          city
          zip
          province
          country
          lastName
          address2
          company
          latitude
          longitude
          name
          country
          countryCodeV2
          provinceCode
        }
        billingAddress {
          firstName
          address1
          phone
          city
          zip
          province
          country
          lastName
          address2
          company
          latitude
          longitude
          name
          country
          countryCodeV2
          provinceCode
        }
        invoiceUrl
        appliedDiscount {
          title
          value
          valueType
        }
        order {
          id
          customAttributes {
            key
            value
          }
        }
        shippingLine {
          id
          title
          carrierIdentifier
          custom
          code
          deliveryCategory
          source
          discountedPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
        }
        taxLines {
          channelLiable
          priceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          rate
          ratePercentage
          source
          title
        }
        tags
        customer {
          id
          email
          smsMarketingConsent {
            consentCollectedFrom
            consentUpdatedAt
            marketingOptInLevel
            marketingState
          }
          emailMarketingConsent {
            consentUpdatedAt
            marketingOptInLevel
            marketingState
          }
          createdAt
          updatedAt
          firstName
          lastName
          state
          amountSpent {
            amount
            currencyCode
          }
          lastOrder {
            id
            name
            currencyCode
          }
          note
          verifiedEmail
          multipassIdentifier
          taxExempt
          tags
          phone
          taxExemptions
          defaultAddress {
            id
            firstName
            lastName
            company
            address1
            address2
            city
            province
            country
            zip
            phone
            name
            provinceCode
            countryCodeV2
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
  "id": "gid://shopify/DraftOrder/276395349",
  "input": {
    "shippingAddress": {
      "address1": "123 shipping ave",
      "city": "Ottawa",
      "provinceCode": "ON",
      "zip": "K1L 2J3",
      "country": "Canada"
    },
    "marketRegionCountryCode": "CA",
    "presentmentCurrencyCode": "CAD"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
      draftOrderUpdate(id: $id, input: $input) {
        draftOrder {
          id
          note2
          email
          taxesIncluded
          currencyCode
          invoiceSentAt
          createdAt
          updatedAt
          taxExempt
          completedAt
          name
          status
          marketRegionCountryCode
          presentmentCurrencyCode
          shippingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          billingAddress {
            firstName
            address1
            phone
            city
            zip
            province
            country
            lastName
            address2
            company
            latitude
            longitude
            name
            country
            countryCodeV2
            provinceCode
          }
          invoiceUrl
          appliedDiscount {
            title
            value
            valueType
          }
          order {
            id
            customAttributes {
              key
              value
            }
          }
          shippingLine {
            id
            title
            carrierIdentifier
            custom
            code
            deliveryCategory
            source
            discountedPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
          }
          taxLines {
            channelLiable
            priceSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            rate
            ratePercentage
            source
            title
          }
          tags
          customer {
            id
            email
            smsMarketingConsent {
              consentCollectedFrom
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            emailMarketingConsent {
              consentUpdatedAt
              marketingOptInLevel
              marketingState
            }
            createdAt
            updatedAt
            firstName
            lastName
            state
            amountSpent {
              amount
              currencyCode
            }
            lastOrder {
              id
              name
              currencyCode
            }
            note
            verifiedEmail
            multipassIdentifier
            taxExempt
            tags
            phone
            taxExemptions
            defaultAddress {
              id
              firstName
              lastName
              company
              address1
              address2
              city
              province
              country
              zip
              phone
              name
              provinceCode
              countryCodeV2
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
        "id": "gid://shopify/DraftOrder/276395349",
        "input": {
            "shippingAddress": {
                "address1": "123 shipping ave",
                "city": "Ottawa",
                "provinceCode": "ON",
                "zip": "K1L 2J3",
                "country": "Canada"
            },
            "marketRegionCountryCode": "CA",
            "presentmentCurrencyCode": "CAD"
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderUpdate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349",
      "note2": "rush order",
      "email": "thomas_burnsimus_ii@shopify.com",
      "taxesIncluded": false,
      "currencyCode": "USD",
      "invoiceSentAt": null,
      "createdAt": "2021-12-01T12:42:15Z",
      "updatedAt": "2024-11-05T17:27:52Z",
      "taxExempt": false,
      "completedAt": null,
      "name": "#D1",
      "status": "OPEN",
      "marketRegionCountryCode": "CA",
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "firstName": "Bob",
        "address1": "123 shipping ave",
        "phone": "+1(613)555-1212",
        "city": "Ottawa",
        "zip": "K1L 2J3",
        "province": "Ontario",
        "country": "Canada",
        "lastName": "Bobsen",
        "address2": "",
        "company": "",
        "latitude": null,
        "longitude": null,
        "name": "Bob Bobsen",
        "countryCodeV2": "CA",
        "provinceCode": "ON"
      },
      "billingAddress": {
        "firstName": "Bob",
        "address1": "124 Amoebobacterieae St",
        "phone": "+1(343)555-1212",
        "city": "Ottawa",
        "zip": "K2P0V7",
        "province": "Ontario",
        "country": "Canada",
        "lastName": "Bobsen Jr.",
        "address2": "",
        "company": null,
        "latitude": null,
        "longitude": null,
        "name": "Bob Bobsen Jr.",
        "countryCodeV2": "CA",
        "provinceCode": "ON"
      },
      "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/f1df1a91d10a6d7704cf2f0315461d4d",
      "appliedDiscount": null,
      "order": null,
      "shippingLine": null,
      "taxLines": [
        {
          "channelLiable": null,
          "priceSet": {
            "presentmentMoney": {
              "amount": "5.46",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "5.46",
              "currencyCode": "USD"
            }
          },
          "rate": 0.07,
          "ratePercentage": 7,
          "source": null,
          "title": "GST"
        },
        {
          "channelLiable": null,
          "priceSet": {
            "presentmentMoney": {
              "amount": "6.24",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "6.24",
              "currencyCode": "USD"
            }
          },
          "rate": 0.08,
          "ratePercentage": 8,
          "source": null,
          "title": "PST"
        }
      ],
      "tags": [
        "Might be fraud"
      ],
      "customer": {
        "id": "gid://shopify/Customer/544365967",
        "email": "bob@example.com",
        "smsMarketingConsent": {
          "consentCollectedFrom": "OTHER",
          "consentUpdatedAt": "2021-06-16T17:31:44Z",
          "marketingOptInLevel": "SINGLE_OPT_IN",
          "marketingState": "SUBSCRIBED"
        },
        "emailMarketingConsent": {
          "consentUpdatedAt": "2005-06-16T15:00:11Z",
          "marketingOptInLevel": "SINGLE_OPT_IN",
          "marketingState": "SUBSCRIBED"
        },
        "createdAt": "2005-06-15T15:57:11Z",
        "updatedAt": "2005-06-16T15:57:11Z",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "state": "ENABLED",
        "amountSpent": {
          "amount": "8305.6",
          "currencyCode": "USD"
        },
        "lastOrder": null,
        "note": null,
        "verifiedEmail": true,
        "multipassIdentifier": null,
        "taxExempt": false,
        "tags": [
          "Bob",
          "Canadian",
          "Léon",
          "Noël"
        ],
        "phone": "+13125551212",
        "taxExemptions": [],
        "defaultAddress": {
          "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
          "firstName": "Bob",
          "lastName": "Bobsen",
          "company": "",
          "address1": "123 Amoebobacterieae St",
          "address2": "",
          "city": "Ottawa",
          "province": "Ontario",
          "country": "Canada",
          "zip": "K2P0V6",
          "phone": "+1(613)555-1212",
          "name": "Bob Bobsen",
          "provinceCode": "ON",
          "countryCodeV2": "CA"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update the draft order shipping address

#### Query

```graphql
mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
  draftOrderUpdate(id: $id, input: $input) {
    draftOrder {
      shippingAddress {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/276395349",
  "input": {
    "shippingAddress": {
      "address1": "123 shipping ave",
      "city": "Ottawa",
      "provinceCode": "ON",
      "zip": "K1L 2J3",
      "country": "Canada"
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
"query": "mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) { draftOrderUpdate(id: $id, input: $input) { draftOrder { shippingAddress { id } } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349",
    "input": {
      "shippingAddress": {
        "address1": "123 shipping ave",
        "city": "Ottawa",
        "provinceCode": "ON",
        "zip": "K1L 2J3",
        "country": "Canada"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        shippingAddress {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349",
        "input": {
            "shippingAddress": {
                "address1": "123 shipping ave",
                "city": "Ottawa",
                "provinceCode": "ON",
                "zip": "K1L 2J3",
                "country": "Canada"
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
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        shippingAddress {
          id
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349",
  "input": {
    "shippingAddress": {
      "address1": "123 shipping ave",
      "city": "Ottawa",
      "provinceCode": "ON",
      "zip": "K1L 2J3",
      "country": "Canada"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
      draftOrderUpdate(id: $id, input: $input) {
        draftOrder {
          shippingAddress {
            id
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349",
        "input": {
            "shippingAddress": {
                "address1": "123 shipping ave",
                "city": "Ottawa",
                "provinceCode": "ON",
                "zip": "K1L 2J3",
                "country": "Canada"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderUpdate": {
    "draftOrder": {
      "shippingAddress": {
        "id": "gid://shopify/MailingAddress/639215345?model_name=Address"
      }
    }
  }
}
``` 
*   ### Updating a draft order that doesn't exist returns an error

#### Query

```graphql
mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
  draftOrderUpdate(id: $id, input: $input) {
    draftOrder {
      id
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/1",
  "input": {
    "note": "This is a really awesome draft order"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) { draftOrderUpdate(id: $id, input: $input) { draftOrder { id } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/1",
    "input": {
      "note": "This is a really awesome draft order"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        id
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/1",
        "input": {
            "note": "This is a really awesome draft order"
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
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        id
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/1",
  "input": {
    "note": "This is a really awesome draft order"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
      draftOrderUpdate(id: $id, input: $input) {
        draftOrder {
          id
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/1",
        "input": {
            "note": "This is a really awesome draft order"
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderUpdate": {
    "draftOrder": null,
    "userErrors": [
      {
        "message": "Draft order not found",
        "field": null
      }
    ]
  }
}
``` 
*   ### Updating a draft order with a company, location and company contact

#### Query

```graphql
mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
  draftOrderUpdate(id: $id, input: $input) {
    draftOrder {
      purchasingEntity {
        ... on PurchasingCompany {
          company {
            id
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/276395349",
  "input": {
    "purchasingEntity": {
      "purchasingCompany": {
        "companyId": "gid://shopify/Company/426793626",
        "companyLocationId": "gid://shopify/CompanyLocation/441870438",
        "companyContactId": "gid://shopify/CompanyContact/207808057"
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
"query": "mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) { draftOrderUpdate(id: $id, input: $input) { draftOrder { purchasingEntity { ... on PurchasingCompany { company { id } } } } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349",
    "input": {
      "purchasingEntity": {
        "purchasingCompany": {
          "companyId": "gid://shopify/Company/426793626",
          "companyLocationId": "gid://shopify/CompanyLocation/441870438",
          "companyContactId": "gid://shopify/CompanyContact/207808057"
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
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        purchasingEntity {
          ... on PurchasingCompany {
            company {
              id
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349",
        "input": {
            "purchasingEntity": {
                "purchasingCompany": {
                    "companyId": "gid://shopify/Company/426793626",
                    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
                    "companyContactId": "gid://shopify/CompanyContact/207808057"
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
  mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
    draftOrderUpdate(id: $id, input: $input) {
      draftOrder {
        purchasingEntity {
          ... on PurchasingCompany {
            company {
              id
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349",
  "input": {
    "purchasingEntity": {
      "purchasingCompany": {
        "companyId": "gid://shopify/Company/426793626",
        "companyLocationId": "gid://shopify/CompanyLocation/441870438",
        "companyContactId": "gid://shopify/CompanyContact/207808057"
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
    "query": `mutation draftOrderUpdate($id: ID!, $input: DraftOrderInput!) {
      draftOrderUpdate(id: $id, input: $input) {
        draftOrder {
          purchasingEntity {
            ... on PurchasingCompany {
              company {
                id
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349",
        "input": {
            "purchasingEntity": {
                "purchasingCompany": {
                    "companyId": "gid://shopify/Company/426793626",
                    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
                    "companyContactId": "gid://shopify/CompanyContact/207808057"
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderUpdate": {
    "draftOrder": {
      "purchasingEntity": {
        "company": {
          "id": "gid://shopify/Company/426793626"
        }
      }
    }
  }
}
``` 
*   ### draftOrderUpdate reference

Examples
--------

Create a new metafield and update another on an existing draft order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateDraftOrderMetafields(%24input%3A%20DraftOrderInput!%2C%20%24ownerId%3A%20ID!)%20%7B%0A%20%20draftOrderUpdate(input%3A%20%24input%2C%20id%3A%20%24ownerId)%20%7B%0A%20%20%20%20draftOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20metafields(first%3A%203)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22my_field%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22delivery_instructions%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22leave%20on%20back%20porch%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafield%2F1069229059%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22123%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FDraftOrder%2F276395349%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {

 draftOrderUpdate(input: $input, id: $ownerId) {

 draftOrder {

 id

 metafields(first: 3) {

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

 userErrors {

 message

 field

 }

 }

 }`,

{

variables:{

"input":{

"metafields":[

{

"namespace":"my_field",

"key":"delivery_instructions",

"type":"single_line_text_field",

"value":"leave on back porch"

},

{

```
mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
  draftOrderUpdate(input: $input, id: $ownerId) {
    draftOrder {
      id
      metafields(first: 3) {
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
    userErrors {
      message
      field
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
"query": "mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) { draftOrderUpdate(input: $input, id: $ownerId) { draftOrder { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "delivery_instructions",
          "type": "single_line_text_field",
          "value": "leave on back porch"
        },
        {
          "id": "gid://shopify/Metafield/1069229059",
          "value": "123"
        }
      ]
    },
    "ownerId": "gid://shopify/DraftOrder/276395349"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
    draftOrderUpdate(input: $input, id: $ownerId) {
      draftOrder {
        id
        metafields(first: 3) {
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
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "delivery_instructions",
                    "type": "single_line_text_field",
                    "value": "leave on back porch"
                },
                {
                    "id": "gid://shopify/Metafield/1069229059",
                    "value": "123"
                }
            ]
        },
        "ownerId": "gid://shopify/DraftOrder/276395349"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
      draftOrderUpdate(input: $input, id: $ownerId) {
        draftOrder {
          id
          metafields(first: 3) {
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
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "delivery_instructions",
                    "type": "single_line_text_field",
                    "value": "leave on back porch"
                },
                {
                    "id": "gid://shopify/Metafield/1069229059",
                    "value": "123"
                }
            ]
        },
        "ownerId": "gid://shopify/DraftOrder/276395349"
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
  mutation updateDraftOrderMetafields($input: DraftOrderInput!, $ownerId: ID!) {
    draftOrderUpdate(input: $input, id: $ownerId) {
      draftOrder {
        id
        metafields(first: 3) {
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
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "delivery_instructions",
        "type": "single_line_text_field",
        "value": "leave on back porch"
      },
      {
        "id": "gid://shopify/Metafield/1069229059",
        "value": "123"
      }
    ]
  },
  "ownerId": "gid://shopify/DraftOrder/276395349"
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

›

⌄

⌄

⌄

⌄

⌄

{

"input": {

"metafields": [

{

"namespace": "my_field",

"key": "delivery_instructions",

"type": "single_line_text_field",

"value": "leave on back porch"

},

{

"id": "gid://shopify/Metafield/1069229059",

"value": "123"

}

]

},

"ownerId": "gid://shopify/DraftOrder/276395349"

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

"draftOrderUpdate": {

"draftOrder": {

"id": "gid://shopify/DraftOrder/276395349",

"metafields": {

"edges": [

{

"node": {

"id": "gid://shopify/Metafield/1069229059",

"namespace": "my_fields",

"key": "purchase_order",

"value": "123"

}

},

{

"node": {

"id": "gid://shopify/Metafield/1069229060",

"namespace": "my_field",

"key": "delivery_instructions",

"value": "leave on back porch"

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