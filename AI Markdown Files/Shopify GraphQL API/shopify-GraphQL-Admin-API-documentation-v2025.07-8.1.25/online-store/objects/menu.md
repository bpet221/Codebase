---
title: "Menu"
description: "Shopify GraphQL Admin API documentation for menu"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/menu"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Menu - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/menu

Markdown Content:
Menu - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#interfaces)
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

[Anchor to Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#top)
Menu
====

object

Requires `read_online_store_navigation` access scope.

A menu for display on the storefront.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#fields)Fields
-----------------------------------------------------------------------------------------------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#field-Menu.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The menu's handle.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#field-Menu.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to isDefault](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#field-Menu.fields.isDefault)is Default

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the menu is a default. The handle for default menus can't be updated and default menus can't be deleted.

[Anchor to items](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#field-Menu.fields.items)items

•[[Menu Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem)

non-null

A list of items on the menu sorted by position.

Show fields

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#field-Menu.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The menu's title.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#field-Menu.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[MenuConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#field-nodes)
*   {}[MenuEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#queries)Queries
--------------------------------------------------------------------------------------------------

[Anchor to menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#query-menu)[menu](https://shopify.dev/docs/api/admin-graphql/latest/queries/menu)

•query

Returns a Menu resource by ID.

Show fields

[Anchor to menus](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#query-menus)[menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

•query

The shop's menus.

Show fields

* * *

Was this section helpful?

Yes No

<?>Menu Queries
---------------

### Queried by

*   <?>[menu](https://shopify.dev/docs/api/admin-graphql/latest/queries/Menu)
*   <?>[menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/MenuConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#mutations)Mutations
--------------------------------------------------------------------------------------------------------

[Anchor to menuCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#mutation-menuCreate)[menu Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)

•mutation

Creates a menu.

Show payload

[Anchor to menuUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#mutation-menuUpdate)[menu Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

•mutation

Updates a menu.

Show payload

* * *

Was this section helpful?

Yes No

<~>Menu Mutations
-----------------

### Mutated by

*   <~>[menu Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)
*   <~>[menu Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/menu#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Menu Implements
------------------

### Implements

*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*