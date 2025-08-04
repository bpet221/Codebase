---
title: "Comment"
description: "Shopify GraphQL Admin API documentation for comment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/comment"
extraction_method: "jina"
sections: ['Online store', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Comment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/comment

Markdown Content:
Comment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#interfaces)
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

[Anchor to Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#top)
Comment
=======

object

Requires `read_content` access scope or `read_online_store_pages` access scope.

A comment on an article.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#fields)Fields
--------------------------------------------------------------------------------------------------

[Anchor to article](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.article)article

•[Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

The article associated with the comment.

Show fields

[Anchor to author](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.author)author

•[Comment Author!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentAuthor)

non-null

The comment’s author.

Show fields

[Anchor to body](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.body)body

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The content of the comment.

[Anchor to bodyHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.bodyHtml)body Html

•[HTML!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/HTML)

non-null

The content of the comment, complete with HTML formatting.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the comment was created.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to ip](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.ip)ip

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The IP address of the commenter.

[Anchor to isPublished](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.isPublished)is Published

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether or not the comment is published.

[Anchor to publishedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.publishedAt)published At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the comment was published.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.status)status

•[Comment Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentStatus)

non-null

The status of the comment.

Show enum values

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.updatedAt)updated At

•[Date Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

The date and time when the comment was last updated.

[Anchor to userAgent](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#field-Comment.fields.userAgent)user Agent

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The user agent of the commenter.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Article.comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-comments)
*   <->[CommentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#field-nodes)
*   {}[CommentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#queries)Queries
-----------------------------------------------------------------------------------------------------

[Anchor to comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#query-comment)[comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/comment)

•query

Returns a Comment resource by ID.

Show fields

[Anchor to comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#query-comments)[comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

•query

List of the shop's comments.

Show fields

* * *

Was this section helpful?

Yes No

<?>Comment Queries
------------------

### Queried by

*   <?>[comment](https://shopify.dev/docs/api/admin-graphql/latest/queries/Comment)
*   <?>[comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/CommentConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#mutations)Mutations
-----------------------------------------------------------------------------------------------------------

[Anchor to commentApprove](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#mutation-commentApprove)[comment Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)

•mutation

Approves a comment.

Show payload

[Anchor to commentNotSpam](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#mutation-commentNotSpam)[comment Not Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)

•mutation

Marks a comment as not spam.

Show payload

[Anchor to commentSpam](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#mutation-commentSpam)[comment Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

•mutation

Marks a comment as spam.

Show payload

* * *

Was this section helpful?

Yes No

<~>Comment Mutations
--------------------

### Mutated by

*   <~>[comment Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentApprove)
*   <~>[comment Not Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentNotSpam)
*   <~>[comment Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/comment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Comment Implements
---------------------

### Implements

*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*