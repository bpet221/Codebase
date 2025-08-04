---
title: "menuCreate"
description: "Shopify GraphQL Admin API documentation for menucreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: menuCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate

Markdown Content:
menuCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#main-content)

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
*   
Online store

    *   Queries   
    *   
Mutations

        *   [article Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate)
        *   [article Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articledelete)
        *   [article Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleupdate)
        *   [blog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogcreate)
        *   [blog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogdelete)
        *   [blog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogupdate)
        *   [comment Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentapprove)
        *   [comment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentdelete)
        *   [comment Not Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentnotspam)
        *   [comment Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentspam)
        *   [menu Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate)
        *   [menu Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menudelete)
        *   [menu Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate)
        *   [page Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagecreate)
        *   [page Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagedelete)
        *   [page Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageupdate)
        *   [script Tag Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate)
        *   [script Tag Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagdelete)
        *   [script Tag Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagupdate)
        *   [theme Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate)
        *   [theme Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themedelete)
        *   [theme Files Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilescopy)
        *   [theme Files Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesdelete)
        *   [theme Files Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert)
        *   [theme Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themepublish)
        *   [theme Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate)
        *   [url Redirect Bulk Delete All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeleteall)
        *   [url Redirect Bulk Delete By Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebyids)
        *   [url Redirect Bulk Delete By Saved Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysavedsearch)
        *   [url Redirect Bulk Delete By Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysearch)
        *   [url Redirect Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectcreate)
        *   [url Redirect Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete)
        *   [url Redirect Import Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportcreate)
        *   [url Redirect Import Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportsubmit)
        *   [url Redirect Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate)

    *   Objects   

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

[Anchor to menuCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#top)
menu Create
===========

mutation

Requires `write_online_store_navigation` access scope.

Creates a menu.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#arguments-handle)handle

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The menu's handle.

[Anchor to items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#arguments-items)items

•[[Menu Item Create Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

required

List of the menu's items.

Show input fields

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#arguments-title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The menu's title.

* * *

Was this section helpful?

Yes No

[Anchor to MenuCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#returns)Menu Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to menu](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#returns-menu)menu

•[Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

The created menu.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate#returns-userErrors)user Errors

•[[Menu Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a menu

#### Description

Create a menu with sub items

#### Query

```graphql
mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
  menuCreate(title: $title, handle: $handle, items: $items) {
    menu {
      id
      handle
      items {
        id
        title
        items {
          id
          title
        }
      }
    }
  }
}
``` #### Variables

```json
{
  "title": "Sidebar",
  "handle": "sidebar",
  "items": [
    {
      "title": "Collections",
      "type": "COLLECTION",
      "url": "/collection",
      "items": [
        {
          "title": "Bestsellers",
          "type": "COLLECTION",
          "resourceId": "gid://shopify/Collection/1007901140",
          "url": "/collection/bestsellers/new",
          "tags": [
            "new"
          ],
          "items": []
        }
      ]
    },
    {
      "title": "Products",
      "type": "CATALOG",
      "url": "/collections/all",
      "items": []
    },
    {
      "title": "About us",
      "type": "PAGE",
      "resourceId": "gid://shopify/Page/905192165",
      "url": "/pages/about-us",
      "items": []
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) { menuCreate(title: $title, handle: $handle, items: $items) { menu { id handle items { id title items { id title } } } } }",
 "variables": {
    "title": "Sidebar",
    "handle": "sidebar",
    "items": [
      {
        "title": "Collections",
        "type": "COLLECTION",
        "url": "/collection",
        "items": [
          {
            "title": "Bestsellers",
            "type": "COLLECTION",
            "resourceId": "gid://shopify/Collection/1007901140",
            "url": "/collection/bestsellers/new",
            "tags": [
              "new"
            ],
            "items": []
          }
        ]
      },
      {
        "title": "Products",
        "type": "CATALOG",
        "url": "/collections/all",
        "items": []
      },
      {
        "title": "About us",
        "type": "PAGE",
        "resourceId": "gid://shopify/Page/905192165",
        "url": "/pages/about-us",
        "items": []
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }`,
  {
    variables: {
        "title": "Sidebar",
        "handle": "sidebar",
        "items": [
            {
                "title": "Collections",
                "type": "COLLECTION",
                "url": "/collection",
                "items": [
                    {
                        "title": "Bestsellers",
                        "type": "COLLECTION",
                        "resourceId": "gid://shopify/Collection/1007901140",
                        "url": "/collection/bestsellers/new",
                        "tags": [
                            "new"
                        ],
                        "items": []
                    }
                ]
            },
            {
                "title": "Products",
                "type": "CATALOG",
                "url": "/collections/all",
                "items": []
            },
            {
                "title": "About us",
                "type": "PAGE",
                "resourceId": "gid://shopify/Page/905192165",
                "url": "/pages/about-us",
                "items": []
            }
        ]
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
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }
QUERY

variables = {
  "title": "Sidebar",
  "handle": "sidebar",
  "items": [
    {
      "title": "Collections",
      "type": "COLLECTION",
      "url": "/collection",
      "items": [
        {
          "title": "Bestsellers",
          "type": "COLLECTION",
          "resourceId": "gid://shopify/Collection/1007901140",
          "url": "/collection/bestsellers/new",
          "tags": [
            "new"
          ],
          "items": []
        }
      ]
    },
    {
      "title": "Products",
      "type": "CATALOG",
      "url": "/collections/all",
      "items": []
    },
    {
      "title": "About us",
      "type": "PAGE",
      "resourceId": "gid://shopify/Page/905192165",
      "url": "/pages/about-us",
      "items": []
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
      menuCreate(title: $title, handle: $handle, items: $items) {
        menu {
          id
          handle
          items {
            id
            title
            items {
              id
              title
            }
          }
        }
      }
    }`,
    "variables": {
        "title": "Sidebar",
        "handle": "sidebar",
        "items": [
            {
                "title": "Collections",
                "type": "COLLECTION",
                "url": "/collection",
                "items": [
                    {
                        "title": "Bestsellers",
                        "type": "COLLECTION",
                        "resourceId": "gid://shopify/Collection/1007901140",
                        "url": "/collection/bestsellers/new",
                        "tags": [
                            "new"
                        ],
                        "items": []
                    }
                ]
            },
            {
                "title": "Products",
                "type": "CATALOG",
                "url": "/collections/all",
                "items": []
            },
            {
                "title": "About us",
                "type": "PAGE",
                "resourceId": "gid://shopify/Page/905192165",
                "url": "/pages/about-us",
                "items": []
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "menuCreate": {
    "menu": null
  }
}
``` 
*   ### menuCreate reference

Examples
--------

Create a menu

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateMenu(%24title%3A%20String!%2C%20%24handle%3A%20String!%2C%20%24items%3A%20%5BMenuItemCreateInput!%5D!)%20%7B%0A%20%20menuCreate(title%3A%20%24title%2C%20handle%3A%20%24handle%2C%20items%3A%20%24items)%20%7B%0A%20%20%20%20menu%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22title%22%3A%20%22Sidebar%22%2C%0A%20%20%22handle%22%3A%20%22sidebar%22%2C%0A%20%20%22items%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22Collections%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollection%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Bestsellers%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F1007901140%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollection%2Fbestsellers%2Fnew%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22tags%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22new%22%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22Products%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22CATALOG%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fall%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22title%22%3A%20%22About%20us%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22PAGE%22%2C%0A%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FPage%2F905192165%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fpages%2Fabout-us%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {

 menuCreate(title: $title, handle: $handle, items: $items) {

 menu {

 id

 handle

 items {

 id

 title

 items {

 id

 title

 }

 }

 }

 }

 }`,

{

variables:{

"title":"Sidebar",

"handle":"sidebar",

"items":[

{

"title":"Collections",

"type":"COLLECTION",

"url":"/collection",

"items":[

{

"title":"Bestsellers",

"type":"COLLECTION",

"resourceId":"gid://shopify/Collection/1007901140",

"url":"/collection/bestsellers/new",

"tags":[

```
mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
  menuCreate(title: $title, handle: $handle, items: $items) {
    menu {
      id
      handle
      items {
        id
        title
        items {
          id
          title
        }
      }
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
"query": "mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) { menuCreate(title: $title, handle: $handle, items: $items) { menu { id handle items { id title items { id title } } } } }",
 "variables": {
    "title": "Sidebar",
    "handle": "sidebar",
    "items": [
      {
        "title": "Collections",
        "type": "COLLECTION",
        "url": "/collection",
        "items": [
          {
            "title": "Bestsellers",
            "type": "COLLECTION",
            "resourceId": "gid://shopify/Collection/1007901140",
            "url": "/collection/bestsellers/new",
            "tags": [
              "new"
            ],
            "items": []
          }
        ]
      },
      {
        "title": "Products",
        "type": "CATALOG",
        "url": "/collections/all",
        "items": []
      },
      {
        "title": "About us",
        "type": "PAGE",
        "resourceId": "gid://shopify/Page/905192165",
        "url": "/pages/about-us",
        "items": []
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }`,
  {
    variables: {
        "title": "Sidebar",
        "handle": "sidebar",
        "items": [
            {
                "title": "Collections",
                "type": "COLLECTION",
                "url": "/collection",
                "items": [
                    {
                        "title": "Bestsellers",
                        "type": "COLLECTION",
                        "resourceId": "gid://shopify/Collection/1007901140",
                        "url": "/collection/bestsellers/new",
                        "tags": [
                            "new"
                        ],
                        "items": []
                    }
                ]
            },
            {
                "title": "Products",
                "type": "CATALOG",
                "url": "/collections/all",
                "items": []
            },
            {
                "title": "About us",
                "type": "PAGE",
                "resourceId": "gid://shopify/Page/905192165",
                "url": "/pages/about-us",
                "items": []
            }
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
      menuCreate(title: $title, handle: $handle, items: $items) {
        menu {
          id
          handle
          items {
            id
            title
            items {
              id
              title
            }
          }
        }
      }
    }`,
    "variables": {
        "title": "Sidebar",
        "handle": "sidebar",
        "items": [
            {
                "title": "Collections",
                "type": "COLLECTION",
                "url": "/collection",
                "items": [
                    {
                        "title": "Bestsellers",
                        "type": "COLLECTION",
                        "resourceId": "gid://shopify/Collection/1007901140",
                        "url": "/collection/bestsellers/new",
                        "tags": [
                            "new"
                        ],
                        "items": []
                    }
                ]
            },
            {
                "title": "Products",
                "type": "CATALOG",
                "url": "/collections/all",
                "items": []
            },
            {
                "title": "About us",
                "type": "PAGE",
                "resourceId": "gid://shopify/Page/905192165",
                "url": "/pages/about-us",
                "items": []
            }
        ]
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
  mutation CreateMenu($title: String!, $handle: String!, $items: [MenuItemCreateInput!]!) {
    menuCreate(title: $title, handle: $handle, items: $items) {
      menu {
        id
        handle
        items {
          id
          title
          items {
            id
            title
          }
        }
      }
    }
  }
QUERY

variables = {
  "title": "Sidebar",
  "handle": "sidebar",
  "items": [
    {
      "title": "Collections",
      "type": "COLLECTION",
      "url": "/collection",
      "items": [
        {
          "title": "Bestsellers",
          "type": "COLLECTION",
          "resourceId": "gid://shopify/Collection/1007901140",
          "url": "/collection/bestsellers/new",
          "tags": [
            "new"
          ],
          "items": []
        }
      ]
    },
    {
      "title": "Products",
      "type": "CATALOG",
      "url": "/collections/all",
      "items": []
    },
    {
      "title": "About us",
      "type": "PAGE",
      "resourceId": "gid://shopify/Page/905192165",
      "url": "/pages/about-us",
      "items": []
    }
  ]
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

⌄

⌄

{

"title": "Sidebar",

"handle": "sidebar",

"items": [

{

"title": "Collections",

"type": "COLLECTION",

"url": "/collection",

"items": [

{

"title": "Bestsellers",

"type": "COLLECTION",

"resourceId": "gid://shopify/Collection/1007901140",

"url": "/collection/bestsellers/new",

"tags": [

"new"

],

"items": []

}

]

},

{

"title": "Products",

"type": "CATALOG",

"url": "/collections/all",

"items": []

},

{

"title": "About us",

"type": "PAGE",

"resourceId": "gid://shopify/Page/905192165",

"url": "/pages/about-us",

"items": []

}

]

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

›

⌄

⌄

{

"menuCreate": {

"menu": null

}

}


---
*Content truncated at "Updates" section*