---
title: "MarketConditions"
description: "Shopify GraphQL Admin API documentation for marketconditions"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions"
extraction_method: "jina"
sections: ['Shopify Markets', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MarketConditions - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions

Markdown Content:
MarketConditions - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#main-content)

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
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   
Shopify Markets

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/market)
        *   [Market Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions)
        *   [Market Currency Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketcurrencysettings)
        *   [Market Region Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketregioncountry)
        *   [Markets B2BEntitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsb2bentitlement)
        *   [Markets Regions Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsregionsentitlement)
        *   [Markets Resolved Values](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsresolvedvalues)
        *   [Markets Retail Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsretailentitlement)
        *   [Market Web Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresence)
        *   [Market Web Presence Root Url](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketwebpresencerooturl)
        *   [Regions Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/regionscondition)
        *   [Resolved Price Inclusivity](https://shopify.dev/docs/api/admin-graphql/latest/objects/resolvedpriceinclusivity)

*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to MarketConditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#top)
Market Conditions
=================

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

The conditions that determine whether a visitor is in a market.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to companyLocationsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#field-MarketConditions.fields.companyLocationsCondition)company Locations Condition

•[Company Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition)

The company location conditions that determine whether a visitor is in the market.

Show fields

[Anchor to conditionTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#field-MarketConditions.fields.conditionTypes)condition Types

•[[Market Condition Type!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionType)

non-null

The set of condition types that are defined for the market.

Show enum values

[Anchor to locationsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#field-MarketConditions.fields.locationsCondition)locations Condition

•[Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition)

The retail location conditions that determine whether a visitor is in the market.

Show fields

[Anchor to regionsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketconditions#field-MarketConditions.fields.regionsCondition)regions Condition

•[Regions Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition)

The region conditions that determine whether a visitor is in the market.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Market.conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-conditions)


---
*Content truncated at "Updates" section*