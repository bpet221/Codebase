---
title: "marketLocalizableResource"
description: "Shopify GraphQL Admin API documentation for marketlocalizableresource"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource"
extraction_method: "jina"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketLocalizableResource - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource

Markdown Content:
marketLocalizableResource - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource#main-content)

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
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   
Localizations

    *   
Queries

        *   [available Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales)
        *   [market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource)
        *   [market Localizable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources)
        *   [market Localizable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresourcesbyids)
        *   [shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales)
        *   [translatable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresource)
        *   [translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources)
        *   [translatable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresourcesbyids)

    *   Mutations   
    *   Objects   

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

[Anchor to marketLocalizableResource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource#top)
market Localizable Resource
===========================

query

Requires `read_translations` access scope.

A resource that can have localized values for different markets.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource#arguments)
Arguments
---------

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource#arguments-resourceId)resource Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Find a market localizable resource by ID.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MarketLocalizableResource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource#returns-MarketLocalizableResource)Market Localizable Resource

•[Market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource)

A resource that has market localizable fields.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketLocalizableResource reference

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

marketLocalizableResource(resourceId){

# marketLocalizableResource fields

}

}


---
*Content truncated at "Updates" section*