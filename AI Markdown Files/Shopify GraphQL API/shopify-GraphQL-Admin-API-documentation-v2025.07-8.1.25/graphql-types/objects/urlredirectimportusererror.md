---
title: "UrlRedirectImportUserError"
description: "Shopify GraphQL Admin API documentation for urlredirectimportusererror"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/urlredirectimportusererror"
extraction_method: "alternative_service"
sections: ['GraphQL Types', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Choose a version:

[Anchor to UrlRedirectImportUserError](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#top)

object

Requires `read_online_store_navigation` access scope.

Represents an error that happens during execution of a redirect import mutation.

[Anchor to Fields](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#fields)

Fields




----------------------------------------------------------------------------------------------------------------

[Anchor to code](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#field-UrlRedirectImportUserError.fields.code)

code

•[UrlRedirectImportErrorCode](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectImportErrorCode)

The error code.

[Anchor to field](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#field-UrlRedirectImportUserError.fields.field)

field

•[\[String!\]](/docs/api/admin-graphql/latest/scalars/String)

The path to the input field that caused the error.

[Anchor to message](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#field-UrlRedirectImportUserError.fields.message)

message

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The error message.

* * *

Was this section helpful?

* * *

[Anchor to Mutations](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#mutations)

Mutations




-------------------------------------------------------------------------------------------------------------------------

[Anchor to urlRedirectImportCreate](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#mutation-urlRedirectImportCreate)

[urlRedirectImportCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate)

•mutation

Creates a [`UrlRedirectImport`](https://shopify.dev/api/admin-graphql/latest/objects/UrlRedirectImport) object.

After creating the `UrlRedirectImport` object, the `UrlRedirectImport` request can be performed using the [`urlRedirectImportSubmit`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportSubmit) mutation.

[Anchor to urlRedirectImportSubmit](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#mutation-urlRedirectImportSubmit)

[urlRedirectImportSubmit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportSubmit)

•mutation

Submits a `UrlRedirectImport` request to be processed.

The `UrlRedirectImport` request is first created with the [`urlRedirectImportCreate`](https://shopify.dev/api/admin-graphql/latest/mutations/urlRedirectImportCreate) mutation.

* * *

Was this section helpful?

* * *

[Anchor to Interfaces](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#interfaces)

Interfaces




----------------------------------------------------------------------------------------------------------------------------

[Anchor to DisplayableError](about:/docs/api/admin-graphql/latest/objects/urlredirectimportusererror#interface-DisplayableError)

[DisplayableError](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

•interface

* * *

Was this section helpful?