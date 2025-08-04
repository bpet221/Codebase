---
title: "mobilePlatformApplication"
description: "Shopify GraphQL Admin API documentation for mobileplatformapplication"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: mobilePlatformApplication - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication

Markdown Content:
mobilePlatformApplication - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication#main-content)

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

[Anchor to mobilePlatformApplication](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication#top)
mobile Platform Application
===========================

query

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

Return a mobile platform application by its ID.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

ID of the mobile platform app.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication#possible-returns)Possible returns
--------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to MobilePlatformApplication](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobileplatformapplication#returns-MobilePlatformApplication)Mobile Platform Application

•[Mobile Platform Application](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

You can use the `MobilePlatformApplication` resource to enable [shared web credentials](https://developer.apple.com/documentation/security/shared_web_credentials) for Shopify iOS apps, as well as to create [iOS universal link](https://developer.apple.com/ios/universal-links/) or [Android app link](https://developer.android.com/training/app-links/) verification endpoints for merchant Shopify iOS or Android apps. Shared web credentials let iOS users access a native app after logging into the respective website in Safari without re-entering their username and password. If a user changes their credentials in the app, then those changes are reflected in Safari. You must use a custom domain to integrate shared web credentials with Shopify. With each platform's link system, users can tap a link to a shop's website and get seamlessly redirected to a merchant's installed app without going through a browser or manually selecting an app.

For full configuration instructions on iOS shared web credentials, see the [associated domains setup](https://developer.apple.com/documentation/security/password_autofill/setting_up_an_app_s_associated_domains) technical documentation.

For full configuration instructions on iOS universal links or Android App Links, see the respective [iOS universal link](https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content) or [Android app link](https://developer.android.com/training/app-links) technical documentation.

Show union types

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a mobile platform application.

#### Description

This example demonstrates how to fetch a mobile platform application.

#### Query

```graphql
query MobilePlatformApplicationQuery {
  mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
      __typename
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
"query": "query MobilePlatformApplicationQuery { mobilePlatformApplication(id: \"gid://shopify/MobilePlatformApplication/1066176000\") { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } ... on AppleApplication { id appId universalLinksEnabled appClipApplicationId appClipsEnabled __typename } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MobilePlatformApplicationQuery {
    mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
        __typename
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
    mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
        __typename
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
    mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
        __typename
      }
    }
  }`,
});
``` #### Response

```json
{
  "mobilePlatformApplication": {
    "id": "gid://shopify/MobilePlatformApplication/1066176000",
    "applicationId": "androidfake.org.domain.com",
    "sha256CertFingerprints": [
      "A1:B2:C3:D4"
    ],
    "appLinksEnabled": true,
    "__typename": "AndroidApplication"
  }
}
``` 

Get a mobile platform application.
----------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20MobilePlatformApplicationQuery%20%7B%0A%20%20mobilePlatformApplication(id%3A%20%22gid%3A%2F%2Fshopify%2FMobilePlatformApplication%2F1066176000%22)%20%7B%0A%20%20%20%20...%20on%20AndroidApplication%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20applicationId%0A%20%20%20%20%20%20sha256CertFingerprints%0A%20%20%20%20%20%20appLinksEnabled%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%7D%0A%20%20%20%20...%20on%20AppleApplication%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20appId%0A%20%20%20%20%20%20universalLinksEnabled%0A%20%20%20%20%20%20appClipApplicationId%0A%20%20%20%20%20%20appClipsEnabled%0A%20%20%20%20%20%20__typename%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query MobilePlatformApplicationQuery {

 mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {

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

 __typename

 }

 }

 }`,

);

const data=await response.json();

```
query MobilePlatformApplicationQuery {
  mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
      __typename
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
"query": "query MobilePlatformApplicationQuery { mobilePlatformApplication(id: \"gid://shopify/MobilePlatformApplication/1066176000\") { ... on AndroidApplication { id applicationId sha256CertFingerprints appLinksEnabled __typename } ... on AppleApplication { id appId universalLinksEnabled appClipApplicationId appClipsEnabled __typename } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query MobilePlatformApplicationQuery {
    mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
        __typename
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
    mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
        __typename
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
    mobilePlatformApplication(id: "gid://shopify/MobilePlatformApplication/1066176000") {
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
        __typename
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

›

⌄

⌄

⌄

{

"mobilePlatformApplication": {

"id": "gid://shopify/MobilePlatformApplication/1066176000",

"applicationId": "androidfake.org.domain.com",

"sha256CertFingerprints": [

"A1:B2:C3:D4"

],

"appLinksEnabled": true,

"__typename": "AndroidApplication"

}

}


---
*Content truncated at "Updates" section*