---
title: "draftOrderCreate"
description: "Shopify GraphQL Admin API documentation for draftordercreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrderCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate

Markdown Content:
draftOrderCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#main-content)

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

[Anchor to draftOrderCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#top)
draft Order Create
==================

mutation

Requires `write_draft_orders` access scope. Also: The user must have access to manage draft orders.

Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) with attributes such as customer information, line items, shipping and billing addresses, and payment terms. Draft orders are useful for merchants that need to:

*   Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
*   Send invoices to customers with a secure checkout link.
*   Use custom items to represent additional costs or products not in inventory.
*   Re-create orders manually from active sales channels.
*   Sell products at discount or wholesale rates.
*   Take pre-orders.

After creating a draft order, you can:

*   Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
*   Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
*   Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
*   Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
*   Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

* * *

Note

When you create a draft order, you can't [reserve or hold inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order by default. However, you can reserve inventory using the [`reserveInventoryUntil`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.reserveInventoryUntil) input.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#arguments-input)input

•[Draft Order Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

required

The fields used to create the draft order.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DraftOrderCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#returns)Draft Order Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#returns-draftOrder)draft Order

•[Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

The created draft order.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a draft order

#### Description

Create a draft order that combines custom line items with existing products from your store. This example demonstrates creating custom products with manual pricing alongside actual products from your store inventory, using the [`appliedDiscount`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#arguments-input.fields.appliedDiscount) field at both the order level and line-item level. Learn more about [custom attributes](https://shopify.dev/docs/apps/build/custom-data/metafields/manage-metafields).

#### Query

```graphql
mutation draftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
    draftOrder {
      id
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "note": "Test draft order",
    "email": "test.user@shopify.com",
    "taxExempt": true,
    "tags": [
      "foo",
      "bar"
    ],
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "123 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "A1A 1A1"
    },
    "billingAddress": {
      "address1": "456 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "Z9Z 9Z9"
    },
    "appliedDiscount": {
      "description": "damaged",
      "value": 5,
      "amount": 5,
      "valueType": "FIXED_AMOUNT",
      "title": "Custom"
    },
    "lineItems": [
      {
        "title": "Custom product",
        "originalUnitPrice": 14.99,
        "quantity": 5,
        "appliedDiscount": {
          "description": "wholesale",
          "value": 5,
          "amount": 3.74,
          "valueType": "PERCENTAGE",
          "title": "Fancy"
        },
        "weight": {
          "value": 1,
          "unit": "KILOGRAMS"
        },
        "customAttributes": [
          {
            "key": "color",
            "value": "Gold"
          },
          {
            "key": "material",
            "value": "Plastic"
          }
        ]
      },
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 2
      }
    ],
    "customAttributes": [
      {
        "key": "name",
        "value": "Achilles"
      },
      {
        "key": "city",
        "value": "Troy"
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
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id } } }",
 "variables": {
    "input": {
      "note": "Test draft order",
      "email": "test.user@shopify.com",
      "taxExempt": true,
      "tags": [
        "foo",
        "bar"
      ],
      "shippingLine": {
        "title": "Custom Shipping",
        "price": 4.55
      },
      "shippingAddress": {
        "address1": "123 Main St",
        "city": "Waterloo",
        "province": "Ontario",
        "country": "Canada",
        "zip": "A1A 1A1"
      },
      "billingAddress": {
        "address1": "456 Main St",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "zip": "Z9Z 9Z9"
      },
      "appliedDiscount": {
        "description": "damaged",
        "value": 5,
        "amount": 5,
        "valueType": "FIXED_AMOUNT",
        "title": "Custom"
      },
      "lineItems": [
        {
          "title": "Custom product",
          "originalUnitPrice": 14.99,
          "quantity": 5,
          "appliedDiscount": {
            "description": "wholesale",
            "value": 5,
            "amount": 3.74,
            "valueType": "PERCENTAGE",
            "title": "Fancy"
          },
          "weight": {
            "value": 1,
            "unit": "KILOGRAMS"
          },
          "customAttributes": [
            {
              "key": "color",
              "value": "Gold"
            },
            {
              "key": "material",
              "value": "Plastic"
            }
          ]
        },
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 2
        }
      ],
      "customAttributes": [
        {
          "key": "name",
          "value": "Achilles"
        },
        {
          "key": "city",
          "value": "Troy"
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }`,
  {
    variables: {
        "input": {
            "note": "Test draft order",
            "email": "test.user@shopify.com",
            "taxExempt": true,
            "tags": [
                "foo",
                "bar"
            ],
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "123 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "A1A 1A1"
            },
            "billingAddress": {
                "address1": "456 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "Z9Z 9Z9"
            },
            "appliedDiscount": {
                "description": "damaged",
                "value": 5,
                "amount": 5,
                "valueType": "FIXED_AMOUNT",
                "title": "Custom"
            },
            "lineItems": [
                {
                    "title": "Custom product",
                    "originalUnitPrice": 14.99,
                    "quantity": 5,
                    "appliedDiscount": {
                        "description": "wholesale",
                        "value": 5,
                        "amount": 3.74,
                        "valueType": "PERCENTAGE",
                        "title": "Fancy"
                    },
                    "weight": {
                        "value": 1,
                        "unit": "KILOGRAMS"
                    },
                    "customAttributes": [
                        {
                            "key": "color",
                            "value": "Gold"
                        },
                        {
                            "key": "material",
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 2
                }
            ],
            "customAttributes": [
                {
                    "key": "name",
                    "value": "Achilles"
                },
                {
                    "key": "city",
                    "value": "Troy"
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }
QUERY

variables = {
  "input": {
    "note": "Test draft order",
    "email": "test.user@shopify.com",
    "taxExempt": true,
    "tags": [
      "foo",
      "bar"
    ],
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "123 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "A1A 1A1"
    },
    "billingAddress": {
      "address1": "456 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "Z9Z 9Z9"
    },
    "appliedDiscount": {
      "description": "damaged",
      "value": 5,
      "amount": 5,
      "valueType": "FIXED_AMOUNT",
      "title": "Custom"
    },
    "lineItems": [
      {
        "title": "Custom product",
        "originalUnitPrice": 14.99,
        "quantity": 5,
        "appliedDiscount": {
          "description": "wholesale",
          "value": 5,
          "amount": 3.74,
          "valueType": "PERCENTAGE",
          "title": "Fancy"
        },
        "weight": {
          "value": 1,
          "unit": "KILOGRAMS"
        },
        "customAttributes": [
          {
            "key": "color",
            "value": "Gold"
          },
          {
            "key": "material",
            "value": "Plastic"
          }
        ]
      },
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 2
      }
    ],
    "customAttributes": [
      {
        "key": "name",
        "value": "Achilles"
      },
      {
        "key": "city",
        "value": "Troy"
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
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
        }
      }
    }`,
    "variables": {
        "input": {
            "note": "Test draft order",
            "email": "test.user@shopify.com",
            "taxExempt": true,
            "tags": [
                "foo",
                "bar"
            ],
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "123 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "A1A 1A1"
            },
            "billingAddress": {
                "address1": "456 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "Z9Z 9Z9"
            },
            "appliedDiscount": {
                "description": "damaged",
                "value": 5,
                "amount": 5,
                "valueType": "FIXED_AMOUNT",
                "title": "Custom"
            },
            "lineItems": [
                {
                    "title": "Custom product",
                    "originalUnitPrice": 14.99,
                    "quantity": 5,
                    "appliedDiscount": {
                        "description": "wholesale",
                        "value": 5,
                        "amount": 3.74,
                        "valueType": "PERCENTAGE",
                        "title": "Fancy"
                    },
                    "weight": {
                        "value": 1,
                        "unit": "KILOGRAMS"
                    },
                    "customAttributes": [
                        {
                            "key": "color",
                            "value": "Gold"
                        },
                        {
                            "key": "material",
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 2
                }
            ],
            "customAttributes": [
                {
                    "key": "name",
                    "value": "Achilles"
                },
                {
                    "key": "city",
                    "value": "Troy"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCreate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1069920508"
    }
  }
}
``` 
*   ### Create a draft order with line item components

#### Description

Creates a draft order with a line item that has components

#### Query

```graphql
mutation draftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
    draftOrder {
      id
      lineItems(first: 100) {
        edges {
          node {
            id
            components {
              id
            }
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/799757249",
        "quantity": 1,
        "components": [
          {
            "variantId": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "variantId": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
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
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id lineItems(first: 100) { edges { node { id components { id } } } } } } }",
 "variables": {
    "input": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/799757249",
          "quantity": 1,
          "components": [
            {
              "variantId": "gid://shopify/ProductVariant/149896808",
              "quantity": 1
            },
            {
              "variantId": "gid://shopify/ProductVariant/709406719",
              "quantity": 1
            }
          ]
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
        lineItems(first: 100) {
          edges {
            node {
              id
              components {
                id
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/799757249",
                    "quantity": 1,
                    "components": [
                        {
                            "variantId": "gid://shopify/ProductVariant/149896808",
                            "quantity": 1
                        },
                        {
                            "variantId": "gid://shopify/ProductVariant/709406719",
                            "quantity": 1
                        }
                    ]
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
        lineItems(first: 100) {
          edges {
            node {
              id
              components {
                id
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/799757249",
        "quantity": 1,
        "components": [
          {
            "variantId": "gid://shopify/ProductVariant/149896808",
            "quantity": 1
          },
          {
            "variantId": "gid://shopify/ProductVariant/709406719",
            "quantity": 1
          }
        ]
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
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
          lineItems(first: 100) {
            edges {
              node {
                id
                components {
                  id
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/799757249",
                    "quantity": 1,
                    "components": [
                        {
                            "variantId": "gid://shopify/ProductVariant/149896808",
                            "quantity": 1
                        },
                        {
                            "variantId": "gid://shopify/ProductVariant/709406719",
                            "quantity": 1
                        }
                    ]
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCreate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1069920512",
      "lineItems": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/DraftOrderLineItem/1066630446",
              "components": [
                {
                  "id": "gid://shopify/DraftOrderLineItem/1066630447"
                },
                {
                  "id": "gid://shopify/DraftOrderLineItem/1066630448"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Create a draft order with presentment currency

#### Description

Create a comprehensive draft order with presentment currency, discounts, custom products, and custom attributes. This example demonstrates setting a customer-facing currency (CAD), mixing custom line-items with existing store products, and adding custom attributes at both order and line-item levels. The [`totalPriceSet`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.totalPriceSet) field returns pricing in both shop and presentment currencies. Learn more about [presentment currencies](https://help.shopify.com/manual/international/pricing/exchange-rates).

#### Query

```graphql
mutation draftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
    draftOrder {
      id
      presentmentCurrencyCode
      totalPriceSet {
        shopMoney {
          amount
          currencyCode
        }
        presentmentMoney {
          amount
          currencyCode
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "note": "Test draft order",
    "email": "test.user@shopify.com",
    "taxExempt": true,
    "tags": [
      "foo",
      "bar"
    ],
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "123 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "A1A 1A1"
    },
    "billingAddress": {
      "address1": "456 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "Z9Z 9Z9"
    },
    "appliedDiscount": {
      "description": "damaged",
      "value": 5,
      "amount": 5,
      "valueType": "FIXED_AMOUNT",
      "title": "Custom"
    },
    "lineItems": [
      {
        "title": "Custom product",
        "originalUnitPrice": 14.99,
        "quantity": 5,
        "appliedDiscount": {
          "description": "wholesale",
          "value": 5,
          "amount": 3.74,
          "valueType": "PERCENTAGE",
          "title": "Fancy"
        },
        "weight": {
          "value": 1,
          "unit": "KILOGRAMS"
        },
        "customAttributes": [
          {
            "key": "color",
            "value": "Gold"
          },
          {
            "key": "material",
            "value": "Plastic"
          }
        ]
      },
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 2
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "customAttributes": [
      {
        "key": "name",
        "value": "Achilles"
      },
      {
        "key": "city",
        "value": "Troy"
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
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id presentmentCurrencyCode totalPriceSet { shopMoney { amount currencyCode } presentmentMoney { amount currencyCode } } } } }",
 "variables": {
    "input": {
      "note": "Test draft order",
      "email": "test.user@shopify.com",
      "taxExempt": true,
      "tags": [
        "foo",
        "bar"
      ],
      "shippingLine": {
        "title": "Custom Shipping",
        "price": 4.55
      },
      "shippingAddress": {
        "address1": "123 Main St",
        "city": "Waterloo",
        "province": "Ontario",
        "country": "Canada",
        "zip": "A1A 1A1"
      },
      "billingAddress": {
        "address1": "456 Main St",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "zip": "Z9Z 9Z9"
      },
      "appliedDiscount": {
        "description": "damaged",
        "value": 5,
        "amount": 5,
        "valueType": "FIXED_AMOUNT",
        "title": "Custom"
      },
      "lineItems": [
        {
          "title": "Custom product",
          "originalUnitPrice": 14.99,
          "quantity": 5,
          "appliedDiscount": {
            "description": "wholesale",
            "value": 5,
            "amount": 3.74,
            "valueType": "PERCENTAGE",
            "title": "Fancy"
          },
          "weight": {
            "value": 1,
            "unit": "KILOGRAMS"
          },
          "customAttributes": [
            {
              "key": "color",
              "value": "Gold"
            },
            {
              "key": "material",
              "value": "Plastic"
            }
          ]
        },
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 2
        }
      ],
      "presentmentCurrencyCode": "CAD",
      "customAttributes": [
        {
          "key": "name",
          "value": "Achilles"
        },
        {
          "key": "city",
          "value": "Troy"
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
        presentmentCurrencyCode
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "note": "Test draft order",
            "email": "test.user@shopify.com",
            "taxExempt": true,
            "tags": [
                "foo",
                "bar"
            ],
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "123 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "A1A 1A1"
            },
            "billingAddress": {
                "address1": "456 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "Z9Z 9Z9"
            },
            "appliedDiscount": {
                "description": "damaged",
                "value": 5,
                "amount": 5,
                "valueType": "FIXED_AMOUNT",
                "title": "Custom"
            },
            "lineItems": [
                {
                    "title": "Custom product",
                    "originalUnitPrice": 14.99,
                    "quantity": 5,
                    "appliedDiscount": {
                        "description": "wholesale",
                        "value": 5,
                        "amount": 3.74,
                        "valueType": "PERCENTAGE",
                        "title": "Fancy"
                    },
                    "weight": {
                        "value": 1,
                        "unit": "KILOGRAMS"
                    },
                    "customAttributes": [
                        {
                            "key": "color",
                            "value": "Gold"
                        },
                        {
                            "key": "material",
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 2
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "customAttributes": [
                {
                    "key": "name",
                    "value": "Achilles"
                },
                {
                    "key": "city",
                    "value": "Troy"
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
        presentmentCurrencyCode
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "note": "Test draft order",
    "email": "test.user@shopify.com",
    "taxExempt": true,
    "tags": [
      "foo",
      "bar"
    ],
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "123 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "A1A 1A1"
    },
    "billingAddress": {
      "address1": "456 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "Z9Z 9Z9"
    },
    "appliedDiscount": {
      "description": "damaged",
      "value": 5,
      "amount": 5,
      "valueType": "FIXED_AMOUNT",
      "title": "Custom"
    },
    "lineItems": [
      {
        "title": "Custom product",
        "originalUnitPrice": 14.99,
        "quantity": 5,
        "appliedDiscount": {
          "description": "wholesale",
          "value": 5,
          "amount": 3.74,
          "valueType": "PERCENTAGE",
          "title": "Fancy"
        },
        "weight": {
          "value": 1,
          "unit": "KILOGRAMS"
        },
        "customAttributes": [
          {
            "key": "color",
            "value": "Gold"
          },
          {
            "key": "material",
            "value": "Plastic"
          }
        ]
      },
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 2
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "customAttributes": [
      {
        "key": "name",
        "value": "Achilles"
      },
      {
        "key": "city",
        "value": "Troy"
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
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
          presentmentCurrencyCode
          totalPriceSet {
            shopMoney {
              amount
              currencyCode
            }
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "note": "Test draft order",
            "email": "test.user@shopify.com",
            "taxExempt": true,
            "tags": [
                "foo",
                "bar"
            ],
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "123 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "A1A 1A1"
            },
            "billingAddress": {
                "address1": "456 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "Z9Z 9Z9"
            },
            "appliedDiscount": {
                "description": "damaged",
                "value": 5,
                "amount": 5,
                "valueType": "FIXED_AMOUNT",
                "title": "Custom"
            },
            "lineItems": [
                {
                    "title": "Custom product",
                    "originalUnitPrice": 14.99,
                    "quantity": 5,
                    "appliedDiscount": {
                        "description": "wholesale",
                        "value": 5,
                        "amount": 3.74,
                        "valueType": "PERCENTAGE",
                        "title": "Fancy"
                    },
                    "weight": {
                        "value": 1,
                        "unit": "KILOGRAMS"
                    },
                    "customAttributes": [
                        {
                            "key": "color",
                            "value": "Gold"
                        },
                        {
                            "key": "material",
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 2
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "customAttributes": [
                {
                    "key": "name",
                    "value": "Achilles"
                },
                {
                    "key": "city",
                    "value": "Troy"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCreate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1069920514",
      "presentmentCurrencyCode": "CAD",
      "totalPriceSet": {
        "shopMoney": {
          "amount": "95.29",
          "currencyCode": "USD"
        },
        "presentmentMoney": {
          "amount": "119.11",
          "currencyCode": "CAD"
        }
      }
    }
  }
}
``` 
*   ### Create a new metafield on a new draft order

#### Description

Create a draft order with custom [metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafields) for storing delivery instructions. This example demonstrates adding structured metadata to draft orders for operational information that doesn't fit standard order fields, such as special delivery instructions, internal notes, or custom fulfillment requirements. Alternatively, refer to the [`metafieldsSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset) mutation to create or update metafields on draft orders.

#### Query

```graphql
mutation createDraftOrderMetafields($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
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
      }
    ],
    "lineItems": [
      {
        "title": "small wheel",
        "quantity": 1,
        "originalUnitPrice": "10"
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
"query": "mutation createDraftOrderMetafields($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "delivery_instructions",
          "type": "single_line_text_field",
          "value": "leave on back porch"
        }
      ],
      "lineItems": [
        {
          "title": "small wheel",
          "quantity": 1,
          "originalUnitPrice": "10"
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
  mutation createDraftOrderMetafields($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
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
                }
            ],
            "lineItems": [
                {
                    "title": "small wheel",
                    "quantity": 1,
                    "originalUnitPrice": "10"
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
  mutation createDraftOrderMetafields($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
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
      }
    ],
    "lineItems": [
      {
        "title": "small wheel",
        "quantity": 1,
        "originalUnitPrice": "10"
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
    "query": `mutation createDraftOrderMetafields($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
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
                }
            ],
            "lineItems": [
                {
                    "title": "small wheel",
                    "quantity": 1,
                    "originalUnitPrice": "10"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCreate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1069920509",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069228940",
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
*   ### Creating a draft order with a company, location and company contact

#### Description

Create a B2B draft order with a [`purchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.purchasingEntity). This example demonstrates orders for wholesale customers, corporate accounts, or business partners where the buyer represents a company rather than an individual customer. Learn more about [building B2B draft orders](https://shopify.dev/docs/apps/build/b2b/draft-orders).

#### Query

```graphql
mutation draftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
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
  "input": {
    "purchasingEntity": {
      "purchasingCompany": {
        "companyId": "gid://shopify/Company/426793626",
        "companyLocationId": "gid://shopify/CompanyLocation/441870438",
        "companyContactId": "gid://shopify/CompanyContact/207808057"
      }
    },
    "note": "Test B2B draft order",
    "email": "test.b2b.user@shopify.com",
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "555 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "B1B 1B1"
    },
    "billingAddress": {
      "address1": "556 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "D9D DZD"
    },
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 5
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
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id } userErrors { message field } } }",
 "variables": {
    "input": {
      "purchasingEntity": {
        "purchasingCompany": {
          "companyId": "gid://shopify/Company/426793626",
          "companyLocationId": "gid://shopify/CompanyLocation/441870438",
          "companyContactId": "gid://shopify/CompanyContact/207808057"
        }
      },
      "note": "Test B2B draft order",
      "email": "test.b2b.user@shopify.com",
      "shippingLine": {
        "title": "Custom Shipping",
        "price": 4.55
      },
      "shippingAddress": {
        "address1": "555 Main St",
        "city": "Waterloo",
        "province": "Ontario",
        "country": "Canada",
        "zip": "B1B 1B1"
      },
      "billingAddress": {
        "address1": "556 Main St",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "zip": "D9D DZD"
      },
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 5
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
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
        "input": {
            "purchasingEntity": {
                "purchasingCompany": {
                    "companyId": "gid://shopify/Company/426793626",
                    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
                    "companyContactId": "gid://shopify/CompanyContact/207808057"
                }
            },
            "note": "Test B2B draft order",
            "email": "test.b2b.user@shopify.com",
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "555 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "B1B 1B1"
            },
            "billingAddress": {
                "address1": "556 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "D9D DZD"
            },
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 5
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
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
  "input": {
    "purchasingEntity": {
      "purchasingCompany": {
        "companyId": "gid://shopify/Company/426793626",
        "companyLocationId": "gid://shopify/CompanyLocation/441870438",
        "companyContactId": "gid://shopify/CompanyContact/207808057"
      }
    },
    "note": "Test B2B draft order",
    "email": "test.b2b.user@shopify.com",
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "555 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "B1B 1B1"
    },
    "billingAddress": {
      "address1": "556 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "D9D DZD"
    },
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 5
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
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
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
        "input": {
            "purchasingEntity": {
                "purchasingCompany": {
                    "companyId": "gid://shopify/Company/426793626",
                    "companyLocationId": "gid://shopify/CompanyLocation/441870438",
                    "companyContactId": "gid://shopify/CompanyContact/207808057"
                }
            },
            "note": "Test B2B draft order",
            "email": "test.b2b.user@shopify.com",
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "555 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "B1B 1B1"
            },
            "billingAddress": {
                "address1": "556 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "D9D DZD"
            },
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 5
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCreate": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1069920513"
    },
    "userErrors": []
  }
}
``` 
*   ### Creating a draft order with invalid input returns an error

#### Description

Create a draft order with invalid input to demonstrate proper error handling. This example shows the [`userErrors`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreate#returns-userErrors) response format when attempting to create an order without any line items, which is required for all draft orders.

#### Query

```graphql
mutation draftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
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
  "input": {
    "lineItems": []
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id } userErrors { message field } } }",
 "variables": {
    "input": {
      "lineItems": []
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
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
        "input": {
            "lineItems": []
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
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
  "input": {
    "lineItems": []
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
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
        "input": {
            "lineItems": []
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCreate": {
    "draftOrder": null,
    "userErrors": [
      {
        "message": "Add at least 1 product",
        "field": null
      }
    ]
  }
}
``` 
*   ### draftOrderCreate reference

Examples
--------

Create a draft order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20draftOrderCreate(%24input%3A%20DraftOrderInput!)%20%7B%0A%20%20draftOrderCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20draftOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22note%22%3A%20%22Test%20draft%20order%22%2C%0A%20%20%20%20%22email%22%3A%20%22test.user%40shopify.com%22%2C%0A%20%20%20%20%22taxExempt%22%3A%20true%2C%0A%20%20%20%20%22tags%22%3A%20%5B%0A%20%20%20%20%20%20%22foo%22%2C%0A%20%20%20%20%20%20%22bar%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22shippingLine%22%3A%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22Custom%20Shipping%22%2C%0A%20%20%20%20%20%20%22price%22%3A%204.55%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22123%20Main%20St%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22Waterloo%22%2C%0A%20%20%20%20%20%20%22province%22%3A%20%22Ontario%22%2C%0A%20%20%20%20%20%20%22country%22%3A%20%22Canada%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22A1A%201A1%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22billingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22456%20Main%20St%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22Toronto%22%2C%0A%20%20%20%20%20%20%22province%22%3A%20%22Ontario%22%2C%0A%20%20%20%20%20%20%22country%22%3A%20%22Canada%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22Z9Z%209Z9%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22appliedDiscount%22%3A%20%7B%0A%20%20%20%20%20%20%22description%22%3A%20%22damaged%22%2C%0A%20%20%20%20%20%20%22value%22%3A%205%2C%0A%20%20%20%20%20%20%22amount%22%3A%205%2C%0A%20%20%20%20%20%20%22valueType%22%3A%20%22FIXED_AMOUNT%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22Custom%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22lineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22title%22%3A%20%22Custom%20product%22%2C%0A%20%20%20%20%20%20%20%20%22originalUnitPrice%22%3A%2014.99%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%205%2C%0A%20%20%20%20%20%20%20%20%22appliedDiscount%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22description%22%3A%20%22wholesale%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%203.74%2C%0A%20%20%20%20%20%20%20%20%20%20%22valueType%22%3A%20%22PERCENTAGE%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Fancy%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22weight%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22customAttributes%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22color%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22Gold%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22material%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22Plastic%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F43729076%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%202%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22customAttributes%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22name%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22Achilles%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22city%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22Troy%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

 mutation draftOrderCreate($input: DraftOrderInput!) {

 draftOrderCreate(input: $input) {

 draftOrder {

 id

 }

 }

 }`,

{

variables:{

"input":{

"note":"Test draft order",

"email":"test.user@shopify.com",

"taxExempt":true,

"tags":[

"foo",

"bar"

],

"shippingLine":{

"title":"Custom Shipping",

"price":4.55

},

"shippingAddress":{

"address1":"123 Main St",

"city":"Waterloo",

"province":"Ontario",

"country":"Canada",

"zip":"A1A 1A1"

},

"billingAddress":{

"address1":"456 Main St",

"city":"Toronto",

"province":"Ontario",

```
mutation draftOrderCreate($input: DraftOrderInput!) {
  draftOrderCreate(input: $input) {
    draftOrder {
      id
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
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id } } }",
 "variables": {
    "input": {
      "note": "Test draft order",
      "email": "test.user@shopify.com",
      "taxExempt": true,
      "tags": [
        "foo",
        "bar"
      ],
      "shippingLine": {
        "title": "Custom Shipping",
        "price": 4.55
      },
      "shippingAddress": {
        "address1": "123 Main St",
        "city": "Waterloo",
        "province": "Ontario",
        "country": "Canada",
        "zip": "A1A 1A1"
      },
      "billingAddress": {
        "address1": "456 Main St",
        "city": "Toronto",
        "province": "Ontario",
        "country": "Canada",
        "zip": "Z9Z 9Z9"
      },
      "appliedDiscount": {
        "description": "damaged",
        "value": 5,
        "amount": 5,
        "valueType": "FIXED_AMOUNT",
        "title": "Custom"
      },
      "lineItems": [
        {
          "title": "Custom product",
          "originalUnitPrice": 14.99,
          "quantity": 5,
          "appliedDiscount": {
            "description": "wholesale",
            "value": 5,
            "amount": 3.74,
            "valueType": "PERCENTAGE",
            "title": "Fancy"
          },
          "weight": {
            "value": 1,
            "unit": "KILOGRAMS"
          },
          "customAttributes": [
            {
              "key": "color",
              "value": "Gold"
            },
            {
              "key": "material",
              "value": "Plastic"
            }
          ]
        },
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 2
        }
      ],
      "customAttributes": [
        {
          "key": "name",
          "value": "Achilles"
        },
        {
          "key": "city",
          "value": "Troy"
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }`,
  {
    variables: {
        "input": {
            "note": "Test draft order",
            "email": "test.user@shopify.com",
            "taxExempt": true,
            "tags": [
                "foo",
                "bar"
            ],
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "123 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "A1A 1A1"
            },
            "billingAddress": {
                "address1": "456 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "Z9Z 9Z9"
            },
            "appliedDiscount": {
                "description": "damaged",
                "value": 5,
                "amount": 5,
                "valueType": "FIXED_AMOUNT",
                "title": "Custom"
            },
            "lineItems": [
                {
                    "title": "Custom product",
                    "originalUnitPrice": 14.99,
                    "quantity": 5,
                    "appliedDiscount": {
                        "description": "wholesale",
                        "value": 5,
                        "amount": 3.74,
                        "valueType": "PERCENTAGE",
                        "title": "Fancy"
                    },
                    "weight": {
                        "value": 1,
                        "unit": "KILOGRAMS"
                    },
                    "customAttributes": [
                        {
                            "key": "color",
                            "value": "Gold"
                        },
                        {
                            "key": "material",
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 2
                }
            ],
            "customAttributes": [
                {
                    "key": "name",
                    "value": "Achilles"
                },
                {
                    "key": "city",
                    "value": "Troy"
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
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
        }
      }
    }`,
    "variables": {
        "input": {
            "note": "Test draft order",
            "email": "test.user@shopify.com",
            "taxExempt": true,
            "tags": [
                "foo",
                "bar"
            ],
            "shippingLine": {
                "title": "Custom Shipping",
                "price": 4.55
            },
            "shippingAddress": {
                "address1": "123 Main St",
                "city": "Waterloo",
                "province": "Ontario",
                "country": "Canada",
                "zip": "A1A 1A1"
            },
            "billingAddress": {
                "address1": "456 Main St",
                "city": "Toronto",
                "province": "Ontario",
                "country": "Canada",
                "zip": "Z9Z 9Z9"
            },
            "appliedDiscount": {
                "description": "damaged",
                "value": 5,
                "amount": 5,
                "valueType": "FIXED_AMOUNT",
                "title": "Custom"
            },
            "lineItems": [
                {
                    "title": "Custom product",
                    "originalUnitPrice": 14.99,
                    "quantity": 5,
                    "appliedDiscount": {
                        "description": "wholesale",
                        "value": 5,
                        "amount": 3.74,
                        "valueType": "PERCENTAGE",
                        "title": "Fancy"
                    },
                    "weight": {
                        "value": 1,
                        "unit": "KILOGRAMS"
                    },
                    "customAttributes": [
                        {
                            "key": "color",
                            "value": "Gold"
                        },
                        {
                            "key": "material",
                            "value": "Plastic"
                        }
                    ]
                },
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 2
                }
            ],
            "customAttributes": [
                {
                    "key": "name",
                    "value": "Achilles"
                },
                {
                    "key": "city",
                    "value": "Troy"
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
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }
QUERY

variables = {
  "input": {
    "note": "Test draft order",
    "email": "test.user@shopify.com",
    "taxExempt": true,
    "tags": [
      "foo",
      "bar"
    ],
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 4.55
    },
    "shippingAddress": {
      "address1": "123 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "A1A 1A1"
    },
    "billingAddress": {
      "address1": "456 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "Z9Z 9Z9"
    },
    "appliedDiscount": {
      "description": "damaged",
      "value": 5,
      "amount": 5,
      "valueType": "FIXED_AMOUNT",
      "title": "Custom"
    },
    "lineItems": [
      {
        "title": "Custom product",
        "originalUnitPrice": 14.99,
        "quantity": 5,
        "appliedDiscount": {
          "description": "wholesale",
          "value": 5,
          "amount": 3.74,
          "valueType": "PERCENTAGE",
          "title": "Fancy"
        },
        "weight": {
          "value": 1,
          "unit": "KILOGRAMS"
        },
        "customAttributes": [
          {
            "key": "color",
            "value": "Gold"
          },
          {
            "key": "material",
            "value": "Plastic"
          }
        ]
      },
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 2
      }
    ],
    "customAttributes": [
      {
        "key": "name",
        "value": "Achilles"
      },
      {
        "key": "city",
        "value": "Troy"
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

{

"input": {

"note": "Test draft order",

"email": "test.user@shopify.com",

"taxExempt": true,

"tags": [

"foo",

"bar"

],

"shippingLine": {

"title": "Custom Shipping",

"price": 4.55

},

"shippingAddress": {

"address1": "123 Main St",

"city": "Waterloo",

"province": "Ontario",

"country": "Canada",

"zip": "A1A 1A1"

},

"billingAddress": {

"address1": "456 Main St",

"city": "Toronto",

"province": "Ontario",

"country": "Canada",

"zip": "Z9Z 9Z9"

},

"appliedDiscount": {

"description": "damaged",

"value": 5,

"amount": 5,

"valueType": "FIXED_AMOUNT",

"title": "Custom"

},

"lineItems": [

{

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

›

⌄

⌄

⌄

{

"draftOrderCreate": {

"draftOrder": {

"id": "gid://shopify/DraftOrder/1069920508"

}

}

}


---
*Content truncated at "Updates" section*