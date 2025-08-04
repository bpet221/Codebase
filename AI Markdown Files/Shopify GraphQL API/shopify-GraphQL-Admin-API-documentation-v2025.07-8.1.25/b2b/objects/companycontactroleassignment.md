---
title: "CompanyContactRoleAssignment"
description: "Shopify GraphQL Admin API documentation for companycontactroleassignment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyContactRoleAssignment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment

Markdown Content:
CompanyContactRoleAssignment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#interfaces)
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

[Anchor to CompanyContactRoleAssignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#top)
Company Contact Role Assignment
===============================

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

The CompanyContactRoleAssignment describes the company and location associated to a company contact's role.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#fields)Fields
-----------------------------------------------------------------------------------------------------------------------

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.company)company

•[Company!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

non-null

The company this role assignment belongs to.

Show fields

[Anchor to companyContact](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.companyContact)company Contact

•[Company Contact!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

non-null

The company contact for whom this role is assigned.

Show fields

[Anchor to companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.companyLocation)company Location

•[Company Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

non-null

The company location to which the role is assigned.

Show fields

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was created.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to role](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.role)role

•[Company Contact Role!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

non-null

The role that's assigned to the company contact.

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#field-CompanyContactRoleAssignment.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was last updated.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CompanyContact.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-roleAssignments)
*   <->[CompanyContactRoleAssignmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#field-nodes)
*   {}[CompanyContactRoleAssignmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignmentEdge#field-node)
*   {}[CompanyLocation.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-roleAssignments)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyContactAssignRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#mutation-companyContactAssignRole)[company Contact Assign Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)

•mutation

Assigns a role to a contact for a location.

Show payload

[Anchor to companyContactAssignRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#mutation-companyContactAssignRoles)[company Contact Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)

•mutation

Assigns roles on a company contact.

Show payload

[Anchor to companyLocationAssignRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#mutation-companyLocationAssignRoles)[company Location Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

•mutation

Assigns roles on a company location.

Show payload

* * *

Was this section helpful?

Yes No

<~>CompanyContactRoleAssignment Mutations
-----------------------------------------

### Mutated by

*   <~>[company Contact Assign Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)
*   <~>[company Contact Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)
*   <~>[company Location Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactroleassignment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CompanyContactRoleAssignment Implements
------------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*