---
title: "CompanyLocationStaffMemberAssignment"
description: "Shopify GraphQL Admin API documentation for companylocationstaffmemberassignment"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyLocationStaffMemberAssignment - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment

Markdown Content:
CompanyLocationStaffMemberAssignment - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#main-content)

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
        *   [Company Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationscondition)
        *   [Company Location Staff Member Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#fields)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#interfaces)
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

[Anchor to CompanyLocationStaffMemberAssignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#top)
Company Location Staff Member Assignment
========================================

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

A representation of store's staff member who is assigned to a [company location](https://shopify.dev/api/admin-graphql/latest/objects/CompanyLocation) of the shop. The staff member's actions will be limited to objects associated with the assigned company location.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#fields)Fields
-------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#field-CompanyLocationStaffMemberAssignment.fields.companyLocation)company Location

•[Company Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

non-null

The company location the staff member is assigned to.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#field-CompanyLocationStaffMemberAssignment.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#field-CompanyLocationStaffMemberAssignment.fields.staffMember)staff Member

•[Staff Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

non-null

Represents the data of a staff member who's assigned to a company location.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CompanyLocation.staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-staffMemberAssignments)
*   <->[CompanyLocationStaffMemberAssignmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#field-nodes)
*   {}[CompanyLocationStaffMemberAssignmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignmentEdge#field-node)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#mutations)Mutations
----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocationAssignStaffMembers](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#mutation-companyLocationAssignStaffMembers)[company Location Assign Staff Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

•mutation

Creates one or more mappings between a staff member at a shop and a company location.

Show payload

* * *

Was this section helpful?

Yes No

<~>CompanyLocationStaffMemberAssignment Mutations
-------------------------------------------------

### Mutated by

*   <~>[company Location Assign Staff Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignStaffMembers)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationstaffmemberassignment#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CompanyLocationStaffMemberAssignment Implements
--------------------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*