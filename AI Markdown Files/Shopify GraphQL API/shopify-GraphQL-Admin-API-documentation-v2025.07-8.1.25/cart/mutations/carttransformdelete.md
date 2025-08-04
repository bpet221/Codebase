---
title: "cartTransformDelete"
description: "Shopify GraphQL Admin API documentation for carttransformdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete"
extraction_method: "jina"
sections: ['Cart', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: cartTransformDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete

Markdown Content:
cartTransformDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#main-content)

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
*   
Cart

    *   Queries   
    *   
Mutations

        *   [cart Transform Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate)
        *   [cart Transform Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete)

    *   Objects   

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

[Anchor to cartTransformDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#top)
cart Transform Delete
=====================

mutation

Requires `write_cart_transforms` access scope. Also: The user must have products and preferences permission to delete a cart transform function.

Destroy a cart transform function from the Shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

A globally-unique identifier for the cart transform.

* * *

Was this section helpful?

Yes No

[Anchor to CartTransformDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#returns)Cart Transform Delete Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#returns-deletedId)deleted Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The globally-unique ID for the deleted cart transform.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete#returns-userErrors)user Errors

•[[Cart Transform Delete User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformDeleteUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### cartTransformDelete reference

Hide content

Mutation Reference
------------------

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

mutation cartTransformDelete($id: ID!){

cartTransformDelete(id: $id){

deletedId

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

"id": "gid://shopify/<objectName>/10079785100"

}

```
{
  "id": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*