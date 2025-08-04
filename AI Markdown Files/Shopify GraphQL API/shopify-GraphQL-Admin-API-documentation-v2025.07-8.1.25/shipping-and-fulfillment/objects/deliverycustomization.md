---
title: "DeliveryCustomization"
description: "Shopify GraphQL Admin API documentation for deliverycustomization"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DeliveryCustomization - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization

Markdown Content:
DeliveryCustomization - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#main-content)

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
    *   Mutations   
    *   
Objects

        *   [Countries In Shipping Zones](https://shopify.dev/docs/api/admin-graphql/latest/objects/countriesinshippingzones)
        *   [Delivery Available Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryavailableservice)
        *   [Delivery Branded Promise](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverybrandedpromise)
        *   [Delivery Carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice)
        *   [Delivery Carrier Service And Locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierserviceandlocations)
        *   [Delivery Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycondition)
        *   [Delivery Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountry)
        *   [Delivery Country And Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountryandzone)
        *   [Delivery Country Code Or Rest Of World](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountrycodeorrestofworld)
        *   [Delivery Country Codes Or Rest Of World](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountrycodesorrestofworld)
        *   [Delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#interfaces)
        *   [Delivery Customization Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomizationerror)
        *   [Delivery Legacy Mode Blocked](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylegacymodeblocked)
        *   [Delivery Local Pickup Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocalpickupsettings)
        *   [Delivery Location Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocationgroup)
        *   [Delivery Location Group Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocationgroupzone)
        *   [Delivery Location Local Pickup Settings Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverylocationlocalpickupsettingserror)
        *   [Delivery Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethod)
        *   [Delivery Method Additional Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethodadditionalinformation)
        *   [Delivery Method Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethoddefinition)
        *   [Delivery Method Definition Counts](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverymethoddefinitioncounts)
        *   [Delivery Participant](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryparticipant)
        *   [Delivery Participant Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryparticipantservice)
        *   [Delivery Product Variants Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryproductvariantscount)
        *   [Delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofile)
        *   [Delivery Profile Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofileitem)
        *   [Delivery Profile Location Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprofilelocationgroup)
        *   [Delivery Promise Participant](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverypromiseparticipant)
        *   [Delivery Promise Provider](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverypromiseprovider)
        *   [Delivery Promise Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverypromisesetting)
        *   [Delivery Province](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryprovince)
        *   [Delivery Rate Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryratedefinition)
        *   [Delivery Setting](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverysetting)
        *   [Delivery Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryzone)
        *   [Editable Property](https://shopify.dev/docs/api/admin-graphql/latest/objects/editableproperty)
        *   [Financial Summary Discount Allocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountallocation)
        *   [Financial Summary Discount Application](https://shopify.dev/docs/api/admin-graphql/latest/objects/financialsummarydiscountapplication)
        *   [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillment)
        *   [Fulfillment Event](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentevent)
        *   [Fulfillment Hold](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmenthold)
        *   [Fulfillment Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentlineitem)
        *   [Fulfillment Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder)
        *   [Fulfillment Order Assigned Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderassignedlocation)
        *   [Fulfillment Order Destination](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderdestination)
        *   [Fulfillment Order International Duties](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderinternationalduties)
        *   [Fulfillment Order Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitem)
        *   [Fulfillment Order Line Item Financial Summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitemfinancialsummary)
        *   [Fulfillment Order Line Item Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlineitemwarning)
        *   [Fulfillment Order Location For Move](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorderlocationformove)
        *   [Fulfillment Order Merchant Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordermerchantrequest)
        *   [Fulfillment Order Merge Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordermergeresult)
        *   [Fulfillment Order Split Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordersplitresult)
        *   [Fulfillment Order Supported Action](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentordersupportedaction)
        *   [Fulfillment Origin Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentoriginaddress)
        *   [Fulfillment Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentservice)
        *   [Fulfillment Tracking Info](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmenttrackinginfo)
        *   [Shipping Rate](https://shopify.dev/docs/api/admin-graphql/latest/objects/shippingrate)

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

[Anchor to DeliveryCustomization](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#top)
Delivery Customization
======================

object

Requires `read_delivery_customizations` access scope.

A delivery customization.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to enabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.enabled)enabled

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

The enabled status of the delivery customization.

[Anchor to errorHistory](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.errorHistory)error History

•[Functions Error History](https://shopify.dev/docs/api/admin-graphql/latest/objects/FunctionsErrorHistory)

The error history on the most recent version of the delivery customization.

Show fields

[Anchor to functionId](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.functionId)function Id

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The ID of the Shopify Function implementing the delivery customization.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to shopifyFunction](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.shopifyFunction)shopify Function

•[Shopify Function!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction)

non-null

The Shopify Function implementing the delivery customization.

Show fields

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The title of the delivery customization.

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#field-DeliveryCustomization.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[DeliveryCustomizationConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCustomizationConnection#field-nodes)
*   {}[DeliveryCustomizationEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationEdge#field-node)

### Possible type in

*   [Metafield Referencer](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReferencer)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#queries)Queries
-------------------------------------------------------------------------------------------------------------------

[Anchor to deliveryCustomization](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#query-deliveryCustomization)[delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryCustomization)

•query

The delivery customization.

Show fields

[Anchor to deliveryCustomizations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#query-deliveryCustomizations)[delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryCustomizations)

•query

The delivery customizations.

Show fields

* * *

Was this section helpful?

Yes No

<?>DeliveryCustomization Queries
--------------------------------

### Queried by

*   <?>[delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/DeliveryCustomization)
*   <?>[delivery Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/DeliveryCustomizationConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#mutations)Mutations
-------------------------------------------------------------------------------------------------------------------------

[Anchor to deliveryCustomizationCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#mutation-deliveryCustomizationCreate)[delivery Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)

•mutation

Creates a delivery customization.

Show payload

[Anchor to deliveryCustomizationUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#mutation-deliveryCustomizationUpdate)[delivery Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

•mutation

Updates a delivery customization.

Show payload

* * *

Was this section helpful?

Yes No

<~>DeliveryCustomization Mutations
----------------------------------

### Mutated by

*   <~>[delivery Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationCreate)
*   <~>[delivery Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryCustomizationUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DeliveryCustomization Implements
-----------------------------------

### Implements

*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*