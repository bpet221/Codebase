---
title: "CompanyContactRole"
description: "Shopify GraphQL Admin API documentation for companycontactrole"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole"
extraction_method: "jina"
sections: ['B2B', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CompanyContactRole - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole

Markdown Content:
CompanyContactRole - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#interfaces)
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

[Anchor to CompanyContactRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#top)
Company Contact Role
====================

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

The role for a [company contact](https://shopify.dev/api/admin-graphql/latest/objects/companycontact).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#fields)Fields
-------------------------------------------------------------------------------------------------------------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#field-CompanyContactRole.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#field-CompanyContactRole.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of a role. For example, `admin` or `buyer`.

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#field-CompanyContactRole.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A note for the role.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[Company.contactRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-contactRoles)
*   {}[Company.defaultRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-defaultRole)
*   {}[CompanyContactRoleAssignment.role](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment#field-role)
*   <->[CompanyContactRoleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection#field-nodes)
*   {}[CompanyContactRoleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#queries)Queries
----------------------------------------------------------------------------------------------------------------

[Anchor to companyContactRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#query-companyContactRole)[company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyContactRole)

•query

Returns a `CompanyContactRole` resource by ID.

Show fields

* * *

Was this section helpful?

Yes No

<?>CompanyContactRole Queries
-----------------------------

### Queried by

*   <?>[company Contact Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/CompanyContactRole)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#interfaces)Interfaces
-------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/companycontactrole#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-CompanyContactRole Implements
--------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*