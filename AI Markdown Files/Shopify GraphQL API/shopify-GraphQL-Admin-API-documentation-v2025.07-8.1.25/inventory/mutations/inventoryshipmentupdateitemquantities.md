---
title: "inventoryShipmentUpdateItemQuantities"
description: "Shopify GraphQL Admin API documentation for inventoryshipmentupdateitemquantities"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities"
extraction_method: "jina"
sections: ['Inventory', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: inventoryShipmentUpdateItemQuantities - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities

Markdown Content:
inventoryShipmentUpdateItemQuantities - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#main-content)

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
*   Customers   
*   Discounts and marketing   
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

[Anchor to inventoryShipmentUpdateItemQuantities](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#top)
inventory Shipment Update Item Quantities
=========================================

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Updates items on an inventory shipment.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the inventory shipment to update item quantities.

[Anchor to items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#arguments-items)items

•[[Inventory Shipment Update Item Quantities Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

Default:[]

The list of line items to be updated to the shipment.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to InventoryShipmentUpdateItemQuantitiesPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#returns)Inventory Shipment Update Item Quantities Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to shipment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#returns-shipment)shipment

•[Inventory Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

The inventory shipment with updated item quantities.

Show fields

[Anchor to updatedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#returns-updatedLineItems)updated Line Items

•[[Inventory Shipment Line Item!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

The updated item quantities.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentupdateitemquantities#returns-userErrors)user Errors

•[[Inventory Shipment Update Item Quantities User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### inventoryShipmentUpdateItemQuantities reference

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

12

13

14

›

⌄

⌄

⌄

⌄

⌄

mutation inventoryShipmentUpdateItemQuantities($id: ID!, $items: [InventoryShipmentUpdateItemQuantitiesInput!]){

inventoryShipmentUpdateItemQuantities(id: $id, items: $items){

shipment {

# InventoryShipment fields

}

updatedLineItems {

# InventoryShipmentLineItem fields

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

{

"id": "gid://shopify/<objectName>/10079785100",

"items": [

{

"shipmentLineItemId": "gid://shopify/<objectName>/10079785100",

"quantity": 1

}

]

}

```
{
  "id": "gid://shopify/<objectName>/10079785100",
  "items": [
    {
      "shipmentLineItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1
    }
  ]
}
```

```
input InventoryShipmentUpdateItemQuantitiesInput {
  shipmentLineItemId: ID!
  quantity: Int!
}
```


---
*Content truncated at "Updates" section*