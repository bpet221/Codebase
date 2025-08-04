---
title: "CustomerSmsMarketingConsentState"
description: "Shopify GraphQL Admin API documentation for customersmsmarketingconsentstate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerSmsMarketingConsentState - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate

Markdown Content:
CustomerSmsMarketingConsentState - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#main-content)

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

[Anchor to CustomerSmsMarketingConsentState](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#top)
Customer Sms Marketing Consent State
====================================

object

Requires `read_customers` access scope.

The record of when a customer consented to receive marketing material by SMS.

The customer's consent state reflects the record with the most recent date when consent was updated.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#fields)Fields
---------------------------------------------------------------------------------------------------------------------------

[Anchor to consentCollectedFrom](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#field-CustomerSmsMarketingConsentState.fields.consentCollectedFrom)consent Collected From

•[Customer Consent Collected From](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerConsentCollectedFrom)

The source from which the SMS marketing information for the customer was collected.

Show enum values

[Anchor to consentUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#field-CustomerSmsMarketingConsentState.fields.consentUpdatedAt)consent Updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the customer consented to receive marketing material by SMS. If no date is provided, then the date and time when the consent information was sent is used.

[Anchor to marketingOptInLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#field-CustomerSmsMarketingConsentState.fields.marketingOptInLevel)marketing Opt In Level

•[Customer Marketing Opt In Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

non-null

The marketing subscription opt-in level that was set when the customer consented to receive marketing information.

Show enum values

[Anchor to marketingState](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#field-CustomerSmsMarketingConsentState.fields.marketingState)marketing State

•[Customer Sms Marketing State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSmsMarketingState)

non-null

The current SMS marketing state for the customer.

Show enum values

[Anchor to sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate#field-CustomerSmsMarketingConsentState.fields.sourceLocation)source Location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location where the customer consented to receive marketing material by SMS.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

Show deprecations


---
*Content truncated at "Updates" section*