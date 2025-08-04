---
title: "automaticDiscount"
description: "Shopify GraphQL Admin API documentation for automaticdiscount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: automaticDiscount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount

Markdown Content:
automaticDiscount - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount#main-content)

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
*   
Discounts and marketing

    *   
Queries

        *   [abandonment](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonment)
        *   [app Discount Type](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttype)
        *   [app Discount Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttypes)
        *   [app Discount Types Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appdiscounttypesnodes)
        *   [automatic Discount](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount)
        *   [automatic Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnode)
        *   [automatic Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountnodes)
        *   [automatic Discounts](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscounts)
        *   [automatic Discount Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscountsavedsearches)
        *   [code Discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnode)
        *   [code Discount Node By Code](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodebycode)
        *   [code Discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountnodes)
        *   [code Discount Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codediscountsavedsearches)
        *   [discount Codes Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountcodescount)
        *   [discount Node](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnode)
        *   [discount Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes)
        *   [discount Nodes Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodescount)
        *   [discount Redeem Code Bulk Creation](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodebulkcreation)
        *   [discount Redeem Code Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountredeemcodesavedsearches)
        *   [marketing Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivities)
        *   [marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingactivity)
        *   [marketing Event](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevent)
        *   [marketing Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingevents)
        *   [server Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/serverpixel)
        *   [web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/queries/webpixel)

    *   Mutations   
    *   Objects   

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

[Anchor to automaticDiscount](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount#top)
automatic Discount
==================

query

Deprecated.Use [automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNode) instead.

Returns an automatic discount resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `DiscountAutomatic` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to DiscountAutomatic](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticdiscount#returns-DiscountAutomatic)Discount Automatic

•[Discount Automatic](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

The type of discount associated to the automatic discount. For example, the automatic discount might offer a basic discount using a fixed percentage, or a fixed amount, on specific products from the order. The automatic discount may also be a BXGY discount, which offers customer discounts on select products if they add a specific product to their order.

Show union types

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### automaticDiscount reference

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

automaticDiscount(id){

# automaticDiscount fields

}

}


---
*Content truncated at "Updates" section*