---
title: "metaobjectCreate"
description: "Shopify GraphQL Admin API documentation for metaobjectcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate"
extraction_method: "jina"
sections: ['Metaobjects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate

Markdown Content:
metaobjectCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#main-content)

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
*   
Metaobjects

    *   Queries   
    *   
Mutations

        *   [metaobject Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete)
        *   [metaobject Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate)
        *   [metaobject Definition Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitioncreate)
        *   [metaobject Definition Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitiondelete)
        *   [metaobject Definition Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdefinitionupdate)
        *   [metaobject Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectdelete)
        *   [metaobject Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectupdate)
        *   [metaobject Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectupsert)
        *   [standard Metaobject Definition Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardmetaobjectdefinitionenable)

    *   Objects   

*   Online Store   
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

[Anchor to metaobjectCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#top)
metaobject Create
=================

mutation

Requires `write_metaobjects` access scope.

Creates a new metaobject.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#arguments)
Arguments
---------

[Anchor to metaobject](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#arguments-metaobject)metaobject

•[Metaobject Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectCreateInput)

required

The parameters for the metaobject to create.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetaobjectCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#returns)Metaobject Create Payload returns
------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to metaobject](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#returns-metaobject)metaobject

•[Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

The created metaobject.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectcreate#returns-userErrors)user Errors

•[[Metaobject User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a metaobject

#### Description

To create a metaobject, you can use the `metaobjectCreate` mutation along with the metaobject as an argument providing the type and fields you want to create. A `MetaobjectDefinition` with the specified type and fields must already exist. The following example creates a new "Lookbook" metaobject with the `winter-2023` handle and the season field set to `winter`.

#### Query

```graphql
mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
  metaobjectCreate(metaobject: $metaobject) {
    metaobject {
      handle
      season: field(key: "season") {
        value
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
``` #### Variables

```json
{
  "metaobject": {
    "type": "lookbook",
    "handle": "winter-2023",
    "fields": [
      {
        "key": "season",
        "value": "winter"
      }
    ]
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) { metaobjectCreate(metaobject: $metaobject) { metaobject { handle season: field(key: \"season\") { value } } userErrors { field message code } } }",
 "variables": {
    "metaobject": {
      "type": "lookbook",
      "handle": "winter-2023",
      "fields": [
        {
          "key": "season",
          "value": "winter"
        }
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
    metaobjectCreate(metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "metaobject": {
            "type": "lookbook",
            "handle": "winter-2023",
            "fields": [
                {
                    "key": "season",
                    "value": "winter"
                }
            ]
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
  mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
    metaobjectCreate(metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "metaobject": {
    "type": "lookbook",
    "handle": "winter-2023",
    "fields": [
      {
        "key": "season",
        "value": "winter"
      }
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
      metaobjectCreate(metaobject: $metaobject) {
        metaobject {
          handle
          season: field(key: "season") {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metaobject": {
            "type": "lookbook",
            "handle": "winter-2023",
            "fields": [
                {
                    "key": "season",
                    "value": "winter"
                }
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectCreate": {
    "metaobject": {
      "handle": "winter-2023",
      "season": {
        "value": "winter"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### metaobjectCreate reference

Examples
--------

Create a metaobject

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateMetaobject(%24metaobject%3A%20MetaobjectCreateInput!)%20%7B%0A%20%20metaobjectCreate(metaobject%3A%20%24metaobject)%20%7B%0A%20%20%20%20metaobject%20%7B%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20season%3A%20field(key%3A%20%22season%22)%20%7B%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22metaobject%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22lookbook%22%2C%0A%20%20%20%20%22handle%22%3A%20%22winter-2023%22%2C%0A%20%20%20%20%22fields%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22key%22%3A%20%22season%22%2C%0A%20%20%20%20%20%20%20%20%22value%22%3A%20%22winter%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {

 metaobjectCreate(metaobject: $metaobject) {

 metaobject {

 handle

 season: field(key: "season") {

 value

 }

 }

 userErrors {

 field

 message

 code

 }

 }

 }`,

{

variables:{

"metaobject":{

"type":"lookbook",

"handle":"winter-2023",

"fields":[

{

"key":"season",

"value":"winter"

}

]

}

},

},

);

const data=await response.json();

```
mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
  metaobjectCreate(metaobject: $metaobject) {
    metaobject {
      handle
      season: field(key: "season") {
        value
      }
    }
    userErrors {
      field
      message
      code
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
"query": "mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) { metaobjectCreate(metaobject: $metaobject) { metaobject { handle season: field(key: \"season\") { value } } userErrors { field message code } } }",
 "variables": {
    "metaobject": {
      "type": "lookbook",
      "handle": "winter-2023",
      "fields": [
        {
          "key": "season",
          "value": "winter"
        }
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
    metaobjectCreate(metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }`,
  {
    variables: {
        "metaobject": {
            "type": "lookbook",
            "handle": "winter-2023",
            "fields": [
                {
                    "key": "season",
                    "value": "winter"
                }
            ]
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
    "query": `mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
      metaobjectCreate(metaobject: $metaobject) {
        metaobject {
          handle
          season: field(key: "season") {
            value
          }
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    "variables": {
        "metaobject": {
            "type": "lookbook",
            "handle": "winter-2023",
            "fields": [
                {
                    "key": "season",
                    "value": "winter"
                }
            ]
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
  mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) {
    metaobjectCreate(metaobject: $metaobject) {
      metaobject {
        handle
        season: field(key: "season") {
          value
        }
      }
      userErrors {
        field
        message
        code
      }
    }
  }
QUERY

variables = {
  "metaobject": {
    "type": "lookbook",
    "handle": "winter-2023",
    "fields": [
      {
        "key": "season",
        "value": "winter"
      }
    ]
  }
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

"metaobject": {

"type": "lookbook",

"handle": "winter-2023",

"fields": [

{

"key": "season",

"value": "winter"

}

]

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

›

⌄

⌄

⌄

⌄

{

"metaobjectCreate": {

"metaobject": {

"handle": "winter-2023",

"season": {

"value": "winter"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*