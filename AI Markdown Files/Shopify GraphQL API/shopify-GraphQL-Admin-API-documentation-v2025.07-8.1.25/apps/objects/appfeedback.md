---
title: "AppFeedback"
description: "Shopify GraphQL Admin API documentation for appfeedback"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback"
extraction_method: "jina"
sections: ['Apps', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AppFeedback - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback

Markdown Content:
AppFeedback - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#mutations)
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

[Anchor to AppFeedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#top)
App Feedback
============

object

Reports the status of shops and their resources and displays this information within Shopify admin. AppFeedback is used to notify merchants about steps they need to take to set up an app on their store.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to app](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#field-AppFeedback.fields.app)app

•[App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

non-null

The application associated to the feedback.

Show fields

[Anchor to feedbackGeneratedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#field-AppFeedback.fields.feedbackGeneratedAt)feedback Generated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the app feedback was generated.

[Anchor to link](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#field-AppFeedback.fields.link)link

•[Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/Link)

A link to where merchants can resolve errors.

Show fields

[Anchor to messages](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#field-AppFeedback.fields.messages)messages

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The feedback message presented to the merchant.

Show fields

[Anchor to state](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#field-AppFeedback.fields.state)state

•[Resource Feedback State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceFeedbackState)

non-null

Conveys the state of the feedback and whether it requires merchant action or not.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[App.feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-feedback)
*   {}[ResourceFeedback.details](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback#field-details)

Show deprecations

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to shopResourceFeedbackCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/appfeedback#mutation-shopResourceFeedbackCreate)[shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)

•mutation

The `ResourceFeedback` object lets your app report the status of shops and their resources. For example, if your app is a marketplace channel, then you can use resource feedback to alert merchants that they need to connect their marketplace account by signing in.

Resource feedback notifications are displayed to the merchant on the home screen of their Shopify admin, and in the product details view for any products that are published to your app.

This resource should be used only in cases where you're describing steps that a merchant is required to complete. If your app offers optional or promotional set-up steps, or if it makes recommendations, then don't use resource feedback to let merchants know about them.

Sending feedback on a shop
--------------------------

You can send resource feedback on a shop to let the merchant know what steps they need to take to make sure that your app is set up correctly. Feedback can have one of two states: `requires_action` or `success`. You need to send a `requires_action` feedback request for each step that the merchant is required to complete.

If there are multiple set-up steps that require merchant action, then send feedback with a state of `requires_action` as merchants complete prior steps. And to remove the feedback message from the Shopify admin, send a `success` feedback request.

#### Important

Sending feedback replaces previously sent feedback for the shop. Send a new `shopResourceFeedbackCreate` mutation to push the latest state of a shop or its resources to Shopify.

Show payload

* * *

Was this section helpful?

Yes No

<~>AppFeedback Mutations
------------------------

### Mutated by

*   <~>[shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopResourceFeedbackCreate)


---
*Content truncated at "Updates" section*