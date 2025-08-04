---
title: "consentPolicy"
description: "Shopify GraphQL Admin API documentation for consentpolicy"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy"
extraction_method: "jina"
sections: ['Privacy', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: consentPolicy - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy

Markdown Content:
consentPolicy - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#main-content)

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
*   Apps   
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
*   
Privacy

    *   
Queries

        *   [consent Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy)
        *   [consent Policy Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicyregions)
        *   [privacy Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/privacysettings)

    *   Mutations   
    *   Objects   

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

[Anchor to consentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#top)
consent Policy
==============

query

Returns the customer privacy consent policies of a shop.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#arguments)
Arguments
---------

[Anchor to consentRequired](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#arguments-consentRequired)consent Required

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Return policies where consent is required or not.

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#arguments-countryCode)country Code

•[Privacy Country Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

Return policies with the provided country code.

Show enum values

[Anchor to dataSaleOptOutRequired](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#arguments-dataSaleOptOutRequired)data Sale Opt Out Required

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Return policies where data sale opt out is required or not.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

Return the policy with the provided ID.

[Anchor to regionCode](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#arguments-regionCode)region Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Return policies with the provided region code.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------

[Anchor to ConsentPolicy](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentpolicy#returns-ConsentPolicy)Consent Policy

•[[Consent Policy!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ConsentPolicy)

A consent policy describes the level of consent that the merchant requires from the user before actually collecting and processing the data.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### consentPolicy reference

Hide content

Query Reference
---------------

Copy

9

1

2

3

4

5

›

⌄

⌄

{

consentPolicy {

# consentPolicy fields

}

}


---
*Content truncated at "Updates" section*