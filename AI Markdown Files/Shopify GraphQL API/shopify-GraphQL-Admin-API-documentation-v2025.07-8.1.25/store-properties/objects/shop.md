---
title: "Shop"
description: "Shopify GraphQL Admin API documentation for shop"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/shop"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Shop - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/shop

Markdown Content:
Shop - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#main-content)

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
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store Properties

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Business Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity)
        *   [Business Entity Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress)
        *   [Cart Transform Eligible Operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformeligibleoperations)
        *   [Cart Transform Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformfeature)
        *   [Currency Formats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats)
        *   [Filter Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/filteroption)
        *   [Limited Pending Order Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/limitedpendingordercount)
        *   [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location)
        *   [Location Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationaddress)
        *   [Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationscondition)
        *   [Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot)
        *   [Location Suggested Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsuggestedaddress)
        *   [Navigation Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/navigationitem)
        *   [Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#interfaces)
        *   [Shop Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress)
        *   [Shop Features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures)
        *   [Shop Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopplan)
        *   [Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#top)
Shop
====

object

Represents a collection of general settings and information about the shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#fields)Fields
-----------------------------------------------------------------------------------------------

[Anchor to accountOwner](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.accountOwner)account Owner

•[Staff Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

non-null

Account owner information.

Show fields

[Anchor to alerts](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.alerts)alerts

•[[Shop Alert!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAlert)

non-null

A list of the shop's active alert messages that appear in the Shopify admin.

Show fields

[Anchor to allProductCategoriesList](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.allProductCategoriesList)all Product Categories List

•[[Taxonomy Category!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

non-null

A list of the shop's product categories. Limit: 1000 product categories.

Show fields

[Anchor to availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.availableChannelApps)available Channel Apps

•[App Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection)

non-null

The list of sales channels not currently installed on the shop.

Show fields

[Anchor to billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.billingAddress)billing Address

•[Shop Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAddress)

non-null

The shop's billing address information.

Show fields

[Anchor to channelDefinitionsForInstalledChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.channelDefinitionsForInstalledChannels)channel Definitions For Installed Channels

•[[Available Channel Definitions By Channel!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AvailableChannelDefinitionsByChannel)

non-null

List of all channel definitions associated with a shop.

Show fields

[Anchor to checkoutApiSupported](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.checkoutApiSupported)checkout Api Supported

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Specifies whether the shop supports checkouts via Checkout API.

[Anchor to contactEmail](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.contactEmail)contact Email

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The public-facing contact email address for the shop. Customers will use this email to communicate with the shop owner.

[Anchor to countriesInShippingZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.countriesInShippingZones)countries In Shipping Zones

•[Countries In Shipping Zones!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountriesInShippingZones)

non-null

Countries that have been defined in shipping zones for the shop.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the shop was created.

[Anchor to currencyCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.currencyCode)currency Code

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The three letter code for the currency that the shop sells in.

Show enum values

[Anchor to currencyFormats](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.currencyFormats)currency Formats

•[Currency Formats!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats)

non-null

How currencies are displayed on your store.

Show fields

[Anchor to currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.currencySettings)currency Settings

•[Currency Setting Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection)

non-null

The presentment currency settings for the shop excluding the shop's own currency.

Show fields

[Anchor to customerAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.customerAccounts)customer Accounts

•[Shop Customer Accounts Setting!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopCustomerAccountsSetting)

non-null

Whether customer accounts are required, optional, or disabled for the shop.

Show enum values

[Anchor to customerAccountsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.customerAccountsV2)customer Accounts V2

•[Customer Accounts V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2)

non-null

Information about the shop's customer accounts.

Show fields

[Anchor to customerTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.customerTags)customer Tags

•[String Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

non-null

A list of tags that have been added to customer accounts.

Show fields

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The shop's meta description used in search engine results.

[Anchor to draftOrderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.draftOrderTags)draft Order Tags

•[String Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

non-null

A list of tags that have been added to draft orders.

Show fields

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.email)email

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The shop owner's email address. Shopify will use this email address to communicate with the shop owner.

[Anchor to enabledPresentmentCurrencies](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.enabledPresentmentCurrencies)enabled Presentment Currencies

•[[Currency Code!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The presentment currencies enabled for the shop.

Show enum values

[Anchor to entitlements](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.entitlements)entitlements

•[Entitlements Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/EntitlementsType)

non-null

The entitlements for a shop.

Show fields

[Anchor to features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.features)features

•[Shop Features!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopFeatures)

non-null

The set of features enabled for the shop.

Show fields

[Anchor to fulfillmentServices](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.fulfillmentServices)fulfillment Services

•[[Fulfillment Service!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

non-null

List of the shop's installed fulfillment services.

Show fields

[Anchor to ianaTimezone](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.ianaTimezone)iana Timezone

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The shop's time zone as defined by the IANA.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to marketingSmsConsentEnabledAtCheckout](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.marketingSmsConsentEnabledAtCheckout)marketing Sms Consent Enabled At Checkout

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether SMS marketing has been enabled on the shop's checkout configuration settings.

[Anchor to merchantApprovalSignals](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.merchantApprovalSignals)merchant Approval Signals

•[Merchant Approval Signals](https://shopify.dev/docs/api/admin-graphql/latest/objects/MerchantApprovalSignals)

The approval signals for a shop to support onboarding to channel apps.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to myshopifyDomain](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.myshopifyDomain)myshopify Domain

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The shop's .myshopify.com domain name.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The shop's name.

[Anchor to navigationSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.navigationSettings)navigation Settings

•[[Navigation Item!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/NavigationItem)

non-null

The shop's settings related to navigation.

Show fields

[Anchor to orderNumberFormatPrefix](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.orderNumberFormatPrefix)order Number Format Prefix

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The prefix that appears before order numbers.

[Anchor to orderNumberFormatSuffix](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.orderNumberFormatSuffix)order Number Format Suffix

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The suffix that appears after order numbers.

[Anchor to orderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.orderTags)order Tags

•[String Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

non-null

A list of tags that have been added to orders.

Show fields

[Anchor to paymentSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.paymentSettings)payment Settings

•[Payment Settings!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSettings)

non-null

The shop's settings related to payments.

Show fields

[Anchor to plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.plan)plan

•[Shop Plan!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPlan)

non-null

The shop's billing plan.

Show fields

[Anchor to primaryDomain](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.primaryDomain)primary Domain

•[Domain!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain)

non-null

The primary domain of the shop's online store.

Show fields

[Anchor to resourceLimits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.resourceLimits)resource Limits

•[Shop Resource Limits!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopResourceLimits)

non-null

The shop's limits for specific resources. For example, the maximum number ofvariants allowed per product, or the maximum number of locations allowed.

Show fields

[Anchor to richTextEditorUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.richTextEditorUrl)rich Text Editor Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL of the rich text editor that can be used for mobile devices.

[Anchor to search](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.search)search

•[Search Result Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection)

non-null

Fetches a list of admin search results by a specified query.

Show fields

[Anchor to searchFilters](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.searchFilters)search Filters

•[Search Filter Options!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchFilterOptions)

non-null

The list of search filter options for the shop. These can be used to filter productvisibility for the shop.

Show fields

[Anchor to setupRequired](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.setupRequired)setup Required

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the shop has outstanding setup steps.

[Anchor to shipsToCountries](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.shipsToCountries)ships To Countries

•[[Country Code!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

non-null

The list of countries that the shop ships to.

Show enum values

[Anchor to shopOwnerName](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.shopOwnerName)shop Owner Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the shop owner.

[Anchor to shopPolicies](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.shopPolicies)shop Policies

•[[Shop Policy!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy)

non-null

The list of all legal policies associated with a shop.

Show fields

[Anchor to storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.storefrontAccessTokens)storefront Access Tokens

•[Storefront Access Token Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection)

non-null

The storefront access token of a private application. These are scoped per-application.

Show fields

[Anchor to taxesIncluded](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.taxesIncluded)taxes Included

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether applicable taxes are included in the shop's product prices.

[Anchor to taxShipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.taxShipping)tax Shipping

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the shop charges taxes for shipping.

[Anchor to timezoneAbbreviation](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.timezoneAbbreviation)timezone Abbreviation

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The shop's time zone abbreviation.

[Anchor to timezoneOffset](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.timezoneOffset)timezone Offset

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The shop's time zone offset.

[Anchor to timezoneOffsetMinutes](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.timezoneOffsetMinutes)timezone Offset Minutes

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The shop's time zone offset expressed as a number of minutes.

[Anchor to transactionalSmsDisabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.transactionalSmsDisabled)transactional Sms Disabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether transactional SMS sent by Shopify have been disabled for a shop.

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to unitSystem](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.unitSystem)unit System

•[Unit System!](https://shopify.dev/docs/api/admin-graphql/latest/enums/UnitSystem)

non-null

The shop's unit system for weights and measures.

Show enum values

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the shop was last updated.

[Anchor to url](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.url)url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null

The URL of the shop's online store.

[Anchor to weightUnit](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.weightUnit)weight Unit

•[Weight Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit)

non-null

The shop's primary unit of weight for products and shipping.

Show enum values

### Deprecated fields

[Anchor to allProductCategories](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.allProductCategories)all Product Categories

•[[Product Category!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductCategory)

non-null Deprecated

Show fields

[Anchor to analyticsToken](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.analyticsToken)analytics Token

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null Deprecated

[Anchor to assignedFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.assignedFulfillmentOrders)assigned Fulfillment Orders

•[Fulfillment Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

non-null Deprecated

Show fields

[Anchor to channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.channels)channels

•[Channel Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

non-null Deprecated

Show fields

[Anchor to collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.collections)collections

•[Collection Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

non-null Deprecated

Show fields

[Anchor to customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.customers)customers

•[Customer Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection)

non-null Deprecated

Show fields

[Anchor to domains](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.domains)domains

•[[Domain!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain)

non-null Deprecated

Show fields

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.draftOrders)draft Orders

•[Draft Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

non-null Deprecated

Show fields

[Anchor to fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.fulfillmentOrders)fulfillment Orders

•[Fulfillment Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection)

non-null Deprecated

Show fields

[Anchor to inventoryItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.inventoryItems)inventory Items

•[Inventory Item Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection)

non-null Deprecated

Show fields

[Anchor to limitedPendingOrderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.limitedPendingOrderCount)limited Pending Order Count

•[Limited Pending Order Count!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LimitedPendingOrderCount)

non-null Deprecated

Show fields

[Anchor to locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.locations)locations

•[Location Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

non-null Deprecated

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null Deprecated

Show fields

[Anchor to productImages](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.productImages)product Images

•[Image Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection)

non-null Deprecated

Show fields

[Anchor to products](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.products)products

•[Product Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection)

non-null Deprecated

Show fields

[Anchor to productTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.productTags)product Tags

•[String Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

non-null Deprecated

Show fields

[Anchor to productTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.productTypes)product Types

•[String Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

non-null Deprecated

Show fields

[Anchor to productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.productVariants)product Variants

•[Product Variant Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection)

non-null Deprecated

Show fields

[Anchor to productVendors](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.productVendors)product Vendors

•[String Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection)

non-null Deprecated

Show fields

[Anchor to publicationCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.publicationCount)publication Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

[Anchor to staffMembers](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.staffMembers)staff Members

•[Staff Member Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection)

non-null Deprecated

Show fields

[Anchor to storefrontUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#field-Shop.fields.storefrontUrl)storefront Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#queries)Queries
--------------------------------------------------------------------------------------------------

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#query-shop)[shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop)

•query

Returns the Shop resource corresponding to the access token used in the request. The Shop resource contains business and store management settings for the shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>Shop Queries
---------------

### Queried by

*   <?>[shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/Shop)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutations)Mutations
--------------------------------------------------------------------------------------------------------

[Anchor to collectionDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-collectionDelete)[collection Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)

•mutation

Deletes a collection.

Show payload

[Anchor to customerDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-customerDelete)[customer Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)

•mutation

Delete a customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

Show payload

[Anchor to delegateAccessTokenCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-delegateAccessTokenCreate)[delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)

•mutation

Creates a delegate access token.

To learn more about creating delegate access tokens, refer to [Delegate OAuth access tokens to subsystems](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens).

Show payload

[Anchor to delegateAccessTokenDestroy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-delegateAccessTokenDestroy)[delegate Access Token Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)

•mutation

Destroys a delegate access token.

Show payload

[Anchor to productCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-productCreate)[product Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)

•mutation

Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming process of adding them one by one in the Shopify admin. Common examples include creating products for a new collection, launching a new product line, or adding seasonal products.

You can define product [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue), allowing you to create products with different variations like sizes or colors. You can also associate media files to your products, including images and videos.

The `productCreate` mutation only supports creating a product with its initial [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To create multiple product variants for a single product and manage prices, use the [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate) mutation.

* * *

Note

The `productCreate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be created per day.

* * *

After you create a product, you can make subsequent edits to the product using one of the following mutations:

*   [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers. The `productCreate` mutation creates products in an unpublished state by default, so you must perform a separate operation to publish the product.
*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Used to update a single product, such as changing the product's title, description, vendor, or associated media.
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Show payload

[Anchor to productDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-productDelete)[product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)

•mutation

Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

*   All product variants and their inventory items
*   Product media (images, videos) that are not referenced by other products
*   [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
*   Product publications across all sales channels
*   Product tags and metadata associations

The `productDelete` mutation also has the following effects on existing orders and transactions:

*   **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
*   **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

* * *

Caution

Product deletion is irreversible. After a product is deleted, it can't be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

* * *

If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

If you need more granular control over product cleanup, consider using these alternative mutations:

*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
*   [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

Show payload

[Anchor to productDuplicate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-productDuplicate)[product Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)

•mutation

Duplicates a product.

If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

To avoid these timeout errors, you can instead duplicate the product asynchronously.

In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

Metafield values are not duplicated if the unique values capability is enabled.

Show payload

[Anchor to publishablePublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-publishablePublish)[publishable Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

•mutation

Publishes a resource to a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.

Show payload

[Anchor to publishablePublishToCurrentChannel](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-publishablePublishToCurrentChannel)[publishable Publish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublishToCurrentChannel)

•mutation

Publishes a resource to current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.

Show payload

[Anchor to publishableUnpublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-publishableUnpublish)[publishable Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)

•mutation

Unpublishes a resource from a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

Show payload

[Anchor to publishableUnpublishToCurrentChannel](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-publishableUnpublishToCurrentChannel)[publishable Unpublish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublishToCurrentChannel)

•mutation

Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

Show payload

[Anchor to savedSearchDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-savedSearchDelete)[saved Search Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchDelete)

•mutation

Delete a saved search.

Show payload

[Anchor to storefrontAccessTokenCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-storefrontAccessTokenCreate)[storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

•mutation

Creates a storefront access token for use with the [Storefront API](https://shopify.dev/docs/api/storefront).

An app can have a maximum of 100 active storefront access tokens for each shop.

[Get started with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

Show payload

### Deprecated mutations

[Anchor to collectionPublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-collectionPublish)[collection Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionPublish)

•mutation

Deprecated

Show payload

[Anchor to collectionUnpublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-collectionUnpublish)[collection Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUnpublish)

•mutation

Deprecated

Show payload

[Anchor to productPublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-productPublish)[product Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish)

•mutation

Deprecated

Show payload

[Anchor to productUnpublish](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#mutation-productUnpublish)[product Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUnpublish)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>Shop Mutations
-----------------

### Mutated by

*   <~>[collection Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)
*   <~>[customer Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerDelete)
*   <~>[delegate Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenCreate)
*   <~>[delegate Access Token Destroy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/delegateAccessTokenDestroy)
*   <~>[product Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate)
*   <~>[product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete)
*   <~>[product Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate)
*   <~>[publishable Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)
*   <~>[publishable Publish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublishToCurrentChannel)
*   <~>[publishable Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)
*   <~>[publishable Unpublish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublishToCurrentChannel)
*   <~>[saved Search Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedSearchDelete)
*   <~>[storefront Access Token Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Shop Implements
------------------

### Implements

*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*