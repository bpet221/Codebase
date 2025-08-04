---
title: "discountCodeBulkDeactivate"
description: "Shopify GraphQL Admin API documentation for discountcodebulkdeactivate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: discountCodeBulkDeactivate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate

Markdown Content:
discountCodeBulkDeactivate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#main-content)

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

[Anchor to discountCodeBulkDeactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#top)
discount Code Bulk Deactivate
=============================

mutation

Requires Apps must have `write_discounts` access scope.

Deactivates multiple [code-based discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) asynchronously using one of the following:

*   A search query
*   A saved search ID
*   A list of discount code IDs

For example, you can deactivate discounts for all codes that match a search criteria, or deactivate a predefined set of discount codes.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#arguments)
Arguments
---------

[Anchor to ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#arguments-ids)ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The IDs of the discounts to deactivate.

[Anchor to savedSearchId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#arguments-savedSearchId)saved Search Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the saved search for filtering discounts to deactivate. Saved searches represent [customer segments](https://help.shopify.com/manual/customers/customer-segments) that merchants have built in the Shopify admin.

[Anchor to search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#arguments-search)search

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The search query for filtering discounts. 

 For more information on the list of supported fields and search syntax, refer to the [`codeDiscountNodes`](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes#query-arguments) query.

* * *

Was this section helpful?

Yes No

[Anchor to DiscountCodeBulkDeactivatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#returns)Discount Code Bulk Deactivate Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job that deactivates the discounts.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate#returns-userErrors)user Errors

•[[Discount User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Asynchronously deactivate code discounts in bulk using a search filter

#### Description

Asynchronously deactivate all [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that expired in the past week and provide a percentage off the products in an order.

#### Query

```graphql
mutation discountCodeBulkDeactivate($search: String) {
  discountCodeBulkDeactivate(search: $search) {
    job {
      id
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "search": "discount_type:percentage ends_at:past_week"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountCodeBulkDeactivate($search: String) { discountCodeBulkDeactivate(search: $search) { job { id } userErrors { code field message } } }",
 "variables": {
    "search": "discount_type:percentage ends_at:past_week"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBulkDeactivate($search: String) {
    discountCodeBulkDeactivate(search: $search) {
      job {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "search": "discount_type:percentage ends_at:past_week"
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
  mutation discountCodeBulkDeactivate($search: String) {
    discountCodeBulkDeactivate(search: $search) {
      job {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "search": "discount_type:percentage ends_at:past_week"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeBulkDeactivate($search: String) {
      discountCodeBulkDeactivate(search: $search) {
        job {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "search": "discount_type:percentage ends_at:past_week"
    },
  },
});
``` #### Response

```json
{
  "discountCodeBulkDeactivate": {
    "job": {
      "id": "gid://shopify/Job/54e3ab26-1701-4c10-b582-875adb274811"
    },
    "userErrors": []
  }
}
``` 
*   ### Using more than one argument returns an error

#### Description

If you use both `search` and `ids` arguments in the same request, then the mutation returns an error.

#### Query

```graphql
mutation discountCodeBulkDeactivate($search: String, $ids: [ID!]) {
  discountCodeBulkDeactivate(search: $search, ids: $ids) {
    job {
      id
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "ids": [
    "gid://shopify/DiscountCodeNode/1"
  ],
  "search": "discount_type:bxgy"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation discountCodeBulkDeactivate($search: String, $ids: [ID!]) { discountCodeBulkDeactivate(search: $search, ids: $ids) { job { id } userErrors { code field message } } }",
 "variables": {
    "ids": [
      "gid://shopify/DiscountCodeNode/1"
    ],
    "search": "discount_type:bxgy"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBulkDeactivate($search: String, $ids: [ID!]) {
    discountCodeBulkDeactivate(search: $search, ids: $ids) {
      job {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "ids": [
            "gid://shopify/DiscountCodeNode/1"
        ],
        "search": "discount_type:bxgy"
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
  mutation discountCodeBulkDeactivate($search: String, $ids: [ID!]) {
    discountCodeBulkDeactivate(search: $search, ids: $ids) {
      job {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "ids": [
    "gid://shopify/DiscountCodeNode/1"
  ],
  "search": "discount_type:bxgy"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeBulkDeactivate($search: String, $ids: [ID!]) {
      discountCodeBulkDeactivate(search: $search, ids: $ids) {
        job {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "ids": [
            "gid://shopify/DiscountCodeNode/1"
        ],
        "search": "discount_type:bxgy"
    },
  },
});
``` #### Response

```json
{
  "discountCodeBulkDeactivate": {
    "job": null,
    "userErrors": [
      {
        "code": "TOO_MANY_ARGUMENTS",
        "field": null,
        "message": "Only one of 'ids', 'search' or 'saved_search_id' is allowed."
      }
    ]
  }
}
``` 
*   ### discountCodeBulkDeactivate reference

Examples
--------

Asynchronously deactivate code discounts in bulk using a search filter

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20discountCodeBulkDeactivate(%24search%3A%20String)%20%7B%0A%20%20discountCodeBulkDeactivate(search%3A%20%24search)%20%7B%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22search%22%3A%20%22discount_type%3Apercentage%20ends_at%3Apast_week%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation discountCodeBulkDeactivate($search: String) {

 discountCodeBulkDeactivate(search: $search) {

 job {

 id

 }

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"search":"discount_type:percentage ends_at:past_week"

},

},

);

const data=await response.json();

```
mutation discountCodeBulkDeactivate($search: String) {
  discountCodeBulkDeactivate(search: $search) {
    job {
      id
    }
    userErrors {
      code
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
"query": "mutation discountCodeBulkDeactivate($search: String) { discountCodeBulkDeactivate(search: $search) { job { id } userErrors { code field message } } }",
 "variables": {
    "search": "discount_type:percentage ends_at:past_week"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation discountCodeBulkDeactivate($search: String) {
    discountCodeBulkDeactivate(search: $search) {
      job {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "search": "discount_type:percentage ends_at:past_week"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation discountCodeBulkDeactivate($search: String) {
      discountCodeBulkDeactivate(search: $search) {
        job {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "search": "discount_type:percentage ends_at:past_week"
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
  mutation discountCodeBulkDeactivate($search: String) {
    discountCodeBulkDeactivate(search: $search) {
      job {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "search": "discount_type:percentage ends_at:past_week"
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

"search": "discount_type:percentage ends_at:past_week"

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

"discountCodeBulkDeactivate": {

"job": {

"id": "gid://shopify/Job/54e3ab26-1701-4c10-b582-875adb274811"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*