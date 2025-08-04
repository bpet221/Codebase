---
title: "webPresenceCreate"
description: "Shopify GraphQL Admin API documentation for webpresencecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webPresenceCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate

Markdown Content:
webPresenceCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#main-content)

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

[Anchor to webPresenceCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#top)
web Presence Create
===================

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Creates a web presence.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#arguments-input)input

•[Web Presence Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPresenceCreateInput)

required

The details of the web presence to be created.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to WebPresenceCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#returns)Web Presence Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webPresence](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate#returns-webPresence)web Presence

•[Market Web Presence](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

The created web presence object.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### webPresenceCreate reference

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

mutation webPresenceCreate($input: WebPresenceCreateInput!){

webPresenceCreate(input: $input){

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

"input": {

"domainId": "gid://shopify/<objectName>/10079785100",

"defaultLocale": "<your-defaultLocale>",

"alternateLocales": [

"<your-alternateLocales>"

],

"subfolderSuffix": "<your-subfolderSuffix>"

}

}

```
{
  "input": {
    "domainId": "gid://shopify/<objectName>/10079785100",
    "defaultLocale": "<your-defaultLocale>",
    "alternateLocales": [
      "<your-alternateLocales>"
    ],
    "subfolderSuffix": "<your-subfolderSuffix>"
  }
}
```

```
input WebPresenceCreateInput {
  domainId: ID
  defaultLocale: String!
  alternateLocales: [String!]
  subfolderSuffix: String
}
```


---
*Content truncated at "Updates" section*