---
title: "marketingActivityCreateExternal"
description: "Shopify GraphQL Admin API documentation for marketingactivitycreateexternal"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivityCreateExternal - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal

Markdown Content:
marketingActivityCreateExternal - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#main-content)

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
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   Common Objects   
*   Customers   
*   
Discounts And Marketing

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

[Anchor to marketingActivityCreateExternal](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#top)
marketing Activity Create External
==================================

mutation

Requires `write_marketing_events` access scope.

Creates a new external marketing activity.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#arguments-input)input

•[Marketing Activity Create External Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

required

The input field for creating an external marketing activity.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketingActivityCreateExternalPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#returns)Marketing Activity Create External Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#returns-marketingActivity)marketing Activity

•[Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

The external marketing activity that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivitycreateexternal#returns-userErrors)user Errors

•[[Marketing Activity User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create an external marketing activity with a status

#### Description

Starting from API version 2024-01, the status field for creating an external marketing activity will be an optional, modifiable field.

#### Query

```graphql
mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
  marketingActivityCreateExternal(input: $createInput) {
    marketingActivity {
      id
    }
  }
}
``` #### Variables

```json
{
  "createInput": {
    "remoteId": "fake_id",
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "ACTIVE",
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-campaign"
    },
    "tactic": "NEWSLETTER",
    "marketingChannelType": "EMAIL"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) { marketingActivityCreateExternal(input: $createInput) { marketingActivity { id } } }",
 "variables": {
    "createInput": {
      "remoteId": "fake_id",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $createInput) {
      marketingActivity {
        id
      }
    }
  }`,
  {
    variables: {
        "createInput": {
            "remoteId": "fake_id",
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "ACTIVE",
            "utm": {
                "source": "email",
                "medium": "newsletter",
                "campaign": "external-campaign"
            },
            "tactic": "NEWSLETTER",
            "marketingChannelType": "EMAIL"
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
  mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $createInput) {
      marketingActivity {
        id
      }
    }
  }
QUERY

variables = {
  "createInput": {
    "remoteId": "fake_id",
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "ACTIVE",
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-campaign"
    },
    "tactic": "NEWSLETTER",
    "marketingChannelType": "EMAIL"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
      marketingActivityCreateExternal(input: $createInput) {
        marketingActivity {
          id
        }
      }
    }`,
    "variables": {
        "createInput": {
            "remoteId": "fake_id",
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "ACTIVE",
            "utm": {
                "source": "email",
                "medium": "newsletter",
                "campaign": "external-campaign"
            },
            "tactic": "NEWSLETTER",
            "marketingChannelType": "EMAIL"
        }
    },
  },
});
``` #### Response

```json
{
  "marketingActivityCreateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/1063897621"
    }
  }
}
``` 
*   ### Creates a marketing event

#### Query

```graphql
mutation MarketingCreateEvent($input: MarketingActivityCreateExternalInput!) {
  marketingActivityCreateExternal(input: $input) {
    marketingActivity {
      id
      marketingEvent {
        id
        type
        startedAt
        utmCampaign
        utmMedium
        utmSource
        marketingChannelType
      }
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "remoteId": "fake_id",
    "title": "New Marketing Event",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "utm": {
      "source": "source",
      "medium": "medium",
      "campaign": "campaign"
    },
    "marketingChannelType": "SOCIAL",
    "tactic": "POST"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation MarketingCreateEvent($input: MarketingActivityCreateExternalInput!) { marketingActivityCreateExternal(input: $input) { marketingActivity { id marketingEvent { id type startedAt utmCampaign utmMedium utmSource marketingChannelType } } } }",
 "variables": {
    "input": {
      "remoteId": "fake_id",
      "title": "New Marketing Event",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "utm": {
        "source": "source",
        "medium": "medium",
        "campaign": "campaign"
      },
      "marketingChannelType": "SOCIAL",
      "tactic": "POST"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation MarketingCreateEvent($input: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $input) {
      marketingActivity {
        id
        marketingEvent {
          id
          type
          startedAt
          utmCampaign
          utmMedium
          utmSource
          marketingChannelType
        }
      }
    }
  }`,
  {
    variables: {
        "input": {
            "remoteId": "fake_id",
            "title": "New Marketing Event",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "utm": {
                "source": "source",
                "medium": "medium",
                "campaign": "campaign"
            },
            "marketingChannelType": "SOCIAL",
            "tactic": "POST"
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
  mutation MarketingCreateEvent($input: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $input) {
      marketingActivity {
        id
        marketingEvent {
          id
          type
          startedAt
          utmCampaign
          utmMedium
          utmSource
          marketingChannelType
        }
      }
    }
  }
QUERY

variables = {
  "input": {
    "remoteId": "fake_id",
    "title": "New Marketing Event",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "utm": {
      "source": "source",
      "medium": "medium",
      "campaign": "campaign"
    },
    "marketingChannelType": "SOCIAL",
    "tactic": "POST"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation MarketingCreateEvent($input: MarketingActivityCreateExternalInput!) {
      marketingActivityCreateExternal(input: $input) {
        marketingActivity {
          id
          marketingEvent {
            id
            type
            startedAt
            utmCampaign
            utmMedium
            utmSource
            marketingChannelType
          }
        }
      }
    }`,
    "variables": {
        "input": {
            "remoteId": "fake_id",
            "title": "New Marketing Event",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "utm": {
                "source": "source",
                "medium": "medium",
                "campaign": "campaign"
            },
            "marketingChannelType": "SOCIAL",
            "tactic": "POST"
        }
    },
  },
});
``` #### Response

```json
{
  "marketingActivityCreateExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/1063897614",
      "marketingEvent": {
        "id": "gid://shopify/MarketingEvent/1069064164",
        "type": "POST",
        "startedAt": "2024-11-18T22:43:21Z",
        "utmCampaign": "campaign",
        "utmMedium": "medium",
        "utmSource": "source",
        "marketingChannelType": "SOCIAL"
      }
    }
  }
}
``` 
*   ### marketingActivityCreateExternal reference

Examples
--------

Create an external marketing activity with a status

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityCreateExternal(%24createInput%3A%20MarketingActivityCreateExternalInput!)%20%7B%0A%20%20marketingActivityCreateExternal(input%3A%20%24createInput)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22createInput%22%3A%20%7B%0A%20%20%20%20%22remoteId%22%3A%20%22fake_id%22%2C%0A%20%20%20%20%22title%22%3A%20%22New%20Title%22%2C%0A%20%20%20%20%22remoteUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22remotePreviewImageUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22status%22%3A%20%22ACTIVE%22%2C%0A%20%20%20%20%22utm%22%3A%20%7B%0A%20%20%20%20%20%20%22source%22%3A%20%22email%22%2C%0A%20%20%20%20%20%20%22medium%22%3A%20%22newsletter%22%2C%0A%20%20%20%20%20%20%22campaign%22%3A%20%22external-campaign%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22tactic%22%3A%20%22NEWSLETTER%22%2C%0A%20%20%20%20%22marketingChannelType%22%3A%20%22EMAIL%22%0A%20%20%7D%0A%7D)Copy

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

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {

 marketingActivityCreateExternal(input: $createInput) {

 marketingActivity {

 id

 }

 }

 }`,

{

variables:{

"createInput":{

"remoteId":"fake_id",

"title":"New Title",

"remoteUrl":"https://example.com",

"remotePreviewImageUrl":"https://example.com",

"status":"ACTIVE",

"utm":{

"source":"email",

"medium":"newsletter",

"campaign":"external-campaign"

},

"tactic":"NEWSLETTER",

"marketingChannelType":"EMAIL"

}

},

},

);

const data=await response.json();

```
mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
  marketingActivityCreateExternal(input: $createInput) {
    marketingActivity {
      id
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
"query": "mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) { marketingActivityCreateExternal(input: $createInput) { marketingActivity { id } } }",
 "variables": {
    "createInput": {
      "remoteId": "fake_id",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $createInput) {
      marketingActivity {
        id
      }
    }
  }`,
  {
    variables: {
        "createInput": {
            "remoteId": "fake_id",
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "ACTIVE",
            "utm": {
                "source": "email",
                "medium": "newsletter",
                "campaign": "external-campaign"
            },
            "tactic": "NEWSLETTER",
            "marketingChannelType": "EMAIL"
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
    "query": `mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
      marketingActivityCreateExternal(input: $createInput) {
        marketingActivity {
          id
        }
      }
    }`,
    "variables": {
        "createInput": {
            "remoteId": "fake_id",
            "title": "New Title",
            "remoteUrl": "https://example.com",
            "remotePreviewImageUrl": "https://example.com",
            "status": "ACTIVE",
            "utm": {
                "source": "email",
                "medium": "newsletter",
                "campaign": "external-campaign"
            },
            "tactic": "NEWSLETTER",
            "marketingChannelType": "EMAIL"
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
  mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $createInput) {
      marketingActivity {
        id
      }
    }
  }
QUERY

variables = {
  "createInput": {
    "remoteId": "fake_id",
    "title": "New Title",
    "remoteUrl": "https://example.com",
    "remotePreviewImageUrl": "https://example.com",
    "status": "ACTIVE",
    "utm": {
      "source": "email",
      "medium": "newsletter",
      "campaign": "external-campaign"
    },
    "tactic": "NEWSLETTER",
    "marketingChannelType": "EMAIL"
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

13

14

15

16

›

⌄

⌄

⌄

{

"createInput": {

"remoteId": "fake_id",

"title": "New Title",

"remoteUrl": "https://example.com",

"remotePreviewImageUrl": "https://example.com",

"status": "ACTIVE",

"utm": {

"source": "email",

"medium": "newsletter",

"campaign": "external-campaign"

},

"tactic": "NEWSLETTER",

"marketingChannelType": "EMAIL"

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

›

⌄

⌄

⌄

{

"marketingActivityCreateExternal": {

"marketingActivity": {

"id": "gid://shopify/MarketingActivity/1063897621"

}

}

}


---
*Content truncated at "Updates" section*