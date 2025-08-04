---
title: "subscriptionContractCreate"
description: "Shopify GraphQL Admin API documentation for subscriptioncontractcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: subscriptionContractCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate

Markdown Content:
subscriptionContractCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#main-content)

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

[Anchor to subscriptionContractCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#top)
subscription Contract Create
============================

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage_orders_information permission.

Creates a Subscription Contract Draft. You can submit all the desired information for the draft using [Subscription Draft Input object](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput). You can also update the draft using the [Subscription Contract Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractUpdate) mutation. The draft is not saved until you call the [Subscription Draft Commit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftCommit) mutation.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#arguments-input)input

•[Subscription Contract Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractCreateInput)

required

The properties of the new Subscription Contract.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to SubscriptionContractCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#returns)Subscription Contract Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to draft](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#returns-draft)draft

•[Subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

The Subscription Contract object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptioncontractcreate#returns-userErrors)user Errors

•[[Subscription Draft User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a subscription contract with draft input

#### Query

```graphql
mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
  subscriptionContractCreate(input: $input) {
    draft {
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
  "input": {
    "customerId": "gid://shopify/Customer/544365967",
    "currencyCode": "USD",
    "nextBillingDate": "2024-10-11T21:11:01-04:00",
    "contract": {
      "status": "ACTIVE",
      "note": "Note of a thing.",
      "customAttributes": [
        {
          "key": "Test",
          "value": "Test value"
        }
      ],
      "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
      "billingPolicy": {
        "minCycles": 3,
        "maxCycles": 12,
        "intervalCount": 1,
        "interval": "MONTH",
        "anchors": [
          {
            "type": "MONTHDAY",
            "day": 12
          }
        ]
      },
      "deliveryPolicy": {
        "intervalCount": 1,
        "interval": "MONTH",
        "anchors": [
          {
            "type": "MONTHDAY",
            "day": 13
          }
        ]
      },
      "deliveryPrice": 2.99,
      "deliveryMethod": {
        "shipping": {
          "address": {
            "firstName": "Mont",
            "lastName": "Réal",
            "address1": "490 Rue De La Gauchetière O",
            "country": "Canada",
            "province": "Québec",
            "phone": "+16135551212",
            "zip": "H2Z 0B3",
            "city": "Montréal"
          },
          "shippingOption": {
            "title": "Subscription shipping",
            "presentmentTitle": "Translated shipping for subscription",
            "description": "5-7 Days",
            "code": "GROUND",
            "carrierServiceId": null
          }
        }
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
"query": "mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) { subscriptionContractCreate(input: $input) { draft { id } userErrors { field message } } }",
 "variables": {
    "input": {
      "customerId": "gid://shopify/Customer/544365967",
      "currencyCode": "USD",
      "nextBillingDate": "2024-10-11T21:11:01-04:00",
      "contract": {
        "status": "ACTIVE",
        "note": "Note of a thing.",
        "customAttributes": [
          {
            "key": "Test",
            "value": "Test value"
          }
        ],
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "billingPolicy": {
          "minCycles": 3,
          "maxCycles": 12,
          "intervalCount": 1,
          "interval": "MONTH",
          "anchors": [
            {
              "type": "MONTHDAY",
              "day": 12
            }
          ]
        },
        "deliveryPolicy": {
          "intervalCount": 1,
          "interval": "MONTH",
          "anchors": [
            {
              "type": "MONTHDAY",
              "day": 13
            }
          ]
        },
        "deliveryPrice": 2.99,
        "deliveryMethod": {
          "shipping": {
            "address": {
              "firstName": "Mont",
              "lastName": "Réal",
              "address1": "490 Rue De La Gauchetière O",
              "country": "Canada",
              "province": "Québec",
              "phone": "+16135551212",
              "zip": "H2Z 0B3",
              "city": "Montréal"
            },
            "shippingOption": {
              "title": "Subscription shipping",
              "presentmentTitle": "Translated shipping for subscription",
              "description": "5-7 Days",
              "code": "GROUND",
              "carrierServiceId": null
            }
          }
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
  mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
    subscriptionContractCreate(input: $input) {
      draft {
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
        "input": {
            "customerId": "gid://shopify/Customer/544365967",
            "currencyCode": "USD",
            "nextBillingDate": "2024-10-11T21:11:01-04:00",
            "contract": {
                "status": "ACTIVE",
                "note": "Note of a thing.",
                "customAttributes": [
                    {
                        "key": "Test",
                        "value": "Test value"
                    }
                ],
                "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
                "billingPolicy": {
                    "minCycles": 3,
                    "maxCycles": 12,
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 12
                        }
                    ]
                },
                "deliveryPolicy": {
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 13
                        }
                    ]
                },
                "deliveryPrice": 2.99,
                "deliveryMethod": {
                    "shipping": {
                        "address": {
                            "firstName": "Mont",
                            "lastName": "Réal",
                            "address1": "490 Rue De La Gauchetière O",
                            "country": "Canada",
                            "province": "Québec",
                            "phone": "+16135551212",
                            "zip": "H2Z 0B3",
                            "city": "Montréal"
                        },
                        "shippingOption": {
                            "title": "Subscription shipping",
                            "presentmentTitle": "Translated shipping for subscription",
                            "description": "5-7 Days",
                            "code": "GROUND",
                            "carrierServiceId": null
                        }
                    }
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
  mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
    subscriptionContractCreate(input: $input) {
      draft {
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
  "input": {
    "customerId": "gid://shopify/Customer/544365967",
    "currencyCode": "USD",
    "nextBillingDate": "2024-10-11T21:11:01-04:00",
    "contract": {
      "status": "ACTIVE",
      "note": "Note of a thing.",
      "customAttributes": [
        {
          "key": "Test",
          "value": "Test value"
        }
      ],
      "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
      "billingPolicy": {
        "minCycles": 3,
        "maxCycles": 12,
        "intervalCount": 1,
        "interval": "MONTH",
        "anchors": [
          {
            "type": "MONTHDAY",
            "day": 12
          }
        ]
      },
      "deliveryPolicy": {
        "intervalCount": 1,
        "interval": "MONTH",
        "anchors": [
          {
            "type": "MONTHDAY",
            "day": 13
          }
        ]
      },
      "deliveryPrice": 2.99,
      "deliveryMethod": {
        "shipping": {
          "address": {
            "firstName": "Mont",
            "lastName": "Réal",
            "address1": "490 Rue De La Gauchetière O",
            "country": "Canada",
            "province": "Québec",
            "phone": "+16135551212",
            "zip": "H2Z 0B3",
            "city": "Montréal"
          },
          "shippingOption": {
            "title": "Subscription shipping",
            "presentmentTitle": "Translated shipping for subscription",
            "description": "5-7 Days",
            "code": "GROUND",
            "carrierServiceId": null
          }
        }
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
    "query": `mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
      subscriptionContractCreate(input: $input) {
        draft {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "customerId": "gid://shopify/Customer/544365967",
            "currencyCode": "USD",
            "nextBillingDate": "2024-10-11T21:11:01-04:00",
            "contract": {
                "status": "ACTIVE",
                "note": "Note of a thing.",
                "customAttributes": [
                    {
                        "key": "Test",
                        "value": "Test value"
                    }
                ],
                "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
                "billingPolicy": {
                    "minCycles": 3,
                    "maxCycles": 12,
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 12
                        }
                    ]
                },
                "deliveryPolicy": {
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 13
                        }
                    ]
                },
                "deliveryPrice": 2.99,
                "deliveryMethod": {
                    "shipping": {
                        "address": {
                            "firstName": "Mont",
                            "lastName": "Réal",
                            "address1": "490 Rue De La Gauchetière O",
                            "country": "Canada",
                            "province": "Québec",
                            "phone": "+16135551212",
                            "zip": "H2Z 0B3",
                            "city": "Montréal"
                        },
                        "shippingOption": {
                            "title": "Subscription shipping",
                            "presentmentTitle": "Translated shipping for subscription",
                            "description": "5-7 Days",
                            "code": "GROUND",
                            "carrierServiceId": null
                        }
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "subscriptionContractCreate": {
    "draft": {
      "id": "gid://shopify/SubscriptionDraft/1055577422"
    },
    "userErrors": []
  }
}
``` 
*   ### subscriptionContractCreate reference

Examples
--------

Create a subscription contract with draft input

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20createSubscriptionContract(%24input%3A%20SubscriptionContractCreateInput!)%20%7B%0A%20%20subscriptionContractCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20draft%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%20%20%22currencyCode%22%3A%20%22USD%22%2C%0A%20%20%20%20%22nextBillingDate%22%3A%20%222024-10-11T21%3A11%3A01-04%3A00%22%2C%0A%20%20%20%20%22contract%22%3A%20%7B%0A%20%20%20%20%20%20%22status%22%3A%20%22ACTIVE%22%2C%0A%20%20%20%20%20%20%22note%22%3A%20%22Note%20of%20a%20thing.%22%2C%0A%20%20%20%20%20%20%22customAttributes%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22key%22%3A%20%22Test%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22Test%20value%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22paymentMethodId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomerPaymentMethod%2Fb7cc6e3267aace169e516ed48be72dff%22%2C%0A%20%20%20%20%20%20%22billingPolicy%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22minCycles%22%3A%203%2C%0A%20%20%20%20%20%20%20%20%22maxCycles%22%3A%2012%2C%0A%20%20%20%20%20%20%20%20%22intervalCount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22interval%22%3A%20%22MONTH%22%2C%0A%20%20%20%20%20%20%20%20%22anchors%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22MONTHDAY%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22day%22%3A%2012%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22deliveryPolicy%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22intervalCount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22interval%22%3A%20%22MONTH%22%2C%0A%20%20%20%20%20%20%20%20%22anchors%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22MONTHDAY%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22day%22%3A%2013%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22deliveryPrice%22%3A%202.99%2C%0A%20%20%20%20%20%20%22deliveryMethod%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22shipping%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22address%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22firstName%22%3A%20%22Mont%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22lastName%22%3A%20%22R%C3%A9al%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22address1%22%3A%20%22490%20Rue%20De%20La%20Gaucheti%C3%A8re%20O%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22country%22%3A%20%22Canada%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22province%22%3A%20%22Qu%C3%A9bec%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22phone%22%3A%20%22%2B16135551212%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22zip%22%3A%20%22H2Z%200B3%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22city%22%3A%20%22Montr%C3%A9al%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%22shippingOption%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Subscription%20shipping%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22presentmentTitle%22%3A%20%22Translated%20shipping%20for%20subscription%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22description%22%3A%20%225-7%20Days%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22GROUND%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22carrierServiceId%22%3A%20null%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {

 subscriptionContractCreate(input: $input) {

 draft {

 id

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

"customerId":"gid://shopify/Customer/544365967",

"currencyCode":"USD",

"nextBillingDate":"2024-10-11T21:11:01-04:00",

"contract":{

"status":"ACTIVE",

"note":"Note of a thing.",

"customAttributes":[

{

"key":"Test",

"value":"Test value"

}

],

"paymentMethodId":"gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",

"billingPolicy":{

"minCycles":3,

"maxCycles":12,

"intervalCount":1,

"interval":"MONTH",

```
mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
  subscriptionContractCreate(input: $input) {
    draft {
      id
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
"query": "mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) { subscriptionContractCreate(input: $input) { draft { id } userErrors { field message } } }",
 "variables": {
    "input": {
      "customerId": "gid://shopify/Customer/544365967",
      "currencyCode": "USD",
      "nextBillingDate": "2024-10-11T21:11:01-04:00",
      "contract": {
        "status": "ACTIVE",
        "note": "Note of a thing.",
        "customAttributes": [
          {
            "key": "Test",
            "value": "Test value"
          }
        ],
        "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
        "billingPolicy": {
          "minCycles": 3,
          "maxCycles": 12,
          "intervalCount": 1,
          "interval": "MONTH",
          "anchors": [
            {
              "type": "MONTHDAY",
              "day": 12
            }
          ]
        },
        "deliveryPolicy": {
          "intervalCount": 1,
          "interval": "MONTH",
          "anchors": [
            {
              "type": "MONTHDAY",
              "day": 13
            }
          ]
        },
        "deliveryPrice": 2.99,
        "deliveryMethod": {
          "shipping": {
            "address": {
              "firstName": "Mont",
              "lastName": "Réal",
              "address1": "490 Rue De La Gauchetière O",
              "country": "Canada",
              "province": "Québec",
              "phone": "+16135551212",
              "zip": "H2Z 0B3",
              "city": "Montréal"
            },
            "shippingOption": {
              "title": "Subscription shipping",
              "presentmentTitle": "Translated shipping for subscription",
              "description": "5-7 Days",
              "code": "GROUND",
              "carrierServiceId": null
            }
          }
        }
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
    subscriptionContractCreate(input: $input) {
      draft {
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
        "input": {
            "customerId": "gid://shopify/Customer/544365967",
            "currencyCode": "USD",
            "nextBillingDate": "2024-10-11T21:11:01-04:00",
            "contract": {
                "status": "ACTIVE",
                "note": "Note of a thing.",
                "customAttributes": [
                    {
                        "key": "Test",
                        "value": "Test value"
                    }
                ],
                "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
                "billingPolicy": {
                    "minCycles": 3,
                    "maxCycles": 12,
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 12
                        }
                    ]
                },
                "deliveryPolicy": {
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 13
                        }
                    ]
                },
                "deliveryPrice": 2.99,
                "deliveryMethod": {
                    "shipping": {
                        "address": {
                            "firstName": "Mont",
                            "lastName": "Réal",
                            "address1": "490 Rue De La Gauchetière O",
                            "country": "Canada",
                            "province": "Québec",
                            "phone": "+16135551212",
                            "zip": "H2Z 0B3",
                            "city": "Montréal"
                        },
                        "shippingOption": {
                            "title": "Subscription shipping",
                            "presentmentTitle": "Translated shipping for subscription",
                            "description": "5-7 Days",
                            "code": "GROUND",
                            "carrierServiceId": null
                        }
                    }
                }
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
    "query": `mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
      subscriptionContractCreate(input: $input) {
        draft {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "customerId": "gid://shopify/Customer/544365967",
            "currencyCode": "USD",
            "nextBillingDate": "2024-10-11T21:11:01-04:00",
            "contract": {
                "status": "ACTIVE",
                "note": "Note of a thing.",
                "customAttributes": [
                    {
                        "key": "Test",
                        "value": "Test value"
                    }
                ],
                "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
                "billingPolicy": {
                    "minCycles": 3,
                    "maxCycles": 12,
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 12
                        }
                    ]
                },
                "deliveryPolicy": {
                    "intervalCount": 1,
                    "interval": "MONTH",
                    "anchors": [
                        {
                            "type": "MONTHDAY",
                            "day": 13
                        }
                    ]
                },
                "deliveryPrice": 2.99,
                "deliveryMethod": {
                    "shipping": {
                        "address": {
                            "firstName": "Mont",
                            "lastName": "Réal",
                            "address1": "490 Rue De La Gauchetière O",
                            "country": "Canada",
                            "province": "Québec",
                            "phone": "+16135551212",
                            "zip": "H2Z 0B3",
                            "city": "Montréal"
                        },
                        "shippingOption": {
                            "title": "Subscription shipping",
                            "presentmentTitle": "Translated shipping for subscription",
                            "description": "5-7 Days",
                            "code": "GROUND",
                            "carrierServiceId": null
                        }
                    }
                }
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
  mutation createSubscriptionContract($input: SubscriptionContractCreateInput!) {
    subscriptionContractCreate(input: $input) {
      draft {
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
  "input": {
    "customerId": "gid://shopify/Customer/544365967",
    "currencyCode": "USD",
    "nextBillingDate": "2024-10-11T21:11:01-04:00",
    "contract": {
      "status": "ACTIVE",
      "note": "Note of a thing.",
      "customAttributes": [
        {
          "key": "Test",
          "value": "Test value"
        }
      ],
      "paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",
      "billingPolicy": {
        "minCycles": 3,
        "maxCycles": 12,
        "intervalCount": 1,
        "interval": "MONTH",
        "anchors": [
          {
            "type": "MONTHDAY",
            "day": 12
          }
        ]
      },
      "deliveryPolicy": {
        "intervalCount": 1,
        "interval": "MONTH",
        "anchors": [
          {
            "type": "MONTHDAY",
            "day": 13
          }
        ]
      },
      "deliveryPrice": 2.99,
      "deliveryMethod": {
        "shipping": {
          "address": {
            "firstName": "Mont",
            "lastName": "Réal",
            "address1": "490 Rue De La Gauchetière O",
            "country": "Canada",
            "province": "Québec",
            "phone": "+16135551212",
            "zip": "H2Z 0B3",
            "city": "Montréal"
          },
          "shippingOption": {
            "title": "Subscription shipping",
            "presentmentTitle": "Translated shipping for subscription",
            "description": "5-7 Days",
            "code": "GROUND",
            "carrierServiceId": null
          }
        }
      }
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

{

"input": {

"customerId": "gid://shopify/Customer/544365967",

"currencyCode": "USD",

"nextBillingDate": "2024-10-11T21:11:01-04:00",

"contract": {

"status": "ACTIVE",

"note": "Note of a thing.",

"customAttributes": [

{

"key": "Test",

"value": "Test value"

}

],

"paymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff",

"billingPolicy": {

"minCycles": 3,

"maxCycles": 12,

"intervalCount": 1,

"interval": "MONTH",

"anchors": [

{

"type": "MONTHDAY",

"day": 12

}

]

},

"deliveryPolicy": {

"intervalCount": 1,

"interval": "MONTH",

"anchors": [

{

"type": "MONTHDAY",

"day": 13

}

]

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

"subscriptionContractCreate": {

"draft": {

"id": "gid://shopify/SubscriptionDraft/1055577422"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*