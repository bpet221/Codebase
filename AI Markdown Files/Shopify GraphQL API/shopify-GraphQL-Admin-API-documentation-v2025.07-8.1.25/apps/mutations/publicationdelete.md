---
title: "publicationDelete"
description: "Shopify GraphQL Admin API documentation for publicationdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete"
extraction_method: "jina"
sections: ['Apps', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publicationDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete

Markdown Content:
publicationDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#main-content)

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
*   
Apps

    *   Queries   
    *   
Mutations

        *   [app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall)
        *   [mobile Platform Application Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate)
        *   [mobile Platform Application Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete)
        *   [mobile Platform Application Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationupdate)
        *   [publication Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete)
        *   [shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate)

    *   Objects   

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
*   Online Store   
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

[Anchor to publicationDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#top)
publication Delete
==================

mutation

Requires `write_publications` access scope. Also: The user must have a permission to create and edit catalogs.

Deletes a publication.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the publication to delete.

* * *

Was this section helpful?

Yes No

[Anchor to PublicationDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#returns)Publication Delete Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#returns-deletedId)deleted Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the publication that was deleted.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete#returns-userErrors)user Errors

•[[Publication User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### publicationDelete reference

Hide content

Mutation Reference
------------------

Copy

9

1

2

3

4

5

6

7

8

9

›

⌄

⌄

⌄

mutation publicationDelete($id: ID!){

publicationDelete(id: $id){

deletedId

userErrors {

field

message

}

}

}

Hide content

Input
-----

Variables

Copy

9

1

2

3

›

⌄

{

"id": "gid://shopify/<objectName>/10079785100"

}

```
{
  "id": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*