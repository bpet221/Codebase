---
title: "MenuItem"
description: "Shopify GraphQL Admin API documentation for menuitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: MenuItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem

Markdown Content:
MenuItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#main-content)

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

[Anchor to MenuItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#top)
Menu Item
=========

object

A menu item for display on the storefront.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#fields)Fields
---------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID of the navigation menu item.

[Anchor to items](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.items)items

•[[Menu Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem)

non-null

List of the menu items nested under this item sorted by position.

Show fields

[Anchor to resourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.resourceId)resource Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the resource to link to.

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The menu item's tags to filter a collection.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The menu item's title.

[Anchor to type](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.type)type

•[Menu Item Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuItemType)

non-null

The menu item's type.

Show enum values

[Anchor to url](https://shopify.dev/docs/api/admin-graphql/latest/objects/menuitem#field-MenuItem.fields.url)url

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The menu item's url.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[Menu.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu#field-items)
*   {}[MenuItem.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem#field-items)


---
*Content truncated at "Updates" section*