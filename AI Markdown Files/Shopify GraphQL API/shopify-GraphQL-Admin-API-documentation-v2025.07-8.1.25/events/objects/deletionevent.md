---
title: "DeletionEvent"
description: "Shopify GraphQL Admin API documentation for deletionevent"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent"
extraction_method: "jina"
sections: ['Events', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DeletionEvent - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent

Markdown Content:
DeletionEvent - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#main-content)

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
*   
Events

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Basic Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/basicevent)
        *   [Comment Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/commentevent)
        *   [Comment Event Attachment](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment)
        *   [Deletion Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#queries)
        *   [Resource Alert](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert)
        *   [Resource Alert Action](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealertaction)
        *   [Shop Alert](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalert)
        *   [Shop Alert Action](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopalertaction)

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
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to DeletionEvent](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#top)
Deletion Event
==============

object

Deletion events chronicle the destruction of resources (e.g. products and collections). Once deleted, the deletion event is the only trace of the original's existence, as the resource itself has been removed and can no longer be accessed.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to occurredAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#field-DeletionEvent.fields.occurredAt)occurred At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the deletion event for the related resource was generated.

[Anchor to subjectId](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#field-DeletionEvent.fields.subjectId)subject Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The ID of the resource that was deleted.

[Anchor to subjectType](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#field-DeletionEvent.fields.subjectType)subject Type

•[Deletion Event Subject Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

non-null

The type of resource that was deleted.

Show enum values

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[DeletionEventConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#field-nodes)
*   {}[DeletionEventEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEventEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#queries)Queries
-----------------------------------------------------------------------------------------------------------

[Anchor to deletionEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/deletionevent#query-deletionEvents)[deletion Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionEvents)

•query

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

<?>DeletionEvent Queries
------------------------

Show deprecations


---
*Content truncated at "Updates" section*