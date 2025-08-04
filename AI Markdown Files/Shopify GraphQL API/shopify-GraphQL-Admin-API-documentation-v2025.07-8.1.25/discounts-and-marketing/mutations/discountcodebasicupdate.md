---
title: "discountCodeBasicUpdate"
description: "Shopify GraphQL Admin API documentation for discountcodebasicupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodeBasicUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate

Markdown Content:
discountCodeBasicUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#main-content)

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

[Anchor to discountCodeBasicUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#top)
discount Code Basic Update
==========================

mutation

Requires Apps must have `write_discounts` access scope.

Updates an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

* * *

Note

To update discounts that are automatically applied on a cart and at checkout, use the [`discountAutomaticBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate) mutation.

* * *

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#arguments)
Arguments
---------

[Anchor to basicCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#arguments-basicCodeDiscount)basic Code Discount

•[Discount Code Basic Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput)

required

The input data used to update the discount code.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the discount code to update.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountCodeBasicUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#returns)Discount Code Basic Update Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to codeDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#returns-codeDiscountNode)code Discount Node

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The discount code that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a basic code discount

#### Description

Update an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when customers enter a code. This mutation modifies the discount to apply 40% off, sets a new discount code, and sets the discount to never expire. The update also limits the discount to one for each customer.

#### Query

```graphql
mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      id
    }
    userErrors {
      field
      code
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountCodeNode/206265824",
  "basicCodeDiscount": {
    "endsAt": null,
    "code": "NEW_CODE",
    "appliesOncePerCustomer": true,
    "customerGets": {
      "value": {
        "percentage": 0.4
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
"query": "mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) { discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) { codeDiscountNode { id } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/206265824",
    "basicCodeDiscount": {
      "endsAt": null,
      "code": "NEW_CODE",
      "appliesOncePerCustomer": true,
      "customerGets": {
        "value": {
          "percentage": 0.4
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
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountCodeNode/206265824",
        "basicCodeDiscount": {
            "endsAt": null,
            "code": "NEW_CODE",
            "appliesOncePerCustomer": true,
            "customerGets": {
                "value": {
                    "percentage": 0.4
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
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountCodeNode/206265824",
  "basicCodeDiscount": {
    "endsAt": null,
    "code": "NEW_CODE",
    "appliesOncePerCustomer": true,
    "customerGets": {
      "value": {
        "percentage": 0.4
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
    "query": `mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
      discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
          id
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/206265824",
        "basicCodeDiscount": {
            "endsAt": null,
            "code": "NEW_CODE",
            "appliesOncePerCustomer": true,
            "customerGets": {
                "value": {
                    "percentage": 0.4
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeBasicUpdate": {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/206265824"
    },
    "userErrors": []
  }
}
``` 
*   ### Update a discount code to apply to specific products

#### Description

Update an amount off discount to apply a fixed amount discount on specific products. This mutation modifies the discount to take $10 off the selected products, makes it available for the first 100 orders while limiting the discount to one for each customer, and sets an end date. This is useful when you want to create targeted promotions that reward early customers while ensuring fair distribution of the discount.

#### Query

```graphql
mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      id
    }
    userErrors {
      field
      code
      message
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/DiscountCodeNode/139986317",
  "basicCodeDiscount": {
    "endsAt": "2025-12-31T23:59:59Z",
    "usageLimit": 100,
    "appliesOncePerCustomer": true,
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/121709582",
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "percentage": 0.1
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
"query": "mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) { discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) { codeDiscountNode { id } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/139986317",
    "basicCodeDiscount": {
      "endsAt": "2025-12-31T23:59:59Z",
      "usageLimit": 100,
      "appliesOncePerCustomer": true,
      "customerGets": {
        "items": {
          "products": {
            "productsToAdd": [
              "gid://shopify/Product/121709582",
              "gid://shopify/Product/108828309"
            ]
          }
        },
        "value": {
          "percentage": 0.1
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
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountCodeNode/139986317",
        "basicCodeDiscount": {
            "endsAt": "2025-12-31T23:59:59Z",
            "usageLimit": 100,
            "appliesOncePerCustomer": true,
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/121709582",
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "percentage": 0.1
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
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountCodeNode/139986317",
  "basicCodeDiscount": {
    "endsAt": "2025-12-31T23:59:59Z",
    "usageLimit": 100,
    "appliesOncePerCustomer": true,
    "customerGets": {
      "items": {
        "products": {
          "productsToAdd": [
            "gid://shopify/Product/121709582",
            "gid://shopify/Product/108828309"
          ]
        }
      },
      "value": {
        "percentage": 0.1
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
    "query": `mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
      discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
          id
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/139986317",
        "basicCodeDiscount": {
            "endsAt": "2025-12-31T23:59:59Z",
            "usageLimit": 100,
            "appliesOncePerCustomer": true,
            "customerGets": {
                "items": {
                    "products": {
                        "productsToAdd": [
                            "gid://shopify/Product/121709582",
                            "gid://shopify/Product/108828309"
                        ]
                    }
                },
                "value": {
                    "percentage": 0.1
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "discountCodeBasicUpdate": {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/139986317"
    },
    "userErrors": []
  }
}
``` 
*   ### discountCodeBasicUpdate reference

Examples
--------

Update a basic code discount

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeBasicUpdate(%24id%3A%20ID!%2C%20%24basicCodeDiscount%3A%20DiscountCodeBasicInput!)%20%7B%0A%20%20discountCodeBasicUpdate(id%3A%20%24id%2C%20basicCodeDiscount%3A%20%24basicCodeDiscount)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeNode%2F206265824%22%2C%0A%20%20%22basicCodeDiscount%22%3A%20%7B%0A%20%20%20%20%22endsAt%22%3A%20null%2C%0A%20%20%20%20%22code%22%3A%20%22NEW_CODE%22%2C%0A%20%20%20%20%22appliesOncePerCustomer%22%3A%20true%2C%0A%20%20%20%20%22customerGets%22%3A%20%7B%0A%20%20%20%20%20%20%22value%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22percentage%22%3A%200.4%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {

 discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {

 codeDiscountNode {

 id

 }

 userErrors {

 field

 code

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/DiscountCodeNode/206265824",

"basicCodeDiscount":{

"endsAt":null,

"code":"NEW_CODE",

"appliesOncePerCustomer":true,

"customerGets":{

"value":{

"percentage":0.4

}

}

}

},

},

);

const data=await response.json();

```
mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      id
    }
    userErrors {
      field
      code
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
"query": "mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) { discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) { codeDiscountNode { id } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/206265824",
    "basicCodeDiscount": {
      "endsAt": null,
      "code": "NEW_CODE",
      "appliesOncePerCustomer": true,
      "customerGets": {
        "value": {
          "percentage": 0.4
        }
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/DiscountCodeNode/206265824",
        "basicCodeDiscount": {
            "endsAt": null,
            "code": "NEW_CODE",
            "appliesOncePerCustomer": true,
            "customerGets": {
                "value": {
                    "percentage": 0.4
                }
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
    "query": `mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
      discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
          id
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/206265824",
        "basicCodeDiscount": {
            "endsAt": null,
            "code": "NEW_CODE",
            "appliesOncePerCustomer": true,
            "customerGets": {
                "value": {
                    "percentage": 0.4
                }
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
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/DiscountCodeNode/206265824",
  "basicCodeDiscount": {
    "endsAt": null,
    "code": "NEW_CODE",
    "appliesOncePerCustomer": true,
    "customerGets": {
      "value": {
        "percentage": 0.4
      }
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

›

⌄

⌄

⌄

⌄

{

"id": "gid://shopify/DiscountCodeNode/206265824",

"basicCodeDiscount": {

"endsAt": null,

"code": "NEW_CODE",

"appliesOncePerCustomer": true,

"customerGets": {

"value": {

"percentage": 0.4

}

}

}

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

›

⌄

⌄

⌄

{

"discountCodeBasicUpdate": {

"codeDiscountNode": {

"id": "gid://shopify/DiscountCodeNode/206265824"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*