---
title: "customerMerge"
description: "Shopify GraphQL Admin API documentation for customermerge"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge"
extraction_method: "jina"
sections: ['Customers', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerMerge - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge

Markdown Content:
customerMerge - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#main-content)

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

[Anchor to customerMerge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#top)
customer Merge
==============

mutation

Requires `write_customer_merge` access scope.

Merges two customers.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#arguments)
Arguments
---------

[Anchor to customerOneId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#arguments-customerOneId)customer One Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the first customer that will be merged.

[Anchor to customerTwoId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#arguments-customerTwoId)customer Two Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the second customer that will be merged.

[Anchor to overrideFields](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#arguments-overrideFields)override Fields

•[Customer Merge Override Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

The fields to override the default customer merge rules.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to CustomerMergePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#returns)Customer Merge Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job for merging the customers.

Show fields

[Anchor to resultingCustomerId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#returns-resultingCustomerId)resulting Customer Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the customer resulting from the merge.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customermerge#returns-userErrors)user Errors

•[[Customer Merge User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Merge customers with override fields

#### Description

Merge customers with override fields.

#### Query

```graphql
mutation CustomerMerge {
  customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
    resultingCustomerId
    job {
      id
      done
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574",
  "overrideFields": {
    "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
    "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\", overrideFields: {customerIdOfFirstNameToKeep: \"gid://shopify/Customer/544365967\", customerIdOfLastNameToKeep: \"gid://shopify/Customer/624407574\"}) { resultingCustomerId job { id done } userErrors { code field message } } }",
 "variables": {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574",
        "overrideFields": {
            "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
            "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574",
  "overrideFields": {
    "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
    "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574",
        "overrideFields": {
            "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
            "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
        }
    },
  },
});
``` #### Response

```json
{
  "customerMerge": {
    "resultingCustomerId": "gid://shopify/Customer/624407574",
    "job": {
      "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
      "done": true
    },
    "userErrors": []
  }
}
``` 
*   ### Merge two customers

#### Description

Merge two customers.

#### Query

```graphql
mutation CustomerMerge {
  customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
    resultingCustomerId
    job {
      id
      done
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\") { resultingCustomerId job { id done } userErrors { code field message } } }",
 "variables": {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574"
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
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574") {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574"
    },
  },
});
``` #### Response

```json
{
  "customerMerge": {
    "resultingCustomerId": "gid://shopify/Customer/624407574",
    "job": {
      "id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
      "done": true
    },
    "userErrors": []
  }
}
``` 
*   ### customerMerge reference

Examples
--------

Merge customers with override fields

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CustomerMerge%20%7B%0A%20%20customerMerge(customerOneId%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%20customerTwoId%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%2C%20overrideFields%3A%20%7BcustomerIdOfFirstNameToKeep%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%20customerIdOfLastNameToKeep%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%7D)%20%7B%0A%20%20%20%20resultingCustomerId%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20done%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22customerOneId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%22customerTwoId%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F624407574%22%2C%0A%20%20%22overrideFields%22%3A%20%7B%0A%20%20%20%20%22customerIdOfFirstNameToKeep%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%2C%0A%20%20%20%20%22customerIdOfLastNameToKeep%22%3A%20%22gid%3A%2F%2Fshopify%2FCustomer%2F544365967%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CustomerMerge {

 customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {

 resultingCustomerId

 job {

 id

 done

 }

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"customerOneId":"gid://shopify/Customer/544365967",

"customerTwoId":"gid://shopify/Customer/624407574",

"overrideFields":{

"customerIdOfFirstNameToKeep":"gid://shopify/Customer/544365967",

"customerIdOfLastNameToKeep":"gid://shopify/Customer/544365967"

}

},

},

);

const data=await response.json();

```
mutation CustomerMerge {
  customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
    resultingCustomerId
    job {
      id
      done
    }
    userErrors {
      code
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
"query": "mutation CustomerMerge { customerMerge(customerOneId: \"gid://shopify/Customer/544365967\", customerTwoId: \"gid://shopify/Customer/624407574\", overrideFields: {customerIdOfFirstNameToKeep: \"gid://shopify/Customer/544365967\", customerIdOfLastNameToKeep: \"gid://shopify/Customer/624407574\"}) { resultingCustomerId job { id done } userErrors { code field message } } }",
 "variables": {
    "customerOneId": "gid://shopify/Customer/544365967",
    "customerTwoId": "gid://shopify/Customer/624407574",
    "overrideFields": {
      "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
      "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574",
        "overrideFields": {
            "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
            "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
    "query": `mutation CustomerMerge {
      customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
        resultingCustomerId
        job {
          id
          done
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "customerOneId": "gid://shopify/Customer/544365967",
        "customerTwoId": "gid://shopify/Customer/624407574",
        "overrideFields": {
            "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
            "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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
  mutation CustomerMerge {
    customerMerge(customerOneId: "gid://shopify/Customer/544365967", customerTwoId: "gid://shopify/Customer/624407574", overrideFields: {customerIdOfFirstNameToKeep: "gid://shopify/Customer/544365967", customerIdOfLastNameToKeep: "gid://shopify/Customer/624407574"}) {
      resultingCustomerId
      job {
        id
        done
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "customerOneId": "gid://shopify/Customer/544365967",
  "customerTwoId": "gid://shopify/Customer/624407574",
  "overrideFields": {
    "customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",
    "customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"
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

"customerOneId": "gid://shopify/Customer/544365967",

"customerTwoId": "gid://shopify/Customer/624407574",

"overrideFields": {

"customerIdOfFirstNameToKeep": "gid://shopify/Customer/544365967",

"customerIdOfLastNameToKeep": "gid://shopify/Customer/544365967"

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

›

⌄

⌄

⌄

{

"customerMerge": {

"resultingCustomerId": "gid://shopify/Customer/624407574",

"job": {

"id": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",

"done": true

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*