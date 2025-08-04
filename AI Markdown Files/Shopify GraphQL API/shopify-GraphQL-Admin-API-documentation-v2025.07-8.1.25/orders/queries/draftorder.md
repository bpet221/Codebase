---
title: "draftOrder"
description: "Shopify GraphQL Admin API documentation for draftorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder"
extraction_method: "jina"
sections: ['Orders', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: draftOrder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder

Markdown Content:
draftOrder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder#main-content)

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

    *   
Queries

        *   [draft Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder)
        *   [draft Order Available Delivery Options](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderavailabledeliveryoptions)
        *   [draft Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorders)
        *   [draft Order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordersavedsearches)
        *   [draft Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorderscount)
        *   [draft Order Tag](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftordertag)
        *   [order](https://shopify.dev/docs/api/admin-graphql/latest/queries/order)
        *   [order By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderbyidentifier)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)
        *   [order Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/ordersavedsearches)
        *   [orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderscount)
        *   [refund](https://shopify.dev/docs/api/admin-graphql/latest/queries/refund)
        *   [return](https://shopify.dev/docs/api/admin-graphql/latest/queries/return)
        *   [returnable Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillment)
        *   [returnable Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnablefulfillments)
        *   [return Calculate](https://shopify.dev/docs/api/admin-graphql/latest/queries/returncalculate)
        *   [reverse Delivery](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversedelivery)
        *   [reverse Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/reversefulfillmentorder)
        *   [subscription Billing Attempt](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempt)
        *   [subscription Billing Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingattempts)
        *   [subscription Billing Cycle](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycle)
        *   [subscription Billing Cycle Bulk Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcyclebulkresults)
        *   [subscription Billing Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionbillingcycles)
        *   [subscription Contract](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontract)
        *   [subscription Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptioncontracts)
        *   [subscription Draft](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptiondraft)
        *   [tender Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tendertransactions)

    *   Mutations   
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

[Anchor to draftOrder](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder#top)
draft Order
===========

query

Retrieves a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) by its ID. A draft order is an order created by a merchant on behalf of their customers. Draft orders contain all necessary order details (products, pricing, customer information) but require payment to be accepted before they can be converted into [completed orders](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete).

Use the `draftOrder` query to retrieve information associated with the following workflows:

*   Creating orders for phone, in-person, or chat sales
*   Sending invoices to customers with secure checkout links
*   Managing custom items and additional costs
*   Selling products at discount or wholesale rates
*   Processing pre-orders and saving drafts for later completion

A draft order is associated with a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and contains multiple [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem). Each draft order has a [status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status), which indicates its progress through the sales workflow.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DraftOrder` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to DraftOrder](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftorder#returns-DraftOrder)Draft Order

•[Draft Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:

*   Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
*   Send invoices to customers to pay with a secure checkout link.
*   Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
*   Re-create orders manually from active sales channels.
*   Sell products at discount or wholesale rates.
*   Take pre-orders.

For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.

**Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a draft order by ID

#### Description

The following query retrieves a draft order by ID and returns the draft order name.

#### Query

```graphql
query {
  draftOrder(id: "gid://shopify/DraftOrder/276395349") {
    name
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { draftOrder(id: \"gid://shopify/DraftOrder/276395349\") { name } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
  }`,
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
  query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
  }`,
});
``` #### Response

```json
{
  "draftOrder": {
    "name": "#D1"
  }
}
``` 
*   ### Get a list of draft orders by ID and GraphQL alias

#### Description

The following query retrieves a list of draft orders by ID and GraphQL alias and returns the name for each draft order.

#### Query

```graphql
query {
  draftOrder1: draftOrder(id: "gid://shopify/DraftOrder/276395349") {
    name
  }
  draftOrder2: draftOrder(id: "gid://shopify/DraftOrder/221448317") {
    name
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { draftOrder1: draftOrder(id: \"gid://shopify/DraftOrder/276395349\") { name } draftOrder2: draftOrder(id: \"gid://shopify/DraftOrder/221448317\") { name } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrder1: draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
    draftOrder2: draftOrder(id: "gid://shopify/DraftOrder/221448317") {
      name
    }
  }`,
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
  query {
    draftOrder1: draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
    draftOrder2: draftOrder(id: "gid://shopify/DraftOrder/221448317") {
      name
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    draftOrder1: draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
    draftOrder2: draftOrder(id: "gid://shopify/DraftOrder/221448317") {
      name
    }
  }`,
});
``` #### Response

```json
{
  "draftOrder1": {
    "name": "#D1"
  },
  "draftOrder2": {
    "name": "#D7"
  }
}
``` 
*   ### Get a list of line item names for a draft order

#### Description

The following query retrieves the first 5 line items for a draft order and returns the name of each line item.

#### Query

```graphql
query {
  draftOrder(id: "gid://shopify/DraftOrder/276395349") {
    lineItems(first: 5) {
      edges {
        node {
          name
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
"query": "query { draftOrder(id: \"gid://shopify/DraftOrder/276395349\") { lineItems(first: 5) { edges { node { name } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      lineItems(first: 5) {
        edges {
          node {
            name
          }
        }
      }
    }
  }`,
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
  query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      lineItems(first: 5) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      lineItems(first: 5) {
        edges {
          node {
            name
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "draftOrder": {
    "lineItems": {
      "edges": [
        {
          "node": {
            "name": "Boots - Default"
          }
        }
      ]
    }
  }
}
``` 
*   ### Get a metafield attached to a draft order

#### Description

Get the metafield value identified by `my_fields.purchase_order` on a specific draft order.

#### Query

```graphql
query DraftOrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
  draftOrder(id: $ownerId) {
    purchaseOrder: metafield(namespace: $namespace, key: $key) {
      value
    }
  }
}
``` #### Variables

```json
{
  "namespace": "my_fields",
  "key": "purchase_order",
  "ownerId": "gid://shopify/DraftOrder/276395349"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DraftOrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) { draftOrder(id: $ownerId) { purchaseOrder: metafield(namespace: $namespace, key: $key) { value } } }",
 "variables": {
    "namespace": "my_fields",
    "key": "purchase_order",
    "ownerId": "gid://shopify/DraftOrder/276395349"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DraftOrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    draftOrder(id: $ownerId) {
      purchaseOrder: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }`,
  {
    variables: {
        "namespace": "my_fields",
        "key": "purchase_order",
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
  query DraftOrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
    draftOrder(id: $ownerId) {
      purchaseOrder: metafield(namespace: $namespace, key: $key) {
        value
      }
    }
  }
QUERY

variables = {
  "namespace": "my_fields",
  "key": "purchase_order",
  "ownerId": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query DraftOrderMetafield($namespace: String!, $key: String!, $ownerId: ID!) {
      draftOrder(id: $ownerId) {
        purchaseOrder: metafield(namespace: $namespace, key: $key) {
          value
        }
      }
    }`,
    "variables": {
        "namespace": "my_fields",
        "key": "purchase_order",
        "ownerId": "gid://shopify/DraftOrder/276395349"
    },
  },
});
``` #### Response

```json
{
  "draftOrder": {
    "purchaseOrder": {
      "value": "123"
    }
  }
}
``` 
*   ### Get metafields attached to a draft order

#### Description

Get a page of metafields attached to a specific draft order.

#### Query

```graphql
query DraftOrderMetafields($ownerId: ID!) {
  draftOrder(id: $ownerId) {
    metafields(first: 3) {
      edges {
        node {
          namespace
          key
          value
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "ownerId": "gid://shopify/DraftOrder/276395349"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DraftOrderMetafields($ownerId: ID!) { draftOrder(id: $ownerId) { metafields(first: 3) { edges { node { namespace key value } } } } }",
 "variables": {
    "ownerId": "gid://shopify/DraftOrder/276395349"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DraftOrderMetafields($ownerId: ID!) {
    draftOrder(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }`,
  {
    variables: {
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
  query DraftOrderMetafields($ownerId: ID!) {
    draftOrder(id: $ownerId) {
      metafields(first: 3) {
        edges {
          node {
            namespace
            key
            value
          }
        }
      }
    }
  }
QUERY

variables = {
  "ownerId": "gid://shopify/DraftOrder/276395349"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query DraftOrderMetafields($ownerId: ID!) {
      draftOrder(id: $ownerId) {
        metafields(first: 3) {
          edges {
            node {
              namespace
              key
              value
            }
          }
        }
      }
    }`,
    "variables": {
        "ownerId": "gid://shopify/DraftOrder/276395349"
    },
  },
});
``` #### Response

```json
{
  "draftOrder": {
    "metafields": {
      "edges": [
        {
          "node": {
            "namespace": "my_fields",
            "key": "purchase_order",
            "value": "123"
          }
        }
      ]
    }
  }
}
``` 
*   ### Receive a single DraftOrder

#### Query

```graphql
query DraftOrder($id: ID!) {
  draftOrder(id: $id) {
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
}
``` #### Variables

```json
{
  "id": "gid://shopify/DraftOrder/221448317"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DraftOrder($id: ID!) { draftOrder(id: $id) { id note2 email taxesIncluded currencyCode invoiceSentAt createdAt updatedAt taxExempt completedAt name status lineItems(first: 10) { edges { node { id variant { id title } product { id } name sku vendor quantity requiresShipping taxable isGiftCard fulfillmentService { type } weight { unit value } taxLines { title source rate ratePercentage priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } appliedDiscount { title value valueType } name custom id } } } shippingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } billingAddress { firstName address1 phone city zip province country lastName address2 company latitude longitude name country countryCodeV2 provinceCode } invoiceUrl appliedDiscount { title value valueType } order { id customAttributes { key value } } shippingLine { id title carrierIdentifier custom code deliveryCategory source discountedPriceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } } taxLines { channelLiable priceSet { presentmentMoney { amount currencyCode } shopMoney { amount currencyCode } } rate ratePercentage source title } tags customer { id email smsMarketingConsent { consentCollectedFrom consentUpdatedAt marketingOptInLevel marketingState } emailMarketingConsent { consentUpdatedAt marketingOptInLevel marketingState } createdAt updatedAt firstName lastName state amountSpent { amount currencyCode } lastOrder { id name currencyCode } note verifiedEmail multipassIdentifier taxExempt tags phone taxExemptions defaultAddress { id firstName lastName company address1 address2 city province country zip phone name provinceCode countryCodeV2 } } } }",
 "variables": {
    "id": "gid://shopify/DraftOrder/221448317"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DraftOrder($id: ID!) {
    draftOrder(id: $id) {
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
  }`,
  {
    variables: {
        "id": "gid://shopify/DraftOrder/221448317"
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
  query DraftOrder($id: ID!) {
    draftOrder(id: $id) {
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
  }
QUERY

variables = {
  "id": "gid://shopify/DraftOrder/221448317"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query DraftOrder($id: ID!) {
      draftOrder(id: $id) {
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
    }`,
    "variables": {
        "id": "gid://shopify/DraftOrder/221448317"
    },
  },
});
``` #### Response

```json
{
  "draftOrder": {
    "id": "gid://shopify/DraftOrder/221448317",
    "note2": "gift",
    "email": "bobsemail@shopify.com",
    "taxesIncluded": false,
    "currencyCode": "USD",
    "invoiceSentAt": null,
    "createdAt": "2017-01-01T00:00:00Z",
    "updatedAt": "2021-12-01T12:43:00Z",
    "taxExempt": false,
    "completedAt": null,
    "name": "#D7",
    "status": "OPEN",
    "lineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/DraftOrderLineItem/227425250",
            "variant": {
              "id": "gid://shopify/ProductVariant/330284860",
              "title": "Default"
            },
            "product": {
              "id": "gid://shopify/Product/558169081"
            },
            "name": "Unpublished Boots - Default",
            "sku": "unpublished_boots-12",
            "vendor": "Greedy Boot Maker",
            "quantity": 5,
            "requiresShipping": true,
            "taxable": true,
            "isGiftCard": false,
            "fulfillmentService": {
              "type": "MANUAL"
            },
            "weight": {
              "unit": "GRAMS",
              "value": 10
            },
            "taxLines": [
              {
                "title": "GST",
                "source": "Shopify",
                "rate": 0.07,
                "ratePercentage": 7,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "42.53",
                    "currencyCode": "USD"
                  },
                  "shopMoney": {
                    "amount": "42.53",
                    "currencyCode": "USD"
                  }
                }
              },
              {
                "title": "PST",
                "source": "Shopify",
                "rate": 0.08,
                "ratePercentage": 8,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "48.6",
                    "currencyCode": "USD"
                  },
                  "shopMoney": {
                    "amount": "48.6",
                    "currencyCode": "USD"
                  }
                }
              }
            ],
            "appliedDiscount": null,
            "custom": false
          }
        },
        {
          "node": {
            "id": "gid://shopify/DraftOrderLineItem/446166744",
            "variant": {
              "id": "gid://shopify/ProductVariant/445365074",
              "title": "Medium"
            },
            "product": {
              "id": "gid://shopify/Product/910489600"
            },
            "name": "Crafty Shoes - Green",
            "sku": "crappy_shoes_green",
            "vendor": "Crappy Cobbler",
            "quantity": 2,
            "requiresShipping": false,
            "taxable": true,
            "isGiftCard": false,
            "fulfillmentService": {
              "type": "MANUAL"
            },
            "weight": {
              "unit": "GRAMS",
              "value": 10
            },
            "taxLines": [
              {
                "title": "PST",
                "source": "Shopify",
                "rate": 0.08,
                "ratePercentage": 8,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "13.68",
                    "currencyCode": "USD"
                  },
                  "shopMoney": {
                    "amount": "13.68",
                    "currencyCode": "USD"
                  }
                }
              },
              {
                "title": "GST",
                "source": "Shopify",
                "rate": 0.07,
                "ratePercentage": 7,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "11.97",
                    "currencyCode": "USD"
                  },
                  "shopMoney": {
                    "amount": "11.97",
                    "currencyCode": "USD"
                  }
                }
              }
            ],
            "appliedDiscount": {
              "title": null,
              "value": 5,
              "valueType": "FIXED_AMOUNT"
            },
            "custom": false
          }
        },
        {
          "node": {
            "id": "gid://shopify/DraftOrderLineItem/654123718",
            "variant": null,
            "product": null,
            "name": "Fingerless wool gloves",
            "sku": "fingerless_wool_gloves",
            "vendor": "Bear Hands",
            "quantity": 2,
            "requiresShipping": true,
            "taxable": true,
            "isGiftCard": false,
            "fulfillmentService": {
              "type": "MANUAL"
            },
            "weight": {
              "unit": "GRAMS",
              "value": 50
            },
            "taxLines": [
              {
                "title": "PST",
                "source": "Shopify",
                "rate": 0.08,
                "ratePercentage": 8,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "10.8",
                    "currencyCode": "USD"
                  },
                  "shopMoney": {
                    "amount": "10.8",
                    "currencyCode": "USD"
                  }
                }
              },
              {
                "title": "GST",
                "source": "Shopify",
                "rate": 0.07,
                "ratePercentage": 7,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "9.45",
                    "currencyCode": "USD"
                  },
                  "shopMoney": {
                    "amount": "9.45",
                    "currencyCode": "USD"
                  }
                }
              }
            ],
            "appliedDiscount": null,
            "custom": true
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
    "invoiceUrl": "https://www.snowdevil.ca/26371970/invoices/ba8dcf6c022ccad3d47e3909e378e22f",
    "appliedDiscount": {
      "title": "Custom",
      "value": 10,
      "valueType": "PERCENTAGE"
    },
    "order": null,
    "shippingLine": {
      "id": "gid://shopify/ShippingLine/671422168?type=draft_order",
      "title": "custom shipping",
      "carrierIdentifier": null,
      "custom": true,
      "code": "custom",
      "deliveryCategory": "shipping",
      "source": "shopify",
      "discountedPriceSet": {
        "presentmentMoney": {
          "amount": "12.25",
          "currencyCode": "USD"
        },
        "shopMoney": {
          "amount": "12.25",
          "currencyCode": "USD"
        }
      }
    },
    "taxLines": [
      {
        "channelLiable": null,
        "priceSet": {
          "presentmentMoney": {
            "amount": "73.08",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "73.08",
            "currencyCode": "USD"
          }
        },
        "rate": 0.08,
        "ratePercentage": 8,
        "source": null,
        "title": "PST"
      },
      {
        "channelLiable": null,
        "priceSet": {
          "presentmentMoney": {
            "amount": "63.95",
            "currencyCode": "USD"
          },
          "shopMoney": {
            "amount": "63.95",
            "currencyCode": "USD"
          }
        },
        "rate": 0.07,
        "ratePercentage": 7,
        "source": null,
        "title": "GST"
      }
    ],
    "tags": [
      "High priority",
      "Wholesale"
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
  }
}
``` 

Examples
--------

Get a draft order by ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20draftOrder(id%3A%20%22gid%3A%2F%2Fshopify%2FDraftOrder%2F276395349%22)%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 draftOrder(id: "gid://shopify/DraftOrder/276395349") {

 name

 }

 }`,

);

const data=await response.json();

```
query {
  draftOrder(id: "gid://shopify/DraftOrder/276395349") {
    name
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { draftOrder(id: \"gid://shopify/DraftOrder/276395349\") { name } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
  }`,
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
  query {
    draftOrder(id: "gid://shopify/DraftOrder/276395349") {
      name
    }
  }
QUERY

response = client.query(query: query)
```

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

›

⌄

⌄

{

"draftOrder": {

"name": "#D1"

}

}


---
*Content truncated at "Updates" section*