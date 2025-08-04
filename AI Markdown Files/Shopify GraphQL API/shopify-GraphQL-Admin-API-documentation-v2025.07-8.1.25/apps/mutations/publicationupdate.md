---
title: "publicationUpdate"
description: "Shopify GraphQL Admin API documentation for publicationupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate"
extraction_method: "jina"
sections: ['Apps', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publicationUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate

Markdown Content:
publicationUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#main-content)

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
*   
Apps

    *   Queries   
    *   
Mutations

        *   [app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall)
        *   [mobile Platform Application Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate)
        *   [mobile Platform Application Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete)
        *   [mobile Platform Application Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationupdate)
        *   [publication Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationcreate)
        *   [publication Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete)
        *   [publication Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate)
        *   [shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate)

    *   Objects   

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
*   Online store   
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

[Anchor to publicationUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#top)
publication Update
==================

mutation

Requires `write_publications` access scope. Also: The user must have a permission to create and edit catalogs.

Updates a publication.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the publication to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#arguments-input)input

•[Publication Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PublicationUpdateInput)

required

The input fields to use when updating the publication.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PublicationUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#returns)Publication Update Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to publication](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#returns-publication)publication

•[Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

The publication that's been updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationupdate#returns-userErrors)user Errors

•[[Publication User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### publicationUpdate reference

Hide content

Mutation Reference
------------------

Copy

99

1

2

3

4

5

6

7

8

9

10

11

›

⌄

⌄

⌄

⌄

mutation publicationUpdate($id: ID!, $input: PublicationUpdateInput!){

publicationUpdate(id: $id, input: $input){

publication {

# Publication fields

}

userErrors {

field

message

}

}

}

Hide content

Input
-----

Variables Schema

Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

›

⌄

⌄

⌄

⌄

{

"id": "gid://shopify/<objectName>/10079785100",

"input": {

"publishablesToAdd": [

"gid://shopify/<objectName>/10079785100"

],

"publishablesToRemove": [

"gid://shopify/<objectName>/10079785100"

],

"autoPublish": true

}

}

```
{
  "id": "gid://shopify/<objectName>/10079785100",
  "input": {
    "publishablesToAdd": [
      "gid://shopify/<objectName>/10079785100"
    ],
    "publishablesToRemove": [
      "gid://shopify/<objectName>/10079785100"
    ],
    "autoPublish": true
  }
}
```

```
input PublicationUpdateInput {
  publishablesToAdd: [ID!]
  publishablesToRemove: [ID!]
  autoPublish: Boolean
}
```


---
*Content truncated at "Updates" section*