---
title: "locationByIdentifier"
description: "Shopify GraphQL Admin API documentation for locationbyidentifier"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier"
extraction_method: "jina"
sections: ['Store properties', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: locationByIdentifier - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier

Markdown Content:
locationByIdentifier - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier#main-content)

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
*   
Store Properties

    *   
Queries

        *   [business Entities](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentities)
        *   [business Entity](https://shopify.dev/docs/api/admin-graphql/latest/queries/businessentity)
        *   [location](https://shopify.dev/docs/api/admin-graphql/latest/queries/location)
        *   [location By Identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier)
        *   [shop](https://shopify.dev/docs/api/admin-graphql/latest/queries/shop)

    *   Mutations   
    *   Objects   

*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to locationByIdentifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier#top)
location By Identifier
======================

query

Requires `read_locations` access scope.

Return a location by an identifier.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier#arguments)
Arguments
---------

[Anchor to identifier](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier#arguments-identifier)identifier

•[Location Identifier Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationIdentifierInput)

required

The identifier of the location.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Location](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationbyidentifier#returns-Location)Location

•[Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

Represents the location where the physical good resides. You can stock inventory at active locations. Active locations that have `fulfills_online_orders: true` and are configured with a shipping rate, pickup enabled or local delivery will be able to sell from their storefront.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Find a location by custom id

#### Query

```graphql
query($identifier: LocationIdentifierInput!) {
  location: locationByIdentifier(identifier: $identifier) {
    id
    name
  }
}
``` #### Variables

```json
{
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "1001"
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
"query": "query($identifier: LocationIdentifierInput!) { location: locationByIdentifier(identifier: $identifier) { id name } }",
 "variables": {
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "1001"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: LocationIdentifierInput!) {
    location: locationByIdentifier(identifier: $identifier) {
      id
      name
    }
  }`,
  {
    variables: {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
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
  query($identifier: LocationIdentifierInput!) {
    location: locationByIdentifier(identifier: $identifier) {
      id
      name
    }
  }
QUERY

variables = {
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "1001"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `query($identifier: LocationIdentifierInput!) {
      location: locationByIdentifier(identifier: $identifier) {
        id
        name
      }
    }`,
    "variables": {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "location": {
    "id": "gid://shopify/Location/346779380",
    "name": "Ottawa Store"
  }
}
``` 

Find a location by custom id
----------------------------

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query(%24identifier%3A%20LocationIdentifierInput!)%20%7B%0A%20%20location%3A%20locationByIdentifier(identifier%3A%20%24identifier)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22identifier%22%3A%20%7B%0A%20%20%20%20%22customId%22%3A%20%7B%0A%20%20%20%20%20%20%22namespace%22%3A%20%22custom%22%2C%0A%20%20%20%20%20%20%22key%22%3A%20%22id%22%2C%0A%20%20%20%20%20%20%22value%22%3A%20%221001%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query($identifier: LocationIdentifierInput!) {

 location: locationByIdentifier(identifier: $identifier) {

 id

 name

 }

 }`,

{

variables:{

"identifier":{

"customId":{

"namespace":"custom",

"key":"id",

"value":"1001"

}

}

},

},

);

const data=await response.json();

```
query($identifier: LocationIdentifierInput!) {
  location: locationByIdentifier(identifier: $identifier) {
    id
    name
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query($identifier: LocationIdentifierInput!) { location: locationByIdentifier(identifier: $identifier) { id name } }",
 "variables": {
    "identifier": {
      "customId": {
        "namespace": "custom",
        "key": "id",
        "value": "1001"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query($identifier: LocationIdentifierInput!) {
    location: locationByIdentifier(identifier: $identifier) {
      id
      name
    }
  }`,
  {
    variables: {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
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
    "query": `query($identifier: LocationIdentifierInput!) {
      location: locationByIdentifier(identifier: $identifier) {
        id
        name
      }
    }`,
    "variables": {
        "identifier": {
            "customId": {
                "namespace": "custom",
                "key": "id",
                "value": "1001"
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
  query($identifier: LocationIdentifierInput!) {
    location: locationByIdentifier(identifier: $identifier) {
      id
      name
    }
  }
QUERY

variables = {
  "identifier": {
    "customId": {
      "namespace": "custom",
      "key": "id",
      "value": "1001"
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

"value": "1001"

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

›

⌄

⌄

{

"location": {

"id": "gid://shopify/Location/346779380",

"name": "Ottawa Store"

}

}


---
*Content truncated at "Updates" section*