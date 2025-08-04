---
title: "OnlineStoreThemeFileOperationResult"
description: "Shopify GraphQL Admin API documentation for onlinestorethemefileoperationresult"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: OnlineStoreThemeFileOperationResult - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult

Markdown Content:
OnlineStoreThemeFileOperationResult - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#main-content)

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
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   
Online store

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/article)
        *   [Article Author](https://shopify.dev/docs/api/admin-graphql/latest/objects/articleauthor)
        *   [Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog)
        *   [Blog Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/blogfeed)
        *   [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment)
        *   [Comment Author](https://shopify.dev/docs/api/admin-graphql/latest/objects/commentauthor)
        *   [Customer Account App Extension Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountappextensionpage)
        *   [Customer Account Native Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage)
        *   [Markets Themes Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketsthemesentitlement)
        *   [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu)
        *   [Menu Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem)
        *   [Online Store](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestore)
        *   [Online Store Password Protection](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorepasswordprotection)
        *   [Online Store Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestoretheme)
        *   [Online Store Theme File](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile)
        *   [Online Store Theme File Body Base64](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefilebodybase64)
        *   [Online Store Theme File Body Text](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefilebodytext)
        *   [Online Store Theme File Body Url](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefilebodyurl)
        *   [Online Store Theme File Operation Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#mutations)
        *   [Online Store Theme File Read Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefilereadresult)
        *   [Online Store Theme Files User Errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefilesusererrors)
        *   [Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/page)
        *   [Script Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/scripttag)
        *   [SEO](https://shopify.dev/docs/api/admin-graphql/latest/objects/seo)
        *   [Url Redirect](https://shopify.dev/docs/api/admin-graphql/latest/objects/urlredirect)
        *   [Url Redirect Import](https://shopify.dev/docs/api/admin-graphql/latest/objects/urlredirectimport)
        *   [Url Redirect Import Preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/urlredirectimportpreview)

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

[Anchor to OnlineStoreThemeFileOperationResult](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#top)
Online Store Theme File Operation Result
========================================

object

Requires `read_themes` access scope.

Represents the result of a copy, delete, or write operation performed on a theme file.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#fields)Fields
------------------------------------------------------------------------------------------------------------------------------

[Anchor to checksumMd5](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#field-OnlineStoreThemeFileOperationResult.fields.checksumMd5)checksum Md5

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The md5 digest of the theme file for data integrity.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#field-OnlineStoreThemeFileOperationResult.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the theme file was created.

[Anchor to filename](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#field-OnlineStoreThemeFileOperationResult.fields.filename)filename

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Unique identifier of the theme file.

[Anchor to size](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#field-OnlineStoreThemeFileOperationResult.fields.size)size

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The size of the theme file in bytes.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#field-OnlineStoreThemeFileOperationResult.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the theme file was last updated.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#mutations)Mutations
---------------------------------------------------------------------------------------------------------------------------------------

[Anchor to themeFilesCopy](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#mutation-themeFilesCopy)[theme Files Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)

•mutation

Copy theme files. Copying to existing theme files will overwrite them.

Show payload

[Anchor to themeFilesDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#mutation-themeFilesDelete)[theme Files Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)

•mutation

Deletes a theme's files.

Show payload

[Anchor to themeFilesUpsert](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefileoperationresult#mutation-themeFilesUpsert)[theme Files Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)

•mutation

Create or update theme files.

Show payload

* * *

Was this section helpful?

Yes No

<~>OnlineStoreThemeFileOperationResult Mutations
------------------------------------------------

### Mutated by

*   <~>[theme Files Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesCopy)
*   <~>[theme Files Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesDelete)
*   <~>[theme Files Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeFilesUpsert)


---
*Content truncated at "Updates" section*