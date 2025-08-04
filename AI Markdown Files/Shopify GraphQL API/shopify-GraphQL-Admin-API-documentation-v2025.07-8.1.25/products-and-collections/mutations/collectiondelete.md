---
title: "collectionDelete"
description: "Shopify GraphQL Admin API documentation for collectiondelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectiondelete"
extraction_method: "alternative_service"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Choose a version:

[Anchor to collectionDelete](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#top)

mutation

Requires `write_products` access scope. Also: The store must not be on the Starter or Retail plans and user must have a permission to delete collection.

Deletes a collection.

[Anchor to Arguments](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#arguments)

Arguments
---------

[Anchor to input](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#arguments-input)

input

•[CollectionDeleteInput!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDeleteInput)

required

The collection to delete.

* * *

Was this section helpful?

[Anchor to CollectionDeletePayload returns](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#returns)

CollectionDeletePayload returns




-----------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedCollectionId](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#returns-deletedCollectionId)

deletedCollectionId

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the collection that was deleted. Returns `null` if the collection doesn't exist.

[Anchor to shop](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#returns-shop)

shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The shop associated with the collection.

[Anchor to userErrors](about:/docs/api/admin-graphql/latest/mutations/collectiondelete#returns-userErrors)

userErrors

•[\[UserError!\]!](/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

* * *

Was this section helpful?