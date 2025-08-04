---
title: "Segment"
description: "Shopify GraphQL Admin API documentation for segment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/segment"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Segment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/segment

Markdown Content:
Segment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#main-content)

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
*   
Customers

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer)
        *   [Customer Accounts V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountsv2)
        *   [Customer Credit Card Billing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress)
        *   [Customer Email Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress)
        *   [Customer Email Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailmarketingconsentstate)
        *   [Customer Mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergeable)
        *   [Customer Merge Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergeerror)
        *   [Customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview)
        *   [Customer Merge Preview Alternate Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewalternatefields)
        *   [Customer Merge Preview Blocking Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewblockingfields)
        *   [Customer Merge Preview Default Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields)
        *   [Customer Merge Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergerequest)
        *   [Customer Phone Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerphonenumber)
        *   [Customer Segment Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember)
        *   [Customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery)
        *   [Customer Sms Marketing Consent Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsenterror)
        *   [Customer Sms Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate)
        *   [Customer Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerstatistics)
        *   [Market Price Inclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketpriceinclusions)
        *   [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#interfaces)
        *   [Segment Association Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentassociationfilter)
        *   [Segment Attribute Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentattributestatistics)
        *   [Segment Boolean Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentbooleanfilter)
        *   [Segment Date Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentdatefilter)
        *   [Segment Enum Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentenumfilter)
        *   [Segment Event Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmenteventfilter)
        *   [Segment Event Filter Parameter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmenteventfilterparameter)
        *   [Segment Float Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentfloatfilter)
        *   [Segment Integer Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentintegerfilter)
        *   [Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmembership)
        *   [Segment Membership Response](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmembershipresponse)
        *   [Segment Migration](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmigration)
        *   [Segment Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentstatistics)
        *   [Segment String Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentstringfilter)
        *   [Segment Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentvalue)
        *   [Tax App Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxappconfiguration)

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

[Anchor to Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#top)
Segment
=======

object

Requires `read_customers` access scope. Also: The user must not have restricted access.

A dynamic collection of customers based on specific criteria.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#fields)Fields
--------------------------------------------------------------------------------------------------

[Anchor to creationDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#field-Segment.fields.creationDate)creation Date

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the segment was added to the store.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#field-Segment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lastEditDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#field-Segment.fields.lastEditDate)last Edit Date

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the segment was last updated.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#field-Segment.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the segment.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#field-Segment.fields.query)query

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[DiscountCustomerSegments.segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments#field-segments)
*   {}[PriceRuleCustomerSelection.segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-segments)
*   <->[SegmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#field-nodes)
*   {}[SegmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#queries)Queries
-----------------------------------------------------------------------------------------------------

[Anchor to segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#query-segment)[segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)

•query

The Customer Segment.

Show fields

[Anchor to segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#query-segments)[segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

•query

A list of a shop's segments.

Show fields

* * *

Was this section helpful?

Yes No

<?>Segment Queries
------------------

### Queried by

*   <?>[segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/Segment)
*   <?>[segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/SegmentConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#mutations)Mutations
-----------------------------------------------------------------------------------------------------------

[Anchor to segmentCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#mutation-segmentCreate)[segment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)

•mutation

Creates a segment.

Show payload

[Anchor to segmentUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#mutation-segmentUpdate)[segment Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

•mutation

Updates a segment.

Show payload

* * *

Was this section helpful?

Yes No

<~>Segment Mutations
--------------------

### Mutated by

*   <~>[segment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentCreate)
*   <~>[segment Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Segment Implements
---------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*