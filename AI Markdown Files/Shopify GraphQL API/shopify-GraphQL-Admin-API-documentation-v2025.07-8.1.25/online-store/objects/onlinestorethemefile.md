---
title: "OnlineStoreThemeFile"
description: "Shopify GraphQL Admin API documentation for onlinestorethemefile"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: OnlineStoreThemeFile - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile

Markdown Content:
OnlineStoreThemeFile - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#main-content)

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
*   Metafields   
*   Metaobjects   
*   
Online Store

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

[Anchor to OnlineStoreThemeFile](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#top)
Online Store Theme File
=======================

object

Requires `read_themes` access scope.

Represents a theme file.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#fields)Fields
---------------------------------------------------------------------------------------------------------------

[Anchor to body](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.body)body

•[Online Store Theme File Body!](https://shopify.dev/docs/api/admin-graphql/latest/unions/OnlineStoreThemeFileBody)

non-null

The body of the theme file.

Show union types

[Anchor to checksumMd5](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.checksumMd5)checksum Md5

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The md5 digest of the theme file for data integrity.

[Anchor to contentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.contentType)content Type

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The content type of the theme file.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the theme file was created.

[Anchor to filename](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.filename)filename

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The unique identifier of the theme file.

[Anchor to size](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.size)size

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The size of the theme file in bytes.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/onlinestorethemefile#field-OnlineStoreThemeFile.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the theme file was last updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[OnlineStoreTheme.files](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-files)
*   <->[OnlineStoreThemeFileConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#field-nodes)
*   {}[OnlineStoreThemeFileEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileEdge#field-node)


---
*Content truncated at "Updates" section*