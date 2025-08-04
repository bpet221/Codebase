---
title: "ConsentPolicyRegion"
description: "Shopify GraphQL Admin API documentation for consentpolicyregion"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion"
extraction_method: "jina"
sections: ['Privacy', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ConsentPolicyRegion - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion

Markdown Content:
ConsentPolicyRegion - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#main-content)

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

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Consent Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicy)
        *   [Consent Policy Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyerror)
        *   [Consent Policy Region](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#queries)
        *   [Cookie Banner](https://shopify.dev/docs/api/admin-graphql/latest/objects/cookiebanner)
        *   [Data Sale Opt Out Page](https://shopify.dev/docs/api/admin-graphql/latest/objects/datasaleoptoutpage)
        *   [Privacy Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/privacypolicy)
        *   [Privacy Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/privacysettings)

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

[Anchor to ConsentPolicyRegion](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#top)
Consent Policy Region
=====================

object

A country or region code.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#fields)Fields
--------------------------------------------------------------------------------------------------------------

[Anchor to countryCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#field-ConsentPolicyRegion.fields.countryCode)country Code

•[Privacy Country Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PrivacyCountryCode)

The `ISO 3166` country code for which the policy applies.

Show enum values

[Anchor to regionCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#field-ConsentPolicyRegion.fields.regionCode)region Code

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The `ISO 3166` region code for which the policy applies.

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#queries)Queries
-----------------------------------------------------------------------------------------------------------------

[Anchor to consentPolicyRegions](https://shopify.dev/docs/api/admin-graphql/latest/objects/consentpolicyregion#query-consentPolicyRegions)[consent Policy Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/consentPolicyRegions)

•query

List of countries and regions for which consent policies can be created or updated.

Show fields

* * *

Was this section helpful?

Yes No

<?>ConsentPolicyRegion Queries
------------------------------

### Queried by

*   <?>[consent Policy Regions](https://shopify.dev/docs/api/admin-graphql/latest/queries/ConsentPolicyRegion)


---
*Content truncated at "Updates" section*