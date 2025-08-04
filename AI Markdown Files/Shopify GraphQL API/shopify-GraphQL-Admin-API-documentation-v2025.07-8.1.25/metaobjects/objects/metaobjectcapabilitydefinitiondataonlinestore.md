---
title: "MetaobjectCapabilityDefinitionDataOnlineStore"
description: "Shopify GraphQL Admin API documentation for metaobjectcapabilitydefinitiondataonlinestore"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore"
extraction_method: "jina"
sections: ['Metaobjects', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MetaobjectCapabilityDefinitionDataOnlineStore - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore

Markdown Content:
MetaobjectCapabilityDefinitionDataOnlineStore - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore#main-content)

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

[Anchor to MetaobjectCapabilityDefinitionDataOnlineStore](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore#top)
Metaobject Capability Definition Data Online Store
==================================================

object

The Online Store capability data for the metaobject definition.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore#fields)Fields
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to canCreateRedirects](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore#field-MetaobjectCapabilityDefinitionDataOnlineStore.fields.canCreateRedirects)can Create Redirects

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Flag indicating if a sufficient number of redirects are available to redirect all published entries.

[Anchor to urlHandle](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectcapabilitydefinitiondataonlinestore#field-MetaobjectCapabilityDefinitionDataOnlineStore.fields.urlHandle)url Handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The URL handle for accessing pages of this metaobject type in the Online Store.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[MetaobjectCapabilitiesOnlineStore.data](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilitiesOnlineStore#field-data)


---
*Content truncated at "Updates" section*