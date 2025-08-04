---
title: "webPresenceUpdate"
description: "Shopify GraphQL Admin API documentation for webpresenceupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webPresenceUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate

Markdown Content:
webPresenceUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#main-content)

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

[Anchor to webPresenceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#top)
web Presence Update
===================

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Updates a web presence.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the web presence to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#arguments-input)input

•[Web Presence Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceUpdateInput)

required

The web presence properties to update.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to WebPresenceUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#returns)Web Presence Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webPresence](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate#returns-webPresence)web Presence

•[Market Web Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

The web presence object.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### webPresenceUpdate reference

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

mutation webPresenceUpdate($id: ID!, $input: WebPresenceUpdateInput!){

webPresenceUpdate(id: $id, input: $input){

userErrors {

field

message

}

webPresence {

# MarketWebPresence fields

}

}

}

Hide content

Input
-----

Variables Schema

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

›

⌄

⌄

⌄

{

"id": "gid://shopify/<objectName>/10079785100",

"input": {

"defaultLocale": "<your-defaultLocale>",

"alternateLocales": [

"<your-alternateLocales>"

],

"subfolderSuffix": "<your-subfolderSuffix>"

}

}

```
{
  "id": "gid://shopify/<objectName>/10079785100",
  "input": {
    "defaultLocale": "<your-defaultLocale>",
    "alternateLocales": [
      "<your-alternateLocales>"
    ],
    "subfolderSuffix": "<your-subfolderSuffix>"
  }
}
```

```
input WebPresenceUpdateInput {
  defaultLocale: String
  alternateLocales: [String!]
  subfolderSuffix: String
}
```


---
*Content truncated at "Updates" section*