---
title: "Article"
description: "Shopify GraphQL Admin API documentation for article"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/article"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Article - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/article

Markdown Content:
Article - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interfaces)
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

[Anchor to Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#top)
Article
=======

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

An article in the blogging system.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#fields)Fields
--------------------------------------------------------------------------------------------------

[Anchor to author](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.author)author

•[Article Author](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthor)

The name of the author of the article.

Show fields

[Anchor to blog](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.blog)blog

•[Blog!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

non-null

The blog containing the article.

Show fields

[Anchor to body](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.body)body

•[HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

non-null

The text of the article's body, complete with HTML markup.

[Anchor to comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.comments)comments

•[Comment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection)

non-null

List of the article's comments.

Show fields

[Anchor to commentsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.commentsCount)comments Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

Count of comments. Limited to a maximum of 10000 by default.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time (ISO 8601 format) when the article was created.

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A unique, human-friendly string for the article that's automatically generated from the article's title. The handle is used in the article's URL.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image associated with the article.

Show fields

[Anchor to isPublished](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.isPublished)is Published

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether or not the article is visible.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to publishedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.publishedAt)published At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time (ISO 8601 format) when the article became or will become visible. Returns null when the article isn't visible.

[Anchor to summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.summary)summary

•[HTML](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

A summary of the article, which can include HTML markup. The summary is used by the online store theme to display the article on other pages, such as the home page or the main blog page.

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A comma-separated list of tags. Tags are additional short descriptors formatted as a string of comma-separated values.

[Anchor to templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.templateSuffix)template Suffix

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the template an article is using if it's using an alternate template. If an article is using the default `article.liquid` template, then the value returned is `null`.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the article.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.updatedAt)updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time (ISO 8601 format) when the article was last updated.

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#field-Article.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[ArticleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection#field-nodes)
*   {}[ArticleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleEdge#field-node)
*   {}[Blog.articles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-articles)
*   {}[Comment.article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-article)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#queries)Queries
-----------------------------------------------------------------------------------------------------

[Anchor to article](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#query-article)[article](https://shopify.dev/docs/api/admin-graphql/latest/queries/article)

•query

Returns an Article resource by ID.

Show fields

[Anchor to articles](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#query-articles)[articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)

•query

List of the shop's articles.

Show fields

* * *

Was this section helpful?

Yes No

<?>Article Queries
------------------

### Queried by

*   <?>[article](https://shopify.dev/docs/api/admin-graphql/latest/queries/Article)
*   <?>[articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/ArticleConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#mutations)Mutations
-----------------------------------------------------------------------------------------------------------

[Anchor to articleCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#mutation-articleCreate)[article Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)

•mutation

Creates an article.

Show payload

[Anchor to articleUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#mutation-articleUpdate)[article Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate)

•mutation

Updates an article.

Show payload

* * *

Was this section helpful?

Yes No

<~>Article Mutations
--------------------

### Mutated by

*   <~>[article Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate)
*   <~>[article Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/article#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Article Implements
---------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*