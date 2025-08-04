---
title: "CustomerMergePreview"
description: "Shopify GraphQL Admin API documentation for customermergepreview"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerMergePreview - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview

Markdown Content:
CustomerMergePreview - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#queries)
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

[Anchor to CustomerMergePreview](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#top)
Customer Merge Preview
======================

object

Requires `read_customer_merge` access scope.

A preview of the results of a customer merge request.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to alternateFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#field-CustomerMergePreview.fields.alternateFields)alternate Fields

•[Customer Merge Preview Alternate Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields)

The fields that can be used to override the default fields.

Show fields

[Anchor to blockingFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#field-CustomerMergePreview.fields.blockingFields)blocking Fields

•[Customer Merge Preview Blocking Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewBlockingFields)

The fields that will block the merge if the two customers are merged.

Show fields

[Anchor to customerMergeErrors](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#field-CustomerMergePreview.fields.customerMergeErrors)customer Merge Errors

•[[Customer Merge Error!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError)

The errors blocking the customer merge.

Show fields

[Anchor to defaultFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#field-CustomerMergePreview.fields.defaultFields)default Fields

•[Customer Merge Preview Default Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields)

The fields that will be kept if the two customers are merged.

Show fields

[Anchor to resultingCustomerId](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#field-CustomerMergePreview.fields.resultingCustomerId)resulting Customer Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The resulting customer ID if the two customers are merged.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#queries)Queries
------------------------------------------------------------------------------------------------------------------

[Anchor to customerMergePreview](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview#query-customerMergePreview)[customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview)

•query

Returns a preview of a customer merge request.

Show fields

* * *

Was this section helpful?

Yes No

<?>CustomerMergePreview Queries
-------------------------------

### Queried by

*   <?>[customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/CustomerMergePreview)


---
*Content truncated at "Updates" section*