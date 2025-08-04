---
title: "disputeEvidenceUpdate"
description: "Shopify GraphQL Admin API documentation for disputeevidenceupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate"
extraction_method: "jina"
sections: ['Shopify Payments', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: disputeEvidenceUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate

Markdown Content:
disputeEvidenceUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#main-content)

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
*   
Shopify Payments

    *   Queries   
    *   
Mutations

        *   [dispute Evidence Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate)
        *   [shopify Payments Payout Alternate Currency Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/shopifypaymentspayoutalternatecurrencycreate)

    *   Objects   

*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to disputeEvidenceUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#top)
dispute Evidence Update
=======================

mutation

Requires `write_shopify_payments_dispute_evidences` access scope. Also: The user must have `manage_orders_information` permission.

Updates a dispute evidence.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the dispute evidence to be updated.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#arguments-input)input

•[Shopify Payments Dispute Evidence Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShopifyPaymentsDisputeEvidenceUpdateInput)

required

The updated properties for a dispute evidence.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to DisputeEvidenceUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#returns)Dispute Evidence Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to disputeEvidence](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#returns-disputeEvidence)dispute Evidence

•[Shopify Payments Dispute Evidence](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEvidence)

The updated dispute evidence.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/disputeevidenceupdate#returns-userErrors)user Errors

•[[Dispute Evidence Update User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DisputeEvidenceUpdateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a dispute evidence file

#### Query

```graphql
mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
  disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
    disputeEvidence {
      disputeFileUploads {
        id
      }
      dispute {
        amount {
          amount
          currencyCode
        }
        evidenceDueBy
        evidenceSentOn
        finalizedOn
        id
        initiatedAt
        reasonDetails {
          reason
          networkReasonCode
        }
        status
        type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) { disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) { disputeEvidence { disputeFileUploads { id } dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
  mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
    },
  },
});
``` #### Response

```json
{
  "disputeEvidenceUpdate": {
    "disputeEvidence": {
      "disputeFileUploads": [],
      "dispute": {
        "amount": {
          "amount": "11.5",
          "currencyCode": "USD"
        },
        "evidenceDueBy": "2024-11-20T19:00:00-05:00",
        "evidenceSentOn": null,
        "finalizedOn": null,
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
        "initiatedAt": "2013-05-04T00:00:00Z",
        "reasonDetails": {
          "reason": "FRAUDULENT",
          "networkReasonCode": "4827"
        },
        "status": "NEEDS_RESPONSE",
        "type": "CHARGEBACK"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Updates dispute evidence

#### Query

```graphql
mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
  disputeEvidenceUpdate(id: $id, input: $input) {
    disputeEvidence {
      uncategorizedText
      dispute {
        amount {
          amount
          currencyCode
        }
        evidenceDueBy
        evidenceSentOn
        finalizedOn
        id
        initiatedAt
        reasonDetails {
          reason
          networkReasonCode
        }
        status
        type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "input": {
    "customerFirstName": "Kermit",
    "customerLastName": "The frog",
    "customerEmailAddress": "kermit@example.com",
    "shippingAddress": {
      "address1": "1 Infinite Loop",
      "address2": "Muppet Studio",
      "city": "Cupertino",
      "zip": "95014",
      "country": "US",
      "province": "California"
    },
    "uncategorizedText": "Test uncategorized text",
    "accessActivityLog": "Test access activity log",
    "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
    "cancellationRebuttal": "Test cancellation rebuttal",
    "refundPolicyDisclosure": "Test refund policy disclosure",
    "refundRefusalExplanation": "Test refund refusal explanation"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) { disputeEvidenceUpdate(id: $id, input: $input) { disputeEvidence { uncategorizedText dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "input": {
      "customerFirstName": "Kermit",
      "customerLastName": "The frog",
      "customerEmailAddress": "kermit@example.com",
      "shippingAddress": {
        "address1": "1 Infinite Loop",
        "address2": "Muppet Studio",
        "city": "Cupertino",
        "zip": "95014",
        "country": "US",
        "province": "California"
      },
      "uncategorizedText": "Test uncategorized text",
      "accessActivityLog": "Test access activity log",
      "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
      "cancellationRebuttal": "Test cancellation rebuttal",
      "refundPolicyDisclosure": "Test refund policy disclosure",
      "refundRefusalExplanation": "Test refund refusal explanation"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
    disputeEvidenceUpdate(id: $id, input: $input) {
      disputeEvidence {
        uncategorizedText
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "input": {
            "customerFirstName": "Kermit",
            "customerLastName": "The frog",
            "customerEmailAddress": "kermit@example.com",
            "shippingAddress": {
                "address1": "1 Infinite Loop",
                "address2": "Muppet Studio",
                "city": "Cupertino",
                "zip": "95014",
                "country": "US",
                "province": "California"
            },
            "uncategorizedText": "Test uncategorized text",
            "accessActivityLog": "Test access activity log",
            "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
            "cancellationRebuttal": "Test cancellation rebuttal",
            "refundPolicyDisclosure": "Test refund policy disclosure",
            "refundRefusalExplanation": "Test refund refusal explanation"
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
  mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
    disputeEvidenceUpdate(id: $id, input: $input) {
      disputeEvidence {
        uncategorizedText
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "input": {
    "customerFirstName": "Kermit",
    "customerLastName": "The frog",
    "customerEmailAddress": "kermit@example.com",
    "shippingAddress": {
      "address1": "1 Infinite Loop",
      "address2": "Muppet Studio",
      "city": "Cupertino",
      "zip": "95014",
      "country": "US",
      "province": "California"
    },
    "uncategorizedText": "Test uncategorized text",
    "accessActivityLog": "Test access activity log",
    "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
    "cancellationRebuttal": "Test cancellation rebuttal",
    "refundPolicyDisclosure": "Test refund policy disclosure",
    "refundRefusalExplanation": "Test refund refusal explanation"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ShopifyPaymentsDisputeEvidenceUpdate($id: ID!, $input: ShopifyPaymentsDisputeEvidenceUpdateInput!) {
      disputeEvidenceUpdate(id: $id, input: $input) {
        disputeEvidence {
          uncategorizedText
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "input": {
            "customerFirstName": "Kermit",
            "customerLastName": "The frog",
            "customerEmailAddress": "kermit@example.com",
            "shippingAddress": {
                "address1": "1 Infinite Loop",
                "address2": "Muppet Studio",
                "city": "Cupertino",
                "zip": "95014",
                "country": "US",
                "province": "California"
            },
            "uncategorizedText": "Test uncategorized text",
            "accessActivityLog": "Test access activity log",
            "cancellationPolicyDisclosure": "Test cancellation policy disclosure",
            "cancellationRebuttal": "Test cancellation rebuttal",
            "refundPolicyDisclosure": "Test refund policy disclosure",
            "refundRefusalExplanation": "Test refund refusal explanation"
        }
    },
  },
});
``` #### Response

```json
{
  "disputeEvidenceUpdate": {
    "disputeEvidence": {
      "uncategorizedText": "Test uncategorized text",
      "dispute": {
        "amount": {
          "amount": "11.5",
          "currencyCode": "USD"
        },
        "evidenceDueBy": "2024-11-20T19:00:00-05:00",
        "evidenceSentOn": null,
        "finalizedOn": null,
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
        "initiatedAt": "2013-05-04T00:00:00Z",
        "reasonDetails": {
          "reason": "FRAUDULENT",
          "networkReasonCode": "4827"
        },
        "status": "NEEDS_RESPONSE",
        "type": "CHARGEBACK"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Upload a file to a dispute

#### Query

```graphql
mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
  disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
    disputeEvidence {
      disputeFileUploads {
        id
      }
      dispute {
        amount {
          amount
          currencyCode
        }
        evidenceDueBy
        evidenceSentOn
        finalizedOn
        id
        initiatedAt
        reasonDetails {
          reason
          networkReasonCode
        }
        status
        type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) { disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) { disputeEvidence { disputeFileUploads { id } dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
  mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ShopifyPaymentsDisputeFileUpload($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
    },
  },
});
``` #### Response

```json
{
  "disputeEvidenceUpdate": {
    "disputeEvidence": {
      "disputeFileUploads": [
        {
          "id": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
        }
      ],
      "dispute": {
        "amount": {
          "amount": "11.5",
          "currencyCode": "USD"
        },
        "evidenceDueBy": "2024-11-20T19:00:00-05:00",
        "evidenceSentOn": null,
        "finalizedOn": null,
        "id": "gid://shopify/ShopifyPaymentsDispute/598735659",
        "initiatedAt": "2013-05-04T00:00:00Z",
        "reasonDetails": {
          "reason": "FRAUDULENT",
          "networkReasonCode": "4827"
        },
        "status": "NEEDS_RESPONSE",
        "type": "CHARGEBACK"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### disputeEvidenceUpdate reference

Examples
--------

Delete a dispute evidence file

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ShopifyPaymentsDisputeFileUploadDestroy(%24id%3A%20ID!%2C%20%24fileId%3A%20ID!)%20%7B%0A%20%20disputeEvidenceUpdate(id%3A%20%24id%2C%20input%3A%20%7BuncategorizedFile%3A%20%7Bid%3A%20%24fileId%2C%20destroy%3A%20true%7D%7D)%20%7B%0A%20%20%20%20disputeEvidence%20%7B%0A%20%20%20%20%20%20disputeFileUploads%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20dispute%20%7B%0A%20%20%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20evidenceDueBy%0A%20%20%20%20%20%20%20%20evidenceSentOn%0A%20%20%20%20%20%20%20%20finalizedOn%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20initiatedAt%0A%20%20%20%20%20%20%20%20reasonDetails%20%7B%0A%20%20%20%20%20%20%20%20%20%20reason%0A%20%20%20%20%20%20%20%20%20%20networkReasonCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FShopifyPaymentsDisputeEvidence%2F819974671%22%2C%0A%20%20%22fileId%22%3A%20%22gid%3A%2F%2Fshopify%2FShopifyPaymentsDisputeFileUpload%2F567271523%22%0A%7D)Copy

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

39

40

41

42

43

›

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {

 disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {

 disputeEvidence {

 disputeFileUploads {

 id

 }

 dispute {

 amount {

 amount

 currencyCode

 }

 evidenceDueBy

 evidenceSentOn

 finalizedOn

 id

 initiatedAt

 reasonDetails {

 reason

 networkReasonCode

 }

 status

 type

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

"id":"gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",

"fileId":"gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"

},

},

);

const data=await response.json();

```
mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
  disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
    disputeEvidence {
      disputeFileUploads {
        id
      }
      dispute {
        amount {
          amount
          currencyCode
        }
        evidenceDueBy
        evidenceSentOn
        finalizedOn
        id
        initiatedAt
        reasonDetails {
          reason
          networkReasonCode
        }
        status
        type
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
"query": "mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) { disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) { disputeEvidence { disputeFileUploads { id } dispute { amount { amount currencyCode } evidenceDueBy evidenceSentOn finalizedOn id initiatedAt reasonDetails { reason networkReasonCode } status type } } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
    "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
      disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
        disputeEvidence {
          disputeFileUploads {
            id
          }
          dispute {
            amount {
              amount
              currencyCode
            }
            evidenceDueBy
            evidenceSentOn
            finalizedOn
            id
            initiatedAt
            reasonDetails {
              reason
              networkReasonCode
            }
            status
            type
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
        "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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
  mutation ShopifyPaymentsDisputeFileUploadDestroy($id: ID!, $fileId: ID!) {
    disputeEvidenceUpdate(id: $id, input: {uncategorizedFile: {id: $fileId, destroy: true}}) {
      disputeEvidence {
        disputeFileUploads {
          id
        }
        dispute {
          amount {
            amount
            currencyCode
          }
          evidenceDueBy
          evidenceSentOn
          finalizedOn
          id
          initiatedAt
          reasonDetails {
            reason
            networkReasonCode
          }
          status
          type
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
  "id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",
  "fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"
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

›

⌄

{

"id": "gid://shopify/ShopifyPaymentsDisputeEvidence/819974671",

"fileId": "gid://shopify/ShopifyPaymentsDisputeFileUpload/567271523"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"disputeEvidenceUpdate": {

"disputeEvidence": {

"disputeFileUploads": [],

"dispute": {

"amount": {

"amount": "11.5",

"currencyCode": "USD"

},

"evidenceDueBy": "2024-11-20T19:00:00-05:00",

"evidenceSentOn": null,

"finalizedOn": null,

"id": "gid://shopify/ShopifyPaymentsDispute/598735659",

"initiatedAt": "2013-05-04T00:00:00Z",

"reasonDetails": {

"reason": "FRAUDULENT",

"networkReasonCode": "4827"

},

"status": "NEEDS_RESPONSE",

"type": "CHARGEBACK"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*