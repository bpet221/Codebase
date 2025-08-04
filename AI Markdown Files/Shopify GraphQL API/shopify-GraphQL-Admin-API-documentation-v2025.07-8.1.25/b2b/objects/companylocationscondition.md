---
title: "CompanyLocationsCondition"
description: "Shopify GraphQL Admin API documentation for companylocationscondition"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyLocationsCondition - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition

Markdown Content:
CompanyLocationsCondition - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition#main-content)

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

[Anchor to CompanyLocationsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition#top)
Company Locations Condition
===========================

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

A condition checking the company location a visitor is purchasing for.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition#field-CompanyLocationsCondition.fields.applicationLevel)application Level

•[Market Condition Application Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType)

The application level for the condition.

Show enum values

[Anchor to companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition#field-CompanyLocationsCondition.fields.companyLocations)company Locations

•[Company Location Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

non-null

The company locations that comprise the market.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MarketConditions.companyLocationsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions#field-companyLocationsCondition)


---
*Content truncated at "Updates" section*