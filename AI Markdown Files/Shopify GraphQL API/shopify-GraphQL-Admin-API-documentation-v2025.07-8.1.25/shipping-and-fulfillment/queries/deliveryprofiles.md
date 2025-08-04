---
title: "deliveryProfiles"
description: "Shopify GraphQL Admin API documentation for deliveryprofiles"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles"
extraction_method: "jina"
sections: ['Shipping and fulfillment', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: deliveryProfiles - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles

Markdown Content:
deliveryProfiles - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#main-content)

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

[Anchor to deliveryProfiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#top)
delivery Profiles
=================

query

Returns a list of saved delivery profiles.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments)
DeliveryProfileConnection arguments
-----------------------------------

•[DeliveryProfileConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to merchantOwnedOnly](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments-merchantOwnedOnly)merchant Owned Only

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

If `true`, returns only delivery profiles that were created by the merchant.

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#returns-edges)edges

•[[Delivery Profile Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#returns-nodes)nodes

•[[Delivery Profile!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

non-null

A list of nodes that are contained in DeliveryProfileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show fields

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryprofiles#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Receive a list of all ShippingZones

#### Query

```graphql
query DeliveryZoneList {
  deliveryProfiles(first: 10) {
    edges {
      node {
        id
        profileLocationGroups {
          locationGroup {
            id
          }
          locationGroupZones(first: 10) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                      restOfWorld
                    }
                    provinces {
                      name
                      code
                    }
                  }
                }
                methodDefinitions(first: 10) {
                  edges {
                    node {
                      id
                      active
                      description
                      methodConditions {
                        field
                        operator
                        conditionCriteria {
                          __typename
                          ... on MoneyV2 {
                            amount
                            currencyCode
                          }
                          ... on Weight {
                            unit
                            value
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query DeliveryZoneList { deliveryProfiles(first: 10) { edges { node { id profileLocationGroups { locationGroup { id } locationGroupZones(first: 10) { edges { node { zone { id name countries { code { countryCode restOfWorld } provinces { name code } } } methodDefinitions(first: 10) { edges { node { id active description methodConditions { field operator conditionCriteria { __typename ... on MoneyV2 { amount currencyCode } ... on Weight { unit value } } } } } } } } } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DeliveryZoneList {
    deliveryProfiles(first: 10) {
      edges {
        node {
          id
          profileLocationGroups {
            locationGroup {
              id
            }
            locationGroupZones(first: 10) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                        restOfWorld
                      }
                      provinces {
                        name
                        code
                      }
                    }
                  }
                  methodDefinitions(first: 10) {
                    edges {
                      node {
                        id
                        active
                        description
                        methodConditions {
                          field
                          operator
                          conditionCriteria {
                            __typename
                            ... on MoneyV2 {
                              amount
                              currencyCode
                            }
                            ... on Weight {
                              unit
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
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
  query DeliveryZoneList {
    deliveryProfiles(first: 10) {
      edges {
        node {
          id
          profileLocationGroups {
            locationGroup {
              id
            }
            locationGroupZones(first: 10) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                        restOfWorld
                      }
                      provinces {
                        name
                        code
                      }
                    }
                  }
                  methodDefinitions(first: 10) {
                    edges {
                      node {
                        id
                        active
                        description
                        methodConditions {
                          field
                          operator
                          conditionCriteria {
                            __typename
                            ... on MoneyV2 {
                              amount
                              currencyCode
                            }
                            ... on Weight {
                              unit
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query DeliveryZoneList {
    deliveryProfiles(first: 10) {
      edges {
        node {
          id
          profileLocationGroups {
            locationGroup {
              id
            }
            locationGroupZones(first: 10) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                        restOfWorld
                      }
                      provinces {
                        name
                        code
                      }
                    }
                  }
                  methodDefinitions(first: 10) {
                    edges {
                      node {
                        id
                        active
                        description
                        methodConditions {
                          field
                          operator
                          conditionCriteria {
                            __typename
                            ... on MoneyV2 {
                              amount
                              currencyCode
                            }
                            ... on Weight {
                              unit
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "deliveryProfiles": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/DeliveryProfile/28404419",
          "profileLocationGroups": [
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/42565096"
              },
              "locationGroupZones": {
                "edges": [
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/600655460",
                        "name": "Ottawa South",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "CA",
                              "restOfWorld": false
                            },
                            "provinces": [
                              {
                                "name": "Ontario",
                                "code": "ON"
                              }
                            ]
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/765028017",
                        "name": "Rest of World",
                        "countries": [
                          {
                            "code": {
                              "countryCode": null,
                              "restOfWorld": true
                            },
                            "provinces": []
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": [
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/341096212",
                              "active": true,
                              "description": "Use this when shipping a footwear",
                              "methodConditions": []
                            }
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
                "id": "gid://shopify/DeliveryLocationGroup/311517628"
              },
              "locationGroupZones": {
                "edges": []
              }
            }
          ]
        }
      },
      {
        "node": {
          "id": "gid://shopify/DeliveryProfile/142458073",
          "profileLocationGroups": [
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/955592432"
              },
              "locationGroupZones": {
                "edges": [
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/472354800",
                        "name": "Downtown Montreal",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "CA",
                              "restOfWorld": false
                            },
                            "provinces": [
                              {
                                "name": "Quebec",
                                "code": "QC"
                              }
                            ]
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/132414656",
                        "name": "Downtown Ottawa",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "CA",
                              "restOfWorld": false
                            },
                            "provinces": [
                              {
                                "name": "Ontario",
                                "code": "ON"
                              }
                            ]
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": [
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/2482324",
                              "active": true,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": [
                                {
                                  "field": "TOTAL_WEIGHT",
                                  "operator": "LESS_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "Weight",
                                    "unit": "POUNDS",
                                    "value": 19.9
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/7712587",
                              "active": false,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": []
                            }
                          },
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/164614040",
                              "active": true,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": [
                                {
                                  "field": "TOTAL_WEIGHT",
                                  "operator": "LESS_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "Weight",
                                    "unit": "POUNDS",
                                    "value": 10
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/183895045",
                              "active": true,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": [
                                {
                                  "field": "TOTAL_WEIGHT",
                                  "operator": "GREATER_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "Weight",
                                    "unit": "POUNDS",
                                    "value": 20
                                  }
                                },
                                {
                                  "field": "TOTAL_WEIGHT",
                                  "operator": "LESS_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "Weight",
                                    "unit": "POUNDS",
                                    "value": 40
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/213030275",
                              "active": false,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": [
                                {
                                  "field": "TOTAL_WEIGHT",
                                  "operator": "GREATER_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "Weight",
                                    "unit": "POUNDS",
                                    "value": 40.01
                                  }
                                },
                                {
                                  "field": "TOTAL_WEIGHT",
                                  "operator": "LESS_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "Weight",
                                    "unit": "POUNDS",
                                    "value": 60
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/573089753",
                              "active": false,
                              "description": "Carrier service api rates",
                              "methodConditions": []
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/881877111",
                        "name": "Germany",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "DE",
                              "restOfWorld": false
                            },
                            "provinces": []
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/813997144",
                        "name": "Rest of World",
                        "countries": [
                          {
                            "code": {
                              "countryCode": null,
                              "restOfWorld": true
                            },
                            "provinces": []
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            },
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/397370199"
              },
              "locationGroupZones": {
                "edges": [
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/283164273",
                        "name": "Argentina",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "AR",
                              "restOfWorld": false
                            },
                            "provinces": [
                              {
                                "name": "Buenos Aires",
                                "code": "B"
                              }
                            ]
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/599563131",
                        "name": "US zone 1",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "US",
                              "restOfWorld": false
                            },
                            "provinces": []
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": [
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/159353577",
                              "active": true,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": [
                                {
                                  "field": "TOTAL_PRICE",
                                  "operator": "GREATER_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "MoneyV2",
                                    "amount": "50.0",
                                    "currencyCode": "USD"
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/206705707",
                              "active": false,
                              "description": "Use this when shipping a snowboard",
                              "methodConditions": [
                                {
                                  "field": "TOTAL_PRICE",
                                  "operator": "GREATER_THAN_OR_EQUAL_TO",
                                  "conditionCriteria": {
                                    "__typename": "MoneyV2",
                                    "amount": "100.0",
                                    "currencyCode": "USD"
                                  }
                                }
                              ]
                            }
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
                "id": "gid://shopify/DeliveryLocationGroup/311517628"
              },
              "locationGroupZones": {
                "edges": []
              }
            }
          ]
        }
      },
      {
        "node": {
          "id": "gid://shopify/DeliveryProfile/426406120",
          "profileLocationGroups": [
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/865330255"
              },
              "locationGroupZones": {
                "edges": [
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/846446649",
                        "name": "Rest of World",
                        "countries": []
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "node": {
          "id": "gid://shopify/DeliveryProfile/593363170",
          "profileLocationGroups": [
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/311517628"
              },
              "locationGroupZones": {
                "edges": []
              }
            },
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/955592432"
              },
              "locationGroupZones": {
                "edges": [
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/161697132",
                        "name": "Canada",
                        "countries": [
                          {
                            "code": {
                              "countryCode": "CA",
                              "restOfWorld": false
                            },
                            "provinces": [
                              {
                                "name": "Ontario",
                                "code": "ON"
                              }
                            ]
                          }
                        ]
                      },
                      "methodDefinitions": {
                        "edges": [
                          {
                            "node": {
                              "id": "gid://shopify/DeliveryMethodDefinition/718143985",
                              "active": true,
                              "description": "Standard method for shipping a snowboard",
                              "methodConditions": []
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "node": {
          "id": "gid://shopify/DeliveryProfile/933922677",
          "profileLocationGroups": [
            {
              "locationGroup": {
                "id": "gid://shopify/DeliveryLocationGroup/562374560"
              },
              "locationGroupZones": {
                "edges": [
                  {
                    "node": {
                      "zone": {
                        "id": "gid://shopify/DeliveryZone/1066475769",
                        "name": "Rest of World",
                        "countries": []
                      },
                      "methodDefinitions": {
                        "edges": []
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
``` 

Receive a list of all ShippingZones
-----------------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20DeliveryZoneList%20%7B%0A%20%20deliveryProfiles(first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20profileLocationGroups%20%7B%0A%20%20%20%20%20%20%20%20%20%20locationGroup%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20locationGroupZones(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20zone%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20countries%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20restOfWorld%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20provinces%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20code%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20methodDefinitions(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20active%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20methodConditions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20field%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20operator%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20conditionCriteria%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20MoneyV2%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%20on%20Weight%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unit%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query DeliveryZoneList {

 deliveryProfiles(first: 10) {

 edges {

 node {

 id

 profileLocationGroups {

 locationGroup {

 id

 }

 locationGroupZones(first: 10) {

 edges {

 node {

 zone {

 id

 name

 countries {

 code {

 countryCode

 restOfWorld

 }

 provinces {

 name

 code

 }

 }

 }

 methodDefinitions(first: 10) {

 edges {

 node {

 id

 active

 description

 methodConditions {

 field

 operator

 conditionCriteria {

 __typename

 ... on MoneyV2 {

 amount

 currencyCode

 }

 ... on Weight {

 unit

 value

 }

 }

 }

 }

 }

 }

 }

 }

 }

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query DeliveryZoneList {
  deliveryProfiles(first: 10) {
    edges {
      node {
        id
        profileLocationGroups {
          locationGroup {
            id
          }
          locationGroupZones(first: 10) {
            edges {
              node {
                zone {
                  id
                  name
                  countries {
                    code {
                      countryCode
                      restOfWorld
                    }
                    provinces {
                      name
                      code
                    }
                  }
                }
                methodDefinitions(first: 10) {
                  edges {
                    node {
                      id
                      active
                      description
                      methodConditions {
                        field
                        operator
                        conditionCriteria {
                          __typename
                          ... on MoneyV2 {
                            amount
                            currencyCode
                          }
                          ... on Weight {
                            unit
                            value
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
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
"query": "query DeliveryZoneList { deliveryProfiles(first: 10) { edges { node { id profileLocationGroups { locationGroup { id } locationGroupZones(first: 10) { edges { node { zone { id name countries { code { countryCode restOfWorld } provinces { name code } } } methodDefinitions(first: 10) { edges { node { id active description methodConditions { field operator conditionCriteria { __typename ... on MoneyV2 { amount currencyCode } ... on Weight { unit value } } } } } } } } } } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query DeliveryZoneList {
    deliveryProfiles(first: 10) {
      edges {
        node {
          id
          profileLocationGroups {
            locationGroup {
              id
            }
            locationGroupZones(first: 10) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                        restOfWorld
                      }
                      provinces {
                        name
                        code
                      }
                    }
                  }
                  methodDefinitions(first: 10) {
                    edges {
                      node {
                        id
                        active
                        description
                        methodConditions {
                          field
                          operator
                          conditionCriteria {
                            __typename
                            ... on MoneyV2 {
                              amount
                              currencyCode
                            }
                            ... on Weight {
                              unit
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query DeliveryZoneList {
    deliveryProfiles(first: 10) {
      edges {
        node {
          id
          profileLocationGroups {
            locationGroup {
              id
            }
            locationGroupZones(first: 10) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                        restOfWorld
                      }
                      provinces {
                        name
                        code
                      }
                    }
                  }
                  methodDefinitions(first: 10) {
                    edges {
                      node {
                        id
                        active
                        description
                        methodConditions {
                          field
                          operator
                          conditionCriteria {
                            __typename
                            ... on MoneyV2 {
                              amount
                              currencyCode
                            }
                            ... on Weight {
                              unit
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
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
  query DeliveryZoneList {
    deliveryProfiles(first: 10) {
      edges {
        node {
          id
          profileLocationGroups {
            locationGroup {
              id
            }
            locationGroupZones(first: 10) {
              edges {
                node {
                  zone {
                    id
                    name
                    countries {
                      code {
                        countryCode
                        restOfWorld
                      }
                      provinces {
                        name
                        code
                      }
                    }
                  }
                  methodDefinitions(first: 10) {
                    edges {
                      node {
                        id
                        active
                        description
                        methodConditions {
                          field
                          operator
                          conditionCriteria {
                            __typename
                            ... on MoneyV2 {
                              amount
                              currencyCode
                            }
                            ... on Weight {
                              unit
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
```

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

{

"deliveryProfiles": {

"edges": [

{

"node": {

"id": "gid://shopify/DeliveryProfile/28404419",

"profileLocationGroups": [

{

"locationGroup": {

"id": "gid://shopify/DeliveryLocationGroup/42565096"

},

"locationGroupZones": {

"edges": [

{

"node": {

"zone": {

"id": "gid://shopify/DeliveryZone/600655460",

"name": "Ottawa South",

"countries": [

{

"code": {

"countryCode": "CA",

"restOfWorld": false

},

"provinces": [

{

"name": "Ontario",

"code": "ON"

}

]

}

]

},

"methodDefinitions": {

"edges": []

}


---
*Content truncated at "Updates" section*