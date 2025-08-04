---
title: "CustomerEmailAddress"
description: "Shopify GraphQL Admin API documentation for customeremailaddress"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerEmailAddress - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress

Markdown Content:
CustomerEmailAddress - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#main-content)

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

[Anchor to CustomerEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#top)
Customer Email Address
======================

object

Requires `read_customers` access scope.

Represents an email address.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to emailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.emailAddress)email Address

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The customer's default email address.

[Anchor to marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.marketingOptInLevel)marketing Opt In Level

•[Customer Marketing Opt In Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines, received when the marketing consent was updated.

Show enum values

[Anchor to marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.marketingState)marketing State

•[Customer Email Address Marketing State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressMarketingState)

non-null

Whether the customer has subscribed to email marketing.

Show enum values

[Anchor to marketingUnsubscribeUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.marketingUnsubscribeUrl)marketing Unsubscribe Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL to unsubscribe a member from all mailing lists.

[Anchor to marketingUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.marketingUpdatedAt)marketing Updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time at which the marketing consent was updated.

No date is provided if the email address never updated its marketing consent.

[Anchor to openTrackingLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.openTrackingLevel)open Tracking Level

•[Customer Email Address Open Tracking Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressOpenTrackingLevel)

non-null

Whether the customer has opted in to having their opened emails tracked.

Show enum values

[Anchor to openTrackingUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.openTrackingUrl)open Tracking Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL that can be used to opt a customer in or out of email open tracking.

[Anchor to sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.sourceLocation)source Location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location where the customer consented to receive marketing material by email.

Show fields

[Anchor to validFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress#field-CustomerEmailAddress.fields.validFormat)valid Format

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the email address is formatted correctly.

Returns `true` when the email is formatted correctly. This doesn't guarantee that the email address actually exists.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Customer.defaultEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-defaultEmailAddress)
*   {}[CustomerMergePreviewAlternateFields.email](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields#field-email)
*   {}[CustomerMergePreviewDefaultFields.email](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-email)
*   {}[CustomerSegmentMember.defaultEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-defaultEmailAddress)


---
*Content truncated at "Updates" section*