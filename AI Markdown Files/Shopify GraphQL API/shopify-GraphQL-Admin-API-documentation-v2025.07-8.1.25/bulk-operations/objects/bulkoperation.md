---
title: "BulkOperation"
description: "Shopify GraphQL Admin API documentation for bulkoperation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation"
extraction_method: "jina"
sections: ['Bulk operations', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: BulkOperation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation

Markdown Content:
BulkOperation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#main-content)

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
    *   Mutations   
    *   
Objects

        *   [Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#interfaces)

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

[Anchor to BulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#top)
Bulk Operation
==============

object

An asynchronous long-running operation to fetch data in bulk or to bulk import data.

Bulk operations are created using the `bulkOperationRunQuery` or `bulkOperationRunMutation` mutation. After they are created, clients should poll the `status` field for updates. When `COMPLETED`, the `url` field contains a link to the data in [JSONL](http://jsonlines.org/) format.

Refer to the [bulk operations guide](https://shopify.dev/api/usage/bulk-operations/imports) for more details.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#fields)Fields
--------------------------------------------------------------------------------------------------------

[Anchor to completedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.completedAt)completed At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

When the bulk operation was successfully completed.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

When the bulk operation was created.

[Anchor to errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.errorCode)error Code

•[Bulk Operation Error Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationErrorCode)

Error code for failed operations.

Show enum values

[Anchor to fileSize](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.fileSize)file Size

•[Unsigned Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

File size in bytes of the file in the `url` field.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to objectCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.objectCount)object Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

A running count of all the objects processed. For example, when fetching all the products and their variants, this field counts both products and variants. This field can be used to track operation progress.

[Anchor to partialDataUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.partialDataUrl)partial Data Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL that points to the partial or incomplete response data (in [JSONL](http://jsonlines.org/) format) that was returned by a failed operation. The URL expires 7 days after the operation fails. Returns `null` when there's no data available.

[Anchor to query](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.query)query

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

GraphQL query document specified in `bulkOperationRunQuery`.

[Anchor to rootObjectCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.rootObjectCount)root Object Count

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

A running count of all the objects that are processed at the root of the query. For example, when fetching all the products and their variants, this field only counts products. This field can be used to track operation progress.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.status)status

•[Bulk Operation Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationStatus)

non-null

Status of the bulk operation.

Show enum values

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.type)type

•[Bulk Operation Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationType)

non-null

The bulk operation's type.

Show enum values

[Anchor to url](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#field-BulkOperation.fields.url)url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL that points to the response data in [JSONL](http://jsonlines.org/) format. The URL expires 7 days after the operation completes.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#queries)Queries
-----------------------------------------------------------------------------------------------------------

[Anchor to currentBulkOperation](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#query-currentBulkOperation)[current Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation)

•query

Returns the current app's most recent BulkOperation. Apps can run one bulk query and one bulk mutation operation at a time, by shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>BulkOperation Queries
------------------------

### Queried by

*   <?>[current Bulk Operation](https://shopify.dev/docs/api/admin-graphql/latest/queries/BulkOperation)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#mutations)Mutations
-----------------------------------------------------------------------------------------------------------------

[Anchor to bulkOperationCancel](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#mutation-bulkOperationCancel)[bulk Operation Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)

•mutation

Starts the cancelation process of a running bulk operation.

There may be a short delay from when a cancelation starts until the operation is actually canceled.

Show payload

[Anchor to bulkOperationRunMutation](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#mutation-bulkOperationRunMutation)[bulk Operation Run Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)

•mutation

Creates and runs a bulk operation mutation.

To learn how to bulk import large volumes of data asynchronously, refer to the [bulk import data guide](https://shopify.dev/api/usage/bulk-operations/imports).

Show payload

[Anchor to bulkOperationRunQuery](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#mutation-bulkOperationRunQuery)[bulk Operation Run Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

•mutation

Creates and runs a bulk operation query.

See the [bulk operations guide](https://shopify.dev/api/usage/bulk-operations/queries) for more details.

Show payload

* * *

Was this section helpful?

Yes No

<~>BulkOperation Mutations
--------------------------

### Mutated by

*   <~>[bulk Operation Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel)
*   <~>[bulk Operation Run Mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation)
*   <~>[bulk Operation Run Query](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/bulkoperation#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-BulkOperation Implements
---------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*