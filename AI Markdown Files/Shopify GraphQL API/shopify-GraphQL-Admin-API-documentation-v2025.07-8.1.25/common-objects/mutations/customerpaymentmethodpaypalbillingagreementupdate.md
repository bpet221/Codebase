---
title: "customerPaymentMethodPaypalBillingAgreementUpdate"
description: "Shopify GraphQL Admin API documentation for customerpaymentmethodpaypalbillingagreementupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerPaymentMethodPaypalBillingAgreementUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate

Markdown Content:
customerPaymentMethodPaypalBillingAgreementUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#main-content)

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
*   
Common objects

    *   Queries   
    *   
Mutations

        *   [bulk Product Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkproductresourcefeedbackcreate)
        *   [customer Payment Method Credit Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardcreate)
        *   [customer Payment Method Credit Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardupdate)
        *   [customer Payment Method Get Update Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodgetupdateurl)
        *   [customer Payment Method Paypal Billing Agreement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementcreate)
        *   [customer Payment Method Paypal Billing Agreement Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate)
        *   [customer Payment Method Remote Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodremotecreate)
        *   [customer Payment Method Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodrevoke)
        *   [customer Payment Method Send Update Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail)
        *   [fulfillment Constraint Rule Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintrulecreate)
        *   [fulfillment Constraint Rule Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruledelete)
        *   [fulfillment Constraint Rule Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruleupdate)
        *   [gift Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcreate)
        *   [gift Card Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcredit)
        *   [gift Card Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddeactivate)
        *   [gift Card Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit)
        *   [gift Card Send Notification To Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtocustomer)
        *   [gift Card Send Notification To Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtorecipient)
        *   [gift Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardupdate)
        *   [market Regions Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionsdelete)
        *   [payment Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationactivation)
        *   [payment Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationcreate)
        *   [payment Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationdelete)
        *   [payment Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationupdate)
        *   [payment Reminder Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend)
        *   [payment Terms Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermscreate)
        *   [payment Terms Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete)
        *   [payment Terms Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate)
        *   [product Feed Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeedcreate)
        *   [product Feed Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeeddelete)
        *   [product Full Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfullsync)
        *   [saved Search Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchcreate)
        *   [saved Search Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchdelete)
        *   [saved Search Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchupdate)
        *   [staged Upload Target Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetgenerate)
        *   [staged Upload Targets Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetsgenerate)
        *   [store Credit Account Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit)
        *   [store Credit Account Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit)
        *   [tags Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd)
        *   [tags Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsremove)
        *   [validation Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationcreate)
        *   [validation Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationdelete)
        *   [validation Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationupdate)
        *   [web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencedelete)

    *   Objects   

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

[Anchor to customerPaymentMethodPaypalBillingAgreementUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#top)
customer Payment Method Paypal Billing Agreement Update
=======================================================

mutation

Requires `write_customers` access scope. Also: Requires `write_customer_payment_methods` scope.

Updates a PayPal billing agreement for a customer.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#arguments)
Arguments
---------

[Anchor to billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#arguments-billingAddress)billing Address

•[Mailing Address Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

required

The billing address.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customer payment method.

* * *

Was this section helpful?

Yes No

[Anchor to CustomerPaymentMethodPaypalBillingAgreementUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#returns)Customer Payment Method Paypal Billing Agreement Update Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customerPaymentMethod](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#returns-customerPaymentMethod)customer Payment Method

•[Customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

The customer payment method.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate#returns-userErrors)user Errors

•[[Customer Payment Method User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### customerPaymentMethodPaypalBillingAgreementUpdate reference

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

mutation customerPaymentMethodPaypalBillingAgreementUpdate($id: ID!, $billingAddress: MailingAddressInput!){

customerPaymentMethodPaypalBillingAgreementUpdate(id: $id, billingAddress: $billingAddress){

customerPaymentMethod {

# CustomerPaymentMethod fields

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

›

⌄

⌄

{

"id": "gid://shopify/<objectName>/10079785100",

"billingAddress": {

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

}

```
{
  "id": "gid://shopify/<objectName>/10079785100",
  "billingAddress": {
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
}
```

```
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
```


---
*Content truncated at "Updates" section*