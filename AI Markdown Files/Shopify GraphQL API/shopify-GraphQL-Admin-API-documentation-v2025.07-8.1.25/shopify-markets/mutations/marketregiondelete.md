---
title: "marketRegionDelete"
description: "Shopify GraphQL Admin API documentation for marketregiondelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketRegionDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete

Markdown Content:
marketRegionDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#main-content)

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
    *   
Mutations

        *   [backup Region Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupregionupdate)
        *   [market Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate)
        *   [market Currency Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcurrencysettingsupdate)
        *   [market Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketdelete)
        *   [market Region Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete)
        *   [market Regions Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate)
        *   [market Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate)
        *   [market Web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencecreate)
        *   [market Web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete)
        *   [market Web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresenceupdate)
        *   [web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate)
        *   [web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate)

    *   Objects   

*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to marketRegionDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#top)
market Region Delete
====================

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Deprecated.Use [marketUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketUpdate) instead.

Deletes a market region.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the market region to delete.

* * *

Was this section helpful?

Yes No

[Anchor to MarketRegionDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#returns)Market Region Delete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#returns-deletedId)deleted Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted market region.

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#returns-market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

The parent market object of the deleted region.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketRegionDelete reference

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

12

›

⌄

⌄

⌄

⌄

mutation marketRegionDelete($id: ID!){

marketRegionDelete(id: $id){

deletedId

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

Variables

Copy

9

1

2

3

›

⌄

{

"id": "gid://shopify/<objectName>/10079785100"

}

```
{
  "id": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*