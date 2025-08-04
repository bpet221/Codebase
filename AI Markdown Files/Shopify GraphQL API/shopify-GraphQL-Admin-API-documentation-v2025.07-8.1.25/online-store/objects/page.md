---
title: "Page"
description: "Shopify GraphQL Admin API documentation for page"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/page"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Page - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/page

Markdown Content:
Page - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interfaces)
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

[Anchor to Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#top)
Page
====

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

A page on the Online Store.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#fields)Fields
-----------------------------------------------------------------------------------------------

[Anchor to body](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.body)body

•[HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

non-null

The text content of the page, complete with HTML markup.

[Anchor to bodySummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.bodySummary)body Summary

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The first 150 characters of the page body. If the page body contains more than 150 characters, additional characters are truncated by ellipses.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time (ISO 8601 format) of the page creation.

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A unique, human-friendly string for the page. In themes, the Liquid templating language refers to a page by its handle.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to isPublished](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.isPublished)is Published

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether or not the page is visible.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to publishedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.publishedAt)published At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time (ISO 8601 format) when the page became or will become visible. Returns null when the page isn't visible.

[Anchor to templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.templateSuffix)template Suffix

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The suffix of the template that's used to render the page.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

Title of the page.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time (ISO 8601 format) of the latest page update.

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#field-Page.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[PageConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#field-nodes)
*   {}[PageEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageEdge#field-node)

### Possible type in

*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#queries)Queries
--------------------------------------------------------------------------------------------------

[Anchor to page](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#query-page)[page](https://shopify.dev/docs/api/admin-graphql/latest/queries/page)

•query

Returns a Page resource by ID.

Show fields

[Anchor to pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#query-pages)[pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)

•query

List of the shop's pages.

Show fields

* * *

Was this section helpful?

Yes No

<?>Page Queries
---------------

### Queried by

*   <?>[page](https://shopify.dev/docs/api/admin-graphql/latest/queries/Page)
*   <?>[pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/PageConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#mutations)Mutations
--------------------------------------------------------------------------------------------------------

[Anchor to pageCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#mutation-pageCreate)[page Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)

•mutation

Creates a page.

Show payload

[Anchor to pageUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#mutation-pageUpdate)[page Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

•mutation

Updates a page.

Show payload

* * *

Was this section helpful?

Yes No

<~>Page Mutations
-----------------

### Mutated by

*   <~>[page Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageCreate)
*   <~>[page Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/page#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Page Implements
------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*