---
title: "publishablePublishToCurrentChannel"
description: "Shopify GraphQL Admin API documentation for publishablepublishtocurrentchannel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publishablePublishToCurrentChannel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel

Markdown Content:
publishablePublishToCurrentChannel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#main-content)

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

    *   Queries   
    *   
Mutations

        *   [location Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationactivate)
        *   [location Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationadd)
        *   [location Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdeactivate)
        *   [location Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationdelete)
        *   [location Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationedit)
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

[Anchor to publishablePublishToCurrentChannel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#top)
publishable Publish To Current Channel
======================================

mutation

Requires `write_publications` access scope. Also: The user must have a permission to create and edit products.

Publishes a resource to current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The resource to create or update publications for.

* * *

Was this section helpful?

Yes No

[Anchor to PublishablePublishToCurrentChannelPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#returns)Publishable Publish To Current Channel Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to publishable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#returns-publishable)publishable

•[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

Resource that has been published.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablepublishtocurrentchannel#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Publish a product to the current channel

#### Query

```graphql
mutation publishablePublishToCurrentChannel($id: ID!) {
  publishablePublishToCurrentChannel(id: $id) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/921728736"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishablePublishToCurrentChannel($id: ID!) { publishablePublishToCurrentChannel(id: $id) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/921728736"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/921728736"
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
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/921728736"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishablePublishToCurrentChannel($id: ID!) {
      publishablePublishToCurrentChannel(id: $id) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/921728736"
    },
  },
});
``` #### Response

```json
{
  "publishablePublishToCurrentChannel": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 2
      },
      "resourcePublicationsCount": {
        "count": 2
      }
    },
    "shop": {
      "publicationCount": 3
    },
    "userErrors": []
  }
}
``` 
*   ### Publish a publication to the current channel

#### Query

```graphql
mutation publishablePublishToCurrentChannel($id: ID!) {
  publishablePublishToCurrentChannel(id: $id) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Collection/841564295"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishablePublishToCurrentChannel($id: ID!) { publishablePublishToCurrentChannel(id: $id) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Collection/841564295"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Collection/841564295"
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
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Collection/841564295"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishablePublishToCurrentChannel($id: ID!) {
      publishablePublishToCurrentChannel(id: $id) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Collection/841564295"
    },
  },
});
``` #### Response

```json
{
  "publishablePublishToCurrentChannel": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 2
      },
      "resourcePublicationsCount": {
        "count": 2
      }
    },
    "shop": {
      "publicationCount": 3
    },
    "userErrors": []
  }
}
``` 
*   ### Publishing a product that does not exist

#### Query

```graphql
mutation publishablePublishToCurrentChannel($id: ID!) {
  publishablePublishToCurrentChannel(id: $id) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
  "id": "gid://shopify/Product/non-existent_product_id"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation publishablePublishToCurrentChannel($id: ID!) { publishablePublishToCurrentChannel(id: $id) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/non-existent_product_id"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/non-existent_product_id"
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
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/non-existent_product_id"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishablePublishToCurrentChannel($id: ID!) {
      publishablePublishToCurrentChannel(id: $id) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/non-existent_product_id"
    },
  },
});
``` #### Response

```json
{
  "publishablePublishToCurrentChannel": {
    "publishable": null,
    "shop": {
      "publicationCount": 3
    },
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Resource does not exist"
      }
    ]
  }
}
``` 
*   ### publishablePublishToCurrentChannel reference

Examples
--------

Publish a product to the current channel

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20publishablePublishToCurrentChannel(%24id%3A%20ID!)%20%7B%0A%20%20publishablePublishToCurrentChannel(id%3A%20%24id)%20%7B%0A%20%20%20%20publishable%20%7B%0A%20%20%20%20%20%20availablePublicationsCount%20%7B%0A%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20resourcePublicationsCount%20%7B%0A%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20shop%20%7B%0A%20%20%20%20%20%20publicationCount%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F921728736%22%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation publishablePublishToCurrentChannel($id: ID!) {

 publishablePublishToCurrentChannel(id: $id) {

 publishable {

 availablePublicationsCount {

 count

 }

 resourcePublicationsCount {

 count

 }

 }

 shop {

 publicationCount

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/Product/921728736"

},

},

);

const data=await response.json();

```
mutation publishablePublishToCurrentChannel($id: ID!) {
  publishablePublishToCurrentChannel(id: $id) {
    publishable {
      availablePublicationsCount {
        count
      }
      resourcePublicationsCount {
        count
      }
    }
    shop {
      publicationCount
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
"query": "mutation publishablePublishToCurrentChannel($id: ID!) { publishablePublishToCurrentChannel(id: $id) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/921728736"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/921728736"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation publishablePublishToCurrentChannel($id: ID!) {
      publishablePublishToCurrentChannel(id: $id) {
        publishable {
          availablePublicationsCount {
            count
          }
          resourcePublicationsCount {
            count
          }
        }
        shop {
          publicationCount
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/921728736"
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
  mutation publishablePublishToCurrentChannel($id: ID!) {
    publishablePublishToCurrentChannel(id: $id) {
      publishable {
        availablePublicationsCount {
          count
        }
        resourcePublicationsCount {
          count
        }
      }
      shop {
        publicationCount
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/921728736"
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

"id": "gid://shopify/Product/921728736"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"publishablePublishToCurrentChannel": {

"publishable": {

"availablePublicationsCount": {

"count": 2

},

"resourcePublicationsCount": {

"count": 2

}

},

"shop": {

"publicationCount": 3

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*