---
title: "CheckoutBranding"
description: "Shopify GraphQL Admin API documentation for checkoutbranding"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding"
extraction_method: "jina"
sections: ['Checkout branding', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CheckoutBranding - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding

Markdown Content:
CheckoutBranding - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#main-content)

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
*   
Checkout Branding

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#mutations)
        *   [Checkout Branding Control](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrol)
        *   [Checkout Branding Customizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcustomizations)
        *   [Checkout Branding Design System](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingdesignsystem)
        *   [Checkout Branding Font Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontgroup)
        *   [Checkout Branding Font Size](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfontsize)
        *   [Checkout Branding Header](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheader)
        *   [Checkout Branding Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingimage)
        *   [Checkout Branding Logo](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandinglogo)
        *   [Checkout Branding Main](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingmain)
        *   [Checkout Branding Order Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingordersummary)
        *   [Checkout Branding Typography](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingtypography)

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

[Anchor to CheckoutBranding](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#top)
Checkout Branding
=================

object

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan.

The settings of checkout visual customizations.

To learn more about updating checkout branding settings, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#fields)Fields
-----------------------------------------------------------------------------------------------------------

[Anchor to customizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#field-CheckoutBranding.fields.customizations)customizations

•[Checkout Branding Customizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingCustomizations)

The customizations that apply to specific components or areas of the user interface.

Show fields

[Anchor to designSystem](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#field-CheckoutBranding.fields.designSystem)design System

•[Checkout Branding Design System](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingDesignSystem)

The design system allows you to set values that represent specific attributes of your brand like color and font. These attributes are used throughout the user interface. This brings consistency and allows you to easily make broad design changes.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

No referencing types

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#queries)Queries
--------------------------------------------------------------------------------------------------------------

[Anchor to checkoutBranding](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#query-checkoutBranding)[checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutBranding)

•query

Returns the visual customizations for checkout for a given checkout profile.

To learn more about updating checkout branding settings, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

Show fields

* * *

Was this section helpful?

Yes No

<?>CheckoutBranding Queries
---------------------------

### Queried by

*   <?>[checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/queries/CheckoutBranding)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------

[Anchor to checkoutBrandingUpsert](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbranding#mutation-checkoutBrandingUpsert)[checkout Branding Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert)

•mutation

Updates the checkout branding settings for a [checkout profile](https://shopify.dev/api/admin-graphql/unstable/queries/checkoutProfile).

If the settings don't exist, then new settings are created. The checkout branding settings applied to a published checkout profile will be immediately visible within the store's checkout. The checkout branding settings applied to a draft checkout profile could be previewed within the admin checkout editor.

To learn more about updating checkout branding settings, refer to the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

Show payload

* * *

Was this section helpful?

Yes No

<~>CheckoutBranding Mutations
-----------------------------

### Mutated by

*   <~>[checkout Branding Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutBrandingUpsert)


---
*Content truncated at "Updates" section*