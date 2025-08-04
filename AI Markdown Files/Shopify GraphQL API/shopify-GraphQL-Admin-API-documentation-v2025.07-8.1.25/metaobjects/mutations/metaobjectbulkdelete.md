---
title: "metaobjectBulkDelete"
description: "Shopify GraphQL Admin API documentation for metaobjectbulkdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete"
extraction_method: "jina"
sections: ['Metaobjects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: metaobjectBulkDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete

Markdown Content:
metaobjectBulkDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#main-content)

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

[Anchor to metaobjectBulkDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#top)
metaobject Bulk Delete
======================

mutation

Requires `write_metaobjects` access scope.

Asynchronously delete metaobjects and their associated metafields in bulk.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#arguments)
Arguments
---------

[Anchor to where](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#arguments-where)where

•[Metaobject Bulk Delete Where Condition!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectBulkDeleteWhereCondition)

required

Specifies the condition by which metaobjects are deleted. Exactly one field of input is required.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MetaobjectBulkDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#returns)Metaobject Bulk Delete Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to job](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#returns-job)job

•[Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

The asynchronous job that deletes the metaobjects.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectbulkdelete#returns-userErrors)user Errors

•[[Metaobject User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete metaobjects and their associated fields in bulk by IDs

#### Description

To delete metaobjects and their associated metafields in bulk, use the `metaobjectBulkDelete` mutation. Note that this operation happens asynchronously, so the mutation will return immediately with a `job` object. You can use the `job` object to check the status of the operation. The following example deletes 2 "Lookbook" metaobjects and their metafields using the IDs of the metaobjects to delete.

#### Query

```graphql
mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
  metaobjectBulkDelete(where: $where) {
    job {
      id
      done
    }
  }
}
``` #### Variables

```json
{
  "where": {
    "ids": [
      "gid://shopify/Metaobject/515107504",
      "gid://shopify/Metaobject/129678104"
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
"query": "mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) { metaobjectBulkDelete(where: $where) { job { id done } } }",
 "variables": {
    "where": {
      "ids": [
        "gid://shopify/Metaobject/515107504",
        "gid://shopify/Metaobject/129678104"
      ]
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
    metaobjectBulkDelete(where: $where) {
      job {
        id
        done
      }
    }
  }`,
  {
    variables: {
        "where": {
            "ids": [
                "gid://shopify/Metaobject/515107504",
                "gid://shopify/Metaobject/129678104"
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
  mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
    metaobjectBulkDelete(where: $where) {
      job {
        id
        done
      }
    }
  }
QUERY

variables = {
  "where": {
    "ids": [
      "gid://shopify/Metaobject/515107504",
      "gid://shopify/Metaobject/129678104"
    ]
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
      metaobjectBulkDelete(where: $where) {
        job {
          id
          done
        }
      }
    }`,
    "variables": {
        "where": {
            "ids": [
                "gid://shopify/Metaobject/515107504",
                "gid://shopify/Metaobject/129678104"
            ]
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectBulkDelete": {
    "job": {
      "id": "gid://shopify/Job/4d5319b7-71de-482e-b3c5-d11321c9ffca",
      "done": false
    }
  }
}
``` 
*   ### Delete metaobjects and their associated fields in bulk by type

#### Description

Along with using ids to delete metaobjects, you can also delete metaobjects by type. Note that you must use either `ids` or `type` but not both as they are mutually exclusive. The following example deletes all the "LookBook" metaobjects by using the "lookbook" `type` argument.

#### Query

```graphql
mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
  metaobjectBulkDelete(where: $where) {
    job {
      id
      done
    }
  }
}
``` #### Variables

```json
{
  "where": {
    "type": "lookbook"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) { metaobjectBulkDelete(where: $where) { job { id done } } }",
 "variables": {
    "where": {
      "type": "lookbook"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
    metaobjectBulkDelete(where: $where) {
      job {
        id
        done
      }
    }
  }`,
  {
    variables: {
        "where": {
            "type": "lookbook"
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
  mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
    metaobjectBulkDelete(where: $where) {
      job {
        id
        done
      }
    }
  }
QUERY

variables = {
  "where": {
    "type": "lookbook"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
      metaobjectBulkDelete(where: $where) {
        job {
          id
          done
        }
      }
    }`,
    "variables": {
        "where": {
            "type": "lookbook"
        }
    },
  },
});
``` #### Response

```json
{
  "metaobjectBulkDelete": {
    "job": {
      "id": "gid://shopify/Job/e439ccf6-01c1-49df-9411-985def30b4f8",
      "done": false
    }
  }
}
``` 
*   ### metaobjectBulkDelete reference

Examples
--------

Delete metaobjects and their associated fields in bulk by IDs

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteMetaobjects(%24where%3A%20MetaobjectBulkDeleteWhereCondition!)%20%7B%0A%20%20metaobjectBulkDelete(where%3A%20%24where)%20%7B%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20done%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22ids%22%3A%20%5B%0A%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMetaobject%2F515107504%22%2C%0A%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMetaobject%2F129678104%22%0A%20%20%20%20%5D%0A%20%20%7D%0A%7D)Copy

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

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {

 metaobjectBulkDelete(where: $where) {

 job {

 id

 done

 }

 }

 }`,

{

variables:{

"where":{

"ids":[

"gid://shopify/Metaobject/515107504",

"gid://shopify/Metaobject/129678104"

]

}

},

},

);

const data=await response.json();

```
mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
  metaobjectBulkDelete(where: $where) {
    job {
      id
      done
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
"query": "mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) { metaobjectBulkDelete(where: $where) { job { id done } } }",
 "variables": {
    "where": {
      "ids": [
        "gid://shopify/Metaobject/515107504",
        "gid://shopify/Metaobject/129678104"
      ]
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
    metaobjectBulkDelete(where: $where) {
      job {
        id
        done
      }
    }
  }`,
  {
    variables: {
        "where": {
            "ids": [
                "gid://shopify/Metaobject/515107504",
                "gid://shopify/Metaobject/129678104"
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
    "query": `mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
      metaobjectBulkDelete(where: $where) {
        job {
          id
          done
        }
      }
    }`,
    "variables": {
        "where": {
            "ids": [
                "gid://shopify/Metaobject/515107504",
                "gid://shopify/Metaobject/129678104"
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
  mutation DeleteMetaobjects($where: MetaobjectBulkDeleteWhereCondition!) {
    metaobjectBulkDelete(where: $where) {
      job {
        id
        done
      }
    }
  }
QUERY

variables = {
  "where": {
    "ids": [
      "gid://shopify/Metaobject/515107504",
      "gid://shopify/Metaobject/129678104"
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

9

1

2

3

4

5

6

7

8

›

⌄

⌄

⌄

{

"where": {

"ids": [

"gid://shopify/Metaobject/515107504",

"gid://shopify/Metaobject/129678104"

]

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

›

⌄

⌄

⌄

{

"metaobjectBulkDelete": {

"job": {

"id": "gid://shopify/Job/4d5319b7-71de-482e-b3c5-d11321c9ffca",

"done": false

}

}

}


---
*Content truncated at "Updates" section*