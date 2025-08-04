---
title: "marketUpdate"
description: "Shopify GraphQL Admin API documentation for marketupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate"
extraction_method: "jina"
sections: ['Shopify Markets', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate

Markdown Content:
marketUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#main-content)

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

[Anchor to marketUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#top)
market Update
=============

mutation

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Updates the properties of a market.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the market to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#arguments-input)input

•[Market Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput)

required

The properties to update.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#returns)Market Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to market](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#returns-market)market

•[Market](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

The market object.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketupdate#returns-userErrors)user Errors

•[[Market User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a market status to make it draft

#### Description

A draft market never matches any buyers. You can toggle its status to make it active or inactive.

#### Query

```graphql
mutation marketUpdate($input: MarketUpdateInput!) {
  marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "status": "DRAFT"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketUpdate($input: MarketUpdateInput!) { marketUpdate(id: \"gid://shopify/Market/73827535\", input: $input) { market { id handle status conditions { regionsCondition { regions(first: 10) { edges { node { id name } } } } } currencySettings { baseCurrency { currencyCode } localCurrencies } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "status": "DRAFT"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "status": "DRAFT"
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
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "status": "DRAFT"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketUpdate($input: MarketUpdateInput!) {
      marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "status": "DRAFT"
        }
    },
  },
});
``` #### Response

```json
{
  "marketUpdate": {
    "market": {
      "id": "gid://shopify/Market/73827535",
      "handle": "us",
      "status": "DRAFT",
      "conditions": {
        "regionsCondition": {
          "regions": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/MarketRegionCountry/397370199",
                  "name": "United States"
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
*   ### Update a market to add a new catalog

#### Description

A market can have multiple catalogs. This example shows how to add a new catalog to a market.

#### Query

```graphql
mutation marketUpdate($input: MarketUpdateInput!) {
  marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "catalogsToAdd": [
      "gid://shopify/Catalog/307400570"
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
"query": "mutation marketUpdate($input: MarketUpdateInput!) { marketUpdate(id: \"gid://shopify/Market/73827535\", input: $input) { market { id handle status conditions { regionsCondition { regions(first: 10) { edges { node { id name } } } } } catalogs(first: 10) { edges { node { id } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "catalogsToAdd": [
        "gid://shopify/Catalog/307400570"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "catalogsToAdd": [
                "gid://shopify/Catalog/307400570"
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
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "catalogsToAdd": [
      "gid://shopify/Catalog/307400570"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketUpdate($input: MarketUpdateInput!) {
      marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "catalogsToAdd": [
                "gid://shopify/Catalog/307400570"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "marketUpdate": {
    "market": {
      "id": "gid://shopify/Market/73827535",
      "handle": "us",
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
              }
            ]
          }
        }
      },
      "catalogs": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/MarketCatalog/73827535"
            }
          },
          {
            "node": {
              "id": "gid://shopify/MarketCatalog/307400570"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update a market to change its conditions

#### Description

A market's conditions can be updated to match different buyers. This example shows how to update a market to match buyers in Great Britain.

#### Query

```graphql
mutation marketUpdate($input: MarketUpdateInput!) {
  marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "conditions": {
      "conditionsToAdd": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "GB"
            }
          ]
        }
      },
      "conditionsToDelete": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "US"
            }
          ]
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
"query": "mutation marketUpdate($input: MarketUpdateInput!) { marketUpdate(id: \"gid://shopify/Market/73827535\", input: $input) { market { id handle status conditions { regionsCondition { regions(first: 10) { edges { node { id name } } } } } catalogs(first: 10) { edges { node { id } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "conditions": {
        "conditionsToAdd": {
          "regionsCondition": {
            "regions": [
              {
                "countryCode": "GB"
              }
            ]
          }
        },
        "conditionsToDelete": {
          "regionsCondition": {
            "regions": [
              {
                "countryCode": "US"
              }
            ]
          }
        }
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "conditions": {
                "conditionsToAdd": {
                    "regionsCondition": {
                        "regions": [
                            {
                                "countryCode": "GB"
                            }
                        ]
                    }
                },
                "conditionsToDelete": {
                    "regionsCondition": {
                        "regions": [
                            {
                                "countryCode": "US"
                            }
                        ]
                    }
                }
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
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "conditions": {
      "conditionsToAdd": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "GB"
            }
          ]
        }
      },
      "conditionsToDelete": {
        "regionsCondition": {
          "regions": [
            {
              "countryCode": "US"
            }
          ]
        }
      }
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketUpdate($input: MarketUpdateInput!) {
      marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "conditions": {
                "conditionsToAdd": {
                    "regionsCondition": {
                        "regions": [
                            {
                                "countryCode": "GB"
                            }
                        ]
                    }
                },
                "conditionsToDelete": {
                    "regionsCondition": {
                        "regions": [
                            {
                                "countryCode": "US"
                            }
                        ]
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "marketUpdate": {
    "market": {
      "id": "gid://shopify/Market/73827535",
      "handle": "us",
      "status": "ACTIVE",
      "conditions": {
        "regionsCondition": {
          "regions": {
            "edges": [
              {
                "node": {
                  "id": "gid://shopify/MarketRegionCountry/1072830634",
                  "name": "United Kingdom"
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
              "id": "gid://shopify/MarketCatalog/73827535"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### marketUpdate reference

Examples
--------

Update a market status to make it draft

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketUpdate(%24input%3A%20MarketUpdateInput!)%20%7B%0A%20%20marketUpdate(id%3A%20%22gid%3A%2F%2Fshopify%2FMarket%2F73827535%22%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20market%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20conditions%20%7B%0A%20%20%20%20%20%20%20%20regionsCondition%20%7B%0A%20%20%20%20%20%20%20%20%20%20regions(first%3A%2010)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20currencySettings%20%7B%0A%20%20%20%20%20%20%20%20baseCurrency%20%7B%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20localCurrencies%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22status%22%3A%20%22DRAFT%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketUpdate($input: MarketUpdateInput!) {

 marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {

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

variables:{

"input":{

"status":"DRAFT"

}

},

},

);

const data=await response.json();

```
mutation marketUpdate($input: MarketUpdateInput!) {
  marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
"query": "mutation marketUpdate($input: MarketUpdateInput!) { marketUpdate(id: \"gid://shopify/Market/73827535\", input: $input) { market { id handle status conditions { regionsCondition { regions(first: 10) { edges { node { id name } } } } } currencySettings { baseCurrency { currencyCode } localCurrencies } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "status": "DRAFT"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "status": "DRAFT"
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
    "query": `mutation marketUpdate($input: MarketUpdateInput!) {
      marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
            "status": "DRAFT"
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
  mutation marketUpdate($input: MarketUpdateInput!) {
    marketUpdate(id: "gid://shopify/Market/73827535", input: $input) {
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
    "status": "DRAFT"
  }
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

4

5

›

⌄

⌄

{

"input": {

"status": "DRAFT"

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

24

25

26

27

28

29

30

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

{

"marketUpdate": {

"market": {

"id": "gid://shopify/Market/73827535",

"handle": "us",

"status": "DRAFT",

"conditions": {

"regionsCondition": {

"regions": {

"edges": [

{

"node": {

"id": "gid://shopify/MarketRegionCountry/397370199",

"name": "United States"

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


---
*Content truncated at "Updates" section*