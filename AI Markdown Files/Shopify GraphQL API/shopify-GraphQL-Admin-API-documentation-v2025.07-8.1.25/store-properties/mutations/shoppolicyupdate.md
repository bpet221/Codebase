---
title: "shopPolicyUpdate"
description: "Shopify GraphQL Admin API documentation for shoppolicyupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopPolicyUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate

Markdown Content:
shopPolicyUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#main-content)

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
*   Shopify Markets   
*   Shopify Payments   
*   
Store properties

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
        *   [location Local Pickup Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable)
        *   [location Local Pickup Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable)
        *   [publishable Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish)
        *   [publishable Publish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel)
        *   [publishable Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish)
        *   [publishable Unpublish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel)
        *   [shop Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate)

    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to shopPolicyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#top)
shop Policy Update
==================

mutation

Requires `write_legal_policies` access scope.

Updates a shop policy.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#arguments)
Arguments
---------

[Anchor to shopPolicy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#arguments-shopPolicy)shop Policy

•[Shop Policy Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopPolicyInput)

required

The properties to use when updating the shop policy.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ShopPolicyUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#returns)Shop Policy Update Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to shopPolicy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#returns-shopPolicy)shop Policy

•[Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy)

The shop policy that has been updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate#returns-userErrors)user Errors

•[[Shop Policy User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicyUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### shopPolicyUpdate reference

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

mutation shopPolicyUpdate($shopPolicy: ShopPolicyInput!){

shopPolicyUpdate(shopPolicy: $shopPolicy){

shopPolicy {

# ShopPolicy fields

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

›

⌄

⌄

{

"shopPolicy": {

"type": "REFUND_POLICY",

"body": "<your-body>"

}

}

```
{
  "shopPolicy": {
    "type": "REFUND_POLICY",
    "body": "<your-body>"
  }
}
```

```
input ShopPolicyInput {
  type: ShopPolicyType!
  body: String!
}
```


---
*Content truncated at "Updates" section*