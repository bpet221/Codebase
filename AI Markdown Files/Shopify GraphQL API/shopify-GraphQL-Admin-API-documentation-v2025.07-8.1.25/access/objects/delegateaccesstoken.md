---
title: "DelegateAccessToken"
description: "Shopify GraphQL Admin API documentation for delegateaccesstoken"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken"
extraction_method: "jina"
sections: ['Access', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DelegateAccessToken - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken

Markdown Content:
Choose a version:

[Anchor to DelegateAccessToken](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#top)

object

A token that delegates a set of scopes from the original permission.

To learn more about creating delegate access tokens, refer to [Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#fields)
Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to accessScopes](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#field-DelegateAccessToken.fields.accessScopes)
access Scopes

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
non-null

The list of permissions associated with the token.

[Anchor to accessToken](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#field-DelegateAccessToken.fields.accessToken)
access Token

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
non-null

The issued delegate access token.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#field-DelegateAccessToken.fields.createdAt)
created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)
non-null

The date and time when the delegate access token was created.

* * *

Was this section helpful?

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#mutations)
Mutations
------------------------------------------------------------------------------------------------------------------------

[Anchor to delegateAccessTokenCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/delegateaccesstoken#mutation-delegateAccessTokenCreate)
[delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

•mutation

Creates a delegate access token.

To learn more about creating delegate access tokens, refer to [Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

* * *

Was this section helpful?
