---
title: "webPixelCreate"
description: "Shopify GraphQL Admin API documentation for webpixelcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: webPixelCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate

Markdown Content:
webPixelCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#main-content)

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
*   
Discounts and marketing

    *   Queries   
    *   
Mutations

        *   [abandonment Email State Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentemailstateupdate)
        *   [abandonment Update Activities Delivery Statuses](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentupdateactivitiesdeliverystatuses)
        *   [discount Automatic Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticactivate)
        *   [discount Automatic App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappcreate)
        *   [discount Automatic App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticappupdate)
        *   [discount Automatic Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasiccreate)
        *   [discount Automatic Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbasicupdate)
        *   [discount Automatic Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbulkdelete)
        *   [discount Automatic Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgycreate)
        *   [discount Automatic Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticbxgyupdate)
        *   [discount Automatic Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdeactivate)
        *   [discount Automatic Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticdelete)
        *   [discount Automatic Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingcreate)
        *   [discount Automatic Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountautomaticfreeshippingupdate)
        *   [discount Code Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeactivate)
        *   [discount Code App Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappcreate)
        *   [discount Code App Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodeappupdate)
        *   [discount Code Basic Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasiccreate)
        *   [discount Code Basic Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebasicupdate)
        *   [discount Code Bulk Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkactivate)
        *   [discount Code Bulk Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdeactivate)
        *   [discount Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebulkdelete)
        *   [discount Code Bxgy Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgycreate)
        *   [discount Code Bxgy Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodebxgyupdate)
        *   [discount Code Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedeactivate)
        *   [discount Code Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodedelete)
        *   [discount Code Free Shipping Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingcreate)
        *   [discount Code Free Shipping Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcodefreeshippingupdate)
        *   [discount Code Redeem Code Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountcoderedeemcodebulkdelete)
        *   [discount Redeem Code Bulk Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountredeemcodebulkadd)
        *   [event Bridge Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventbridgeserverpixelupdate)
        *   [marketing Activities Delete All External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitiesdeleteallexternal)
        *   [marketing Activity Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreate)
        *   [marketing Activity Create External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal)
        *   [marketing Activity Delete External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitydeleteexternal)
        *   [marketing Activity Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdate)
        *   [marketing Activity Update External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupdateexternal)
        *   [marketing Activity Upsert External](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal)
        *   [marketing Engagement Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementcreate)
        *   [marketing Engagements Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingengagementsdelete)
        *   [pub Sub Server Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubsubserverpixelupdate)
        *   [server Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixelcreate)
        *   [server Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/serverpixeldelete)
        *   [web Pixel Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate)
        *   [web Pixel Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixeldelete)
        *   [web Pixel Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelupdate)

    *   Objects   

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

[Anchor to webPixelCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#top)
web Pixel Create
================

mutation

Requires `write_pixels` access scope. Also: The app requires read_customer_events access scope and user access permission.

Activate a [web pixel extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) by creating a web pixel record on the store where you installed your app.

When you run the `webPixelCreate` mutation, Shopify validates it against the settings definition in `shopify.extension.toml`. If the `settings` input field doesn't match the schema that you defined, then the mutation fails. Learn how to define [web pixel settings](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels#step-2-define-your-web-pixel-settings).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#arguments)
Arguments
---------

[Anchor to webPixel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#arguments-webPixel)web Pixel

•[Web Pixel Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput)

required

The web pixel settings in JSON format.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to WebPixelCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#returns)Web Pixel Create Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#returns-userErrors)user Errors

•[[Errors Web Pixel User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ErrorsWebPixelUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

[Anchor to webPixel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpixelcreate#returns-webPixel)web Pixel

•[Web Pixel](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel)

The created web pixel settings.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a web pixel

#### Description

Create a [web pixel](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) record on the store where you installed your app. The settings must match the schema defined in your extension's `shopify.extension.toml` file.

#### Query

```graphql
mutation webPixelCreate($webPixel: WebPixelInput!) {
  webPixelCreate(webPixel: $webPixel) {
    userErrors {
      field
      message
      code
    }
    webPixel {
      id
      settings
    }
  }
}
``` #### Variables

```json
{
  "webPixel": {
    "settings": {
      "trackingId": "GA-TRACKING-ID-123"
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
"query": "mutation webPixelCreate($webPixel: WebPixelInput!) { webPixelCreate(webPixel: $webPixel) { userErrors { field message code } webPixel { id settings } } }",
 "variables": {
    "webPixel": {
      "settings": {
        "trackingId": "GA-TRACKING-ID-123"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webPixelCreate($webPixel: WebPixelInput!) {
    webPixelCreate(webPixel: $webPixel) {
      userErrors {
        field
        message
        code
      }
      webPixel {
        id
        settings
      }
    }
  }`,
  {
    variables: {
        "webPixel": {
            "settings": {
                "trackingId": "GA-TRACKING-ID-123"
            }
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
  mutation webPixelCreate($webPixel: WebPixelInput!) {
    webPixelCreate(webPixel: $webPixel) {
      userErrors {
        field
        message
        code
      }
      webPixel {
        id
        settings
      }
    }
  }
QUERY

variables = {
  "webPixel": {
    "settings": {
      "trackingId": "GA-TRACKING-ID-123"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webPixelCreate($webPixel: WebPixelInput!) {
      webPixelCreate(webPixel: $webPixel) {
        userErrors {
          field
          message
          code
        }
        webPixel {
          id
          settings
        }
      }
    }`,
    "variables": {
        "webPixel": {
            "settings": {
                "trackingId": "GA-TRACKING-ID-123"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "webPixelCreate": {
    "userErrors": [],
    "webPixel": {
      "id": "gid://shopify/WebPixel/937414752",
      "settings": "{\"trackingId\":\"GA-TRACKING-ID-123\"}"
    }
  }
}
``` 
*   ### Creating a web pixel with invalid settings returns an error

#### Description

This example shows the error response when you try to create a web pixel with invalid settings. If you provide an empty `settings` object, then the mutation returns an error.

#### Query

```graphql
mutation webPixelCreate($webPixel: WebPixelInput!) {
  webPixelCreate(webPixel: $webPixel) {
    userErrors {
      field
      message
      code
    }
    webPixel {
      id
      settings
    }
  }
}
``` #### Variables

```json
{
  "webPixel": {
    "settings": {}
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation webPixelCreate($webPixel: WebPixelInput!) { webPixelCreate(webPixel: $webPixel) { userErrors { field message code } webPixel { id settings } } }",
 "variables": {
    "webPixel": {
      "settings": {}
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webPixelCreate($webPixel: WebPixelInput!) {
    webPixelCreate(webPixel: $webPixel) {
      userErrors {
        field
        message
        code
      }
      webPixel {
        id
        settings
      }
    }
  }`,
  {
    variables: {
        "webPixel": {
            "settings": {}
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
  mutation webPixelCreate($webPixel: WebPixelInput!) {
    webPixelCreate(webPixel: $webPixel) {
      userErrors {
        field
        message
        code
      }
      webPixel {
        id
        settings
      }
    }
  }
QUERY

variables = {
  "webPixel": {
    "settings": {}
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation webPixelCreate($webPixel: WebPixelInput!) {
      webPixelCreate(webPixel: $webPixel) {
        userErrors {
          field
          message
          code
        }
        webPixel {
          id
          settings
        }
      }
    }`,
    "variables": {
        "webPixel": {
            "settings": {}
        }
    },
  },
});
``` #### Response

```json
{
  "webPixelCreate": {
    "userErrors": [
      {
        "field": [
          "webPixel"
        ],
        "message": "Missing keys: trackingId",
        "code": "INVALID_SETTINGS"
      }
    ],
    "webPixel": null
  }
}
``` 
*   ### webPixelCreate reference

Examples
--------

Create a web pixel

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20webPixelCreate(%24webPixel%3A%20WebPixelInput!)%20%7B%0A%20%20webPixelCreate(webPixel%3A%20%24webPixel)%20%7B%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%20%20webPixel%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20settings%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22webPixel%22%3A%20%7B%0A%20%20%20%20%22settings%22%3A%20%7B%0A%20%20%20%20%20%20%22trackingId%22%3A%20%22GA-TRACKING-ID-123%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation webPixelCreate($webPixel: WebPixelInput!) {

 webPixelCreate(webPixel: $webPixel) {

 userErrors {

 field

 message

 code

 }

 webPixel {

 id

 settings

 }

 }

 }`,

{

variables:{

"webPixel":{

"settings":{

"trackingId":"GA-TRACKING-ID-123"

}

}

},

},

);

const data=await response.json();

```
mutation webPixelCreate($webPixel: WebPixelInput!) {
  webPixelCreate(webPixel: $webPixel) {
    userErrors {
      field
      message
      code
    }
    webPixel {
      id
      settings
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
"query": "mutation webPixelCreate($webPixel: WebPixelInput!) { webPixelCreate(webPixel: $webPixel) { userErrors { field message code } webPixel { id settings } } }",
 "variables": {
    "webPixel": {
      "settings": {
        "trackingId": "GA-TRACKING-ID-123"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation webPixelCreate($webPixel: WebPixelInput!) {
    webPixelCreate(webPixel: $webPixel) {
      userErrors {
        field
        message
        code
      }
      webPixel {
        id
        settings
      }
    }
  }`,
  {
    variables: {
        "webPixel": {
            "settings": {
                "trackingId": "GA-TRACKING-ID-123"
            }
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
    "query": `mutation webPixelCreate($webPixel: WebPixelInput!) {
      webPixelCreate(webPixel: $webPixel) {
        userErrors {
          field
          message
          code
        }
        webPixel {
          id
          settings
        }
      }
    }`,
    "variables": {
        "webPixel": {
            "settings": {
                "trackingId": "GA-TRACKING-ID-123"
            }
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
  mutation webPixelCreate($webPixel: WebPixelInput!) {
    webPixelCreate(webPixel: $webPixel) {
      userErrors {
        field
        message
        code
      }
      webPixel {
        id
        settings
      }
    }
  }
QUERY

variables = {
  "webPixel": {
    "settings": {
      "trackingId": "GA-TRACKING-ID-123"
    }
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

⌄

{

"webPixel": {

"settings": {

"trackingId": "GA-TRACKING-ID-123"

}

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

"webPixelCreate": {

"userErrors": [],

"webPixel": {

"id": "gid://shopify/WebPixel/937414752",

"settings": "{\"trackingId\":\"GA-TRACKING-ID-123\"}"

}

}

}


---
*Content truncated at "Updates" section*