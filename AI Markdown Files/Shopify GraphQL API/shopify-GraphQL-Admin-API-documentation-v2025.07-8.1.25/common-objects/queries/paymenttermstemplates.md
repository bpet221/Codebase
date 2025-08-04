---
title: "paymentTermsTemplates"
description: "Shopify GraphQL Admin API documentation for paymenttermstemplates"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: paymentTermsTemplates - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates

Markdown Content:
paymentTermsTemplates - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates#main-content)

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
*   
Common objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentbyabandonedcheckoutid)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerpaymentmethod)
        *   [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)
        *   [finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeappaccesspolicy)
        *   [fulfillment Constraint Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentconstraintrules)
        *   [gift Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard)
        *   [gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardconfiguration)
        *   [gift Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards)
        *   [gift Cards Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardscount)
        *   [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)
        *   [node](https://shopify.dev/docs/api/admin-graphql/latest/queries/node)
        *   [nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/nodes)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [product Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeed)
        *   [product Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeeds)
        *   [public Api Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicapiversions)
        *   [shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunction)
        *   [shopify Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunctions)
        *   [shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipt)
        *   [shop Pay Payment Request Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipts)
        *   [staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember)
        *   [staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmembers)
        *   [store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount)
        *   [validation](https://shopify.dev/docs/api/admin-graphql/latest/queries/validation)
        *   [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

    *   Mutations   
    *   Objects   

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

[Anchor to paymentTermsTemplates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates#top)
payment Terms Templates
=======================

query

The list of payment terms templates eligible for all shops and users.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates#arguments)
Arguments
---------

[Anchor to paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates#arguments-paymentTermsType)payment Terms Type

•[Payment Terms Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType)

The payment terms type to filter the payment terms templates list.

Show enum values

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates#possible-returns)Possible returns
----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to PaymentTermsTemplate](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates#returns-PaymentTermsTemplate)Payment Terms Template

•[[Payment Terms Template!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate)

Represents the payment terms template object.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the available payment terms templates

#### Description

The following query retrieves the available payment terms templates.

#### Query

```graphql
query {
  paymentTermsTemplates {
    id
    name
    paymentTermsType
    dueInDays
    description
    translatedName
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { paymentTermsTemplates { id name paymentTermsType dueInDays description translatedName } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    paymentTermsTemplates {
      id
      name
      paymentTermsType
      dueInDays
      description
      translatedName
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
  query {
    paymentTermsTemplates {
      id
      name
      paymentTermsType
      dueInDays
      description
      translatedName
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    paymentTermsTemplates {
      id
      name
      paymentTermsType
      dueInDays
      description
      translatedName
    }
  }`,
});
``` #### Response

```json
{
  "paymentTermsTemplates": [
    {
      "id": "gid://shopify/PaymentTermsTemplate/1",
      "name": "Due on receipt",
      "paymentTermsType": "RECEIPT",
      "dueInDays": null,
      "description": "Due on receipt",
      "translatedName": "Due on receipt"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/9",
      "name": "Due on fulfillment",
      "paymentTermsType": "FULFILLMENT",
      "dueInDays": null,
      "description": "Due on fulfillment",
      "translatedName": "Due on fulfillment"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/2",
      "name": "Net 7",
      "paymentTermsType": "NET",
      "dueInDays": 7,
      "description": "Within 7 days",
      "translatedName": "Net 7"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/3",
      "name": "Net 15",
      "paymentTermsType": "NET",
      "dueInDays": 15,
      "description": "Within 15 days",
      "translatedName": "Net 15"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/4",
      "name": "Net 30",
      "paymentTermsType": "NET",
      "dueInDays": 30,
      "description": "Within 30 days",
      "translatedName": "Net 30"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/8",
      "name": "Net 45",
      "paymentTermsType": "NET",
      "dueInDays": 45,
      "description": "Within 45 days",
      "translatedName": "Net 45"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/5",
      "name": "Net 60",
      "paymentTermsType": "NET",
      "dueInDays": 60,
      "description": "Within 60 days",
      "translatedName": "Net 60"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/6",
      "name": "Net 90",
      "paymentTermsType": "NET",
      "dueInDays": 90,
      "description": "Within 90 days",
      "translatedName": "Net 90"
    },
    {
      "id": "gid://shopify/PaymentTermsTemplate/7",
      "name": "Fixed",
      "paymentTermsType": "FIXED",
      "dueInDays": null,
      "description": "Fixed date",
      "translatedName": "Fixed"
    }
  ]
}
``` 

Get the available payment terms templates
-----------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20paymentTermsTemplates%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20paymentTermsType%0A%20%20%20%20dueInDays%0A%20%20%20%20description%0A%20%20%20%20translatedName%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 paymentTermsTemplates {

 id

 name

 paymentTermsType

 dueInDays

 description

 translatedName

 }

 }`,

);

const data=await response.json();

```
query {
  paymentTermsTemplates {
    id
    name
    paymentTermsType
    dueInDays
    description
    translatedName
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { paymentTermsTemplates { id name paymentTermsType dueInDays description translatedName } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    paymentTermsTemplates {
      id
      name
      paymentTermsType
      dueInDays
      description
      translatedName
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    paymentTermsTemplates {
      id
      name
      paymentTermsType
      dueInDays
      description
      translatedName
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
  query {
    paymentTermsTemplates {
      id
      name
      paymentTermsType
      dueInDays
      description
      translatedName
    }
  }
QUERY

response = client.query(query: query)
```

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

{

"paymentTermsTemplates": [

{

"id": "gid://shopify/PaymentTermsTemplate/1",

"name": "Due on receipt",

"paymentTermsType": "RECEIPT",

"dueInDays": null,

"description": "Due on receipt",

"translatedName": "Due on receipt"

},

{

"id": "gid://shopify/PaymentTermsTemplate/9",

"name": "Due on fulfillment",

"paymentTermsType": "FULFILLMENT",

"dueInDays": null,

"description": "Due on fulfillment",

"translatedName": "Due on fulfillment"

},

{

"id": "gid://shopify/PaymentTermsTemplate/2",

"name": "Net 7",

"paymentTermsType": "NET",

"dueInDays": 7,

"description": "Within 7 days",

"translatedName": "Net 7"

},

{

"id": "gid://shopify/PaymentTermsTemplate/3",

"name": "Net 15",

"paymentTermsType": "NET",

"dueInDays": 15,

"description": "Within 15 days",

"translatedName": "Net 15"

},

{

"id": "gid://shopify/PaymentTermsTemplate/4",


---
*Content truncated at "Updates" section*