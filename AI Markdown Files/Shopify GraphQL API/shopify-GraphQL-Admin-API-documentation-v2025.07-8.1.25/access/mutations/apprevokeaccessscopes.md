---
title: "appRevokeAccessScopes"
description: "Shopify GraphQL Admin API documentation for apprevokeaccessscopes"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes"
extraction_method: "jina"
sections: ['Access', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appRevokeAccessScopes - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes

Markdown Content:
appRevokeAccessScopes - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#main-content)

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

*   
Access

    *   
Mutations

        *   [app Revoke Access Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes)
        *   [delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokencreate)
        *   [delegate Access Token Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateaccesstokendestroy)
        *   [storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokencreate)
        *   [storefront Access Token Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontaccesstokendelete)

    *   Objects   

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
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to appRevokeAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#top)
app Revoke Access Scopes
========================

mutation

Requires This mutation can only be run on the current app.

Revokes access scopes previously granted for an app installation.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#arguments)
Arguments
---------

[Anchor to scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#arguments-scopes)scopes

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The list of scope handles to revoke.

* * *

Was this section helpful?

Yes No

[Anchor to AppRevokeAccessScopesPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#returns)App Revoke Access Scopes Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to revoked](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#returns-revoked)revoked

•[[Access Scope!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope)

The list of scope handles that have been revoked.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apprevokeaccessscopes#returns-userErrors)user Errors

•[[App Revoke Access Scopes App Revoke Scope Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevokeAccessScopesAppRevokeScopeError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### appRevokeAccessScopes reference

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

mutation appRevokeAccessScopes($scopes: [String!]!){

appRevokeAccessScopes(scopes: $scopes){

revoked {

# AccessScope fields

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

"scopes": [

"<your-scopes>"

]

}

```
{
  "scopes": [
    "<your-scopes>"
  ]
}
```


---
*Content truncated at "Updates" section*