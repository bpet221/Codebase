---
title: "ResourceAlert"
description: "Shopify GraphQL Admin API documentation for resourcealert"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert"
extraction_method: "jina"
sections: ['Events', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ResourceAlert - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert

Markdown Content:
ResourceAlert - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#main-content)

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

[Anchor to ResourceAlert](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#top)
Resource Alert
==============

object

An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants. They can optionally have a specific icon and be dismissed by merchants.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to actions](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#field-ResourceAlert.fields.actions)actions

•[[Resource Alert Action!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlertAction)

non-null

Buttons in the alert that link to related information. For example, _Edit variants_.

Show fields

[Anchor to content](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#field-ResourceAlert.fields.content)content

•[HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

non-null

The secondary text in the alert that includes further information or instructions about how to solve a problem.

[Anchor to dismissibleHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#field-ResourceAlert.fields.dismissibleHandle)dismissible Handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Unique identifier that appears when an alert is manually closed by the merchant. Most alerts can't be manually closed.

[Anchor to icon](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#field-ResourceAlert.fields.icon)icon

•[Resource Alert Icon](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceAlertIcon)

An icon that's optionally displayed with the alert.

Show enum values

[Anchor to severity](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#field-ResourceAlert.fields.severity)severity

•[Resource Alert Severity!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceAlertSeverity)

non-null

Indication of how important the alert is.

Show enum values

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcealert#field-ResourceAlert.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The primary text in the alert that includes information or describes the problem.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CalculatedDraftOrder.alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-alerts)
*   {}[Order.alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-alerts)


---
*Content truncated at "Updates" section*