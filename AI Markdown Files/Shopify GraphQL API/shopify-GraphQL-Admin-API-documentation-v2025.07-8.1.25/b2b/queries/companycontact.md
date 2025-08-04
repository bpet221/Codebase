---
title: "companyContact"
description: "Shopify GraphQL Admin API documentation for companycontact"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact"
extraction_method: "jina"
sections: ['B2B', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyContact - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact

Markdown Content:
companyContact - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact#main-content)

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

[Anchor to companyContact](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact#top)
company Contact
===============

query

Returns a `CompanyContact` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `CompanyContact` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to CompanyContact](https://shopify.dev/docs/api/admin-graphql/latest/queries/companycontact#returns-CompanyContact)Company Contact

•[Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

A person that acts on behalf of company associated to [a customer](https://shopify.dev/api/admin-graphql/latest/objects/customer).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyContact reference

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

companyContact(id){

# companyContact fields

}

}


---
*Content truncated at "Updates" section*