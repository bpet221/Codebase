---
title: "CountryHarmonizedSystemCode"
description: "Shopify GraphQL Admin API documentation for countryharmonizedsystemcode"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode"
extraction_method: "jina"
sections: ['Inventory', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CountryHarmonizedSystemCode - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode

Markdown Content:
CountryHarmonizedSystemCode - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode#main-content)

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
*   
Inventory

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Country Harmonized System Code](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode)
        *   [Inventory Adjustment Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryadjustmentgroup)
        *   [Inventory Change](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorychange)
        *   [Inventory Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitem)
        *   [Inventory Item Measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryitemmeasurement)
        *   [Inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorylevel)
        *   [Inventory Properties](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryproperties)
        *   [Inventory Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantity)
        *   [Inventory Quantity Name](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryquantityname)
        *   [Inventory Scheduled Change](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryscheduledchange)
        *   [Inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipment)
        *   [Inventory Shipment Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmentlineitem)
        *   [Inventory Shipment Tracking](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventoryshipmenttracking)
        *   [Inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransfer)
        *   [Inventory Transfer Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitem)
        *   [Inventory Transfer Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/objects/inventorytransferlineitemupdate)

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

[Anchor to CountryHarmonizedSystemCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode#top)
Country Harmonized System Code
==============================

object

Requires `read_inventory` access scope or `read_products` access scope.

The country-specific harmonized system code and ISO country code for an inventory item.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode#fields)Fields
----------------------------------------------------------------------------------------------------------------------

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode#field-CountryHarmonizedSystemCode.fields.countryCode)country Code

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code.

Show enum values

[Anchor to harmonizedSystemCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/countryharmonizedsystemcode#field-CountryHarmonizedSystemCode.fields.harmonizedSystemCode)harmonized System Code

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The country-specific harmonized system code. These are usually longer than 6 digits.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[CountryHarmonizedSystemCodeConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#field-nodes)
*   {}[CountryHarmonizedSystemCodeEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCodeEdge#field-node)
*   {}[InventoryItem.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-countryHarmonizedSystemCodes)


---
*Content truncated at "Updates" section*