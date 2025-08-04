---
title: "customerSmsMarketingConsentUpdate"
description: "Shopify GraphQL Admin API documentation for customersmsmarketingconsentupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerSmsMarketingConsentUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate

Markdown Content:
customerSmsMarketingConsentUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#main-content)

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

[Anchor to customerSmsMarketingConsentUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#top)
customer Sms Marketing Consent Update
=====================================

mutation

Requires `write_customers` access scope.

Update a customer's SMS marketing consent information.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#arguments-input)input

•[Customer Sms Marketing Consent Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentUpdateInput)

required

Specifies the input fields to update a customer's SMS marketing consent information.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CustomerSmsMarketingConsentUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#returns)Customer Sms Marketing Consent Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#returns-customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The updated customer.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customersmsmarketingconsentupdate#returns-userErrors)user Errors

•[[Customer Sms Marketing Consent Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSmsMarketingConsentError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Subscribe a customer to SMS marketing materials

#### Query

```graphql
mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
  customerSmsMarketingConsentUpdate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      phone
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
        consentCollectedFrom
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "SUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN"
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
"query": "mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) { customerSmsMarketingConsentUpdate(input: $input) { userErrors { field message } customer { id phone smsMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt consentCollectedFrom } } } }",
 "variables": {
    "input": {
      "customerId": "gid://shopify/Customer/207119551",
      "smsMarketingConsent": {
        "marketingState": "SUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "SUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN"
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
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "SUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
      customerSmsMarketingConsentUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          phone
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
            consentCollectedFrom
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "SUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "customerSmsMarketingConsentUpdate": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/207119551",
      "phone": "+16136120707",
      "smsMarketingConsent": {
        "marketingState": "SUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN",
        "consentUpdatedAt": "2024-09-12T01:08:05Z",
        "consentCollectedFrom": "OTHER"
      }
    }
  }
}
``` 
*   ### Subscribe a customer to SMS marketing materials with the date at which the consent was collected

#### Query

```graphql
mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
  customerSmsMarketingConsentUpdate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      phone
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
        consentCollectedFrom
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "UNSUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN",
      "consentUpdatedAt": "2021-01-07T15:50:00Z"
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
"query": "mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) { customerSmsMarketingConsentUpdate(input: $input) { userErrors { field message } customer { id phone smsMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt consentCollectedFrom } } } }",
 "variables": {
    "input": {
      "customerId": "gid://shopify/Customer/207119551",
      "smsMarketingConsent": {
        "marketingState": "UNSUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN",
        "consentUpdatedAt": "2021-01-07T15:50:00Z"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "UNSUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN",
                "consentUpdatedAt": "2021-01-07T15:50:00Z"
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
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "UNSUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN",
      "consentUpdatedAt": "2021-01-07T15:50:00Z"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
      customerSmsMarketingConsentUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          phone
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
            consentCollectedFrom
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "UNSUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN",
                "consentUpdatedAt": "2021-01-07T15:50:00Z"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "customerSmsMarketingConsentUpdate": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/207119551",
      "phone": "+16136120707",
      "smsMarketingConsent": {
        "marketingState": "UNSUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN",
        "consentUpdatedAt": "2021-01-07T15:50:00Z",
        "consentCollectedFrom": "OTHER"
      }
    }
  }
}
``` 
*   ### Unsubscribe a customer from SMS marketing materials

#### Query

```graphql
mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
  customerSmsMarketingConsentUpdate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      phone
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
        consentCollectedFrom
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "UNSUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN"
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
"query": "mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) { customerSmsMarketingConsentUpdate(input: $input) { userErrors { field message } customer { id phone smsMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt consentCollectedFrom } } } }",
 "variables": {
    "input": {
      "customerId": "gid://shopify/Customer/207119551",
      "smsMarketingConsent": {
        "marketingState": "UNSUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "UNSUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN"
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
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "UNSUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
      customerSmsMarketingConsentUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          phone
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
            consentCollectedFrom
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "UNSUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "customerSmsMarketingConsentUpdate": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/207119551",
      "phone": "+16136120707",
      "smsMarketingConsent": {
        "marketingState": "UNSUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN",
        "consentUpdatedAt": "2024-09-12T01:08:05Z",
        "consentCollectedFrom": "OTHER"
      }
    }
  }
}
``` 
*   ### customerSmsMarketingConsentUpdate reference

Examples
--------

Subscribe a customer to SMS marketing materials

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20customerSmsMarketingConsentUpdate(%24input%3A%20CustomerSmsMarketingConsentUpdateInput!)%20%7B%0A%20%20customerSmsMarketingConsentUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20phone%0A%20%20%20%20%20%20smsMarketingConsent%20%7B%0A%20%20%20%20%20%20%20%20marketingState%0A%20%20%20%20%20%20%20%20marketingOptInLevel%0A%20%20%20%20%20%20%20%20consentUpdatedAt%0A%20%20%20%20%20%20%20%20consentCollectedFrom%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F207119551%22%2C%0A%20%20%20%20%22smsMarketingConsent%22%3A%20%7B%0A%20%20%20%20%20%20%22marketingState%22%3A%20%22SUBSCRIBED%22%2C%0A%20%20%20%20%20%20%22marketingOptInLevel%22%3A%20%22SINGLE_OPT_IN%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {

 customerSmsMarketingConsentUpdate(input: $input) {

 userErrors {

 field

 message

 }

 customer {

 id

 phone

 smsMarketingConsent {

 marketingState

 marketingOptInLevel

 consentUpdatedAt

 consentCollectedFrom

 }

 }

 }

 }`,

{

variables:{

"input":{

"customerId":"gid://shopify/Customer/207119551",

"smsMarketingConsent":{

"marketingState":"SUBSCRIBED",

"marketingOptInLevel":"SINGLE_OPT_IN"

}

}

},

},

);

const data=await response.json();

```
mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
  customerSmsMarketingConsentUpdate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      phone
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
        consentCollectedFrom
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
"query": "mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) { customerSmsMarketingConsentUpdate(input: $input) { userErrors { field message } customer { id phone smsMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt consentCollectedFrom } } } }",
 "variables": {
    "input": {
      "customerId": "gid://shopify/Customer/207119551",
      "smsMarketingConsent": {
        "marketingState": "SUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "SUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN"
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
    "query": `mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
      customerSmsMarketingConsentUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          phone
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
            consentCollectedFrom
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "customerId": "gid://shopify/Customer/207119551",
            "smsMarketingConsent": {
                "marketingState": "SUBSCRIBED",
                "marketingOptInLevel": "SINGLE_OPT_IN"
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
  mutation customerSmsMarketingConsentUpdate($input: CustomerSmsMarketingConsentUpdateInput!) {
    customerSmsMarketingConsentUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        phone
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
          consentCollectedFrom
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "customerId": "gid://shopify/Customer/207119551",
    "smsMarketingConsent": {
      "marketingState": "SUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN"
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

"input": {

"customerId": "gid://shopify/Customer/207119551",

"smsMarketingConsent": {

"marketingState": "SUBSCRIBED",

"marketingOptInLevel": "SINGLE_OPT_IN"

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

›

⌄

⌄

⌄

⌄

{

"customerSmsMarketingConsentUpdate": {

"userErrors": [],

"customer": {

"id": "gid://shopify/Customer/207119551",

"phone": "+16136120707",

"smsMarketingConsent": {

"marketingState": "SUBSCRIBED",

"marketingOptInLevel": "SINGLE_OPT_IN",

"consentUpdatedAt": "2024-09-12T01:08:05Z",

"consentCollectedFrom": "OTHER"

}

}

}

}


---
*Content truncated at "Updates" section*