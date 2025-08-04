---
title: "dataSaleOptOut"
description: "Shopify GraphQL Admin API documentation for datasaleoptout"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout"
extraction_method: "jina"
sections: ['Privacy', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: dataSaleOptOut - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout

Markdown Content:
dataSaleOptOut - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#main-content)

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
*   Online Store   
*   Orders   
*   
Privacy

    *   Queries   
    *   
Mutations

        *   [consent Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/consentpolicyupdate)
        *   [data Sale Opt Out](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout)
        *   [privacy Features Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/privacyfeaturesdisable)

    *   Objects   

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

[Anchor to dataSaleOptOut](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#top)
data Sale Opt Out
=================

mutation

Requires `write_privacy_settings` access scope.

Opt out a customer from data sale.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#arguments)
Arguments
---------

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#arguments-email)email

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The email address of the customer to opt out of data sale.

* * *

Was this section helpful?

Yes No

[Anchor to DataSaleOptOutPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#returns)Data Sale Opt Out Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#returns-customerId)customer Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the customer whose email address has been opted out of data sale.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/datasaleoptout#returns-userErrors)user Errors

•[[Data Sale Opt Out User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DataSaleOptOutUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### dataSaleOptOut reference

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

mutation dataSaleOptOut($email: String!){

dataSaleOptOut(email: $email){

customerId

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

"email": "<your-email>"

}

```
{
  "email": "<your-email>"
}
```


---
*Content truncated at "Updates" section*