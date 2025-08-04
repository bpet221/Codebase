---
title: "bulkOperationRunQuery"
description: "Shopify GraphQL Admin API documentation for bulkoperationrunquery"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery"
extraction_method: "jina"
sections: ['Bulk operations', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: bulkOperationRunQuery - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery

Markdown Content:
Choose a version:

[Anchor to bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#top)

mutation

Creates and runs a bulk operation query.

See the [bulk operations guide](https://shopify.dev/api/usage/bulk-operations/queries) for more details.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#arguments)

Arguments
---------

[Anchor to groupObjects](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#arguments-groupObjects)
group Objects

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)
required Default:true

Whether to group objects under their corresponding parent objects in the JSONL output. Grouping is costly, causes bulk operations to take longer to complete, and increases the chances of failures such as timeouts.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#arguments-query)
query

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
required

The query to be executed in bulk.

* * *

Was this section helpful?

[Anchor to BulkOperationRunQueryPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#returns)
Bulk Operation Run Query Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to bulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#returns-bulkOperation)
bulk Operation

•[Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)
The newly created bulk operation.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery#returns-userErrors)
user Errors

•[[Bulk Operation User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationUserError)
non-null

The list of errors that occurred from executing the mutation.

* * *

Was this section helpful?
