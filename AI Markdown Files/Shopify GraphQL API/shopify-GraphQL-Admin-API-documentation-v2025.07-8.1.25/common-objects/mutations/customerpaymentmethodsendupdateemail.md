---
title: "customerPaymentMethodSendUpdateEmail"
description: "Shopify GraphQL Admin API documentation for customerpaymentmethodsendupdateemail"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerPaymentMethodSendUpdateEmail - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail

Markdown Content:
customerPaymentMethodSendUpdateEmail - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#main-content)

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

    *   Queries   
    *   
Mutations

        *   [company Assign Customer As Contact](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyassigncustomerascontact)
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
        *   [customer Payment Method Credit Card Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardcreate)
        *   [customer Payment Method Paypal Billing Agreement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementcreate)
        *   [customer Payment Method Remote Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodremotecreate)
        *   [customer Payment Method Send Update Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail)
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

[Anchor to customerPaymentMethodSendUpdateEmail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#top)
customer Payment Method Send Update Email
=========================================

mutation

Requires `write_customers` access scope.

Sends a link to the customer so they can update a specific payment method.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#arguments)
Arguments
---------

[Anchor to customerPaymentMethodId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#arguments-customerPaymentMethodId)customer Payment Method Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The payment method to be updated.

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#arguments-email)email

•[Email Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

Specifies the payment method update email fields. Only the 'from' and 'bcc' fields are accepted for input.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CustomerPaymentMethodSendUpdateEmailPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#returns)Customer Payment Method Send Update Email Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#returns-customer)customer

•[Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

The customer to whom an update payment method email was sent.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodsendupdateemail#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Send an email with only the customer payment method id

#### Query

```graphql
mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
  customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
    customer {
      id
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
  "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) { customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) { customer { id } userErrors { field message } } }",
 "variables": {
    "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
    customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
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
  mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
    customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
      customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
    },
  },
});
``` #### Response

```json
{
  "customerPaymentMethodSendUpdateEmail": {
    "customer": {
      "id": "gid://shopify/Customer/544365967"
    },
    "userErrors": []
  }
}
``` 
*   ### customerPaymentMethodSendUpdateEmail reference

Examples
--------

Send an email with only the customer payment method id

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20sendCustomerPaymentUpdateEmail(%24customerPaymentMethodId%3A%20ID!)%20%7B%0A%20%20customerPaymentMethodSendUpdateEmail(customerPaymentMethodId%3A%20%24customerPaymentMethodId)%20%7B%0A%20%20%20%20customer%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22customerPaymentMethodId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomerPaymentMethod%2Fb7cc6e3267aace169e516ed48be72dff%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {

 customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {

 customer {

 id

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"customerPaymentMethodId":"gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"

},

},

);

const data=await response.json();

```
mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
  customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
    customer {
      id
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
"query": "mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) { customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) { customer { id } userErrors { field message } } }",
 "variables": {
    "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
    customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
      customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
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
  mutation sendCustomerPaymentUpdateEmail($customerPaymentMethodId: ID!) {
    customerPaymentMethodSendUpdateEmail(customerPaymentMethodId: $customerPaymentMethodId) {
      customer {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"
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

"customerPaymentMethodId": "gid://shopify/CustomerPaymentMethod/b7cc6e3267aace169e516ed48be72dff"

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

"customerPaymentMethodSendUpdateEmail": {

"customer": {

"id": "gid://shopify/Customer/544365967"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*