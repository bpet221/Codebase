---
title: "DeliveryCarrierService"
description: "Shopify GraphQL Admin API documentation for deliverycarrierservice"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: DeliveryCarrierService - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice

Markdown Content:
DeliveryCarrierService - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#main-content)

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

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Countries In Shipping Zones](https://shopify.dev/docs/api/admin-graphql/latest/objects/countriesinshippingzones)
        *   [Delivery Available Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliveryavailableservice)
        *   [Delivery Branded Promise](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverybrandedpromise)
        *   [Delivery Carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#queries)
        *   [Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#mutations)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#interfaces)
        *   [Delivery Carrier Service And Locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierserviceandlocations)
        *   [Delivery Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycondition)
        *   [Delivery Country](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountry)
        *   [Delivery Country And Zone](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountryandzone)
        *   [Delivery Country Code Or Rest Of World](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountrycodeorrestofworld)
        *   [Delivery Country Codes Or Rest Of World](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycountrycodesorrestofworld)
        *   [Delivery Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycustomization)
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
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to DeliveryCarrierService](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#top)
Delivery Carrier Service
========================

object

Requires Any of `orders` or `shipping` access scopes or `manage_delivery_settings` user permission.

A carrier service (also known as a carrier calculated service or shipping service) provides real-time shipping rates to Shopify. Some common carrier services include Canada Post, FedEx, UPS, and USPS. The term **carrier** is often used interchangeably with the terms **shipping company** and **rate provider**.

Using the CarrierService resource, you can add a carrier service to a shop and then provide a list of applicable shipping rates at checkout. You can even use the cart data to adjust shipping rates and offer shipping discounts based on what is in the customer's cart.

Requirements for accessing the CarrierService resource
------------------------------------------------------

To access the CarrierService resource, add the `write_shipping` permission to your app's requested scopes. For more information, see [API access scopes](https://shopify.dev/docs/admin-api/access-scopes).

Your app's request to create a carrier service will fail unless the store installing your carrier service meets one of the following requirements:

*   It's on the Advanced Shopify plan or higher.
*   It's on the Shopify plan with yearly billing, or the carrier service feature has been added to the store for a monthly fee. For more information, contact [Shopify Support](https://help.shopify.com/questions).
*   It's a development store.

* * *

Note

If a store changes its Shopify plan, then the store's association with a carrier service is deactivated if the store no long meets one of the requirements above.

* * *

Providing shipping rates to Shopify
-----------------------------------

When adding a carrier service to a store, you need to provide a POST endpoint rooted in the `callbackUrl` property where Shopify can retrieve applicable shipping rates. The callback URL should be a public endpoint that expects these requests from Shopify.

### Example shipping rate request sent to a carrier service

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

{

"rate": {

"origin": {

"country": "CA",

"postal_code": "K2P1L4",

"province": "ON",

"city": "Ottawa",

"name": null,

"address1": "150 Elgin St.",

"address2": "",

"address3": null,

"phone": null,

"fax": null,

"email": null,

"address_type": null,

"company_name": "Jamie D's Emporium"

},

"destination": {

"country": "CA",

"postal_code": "K1M1M4",

"province": "ON",

"city": "Ottawa",

"name": "Bob Norman",

"address1": "24 Sussex Dr.",

"address2": "",

"address3": null,

"phone": null,

"fax": null,

"email": null,

"address_type": null,

"company_name": null

},

"items": [{

"name": "Short Sleeve T-Shirt",

"sku": "",

"quantity": 1,

### Example response

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

{

"rates": [

{

"service_name": "canadapost-overnight",

"service_code": "ON",

"total_price": "1295",

"description": "This is the fastest option by far",

"currency": "CAD",

"min_delivery_date": "2013-04-12 14:48:45 -0400",

"max_delivery_date": "2013-04-12 14:48:45 -0400"

},

{

"service_name": "fedex-2dayground",

"service_code": "2D",

"total_price": "2934",

"currency": "USD",

"min_delivery_date": "2013-04-12 14:48:45 -0400",

"max_delivery_date": "2013-04-12 14:48:45 -0400"

},

{

"service_name": "fedex-priorityovernight",

"service_code": "1D",

"total_price": "3587",

"currency": "USD",

"min_delivery_date": "2013-04-12 14:48:45 -0400",

"max_delivery_date": "2013-04-12 14:48:45 -0400"

}

]

}

The `address3`, `fax`, `address_type`, and `company_name` fields are returned by specific [ActiveShipping](https://github.com/Shopify/active_shipping) providers. For API-created carrier services, you should use only the following shipping address fields:

*   `address1`
*   `address2`
*   `city`
*   `zip`
*   `province`
*   `country`

Other values remain as `null` and are not sent to the callback URL.

### Response fields

When Shopify requests shipping rates using your callback URL, the response object `rates` must be a JSON array of objects with the following fields. Required fields must be included in the response for the carrier service integration to work properly.

| Field | Required | Description |
| --- | --- | --- |
| `service_name` | Yes | The name of the rate, which customers see at checkout. For example: `Expedited Mail`. |
| `description` | Yes | A description of the rate, which customers see at checkout. For example: `Includes tracking and insurance`. |
| `service_code` | Yes | A unique code associated with the rate. For example: `expedited_mail`. |
| `currency` | Yes | The currency of the shipping rate. |
| `total_price` | Yes | The total price expressed in subunits. If the currency doesn't use subunits, then the value must be multiplied by 100. For example: `"total_price": 500` for 5.00 CAD, `"total_price": 100000` for 1000 JPY. |
| `phone_required` | No | Whether the customer must provide a phone number at checkout. |
| `min_delivery_date` | No | The earliest delivery date for the displayed rate. |
| `max_delivery_date` | No | The latest delivery date for the displayed rate to still be valid. |

### Special conditions

*   To indicate that this carrier service cannot handle this shipping request, return an empty array and any successful (20x) HTTP code.
*   To force backup rates instead, return a 40x or 50x HTTP code with any content. A good choice is the regular 404 Not Found code.
*   Redirects (30x codes) will only be followed for the same domain as the original callback URL. Attempting to redirect to a different domain will trigger backup rates.
*   There is no retry mechanism. The response must be successful on the first try, within the time budget listed below. Timeouts or errors will trigger backup rates.

Response Timeouts
-----------------

The read timeout for rate requests are dynamic, based on the number of requests per minute (RPM). These limits are applied to each shop-app pair. The timeout values are as follows.

| RPM Range | Timeout |
| --- | --- |
| Under 1500 | 10s |
| 1500 to 3000 | 5s |
| Over 3000 | 3s |

* * *

Note

These values are upper limits and should not be interpretted as a goal to develop towards. Shopify is constantly evaluating the performance of the platform and working towards improving resilience as well as app capabilities. As such, these numbers may be adjusted outside of our normal versioning timelines.

* * *

Server-side caching of requests
-------------------------------

Shopify provides server-side caching to reduce the number of requests it makes. Any shipping rate request that identically matches the following fields will be retrieved from Shopify's cache of the initial response:

*   variant IDs
*   default shipping box weight and dimensions
*   variant quantities
*   carrier service ID
*   origin address
*   destination address
*   item weights and signatures

If any of these fields differ, or if the cache has expired since the original request, then new shipping rates are requested. The cache expires 15 minutes after rates are successfully returned. If an error occurs, then the cache expires after 30 seconds.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#fields)Fields
-----------------------------------------------------------------------------------------------------------------

[Anchor to active](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.active)active

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the carrier service is active.

[Anchor to availableServicesForCountries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.availableServicesForCountries)available Services For Countries

•[[Delivery Available Service!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryAvailableService)

non-null

The list of services offered for given destinations.

Show fields

[Anchor to callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.callbackUrl)callback Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL endpoint that Shopify needs to retrieve shipping rates.

[Anchor to formattedName](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.formattedName)formatted Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The properly formatted name of the shipping service provider, ready to display.

[Anchor to icon](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.icon)icon

•[Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

non-null

The logo of the service provider.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.name)name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the shipping service provider.

[Anchor to supportsServiceDiscovery](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#field-DeliveryCarrierService.fields.supportsServiceDiscovery)supports Service Discovery

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether merchants are able to send dummy data to your service through the Shopify admin to see shipping rate examples.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[DeliveryCarrierServiceAndLocations.carrierService](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceAndLocations#field-carrierService)
*   <->[DeliveryCarrierServiceConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#field-nodes)
*   {}[DeliveryCarrierServiceEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceEdge#field-node)
*   {}[DeliveryParticipant.carrierService](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipant#field-carrierService)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#queries)Queries
--------------------------------------------------------------------------------------------------------------------

[Anchor to carrierService](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#query-carrierService)[carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierService)

•query

Returns a `DeliveryCarrierService` object by ID.

Show fields

[Anchor to carrierServices](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#query-carrierServices)[carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierServices)

•query

Retrieve a list of CarrierServices.

Show fields

* * *

Was this section helpful?

Yes No

<?>DeliveryCarrierService Queries
---------------------------------

### Queried by

*   <?>[carrier Service](https://shopify.dev/docs/api/admin-graphql/latest/queries/DeliveryCarrierService)
*   <?>[carrier Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/DeliveryCarrierServiceConnection)

* * *

[Anchor to Mutations](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#mutations)Mutations
--------------------------------------------------------------------------------------------------------------------------

[Anchor to carrierServiceCreate](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#mutation-carrierServiceCreate)[carrier Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)

•mutation

Creates a new carrier service.

Show payload

[Anchor to carrierServiceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#mutation-carrierServiceUpdate)[carrier Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

•mutation

Updates a carrier service. Only the app that creates a carrier service can update it.

Show payload

* * *

Was this section helpful?

Yes No

<~>DeliveryCarrierService Mutations
-----------------------------------

### Mutated by

*   <~>[carrier Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceCreate)
*   <~>[carrier Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierServiceUpdate)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#interfaces)Interfaces
-----------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/deliverycarrierservice#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-DeliveryCarrierService Implements
------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*