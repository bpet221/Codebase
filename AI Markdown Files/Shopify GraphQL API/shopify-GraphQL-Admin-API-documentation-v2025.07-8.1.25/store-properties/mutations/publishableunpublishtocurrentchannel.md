---
title: "publishableUnpublishToCurrentChannel"
description: "Shopify GraphQL Admin API documentation for publishableunpublishtocurrentchannel"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel"
extraction_method: "jina"
sections: ['Store properties', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: publishableUnpublishToCurrentChannel - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel

Markdown Content:
publishableUnpublishToCurrentChannel - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#main-content)

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

[Anchor to publishableUnpublishToCurrentChannel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#top)
publishable Unpublish To Current Channel
========================================

mutation

Requires `write_publications` access scope. Also: The user must have a permission to create and edit products.

Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The resource to delete or update publications for.

* * *

Was this section helpful?

Yes No

[Anchor to PublishableUnpublishToCurrentChannelPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#returns)Publishable Unpublish To Current Channel Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to publishable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#returns-publishable)publishable

•[Publishable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable)

Resource that has been unpublished.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The user's shop.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableunpublishtocurrentchannel#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Unpublish a product from the current channel

#### Query

```graphql
mutation publishableUnpublishToCurrentChannel($id: ID!) {
  publishableUnpublishToCurrentChannel(id: $id) {
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
"query": "mutation publishableUnpublishToCurrentChannel($id: ID!) { publishableUnpublishToCurrentChannel(id: $id) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/921728736"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublishToCurrentChannel($id: ID!) {
    publishableUnpublishToCurrentChannel(id: $id) {
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
  mutation publishableUnpublishToCurrentChannel($id: ID!) {
    publishableUnpublishToCurrentChannel(id: $id) {
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
    "query": `mutation publishableUnpublishToCurrentChannel($id: ID!) {
      publishableUnpublishToCurrentChannel(id: $id) {
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
  "publishableUnpublishToCurrentChannel": {
    "publishable": {
      "availablePublicationsCount": {
        "count": 1
      },
      "resourcePublicationsCount": {
        "count": 1
      }
    },
    "shop": {
      "publicationCount": 3
    },
    "userErrors": []
  }
}
``` 
*   ### publishableUnpublishToCurrentChannel reference

Examples
--------

Unpublish a product from the current channel

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20publishableUnpublishToCurrentChannel(%24id%3A%20ID!)%20%7B%0A%20%20publishableUnpublishToCurrentChannel(id%3A%20%24id)%20%7B%0A%20%20%20%20publishable%20%7B%0A%20%20%20%20%20%20availablePublicationsCount%20%7B%0A%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20resourcePublicationsCount%20%7B%0A%20%20%20%20%20%20%20%20count%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20shop%20%7B%0A%20%20%20%20%20%20publicationCount%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F921728736%22%0A%7D)Copy

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

 mutation publishableUnpublishToCurrentChannel($id: ID!) {

 publishableUnpublishToCurrentChannel(id: $id) {

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
mutation publishableUnpublishToCurrentChannel($id: ID!) {
  publishableUnpublishToCurrentChannel(id: $id) {
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
"query": "mutation publishableUnpublishToCurrentChannel($id: ID!) { publishableUnpublishToCurrentChannel(id: $id) { publishable { availablePublicationsCount { count } resourcePublicationsCount { count } } shop { publicationCount } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Product/921728736"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation publishableUnpublishToCurrentChannel($id: ID!) {
    publishableUnpublishToCurrentChannel(id: $id) {
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
    "query": `mutation publishableUnpublishToCurrentChannel($id: ID!) {
      publishableUnpublishToCurrentChannel(id: $id) {
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
  mutation publishableUnpublishToCurrentChannel($id: ID!) {
    publishableUnpublishToCurrentChannel(id: $id) {
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

"publishableUnpublishToCurrentChannel": {

"publishable": {

"availablePublicationsCount": {

"count": 1

},

"resourcePublicationsCount": {

"count": 1

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