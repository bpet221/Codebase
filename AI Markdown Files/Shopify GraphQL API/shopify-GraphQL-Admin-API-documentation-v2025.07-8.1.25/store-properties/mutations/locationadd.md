---
title: "locationAdd"
description: "Shopify GraphQL Admin API documentation for locationadd"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationAdd - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd

Markdown Content:
locationAdd - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#main-content)

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
*   
Store properties

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
        *   [location Local Pickup Disable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupdisable)
        *   [location Local Pickup Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationlocalpickupenable)
        *   [publishable Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublish)
        *   [publishable Publish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel)
        *   [publishable Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublish)
        *   [publishable Unpublish To Current Channel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel)
        *   [shop Policy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shoppolicyupdate)

    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to locationAdd](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#top)
location Add
============

mutation

Requires `write_locations` access scope.

Adds a new location.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#arguments-input)input

•[Location Add Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput)

required

The properties of the location to add.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to LocationAddPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#returns)Location Add Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#returns-location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location that was added.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd#returns-userErrors)user Errors

•[[Location Add User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Add a location and return the location ID

#### Description

Add a new location with a specified name, address and fulfillsOnlineOrders status.

#### Query

```graphql
mutation {
  locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
    location {
      id
      name
      address {
        address1
        provinceCode
        countryCode
        zip
      }
      fulfillsOnlineOrders
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
"query": "mutation { locationAdd(input: {name: \"New York Warehouses\", address: {address1: \"101 Liberty Street\", city: \"New York\", provinceCode: \"NY\", countryCode: US, zip: \"10006\"}, fulfillsOnlineOrders: true}) { location { id name address { address1 provinceCode countryCode zip } fulfillsOnlineOrders } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
      location {
        id
        name
        address {
          address1
          provinceCode
          countryCode
          zip
        }
        fulfillsOnlineOrders
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
  mutation {
    locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
      location {
        id
        name
        address {
          address1
          provinceCode
          countryCode
          zip
        }
        fulfillsOnlineOrders
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
      location {
        id
        name
        address {
          address1
          provinceCode
          countryCode
          zip
        }
        fulfillsOnlineOrders
      }
    }
  }`,
});
``` #### Response

```json
{
  "locationAdd": {
    "location": {
      "id": "gid://shopify/Location/1072404546",
      "name": "New York Warehouses",
      "address": {
        "address1": "101 Liberty Street",
        "provinceCode": "NY",
        "countryCode": "US",
        "zip": "10006"
      },
      "fulfillsOnlineOrders": true
    }
  }
}
``` 
*   ### Create a new metafield on a new location

#### Description

Create a new metafield `my_field.delivery_type` on a new location. Alternatively, refer to the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on location resources.

#### Query

```graphql
mutation createLocationMetafields($input: LocationAddInput!) {
  locationAdd(input: $input) {
    location {
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
        "key": "delivery_type",
        "type": "single_line_text_field",
        "value": "local"
      }
    ],
    "name": "Warehouse",
    "address": {
      "countryCode": "CA"
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
"query": "mutation createLocationMetafields($input: LocationAddInput!) { locationAdd(input: $input) { location { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "delivery_type",
          "type": "single_line_text_field",
          "value": "local"
        }
      ],
      "name": "Warehouse",
      "address": {
        "countryCode": "CA"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation createLocationMetafields($input: LocationAddInput!) {
    locationAdd(input: $input) {
      location {
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
                    "key": "delivery_type",
                    "type": "single_line_text_field",
                    "value": "local"
                }
            ],
            "name": "Warehouse",
            "address": {
                "countryCode": "CA"
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
  mutation createLocationMetafields($input: LocationAddInput!) {
    locationAdd(input: $input) {
      location {
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
        "key": "delivery_type",
        "type": "single_line_text_field",
        "value": "local"
      }
    ],
    "name": "Warehouse",
    "address": {
      "countryCode": "CA"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation createLocationMetafields($input: LocationAddInput!) {
      locationAdd(input: $input) {
        location {
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
                    "key": "delivery_type",
                    "type": "single_line_text_field",
                    "value": "local"
                }
            ],
            "name": "Warehouse",
            "address": {
                "countryCode": "CA"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "locationAdd": {
    "location": {
      "id": "gid://shopify/Location/1072404547",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229305",
              "namespace": "my_field",
              "key": "delivery_type",
              "value": "local"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### locationAdd reference

Examples
--------

Add a location and return the location ID

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20locationAdd(input%3A%20%7Bname%3A%20%22New%20York%20Warehouses%22%2C%20address%3A%20%7Baddress1%3A%20%22101%20Liberty%20Street%22%2C%20city%3A%20%22New%20York%22%2C%20provinceCode%3A%20%22NY%22%2C%20countryCode%3A%20US%2C%20zip%3A%20%2210006%22%7D%2C%20fulfillsOnlineOrders%3A%20true%7D)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20address%20%7B%0A%20%20%20%20%20%20%20%20address1%0A%20%20%20%20%20%20%20%20provinceCode%0A%20%20%20%20%20%20%20%20countryCode%0A%20%20%20%20%20%20%20%20zip%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20fulfillsOnlineOrders%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation {

 locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {

 location {

 id

 name

 address {

 address1

 provinceCode

 countryCode

 zip

 }

 fulfillsOnlineOrders

 }

 }

 }`,

);

const data=await response.json();

```
mutation {
  locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
    location {
      id
      name
      address {
        address1
        provinceCode
        countryCode
        zip
      }
      fulfillsOnlineOrders
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
"query": "mutation { locationAdd(input: {name: \"New York Warehouses\", address: {address1: \"101 Liberty Street\", city: \"New York\", provinceCode: \"NY\", countryCode: US, zip: \"10006\"}, fulfillsOnlineOrders: true}) { location { id name address { address1 provinceCode countryCode zip } fulfillsOnlineOrders } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
      location {
        id
        name
        address {
          address1
          provinceCode
          countryCode
          zip
        }
        fulfillsOnlineOrders
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
      location {
        id
        name
        address {
          address1
          provinceCode
          countryCode
          zip
        }
        fulfillsOnlineOrders
      }
    }
  }`,
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
  mutation {
    locationAdd(input: {name: "New York Warehouses", address: {address1: "101 Liberty Street", city: "New York", provinceCode: "NY", countryCode: US, zip: "10006"}, fulfillsOnlineOrders: true}) {
      location {
        id
        name
        address {
          address1
          provinceCode
          countryCode
          zip
        }
        fulfillsOnlineOrders
      }
    }
  }
QUERY

response = client.query(query: query)
```

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

"locationAdd": {

"location": {

"id": "gid://shopify/Location/1072404546",

"name": "New York Warehouses",

"address": {

"address1": "101 Liberty Street",

"provinceCode": "NY",

"countryCode": "US",

"zip": "10006"

},

"fulfillsOnlineOrders": true

}

}

}


---
*Content truncated at "Updates" section*