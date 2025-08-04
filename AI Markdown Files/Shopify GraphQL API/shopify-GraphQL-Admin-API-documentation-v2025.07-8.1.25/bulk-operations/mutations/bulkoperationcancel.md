---
title: "bulkOperationCancel"
description: "Shopify GraphQL Admin API documentation for bulkoperationcancel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel"
extraction_method: "jina"
sections: ['Bulk operations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: bulkOperationCancel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel

Markdown Content:
bulkOperationCancel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#main-content)

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
*   
Bulk Operations

    *   Queries   
    *   
Mutations

        *   [bulk Operation Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel)
        *   [bulk Operation Run Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation)
        *   [bulk Operation Run Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery)

    *   Objects   

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

[Anchor to bulkOperationCancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#top)
bulk Operation Cancel
=====================

mutation

Starts the cancelation process of a running bulk operation.

There may be a short delay from when a cancelation starts until the operation is actually canceled.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the bulk operation to cancel.

* * *

Was this section helpful?

Yes No

[Anchor to BulkOperationCancelPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#returns)Bulk Operation Cancel Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to bulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#returns-bulkOperation)bulk Operation

•[Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

The bulk operation to be canceled.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### bulkOperationCancel reference

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

mutation bulkOperationCancel($id: ID!){

bulkOperationCancel(id: $id){

bulkOperation {

# BulkOperation fields

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