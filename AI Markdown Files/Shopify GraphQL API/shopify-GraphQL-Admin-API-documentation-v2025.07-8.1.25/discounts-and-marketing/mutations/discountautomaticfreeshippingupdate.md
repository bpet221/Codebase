---
title: "discountAutomaticFreeShippingUpdate"
description: "Shopify GraphQL Admin API documentation for discountautomaticfreeshippingupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountAutomaticFreeShippingUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate

Markdown Content:
discountAutomaticFreeShippingUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#main-content)

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

[Anchor to discountAutomaticFreeShippingUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#top)
discount Automatic Free Shipping Update
=======================================

mutation

Requires Apps must have `write_discounts` access scope.

Updates an existing [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

* * *

Note

To update code discounts, use the [`discountCodeFreeShippingUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeFreeShippingUpdate) mutation instead.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#arguments)
Arguments
---------

[Anchor to freeShippingAutomaticDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#arguments-freeShippingAutomaticDiscount)free Shipping Automatic Discount

•[Discount Automatic Free Shipping Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput)

required

The input data used to update the automatic free shipping discount.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the automatic free shipping discount to update.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountAutomaticFreeShippingUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#returns)Discount Automatic Free Shipping Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to automaticDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#returns-automaticDiscountNode)automatic Discount Node

•[Discount Automatic Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

The automatic discount that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update an automatic free shipping discount

#### Description

Creating an automatic discount

#### Query

```graphql
mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
    automaticDiscountNode {
      automaticDiscount {
        ... on DiscountAutomaticFreeShipping {
          title
        }
      }
    }
    userErrors {
      message
      field
      code
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountAutomaticNode/1057371302",
  "freeShippingAutomaticDiscount": {
    "title": "A new title"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) { automaticDiscountNode { automaticDiscount { ... on DiscountAutomaticFreeShipping { title } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticNode/1057371302",
    "freeShippingAutomaticDiscount": {
      "title": "A new title"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountAutomaticNode/1057371302",
        "freeShippingAutomaticDiscount": {
            "title": "A new title"
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
  mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountAutomaticNode/1057371302",
  "freeShippingAutomaticDiscount": {
    "title": "A new title"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountAutomaticNode/1057371302",
        "freeShippingAutomaticDiscount": {
            "title": "A new title"
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticFreeShippingUpdate": {
    "automaticDiscountNode": {
      "automaticDiscount": {
        "title": "A new title"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Updates an existing a price rule

#### Query

```graphql
mutation discountAutomaticFreeShippingUpdate($id: ID!, $automaticFreeShippingDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $automaticFreeShippingDiscount) {
    automaticDiscountNode {
      id
      automaticDiscount {
        ... on DiscountAutomaticFreeShipping {
          title
          startsAt
          endsAt
          minimumRequirement {
            ... on DiscountMinimumQuantity {
              greaterThanOrEqualToQuantity
            }
          }
          destinationSelection {
            ... on DiscountCountryAll {
              allCountries
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
  "id": "gid://shopify/DiscountAutomaticNode/1057371315",
  "automaticFreeShippingDiscount": {
    "title": "Updated Title",
    "startsAt": "2024-10-01T00:00:00Z",
    "endsAt": "2024-12-31T23:59:59Z",
    "minimumRequirement": {
      "quantity": {
        "greaterThanOrEqualToQuantity": "50"
      }
    },
    "destination": {
      "all": true
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
"query": "mutation discountAutomaticFreeShippingUpdate($id: ID!, $automaticFreeShippingDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $automaticFreeShippingDiscount) { automaticDiscountNode { id automaticDiscount { ... on DiscountAutomaticFreeShipping { title startsAt endsAt minimumRequirement { ... on DiscountMinimumQuantity { greaterThanOrEqualToQuantity } } destinationSelection { ... on DiscountCountryAll { allCountries } } } } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticNode/1057371315",
    "automaticFreeShippingDiscount": {
      "title": "Updated Title",
      "startsAt": "2024-10-01T00:00:00Z",
      "endsAt": "2024-12-31T23:59:59Z",
      "minimumRequirement": {
        "quantity": {
          "greaterThanOrEqualToQuantity": "50"
        }
      },
      "destination": {
        "all": true
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountAutomaticFreeShippingUpdate($id: ID!, $automaticFreeShippingDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $automaticFreeShippingDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
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
        "id": "gid://shopify/DiscountAutomaticNode/1057371315",
        "automaticFreeShippingDiscount": {
            "title": "Updated Title",
            "startsAt": "2024-10-01T00:00:00Z",
            "endsAt": "2024-12-31T23:59:59Z",
            "minimumRequirement": {
                "quantity": {
                    "greaterThanOrEqualToQuantity": "50"
                }
            },
            "destination": {
                "all": true
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
  mutation discountAutomaticFreeShippingUpdate($id: ID!, $automaticFreeShippingDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $automaticFreeShippingDiscount) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
            startsAt
            endsAt
            minimumRequirement {
              ... on DiscountMinimumQuantity {
                greaterThanOrEqualToQuantity
              }
            }
            destinationSelection {
              ... on DiscountCountryAll {
                allCountries
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
  "id": "gid://shopify/DiscountAutomaticNode/1057371315",
  "automaticFreeShippingDiscount": {
    "title": "Updated Title",
    "startsAt": "2024-10-01T00:00:00Z",
    "endsAt": "2024-12-31T23:59:59Z",
    "minimumRequirement": {
      "quantity": {
        "greaterThanOrEqualToQuantity": "50"
      }
    },
    "destination": {
      "all": true
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountAutomaticFreeShippingUpdate($id: ID!, $automaticFreeShippingDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $automaticFreeShippingDiscount) {
        automaticDiscountNode {
          id
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
              startsAt
              endsAt
              minimumRequirement {
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
              }
              destinationSelection {
                ... on DiscountCountryAll {
                  allCountries
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
        "id": "gid://shopify/DiscountAutomaticNode/1057371315",
        "automaticFreeShippingDiscount": {
            "title": "Updated Title",
            "startsAt": "2024-10-01T00:00:00Z",
            "endsAt": "2024-12-31T23:59:59Z",
            "minimumRequirement": {
                "quantity": {
                    "greaterThanOrEqualToQuantity": "50"
                }
            },
            "destination": {
                "all": true
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountAutomaticFreeShippingUpdate": {
    "automaticDiscountNode": {
      "id": "gid://shopify/DiscountAutomaticNode/1057371315",
      "automaticDiscount": {
        "title": "Updated Title",
        "startsAt": "2024-10-01T00:00:00Z",
        "endsAt": "2024-12-31T23:59:59Z",
        "minimumRequirement": {
          "greaterThanOrEqualToQuantity": "50"
        },
        "destinationSelection": {
          "allCountries": true
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### discountAutomaticFreeShippingUpdate reference

Examples
--------

Update an automatic free shipping discount

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20M(%24id%3A%20ID!%2C%20%24freeShippingAutomaticDiscount%3A%20DiscountAutomaticFreeShippingInput!)%20%7B%0A%20%20discountAutomaticFreeShippingUpdate(id%3A%20%24id%2C%20freeShippingAutomaticDiscount%3A%20%24freeShippingAutomaticDiscount)%20%7B%0A%20%20%20%20automaticDiscountNode%20%7B%0A%20%20%20%20%20%20automaticDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountAutomaticFreeShipping%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountAutomaticNode%2F1057371302%22%2C%0A%20%20%22freeShippingAutomaticDiscount%22%3A%20%7B%0A%20%20%20%20%22title%22%3A%20%22A%20new%20title%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {

 discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {

 automaticDiscountNode {

 automaticDiscount {

 ... on DiscountAutomaticFreeShipping {

 title

 }

 }

 }

 userErrors {

 message

 field

 code

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/DiscountAutomaticNode/1057371302",

"freeShippingAutomaticDiscount":{

"title":"A new title"

}

},

},

);

const data=await response.json();

```
mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
  discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
    automaticDiscountNode {
      automaticDiscount {
        ... on DiscountAutomaticFreeShipping {
          title
        }
      }
    }
    userErrors {
      message
      field
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
"query": "mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) { discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) { automaticDiscountNode { automaticDiscount { ... on DiscountAutomaticFreeShipping { title } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/DiscountAutomaticNode/1057371302",
    "freeShippingAutomaticDiscount": {
      "title": "A new title"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountAutomaticNode/1057371302",
        "freeShippingAutomaticDiscount": {
            "title": "A new title"
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
    "query": `mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
      discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
        automaticDiscountNode {
          automaticDiscount {
            ... on DiscountAutomaticFreeShipping {
              title
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountAutomaticNode/1057371302",
        "freeShippingAutomaticDiscount": {
            "title": "A new title"
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
  mutation M($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountAutomaticNode/1057371302",
  "freeShippingAutomaticDiscount": {
    "title": "A new title"
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

6

›

⌄

⌄

{

"id": "gid://shopify/DiscountAutomaticNode/1057371302",

"freeShippingAutomaticDiscount": {

"title": "A new title"

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

›

⌄

⌄

⌄

⌄

{

"discountAutomaticFreeShippingUpdate": {

"automaticDiscountNode": {

"automaticDiscount": {

"title": "A new title"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*