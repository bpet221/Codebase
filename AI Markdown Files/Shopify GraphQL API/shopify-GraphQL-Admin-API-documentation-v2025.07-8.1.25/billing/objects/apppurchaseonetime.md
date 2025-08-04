---
title: "AppPurchaseOneTime"
description: "Shopify GraphQL Admin API documentation for apppurchaseonetime"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppPurchaseOneTime - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime

Markdown Content:
AppPurchaseOneTime - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#main-content)

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
        *   [App Plan V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/appplanv2)
        *   [App Purchase One Time](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#interfaces)
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

[Anchor to AppPurchaseOneTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#top)
App Purchase One Time
=====================

object

Requires The staff member must have permission to manage app billing or approve app charges if authenticated with an online access token as described in [https://shopify.dev/apps/auth/oauth/access-modes](https://shopify.dev/apps/auth/oauth/access-modes).

Services and features purchased once by a store.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#field-AppPurchaseOneTime.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the app purchase occurred.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#field-AppPurchaseOneTime.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#field-AppPurchaseOneTime.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the app purchase.

[Anchor to price](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#field-AppPurchaseOneTime.fields.price)price

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The amount to be charged to the store for the app purchase.

Show fields

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#field-AppPurchaseOneTime.fields.status)status

•[App Purchase Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus)

non-null

The status of the app purchase.

Show enum values

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#field-AppPurchaseOneTime.fields.test)test

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app purchase is a test transaction.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AppInstallation.oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-oneTimePurchases)
*   <->[AppPurchaseOneTimeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#field-nodes)
*   {}[AppPurchaseOneTimeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTimeEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------

[Anchor to appPurchaseOneTimeCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#mutation-appPurchaseOneTimeCreate)[app Purchase One Time Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

•mutation

Charges a shop for features or services one time. This type of charge is recommended for apps that aren't billed on a recurring basis. Test and demo shops aren't charged.

Show payload

* * *

Was this section helpful?

Yes No

<~>AppPurchaseOneTime Mutations
-------------------------------

### Mutated by

*   <~>[app Purchase One Time Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------

[Anchor to AppPurchase](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#interface-AppPurchase)[App Purchase](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/apppurchaseonetime#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AppPurchaseOneTime Implements
--------------------------------

### Implements

*   ||-[App Purchase](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*