---
title: "staffMember"
description: "Shopify GraphQL Admin API documentation for staffmember"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: staffMember - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember

Markdown Content:
staffMember - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember#main-content)

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
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   
Common Objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
        *   [customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerpaymentmethod)
        *   [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)
        *   [finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeappaccesspolicy)
        *   [fulfillment Constraint Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentconstraintrules)
        *   [gift Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard)
        *   [gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardconfiguration)
        *   [gift Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards)
        *   [gift Cards Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardscount)
        *   [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)
        *   [node](https://shopify.dev/docs/api/admin-graphql/latest/queries/node)
        *   [nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/nodes)
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [pending Orders Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/pendingorderscount)
        *   [product Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeed)
        *   [product Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeeds)
        *   [public Api Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicapiversions)
        *   [shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunction)
        *   [shopify Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunctions)
        *   [shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipt)
        *   [shop Pay Payment Request Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipts)
        *   [staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember)
        *   [staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmembers)
        *   [store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount)
        *   [validation](https://shopify.dev/docs/api/admin-graphql/latest/queries/validation)
        *   [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

    *   Mutations   
    *   Objects   

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

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember#top)
staff Member
============

query

The StaffMember resource, by ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember#arguments-id)id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the staff member to return. If no ID is provided, then the staff member making the query (if any) is returned.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember#possible-returns)Possible returns
------------------------------------------------------------------------------------------------------------------------------------

[Anchor to StaffMember](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember#returns-StaffMember)Staff Member

•[Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

Represents the data about a staff member's Shopify account. Merchants can use staff member data to get more information about the staff members in their store.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieves a single user

#### Query

```graphql
query StaffMember($id: ID!) {
  staffMember(id: $id) {
    active
    avatar {
      url
    }
    email
    exists
    firstName
    id
    initials
    isShopOwner
    lastName
    locale
    name
    phone
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/StaffMember/902541635"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query StaffMember($id: ID!) { staffMember(id: $id) { active avatar { url } email exists firstName id initials isShopOwner lastName locale name phone } }",
 "variables": {
    "id": "gid://shopify/StaffMember/902541635"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query StaffMember($id: ID!) {
    staffMember(id: $id) {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StaffMember/902541635"
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
  query StaffMember($id: ID!) {
    staffMember(id: $id) {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StaffMember/902541635"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query StaffMember($id: ID!) {
      staffMember(id: $id) {
        active
        avatar {
          url
        }
        email
        exists
        firstName
        id
        initials
        isShopOwner
        lastName
        locale
        name
        phone
      }
    }`,
    "variables": {
        "id": "gid://shopify/StaffMember/902541635"
    },
  },
});
``` #### Response

```json
{
  "staffMember": {
    "active": true,
    "avatar": {
      "url": "https://cdn.shopify.com/s/files/1/2637/1970/users/foo.jpg?v=1731443626"
    },
    "email": "bob@example.com",
    "exists": true,
    "firstName": "bob",
    "id": "gid://shopify/StaffMember/902541635",
    "initials": [
      "b",
      "b"
    ],
    "isShopOwner": true,
    "lastName": "bobsen",
    "locale": "en",
    "name": "bob bobsen",
    "phone": null
  }
}
``` 
*   ### Retrieves the currently logged-in user

#### Query

```graphql
query {
  staffMember {
    active
    avatar {
      url
    }
    email
    exists
    firstName
    id
    initials
    isShopOwner
    lastName
    locale
    name
    phone
    privateData {
      accountSettingsUrl
      createdAt
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
"query": "query { staffMember { active avatar { url } email exists firstName id initials isShopOwner lastName locale name phone privateData { accountSettingsUrl createdAt } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    staffMember {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
      privateData {
        accountSettingsUrl
        createdAt
      }
    }
  }`,
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
  query {
    staffMember {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
      privateData {
        accountSettingsUrl
        createdAt
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    staffMember {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
      privateData {
        accountSettingsUrl
        createdAt
      }
    }
  }`,
});
``` #### Response

```json
{
  "staffMember": {
    "active": true,
    "avatar": {
      "url": "https://cdn.shopify.com/s/files/1/2637/1970/users/foo.jpg?v=1731443626"
    },
    "email": "bob@example.com",
    "exists": true,
    "firstName": "bob",
    "id": "gid://shopify/StaffMember/902541635",
    "initials": [
      "b",
      "b"
    ],
    "isShopOwner": true,
    "lastName": "bobsen",
    "locale": "en",
    "name": "bob bobsen",
    "phone": null,
    "privateData": {
      "accountSettingsUrl": "https://www.snowdevil.ca/admin/settings/account/902541635",
      "createdAt": "2005-01-01T00:00:00Z"
    }
  }
}
``` 

Examples
--------

Retrieves a single user

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20StaffMember(%24id%3A%20ID!)%20%7B%0A%20%20staffMember(id%3A%20%24id)%20%7B%0A%20%20%20%20active%0A%20%20%20%20avatar%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20email%0A%20%20%20%20exists%0A%20%20%20%20firstName%0A%20%20%20%20id%0A%20%20%20%20initials%0A%20%20%20%20isShopOwner%0A%20%20%20%20lastName%0A%20%20%20%20locale%0A%20%20%20%20name%0A%20%20%20%20phone%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FStaffMember%2F902541635%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query StaffMember($id: ID!) {

 staffMember(id: $id) {

 active

 avatar {

 url

 }

 email

 exists

 firstName

 id

 initials

 isShopOwner

 lastName

 locale

 name

 phone

 }

 }`,

{

variables:{

"id":"gid://shopify/StaffMember/902541635"

},

},

);

const data=await response.json();

```
query StaffMember($id: ID!) {
  staffMember(id: $id) {
    active
    avatar {
      url
    }
    email
    exists
    firstName
    id
    initials
    isShopOwner
    lastName
    locale
    name
    phone
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query StaffMember($id: ID!) { staffMember(id: $id) { active avatar { url } email exists firstName id initials isShopOwner lastName locale name phone } }",
 "variables": {
    "id": "gid://shopify/StaffMember/902541635"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query StaffMember($id: ID!) {
    staffMember(id: $id) {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/StaffMember/902541635"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query StaffMember($id: ID!) {
      staffMember(id: $id) {
        active
        avatar {
          url
        }
        email
        exists
        firstName
        id
        initials
        isShopOwner
        lastName
        locale
        name
        phone
      }
    }`,
    "variables": {
        "id": "gid://shopify/StaffMember/902541635"
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
  query StaffMember($id: ID!) {
    staffMember(id: $id) {
      active
      avatar {
        url
      }
      email
      exists
      firstName
      id
      initials
      isShopOwner
      lastName
      locale
      name
      phone
    }
  }
QUERY

variables = {
  "id": "gid://shopify/StaffMember/902541635"
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

"id": "gid://shopify/StaffMember/902541635"

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

›

⌄

⌄

⌄

⌄

{

"staffMember": {

"active": true,

"avatar": {

"url": "https://cdn.shopify.com/s/files/1/2637/1970/users/foo.jpg?v=1731443626"

},

"email": "bob@example.com",

"exists": true,

"firstName": "bob",

"id": "gid://shopify/StaffMember/902541635",

"initials": [

"b",

"b"

],

"isShopOwner": true,

"lastName": "bobsen",

"locale": "en",

"name": "bob bobsen",

"phone": null

}

}


---
*Content truncated at "Updates" section*