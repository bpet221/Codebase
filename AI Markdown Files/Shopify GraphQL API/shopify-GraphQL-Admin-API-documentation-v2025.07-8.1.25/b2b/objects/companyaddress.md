---
title: "CompanyAddress"
description: "Shopify GraphQL Admin API documentation for companyaddress"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyAddress - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress

Markdown Content:
CompanyAddress - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#main-content)

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
*   
B2b

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/company)
        *   [Company Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#interfaces)
        *   [Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact)
        *   [Company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole)
        *   [Company Contact Role Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment)
        *   [Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation)
        *   [Company Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition)
        *   [Company Location Staff Member Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment)
        *   [Company Location Tax Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings)
        *   [Purchasing Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/purchasingcompany)

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to CompanyAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#top)
Company Address
===============

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Represents a billing or shipping address for a company location.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to address1](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.address1)address1

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The first line of the address. Typically the street address or PO Box number.

[Anchor to address2](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.address2)address2

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The second line of the address. Typically the number of the apartment, suite, or unit.

[Anchor to city](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.city)city

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the city, district, village, or town.

[Anchor to companyName](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.companyName)company Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the company.

[Anchor to country](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.country)country

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the country.

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.countryCode)country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

The two-letter code for the country of the address. For example, US.

Show enum values

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was created.

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The first name of the recipient.

[Anchor to formattedAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.formattedAddress)formatted Address

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The formatted version of the address.

Show arguments

### Arguments

[Anchor to withName](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.formattedAddress.arguments.withName)with Name

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether to include the recipient's name in the formatted address.

[Anchor to withCompanyName](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.formattedAddress.arguments.withCompanyName)with Company Name

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Whether to include the company name in the formatted address.

* * *

[Anchor to formattedArea](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.formattedArea)formatted Area

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A comma-separated list of the values for city, province, and country.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The last name of the recipient.

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A unique phone number for the customer. Formatted using E.164 standard. For example, _+16135551111_.

[Anchor to province](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.province)province

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The region of the address, such as the province, state, or district.

[Anchor to recipient](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.recipient)recipient

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The identity of the recipient e.g. 'Receiving Department'.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was last updated.

[Anchor to zip](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.zip)zip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The zip or postal code of the address.

[Anchor to zoneCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#field-CompanyAddress.fields.zoneCode)zone Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The alphanumeric code for the region. For example, ON.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CompanyLocation.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-billingAddress)
*   {}[CompanyLocation.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-shippingAddress)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#mutations)Mutations
------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocationAssignAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#mutation-companyLocationAssignAddress)[company Location Assign Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

•mutation

Updates an address on a company location.

Show payload

* * *

Was this section helpful?

Yes No

<~>CompanyAddress Mutations
---------------------------

### Mutated by

*   <~>[company Location Assign Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CompanyAddress Implements
----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*