---
title: "Overview"
description: "Shopify GraphQL Admin API documentation for overview"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest"
extraction_method: "jina"
sections: ['Overview', 'General']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: GraphQL Admin API reference

URL Source: https://shopify.dev/docs/api/admin-graphql/latest

Markdown Content:
GraphQL Admin API reference

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest#main-content)

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

GraphQL Admin API reference
===========================

The Admin API lets you build apps and integrations that extend and enhance the Shopify admin.

This page will help you get up and running with Shopify’s GraphQL API.

Choose a version: 

2025-07 latest

[Anchor to Client libraries](https://shopify.dev/docs/api/admin-graphql/latest#client-libraries)Client libraries
----------------------------------------------------------------------------------------------------------------

Use Shopify’s officially supported libraries to build fast, reliable apps with the programming languages and frameworks you already know.

![Image 3](https://shopify.dev/images/logos/CURL.svg)![Image 4](https://shopify.dev/images/logos/CURL-dark.svg)

cURL
Use the [curl utility](https://curl.se/) to make API queries directly from the command line.

![Image 5](https://shopify.dev/images/logos/Remix.svg)![Image 6](https://shopify.dev/images/logos/Remix-dark.svg)

 Remix
The official package for Remix applications, with full TypeScript support.

*   [Docs](https://shopify.dev/docs/api/shopify-app-remix)
*   [npm package](https://www.npmjs.com/package/@shopify/shopify-app-remix)
*   [GitHub repo](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-app-remix#readme)

![Image 7](https://shopify.dev/images/logos/Nodejs.svg)![Image 8](https://shopify.dev/images/logos/Nodejs-dark.svg)

Node.js
The official client library for Node.js applications, with full TypeScript support. It has no framework dependencies, so it can be used by any Node.js app.

*   [Docs](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api#readme)
*   [npm package](https://www.npmjs.com/package/@shopify/shopify-api)
*   [GitHub repo](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api)

![Image 9](https://shopify.dev/images/logos/Ruby.svg)![Image 10](https://shopify.dev/images/logos/Ruby-dark.svg)

Ruby
The official client library for Ruby apps.

*   [Docs](https://shopify.github.io/shopify-api-ruby/)

*   [Ruby gem](https://rubygems.org/gems/shopify_api)

*   [GitHub repo](https://github.com/Shopify/shopify-api-ruby)

Other
Need a different language? Check the list of [community-supported libraries](https://shopify.dev/apps/tools/api-libraries#third-party-admin-api-libraries).

cURL Remix Node.js Ruby

Copy

9

1

2

3

# cURL is often available by default on macOS and Linux.

#

# See http://curl.se/docs/install.html for more details.

9

1

2

3

npm install--save @shopify/shopify-app-remix

# or

yarn add @shopify/shopify-app-remix

9

1

2

3

npm install--save @shopify/shopify-api

# or

yarn add @shopify/shopify-api

9

1

bundle add shopify_api

```
# cURL is often available by default on macOS and Linux.
#
# See http://curl.se/docs/install.html for more details.
```

```
npm install --save @shopify/shopify-app-remix
# or
yarn add @shopify/shopify-app-remix
```

```
npm install --save @shopify/shopify-api
# or
yarn add @shopify/shopify-api
```
`bundle add shopify_api`

* * *

[Anchor to Authentication](https://shopify.dev/docs/api/admin-graphql/latest#authentication)Authentication
----------------------------------------------------------------------------------------------------------

All GraphQL Admin API queries require a valid Shopify access token.

Public and custom apps created in the Partner Dashboard generate tokens using [OAuth](https://shopify.dev/apps/auth/oauth), and custom apps made in the Shopify admin are [authenticated in the Shopify admin](https://shopify.dev/apps/auth/admin-app-access-tokens).

Include your token as a `X-Shopify-Access-Token` header on all API queries. Using Shopify’s supported [client libraries](https://shopify.dev/apps/tools/api-libraries) can simplify this process.

To keep the platform secure, apps need to request specific [access scopes](https://shopify.dev/api/usage/access-scopes) during the install process. Only request as much data access as your app needs to work.

Learn more about [getting started with authentication](https://shopify.dev/apps/auth) and [building apps](https://shopify.dev/apps/getting-started).

cURL Remix Node.js Ruby

Copy

9

1

2

3

4

5

6

7

curl-X POST\

https://{shop}.myshopify.com/admin/api/2025-07/graphql.json\

-H'Content-Type: application/json'\

-H'X-Shopify-Access-Token: {password}'\

-d'{

"query":"{your_query}"

}'

9

1

const{admin}=shopify.authenticate.admin(request);

9

1

2

const client=new shopify.clients.Graphql({session});

const response=await client.query({data:'{your_query}'});

9

1

2

3

4

5

6

7

8

session=ShopifyAPI::Auth::Session.new(

shop:'your-development-store.myshopify.com',

access_token:access_token,

)

client=ShopifyAPI::Clients::Graphql::Admin.new(

session:session

)

response=client.query(query:'{your_query}')

```
curl -X POST \
  https://{shop}.myshopify.com/admin/api/2025-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {password}' \
  -d '{
  "query": "{your_query}"
  }'
```
`const {admin} = shopify.authenticate.admin(request);`
```
const client = new shopify.clients.Graphql({session});
const response = await client.query({data: '{your_query}'});
```

```
session = ShopifyAPI::Auth::Session.new(
shop: 'your-development-store.myshopify.com',
access_token: access_token,
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
session: session
)
response = client.query(query: '{your_query}')
```

* * *

[Anchor to Endpoints and queries](https://shopify.dev/docs/api/admin-graphql/latest#endpoints-and-queries)Endpoints and queries
-------------------------------------------------------------------------------------------------------------------------------

GraphQL queries are executed by sending `POST` HTTP requests to the endpoint:

`https://{store_name}.myshopify.com/admin/api/2025-07/graphql.json`

Queries begin with one of the objects listed under [QueryRoot](https://shopify.dev/api/admin-graphql/2025-07/objects/queryroot). The QueryRoot is the schema’s entry-point for queries.

Queries are equivalent to making a `GET` request in REST. The example shown is a query to get the ID and title of the first three products.

Learn more about [API usage](https://shopify.dev/api/usage).

* * *

Note

Explore and learn Shopify's Admin API using [GraphiQL Explorer](https://shopify.dev/apps/tools/graphiql-admin-api). To build queries and mutations with shop data, install [Shopify’s GraphiQL app](https://shopify-graphiql-app.shopifycloud.com/).

POST

https://{store_name}.myshopify.com/admin/api/2025-07/graphql.json
-----------------------------------------------------------------

cURL Remix Node.js Ruby

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

# Get the ID and title of the three most recently added products

curl-X POST https://{store_name}.myshopify.com/admin/api/2025-07/graphql.json\

-H'Content-Type: application/json'\

-H'X-Shopify-Access-Token: {access_token}'\

-d'{

"query":"{

products(first:3){

edges{

node{

id

title

}

}

}

}"

}'

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query getProducts {

 products (first: 3) {

 edges {

 node {

 id

 title

 }

 }

 }

 }`

);

const data=await response.json();

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

const queryString=`{

 products (first: 3) {

 edges {

 node {

 id

 title

 }

 }

 }

}`

// `session` is built as part of the OAuth process

const client=new shopify.clients.Graphql({session});

const products=await client.query({

data:queryString,

});

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

query=<<~GQL

 {

 products (first: 3) {

 edges {

 node {

 id

 title

 }

 }

 }

 }

GQL

# session is built as part of the OAuth process

client=ShopifyAPI::Clients::Graphql::Admin.new(

session:session

)

products=client.query(

query:query,

)

```
# Get the ID and title of the three most recently added products
curl -X POST   https://{store_name}.myshopify.com/admin/api/2025-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "{
    products(first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query getProducts {
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`
);

const data = await response.json();
```

```
const queryString = `{
  products (first: 3) {
    edges {
      node {
        id
        title
      }
    }
  }
}`

// `session` is built as part of the OAuth process
const client = new shopify.clients.Graphql({session});
const products = await client.query({
  data: queryString,
});
```

```
query = <<~GQL
  {
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
GQL

# session is built as part of the OAuth process
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)
products = client.query(
  query: query,
)
```

* * *

[Anchor to Rate limits](https://shopify.dev/docs/api/admin-graphql/latest#rate-limits)Rate limits
-------------------------------------------------------------------------------------------------

The GraphQL Admin API is rate-limited using calculated query costs, measured in cost points. Each field returned by a query costs a set number of points. The total cost of a query is the maximum of possible fields selected, so more complex queries cost more to run.

Learn more about [rate limits](https://shopify.dev/api/usage/limits#graphql-admin-api-rate-limits).

{}
Request
-------

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

9

{

products(first: 1){

edges {

node {

title

}

}

}

}

{}
Response
--------

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

{

"data": {

"products": {

"edges": [

{

"node": {

"title": "Hiking backpack"

}

}

]

}

},

"extensions": {

"cost": {

"requestedQueryCost": 3,

"actualQueryCost": 3,

"throttleStatus": {

"maximumAvailable": 1000.0,

"currentlyAvailable": 997,

"restoreRate": 50.0

}

}

}

}

* * *

[Anchor to Status and error codes](https://shopify.dev/docs/api/admin-graphql/latest#status-and-error-codes)Status and error codes
----------------------------------------------------------------------------------------------------------------------------------

All API queries return HTTP status codes that contain more information about the response.

### [Anchor to 200 OK](https://shopify.dev/docs/api/admin-graphql/latest#200-ok)200 OK

GraphQL HTTP status codes are different from REST API status codes. Most importantly, the GraphQL API can return a `200 OK` response code in cases that would typically produce 4xx or 5xx errors in REST.

### [Anchor to Error handling](https://shopify.dev/docs/api/admin-graphql/latest#error-handling)Error handling

The response for the errors object contains additional detail to help you debug your operation.

The response for mutations contains additional detail to help debug your query. To access this, you must request `userErrors`.

#### Properties

errors•array

A list of all errors returned

Show error item properties

errors[n].message•string

Contains details about the error(s).

errors[n].extensions•object

Provides more information about the error(s) including properties and metadata.

Show extensions properties

errors[n].extensions.code•string

Shows error codes common to Shopify. Additional error codes may also be shown.

Show common error codes

THROTTLED

The client has exceeded the [rate limit](https://shopify.dev/docs/api/admin-graphql/latest#rate-limits). Similar to 429 Too Many Requests.

ACCESS_ DENIED

The client doesn’t have correct [authentication](https://shopify.dev/docs/api/admin-graphql/latest#authentication) credentials. Similar to 401 Unauthorized.

SHOP_ INACTIVE

The shop is not active. This can happen when stores repeatedly exceed API rate limits or due to fraud risk.

INTERNAL_ SERVER_ ERROR

Shopify experienced an internal error while processing the request. This error is returned instead of 500 Internal Server Error in most circumstances.

* * *

### [Anchor to 4xx and 5xx status codes](https://shopify.dev/docs/api/admin-graphql/latest#4xx-and-5xx-status-codes)4xx and 5xx status codes

The 4xx and 5xx errors occur infrequently. They are often related to network communications, your account, or an issue with Shopify’s services.

Many errors that would typically return a 4xx or 5xx status code, return an HTTP 200 errors response instead. Refer to the [200 OK section](https://shopify.dev/docs/api/admin-graphql/latest#200-ok) above for details.

{}
Sample 200 error responses
--------------------------

Throttled Internal

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

{

"errors": [

{

"message": "Query cost is 2003, which exceeds the single query max cost limit (1000).

See https://shopify.dev/concepts/about-apis/rate-limits for more information on how the

cost of a query is calculated.

To query larger amounts of data with fewer limits, bulk operations should be used instead.

See https://shopify.dev/tutorials/perform-bulk-operations-with-admin-api for usage details.

",

"extensions": {

"code": "MAX_COST_EXCEEDED",

"cost": 2003,

"maxCost": 1000,

"documentation": "https://shopify.dev/api/usage/limits#rate-limits"

}

}

]

}

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

{

"errors": [

{

"message": "Internal error. Looks like something went wrong on our end.

Request ID: 1 b 355 a 21-7117-44 c 5-8 d 8 b-8948082 f 40 a 8 (include this in support requests).",

"extensions": {

"code": "INTERNAL_SERVER_ERROR",

"requestId": "1b355a21-7117-44c5-8d8b-8948082f40a8"

}

}

]

}

```
{
"errors": [
  {
    "message": "Query cost is 2003, which exceeds the single query max cost limit (1000).

See https://shopify.dev/concepts/about-apis/rate-limits for more information on how the
cost of a query is calculated.

To query larger amounts of data with fewer limits, bulk operations should be used instead.
See https://shopify.dev/tutorials/perform-bulk-operations-with-admin-api for usage details.
",
    "extensions": {
      "code": "MAX_COST_EXCEEDED",
      "cost": 2003,
      "maxCost": 1000,
      "documentation": "https://shopify.dev/api/usage/limits#rate-limits"
    }
  }
]
}
```

```
{
"errors": [
  {
    "message": "Internal error. Looks like something went wrong on our end.
Request ID: 1b355a21-7117-44c5-8d8b-8948082f40a8 (include this in support requests).",
    "extensions": {
      "code": "INTERNAL_SERVER_ERROR",
      "requestId": "1b355a21-7117-44c5-8d8b-8948082f40a8"
    }
  }
]
}
```

### [Anchor to 4xx and 5xx status codes](https://shopify.dev/docs/api/admin-graphql/latest#4xx-and-5xx-status-codes)4xx and 5xx status codes

The 4xx and 5xx errors occur infrequently. They are often related to network communications, your account, or an issue with Shopify’s services.

Many errors that would typically return a 4xx or 5xx status code, return an HTTP 200 errors response instead. Refer to the [200 OK section](https://shopify.dev/docs/api/admin-graphql/latest#200-ok) above for details.

* * *

#### [Anchor to [object Object]](https://shopify.dev/docs/api/admin-graphql/latest#400-bad-request)400 Bad Request

The server will not process the request.

* * *

#### [Anchor to [object Object]](https://shopify.dev/docs/api/admin-graphql/latest#402-payment-required)402 Payment Required

The shop is frozen. The shop owner will need to pay the outstanding balance to [unfreeze](https://help.shopify.com/en/manual/your-account/pause-close-store#unfreeze-your-shopify-store) the shop.

* * *

#### [Anchor to [object Object]](https://shopify.dev/docs/api/admin-graphql/latest#403-forbidden)403 Forbidden

The shop is forbidden. Returned if the store has been marked as fraudulent.

* * *

#### [Anchor to [object Object]](https://shopify.dev/docs/api/admin-graphql/latest#404-not-found)404 Not Found

The resource isn’t available. This is often caused by querying for something that’s been deleted.

* * *

#### [Anchor to [object Object]](https://shopify.dev/docs/api/admin-graphql/latest#423-locked)423 Locked

The shop isn’t available. This can happen when stores repeatedly exceed API rate limits or due to fraud risk.

* * *

#### [Anchor to [object Object]](https://shopify.dev/docs/api/admin-graphql/latest#5xx-errors)5xx Errors

An internal error occurred in Shopify. Check out the [Shopify status page](https://www.shopifystatus.com/) for more information.

* * *

Info

Didn’t find the status code you’re looking for? View the complete list of [API status response and error codes](https://shopify.dev/api/usage/response-codes).

{}
Sample error codes
------------------

400 402 403 404 423 500

9

1

2

3

4

5

HTTP/1.1 400 Bad Request

{

 "errors": {

 "query": "Required parameter missing or invalid"

}

9

1

2

3

4

HTTP/1.1 402 Payment Required

{

 "errors": "This shop's plan does not have access to this feature"

}

9

1

2

3

4

HTTP/1.1 403 Access Denied

{

 "errors": "User does not have access"

}

9

1

2

3

4

HTTP/1.1 404 Not Found

{

 "errors": "Not Found"

}

9

1

2

3

4

HTTP/1.1 423 Locked

{

 "errors": "This shop is unavailable"

}

9

1

2

3

4

HTTP/1.1 500 Internal Server Error

{

 "errors": "An unexpected error occurred"

}

```
HTTP/1.1 400 Bad Request
{
  "errors": {
      "query": "Required parameter missing or invalid"
}
```

```
HTTP/1.1 402 Payment Required
{
  "errors": "This shop's plan does not have access to this feature"
}
```

```
HTTP/1.1 403 Access Denied
{
  "errors": "User does not have access"
}
```

```
HTTP/1.1 404 Not Found
{
  "errors": "Not Found"
}
```

```
HTTP/1.1 423 Locked
{
  "errors": "This shop is unavailable"
}
```

```
HTTP/1.1 500 Internal Server Error
{
  "errors": "An unexpected error occurred"
}
```

* * *

Was this page helpful?

Yes No


---
*Content truncated at "Updates" section*