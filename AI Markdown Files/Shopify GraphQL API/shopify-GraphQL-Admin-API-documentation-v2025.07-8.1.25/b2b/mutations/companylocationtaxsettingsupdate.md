---
title: "companyLocationTaxSettingsUpdate"
description: "Shopify GraphQL Admin API documentation for companylocationtaxsettingsupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyLocationTaxSettingsUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate

Markdown Content:
companyLocationTaxSettingsUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#main-content)

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

[Anchor to companyLocationTaxSettingsUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#top)
company Location Tax Settings Update
====================================

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Sets the tax settings for a company location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#arguments)
Arguments
---------

[Anchor to companyLocationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#arguments-companyLocationId)company Location Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the company location that the tax settings get assigned to.

[Anchor to exemptionsToAssign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#arguments-exemptionsToAssign)exemptions To Assign

•[[Tax Exemption!]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

The list of tax exemptions to assign to the company location.

Show enum values

[Anchor to exemptionsToRemove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#arguments-exemptionsToRemove)exemptions To Remove

•[[Tax Exemption!]](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption)

The list of tax exemptions to remove from the company location.

Show enum values

[Anchor to taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#arguments-taxExempt)tax Exempt

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Whether the location is exempt from taxes.

[Anchor to taxRegistrationId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#arguments-taxRegistrationId)tax Registration Id

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The unique tax registration ID for the company location.

* * *

Was this section helpful?

Yes No

[Anchor to CompanyLocationTaxSettingsUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#returns)Company Location Tax Settings Update Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#returns-companyLocation)company Location

•[Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

The company location with the updated tax settings.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyLocationTaxSettingsUpdate reference

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

mutation companyLocationTaxSettingsUpdate($companyLocationId: ID!, $taxRegistrationId: String, $taxExempt: Boolean, $exemptionsToAssign: [TaxExemption!], $exemptionsToRemove: [TaxExemption!]){

companyLocationTaxSettingsUpdate(companyLocationId: $companyLocationId, taxRegistrationId: $taxRegistrationId, taxExempt: $taxExempt, exemptionsToAssign: $exemptionsToAssign, exemptionsToRemove: $exemptionsToRemove){

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

{

"companyLocationId": "gid://shopify/<objectName>/10079785100",

"taxRegistrationId": "<your-taxRegistrationId>",

"taxExempt": true,

"exemptionsToAssign": [

"CA_STATUS_CARD_EXEMPTION"

],

"exemptionsToRemove": [

"CA_STATUS_CARD_EXEMPTION"

]

}

```
{
  "companyLocationId": "gid://shopify/<objectName>/10079785100",
  "taxRegistrationId": "<your-taxRegistrationId>",
  "taxExempt": true,
  "exemptionsToAssign": [
    "CA_STATUS_CARD_EXEMPTION"
  ],
  "exemptionsToRemove": [
    "CA_STATUS_CARD_EXEMPTION"
  ]
}
```


---
*Content truncated at "Updates" section*