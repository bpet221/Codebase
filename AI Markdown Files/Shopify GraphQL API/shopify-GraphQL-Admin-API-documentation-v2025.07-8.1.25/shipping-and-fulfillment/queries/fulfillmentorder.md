---
title: "fulfillmentOrder"
description: "Shopify GraphQL Admin API documentation for fulfillmentorder"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: fulfillmentOrder - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder

Markdown Content:
fulfillmentOrder - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#main-content)

[![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 3: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

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
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   
Shipping and fulfillment

    *   
Queries

        *   [assigned Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedfulfillmentorders)
        *   [available Carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablecarrierservices)
        *   [carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservice)
        *   [carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierservices)
        *   [delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomization)
        *   [delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverycustomizations)
        *   [delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofile)
        *   [delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles)
        *   [delivery Promise Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseparticipants)
        *   [delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromiseprovider)
        *   [delivery Promise Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverypromisesettings)
        *   [delivery Settings](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliverysettings)
        *   [fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillment)
        *   [fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder)
        *   [fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorders)
        *   [fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentservice)
        *   [manual Holds Fulfillment Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualholdsfulfillmentorders)

    *   Mutations   
    *   Objects   

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

[Anchor to fulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#top)
fulfillment Order
=================

query

Returns a `FulfillmentOrder` resource by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the `FulfillmentOrder` to return.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to FulfillmentOrder](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#returns-FulfillmentOrder)Fulfillment Order

•[Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

![Image 4](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)
Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

[See below for more details on creating fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

* * *

Note

Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.

[See below for more details on the lifecycle of a fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#the-lifecycle-of-a-fulfillment-order).

* * *

Retrieving fulfillment orders
-----------------------------

### Fulfillment orders from an order

All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

[API access scopes](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

### Fulfillment orders assigned to the app for fulfillment

Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

### All fulfillment orders

Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentorder#api-access-scopes) it was granted with.

The lifecycle of a fulfillment order
------------------------------------

### Fulfillment Order Creation

After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

### The lifecycle of a fulfillment order at a merchant managed location

Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

[Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

[Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

API access scopes
-----------------

Fulfillment orders are governed by the following API access scopes:

*   The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
*   The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
*   The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

### Fulfillment service app access scopes

Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

### Order management app access scopes

**Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

Notifications about fulfillment orders
--------------------------------------

Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

[Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a list of locations that a fulfillment order can potentially move to.

#### Query

```graphql
query LocationsForMoveList($fulfillmentOrderId: ID!) {
  fulfillmentOrder(id: $fulfillmentOrderId) {
    locationsForMove(first: 10) {
      edges {
        node {
          location {
            id
            name
          }
          message
          movable
          availableLineItemsCount {
            count
          }
          unavailableLineItemsCount {
            count
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationsForMoveList($fulfillmentOrderId: ID!) { fulfillmentOrder(id: $fulfillmentOrderId) { locationsForMove(first: 10) { edges { node { location { id name } message movable availableLineItemsCount { count } unavailableLineItemsCount { count } } } } } }",
 "variables": {
    "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationsForMoveList($fulfillmentOrderId: ID!) {
    fulfillmentOrder(id: $fulfillmentOrderId) {
      locationsForMove(first: 10) {
        edges {
          node {
            location {
              id
              name
            }
            message
            movable
            availableLineItemsCount {
              count
            }
            unavailableLineItemsCount {
              count
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
    },
  },
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query LocationsForMoveList($fulfillmentOrderId: ID!) {
    fulfillmentOrder(id: $fulfillmentOrderId) {
      locationsForMove(first: 10) {
        edges {
          node {
            location {
              id
              name
            }
            message
            movable
            availableLineItemsCount {
              count
            }
            unavailableLineItemsCount {
              count
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationsForMoveList($fulfillmentOrderId: ID!) {
      fulfillmentOrder(id: $fulfillmentOrderId) {
        locationsForMove(first: 10) {
          edges {
            node {
              location {
                id
                name
              }
              message
              movable
              availableLineItemsCount {
                count
              }
              unavailableLineItemsCount {
                count
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrder": {
    "locationsForMove": {
      "edges": [
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/346779380",
              "name": "Ottawa Store"
            },
            "message": "No items are stocked at this location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        },
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/648019273",
              "name": "Ottawa Store geo located"
            },
            "message": "No items are stocked at this location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        },
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/884687543",
              "name": "Ottawa Warehouse"
            },
            "message": "No items are stocked at this location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        },
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/124656943",
              "name": "Shipping Origin"
            },
            "message": "Current location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        },
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/215093630",
              "name": "Snowdevil Shipwire Warehouse"
            },
            "message": "No items are stocked at this location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        },
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/750123840",
              "name": "Toronto Store"
            },
            "message": "No items are stocked at this location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        },
        {
          "node": {
            "location": {
              "id": "gid://shopify/Location/415211365",
              "name": "US Store"
            },
            "message": "No items are stocked at this location.",
            "movable": false,
            "availableLineItemsCount": {
              "count": 0
            },
            "unavailableLineItemsCount": {
              "count": 1
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves a specific fulfillment order

#### Query

```graphql
query FulfillmentOrderShow($id: ID!) {
  fulfillmentOrder(id: $id) {
    assignedLocation {
      location {
        id
      }
    }
    channelId
    destination {
      address1
      address2
      city
      company
      countryCode
      zip
      firstName
      lastName
    }
    fulfillAt
    fulfillBy
    requestStatus
    status
    lineItems(first: 10) {
      edges {
        node {
          inventoryItemId
          remainingQuantity
          requiresShipping
          weight {
            unit
            value
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/FulfillmentOrder/564786110"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentOrderShow($id: ID!) { fulfillmentOrder(id: $id) { assignedLocation { location { id } } channelId destination { address1 address2 city company countryCode zip firstName lastName } fulfillAt fulfillBy requestStatus status lineItems(first: 10) { edges { node { inventoryItemId remainingQuantity requiresShipping weight { unit value } } } } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/564786110"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentOrderShow($id: ID!) {
    fulfillmentOrder(id: $id) {
      assignedLocation {
        location {
          id
        }
      }
      channelId
      destination {
        address1
        address2
        city
        company
        countryCode
        zip
        firstName
        lastName
      }
      fulfillAt
      fulfillBy
      requestStatus
      status
      lineItems(first: 10) {
        edges {
          node {
            inventoryItemId
            remainingQuantity
            requiresShipping
            weight {
              unit
              value
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/564786110"
    },
  },
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query FulfillmentOrderShow($id: ID!) {
    fulfillmentOrder(id: $id) {
      assignedLocation {
        location {
          id
        }
      }
      channelId
      destination {
        address1
        address2
        city
        company
        countryCode
        zip
        firstName
        lastName
      }
      fulfillAt
      fulfillBy
      requestStatus
      status
      lineItems(first: 10) {
        edges {
          node {
            inventoryItemId
            remainingQuantity
            requiresShipping
            weight {
              unit
              value
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/564786110"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentOrderShow($id: ID!) {
      fulfillmentOrder(id: $id) {
        assignedLocation {
          location {
            id
          }
        }
        channelId
        destination {
          address1
          address2
          city
          company
          countryCode
          zip
          firstName
          lastName
        }
        fulfillAt
        fulfillBy
        requestStatus
        status
        lineItems(first: 10) {
          edges {
            node {
              inventoryItemId
              remainingQuantity
              requiresShipping
              weight {
                unit
                value
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/564786110"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrder": {
    "assignedLocation": {
      "location": {
        "id": "gid://shopify/Location/124656943"
      }
    },
    "channelId": null,
    "destination": {
      "address1": "123 Amoebobacterieae St",
      "address2": "Unit 806",
      "city": "Ottawa",
      "company": "",
      "countryCode": "CA",
      "zip": "K2P0V6",
      "firstName": "Bob",
      "lastName": "Bobsen"
    },
    "fulfillAt": null,
    "fulfillBy": null,
    "requestStatus": "UNSUBMITTED",
    "status": "OPEN",
    "lineItems": {
      "edges": [
        {
          "node": {
            "inventoryItemId": "gid://shopify/InventoryItem/43729076",
            "remainingQuantity": 1,
            "requiresShipping": true,
            "weight": {
              "unit": "GRAMS",
              "value": 1500
            }
          }
        }
      ]
    }
  }
}
``` 
*   ### Retrieves fulfillments associated with a fulfillment order

#### Query

```graphql
query FulfillmentList($fulfillmentOrderId: ID!) {
  fulfillmentOrder(id: $fulfillmentOrderId) {
    fulfillments(first: 10) {
      edges {
        node {
          id
          fulfillmentLineItems(first: 10) {
            edges {
              node {
                id
                lineItem {
                  title
                  variant {
                    id
                  }
                }
                quantity
                originalTotalSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
          status
          estimatedDeliveryAt
          service {
            handle
          }
          trackingInfo(first: 10) {
            company
            number
            url
          }
          originAddress {
            address1
            address2
            city
            countryCode
            provinceCode
            zip
          }
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/158170091"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query FulfillmentList($fulfillmentOrderId: ID!) { fulfillmentOrder(id: $fulfillmentOrderId) { fulfillments(first: 10) { edges { node { id fulfillmentLineItems(first: 10) { edges { node { id lineItem { title variant { id } } quantity originalTotalSet { shopMoney { amount currencyCode } } } } } status estimatedDeliveryAt service { handle } trackingInfo(first: 10) { company number url } originAddress { address1 address2 city countryCode provinceCode zip } } } } } }",
 "variables": {
    "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/158170091"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query FulfillmentList($fulfillmentOrderId: ID!) {
    fulfillmentOrder(id: $fulfillmentOrderId) {
      fulfillments(first: 10) {
        edges {
          node {
            id
            fulfillmentLineItems(first: 10) {
              edges {
                node {
                  id
                  lineItem {
                    title
                    variant {
                      id
                    }
                  }
                  quantity
                  originalTotalSet {
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
            status
            estimatedDeliveryAt
            service {
              handle
            }
            trackingInfo(first: 10) {
              company
              number
              url
            }
            originAddress {
              address1
              address2
              city
              countryCode
              provinceCode
              zip
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/158170091"
    },
  },
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query FulfillmentList($fulfillmentOrderId: ID!) {
    fulfillmentOrder(id: $fulfillmentOrderId) {
      fulfillments(first: 10) {
        edges {
          node {
            id
            fulfillmentLineItems(first: 10) {
              edges {
                node {
                  id
                  lineItem {
                    title
                    variant {
                      id
                    }
                  }
                  quantity
                  originalTotalSet {
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
            status
            estimatedDeliveryAt
            service {
              handle
            }
            trackingInfo(first: 10) {
              company
              number
              url
            }
            originAddress {
              address1
              address2
              city
              countryCode
              provinceCode
              zip
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/158170091"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query FulfillmentList($fulfillmentOrderId: ID!) {
      fulfillmentOrder(id: $fulfillmentOrderId) {
        fulfillments(first: 10) {
          edges {
            node {
              id
              fulfillmentLineItems(first: 10) {
                edges {
                  node {
                    id
                    lineItem {
                      title
                      variant {
                        id
                      }
                    }
                    quantity
                    originalTotalSet {
                      shopMoney {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
              status
              estimatedDeliveryAt
              service {
                handle
              }
              trackingInfo(first: 10) {
                company
                number
                url
              }
              originAddress {
                address1
                address2
                city
                countryCode
                provinceCode
                zip
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/158170091"
    },
  },
});
``` #### Response

```json
{
  "fulfillmentOrder": {
    "fulfillments": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Fulfillment/684880463",
            "fulfillmentLineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/FulfillmentLineItem/423076942",
                    "lineItem": {
                      "title": "Element",
                      "variant": {
                        "id": "gid://shopify/ProductVariant/214453824"
                      }
                    },
                    "quantity": 1,
                    "originalTotalSet": {
                      "shopMoney": {
                        "amount": "10.0",
                        "currencyCode": "USD"
                      }
                    }
                  }
                }
              ]
            },
            "status": "SUCCESS",
            "estimatedDeliveryAt": null,
            "service": {
              "handle": "manual"
            },
            "trackingInfo": [
              {
                "company": "UPS",
                "number": "1Z1234512345123456",
                "url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1Z1234512345123456"
              }
            ],
            "originAddress": null
          }
        }
      ]
    }
  }
}
``` 

Examples
--------

Retrieves a list of locations that a fulfillment order can potentially move to.

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20LocationsForMoveList(%24fulfillmentOrderId%3A%20ID!)%20%7B%0A%20%20fulfillmentOrder(id%3A%20%24fulfillmentOrderId)%20%7B%0A%20%20%20%20locationsForMove(first%3A%2010)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20message%0A%20%20%20%20%20%20%20%20%20%20movable%0A%20%20%20%20%20%20%20%20%20%20availableLineItemsCount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20unavailableLineItemsCount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22fulfillmentOrderId%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F564786110%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query LocationsForMoveList($fulfillmentOrderId: ID!) {

 fulfillmentOrder(id: $fulfillmentOrderId) {

 locationsForMove(first: 10) {

 edges {

 node {

 location {

 id

 name

 }

 message

 movable

 availableLineItemsCount {

 count

 }

 unavailableLineItemsCount {

 count

 }

 }

 }

 }

 }

 }`,

{

variables:{

"fulfillmentOrderId":"gid://shopify/FulfillmentOrder/564786110"

},

},

);

const data=await response.json();

```
query LocationsForMoveList($fulfillmentOrderId: ID!) {
  fulfillmentOrder(id: $fulfillmentOrderId) {
    locationsForMove(first: 10) {
      edges {
        node {
          location {
            id
            name
          }
          message
          movable
          availableLineItemsCount {
            count
          }
          unavailableLineItemsCount {
            count
          }
        }
      }
    }
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query LocationsForMoveList($fulfillmentOrderId: ID!) { fulfillmentOrder(id: $fulfillmentOrderId) { locationsForMove(first: 10) { edges { node { location { id name } message movable availableLineItemsCount { count } unavailableLineItemsCount { count } } } } } }",
 "variables": {
    "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query LocationsForMoveList($fulfillmentOrderId: ID!) {
    fulfillmentOrder(id: $fulfillmentOrderId) {
      locationsForMove(first: 10) {
        edges {
          node {
            location {
              id
              name
            }
            message
            movable
            availableLineItemsCount {
              count
            }
            unavailableLineItemsCount {
              count
            }
          }
        }
      }
    }
  }`,
  {
    variables: {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query LocationsForMoveList($fulfillmentOrderId: ID!) {
      fulfillmentOrder(id: $fulfillmentOrderId) {
        locationsForMove(first: 10) {
          edges {
            node {
              location {
                id
                name
              }
              message
              movable
              availableLineItemsCount {
                count
              }
              unavailableLineItemsCount {
                count
              }
            }
          }
        }
      }
    }`,
    "variables": {
        "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
    },
  },
});
```

```
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  query LocationsForMoveList($fulfillmentOrderId: ID!) {
    fulfillmentOrder(id: $fulfillmentOrderId) {
      locationsForMove(first: 10) {
        edges {
          node {
            location {
              id
              name
            }
            message
            movable
            availableLineItemsCount {
              count
            }
            unavailableLineItemsCount {
              count
            }
          }
        }
      }
    }
  }
QUERY

variables = {
  "fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

9

1

2

3

›

⌄

{

"fulfillmentOrderId": "gid://shopify/FulfillmentOrder/564786110"

}

Hide content

Response
--------

JSON

999

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

⌄

⌄

⌄

⌄

⌄

⌄

{

"fulfillmentOrder": {

"locationsForMove": {

"edges": [

{

"node": {

"location": {

"id": "gid://shopify/Location/346779380",

"name": "Ottawa Store"

},

"message": "No items are stocked at this location.",

"movable": false,

"availableLineItemsCount": {

"count": 0

},

"unavailableLineItemsCount": {

"count": 1

}

}

},

{

"node": {

"location": {

"id": "gid://shopify/Location/648019273",

"name": "Ottawa Store geo located"

},

"message": "No items are stocked at this location.",

"movable": false,

"availableLineItemsCount": {

"count": 0

},

"unavailableLineItemsCount": {

"count": 1

}

}

},


---
*Content truncated at "Updates" section*