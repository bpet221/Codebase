---
title: "marketingActivityUpsertExternal"
description: "Shopify GraphQL Admin API documentation for marketingactivityupsertexternal"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal"
extraction_method: "jina"
sections: ['Discounts and marketing', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: marketingActivityUpsertExternal - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal

Markdown Content:
marketingActivityUpsertExternal - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#main-content)

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

[Anchor to marketingActivityUpsertExternal](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#top)
marketing Activity Upsert External
==================================

mutation

Requires `write_marketing_events` access scope.

Creates a new external marketing activity or updates an existing one. When optional fields are absent or null, associated information will be removed from an existing marketing activity.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#arguments-input)input

•[Marketing Activity Upsert External Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput)

required

The input field for creating or updating an external marketing activity.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to MarketingActivityUpsertExternalPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#returns)Marketing Activity Upsert External Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to marketingActivity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#returns-marketingActivity)marketing Activity

•[Marketing Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

The external marketing activity that was created or updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingactivityupsertexternal#returns-userErrors)user Errors

•[[Marketing Activity User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Upsert (create or update) an external marketing activity

#### Query

```graphql
mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
  marketingActivityUpsertExternal(input: $input) {
    marketingActivity {
      id
    }
  }
}
``` #### Variables

```json
{
  "input": {
    "remoteId": "A unique identifier",
    "title": "New Title",
    "remoteUrl": "https://example.com",
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
"query": "mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) { marketingActivityUpsertExternal(input: $input) { marketingActivity { id } } }",
 "variables": {
    "input": {
      "remoteId": "A unique identifier",
      "title": "New Title",
      "remoteUrl": "https://example.com",
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
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }`,
  {
    variables: {
        "input": {
            "remoteId": "A unique identifier",
            "title": "New Title",
            "remoteUrl": "https://example.com",
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
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }
QUERY

variables = {
  "input": {
    "remoteId": "A unique identifier",
    "title": "New Title",
    "remoteUrl": "https://example.com",
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
    "query": `mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
      marketingActivityUpsertExternal(input: $input) {
        marketingActivity {
          id
        }
      }
    }`,
    "variables": {
        "input": {
            "remoteId": "A unique identifier",
            "title": "New Title",
            "remoteUrl": "https://example.com",
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
  "marketingActivityUpsertExternal": {
    "marketingActivity": {
      "id": "gid://shopify/MarketingActivity/1063897336"
    }
  }
}
``` 
*   ### marketingActivityUpsertExternal reference

Examples
--------

Upsert (create or update) an external marketing activity

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20marketingActivityUpsertExternal(%24input%3A%20MarketingActivityUpsertExternalInput!)%20%7B%0A%20%20marketingActivityUpsertExternal(input%3A%20%24input)%20%7B%0A%20%20%20%20marketingActivity%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22remoteId%22%3A%20%22A%20unique%20identifier%22%2C%0A%20%20%20%20%22title%22%3A%20%22New%20Title%22%2C%0A%20%20%20%20%22remoteUrl%22%3A%20%22https%3A%2F%2Fexample.com%22%2C%0A%20%20%20%20%22status%22%3A%20%22ACTIVE%22%2C%0A%20%20%20%20%22utm%22%3A%20%7B%0A%20%20%20%20%20%20%22source%22%3A%20%22email%22%2C%0A%20%20%20%20%20%20%22medium%22%3A%20%22newsletter%22%2C%0A%20%20%20%20%20%20%22campaign%22%3A%20%22external-campaign%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22tactic%22%3A%20%22NEWSLETTER%22%2C%0A%20%20%20%20%22marketingChannelType%22%3A%20%22EMAIL%22%0A%20%20%7D%0A%7D)Copy

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

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {

 marketingActivityUpsertExternal(input: $input) {

 marketingActivity {

 id

 }

 }

 }`,

{

variables:{

"input":{

"remoteId":"A unique identifier",

"title":"New Title",

"remoteUrl":"https://example.com",

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
mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
  marketingActivityUpsertExternal(input: $input) {
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
"query": "mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) { marketingActivityUpsertExternal(input: $input) { marketingActivity { id } } }",
 "variables": {
    "input": {
      "remoteId": "A unique identifier",
      "title": "New Title",
      "remoteUrl": "https://example.com",
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
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }`,
  {
    variables: {
        "input": {
            "remoteId": "A unique identifier",
            "title": "New Title",
            "remoteUrl": "https://example.com",
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
    "query": `mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
      marketingActivityUpsertExternal(input: $input) {
        marketingActivity {
          id
        }
      }
    }`,
    "variables": {
        "input": {
            "remoteId": "A unique identifier",
            "title": "New Title",
            "remoteUrl": "https://example.com",
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
  mutation marketingActivityUpsertExternal($input: MarketingActivityUpsertExternalInput!) {
    marketingActivityUpsertExternal(input: $input) {
      marketingActivity {
        id
      }
    }
  }
QUERY

variables = {
  "input": {
    "remoteId": "A unique identifier",
    "title": "New Title",
    "remoteUrl": "https://example.com",
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

›

⌄

⌄

⌄

{

"input": {

"remoteId": "A unique identifier",

"title": "New Title",

"remoteUrl": "https://example.com",

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

"marketingActivityUpsertExternal": {

"marketingActivity": {

"id": "gid://shopify/MarketingActivity/1063897336"

}

}

}


---
*Content truncated at "Updates" section*