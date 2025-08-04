---
title: "ShopAddress"
description: "Shopify GraphQL Admin API documentation for shopaddress"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopAddress - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress

Markdown Content:
ShopAddress - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#interfaces)
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

[Anchor to ShopAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#top)
Shop Address
============

object

An address for a shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to address1](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.address1)address1

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first line of the address. Typically the street address or PO Box number.

[Anchor to address2](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.address2)address2

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The second line of the address. Typically the number of the apartment, suite, or unit.

[Anchor to city](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.city)city

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the city, district, village, or town.

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.company)company

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the company or organization.

[Anchor to coordinatesValidated](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.coordinatesValidated)coordinates Validated

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the address coordinates are valid.

[Anchor to country](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.country)country

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the country.

[Anchor to countryCodeV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.countryCodeV2)country Code V2

•[Country Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

The two-letter code for the country of the address.

For example, US.

Show enum values

[Anchor to formatted](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.formatted)formatted

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A formatted version of the address, customized by the provided arguments.

Show arguments

### Arguments

[Anchor to withCompany](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.formatted.arguments.withCompany)with Company

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Whether to include the company in the formatted address.

* * *

[Anchor to formattedArea](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.formattedArea)formatted Area

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A comma-separated list of the values for city, province, and country.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to latitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.latitude)latitude

•[Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

The latitude coordinate of the address.

[Anchor to longitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.longitude)longitude

•[Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

The longitude coordinate of the address.

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A phone number associated with the address.

Formatted using E.164 standard. For example, _+16135551111_.

[Anchor to province](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.province)province

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The region of the address, such as the province, state, or district.

[Anchor to provinceCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.provinceCode)province Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The alphanumeric code for the region.

For example, ON.

[Anchor to zip](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.zip)zip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The zip or postal code of the address.

### Deprecated fields

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.countryCode)country Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#field-ShopAddress.fields.name)name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Shop.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-billingAddress)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-ShopAddress Implements
-------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*