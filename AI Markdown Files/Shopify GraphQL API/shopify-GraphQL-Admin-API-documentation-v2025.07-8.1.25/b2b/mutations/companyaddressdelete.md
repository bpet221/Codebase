---
title: "companyAddressDelete"
description: "Shopify GraphQL Admin API documentation for companyaddressdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyAddressDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete

Markdown Content:
companyAddressDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#main-content)

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

[Anchor to companyAddressDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#top)
company Address Delete
======================

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Deletes a company address.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#arguments)
Arguments
---------

[Anchor to addressId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#arguments-addressId)address Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the address to delete.

* * *

Was this section helpful?

Yes No

[Anchor to CompanyAddressDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#returns)Company Address Delete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedAddressId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#returns-deletedAddressId)deleted Address Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted address.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyAddressDelete reference

Hide content

Mutation Reference
------------------

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

mutation companyAddressDelete($addressId: ID!){

companyAddressDelete(addressId: $addressId){

deletedAddressId

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

›

⌄

{

"addressId": "gid://shopify/<objectName>/10079785100"

}

```
{
  "addressId": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*