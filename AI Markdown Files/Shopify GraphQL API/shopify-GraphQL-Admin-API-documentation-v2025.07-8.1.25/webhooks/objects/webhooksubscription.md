---
title: "WebhookSubscription"
description: "Shopify GraphQL Admin API documentation for webhooksubscription"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription"
extraction_method: "jina"
sections: ['Webhooks', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: WebhookSubscription - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription

Markdown Content:
WebhookSubscription - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#main-content)

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
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#interfaces)

*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to WebhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#top)
Webhook Subscription
====================

object

A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API. It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic. When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination. Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to apiVersion](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.apiVersion)api Version

•[Api Version!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion)

non-null

The Admin API version that Shopify uses to serialize webhook events. This value is inherited from the app that created the webhook subscription.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the webhook subscription was created.

[Anchor to filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.filter)filter

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.

[Anchor to format](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.format)format

•[Webhook Subscription Format!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

non-null

The format in which the webhook subscription should send the data.

Show enum values

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to includeFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.includeFields)include Fields

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The list of fields to be included in the webhook subscription. Only the fields specified will be included in the webhook payload. If null, then all fields will be included. Learn more about [modifying webhook payloads](https://shopify.dev/docs/apps/build/webhooks/customize/modify_payloads).

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to metafieldNamespaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.metafieldNamespaces)metafield Namespaces

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The list of namespaces for any metafields that should be included in the webhook subscription.

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.metafields)metafields

•[[Webhook Subscription Metafield Identifier!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionMetafieldIdentifier)

non-null

The list of identifiers specifying metafields to include in the webhook subscription.

Show fields

[Anchor to topic](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.topic)topic

•[Webhook Subscription Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

non-null

The type of event that triggers the webhook. The topic determines when the webhook subscription sends a webhook, as well as what class of data object that webhook contains.

Show enum values

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the webhook subscription was updated.

### Deprecated fields

[Anchor to callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.callbackUrl)callback Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null Deprecated

[Anchor to endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#field-WebhookSubscription.fields.endpoint)endpoint

•[Webhook Subscription Endpoint!](https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint)

non-null Deprecated

Show union types

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[WebhookSubscriptionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#field-nodes)
*   {}[WebhookSubscriptionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#queries)Queries
-----------------------------------------------------------------------------------------------------------------

[Anchor to webhookSubscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#query-webhookSubscription)[webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscription)

•query

Returns a webhook subscription by ID.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

Show fields

[Anchor to webhookSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#query-webhookSubscriptions)[webhook Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

•query

Returns a list of webhook subscriptions.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

Show fields

* * *

Was this section helpful?

Yes No

<?>WebhookSubscription Queries
------------------------------

### Queried by

*   <?>[webhook Subscription](https://shopify.dev/docs/api/admin-graphql/latest/queries/WebhookSubscription)
*   <?>[webhook Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/WebhookSubscriptionConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------------

[Anchor to webhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutation-webhookSubscriptionCreate)[webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)

•mutation

Creates a new webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

Show payload

[Anchor to webhookSubscriptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutation-webhookSubscriptionUpdate)[webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

•mutation

Updates a webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

Show payload

### Deprecated mutations

[Anchor to eventBridgeWebhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutation-eventBridgeWebhookSubscriptionCreate)[event Bridge Webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate)

•mutation

Deprecated

Show payload

[Anchor to eventBridgeWebhookSubscriptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutation-eventBridgeWebhookSubscriptionUpdate)[event Bridge Webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionUpdate)

•mutation

Deprecated

Show payload

[Anchor to pubSubWebhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutation-pubSubWebhookSubscriptionCreate)[pub Sub Webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionCreate)

•mutation

Deprecated

Show payload

[Anchor to pubSubWebhookSubscriptionUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#mutation-pubSubWebhookSubscriptionUpdate)[pub Sub Webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionUpdate)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>WebhookSubscription Mutations
--------------------------------

### Mutated by

*   <~>[webhook Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)
*   <~>[webhook Subscription Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscription#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-WebhookSubscription Implements
---------------------------------

### Implements

*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*