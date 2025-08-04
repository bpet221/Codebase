---
title: "CustomerAccountNativePage"
description: "Shopify GraphQL Admin API documentation for customeraccountnativepage"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerAccountNativePage - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage

Markdown Content:
CustomerAccountNativePage - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#interfaces)
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

[Anchor to CustomerAccountNativePage](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#top)
Customer Account Native Page
============================

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

A native page for the customer account navigation menu.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#field-CustomerAccountNativePage.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#field-CustomerAccountNativePage.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A unique, human-friendly string for the customer account page.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#field-CustomerAccountNativePage.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The unique ID for the customer account page.

[Anchor to pageType](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#field-CustomerAccountNativePage.fields.pageType)page Type

•[Customer Account Native Page Page Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerAccountNativePagePageType)

non-null

The type of customer account native page.

Show enum values

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#field-CustomerAccountNativePage.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the customer account page.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to CustomerAccountPage](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#interface-CustomerAccountPage)[Customer Account Page](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountnativepage#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CustomerAccountNativePage Implements
---------------------------------------

### Implements

*   ||-[Customer Account Page](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*