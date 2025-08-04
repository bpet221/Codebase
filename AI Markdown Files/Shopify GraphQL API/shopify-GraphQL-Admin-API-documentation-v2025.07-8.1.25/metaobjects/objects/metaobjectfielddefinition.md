---
title: "MetaobjectFieldDefinition"
description: "Shopify GraphQL Admin API documentation for metaobjectfielddefinition"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition"
extraction_method: "jina"
sections: ['Metaobjects', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MetaobjectFieldDefinition - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition

Markdown Content:
MetaobjectFieldDefinition - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#main-content)

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

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobject)
        *   [Metaobject Access](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectaccess)
        *   [Metaobject Capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilities)
        *   [Metaobject Capabilities Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiesonlinestore)
        *   [Metaobject Capabilities Publishable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiespublishable)
        *   [Metaobject Capabilities Renderable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiesrenderable)
        *   [Metaobject Capabilities Translatable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitiestranslatable)
        *   [Metaobject Capability Data](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydata)
        *   [Metaobject Capability Data Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydataonlinestore)
        *   [Metaobject Capability Data Publishable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydatapublishable)
        *   [Metaobject Capability Definition Data Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore)
        *   [Metaobject Capability Definition Data Renderable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondatarenderable)
        *   [Metaobject Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectdefinition)
        *   [Metaobject Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfield)
        *   [Metaobject Field Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition)

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

[Anchor to MetaobjectFieldDefinition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#top)
Metaobject Field Definition
===========================

object

Defines a field for a MetaobjectDefinition with properties such as the field's data type and validations.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#field-MetaobjectFieldDefinition.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The administrative description.

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#field-MetaobjectFieldDefinition.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A key name used to identify the field within the metaobject composition.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#field-MetaobjectFieldDefinition.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The human-readable name.

[Anchor to required](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#field-MetaobjectFieldDefinition.fields.required)required

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Required status of the field within the metaobject composition.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#field-MetaobjectFieldDefinition.fields.type)type

•[Metafield Definition Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionType)

non-null

The type of data that the field stores.

Show fields

[Anchor to validations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectfielddefinition#field-MetaobjectFieldDefinition.fields.validations)validations

•[[Metafield Definition Validation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionValidation)

non-null

A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for the field. For example, a field with the type `date` can set a minimum date requirement.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MetaobjectDefinition.fieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-fieldDefinitions)
*   {}[MetaobjectField.definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-definition)


---
*Content truncated at "Updates" section*