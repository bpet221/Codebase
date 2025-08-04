---
title: "companyContactAssignRoles"
description: "Shopify GraphQL Admin API documentation for companycontactassignroles"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyContactAssignRoles - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles

Markdown Content:
companyContactAssignRoles - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

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
B2B

    *   Queries   
    *   
Mutations

        *   [companies Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesdelete)
        *   [company Address Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete)
        *   [company Assign Customer As Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyassigncustomerascontact)
        *   [company Assign Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyassignmaincontact)
        *   [company Contact Assign Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignrole)
        *   [company Contact Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles)
        *   [company Contact Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate)
        *   [company Contact Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactdelete)
        *   [company Contact Remove From Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactremovefromcompany)
        *   [company Contact Revoke Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactrevokerole)
        *   [company Contact Revoke Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactrevokeroles)
        *   [company Contacts Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactsdelete)
        *   [company Contact Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactupdate)
        *   [company Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate)
        *   [company Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companydelete)
        *   [company Location Assign Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassignaddress)
        *   [company Location Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassignroles)
        *   [company Location Assign Staff Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassignstaffmembers)
        *   [company Location Assign Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassigntaxexemptions)
        *   [company Location Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate)
        *   [company Location Create Tax Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration)
        *   [company Location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationdelete)
        *   [company Location Remove Staff Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationremovestaffmembers)
        *   [company Location Revoke Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationrevokeroles)
        *   [company Location Revoke Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationrevoketaxexemptions)
        *   [company Location Revoke Tax Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationrevoketaxregistration)
        *   [company Locations Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationsdelete)
        *   [company Location Tax Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate)
        *   [company Location Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationupdate)
        *   [company Revoke Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyrevokemaincontact)
        *   [company Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyupdate)

    *   Objects   

*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to companyContactAssignRoles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#top)
company Contact Assign Roles
============================

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Assigns roles on a company contact.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#arguments)
Arguments
---------

[Anchor to companyContactId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#arguments-companyContactId)company Contact Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The contact whose roles are being assigned.

[Anchor to rolesToAssign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#arguments-rolesToAssign)roles To Assign

•[[Company Contact Role Assign!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

required

The new roles to assign.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CompanyContactAssignRolesPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#returns)Company Contact Assign Roles Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#returns-roleAssignments)role Assignments

•[[Company Contact Role Assignment!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

A list of newly created assignments of company contacts to a company location.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyContactAssignRoles reference

Hide content

Mutation Reference
------------------

Copy

99

1

2

3

4

5

6

7

8

9

10

11

›

⌄

⌄

⌄

⌄

mutation companyContactAssignRoles($companyContactId: ID!, $rolesToAssign: [CompanyContactRoleAssign!]!){

companyContactAssignRoles(companyContactId: $companyContactId, rolesToAssign: $rolesToAssign){

roleAssignments {

# CompanyContactRoleAssignment fields

}

userErrors {

field

message

}

}

}

Hide content

Input
-----

Variables Schema

Copy

9

1

2

3

4

5

6

7

8

9

›

⌄

⌄

⌄

{

"companyContactId": "gid://shopify/<objectName>/10079785100",

"rolesToAssign": [

{

"companyContactRoleId": "gid://shopify/<objectName>/10079785100",

"companyLocationId": "gid://shopify/<objectName>/10079785100"

}

]

}

```
{
  "companyContactId": "gid://shopify/<objectName>/10079785100",
  "rolesToAssign": [
    {
      "companyContactRoleId": "gid://shopify/<objectName>/10079785100",
      "companyLocationId": "gid://shopify/<objectName>/10079785100"
    }
  ]
}
```

```
input CompanyContactRoleAssign {
  companyContactRoleId: ID!
  companyLocationId: ID!
}
```


---
*Content truncated at "Updates" section*