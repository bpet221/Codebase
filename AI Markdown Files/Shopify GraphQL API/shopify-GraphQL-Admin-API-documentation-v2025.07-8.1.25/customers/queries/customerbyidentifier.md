---
title: "customerByIdentifier"
description: "Shopify GraphQL Admin API documentation for customerbyidentifier"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier"
extraction_method: "jina"
sections: ['Customers', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerByIdentifier - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier

Markdown Content:
customerByIdentifier - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier#main-content)

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
*   
Customers

    *   
Queries

        *   [customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customer)
        *   [customer By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergepreview)
        *   [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)
        *   [customer Saved Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersavedsearches)
        *   [customers Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerscount)
        *   [customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembers)
        *   [customer Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembership)
        *   [customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customersegmentmembersquery)
        *   [segment](https://shopify.dev/docs/api/admin-graphql/latest/queries/segment)
        *   [segment Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfilters)
        *   [segment Filter Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentfiltersuggestions)
        *   [segment Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentmigrations)
        *   [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)
        *   [segments Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentscount)
        *   [segment Value Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentvaluesuggestions)

    *   Mutations   
    *   Objects   

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

[Anchor to customerByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier#top)
customer By Identifier
======================

query

Requires `read_customers` access scope.

Return a customer by an identifier.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier#arguments-identifier)identifier

•[Customer Identifier Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerIdentifierInput)

required

The identifier of the customer.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Customer](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerbyidentifier#returns-Customer)Customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

Represents information about a customer of the shop, such as the customer's contact details, their order history, and whether they've agreed to receive marketing material by email.

**Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Find a customer by custom id

#### Query

```graphql
query($identifier: CustomerIdentifierInput!) {
  customer: customerByIdentifier(identifier: $identifier) {
    id
    amountSpent {
      amount
      currencyCode
    }
  }
}
``` #### Variables

```json
{
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "16a3a6dd"
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
"query": "query($identifier: CustomerIdentifierInput!) { customer: customerByIdentifier(identifier: $identifier) { id amountSpent { amount currencyCode } } }",
 "variables": {
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "16a3a6dd"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }`,
  {
    variables: {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "16a3a6dd"
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
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }
QUERY

variables = {
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "16a3a6dd"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query($identifier: CustomerIdentifierInput!) {
      customer: customerByIdentifier(identifier: $identifier) {
        id
        amountSpent {
          amount
          currencyCode
        }
      }
    }`,
    "variables": {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "16a3a6dd"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "id": "gid://shopify/Customer/544365967",
    "amountSpent": {
      "amount": "8305.6",
      "currencyCode": "USD"
    }
  }
}
``` 
*   ### Find a customer by email address

#### Query

```graphql
query($identifier: CustomerIdentifierInput!) {
  customer: customerByIdentifier(identifier: $identifier) {
    id
    amountSpent {
      amount
      currencyCode
    }
  }
}
``` #### Variables

```json
{
  "identifier": {
    "emailAddress": "bob@example.com"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query($identifier: CustomerIdentifierInput!) { customer: customerByIdentifier(identifier: $identifier) { id amountSpent { amount currencyCode } } }",
 "variables": {
    "identifier": {
      "emailAddress": "bob@example.com"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }`,
  {
    variables: {
        "identifier": {
            "emailAddress": "bob@example.com"
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
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }
QUERY

variables = {
  "identifier": {
    "emailAddress": "bob@example.com"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query($identifier: CustomerIdentifierInput!) {
      customer: customerByIdentifier(identifier: $identifier) {
        id
        amountSpent {
          amount
          currencyCode
        }
      }
    }`,
    "variables": {
        "identifier": {
            "emailAddress": "bob@example.com"
        }
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "id": "gid://shopify/Customer/544365967",
    "amountSpent": {
      "amount": "8305.6",
      "currencyCode": "USD"
    }
  }
}
``` 
*   ### Find a customer by phone number

#### Query

```graphql
query($identifier: CustomerIdentifierInput!) {
  customer: customerByIdentifier(identifier: $identifier) {
    id
    amountSpent {
      amount
      currencyCode
    }
  }
}
``` #### Variables

```json
{
  "identifier": {
    "phoneNumber": "+13125551212"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query($identifier: CustomerIdentifierInput!) { customer: customerByIdentifier(identifier: $identifier) { id amountSpent { amount currencyCode } } }",
 "variables": {
    "identifier": {
      "phoneNumber": "+13125551212"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }`,
  {
    variables: {
        "identifier": {
            "phoneNumber": "+13125551212"
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
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }
QUERY

variables = {
  "identifier": {
    "phoneNumber": "+13125551212"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query($identifier: CustomerIdentifierInput!) {
      customer: customerByIdentifier(identifier: $identifier) {
        id
        amountSpent {
          amount
          currencyCode
        }
      }
    }`,
    "variables": {
        "identifier": {
            "phoneNumber": "+13125551212"
        }
    },
  },
});
``` #### Response

```json
{
  "customer": {
    "id": "gid://shopify/Customer/544365967",
    "amountSpent": {
      "amount": "8305.6",
      "currencyCode": "USD"
    }
  }
}
``` 

Examples
--------

Find a customer by custom id

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query(%24identifier%3A%20CustomerIdentifierInput!)%20%7B%0A%20%20customer%3A%20customerByIdentifier(identifier%3A%20%24identifier)%20%7B%0A%20%20%20%20id%0A%20%20%20%20amountSpent%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20currencyCode%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22identifier%22%3A%20%7B%0A%20%20%20%20%22customId%22%3A%20%7B%0A%20%20%20%20%20%20%22namespace%22%3A%20%22custom%22%2C%0A%20%20%20%20%20%20%22key%22%3A%20%22id%22%2C%0A%20%20%20%20%20%20%22value%22%3A%20%2216a3a6dd%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query($identifier: CustomerIdentifierInput!) {

 customer: customerByIdentifier(identifier: $identifier) {

 id

 amountSpent {

 amount

 currencyCode

 }

 }

 }`,

{

variables:{

"identifier":{

"customId":{

"namespace":"custom",

"key":"id",

"value":"16a3a6dd"

}

}

},

},

);

const data=await response.json();

```
query($identifier: CustomerIdentifierInput!) {
  customer: customerByIdentifier(identifier: $identifier) {
    id
    amountSpent {
      amount
      currencyCode
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
"query": "query($identifier: CustomerIdentifierInput!) { customer: customerByIdentifier(identifier: $identifier) { id amountSpent { amount currencyCode } } }",
 "variables": {
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "16a3a6dd"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }`,
  {
    variables: {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "16a3a6dd"
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
    "query": `query($identifier: CustomerIdentifierInput!) {
      customer: customerByIdentifier(identifier: $identifier) {
        id
        amountSpent {
          amount
          currencyCode
        }
      }
    }`,
    "variables": {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "16a3a6dd"
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
  query($identifier: CustomerIdentifierInput!) {
    customer: customerByIdentifier(identifier: $identifier) {
      id
      amountSpent {
        amount
        currencyCode
      }
    }
  }
QUERY

variables = {
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "16a3a6dd"
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

"identifier": {

"customId": {

"namespace": "custom",

"key": "id",

"value": "16a3a6dd"

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

9

›

⌄

⌄

⌄

{

"customer": {

"id": "gid://shopify/Customer/544365967",

"amountSpent": {

"amount": "8305.6",

"currencyCode": "USD"

}

}

}


---
*Content truncated at "Updates" section*