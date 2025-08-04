---
title: "CustomerMergePreviewDefaultFields"
description: "Shopify GraphQL Admin API documentation for customermergepreviewdefaultfields"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerMergePreviewDefaultFields - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields

Markdown Content:
CustomerMergePreviewDefaultFields - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#main-content)

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

[Anchor to CustomerMergePreviewDefaultFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#top)
Customer Merge Preview Default Fields
=====================================

object

Requires `read_customer_merge` access scope.

The fields that will be kept as part of a customer merge preview.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#fields)Fields
----------------------------------------------------------------------------------------------------------------------------

[Anchor to addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.addresses)addresses

•[Mailing Address Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection)

non-null

The merged addresses resulting from a customer merge.

Show fields

[Anchor to defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.defaultAddress)default Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The default address resulting from a customer merge.

Show fields

[Anchor to discountNodeCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.discountNodeCount)discount Node Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total number of customer-specific discounts resulting from a customer merge.

[Anchor to discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.discountNodes)discount Nodes

•[Discount Node Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection)

non-null

The merged customer-specific discounts resulting from a customer merge.

Show fields

[Anchor to displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.displayName)display Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The full name of the customer, based on the values for `first_name` and `last_name`. If `first_name` and `last_name` aren't available, then this field falls back to the customer's email address. If the customer's email isn't available, then this field falls back to the customer's phone number.

[Anchor to draftOrderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.draftOrderCount)draft Order Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total number of merged draft orders.

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.draftOrders)draft Orders

•[Draft Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

non-null

The merged draft orders resulting from a customer merge.

Show fields

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.email)email

•[Customer Email Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress)

The email state of a customer.

Show fields

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first name resulting from a customer merge.

[Anchor to giftCardCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.giftCardCount)gift Card Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total number of merged gift cards.

[Anchor to giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.giftCards)gift Cards

•[Gift Card Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection)

non-null

The merged gift cards resulting from a customer merge.

Show fields

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The last name resulting from a customer merge.

[Anchor to metafieldCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.metafieldCount)metafield Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total number of merged metafields.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The merged note resulting from a customer merge.

[Anchor to orderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.orderCount)order Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The total number of merged orders.

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null

The merged orders resulting from a customer merge.

Show fields

[Anchor to phoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.phoneNumber)phone Number

•[Customer Phone Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber)

The phone number state of a customer.

Show fields

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields#field-CustomerMergePreviewDefaultFields.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The merged tags resulting from a customer merge.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CustomerMergePreview.defaultFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview#field-defaultFields)


---
*Content truncated at "Updates" section*