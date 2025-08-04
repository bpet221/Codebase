---
title: "CashTrackingAdjustment"
description: "Shopify GraphQL Admin API documentation for cashtrackingadjustment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment"
extraction_method: "jina"
sections: ['Retail', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CashTrackingAdjustment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment

Markdown Content:
CashTrackingAdjustment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#main-content)

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
*   
Retail

    *   Queries   
    *   
Objects

        *   [Cash Tracking Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#interfaces)
        *   [Cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession)
        *   [Point Of Sale Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/pointofsaledevice)

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

[Anchor to CashTrackingAdjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#top)
Cash Tracking Adjustment
========================

object

Requires `read_cash_tracking` access scope.

Tracks an adjustment to the cash in a cash tracking session for a point of sale device over the course of a shift.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#fields)Fields
-----------------------------------------------------------------------------------------------------------------

[Anchor to cash](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#field-CashTrackingAdjustment.fields.cash)cash

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The amount of cash being added or removed.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#field-CashTrackingAdjustment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#field-CashTrackingAdjustment.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The note entered when the adjustment was made.

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#field-CashTrackingAdjustment.fields.staffMember)staff Member

•[Staff Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

non-null

The staff member who made the adjustment.

Show fields

[Anchor to time](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#field-CashTrackingAdjustment.fields.time)time

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The time when the adjustment was made.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[CashTrackingAdjustmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#field-nodes)
*   {}[CashTrackingAdjustmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustmentEdge#field-node)
*   {}[CashTrackingSession.adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-adjustments)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CashTrackingAdjustment Implements
------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*