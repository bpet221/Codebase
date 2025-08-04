---
title: "customerMergeJobStatus"
description: "Shopify GraphQL Admin API documentation for customermergejobstatus"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus"
extraction_method: "jina"
sections: ['Common objects', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: customerMergeJobStatus - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus

Markdown Content:
customerMergeJobStatus - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus#main-content)

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
*   
Common objects

    *   
Queries

        *   [abandoned Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckouts)
        *   [abandoned Checkouts Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedcheckoutscount)
        *   [abandonment By Abandoned Checkout Id](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonmentbyabandonedcheckoutid)
        *   [article Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/articletags)
        *   [channel](https://shopify.dev/docs/api/admin-graphql/latest/queries/channel)
        *   [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)
        *   [checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofile)
        *   [checkout Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutprofiles)
        *   [current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentstaffmember)
        *   [customer Merge Job Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus)
        *   [customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerpaymentmethod)
        *   [domain](https://shopify.dev/docs/api/admin-graphql/latest/queries/domain)
        *   [finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeappaccesspolicy)
        *   [fulfillment Constraint Rules](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentconstraintrules)
        *   [gift Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcard)
        *   [gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardconfiguration)
        *   [gift Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcards)
        *   [gift Cards Count](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftcardscount)
        *   [job](https://shopify.dev/docs/api/admin-graphql/latest/queries/job)
        *   [node](https://shopify.dev/docs/api/admin-graphql/latest/queries/node)
        *   [nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/nodes)
        *   [order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderpaymentstatus)
        *   [payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomization)
        *   [payment Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentcustomizations)
        *   [payment Terms Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymenttermstemplates)
        *   [product Feed](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeed)
        *   [product Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productfeeds)
        *   [public Api Versions](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicapiversions)
        *   [shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunction)
        *   [shopify Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyfunctions)
        *   [shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipt)
        *   [shop Pay Payment Request Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoppaypaymentrequestreceipts)
        *   [staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmember)
        *   [staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffmembers)
        *   [store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/queries/storecreditaccount)
        *   [validation](https://shopify.dev/docs/api/admin-graphql/latest/queries/validation)
        *   [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

    *   Mutations   
    *   Objects   

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

[Anchor to customerMergeJobStatus](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus#top)
customer Merge Job Status
=========================

query

Requires `read_customer_merge` access scope.

Returns the status of a customer merge request job.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus#arguments)
Arguments
---------

[Anchor to jobId](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus#arguments-jobId)job Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the job performing the customer merge request.

* * *

Was this section helpful?

Yes No

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to CustomerMergeRequest](https://shopify.dev/docs/api/admin-graphql/latest/queries/customermergejobstatus#returns-CustomerMergeRequest)Customer Merge Request

•[Customer Merge Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest)

A merge request for merging two customers.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Get the merge status of a customer merge request

#### Description

Retrieve the merge status of a customer merge request.

#### Query

```graphql
query {
  customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
    jobId
    status
    resultingCustomerId
    customerMergeErrors {
      errorFields
      message
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
"query": "query { customerMergeJobStatus(jobId: \"gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59\") { jobId status resultingCustomerId customerMergeErrors { errorFields message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
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
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
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
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
      }
    }
  }`,
});
``` #### Response

```json
{
  "customerMergeJobStatus": {
    "jobId": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",
    "status": "IN_PROGRESS",
    "resultingCustomerId": "gid://shopify/Customer/544365967",
    "customerMergeErrors": []
  }
}
``` 

Get the merge status of a customer merge request
------------------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20customerMergeJobStatus(jobId%3A%20%22gid%3A%2F%2Fshopify%2FJob%2Fab22429a-ea18-4dad-ac2c-5823288b1e59%22)%20%7B%0A%20%20%20%20jobId%0A%20%20%20%20status%0A%20%20%20%20resultingCustomerId%0A%20%20%20%20customerMergeErrors%20%7B%0A%20%20%20%20%20%20errorFields%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {

 jobId

 status

 resultingCustomerId

 customerMergeErrors {

 errorFields

 message

 }

 }

 }`,

);

const data=await response.json();

```
query {
  customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
    jobId
    status
    resultingCustomerId
    customerMergeErrors {
      errorFields
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
"query": "query { customerMergeJobStatus(jobId: \"gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59\") { jobId status resultingCustomerId customerMergeErrors { errorFields message } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
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
  query {
    customerMergeJobStatus(jobId: "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59") {
      jobId
      status
      resultingCustomerId
      customerMergeErrors {
        errorFields
        message
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

{

"customerMergeJobStatus": {

"jobId": "gid://shopify/Job/ab22429a-ea18-4dad-ac2c-5823288b1e59",

"status": "IN_PROGRESS",

"resultingCustomerId": "gid://shopify/Customer/544365967",

"customerMergeErrors": []

}

}


---
*Content truncated at "Updates" section*