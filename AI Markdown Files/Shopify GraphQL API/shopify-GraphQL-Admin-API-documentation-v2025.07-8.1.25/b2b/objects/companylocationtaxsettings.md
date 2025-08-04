---
title: "CompanyLocationTaxSettings"
description: "Shopify GraphQL Admin API documentation for companylocationtaxsettings"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyLocationTaxSettings - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings

Markdown Content:
CompanyLocationTaxSettings - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

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
B2B

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/company)
        *   [Company Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress)
        *   [Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact)
        *   [Company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole)
        *   [Company Contact Role Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment)
        *   [Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation)
        *   [Company Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition)
        *   [Company Location Staff Member Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment)
        *   [Company Location Tax Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings)
        *   [Purchasing Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/purchasingcompany)

*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to CompanyLocationTaxSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings#top)
Company Location Tax Settings
=============================

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Represents the tax settings for a company location.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings#fields)Fields
---------------------------------------------------------------------------------------------------------------------

[Anchor to taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings#field-CompanyLocationTaxSettings.fields.taxExempt)tax Exempt

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the location is exempt from taxes.

[Anchor to taxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings#field-CompanyLocationTaxSettings.fields.taxExemptions)tax Exemptions

•[[Tax Exemption!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

non-null

The list of tax exemptions applied to the location.

Show enum values

[Anchor to taxRegistrationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings#field-CompanyLocationTaxSettings.fields.taxRegistrationId)tax Registration Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The tax registration ID for the company location.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CompanyLocation.taxSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-taxSettings)


---
*Content truncated at "Updates" section*