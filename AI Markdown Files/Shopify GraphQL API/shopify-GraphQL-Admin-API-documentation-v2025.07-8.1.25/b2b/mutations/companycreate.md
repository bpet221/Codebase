---
title: "companyCreate"
description: "Shopify GraphQL Admin API documentation for companycreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate

Markdown Content:
companyCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#main-content)

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
*   
B2B

    *   Queries   
    *   
Mutations

        *   [companies Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesdelete)
        *   [company Address Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete)
        *   [company Assign Customer As Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyassigncustomerascontact)
        *   [company Assign Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyassignmaincontact)
        *   [company Contact Assign Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignrole)
        *   [company Contact Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactassignroles)
        *   [company Contact Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate)
        *   [company Contact Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactdelete)
        *   [company Contact Remove From Company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactremovefromcompany)
        *   [company Contact Revoke Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactrevokerole)
        *   [company Contact Revoke Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactrevokeroles)
        *   [company Contacts Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactsdelete)
        *   [company Contact Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactupdate)
        *   [company Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate)
        *   [company Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companydelete)
        *   [company Location Assign Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassignaddress)
        *   [company Location Assign Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassignroles)
        *   [company Location Assign Staff Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassignstaffmembers)
        *   [company Location Assign Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationassigntaxexemptions)
        *   [company Location Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreate)
        *   [company Location Create Tax Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationcreatetaxregistration)
        *   [company Location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationdelete)
        *   [company Location Remove Staff Members](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationremovestaffmembers)
        *   [company Location Revoke Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationrevokeroles)
        *   [company Location Revoke Tax Exemptions](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationrevoketaxexemptions)
        *   [company Location Revoke Tax Registration](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationrevoketaxregistration)
        *   [company Locations Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationsdelete)
        *   [company Location Tax Settings Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationtaxsettingsupdate)
        *   [company Location Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companylocationupdate)
        *   [company Revoke Main Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyrevokemaincontact)
        *   [company Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyupdate)

    *   Objects   

*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
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

[Anchor to companyCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#top)
company Create
==============

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Creates a company.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#arguments-input)input

•[Company Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyCreateInput)

required

The fields to use when creating the company.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CompanyCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#returns)Company Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to company](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#returns-company)company

•[Company](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

The created company.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycreate#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a company

#### Description

Create a company with a company contact and company location.

#### Query

```graphql
mutation CompanyCreate($input: CompanyCreateInput!) {
  companyCreate(input: $input) {
    company {
      id
      name
      externalId
      mainContact {
        id
        customer {
          id
          email
          firstName
          lastName
        }
      }
      contacts(first: 5) {
        edges {
          node {
            id
            customer {
              email
              firstName
              lastName
            }
          }
        }
      }
      contactRoles(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      locations(first: 5) {
        edges {
          node {
            id
            name
            shippingAddress {
              firstName
              lastName
              address1
              city
              province
              zip
              country
            }
          }
        }
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "company": {
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001"
    },
    "companyLocation": {
      "name": "Ottawa Postal Cards",
      "shippingAddress": {
        "firstName": "Avery",
        "lastName": "Brown",
        "address1": "150 Elgin Street",
        "address2": "8th Floor",
        "city": "Ottawa",
        "zoneCode": "ON",
        "zip": "K2P 1L4",
        "countryCode": "CA"
      },
      "billingSameAsShipping": true
    },
    "companyContact": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
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
"query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name externalId mainContact { id customer { id email firstName lastName } } contacts(first: 5) { edges { node { id customer { email firstName lastName } } } } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "company": {
        "name": "Postal Cards Inc",
        "externalId": "01456606-0001"
      },
      "companyLocation": {
        "name": "Ottawa Postal Cards",
        "shippingAddress": {
          "firstName": "Avery",
          "lastName": "Brown",
          "address1": "150 Elgin Street",
          "address2": "8th Floor",
          "city": "Ottawa",
          "zoneCode": "ON",
          "zip": "K2P 1L4",
          "countryCode": "CA"
        },
        "billingSameAsShipping": true
      },
      "companyContact": {
        "email": "avery.brown@example.com",
        "firstName": "Avery",
        "lastName": "Brown"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "company": {
                "name": "Postal Cards Inc",
                "externalId": "01456606-0001"
            },
            "companyLocation": {
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                    "firstName": "Avery",
                    "lastName": "Brown",
                    "address1": "150 Elgin Street",
                    "address2": "8th Floor",
                    "city": "Ottawa",
                    "zoneCode": "ON",
                    "zip": "K2P 1L4",
                    "countryCode": "CA"
                },
                "billingSameAsShipping": true
            },
            "companyContact": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
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
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "company": {
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001"
    },
    "companyLocation": {
      "name": "Ottawa Postal Cards",
      "shippingAddress": {
        "firstName": "Avery",
        "lastName": "Brown",
        "address1": "150 Elgin Street",
        "address2": "8th Floor",
        "city": "Ottawa",
        "zoneCode": "ON",
        "zip": "K2P 1L4",
        "countryCode": "CA"
      },
      "billingSameAsShipping": true
    },
    "companyContact": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          externalId
          mainContact {
            id
            customer {
              id
              email
              firstName
              lastName
            }
          }
          contacts(first: 5) {
            edges {
              node {
                id
                customer {
                  email
                  firstName
                  lastName
                }
              }
            }
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "company": {
                "name": "Postal Cards Inc",
                "externalId": "01456606-0001"
            },
            "companyLocation": {
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                    "firstName": "Avery",
                    "lastName": "Brown",
                    "address1": "150 Elgin Street",
                    "address2": "8th Floor",
                    "city": "Ottawa",
                    "zoneCode": "ON",
                    "zip": "K2P 1L4",
                    "countryCode": "CA"
                },
                "billingSameAsShipping": true
            },
            "companyContact": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "companyCreate": {
    "company": {
      "id": "gid://shopify/Company/1059559575",
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001",
      "mainContact": {
        "id": "gid://shopify/CompanyContact/1059341835",
        "customer": {
          "id": "gid://shopify/Customer/1073339466",
          "email": "avery.brown@example.com",
          "firstName": "Avery",
          "lastName": "Brown"
        }
      },
      "contacts": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyContact/1059341835",
              "customer": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
              }
            }
          }
        ]
      },
      "contactRoles": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyContactRole/1007033458",
              "name": "Location admin"
            }
          },
          {
            "node": {
              "id": "gid://shopify/CompanyContactRole/1007033459",
              "name": "Ordering only"
            }
          }
        ]
      },
      "locations": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyLocation/966871284",
              "name": "Ottawa Postal Cards",
              "shippingAddress": {
                "firstName": "Avery",
                "lastName": "Brown",
                "address1": "150 Elgin Street",
                "city": "Ottawa",
                "province": "Ontario",
                "zip": "K2P 1L4",
                "country": "Canada"
              }
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a company with required fields only

#### Description

Create a company with no company contact and the default company location.

#### Query

```graphql
mutation CompanyCreate($input: CompanyCreateInput!) {
  companyCreate(input: $input) {
    company {
      id
      name
      mainContact {
        id
      }
      contactRoles(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      locations(first: 5) {
        edges {
          node {
            id
            name
            shippingAddress {
              firstName
              lastName
              address1
              city
              province
              zip
              country
            }
          }
        }
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "company": {
      "name": "Postal Cards Inc"
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
"query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name mainContact { id } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "company": {
        "name": "Postal Cards Inc"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        mainContact {
          id
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "company": {
                "name": "Postal Cards Inc"
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
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        mainContact {
          id
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "company": {
      "name": "Postal Cards Inc"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          mainContact {
            id
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "company": {
                "name": "Postal Cards Inc"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "companyCreate": {
    "company": {
      "id": "gid://shopify/Company/1059559574",
      "name": "Postal Cards Inc",
      "mainContact": null,
      "contactRoles": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyContactRole/1007033456",
              "name": "Location admin"
            }
          },
          {
            "node": {
              "id": "gid://shopify/CompanyContactRole/1007033457",
              "name": "Ordering only"
            }
          }
        ]
      },
      "locations": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/CompanyLocation/966871283",
              "name": "Postal Cards Inc",
              "shippingAddress": null
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Creating a company without a name returns an error

#### Description

Create a company with no company contact and the default company location.

#### Query

```graphql
mutation CompanyCreate($input: CompanyCreateInput!) {
  companyCreate(input: $input) {
    company {
      id
      name
      mainContact {
        id
      }
      contactRoles(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      locations(first: 5) {
        edges {
          node {
            id
            name
            shippingAddress {
              firstName
              lastName
              address1
              city
              province
              zip
              country
            }
          }
        }
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "company": {
      "externalId": "123"
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
"query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name mainContact { id } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "company": {
        "externalId": "123"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        mainContact {
          id
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "company": {
                "externalId": "123"
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
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        mainContact {
          id
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "company": {
      "externalId": "123"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          mainContact {
            id
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "company": {
                "externalId": "123"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "companyCreate": {
    "company": null,
    "userErrors": [
      {
        "field": [
          "input",
          "company",
          "name"
        ],
        "message": "Name must exist",
        "code": "REQUIRED"
      }
    ]
  }
}
``` 
*   ### companyCreate reference

Examples
--------

Create a company

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CompanyCreate(%24input%3A%20CompanyCreateInput!)%20%7B%0A%20%20companyCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20company%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20externalId%0A%20%20%20%20%20%20mainContact%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20contacts(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20contactRoles(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20locations(first%3A%205)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20shippingAddress%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20province%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20country%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22company%22%3A%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Postal%20Cards%20Inc%22%2C%0A%20%20%20%20%20%20%22externalId%22%3A%20%2201456606-0001%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22companyLocation%22%3A%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Ottawa%20Postal%20Cards%22%2C%0A%20%20%20%20%20%20%22shippingAddress%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22firstName%22%3A%20%22Avery%22%2C%0A%20%20%20%20%20%20%20%20%22lastName%22%3A%20%22Brown%22%2C%0A%20%20%20%20%20%20%20%20%22address1%22%3A%20%22150%20Elgin%20Street%22%2C%0A%20%20%20%20%20%20%20%20%22address2%22%3A%20%228th%20Floor%22%2C%0A%20%20%20%20%20%20%20%20%22city%22%3A%20%22Ottawa%22%2C%0A%20%20%20%20%20%20%20%20%22zoneCode%22%3A%20%22ON%22%2C%0A%20%20%20%20%20%20%20%20%22zip%22%3A%20%22K2P%201L4%22%2C%0A%20%20%20%20%20%20%20%20%22countryCode%22%3A%20%22CA%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22billingSameAsShipping%22%3A%20true%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22companyContact%22%3A%20%7B%0A%20%20%20%20%20%20%22email%22%3A%20%22avery.brown%40example.com%22%2C%0A%20%20%20%20%20%20%22firstName%22%3A%20%22Avery%22%2C%0A%20%20%20%20%20%20%22lastName%22%3A%20%22Brown%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CompanyCreate($input: CompanyCreateInput!) {

 companyCreate(input: $input) {

 company {

 id

 name

 externalId

 mainContact {

 id

 customer {

 id

 email

 firstName

 lastName

 }

 }

 contacts(first: 5) {

 edges {

 node {

 id

 customer {

 email

 firstName

 lastName

 }

 }

 }

 }

 contactRoles(first: 5) {

 edges {

 node {

 id

 name

```
mutation CompanyCreate($input: CompanyCreateInput!) {
  companyCreate(input: $input) {
    company {
      id
      name
      externalId
      mainContact {
        id
        customer {
          id
          email
          firstName
          lastName
        }
      }
      contacts(first: 5) {
        edges {
          node {
            id
            customer {
              email
              firstName
              lastName
            }
          }
        }
      }
      contactRoles(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      locations(first: 5) {
        edges {
          node {
            id
            name
            shippingAddress {
              firstName
              lastName
              address1
              city
              province
              zip
              country
            }
          }
        }
      }
    }
    userErrors {
      field
      message
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
"query": "mutation CompanyCreate($input: CompanyCreateInput!) { companyCreate(input: $input) { company { id name externalId mainContact { id customer { id email firstName lastName } } contacts(first: 5) { edges { node { id customer { email firstName lastName } } } } contactRoles(first: 5) { edges { node { id name } } } locations(first: 5) { edges { node { id name shippingAddress { firstName lastName address1 city province zip country } } } } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "company": {
        "name": "Postal Cards Inc",
        "externalId": "01456606-0001"
      },
      "companyLocation": {
        "name": "Ottawa Postal Cards",
        "shippingAddress": {
          "firstName": "Avery",
          "lastName": "Brown",
          "address1": "150 Elgin Street",
          "address2": "8th Floor",
          "city": "Ottawa",
          "zoneCode": "ON",
          "zip": "K2P 1L4",
          "countryCode": "CA"
        },
        "billingSameAsShipping": true
      },
      "companyContact": {
        "email": "avery.brown@example.com",
        "firstName": "Avery",
        "lastName": "Brown"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "input": {
            "company": {
                "name": "Postal Cards Inc",
                "externalId": "01456606-0001"
            },
            "companyLocation": {
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                    "firstName": "Avery",
                    "lastName": "Brown",
                    "address1": "150 Elgin Street",
                    "address2": "8th Floor",
                    "city": "Ottawa",
                    "zoneCode": "ON",
                    "zip": "K2P 1L4",
                    "countryCode": "CA"
                },
                "billingSameAsShipping": true
            },
            "companyContact": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
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
    "query": `mutation CompanyCreate($input: CompanyCreateInput!) {
      companyCreate(input: $input) {
        company {
          id
          name
          externalId
          mainContact {
            id
            customer {
              id
              email
              firstName
              lastName
            }
          }
          contacts(first: 5) {
            edges {
              node {
                id
                customer {
                  email
                  firstName
                  lastName
                }
              }
            }
          }
          contactRoles(first: 5) {
            edges {
              node {
                id
                name
              }
            }
          }
          locations(first: 5) {
            edges {
              node {
                id
                name
                shippingAddress {
                  firstName
                  lastName
                  address1
                  city
                  province
                  zip
                  country
                }
              }
            }
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "input": {
            "company": {
                "name": "Postal Cards Inc",
                "externalId": "01456606-0001"
            },
            "companyLocation": {
                "name": "Ottawa Postal Cards",
                "shippingAddress": {
                    "firstName": "Avery",
                    "lastName": "Brown",
                    "address1": "150 Elgin Street",
                    "address2": "8th Floor",
                    "city": "Ottawa",
                    "zoneCode": "ON",
                    "zip": "K2P 1L4",
                    "countryCode": "CA"
                },
                "billingSameAsShipping": true
            },
            "companyContact": {
                "email": "avery.brown@example.com",
                "firstName": "Avery",
                "lastName": "Brown"
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
  mutation CompanyCreate($input: CompanyCreateInput!) {
    companyCreate(input: $input) {
      company {
        id
        name
        externalId
        mainContact {
          id
          customer {
            id
            email
            firstName
            lastName
          }
        }
        contacts(first: 5) {
          edges {
            node {
              id
              customer {
                email
                firstName
                lastName
              }
            }
          }
        }
        contactRoles(first: 5) {
          edges {
            node {
              id
              name
            }
          }
        }
        locations(first: 5) {
          edges {
            node {
              id
              name
              shippingAddress {
                firstName
                lastName
                address1
                city
                province
                zip
                country
              }
            }
          }
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "input": {
    "company": {
      "name": "Postal Cards Inc",
      "externalId": "01456606-0001"
    },
    "companyLocation": {
      "name": "Ottawa Postal Cards",
      "shippingAddress": {
        "firstName": "Avery",
        "lastName": "Brown",
        "address1": "150 Elgin Street",
        "address2": "8th Floor",
        "city": "Ottawa",
        "zoneCode": "ON",
        "zip": "K2P 1L4",
        "countryCode": "CA"
      },
      "billingSameAsShipping": true
    },
    "companyContact": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"input": {

"company": {

"name": "Postal Cards Inc",

"externalId": "01456606-0001"

},

"companyLocation": {

"name": "Ottawa Postal Cards",

"shippingAddress": {

"firstName": "Avery",

"lastName": "Brown",

"address1": "150 Elgin Street",

"address2": "8th Floor",

"city": "Ottawa",

"zoneCode": "ON",

"zip": "K2P 1L4",

"countryCode": "CA"

},

"billingSameAsShipping": true

},

"companyContact": {

"email": "avery.brown@example.com",

"firstName": "Avery",

"lastName": "Brown"

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

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"companyCreate": {

"company": {

"id": "gid://shopify/Company/1059559575",

"name": "Postal Cards Inc",

"externalId": "01456606-0001",

"mainContact": {

"id": "gid://shopify/CompanyContact/1059341835",

"customer": {

"id": "gid://shopify/Customer/1073339466",

"email": "avery.brown@example.com",

"firstName": "Avery",

"lastName": "Brown"

}

},

"contacts": {

"edges": [

{

"node": {

"id": "gid://shopify/CompanyContact/1059341835",

"customer": {

"email": "avery.brown@example.com",

"firstName": "Avery",

"lastName": "Brown"

}

}

}

]

},

"contactRoles": {

"edges": [

{

"node": {

"id": "gid://shopify/CompanyContactRole/1007033458",

"name": "Location admin"

}


---
*Content truncated at "Updates" section*