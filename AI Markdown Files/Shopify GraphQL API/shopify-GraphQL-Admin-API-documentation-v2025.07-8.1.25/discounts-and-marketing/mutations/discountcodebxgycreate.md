---
title: "discountCodeBxgyCreate"
description: "Shopify GraphQL Admin API documentation for discountcodebxgycreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate"
extraction_method: "alternative_service"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Choose a version:

[Anchor to discountCodeBxgyCreate](about:/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate#top)

mutation

Requires Apps must have `write_discounts` access scope.

Creates a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

* * *

Note

To create discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBxgyCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBxgyCreate) mutation.

* * *

[Anchor to Arguments](about:/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate#arguments)

Arguments
---------

[Anchor to bxgyCodeDiscount](about:/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate#arguments-bxgyCodeDiscount)

bxgyCodeDiscount

•[DiscountCodeBxgyInput!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput)

required

The input data used to create the BXGY code discount.

* * *

Was this section helpful?

[Anchor to DiscountCodeBxgyCreatePayload returns](about:/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate#returns)

DiscountCodeBxgyCreatePayload returns




-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to codeDiscountNode](about:/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate#returns-codeDiscountNode)

codeDiscountNode

•[DiscountCodeNode](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The code discount that was created.

[Anchor to userErrors](about:/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate#returns-userErrors)

userErrors

•[\[DiscountUserError!\]!](/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

* * *

Was this section helpful?