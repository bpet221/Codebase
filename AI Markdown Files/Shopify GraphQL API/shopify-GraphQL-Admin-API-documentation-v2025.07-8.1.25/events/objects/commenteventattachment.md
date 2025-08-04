---
title: "CommentEventAttachment"
description: "Shopify GraphQL Admin API documentation for commenteventattachment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment"
extraction_method: "jina"
sections: ['Events', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CommentEventAttachment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment

Markdown Content:
CommentEventAttachment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#main-content)

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

[Anchor to CommentEventAttachment](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#top)
Comment Event Attachment
========================

object

A file attachment associated to a comment event.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#fields)Fields
-----------------------------------------------------------------------------------------------------------------

[Anchor to fileExtension](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#field-CommentEventAttachment.fields.fileExtension)file Extension

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The file extension of the comment event attachment, indicating the file format.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#field-CommentEventAttachment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#field-CommentEventAttachment.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image attached to the comment event.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#field-CommentEventAttachment.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The filename of the comment event attachment.

[Anchor to size](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#field-CommentEventAttachment.fields.size)size

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The size of the attachment.

[Anchor to url](https://shopify.dev/docs/api/admin-graphql/latest/objects/commenteventattachment#field-CommentEventAttachment.fields.url)url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL of the attachment.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CommentEvent.attachments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-attachments)


---
*Content truncated at "Updates" section*