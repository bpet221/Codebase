---
title: "menuUpdate"
description: "Shopify GraphQL Admin API documentation for menuupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: menuUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate

Markdown Content:
menuUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#main-content)

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

[Anchor to menuUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#top)
menu Update
===========

mutation

Requires `write_online_store_navigation` access scope.

Updates a menu.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#arguments)
Arguments
---------

[Anchor to handle](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#arguments-handle)handle

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The menu's handle.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

ID of the menu to be updated.

[Anchor to items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#arguments-items)items

•[[Menu Item Update Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput)

required

List of the menu's items.

Show input fields

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#arguments-title)title

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

required

The menu's title.

* * *

Was this section helpful?

Yes No

[Anchor to MenuUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#returns)Menu Update Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to menu](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#returns-menu)menu

•[Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

The updated menu.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate#returns-userErrors)user Errors

•[[Menu Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a menu

#### Description

Update a menu

#### Query

```graphql
mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
  menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
  "id": "gid://shopify/Menu/442047006",
  "title": "updated menu",
  "handle": "danielstuff-main-menu",
  "items": [
    {
      "id": "gid://shopify/MenuItem/398712010",
      "title": "Electronics",
      "url": "collection/tables",
      "resourceId": "gid://shopify/Collection/71762467",
      "type": "COLLECTION",
      "items": []
    },
    {
      "id": "gid://shopify/MenuItem/643685044",
      "title": "Furniture",
      "url": "/collections/furniture",
      "resourceId": "gid://shopify/Collection/643685044",
      "type": "COLLECTION",
      "items": [
        {
          "id": "gid://shopify/MenuItem/927352226",
          "title": "Updated Living Room",
          "url": "/collections/living-room",
          "resourceId": "gid://shopify/Collection/927352226",
          "type": "COLLECTION",
          "items": [
            {
              "id": "gid://shopify/MenuItem/307741084",
              "title": "Sofa",
              "url": "/collections/sofa",
              "resourceId": "gid://shopify/Collection/307741084",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/375350346",
              "title": "Sound System",
              "url": "/collections/sound-system",
              "resourceId": "gid://shopify/Collection/375350346",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/837241978",
              "title": "Massage Chairs",
              "url": "/collections/massage%20chairs",
              "resourceId": "gid://shopify/Collection/837241978",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/960081962",
              "title": "Living Room Rugs",
              "url": "/collections/living%20room%20rugs",
              "resourceId": "gid://shopify/Collection/960081962",
              "type": "COLLECTION",
              "items": []
            }
          ]
        },
        {
          "id": "gid://shopify/MenuItem/715378231",
          "title": "Kitchen",
          "url": "/collections/kitchen",
          "resourceId": "gid://shopify/Collection/715378231",
          "type": "COLLECTION",
          "items": [
            {
              "id": "gid://shopify/MenuItem/108641250",
              "title": "Chairs",
              "url": "/collections/chairs",
              "resourceId": "gid://shopify/Collection/108641250",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/71762467",
              "title": "Tables",
              "url": "/collections/tables",
              "resourceId": "gid://shopify/Collection/71762467",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/826396515",
              "title": "Kitchen Rugs",
              "url": "/collections/kitchen%20rugs",
              "resourceId": "gid://shopify/Collection/826396515",
              "type": "COLLECTION",
              "items": []
            }
          ]
        }
      ]
    },
    {
      "id": "gid://shopify/MenuItem/698896745",
      "title": "Mega Sofa Sale",
      "url": "/collections/mega%20sale",
      "resourceId": "gid://shopify/Collection/307741084",
      "type": "COLLECTION",
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
"query": "mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) { menuUpdate(id: $id, title: $title, handle: $handle, items: $items) { menu { id handle items { id title items { id title } } } } }",
 "variables": {
    "id": "gid://shopify/Menu/442047006",
    "title": "updated menu",
    "handle": "danielstuff-main-menu",
    "items": [
      {
        "id": "gid://shopify/MenuItem/398712010",
        "title": "Electronics",
        "url": "collection/tables",
        "resourceId": "gid://shopify/Collection/71762467",
        "type": "COLLECTION",
        "items": []
      },
      {
        "id": "gid://shopify/MenuItem/643685044",
        "title": "Furniture",
        "url": "/collections/furniture",
        "resourceId": "gid://shopify/Collection/643685044",
        "type": "COLLECTION",
        "items": [
          {
            "id": "gid://shopify/MenuItem/927352226",
            "title": "Updated Living Room",
            "url": "/collections/living-room",
            "resourceId": "gid://shopify/Collection/927352226",
            "type": "COLLECTION",
            "items": [
              {
                "id": "gid://shopify/MenuItem/307741084",
                "title": "Sofa",
                "url": "/collections/sofa",
                "resourceId": "gid://shopify/Collection/307741084",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/375350346",
                "title": "Sound System",
                "url": "/collections/sound-system",
                "resourceId": "gid://shopify/Collection/375350346",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/837241978",
                "title": "Massage Chairs",
                "url": "/collections/massage%20chairs",
                "resourceId": "gid://shopify/Collection/837241978",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/960081962",
                "title": "Living Room Rugs",
                "url": "/collections/living%20room%20rugs",
                "resourceId": "gid://shopify/Collection/960081962",
                "type": "COLLECTION",
                "items": []
              }
            ]
          },
          {
            "id": "gid://shopify/MenuItem/715378231",
            "title": "Kitchen",
            "url": "/collections/kitchen",
            "resourceId": "gid://shopify/Collection/715378231",
            "type": "COLLECTION",
            "items": [
              {
                "id": "gid://shopify/MenuItem/108641250",
                "title": "Chairs",
                "url": "/collections/chairs",
                "resourceId": "gid://shopify/Collection/108641250",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/71762467",
                "title": "Tables",
                "url": "/collections/tables",
                "resourceId": "gid://shopify/Collection/71762467",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/826396515",
                "title": "Kitchen Rugs",
                "url": "/collections/kitchen%20rugs",
                "resourceId": "gid://shopify/Collection/826396515",
                "type": "COLLECTION",
                "items": []
              }
            ]
          }
        ]
      },
      {
        "id": "gid://shopify/MenuItem/698896745",
        "title": "Mega Sofa Sale",
        "url": "/collections/mega%20sale",
        "resourceId": "gid://shopify/Collection/307741084",
        "type": "COLLECTION",
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
  mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
    menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
        "id": "gid://shopify/Menu/442047006",
        "title": "updated menu",
        "handle": "danielstuff-main-menu",
        "items": [
            {
                "id": "gid://shopify/MenuItem/398712010",
                "title": "Electronics",
                "url": "collection/tables",
                "resourceId": "gid://shopify/Collection/71762467",
                "type": "COLLECTION",
                "items": []
            },
            {
                "id": "gid://shopify/MenuItem/643685044",
                "title": "Furniture",
                "url": "/collections/furniture",
                "resourceId": "gid://shopify/Collection/643685044",
                "type": "COLLECTION",
                "items": [
                    {
                        "id": "gid://shopify/MenuItem/927352226",
                        "title": "Updated Living Room",
                        "url": "/collections/living-room",
                        "resourceId": "gid://shopify/Collection/927352226",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/307741084",
                                "title": "Sofa",
                                "url": "/collections/sofa",
                                "resourceId": "gid://shopify/Collection/307741084",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/375350346",
                                "title": "Sound System",
                                "url": "/collections/sound-system",
                                "resourceId": "gid://shopify/Collection/375350346",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/837241978",
                                "title": "Massage Chairs",
                                "url": "/collections/massage%20chairs",
                                "resourceId": "gid://shopify/Collection/837241978",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/960081962",
                                "title": "Living Room Rugs",
                                "url": "/collections/living%20room%20rugs",
                                "resourceId": "gid://shopify/Collection/960081962",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/MenuItem/715378231",
                        "title": "Kitchen",
                        "url": "/collections/kitchen",
                        "resourceId": "gid://shopify/Collection/715378231",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/108641250",
                                "title": "Chairs",
                                "url": "/collections/chairs",
                                "resourceId": "gid://shopify/Collection/108641250",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/71762467",
                                "title": "Tables",
                                "url": "/collections/tables",
                                "resourceId": "gid://shopify/Collection/71762467",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/826396515",
                                "title": "Kitchen Rugs",
                                "url": "/collections/kitchen%20rugs",
                                "resourceId": "gid://shopify/Collection/826396515",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "gid://shopify/MenuItem/698896745",
                "title": "Mega Sofa Sale",
                "url": "/collections/mega%20sale",
                "resourceId": "gid://shopify/Collection/307741084",
                "type": "COLLECTION",
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
  mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
    menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
  "id": "gid://shopify/Menu/442047006",
  "title": "updated menu",
  "handle": "danielstuff-main-menu",
  "items": [
    {
      "id": "gid://shopify/MenuItem/398712010",
      "title": "Electronics",
      "url": "collection/tables",
      "resourceId": "gid://shopify/Collection/71762467",
      "type": "COLLECTION",
      "items": []
    },
    {
      "id": "gid://shopify/MenuItem/643685044",
      "title": "Furniture",
      "url": "/collections/furniture",
      "resourceId": "gid://shopify/Collection/643685044",
      "type": "COLLECTION",
      "items": [
        {
          "id": "gid://shopify/MenuItem/927352226",
          "title": "Updated Living Room",
          "url": "/collections/living-room",
          "resourceId": "gid://shopify/Collection/927352226",
          "type": "COLLECTION",
          "items": [
            {
              "id": "gid://shopify/MenuItem/307741084",
              "title": "Sofa",
              "url": "/collections/sofa",
              "resourceId": "gid://shopify/Collection/307741084",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/375350346",
              "title": "Sound System",
              "url": "/collections/sound-system",
              "resourceId": "gid://shopify/Collection/375350346",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/837241978",
              "title": "Massage Chairs",
              "url": "/collections/massage%20chairs",
              "resourceId": "gid://shopify/Collection/837241978",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/960081962",
              "title": "Living Room Rugs",
              "url": "/collections/living%20room%20rugs",
              "resourceId": "gid://shopify/Collection/960081962",
              "type": "COLLECTION",
              "items": []
            }
          ]
        },
        {
          "id": "gid://shopify/MenuItem/715378231",
          "title": "Kitchen",
          "url": "/collections/kitchen",
          "resourceId": "gid://shopify/Collection/715378231",
          "type": "COLLECTION",
          "items": [
            {
              "id": "gid://shopify/MenuItem/108641250",
              "title": "Chairs",
              "url": "/collections/chairs",
              "resourceId": "gid://shopify/Collection/108641250",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/71762467",
              "title": "Tables",
              "url": "/collections/tables",
              "resourceId": "gid://shopify/Collection/71762467",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/826396515",
              "title": "Kitchen Rugs",
              "url": "/collections/kitchen%20rugs",
              "resourceId": "gid://shopify/Collection/826396515",
              "type": "COLLECTION",
              "items": []
            }
          ]
        }
      ]
    },
    {
      "id": "gid://shopify/MenuItem/698896745",
      "title": "Mega Sofa Sale",
      "url": "/collections/mega%20sale",
      "resourceId": "gid://shopify/Collection/307741084",
      "type": "COLLECTION",
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
    "query": `mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
      menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
        "id": "gid://shopify/Menu/442047006",
        "title": "updated menu",
        "handle": "danielstuff-main-menu",
        "items": [
            {
                "id": "gid://shopify/MenuItem/398712010",
                "title": "Electronics",
                "url": "collection/tables",
                "resourceId": "gid://shopify/Collection/71762467",
                "type": "COLLECTION",
                "items": []
            },
            {
                "id": "gid://shopify/MenuItem/643685044",
                "title": "Furniture",
                "url": "/collections/furniture",
                "resourceId": "gid://shopify/Collection/643685044",
                "type": "COLLECTION",
                "items": [
                    {
                        "id": "gid://shopify/MenuItem/927352226",
                        "title": "Updated Living Room",
                        "url": "/collections/living-room",
                        "resourceId": "gid://shopify/Collection/927352226",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/307741084",
                                "title": "Sofa",
                                "url": "/collections/sofa",
                                "resourceId": "gid://shopify/Collection/307741084",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/375350346",
                                "title": "Sound System",
                                "url": "/collections/sound-system",
                                "resourceId": "gid://shopify/Collection/375350346",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/837241978",
                                "title": "Massage Chairs",
                                "url": "/collections/massage%20chairs",
                                "resourceId": "gid://shopify/Collection/837241978",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/960081962",
                                "title": "Living Room Rugs",
                                "url": "/collections/living%20room%20rugs",
                                "resourceId": "gid://shopify/Collection/960081962",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/MenuItem/715378231",
                        "title": "Kitchen",
                        "url": "/collections/kitchen",
                        "resourceId": "gid://shopify/Collection/715378231",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/108641250",
                                "title": "Chairs",
                                "url": "/collections/chairs",
                                "resourceId": "gid://shopify/Collection/108641250",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/71762467",
                                "title": "Tables",
                                "url": "/collections/tables",
                                "resourceId": "gid://shopify/Collection/71762467",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/826396515",
                                "title": "Kitchen Rugs",
                                "url": "/collections/kitchen%20rugs",
                                "resourceId": "gid://shopify/Collection/826396515",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "gid://shopify/MenuItem/698896745",
                "title": "Mega Sofa Sale",
                "url": "/collections/mega%20sale",
                "resourceId": "gid://shopify/Collection/307741084",
                "type": "COLLECTION",
                "items": []
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "menuUpdate": {
    "menu": {
      "id": "gid://shopify/Menu/442047006",
      "handle": "danielstuff-main-menu",
      "items": [
        {
          "id": "gid://shopify/MenuItem/398712010",
          "title": "Electronics",
          "items": []
        },
        {
          "id": "gid://shopify/MenuItem/643685044",
          "title": "Furniture",
          "items": [
            {
              "id": "gid://shopify/MenuItem/927352226",
              "title": "Updated Living Room"
            },
            {
              "id": "gid://shopify/MenuItem/715378231",
              "title": "Kitchen"
            }
          ]
        },
        {
          "id": "gid://shopify/MenuItem/698896745",
          "title": "Mega Sofa Sale",
          "items": []
        }
      ]
    }
  }
}
``` 
*   ### menuUpdate reference

Examples
--------

Update a menu

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20UpdateMenu(%24id%3A%20ID!%2C%20%24title%3A%20String!%2C%20%24handle%3A%20String!%2C%20%24items%3A%20%5BMenuItemUpdateInput!%5D!)%20%7B%0A%20%20menuUpdate(id%3A%20%24id%2C%20title%3A%20%24title%2C%20handle%3A%20%24handle%2C%20items%3A%20%24items)%20%7B%0A%20%20%20%20menu%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20items%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenu%2F442047006%22%2C%0A%20%20%22title%22%3A%20%22updated%20menu%22%2C%0A%20%20%22handle%22%3A%20%22danielstuff-main-menu%22%2C%0A%20%20%22items%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F398712010%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22Electronics%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22collection%2Ftables%22%2C%0A%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F71762467%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F643685044%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22Furniture%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Ffurniture%22%2C%0A%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F643685044%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F927352226%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Updated%20Living%20Room%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fliving-room%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F927352226%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F307741084%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Sofa%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fsofa%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F307741084%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F375350346%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Sound%20System%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fsound-system%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F375350346%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F837241978%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Massage%20Chairs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fmassage%2520chairs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F837241978%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F960081962%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Living%20Room%20Rugs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fliving%2520room%2520rugs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F960081962%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F715378231%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Kitchen%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fkitchen%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F715378231%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F108641250%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Chairs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fchairs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F108641250%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F71762467%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Tables%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Ftables%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F71762467%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F826396515%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Kitchen%20Rugs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fkitchen%2520rugs%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F826396515%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMenuItem%2F698896745%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22Mega%20Sofa%20Sale%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22%2Fcollections%2Fmega%2520sale%22%2C%0A%20%20%20%20%20%20%22resourceId%22%3A%20%22gid%3A%2F%2Fshopify%2FCollection%2F307741084%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22COLLECTION%22%2C%0A%20%20%20%20%20%20%22items%22%3A%20%5B%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

999

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {

 menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {

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

"id":"gid://shopify/Menu/442047006",

"title":"updated menu",

"handle":"danielstuff-main-menu",

"items":[

{

"id":"gid://shopify/MenuItem/398712010",

"title":"Electronics",

"url":"collection/tables",

"resourceId":"gid://shopify/Collection/71762467",

"type":"COLLECTION",

"items":[]

},

{

"id":"gid://shopify/MenuItem/643685044",

```
mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
  menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
"query": "mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) { menuUpdate(id: $id, title: $title, handle: $handle, items: $items) { menu { id handle items { id title items { id title } } } } }",
 "variables": {
    "id": "gid://shopify/Menu/442047006",
    "title": "updated menu",
    "handle": "danielstuff-main-menu",
    "items": [
      {
        "id": "gid://shopify/MenuItem/398712010",
        "title": "Electronics",
        "url": "collection/tables",
        "resourceId": "gid://shopify/Collection/71762467",
        "type": "COLLECTION",
        "items": []
      },
      {
        "id": "gid://shopify/MenuItem/643685044",
        "title": "Furniture",
        "url": "/collections/furniture",
        "resourceId": "gid://shopify/Collection/643685044",
        "type": "COLLECTION",
        "items": [
          {
            "id": "gid://shopify/MenuItem/927352226",
            "title": "Updated Living Room",
            "url": "/collections/living-room",
            "resourceId": "gid://shopify/Collection/927352226",
            "type": "COLLECTION",
            "items": [
              {
                "id": "gid://shopify/MenuItem/307741084",
                "title": "Sofa",
                "url": "/collections/sofa",
                "resourceId": "gid://shopify/Collection/307741084",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/375350346",
                "title": "Sound System",
                "url": "/collections/sound-system",
                "resourceId": "gid://shopify/Collection/375350346",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/837241978",
                "title": "Massage Chairs",
                "url": "/collections/massage%20chairs",
                "resourceId": "gid://shopify/Collection/837241978",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/960081962",
                "title": "Living Room Rugs",
                "url": "/collections/living%20room%20rugs",
                "resourceId": "gid://shopify/Collection/960081962",
                "type": "COLLECTION",
                "items": []
              }
            ]
          },
          {
            "id": "gid://shopify/MenuItem/715378231",
            "title": "Kitchen",
            "url": "/collections/kitchen",
            "resourceId": "gid://shopify/Collection/715378231",
            "type": "COLLECTION",
            "items": [
              {
                "id": "gid://shopify/MenuItem/108641250",
                "title": "Chairs",
                "url": "/collections/chairs",
                "resourceId": "gid://shopify/Collection/108641250",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/71762467",
                "title": "Tables",
                "url": "/collections/tables",
                "resourceId": "gid://shopify/Collection/71762467",
                "type": "COLLECTION",
                "items": []
              },
              {
                "id": "gid://shopify/MenuItem/826396515",
                "title": "Kitchen Rugs",
                "url": "/collections/kitchen%20rugs",
                "resourceId": "gid://shopify/Collection/826396515",
                "type": "COLLECTION",
                "items": []
              }
            ]
          }
        ]
      },
      {
        "id": "gid://shopify/MenuItem/698896745",
        "title": "Mega Sofa Sale",
        "url": "/collections/mega%20sale",
        "resourceId": "gid://shopify/Collection/307741084",
        "type": "COLLECTION",
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
  mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
    menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
        "id": "gid://shopify/Menu/442047006",
        "title": "updated menu",
        "handle": "danielstuff-main-menu",
        "items": [
            {
                "id": "gid://shopify/MenuItem/398712010",
                "title": "Electronics",
                "url": "collection/tables",
                "resourceId": "gid://shopify/Collection/71762467",
                "type": "COLLECTION",
                "items": []
            },
            {
                "id": "gid://shopify/MenuItem/643685044",
                "title": "Furniture",
                "url": "/collections/furniture",
                "resourceId": "gid://shopify/Collection/643685044",
                "type": "COLLECTION",
                "items": [
                    {
                        "id": "gid://shopify/MenuItem/927352226",
                        "title": "Updated Living Room",
                        "url": "/collections/living-room",
                        "resourceId": "gid://shopify/Collection/927352226",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/307741084",
                                "title": "Sofa",
                                "url": "/collections/sofa",
                                "resourceId": "gid://shopify/Collection/307741084",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/375350346",
                                "title": "Sound System",
                                "url": "/collections/sound-system",
                                "resourceId": "gid://shopify/Collection/375350346",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/837241978",
                                "title": "Massage Chairs",
                                "url": "/collections/massage%20chairs",
                                "resourceId": "gid://shopify/Collection/837241978",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/960081962",
                                "title": "Living Room Rugs",
                                "url": "/collections/living%20room%20rugs",
                                "resourceId": "gid://shopify/Collection/960081962",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/MenuItem/715378231",
                        "title": "Kitchen",
                        "url": "/collections/kitchen",
                        "resourceId": "gid://shopify/Collection/715378231",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/108641250",
                                "title": "Chairs",
                                "url": "/collections/chairs",
                                "resourceId": "gid://shopify/Collection/108641250",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/71762467",
                                "title": "Tables",
                                "url": "/collections/tables",
                                "resourceId": "gid://shopify/Collection/71762467",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/826396515",
                                "title": "Kitchen Rugs",
                                "url": "/collections/kitchen%20rugs",
                                "resourceId": "gid://shopify/Collection/826396515",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "gid://shopify/MenuItem/698896745",
                "title": "Mega Sofa Sale",
                "url": "/collections/mega%20sale",
                "resourceId": "gid://shopify/Collection/307741084",
                "type": "COLLECTION",
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
    "query": `mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
      menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
        "id": "gid://shopify/Menu/442047006",
        "title": "updated menu",
        "handle": "danielstuff-main-menu",
        "items": [
            {
                "id": "gid://shopify/MenuItem/398712010",
                "title": "Electronics",
                "url": "collection/tables",
                "resourceId": "gid://shopify/Collection/71762467",
                "type": "COLLECTION",
                "items": []
            },
            {
                "id": "gid://shopify/MenuItem/643685044",
                "title": "Furniture",
                "url": "/collections/furniture",
                "resourceId": "gid://shopify/Collection/643685044",
                "type": "COLLECTION",
                "items": [
                    {
                        "id": "gid://shopify/MenuItem/927352226",
                        "title": "Updated Living Room",
                        "url": "/collections/living-room",
                        "resourceId": "gid://shopify/Collection/927352226",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/307741084",
                                "title": "Sofa",
                                "url": "/collections/sofa",
                                "resourceId": "gid://shopify/Collection/307741084",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/375350346",
                                "title": "Sound System",
                                "url": "/collections/sound-system",
                                "resourceId": "gid://shopify/Collection/375350346",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/837241978",
                                "title": "Massage Chairs",
                                "url": "/collections/massage%20chairs",
                                "resourceId": "gid://shopify/Collection/837241978",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/960081962",
                                "title": "Living Room Rugs",
                                "url": "/collections/living%20room%20rugs",
                                "resourceId": "gid://shopify/Collection/960081962",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    },
                    {
                        "id": "gid://shopify/MenuItem/715378231",
                        "title": "Kitchen",
                        "url": "/collections/kitchen",
                        "resourceId": "gid://shopify/Collection/715378231",
                        "type": "COLLECTION",
                        "items": [
                            {
                                "id": "gid://shopify/MenuItem/108641250",
                                "title": "Chairs",
                                "url": "/collections/chairs",
                                "resourceId": "gid://shopify/Collection/108641250",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/71762467",
                                "title": "Tables",
                                "url": "/collections/tables",
                                "resourceId": "gid://shopify/Collection/71762467",
                                "type": "COLLECTION",
                                "items": []
                            },
                            {
                                "id": "gid://shopify/MenuItem/826396515",
                                "title": "Kitchen Rugs",
                                "url": "/collections/kitchen%20rugs",
                                "resourceId": "gid://shopify/Collection/826396515",
                                "type": "COLLECTION",
                                "items": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "gid://shopify/MenuItem/698896745",
                "title": "Mega Sofa Sale",
                "url": "/collections/mega%20sale",
                "resourceId": "gid://shopify/Collection/307741084",
                "type": "COLLECTION",
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
  mutation UpdateMenu($id: ID!, $title: String!, $handle: String!, $items: [MenuItemUpdateInput!]!) {
    menuUpdate(id: $id, title: $title, handle: $handle, items: $items) {
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
  "id": "gid://shopify/Menu/442047006",
  "title": "updated menu",
  "handle": "danielstuff-main-menu",
  "items": [
    {
      "id": "gid://shopify/MenuItem/398712010",
      "title": "Electronics",
      "url": "collection/tables",
      "resourceId": "gid://shopify/Collection/71762467",
      "type": "COLLECTION",
      "items": []
    },
    {
      "id": "gid://shopify/MenuItem/643685044",
      "title": "Furniture",
      "url": "/collections/furniture",
      "resourceId": "gid://shopify/Collection/643685044",
      "type": "COLLECTION",
      "items": [
        {
          "id": "gid://shopify/MenuItem/927352226",
          "title": "Updated Living Room",
          "url": "/collections/living-room",
          "resourceId": "gid://shopify/Collection/927352226",
          "type": "COLLECTION",
          "items": [
            {
              "id": "gid://shopify/MenuItem/307741084",
              "title": "Sofa",
              "url": "/collections/sofa",
              "resourceId": "gid://shopify/Collection/307741084",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/375350346",
              "title": "Sound System",
              "url": "/collections/sound-system",
              "resourceId": "gid://shopify/Collection/375350346",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/837241978",
              "title": "Massage Chairs",
              "url": "/collections/massage%20chairs",
              "resourceId": "gid://shopify/Collection/837241978",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/960081962",
              "title": "Living Room Rugs",
              "url": "/collections/living%20room%20rugs",
              "resourceId": "gid://shopify/Collection/960081962",
              "type": "COLLECTION",
              "items": []
            }
          ]
        },
        {
          "id": "gid://shopify/MenuItem/715378231",
          "title": "Kitchen",
          "url": "/collections/kitchen",
          "resourceId": "gid://shopify/Collection/715378231",
          "type": "COLLECTION",
          "items": [
            {
              "id": "gid://shopify/MenuItem/108641250",
              "title": "Chairs",
              "url": "/collections/chairs",
              "resourceId": "gid://shopify/Collection/108641250",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/71762467",
              "title": "Tables",
              "url": "/collections/tables",
              "resourceId": "gid://shopify/Collection/71762467",
              "type": "COLLECTION",
              "items": []
            },
            {
              "id": "gid://shopify/MenuItem/826396515",
              "title": "Kitchen Rugs",
              "url": "/collections/kitchen%20rugs",
              "resourceId": "gid://shopify/Collection/826396515",
              "type": "COLLECTION",
              "items": []
            }
          ]
        }
      ]
    },
    {
      "id": "gid://shopify/MenuItem/698896745",
      "title": "Mega Sofa Sale",
      "url": "/collections/mega%20sale",
      "resourceId": "gid://shopify/Collection/307741084",
      "type": "COLLECTION",
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

999

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

⌄

{

"id": "gid://shopify/Menu/442047006",

"title": "updated menu",

"handle": "danielstuff-main-menu",

"items": [

{

"id": "gid://shopify/MenuItem/398712010",

"title": "Electronics",

"url": "collection/tables",

"resourceId": "gid://shopify/Collection/71762467",

"type": "COLLECTION",

"items": []

},

{

"id": "gid://shopify/MenuItem/643685044",

"title": "Furniture",

"url": "/collections/furniture",

"resourceId": "gid://shopify/Collection/643685044",

"type": "COLLECTION",

"items": [

{

"id": "gid://shopify/MenuItem/927352226",

"title": "Updated Living Room",

"url": "/collections/living-room",

"resourceId": "gid://shopify/Collection/927352226",

"type": "COLLECTION",

"items": [

{

"id": "gid://shopify/MenuItem/307741084",

"title": "Sofa",

"url": "/collections/sofa",

"resourceId": "gid://shopify/Collection/307741084",

"type": "COLLECTION",

"items": []

},

{

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

29

30

31

32

33

34

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

⌄

{

"menuUpdate": {

"menu": {

"id": "gid://shopify/Menu/442047006",

"handle": "danielstuff-main-menu",

"items": [

{

"id": "gid://shopify/MenuItem/398712010",

"title": "Electronics",

"items": []

},

{

"id": "gid://shopify/MenuItem/643685044",

"title": "Furniture",

"items": [

{

"id": "gid://shopify/MenuItem/927352226",

"title": "Updated Living Room"

},

{

"id": "gid://shopify/MenuItem/715378231",

"title": "Kitchen"

}

]

},

{

"id": "gid://shopify/MenuItem/698896745",

"title": "Mega Sofa Sale",

"items": []

}

]

}

}

}


---
*Content truncated at "Updates" section*