---
title: "standardMetaobjectDefinitionEnable"
description: "Shopify GraphQL Admin API documentation for standardmetaobjectdefinitionenable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable"
extraction_method: "jina"
sections: ['Metaobjects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: standardMetaobjectDefinitionEnable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable

Markdown Content:
standardMetaobjectDefinitionEnable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#main-content)

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
*   Localizations   
*   Metafields   
*   
Metaobjects

    *   Queries   
    *   
Mutations

        *   [metaobject Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete)
        *   [metaobject Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate)
        *   [metaobject Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate)
        *   [metaobject Definition Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitiondelete)
        *   [metaobject Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate)
        *   [metaobject Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete)
        *   [metaobject Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectupdate)
        *   [metaobject Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectupsert)
        *   [standard Metaobject Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable)

    *   Objects   

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

[Anchor to standardMetaobjectDefinitionEnable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#top)
standard Metaobject Definition Enable
=====================================

mutation

Requires `write_metaobject_definitions` access scope.

Enables the specified standard metaobject definition from its template.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#arguments)
Arguments
---------

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#arguments-type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The type of the metaobject definition to enable.

* * *

Was this section helpful?

Yes No

[Anchor to StandardMetaobjectDefinitionEnablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#returns)Standard Metaobject Definition Enable Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to metaobjectDefinition](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#returns-metaobjectDefinition)metaobject Definition

•[Metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

The metaobject definition that was enabled using the standard template.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable#returns-userErrors)user Errors

•[[Metaobject User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### standardMetaobjectDefinitionEnable reference

Hide content

Mutation Reference
------------------

Copy

99

1

2

3

4

5

6

7

8

9

10

11

›

mutation standardMetaobjectDefinitionEnable($type: String!){

standardMetaobjectDefinitionEnable(type: $type) {

 metaobjectDefinition {

 # MetaobjectDefinition fields

 }

 userErrors {

 field

 message

 }

 }

}

Hide content

Input
-----

Variables

Copy

9

1

2

3

›

⌄

{

"type": "<your-type>"

}

```
{
  "type": "<your-type>"
}
```


---
*Content truncated at "Updates" section*