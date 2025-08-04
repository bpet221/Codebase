---
title: "mobilePlatformApplications"
description: "Shopify GraphQL Admin API documentation for mobileplatformapplications"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: mobilePlatformApplications - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications

Markdown Content:
mobilePlatformApplications - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#main-content)

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
*   
Apps

    *   
Queries

        *   [app](https://shopify.dev/docs/api/admin-graphql/latest/queries/app)
        *   [app By Handle](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbyhandle)
        *   [app By Key](https://shopify.dev/docs/api/admin-graphql/latest/queries/appbykey)
        *   [app Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallation)
        *   [app Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appinstallations)
        *   [current App Installation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation)
        *   [mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication)
        *   [mobile Platform Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications)
        *   [publication](https://shopify.dev/docs/api/admin-graphql/latest/queries/publication)
        *   [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)
        *   [publications Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationscount)

    *   Mutations   
    *   Objects   

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
*   Online store   
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

[Anchor to mobilePlatformApplications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#top)
mobile Platform Applications
============================

query

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

List the mobile platform applications.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#arguments)
MobilePlatformApplicationConnection arguments
---------------------------------------------

•[MobilePlatformApplicationConnection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection)

[Anchor to after](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#arguments-after)after

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to before](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#arguments-before)before

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to first](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#arguments-first)first

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to last](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#arguments-last)last

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

[Anchor to reverse](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#arguments-reverse)reverse

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:false

Reverse the order of the underlying list.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#possible-returns)Possible returns
---------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to edges](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#returns-edges)edges

•[[Mobile Platform Application Edge!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

Show fields

[Anchor to nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#returns-nodes)nodes

•[[Mobile Platform Application!]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

non-null

A list of nodes that are contained in MobilePlatformApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

Show union types

[Anchor to pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplications#returns-pageInfo)page Info

•[Page Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

non-null

An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a list of Mobile Platform Applications

#### Description

This example demonstrates how to fetch a list of mobile platform applications.

#### Query

```graphql
query MobilePlatformApplicationQuery {
  mobilePlatformApplications(first: 10) {
    edges {
      node {
        ... on AndroidApplication {
          id
          applicationId
          sha256CertFingerprints
          appLinksEnabled
          __typename
        }
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          appClipApplicationId
          appClipsEnabled
          sharedWebCredentialsEnabled
          __typename
        }
      }
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query MobilePlatformApplicationQuery { mobilePlatformApplications(first: 10) { edges { node { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } ... on AppleApplication { id appId universalLinksEnabled appClipApplicationId appClipsEnabled sharedWebCredentialsEnabled __typename } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MobilePlatformApplicationQuery {
    mobilePlatformApplications(first: 10) {
      edges {
        node {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            appClipApplicationId
            appClipsEnabled
            sharedWebCredentialsEnabled
            __typename
          }
        }
      }
    }
  }`,
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
  query MobilePlatformApplicationQuery {
    mobilePlatformApplications(first: 10) {
      edges {
        node {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            appClipApplicationId
            appClipsEnabled
            sharedWebCredentialsEnabled
            __typename
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MobilePlatformApplicationQuery {
    mobilePlatformApplications(first: 10) {
      edges {
        node {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            appClipApplicationId
            appClipsEnabled
            sharedWebCredentialsEnabled
            __typename
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "mobilePlatformApplications": {
    "edges": [
      {
        "node": {
          "id": "gid://shopify/MobilePlatformApplication/1066176067",
          "applicationId": "androidfake.org.domain.com",
          "sha256CertFingerprints": [
            "A1:B2:C3:D4"
          ],
          "appLinksEnabled": true,
          "__typename": "AndroidApplication"
        }
      },
      {
        "node": {
          "id": "gid://shopify/MobilePlatformApplication/1066176068",
          "appId": "applefake.org.domain.com",
          "universalLinksEnabled": true,
          "appClipApplicationId": "ios.shopify.io.Clip",
          "appClipsEnabled": true,
          "sharedWebCredentialsEnabled": true,
          "__typename": "AppleApplication"
        }
      }
    ]
  }
}
``` 

Get a list of Mobile Platform Applications
------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MobilePlatformApplicationQuery%20%7B%0A%20%20mobilePlatformApplications(first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20AndroidApplication%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20applicationId%0A%20%20%20%20%20%20%20%20%20%20sha256CertFingerprints%0A%20%20%20%20%20%20%20%20%20%20appLinksEnabled%0A%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20...%20on%20AppleApplication%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20appId%0A%20%20%20%20%20%20%20%20%20%20universalLinksEnabled%0A%20%20%20%20%20%20%20%20%20%20appClipApplicationId%0A%20%20%20%20%20%20%20%20%20%20appClipsEnabled%0A%20%20%20%20%20%20%20%20%20%20sharedWebCredentialsEnabled%0A%20%20%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MobilePlatformApplicationQuery {

 mobilePlatformApplications(first: 10) {

 edges {

 node {

 ... on AndroidApplication {

 id

 applicationId

 sha256CertFingerprints

 appLinksEnabled

 __typename

 }

 ... on AppleApplication {

 id

 appId

 universalLinksEnabled

 appClipApplicationId

 appClipsEnabled

 sharedWebCredentialsEnabled

 __typename

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query MobilePlatformApplicationQuery {
  mobilePlatformApplications(first: 10) {
    edges {
      node {
        ... on AndroidApplication {
          id
          applicationId
          sha256CertFingerprints
          appLinksEnabled
          __typename
        }
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          appClipApplicationId
          appClipsEnabled
          sharedWebCredentialsEnabled
          __typename
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
"query": "query MobilePlatformApplicationQuery { mobilePlatformApplications(first: 10) { edges { node { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } ... on AppleApplication { id appId universalLinksEnabled appClipApplicationId appClipsEnabled sharedWebCredentialsEnabled __typename } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MobilePlatformApplicationQuery {
    mobilePlatformApplications(first: 10) {
      edges {
        node {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            appClipApplicationId
            appClipsEnabled
            sharedWebCredentialsEnabled
            __typename
          }
        }
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query MobilePlatformApplicationQuery {
    mobilePlatformApplications(first: 10) {
      edges {
        node {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            appClipApplicationId
            appClipsEnabled
            sharedWebCredentialsEnabled
            __typename
          }
        }
      }
    }
  }`,
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
  query MobilePlatformApplicationQuery {
    mobilePlatformApplications(first: 10) {
      edges {
        node {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
          }
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            appClipApplicationId
            appClipsEnabled
            sharedWebCredentialsEnabled
            __typename
          }
        }
      }
    }
  }
QUERY

response = client.query(query: query)
```

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

"mobilePlatformApplications": {

"edges": [

{

"node": {

"id": "gid://shopify/MobilePlatformApplication/1066176067",

"applicationId": "androidfake.org.domain.com",

"sha256CertFingerprints": [

"A1:B2:C3:D4"

],

"appLinksEnabled": true,

"__typename": "AndroidApplication"

}

},

{

"node": {

"id": "gid://shopify/MobilePlatformApplication/1066176068",

"appId": "applefake.org.domain.com",

"universalLinksEnabled": true,

"appClipApplicationId": "ios.shopify.io.Clip",

"appClipsEnabled": true,

"sharedWebCredentialsEnabled": true,

"__typename": "AppleApplication"

}

}

]

}

}


---
*Content truncated at "Updates" section*