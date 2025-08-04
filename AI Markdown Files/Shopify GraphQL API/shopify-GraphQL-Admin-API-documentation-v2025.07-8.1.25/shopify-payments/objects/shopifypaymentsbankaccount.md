---
title: "ShopifyPaymentsBankAccount"
description: "Shopify GraphQL Admin API documentation for shopifypaymentsbankaccount"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount"
extraction_method: "jina"
sections: ['Shopify Payments', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: ShopifyPaymentsBankAccount - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount

Markdown Content:
Choose a version:

[Anchor to ShopifyPaymentsBankAccount](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#top)

object

Requires `read_shopify_payments_bank_accounts` access scope.

A bank account that can receive payouts.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#fields)
Fields
----------------------------------------------------------------------------------------------------------------------

[Anchor to accountNumberLastDigits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.accountNumberLastDigits)
account Number Last Digits

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
non-null

The last digits of the account number (the rest is redacted).

[Anchor to bankName](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.bankName)
bank Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)
The name of the bank.

[Anchor to country](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.country)
country

•[Country Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)
non-null

The country of the bank.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.createdAt)
created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)
non-null

The date that the bank account was created.

[Anchor to currency](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.currency)
currency

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)
non-null

The currency of the bank account.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.id)
id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)
non-null

A globally-unique ID.

[Anchor to payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.payouts)
payouts

•[Shopify Payments Payout Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection)
non-null

All current and previous payouts made between the account and the bank account.

[Anchor to status](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#field-ShopifyPaymentsBankAccount.fields.status)
status

•[Shopify Payments Bank Account Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopifyPaymentsBankAccountStatus)
non-null

The status of the bank account.

* * *

Was this section helpful?

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#interfaces)
Interfaces
----------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifypaymentsbankaccount#interface-Node)
[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?
