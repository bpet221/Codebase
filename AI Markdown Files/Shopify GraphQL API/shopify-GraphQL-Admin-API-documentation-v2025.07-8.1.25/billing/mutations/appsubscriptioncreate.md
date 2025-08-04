---
title: "appSubscriptionCreate"
description: "Shopify GraphQL Admin API documentation for appsubscriptioncreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate"
extraction_method: "jina"
sections: ['Billing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: appSubscriptionCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate

Markdown Content:
appSubscriptionCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#main-content)

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
*   
Billing

    *   Queries   
    *   
Mutations

        *   [app Purchase One Time Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/apppurchaseonetimecreate)
        *   [app Subscription Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncancel)
        *   [app Subscription Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate)
        *   [app Subscription Line Item Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptionlineitemupdate)
        *   [app Subscription Trial Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptiontrialextend)
        *   [app Usage Record Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appusagerecordcreate)

    *   Objects   

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
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to appSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#top)
app Subscription Create
=======================

mutation

Allows an app to charge a store for features or services on a recurring basis.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments)
Arguments
---------

[Anchor to lineItems](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments-lineItems)line Items

•[[App Subscription Line Item Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput)

required

Attaches one or more pricing plans to an app subscription. Only one pricing plan can be defined for each available type.

Show input fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments-name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

A descriptive name for the app subscription.

[Anchor to replacementBehavior](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments-replacementBehavior)replacement Behavior

•[App Subscription Replacement Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionReplacementBehavior)

Default:STANDARD

The replacement behavior when creating an app subscription for a merchant with an already existing app subscription.

Show enum values

[Anchor to returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments-returnUrl)return Url

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

required

The URL pointing to the page where the merchant is redirected after approving the app subscription.

[Anchor to test](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments-test)test

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Whether the app subscription is a test transaction.

[Anchor to trialDays](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#arguments-trialDays)trial Days

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The number of days of the free trial period, beginning on the day that the merchant approves the app charges.

* * *

Was this section helpful?

Yes No

[Anchor to AppSubscriptionCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#returns)App Subscription Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to appSubscription](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#returns-appSubscription)app Subscription

•[App Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

The newly-created app subscription.

Show fields

[Anchor to confirmationUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#returns-confirmationUrl)confirmation Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The URL pointing to the page where the merchant approves or declines the charges for an app subscription.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appsubscriptioncreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a subscription for an app on a recurring pricing plan only.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
    }
    confirmationUrl
  }
}
``` #### Variables

```json
{
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } appSubscription { id } confirmationUrl } }",
 "variables": {
    "name": "Super Duper Recurring Plan",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 10,
              "currencyCode": "USD"
            },
            "interval": "EVERY_30_DAYS"
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266964"
    },
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266964/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBReWT06EmF1dG9fYWN0aXZhdGVU--40f1bb287931224ca72323613fc6255d8a38a2c8"
  }
}
``` 
*   ### Create a subscription for an app on a usage pricing plan only.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
      lineItems {
        id
        plan {
          pricingDetails
          __typename
        }
      }
    }
    confirmationUrl
  }
}
``` #### Variables

```json
{
  "name": "Super Duper Usage Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appUsagePricingDetails": {
          "terms": "$1 for 100 emails",
          "cappedAmount": {
            "amount": 20,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } appSubscription { id lineItems { id plan { pricingDetails __typename } } } confirmationUrl } }",
 "variables": {
    "name": "Super Duper Usage Plan",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "lineItems": [
      {
        "plan": {
          "appUsagePricingDetails": {
            "terms": "$1 for 100 emails",
            "cappedAmount": {
              "amount": 20,
              "currencyCode": "USD"
            }
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        lineItems {
          id
          plan {
            pricingDetails
            __typename
          }
        }
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "Super Duper Usage Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appUsagePricingDetails": {
                        "terms": "$1 for 100 emails",
                        "cappedAmount": {
                            "amount": 20,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        lineItems {
          id
          plan {
            pricingDetails
            __typename
          }
        }
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "Super Duper Usage Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appUsagePricingDetails": {
          "terms": "$1 for 100 emails",
          "cappedAmount": {
            "amount": 20,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
          lineItems {
            id
            plan {
              pricingDetails
              __typename
            }
          }
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "Super Duper Usage Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appUsagePricingDetails": {
                        "terms": "$1 for 100 emails",
                        "cappedAmount": {
                            "amount": 20,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266960",
      "lineItems": [
        {
          "id": "gid://shopify/AppSubscriptionLineItem/1029266960?v=1&index=0",
          "plan": {
            "pricingDetails": {},
            "__typename": "AppPlanV2"
          }
        }
      ]
    },
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266960/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBBeWT06EmF1dG9fYWN0aXZhdGVU--6a3125051f687d95ba16132e5fb9a0419e0e4d18"
  }
}
``` 
*   ### Create a subscription for an app on an annual recurring pricing plan.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
    }
    confirmationUrl
  }
}
``` #### Variables

```json
{
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "ANNUAL"
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } appSubscription { id } confirmationUrl } }",
 "variables": {
    "name": "Super Duper Recurring Plan",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 10,
              "currencyCode": "USD"
            },
            "interval": "ANNUAL"
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "ANNUAL"
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "ANNUAL"
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "ANNUAL"
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266967"
    },
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266967/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBdeWT06EmF1dG9fYWN0aXZhdGVU--fe672a2422bba8ab370938f6f5f1df9aaf5ddd8d"
  }
}
``` 
*   ### Create a subscription for an app on both a recurring pricing plan and usage pricing plan.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
      lineItems {
        id
        plan {
          pricingDetails {
            __typename
          }
        }
      }
    }
    confirmationUrl
  }
}
``` #### Variables

```json
{
  "name": "Super Duper Recurring and Usage Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appUsagePricingDetails": {
          "terms": "$1 for 100 emails",
          "cappedAmount": {
            "amount": 20,
            "currencyCode": "USD"
          }
        }
      }
    },
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } appSubscription { id lineItems { id plan { pricingDetails { __typename } } } } confirmationUrl } }",
 "variables": {
    "name": "Super Duper Recurring and Usage Plan",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "lineItems": [
      {
        "plan": {
          "appUsagePricingDetails": {
            "terms": "$1 for 100 emails",
            "cappedAmount": {
              "amount": 20,
              "currencyCode": "USD"
            }
          }
        }
      },
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 10,
              "currencyCode": "USD"
            }
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        lineItems {
          id
          plan {
            pricingDetails {
              __typename
            }
          }
        }
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "Super Duper Recurring and Usage Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appUsagePricingDetails": {
                        "terms": "$1 for 100 emails",
                        "cappedAmount": {
                            "amount": 20,
                            "currencyCode": "USD"
                        }
                    }
                }
            },
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        lineItems {
          id
          plan {
            pricingDetails {
              __typename
            }
          }
        }
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "Super Duper Recurring and Usage Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appUsagePricingDetails": {
          "terms": "$1 for 100 emails",
          "cappedAmount": {
            "amount": 20,
            "currencyCode": "USD"
          }
        }
      }
    },
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
          lineItems {
            id
            plan {
              pricingDetails {
                __typename
              }
            }
          }
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "Super Duper Recurring and Usage Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appUsagePricingDetails": {
                        "terms": "$1 for 100 emails",
                        "cappedAmount": {
                            "amount": 20,
                            "currencyCode": "USD"
                        }
                    }
                }
            },
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266961",
      "lineItems": [
        {
          "id": "gid://shopify/AppSubscriptionLineItem/1029266961?v=1&index=0",
          "plan": {
            "pricingDetails": {
              "__typename": "AppRecurringPricing"
            }
          }
        },
        {
          "id": "gid://shopify/AppSubscriptionLineItem/1029266961?v=1&index=1",
          "plan": {
            "pricingDetails": {
              "__typename": "AppUsagePricing"
            }
          }
        }
      ]
    },
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266961/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBFeWT06EmF1dG9fYWN0aXZhdGVU--6385f33920ae03746bbd6dd9dd1c41bb13879f5f"
  }
}
``` 
*   ### Create a subscription with a fixed amount discount

#### Description

Apply a fixed amount discount on the recurring cost of a subscription.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    confirmationUrl
    appSubscription {
      id
    }
  }
}
``` #### Variables

```json
{
  "name": "30 Day Recurring Plan",
  "returnUrl": "https://review-app.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "discount": {
            "value": {
              "amount": 5
            },
            "durationLimitInIntervals": 2
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } confirmationUrl appSubscription { id } } }",
 "variables": {
    "name": "30 Day Recurring Plan",
    "returnUrl": "https://review-app.shopifyapps.com",
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 40,
              "currencyCode": "USD"
            },
            "discount": {
              "value": {
                "amount": 5
              },
              "durationLimitInIntervals": 2
            },
            "interval": "EVERY_30_DAYS"
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`,
  {
    variables: {
        "name": "30 Day Recurring Plan",
        "returnUrl": "https://review-app.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 40,
                            "currencyCode": "USD"
                        },
                        "discount": {
                            "value": {
                                "amount": 5
                            },
                            "durationLimitInIntervals": 2
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }
QUERY

variables = {
  "name": "30 Day Recurring Plan",
  "returnUrl": "https://review-app.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "discount": {
            "value": {
              "amount": 5
            },
            "durationLimitInIntervals": 2
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
    "variables": {
        "name": "30 Day Recurring Plan",
        "returnUrl": "https://review-app.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 40,
                            "currencyCode": "USD"
                        },
                        "discount": {
                            "value": {
                                "amount": 5
                            },
                            "durationLimitInIntervals": 2
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266959/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBA9eWT06EmF1dG9fYWN0aXZhdGVU--f374cbfa230bebd8e270af37a779d920de2dfe69",
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266959"
    }
  }
}
``` 
*   ### Create a subscription with a free trial.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $trialDays: Int) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems, trialDays: $trialDays) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
    }
    confirmationUrl
  }
}
``` #### Variables

```json
{
  "name": "Super Duper Recurring Plan with a Trial",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "trialDays": 7,
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $trialDays: Int) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems, trialDays: $trialDays) { userErrors { field message } appSubscription { id } confirmationUrl } }",
 "variables": {
    "name": "Super Duper Recurring Plan with a Trial",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "trialDays": 7,
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 10,
              "currencyCode": "USD"
            }
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $trialDays: Int) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems, trialDays: $trialDays) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "Super Duper Recurring Plan with a Trial",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "trialDays": 7,
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $trialDays: Int) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems, trialDays: $trialDays) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "Super Duper Recurring Plan with a Trial",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "trialDays": 7,
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $trialDays: Int) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems, trialDays: $trialDays) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "Super Duper Recurring Plan with a Trial",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "trialDays": 7,
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266965"
    },
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266965/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBVeWT06EmF1dG9fYWN0aXZhdGVU--f3e64505cf5f399b7e631756ff1d6c95f80af98c"
  }
}
``` 
*   ### Create a subscription with a percentage value discount

#### Description

Apply a percentage value discount on the recurring cost of a subscription.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    confirmationUrl
    appSubscription {
      id
    }
  }
}
``` #### Variables

```json
{
  "name": "30 Day Recurring Plan",
  "returnUrl": "https://review-app.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "discount": {
            "value": {
              "percentage": 0.2
            },
            "durationLimitInIntervals": 10
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } confirmationUrl appSubscription { id } } }",
 "variables": {
    "name": "30 Day Recurring Plan",
    "returnUrl": "https://review-app.shopifyapps.com",
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 40,
              "currencyCode": "USD"
            },
            "discount": {
              "value": {
                "percentage": 0.2
              },
              "durationLimitInIntervals": 10
            },
            "interval": "EVERY_30_DAYS"
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`,
  {
    variables: {
        "name": "30 Day Recurring Plan",
        "returnUrl": "https://review-app.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 40,
                            "currencyCode": "USD"
                        },
                        "discount": {
                            "value": {
                                "percentage": 0.2
                            },
                            "durationLimitInIntervals": 10
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }
QUERY

variables = {
  "name": "30 Day Recurring Plan",
  "returnUrl": "https://review-app.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 40,
            "currencyCode": "USD"
          },
          "discount": {
            "value": {
              "percentage": 0.2
            },
            "durationLimitInIntervals": 10
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
    "variables": {
        "name": "30 Day Recurring Plan",
        "returnUrl": "https://review-app.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 40,
                            "currencyCode": "USD"
                        },
                        "discount": {
                            "value": {
                                "percentage": 0.2
                            },
                            "durationLimitInIntervals": 10
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266963/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBNeWT06EmF1dG9fYWN0aXZhdGVU--175a4c86f29fd8f88234ec365eec27ab2dc7d8e3",
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266963"
    }
  }
}
``` 
*   ### Create a subscription with add-on modules

#### Description

Demonstrates how to increase usage caps to bill for 'add on modules' where Module A has a fixed price of $20 every 30 days, and Module B as a fixed price of $15 every 30 days plus $1 for every 100 emails.

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    confirmationUrl
    appSubscription {
      id
    }
  }
}
``` #### Variables

```json
{
  "name": "Subscription for Module A and Module B",
  "returnUrl": "http://super-duper.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appUsagePricingDetails": {
          "terms": "$1 for 100 emails for Module B",
          "cappedAmount": {
            "amount": 20,
            "currencyCode": "USD"
          }
        }
      }
    },
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } confirmationUrl appSubscription { id } } }",
 "variables": {
    "name": "Subscription for Module A and Module B",
    "returnUrl": "http://super-duper.shopifyapps.com",
    "lineItems": [
      {
        "plan": {
          "appUsagePricingDetails": {
            "terms": "$1 for 100 emails for Module B",
            "cappedAmount": {
              "amount": 20,
              "currencyCode": "USD"
            }
          }
        }
      },
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 35,
              "currencyCode": "USD"
            }
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`,
  {
    variables: {
        "name": "Subscription for Module A and Module B",
        "returnUrl": "http://super-duper.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appUsagePricingDetails": {
                        "terms": "$1 for 100 emails for Module B",
                        "cappedAmount": {
                            "amount": 20,
                            "currencyCode": "USD"
                        }
                    }
                }
            },
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 35,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }
QUERY

variables = {
  "name": "Subscription for Module A and Module B",
  "returnUrl": "http://super-duper.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appUsagePricingDetails": {
          "terms": "$1 for 100 emails for Module B",
          "cappedAmount": {
            "amount": 20,
            "currencyCode": "USD"
          }
        }
      }
    },
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 35,
            "currencyCode": "USD"
          }
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
    "variables": {
        "name": "Subscription for Module A and Module B",
        "returnUrl": "http://super-duper.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appUsagePricingDetails": {
                        "terms": "$1 for 100 emails for Module B",
                        "cappedAmount": {
                            "amount": 20,
                            "currencyCode": "USD"
                        }
                    }
                }
            },
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 35,
                            "currencyCode": "USD"
                        }
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266966/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBZeWT06EmF1dG9fYWN0aXZhdGVU--f80e7f189ca7afad7364c4182577a8b8c801254f",
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266966"
    }
  }
}
``` 
*   ### Creates a recurring application charge

#### Query

```graphql
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    confirmationUrl
    appSubscription {
      id
    }
  }
}
``` #### Variables

```json
{
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } confirmationUrl appSubscription { id } } }",
 "variables": {
    "name": "Super Duper Recurring Plan",
    "returnUrl": "http://super-duper.shopifyapps.com",
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 10,
              "currencyCode": "USD"
            },
            "interval": "EVERY_30_DAYS"
          }
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }`,
  {
    variables: {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
      }
    }
  }
QUERY

variables = {
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appSubscription {
          id
        }
      }
    }`,
    "variables": {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "appSubscriptionCreate": {
    "userErrors": [],
    "confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266962/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBJeWT06EmF1dG9fYWN0aXZhdGVU--c94d382d1fe3012e03e22dcb2253e14d14933433",
    "appSubscription": {
      "id": "gid://shopify/AppSubscription/1029266962"
    }
  }
}
``` 
*   ### appSubscriptionCreate reference

Examples
--------

Create a subscription for an app on a recurring pricing plan only.

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20AppSubscriptionCreate(%24name%3A%20String!%2C%20%24lineItems%3A%20%5BAppSubscriptionLineItemInput!%5D!%2C%20%24returnUrl%3A%20URL!)%20%7B%0A%20%20appSubscriptionCreate(name%3A%20%24name%2C%20returnUrl%3A%20%24returnUrl%2C%20lineItems%3A%20%24lineItems)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20appSubscription%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20confirmationUrl%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22name%22%3A%20%22Super%20Duper%20Recurring%20Plan%22%2C%0A%20%20%22returnUrl%22%3A%20%22http%3A%2F%2Fsuper-duper.shopifyapps.com%2F%22%2C%0A%20%20%22lineItems%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22plan%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22appRecurringPricingDetails%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22amount%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%22interval%22%3A%20%22EVERY_30_DAYS%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {

 appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {

 userErrors {

 field

 message

 }

 appSubscription {

 id

 }

 confirmationUrl

 }

 }`,

{

variables:{

"name":"Super Duper Recurring Plan",

"returnUrl":"http://super-duper.shopifyapps.com/",

"lineItems":[

{

"plan":{

"appRecurringPricingDetails":{

"price":{

"amount":10,

"currencyCode":"USD"

},

"interval":"EVERY_30_DAYS"

}

}

}

]

},

},

);

const data=await response.json();

```
mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
  appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
    userErrors {
      field
      message
    }
    appSubscription {
      id
    }
    confirmationUrl
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) { appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) { userErrors { field message } appSubscription { id } confirmationUrl } }",
 "variables": {
    "name": "Super Duper Recurring Plan",
    "returnUrl": "http://super-duper.shopifyapps.com/",
    "lineItems": [
      {
        "plan": {
          "appRecurringPricingDetails": {
            "price": {
              "amount": 10,
              "currencyCode": "USD"
            },
            "interval": "EVERY_30_DAYS"
          }
        }
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }`,
  {
    variables: {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
      appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
        userErrors {
          field
          message
        }
        appSubscription {
          id
        }
        confirmationUrl
      }
    }`,
    "variables": {
        "name": "Super Duper Recurring Plan",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "lineItems": [
            {
                "plan": {
                    "appRecurringPricingDetails": {
                        "price": {
                            "amount": 10,
                            "currencyCode": "USD"
                        },
                        "interval": "EVERY_30_DAYS"
                    }
                }
            }
        ]
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
  mutation AppSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!) {
    appSubscriptionCreate(name: $name, returnUrl: $returnUrl, lineItems: $lineItems) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
      }
      confirmationUrl
    }
  }
QUERY

variables = {
  "name": "Super Duper Recurring Plan",
  "returnUrl": "http://super-duper.shopifyapps.com/",
  "lineItems": [
    {
      "plan": {
        "appRecurringPricingDetails": {
          "price": {
            "amount": 10,
            "currencyCode": "USD"
          },
          "interval": "EVERY_30_DAYS"
        }
      }
    }
  ]
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"name": "Super Duper Recurring Plan",

"returnUrl": "http://super-duper.shopifyapps.com/",

"lineItems": [

{

"plan": {

"appRecurringPricingDetails": {

"price": {

"amount": 10,

"currencyCode": "USD"

},

"interval": "EVERY_30_DAYS"

}

}

}

]

}

Hide content

Response
--------

JSON

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

"appSubscriptionCreate": {

"userErrors": [],

"appSubscription": {

"id": "gid://shopify/AppSubscription/1029266964"

},

"confirmationUrl": "https://billingshop.myshopify.com/admin/charges/166357/1029266964/RecurringApplicationCharge/confirm_recurring_application_charge?signature=BAh7BzoHaWRpBBReWT06EmF1dG9fYWN0aXZhdGVU--40f1bb287931224ca72323613fc6255d8a38a2c8"

}

}


---
*Content truncated at "Updates" section*