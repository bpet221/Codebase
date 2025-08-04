---
title: "companyLocationCreate"
description: "Shopify GraphQL Admin API documentation for companylocationcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyLocationCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate

Markdown Content:
companyLocationCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#main-content)

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

[Anchor to companyLocationCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#top)
company Location Create
=======================

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Creates a company location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#arguments)
Arguments
---------

[Anchor to companyId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#arguments-companyId)company Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the company that the company location belongs to.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#arguments-input)input

•[Company Location Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput)

required

The fields to use to create the company location.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CompanyLocationCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#returns)Company Location Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyLocation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#returns-companyLocation)company Location

•[Company Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

The created company location.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### companyLocationCreate reference

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

mutation companyLocationCreate($companyId: ID!, $input: CompanyLocationInput!){

companyLocationCreate(companyId: $companyId, input: $input){

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

Variables Schema

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

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

{

"companyId": "gid://shopify/<objectName>/10079785100",

"input": {

"name": "<your-name>",

"phone": "<your-phone>",

"locale": "<your-locale>",

"externalId": "<your-externalId>",

"note": "<your-note>",

"buyerExperienceConfiguration": {

"checkoutToDraft": true,

"paymentTermsTemplateId": "gid://shopify/<objectName>/10079785100",

"editableShippingAddress": true,

"deposit": {}

},

"billingAddress": {

"address1": "<your-address1>",

"address2": "<your-address2>",

"city": "<your-city>",

"zip": "<your-zip>",

"recipient": "<your-recipient>",

"firstName": "<your-firstName>",

"lastName": "<your-lastName>",

"phone": "<your-phone>",

"zoneCode": "<your-zoneCode>",

"countryCode": "AF"

},

"shippingAddress": {

"address1": "<your-address1>",

"address2": "<your-address2>",

"city": "<your-city>",

"zip": "<your-zip>",

"recipient": "<your-recipient>",

"firstName": "<your-firstName>",

"lastName": "<your-lastName>",

"phone": "<your-phone>",

"zoneCode": "<your-zoneCode>",

```
{
  "companyId": "gid://shopify/<objectName>/10079785100",
  "input": {
    "name": "<your-name>",
    "phone": "<your-phone>",
    "locale": "<your-locale>",
    "externalId": "<your-externalId>",
    "note": "<your-note>",
    "buyerExperienceConfiguration": {
      "checkoutToDraft": true,
      "paymentTermsTemplateId": "gid://shopify/<objectName>/10079785100",
      "editableShippingAddress": true,
      "deposit": {}
    },
    "billingAddress": {
      "address1": "<your-address1>",
      "address2": "<your-address2>",
      "city": "<your-city>",
      "zip": "<your-zip>",
      "recipient": "<your-recipient>",
      "firstName": "<your-firstName>",
      "lastName": "<your-lastName>",
      "phone": "<your-phone>",
      "zoneCode": "<your-zoneCode>",
      "countryCode": "AF"
    },
    "shippingAddress": {
      "address1": "<your-address1>",
      "address2": "<your-address2>",
      "city": "<your-city>",
      "zip": "<your-zip>",
      "recipient": "<your-recipient>",
      "firstName": "<your-firstName>",
      "lastName": "<your-lastName>",
      "phone": "<your-phone>",
      "zoneCode": "<your-zoneCode>",
      "countryCode": "AF"
    },
    "billingSameAsShipping": true,
    "taxRegistrationId": "<your-taxRegistrationId>",
    "taxExemptions": [
      "CA_STATUS_CARD_EXEMPTION"
    ],
    "taxExempt": true
  }
}
```

```
input CompanyLocationInput {
  name: String
  phone: String
  locale: String
  externalId: String
  note: String
  buyerExperienceConfiguration: BuyerExperienceConfigurationInput
  billingAddress: CompanyAddressInput
  shippingAddress: CompanyAddressInput
  billingSameAsShipping: Boolean
  taxRegistrationId: String
  taxExemptions: [TaxExemption!]
  taxExempt: Boolean
}

input BuyerExperienceConfigurationInput {
  checkoutToDraft: Boolean
  paymentTermsTemplateId: ID
  editableShippingAddress: Boolean
  deposit: DepositInput
}

input CompanyAddressInput {
  address1: String
  address2: String
  city: String
  zip: String
  recipient: String
  firstName: String
  lastName: String
  phone: String
  zoneCode: String
  countryCode: CountryCode
}
```


---
*Content truncated at "Updates" section*