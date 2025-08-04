---
title: "marketingActivityUpdate"
description: "Shopify GraphQL Admin API documentation for marketingactivityupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivityUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate

Markdown Content:
marketingActivityUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#main-content)

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
*   
Discounts And Marketing

    *   Queries   
    *   
Mutations

        *   [abandonment Email State Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentemailstateupdate)
        *   [abandonment Update Activities Delivery Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentupdateactivitiesdeliverystatuses)
        *   [discount Automatic Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticactivate)
        *   [discount Automatic App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate)
        *   [discount Automatic App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate)
        *   [discount Automatic Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate)
        *   [discount Automatic Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasicupdate)
        *   [discount Automatic Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbulkdelete)
        *   [discount Automatic Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate)
        *   [discount Automatic Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgyupdate)
        *   [discount Automatic Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdeactivate)
        *   [discount Automatic Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdelete)
        *   [discount Automatic Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate)
        *   [discount Automatic Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate)
        *   [discount Code Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeactivate)
        *   [discount Code App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate)
        *   [discount Code App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappupdate)
        *   [discount Code Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate)
        *   [discount Code Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate)
        *   [discount Code Bulk Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkactivate)
        *   [discount Code Bulk Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate)
        *   [discount Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdelete)
        *   [discount Code Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate)
        *   [discount Code Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate)
        *   [discount Code Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate)
        *   [discount Code Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedelete)
        *   [discount Code Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingcreate)
        *   [discount Code Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingupdate)
        *   [discount Code Redeem Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcoderedeemcodebulkdelete)
        *   [discount Redeem Code Bulk Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd)
        *   [event Bridge Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgeserverpixelupdate)
        *   [marketing Activities Delete All External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitiesdeleteallexternal)
        *   [marketing Activity Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate)
        *   [marketing Activity Create External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal)
        *   [marketing Activity Delete External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal)
        *   [marketing Activity Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate)
        *   [marketing Activity Update External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal)
        *   [marketing Activity Upsert External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal)
        *   [marketing Engagement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate)
        *   [marketing Engagements Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete)
        *   [pub Sub Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubserverpixelupdate)
        *   [server Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixelcreate)
        *   [server Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixeldelete)
        *   [web Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate)
        *   [web Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixeldelete)
        *   [web Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelupdate)

    *   Objects   

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to marketingActivityUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#top)
marketing Activity Update
=========================

mutation

Requires `write_marketing_events` access scope.

Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#arguments-input)input

•[Marketing Activity Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput)

required

The Input of the marketing activity.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketingActivityUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#returns)Marketing Activity Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#returns-marketingActivity)marketing Activity

•[Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

The updated marketing activity.

Show fields

[Anchor to redirectPath](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#returns-redirectPath)redirect Path

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The redirect path from the embedded editor to the Shopify admin.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Sets the budget for the marketing activity

#### Query

```graphql
mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
  marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
    marketingActivity {
      budget {
        budgetType
        total {
          amount
          currencyCode
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/MarketingActivity/794355127",
  "budgetType": "LIFETIME",
  "amount": 100,
  "currencyCode": "CAD"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) { marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) { marketingActivity { budget { budgetType total { amount currencyCode } } } } }",
 "variables": {
    "id": "gid://shopify/MarketingActivity/794355127",
    "budgetType": "LIFETIME",
    "amount": 100,
    "currencyCode": "CAD"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MarketingActivity/794355127",
        "budgetType": "LIFETIME",
        "amount": 100,
        "currencyCode": "CAD"
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
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MarketingActivity/794355127",
  "budgetType": "LIFETIME",
  "amount": 100,
  "currencyCode": "CAD"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
      marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
        marketingActivity {
          budget {
            budgetType
            total {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MarketingActivity/794355127",
        "budgetType": "LIFETIME",
        "amount": 100,
        "currencyCode": "CAD"
    },
  },
});
``` #### Response

```json
{
  "marketingActivityUpdate": {
    "marketingActivity": {
      "budget": {
        "budgetType": "LIFETIME",
        "total": {
          "amount": "100.0",
          "currencyCode": "CAD"
        }
      }
    }
  }
}
``` 
*   ### Updates a marketing activity into ACTIVE state

#### Query

```graphql
mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
  marketingActivityUpdate(input: {id: $id, status: $status}) {
    marketingActivity {
      id
      title
      status
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/MarketingActivity/794355127",
  "status": "ACTIVE"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) { marketingActivityUpdate(input: {id: $id, status: $status}) { marketingActivity { id title status } } }",
 "variables": {
    "id": "gid://shopify/MarketingActivity/794355127",
    "status": "ACTIVE"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
    marketingActivityUpdate(input: {id: $id, status: $status}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MarketingActivity/794355127",
        "status": "ACTIVE"
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
  mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
    marketingActivityUpdate(input: {id: $id, status: $status}) {
      marketingActivity {
        id
        title
        status
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MarketingActivity/794355127",
  "status": "ACTIVE"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdate($id: ID!, $status: MarketingActivityStatus!) {
      marketingActivityUpdate(input: {id: $id, status: $status}) {
        marketingActivity {
          id
          title
          status
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MarketingActivity/794355127",
        "status": "ACTIVE"
    },
  },
});
``` #### Response

```json
{
  "marketingActivityUpdate": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/794355127",
      "title": "Marketing Activity for Snowdevil",
      "status": "ACTIVE"
    }
  }
}
``` 
*   ### marketingActivityUpdate reference

Examples
--------

Sets the budget for the marketing activity

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpdate(%24id%3A%20ID!%2C%20%24budgetType%3A%20MarketingBudgetBudgetType!%2C%20%24amount%3A%20Decimal!%2C%20%24currencyCode%3A%20CurrencyCode!)%20%7B%0A%20%20marketingActivityUpdate(input%3A%20%7Bid%3A%20%24id%2C%20budget%3A%20%7BbudgetType%3A%20%24budgetType%2C%20total%3A%20%7Bamount%3A%20%24amount%2C%20currencyCode%3A%20%24currencyCode%7D%7D%7D)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20budget%20%7B%0A%20%20%20%20%20%20%20%20budgetType%0A%20%20%20%20%20%20%20%20total%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMarketingActivity%2F794355127%22%2C%0A%20%20%22budgetType%22%3A%20%22LIFETIME%22%2C%0A%20%20%22amount%22%3A%20100%2C%0A%20%20%22currencyCode%22%3A%20%22CAD%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {

 marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {

 marketingActivity {

 budget {

 budgetType

 total {

 amount

 currencyCode

 }

 }

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/MarketingActivity/794355127",

"budgetType":"LIFETIME",

"amount":100,

"currencyCode":"CAD"

},

},

);

const data=await response.json();

```
mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
  marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
    marketingActivity {
      budget {
        budgetType
        total {
          amount
          currencyCode
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
"query": "mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) { marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) { marketingActivity { budget { budgetType total { amount currencyCode } } } } }",
 "variables": {
    "id": "gid://shopify/MarketingActivity/794355127",
    "budgetType": "LIFETIME",
    "amount": 100,
    "currencyCode": "CAD"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/MarketingActivity/794355127",
        "budgetType": "LIFETIME",
        "amount": 100,
        "currencyCode": "CAD"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
      marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
        marketingActivity {
          budget {
            budgetType
            total {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/MarketingActivity/794355127",
        "budgetType": "LIFETIME",
        "amount": 100,
        "currencyCode": "CAD"
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
  mutation marketingActivityUpdate($id: ID!, $budgetType: MarketingBudgetBudgetType!, $amount: Decimal!, $currencyCode: CurrencyCode!) {
    marketingActivityUpdate(input: {id: $id, budget: {budgetType: $budgetType, total: {amount: $amount, currencyCode: $currencyCode}}}) {
      marketingActivity {
        budget {
          budgetType
          total {
            amount
            currencyCode
          }
        }
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/MarketingActivity/794355127",
  "budgetType": "LIFETIME",
  "amount": 100,
  "currencyCode": "CAD"
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

6

›

⌄

{

"id": "gid://shopify/MarketingActivity/794355127",

"budgetType": "LIFETIME",

"amount": 100,

"currencyCode": "CAD"

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

›

⌄

⌄

⌄

⌄

⌄

{

"marketingActivityUpdate": {

"marketingActivity": {

"budget": {

"budgetType": "LIFETIME",

"total": {

"amount": "100.0",

"currencyCode": "CAD"

}

}

}

}

}


---
*Content truncated at "Updates" section*