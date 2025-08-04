---
title: "companyContactCreate"
description: "Shopify GraphQL Admin API documentation for companycontactcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate"
extraction_method: "jina"
sections: ['B2B', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: companyContactCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate

Markdown Content:
companyContactCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#main-content)

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
*   
B2b

    *   Queries   
    *   
Mutations

        *   [companies Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companiesdelete)
        *   [company Address Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyaddressdelete)
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
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
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

[Anchor to companyContactCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#top)
company Contact Create
======================

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

Creates a company contact and the associated customer.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#arguments)
Arguments
---------

[Anchor to companyId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#arguments-companyId)company Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the company that the company contact belongs to.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#arguments-input)input

•[Company Contact Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactInput)

required

The fields to use to create the company contact.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CompanyContactCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#returns)Company Contact Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to companyContact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#returns-companyContact)company Contact

•[Company Contact](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

The created company contact.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companycontactcreate#returns-userErrors)user Errors

•[[Business Customer User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a company contact

#### Description

Create a company contact for the specified company.

#### Query

```graphql
mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
  companyContactCreate(companyId: $companyId, input: $input) {
    companyContact {
      id
      company {
        id
        name
      }
      customer {
        id
        firstName
        lastName
        email
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
  "companyId": "gid://shopify/Company/426793626",
  "input": {
    "email": "avery.brown@example.com",
    "firstName": "Avery",
    "lastName": "Brown"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) { companyContactCreate(companyId: $companyId, input: $input) { companyContact { id company { id name } customer { id firstName lastName email } } userErrors { field message code } } }",
 "variables": {
    "companyId": "gid://shopify/Company/426793626",
    "input": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
        "companyId": "gid://shopify/Company/426793626",
        "input": {
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
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
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
  "companyId": "gid://shopify/Company/426793626",
  "input": {
    "email": "avery.brown@example.com",
    "firstName": "Avery",
    "lastName": "Brown"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
      companyContactCreate(companyId: $companyId, input: $input) {
        companyContact {
          id
          company {
            id
            name
          }
          customer {
            id
            firstName
            lastName
            email
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
        "companyId": "gid://shopify/Company/426793626",
        "input": {
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
        }
    },
  },
});
``` #### Response

```json
{
  "companyContactCreate": {
    "companyContact": {
      "id": "gid://shopify/CompanyContact/1059341859",
      "company": {
        "id": "gid://shopify/Company/426793626",
        "name": "Fancy Pants Inc."
      },
      "customer": {
        "id": "gid://shopify/Customer/1073339480",
        "firstName": "Avery",
        "lastName": "Brown",
        "email": "avery.brown@example.com"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### companyContactCreate reference

Examples
--------

Create a company contact

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CompanyContactCreate(%24companyId%3A%20ID!%2C%20%24input%3A%20CompanyContactInput!)%20%7B%0A%20%20companyContactCreate(companyId%3A%20%24companyId%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20companyContact%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20company%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22companyId%22%3A%20%22gid%3A%2F%2Fshopify%2FCompany%2F426793626%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22email%22%3A%20%22avery.brown%40example.com%22%2C%0A%20%20%20%20%22firstName%22%3A%20%22Avery%22%2C%0A%20%20%20%20%22lastName%22%3A%20%22Brown%22%0A%20%20%7D%0A%7D)Copy

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

37

38

39

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {

 companyContactCreate(companyId: $companyId, input: $input) {

 companyContact {

 id

 company {

 id

 name

 }

 customer {

 id

 firstName

 lastName

 email

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

variables:{

"companyId":"gid://shopify/Company/426793626",

"input":{

"email":"avery.brown@example.com",

"firstName":"Avery",

"lastName":"Brown"

}

},

},

);

const data=await response.json();

```
mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
  companyContactCreate(companyId: $companyId, input: $input) {
    companyContact {
      id
      company {
        id
        name
      }
      customer {
        id
        firstName
        lastName
        email
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
"query": "mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) { companyContactCreate(companyId: $companyId, input: $input) { companyContact { id company { id name } customer { id firstName lastName email } } userErrors { field message code } } }",
 "variables": {
    "companyId": "gid://shopify/Company/426793626",
    "input": {
      "email": "avery.brown@example.com",
      "firstName": "Avery",
      "lastName": "Brown"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
        "companyId": "gid://shopify/Company/426793626",
        "input": {
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
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
    "query": `mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
      companyContactCreate(companyId: $companyId, input: $input) {
        companyContact {
          id
          company {
            id
            name
          }
          customer {
            id
            firstName
            lastName
            email
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
        "companyId": "gid://shopify/Company/426793626",
        "input": {
            "email": "avery.brown@example.com",
            "firstName": "Avery",
            "lastName": "Brown"
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
  mutation CompanyContactCreate($companyId: ID!, $input: CompanyContactInput!) {
    companyContactCreate(companyId: $companyId, input: $input) {
      companyContact {
        id
        company {
          id
          name
        }
        customer {
          id
          firstName
          lastName
          email
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
  "companyId": "gid://shopify/Company/426793626",
  "input": {
    "email": "avery.brown@example.com",
    "firstName": "Avery",
    "lastName": "Brown"
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

›

⌄

⌄

{

"companyId": "gid://shopify/Company/426793626",

"input": {

"email": "avery.brown@example.com",

"firstName": "Avery",

"lastName": "Brown"

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

›

⌄

⌄

⌄

⌄

⌄

{

"companyContactCreate": {

"companyContact": {

"id": "gid://shopify/CompanyContact/1059341859",

"company": {

"id": "gid://shopify/Company/426793626",

"name": "Fancy Pants Inc."

},

"customer": {

"id": "gid://shopify/Customer/1073339480",

"firstName": "Avery",

"lastName": "Brown",

"email": "avery.brown@example.com"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*