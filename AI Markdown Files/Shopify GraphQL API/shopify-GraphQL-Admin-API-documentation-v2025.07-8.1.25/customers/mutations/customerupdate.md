---
title: "customerUpdate"
description: "Shopify GraphQL Admin API documentation for customerupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate

Markdown Content:
customerUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#main-content)

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

[Anchor to customerUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#top)
customer Update
===============

mutation

Requires `write_customers` access scope.

Update a customer's attributes. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#arguments-input)input

•[Customer Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput)

required

Provides updated fields for the customer. To set marketing consent, use the `customerEmailMarketingConsentUpdate` or `customerSmsMarketingConsentUpdate` mutations instead.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CustomerUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#returns)Customer Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#returns-customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The updated customer.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new metafield and update another on an existing customer

#### Description

Create a new metafield `my_field.nickname` and update an existing metafield `my_field.pronouns` on a specific customer. Alternatively, refer to the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on customer resources.

#### Query

```graphql
mutation updateCustomerMetafields($input: CustomerInput!) {
  customerUpdate(input: $input) {
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
      },
      {
        "id": "gid://shopify/Metafield/1069230189",
        "value": "they/them"
      }
    ],
    "id": "gid://shopify/Customer/1018520244"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateCustomerMetafields($input: CustomerInput!) { customerUpdate(input: $input) { customer { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "nickname",
          "type": "single_line_text_field",
          "value": "rob"
        },
        {
          "id": "gid://shopify/Metafield/1069230189",
          "value": "they/them"
        }
      ],
      "id": "gid://shopify/Customer/1018520244"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCustomerMetafields($input: CustomerInput!) {
    customerUpdate(input: $input) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069230189",
                    "value": "they/them"
                }
            ],
            "id": "gid://shopify/Customer/1018520244"
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
  mutation updateCustomerMetafields($input: CustomerInput!) {
    customerUpdate(input: $input) {
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
      },
      {
        "id": "gid://shopify/Metafield/1069230189",
        "value": "they/them"
      }
    ],
    "id": "gid://shopify/Customer/1018520244"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateCustomerMetafields($input: CustomerInput!) {
      customerUpdate(input: $input) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069230189",
                    "value": "they/them"
                }
            ],
            "id": "gid://shopify/Customer/1018520244"
        }
    },
  },
});
``` #### Response

```json
{
  "customerUpdate": {
    "customer": {
      "id": "gid://shopify/Customer/1018520244",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069230189",
              "namespace": "my_field",
              "key": "pronouns",
              "value": "they/them"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069230190",
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
*   ### Creates a new address for a customer

#### Query

```graphql
mutation CustomerAddressCreate($customerId: ID!, $addresses: [MailingAddressInput!]) {
  customerUpdate(input: {id: $customerId, addresses: $addresses}) {
    customer {
      id
      addressesV2(first: 10) {
        edges {
          node {
            id
            address1
            city
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
  "customerId": "gid://shopify/Customer/1018520244",
  "addresses": [
    {
      "address1": "123 New Address",
      "city": "New City"
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
"query": "mutation CustomerAddressCreate($customerId: ID!, $addresses: [MailingAddressInput!]) { customerUpdate(input: {id: $customerId, addresses: $addresses}) { customer { id addressesV2(first: 10) { edges { node { id address1 city } } } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/1018520244",
    "addresses": [
      {
        "address1": "123 New Address",
        "city": "New City"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerAddressCreate($customerId: ID!, $addresses: [MailingAddressInput!]) {
    customerUpdate(input: {id: $customerId, addresses: $addresses}) {
      customer {
        id
        addressesV2(first: 10) {
          edges {
            node {
              id
              address1
              city
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
        "customerId": "gid://shopify/Customer/1018520244",
        "addresses": [
            {
                "address1": "123 New Address",
                "city": "New City"
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
  mutation CustomerAddressCreate($customerId: ID!, $addresses: [MailingAddressInput!]) {
    customerUpdate(input: {id: $customerId, addresses: $addresses}) {
      customer {
        id
        addressesV2(first: 10) {
          edges {
            node {
              id
              address1
              city
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
  "customerId": "gid://shopify/Customer/1018520244",
  "addresses": [
    {
      "address1": "123 New Address",
      "city": "New City"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerAddressCreate($customerId: ID!, $addresses: [MailingAddressInput!]) {
      customerUpdate(input: {id: $customerId, addresses: $addresses}) {
        customer {
          id
          addressesV2(first: 10) {
            edges {
              node {
                id
                address1
                city
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
        "customerId": "gid://shopify/Customer/1018520244",
        "addresses": [
            {
                "address1": "123 New Address",
                "city": "New City"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "customerUpdate": {
    "customer": {
      "id": "gid://shopify/Customer/1018520244",
      "addressesV2": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/MailingAddress/1053318591?model_name=CustomerAddress",
              "address1": "123 New Address",
              "city": "New City"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Performs bulk operations for multiple customer addresses

#### Query

```graphql
mutation CustomerAddressSet($customerId: ID!, $addresses: [MailingAddressInput!]) {
  customerUpdate(input: {id: $customerId, addresses: $addresses}) {
    customer {
      id
      addressesV2(first: 10) {
        edges {
          node {
            id
            address1
            city
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
  "customerId": "gid://shopify/Customer/1018520244",
  "addresses": [
    {
      "address1": "123 Main St",
      "city": "Metropolis"
    },
    {
      "address1": "456 Elm St",
      "city": "Gotham"
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
"query": "mutation CustomerAddressSet($customerId: ID!, $addresses: [MailingAddressInput!]) { customerUpdate(input: {id: $customerId, addresses: $addresses}) { customer { id addressesV2(first: 10) { edges { node { id address1 city } } } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/1018520244",
    "addresses": [
      {
        "address1": "123 Main St",
        "city": "Metropolis"
      },
      {
        "address1": "456 Elm St",
        "city": "Gotham"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerAddressSet($customerId: ID!, $addresses: [MailingAddressInput!]) {
    customerUpdate(input: {id: $customerId, addresses: $addresses}) {
      customer {
        id
        addressesV2(first: 10) {
          edges {
            node {
              id
              address1
              city
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
        "customerId": "gid://shopify/Customer/1018520244",
        "addresses": [
            {
                "address1": "123 Main St",
                "city": "Metropolis"
            },
            {
                "address1": "456 Elm St",
                "city": "Gotham"
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
  mutation CustomerAddressSet($customerId: ID!, $addresses: [MailingAddressInput!]) {
    customerUpdate(input: {id: $customerId, addresses: $addresses}) {
      customer {
        id
        addressesV2(first: 10) {
          edges {
            node {
              id
              address1
              city
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
  "customerId": "gid://shopify/Customer/1018520244",
  "addresses": [
    {
      "address1": "123 Main St",
      "city": "Metropolis"
    },
    {
      "address1": "456 Elm St",
      "city": "Gotham"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerAddressSet($customerId: ID!, $addresses: [MailingAddressInput!]) {
      customerUpdate(input: {id: $customerId, addresses: $addresses}) {
        customer {
          id
          addressesV2(first: 10) {
            edges {
              node {
                id
                address1
                city
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
        "customerId": "gid://shopify/Customer/1018520244",
        "addresses": [
            {
                "address1": "123 Main St",
                "city": "Metropolis"
            },
            {
                "address1": "456 Elm St",
                "city": "Gotham"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "customerUpdate": {
    "customer": {
      "id": "gid://shopify/Customer/1018520244",
      "addressesV2": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/MailingAddress/1053318585?model_name=CustomerAddress",
              "address1": "123 Main St",
              "city": "Metropolis"
            }
          },
          {
            "node": {
              "id": "gid://shopify/MailingAddress/1053318586?model_name=CustomerAddress",
              "address1": "456 Elm St",
              "city": "Gotham"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Update a customer with an ID that doesn't exist

#### Description

Trying to update a customer that doesn't exist will return an error

#### Query

```graphql
mutation customerUpdate($input: CustomerInput!) {
  customerUpdate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      firstName
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Customer/1",
    "firstName": "Tobi"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation customerUpdate($input: CustomerInput!) { customerUpdate(input: $input) { userErrors { field message } customer { id firstName } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Customer/1",
      "firstName": "Tobi"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerUpdate($input: CustomerInput!) {
    customerUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        firstName
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Customer/1",
            "firstName": "Tobi"
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
  mutation customerUpdate($input: CustomerInput!) {
    customerUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        firstName
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Customer/1",
    "firstName": "Tobi"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerUpdate($input: CustomerInput!) {
      customerUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          firstName
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Customer/1",
            "firstName": "Tobi"
        }
    },
  },
});
``` #### Response

```json
{
  "customerUpdate": {
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Customer does not exist"
      }
    ],
    "customer": null
  }
}
``` 
*   ### Updates a customer's first and last name

#### Description

Update a customer's first and last name

#### Query

```graphql
mutation customerUpdate($input: CustomerInput!) {
  customerUpdate(input: $input) {
    userErrors {
      field
      message
    }
    customer {
      id
      firstName
      lastName
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "id": "gid://shopify/Customer/1018520244",
    "firstName": "Tobi",
    "lastName": "Lutke"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation customerUpdate($input: CustomerInput!) { customerUpdate(input: $input) { userErrors { field message } customer { id firstName lastName } } }",
 "variables": {
    "input": {
      "id": "gid://shopify/Customer/1018520244",
      "firstName": "Tobi",
      "lastName": "Lutke"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerUpdate($input: CustomerInput!) {
    customerUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        firstName
        lastName
      }
    }
  }`,
  {
    variables: {
        "input": {
            "id": "gid://shopify/Customer/1018520244",
            "firstName": "Tobi",
            "lastName": "Lutke"
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
  mutation customerUpdate($input: CustomerInput!) {
    customerUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        firstName
        lastName
      }
    }
  }
QUERY

variables = {
  "input": {
    "id": "gid://shopify/Customer/1018520244",
    "firstName": "Tobi",
    "lastName": "Lutke"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerUpdate($input: CustomerInput!) {
      customerUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          firstName
          lastName
        }
      }
    }`,
    "variables": {
        "input": {
            "id": "gid://shopify/Customer/1018520244",
            "firstName": "Tobi",
            "lastName": "Lutke"
        }
    },
  },
});
``` #### Response

```json
{
  "customerUpdate": {
    "userErrors": [],
    "customer": {
      "id": "gid://shopify/Customer/1018520244",
      "firstName": "Tobi",
      "lastName": "Lutke"
    }
  }
}
``` 
*   ### Updates an existing customer address

#### Query

```graphql
mutation CustomerAddressUpdate($customerId: ID!, $addresses: [MailingAddressInput!]) {
  customerUpdate(input: {id: $customerId, addresses: $addresses}) {
    customer {
      id
      addressesV2(first: 10) {
        edges {
          node {
            id
            address1
            city
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
  "customerId": "gid://shopify/Customer/1018520244",
  "addresses": [
    {
      "address1": "123 New Street",
      "city": "New City"
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
"query": "mutation CustomerAddressUpdate($customerId: ID!, $addresses: [MailingAddressInput!]) { customerUpdate(input: {id: $customerId, addresses: $addresses}) { customer { id addressesV2(first: 10) { edges { node { id address1 city } } } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/1018520244",
    "addresses": [
      {
        "address1": "123 New Street",
        "city": "New City"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerAddressUpdate($customerId: ID!, $addresses: [MailingAddressInput!]) {
    customerUpdate(input: {id: $customerId, addresses: $addresses}) {
      customer {
        id
        addressesV2(first: 10) {
          edges {
            node {
              id
              address1
              city
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
        "customerId": "gid://shopify/Customer/1018520244",
        "addresses": [
            {
                "address1": "123 New Street",
                "city": "New City"
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
  mutation CustomerAddressUpdate($customerId: ID!, $addresses: [MailingAddressInput!]) {
    customerUpdate(input: {id: $customerId, addresses: $addresses}) {
      customer {
        id
        addressesV2(first: 10) {
          edges {
            node {
              id
              address1
              city
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
  "customerId": "gid://shopify/Customer/1018520244",
  "addresses": [
    {
      "address1": "123 New Street",
      "city": "New City"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerAddressUpdate($customerId: ID!, $addresses: [MailingAddressInput!]) {
      customerUpdate(input: {id: $customerId, addresses: $addresses}) {
        customer {
          id
          addressesV2(first: 10) {
            edges {
              node {
                id
                address1
                city
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
        "customerId": "gid://shopify/Customer/1018520244",
        "addresses": [
            {
                "address1": "123 New Street",
                "city": "New City"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "customerUpdate": {
    "customer": {
      "id": "gid://shopify/Customer/1018520244",
      "addressesV2": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/MailingAddress/1053318595?model_name=CustomerAddress",
              "address1": "123 New Street",
              "city": "New City"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### customerUpdate reference

Examples
--------

Create a new metafield and update another on an existing customer

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateCustomerMetafields(%24input%3A%20CustomerInput!)%20%7B%0A%20%20customerUpdate(input%3A%20%24input)%20%7B%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20metafields(first%3A%203)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22my_field%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22nickname%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22rob%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafield%2F1069230189%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22they%2Fthem%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F1018520244%22%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation updateCustomerMetafields($input: CustomerInput!) {

 customerUpdate(input: $input) {

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

variables:{

"input":{

"metafields":[

{

"namespace":"my_field",

"key":"nickname",

"type":"single_line_text_field",

"value":"rob"

},

{

```
mutation updateCustomerMetafields($input: CustomerInput!) {
  customerUpdate(input: $input) {
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateCustomerMetafields($input: CustomerInput!) { customerUpdate(input: $input) { customer { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "nickname",
          "type": "single_line_text_field",
          "value": "rob"
        },
        {
          "id": "gid://shopify/Metafield/1069230189",
          "value": "they/them"
        }
      ],
      "id": "gid://shopify/Customer/1018520244"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateCustomerMetafields($input: CustomerInput!) {
    customerUpdate(input: $input) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069230189",
                    "value": "they/them"
                }
            ],
            "id": "gid://shopify/Customer/1018520244"
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
    "query": `mutation updateCustomerMetafields($input: CustomerInput!) {
      customerUpdate(input: $input) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069230189",
                    "value": "they/them"
                }
            ],
            "id": "gid://shopify/Customer/1018520244"
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
  mutation updateCustomerMetafields($input: CustomerInput!) {
    customerUpdate(input: $input) {
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
      },
      {
        "id": "gid://shopify/Metafield/1069230189",
        "value": "they/them"
      }
    ],
    "id": "gid://shopify/Customer/1018520244"
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

{

"input": {

"metafields": [

{

"namespace": "my_field",

"key": "nickname",

"type": "single_line_text_field",

"value": "rob"

},

{

"id": "gid://shopify/Metafield/1069230189",

"value": "they/them"

}

],

"id": "gid://shopify/Customer/1018520244"

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

23

24

25

26

27

28

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"customerUpdate": {

"customer": {

"id": "gid://shopify/Customer/1018520244",

"metafields": {

"edges": [

{

"node": {

"id": "gid://shopify/Metafield/1069230189",

"namespace": "my_field",

"key": "pronouns",

"value": "they/them"

}

},

{

"node": {

"id": "gid://shopify/Metafield/1069230190",

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


---
*Content truncated at "Updates" section*