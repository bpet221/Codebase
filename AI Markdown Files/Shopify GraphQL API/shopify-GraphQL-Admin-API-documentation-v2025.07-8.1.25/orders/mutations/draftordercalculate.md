---
title: "draftOrderCalculate"
description: "Shopify GraphQL Admin API documentation for draftordercalculate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrderCalculate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate

Markdown Content:
draftOrderCalculate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#main-content)

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

[Anchor to draftOrderCalculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#top)
draft Order Calculate
=====================

mutation

Requires `write_draft_orders` access scope.

Calculates the properties of a draft order. Useful for determining information such as total taxes or price without actually creating a draft order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#arguments-input)input

•[Draft Order Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

required

The fields for the draft order.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DraftOrderCalculatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#returns)Draft Order Calculate Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to calculatedDraftOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#returns-calculatedDraftOrder)calculated Draft Order

•[Calculated Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder)

The calculated properties for a draft order.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftordercalculate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Calculate properties of a draft order

#### Description

Calculate the properties of a proposed draft order

#### Query

```graphql
mutation CalculateDraftOrder($input: DraftOrderInput!) {
  draftOrderCalculate(input: $input) {
    calculatedDraftOrder {
      customer {
        id
        email
        firstName
        numberOfOrders
        defaultAddress {
          id
          firstName
          lastName
          address1
          address2
          city
          provinceCode
          zip
          countryCodeV2
        }
        taxExempt
      }
      billingAddressMatchesShippingAddress
      totalPriceSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems {
        appliedDiscount {
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          value
          valueType
          description
        }
        discountedTotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        product {
          id
          title
        }
        quantity
        requiresShipping
        sku
        taxable
        title
        variantTitle
        variant {
          id
        }
        weight {
          value
          unit
        }
      }
      totalTaxSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      totalDiscountsSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      shippingLine {
        id
        custom
        shippingRateHandle
        title
        originalPriceSet {
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
      presentmentCurrencyCode
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
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "originalUnitPrice": 10,
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { calculatedDraftOrder { customer { id email firstName numberOfOrders defaultAddress { id firstName lastName address1 address2 city provinceCode zip countryCodeV2 } taxExempt } billingAddressMatchesShippingAddress totalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } lineItems { appliedDiscount { amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } value valueType description } discountedTotalSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } product { id title } quantity requiresShipping sku taxable title variantTitle variant { id } weight { value unit } } totalTaxSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } totalDiscountsSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } shippingLine { id custom shippingRateHandle title originalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } presentmentCurrencyCode } userErrors { field message } } }",
 "variables": {
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "originalUnitPrice": 10,
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
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
        presentmentCurrencyCode
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
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "originalUnitPrice": 10,
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
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
        presentmentCurrencyCode
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
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "originalUnitPrice": 10,
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          customer {
            id
            email
            firstName
            numberOfOrders
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              provinceCode
              zip
              countryCodeV2
            }
            taxExempt
          }
          billingAddressMatchesShippingAddress
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          shippingLine {
            id
            custom
            shippingRateHandle
            title
            originalPriceSet {
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
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "originalUnitPrice": 10,
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCalculate": {
    "calculatedDraftOrder": {
      "customer": {
        "id": "gid://shopify/Customer/544365967",
        "email": "bob@example.com",
        "firstName": "Bob",
        "numberOfOrders": "25",
        "defaultAddress": {
          "id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",
          "firstName": "Bob",
          "lastName": "Bobsen",
          "address1": "123 Amoebobacterieae St",
          "address2": "",
          "city": "Ottawa",
          "provinceCode": "ON",
          "zip": "K2P0V6",
          "countryCodeV2": "CA"
        },
        "taxExempt": false
      },
      "billingAddressMatchesShippingAddress": false,
      "totalPriceSet": {
        "presentmentMoney": {
          "amount": "28.05",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "22.44",
          "currencyCode": "USD"
        }
      },
      "lineItems": [
        {
          "appliedDiscount": {
            "amountSet": {
              "presentmentMoney": {
                "amount": "6.38",
                "currencyCode": "CAD"
              },
              "shopMoney": {
                "amount": "5.1",
                "currencyCode": "USD"
              }
            },
            "value": 5,
            "valueType": "FIXED_AMOUNT",
            "description": "Promo"
          },
          "discountedTotalSet": {
            "presentmentMoney": {
              "amount": "6.61",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "5.29",
              "currencyCode": "USD"
            }
          },
          "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Draft"
          },
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "Draft",
          "variantTitle": "151cm",
          "variant": {
            "id": "gid://shopify/ProductVariant/43729076"
          },
          "weight": {
            "value": 1,
            "unit": "KILOGRAMS"
          }
        },
        {
          "appliedDiscount": null,
          "discountedTotalSet": {
            "presentmentMoney": {
              "amount": "25.98",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "20.78",
              "currencyCode": "USD"
            }
          },
          "product": null,
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantTitle": null,
          "variant": null,
          "weight": {
            "value": 1.2,
            "unit": "KILOGRAMS"
          }
        }
      ],
      "totalTaxSet": {
        "presentmentMoney": {
          "amount": "1.84",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "1.47",
          "currencyCode": "USD"
        }
      },
      "totalDiscountsSet": {
        "presentmentMoney": {
          "amount": "12.76",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "10.21",
          "currencyCode": "USD"
        }
      },
      "shippingLine": {
        "id": null,
        "custom": true,
        "shippingRateHandle": null,
        "title": "Free shipping",
        "originalPriceSet": {
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "CAD"
          },
          "shopMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          }
        }
      },
      "presentmentCurrencyCode": "CAD"
    },
    "userErrors": []
  }
}
``` 
*   ### Calculate properties of a draft order with markets context

#### Description

Calculate the properties of a proposed draft order with market specific context

#### Query

```graphql
mutation CalculateDraftOrder($input: DraftOrderInput!) {
  draftOrderCalculate(input: $input) {
    calculatedDraftOrder {
      purchasingEntity {
        ... on Customer {
          firstName
        }
      }
      totalPriceSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems {
        appliedDiscount {
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          value
          valueType
          description
        }
        discountedTotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        product {
          id
          title
        }
        quantity
        requiresShipping
        sku
        taxable
        title
        variantTitle
        variant {
          id
        }
        weight {
          value
          unit
        }
      }
      totalTaxSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      totalDiscountsSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      presentmentCurrencyCode
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
    "presentmentCurrencyCode": "CAD",
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { calculatedDraftOrder { purchasingEntity { ... on Customer { firstName } } totalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } lineItems { appliedDiscount { amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } value valueType description } discountedTotalSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } product { id title } quantity requiresShipping sku taxable title variantTitle variant { id } weight { value unit } } totalTaxSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } totalDiscountsSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } presentmentCurrencyCode } userErrors { field message } } }",
 "variables": {
    "input": {
      "presentmentCurrencyCode": "CAD",
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        purchasingEntity {
          ... on Customer {
            firstName
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        presentmentCurrencyCode
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
            "presentmentCurrencyCode": "CAD",
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        purchasingEntity {
          ... on Customer {
            firstName
          }
        }
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        presentmentCurrencyCode
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
    "presentmentCurrencyCode": "CAD",
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          purchasingEntity {
            ... on Customer {
              firstName
            }
          }
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "presentmentCurrencyCode": "CAD",
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCalculate": {
    "calculatedDraftOrder": {
      "purchasingEntity": {
        "firstName": "Bob"
      },
      "totalPriceSet": {
        "presentmentMoney": {
          "amount": "28.05",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "22.44",
          "currencyCode": "USD"
        }
      },
      "lineItems": [
        {
          "appliedDiscount": {
            "amountSet": {
              "presentmentMoney": {
                "amount": "6.38",
                "currencyCode": "CAD"
              },
              "shopMoney": {
                "amount": "5.1",
                "currencyCode": "USD"
              }
            },
            "value": 5,
            "valueType": "FIXED_AMOUNT",
            "description": "Promo"
          },
          "discountedTotalSet": {
            "presentmentMoney": {
              "amount": "6.61",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "5.29",
              "currencyCode": "USD"
            }
          },
          "product": {
            "id": "gid://shopify/Product/108828309",
            "title": "Draft"
          },
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "Draft",
          "variantTitle": "151cm",
          "variant": {
            "id": "gid://shopify/ProductVariant/43729076"
          },
          "weight": {
            "value": 1,
            "unit": "KILOGRAMS"
          }
        },
        {
          "appliedDiscount": null,
          "discountedTotalSet": {
            "presentmentMoney": {
              "amount": "25.98",
              "currencyCode": "CAD"
            },
            "shopMoney": {
              "amount": "20.78",
              "currencyCode": "USD"
            }
          },
          "product": null,
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantTitle": null,
          "variant": null,
          "weight": {
            "value": 1.2,
            "unit": "KILOGRAMS"
          }
        }
      ],
      "totalTaxSet": {
        "presentmentMoney": {
          "amount": "1.84",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "1.47",
          "currencyCode": "USD"
        }
      },
      "totalDiscountsSet": {
        "presentmentMoney": {
          "amount": "12.76",
          "currencyCode": "CAD"
        },
        "shopMoney": {
          "amount": "10.21",
          "currencyCode": "USD"
        }
      },
      "presentmentCurrencyCode": "CAD"
    },
    "userErrors": []
  }
}
``` 
*   ### Calculating a draft order with no line items

#### Description

Calculating a draft order with no line items returns a user error

#### Query

```graphql
mutation CalculateDraftOrder($input: DraftOrderInput!) {
  draftOrderCalculate(input: $input) {
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
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "lineItems": [],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { userErrors { field message } } }",
 "variables": {
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "lineItems": [],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "lineItems": [],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "lineItems": [],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "lineItems": [],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderCalculate": {
    "userErrors": [
      {
        "field": null,
        "message": "Add at least 1 product"
      }
    ]
  }
}
``` 
*   ### draftOrderCalculate reference

Examples
--------

Calculate properties of a draft order

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CalculateDraftOrder(%24input%3A%20DraftOrderInput!)%20%7B%0A%20%20draftOrderCalculate(input%3A%20%24input)%20%7B%0A%20%20%20%20calculatedDraftOrder%20%7B%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20numberOfOrders%0A%20%20%20%20%20%20%20%20defaultAddress%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20%20%20address2%0A%20%20%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%20%20%20%20provinceCode%0A%20%20%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%20%20%20%20countryCodeV2%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20taxExempt%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20billingAddressMatchesShippingAddress%0A%20%20%20%20%20%20totalPriceSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20lineItems%20%7B%0A%20%20%20%20%20%20%20%20appliedDiscount%20%7B%0A%20%20%20%20%20%20%20%20%20%20amountSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20valueType%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20discountedTotalSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20product%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20quantity%0A%20%20%20%20%20%20%20%20requiresShipping%0A%20%20%20%20%20%20%20%20sku%0A%20%20%20%20%20%20%20%20taxable%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20variantTitle%0A%20%20%20%20%20%20%20%20variant%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20weight%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20unit%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalTaxSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20totalDiscountsSet%20%7B%0A%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20shippingLine%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20custom%0A%20%20%20%20%20%20%20%20shippingRateHandle%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20originalPriceSet%20%7B%0A%20%20%20%20%20%20%20%20%20%20presentmentMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20shopMoney%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20presentmentCurrencyCode%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22appliedDiscount%22%3A%20%7B%0A%20%20%20%20%20%20%22description%22%3A%20%22Loyalty%22%2C%0A%20%20%20%20%20%20%22value%22%3A%205%2C%0A%20%20%20%20%20%20%22valueType%22%3A%20%22FIXED_AMOUNT%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22billingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22123%20Amoebobacterieae%20St%22%2C%0A%20%20%20%20%20%20%22address2%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22Ottawa%22%2C%0A%20%20%20%20%20%20%22company%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%2C%0A%20%20%20%20%20%20%22firstName%22%3A%20%22Bob%22%2C%0A%20%20%20%20%20%20%22lastName%22%3A%20%22Bobsen%22%2C%0A%20%20%20%20%20%20%22phone%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22provinceCode%22%3A%20%22ON%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22K2P0V6%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%20%20%22lineItems%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22appliedDiscount%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22description%22%3A%20%22Promo%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%22valueType%22%3A%20%22FIXED_AMOUNT%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22customAttributes%22%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%22originalUnitPrice%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22requiresShipping%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22sku%22%3A%20%22draft-151%22%2C%0A%20%20%20%20%20%20%20%20%22taxable%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22title%22%3A%20%22151cm%22%2C%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F43729076%22%2C%0A%20%20%20%20%20%20%20%20%22weight%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22appliedDiscount%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22customAttributes%22%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%22originalUnitPrice%22%3A%20%2210.0%22%2C%0A%20%20%20%20%20%20%20%20%22quantity%22%3A%202%2C%0A%20%20%20%20%20%20%20%20%22requiresShipping%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22sku%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22taxable%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%22title%22%3A%20%22Spring%20Promo%20Item%22%2C%0A%20%20%20%20%20%20%20%20%22variantId%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22weight%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22value%22%3A%201.2%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22presentmentCurrencyCode%22%3A%20%22CAD%22%2C%0A%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%22address1%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22address2%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22city%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22company%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%2C%0A%20%20%20%20%20%20%22firstName%22%3A%20%22Bob%22%2C%0A%20%20%20%20%20%20%22lastName%22%3A%20%22Smith%22%2C%0A%20%20%20%20%20%20%22phone%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22provinceCode%22%3A%20%22AB%22%2C%0A%20%20%20%20%20%20%22zip%22%3A%20%22%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22shippingLine%22%3A%20%7B%0A%20%20%20%20%20%20%22price%22%3A%20%220.0%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22Free%20shipping%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22taxExempt%22%3A%20false%0A%20%20%7D%0A%7D)Copy

999

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

 mutation CalculateDraftOrder($input: DraftOrderInput!) {

 draftOrderCalculate(input: $input) {

 calculatedDraftOrder {

 customer {

 id

 email

 firstName

 numberOfOrders

 defaultAddress {

 id

 firstName

 lastName

 address1

 address2

 city

 provinceCode

 zip

 countryCodeV2

 }

 taxExempt

 }

 billingAddressMatchesShippingAddress

 totalPriceSet {

 presentmentMoney {

 amount

 currencyCode

 }

 shopMoney {

 amount

 currencyCode

 }

 }

```
mutation CalculateDraftOrder($input: DraftOrderInput!) {
  draftOrderCalculate(input: $input) {
    calculatedDraftOrder {
      customer {
        id
        email
        firstName
        numberOfOrders
        defaultAddress {
          id
          firstName
          lastName
          address1
          address2
          city
          provinceCode
          zip
          countryCodeV2
        }
        taxExempt
      }
      billingAddressMatchesShippingAddress
      totalPriceSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      lineItems {
        appliedDiscount {
          amountSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          value
          valueType
          description
        }
        discountedTotalSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        product {
          id
          title
        }
        quantity
        requiresShipping
        sku
        taxable
        title
        variantTitle
        variant {
          id
        }
        weight {
          value
          unit
        }
      }
      totalTaxSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      totalDiscountsSet {
        presentmentMoney {
          amount
          currencyCode
        }
        shopMoney {
          amount
          currencyCode
        }
      }
      shippingLine {
        id
        custom
        shippingRateHandle
        title
        originalPriceSet {
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
      presentmentCurrencyCode
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
"query": "mutation CalculateDraftOrder($input: DraftOrderInput!) { draftOrderCalculate(input: $input) { calculatedDraftOrder { customer { id email firstName numberOfOrders defaultAddress { id firstName lastName address1 address2 city provinceCode zip countryCodeV2 } taxExempt } billingAddressMatchesShippingAddress totalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } lineItems { appliedDiscount { amountSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } value valueType description } discountedTotalSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } product { id title } quantity requiresShipping sku taxable title variantTitle variant { id } weight { value unit } } totalTaxSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } totalDiscountsSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } shippingLine { id custom shippingRateHandle title originalPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } presentmentCurrencyCode } userErrors { field message } } }",
 "variables": {
    "input": {
      "appliedDiscount": {
        "description": "Loyalty",
        "value": 5,
        "valueType": "FIXED_AMOUNT"
      },
      "billingAddress": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Bobsen",
        "phone": "",
        "provinceCode": "ON",
        "zip": "K2P0V6"
      },
      "customerId": "gid://shopify/Customer/544365967",
      "lineItems": [
        {
          "appliedDiscount": {
            "description": "Promo",
            "value": 5,
            "valueType": "FIXED_AMOUNT"
          },
          "customAttributes": [],
          "originalUnitPrice": 10,
          "quantity": 1,
          "requiresShipping": true,
          "sku": "draft-151",
          "taxable": true,
          "title": "151cm",
          "variantId": "gid://shopify/ProductVariant/43729076",
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1
          }
        },
        {
          "appliedDiscount": null,
          "customAttributes": [],
          "originalUnitPrice": "10.0",
          "quantity": 2,
          "requiresShipping": true,
          "sku": null,
          "taxable": true,
          "title": "Spring Promo Item",
          "variantId": null,
          "weight": {
            "unit": "KILOGRAMS",
            "value": 1.2
          }
        }
      ],
      "presentmentCurrencyCode": "CAD",
      "shippingAddress": {
        "address1": "",
        "address2": "",
        "city": "",
        "company": "",
        "countryCode": "CA",
        "firstName": "Bob",
        "lastName": "Smith",
        "phone": "",
        "provinceCode": "AB",
        "zip": ""
      },
      "shippingLine": {
        "price": "0.0",
        "title": "Free shipping"
      },
      "taxExempt": false
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
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
        presentmentCurrencyCode
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
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "originalUnitPrice": 10,
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
    "query": `mutation CalculateDraftOrder($input: DraftOrderInput!) {
      draftOrderCalculate(input: $input) {
        calculatedDraftOrder {
          customer {
            id
            email
            firstName
            numberOfOrders
            defaultAddress {
              id
              firstName
              lastName
              address1
              address2
              city
              provinceCode
              zip
              countryCodeV2
            }
            taxExempt
          }
          billingAddressMatchesShippingAddress
          totalPriceSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          lineItems {
            appliedDiscount {
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
                shopMoney {
                  amount
                  currencyCode
                }
              }
              value
              valueType
              description
            }
            discountedTotalSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            product {
              id
              title
            }
            quantity
            requiresShipping
            sku
            taxable
            title
            variantTitle
            variant {
              id
            }
            weight {
              value
              unit
            }
          }
          totalTaxSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          totalDiscountsSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          shippingLine {
            id
            custom
            shippingRateHandle
            title
            originalPriceSet {
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
          presentmentCurrencyCode
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "appliedDiscount": {
                "description": "Loyalty",
                "value": 5,
                "valueType": "FIXED_AMOUNT"
            },
            "billingAddress": {
                "address1": "123 Amoebobacterieae St",
                "address2": "",
                "city": "Ottawa",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Bobsen",
                "phone": "",
                "provinceCode": "ON",
                "zip": "K2P0V6"
            },
            "customerId": "gid://shopify/Customer/544365967",
            "lineItems": [
                {
                    "appliedDiscount": {
                        "description": "Promo",
                        "value": 5,
                        "valueType": "FIXED_AMOUNT"
                    },
                    "customAttributes": [],
                    "originalUnitPrice": 10,
                    "quantity": 1,
                    "requiresShipping": true,
                    "sku": "draft-151",
                    "taxable": true,
                    "title": "151cm",
                    "variantId": "gid://shopify/ProductVariant/43729076",
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1
                    }
                },
                {
                    "appliedDiscount": null,
                    "customAttributes": [],
                    "originalUnitPrice": "10.0",
                    "quantity": 2,
                    "requiresShipping": true,
                    "sku": null,
                    "taxable": true,
                    "title": "Spring Promo Item",
                    "variantId": null,
                    "weight": {
                        "unit": "KILOGRAMS",
                        "value": 1.2
                    }
                }
            ],
            "presentmentCurrencyCode": "CAD",
            "shippingAddress": {
                "address1": "",
                "address2": "",
                "city": "",
                "company": "",
                "countryCode": "CA",
                "firstName": "Bob",
                "lastName": "Smith",
                "phone": "",
                "provinceCode": "AB",
                "zip": ""
            },
            "shippingLine": {
                "price": "0.0",
                "title": "Free shipping"
            },
            "taxExempt": false
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
  mutation CalculateDraftOrder($input: DraftOrderInput!) {
    draftOrderCalculate(input: $input) {
      calculatedDraftOrder {
        customer {
          id
          email
          firstName
          numberOfOrders
          defaultAddress {
            id
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            countryCodeV2
          }
          taxExempt
        }
        billingAddressMatchesShippingAddress
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems {
          appliedDiscount {
            amountSet {
              presentmentMoney {
                amount
                currencyCode
              }
              shopMoney {
                amount
                currencyCode
              }
            }
            value
            valueType
            description
          }
          discountedTotalSet {
            presentmentMoney {
              amount
              currencyCode
            }
            shopMoney {
              amount
              currencyCode
            }
          }
          product {
            id
            title
          }
          quantity
          requiresShipping
          sku
          taxable
          title
          variantTitle
          variant {
            id
          }
          weight {
            value
            unit
          }
        }
        totalTaxSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        totalDiscountsSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        shippingLine {
          id
          custom
          shippingRateHandle
          title
          originalPriceSet {
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
        presentmentCurrencyCode
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
    "appliedDiscount": {
      "description": "Loyalty",
      "value": 5,
      "valueType": "FIXED_AMOUNT"
    },
    "billingAddress": {
      "address1": "123 Amoebobacterieae St",
      "address2": "",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Bobsen",
      "phone": "",
      "provinceCode": "ON",
      "zip": "K2P0V6"
    },
    "customerId": "gid://shopify/Customer/544365967",
    "lineItems": [
      {
        "appliedDiscount": {
          "description": "Promo",
          "value": 5,
          "valueType": "FIXED_AMOUNT"
        },
        "customAttributes": [],
        "originalUnitPrice": 10,
        "quantity": 1,
        "requiresShipping": true,
        "sku": "draft-151",
        "taxable": true,
        "title": "151cm",
        "variantId": "gid://shopify/ProductVariant/43729076",
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1
        }
      },
      {
        "appliedDiscount": null,
        "customAttributes": [],
        "originalUnitPrice": "10.0",
        "quantity": 2,
        "requiresShipping": true,
        "sku": null,
        "taxable": true,
        "title": "Spring Promo Item",
        "variantId": null,
        "weight": {
          "unit": "KILOGRAMS",
          "value": 1.2
        }
      }
    ],
    "presentmentCurrencyCode": "CAD",
    "shippingAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "company": "",
      "countryCode": "CA",
      "firstName": "Bob",
      "lastName": "Smith",
      "phone": "",
      "provinceCode": "AB",
      "zip": ""
    },
    "shippingLine": {
      "price": "0.0",
      "title": "Free shipping"
    },
    "taxExempt": false
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

{

"input": {

"appliedDiscount": {

"description": "Loyalty",

"value": 5,

"valueType": "FIXED_AMOUNT"

},

"billingAddress": {

"address1": "123 Amoebobacterieae St",

"address2": "",

"city": "Ottawa",

"company": "",

"countryCode": "CA",

"firstName": "Bob",

"lastName": "Bobsen",

"phone": "",

"provinceCode": "ON",

"zip": "K2P0V6"

},

"customerId": "gid://shopify/Customer/544365967",

"lineItems": [

{

"appliedDiscount": {

"description": "Promo",

"value": 5,

"valueType": "FIXED_AMOUNT"

},

"customAttributes": [],

"originalUnitPrice": 10,

"quantity": 1,

"requiresShipping": true,

"sku": "draft-151",

"taxable": true,

"title": "151cm",

"variantId": "gid://shopify/ProductVariant/43729076",

"weight": {

Hide content

Response
--------

JSON

999

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

"draftOrderCalculate": {

"calculatedDraftOrder": {

"customer": {

"id": "gid://shopify/Customer/544365967",

"email": "bob@example.com",

"firstName": "Bob",

"numberOfOrders": "25",

"defaultAddress": {

"id": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress",

"firstName": "Bob",

"lastName": "Bobsen",

"address1": "123 Amoebobacterieae St",

"address2": "",

"city": "Ottawa",

"provinceCode": "ON",

"zip": "K2P0V6",

"countryCodeV2": "CA"

},

"taxExempt": false

},

"billingAddressMatchesShippingAddress": false,

"totalPriceSet": {

"presentmentMoney": {

"amount": "28.05",

"currencyCode": "CAD"

},

"shopMoney": {

"amount": "22.44",

"currencyCode": "USD"

}

},

"lineItems": [

{

"appliedDiscount": {

"amountSet": {


---
*Content truncated at "Updates" section*