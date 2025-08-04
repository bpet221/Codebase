---
title: "shopifyPaymentsPayoutAlternateCurrencyCreate"
description: "Shopify GraphQL Admin API documentation for shopifypaymentspayoutalternatecurrencycreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate"
extraction_method: "jina"
sections: ['Shopify Payments', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: shopifyPaymentsPayoutAlternateCurrencyCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate

Markdown Content:
shopifyPaymentsPayoutAlternateCurrencyCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#main-content)

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
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   
Shopify Payments

    *   Queries   
    *   
Mutations

        *   [dispute Evidence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate)
        *   [shopify Payments Payout Alternate Currency Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate)

    *   Objects   

*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to shopifyPaymentsPayoutAlternateCurrencyCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#top)
shopify Payments Payout Alternate Currency Create
=================================================

mutation

Requires `write_shopify_payments_tooling` access scope.

Creates an alternate currency payout for a Shopify Payments account.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#arguments)
Arguments
---------

[Anchor to accountId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#arguments-accountId)account Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the Shopify Payments account on which the mutation is being performed.

[Anchor to currency](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#arguments-currency)currency

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

required

The currency of the balance to payout.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to ShopifyPaymentsPayoutAlternateCurrencyCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#returns)Shopify Payments Payout Alternate Currency Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to payout](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#returns-payout)payout

•[Shopify Payments Tooling Provider Payout](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsToolingProviderPayout)

The resulting alternate currency payout created.

Show fields

[Anchor to success](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#returns-success)success

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the alternate currency payout was created successfully.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate#returns-userErrors)user Errors

•[[Shopify Payments Payout Alternate Currency Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutAlternateCurrencyCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### shopifyPaymentsPayoutAlternateCurrencyCreate reference

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

12

›

⌄

⌄

⌄

⌄

mutation shopifyPaymentsPayoutAlternateCurrencyCreate($accountId: ID, $currency: CurrencyCode!){

shopifyPaymentsPayoutAlternateCurrencyCreate(accountId: $accountId, currency: $currency){

payout {

# ShopifyPaymentsToolingProviderPayout fields

}

success

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

4

›

⌄

{

"accountId": "gid://shopify/<objectName>/10079785100",

"currency": "USD"

}

```
{
  "accountId": "gid://shopify/<objectName>/10079785100",
  "currency": "USD"
}
```


---
*Content truncated at "Updates" section*