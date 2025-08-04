---
title: "AccessScope"
description: "Shopify GraphQL Admin API documentation for accessscope"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope"
extraction_method: "jina"
sections: ['Access', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AccessScope - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope

Markdown Content:
AccessScope - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#main-content)

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

    *   Mutations   
    *   
Objects

        *   [Access Scope](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#mutations)
        *   [Delegate Access Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken)
        *   [Storefront Access Token](https://shopify.dev/docs/api/admin-graphql/latest/objects/storefrontaccesstoken)

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

[Anchor to AccessScope](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#top)
Access Scope
============

object

The permission required to access a Shopify Admin API or Storefront API resource for a shop. Merchants grant access scopes that are requested by applications.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#field-AccessScope.fields.description)description

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A description of the actions that the access scope allows an app to perform.

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#field-AccessScope.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A readable string that represents the access scope. The string usually follows the format `{action}_{resource}`. `{action}` is `read` or `write`, and `{resource}` is the resource that the action can be performed on. `{action}` and `{resource}` are separated by an underscore. For example, `read_orders` or `write_products`.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[App.availableAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-availableAccessScopes)
*   {}[App.optionalAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-optionalAccessScopes)
*   {}[App.requestedAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-requestedAccessScopes)
*   {}[AppInstallation.accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-accessScopes)
*   {}[StorefrontAccessToken.accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken#field-accessScopes)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#mutations)Mutations
---------------------------------------------------------------------------------------------------------------

[Anchor to appRevokeAccessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/accessscope#mutation-appRevokeAccessScopes)[app Revoke Access Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)

•mutation

Revokes access scopes previously granted for an app installation.

Show payload

* * *

Was this section helpful?

Yes No

<~>AccessScope Mutations
------------------------

### Mutated by

*   <~>[app Revoke Access Scopes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appRevokeAccessScopes)


---
*Content truncated at "Updates" section*