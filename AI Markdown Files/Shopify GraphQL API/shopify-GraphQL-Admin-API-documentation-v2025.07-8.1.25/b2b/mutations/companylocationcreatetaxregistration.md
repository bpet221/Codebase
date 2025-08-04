---
title: "companyLocationCreateTaxRegistration"
description: "Shopify GraphQL Admin API documentation for companylocationcreatetaxregistration"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyLocationCreateTaxRegistration - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration

Markdown Content:
companyLocationCreateTaxRegistration - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#main-content)

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
    *   
Mutations

        *   [companies Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesdelete)
        *   [company Address Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete)
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

[Anchor to companyLocationCreateTaxRegistration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#top)
company Location Create Tax Registration
========================================

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Deprecated.Use [companyLocationTaxSettingsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationTaxSettingsUpdate) instead.

Creates a tax registration for a company location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#arguments)
Arguments
---------

[Anchor to locationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#arguments-locationId)location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the company location that the tax registration gets assigned to.

[Anchor to taxId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#arguments-taxId)tax Id

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The unique tax id for the tax registration.

* * *

Was this section helpful?

Yes No

[Anchor to CompanyLocationCreateTaxRegistrationPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#returns)Company Location Create Tax Registration Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#returns-companyLocation)company Location

•[Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

The company location with the created tax registration.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyLocationCreateTaxRegistration reference

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

mutation companyLocationCreateTaxRegistration($locationId: ID!, $taxId: String!){

companyLocationCreateTaxRegistration(locationId: $locationId, taxId: $taxId){

companyLocation {

# CompanyLocation fields

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

Variables

Copy

9

1

2

3

4

›

⌄

{

"locationId": "gid://shopify/<objectName>/10079785100",

"taxId": "<your-taxId>"

}

```
{
  "locationId": "gid://shopify/<objectName>/10079785100",
  "taxId": "<your-taxId>"
}
```


---
*Content truncated at "Updates" section*