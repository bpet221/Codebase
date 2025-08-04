---
title: "currentAppInstallation"
description: "Shopify GraphQL Admin API documentation for currentappinstallation"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation"
extraction_method: "jina"
sections: ['Apps', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: currentAppInstallation - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation

Markdown Content:
currentAppInstallation - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation#main-content)

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

[Anchor to currentAppInstallation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation#top)
current App Installation
========================

query

Return the AppInstallation for the currently authenticated App.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to AppInstallation](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentappinstallation#returns-AppInstallation)App Installation

•[App Installation!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

Represents an installed application on a shop.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get a list of access scopes

#### Query

```graphql
query AccessScopeList {
  currentAppInstallation {
    accessScopes {
      handle
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
"query": "query AccessScopeList { currentAppInstallation { accessScopes { handle } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
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
  query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
      }
    }
  }`,
});
``` #### Response

```json
{
  "currentAppInstallation": {
    "accessScopes": [
      {
        "handle": "read_all_orders"
      },
      {
        "handle": "read_all_subscription_contracts"
      },
      {
        "handle": "read_analytics_overviews"
      },
      {
        "handle": "read_billing"
      },
      {
        "handle": "read_checkouts"
      },
      {
        "handle": "read_discovery"
      },
      {
        "handle": "read_discovery_synonym_groups"
      },
      {
        "handle": "read_payment_settings"
      },
      {
        "handle": "read_subscription_plans"
      },
      {
        "handle": "read_users"
      },
      {
        "handle": "read_customer_merge"
      },
      {
        "handle": "write_admin_shop_settings"
      },
      {
        "handle": "write_analytics_overviews"
      },
      {
        "handle": "write_apps"
      },
      {
        "handle": "write_brand"
      },
      {
        "handle": "write_brand_settings"
      },
      {
        "handle": "write_content"
      },
      {
        "handle": "write_customer_data_redaction_requests"
      },
      {
        "handle": "write_customer_payment_methods"
      },
      {
        "handle": "write_customers"
      },
      {
        "handle": "write_discounts"
      },
      {
        "handle": "write_discovery"
      },
      {
        "handle": "write_discovery_synonym_groups"
      },
      {
        "handle": "write_draft_orders"
      },
      {
        "handle": "write_files"
      },
      {
        "handle": "write_fulfillments"
      },
      {
        "handle": "write_gift_cards"
      },
      {
        "handle": "write_home"
      },
      {
        "handle": "write_inventory"
      },
      {
        "handle": "write_locations"
      },
      {
        "handle": "write_marketing_events"
      },
      {
        "handle": "write_media_processing"
      },
      {
        "handle": "write_merchant_managed_fulfillment_orders"
      },
      {
        "handle": "write_metaobjects"
      },
      {
        "handle": "write_metaobject_definitions"
      },
      {
        "handle": "write_notifications"
      },
      {
        "handle": "write_online_store"
      },
      {
        "handle": "write_online_store_pages"
      },
      {
        "handle": "write_online_store_navigation"
      },
      {
        "handle": "write_order_edits"
      },
      {
        "handle": "write_orders"
      },
      {
        "handle": "write_order_refunds"
      },
      {
        "handle": "write_payment_mandate"
      },
      {
        "handle": "write_price_rules"
      },
      {
        "handle": "write_products"
      },
      {
        "handle": "write_publications"
      },
      {
        "handle": "write_reports"
      },
      {
        "handle": "write_script_tags"
      },
      {
        "handle": "write_shipping"
      },
      {
        "handle": "write_themes"
      },
      {
        "handle": "write_third_party_fulfillment_orders"
      },
      {
        "handle": "write_customer_merge"
      },
      {
        "handle": "write_companies"
      },
      {
        "handle": "read_analytics"
      },
      {
        "handle": "read_admin_shop_settings"
      },
      {
        "handle": "read_apps"
      },
      {
        "handle": "read_brand"
      },
      {
        "handle": "read_brand_settings"
      },
      {
        "handle": "read_content"
      },
      {
        "handle": "read_customer_data_redaction_requests"
      },
      {
        "handle": "read_customer_payment_methods"
      },
      {
        "handle": "read_customers"
      },
      {
        "handle": "read_discounts"
      },
      {
        "handle": "read_draft_orders"
      },
      {
        "handle": "read_files"
      },
      {
        "handle": "read_fulfillments"
      },
      {
        "handle": "read_gift_cards"
      },
      {
        "handle": "read_home"
      },
      {
        "handle": "read_inventory"
      },
      {
        "handle": "read_locations"
      },
      {
        "handle": "read_marketing_events"
      },
      {
        "handle": "read_media_processing"
      },
      {
        "handle": "read_merchant_managed_fulfillment_orders"
      },
      {
        "handle": "read_metaobjects"
      },
      {
        "handle": "read_metaobject_definitions"
      },
      {
        "handle": "read_notifications"
      },
      {
        "handle": "read_online_store"
      },
      {
        "handle": "read_online_store_pages"
      },
      {
        "handle": "read_online_store_navigation"
      },
      {
        "handle": "read_order_edits"
      },
      {
        "handle": "read_orders"
      },
      {
        "handle": "read_payment_mandate"
      },
      {
        "handle": "read_price_rules"
      },
      {
        "handle": "read_products"
      },
      {
        "handle": "read_publications"
      },
      {
        "handle": "read_reports"
      },
      {
        "handle": "read_script_tags"
      },
      {
        "handle": "read_shipping"
      },
      {
        "handle": "read_themes"
      },
      {
        "handle": "read_third_party_fulfillment_orders"
      },
      {
        "handle": "read_companies"
      }
    ]
  }
}
``` 
*   ### Retrieves a list of application charges

#### Query

```graphql
query {
  currentAppInstallation {
    oneTimePurchases(first: 10) {
      edges {
        node {
          createdAt
          id
          name
          price {
            amount
            currencyCode
          }
          status
          test
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
"query": "query { currentAppInstallation { oneTimePurchases(first: 10) { edges { node { createdAt id name price { amount currencyCode } status test } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    currentAppInstallation {
      oneTimePurchases(first: 10) {
        edges {
          node {
            createdAt
            id
            name
            price {
              amount
              currencyCode
            }
            status
            test
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
  query {
    currentAppInstallation {
      oneTimePurchases(first: 10) {
        edges {
          node {
            createdAt
            id
            name
            price {
              amount
              currencyCode
            }
            status
            test
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
  data: `query {
    currentAppInstallation {
      oneTimePurchases(first: 10) {
        edges {
          node {
            createdAt
            id
            name
            price {
              amount
              currencyCode
            }
            status
            test
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "currentAppInstallation": {
    "oneTimePurchases": {
      "edges": []
    }
  }
}
``` 
*   ### Retrieves a list of recurring application charges

#### Query

```graphql
query GetRecurringApplicationCharges {
  currentAppInstallation {
    activeSubscriptions {
      id
      name
      status
      lineItems {
        id
        plan {
          pricingDetails {
            __typename
          }
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
"query": "query GetRecurringApplicationCharges { currentAppInstallation { activeSubscriptions { id name status lineItems { id plan { pricingDetails { __typename } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query GetRecurringApplicationCharges {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        status
        lineItems {
          id
          plan {
            pricingDetails {
              __typename
            }
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
  query GetRecurringApplicationCharges {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        status
        lineItems {
          id
          plan {
            pricingDetails {
              __typename
            }
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
  data: `query GetRecurringApplicationCharges {
    currentAppInstallation {
      activeSubscriptions {
        id
        name
        status
        lineItems {
          id
          plan {
            pricingDetails {
              __typename
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "currentAppInstallation": {
    "activeSubscriptions": []
  }
}
``` 

Examples
--------

Get a list of access scopes

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20AccessScopeList%20%7B%0A%20%20currentAppInstallation%20%7B%0A%20%20%20%20accessScopes%20%7B%0A%20%20%20%20%20%20handle%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query AccessScopeList {

 currentAppInstallation {

 accessScopes {

 handle

 }

 }

 }`,

);

const data=await response.json();

```
query AccessScopeList {
  currentAppInstallation {
    accessScopes {
      handle
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
"query": "query AccessScopeList { currentAppInstallation { accessScopes { handle } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
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
  query AccessScopeList {
    currentAppInstallation {
      accessScopes {
        handle
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

999

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

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"currentAppInstallation": {

"accessScopes": [

{

"handle": "read_all_orders"

},

{

"handle": "read_all_subscription_contracts"

},

{

"handle": "read_analytics_overviews"

},

{

"handle": "read_billing"

},

{

"handle": "read_checkouts"

},

{

"handle": "read_discovery"

},

{

"handle": "read_discovery_synonym_groups"

},

{

"handle": "read_payment_settings"

},

{

"handle": "read_subscription_plans"

},

{

"handle": "read_users"

},

{

"handle": "read_customer_merge"

},


---
*Content truncated at "Updates" section*