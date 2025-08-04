---
title: "delegateAccessTokenCreate"
description: "Shopify GraphQL Admin API documentation for delegateaccesstokencreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate"
extraction_method: "jina"
sections: ['Access', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: delegateAccessTokenCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate

Markdown Content:
delegateAccessTokenCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#main-content)

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

*   
Access

    *   
Mutations

        *   [app Revoke Access Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes)
        *   [delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate)
        *   [storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate)
        *   [storefront Access Token Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete)

    *   Objects   

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
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to delegateAccessTokenCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#top)
delegate Access Token Create
============================

mutation

Creates a delegate access token.

To learn more about creating delegate access tokens, refer to [Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#arguments-input)input

•[Delegate Access Token Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput)

required

The input fields for creating a delegate access token.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DelegateAccessTokenCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#returns)Delegate Access Token Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to delegateAccessToken](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#returns-delegateAccessToken)delegate Access Token

•[Delegate Access Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessToken)

The delegate access token.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate#returns-userErrors)user Errors

•[[Delegate Access Token Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DelegateAccessTokenCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### delegateAccessTokenCreate reference

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

13

14

›

⌄

⌄

⌄

⌄

⌄

mutation delegateAccessTokenCreate($input: DelegateAccessTokenInput!){

delegateAccessTokenCreate(input: $input){

delegateAccessToken {

# DelegateAccessToken fields

}

shop {

# Shop fields

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

"input": {

"delegateAccessScope": [

"<your-delegateAccessScope>"

],

"expiresIn": 1

}

}

```
{
  "input": {
    "delegateAccessScope": [
      "<your-delegateAccessScope>"
    ],
    "expiresIn": 1
  }
}
```

```
input DelegateAccessTokenInput {
  delegateAccessScope: [String!]!
  expiresIn: Int
}
```


---
*Content truncated at "Updates" section*