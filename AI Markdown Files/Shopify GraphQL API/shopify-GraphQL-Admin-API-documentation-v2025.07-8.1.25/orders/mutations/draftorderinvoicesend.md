---
title: "draftOrderInvoiceSend"
description: "Shopify GraphQL Admin API documentation for draftorderinvoicesend"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend"
extraction_method: "jina"
sections: ['Orders', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrderInvoiceSend - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend

Markdown Content:
draftOrderInvoiceSend - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#main-content)

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
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   
Orders

    *   Queries   
    *   
Mutations

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
        *   [gift Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate)
        *   [gift Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardupdate)
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
        *   [payment Terms Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate)
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

[Anchor to draftOrderInvoiceSend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#top)
draft Order Invoice Send
========================

mutation

Requires `write_draft_orders` access scope. Also: The user must have access to manage draft orders.

Sends an email invoice for a draft order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#arguments)
Arguments
---------

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#arguments-email)email

•[Email Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

Specifies the draft order invoice email fields.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the draft order to send the invoice for.

* * *

Was this section helpful?

Yes No

[Anchor to DraftOrderInvoiceSendPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#returns)Draft Order Invoice Send Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#returns-draftOrder)draft Order

•[Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

The draft order an invoice email is sent for.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftorderinvoicesend#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Send a draft order invoice by draft order ID

#### Query

```graphql
mutation draftOrderInvoiceSend($id: ID!) {
  draftOrderInvoiceSend(id: $id) {
    draftOrder {
      id
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/276395349"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderInvoiceSend($id: ID!) { draftOrderInvoiceSend(id: $id) { draftOrder { id } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderInvoiceSend($id: ID!) {
    draftOrderInvoiceSend(id: $id) {
      draftOrder {
        id
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349"
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
  mutation draftOrderInvoiceSend($id: ID!) {
    draftOrderInvoiceSend(id: $id) {
      draftOrder {
        id
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderInvoiceSend($id: ID!) {
      draftOrderInvoiceSend(id: $id) {
        draftOrder {
          id
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349"
    },
  },
});
``` #### Response

```json
{
  "draftOrderInvoiceSend": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349"
    }
  }
}
``` 
*   ### Send an invoice

#### Query

```graphql
mutation draftOrderInvoiceSend($id: ID!) {
  draftOrderInvoiceSend(id: $id) {
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
      lineItems(first: 10) {
        edges {
          node {
            id
            variant {
              id
              title
            }
            product {
              id
            }
            name
            sku
            vendor
            quantity
            requiresShipping
            taxable
            isGiftCard
            fulfillmentService {
              type
            }
            weight {
              unit
              value
            }
            taxLines {
              title
              source
              rate
              ratePercentage
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
            }
            appliedDiscount {
              title
              value
              valueType
            }
            name
            custom
            id
          }
        }
      }
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
  "id": "gid://shopify/DraftOrder/276395349"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderInvoiceSend($id: ID!) { draftOrderInvoiceSend(id: $id) { draftOrder { id note2 email taxesIncluded currencyCode invoiceSentAt createdAt updatedAt taxExempt completedAt name status lineItems(first: 10) { edges { node { id variant { id title } product { id } name sku vendor quantity requiresShipping taxable isGiftCard fulfillmentService { type } weight { unit value } taxLines { title source rate ratePercentage priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } appliedDiscount { title value valueType } name custom id } } } shippingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } billingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } invoiceUrl appliedDiscount { title value valueType } order { id customAttributes { key value } } shippingLine { id title carrierIdentifier custom code deliveryCategory source discountedPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } taxLines { channelLiable priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } rate ratePercentage source title } tags customer { id email smsMarketingConsent { consentCollectedFrom consentUpdatedAt marketingOptInLevel marketingState } emailMarketingConsent { consentUpdatedAt marketingOptInLevel marketingState } createdAt updatedAt firstName lastName state amountSpent { amount currencyCode } lastOrder { id name currencyCode } note verifiedEmail multipassIdentifier taxExempt tags phone taxExemptions defaultAddress { id firstName lastName company address1 address2 city province country zip phone name provinceCode countryCodeV2 } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderInvoiceSend($id: ID!) {
    draftOrderInvoiceSend(id: $id) {
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
        lineItems(first: 10) {
          edges {
            node {
              id
              variant {
                id
                title
              }
              product {
                id
              }
              name
              sku
              vendor
              quantity
              requiresShipping
              taxable
              isGiftCard
              fulfillmentService {
                type
              }
              weight {
                unit
                value
              }
              taxLines {
                title
                source
                rate
                ratePercentage
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
              }
              appliedDiscount {
                title
                value
                valueType
              }
              name
              custom
              id
            }
          }
        }
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
        "id": "gid://shopify/DraftOrder/276395349"
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
  mutation draftOrderInvoiceSend($id: ID!) {
    draftOrderInvoiceSend(id: $id) {
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
        lineItems(first: 10) {
          edges {
            node {
              id
              variant {
                id
                title
              }
              product {
                id
              }
              name
              sku
              vendor
              quantity
              requiresShipping
              taxable
              isGiftCard
              fulfillmentService {
                type
              }
              weight {
                unit
                value
              }
              taxLines {
                title
                source
                rate
                ratePercentage
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
              }
              appliedDiscount {
                title
                value
                valueType
              }
              name
              custom
              id
            }
          }
        }
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
  "id": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderInvoiceSend($id: ID!) {
      draftOrderInvoiceSend(id: $id) {
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
          lineItems(first: 10) {
            edges {
              node {
                id
                variant {
                  id
                  title
                }
                product {
                  id
                }
                name
                sku
                vendor
                quantity
                requiresShipping
                taxable
                isGiftCard
                fulfillmentService {
                  type
                }
                weight {
                  unit
                  value
                }
                taxLines {
                  title
                  source
                  rate
                  ratePercentage
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
                }
                appliedDiscount {
                  title
                  value
                  valueType
                }
                name
                custom
                id
              }
            }
          }
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
        "id": "gid://shopify/DraftOrder/276395349"
    },
  },
});
``` #### Response

```json
{
  "draftOrderInvoiceSend": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349",
      "note2": "rush order",
      "email": "thomas_burnsimus_ii@shopify.com",
      "taxesIncluded": false,
      "currencyCode": "USD",
      "invoiceSentAt": "2024-11-05T17:18:09Z",
      "createdAt": "2021-12-01T12:42:15Z",
      "updatedAt": "2024-11-05T17:18:09Z",
      "taxExempt": false,
      "completedAt": null,
      "name": "#D1",
      "status": "INVOICE_SENT",
      "lineItems": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/DraftOrderLineItem/693579471",
              "variant": {
                "id": "gid://shopify/ProductVariant/138327650",
                "title": "Default"
              },
              "product": {
                "id": "gid://shopify/Product/121709582"
              },
              "name": "Boots - Default",
              "sku": "boots-10",
              "vendor": null,
              "quantity": 2,
              "requiresShipping": true,
              "taxable": true,
              "isGiftCard": false,
              "fulfillmentService": {
                "type": "MANUAL"
              },
              "weight": {
                "unit": "GRAMS",
                "value": 100
              },
              "taxLines": [
                {
                  "title": "GST",
                  "source": null,
                  "rate": 0.07,
                  "ratePercentage": 7,
                  "priceSet": {
                    "presentmentMoney": {
                      "amount": "4.2",
                      "currencyCode": "USD"
                    },
                    "shopMoney": {
                      "amount": "4.2",
                      "currencyCode": "USD"
                    }
                  }
                },
                {
                  "title": "PST",
                  "source": null,
                  "rate": 0.08,
                  "ratePercentage": 8,
                  "priceSet": {
                    "presentmentMoney": {
                      "amount": "4.8",
                      "currencyCode": "USD"
                    },
                    "shopMoney": {
                      "amount": "4.8",
                      "currencyCode": "USD"
                    }
                  }
                }
              ],
              "appliedDiscount": null,
              "custom": false
            }
          }
        ]
      },
      "shippingAddress": {
        "firstName": "Bob",
        "address1": "123 Amoebobacterieae St",
        "phone": "+1(613)555-1212",
        "city": "Ottawa",
        "zip": "K2P0V6",
        "province": "Ontario",
        "country": "Canada",
        "lastName": "Bobsen",
        "address2": "",
        "company": "",
        "latitude": 45.41634,
        "longitude": -75.6868,
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
              "amount": "4.2",
              "currencyCode": "USD"
            },
            "shopMoney": {
              "amount": "4.2",
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
              "amount": "4.8",
              "currencyCode": "USD"
            },
            "shopMoney": {
              "amount": "4.8",
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
*   ### Sending an invoice with invalid arguments returns an error

#### Query

```graphql
mutation draftOrderInvoiceSend($id: ID!, $email: EmailInput) {
  draftOrderInvoiceSend(id: $id, email: $email) {
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
  "id": "gid://shopify/DraftOrder/276395349",
  "email": {
    "subject": "valid subject",
    "to": "invalid recipient"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation draftOrderInvoiceSend($id: ID!, $email: EmailInput) { draftOrderInvoiceSend(id: $id, email: $email) { draftOrder { id } userErrors { message field } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349",
    "email": {
      "subject": "valid subject",
      "to": "invalid recipient"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderInvoiceSend($id: ID!, $email: EmailInput) {
    draftOrderInvoiceSend(id: $id, email: $email) {
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
        "id": "gid://shopify/DraftOrder/276395349",
        "email": {
            "subject": "valid subject",
            "to": "invalid recipient"
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
  mutation draftOrderInvoiceSend($id: ID!, $email: EmailInput) {
    draftOrderInvoiceSend(id: $id, email: $email) {
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
  "id": "gid://shopify/DraftOrder/276395349",
  "email": {
    "subject": "valid subject",
    "to": "invalid recipient"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderInvoiceSend($id: ID!, $email: EmailInput) {
      draftOrderInvoiceSend(id: $id, email: $email) {
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
        "id": "gid://shopify/DraftOrder/276395349",
        "email": {
            "subject": "valid subject",
            "to": "invalid recipient"
        }
    },
  },
});
``` #### Response

```json
{
  "draftOrderInvoiceSend": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/276395349"
    },
    "userErrors": [
      {
        "message": "To is invalid",
        "field": null
      }
    ]
  }
}
``` 
*   ### draftOrderInvoiceSend reference

Examples
--------

Send a draft order invoice by draft order ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20draftOrderInvoiceSend(%24id%3A%20ID!)%20%7B%0A%20%20draftOrderInvoiceSend(id%3A%20%24id)%20%7B%0A%20%20%20%20draftOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDraftOrder%2F276395349%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation draftOrderInvoiceSend($id: ID!) {

 draftOrderInvoiceSend(id: $id) {

 draftOrder {

 id

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/DraftOrder/276395349"

},

},

);

const data=await response.json();

```
mutation draftOrderInvoiceSend($id: ID!) {
  draftOrderInvoiceSend(id: $id) {
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
"query": "mutation draftOrderInvoiceSend($id: ID!) { draftOrderInvoiceSend(id: $id) { draftOrder { id } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/276395349"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation draftOrderInvoiceSend($id: ID!) {
    draftOrderInvoiceSend(id: $id) {
      draftOrder {
        id
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/276395349"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation draftOrderInvoiceSend($id: ID!) {
      draftOrderInvoiceSend(id: $id) {
        draftOrder {
          id
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/276395349"
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
  mutation draftOrderInvoiceSend($id: ID!) {
    draftOrderInvoiceSend(id: $id) {
      draftOrder {
        id
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/276395349"
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

›

⌄

{

"id": "gid://shopify/DraftOrder/276395349"

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

›

⌄

⌄

⌄

{

"draftOrderInvoiceSend": {

"draftOrder": {

"id": "gid://shopify/DraftOrder/276395349"

}

}

}


---
*Content truncated at "Updates" section*