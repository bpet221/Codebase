---
title: "fulfillmentCreateV2"
description: "Shopify GraphQL Admin API documentation for fulfillmentcreatev2"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentCreateV2 - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2

Markdown Content:
fulfillmentCreateV2 - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#main-content)

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
*   B2b   
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
*   
Shipping And Fulfillment

    *   Queries   
    *   
Mutations

        *   [carrier Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate)
        *   [carrier Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicedelete)
        *   [carrier Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate)
        *   [delivery Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationactivation)
        *   [delivery Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationcreate)
        *   [delivery Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationdelete)
        *   [delivery Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationupdate)
        *   [delivery Profile Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileremove)
        *   [delivery Promise Participants Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseparticipantsupdate)
        *   [delivery Promise Provider Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseproviderupsert)
        *   [delivery Setting Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverysettingupdate)
        *   [delivery Shipping Origin Assign](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryshippingoriginassign)
        *   [fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcancel)
        *   [fulfillment Constraint Rule Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintrulecreate)
        *   [fulfillment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreate)
        *   [fulfillment Create V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2)
        *   [fulfillment Event Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenteventcreate)
        *   [fulfillment Order Accept Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderacceptcancellationrequest)
        *   [fulfillment Order Accept Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderacceptfulfillmentrequest)
        *   [fulfillment Order Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordercancel)
        *   [fulfillment Order Close](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderclose)
        *   [fulfillment Order Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderhold)
        *   [fulfillment Order Line Items Prepared For Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderlineitemspreparedforpickup)
        *   [fulfillment Order Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermerge)
        *   [fulfillment Order Move](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordermove)
        *   [fulfillment Order Open](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderopen)
        *   [fulfillment Order Reject Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderrejectcancellationrequest)
        *   [fulfillment Order Reject Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderrejectfulfillmentrequest)
        *   [fulfillment Order Release Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreleasehold)
        *   [fulfillment Order Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderreschedule)
        *   [fulfillment Order Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersplit)
        *   [fulfillment Orders Set Fulfillment Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentorderssetfulfillmentdeadline)
        *   [fulfillment Order Submit Cancellation Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitcancellationrequest)
        *   [fulfillment Order Submit Fulfillment Request](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentordersubmitfulfillmentrequest)
        *   [fulfillment Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentservicecreate)
        *   [fulfillment Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentservicedelete)
        *   [fulfillment Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentserviceupdate)
        *   [fulfillment Tracking Info Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenttrackinginfoupdate)
        *   [fulfillment Tracking Info Update V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmenttrackinginfoupdatev2)
        *   [location Local Pickup Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable)
        *   [location Local Pickup Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable)
        *   [shipping Package Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagedelete)
        *   [shipping Package Make Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagemakedefault)
        *   [shipping Package Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackageupdate)

    *   Objects   

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

[Anchor to fulfillmentCreateV2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#top)
fulfillment Create V2
=====================

mutation

Requires `write_assigned_fulfillment_orders` access scope, `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill_and_ship_orders permission.

Deprecated.Use [fulfillmentCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCreate) instead.

Creates a fulfillment for one or many fulfillment orders. The fulfillment orders are associated with the same order and are assigned to the same location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#arguments)
Arguments
---------

[Anchor to fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#arguments-fulfillment)fulfillment

•[Fulfillment V2Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentV2Input)

required

The input fields used to create a fulfillment from fulfillment orders.

Show input fields

[Anchor to message](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#arguments-message)message

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

An optional message for the fulfillment request.

* * *

Was this section helpful?

Yes No

[Anchor to FulfillmentCreateV2Payload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#returns)Fulfillment Create V2Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#returns-fulfillment)fulfillment

•[Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

The created fulfillment.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcreatev2#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### fulfillmentCreateV2 reference

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

mutation fulfillmentCreateV2($fulfillment: FulfillmentV2Input!, $message: String){

fulfillmentCreateV2(fulfillment: $fulfillment, message: $message){

fulfillment {

# Fulfillment fields

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"fulfillment": {

"trackingInfo": {

"number": "<your-number>",

"url": "https://example.myshopify.com",

"company": "<your-company>",

"numbers": [

"<your-numbers>"

],

"urls": [

"https://example.myshopify.com"

]

},

"notifyCustomer": true,

"lineItemsByFulfillmentOrder": [

{

"fulfillmentOrderId": "gid://shopify/<objectName>/10079785100",

"fulfillmentOrderLineItems": [

{}

]

}

],

"originAddress": {

"address1": "<your-address1>",

"address2": "<your-address2>",

"city": "<your-city>",

"zip": "<your-zip>",

"provinceCode": "<your-provinceCode>",

"countryCode": "<your-countryCode>"

}

},

"message": "<your-message>"

}

```
{
  "fulfillment": {
    "trackingInfo": {
      "number": "<your-number>",
      "url": "https://example.myshopify.com",
      "company": "<your-company>",
      "numbers": [
        "<your-numbers>"
      ],
      "urls": [
        "https://example.myshopify.com"
      ]
    },
    "notifyCustomer": true,
    "lineItemsByFulfillmentOrder": [
      {
        "fulfillmentOrderId": "gid://shopify/<objectName>/10079785100",
        "fulfillmentOrderLineItems": [
          {}
        ]
      }
    ],
    "originAddress": {
      "address1": "<your-address1>",
      "address2": "<your-address2>",
      "city": "<your-city>",
      "zip": "<your-zip>",
      "provinceCode": "<your-provinceCode>",
      "countryCode": "<your-countryCode>"
    }
  },
  "message": "<your-message>"
}
```

```
input FulfillmentV2Input {
  trackingInfo: FulfillmentTrackingInput
  notifyCustomer: Boolean
  lineItemsByFulfillmentOrder: [FulfillmentOrderLineItemsInput!]!
  originAddress: FulfillmentOriginAddressInput
}

input FulfillmentTrackingInput {
  number: String
  url: URL
  company: String
  numbers: [String!]
  urls: [URL!]
}

input FulfillmentOrderLineItemsInput {
  fulfillmentOrderId: ID!
  fulfillmentOrderLineItems: [FulfillmentOrderLineItemInput!]
}

input FulfillmentOriginAddressInput {
  address1: String
  address2: String
  city: String
  zip: String
  provinceCode: String
  countryCode: String!
}
```


---
*Content truncated at "Updates" section*