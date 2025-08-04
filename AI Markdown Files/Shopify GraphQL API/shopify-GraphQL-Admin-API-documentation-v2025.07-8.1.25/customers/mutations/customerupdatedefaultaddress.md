---
title: "customerUpdateDefaultAddress"
description: "Shopify GraphQL Admin API documentation for customerupdatedefaultaddress"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerUpdateDefaultAddress - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress

Markdown Content:
customerUpdateDefaultAddress - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#main-content)

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

[Anchor to customerUpdateDefaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#top)
customer Update Default Address
===============================

mutation

Requires `write_customers` access scope.

Updates a customer's default address.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#arguments)
Arguments
---------

[Anchor to addressId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#arguments-addressId)address Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customer's new default address.

[Anchor to customerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#arguments-customerId)customer Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the customer whose default address is being updated.

* * *

Was this section helpful?

Yes No

[Anchor to CustomerUpdateDefaultAddressPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#returns)Customer Update Default Address Payload returns
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#returns-customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The customer whose address was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerupdatedefaultaddress#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Sets the default address for a customer

#### Query

```graphql
mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
  customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
    customer {
      id
      defaultAddress {
        id
        address1
        city
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
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) { customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) { customer { id defaultAddress { id address1 city } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          id
          defaultAddress {
            id
            address1
            city
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
    },
  },
});
``` #### Response

```json
{
  "customerUpdateDefaultAddress": {
    "customer": {
      "id": "gid://shopify/Customer/624407574",
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress",
        "address1": "124 Amoebobacterieae St",
        "city": "Ottawa"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Updates an existing customer address

#### Query

```graphql
mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
  customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
    customer {
      defaultAddress {
        id
      }
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) { customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) { customer { defaultAddress { id } } userErrors { message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        defaultAddress {
          id
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
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
  mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        defaultAddress {
          id
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation customerUpdateDefaultAddress($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          defaultAddress {
            id
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
    },
  },
});
``` #### Response

```json
{
  "customerUpdateDefaultAddress": {
    "customer": {
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/1053318600?model_name=CustomerAddress"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### customerUpdateDefaultAddress reference

Examples
--------

Sets the default address for a customer

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CustomerAddressDefault(%24addressId%3A%20ID!%2C%20%24customerId%3A%20ID!)%20%7B%0A%20%20customerUpdateDefaultAddress(addressId%3A%20%24addressId%2C%20customerId%3A%20%24customerId)%20%7B%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20defaultAddress%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22customerId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%2C%0A%20%20%22addressId%22%3A%20%22gid%3A%2F%2Fshopify%2FMailingAddress%2F624407574%3Fmodel_name%3DCustomerAddress%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {

 customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {

 customer {

 id

 defaultAddress {

 id

 address1

 city

 }

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"customerId":"gid://shopify/Customer/624407574",

"addressId":"gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"

},

},

);

const data=await response.json();

```
mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
  customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
    customer {
      id
      defaultAddress {
        id
        address1
        city
      }
    }
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
"query": "mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) { customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) { customer { id defaultAddress { id address1 city } } userErrors { field message } } }",
 "variables": {
    "customerId": "gid://shopify/Customer/624407574",
    "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
      customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
        customer {
          id
          defaultAddress {
            id
            address1
            city
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerId": "gid://shopify/Customer/624407574",
        "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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
  mutation CustomerAddressDefault($addressId: ID!, $customerId: ID!) {
    customerUpdateDefaultAddress(addressId: $addressId, customerId: $customerId) {
      customer {
        id
        defaultAddress {
          id
          address1
          city
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
  "customerId": "gid://shopify/Customer/624407574",
  "addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"
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

›

⌄

{

"customerId": "gid://shopify/Customer/624407574",

"addressId": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress"

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

"customerUpdateDefaultAddress": {

"customer": {

"id": "gid://shopify/Customer/624407574",

"defaultAddress": {

"id": "gid://shopify/MailingAddress/624407574?model_name=CustomerAddress",

"address1": "124 Amoebobacterieae St",

"city": "Ottawa"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*