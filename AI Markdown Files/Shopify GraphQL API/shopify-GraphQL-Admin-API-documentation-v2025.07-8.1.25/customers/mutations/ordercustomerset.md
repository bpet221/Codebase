---
title: "orderCustomerSet"
description: "Shopify GraphQL Admin API documentation for ordercustomerset"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: orderCustomerSet - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset

Markdown Content:
orderCustomerSet - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#main-content)

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

[Anchor to orderCustomerSet](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#top)
order Customer Set
==================

mutation

Requires `write_orders` access scope. Also: The user must have permission to manage the order.

Sets a customer on an order.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#arguments)
Arguments
---------

[Anchor to customerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#arguments-customerId)customer Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customer being set on the order.

[Anchor to orderId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#arguments-orderId)order Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the order having a customer set.

* * *

Was this section helpful?

Yes No

[Anchor to OrderCustomerSetPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#returns)Order Customer Set Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to order](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#returns-order)order

•[Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

The order that had a customer set.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset#returns-userErrors)user Errors

•[[Order Customer Set User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### orderCustomerSet reference

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

mutation orderCustomerSet($orderId: ID!, $customerId: ID!){

orderCustomerSet(orderId: $orderId, customerId: $customerId){

order {

# Order fields

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

"orderId": "gid://shopify/<objectName>/10079785100",

"customerId": "gid://shopify/<objectName>/10079785100"

}

```
{
  "orderId": "gid://shopify/<objectName>/10079785100",
  "customerId": "gid://shopify/<objectName>/10079785100"
}
```


---
*Content truncated at "Updates" section*