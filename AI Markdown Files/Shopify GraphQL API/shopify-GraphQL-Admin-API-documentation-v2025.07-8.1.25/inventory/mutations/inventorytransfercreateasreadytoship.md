---
title: "inventoryTransferCreateAsReadyToShip"
description: "Shopify GraphQL Admin API documentation for inventorytransfercreateasreadytoship"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryTransferCreateAsReadyToShip - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship

Markdown Content:
inventoryTransferCreateAsReadyToShip - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#main-content)

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
*   
Inventory

    *   Queries   
    *   
Mutations

        *   [inventory Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryactivate)
        *   [inventory Adjust Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryadjustquantities)
        *   [inventory Bulk Toggle Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorybulktoggleactivation)
        *   [inventory Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorydeactivate)
        *   [inventory Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryitemupdate)
        *   [inventory Move Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorymovequantities)
        *   [inventory Set On Hand Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetonhandquantities)
        *   [inventory Set Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetquantities)
        *   [inventory Set Scheduled Changes](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorysetscheduledchanges)
        *   [inventory Shipment Add Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentadditems)
        *   [inventory Shipment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentcreate)
        *   [inventory Shipment Create In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentcreateintransit)
        *   [inventory Shipment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentdelete)
        *   [inventory Shipment Mark In Transit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentmarkintransit)
        *   [inventory Shipment Receive](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentreceive)
        *   [inventory Shipment Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentremoveitems)
        *   [inventory Shipment Set Tracking](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentsettracking)
        *   [inventory Shipment Update Item Quantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities)
        *   [inventory Transfer Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercancel)
        *   [inventory Transfer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreate)
        *   [inventory Transfer Create As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship)
        *   [inventory Transfer Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferdelete)
        *   [inventory Transfer Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferduplicate)
        *   [inventory Transfer Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferedit)
        *   [inventory Transfer Mark As Ready To Ship](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfermarkasreadytoship)
        *   [inventory Transfer Remove Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransferremoveitems)
        *   [inventory Transfer Set Items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfersetitems)

    *   Objects   

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

[Anchor to inventoryTransferCreateAsReadyToShip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#top)
inventory Transfer Create As Ready To Ship
==========================================

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

Creates an inventory transfer in ready to ship.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#arguments-input)input

•[Inventory Transfer Create As Ready To Ship Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

required

The input fields for the inventory transfer.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to InventoryTransferCreateAsReadyToShipPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#returns)Inventory Transfer Create As Ready To Ship Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to inventoryTransfer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#returns-inventoryTransfer)inventory Transfer

•[Inventory Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

The created inventory transfer.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfercreateasreadytoship#returns-userErrors)user Errors

•[[Inventory Transfer Create As Ready To Ship User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### inventoryTransferCreateAsReadyToShip reference

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

mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!){

inventoryTransferCreateAsReadyToShip(input: $input){

inventoryTransfer {

# InventoryTransfer fields

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

›

⌄

⌄

⌄

⌄

⌄

{

"input": {

"originLocationId": "gid://shopify/<objectName>/10079785100",

"destinationLocationId": "gid://shopify/<objectName>/10079785100",

"lineItems": [

{

"inventoryItemId": "gid://shopify/<objectName>/10079785100",

"quantity": 1

}

],

"dateCreated": "2019-09-07T15:50:00Z",

"note": "<your-note>",

"tags": [

"<your-tags>"

],

"referenceName": "<your-referenceName>"

}

}

```
{
  "input": {
    "originLocationId": "gid://shopify/<objectName>/10079785100",
    "destinationLocationId": "gid://shopify/<objectName>/10079785100",
    "lineItems": [
      {
        "inventoryItemId": "gid://shopify/<objectName>/10079785100",
        "quantity": 1
      }
    ],
    "dateCreated": "2019-09-07T15:50:00Z",
    "note": "<your-note>",
    "tags": [
      "<your-tags>"
    ],
    "referenceName": "<your-referenceName>"
  }
}
```

```
input InventoryTransferCreateAsReadyToShipInput {
  originLocationId: ID!
  destinationLocationId: ID!
  lineItems: [InventoryTransferLineItemInput!]!
  dateCreated: DateTime
  note: String
  tags: [String!]
  referenceName: String
}

input InventoryTransferLineItemInput {
  inventoryItemId: ID!
  quantity: Int!
}
```


---
*Content truncated at "Updates" section*