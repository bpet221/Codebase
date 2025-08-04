---
title: "customerGenerateAccountActivationUrl"
description: "Shopify GraphQL Admin API documentation for customergenerateaccountactivationurl"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerGenerateAccountActivationUrl - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl

Markdown Content:
customerGenerateAccountActivationUrl - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#main-content)

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
*   
Customers

    *   Queries   
    *   
Mutations

        *   [customer Address Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddresscreate)
        *   [customer Address Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddressdelete)
        *   [customer Address Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddressupdate)
        *   [customer Add Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeraddtaxexemptions)
        *   [customer Cancel Data Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercanceldataerasure)
        *   [customer Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate)
        *   [customer Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerdelete)
        *   [customer Email Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customeremailmarketingconsentupdate)
        *   [customer Generate Account Activation Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl)
        *   [customer Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge)
        *   [customer Remove Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerremovetaxexemptions)
        *   [customer Replace Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerreplacetaxexemptions)
        *   [customer Request Data Erasure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerrequestdataerasure)
        *   [customer Segment Members Query Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersegmentmembersquerycreate)
        *   [customer Send Account Invite Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersendaccountinviteemail)
        *   [customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerset)
        *   [customer Sms Marketing Consent Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate)
        *   [customer Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate)
        *   [customer Update Default Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress)
        *   [order Customer Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/ordercustomerset)
        *   [segment Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentcreate)
        *   [segment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentdelete)
        *   [segment Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/segmentupdate)
        *   [tax App Configure](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxappconfigure)

    *   Objects   

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

[Anchor to customerGenerateAccountActivationUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#top)
customer Generate Account Activation Url
========================================

mutation

Requires `write_customers` access scope.

Generate an account activation URL for a customer.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#arguments)
Arguments
---------

[Anchor to customerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#arguments-customerId)customer Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customer that the URL is generated for.

* * *

Was this section helpful?

Yes No

[Anchor to CustomerGenerateAccountActivationUrlPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#returns)Customer Generate Account Activation Url Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to accountActivationUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#returns-accountActivationUrl)account Activation Url

•[URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

The generated account activation URL.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customergenerateaccountactivationurl#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Creates an account activation URL for a customer

#### Query

```graphql
mutation customerGenerateAccountActivationUrl($customerId: ID!) {
  customerGenerateAccountActivationUrl(customerId: $customerId) {
    accountActivationUrl
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "customerId": "gid://shopify/Customer/105906728"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation customerGenerateAccountActivationUrl($customerId: ID!) { customerGenerateAccountActivationUrl(customerId: $customerId) { accountActivationUrl userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/105906728"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerId": "gid://shopify/Customer/105906728"
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
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerId": "gid://shopify/Customer/105906728"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerGenerateAccountActivationUrl($customerId: ID!) {
      customerGenerateAccountActivationUrl(customerId: $customerId) {
        accountActivationUrl
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/105906728"
    },
  },
});
``` #### Response

```json
{
  "customerGenerateAccountActivationUrl": {
    "accountActivationUrl": "https://activation.example.com",
    "userErrors": []
  }
}
``` 
*   ### customerGenerateAccountActivationUrl reference

Examples
--------

Creates an account activation URL for a customer

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20customerGenerateAccountActivationUrl(%24customerId%3A%20ID!)%20%7B%0A%20%20customerGenerateAccountActivationUrl(customerId%3A%20%24customerId)%20%7B%0A%20%20%20%20accountActivationUrl%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F105906728%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation customerGenerateAccountActivationUrl($customerId: ID!) {

 customerGenerateAccountActivationUrl(customerId: $customerId) {

 accountActivationUrl

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"customerId":"gid://shopify/Customer/105906728"

},

},

);

const data=await response.json();

```
mutation customerGenerateAccountActivationUrl($customerId: ID!) {
  customerGenerateAccountActivationUrl(customerId: $customerId) {
    accountActivationUrl
    userErrors {
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
"query": "mutation customerGenerateAccountActivationUrl($customerId: ID!) { customerGenerateAccountActivationUrl(customerId: $customerId) { accountActivationUrl userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/105906728"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerId": "gid://shopify/Customer/105906728"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerGenerateAccountActivationUrl($customerId: ID!) {
      customerGenerateAccountActivationUrl(customerId: $customerId) {
        accountActivationUrl
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/105906728"
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
  mutation customerGenerateAccountActivationUrl($customerId: ID!) {
    customerGenerateAccountActivationUrl(customerId: $customerId) {
      accountActivationUrl
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerId": "gid://shopify/Customer/105906728"
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

"customerId": "gid://shopify/Customer/105906728"

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

›

⌄

⌄

{

"customerGenerateAccountActivationUrl": {

"accountActivationUrl": "https://activation.example.com",

"userErrors": []

}

}


---
*Content truncated at "Updates" section*