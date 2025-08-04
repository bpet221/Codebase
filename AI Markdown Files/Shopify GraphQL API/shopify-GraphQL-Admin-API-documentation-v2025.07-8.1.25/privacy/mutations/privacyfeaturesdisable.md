---
title: "privacyFeaturesDisable"
description: "Shopify GraphQL Admin API documentation for privacyfeaturesdisable"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable"
extraction_method: "jina"
sections: ['Privacy', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: privacyFeaturesDisable - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable

Markdown Content:
privacyFeaturesDisable - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#main-content)

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
*   
Privacy

    *   Queries   
    *   
Mutations

        *   [consent Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate)
        *   [data Sale Opt Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout)
        *   [privacy Features Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable)

    *   Objects   

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

[Anchor to privacyFeaturesDisable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#top)
privacy Features Disable
========================

mutation

Requires `write_privacy_settings` access scope.

Disable a shop's privacy features.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#arguments)
Arguments
---------

[Anchor to featuresToDisable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#arguments-featuresToDisable)features To Disable

•[[Privacy Features Enum!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

required

The list of privacy features to disable.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to PrivacyFeaturesDisablePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#returns)Privacy Features Disable Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to featuresDisabled](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#returns-featuresDisabled)features Disabled

•[[Privacy Features Enum!]](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyFeaturesEnum)

The privacy features that were disabled.

Show enum values

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable#returns-userErrors)user Errors

•[[Privacy Features Disable User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PrivacyFeaturesDisableUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### privacyFeaturesDisable reference

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

mutation privacyFeaturesDisable($featuresToDisable: [PrivacyFeaturesEnum!]!){

privacyFeaturesDisable(featuresToDisable: $featuresToDisable){

featuresDisabled {

# PrivacyFeaturesEnum fields

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

›

⌄

⌄

{

"featuresToDisable": [

"COOKIE_BANNER"

]

}

```
{
  "featuresToDisable": [
    "COOKIE_BANNER"
  ]
}
```


---
*Content truncated at "Updates" section*