---
title: "consentPolicyUpdate"
description: "Shopify GraphQL Admin API documentation for consentpolicyupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate"
extraction_method: "jina"
sections: ['Privacy', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: consentPolicyUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate

Markdown Content:
consentPolicyUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#main-content)

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

[Anchor to consentPolicyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#top)
consent Policy Update
=====================

mutation

Requires `write_privacy_settings` access scope.

Update or create consent policies in bulk.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#arguments)
Arguments
---------

[Anchor to consentPolicies](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#arguments-consentPolicies)consent Policies

•[[Consent Policy Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput)

required

The consent policies to update or create. If the country and region matches an existing consent policy, then the consent policy is updated. Otherwise, a new consent policy is created.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ConsentPolicyUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#returns)Consent Policy Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to updatedPolicies](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#returns-updatedPolicies)updated Policies

•[[Consent Policy!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy)

All updated and created consent policies. The consent policies that haven't been modified as part of the mutation aren't returned.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate#returns-userErrors)user Errors

•[[Consent Policy Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicyError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### consentPolicyUpdate reference

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

mutation consentPolicyUpdate($consentPolicies: [ConsentPolicyInput!]!){

consentPolicyUpdate(consentPolicies: $consentPolicies){

updatedPolicies {

# ConsentPolicy fields

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

"consentPolicies": [

{

"countryCode": "AN",

"regionCode": "<your-regionCode>",

"consentRequired": true,

"dataSaleOptOutRequired": true

}

]

}

```
{
  "consentPolicies": [
    {
      "countryCode": "AN",
      "regionCode": "<your-regionCode>",
      "consentRequired": true,
      "dataSaleOptOutRequired": true
    }
  ]
}
```

```
input ConsentPolicyInput {
  countryCode: PrivacyCountryCode
  regionCode: String
  consentRequired: Boolean
  dataSaleOptOutRequired: Boolean
}
```


---
*Content truncated at "Updates" section*