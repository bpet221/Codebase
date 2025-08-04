---
title: "marketRegionsCreate"
description: "Shopify GraphQL Admin API documentation for marketregionscreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketRegionsCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate

Markdown Content:
marketRegionsCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#main-content)

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
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   
Shopify Markets

    *   Queries   
    *   
Mutations

        *   [backup Region Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupregionupdate)
        *   [market Currency Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcurrencysettingsupdate)
        *   [market Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketdelete)
        *   [market Localizations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsregister)
        *   [market Localizations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove)
        *   [market Region Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete)
        *   [market Regions Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate)
        *   [market Web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencecreate)
        *   [market Web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete)
        *   [market Web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresenceupdate)
        *   [web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate)
        *   [web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate)

    *   Objects   

*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to marketRegionsCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#top)
market Regions Create
=====================

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Deprecated.This mutation is deprecated and will be removed in the future. Use [marketCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketCreate) or [marketUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate) instead.

Creates regions that belong to an existing market.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#arguments)
Arguments
---------

[Anchor to marketId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#arguments-marketId)market Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the market to add the regions to.

[Anchor to regions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#arguments-regions)regions

•[[Market Region Create Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketRegionCreateInput)

required

The regions to be created.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketRegionsCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#returns)Market Regions Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#returns-market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

The market object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketRegionsCreate reference

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

⌄

⌄

⌄

⌄

mutation marketRegionsCreate($marketId: ID!, $regions: [MarketRegionCreateInput!]!){

marketRegionsCreate(marketId: $marketId, regions: $regions){

market {

# Market fields

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

Variables Schema

Copy

9

1

2

3

4

5

6

7

8

›

⌄

⌄

⌄

{

"marketId": "gid://shopify/<objectName>/10079785100",

"regions": [

{

"countryCode": "AF"

}

]

}

```
{
  "marketId": "gid://shopify/<objectName>/10079785100",
  "regions": [
    {
      "countryCode": "AF"
    }
  ]
}
```

```
input MarketRegionCreateInput {
  countryCode: CountryCode!
}
```


---
*Content truncated at "Updates" section*