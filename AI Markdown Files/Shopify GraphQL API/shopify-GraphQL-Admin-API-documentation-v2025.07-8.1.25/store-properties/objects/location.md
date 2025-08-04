---
title: "Location"
description: "Shopify GraphQL Admin API documentation for location"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/location"
extraction_method: "jina"
sections: ['Store properties', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Location - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/location

Markdown Content:
Location - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#main-content)

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
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   
Store Properties

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Business Entity](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentity)
        *   [Business Entity Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/businessentityaddress)
        *   [Cart Transform Eligible Operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformeligibleoperations)
        *   [Cart Transform Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/carttransformfeature)
        *   [Currency Formats](https://shopify.dev/docs/api/admin-graphql/latest/objects/currencyformats)
        *   [Filter Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/filteroption)
        *   [Limited Pending Order Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/limitedpendingordercount)
        *   [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#interfaces)
        *   [Location Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationaddress)
        *   [Locations Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationscondition)
        *   [Location Snapshot](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsnapshot)
        *   [Location Suggested Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/locationsuggestedaddress)
        *   [Navigation Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/navigationitem)
        *   [Shop](https://shopify.dev/docs/api/admin-graphql/latest/objects/shop)
        *   [Shop Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopaddress)
        *   [Shop Features](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopfeatures)
        *   [Shop Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopplan)
        *   [Shop Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppolicy)
        *   [Shop Resource Limits](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopresourcelimits)

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#top)
Location
========

object

Requires `read_locations` access scope, `read_inventory` access scope or `read_markets_home` access scope.

Represents the location where the physical good resides. You can stock inventory at active locations. Active locations that have `fulfills_online_orders: true` and are configured with a shipping rate, pickup enabled or local delivery will be able to sell from their storefront.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#fields)Fields
---------------------------------------------------------------------------------------------------

[Anchor to activatable](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.activatable)activatable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the location can be reactivated. If `false`, then trying to activate the location with the [`LocationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate) mutation will return an error that describes why the location can't be activated.

[Anchor to address](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.address)address

•[Location Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress)

non-null

The address of this location.

Show fields

[Anchor to addressVerified](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.addressVerified)address Verified

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the location address has been verified.

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was added to a shop.

[Anchor to deactivatable](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.deactivatable)deactivatable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location can be deactivated. If `true`, then the location can be deactivated by calling the [`LocationDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate) mutation. If `false`, then calling the mutation to deactivate it will return an error that describes why the location can't be deactivated.

[Anchor to deactivatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.deactivatedAt)deactivated At

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was deactivated at. For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Universal Time Coordinated) is represented as `"2019-09-07T15:50:00Z`".

[Anchor to deletable](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.deletable)deletable

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location can be deleted.

[Anchor to fulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.fulfillmentService)fulfillment Service

•[Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService)

Name of the service provider that fulfills from this location.

Show fields

[Anchor to fulfillsOnlineOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.fulfillsOnlineOrders)fulfills Online Orders

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location can fulfill online orders.

[Anchor to hasActiveInventory](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.hasActiveInventory)has Active Inventory

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location has active inventory.

[Anchor to hasUnfulfilledOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.hasUnfulfilledOrders)has Unfulfilled Orders

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location has orders that need to be fulfilled.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inventoryLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.inventoryLevel)inventory Level

•[Inventory Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

The quantities of an inventory item at this location.

Show fields

[Anchor to inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.inventoryLevels)inventory Levels

•[Inventory Level Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection)

non-null

A list of the quantities of the inventory items that can be stocked at this location.

Show fields

[Anchor to isActive](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.isActive)is Active

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the location is active. A deactivated location can be activated (change `isActive: true`) if it has `activatable` set to `true` by calling the [`locationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate) mutation.

[Anchor to isFulfillmentService](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.isFulfillmentService)is Fulfillment Service

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location is a fulfillment service.

[Anchor to legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.legacyResourceId)legacy Resource Id

•[Unsigned Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

non-null

The ID of the corresponding resource in the REST Admin API.

[Anchor to localPickupSettingsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.localPickupSettingsV2)local Pickup Settings V2

•[Delivery Local Pickup Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocalPickupSettings)

Local pickup settings for the location.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The name of the location.

[Anchor to shipsInventory](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.shipsInventory)ships Inventory

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether this location is used for calculating shipping rates. In multi-origin shipping mode, this flag is ignored.

[Anchor to suggestedAddresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.suggestedAddresses)suggested Addresses

•[[Location Suggested Address!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSuggestedAddress)

non-null

List of suggested addresses for this location (empty if none).

Show fields

[Anchor to updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.updatedAt)updated At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the location was last updated.

### Deprecated fields

[Anchor to isPrimary](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.isPrimary)is Primary

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null Deprecated

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#field-Location.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CashTrackingSession.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-location)
*   {}[CustomerEmailAddress.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-sourceLocation)
*   {}[CustomerEmailMarketingConsentState.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentState#field-sourceLocation)
*   {}[CustomerPhoneNumber.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber#field-sourceLocation)
*   {}[CustomerSmsMarketingConsentState.sourceLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentState#field-sourceLocation)
*   {}[DeliveryCarrierServiceAndLocations.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceAndLocations#field-locations)
*   {}[DeliveryLocationGroup.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-locations)
*   {}[DeliveryProfile.unassignedLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-unassignedLocations)
*   {}[DeliveryProfile.unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-unassignedLocationsPaginated)
*   {}[DeliveryPromiseProvider.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseProvider#field-location)
*   {}[Fulfillment.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-location)
*   {}[FulfillmentOrderAssignedLocation.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-location)
*   {}[FulfillmentOrderDestination.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderDestination#field-location)
*   {}[FulfillmentOrderLocationForMove.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-location)
*   {}[FulfillmentService.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService#field-location)
*   {}[InventoryChange.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryChange#field-location)
*   {}[InventoryLevel.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-location)
*   <->[LocationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#field-nodes)
*   {}[LocationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEdge#field-node)
*   {}[LocationSnapshot.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot#field-location)
*   {}[LocationsCondition.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-locations)
*   {}[Order.retailLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-retailLocation)
*   {}[OrderTransaction.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-location)
*   {}[RefundLineItem.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-location)
*   {}[ReverseFulfillmentOrderDisposition.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderDisposition#field-location)
*   {}[SubscriptionDeliveryMethodPickupOption.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickupOption#field-location)
*   {}[SubscriptionPickupOption.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPickupOption#field-location)

Show deprecations
### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#queries)Queries
------------------------------------------------------------------------------------------------------

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#query-location)[location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)

•query

Returns an inventory Location resource by ID.

Show fields

[Anchor to locationByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#query-locationByIdentifier)[location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationByIdentifier)

•query

Return a location by an identifier.

Show fields

[Anchor to locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#query-locations)[locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)

•query

Returns a list of active inventory locations.

Show fields

[Anchor to locationsAvailableForDeliveryProfilesConnection](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#query-locationsAvailableForDeliveryProfilesConnection)[locations Available For Delivery Profiles Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

•query

Returns a list of all origin locations available for a delivery profile.

Show fields

[Anchor to locationsAvailableForDeliveryProfiles](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#query-locationsAvailableForDeliveryProfiles)[locations Available For Delivery Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfiles)

•query

Deprecated

Show fields

* * *

Was this section helpful?

Yes No

<?>Location Queries
-------------------

### Queried by

*   <?>[location](https://shopify.dev/docs/api/admin-graphql/latest/queries/Location)
*   <?>[location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/Location)
*   <?>[locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/LocationConnection)
*   <?>[locations Available For Delivery Profiles Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/LocationConnection)

Show deprecations

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#mutations)Mutations
------------------------------------------------------------------------------------------------------------

[Anchor to locationActivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#mutation-locationActivate)[location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)

•mutation

Activates a location so that you can stock inventory at the location. Refer to the [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-isactive) and [`activatable`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-activatable) fields on the `Location` object.

Show payload

[Anchor to locationAdd](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#mutation-locationAdd)[location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)

•mutation

Adds a new location.

Show payload

[Anchor to locationDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#mutation-locationDeactivate)[location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)

•mutation

Deactivates a location and moves inventory, pending orders, and moving transfers to a destination location.

Show payload

[Anchor to locationEdit](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#mutation-locationEdit)[location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

•mutation

Edits an existing location.

[As of the 2023-10 API version](https://shopify.dev/changelog/apps-can-now-change-the-name-and-address-of-their-fulfillment-service-locations), apps can change the name and address of their fulfillment service locations.

Show payload

* * *

Was this section helpful?

Yes No

<~>Location Mutations
---------------------

### Mutated by

*   <~>[location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate)
*   <~>[location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationAdd)
*   <~>[location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate)
*   <~>[location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationEdit)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#interfaces)Interfaces
---------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to LegacyInteroperability](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#interface-LegacyInteroperability)[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/location#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-Location Implements
----------------------

### Implements

*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Legacy Interoperability](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/LegacyInteroperability)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*