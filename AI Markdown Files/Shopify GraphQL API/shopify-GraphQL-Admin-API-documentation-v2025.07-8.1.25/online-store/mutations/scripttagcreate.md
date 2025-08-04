---
title: "scriptTagCreate"
description: "Shopify GraphQL Admin API documentation for scripttagcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: scriptTagCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate

Markdown Content:
scriptTagCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#main-content)

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

[Anchor to scriptTagCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#top)
script Tag Create
=================

mutation

Requires `write_script_tags` access scope.

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Creates a new script tag.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#arguments-input)input

•[Script Tag Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput)

required

The input fields for a script tag.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ScriptTagCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#returns)Script Tag Create Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to scriptTag](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#returns-scriptTag)script Tag

•[Script Tag](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

The script tag that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Creates a new script tag

#### Query

```graphql
mutation ScriptTagCreate($input: ScriptTagInput!) {
  scriptTagCreate(input: $input) {
    scriptTag {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
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
  "input": {
    "src": "https://js.example.org/bar.js",
    "displayScope": "ONLINE_STORE",
    "cache": true
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ScriptTagCreate($input: ScriptTagInput!) { scriptTagCreate(input: $input) { scriptTag { id cache createdAt displayScope src updatedAt } userErrors { field message } } }",
 "variables": {
    "input": {
      "src": "https://js.example.org/bar.js",
      "displayScope": "ONLINE_STORE",
      "cache": true
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "src": "https://js.example.org/bar.js",
            "displayScope": "ONLINE_STORE",
            "cache": true
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
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "src": "https://js.example.org/bar.js",
    "displayScope": "ONLINE_STORE",
    "cache": true
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ScriptTagCreate($input: ScriptTagInput!) {
      scriptTagCreate(input: $input) {
        scriptTag {
          id
          cache
          createdAt
          displayScope
          src
          updatedAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "src": "https://js.example.org/bar.js",
            "displayScope": "ONLINE_STORE",
            "cache": true
        }
    },
  },
});
``` #### Response

```json
{
  "scriptTagCreate": {
    "scriptTag": {
      "id": "gid://shopify/ScriptTag/870402687",
      "cache": true,
      "createdAt": "2024-12-18T11:36:28Z",
      "displayScope": "ONLINE_STORE",
      "src": "https://js.example.org/bar.js",
      "updatedAt": "2024-12-18T11:36:28Z"
    },
    "userErrors": []
  }
}
``` 
*   ### scriptTagCreate reference

Examples
--------

Creates a new script tag

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ScriptTagCreate(%24input%3A%20ScriptTagInput!)%20%7B%0A%20%20scriptTagCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20scriptTag%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20cache%0A%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20displayScope%0A%20%20%20%20%20%20src%0A%20%20%20%20%20%20updatedAt%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22src%22%3A%20%22https%3A%2F%2Fjs.example.org%2Fbar.js%22%2C%0A%20%20%20%20%22displayScope%22%3A%20%22ONLINE_STORE%22%2C%0A%20%20%20%20%22cache%22%3A%20true%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ScriptTagCreate($input: ScriptTagInput!) {

 scriptTagCreate(input: $input) {

 scriptTag {

 id

 cache

 createdAt

 displayScope

 src

 updatedAt

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"input":{

"src":"https://js.example.org/bar.js",

"displayScope":"ONLINE_STORE",

"cache":true

}

},

},

);

const data=await response.json();

```
mutation ScriptTagCreate($input: ScriptTagInput!) {
  scriptTagCreate(input: $input) {
    scriptTag {
      id
      cache
      createdAt
      displayScope
      src
      updatedAt
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
"query": "mutation ScriptTagCreate($input: ScriptTagInput!) { scriptTagCreate(input: $input) { scriptTag { id cache createdAt displayScope src updatedAt } userErrors { field message } } }",
 "variables": {
    "input": {
      "src": "https://js.example.org/bar.js",
      "displayScope": "ONLINE_STORE",
      "cache": true
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "input": {
            "src": "https://js.example.org/bar.js",
            "displayScope": "ONLINE_STORE",
            "cache": true
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
    "query": `mutation ScriptTagCreate($input: ScriptTagInput!) {
      scriptTagCreate(input: $input) {
        scriptTag {
          id
          cache
          createdAt
          displayScope
          src
          updatedAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "src": "https://js.example.org/bar.js",
            "displayScope": "ONLINE_STORE",
            "cache": true
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
  mutation ScriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
        cache
        createdAt
        displayScope
        src
        updatedAt
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "input": {
    "src": "https://js.example.org/bar.js",
    "displayScope": "ONLINE_STORE",
    "cache": true
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

›

⌄

⌄

{

"input": {

"src": "https://js.example.org/bar.js",

"displayScope": "ONLINE_STORE",

"cache": true

}

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

›

⌄

⌄

⌄

{

"scriptTagCreate": {

"scriptTag": {

"id": "gid://shopify/ScriptTag/870402687",

"cache": true,

"createdAt": "2024-12-18T11:36:28Z",

"displayScope": "ONLINE_STORE",

"src": "https://js.example.org/bar.js",

"updatedAt": "2024-12-18T11:36:28Z"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*