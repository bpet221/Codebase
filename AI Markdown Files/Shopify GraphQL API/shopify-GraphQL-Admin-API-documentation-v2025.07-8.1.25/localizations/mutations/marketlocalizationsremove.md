---
title: "marketLocalizationsRemove"
description: "Shopify GraphQL Admin API documentation for marketlocalizationsremove"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove"
extraction_method: "jina"
sections: ['Localizations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketLocalizationsRemove - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove

Markdown Content:
marketLocalizationsRemove - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#main-content)

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
*   
Localizations

    *   Queries   
    *   
Mutations

        *   [market Localizations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsregister)
        *   [market Localizations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove)
        *   [shop Locale Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaledisable)
        *   [shop Locale Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleenable)
        *   [shop Locale Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoplocaleupdate)
        *   [translations Register](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsregister)
        *   [translations Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsremove)

    *   Objects   

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

[Anchor to marketLocalizationsRemove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#top)
market Localizations Remove
===========================

mutation

Requires `write_translations` access scope.

Deletes market localizations.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#arguments)
Arguments
---------

[Anchor to marketIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#arguments-marketIds)market Ids

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The list of market IDs.

[Anchor to marketLocalizationKeys](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#arguments-marketLocalizationKeys)market Localization Keys

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The list of market localization keys.

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#arguments-resourceId)resource Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the resource for which market localizations are being deleted.

* * *

Was this section helpful?

Yes No

[Anchor to MarketLocalizationsRemovePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#returns)Market Localizations Remove Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to marketLocalizations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#returns-marketLocalizations)market Localizations

•[[Market Localization!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalization)

The market localizations that were deleted.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketlocalizationsremove#returns-userErrors)user Errors

•[[Translation User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### marketLocalizationsRemove reference

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

mutation marketLocalizationsRemove($resourceId: ID!, $marketLocalizationKeys: [String!]!, $marketIds: [ID!]!){

marketLocalizationsRemove(resourceId: $resourceId, marketLocalizationKeys: $marketLocalizationKeys, marketIds: $marketIds){

marketLocalizations {

# MarketLocalization fields

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

4

5

6

7

8

9

›

⌄

⌄

⌄

{

"resourceId": "gid://shopify/<objectName>/10079785100",

"marketLocalizationKeys": [

"<your-marketLocalizationKeys>"

],

"marketIds": [

"gid://shopify/<objectName>/10079785100"

]

}

```
{
  "resourceId": "gid://shopify/<objectName>/10079785100",
  "marketLocalizationKeys": [
    "<your-marketLocalizationKeys>"
  ],
  "marketIds": [
    "gid://shopify/<objectName>/10079785100"
  ]
}
```


---
*Content truncated at "Updates" section*