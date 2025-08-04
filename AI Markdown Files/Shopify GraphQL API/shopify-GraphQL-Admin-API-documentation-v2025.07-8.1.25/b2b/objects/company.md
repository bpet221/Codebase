---
title: "Company"
description: "Shopify GraphQL Admin API documentation for company"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/company"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Company - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/company

Markdown Content:
Company - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interfaces)
        *   [Company Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/companyaddress)
        *   [Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact)
        *   [Company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole)
        *   [Company Contact Role Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment)
        *   [Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocation)
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

[Anchor to Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#top)
Company
=======

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Represents information about a company which is also a customer of the shop.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#fields)Fields
--------------------------------------------------------------------------------------------------

[Anchor to contactRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.contactRoles)contact Roles

•[Company Contact Role Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection)

non-null

The list of roles for the company contacts.

Show fields

[Anchor to contacts](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.contacts)contacts

•[Company Contact Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection)

non-null

The list of contacts in the company.

Show fields

[Anchor to contactsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.contactsCount)contacts Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of contacts that belong to the company.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify.

[Anchor to customerSince](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.customerSince)customer Since

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer.

[Anchor to defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.defaultCursor)default Cursor

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

[Anchor to defaultRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.defaultRole)default Role

•[Company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

The role proposed by default for a contact at the company.

Show fields

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.draftOrders)draft Orders

•[Draft Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

non-null

The list of the company's draft orders.

Show fields

[Anchor to events](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.events)events

•[Event Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

non-null

The paginated list of events associated with the host subject.

Show fields

[Anchor to externalId](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.externalId)external Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A unique externally-supplied ID for the company.

[Anchor to hasTimelineComment](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.hasTimelineComment)has Timeline Comment

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the merchant added a timeline comment to the company.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to lifetimeDuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.lifetimeDuration)lifetime Duration

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The lifetime duration of the company, since it became a customer of the shop. Examples: `2 days`, `3 months`, `1 year`.

[Anchor to locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.locations)locations

•[Company Location Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

non-null

The list of locations in the company.

Show fields

[Anchor to locationsCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.locationsCount)locations Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The number of locations that belong to the company.

Show fields

[Anchor to mainContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.mainContact)main Contact

•[Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

The main contact for the company.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the company.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A note about the company.

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null

The list of the company's orders.

Show fields

[Anchor to ordersCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.ordersCount)orders Count

•[Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

The total number of orders placed for this company, across all its locations.

Show fields

[Anchor to totalSpent](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.totalSpent)total Spent

•[Money V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

non-null

The total amount spent by this company, across all its locations.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified.

### Deprecated fields

[Anchor to contactCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.contactCount)contact Count

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null Deprecated

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#field-Company.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[CompanyConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyConnection#field-nodes)
*   {}[CompanyContact.company](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-company)
*   {}[CompanyContactRoleAssignment.company](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment#field-company)
*   {}[CompanyEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyEdge#field-node)
*   {}[CompanyLocation.company](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-company)
*   {}[PurchasingCompany.company](https://shopify.dev/docs/api/admin-graphql/latest/objects/PurchasingCompany#field-company)

### Possible type in

*   [Metafield Reference](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)
*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#queries)Queries
-----------------------------------------------------------------------------------------------------

[Anchor to companies](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#query-companies)[companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies)

•query

Returns the list of companies in the shop.

Show fields

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#query-company)[company](https://shopify.dev/docs/api/admin-graphql/latest/queries/company)

•query

Returns a `Company` resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>Company Queries
------------------

### Queried by

*   <?>[companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/CompanyConnection)
*   <?>[company](https://shopify.dev/docs/api/admin-graphql/latest/queries/Company)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#mutations)Mutations
-----------------------------------------------------------------------------------------------------------

[Anchor to companyAssignMainContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#mutation-companyAssignMainContact)[company Assign Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)

•mutation

Assigns the main contact for the company.

Show payload

[Anchor to companyCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#mutation-companyCreate)[company Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)

•mutation

Creates a company.

Show payload

[Anchor to companyRevokeMainContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#mutation-companyRevokeMainContact)[company Revoke Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)

•mutation

Revokes the main contact from the company.

Show payload

[Anchor to companyUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#mutation-companyUpdate)[company Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

•mutation

Updates a company.

Show payload

* * *

Was this section helpful?

Yes No

<~>Company Mutations
--------------------

### Mutated by

*   <~>[company Assign Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignMainContact)
*   <~>[company Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyCreate)
*   <~>[company Revoke Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyRevokeMainContact)
*   <~>[company Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------

[Anchor to CommentEventSubject](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interface-CommentEventSubject)[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)

•interface

[Anchor to HasEvents](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interface-HasEvents)[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)

•interface

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Navigable](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interface-Navigable)[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/company#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Company Implements
---------------------

### Implements

*   ||-[Comment Event Subject](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CommentEventSubject)
*   ||-[Has Events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents)
*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*