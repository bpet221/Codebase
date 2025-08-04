---
title: "CashTrackingSession"
description: "Shopify GraphQL Admin API documentation for cashtrackingsession"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession"
extraction_method: "jina"
sections: ['Retail', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CashTrackingSession - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession

Markdown Content:
CashTrackingSession - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#main-content)

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
*   
Retail

    *   Queries   
    *   
Objects

        *   [Cash Tracking Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingadjustment)
        *   [Cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#interfaces)
        *   [Point Of Sale Device](https://shopify.dev/docs/api/admin-graphql/latest/objects/pointofsaledevice)

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

[Anchor to CashTrackingSession](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#top)
Cash Tracking Session
=====================

object

Requires `read_cash_tracking` access scope.

Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.adjustments)adjustments

•[Cash Tracking Adjustment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection)

non-null

The adjustments made to the cash drawer during this session.

Show fields

[Anchor to cashTrackingEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.cashTrackingEnabled)cash Tracking Enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this session is tracking cash payments.

[Anchor to cashTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.cashTransactions)cash Transactions

•[Order Transaction Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection)

non-null

The cash transactions made during this session.

Show fields

[Anchor to closingBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.closingBalance)closing Balance

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The counted cash balance when the session was closed.

Show fields

[Anchor to closingNote](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.closingNote)closing Note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The note entered when the session was closed.

[Anchor to closingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.closingStaffMember)closing Staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The user who closed the session.

Show fields

[Anchor to closingTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.closingTime)closing Time

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

When the session was closed.

[Anchor to expectedBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.expectedBalance)expected Balance

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The expected balance at the end of the session or the expected current balance for sessions that are still open.

Show fields

[Anchor to expectedClosingBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.expectedClosingBalance)expected Closing Balance

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The amount that was expected to be in the cash drawer at the end of the session, calculated after the session was closed.

Show fields

[Anchor to expectedOpeningBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.expectedOpeningBalance)expected Opening Balance

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The amount expected to be in the cash drawer based on the previous session.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location of the point of sale device during this session.

Show fields

[Anchor to netCashSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.netCashSales)net Cash Sales

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The net cash sales made for the duration of this cash tracking session.

Show fields

[Anchor to openingBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.openingBalance)opening Balance

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The counted cash balance when the session was opened.

Show fields

[Anchor to openingNote](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.openingNote)opening Note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The note entered when the session was opened.

[Anchor to openingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.openingStaffMember)opening Staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

The user who opened the session.

Show fields

[Anchor to openingTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.openingTime)opening Time

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

When the session was opened.

[Anchor to registerName](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.registerName)register Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The register name for the point of sale device that this session is tracking cash for.

[Anchor to totalAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.totalAdjustments)total Adjustments

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The sum of all adjustments made during the session, excluding the final adjustment.

Show fields

[Anchor to totalCashRefunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.totalCashRefunds)total Cash Refunds

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The sum of all cash refunds for the duration of this cash tracking session.

Show fields

[Anchor to totalCashSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.totalCashSales)total Cash Sales

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The sum of all cash sales for the duration of this cash tracking session.

Show fields

[Anchor to totalDiscrepancy](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#field-CashTrackingSession.fields.totalDiscrepancy)total Discrepancy

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The total discrepancy for the session including starting and ending.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[CashTrackingSessionConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection#field-nodes)
*   {}[CashTrackingSessionEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSessionEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#queries)Queries
-----------------------------------------------------------------------------------------------------------------

[Anchor to cashTrackingSession](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#query-cashTrackingSession)[cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashTrackingSession)

•query

Returns a `CashTrackingSession` resource by ID.

Show fields

[Anchor to cashTrackingSessions](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#query-cashTrackingSessions)[cash Tracking Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashTrackingSessions)

•query

Returns a shop's cash tracking sessions for locations with a POS Pro subscription.

Tip: To query for cash tracking sessions in bulk, you can [perform a bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/queries).

Show fields

* * *

Was this section helpful?

Yes No

<?>CashTrackingSession Queries
------------------------------

### Queried by

*   <?>[cash Tracking Session](https://shopify.dev/docs/api/admin-graphql/latest/queries/CashTrackingSession)
*   <?>[cash Tracking Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/CashTrackingSessionConnection)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/cashtrackingsession#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CashTrackingSession Implements
---------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*