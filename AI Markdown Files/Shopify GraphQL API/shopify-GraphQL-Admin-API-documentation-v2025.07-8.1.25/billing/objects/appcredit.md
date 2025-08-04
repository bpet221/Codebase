---
title: "AppCredit"
description: "Shopify GraphQL Admin API documentation for appcredit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppCredit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit

Markdown Content:
AppCredit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#main-content)

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
*   
Billing

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [App Credit](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#interfaces)
        *   [App Plan V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/appplanv2)
        *   [App Purchase One Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime)
        *   [App Recurring Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing)
        *   [App Revenue Attribution Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord)
        *   [App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription)
        *   [App Subscription Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscount)
        *   [App Subscription Discount Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscountamount)
        *   [App Subscription Discount Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptiondiscountpercentage)
        *   [App Subscription Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscriptionlineitem)
        *   [App Usage Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagepricing)
        *   [App Usage Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/appusagerecord)
        *   [Entitlements Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/entitlementstype)
        *   [Markets Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketstype)
        *   [Shop Billing Preferences](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopbillingpreferences)

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
*   Orders   
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

[Anchor to AppCredit](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#top)
App Credit
==========

object

App credits can be applied by the merchant towards future app purchases, subscriptions, or usage records in Shopify.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#fields)Fields
----------------------------------------------------------------------------------------------------

[Anchor to amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#field-AppCredit.fields.amount)amount

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The amount that can be used towards future app purchases in Shopify.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#field-AppCredit.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the app credit was created.

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#field-AppCredit.fields.description)description

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The description of the app credit.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#field-AppCredit.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#field-AppCredit.fields.test)test

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app credit is a test transaction.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[AppCreditConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection#field-nodes)
*   {}[AppCreditEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCreditEdge#field-node)
*   {}[AppInstallation.credits](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-credits)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcredit#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AppCredit Implements
-----------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*