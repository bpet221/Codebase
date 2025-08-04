---
title: "customerSet"
description: "Shopify GraphQL Admin API documentation for customerset"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerSet - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset

Markdown Content:
customerSet - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#main-content)

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
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   
Customers

    *   Queries   
    *   
Mutations

        *   [customer Address Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddresscreate)
        *   [customer Address Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddressdelete)
        *   [customer Address Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddressupdate)
        *   [customer Add Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddtaxexemptions)
        *   [customer Cancel Data Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure)
        *   [customer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate)
        *   [customer Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerdelete)
        *   [customer Email Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeremailmarketingconsentupdate)
        *   [customer Generate Account Activation Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl)
        *   [customer Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge)
        *   [customer Remove Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerremovetaxexemptions)
        *   [customer Replace Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerreplacetaxexemptions)
        *   [customer Request Data Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerrequestdataerasure)
        *   [customer Segment Members Query Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersegmentmembersquerycreate)
        *   [customer Send Account Invite Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersendaccountinviteemail)
        *   [customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset)
        *   [customer Sms Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate)
        *   [customer Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate)
        *   [customer Update Default Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress)
        *   [order Customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset)
        *   [segment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentcreate)
        *   [segment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentdelete)
        *   [segment Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentupdate)
        *   [tax App Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxappconfigure)

    *   Objects   

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

[Anchor to customerSet](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#top)
customer Set
============

mutation

Requires `write_customers` access scope.

Creates or updates a customer in a single mutation.

Use this mutation when syncing information from an external data source into Shopify.

This mutation can be used to create a new customer, update an existing customer by id, or upsert a customer by a unique key (email or phone).

To create a new customer omit the `identifier` argument. To update an existing customer, include the `identifier` with the id of the customer to update.

To perform an 'upsert' by unique key (email or phone) use the `identifier` argument to upsert a customer by a unique key (email or phone). If a customer with the specified unique key exists, it will be updated. If not, a new customer will be created with that unique key.

As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data)

Any list field (e.g. [addresses](https://shopify.dev/api/admin-graphql/unstable/input-objects/MailingAddressInput), will be updated so that all included entries are either created or updated, and all existing entries not included will be deleted.

All other fields will be updated to the value passed. Omitted fields will not be updated.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#arguments-identifier)identifier

•[Customer Set Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetIdentifiers)

Specifies the identifier that will be used to lookup the resource.

Show input fields

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#arguments-input)input

•[Customer Set Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput)

required

The properties of the customer.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CustomerSetPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#returns)Customer Set Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#returns-customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The created or updated customer.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset#returns-userErrors)user Errors

•[[Customer Set User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSetUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### customerSet reference

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

mutation customerSet($input: CustomerSetInput!, $identifier: CustomerSetIdentifiers){

customerSet(input: $input, identifier: $identifier){

customer {

# Customer fields

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

⌄

⌄

⌄

{

"input": {

"addresses": [

{

"address1": "<your-address1>",

"address2": "<your-address2>",

"city": "<your-city>",

"company": "<your-company>",

"countryCode": "AF",

"firstName": "<your-firstName>",

"lastName": "<your-lastName>",

"phone": "<your-phone>",

"provinceCode": "<your-provinceCode>",

"zip": "<your-zip>"

}

],

"email": "<your-email>",

"firstName": "<your-firstName>",

"lastName": "<your-lastName>",

"locale": "<your-locale>",

"note": "<your-note>",

"phone": "<your-phone>",

"tags": [

"<your-tags>"

],

"taxExempt": true,

"taxExemptions": [

"CA_STATUS_CARD_EXEMPTION"

]

},

"identifier": {

"id": "gid://shopify/<objectName>/10079785100",

"email": "<your-email>",

"phone": "<your-phone>",

"customId": {

"namespace": "<your-namespace>",

```
{
  "input": {
    "addresses": [
      {
        "address1": "<your-address1>",
        "address2": "<your-address2>",
        "city": "<your-city>",
        "company": "<your-company>",
        "countryCode": "AF",
        "firstName": "<your-firstName>",
        "lastName": "<your-lastName>",
        "phone": "<your-phone>",
        "provinceCode": "<your-provinceCode>",
        "zip": "<your-zip>"
      }
    ],
    "email": "<your-email>",
    "firstName": "<your-firstName>",
    "lastName": "<your-lastName>",
    "locale": "<your-locale>",
    "note": "<your-note>",
    "phone": "<your-phone>",
    "tags": [
      "<your-tags>"
    ],
    "taxExempt": true,
    "taxExemptions": [
      "CA_STATUS_CARD_EXEMPTION"
    ]
  },
  "identifier": {
    "id": "gid://shopify/<objectName>/10079785100",
    "email": "<your-email>",
    "phone": "<your-phone>",
    "customId": {
      "namespace": "<your-namespace>",
      "key": "<your-key>",
      "value": "<your-value>"
    }
  }
}
```

```
input CustomerSetInput {
  addresses: [MailingAddressInput!]
  email: String
  firstName: String
  lastName: String
  locale: String
  note: String
  phone: String
  tags: [String!]
  taxExempt: Boolean
  taxExemptions: [TaxExemption!]
}

input MailingAddressInput {
  address1: String
  address2: String
  city: String
  company: String
  countryCode: CountryCode
  firstName: String
  lastName: String
  phone: String
  provinceCode: String
  zip: String
}

input CustomerSetIdentifiers {
  id: ID
  email: String
  phone: String
  customId: UniqueMetafieldValueInput
}

input UniqueMetafieldValueInput {
  namespace: String
  key: String!
  value: String!
}
```


---
*Content truncated at "Updates" section*