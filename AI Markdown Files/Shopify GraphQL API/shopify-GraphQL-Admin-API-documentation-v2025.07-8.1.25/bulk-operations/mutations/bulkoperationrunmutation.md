---
title: "bulkOperationRunMutation"
description: "Shopify GraphQL Admin API documentation for bulkoperationrunmutation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation"
extraction_method: "jina"
sections: ['Bulk operations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: bulkOperationRunMutation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation

Markdown Content:
bulkOperationRunMutation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#main-content)

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

[Anchor to bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#top)
bulk Operation Run Mutation
===========================

mutation

Creates and runs a bulk operation mutation.

To learn how to bulk import large volumes of data asynchronously, refer to the [bulk import data guide](https://shopify.dev/api/usage/bulk-operations/imports).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#arguments)
Arguments
---------

[Anchor to clientIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#arguments-clientIdentifier)client Identifier

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

An optional identifier which may be used for querying.

[Anchor to groupObjects](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#arguments-groupObjects)group Objects

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

required Default:true

Whether to group objects under their corresponding parent objects in the JSONL output. Grouping is costly, causes bulk operations to take longer to complete, and increases the chances of failures such as timeouts.

[Anchor to mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#arguments-mutation)mutation

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The mutation to be executed in bulk.

[Anchor to stagedUploadPath](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#arguments-stagedUploadPath)staged Upload Path

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The staged upload path of the file containing mutation variables.

* * *

Was this section helpful?

Yes No

[Anchor to BulkOperationRunMutationPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#returns)Bulk Operation Run Mutation Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to bulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#returns-bulkOperation)bulk Operation

•[Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

The newly created bulk operation.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation#returns-userErrors)user Errors

•[[Bulk Mutation User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkMutationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### bulkOperationRunMutation reference

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

mutation bulkOperationRunMutation($mutation: String!, $stagedUploadPath: String!, $groupObjects: Boolean!, $clientIdentifier: String){

bulkOperationRunMutation(mutation: $mutation, stagedUploadPath: $stagedUploadPath, groupObjects: $groupObjects, clientIdentifier: $clientIdentifier){

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

4

5

6

›

⌄

{

"mutation": "<your-mutation>",

"stagedUploadPath": "<your-stagedUploadPath>",

"groupObjects": true,

"clientIdentifier": "<your-clientIdentifier>"

}

```
{
  "mutation": "<your-mutation>",
  "stagedUploadPath": "<your-stagedUploadPath>",
  "groupObjects": true,
  "clientIdentifier": "<your-clientIdentifier>"
}
```


---
*Content truncated at "Updates" section*