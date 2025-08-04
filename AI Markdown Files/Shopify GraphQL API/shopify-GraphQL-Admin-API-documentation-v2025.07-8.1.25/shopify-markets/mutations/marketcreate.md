---
title: "marketCreate"
description: "Shopify GraphQL Admin API documentation for marketcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate

Markdown Content:
marketCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#main-content)

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
*   Shipping and fulfillment   
*   
Shopify Markets

    *   Queries   
    *   
Mutations

        *   [backup Region Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/backupregionupdate)
        *   [market Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate)
        *   [market Currency Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcurrencysettingsupdate)
        *   [market Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketdelete)
        *   [market Region Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregiondelete)
        *   [market Regions Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionscreate)
        *   [market Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate)
        *   [market Web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencecreate)
        *   [market Web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresencedelete)
        *   [market Web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketwebpresenceupdate)
        *   [web Presence Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencecreate)
        *   [web Presence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresenceupdate)

    *   Objects   

*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to marketCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#top)
market Create
=============

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Creates a new market.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#arguments-input)input

•[Market Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput)

required

The properties of the new market.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#returns)Market Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#returns-market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

The market object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketcreate#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a B2B market for all company locations located in the United States

#### Description

Create a B2B market for all company locations located in the United States. The market includes all existing and future company locations located in the United States. This market type is currently only available in the dev preview.

#### Query

```graphql
mutation marketCreate($input: MarketCreateInput!) {
  marketCreate(input: $input) {
    market {
      id
      handle
      status
      conditions {
        companyLocationsCondition {
          companyLocations(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
      currencySettings {
        baseCurrency {
          currencyCode
        }
        localCurrencies
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "name": "Company Location Market",
    "handle": "Company-Location",
    "enabled": true,
    "conditions": {
      "regionsCondition": {
        "regions": [
          {
            "countryCode": "US"
          }
        ]
      },
      "companyLocationsCondition": {
        "applicationLevel": "ALL"
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
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
"query": "mutation marketCreate($input: MarketCreateInput!) { marketCreate(input: $input) { market { id handle status conditions { companyLocationsCondition { companyLocations(first: 10) { edges { node { id } } } } } currencySettings { baseCurrency { currencyCode } localCurrencies } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "name": "Company Location Market",
      "handle": "Company-Location",
      "enabled": true,
      "conditions": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "US"
            }
          ]
        },
        "companyLocationsCondition": {
          "applicationLevel": "ALL"
        }
      },
      "currencySettings": {
        "baseCurrency": "USD",
        "localCurrencies": false
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          companyLocationsCondition {
            companyLocations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "Company Location Market",
            "handle": "Company-Location",
            "enabled": true,
            "conditions": {
                "regionsCondition": {
                    "regions": [
                        {
                            "countryCode": "US"
                        }
                    ]
                },
                "companyLocationsCondition": {
                    "applicationLevel": "ALL"
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
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
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          companyLocationsCondition {
            companyLocations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "Company Location Market",
    "handle": "Company-Location",
    "enabled": true,
    "conditions": {
      "regionsCondition": {
        "regions": [
          {
            "countryCode": "US"
          }
        ]
      },
      "companyLocationsCondition": {
        "applicationLevel": "ALL"
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketCreate($input: MarketCreateInput!) {
      marketCreate(input: $input) {
        market {
          id
          handle
          status
          conditions {
            companyLocationsCondition {
              companyLocations(first: 10) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
          currencySettings {
            baseCurrency {
              currencyCode
            }
            localCurrencies
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "Company Location Market",
            "handle": "Company-Location",
            "enabled": true,
            "conditions": {
                "regionsCondition": {
                    "regions": [
                        {
                            "countryCode": "US"
                        }
                    ]
                },
                "companyLocationsCondition": {
                    "applicationLevel": "ALL"
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
        }
    },
  },
});
``` #### Response

```json
{
  "marketCreate": {
    "market": {
      "id": "gid://shopify/Market/1068177798",
      "handle": "company-location",
      "status": "ACTIVE",
      "conditions": {
        "companyLocationsCondition": {
          "companyLocations": {
            "edges": []
          }
        }
      },
      "currencySettings": {
        "baseCurrency": {
          "currencyCode": "USD"
        },
        "localCurrencies": false
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a B2B market with a specific currency and price inclusions

#### Description

Create a B2B market for a specific company location with a specific currency and price inclusions. This market type is currently only available in the dev preview.

#### Query

```graphql
mutation marketCreate($input: MarketCreateInput!) {
  marketCreate(input: $input) {
    market {
      id
      handle
      status
      conditions {
        companyLocationsCondition {
          companyLocations(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
      currencySettings {
        baseCurrency {
          currencyCode
        }
        localCurrencies
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "name": "Company Location Market",
    "handle": "company-location-market",
    "enabled": true,
    "conditions": {
      "companyLocationsCondition": {
        "companyLocationIds": [
          "gid://shopify/CompanyLocation/423757199"
        ]
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
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
"query": "mutation marketCreate($input: MarketCreateInput!) { marketCreate(input: $input) { market { id handle status conditions { companyLocationsCondition { companyLocations(first: 10) { edges { node { id } } } } } currencySettings { baseCurrency { currencyCode } localCurrencies } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "name": "Company Location Market",
      "handle": "company-location-market",
      "enabled": true,
      "conditions": {
        "companyLocationsCondition": {
          "companyLocationIds": [
            "gid://shopify/CompanyLocation/423757199"
          ]
        }
      },
      "currencySettings": {
        "baseCurrency": "USD",
        "localCurrencies": false
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          companyLocationsCondition {
            companyLocations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "Company Location Market",
            "handle": "company-location-market",
            "enabled": true,
            "conditions": {
                "companyLocationsCondition": {
                    "companyLocationIds": [
                        "gid://shopify/CompanyLocation/423757199"
                    ]
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
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
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          companyLocationsCondition {
            companyLocations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "Company Location Market",
    "handle": "company-location-market",
    "enabled": true,
    "conditions": {
      "companyLocationsCondition": {
        "companyLocationIds": [
          "gid://shopify/CompanyLocation/423757199"
        ]
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketCreate($input: MarketCreateInput!) {
      marketCreate(input: $input) {
        market {
          id
          handle
          status
          conditions {
            companyLocationsCondition {
              companyLocations(first: 10) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
          currencySettings {
            baseCurrency {
              currencyCode
            }
            localCurrencies
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "Company Location Market",
            "handle": "company-location-market",
            "enabled": true,
            "conditions": {
                "companyLocationsCondition": {
                    "companyLocationIds": [
                        "gid://shopify/CompanyLocation/423757199"
                    ]
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
        }
    },
  },
});
``` #### Response

```json
{
  "marketCreate": {
    "market": {
      "id": "gid://shopify/Market/1068177800",
      "handle": "company-location-market",
      "status": "ACTIVE",
      "conditions": {
        "companyLocationsCondition": {
          "companyLocations": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/CompanyLocation/423757199"
                }
              }
            ]
          }
        }
      },
      "currencySettings": {
        "baseCurrency": {
          "currencyCode": "USD"
        },
        "localCurrencies": false
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a North America market with a catalog and web presences

#### Description

Create a region market matching buyers located in the United States, Canada, and Mexico.

#### Query

```graphql
mutation marketCreate($input: MarketCreateInput!) {
  marketCreate(input: $input) {
    market {
      id
      handle
      status
      conditions {
        regionsCondition {
          regions(first: 10) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
      catalogs(first: 10) {
        edges {
          node {
            id
          }
        }
      }
      webPresences(first: 10) {
        edges {
          node {
            domain {
              id
            }
            subfolderSuffix
          }
        }
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "name": "North America Market",
    "handle": "NA",
    "enabled": true,
    "conditions": {
      "regionsCondition": {
        "regions": [
          {
            "countryCode": "US"
          },
          {
            "countryCode": "CA"
          },
          {
            "countryCode": "MX"
          }
        ]
      }
    },
    "catalogs": [
      "gid://shopify/Catalog/307400570"
    ],
    "webPresences": [
      "gid://shopify/MarketWebPresence/1068177692"
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
"query": "mutation marketCreate($input: MarketCreateInput!) { marketCreate(input: $input) { market { id handle status conditions { regionsCondition { regions(first: 10) { edges { node { id name } } } } } catalogs(first: 10) { edges { node { id } } } webPresences(first: 10) { edges { node { domain { id } subfolderSuffix } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "name": "North America Market",
      "handle": "NA",
      "enabled": true,
      "conditions": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "US"
            },
            {
              "countryCode": "CA"
            },
            {
              "countryCode": "MX"
            }
          ]
        }
      },
      "catalogs": [
        "gid://shopify/Catalog/307400570"
      ],
      "webPresences": [
        "gid://shopify/MarketWebPresence/1068177692"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          regionsCondition {
            regions(first: 10) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
        catalogs(first: 10) {
          edges {
            node {
              id
            }
          }
        }
        webPresences(first: 10) {
          edges {
            node {
              domain {
                id
              }
              subfolderSuffix
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "North America Market",
            "handle": "NA",
            "enabled": true,
            "conditions": {
                "regionsCondition": {
                    "regions": [
                        {
                            "countryCode": "US"
                        },
                        {
                            "countryCode": "CA"
                        },
                        {
                            "countryCode": "MX"
                        }
                    ]
                }
            },
            "catalogs": [
                "gid://shopify/Catalog/307400570"
            ],
            "webPresences": [
                "gid://shopify/MarketWebPresence/1068177692"
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
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          regionsCondition {
            regions(first: 10) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
        catalogs(first: 10) {
          edges {
            node {
              id
            }
          }
        }
        webPresences(first: 10) {
          edges {
            node {
              domain {
                id
              }
              subfolderSuffix
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "North America Market",
    "handle": "NA",
    "enabled": true,
    "conditions": {
      "regionsCondition": {
        "regions": [
          {
            "countryCode": "US"
          },
          {
            "countryCode": "CA"
          },
          {
            "countryCode": "MX"
          }
        ]
      }
    },
    "catalogs": [
      "gid://shopify/Catalog/307400570"
    ],
    "webPresences": [
      "gid://shopify/MarketWebPresence/1068177692"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketCreate($input: MarketCreateInput!) {
      marketCreate(input: $input) {
        market {
          id
          handle
          status
          conditions {
            regionsCondition {
              regions(first: 10) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
          catalogs(first: 10) {
            edges {
              node {
                id
              }
            }
          }
          webPresences(first: 10) {
            edges {
              node {
                domain {
                  id
                }
                subfolderSuffix
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "North America Market",
            "handle": "NA",
            "enabled": true,
            "conditions": {
                "regionsCondition": {
                    "regions": [
                        {
                            "countryCode": "US"
                        },
                        {
                            "countryCode": "CA"
                        },
                        {
                            "countryCode": "MX"
                        }
                    ]
                }
            },
            "catalogs": [
                "gid://shopify/Catalog/307400570"
            ],
            "webPresences": [
                "gid://shopify/MarketWebPresence/1068177692"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "marketCreate": {
    "market": {
      "id": "gid://shopify/Market/1068177801",
      "handle": "na",
      "status": "ACTIVE",
      "conditions": {
        "regionsCondition": {
          "regions": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/MarketRegionCountry/397370199",
                  "name": "United States"
                }
              },
              {
                "node": {
                  "id": "gid://shopify/MarketRegionCountry/948873163",
                  "name": "Canada"
                }
              },
              {
                "node": {
                  "id": "gid://shopify/MarketRegionCountry/1072830732",
                  "name": "Mexico"
                }
              }
            ]
          }
        }
      },
      "catalogs": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/MarketCatalog/307400570"
            }
          }
        ]
      },
      "webPresences": {
        "edges": [
          {
            "node": {
              "domain": {
                "id": "gid://shopify/Domain/1069626402"
              },
              "subfolderSuffix": null
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a POS market for all locations

#### Description

Create a POS market for all locations. The market includes all existing and future locations. This market type is currently only available in the dev preview.

#### Query

```graphql
mutation marketCreate($input: MarketCreateInput!) {
  marketCreate(input: $input) {
    market {
      id
      handle
      status
      conditions {
        locationsCondition {
          locations(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
      currencySettings {
        baseCurrency {
          currencyCode
        }
        localCurrencies
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "name": "All POS Market",
    "handle": "all-pos-market",
    "enabled": true,
    "conditions": {
      "locationsCondition": {
        "applicationLevel": "ALL"
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
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
"query": "mutation marketCreate($input: MarketCreateInput!) { marketCreate(input: $input) { market { id handle status conditions { locationsCondition { locations(first: 10) { edges { node { id } } } } } currencySettings { baseCurrency { currencyCode } localCurrencies } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "name": "All POS Market",
      "handle": "all-pos-market",
      "enabled": true,
      "conditions": {
        "locationsCondition": {
          "applicationLevel": "ALL"
        }
      },
      "currencySettings": {
        "baseCurrency": "USD",
        "localCurrencies": false
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          locationsCondition {
            locations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "All POS Market",
            "handle": "all-pos-market",
            "enabled": true,
            "conditions": {
                "locationsCondition": {
                    "applicationLevel": "ALL"
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
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
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          locationsCondition {
            locations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "All POS Market",
    "handle": "all-pos-market",
    "enabled": true,
    "conditions": {
      "locationsCondition": {
        "applicationLevel": "ALL"
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketCreate($input: MarketCreateInput!) {
      marketCreate(input: $input) {
        market {
          id
          handle
          status
          conditions {
            locationsCondition {
              locations(first: 10) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
          currencySettings {
            baseCurrency {
              currencyCode
            }
            localCurrencies
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "All POS Market",
            "handle": "all-pos-market",
            "enabled": true,
            "conditions": {
                "locationsCondition": {
                    "applicationLevel": "ALL"
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
        }
    },
  },
});
``` #### Response

```json
{
  "marketCreate": {
    "market": {
      "id": "gid://shopify/Market/1068177799",
      "handle": "all-pos-market",
      "status": "ACTIVE",
      "conditions": {
        "locationsCondition": {
          "locations": {
            "edges": []
          }
        }
      },
      "currencySettings": {
        "baseCurrency": {
          "currencyCode": "USD"
        },
        "localCurrencies": false
      }
    },
    "userErrors": []
  }
}
``` 
*   ### marketCreate reference

Examples
--------

Create a B2B market for all company locations located in the United States

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketCreate(%24input%3A%20MarketCreateInput!)%20%7B%0A%20%20marketCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20market%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20conditions%20%7B%0A%20%20%20%20%20%20%20%20companyLocationsCondition%20%7B%0A%20%20%20%20%20%20%20%20%20%20companyLocations(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20currencySettings%20%7B%0A%20%20%20%20%20%20%20%20baseCurrency%20%7B%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20localCurrencies%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Company%20Location%20Market%22%2C%0A%20%20%20%20%22handle%22%3A%20%22Company-Location%22%2C%0A%20%20%20%20%22enabled%22%3A%20true%2C%0A%20%20%20%20%22conditions%22%3A%20%7B%0A%20%20%20%20%20%20%22regionsCondition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22regions%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22countryCode%22%3A%20%22US%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22companyLocationsCondition%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22applicationLevel%22%3A%20%22ALL%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22currencySettings%22%3A%20%7B%0A%20%20%20%20%20%20%22baseCurrency%22%3A%20%22USD%22%2C%0A%20%20%20%20%20%20%22localCurrencies%22%3A%20false%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketCreate($input: MarketCreateInput!) {

 marketCreate(input: $input) {

 market {

 id

 handle

 status

 conditions {

 companyLocationsCondition {

 companyLocations(first: 10) {

 edges {

 node {

 id

 }

 }

 }

 }

 }

 currencySettings {

 baseCurrency {

 currencyCode

 }

 localCurrencies

 }

 }

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

```
mutation marketCreate($input: MarketCreateInput!) {
  marketCreate(input: $input) {
    market {
      id
      handle
      status
      conditions {
        companyLocationsCondition {
          companyLocations(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
      currencySettings {
        baseCurrency {
          currencyCode
        }
        localCurrencies
      }
    }
    userErrors {
      field
      message
      code
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
"query": "mutation marketCreate($input: MarketCreateInput!) { marketCreate(input: $input) { market { id handle status conditions { companyLocationsCondition { companyLocations(first: 10) { edges { node { id } } } } } currencySettings { baseCurrency { currencyCode } localCurrencies } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "name": "Company Location Market",
      "handle": "Company-Location",
      "enabled": true,
      "conditions": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "US"
            }
          ]
        },
        "companyLocationsCondition": {
          "applicationLevel": "ALL"
        }
      },
      "currencySettings": {
        "baseCurrency": "USD",
        "localCurrencies": false
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          companyLocationsCondition {
            companyLocations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "name": "Company Location Market",
            "handle": "Company-Location",
            "enabled": true,
            "conditions": {
                "regionsCondition": {
                    "regions": [
                        {
                            "countryCode": "US"
                        }
                    ]
                },
                "companyLocationsCondition": {
                    "applicationLevel": "ALL"
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
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
    "query": `mutation marketCreate($input: MarketCreateInput!) {
      marketCreate(input: $input) {
        market {
          id
          handle
          status
          conditions {
            companyLocationsCondition {
              companyLocations(first: 10) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
          currencySettings {
            baseCurrency {
              currencyCode
            }
            localCurrencies
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "name": "Company Location Market",
            "handle": "Company-Location",
            "enabled": true,
            "conditions": {
                "regionsCondition": {
                    "regions": [
                        {
                            "countryCode": "US"
                        }
                    ]
                },
                "companyLocationsCondition": {
                    "applicationLevel": "ALL"
                }
            },
            "currencySettings": {
                "baseCurrency": "USD",
                "localCurrencies": false
            }
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
  mutation marketCreate($input: MarketCreateInput!) {
    marketCreate(input: $input) {
      market {
        id
        handle
        status
        conditions {
          companyLocationsCondition {
            companyLocations(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
        currencySettings {
          baseCurrency {
            currencyCode
          }
          localCurrencies
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "name": "Company Location Market",
    "handle": "Company-Location",
    "enabled": true,
    "conditions": {
      "regionsCondition": {
        "regions": [
          {
            "countryCode": "US"
          }
        ]
      },
      "companyLocationsCondition": {
        "applicationLevel": "ALL"
      }
    },
    "currencySettings": {
      "baseCurrency": "USD",
      "localCurrencies": false
    }
  }
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"input": {

"name": "Company Location Market",

"handle": "Company-Location",

"enabled": true,

"conditions": {

"regionsCondition": {

"regions": [

{

"countryCode": "US"

}

]

},

"companyLocationsCondition": {

"applicationLevel": "ALL"

}

},

"currencySettings": {

"baseCurrency": "USD",

"localCurrencies": false

}

}

}

Hide content

Response
--------

JSON

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"marketCreate": {

"market": {

"id": "gid://shopify/Market/1068177798",

"handle": "company-location",

"status": "ACTIVE",

"conditions": {

"companyLocationsCondition": {

"companyLocations": {

"edges": []

}

}

},

"currencySettings": {

"baseCurrency": {

"currencyCode": "USD"

},

"localCurrencies": false

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*