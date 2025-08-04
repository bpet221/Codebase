---
title: "App"
description: "Shopify GraphQL Admin API documentation for app"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/app"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: App - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/app

Markdown Content:
App - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#interfaces)
        *   [App Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback)
        *   [App Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/appinstallation)
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

[Anchor to App](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#top)
App
===

object

A Shopify application.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#fields)Fields
----------------------------------------------------------------------------------------------

[Anchor to apiKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.apiKey)api Key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A unique application API identifier.

[Anchor to appStoreAppUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.appStoreAppUrl)app Store App Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

App store page URL of the app.

[Anchor to appStoreDeveloperUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.appStoreDeveloperUrl)app Store Developer Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

App store page URL of the developer who created the app.

[Anchor to availableAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.availableAccessScopes)available Access Scopes

•[[Access Scope!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

non-null

All requestable access scopes available to the app.

Show fields

[Anchor to banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.banner)banner

•[Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

non-null

Banner image for the app.

Show fields

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Description of the app.

[Anchor to developerName](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.developerName)developer Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the app developer.

[Anchor to developerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.developerType)developer Type

•[App Developer Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppDeveloperType)

non-null

The type of app developer.

Show enum values

[Anchor to embedded](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.embedded)embedded

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app uses the Embedded App SDK.

[Anchor to failedRequirements](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.failedRequirements)failed Requirements

•[[Failed Requirement!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FailedRequirement)

non-null

Requirements that must be met before the app can be installed.

Show fields

[Anchor to features](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.features)features

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A list of app features that are shown in the Shopify App Store listing.

[Anchor to feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.feedback)feedback

•[App Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback)

Feedback from this app about the store.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.handle)handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Handle of the app.

[Anchor to icon](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.icon)icon

•[Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

non-null

Icon that represents the app.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.installation)installation

•[App Installation](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

Corresponding AppInstallation for this shop and App. Returns null if the App is not installed.

Show fields

[Anchor to installUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.installUrl)install Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Webpage where you can install the app.

[Anchor to isPostPurchaseAppInUse](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.isPostPurchaseAppInUse)is Post Purchase App In Use

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app is the [post purchase](https://shopify.dev/apps/checkout/post-purchase) app in use.

[Anchor to optionalAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.optionalAccessScopes)optional Access Scopes

•[[Access Scope!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

non-null

The optional scopes requested by the app. Lists the optional access scopes the app has declared in its configuration. These scopes are optionally requested by the app after installation.

Show fields

[Anchor to previouslyInstalled](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.previouslyInstalled)previously Installed

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app was previously installed on the current shop.

[Anchor to pricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.pricingDetails)pricing Details

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Detailed information about the app pricing.

[Anchor to pricingDetailsSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.pricingDetailsSummary)pricing Details Summary

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Summary of the app pricing details.

[Anchor to privacyPolicyUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.privacyPolicyUrl)privacy Policy Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Link to app privacy policy.

[Anchor to publicCategory](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.publicCategory)public Category

•[App Public Category!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPublicCategory)

non-null

The public category for the app.

Show enum values

[Anchor to published](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.published)published

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app is published to the Shopify App Store.

[Anchor to requestedAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.requestedAccessScopes)requested Access Scopes

•[[Access Scope!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

non-null

The access scopes requested by the app. Lists the access scopes the app has declared in its configuration. Merchant must grant approval to these scopes for the app to be installed.

Show fields

[Anchor to screenshots](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.screenshots)screenshots

•[[Image!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

non-null

Screenshots of the app.

Show fields

[Anchor to shopifyDeveloped](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.shopifyDeveloped)shopify Developed

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the app was developed by Shopify.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Name of the app.

[Anchor to uninstallMessage](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.uninstallMessage)uninstall Message

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Message that appears when the app is uninstalled. For example: By removing this app, you will no longer be able to publish products to MySocialSite or view this app in your Shopify admin. You can re-enable this channel at any time.

[Anchor to webhookApiVersion](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.webhookApiVersion)webhook Api Version

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The webhook API version for the app.

### Deprecated fields

[Anchor to developerUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.developerUrl)developer Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null Deprecated

[Anchor to launchUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.launchUrl)launch Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null Deprecated

[Anchor to navigationItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.navigationItems)navigation Items

•[[Navigation Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem)

non-null Deprecated

Show fields

[Anchor to uninstallUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#field-App.fields.uninstallUrl)uninstall Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Abandonment.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-app)
*   {}[AppCatalog.apps](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-apps)
*   <->[AppConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#field-nodes)
*   {}[AppDiscountType.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType#field-app)
*   {}[AppEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppEdge#field-node)
*   {}[AppFeedback.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-app)
*   {}[AppInstallation.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-app)
*   {}[Channel.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-app)
*   {}[ChannelInformation.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelInformation#field-app)
*   {}[DiscountRedeemCode.createdBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode#field-createdBy)
*   {}[FulfillmentHold.heldByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold#field-heldByApp)
*   {}[InventoryAdjustmentGroup.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-app)
*   {}[MarketingActivity.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-app)
*   {}[MarketingEvent.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-app)
*   {}[Metaobject.createdBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-createdBy)
*   {}[Metaobject.createdByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-createdByApp)
*   {}[MetaobjectDefinition.createdByApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-createdByApp)
*   {}[OrderAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-app)
*   {}[OrderEditAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-app)
*   {}[OrderRiskAssessment.provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment#field-provider)
*   {}[PriceRule.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-app)
*   {}[PriceRuleDiscountCode.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode#field-app)
*   {}[RefundAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-app)
*   {}[ReturnAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-app)
*   ||-[SalesAgreement.app](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#field-app)
*   {}[Shop.availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-availableChannelApps)
*   {}[ShopifyFunction.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction#field-app)
*   {}[SubscriptionBillingCycleEditedContract.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-app)
*   {}[SubscriptionContract.app](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-app)
*   ||-[SubscriptionContractBase.app](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#field-app)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#queries)Queries
-------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#query-app)[app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)

•query

Lookup an App by ID or return the currently authenticated App.

Show fields

[Anchor to appByHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#query-appByHandle)[app By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appByHandle)

•query

Fetches app by handle. Returns null if the app doesn't exist.

Show fields

[Anchor to appByKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#query-appByKey)[app By Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appByKey)

•query

Fetches an app by its client ID. Returns null if the app doesn't exist.

Show fields

* * *

Was this section helpful?

Yes No

<?>App Queries
--------------

### Queried by

*   <?>[app](https://shopify.dev/docs/api/admin-graphql/latest/queries/App)
*   <?>[app By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/App)
*   <?>[app By Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/App)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#mutations)Mutations
-------------------------------------------------------------------------------------------------------

[Anchor to appUninstall](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#mutation-appUninstall)[app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

•mutation

Uninstalls an app.

Show payload

* * *

Was this section helpful?

Yes No

<~>App Mutations
----------------

### Mutated by

*   <~>[app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appUninstall)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/app#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-App Implements
-----------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*