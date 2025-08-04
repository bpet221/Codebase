---
title: "mobilePlatformApplicationCreate"
description: "Shopify GraphQL Admin API documentation for mobileplatformapplicationcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate"
extraction_method: "jina"
sections: ['Apps', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: mobilePlatformApplicationCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate

Markdown Content:
mobilePlatformApplicationCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#main-content)

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
*   
Apps

    *   Queries   
    *   
Mutations

        *   [app Uninstall](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appuninstall)
        *   [mobile Platform Application Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate)
        *   [mobile Platform Application Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationdelete)
        *   [mobile Platform Application Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationupdate)
        *   [publication Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publicationdelete)
        *   [shop Resource Feedback Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopresourcefeedbackcreate)

    *   Objects   

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

[Anchor to mobilePlatformApplicationCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#top)
mobile Platform Application Create
==================================

mutation

Requires `write_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

Create a mobile platform application.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#arguments-input)input

•[Mobile Platform Application Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MobilePlatformApplicationCreateInput)

required

The input to create a mobile platform application.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MobilePlatformApplicationCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#returns)Mobile Platform Application Create Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to mobilePlatformApplication](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#returns-mobilePlatformApplication)mobile Platform Application

•[Mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

Created mobile platform application.

Show union types

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/mobileplatformapplicationcreate#returns-userErrors)user Errors

•[[Mobile Platform Application User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a mobile platform application

#### Query

```graphql
mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
  mobilePlatformApplicationCreate(input: $input) {
    mobilePlatformApplication {
      ... on AppleApplication {
        id
        appId
        universalLinksEnabled
        sharedWebCredentialsEnabled
        appClipsEnabled
        appClipApplicationId
      }
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
    "apple": {
      "appId": "com.apple.package",
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false
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
"query": "mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId } } userErrors { field message } } }",
 "variables": {
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
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
            "apple": {
                "appId": "com.apple.package",
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false
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
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
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
    "apple": {
      "appId": "com.apple.package",
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "apple": {
                "appId": "com.apple.package",
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false
            }
        }
    },
  },
});
``` #### Response

```json
{
  "mobilePlatformApplicationCreate": {
    "mobilePlatformApplication": {
      "id": "gid://shopify/MobilePlatformApplication/1066176023",
      "appId": "com.apple.package",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false,
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app"
    },
    "userErrors": []
  }
}
``` 
*   ### Create an Android Mobile Platform Application

#### Description

Create a Mobile Platform Application for the Android platform.

#### Query

```graphql
mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
  mobilePlatformApplicationCreate(input: $input) {
    mobilePlatformApplication {
      ... on AndroidApplication {
        id
        applicationId
        sha256CertFingerprints
        appLinksEnabled
        __typename
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
  "input": {
    "android": {
      "applicationId": "com.android.package",
      "appLinksEnabled": true,
      "sha256CertFingerprints": [
        "A1:B2:C3:D4"
      ]
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
"query": "mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "android": {
        "applicationId": "com.android.package",
        "appLinksEnabled": true,
        "sha256CertFingerprints": [
          "A1:B2:C3:D4"
        ]
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AndroidApplication {
          id
          applicationId
          sha256CertFingerprints
          appLinksEnabled
          __typename
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
        "input": {
            "android": {
                "applicationId": "com.android.package",
                "appLinksEnabled": true,
                "sha256CertFingerprints": [
                    "A1:B2:C3:D4"
                ]
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
  mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AndroidApplication {
          id
          applicationId
          sha256CertFingerprints
          appLinksEnabled
          __typename
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
  "input": {
    "android": {
      "applicationId": "com.android.package",
      "appLinksEnabled": true,
      "sha256CertFingerprints": [
        "A1:B2:C3:D4"
      ]
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
        mobilePlatformApplication {
          ... on AndroidApplication {
            id
            applicationId
            sha256CertFingerprints
            appLinksEnabled
            __typename
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
        "input": {
            "android": {
                "applicationId": "com.android.package",
                "appLinksEnabled": true,
                "sha256CertFingerprints": [
                    "A1:B2:C3:D4"
                ]
            }
        }
    },
  },
});
``` #### Response

```json
{
  "mobilePlatformApplicationCreate": {
    "mobilePlatformApplication": {
      "id": "gid://shopify/MobilePlatformApplication/1066176024",
      "applicationId": "com.android.package",
      "sha256CertFingerprints": [
        "A1:B2:C3:D4"
      ],
      "appLinksEnabled": true,
      "__typename": "AndroidApplication"
    },
    "userErrors": []
  }
}
``` 
*   ### Create an Apple Mobile Platform Application

#### Description

Create a Mobile Platform Application for the Apple platform.

#### Query

```graphql
mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
  mobilePlatformApplicationCreate(input: $input) {
    mobilePlatformApplication {
      ... on AppleApplication {
        id
        appId
        universalLinksEnabled
        sharedWebCredentialsEnabled
        appClipsEnabled
        appClipApplicationId
        __typename
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
  "input": {
    "apple": {
      "appId": "com.apple.package",
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false
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
"query": "mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId __typename } } userErrors { field message code } } }",
 "variables": {
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
          __typename
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
        "input": {
            "apple": {
                "appId": "com.apple.package",
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false
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
  mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
          __typename
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
  "input": {
    "apple": {
      "appId": "com.apple.package",
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateMobilePlatformApplication($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
            __typename
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
        "input": {
            "apple": {
                "appId": "com.apple.package",
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false
            }
        }
    },
  },
});
``` #### Response

```json
{
  "mobilePlatformApplicationCreate": {
    "mobilePlatformApplication": {
      "id": "gid://shopify/MobilePlatformApplication/1066176022",
      "appId": "com.apple.package",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false,
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app",
      "__typename": "AppleApplication"
    },
    "userErrors": []
  }
}
``` 
*   ### mobilePlatformApplicationCreate reference

Examples
--------

Create a mobile platform application

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20mobilePlatformApplicationCreate(%24input%3A%20MobilePlatformApplicationCreateInput!)%20%7B%0A%20%20mobilePlatformApplicationCreate(input%3A%20%24input)%20%7B%0A%20%20%20%20mobilePlatformApplication%20%7B%0A%20%20%20%20%20%20...%20on%20AppleApplication%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20appId%0A%20%20%20%20%20%20%20%20universalLinksEnabled%0A%20%20%20%20%20%20%20%20sharedWebCredentialsEnabled%0A%20%20%20%20%20%20%20%20appClipsEnabled%0A%20%20%20%20%20%20%20%20appClipApplicationId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22apple%22%3A%20%7B%0A%20%20%20%20%20%20%22appId%22%3A%20%22com.apple.package%22%2C%0A%20%20%20%20%20%20%22appClipsEnabled%22%3A%20true%2C%0A%20%20%20%20%20%20%22appClipApplicationId%22%3A%20%22clip.app%22%2C%0A%20%20%20%20%20%20%22universalLinksEnabled%22%3A%20false%2C%0A%20%20%20%20%20%20%22sharedWebCredentialsEnabled%22%3A%20false%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

37

38

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {

 mobilePlatformApplicationCreate(input: $input) {

 mobilePlatformApplication {

 ... on AppleApplication {

 id

 appId

 universalLinksEnabled

 sharedWebCredentialsEnabled

 appClipsEnabled

 appClipApplicationId

 }

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

"apple":{

"appId":"com.apple.package",

"appClipsEnabled":true,

"appClipApplicationId":"clip.app",

"universalLinksEnabled":false,

"sharedWebCredentialsEnabled":false

}

}

},

},

);

const data=await response.json();

```
mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
  mobilePlatformApplicationCreate(input: $input) {
    mobilePlatformApplication {
      ... on AppleApplication {
        id
        appId
        universalLinksEnabled
        sharedWebCredentialsEnabled
        appClipsEnabled
        appClipApplicationId
      }
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
"query": "mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) { mobilePlatformApplicationCreate(input: $input) { mobilePlatformApplication { ... on AppleApplication { id appId universalLinksEnabled sharedWebCredentialsEnabled appClipsEnabled appClipApplicationId } } userErrors { field message } } }",
 "variables": {
    "input": {
      "apple": {
        "appId": "com.apple.package",
        "appClipsEnabled": true,
        "appClipApplicationId": "clip.app",
        "universalLinksEnabled": false,
        "sharedWebCredentialsEnabled": false
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
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
            "apple": {
                "appId": "com.apple.package",
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false
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
    "query": `mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
      mobilePlatformApplicationCreate(input: $input) {
        mobilePlatformApplication {
          ... on AppleApplication {
            id
            appId
            universalLinksEnabled
            sharedWebCredentialsEnabled
            appClipsEnabled
            appClipApplicationId
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "input": {
            "apple": {
                "appId": "com.apple.package",
                "appClipsEnabled": true,
                "appClipApplicationId": "clip.app",
                "universalLinksEnabled": false,
                "sharedWebCredentialsEnabled": false
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
  mutation mobilePlatformApplicationCreate($input: MobilePlatformApplicationCreateInput!) {
    mobilePlatformApplicationCreate(input: $input) {
      mobilePlatformApplication {
        ... on AppleApplication {
          id
          appId
          universalLinksEnabled
          sharedWebCredentialsEnabled
          appClipsEnabled
          appClipApplicationId
        }
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
    "apple": {
      "appId": "com.apple.package",
      "appClipsEnabled": true,
      "appClipApplicationId": "clip.app",
      "universalLinksEnabled": false,
      "sharedWebCredentialsEnabled": false
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

{

"input": {

"apple": {

"appId": "com.apple.package",

"appClipsEnabled": true,

"appClipApplicationId": "clip.app",

"universalLinksEnabled": false,

"sharedWebCredentialsEnabled": false

}

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

"mobilePlatformApplicationCreate": {

"mobilePlatformApplication": {

"id": "gid://shopify/MobilePlatformApplication/1066176023",

"appId": "com.apple.package",

"universalLinksEnabled": false,

"sharedWebCredentialsEnabled": false,

"appClipsEnabled": true,

"appClipApplicationId": "clip.app"

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*