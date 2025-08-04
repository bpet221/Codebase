---
title: "CustomerCreditCardBillingAddress"
description: "Shopify GraphQL Admin API documentation for customercreditcardbillingaddress"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerCreditCardBillingAddress - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress

Markdown Content:
CustomerCreditCardBillingAddress - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#main-content)

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

[Anchor to CustomerCreditCardBillingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#top)
Customer Credit Card Billing Address
====================================

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

The billing address of a credit card payment instrument.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#fields)Fields
---------------------------------------------------------------------------------------------------------------------------

[Anchor to address1](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.address1)address1

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first line of the address. Typically the street address or PO Box number.

[Anchor to city](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.city)city

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the city, district, village, or town.

[Anchor to country](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.country)country

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the country.

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.countryCode)country Code

•[Country Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

The two-letter code for the country of the address. For example, US.

Show enum values

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first name in the billing address.

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The last name in the billing address.

[Anchor to province](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.province)province

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The region of the address, such as the province, state, or district.

[Anchor to provinceCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.provinceCode)province Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The alphanumeric code for the region. For example, ON.

[Anchor to zip](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress#field-CustomerCreditCardBillingAddress.fields.zip)zip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The zip or postal code of the address.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CustomerCreditCard.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCreditCard#field-billingAddress)
*   {}[CustomerShopPayAgreement.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerShopPayAgreement#field-billingAddress)
*   {}[VaultCreditCard.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/VaultCreditCard#field-billingAddress)


---
*Content truncated at "Updates" section*