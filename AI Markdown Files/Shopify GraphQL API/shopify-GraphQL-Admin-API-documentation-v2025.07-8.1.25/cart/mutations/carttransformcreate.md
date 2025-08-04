---
title: "cartTransformCreate"
description: "Shopify GraphQL Admin API documentation for carttransformcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate"
extraction_method: "jina"
sections: ['Cart', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: cartTransformCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate

Markdown Content:
cartTransformCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#main-content)

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
*   
Cart

    *   Queries   
    *   
Mutations

        *   [cart Transform Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate)
        *   [cart Transform Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformdelete)

    *   Objects   

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

[Anchor to cartTransformCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#top)
cart Transform Create
=====================

mutation

Requires `write_cart_transforms` access scope. Also: The shop must have [upgraded to Checkout Extensibility](https://help.shopify.com/manual/checkout-settings/checkout-extensibility/checkout-upgrade) and the user must have [products and preferences permission](https://help.shopify.com/manual/your-account/staff-accounts/staff-permissions) to create a cart transform function.

Create a CartTransform function to the Shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#arguments)
Arguments
---------

[Anchor to blockOnFailure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#arguments-blockOnFailure)block On Failure

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether a run failure should block cart and checkout operations.

[Anchor to functionId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#arguments-functionId)function Id

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The identifier of the Function providing the cart transform.

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#arguments-metafields)metafields

•[[Metafield Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

Default:[]

Additional metafields to associate to the cart transform.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CartTransformCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#returns)Cart Transform Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to cartTransform](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#returns-cartTransform)cart Transform

•[Cart Transform](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform)

The newly created cart transform function.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carttransformcreate#returns-userErrors)user Errors

•[[Cart Transform Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### cartTransformCreate reference

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

mutation cartTransformCreate($functionId: String!, $blockOnFailure: Boolean, $metafields: [MetafieldInput!]){

cartTransformCreate(functionId: $functionId, blockOnFailure: $blockOnFailure, metafields: $metafields){

cartTransform {

# CartTransform fields

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

11

12

13

›

⌄

⌄

⌄

{

"functionId": "<your-functionId>",

"blockOnFailure": true,

"metafields": [

{

"id": "gid://shopify/<objectName>/10079785100",

"namespace": "<your-namespace>",

"key": "<your-key>",

"value": "<your-value>",

"type": "<your-type>"

}

]

}

```
{
  "functionId": "<your-functionId>",
  "blockOnFailure": true,
  "metafields": [
    {
      "id": "gid://shopify/<objectName>/10079785100",
      "namespace": "<your-namespace>",
      "key": "<your-key>",
      "value": "<your-value>",
      "type": "<your-type>"
    }
  ]
}
```

```
input MetafieldInput {
  id: ID
  namespace: String
  key: String
  value: String
  type: String
}
```


---
*Content truncated at "Updates" section*