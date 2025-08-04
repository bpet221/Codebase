---
title: "Metafield"
description: "Shopify GraphQL Admin API documentation for metafield"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield"
extraction_method: "jina"
sections: ['Metafields', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Metafield - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield

Markdown Content:
Metafield - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#main-content)

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
*   Cart   
*   Checkout Branding   
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   
Metafields

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#interfaces)
        *   [Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinition)
        *   [Metafield Definition Supported Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionsupportedvalidation)
        *   [Metafield Definition Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitiontype)
        *   [Metafield Definition Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionvalidation)
        *   [Standard Metafield Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetafielddefinitiontemplate)

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

[Anchor to Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#top)
Metafield
=========

object

Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin/graphql/reference/common-objects/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#fields)Fields
----------------------------------------------------------------------------------------------------

[Anchor to compareDigest](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.compareDigest)compare Digest

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The data stored in the resource, represented as a digest.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the metafield was created.

[Anchor to definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.definition)definition

•[Metafield Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

The metafield definition that the metafield belongs to, if any.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to jsonValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.jsonValue)json Value

•[JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

non-null

The data stored in the metafield in JSON format.

[Anchor to key](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.key)key

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique identifier for the metafield within its namespace.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to namespace](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.namespace)namespace

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The container for a group of metafields that the metafield is associated with.

[Anchor to owner](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.owner)owner

•[Has Metafields!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

non-null

The resource that the metafield is attached to.

Show fields

[Anchor to ownerType](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.ownerType)owner Type

•[Metafield Owner Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

non-null

The type of resource that the metafield is attached to.

Show enum values

[Anchor to reference](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.reference)reference

•[Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

Returns a reference object if the metafield definition's type is a resource reference.

Show union types

[Anchor to references](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.references)references

•[Metafield Reference Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection)

A list of reference objects if the metafield's type is a resource reference list.

Show fields

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.type)type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The type of data that is stored in the metafield. Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the metafield was updated.

[Anchor to value](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.value)value

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#field-Metafield.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AppInstallation.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-metafield)
*   {}[AppInstallation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-metafields)
*   {}[Article.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-metafield)
*   {}[Article.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-metafields)
*   {}[Blog.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-metafield)
*   {}[Blog.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-metafields)
*   {}[CartTransform.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-metafield)
*   {}[CartTransform.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-metafields)
*   {}[Collection.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-metafield)
*   {}[Collection.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-metafields)
*   {}[Company.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-metafield)
*   {}[Company.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-metafields)
*   {}[CompanyLocation.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-metafield)
*   {}[CompanyLocation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-metafields)
*   {}[Customer.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-metafield)
*   {}[Customer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-metafields)
*   {}[CustomerSegmentMember.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-metafield)
*   {}[CustomerSegmentMember.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-metafields)
*   {}[DeliveryCustomization.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-metafield)
*   {}[DeliveryCustomization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-metafields)
*   {}[DiscountAutomaticNode.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-metafield)
*   {}[DiscountAutomaticNode.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-metafields)
*   {}[DiscountCodeNode.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-metafield)
*   {}[DiscountCodeNode.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-metafields)
*   {}[DiscountNode.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-metafield)
*   {}[DiscountNode.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-metafields)
*   {}[DraftOrder.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-metafield)
*   {}[DraftOrder.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-metafields)
*   {}[FulfillmentConstraintRule.metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-metafield)
*   {}[FulfillmentConstraintRule.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-metafields)

Show hidden Show deprecations

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#mutations)Mutations
-------------------------------------------------------------------------------------------------------------

[Anchor to metafieldsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#mutation-metafieldsSet)[metafields Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

•mutation

Sets metafield values. Metafield values will be set regardless if they were previously created or not.

Allows a maximum of 25 metafields to be set at a time.

This operation is atomic, meaning no changes are persisted if an error is encountered.

As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

Show payload

* * *

Was this section helpful?

Yes No

<~>Metafield Mutations
----------------------

### Mutated by

*   <~>[metafields Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsSet)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------

[Anchor to HasCompareDigest](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#interface-HasCompareDigest)[Has Compare Digest](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasCompareDigest)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafield#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Metafield Implements
-----------------------

### Implements

*   ||-[Has Compare Digest](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasCompareDigest)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*