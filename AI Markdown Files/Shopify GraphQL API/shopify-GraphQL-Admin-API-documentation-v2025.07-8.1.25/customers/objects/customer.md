---
title: "Customer"
description: "Shopify GraphQL Admin API documentation for customer"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customer"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Customer - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customer

Markdown Content:
Customer - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#main-content)

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
*   
Customers

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interfaces)
        *   [Customer Accounts V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountsv2)
        *   [Customer Credit Card Billing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress)
        *   [Customer Email Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress)
        *   [Customer Email Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailmarketingconsentstate)
        *   [Customer Mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergeable)
        *   [Customer Merge Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergeerror)
        *   [Customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview)
        *   [Customer Merge Preview Alternate Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewalternatefields)
        *   [Customer Merge Preview Blocking Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewblockingfields)
        *   [Customer Merge Preview Default Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields)
        *   [Customer Merge Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergerequest)
        *   [Customer Phone Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerphonenumber)
        *   [Customer Segment Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember)
        *   [Customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery)
        *   [Customer Sms Marketing Consent Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsenterror)
        *   [Customer Sms Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate)
        *   [Customer Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerstatistics)
        *   [Market Price Inclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketpriceinclusions)
        *   [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment)
        *   [Segment Association Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentassociationfilter)
        *   [Segment Attribute Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentattributestatistics)
        *   [Segment Boolean Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentbooleanfilter)
        *   [Segment Date Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentdatefilter)
        *   [Segment Enum Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentenumfilter)
        *   [Segment Event Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmenteventfilter)
        *   [Segment Event Filter Parameter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmenteventfilterparameter)
        *   [Segment Float Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentfloatfilter)
        *   [Segment Integer Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentintegerfilter)
        *   [Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmembership)
        *   [Segment Membership Response](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmembershipresponse)
        *   [Segment Migration](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmigration)
        *   [Segment Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentstatistics)
        *   [Segment String Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentstringfilter)
        *   [Segment Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentvalue)
        *   [Tax App Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxappconfiguration)

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

[Anchor to Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#top)
Customer
========

object

Requires `read_customers` access scope.

Represents information about a customer of the shop, such as the customer's contact details, their order history, and whether they've agreed to receive marketing material by email.

**Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#fields)Fields
---------------------------------------------------------------------------------------------------

[Anchor to addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.addresses)addresses

•[[Mailing Address!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

non-null

A list of addresses associated with the customer.

Show fields

[Anchor to addressesV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.addressesV2)addresses V2

•[Mailing Address Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection)

non-null

The addresses associated with the customer.

Show fields

[Anchor to amountSpent](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.amountSpent)amount Spent

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The total amount that the customer has spent on orders in their lifetime.

Show fields

[Anchor to canDelete](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.canDelete)can Delete

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the merchant can delete the customer from their store.

A customer can be deleted from a store only if they haven't yet made an order. After a customer makes an order, they can't be deleted from a store.

[Anchor to companyContactProfiles](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.companyContactProfiles)company Contact Profiles

•[[Company Contact!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

non-null

A list of the customer's company contact profiles.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the customer was added to the store.

[Anchor to dataSaleOptOut](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.dataSaleOptOut)data Sale Opt Out

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer has opted out of having their data sold.

[Anchor to defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.defaultAddress)default Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The default address associated with the customer.

Show fields

[Anchor to defaultEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.defaultEmailAddress)default Email Address

•[Customer Email Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress)

The customer's default email address.

Show fields

[Anchor to defaultPhoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.defaultPhoneNumber)default Phone Number

•[Customer Phone Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber)

The customer's default phone number.

Show fields

[Anchor to displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.displayName)display Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The full name of the customer, based on the values for first_name and last_name. If the first_name and last_name are not available, then this falls back to the customer's email address, and if that is not available, the customer's phone number.

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

A list of events associated with the customer.

Show fields

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The customer's first name.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.image)image

•[Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

non-null

The image associated with the customer.

Show fields

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The customer's last name.

[Anchor to lastOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.lastOrder)last Order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The customer's last order.

Show fields

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to lifetimeDuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.lifetimeDuration)lifetime Duration

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The amount of time since the customer was first added to the store.

Example: 'about 12 years'.

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The customer's locale.

[Anchor to mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.mergeable)mergeable

•[Customer Mergeable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable)

non-null

Whether the customer can be merged with another customer.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to multipassIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.multipassIdentifier)multipass Identifier

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A unique identifier for the customer that's used with Multipass login.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A note about the customer.

[Anchor to numberOfOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.numberOfOrders)number Of Orders

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The number of orders that the customer has made at the store in their lifetime.

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null

A list of the customer's orders.

Show fields

[Anchor to paymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.paymentMethods)payment Methods

•[Customer Payment Method Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection)

non-null

A list of the customer's payment methods.

Show fields

[Anchor to productSubscriberStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.productSubscriberStatus)product Subscriber Status

•[Customer Product Subscriber Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerProductSubscriberStatus)

non-null

Possible subscriber states of a customer defined by their subscription contracts.

Show enum values

[Anchor to state](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.state)state

•[Customer State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerState)

non-null

The state of the customer's account with the shop.

Please note that this only meaningful when Classic Customer Accounts is active.

Show enum values

[Anchor to statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.statistics)statistics

•[Customer Statistics!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics)

non-null

The statistics for a given customer.

Show fields

[Anchor to storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.storeCreditAccounts)store Credit Accounts

•[Store Credit Account Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection)

non-null

Returns a list of store credit accounts that belong to the owner resource. A store credit account owner can hold multiple accounts each with a different currency.

Show fields

[Anchor to subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.subscriptionContracts)subscription Contracts

•[Subscription Contract Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection)

non-null

A list of the customer's subscription contracts.

Show fields

[Anchor to tags](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.tags)tags

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A comma separated list of tags that have been added to the customer.

[Anchor to taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.taxExempt)tax Exempt

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer is exempt from being charged taxes on their orders.

[Anchor to taxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.taxExemptions)tax Exemptions

•[[Tax Exemption!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

non-null

The list of tax exemptions applied to the customer.

Show enum values

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the customer was last updated.

[Anchor to verifiedEmail](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.verifiedEmail)verified Email

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API.

### Deprecated fields

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.email)email

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to emailMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.emailMarketingConsent)email Marketing Consent

•[Customer Email Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState)

Deprecated

Show fields

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

Deprecated

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

[Anchor to smsMarketingConsent](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.smsMarketingConsent)sms Marketing Consent

•[Customer Sms Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState)

Deprecated

Show fields

[Anchor to unsubscribeUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.unsubscribeUrl)unsubscribe Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

non-null Deprecated

[Anchor to validEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#field-Customer.fields.validEmailAddress)valid Email Address

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AbandonedCheckout.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-customer)
*   {}[Abandonment.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-customer)
*   {}[CalculatedDraftOrder.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-customer)
*   {}[CompanyContact.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-customer)
*   <->[CustomerConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection#field-nodes)
*   {}[CustomerEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEdge#field-node)
*   {}[CustomerPaymentMethod.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-customer)
*   {}[DiscountCustomers.customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomers#field-customers)
*   {}[DraftOrder.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-customer)
*   {}[GiftCard.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-customer)
*   {}[GiftCardRecipient.recipient](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient#field-recipient)
*   {}[Order.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-customer)
*   {}[PriceRuleCustomerSelection.customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-customers)
*   {}[SubscriptionBillingCycleEditedContract.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-customer)
*   {}[SubscriptionContract.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-customer)
*   ||-[SubscriptionContractBase.customer](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#field-customer)
*   {}[SubscriptionDraft.customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-customer)

Show deprecations
### Possible type in

*   [Comment Event Embed](https://shopify.dev/docs/api/admin-graphql/latest/unions/CommentEventEmbed)
*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)
*   [Purchasing Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#queries)Queries
------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#query-customer)[customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer)

•query

Returns a `Customer` resource by ID.

Show fields

[Anchor to customerByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#query-customerByIdentifier)[customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerByIdentifier)

•query

Return a customer by an identifier.

Show fields

[Anchor to customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#query-customers)[customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)

•query

Returns a list of [customers](https://shopify.dev/api/admin-graphql/latest/objects/Customer) in your Shopify store, including key information such as name, email, location, and purchase history. Use this query to segment your audience, personalize marketing campaigns, or analyze customer behavior by applying filters based on location, order history, marketing preferences and tags. The `customers` query supports [pagination](https://shopify.dev/api/usage/pagination-graphql) and [sorting](https://shopify.dev/api/admin-graphql/latest/enums/CustomerSortKeys).

Show fields

* * *

Was this section helpful?

Yes No

<?>Customer Queries
-------------------

### Queried by

*   <?>[customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/Customer)
*   <?>[customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/Customer)
*   <?>[customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/CustomerConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutations)Mutations
------------------------------------------------------------------------------------------------------------

[Anchor to customerAddTaxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerAddTaxExemptions)[customer Add Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)

•mutation

Add tax exemptions for the customer.

Show payload

[Anchor to customerCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerCreate)[customer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)

•mutation

Create a new customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

Show payload

[Anchor to customerEmailMarketingConsentUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerEmailMarketingConsentUpdate)[customer Email Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)

•mutation

Update a customer's email marketing information information.

Show payload

[Anchor to customerPaymentMethodSendUpdateEmail](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerPaymentMethodSendUpdateEmail)[customer Payment Method Send Update Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)

•mutation

Sends a link to the customer so they can update a specific payment method.

Show payload

[Anchor to customerRemoveTaxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerRemoveTaxExemptions)[customer Remove Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions)

•mutation

Remove tax exemptions from a customer.

Show payload

[Anchor to customerReplaceTaxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerReplaceTaxExemptions)[customer Replace Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)

•mutation

Replace tax exemptions for a customer.

Show payload

[Anchor to customerSendAccountInviteEmail](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerSendAccountInviteEmail)[customer Send Account Invite Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSendAccountInviteEmail)

•mutation

Sends the customer an account invite email.

Show payload

[Anchor to customerSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerSet)[customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSet)

•mutation

Creates or updates a customer in a single mutation.

Use this mutation when syncing information from an external data source into Shopify.

This mutation can be used to create a new customer, update an existing customer by id, or upsert a customer by a unique key (email or phone).

To create a new customer omit the `identifier` argument. To update an existing customer, include the `identifier` with the id of the customer to update.

To perform an 'upsert' by unique key (email or phone) use the `identifier` argument to upsert a customer by a unique key (email or phone). If a customer with the specified unique key exists, it will be updated. If not, a new customer will be created with that unique key.

As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data)

Any list field (e.g. [addresses](https://shopify.dev/api/admin-graphql/unstable/input-objects/MailingAddressInput), will be updated so that all included entries are either created or updated, and all existing entries not included will be deleted.

All other fields will be updated to the value passed. Omitted fields will not be updated.

Show payload

[Anchor to customerSmsMarketingConsentUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerSmsMarketingConsentUpdate)[customer Sms Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)

•mutation

Update a customer's SMS marketing consent information.

Show payload

[Anchor to customerUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerUpdate)[customer Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)

•mutation

Update a customer's attributes. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

Show payload

[Anchor to customerUpdateDefaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#mutation-customerUpdateDefaultAddress)[customer Update Default Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)

•mutation

Updates a customer's default address.

Show payload

* * *

Was this section helpful?

Yes No

<~>Customer Mutations
---------------------

### Mutated by

*   <~>[customer Add Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerAddTaxExemptions)
*   <~>[customer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate)
*   <~>[customer Email Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate)
*   <~>[customer Payment Method Send Update Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodSendUpdateEmail)
*   <~>[customer Remove Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerRemoveTaxExemptions)
*   <~>[customer Replace Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerReplaceTaxExemptions)
*   <~>[customer Send Account Invite Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSendAccountInviteEmail)
*   <~>[customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSet)
*   <~>[customer Sms Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSmsMarketingConsentUpdate)
*   <~>[customer Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate)
*   <~>[customer Update Default Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdateDefaultAddress)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasStoreCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-HasStoreCreditAccounts)[Has Store Credit Accounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Customer Implements
----------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Store Credit Accounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*