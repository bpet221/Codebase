---
title: "marketWebPresenceDelete"
description: "Shopify GraphQL Admin API documentation for marketwebpresencedelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketWebPresenceDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete

Markdown Content:
marketWebPresenceDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#main-content)

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

[Anchor to marketWebPresenceDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#top)
market Web Presence Delete
==========================

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Deprecated.Use [webPresenceDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webPresenceDelete) instead.

Deletes a market web presence.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#arguments)
Arguments
---------

[Anchor to webPresenceId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#arguments-webPresenceId)web Presence Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the web presence to delete.

* * *

Was this section helpful?

Yes No

[Anchor to MarketWebPresenceDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#returns)Market Web Presence Delete Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#returns-deletedId)deleted Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted web presence.

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#returns-market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

The market for which the web presence was deleted.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketWebPresenceDelete reference

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

mutation marketWebPresenceDelete($webPresenceId: ID!){

marketWebPresenceDelete(webPresenceId: $webPresenceId){

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

"webPresenceId": "gid://shopify/<objectName>/10079785100"

}

```
{
  "webPresenceId": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*