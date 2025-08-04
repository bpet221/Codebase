---
title: "locationEdit"
description: "Shopify GraphQL Admin API documentation for locationedit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationEdit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit

Markdown Content:
locationEdit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#main-content)

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

[Anchor to locationEdit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#top)
location Edit
=============

mutation

Requires `write_locations` access scope or `write_fulfillments` access scope. Also: `write_locations`: access scope is required to modify merchant-managed locations. `write_fulfillments`: apps can edit the locations associated with their fulfillment services if they have this scope. Only the app that created the fulfillment service can edit its associated location.

Edits an existing location.

[As of the 2023-10 API version](https://shopify.dev/changelog/apps-can-now-change-the-name-and-address-of-their-fulfillment-service-locations), apps can change the name and address of their fulfillment service locations.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of a location to edit.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#arguments-input)input

•[Location Edit Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationEditInput)

required

The updated properties for the location.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to LocationEditPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#returns)Location Edit Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to location](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#returns-location)location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

The location that was edited.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit#returns-userErrors)user Errors

•[[Location Edit User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEditUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new metafield and update another on an existing location

#### Description

Create a new metafield `my_field.delivery_type` and update an existing metafield `global.store_hours` on a specific location. Alternatively, refer to the [metafieldsSet](https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on location resources.

#### Query

```graphql
mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
  locationEdit(input: $input, id: $ownerId) {
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
      },
      {
        "id": "gid://shopify/Metafield/1069229306",
        "value": "Open from 7am to 10pm"
      }
    ]
  },
  "ownerId": "gid://shopify/Location/346779380"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) { locationEdit(input: $input, id: $ownerId) { location { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "delivery_type",
          "type": "single_line_text_field",
          "value": "local"
        },
        {
          "id": "gid://shopify/Metafield/1069229306",
          "value": "Open from 7am to 10pm"
        }
      ]
    },
    "ownerId": "gid://shopify/Location/346779380"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
    locationEdit(input: $input, id: $ownerId) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069229306",
                    "value": "Open from 7am to 10pm"
                }
            ]
        },
        "ownerId": "gid://shopify/Location/346779380"
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
  mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
    locationEdit(input: $input, id: $ownerId) {
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
      },
      {
        "id": "gid://shopify/Metafield/1069229306",
        "value": "Open from 7am to 10pm"
      }
    ]
  },
  "ownerId": "gid://shopify/Location/346779380"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
      locationEdit(input: $input, id: $ownerId) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069229306",
                    "value": "Open from 7am to 10pm"
                }
            ]
        },
        "ownerId": "gid://shopify/Location/346779380"
    },
  },
});
``` #### Response

```json
{
  "locationEdit": {
    "location": {
      "id": "gid://shopify/Location/346779380",
      "metafields": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229306",
              "namespace": "global",
              "key": "store_hours",
              "value": "Open from 7am to 10pm"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Metafield/1069229307",
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
*   ### Edit a location and return the location ID

#### Description

Edit a location's name, address and fulfillsOnlineOrders status

#### Query

```graphql
mutation locationEdit {
  locationEdit(id: "gid://shopify/Location/346779380", input: {name: "Shipping Warehouse", address: {address1: "290 Bremner Blvd", city: "Toronto", zip: "M5V 3L9", provinceCode: "ON", countryCode: CA}, fulfillsOnlineOrders: false}) {
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
"query": "mutation locationEdit { locationEdit(id: \"gid://shopify/Location/346779380\", input: {name: \"Shipping Warehouse\", address: {address1: \"290 Bremner Blvd\", city: \"Toronto\", zip: \"M5V 3L9\", provinceCode: \"ON\", countryCode: CA}, fulfillsOnlineOrders: false}) { location { id name address { address1 provinceCode countryCode zip } fulfillsOnlineOrders } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation locationEdit {
    locationEdit(id: "gid://shopify/Location/346779380", input: {name: "Shipping Warehouse", address: {address1: "290 Bremner Blvd", city: "Toronto", zip: "M5V 3L9", provinceCode: "ON", countryCode: CA}, fulfillsOnlineOrders: false}) {
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
  mutation locationEdit {
    locationEdit(id: "gid://shopify/Location/346779380", input: {name: "Shipping Warehouse", address: {address1: "290 Bremner Blvd", city: "Toronto", zip: "M5V 3L9", provinceCode: "ON", countryCode: CA}, fulfillsOnlineOrders: false}) {
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
  data: `mutation locationEdit {
    locationEdit(id: "gid://shopify/Location/346779380", input: {name: "Shipping Warehouse", address: {address1: "290 Bremner Blvd", city: "Toronto", zip: "M5V 3L9", provinceCode: "ON", countryCode: CA}, fulfillsOnlineOrders: false}) {
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
  "locationEdit": {
    "location": {
      "id": "gid://shopify/Location/346779380",
      "name": "Shipping Warehouse",
      "address": {
        "address1": "290 Bremner Blvd",
        "provinceCode": "ON",
        "countryCode": "CA",
        "zip": "M5V 3L9"
      },
      "fulfillsOnlineOrders": false
    }
  }
}
``` 
*   ### locationEdit reference

Examples
--------

Create a new metafield and update another on an existing location

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20updateLocationMetafields(%24input%3A%20LocationEditInput!%2C%20%24ownerId%3A%20ID!)%20%7B%0A%20%20locationEdit(input%3A%20%24input%2C%20id%3A%20%24ownerId)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20metafields(first%3A%203)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20namespace%0A%20%20%20%20%20%20%20%20%20%20%20%20key%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22metafields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22namespace%22%3A%20%22my_field%22%2C%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22delivery_type%22%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22single_line_text_field%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22local%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMetafield%2F1069229306%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22Open%20from%207am%20to%2010pm%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22ownerId%22%3A%20%22gid%3A%2F%2Fshopify%2FLocation%2F346779380%22%0A%7D)Copy

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

 mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {

 locationEdit(input: $input, id: $ownerId) {

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

variables:{

"input":{

"metafields":[

{

"namespace":"my_field",

"key":"delivery_type",

"type":"single_line_text_field",

"value":"local"

},

{

```
mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
  locationEdit(input: $input, id: $ownerId) {
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) { locationEdit(input: $input, id: $ownerId) { location { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
 "variables": {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "delivery_type",
          "type": "single_line_text_field",
          "value": "local"
        },
        {
          "id": "gid://shopify/Metafield/1069229306",
          "value": "Open from 7am to 10pm"
        }
      ]
    },
    "ownerId": "gid://shopify/Location/346779380"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
    locationEdit(input: $input, id: $ownerId) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069229306",
                    "value": "Open from 7am to 10pm"
                }
            ]
        },
        "ownerId": "gid://shopify/Location/346779380"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
      locationEdit(input: $input, id: $ownerId) {
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
                },
                {
                    "id": "gid://shopify/Metafield/1069229306",
                    "value": "Open from 7am to 10pm"
                }
            ]
        },
        "ownerId": "gid://shopify/Location/346779380"
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
  mutation updateLocationMetafields($input: LocationEditInput!, $ownerId: ID!) {
    locationEdit(input: $input, id: $ownerId) {
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
      },
      {
        "id": "gid://shopify/Metafield/1069229306",
        "value": "Open from 7am to 10pm"
      }
    ]
  },
  "ownerId": "gid://shopify/Location/346779380"
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

"key": "delivery_type",

"type": "single_line_text_field",

"value": "local"

},

{

"id": "gid://shopify/Metafield/1069229306",

"value": "Open from 7am to 10pm"

}

]

},

"ownerId": "gid://shopify/Location/346779380"

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

"locationEdit": {

"location": {

"id": "gid://shopify/Location/346779380",

"metafields": {

"edges": [

{

"node": {

"id": "gid://shopify/Metafield/1069229306",

"namespace": "global",

"key": "store_hours",

"value": "Open from 7am to 10pm"

}

},

{

"node": {

"id": "gid://shopify/Metafield/1069229307",

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


---
*Content truncated at "Updates" section*