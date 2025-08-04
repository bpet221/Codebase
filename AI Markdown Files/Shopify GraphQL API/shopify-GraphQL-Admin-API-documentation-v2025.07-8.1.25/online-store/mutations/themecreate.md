---
title: "themeCreate"
description: "Shopify GraphQL Admin API documentation for themecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: themeCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate

Markdown Content:
themeCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#main-content)

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

[Anchor to themeCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#top)
theme Create
============

mutation

Requires The user needs write_themes and an exemption from Shopify to modify themes. If you think that your app is eligible for an exemption and should have access to this API, then you can [submit an exception request](https://docs.google.com/forms/d/e/1FAIpQLSfZTB1vxFC5d1-GPdqYunWRGUoDcOheHQzfK2RoEFEHrknt5g/viewform).

Creates a theme using an external URL or for files that were previously uploaded using the [stagedUploadsCreate mutation](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate). These themes are added to the [Themes page](https://admin.shopify.com/themes) in Shopify admin.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#arguments)
Arguments
---------

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#arguments-name)name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The name of the theme to be created.

[Anchor to role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#arguments-role)role

•[Theme Role](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

Default:UNPUBLISHED

The role of the theme to be created. Only UNPUBLISHED and DEVELOPMENT roles are permitted.

Show enum values

[Anchor to source](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#arguments-source)source

•[URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

required

An external URL or a [staged upload URL](https://shopify.dev/api/admin-graphql/latest/mutations/stageduploadscreate) of the theme to import.

* * *

Was this section helpful?

Yes No

[Anchor to ThemeCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#returns)Theme Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to theme](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#returns-theme)theme

•[Online Store Theme](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

The theme that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate#returns-userErrors)user Errors

•[[Theme Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ThemeCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a new theme from an url with a custom name

#### Query

```graphql
mutation themeCreate($source: URL!, $name: String!) {
  themeCreate(source: $source, name: $name) {
    theme {
      name
      role
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
  "source": "http://www.example.com/dawn.zip",
  "name": "Dawn"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation themeCreate($source: URL!, $name: String!) { themeCreate(source: $source, name: $name) { theme { name role } userErrors { field message } } }",
 "variables": {
    "source": "http://www.example.com/dawn.zip",
    "name": "Dawn"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeCreate($source: URL!, $name: String!) {
    themeCreate(source: $source, name: $name) {
      theme {
        name
        role
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "source": "http://www.example.com/dawn.zip",
        "name": "Dawn"
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
  mutation themeCreate($source: URL!, $name: String!) {
    themeCreate(source: $source, name: $name) {
      theme {
        name
        role
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "source": "http://www.example.com/dawn.zip",
  "name": "Dawn"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation themeCreate($source: URL!, $name: String!) {
      themeCreate(source: $source, name: $name) {
        theme {
          name
          role
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "source": "http://www.example.com/dawn.zip",
        "name": "Dawn"
    },
  },
});
``` #### Response

```json
{
  "themeCreate": {
    "theme": {
      "name": "Dawn",
      "role": "UNPUBLISHED"
    },
    "userErrors": []
  }
}
``` 
*   ### Creates a theme

#### Query

```graphql
mutation ThemeCreate($name: String, $source: URL!) {
  themeCreate(name: $name, source: $source) {
    theme {
      id
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "name": "New Theme",
  "source": "http://someurl.com/lemongrass.zip"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ThemeCreate($name: String, $source: URL!) { themeCreate(name: $name, source: $source) { theme { id } userErrors { code field message } } }",
 "variables": {
    "name": "New Theme",
    "source": "http://someurl.com/lemongrass.zip"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ThemeCreate($name: String, $source: URL!) {
    themeCreate(name: $name, source: $source) {
      theme {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "name": "New Theme",
        "source": "http://someurl.com/lemongrass.zip"
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
  mutation ThemeCreate($name: String, $source: URL!) {
    themeCreate(name: $name, source: $source) {
      theme {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "name": "New Theme",
  "source": "http://someurl.com/lemongrass.zip"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ThemeCreate($name: String, $source: URL!) {
      themeCreate(name: $name, source: $source) {
        theme {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "name": "New Theme",
        "source": "http://someurl.com/lemongrass.zip"
    },
  },
});
``` #### Response

```json
{
  "themeCreate": {
    "theme": {
      "id": "gid://shopify/OnlineStoreTheme/1049083724"
    },
    "userErrors": []
  }
}
``` 
*   ### themeCreate reference

Examples
--------

Create a new theme from an url with a custom name

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20themeCreate(%24source%3A%20URL!%2C%20%24name%3A%20String!)%20%7B%0A%20%20themeCreate(source%3A%20%24source%2C%20name%3A%20%24name)%20%7B%0A%20%20%20%20theme%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20role%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22source%22%3A%20%22http%3A%2F%2Fwww.example.com%2Fdawn.zip%22%2C%0A%20%20%22name%22%3A%20%22Dawn%22%0A%7D)Copy

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

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation themeCreate($source: URL!, $name: String!) {

 themeCreate(source: $source, name: $name) {

 theme {

 name

 role

 }

 userErrors {

 field

 message

 }

 }

 }`,

{

variables:{

"source":"http://www.example.com/dawn.zip",

"name":"Dawn"

},

},

);

const data=await response.json();

```
mutation themeCreate($source: URL!, $name: String!) {
  themeCreate(source: $source, name: $name) {
    theme {
      name
      role
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
"query": "mutation themeCreate($source: URL!, $name: String!) { themeCreate(source: $source, name: $name) { theme { name role } userErrors { field message } } }",
 "variables": {
    "source": "http://www.example.com/dawn.zip",
    "name": "Dawn"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation themeCreate($source: URL!, $name: String!) {
    themeCreate(source: $source, name: $name) {
      theme {
        name
        role
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "source": "http://www.example.com/dawn.zip",
        "name": "Dawn"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation themeCreate($source: URL!, $name: String!) {
      themeCreate(source: $source, name: $name) {
        theme {
          name
          role
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "source": "http://www.example.com/dawn.zip",
        "name": "Dawn"
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
  mutation themeCreate($source: URL!, $name: String!) {
    themeCreate(source: $source, name: $name) {
      theme {
        name
        role
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "source": "http://www.example.com/dawn.zip",
  "name": "Dawn"
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

›

⌄

{

"source": "http://www.example.com/dawn.zip",

"name": "Dawn"

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

"themeCreate": {

"theme": {

"name": "Dawn",

"role": "UNPUBLISHED"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*