---
title: "orderCreate"
description: "Shopify GraphQL Admin API documentation for ordercreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate

Markdown Content:
orderCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#main-content)

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

[Anchor to orderCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#top)
order Create
============

mutation

Requires `write_orders` access scope. Also: This mutation is only accessible to apps authenticated using [offline tokens](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens).

Creates an order with attributes such as customer information, line items, and shipping and billing addresses.

Use the `orderCreate` mutation to programmatically generate orders in scenarios where orders aren't created through the standard checkout process, such as when importing orders from an external system or creating orders for wholesale customers.

The `orderCreate` mutation doesn't support applying multiple discounts, such as discounts on line items. Automatic discounts won't be applied unless you replicate the logic of those discounts in your custom implementation. You can [apply a discount code](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput), but only one discount code can be set for each order.

* * *

Note

If you're using the `orderCreate` mutation with a [trial](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/free-trial) or [development store](https://shopify.dev/docs/api/development-stores), then you can create a maximum of five new orders per minute.

* * *

After you create an order, you can make subsequent edits to the order using one of the following mutations:

*   [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate): Used for simple updates to an order, such as changing the order's note, tags, or customer information.
*   [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin): Used when you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#arguments)
Arguments
---------

[Anchor to options](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#arguments-options)options

•[Order Create Options Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOptionsInput)

The strategies for updating inventory and whether to send shipping and order confirmations to customers.

Show input fields

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#arguments-order)order

•[Order Create Order Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput)

required

The attributes of the new order.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to OrderCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#returns)Order Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#returns-order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercreate#returns-userErrors)user Errors

•[[Order Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a comprehensive order

#### Description

This mutation creates an order with pricing in EUR. It includes a single line item with custom pricing and line item level taxes. It also shows a successfully completed transaction with payment details. The response includes the order's total tax amount.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      totalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems(first: 5) {
        nodes {
          variant {
            id
          }
          id
          title
          quantity
          taxLines {
            title
            rate
            priceSet {
              shopMoney {
                amount
                currencyCode
              }
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
  "order": {
    "currency": "EUR",
    "lineItems": [
      {
        "title": "Big Brown Bear Boots",
        "priceSet": {
          "shopMoney": {
            "amount": 74.99,
            "currencyCode": "EUR"
          }
        },
        "quantity": 3,
        "taxLines": [
          {
            "priceSet": {
              "shopMoney": {
                "amount": 13.5,
                "currencyCode": "EUR"
              }
            },
            "rate": 0.06,
            "title": "State tax"
          }
        ]
      }
    ],
    "transactions": [
      {
        "kind": "SALE",
        "status": "SUCCESS",
        "amountSet": {
          "shopMoney": {
            "amount": 238.47,
            "currencyCode": "EUR"
          }
        }
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id totalTaxSet { shopMoney { amount currencyCode } } lineItems(first: 5) { nodes { variant { id } id title quantity taxLines { title rate priceSet { shopMoney { amount currencyCode } } } } } } } }",
 "variables": {
    "order": {
      "currency": "EUR",
      "lineItems": [
        {
          "title": "Big Brown Bear Boots",
          "priceSet": {
            "shopMoney": {
              "amount": 74.99,
              "currencyCode": "EUR"
            }
          },
          "quantity": 3,
          "taxLines": [
            {
              "priceSet": {
                "shopMoney": {
                  "amount": 13.5,
                  "currencyCode": "EUR"
                }
              },
              "rate": 0.06,
              "title": "State tax"
            }
          ]
        }
      ],
      "transactions": [
        {
          "kind": "SALE",
          "status": "SUCCESS",
          "amountSet": {
            "shopMoney": {
              "amount": 238.47,
              "currencyCode": "EUR"
            }
          }
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        totalTaxSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 5) {
          nodes {
            variant {
              id
            }
            id
            title
            quantity
            taxLines {
              title
              rate
              priceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "currency": "EUR",
            "lineItems": [
                {
                    "title": "Big Brown Bear Boots",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 74.99,
                            "currencyCode": "EUR"
                        }
                    },
                    "quantity": 3,
                    "taxLines": [
                        {
                            "priceSet": {
                                "shopMoney": {
                                    "amount": 13.5,
                                    "currencyCode": "EUR"
                                }
                            },
                            "rate": 0.06,
                            "title": "State tax"
                        }
                    ]
                }
            ],
            "transactions": [
                {
                    "kind": "SALE",
                    "status": "SUCCESS",
                    "amountSet": {
                        "shopMoney": {
                            "amount": 238.47,
                            "currencyCode": "EUR"
                        }
                    }
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        totalTaxSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 5) {
          nodes {
            variant {
              id
            }
            id
            title
            quantity
            taxLines {
              title
              rate
              priceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "currency": "EUR",
    "lineItems": [
      {
        "title": "Big Brown Bear Boots",
        "priceSet": {
          "shopMoney": {
            "amount": 74.99,
            "currencyCode": "EUR"
          }
        },
        "quantity": 3,
        "taxLines": [
          {
            "priceSet": {
              "shopMoney": {
                "amount": 13.5,
                "currencyCode": "EUR"
              }
            },
            "rate": 0.06,
            "title": "State tax"
          }
        ]
      }
    ],
    "transactions": [
      {
        "kind": "SALE",
        "status": "SUCCESS",
        "amountSet": {
          "shopMoney": {
            "amount": 238.47,
            "currencyCode": "EUR"
          }
        }
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
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          totalTaxSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems(first: 5) {
            nodes {
              variant {
                id
              }
              id
              title
              quantity
              taxLines {
                title
                rate
                priceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "currency": "EUR",
            "lineItems": [
                {
                    "title": "Big Brown Bear Boots",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 74.99,
                            "currencyCode": "EUR"
                        }
                    },
                    "quantity": 3,
                    "taxLines": [
                        {
                            "priceSet": {
                                "shopMoney": {
                                    "amount": 13.5,
                                    "currencyCode": "EUR"
                                }
                            },
                            "rate": 0.06,
                            "title": "State tax"
                        }
                    ]
                }
            ],
            "transactions": [
                {
                    "kind": "SALE",
                    "status": "SUCCESS",
                    "amountSet": {
                        "shopMoney": {
                            "amount": 238.47,
                            "currencyCode": "EUR"
                        }
                    }
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459971",
      "totalTaxSet": {
        "shopMoney": {
          "amount": "13.5",
          "currencyCode": "EUR"
        }
      },
      "lineItems": {
        "nodes": [
          {
            "variant": null,
            "id": "gid://shopify/LineItem/1071823181",
            "title": "Big Brown Bear Boots",
            "quantity": 3,
            "taxLines": [
              {
                "title": "State tax",
                "rate": 0.06,
                "priceSet": {
                  "shopMoney": {
                    "amount": "13.5",
                    "currencyCode": "EUR"
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### Create a paid order and update customer details

#### Description

This mutation creates an order for an existing customer and updates the customer's first name, last name, and email. The financial status is kept as paid.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      displayFinancialStatus
      customer {
        email
        firstName
        lastName
      }
    }
  }
}
``` #### Variables

```json
{
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "customer": {
      "toUpsert": {
        "email": "foo.bar@shopify.com",
        "firstName": "Foo",
        "lastName": "Bar"
      }
    },
    "financialStatus": "PAID"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id displayFinancialStatus customer { email firstName lastName } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
        }
      ],
      "customer": {
        "toUpsert": {
          "email": "foo.bar@shopify.com",
          "firstName": "Foo",
          "lastName": "Bar"
        }
      },
      "financialStatus": "PAID"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        displayFinancialStatus
        customer {
          email
          firstName
          lastName
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "customer": {
                "toUpsert": {
                    "email": "foo.bar@shopify.com",
                    "firstName": "Foo",
                    "lastName": "Bar"
                }
            },
            "financialStatus": "PAID"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        displayFinancialStatus
        customer {
          email
          firstName
          lastName
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "customer": {
      "toUpsert": {
        "email": "foo.bar@shopify.com",
        "firstName": "Foo",
        "lastName": "Bar"
      }
    },
    "financialStatus": "PAID"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          displayFinancialStatus
          customer {
            email
            firstName
            lastName
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "customer": {
                "toUpsert": {
                    "email": "foo.bar@shopify.com",
                    "firstName": "Foo",
                    "lastName": "Bar"
                }
            },
            "financialStatus": "PAID"
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459972",
      "displayFinancialStatus": "PAID",
      "customer": {
        "email": "foo.bar@shopify.com",
        "firstName": "Foo",
        "lastName": "Bar"
      }
    }
  }
}
``` 
*   ### Create a pending order for an existing customer

#### Description

This mutation creates an order for an existing customer, adds new shipping and billing addresses, and sets the order's financial status to pending.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      displayFinancialStatus
      shippingAddress {
        lastName
        address1
        city
        provinceCode
        countryCode
        zip
      }
      billingAddress {
        lastName
        address1
        city
        provinceCode
        countryCode
        zip
      }
      customer {
        id
      }
    }
  }
}
``` #### Variables

```json
{
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "customer": {
      "toAssociate": {
        "id": "gid://shopify/Customer/544365967"
      }
    },
    "financialStatus": "PENDING",
    "shippingAddress": {
      "lastName": "James",
      "address1": "123 Main St",
      "city": "Ottawa",
      "countryCode": "CA",
      "provinceCode": "ON",
      "zip": "K1P 1J1"
    },
    "billingAddress": {
      "lastName": "James",
      "address1": "321 Secondary St",
      "city": "Ottawa",
      "countryCode": "CA",
      "provinceCode": "ON",
      "zip": "K1P 1J1"
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id displayFinancialStatus shippingAddress { lastName address1 city provinceCode countryCode zip } billingAddress { lastName address1 city provinceCode countryCode zip } customer { id } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
        }
      ],
      "customer": {
        "toAssociate": {
          "id": "gid://shopify/Customer/544365967"
        }
      },
      "financialStatus": "PENDING",
      "shippingAddress": {
        "lastName": "James",
        "address1": "123 Main St",
        "city": "Ottawa",
        "countryCode": "CA",
        "provinceCode": "ON",
        "zip": "K1P 1J1"
      },
      "billingAddress": {
        "lastName": "James",
        "address1": "321 Secondary St",
        "city": "Ottawa",
        "countryCode": "CA",
        "provinceCode": "ON",
        "zip": "K1P 1J1"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        displayFinancialStatus
        shippingAddress {
          lastName
          address1
          city
          provinceCode
          countryCode
          zip
        }
        billingAddress {
          lastName
          address1
          city
          provinceCode
          countryCode
          zip
        }
        customer {
          id
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "customer": {
                "toAssociate": {
                    "id": "gid://shopify/Customer/544365967"
                }
            },
            "financialStatus": "PENDING",
            "shippingAddress": {
                "lastName": "James",
                "address1": "123 Main St",
                "city": "Ottawa",
                "countryCode": "CA",
                "provinceCode": "ON",
                "zip": "K1P 1J1"
            },
            "billingAddress": {
                "lastName": "James",
                "address1": "321 Secondary St",
                "city": "Ottawa",
                "countryCode": "CA",
                "provinceCode": "ON",
                "zip": "K1P 1J1"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        displayFinancialStatus
        shippingAddress {
          lastName
          address1
          city
          provinceCode
          countryCode
          zip
        }
        billingAddress {
          lastName
          address1
          city
          provinceCode
          countryCode
          zip
        }
        customer {
          id
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "customer": {
      "toAssociate": {
        "id": "gid://shopify/Customer/544365967"
      }
    },
    "financialStatus": "PENDING",
    "shippingAddress": {
      "lastName": "James",
      "address1": "123 Main St",
      "city": "Ottawa",
      "countryCode": "CA",
      "provinceCode": "ON",
      "zip": "K1P 1J1"
    },
    "billingAddress": {
      "lastName": "James",
      "address1": "321 Secondary St",
      "city": "Ottawa",
      "countryCode": "CA",
      "provinceCode": "ON",
      "zip": "K1P 1J1"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          displayFinancialStatus
          shippingAddress {
            lastName
            address1
            city
            provinceCode
            countryCode
            zip
          }
          billingAddress {
            lastName
            address1
            city
            provinceCode
            countryCode
            zip
          }
          customer {
            id
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "customer": {
                "toAssociate": {
                    "id": "gid://shopify/Customer/544365967"
                }
            },
            "financialStatus": "PENDING",
            "shippingAddress": {
                "lastName": "James",
                "address1": "123 Main St",
                "city": "Ottawa",
                "countryCode": "CA",
                "provinceCode": "ON",
                "zip": "K1P 1J1"
            },
            "billingAddress": {
                "lastName": "James",
                "address1": "321 Secondary St",
                "city": "Ottawa",
                "countryCode": "CA",
                "provinceCode": "ON",
                "zip": "K1P 1J1"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459970",
      "displayFinancialStatus": "PENDING",
      "shippingAddress": {
        "lastName": "James",
        "address1": "123 Main St",
        "city": "Ottawa",
        "provinceCode": "ON",
        "countryCode": "CA",
        "zip": "K1P 1J1"
      },
      "billingAddress": {
        "lastName": "James",
        "address1": "321 Secondary St",
        "city": "Ottawa",
        "provinceCode": "ON",
        "countryCode": "CA",
        "zip": "K1P 1J1"
      },
      "customer": {
        "id": "gid://shopify/Customer/544365967"
      }
    }
  }
}
``` 
*   ### Create an order and send email confirmations

#### Description

This mutation creates an order with minimal fulfillment details. By setting the `sendReceipt` and `sendFulfillmentReceipt` options to `true`, the customer receives email confirmations for both the order and shipment.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
    }
  }
}
``` #### Variables

```json
{
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "email": "foo@shopify.com",
    "fulfillmentStatus": "FULFILLED"
  },
  "options": {
    "sendReceipt": true,
    "sendFulfillmentReceipt": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
        }
      ],
      "email": "foo@shopify.com",
      "fulfillmentStatus": "FULFILLED"
    },
    "options": {
      "sendReceipt": true,
      "sendFulfillmentReceipt": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "email": "foo@shopify.com",
            "fulfillmentStatus": "FULFILLED"
        },
        "options": {
            "sendReceipt": true,
            "sendFulfillmentReceipt": true
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "email": "foo@shopify.com",
    "fulfillmentStatus": "FULFILLED"
  },
  "options": {
    "sendReceipt": true,
    "sendFulfillmentReceipt": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "email": "foo@shopify.com",
            "fulfillmentStatus": "FULFILLED"
        },
        "options": {
            "sendReceipt": true,
            "sendFulfillmentReceipt": true
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459974"
    }
  }
}
``` 
*   ### Create an order using a product variant ID

#### Description

This mutation creates an order using the supplied ID of a product variant. The response includes the created order's ID and associated line items.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      lineItems(first: 5) {
        nodes {
          id
          title
          quantity
          variant {
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
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id lineItems(first: 5) { nodes { id title quantity variant { id } } } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        lineItems(first: 5) {
          nodes {
            id
            title
            quantity
            variant {
              id
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        lineItems(first: 5) {
          nodes {
            id
            title
            quantity
            variant {
              id
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
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
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          lineItems(first: 5) {
            nodes {
              id
              title
              quantity
              variant {
                id
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459975",
      "lineItems": {
        "nodes": [
          {
            "id": "gid://shopify/LineItem/1071823185",
            "title": "Draft",
            "quantity": 1,
            "variant": {
              "id": "gid://shopify/ProductVariant/43729076"
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Create an order with a fixed amount off discount

#### Description

This mutation creates an order with a [fixed amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. The discount is applied in both the shop's currency (USD) and the presentment currency (CAD) to demonstrate support for handling multiple currencies.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      totalDiscountsSet {
        shopMoney {
          amount
          currencyCode
        }
        presentmentMoney {
          amount
          currencyCode
        }
      }
      discountCodes
      discountApplications(first: 5) {
        nodes {
          value {
            ... on MoneyV2 {
              amount
              currencyCode
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
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1,
        "priceSet": {
          "shopMoney": {
            "amount": 100,
            "currencyCode": "USD"
          },
          "presentmentMoney": {
            "amount": 75,
            "currencyCode": "CAD"
          }
        }
      }
    ],
    "presentmentCurrency": "CAD",
    "discountCode": {
      "itemFixedDiscountCode": {
        "amountSet": {
          "shopMoney": {
            "amount": 5,
            "currencyCode": "USD"
          },
          "presentmentMoney": {
            "amount": 9,
            "currencyCode": "CAD"
          }
        },
        "code": "BESTSALE"
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { totalDiscountsSet { shopMoney { amount currencyCode } presentmentMoney { amount currencyCode } } discountCodes discountApplications(first: 5) { nodes { value { ... on MoneyV2 { amount currencyCode } } } } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1,
          "priceSet": {
            "shopMoney": {
              "amount": 100,
              "currencyCode": "USD"
            },
            "presentmentMoney": {
              "amount": 75,
              "currencyCode": "CAD"
            }
          }
        }
      ],
      "presentmentCurrency": "CAD",
      "discountCode": {
        "itemFixedDiscountCode": {
          "amountSet": {
            "shopMoney": {
              "amount": 5,
              "currencyCode": "USD"
            },
            "presentmentMoney": {
              "amount": 9,
              "currencyCode": "CAD"
            }
          },
          "code": "BESTSALE"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        totalDiscountsSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
        discountCodes
        discountApplications(first: 5) {
          nodes {
            value {
              ... on MoneyV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1,
                    "priceSet": {
                        "shopMoney": {
                            "amount": 100,
                            "currencyCode": "USD"
                        },
                        "presentmentMoney": {
                            "amount": 75,
                            "currencyCode": "CAD"
                        }
                    }
                }
            ],
            "presentmentCurrency": "CAD",
            "discountCode": {
                "itemFixedDiscountCode": {
                    "amountSet": {
                        "shopMoney": {
                            "amount": 5,
                            "currencyCode": "USD"
                        },
                        "presentmentMoney": {
                            "amount": 9,
                            "currencyCode": "CAD"
                        }
                    },
                    "code": "BESTSALE"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        totalDiscountsSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
        discountCodes
        discountApplications(first: 5) {
          nodes {
            value {
              ... on MoneyV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1,
        "priceSet": {
          "shopMoney": {
            "amount": 100,
            "currencyCode": "USD"
          },
          "presentmentMoney": {
            "amount": 75,
            "currencyCode": "CAD"
          }
        }
      }
    ],
    "presentmentCurrency": "CAD",
    "discountCode": {
      "itemFixedDiscountCode": {
        "amountSet": {
          "shopMoney": {
            "amount": 5,
            "currencyCode": "USD"
          },
          "presentmentMoney": {
            "amount": 9,
            "currencyCode": "CAD"
          }
        },
        "code": "BESTSALE"
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
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          totalDiscountsSet {
            shopMoney {
              amount
              currencyCode
            }
            presentmentMoney {
              amount
              currencyCode
            }
          }
          discountCodes
          discountApplications(first: 5) {
            nodes {
              value {
                ... on MoneyV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1,
                    "priceSet": {
                        "shopMoney": {
                            "amount": 100,
                            "currencyCode": "USD"
                        },
                        "presentmentMoney": {
                            "amount": 75,
                            "currencyCode": "CAD"
                        }
                    }
                }
            ],
            "presentmentCurrency": "CAD",
            "discountCode": {
                "itemFixedDiscountCode": {
                    "amountSet": {
                        "shopMoney": {
                            "amount": 5,
                            "currencyCode": "USD"
                        },
                        "presentmentMoney": {
                            "amount": 9,
                            "currencyCode": "CAD"
                        }
                    },
                    "code": "BESTSALE"
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "totalDiscountsSet": {
        "shopMoney": {
          "amount": "5.0",
          "currencyCode": "USD"
        },
        "presentmentMoney": {
          "amount": "9.0",
          "currencyCode": "CAD"
        }
      },
      "discountCodes": [
        "BESTSALE"
      ],
      "discountApplications": {
        "nodes": [
          {
            "value": {
              "amount": "5.0",
              "currencyCode": "USD"
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Create an order with a percentage discount

#### Description

This mutation creates an order with a [percentage discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      totalDiscountsSet {
        shopMoney {
          amount
          currencyCode
        }
        presentmentMoney {
          amount
          currencyCode
        }
      }
      discountCodes
      discountApplications(first: 5) {
        nodes {
          value {
            ... on MoneyV2 {
              amount
              currencyCode
            }
            ... on PricingPercentageValue {
              percentage
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
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "discountCode": {
      "itemPercentageDiscountCode": {
        "percentage": 10,
        "code": "SUMMER SALE"
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { totalDiscountsSet { shopMoney { amount currencyCode } presentmentMoney { amount currencyCode } } discountCodes discountApplications(first: 5) { nodes { value { ... on MoneyV2 { amount currencyCode } ... on PricingPercentageValue { percentage } } } } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
        }
      ],
      "discountCode": {
        "itemPercentageDiscountCode": {
          "percentage": 10,
          "code": "SUMMER SALE"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        totalDiscountsSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
        discountCodes
        discountApplications(first: 5) {
          nodes {
            value {
              ... on MoneyV2 {
                amount
                currencyCode
              }
              ... on PricingPercentageValue {
                percentage
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "discountCode": {
                "itemPercentageDiscountCode": {
                    "percentage": 10,
                    "code": "SUMMER SALE"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        totalDiscountsSet {
          shopMoney {
            amount
            currencyCode
          }
          presentmentMoney {
            amount
            currencyCode
          }
        }
        discountCodes
        discountApplications(first: 5) {
          nodes {
            value {
              ... on MoneyV2 {
                amount
                currencyCode
              }
              ... on PricingPercentageValue {
                percentage
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "discountCode": {
      "itemPercentageDiscountCode": {
        "percentage": 10,
        "code": "SUMMER SALE"
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
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          totalDiscountsSet {
            shopMoney {
              amount
              currencyCode
            }
            presentmentMoney {
              amount
              currencyCode
            }
          }
          discountCodes
          discountApplications(first: 5) {
            nodes {
              value {
                ... on MoneyV2 {
                  amount
                  currencyCode
                }
                ... on PricingPercentageValue {
                  percentage
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "discountCode": {
                "itemPercentageDiscountCode": {
                    "percentage": 10,
                    "code": "SUMMER SALE"
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "totalDiscountsSet": {
        "shopMoney": {
          "amount": "1.0",
          "currencyCode": "USD"
        },
        "presentmentMoney": {
          "amount": "1.0",
          "currencyCode": "USD"
        }
      },
      "discountCodes": [
        "SUMMER SALE"
      ],
      "discountApplications": {
        "nodes": [
          {
            "value": {
              "percentage": 10
            }
          }
        ]
      }
    }
  }
}
``` 
*   ### Create an order with fulfillment details

#### Description

This mutation creates an order with [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) details, including the shipping address and tracking information. The `notifyCustomer` field is set to `true` to send an email notification to the customer about the shipment.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      fulfillments(first: 5) {
        id
        status
        location {
          id
        }
        originAddress {
          address1
          city
          countryCode
          provinceCode
          zip
        }
        trackingInfo {
          company
          number
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "fulfillment": {
      "locationId": "gid://shopify/Location/124656943",
      "originAddress": {
        "address1": "123 Main St",
        "city": "Ottawa",
        "countryCode": "CA",
        "provinceCode": "ON",
        "zip": "K1P 1J1"
      },
      "trackingCompany": "Canada Post",
      "trackingNumber": "1234567890",
      "shipmentStatus": "DELIVERED",
      "notifyCustomer": true
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id fulfillments(first: 5) { id status location { id } originAddress { address1 city countryCode provinceCode zip } trackingInfo { company number } } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
        }
      ],
      "fulfillment": {
        "locationId": "gid://shopify/Location/124656943",
        "originAddress": {
          "address1": "123 Main St",
          "city": "Ottawa",
          "countryCode": "CA",
          "provinceCode": "ON",
          "zip": "K1P 1J1"
        },
        "trackingCompany": "Canada Post",
        "trackingNumber": "1234567890",
        "shipmentStatus": "DELIVERED",
        "notifyCustomer": true
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        fulfillments(first: 5) {
          id
          status
          location {
            id
          }
          originAddress {
            address1
            city
            countryCode
            provinceCode
            zip
          }
          trackingInfo {
            company
            number
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "fulfillment": {
                "locationId": "gid://shopify/Location/124656943",
                "originAddress": {
                    "address1": "123 Main St",
                    "city": "Ottawa",
                    "countryCode": "CA",
                    "provinceCode": "ON",
                    "zip": "K1P 1J1"
                },
                "trackingCompany": "Canada Post",
                "trackingNumber": "1234567890",
                "shipmentStatus": "DELIVERED",
                "notifyCustomer": true
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        fulfillments(first: 5) {
          id
          status
          location {
            id
          }
          originAddress {
            address1
            city
            countryCode
            provinceCode
            zip
          }
          trackingInfo {
            company
            number
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "fulfillment": {
      "locationId": "gid://shopify/Location/124656943",
      "originAddress": {
        "address1": "123 Main St",
        "city": "Ottawa",
        "countryCode": "CA",
        "provinceCode": "ON",
        "zip": "K1P 1J1"
      },
      "trackingCompany": "Canada Post",
      "trackingNumber": "1234567890",
      "shipmentStatus": "DELIVERED",
      "notifyCustomer": true
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          fulfillments(first: 5) {
            id
            status
            location {
              id
            }
            originAddress {
              address1
              city
              countryCode
              provinceCode
              zip
            }
            trackingInfo {
              company
              number
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "fulfillment": {
                "locationId": "gid://shopify/Location/124656943",
                "originAddress": {
                    "address1": "123 Main St",
                    "city": "Ottawa",
                    "countryCode": "CA",
                    "provinceCode": "ON",
                    "zip": "K1P 1J1"
                },
                "trackingCompany": "Canada Post",
                "trackingNumber": "1234567890",
                "shipmentStatus": "DELIVERED",
                "notifyCustomer": true
            }
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459978",
      "fulfillments": [
        {
          "id": "gid://shopify/Fulfillment/1069019871",
          "status": "SUCCESS",
          "location": {
            "id": "gid://shopify/Location/124656943"
          },
          "originAddress": {
            "address1": "123 Main St",
            "city": "Ottawa",
            "countryCode": "CA",
            "provinceCode": "ON",
            "zip": "K1P 1J1"
          },
          "trackingInfo": [
            {
              "company": "Canada Post",
              "number": "1234567890"
            }
          ]
        }
      ]
    }
  }
}
``` 
*   ### Create an order with tax lines

#### Description

This mutation creates an order with [tax lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine). The order has a mix of taxable and non-taxable line items, and the total tax amount is split among the taxable line items proportionally based on price.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      totalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems(first: 5) {
        nodes {
          id
          title
          quantity
          variant {
            id
          }
          taxLines {
            title
            rate
            priceSet {
              shopMoney {
                amount
                currencyCode
              }
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
  "order": {
    "lineItems": [
      {
        "title": "Red Leather Coat",
        "priceSet": {
          "shopMoney": {
            "amount": 129.99,
            "currencyCode": "USD"
          }
        },
        "quantity": 1
      },
      {
        "title": "Blue Suede Shoes",
        "priceSet": {
          "shopMoney": {
            "amount": 85.95,
            "currencyCode": "USD"
          }
        },
        "quantity": 1,
        "taxable": false
      },
      {
        "title": "Raspberry Beret",
        "priceSet": {
          "shopMoney": {
            "amount": 19.99,
            "currencyCode": "USD"
          }
        },
        "quantity": 2
      }
    ],
    "taxLines": [
      {
        "priceSet": {
          "shopMoney": {
            "amount": 10.2,
            "currencyCode": "USD"
          }
        },
        "title": "State tax",
        "rate": 0.04
      },
      {
        "priceSet": {
          "shopMoney": {
            "amount": 4.25,
            "currencyCode": "USD"
          }
        },
        "title": "County tax",
        "rate": 0.02
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id totalTaxSet { shopMoney { amount currencyCode } } lineItems(first: 5) { nodes { id title quantity variant { id } taxLines { title rate priceSet { shopMoney { amount currencyCode } } } } } } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "title": "Red Leather Coat",
          "priceSet": {
            "shopMoney": {
              "amount": 129.99,
              "currencyCode": "USD"
            }
          },
          "quantity": 1
        },
        {
          "title": "Blue Suede Shoes",
          "priceSet": {
            "shopMoney": {
              "amount": 85.95,
              "currencyCode": "USD"
            }
          },
          "quantity": 1,
          "taxable": false
        },
        {
          "title": "Raspberry Beret",
          "priceSet": {
            "shopMoney": {
              "amount": 19.99,
              "currencyCode": "USD"
            }
          },
          "quantity": 2
        }
      ],
      "taxLines": [
        {
          "priceSet": {
            "shopMoney": {
              "amount": 10.2,
              "currencyCode": "USD"
            }
          },
          "title": "State tax",
          "rate": 0.04
        },
        {
          "priceSet": {
            "shopMoney": {
              "amount": 4.25,
              "currencyCode": "USD"
            }
          },
          "title": "County tax",
          "rate": 0.02
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        totalTaxSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 5) {
          nodes {
            id
            title
            quantity
            variant {
              id
            }
            taxLines {
              title
              rate
              priceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "title": "Red Leather Coat",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 129.99,
                            "currencyCode": "USD"
                        }
                    },
                    "quantity": 1
                },
                {
                    "title": "Blue Suede Shoes",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 85.95,
                            "currencyCode": "USD"
                        }
                    },
                    "quantity": 1,
                    "taxable": false
                },
                {
                    "title": "Raspberry Beret",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 19.99,
                            "currencyCode": "USD"
                        }
                    },
                    "quantity": 2
                }
            ],
            "taxLines": [
                {
                    "priceSet": {
                        "shopMoney": {
                            "amount": 10.2,
                            "currencyCode": "USD"
                        }
                    },
                    "title": "State tax",
                    "rate": 0.04
                },
                {
                    "priceSet": {
                        "shopMoney": {
                            "amount": 4.25,
                            "currencyCode": "USD"
                        }
                    },
                    "title": "County tax",
                    "rate": 0.02
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        totalTaxSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 5) {
          nodes {
            id
            title
            quantity
            variant {
              id
            }
            taxLines {
              title
              rate
              priceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "title": "Red Leather Coat",
        "priceSet": {
          "shopMoney": {
            "amount": 129.99,
            "currencyCode": "USD"
          }
        },
        "quantity": 1
      },
      {
        "title": "Blue Suede Shoes",
        "priceSet": {
          "shopMoney": {
            "amount": 85.95,
            "currencyCode": "USD"
          }
        },
        "quantity": 1,
        "taxable": false
      },
      {
        "title": "Raspberry Beret",
        "priceSet": {
          "shopMoney": {
            "amount": 19.99,
            "currencyCode": "USD"
          }
        },
        "quantity": 2
      }
    ],
    "taxLines": [
      {
        "priceSet": {
          "shopMoney": {
            "amount": 10.2,
            "currencyCode": "USD"
          }
        },
        "title": "State tax",
        "rate": 0.04
      },
      {
        "priceSet": {
          "shopMoney": {
            "amount": 4.25,
            "currencyCode": "USD"
          }
        },
        "title": "County tax",
        "rate": 0.02
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
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          totalTaxSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems(first: 5) {
            nodes {
              id
              title
              quantity
              variant {
                id
              }
              taxLines {
                title
                rate
                priceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "title": "Red Leather Coat",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 129.99,
                            "currencyCode": "USD"
                        }
                    },
                    "quantity": 1
                },
                {
                    "title": "Blue Suede Shoes",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 85.95,
                            "currencyCode": "USD"
                        }
                    },
                    "quantity": 1,
                    "taxable": false
                },
                {
                    "title": "Raspberry Beret",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 19.99,
                            "currencyCode": "USD"
                        }
                    },
                    "quantity": 2
                }
            ],
            "taxLines": [
                {
                    "priceSet": {
                        "shopMoney": {
                            "amount": 10.2,
                            "currencyCode": "USD"
                        }
                    },
                    "title": "State tax",
                    "rate": 0.04
                },
                {
                    "priceSet": {
                        "shopMoney": {
                            "amount": 4.25,
                            "currencyCode": "USD"
                        }
                    },
                    "title": "County tax",
                    "rate": 0.02
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459977",
      "totalTaxSet": {
        "shopMoney": {
          "amount": "14.45",
          "currencyCode": "USD"
        }
      },
      "lineItems": {
        "nodes": [
          {
            "id": "gid://shopify/LineItem/1071823187",
            "title": "Red Leather Coat",
            "quantity": 1,
            "variant": null,
            "taxLines": [
              {
                "title": "State tax",
                "rate": 0.04,
                "priceSet": {
                  "shopMoney": {
                    "amount": "7.81",
                    "currencyCode": "USD"
                  }
                }
              },
              {
                "title": "County tax",
                "rate": 0.02,
                "priceSet": {
                  "shopMoney": {
                    "amount": "3.26",
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          },
          {
            "id": "gid://shopify/LineItem/1071823188",
            "title": "Blue Suede Shoes",
            "quantity": 1,
            "variant": null,
            "taxLines": []
          },
          {
            "id": "gid://shopify/LineItem/1071823189",
            "title": "Raspberry Beret",
            "quantity": 2,
            "variant": null,
            "taxLines": [
              {
                "title": "State tax",
                "rate": 0.04,
                "priceSet": {
                  "shopMoney": {
                    "amount": "2.39",
                    "currencyCode": "USD"
                  }
                }
              },
              {
                "title": "County tax",
                "rate": 0.02,
                "priceSet": {
                  "shopMoney": {
                    "amount": "0.99",
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### Create an order without sending email confirmations

#### Description

This mutation creates an order with minimal fulfillment details. The `sendReceipt` and `sendFulfillmentReceipt` options aren't included in the request, so the customer doesn't receive any email confirmations for the order or shipment.

#### Query

```graphql
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
    }
  }
}
``` #### Variables

```json
{
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "email": "foo@shopify.com",
    "fulfillmentStatus": "FULFILLED"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id } } }",
 "variables": {
    "order": {
      "lineItems": [
        {
          "variantId": "gid://shopify/ProductVariant/43729076",
          "quantity": 1
        }
      ],
      "email": "foo@shopify.com",
      "fulfillmentStatus": "FULFILLED"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
      }
    }
  }`,
  {
    variables: {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "email": "foo@shopify.com",
            "fulfillmentStatus": "FULFILLED"
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
      }
    }
  }
QUERY

variables = {
  "order": {
    "lineItems": [
      {
        "variantId": "gid://shopify/ProductVariant/43729076",
        "quantity": 1
      }
    ],
    "email": "foo@shopify.com",
    "fulfillmentStatus": "FULFILLED"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
        }
      }
    }`,
    "variables": {
        "order": {
            "lineItems": [
                {
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "quantity": 1
                }
            ],
            "email": "foo@shopify.com",
            "fulfillmentStatus": "FULFILLED"
        }
    },
  },
});
``` #### Response

```json
{
  "orderCreate": {
    "userErrors": [],
    "order": {
      "id": "gid://shopify/Order/1073459969"
    }
  }
}
``` 
*   ### orderCreate reference

Examples
--------

Create a comprehensive order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20orderCreate(%24order%3A%20OrderCreateOrderInput!%2C%20%24options%3A%20OrderCreateOptionsInput)%20%7B%0A%20%20orderCreate(order%3A%20%24order%2C%20options%3A%20%24options)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20order%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20totalTaxSet%20%7B%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20lineItems(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20variant%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20%20%20taxLines%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20%20%20rate%0A%20%20%20%20%20%20%20%20%20%20%20%20priceSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22order%22%3A%20%7B%0A%20%20%20%20%22currency%22%3A%20%22EUR%22%2C%0A%20%20%20%20%22lineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22title%22%3A%20%22Big%20Brown%20Bear%20Boots%22%2C%0A%20%20%20%20%20%20%20%20%22priceSet%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22shopMoney%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%2074.99%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22EUR%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%203%2C%0A%20%20%20%20%20%20%20%20%22taxLines%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22priceSet%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22shopMoney%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%2013.5%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22EUR%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22rate%22%3A%200.06%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22State%20tax%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22transactions%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22kind%22%3A%20%22SALE%22%2C%0A%20%20%20%20%20%20%20%20%22status%22%3A%20%22SUCCESS%22%2C%0A%20%20%20%20%20%20%20%20%22amountSet%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22shopMoney%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%20238.47%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22EUR%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

 mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {

 orderCreate(order: $order, options: $options) {

 userErrors {

 field

 message

 }

 order {

 id

 totalTaxSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 lineItems(first: 5) {

 nodes {

 variant {

 id

 }

 id

 title

 quantity

 taxLines {

 title

 rate

 priceSet {

 shopMoney {

 amount

 currencyCode

 }

 }

 }

```
mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
  orderCreate(order: $order, options: $options) {
    userErrors {
      field
      message
    }
    order {
      id
      totalTaxSet {
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems(first: 5) {
        nodes {
          variant {
            id
          }
          id
          title
          quantity
          taxLines {
            title
            rate
            priceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
          }
        }
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
"query": "mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) { orderCreate(order: $order, options: $options) { userErrors { field message } order { id totalTaxSet { shopMoney { amount currencyCode } } lineItems(first: 5) { nodes { variant { id } id title quantity taxLines { title rate priceSet { shopMoney { amount currencyCode } } } } } } } }",
 "variables": {
    "order": {
      "currency": "EUR",
      "lineItems": [
        {
          "title": "Big Brown Bear Boots",
          "priceSet": {
            "shopMoney": {
              "amount": 74.99,
              "currencyCode": "EUR"
            }
          },
          "quantity": 3,
          "taxLines": [
            {
              "priceSet": {
                "shopMoney": {
                  "amount": 13.5,
                  "currencyCode": "EUR"
                }
              },
              "rate": 0.06,
              "title": "State tax"
            }
          ]
        }
      ],
      "transactions": [
        {
          "kind": "SALE",
          "status": "SUCCESS",
          "amountSet": {
            "shopMoney": {
              "amount": 238.47,
              "currencyCode": "EUR"
            }
          }
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        totalTaxSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 5) {
          nodes {
            variant {
              id
            }
            id
            title
            quantity
            taxLines {
              title
              rate
              priceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "order": {
            "currency": "EUR",
            "lineItems": [
                {
                    "title": "Big Brown Bear Boots",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 74.99,
                            "currencyCode": "EUR"
                        }
                    },
                    "quantity": 3,
                    "taxLines": [
                        {
                            "priceSet": {
                                "shopMoney": {
                                    "amount": 13.5,
                                    "currencyCode": "EUR"
                                }
                            },
                            "rate": 0.06,
                            "title": "State tax"
                        }
                    ]
                }
            ],
            "transactions": [
                {
                    "kind": "SALE",
                    "status": "SUCCESS",
                    "amountSet": {
                        "shopMoney": {
                            "amount": 238.47,
                            "currencyCode": "EUR"
                        }
                    }
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
    "query": `mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
      orderCreate(order: $order, options: $options) {
        userErrors {
          field
          message
        }
        order {
          id
          totalTaxSet {
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems(first: 5) {
            nodes {
              variant {
                id
              }
              id
              title
              quantity
              taxLines {
                title
                rate
                priceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "order": {
            "currency": "EUR",
            "lineItems": [
                {
                    "title": "Big Brown Bear Boots",
                    "priceSet": {
                        "shopMoney": {
                            "amount": 74.99,
                            "currencyCode": "EUR"
                        }
                    },
                    "quantity": 3,
                    "taxLines": [
                        {
                            "priceSet": {
                                "shopMoney": {
                                    "amount": 13.5,
                                    "currencyCode": "EUR"
                                }
                            },
                            "rate": 0.06,
                            "title": "State tax"
                        }
                    ]
                }
            ],
            "transactions": [
                {
                    "kind": "SALE",
                    "status": "SUCCESS",
                    "amountSet": {
                        "shopMoney": {
                            "amount": 238.47,
                            "currencyCode": "EUR"
                        }
                    }
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
  mutation orderCreate($order: OrderCreateOrderInput!, $options: OrderCreateOptionsInput) {
    orderCreate(order: $order, options: $options) {
      userErrors {
        field
        message
      }
      order {
        id
        totalTaxSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 5) {
          nodes {
            variant {
              id
            }
            id
            title
            quantity
            taxLines {
              title
              rate
              priceSet {
                shopMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "order": {
    "currency": "EUR",
    "lineItems": [
      {
        "title": "Big Brown Bear Boots",
        "priceSet": {
          "shopMoney": {
            "amount": 74.99,
            "currencyCode": "EUR"
          }
        },
        "quantity": 3,
        "taxLines": [
          {
            "priceSet": {
              "shopMoney": {
                "amount": 13.5,
                "currencyCode": "EUR"
              }
            },
            "rate": 0.06,
            "title": "State tax"
          }
        ]
      }
    ],
    "transactions": [
      {
        "kind": "SALE",
        "status": "SUCCESS",
        "amountSet": {
          "shopMoney": {
            "amount": 238.47,
            "currencyCode": "EUR"
          }
        }
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

⌄

⌄

⌄

⌄

⌄

{

"order": {

"currency": "EUR",

"lineItems": [

{

"title": "Big Brown Bear Boots",

"priceSet": {

"shopMoney": {

"amount": 74.99,

"currencyCode": "EUR"

}

},

"quantity": 3,

"taxLines": [

{

"priceSet": {

"shopMoney": {

"amount": 13.5,

"currencyCode": "EUR"

}

},

"rate": 0.06,

"title": "State tax"

}

]

}

],

"transactions": [

{

"kind": "SALE",

"status": "SUCCESS",

"amountSet": {

"shopMoney": {

"amount": 238.47,

"currencyCode": "EUR"

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

{

"orderCreate": {

"userErrors": [],

"order": {

"id": "gid://shopify/Order/1073459971",

"totalTaxSet": {

"shopMoney": {

"amount": "13.5",

"currencyCode": "EUR"

}

},

"lineItems": {

"nodes": [

{

"variant": null,

"id": "gid://shopify/LineItem/1071823181",

"title": "Big Brown Bear Boots",

"quantity": 3,

"taxLines": [

{

"title": "State tax",

"rate": 0.06,

"priceSet": {

"shopMoney": {

"amount": "13.5",

"currencyCode": "EUR"

}

}

}

]

}

]

}

}

}

}


---
*Content truncated at "Updates" section*