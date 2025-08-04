---
title: "deliveryProfileCreate"
description: "Shopify GraphQL Admin API documentation for deliveryprofilecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: deliveryProfileCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate

Markdown Content:
deliveryProfileCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#main-content)

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
    *   
Mutations

        *   [carrier Service Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicecreate)
        *   [carrier Service Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierservicedelete)
        *   [carrier Service Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/carrierserviceupdate)
        *   [delivery Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationactivation)
        *   [delivery Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationcreate)
        *   [delivery Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationdelete)
        *   [delivery Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverycustomizationupdate)
        *   [delivery Profile Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate)
        *   [delivery Profile Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofileupdate)
        *   [delivery Promise Participants Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseparticipantsupdate)
        *   [delivery Promise Provider Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverypromiseproviderupsert)
        *   [delivery Setting Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliverysettingupdate)
        *   [fulfillment Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentcancel)
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
        *   [shipping Package Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagedelete)
        *   [shipping Package Make Default](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackagemakedefault)
        *   [shipping Package Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shippingpackageupdate)

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

[Anchor to deliveryProfileCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#top)
delivery Profile Create
=======================

mutation

Requires Any of `shipping` access scopes or `manage_delivery_settings` user permission.

Create a delivery profile.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#arguments)
Arguments
---------

[Anchor to profile](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#arguments-profile)profile

•[Delivery Profile Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProfileInput)

required

Specifies the input fields for a delivery profile.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DeliveryProfileCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#returns)Delivery Profile Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to profile](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#returns-profile)profile

•[Delivery Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

The delivery profile that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/deliveryprofilecreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create delivery profile

#### Description

Create delivery profile with two location groups, one for shipping from Canada and another one for the United States. **Note:** due to the potential complexity of the nested data, it is recommended to start with no more than 5 groups. More groups can be added later via the profile update mutation.

#### Query

```graphql
mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
  deliveryProfileCreate(profile: $profile) {
    profile {
      id
      name
      profileLocationGroups {
        locationGroup {
          id
          locations(first: 5) {
            nodes {
              name
              address {
                country
              }
            }
          }
        }
        locationGroupZones(first: 2) {
          edges {
            node {
              zone {
                id
                name
                countries {
                  code {
                    countryCode
                  }
                  provinces {
                    code
                  }
                }
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "profile": {
    "name": "Sample Delivery Profile",
    "locationGroupsToCreate": [
      {
        "locationsToAdd": [
          "gid://shopify/Location/750123840",
          "gid://shopify/Location/884687543"
        ],
        "zonesToCreate": [
          {
            "name": "Canada Zone",
            "countries": [
              {
                "code": "CA",
                "provinces": [
                  {
                    "code": "ON"
                  }
                ]
              }
            ],
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                },
                "weightConditionsToCreate": [
                  {
                    "operator": "GREATER_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 0,
                      "unit": "KILOGRAMS"
                    }
                  },
                  {
                    "operator": "LESS_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 15,
                      "unit": "KILOGRAMS"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "locationsToAdd": [
          "gid://shopify/Location/415211365"
        ],
        "zonesToCreate": [
          {
            "name": "USA Zone",
            "countries": {
              "code": "US",
              "provinces": [
                {
                  "code": "CO"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          },
          {
            "name": "Mexico Zone",
            "countries": {
              "code": "MX",
              "provinces": [
                {
                  "code": "MOR"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createDeliveryProfile($profile: DeliveryProfileInput!) { deliveryProfileCreate(profile: $profile) { profile { id name profileLocationGroups { locationGroup { id locations(first: 5) { nodes { name address { country } } } } locationGroupZones(first: 2) { edges { node { zone { id name countries { code { countryCode } provinces { code } } } } } } } } userErrors { field message } } }",
 "variables": {
    "profile": {
      "name": "Sample Delivery Profile",
      "locationGroupsToCreate": [
        {
          "locationsToAdd": [
            "gid://shopify/Location/750123840",
            "gid://shopify/Location/884687543"
          ],
          "zonesToCreate": [
            {
              "name": "Canada Zone",
              "countries": [
                {
                  "code": "CA",
                  "provinces": [
                    {
                      "code": "ON"
                    }
                  ]
                }
              ],
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  },
                  "weightConditionsToCreate": [
                    {
                      "operator": "GREATER_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 0,
                        "unit": "KILOGRAMS"
                      }
                    },
                    {
                      "operator": "LESS_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 15,
                        "unit": "KILOGRAMS"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "locationsToAdd": [
            "gid://shopify/Location/415211365"
          ],
          "zonesToCreate": [
            {
              "name": "USA Zone",
              "countries": {
                "code": "US",
                "provinces": [
                  {
                    "code": "CO"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            },
            {
              "name": "Mexico Zone",
              "countries": {
                "code": "MX",
                "provinces": [
                  {
                    "code": "MOR"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "profile": {
            "name": "Sample Delivery Profile",
            "locationGroupsToCreate": [
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/750123840",
                        "gid://shopify/Location/884687543"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "Canada Zone",
                            "countries": [
                                {
                                    "code": "CA",
                                    "provinces": [
                                        {
                                            "code": "ON"
                                        }
                                    ]
                                }
                            ],
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    },
                                    "weightConditionsToCreate": [
                                        {
                                            "operator": "GREATER_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 0,
                                                "unit": "KILOGRAMS"
                                            }
                                        },
                                        {
                                            "operator": "LESS_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 15,
                                                "unit": "KILOGRAMS"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/415211365"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "USA Zone",
                            "countries": {
                                "code": "US",
                                "provinces": [
                                    {
                                        "code": "CO"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Mexico Zone",
                            "countries": {
                                "code": "MX",
                                "provinces": [
                                    {
                                        "code": "MOR"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
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
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "profile": {
    "name": "Sample Delivery Profile",
    "locationGroupsToCreate": [
      {
        "locationsToAdd": [
          "gid://shopify/Location/750123840",
          "gid://shopify/Location/884687543"
        ],
        "zonesToCreate": [
          {
            "name": "Canada Zone",
            "countries": [
              {
                "code": "CA",
                "provinces": [
                  {
                    "code": "ON"
                  }
                ]
              }
            ],
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                },
                "weightConditionsToCreate": [
                  {
                    "operator": "GREATER_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 0,
                      "unit": "KILOGRAMS"
                    }
                  },
                  {
                    "operator": "LESS_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 15,
                      "unit": "KILOGRAMS"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "locationsToAdd": [
          "gid://shopify/Location/415211365"
        ],
        "zonesToCreate": [
          {
            "name": "USA Zone",
            "countries": {
              "code": "US",
              "provinces": [
                {
                  "code": "CO"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          },
          {
            "name": "Mexico Zone",
            "countries": {
              "code": "MX",
              "provinces": [
                {
                  "code": "MOR"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
      deliveryProfileCreate(profile: $profile) {
        profile {
          id
          name
          profileLocationGroups {
            locationGroup {
              id
              locations(first: 5) {
                nodes {
                  name
                  address {
                    country
                  }
                }
              }
            }
            locationGroupZones(first: 2) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                      }
                      provinces {
                        code
                      }
                    }
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "profile": {
            "name": "Sample Delivery Profile",
            "locationGroupsToCreate": [
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/750123840",
                        "gid://shopify/Location/884687543"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "Canada Zone",
                            "countries": [
                                {
                                    "code": "CA",
                                    "provinces": [
                                        {
                                            "code": "ON"
                                        }
                                    ]
                                }
                            ],
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    },
                                    "weightConditionsToCreate": [
                                        {
                                            "operator": "GREATER_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 0,
                                                "unit": "KILOGRAMS"
                                            }
                                        },
                                        {
                                            "operator": "LESS_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 15,
                                                "unit": "KILOGRAMS"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/415211365"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "USA Zone",
                            "countries": {
                                "code": "US",
                                "provinces": [
                                    {
                                        "code": "CO"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Mexico Zone",
                            "countries": {
                                "code": "MX",
                                "provinces": [
                                    {
                                        "code": "MOR"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "deliveryProfileCreate": {
    "profile": {
      "id": "gid://shopify/DeliveryProfile/933922679",
      "name": "Sample Delivery Profile",
      "profileLocationGroups": [
        {
          "locationGroup": {
            "id": "gid://shopify/DeliveryLocationGroup/982182448",
            "locations": {
              "nodes": [
                {
                  "name": "Ottawa Warehouse",
                  "address": {
                    "country": "Canada"
                  }
                },
                {
                  "name": "Toronto Store",
                  "address": {
                    "country": "Canada"
                  }
                }
              ]
            }
          },
          "locationGroupZones": {
            "edges": [
              {
                "node": {
                  "zone": {
                    "id": "gid://shopify/DeliveryZone/1066475772",
                    "name": "Canada Zone",
                    "countries": [
                      {
                        "code": {
                          "countryCode": "CA"
                        },
                        "provinces": [
                          {
                            "code": "ON"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "locationGroup": {
            "id": "gid://shopify/DeliveryLocationGroup/982182449",
            "locations": {
              "nodes": [
                {
                  "name": "US Store",
                  "address": {
                    "country": "United States"
                  }
                }
              ]
            }
          },
          "locationGroupZones": {
            "edges": [
              {
                "node": {
                  "zone": {
                    "id": "gid://shopify/DeliveryZone/1066475774",
                    "name": "Mexico Zone",
                    "countries": [
                      {
                        "code": {
                          "countryCode": "MX"
                        },
                        "provinces": [
                          {
                            "code": "MOR"
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                "node": {
                  "zone": {
                    "id": "gid://shopify/DeliveryZone/1066475773",
                    "name": "USA Zone",
                    "countries": [
                      {
                        "code": {
                          "countryCode": "US"
                        },
                        "provinces": [
                          {
                            "code": "CO"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### deliveryProfileCreate reference

Examples
--------

Create delivery profile

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20createDeliveryProfile(%24profile%3A%20DeliveryProfileInput!)%20%7B%0A%20%20deliveryProfileCreate(profile%3A%20%24profile)%20%7B%0A%20%20%20%20profile%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20profileLocationGroups%20%7B%0A%20%20%20%20%20%20%20%20locationGroup%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20locations(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20address%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20locationGroupZones(first%3A%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20zone%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20countries%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20provinces%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22profile%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Sample%20Delivery%20Profile%22%2C%0A%20%20%20%20%22locationGroupsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22locationsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FLocation%2F750123840%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FLocation%2F884687543%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22zonesToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Canada%20Zone%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countries%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22CA%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22provinces%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22ON%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22methodDefinitionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Standard%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateDefinition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22weightConditionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22operator%22%3A%20%22GREATER_THAN_OR_EQUAL_TO%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22criteria%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22operator%22%3A%20%22LESS_THAN_OR_EQUAL_TO%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22criteria%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22unit%22%3A%20%22KILOGRAMS%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22locationsToAdd%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FLocation%2F415211365%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22zonesToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22USA%20Zone%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countries%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22US%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22provinces%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22CO%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22methodDefinitionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Standard%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateDefinition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Mexico%20Zone%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countries%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22MX%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22provinces%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22code%22%3A%20%22MOR%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22methodDefinitionsToCreate%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22Standard%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateDefinition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation createDeliveryProfile($profile: DeliveryProfileInput!) {

 deliveryProfileCreate(profile: $profile) {

 profile {

 id

 name

 profileLocationGroups {

 locationGroup {

 id

 locations(first: 5) {

 nodes {

 name

 address {

 country

 }

 }

 }

 }

 locationGroupZones(first: 2) {

 edges {

 node {

 zone {

 id

 name

 countries {

 code {

 countryCode

 }

 provinces {

 code

 }

 }

 }

```
mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
  deliveryProfileCreate(profile: $profile) {
    profile {
      id
      name
      profileLocationGroups {
        locationGroup {
          id
          locations(first: 5) {
            nodes {
              name
              address {
                country
              }
            }
          }
        }
        locationGroupZones(first: 2) {
          edges {
            node {
              zone {
                id
                name
                countries {
                  code {
                    countryCode
                  }
                  provinces {
                    code
                  }
                }
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
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
"query": "mutation createDeliveryProfile($profile: DeliveryProfileInput!) { deliveryProfileCreate(profile: $profile) { profile { id name profileLocationGroups { locationGroup { id locations(first: 5) { nodes { name address { country } } } } locationGroupZones(first: 2) { edges { node { zone { id name countries { code { countryCode } provinces { code } } } } } } } } userErrors { field message } } }",
 "variables": {
    "profile": {
      "name": "Sample Delivery Profile",
      "locationGroupsToCreate": [
        {
          "locationsToAdd": [
            "gid://shopify/Location/750123840",
            "gid://shopify/Location/884687543"
          ],
          "zonesToCreate": [
            {
              "name": "Canada Zone",
              "countries": [
                {
                  "code": "CA",
                  "provinces": [
                    {
                      "code": "ON"
                    }
                  ]
                }
              ],
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  },
                  "weightConditionsToCreate": [
                    {
                      "operator": "GREATER_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 0,
                        "unit": "KILOGRAMS"
                      }
                    },
                    {
                      "operator": "LESS_THAN_OR_EQUAL_TO",
                      "criteria": {
                        "value": 15,
                        "unit": "KILOGRAMS"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "locationsToAdd": [
            "gid://shopify/Location/415211365"
          ],
          "zonesToCreate": [
            {
              "name": "USA Zone",
              "countries": {
                "code": "US",
                "provinces": [
                  {
                    "code": "CO"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            },
            {
              "name": "Mexico Zone",
              "countries": {
                "code": "MX",
                "provinces": [
                  {
                    "code": "MOR"
                  }
                ]
              },
              "methodDefinitionsToCreate": [
                {
                  "name": "Standard",
                  "rateDefinition": {
                    "price": {
                      "amount": 1,
                      "currencyCode": "USD"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "profile": {
            "name": "Sample Delivery Profile",
            "locationGroupsToCreate": [
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/750123840",
                        "gid://shopify/Location/884687543"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "Canada Zone",
                            "countries": [
                                {
                                    "code": "CA",
                                    "provinces": [
                                        {
                                            "code": "ON"
                                        }
                                    ]
                                }
                            ],
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    },
                                    "weightConditionsToCreate": [
                                        {
                                            "operator": "GREATER_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 0,
                                                "unit": "KILOGRAMS"
                                            }
                                        },
                                        {
                                            "operator": "LESS_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 15,
                                                "unit": "KILOGRAMS"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/415211365"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "USA Zone",
                            "countries": {
                                "code": "US",
                                "provinces": [
                                    {
                                        "code": "CO"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Mexico Zone",
                            "countries": {
                                "code": "MX",
                                "provinces": [
                                    {
                                        "code": "MOR"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
      deliveryProfileCreate(profile: $profile) {
        profile {
          id
          name
          profileLocationGroups {
            locationGroup {
              id
              locations(first: 5) {
                nodes {
                  name
                  address {
                    country
                  }
                }
              }
            }
            locationGroupZones(first: 2) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                      }
                      provinces {
                        code
                      }
                    }
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "profile": {
            "name": "Sample Delivery Profile",
            "locationGroupsToCreate": [
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/750123840",
                        "gid://shopify/Location/884687543"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "Canada Zone",
                            "countries": [
                                {
                                    "code": "CA",
                                    "provinces": [
                                        {
                                            "code": "ON"
                                        }
                                    ]
                                }
                            ],
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    },
                                    "weightConditionsToCreate": [
                                        {
                                            "operator": "GREATER_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 0,
                                                "unit": "KILOGRAMS"
                                            }
                                        },
                                        {
                                            "operator": "LESS_THAN_OR_EQUAL_TO",
                                            "criteria": {
                                                "value": 15,
                                                "unit": "KILOGRAMS"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "locationsToAdd": [
                        "gid://shopify/Location/415211365"
                    ],
                    "zonesToCreate": [
                        {
                            "name": "USA Zone",
                            "countries": {
                                "code": "US",
                                "provinces": [
                                    {
                                        "code": "CO"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Mexico Zone",
                            "countries": {
                                "code": "MX",
                                "provinces": [
                                    {
                                        "code": "MOR"
                                    }
                                ]
                            },
                            "methodDefinitionsToCreate": [
                                {
                                    "name": "Standard",
                                    "rateDefinition": {
                                        "price": {
                                            "amount": 1,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
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
  mutation createDeliveryProfile($profile: DeliveryProfileInput!) {
    deliveryProfileCreate(profile: $profile) {
      profile {
        id
        name
        profileLocationGroups {
          locationGroup {
            id
            locations(first: 5) {
              nodes {
                name
                address {
                  country
                }
              }
            }
          }
          locationGroupZones(first: 2) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                    }
                    provinces {
                      code
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "profile": {
    "name": "Sample Delivery Profile",
    "locationGroupsToCreate": [
      {
        "locationsToAdd": [
          "gid://shopify/Location/750123840",
          "gid://shopify/Location/884687543"
        ],
        "zonesToCreate": [
          {
            "name": "Canada Zone",
            "countries": [
              {
                "code": "CA",
                "provinces": [
                  {
                    "code": "ON"
                  }
                ]
              }
            ],
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                },
                "weightConditionsToCreate": [
                  {
                    "operator": "GREATER_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 0,
                      "unit": "KILOGRAMS"
                    }
                  },
                  {
                    "operator": "LESS_THAN_OR_EQUAL_TO",
                    "criteria": {
                      "value": 15,
                      "unit": "KILOGRAMS"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "locationsToAdd": [
          "gid://shopify/Location/415211365"
        ],
        "zonesToCreate": [
          {
            "name": "USA Zone",
            "countries": {
              "code": "US",
              "provinces": [
                {
                  "code": "CO"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          },
          {
            "name": "Mexico Zone",
            "countries": {
              "code": "MX",
              "provinces": [
                {
                  "code": "MOR"
                }
              ]
            },
            "methodDefinitionsToCreate": [
              {
                "name": "Standard",
                "rateDefinition": {
                  "price": {
                    "amount": 1,
                    "currencyCode": "USD"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

⌄

⌄

⌄

⌄

{

"profile": {

"name": "Sample Delivery Profile",

"locationGroupsToCreate": [

{

"locationsToAdd": [

"gid://shopify/Location/750123840",

"gid://shopify/Location/884687543"

],

"zonesToCreate": [

{

"name": "Canada Zone",

"countries": [

{

"code": "CA",

"provinces": [

{

"code": "ON"

}

]

}

],

"methodDefinitionsToCreate": [

{

"name": "Standard",

"rateDefinition": {

"price": {

"amount": 1,

"currencyCode": "USD"

}

},

"weightConditionsToCreate": [

{

"operator": "GREATER_THAN_OR_EQUAL_TO",

"criteria": {

"value": 0,

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

⌄

⌄

⌄

⌄

⌄

⌄

{

"deliveryProfileCreate": {

"profile": {

"id": "gid://shopify/DeliveryProfile/933922679",

"name": "Sample Delivery Profile",

"profileLocationGroups": [

{

"locationGroup": {

"id": "gid://shopify/DeliveryLocationGroup/982182448",

"locations": {

"nodes": [

{

"name": "Ottawa Warehouse",

"address": {

"country": "Canada"

}

},

{

"name": "Toronto Store",

"address": {

"country": "Canada"

}

}

]

}

},

"locationGroupZones": {

"edges": [

{

"node": {

"zone": {

"id": "gid://shopify/DeliveryZone/1066475772",

"name": "Canada Zone",

"countries": [

{

"code": {


---
*Content truncated at "Updates" section*