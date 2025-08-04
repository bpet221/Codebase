---
title: "CompanyLocation"
description: "Shopify GraphQL Admin API documentation for companylocation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyLocation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation

Markdown Content:
CompanyLocation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#main-content)

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
*   
B2b

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/company)
        *   [Company Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress)
        *   [Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact)
        *   [Company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole)
        *   [Company Contact Role Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment)
        *   [Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interfaces)
        *   [Company Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition)
        *   [Company Location Staff Member Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment)
        *   [Company Location Tax Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationtaxsettings)
        *   [Purchasing Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/purchasingcompany)

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to CompanyLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#top)
Company Location
================

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

A location or branch of a [company that's a customer](https://shopify.dev/api/admin-graphql/latest/objects/company) of the shop. Configuration of B2B relationship, for example prices lists and checkout settings, may be done for a location.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#fields)Fields
----------------------------------------------------------------------------------------------------------

[Anchor to billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.billingAddress)billing Address

•[Company Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

The address used as billing address for the location.

Show fields

[Anchor to buyerExperienceConfiguration](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.buyerExperienceConfiguration)buyer Experience Configuration

•[Buyer Experience Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration)

The configuration for the buyer's B2B checkout.

Show fields

[Anchor to catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.catalogs)catalogs

•[Catalog Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection)

non-null

The list of catalogs associated with the company location.

Show fields

[Anchor to catalogsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.catalogsCount)catalogs Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of catalogs associated with the company location. Limited to a maximum of 10000 by default.

Show fields

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.company)company

•[Company!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

non-null

The company that the company location belongs to.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify.

[Anchor to currency](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.currency)currency

•[Currency Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

non-null

The location's currency based on the shipping address. If the shipping address is empty, then the value is the shop's primary market.

Show enum values

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.draftOrders)draft Orders

•[Draft Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

non-null

The list of draft orders for the company location.

Show fields

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to externalId](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.externalId)external Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A unique externally-supplied ID for the company location.

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the merchant added a timeline comment to the company location.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inCatalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.inCatalog)in Catalog

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the company location is assigned a specific catalog.

Show arguments

### Arguments

[Anchor to catalogId](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.inCatalog.arguments.catalogId)catalog Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the catalog.

* * *

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.locale)locale

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The preferred locale of the company location.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the company location.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A note about the company location.

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null

The list of orders for the company location.

Show fields

[Anchor to ordersCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.ordersCount)orders Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The total number of orders placed for the location.

Show fields

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The phone number of the company location.

[Anchor to roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.roleAssignments)role Assignments

•[Company Contact Role Assignment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection)

non-null

The list of roles assigned to the company location.

Show fields

[Anchor to shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.shippingAddress)shipping Address

•[Company Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress)

The address used as shipping address for the location.

Show fields

[Anchor to staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.staffMemberAssignments)staff Member Assignments

•[Company Location Staff Member Assignment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection)

non-null

The list of staff members assigned to the company location.

Show fields

[Anchor to taxSettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.taxSettings)tax Settings

•[Company Location Tax Settings!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationTaxSettings)

non-null

The tax settings for the company location.

Show fields

[Anchor to totalSpent](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.totalSpent)total Spent

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The total amount spent by the location.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified.

### Deprecated fields

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.market)market

•[Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

non-null Deprecated

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

[Anchor to orderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.orderCount)order Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

[Anchor to taxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.taxExemptions)tax Exemptions

•[[Tax Exemption!]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

non-null Deprecated

Show enum values

[Anchor to taxRegistrationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#field-CompanyLocation.fields.taxRegistrationId)tax Registration Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Deprecated

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Company.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-locations)
*   {}[CompanyContactRoleAssignment.companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment#field-companyLocation)
*   {}[CompanyLocationCatalog.companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-companyLocations)
*   <->[CompanyLocationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection#field-nodes)
*   {}[CompanyLocationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationEdge#field-node)
*   {}[CompanyLocationStaffMemberAssignment.companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment#field-companyLocation)
*   {}[CompanyLocationsCondition.companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition#field-companyLocations)
*   {}[PurchasingCompany.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/PurchasingCompany#field-location)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#queries)Queries
-------------------------------------------------------------------------------------------------------------

[Anchor to companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#query-companyLocation)[company Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyLocation)

•query

Returns a `CompanyLocation` resource by ID.

Show fields

[Anchor to companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#query-companyLocations)[company Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyLocations)

•query

Returns the list of company locations in the shop.

Show fields

* * *

Was this section helpful?

Yes No

<?>CompanyLocation Queries
--------------------------

### Queried by

*   <?>[company Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/CompanyLocation)
*   <?>[company Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/CompanyLocationConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocationCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationCreate)[company Location Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)

•mutation

Creates a company location.

Show payload

[Anchor to companyLocationTaxSettingsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationTaxSettingsUpdate)[company Location Tax Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)

•mutation

Sets the tax settings for a company location.

Show payload

[Anchor to companyLocationUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationUpdate)[company Location Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationUpdate)

•mutation

Updates a company location.

Show payload

### Deprecated mutations

[Anchor to companyLocationAssignTaxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationAssignTaxExemptions)[company Location Assign Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignTaxExemptions)

•mutation

Deprecated

Show payload

[Anchor to companyLocationCreateTaxRegistration](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationCreateTaxRegistration)[company Location Create Tax Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreateTaxRegistration)

•mutation

Deprecated

Show payload

[Anchor to companyLocationRevokeTaxExemptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationRevokeTaxExemptions)[company Location Revoke Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxExemptions)

•mutation

Deprecated

Show payload

[Anchor to companyLocationRevokeTaxRegistration](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#mutation-companyLocationRevokeTaxRegistration)[company Location Revoke Tax Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationRevokeTaxRegistration)

•mutation

Deprecated

Show payload

* * *

Was this section helpful?

Yes No

<~>CompanyLocation Mutations
----------------------------

### Mutated by

*   <~>[company Location Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationCreate)
*   <~>[company Location Tax Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate)
*   <~>[company Location Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationUpdate)

Show deprecations

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CompanyLocation Implements
-----------------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*