---
title: "Blog"
description: "Shopify GraphQL Admin API documentation for blog"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/blog"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Blog - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/blog

Markdown Content:
Blog - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interfaces)
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

[Anchor to Blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#top)
Blog
====

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs. Blogs are meant to be used as a type of magazine or newsletter for the shop, with content that changes over time.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#fields)Fields
-----------------------------------------------------------------------------------------------

[Anchor to articles](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.articles)articles

•[Article Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection)

non-null

List of the blog's articles.

Show fields

[Anchor to articlesCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.articlesCount)articles Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Count of articles. Limited to a maximum of 10000 by default.

Show fields

[Anchor to commentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.commentPolicy)comment Policy

•[Comment Policy!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentPolicy)

non-null

Indicates whether readers can post comments to the blog and if comments are moderated or not.

Show enum values

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the blog was created.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.feed)feed

•[Blog Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogFeed)

FeedBurner provider details. Any blogs that aren't already integrated with FeedBurner can't use the service.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A unique, human-friendly string for the blog. If no handle is specified, a handle will be generated automatically from the blog title. The handle is customizable and is used by the Liquid templating language to refer to the blog.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A list of tags associated with the 200 most recent blog articles.

[Anchor to templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.templateSuffix)template Suffix

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the template a blog is using if it's using an alternate template. Returns `null` if a blog is using the default blog.liquid template.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the blog.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.updatedAt)updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the blog was update.

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#field-Blog.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Article.blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-blog)
*   <->[BlogConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#field-nodes)
*   {}[BlogEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogEdge#field-node)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#queries)Queries
--------------------------------------------------------------------------------------------------

[Anchor to blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#query-blog)[blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog)

•query

Returns a Blog resource by ID.

Show fields

[Anchor to blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#query-blogs)[blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)

•query

List of the shop's blogs.

Show fields

* * *

Was this section helpful?

Yes No

<?>Blog Queries
---------------

### Queried by

*   <?>[blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/Blog)
*   <?>[blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/BlogConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#mutations)Mutations
--------------------------------------------------------------------------------------------------------

[Anchor to blogCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#mutation-blogCreate)[blog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogCreate)

•mutation

Creates a blog.

Show payload

[Anchor to blogUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#mutation-blogUpdate)[blog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

•mutation

Updates a blog.

Show payload

* * *

Was this section helpful?

Yes No

<~>Blog Mutations
-----------------

### Mutated by

*   <~>[blog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogCreate)
*   <~>[blog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/blog#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Blog Implements
------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*