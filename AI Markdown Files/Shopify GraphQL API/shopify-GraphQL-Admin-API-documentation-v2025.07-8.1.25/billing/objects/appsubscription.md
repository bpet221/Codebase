---
title: "AppSubscription"
description: "Shopify GraphQL Admin API documentation for appsubscription"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription"
extraction_method: "jina"
sections: ['Billing', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppSubscription - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription

Markdown Content:
AppSubscription - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#main-content)

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
        *   [App Recurring Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprecurringpricing)
        *   [App Revenue Attribution Record](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevenueattributionrecord)
        *   [App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#interfaces)
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

[Anchor to AppSubscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#top)
App Subscription
================

object

Provides users access to services and/or features for a duration of time.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the app subscription was created.

[Anchor to currentPeriodEnd](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.currentPeriodEnd)current Period End

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the current app subscription period ends. Returns `null` if the subscription isn't active.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.lineItems)line Items

•[[App Subscription Line Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem)

non-null

The plans attached to the app subscription.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the app subscription.

[Anchor to returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.returnUrl)return Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL that the merchant is redirected to after approving the app subscription.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.status)status

•[App Subscription Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionStatus)

non-null

The status of the app subscription.

Show enum values

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.test)test

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Specifies whether the app subscription is a test transaction.

[Anchor to trialDays](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#field-AppSubscription.fields.trialDays)trial Days

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The number of free trial days, starting at the subscription's creation date, by which billing is delayed.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AppInstallation.activeSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-activeSubscriptions)
*   {}[AppInstallation.allSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-allSubscriptions)
*   <->[AppSubscriptionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#field-nodes)
*   {}[AppSubscriptionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionEdge#field-node)

Show deprecations

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------

[Anchor to appSubscriptionCancel](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#mutation-appSubscriptionCancel)[app Subscription Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)

•mutation

Cancels an app subscription on a store.

Show payload

[Anchor to appSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#mutation-appSubscriptionCreate)[app Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)

•mutation

Allows an app to charge a store for features or services on a recurring basis.

Show payload

[Anchor to appSubscriptionLineItemUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#mutation-appSubscriptionLineItemUpdate)[app Subscription Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)

•mutation

Updates the capped amount on the usage pricing plan of an app subscription line item.

Show payload

[Anchor to appSubscriptionTrialExtend](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#mutation-appSubscriptionTrialExtend)[app Subscription Trial Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

•mutation

Extends the trial of an app subscription.

Show payload

* * *

Was this section helpful?

Yes No

<~>AppSubscription Mutations
----------------------------

### Mutated by

*   <~>[app Subscription Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCancel)
*   <~>[app Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate)
*   <~>[app Subscription Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionLineItemUpdate)
*   <~>[app Subscription Trial Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/appsubscription#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AppSubscription Implements
-----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*