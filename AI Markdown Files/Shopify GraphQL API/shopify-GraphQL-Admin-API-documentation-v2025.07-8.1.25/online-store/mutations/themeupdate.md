---
title: "themeUpdate"
description: "Shopify GraphQL Admin API documentation for themeupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: themeUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate

Markdown Content:
themeUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#main-content)

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
*   
Online Store

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
        *   [store Credit Account Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountcredit)
        *   [store Credit Account Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storecreditaccountdebit)
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

[Anchor to themeUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#top)
theme Update
============

mutation

Requires The user needs write_themes and an exemption from Shopify to modify themes. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Updates a theme.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the theme to be updated.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#arguments-input)input

•[Online Store Theme Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OnlineStoreThemeInput)

required

The attributes of the theme to be updated.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ThemeUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#returns)Theme Update Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to theme](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#returns-theme)theme

•[Online Store Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

The theme that was updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate#returns-userErrors)user Errors

•[[Theme Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update the name of a theme

#### Query

```graphql
mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
  themeUpdate(id: $id, input: $input) {
    theme {
      id
      name
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
  "id": "gid://shopify/OnlineStoreTheme/908009861",
  "input": {
    "name": "Dawn - Summer Sale"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) { themeUpdate(id: $id, input: $input) { theme { id name } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "input": {
            "name": "Dawn - Summer Sale"
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
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/OnlineStoreTheme/908009861",
  "input": {
    "name": "Dawn - Summer Sale"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "input": {
            "name": "Dawn - Summer Sale"
        }
    },
  },
});
``` #### Response

```json
{
  "themeUpdate": {
    "theme": {
      "id": "gid://shopify/OnlineStoreTheme/908009861",
      "name": "Dawn - Summer Sale"
    },
    "userErrors": []
  }
}
``` 
*   ### themeUpdate reference

Examples
--------

Update the name of a theme

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeUpdate(%24id%3A%20ID!%2C%20%24input%3A%20OnlineStoreThemeInput!)%20%7B%0A%20%20themeUpdate(id%3A%20%24id%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20theme%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FOnlineStoreTheme%2F908009861%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Dawn%20-%20Summer%20Sale%22%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {

 themeUpdate(id: $id, input: $input) {

 theme {

 id

 name

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/OnlineStoreTheme/908009861",

"input":{

"name":"Dawn - Summer Sale"

}

},

},

);

const data=await response.json();

```
mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
  themeUpdate(id: $id, input: $input) {
    theme {
      id
      name
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
"query": "mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) { themeUpdate(id: $id, input: $input) { theme { id name } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/OnlineStoreTheme/908009861",
    "input": {
      "name": "Dawn - Summer Sale"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "input": {
            "name": "Dawn - Summer Sale"
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
    "query": `mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
      themeUpdate(id: $id, input: $input) {
        theme {
          id
          name
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/OnlineStoreTheme/908009861",
        "input": {
            "name": "Dawn - Summer Sale"
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
  mutation themeUpdate($id: ID!, $input: OnlineStoreThemeInput!) {
    themeUpdate(id: $id, input: $input) {
      theme {
        id
        name
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/OnlineStoreTheme/908009861",
  "input": {
    "name": "Dawn - Summer Sale"
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

›

⌄

⌄

{

"id": "gid://shopify/OnlineStoreTheme/908009861",

"input": {

"name": "Dawn - Summer Sale"

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

7

8

9

›

⌄

⌄

⌄

{

"themeUpdate": {

"theme": {

"id": "gid://shopify/OnlineStoreTheme/908009861",

"name": "Dawn - Summer Sale"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*