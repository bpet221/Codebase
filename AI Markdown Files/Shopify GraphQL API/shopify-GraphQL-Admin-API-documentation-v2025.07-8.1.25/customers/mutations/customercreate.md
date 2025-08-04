---
title: "customerCreate"
description: "Shopify GraphQL Admin API documentation for customercreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate

Markdown Content:
customerCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#main-content)

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

[Anchor to customerCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#top)
customer Create
===============

mutation

Requires `write_customers` access scope.

Create a new customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#arguments-input)input

•[Customer Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

required

The input fields to create a customer.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CustomerCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#returns)Customer Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#returns-customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The created customer.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customercreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a customer subscribed to SMS marketing

#### Description

Create a customer and subscribe them to SMS marketing.

#### Query

```graphql
mutation customerCreate($input: CustomerInput!) {
  customerCreate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      email
      phone
      taxExempt
      firstName
      lastName
      amountSpent {
        amount
        currencyCode
      }
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "email": "steve.lastnameson@example.com",
    "phone": "+16465555555",
    "firstName": "Steve",
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
"query": "mutation customerCreate($input: CustomerInput!) { customerCreate(input: $input) { userErrors { field message } customer { id email phone taxExempt firstName lastName amountSpent { amount currencyCode } smsMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt } } } }",
 "variables": {
    "input": {
      "email": "steve.lastnameson@example.com",
      "phone": "+16465555555",
      "firstName": "Steve",
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
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "email": "steve.lastnameson@example.com",
            "phone": "+16465555555",
            "firstName": "Steve",
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
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "email": "steve.lastnameson@example.com",
    "phone": "+16465555555",
    "firstName": "Steve",
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
    "query": `mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          email
          phone
          taxExempt
          firstName
          lastName
          amountSpent {
            amount
            currencyCode
          }
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "email": "steve.lastnameson@example.com",
            "phone": "+16465555555",
            "firstName": "Steve",
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
  "customerCreate": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/1073340122",
      "email": "steve.lastnameson@example.com",
      "phone": "+16465555555",
      "taxExempt": false,
      "firstName": "Steve",
      "lastName": null,
      "amountSpent": {
        "amount": "0.0",
        "currencyCode": "USD"
      },
      "smsMarketingConsent": {
        "marketingState": "SUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN",
        "consentUpdatedAt": "2024-11-05T14:29:24Z"
      }
    }
  }
}
``` 
*   ### Create a customer without required attributes

#### Description

Creating a customer without an email, phone, first name or last name fails and returns an error.

#### Query

```graphql
mutation customerCreate($input: CustomerInput!) {
  customerCreate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      email
      phone
      taxExempt
      emailMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
      }
      firstName
      lastName
      amountSpent {
        amount
        currencyCode
      }
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
      }
      addresses {
        address1
        city
        countryCode
        phone
        zip
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "email": null,
    "phone": null,
    "firstName": null,
    "lastName": null
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation customerCreate($input: CustomerInput!) { customerCreate(input: $input) { userErrors { field message } customer { id email phone taxExempt emailMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt } firstName lastName amountSpent { amount currencyCode } smsMarketingConsent { marketingState marketingOptInLevel } addresses { address1 city countryCode phone zip } } } }",
 "variables": {
    "input": {
      "email": null,
      "phone": null,
      "firstName": null,
      "lastName": null
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        emailMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
        }
        addresses {
          address1
          city
          countryCode
          phone
          zip
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "email": null,
            "phone": null,
            "firstName": null,
            "lastName": null
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
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        emailMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
        }
        addresses {
          address1
          city
          countryCode
          phone
          zip
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "email": null,
    "phone": null,
    "firstName": null,
    "lastName": null
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          email
          phone
          taxExempt
          emailMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
          }
          firstName
          lastName
          amountSpent {
            amount
            currencyCode
          }
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
          }
          addresses {
            address1
            city
            countryCode
            phone
            zip
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "email": null,
            "phone": null,
            "firstName": null,
            "lastName": null
        }
    },
  },
});
``` #### Response

```json
{
  "customerCreate": {
    "userErrors": [
      {
        "field": null,
        "message": "Customer must have a name, phone number or email address"
      }
    ],
    "customer": null
  }
}
``` 
*   ### Create a new metafield on a new customer

#### Description

Create a new metafield `my_field.nickname` on a new customer. Alternatively, refer to the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on customer resources.

#### Query

```graphql
mutation createCustomerMetafields($input: CustomerInput!) {
  customerCreate(input: $input) {
    customer {
      id
      metafields(first: 3) {
        edges {
          node {
            id
            namespace
            key
            value
          }
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "nickname",
        "type": "single_line_text_field",
        "value": "rob"
      }
    ],
    "email": "bob.norman@example.com"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation createCustomerMetafields($input: CustomerInput!) { customerCreate(input: $input) { customer { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "nickname",
          "type": "single_line_text_field",
          "value": "rob"
        }
      ],
      "email": "bob.norman@example.com"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createCustomerMetafields($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`,
  {
    variables: {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "nickname",
                    "type": "single_line_text_field",
                    "value": "rob"
                }
            ],
            "email": "bob.norman@example.com"
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
  mutation createCustomerMetafields($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
QUERY

variables = {
  "input": {
    "metafields": [
      {
        "namespace": "my_field",
        "key": "nickname",
        "type": "single_line_text_field",
        "value": "rob"
      }
    ],
    "email": "bob.norman@example.com"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createCustomerMetafields($input: CustomerInput!) {
      customerCreate(input: $input) {
        customer {
          id
          metafields(first: 3) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    "variables": {
        "input": {
            "metafields": [
                {
                    "namespace": "my_field",
                    "key": "nickname",
                    "type": "single_line_text_field",
                    "value": "rob"
                }
            ],
            "email": "bob.norman@example.com"
        }
    },
  },
});
``` #### Response

```json
{
  "customerCreate": {
    "customer": {
      "id": "gid://shopify/Customer/1073340085",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069230109",
              "namespace": "my_field",
              "key": "nickname",
              "value": "rob"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Creates a customer

#### Description

Create a customer with an address.

#### Query

```graphql
mutation customerCreate($input: CustomerInput!) {
  customerCreate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      email
      phone
      taxExempt
      emailMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
      }
      firstName
      lastName
      amountSpent {
        amount
        currencyCode
      }
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
      }
      addresses {
        address1
        city
        country
        phone
        zip
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "email": "steve.lastnameson@example.com",
    "phone": "+16465555555",
    "firstName": "Steve",
    "lastName": "Lastname",
    "emailMarketingConsent": {
      "marketingOptInLevel": "CONFIRMED_OPT_IN",
      "marketingState": "SUBSCRIBED"
    },
    "addresses": [
      {
        "address1": "412 fake st",
        "city": "Ottawa",
        "province": "ON",
        "phone": "+16469999999",
        "zip": "A1A 4A1",
        "lastName": "Lastname",
        "firstName": "Steve",
        "countryCode": "CA"
      }
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
"query": "mutation customerCreate($input: CustomerInput!) { customerCreate(input: $input) { userErrors { field message } customer { id email phone taxExempt emailMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt } firstName lastName amountSpent { amount currencyCode } smsMarketingConsent { marketingState marketingOptInLevel } addresses { address1 city country phone zip } } } }",
 "variables": {
    "input": {
      "email": "steve.lastnameson@example.com",
      "phone": "+16465555555",
      "firstName": "Steve",
      "lastName": "Lastname",
      "emailMarketingConsent": {
        "marketingOptInLevel": "CONFIRMED_OPT_IN",
        "marketingState": "SUBSCRIBED"
      },
      "addresses": [
        {
          "address1": "412 fake st",
          "city": "Ottawa",
          "province": "ON",
          "phone": "+16469999999",
          "zip": "A1A 4A1",
          "lastName": "Lastname",
          "firstName": "Steve",
          "countryCode": "CA"
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        emailMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
        }
        addresses {
          address1
          city
          country
          phone
          zip
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "email": "steve.lastnameson@example.com",
            "phone": "+16465555555",
            "firstName": "Steve",
            "lastName": "Lastname",
            "emailMarketingConsent": {
                "marketingOptInLevel": "CONFIRMED_OPT_IN",
                "marketingState": "SUBSCRIBED"
            },
            "addresses": [
                {
                    "address1": "412 fake st",
                    "city": "Ottawa",
                    "province": "ON",
                    "phone": "+16469999999",
                    "zip": "A1A 4A1",
                    "lastName": "Lastname",
                    "firstName": "Steve",
                    "countryCode": "CA"
                }
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
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        emailMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
        }
        addresses {
          address1
          city
          country
          phone
          zip
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "email": "steve.lastnameson@example.com",
    "phone": "+16465555555",
    "firstName": "Steve",
    "lastName": "Lastname",
    "emailMarketingConsent": {
      "marketingOptInLevel": "CONFIRMED_OPT_IN",
      "marketingState": "SUBSCRIBED"
    },
    "addresses": [
      {
        "address1": "412 fake st",
        "city": "Ottawa",
        "province": "ON",
        "phone": "+16469999999",
        "zip": "A1A 4A1",
        "lastName": "Lastname",
        "firstName": "Steve",
        "countryCode": "CA"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          email
          phone
          taxExempt
          emailMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
          }
          firstName
          lastName
          amountSpent {
            amount
            currencyCode
          }
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
          }
          addresses {
            address1
            city
            country
            phone
            zip
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "email": "steve.lastnameson@example.com",
            "phone": "+16465555555",
            "firstName": "Steve",
            "lastName": "Lastname",
            "emailMarketingConsent": {
                "marketingOptInLevel": "CONFIRMED_OPT_IN",
                "marketingState": "SUBSCRIBED"
            },
            "addresses": [
                {
                    "address1": "412 fake st",
                    "city": "Ottawa",
                    "province": "ON",
                    "phone": "+16469999999",
                    "zip": "A1A 4A1",
                    "lastName": "Lastname",
                    "firstName": "Steve",
                    "countryCode": "CA"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "customerCreate": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/1073340090",
      "email": "steve.lastnameson@example.com",
      "phone": "+16465555555",
      "taxExempt": false,
      "emailMarketingConsent": {
        "marketingState": "SUBSCRIBED",
        "marketingOptInLevel": "CONFIRMED_OPT_IN",
        "consentUpdatedAt": "2024-11-05T14:29:06Z"
      },
      "firstName": "Steve",
      "lastName": "Lastname",
      "amountSpent": {
        "amount": "0.0",
        "currencyCode": "USD"
      },
      "smsMarketingConsent": {
        "marketingState": "NOT_SUBSCRIBED",
        "marketingOptInLevel": "SINGLE_OPT_IN"
      },
      "addresses": [
        {
          "address1": "412 fake st",
          "city": "Ottawa",
          "country": "Canada",
          "phone": "+16469999999",
          "zip": "A1A 4A1"
        }
      ]
    }
  }
}
``` 
*   ### customerCreate reference

Examples
--------

Create a customer subscribed to SMS marketing

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20customerCreate(%24input%3A%20CustomerInput!)%20%7B%0A%20%20customerCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20phone%0A%20%20%20%20%20%20taxExempt%0A%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20amountSpent%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20smsMarketingConsent%20%7B%0A%20%20%20%20%20%20%20%20marketingState%0A%20%20%20%20%20%20%20%20marketingOptInLevel%0A%20%20%20%20%20%20%20%20consentUpdatedAt%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22email%22%3A%20%22steve.lastnameson%40example.com%22%2C%0A%20%20%20%20%22phone%22%3A%20%22%2B16465555555%22%2C%0A%20%20%20%20%22firstName%22%3A%20%22Steve%22%2C%0A%20%20%20%20%22smsMarketingConsent%22%3A%20%7B%0A%20%20%20%20%20%20%22marketingState%22%3A%20%22SUBSCRIBED%22%2C%0A%20%20%20%20%20%20%22marketingOptInLevel%22%3A%20%22SINGLE_OPT_IN%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

 mutation customerCreate($input: CustomerInput!) {

 customerCreate(input: $input) {

 userErrors {

 field

 message

 }

 customer {

 id

 email

 phone

 taxExempt

 firstName

 lastName

 amountSpent {

 amount

 currencyCode

 }

 smsMarketingConsent {

 marketingState

 marketingOptInLevel

 consentUpdatedAt

 }

 }

 }

 }`,

{

variables:{

"input":{

"email":"steve.lastnameson@example.com",

"phone":"+16465555555",

"firstName":"Steve",

"smsMarketingConsent":{

```
mutation customerCreate($input: CustomerInput!) {
  customerCreate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      email
      phone
      taxExempt
      firstName
      lastName
      amountSpent {
        amount
        currencyCode
      }
      smsMarketingConsent {
        marketingState
        marketingOptInLevel
        consentUpdatedAt
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
"query": "mutation customerCreate($input: CustomerInput!) { customerCreate(input: $input) { userErrors { field message } customer { id email phone taxExempt firstName lastName amountSpent { amount currencyCode } smsMarketingConsent { marketingState marketingOptInLevel consentUpdatedAt } } } }",
 "variables": {
    "input": {
      "email": "steve.lastnameson@example.com",
      "phone": "+16465555555",
      "firstName": "Steve",
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
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "email": "steve.lastnameson@example.com",
            "phone": "+16465555555",
            "firstName": "Steve",
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
    "query": `mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          email
          phone
          taxExempt
          firstName
          lastName
          amountSpent {
            amount
            currencyCode
          }
          smsMarketingConsent {
            marketingState
            marketingOptInLevel
            consentUpdatedAt
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "email": "steve.lastnameson@example.com",
            "phone": "+16465555555",
            "firstName": "Steve",
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
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        firstName
        lastName
        amountSpent {
          amount
          currencyCode
        }
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
          consentUpdatedAt
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "email": "steve.lastnameson@example.com",
    "phone": "+16465555555",
    "firstName": "Steve",
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

›

⌄

⌄

⌄

{

"input": {

"email": "steve.lastnameson@example.com",

"phone": "+16465555555",

"firstName": "Steve",

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

16

17

18

19

20

21

22

›

⌄

⌄

⌄

⌄

⌄

{

"customerCreate": {

"userErrors": [],

"customer": {

"id": "gid://shopify/Customer/1073340122",

"email": "steve.lastnameson@example.com",

"phone": "+16465555555",

"taxExempt": false,

"firstName": "Steve",

"lastName": null,

"amountSpent": {

"amount": "0.0",

"currencyCode": "USD"

},

"smsMarketingConsent": {

"marketingState": "SUBSCRIBED",

"marketingOptInLevel": "SINGLE_OPT_IN",

"consentUpdatedAt": "2024-11-05T14:29:24Z"

}

}

}

}


---
*Content truncated at "Updates" section*