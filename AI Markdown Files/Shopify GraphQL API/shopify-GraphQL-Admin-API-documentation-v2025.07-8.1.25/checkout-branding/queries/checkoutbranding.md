---
title: "checkoutBranding"
description: "Shopify GraphQL Admin API documentation for checkoutbranding"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding"
extraction_method: "jina"
sections: ['Checkout branding', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: checkoutBranding - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding

Markdown Content:
checkoutBranding - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding#main-content)

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
*   
Checkout Branding

    *   
Queries

        *   [checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding)

    *   Mutations   
    *   Objects   

*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
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

[Anchor to checkoutBranding](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding#top)
checkout Branding
=================

query

Returns the visual customizations for checkout for a given checkout profile.

To learn more about updating checkout branding settings, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation and the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding#arguments)
Arguments
---------

[Anchor to checkoutProfileId](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding#arguments-checkoutProfileId)checkout Profile Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

A globally-unique identifier.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to CheckoutBranding](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutbranding#returns-CheckoutBranding)Checkout Branding

•[Checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding)

The settings of checkout visual customizations.

To learn more about updating checkout branding settings, refer to the [checkoutBrandingUpsert](https://shopify.dev/api/admin-graphql/unstable/mutations/checkoutBrandingUpsert) mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get global colors

#### Description

This example demonstrates how to read the global colors from a checkout profile.

#### Query

```graphql
query GetGlobalColors {
  checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
    designSystem {
      colors {
        global {
          success
          warning
          critical
          info
          brand
          accent
          decorative
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
"query": "query GetGlobalColors { checkoutBranding(checkoutProfileId: \"gid://shopify/CheckoutProfile/235093654\") { designSystem { colors { global { success warning critical info brand accent decorative } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetGlobalColors {
    checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
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
  query GetGlobalColors {
    checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
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
  data: `query GetGlobalColors {
    checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "checkoutBranding": {
    "designSystem": {
      "colors": {
        "global": {
          "success": "#FFFFFF",
          "warning": "#F0F0F0",
          "critical": "#AABBCC",
          "info": "#ABCDAB",
          "brand": "#ABCDAB",
          "accent": "#0F0F0F",
          "decorative": "#1F2928"
        }
      }
    }
  }
}
``` 

Get global colors
-----------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20GetGlobalColors%20%7B%0A%20%20checkoutBranding(checkoutProfileId%3A%20%22gid%3A%2F%2Fshopify%2FCheckoutProfile%2F235093654%22)%20%7B%0A%20%20%20%20designSystem%20%7B%0A%20%20%20%20%20%20colors%20%7B%0A%20%20%20%20%20%20%20%20global%20%7B%0A%20%20%20%20%20%20%20%20%20%20success%0A%20%20%20%20%20%20%20%20%20%20warning%0A%20%20%20%20%20%20%20%20%20%20critical%0A%20%20%20%20%20%20%20%20%20%20info%0A%20%20%20%20%20%20%20%20%20%20brand%0A%20%20%20%20%20%20%20%20%20%20accent%0A%20%20%20%20%20%20%20%20%20%20decorative%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query GetGlobalColors {

 checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {

 designSystem {

 colors {

 global {

 success

 warning

 critical

 info

 brand

 accent

 decorative

 }

 }

 }

 }

 }`,

);

const data=await response.json();

```
query GetGlobalColors {
  checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
    designSystem {
      colors {
        global {
          success
          warning
          critical
          info
          brand
          accent
          decorative
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
"query": "query GetGlobalColors { checkoutBranding(checkoutProfileId: \"gid://shopify/CheckoutProfile/235093654\") { designSystem { colors { global { success warning critical info brand accent decorative } } } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetGlobalColors {
    checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
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
  data: `query GetGlobalColors {
    checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
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
  query GetGlobalColors {
    checkoutBranding(checkoutProfileId: "gid://shopify/CheckoutProfile/235093654") {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
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

›

⌄

⌄

⌄

⌄

⌄

{

"checkoutBranding": {

"designSystem": {

"colors": {

"global": {

"success": "#FFFFFF",

"warning": "#F0F0F0",

"critical": "#AABBCC",

"info": "#ABCDAB",

"brand": "#ABCDAB",

"accent": "#0F0F0F",

"decorative": "#1F2928"

}

}

}

}

}


---
*Content truncated at "Updates" section*