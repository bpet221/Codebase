---
title: "WebhookPubSubEndpoint"
description: "Shopify GraphQL Admin API documentation for webhookpubsubendpoint"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint"
extraction_method: "jina"
sections: ['Webhooks', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: WebhookPubSubEndpoint - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint

Markdown Content:
WebhookPubSubEndpoint - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint#main-content)

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
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   
Webhooks

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Webhook Event Bridge Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookeventbridgeendpoint)
        *   [Webhook Http Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookhttpendpoint)
        *   [Webhook Pub Sub Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint)
        *   [Webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription)

*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to WebhookPubSubEndpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint#top)
Webhook Pub Sub Endpoint
========================

object

A Google Cloud Pub/Sub topic to which webhook subscriptions publish events.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to pubSubProject](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint#field-WebhookPubSubEndpoint.fields.pubSubProject)pub Sub Project

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The Google Cloud Pub/Sub project ID.

[Anchor to pubSubTopic](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhookpubsubendpoint#field-WebhookPubSubEndpoint.fields.pubSubTopic)pub Sub Topic

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The Google Cloud Pub/Sub topic ID.

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [Webhook Subscription Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint)


---
*Content truncated at "Updates" section*