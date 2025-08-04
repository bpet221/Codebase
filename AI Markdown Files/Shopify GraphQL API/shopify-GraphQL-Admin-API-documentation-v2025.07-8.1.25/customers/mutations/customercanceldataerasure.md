---
title: "customerCancelDataErasure"
description: "Shopify GraphQL Admin API documentation for customercanceldataerasure"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerCancelDataErasure - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure

Markdown Content:
customerCancelDataErasure - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#main-content)

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

[Anchor to customerCancelDataErasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#top)
customer Cancel Data Erasure
============================

mutation

Requires `write_customer_data_erasure` access scope. Also: The user must have access to erase customer data.

Cancels a pending erasure of a customer's data. Read more [here](https://help.shopify.com/manual/privacy-and-security/privacy/processing-customer-data-requests#cancel-customer-data-erasure).

To request an erasure of a customer's data use the [customerRequestDataErasure mutation](https://shopify.dev/api/admin-graphql/unstable/mutations/customerRequestDataErasure).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#arguments)
Arguments
---------

[Anchor to customerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#arguments-customerId)customer Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customer for whom to cancel a pending data erasure.

* * *

Was this section helpful?

Yes No

[Anchor to CustomerCancelDataErasurePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#returns)Customer Cancel Data Erasure Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#returns-customerId)customer Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the customer whose pending data erasure has been cancelled.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure#returns-userErrors)user Errors

•[[Customer Cancel Data Erasure User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerCancelDataErasureUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### customerCancelDataErasure reference

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

mutation customerCancelDataErasure($customerId: ID!){

customerCancelDataErasure(customerId: $customerId){

customerId

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

"customerId": "gid://shopify/<objectName>/10079785100"

}

```
{
  "customerId": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*