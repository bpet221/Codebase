---
title: "AppInstallation"
description: "Shopify GraphQL Admin API documentation for appinstallation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppInstallation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation

Markdown Content:
AppInstallation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#main-content)

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
*   
Apps

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Android Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/androidapplication)
        *   [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/app)
        *   [App Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback)
        *   [App Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#interfaces)
        *   [Apple Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/appleapplication)
        *   [Failed Requirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/failedrequirement)
        *   [Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/link)
        *   [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/publication)
        *   [Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcefeedback)

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

[Anchor to AppInstallation](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#top)
App Installation
================

object

Represents an installed application on a shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.accessScopes)access Scopes

•[[Access Scope!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

non-null

The access scopes granted to the application by a merchant during installation.

Show fields

[Anchor to activeSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.activeSubscriptions)active Subscriptions

•[[App Subscription!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

non-null

The active application subscriptions billed to the shop on a recurring basis.

Show fields

[Anchor to allSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.allSubscriptions)all Subscriptions

•[App Subscription Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection)

non-null

All subscriptions created for a shop.

Show fields

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

Application which is installed.

Show fields

[Anchor to credits](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.credits)credits

•[App Credit Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection)

non-null

Credits that can be used towards future app purchases.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to launchUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.launchUrl)launch Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL to launch the application.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.oneTimePurchases)one Time Purchases

•[App Purchase One Time Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection)

non-null

One-time purchases to a shop.

Show fields

[Anchor to publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.publication)publication

•[Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

The publication associated with the installed application.

Show fields

[Anchor to revenueAttributionRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.revenueAttributionRecords)revenue Attribution Records

•[App Revenue Attribution Record Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection)

non-null

The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes.

Show fields

[Anchor to uninstallUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.uninstallUrl)uninstall Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL to uninstall the application.

### Deprecated fields

[Anchor to channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.channel)channel

•[Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

Deprecated

Show fields

[Anchor to subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#field-AppInstallation.fields.subscriptions)subscriptions

•[[App Subscription!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[App.installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-installation)
*   <->[AppInstallationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#field-nodes)
*   {}[AppInstallationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallationEdge#field-node)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#queries)Queries
-------------------------------------------------------------------------------------------------------------

[Anchor to appInstallation](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#query-appInstallation)[app Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallation)

•query

Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App.

Show fields

[Anchor to appInstallations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#query-appInstallations)[app Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations)

•query

A list of app installations. To use this query, you need to contact [Shopify Support](https://partners.shopify.com/current/support/) to grant your custom app the `read_apps` access scope. Public apps can't be granted this access scope.

Show fields

[Anchor to currentAppInstallation](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#query-currentAppInstallation)[current App Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentAppInstallation)

•query

Return the AppInstallation for the currently authenticated App.

Show fields

* * *

Was this section helpful?

Yes No

<?>AppInstallation Queries
--------------------------

### Queried by

*   <?>[app Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/AppInstallation)
*   <?>[app Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/AppInstallationConnection)
*   <?>[current App Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/AppInstallation)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AppInstallation Implements
-----------------------------

### Implements

*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*