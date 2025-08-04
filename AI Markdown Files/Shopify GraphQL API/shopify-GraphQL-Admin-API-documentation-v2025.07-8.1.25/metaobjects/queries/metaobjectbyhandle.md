---
title: "metaobjectByHandle"
description: "Shopify GraphQL Admin API documentation for metaobjectbyhandle"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle"
extraction_method: "jina"
sections: ['Metaobjects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectByHandle - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle

Markdown Content:
metaobjectByHandle - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle#main-content)

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
*   
Metaobjects

    *   
Queries

        *   [metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobject)
        *   [metaobject By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle)
        *   [metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinition)
        *   [metaobject Definition By Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype)
        *   [metaobject Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitions)
        *   [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

    *   Mutations   
    *   Objects   

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

[Anchor to metaobjectByHandle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle#top)
metaobject By Handle
====================

query

Requires `read_metaobjects` access scope.

Retrieves a metaobject by handle.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle#arguments-handle)handle

•[Metaobject Handle Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

required

The identifier of the metaobject to return.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle#possible-returns)Possible returns
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectbyhandle#returns-Metaobject)Metaobject

•[Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

Provides an object instance represented by a MetaobjectDefinition.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### metaobjectByHandle reference

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

metaobjectByHandle(handle){

# metaobjectByHandle fields

}

}


---
*Content truncated at "Updates" section*