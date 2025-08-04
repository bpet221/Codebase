---
title: "CompanyContact"
description: "Shopify GraphQL Admin API documentation for companycontact"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyContact - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact

Markdown Content:
CompanyContact - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#interfaces)
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

[Anchor to CompanyContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#top)
Company Contact
===============

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

A person that acts on behalf of company associated to [a customer](https://shopify.dev/api/admin-graphql/latest/objects/customer).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#fields)Fields
---------------------------------------------------------------------------------------------------------

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.company)company

•[Company!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

non-null

The company to which the contact belongs.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created at Shopify.

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.customer)customer

•[Customer!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

non-null

The customer associated to this contact.

Show fields

[Anchor to draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.draftOrders)draft Orders

•[Draft Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection)

non-null

The list of draft orders for the company contact.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to isMainContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.isMainContact)is Main Contact

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the contact is the main contact of the company.

[Anchor to lifetimeDuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.lifetimeDuration)lifetime Duration

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The lifetime duration of the company contact, since its creation date on Shopify. Examples: `1 year`, `2 months`, `3 days`.

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.locale)locale

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The company contact's locale (language).

[Anchor to orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.orders)orders

•[Order Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

non-null

The list of orders for the company contact.

Show fields

[Anchor to roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.roleAssignments)role Assignments

•[Company Contact Role Assignment Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection)

non-null

The list of roles assigned to this company contact.

Show fields

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.title)title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The company contact's job title.

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#field-CompanyContact.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Company.contacts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-contacts)
*   {}[Company.mainContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-mainContact)
*   <->[CompanyContactConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#field-nodes)
*   {}[CompanyContactEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactEdge#field-node)
*   {}[CompanyContactRoleAssignment.companyContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment#field-companyContact)
*   {}[Customer.companyContactProfiles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-companyContactProfiles)
*   {}[PurchasingCompany.contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/PurchasingCompany#field-contact)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#queries)Queries
------------------------------------------------------------------------------------------------------------

[Anchor to companyContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#query-companyContact)[company Contact](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyContact)

•query

Returns a `CompanyContact` resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>CompanyContact Queries
-------------------------

### Queried by

*   <?>[company Contact](https://shopify.dev/docs/api/admin-graphql/latest/queries/CompanyContact)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#mutations)Mutations
------------------------------------------------------------------------------------------------------------------

[Anchor to companyAssignCustomerAsContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#mutation-companyAssignCustomerAsContact)[company Assign Customer As Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)

•mutation

Assigns the customer as a company contact.

Show payload

[Anchor to companyContactCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#mutation-companyContactCreate)[company Contact Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)

•mutation

Creates a company contact and the associated customer.

Show payload

[Anchor to companyContactUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#mutation-companyContactUpdate)[company Contact Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)

•mutation

Updates a company contact.

Show payload

* * *

Was this section helpful?

Yes No

<~>CompanyContact Mutations
---------------------------

### Mutated by

*   <~>[company Assign Customer As Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyAssignCustomerAsContact)
*   <~>[company Contact Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactCreate)
*   <~>[company Contact Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontact#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CompanyContact Implements
----------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*