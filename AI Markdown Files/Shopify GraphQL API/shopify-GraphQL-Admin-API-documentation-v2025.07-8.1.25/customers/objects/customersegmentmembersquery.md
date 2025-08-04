---
title: "CustomerSegmentMembersQuery"
description: "Shopify GraphQL Admin API documentation for customersegmentmembersquery"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerSegmentMembersQuery - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery

Markdown Content:
CustomerSegmentMembersQuery - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#interfaces)
        *   [Customer Sms Marketing Consent Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsenterror)
        *   [Customer Sms Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate)
        *   [Customer Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerstatistics)
        *   [Market Price Inclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketpriceinclusions)
        *   [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment)
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

[Anchor to CustomerSegmentMembersQuery](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#top)
Customer Segment Members Query
==============================

object

Requires `read_customers` access scope. Also: The user must not have restricted access.

A job to determine a list of members, such as customers, that are associated with an individual segment.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#fields)Fields
----------------------------------------------------------------------------------------------------------------------

[Anchor to currentCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#field-CustomerSegmentMembersQuery.fields.currentCount)current Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The current total number of members in a given segment.

[Anchor to done](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#field-CustomerSegmentMembersQuery.fields.done)done

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

This indicates if the job is still queued or has been run.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#field-CustomerSegmentMembersQuery.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID that's returned when running an asynchronous mutation.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#queries)Queries
-------------------------------------------------------------------------------------------------------------------------

[Anchor to customerSegmentMembersQuery](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#query-customerSegmentMembersQuery)[customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembersQuery)

•query

Returns a segment members query resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>CustomerSegmentMembersQuery Queries
--------------------------------------

### Queried by

*   <?>[customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/CustomerSegmentMembersQuery)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to customerSegmentMembersQueryCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#mutation-customerSegmentMembersQueryCreate)[customer Segment Members Query Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

•mutation

Creates a customer segment members query.

Show payload

* * *

Was this section helpful?

Yes No

<~>CustomerSegmentMembersQuery Mutations
----------------------------------------

### Mutated by

*   <~>[customer Segment Members Query Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to JobResult](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#interface-JobResult)[Job Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CustomerSegmentMembersQuery Implements
-----------------------------------------

### Implements

*   ||-[Job Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*