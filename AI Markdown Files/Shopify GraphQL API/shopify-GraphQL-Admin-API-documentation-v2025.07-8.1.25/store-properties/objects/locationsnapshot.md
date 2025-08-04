---
title: "LocationSnapshot"
description: "Shopify GraphQL Admin API documentation for locationsnapshot"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: LocationSnapshot - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot

Markdown Content:
LocationSnapshot - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#main-content)

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
*   
Store Properties

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Business Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity)
        *   [Business Entity Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress)
        *   [Cart Transform Eligible Operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformeligibleoperations)
        *   [Cart Transform Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformfeature)
        *   [Currency Formats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats)
        *   [Filter Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/filteroption)
        *   [Limited Pending Order Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/limitedpendingordercount)
        *   [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location)
        *   [Location Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationaddress)
        *   [Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationscondition)
        *   [Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot)
        *   [Location Suggested Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsuggestedaddress)
        *   [Navigation Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/navigationitem)
        *   [Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop)
        *   [Shop Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress)
        *   [Shop Features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures)
        *   [Shop Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopplan)
        *   [Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to LocationSnapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#top)
Location Snapshot
=================

object

A snapshot of location details including name and address captured at a specific point in time. Refer to the parent model to know the lifecycle.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#field-LocationSnapshot.fields.address)address

•[Location Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress)

non-null

The address details of the location as they were when the snapshot was recorded.

Show fields

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#field-LocationSnapshot.fields.location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

A reference to the live Location object, if it still exists and is accessible. This provides current details of the location, which may differ from the snapshotted name and address.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#field-LocationSnapshot.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the location as it was when the snapshot was recorded.

[Anchor to snapshottedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot#field-LocationSnapshot.fields.snapshottedAt)snapshotted At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when these snapshot details (name and address) were recorded.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[InventoryTransfer.destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-destination)
*   {}[InventoryTransfer.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-origin)


---
*Content truncated at "Updates" section*