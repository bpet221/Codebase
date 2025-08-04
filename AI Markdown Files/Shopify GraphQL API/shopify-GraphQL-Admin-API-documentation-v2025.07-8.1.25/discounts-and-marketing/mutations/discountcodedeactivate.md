---
title: "discountCodeDeactivate"
description: "Shopify GraphQL Admin API documentation for discountcodedeactivate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodeDeactivate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate

Markdown Content:
discountCodeDeactivate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#main-content)

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
*   
Discounts and marketing

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
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
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

[Anchor to discountCodeDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#top)
discount Code Deactivate
========================

mutation

Requires Apps must have `write_discounts` access scope.

Deactivates a code discount.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the code discount to deactivate.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountCodeDeactivatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#returns)Discount Code Deactivate Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to codeDiscountNode](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#returns-codeDiscountNode)code Discount Node

•[Discount Code Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

The deactivated code discount.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Deactivate a code discount set to start in the future

#### Description

Deactivating a code discount set in the future sets its `startsAt` and `endsAt` to now. In this example, the `startsAt` and `endsAt` were originally set in the year 2049.

#### Query

```graphql
mutation discountCodeDeactivate($id: ID!) {
  discountCodeDeactivate(id: $id) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          status
          startsAt
          endsAt
        }
      }
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
  "id": "gid://shopify/DiscountCodeNode/206265824"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountCodeDeactivate($id: ID!) { discountCodeDeactivate(id: $id) { codeDiscountNode { codeDiscount { ... on DiscountCodeBasic { title status startsAt endsAt } } } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/206265824"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            status
            startsAt
            endsAt
          }
        }
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
        "id": "gid://shopify/DiscountCodeNode/206265824"
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
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            status
            startsAt
            endsAt
          }
        }
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
  "id": "gid://shopify/DiscountCodeNode/206265824"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeDeactivate($id: ID!) {
      discountCodeDeactivate(id: $id) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/206265824"
    },
  },
});
``` #### Response

```json
{
  "discountCodeDeactivate": {
    "codeDiscountNode": {
      "codeDiscount": {
        "title": "percentage_off_code",
        "status": "EXPIRED",
        "startsAt": "2024-09-12T01:06:40Z",
        "endsAt": "2024-09-12T01:06:40Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Deactivate an active code discount

#### Description

Deactivating an active code discount sets the `endsAt` to now. In this example, the `endsAt` was originally set to January 1, 2049.

#### Query

```graphql
mutation discountCodeDeactivate($id: ID!) {
  discountCodeDeactivate(id: $id) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          status
          startsAt
          endsAt
        }
      }
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
  "id": "gid://shopify/DiscountCodeNode/206265824"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountCodeDeactivate($id: ID!) { discountCodeDeactivate(id: $id) { codeDiscountNode { codeDiscount { ... on DiscountCodeBasic { title status startsAt endsAt } } } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/206265824"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            status
            startsAt
            endsAt
          }
        }
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
        "id": "gid://shopify/DiscountCodeNode/206265824"
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
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            status
            startsAt
            endsAt
          }
        }
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
  "id": "gid://shopify/DiscountCodeNode/206265824"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeDeactivate($id: ID!) {
      discountCodeDeactivate(id: $id) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/206265824"
    },
  },
});
``` #### Response

```json
{
  "discountCodeDeactivate": {
    "codeDiscountNode": {
      "codeDiscount": {
        "title": "percentage_off_code",
        "status": "EXPIRED",
        "startsAt": "2024-09-03T01:05:24Z",
        "endsAt": "2024-09-12T01:06:40Z"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### discountCodeDeactivate reference

Examples
--------

Deactivate a code discount set to start in the future

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeDeactivate(%24id%3A%20ID!)%20%7B%0A%20%20discountCodeDeactivate(id%3A%20%24id)%20%7B%0A%20%20%20%20codeDiscountNode%20%7B%0A%20%20%20%20%20%20codeDiscount%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DiscountCodeBasic%20%7B%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20startsAt%0A%20%20%20%20%20%20%20%20%20%20endsAt%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FDiscountCodeNode%2F206265824%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation discountCodeDeactivate($id: ID!) {

 discountCodeDeactivate(id: $id) {

 codeDiscountNode {

 codeDiscount {

 ... on DiscountCodeBasic {

 title

 status

 startsAt

 endsAt

 }

 }

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

"id":"gid://shopify/DiscountCodeNode/206265824"

},

},

);

const data=await response.json();

```
mutation discountCodeDeactivate($id: ID!) {
  discountCodeDeactivate(id: $id) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          status
          startsAt
          endsAt
        }
      }
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
"query": "mutation discountCodeDeactivate($id: ID!) { discountCodeDeactivate(id: $id) { codeDiscountNode { codeDiscount { ... on DiscountCodeBasic { title status startsAt endsAt } } } userErrors { field code message } } }",
 "variables": {
    "id": "gid://shopify/DiscountCodeNode/206265824"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            status
            startsAt
            endsAt
          }
        }
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
        "id": "gid://shopify/DiscountCodeNode/206265824"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeDeactivate($id: ID!) {
      discountCodeDeactivate(id: $id) {
        codeDiscountNode {
          codeDiscount {
            ... on DiscountCodeBasic {
              title
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/DiscountCodeNode/206265824"
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
  mutation discountCodeDeactivate($id: ID!) {
    discountCodeDeactivate(id: $id) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            status
            startsAt
            endsAt
          }
        }
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
  "id": "gid://shopify/DiscountCodeNode/206265824"
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

›

⌄

{

"id": "gid://shopify/DiscountCodeNode/206265824"

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

{

"discountCodeDeactivate": {

"codeDiscountNode": {

"codeDiscount": {

"title": "percentage_off_code",

"status": "EXPIRED",

"startsAt": "2024-09-12T01:06:40Z",

"endsAt": "2024-09-12T01:06:40Z"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*