---
title: "companyContactRole"
description: "Shopify GraphQL Admin API documentation for companycontactrole"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole"
extraction_method: "jina"
sections: ['B2B', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyContactRole - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole

Markdown Content:
companyContactRole - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole#main-content)

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

    *   
Queries

        *   [companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies)
        *   [companies Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/companiescount)
        *   [company](https://shopify.dev/docs/api/admin-graphql/latest/queries/company)
        *   [company Contact](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact)
        *   [company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole)
        *   [company Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/companylocation)
        *   [company Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/companylocations)

    *   Mutations   
    *   Objects   

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

[Anchor to companyContactRole](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole#top)
company Contact Role
====================

query

Returns a `CompanyContactRole` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `CompanyContactRole` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to CompanyContactRole](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontactrole#returns-CompanyContactRole)Company Contact Role

•[Company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

The role for a [company contact](https://shopify.dev/api/admin-graphql/latest/objects/companycontact).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyContactRole reference

Hide content

Query Reference
---------------

Copy

9

1

2

3

4

5

›

⌄

⌄

{

companyContactRole(id){

# companyContactRole fields

}

}


---
*Content truncated at "Updates" section*