---
title: "metaobjectDefinitionByType"
description: "Shopify GraphQL Admin API documentation for metaobjectdefinitionbytype"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype"
extraction_method: "jina"
sections: ['Metaobjects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectDefinitionByType - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype

Markdown Content:
metaobjectDefinitionByType - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype#main-content)

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

[Anchor to metaobjectDefinitionByType](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype#top)
metaobject Definition By Type
=============================

query

Requires `read_metaobject_definitions` access scope.

Finds a metaobject definition by type.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype#arguments)
Arguments
---------

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype#arguments-type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The type of the metaobject definition to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MetaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectdefinitionbytype#returns-MetaobjectDefinition)Metaobject Definition

•[Metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

Provides the definition of a generic object structure composed of metafields.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### metaobjectDefinitionByType reference

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

metaobjectDefinitionByType(type){

# metaobjectDefinitionByType fields

}

}


---
*Content truncated at "Updates" section*