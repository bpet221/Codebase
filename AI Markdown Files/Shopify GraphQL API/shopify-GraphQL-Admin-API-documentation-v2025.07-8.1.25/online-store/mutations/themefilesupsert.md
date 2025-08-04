---
title: "themeFilesUpsert"
description: "Shopify GraphQL Admin API documentation for themefilesupsert"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: themeFilesUpsert - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert

Markdown Content:
themeFilesUpsert - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#main-content)

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

[Anchor to themeFilesUpsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#top)
theme Files Upsert
==================

mutation

Requires The user needs write_themes and an exemption from Shopify to modify theme files. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Create or update theme files.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#arguments)
Arguments
---------

[Anchor to files](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#arguments-files)files

•[[Online Store Theme Files Upsert File Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeFilesUpsertFileInput)

required

The files to update.

Show input fields

[Anchor to themeId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#arguments-themeId)theme Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The theme to update.

* * *

Was this section helpful?

Yes No

[Anchor to ThemeFilesUpsertPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#returns)Theme Files Upsert Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The theme files write job triggered by the mutation.

Show fields

[Anchor to upsertedThemeFiles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#returns-upsertedThemeFiles)upserted Theme Files

•[[Online Store Theme File Operation Result!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult)

The resulting theme files.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert#returns-userErrors)user Errors

•[[Online Store Theme Files User Errors!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFilesUserErrors)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create or update a theme file

#### Query

```graphql
mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
  themeFilesUpsert(files: $files, themeId: $themeId) {
    upsertedThemeFiles {
      filename
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
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "filename": "templates/index.json",
      "body": {
        "type": "TEXT",
        "value": "{ \"sections\": {}, \"order\": [] }"
      }
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
"query": "mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) { themeFilesUpsert(files: $files, themeId: $themeId) { upsertedThemeFiles { filename } userErrors { field message } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "filename": "templates/index.json",
        "body": {
          "type": "TEXT",
          "value": "{ \"sections\": {}, \"order\": [] }"
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
    themeFilesUpsert(files: $files, themeId: $themeId) {
      upsertedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "filename": "templates/index.json",
                "body": {
                    "type": "TEXT",
                    "value": "{ \"sections\": {}, \"order\": [] }"
                }
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
  mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
    themeFilesUpsert(files: $files, themeId: $themeId) {
      upsertedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "filename": "templates/index.json",
      "body": {
        "type": "TEXT",
        "value": "{ \"sections\": {}, \"order\": [] }"
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
      themeFilesUpsert(files: $files, themeId: $themeId) {
        upsertedThemeFiles {
          filename
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "filename": "templates/index.json",
                "body": {
                    "type": "TEXT",
                    "value": "{ \"sections\": {}, \"order\": [] }"
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "themeFilesUpsert": {
    "upsertedThemeFiles": [
      {
        "filename": "templates/index.json"
      }
    ],
    "userErrors": []
  }
}
``` 
*   ### Create or update theme files in bulk

#### Query

```graphql
mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
  themeFilesUpsert(files: $files, themeId: $themeId) {
    upsertedThemeFiles {
      filename
    }
    job {
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
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "filename": "templates/index.json",
      "body": {
        "type": "TEXT",
        "value": "{ \"sections\": {}, \"order\": [] }"
      }
    },
    {
      "filename": "assets/custom-content.txt",
      "body": {
        "type": "BASE64",
        "value": "Y3VzdG9tIGNvbnRlbnQ="
      }
    },
    {
      "filename": "assets/large-dog-image.jpg",
      "body": {
        "type": "URL",
        "value": "https://www.example.com/large-dog-image.jpg"
      }
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
"query": "mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) { themeFilesUpsert(files: $files, themeId: $themeId) { upsertedThemeFiles { filename } job { id } userErrors { field message } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "filename": "templates/index.json",
        "body": {
          "type": "TEXT",
          "value": "{ \"sections\": {}, \"order\": [] }"
        }
      },
      {
        "filename": "assets/custom-content.txt",
        "body": {
          "type": "BASE64",
          "value": "Y3VzdG9tIGNvbnRlbnQ="
        }
      },
      {
        "filename": "assets/large-dog-image.jpg",
        "body": {
          "type": "URL",
          "value": "https://www.example.com/large-dog-image.jpg"
        }
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
    themeFilesUpsert(files: $files, themeId: $themeId) {
      upsertedThemeFiles {
        filename
      }
      job {
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
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "filename": "templates/index.json",
                "body": {
                    "type": "TEXT",
                    "value": "{ \"sections\": {}, \"order\": [] }"
                }
            },
            {
                "filename": "assets/custom-content.txt",
                "body": {
                    "type": "BASE64",
                    "value": "Y3VzdG9tIGNvbnRlbnQ="
                }
            },
            {
                "filename": "assets/large-dog-image.jpg",
                "body": {
                    "type": "URL",
                    "value": "https://www.example.com/large-dog-image.jpg"
                }
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
  mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
    themeFilesUpsert(files: $files, themeId: $themeId) {
      upsertedThemeFiles {
        filename
      }
      job {
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
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "filename": "templates/index.json",
      "body": {
        "type": "TEXT",
        "value": "{ \"sections\": {}, \"order\": [] }"
      }
    },
    {
      "filename": "assets/custom-content.txt",
      "body": {
        "type": "BASE64",
        "value": "Y3VzdG9tIGNvbnRlbnQ="
      }
    },
    {
      "filename": "assets/large-dog-image.jpg",
      "body": {
        "type": "URL",
        "value": "https://www.example.com/large-dog-image.jpg"
      }
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
      themeFilesUpsert(files: $files, themeId: $themeId) {
        upsertedThemeFiles {
          filename
        }
        job {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "filename": "templates/index.json",
                "body": {
                    "type": "TEXT",
                    "value": "{ \"sections\": {}, \"order\": [] }"
                }
            },
            {
                "filename": "assets/custom-content.txt",
                "body": {
                    "type": "BASE64",
                    "value": "Y3VzdG9tIGNvbnRlbnQ="
                }
            },
            {
                "filename": "assets/large-dog-image.jpg",
                "body": {
                    "type": "URL",
                    "value": "https://www.example.com/large-dog-image.jpg"
                }
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "themeFilesUpsert": {
    "upsertedThemeFiles": [
      {
        "filename": "templates/index.json"
      },
      {
        "filename": "assets/custom-content.txt"
      }
    ],
    "job": {
      "id": "gid://shopify/Job/ae8d210d-90e0-4912-96d0-96d45c5e8fbb"
    },
    "userErrors": []
  }
}
``` 
*   ### themeFilesUpsert reference

Examples
--------

Create or update a theme file

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeFilesUpsert(%24files%3A%20%5BOnlineStoreThemeFilesUpsertFileInput!%5D!%2C%20%24themeId%3A%20ID!)%20%7B%0A%20%20themeFilesUpsert(files%3A%20%24files%2C%20themeId%3A%20%24themeId)%20%7B%0A%20%20%20%20upsertedThemeFiles%20%7B%0A%20%20%20%20%20%20filename%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22themeId%22%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F529529152%22%2C%0A%20%20%22files%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22filename%22%3A%20%22templates%2Findex.json%22%2C%0A%20%20%20%20%20%20%22body%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22TEXT%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22%7B%20%5C%22sections%5C%22%3A%20%7B%7D%2C%20%5C%22order%5C%22%3A%20%5B%5D%20%7D%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {

 themeFilesUpsert(files: $files, themeId: $themeId) {

 upsertedThemeFiles {

 filename

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"themeId":"gid://shopify/OnlineStoreTheme/529529152",

"files":[

{

"filename":"templates/index.json",

"body":{

"type":"TEXT",

"value":"{ \"sections\": {}, \"order\": [] }"

}

}

]

},

},

);

const data=await response.json();

```
mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
  themeFilesUpsert(files: $files, themeId: $themeId) {
    upsertedThemeFiles {
      filename
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
"query": "mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) { themeFilesUpsert(files: $files, themeId: $themeId) { upsertedThemeFiles { filename } userErrors { field message } } }",
 "variables": {
    "themeId": "gid://shopify/OnlineStoreTheme/529529152",
    "files": [
      {
        "filename": "templates/index.json",
        "body": {
          "type": "TEXT",
          "value": "{ \"sections\": {}, \"order\": [] }"
        }
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
    themeFilesUpsert(files: $files, themeId: $themeId) {
      upsertedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "filename": "templates/index.json",
                "body": {
                    "type": "TEXT",
                    "value": "{ \"sections\": {}, \"order\": [] }"
                }
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
    "query": `mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
      themeFilesUpsert(files: $files, themeId: $themeId) {
        upsertedThemeFiles {
          filename
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "themeId": "gid://shopify/OnlineStoreTheme/529529152",
        "files": [
            {
                "filename": "templates/index.json",
                "body": {
                    "type": "TEXT",
                    "value": "{ \"sections\": {}, \"order\": [] }"
                }
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
  mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
    themeFilesUpsert(files: $files, themeId: $themeId) {
      upsertedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "themeId": "gid://shopify/OnlineStoreTheme/529529152",
  "files": [
    {
      "filename": "templates/index.json",
      "body": {
        "type": "TEXT",
        "value": "{ \"sections\": {}, \"order\": [] }"
      }
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

›

⌄

⌄

⌄

⌄

{

"themeId": "gid://shopify/OnlineStoreTheme/529529152",

"files": [

{

"filename": "templates/index.json",

"body": {

"type": "TEXT",

"value": "{ \"sections\": {}, \"order\": [] }"

}

}

]

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

⌄

{

"themeFilesUpsert": {

"upsertedThemeFiles": [

{

"filename": "templates/index.json"

}

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*