---
title: "BusinessEntityAddress"
description: "Shopify GraphQL Admin API documentation for businessentityaddress"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: BusinessEntityAddress - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress

Markdown Content:
BusinessEntityAddress - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#main-content)

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

[Anchor to BusinessEntityAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#top)
Business Entity Address
=======================

object

Represents the address of a merchant's Business Entity.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to address1](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#field-BusinessEntityAddress.fields.address1)address1

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first line of the address. Typically the street address or PO Box number.

[Anchor to address2](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#field-BusinessEntityAddress.fields.address2)address2

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The second line of the address. Typically the number of the apartment, suite, or unit.

[Anchor to city](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#field-BusinessEntityAddress.fields.city)city

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the city, district, village, or town.

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#field-BusinessEntityAddress.fields.countryCode)country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

The country code of the merchant's Business Entity.

Show enum values

[Anchor to province](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#field-BusinessEntityAddress.fields.province)province

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The region of the address, such as the province, state, or district.

[Anchor to zip](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress#field-BusinessEntityAddress.fields.zip)zip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The zip or postal code of the address.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[BusinessEntity.address](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity#field-address)


---
*Content truncated at "Updates" section*